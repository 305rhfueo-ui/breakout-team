'use strict';
// 6팀 장중 트리거 — 5분봉에서 "거래량을 실어 피벗과 장중 고점을 넘는 순간"을 찾는다.
//
// 밤 루프(paper-trader) · 세션 재생 · 5분봉 백테스트가 전부 이 파일의 evaluate() 하나를 쓴다.
// 그래야 백테스트에서 잰 것과 실전에서 하는 것이 같다 (2026-09-28: 조건을 두 군데 따로 써서 ADR 조건이 실전에 빠졌었다).
//
// 트리거는 "완성된 5분봉"으로만 판정한다.
//   · 5분마다 도는 루프가 실제로 볼 수 있는 건 완성된 봉뿐이다. 봉 안에서 선을 건드린 순간은 볼 수 없다.
//   · 그래서 조건은 "봉의 종가가 기준선 위"이고, 체결가는 그 봉의 종가(= 루프가 알아챈 시점의 가격)다.
//   · 기준선 = max(피벗, 그 봉 이전까지의 장중 고가). 첫 5분봉이 끝나야 장중 고가가 생기므로 09:35 부터 판정한다.
//     (5분·15분·60분 시가범위 고점을 따로 두지 않는다 — 시간이 지나면서 장중 고가가 그 값들을 차례로 지나간다.)
// 거래량 페이스 = 오늘 그 시각까지의 누적 거래량 ÷ 지난 N일 같은 시각까지의 평균 누적.
//   하루 거래량을 시간 비율로 나누면 안 된다 — 개장 직후에 거래가 몰려 페이스가 두세 배 부풀려진다.

const { round } = require('./util');

const OPEN_HM = '0930';
const hmToMin = (hm) => (+hm.slice(0, 2)) * 60 + (+hm.slice(2, 4));
const minSinceOpen = (hm) => hmToMin(hm) - hmToMin(OPEN_HM);
const endHm = (hm, nmin) => { const m = hmToMin(hm) + nmin; return String(Math.floor(m / 60)).padStart(2, '0') + String(m % 60).padStart(2, '0'); };

function byDate(bars) {
  const m = new Map();
  for (const b of bars) { if (!m.has(b.date)) m.set(b.date, []); m.get(b.date).push(b); }
  for (const v of m.values()) v.sort((a, b) => a.t - b.t);
  return m;
}

// 지난 세션들의 슬롯별 평균 누적 거래량. exclude = 오늘(판정 대상) 날짜.
function volumeProfile(bars, { exclude = null, days = 20, minDays = 5 } = {}) {
  const dates = [...byDate(bars)].filter(([d]) => d !== exclude && (!exclude || d < exclude)).sort((a, b) => (a[0] < b[0] ? 1 : -1)).slice(0, days);
  const full = dates.filter(([, v]) => v.length >= 60);   // 반쪽짜리 세션(조기 폐장·봉 누락)은 평균을 끌어내린다
  if (full.length < minDays) return { ok: false, days: full.length, slots: new Map() };
  const sum = new Map();
  for (const [, v] of full) {
    let cum = 0;
    for (const b of v) { cum += b.v || 0; sum.set(b.hm, (sum.get(b.hm) || 0) + cum); }
  }
  const slots = new Map([...sum].map(([hm, s]) => [hm, s / full.length]));
  return { ok: true, days: full.length, slots };
}

// 아직 만들어지는 중인 마지막 봉을 떼어낸다 (봉 시작 + 간격 > 지금)
function completed(bars, nowMs, nmin = 5) {
  return bars.filter((b) => b.t + nmin * 60000 <= nowMs);
}

// bars: 오늘 세션의 완성된 5분봉(정규장, 오름차순). plan: { pivot, adrPct }. ctx: { ma10, prevClose }.
// 첫 트리거를 찾아 돌려준다. 없으면 마지막 봉 기준의 상태와 부족한 조건.
function evaluate({ bars, plan, profile, rules, ctx = {}, nmin = 5 }) {
  const E = rules.entry, R = rules.risk, slipB = 1 + rules.fill.buySlipPct / 100;
  const out = { fired: false, ticker: plan.ticker, pivot: plan.pivot, bars: bars.length };
  if (!bars.length) return { ...out, why: '오늘 봉 없음' };
  if (!profile || !profile.ok) return { ...out, why: `거래량 프로필 없음 (지난 세션 ${profile ? profile.days : 0}일)` };

  const last = bars[bars.length - 1];
  const adrUsd = (ctx.prevClose || plan.price || last.c) * plan.adrPct / 100;
  let hod = -Infinity, lod = Infinity, cum = 0, status = null, lastIn = null, near = null;
  for (let i = 0; i < bars.length; i++) {
    const b = bars[i];
    const mins = minSinceOpen(b.hm) + nmin;          // 이 봉이 끝난 시각
    const prevHod = hod;
    cum += b.v || 0;
    if (b.h > hod) hod = b.h;
    if (b.l < lod) lod = b.l;
    if (i === 0) continue;                           // 첫 봉은 시가범위를 만들 뿐
    const level = Math.max(plan.pivot, prevHod);
    const avgCum = profile.slots.get(b.hm);
    const pace = avgCum > 0 ? cum / avgCum : null;
    const ext = ctx.ma10 != null && adrUsd > 0 ? (b.c - ctx.ma10) / adrUsd : null;
    const inWindow = mins <= E.entryWindowMin;
    const broke = b.c > level;
    status = { at: b.hm, mins, level: round(level), levelIs: level === plan.pivot ? 'pivot' : 'hod', close: round(b.c),
      pace: round(pace), ext: round(ext), lod: round(lod), broke, inWindow };
    if (!inWindow) break;
    lastIn = status;
    const paceOk = pace != null && pace >= E.paceMin;
    const chase = ext != null && ext >= R.maxExtensionAdr;
    // 가장 가까이 갔던 봉을 기억한다 — 못 산 이유를 말할 때 쓴다 (넘었는데 거래량이 모자랐다 > 아예 못 넘었다)
    status.rank = !broke ? 1 : !paceOk ? 2 : 3;
    status.chase = broke && paceOk && chase;
    if (!near || status.rank >= near.rank) near = status;
    if (!broke || !paceOk || chase) continue;
    // 체결가 = 트리거 봉의 종가. 루프가 알아채는 시점에 아는 가격이 그것뿐이다 (다음 봉 시가는 아직 없다).
    //   백테스트도 같은 값을 쓴다 — 다음 봉 시가를 쓰면 실전과 체결가가 달라진다.
    const entry = b.c * slipB;
    // 손절 = 그 시각까지의 당일 저가. 단 너무 가깝거나(수량 폭발) 너무 멀면(리스크 과다) 범위 안으로 당긴다.
    const stop = Math.min(Math.max(lod, entry - R.stopAdr * adrUsd), entry - R.minStopAdr * adrUsd);
    return { ...out, fired: true, ...status, barIdx: i, entry: round(entry), stop: round(stop),
      stopIs: stop === lod ? 'lod' : stop > lod ? 'stopAdr' : 'minStopAdr',   // 저가보다 위 = 너무 멀어서 당김 · 아래 = 너무 가까워서 벌림
      riskPerSharePct: round((entry - stop) / entry * 100), orh: i < 3 ? 5 : i < 12 ? 15 : 60,
      entryAt: endHm(b.hm, nmin) };
  }
  // 못 산 이유는 진입 창 안에서 '가장 가까이 갔던 봉' 기준으로 말한다. 창이 끝났으면 그 사실을 앞에 붙인다.
  const reason = (x) => (x.chase ? `이격 ${x.ext} ADR — 추격 금지`
    : !x.broke ? `기준선 ${x.level} 미돌파 (종가 ${x.close})`
    : x.pace == null ? '거래량 프로필에 그 시각이 없음'
    : `${x.at} 에 기준선 ${x.level} 을 넘었지만 거래량 페이스 ${x.pace}× < ${E.paceMin}×`);
  const closed = !!(status && status.inWindow === false);
  const why = near ? (closed ? `진입 창(${E.entryWindowMin}분) 종료 — ${reason(near)}` : reason(near))
    : closed ? `진입 창(${E.entryWindowMin}분) 종료` : '첫 5분봉만 있음 — 다음 봉부터 판정';
  // 화면에 보이는 현재 상태는 마지막으로 본 봉, 이유는 가장 가까이 갔던 봉
  const s = lastIn || status || { at: last.hm, mins: minSinceOpen(last.hm) + nmin };
  return { ...out, ...s, windowClosed: closed, nearest: near ? { at: near.at, level: near.level, close: near.close, pace: near.pace, ext: near.ext } : null, why };
}

function describe(r) {
  if (r.fired) {
    return `${r.at} ET · ${r.levelIs === 'pivot' ? '피벗' : '장중 고가'} ${r.level} 위 종가 ${r.close} · 거래량 페이스 ${r.pace}× · `
      + `진입 ${r.entry} · 손절 ${r.stop}(${r.stopIs === 'lod' ? '당일 저가' : r.stopIs === 'minStopAdr' ? '최소 거리' : '최대 거리'}) · 리스크 ${r.riskPerSharePct}% · 이격 ${r.ext ?? '—'} ADR`;
  }
  return `대기 — ${r.why}${r.at ? ` (${r.at} ET 기준)` : ''}`;
}

module.exports = { evaluate, volumeProfile, completed, byDate, describe, minSinceOpen, hmToMin };
