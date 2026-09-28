'use strict';
// 6팀 장중 데이터 — 5분봉 세션, 거래량 프로필, 어느 날짜 기준의 매수 계획.
//
// 소스는 둘이다.
//   kis   — 실전 밤 루프. 실시간. 지난 세션은 이어받기로 거슬러 올라간다(하루 2페이지).
//   yahoo — 백테스트·예비. 5분봉 60일치를 한 번에 준다. 소형주는 15분 늦다.
// 거래량 페이스는 같은 소스끼리 나눠야 한다 (한투와 야후는 집계 범위가 달라 거래량이 다르다).

const path = require('path');
const { paths, readJson, writeJson, ensureDir, round } = require('./util');
const { fetchBars, sma } = require('./ta');
const { fetchBarsCached, barDateET } = require('./bars');
const kis = require('./kis');
const orh = require('./orh');
const { gradeSetup } = require('./setup-grade');

const hmET = (ms) => {
  const p = {};
  for (const x of new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour12: false, hour: '2-digit', minute: '2-digit' }).formatToParts(new Date(ms))) p[x.type] = x.value;
  return (p.hour === '24' ? '00' : p.hour) + p.minute;
};

// 야후 5분봉 → kis.minuteBars 와 같은 모양
async function yahoo5m(ticker, { range = '60d' } = {}) {
  const r = await fetchBars(ticker, { range, interval: '5m', timeoutMs: 20000 });
  if (!r.ok) return { ok: false, bars: [], error: r.error };
  const bars = r.bars.map((b) => ({ t: b.t, date: barDateET(b.t), hm: hmET(b.t), o: b.o, h: b.h, l: b.l, c: b.c, v: b.v || 0 }))
    .filter((b) => b.hm >= '0930' && b.hm < '1600' && b.o != null && b.h != null && b.l != null);
  return { ok: bars.length > 0, bars, delayedBy: r.meta ? r.meta.exchangeDataDelayedBy : null, error: bars.length ? null : 'no bars' };
}

// 5분봉 이력 (프로필용). 하루 1회 캐시. source 별로 따로 둔다.
async function history5m(ticker, { source = 'kis', asOf, days = 20 } = {}) {
  const file = path.join(paths.cacheDir, 'bars5m', asOf, `${String(ticker).toUpperCase().replace(/[^A-Z0-9]/g, '_')}_${source}.json`);
  const hit = readJson(file, null);
  if (hit && Array.isArray(hit.bars) && hit.bars.length) return { ok: true, bars: hit.bars, cached: true, source };
  // 확장시간 포함 하루 192봉 = 2페이지(240봉)에 못 미친다. 하루당 1.7페이지로 잡는다.
  const r = source === 'kis' ? await kis.minuteBars(ticker, { pages: Math.ceil((days + 2) * 1.7), regularOnly: true }) : await yahoo5m(ticker);
  if (!r.ok) return { ok: false, bars: [], error: r.error, source };
  try { ensureDir(path.dirname(file)); writeJson(file, { bars: r.bars, fetched_at: new Date().toISOString() }); } catch (e) { /* 캐시 실패는 무시 */ }
  return { ok: true, bars: r.bars, cached: false, source };
}

// 어느 세션일 아침 기준의 매수 계획 — 그 전날 종가까지의 일봉만 쓴다 (세션 재생·백테스트용).
async function planAsOf(ticker, sessionDate, { rules, regime, riskPct } = {}) {
  const r = await fetchBarsCached(ticker, { range: '2y' });
  if (!r.ok) return { ok: false, error: r.error };
  const bars = r.bars.filter((b) => barDateET(b.t) < sessionDate);
  if (bars.length < 60) return { ok: false, error: '봉 부족' };
  const g = gradeSetup(bars.slice(-260), { rules, regime, riskPct });
  if (!g.ok) return { ok: false, error: g.reason };
  return { ok: true, plan: { ticker, ...g, stopPre: g.stop }, daily: bars };
}

// 세션일까지의 일봉에서 종가와 이동평균 (청산 판정용)
function closeAndMa(dailyBars, sessionDate, period) {
  const upTo = dailyBars.filter((b) => barDateET(b.t) <= sessionDate);
  if (!upTo.length || barDateET(upTo[upTo.length - 1].t) !== sessionDate) return null;
  return { close: upTo[upTo.length - 1].c, ma: sma(upTo, period), bar: upTo[upTo.length - 1] };
}

// 한 종목 · 한 세션의 트리거 판정
function trigger({ bars5, sessionDate, plan, rules, nowMs = null }) {
  const by = orh.byDate(bars5);
  let today = by.get(sessionDate) || [];
  if (nowMs != null) today = orh.completed(today, nowMs);
  const profile = orh.volumeProfile(bars5, { exclude: sessionDate });
  const r = orh.evaluate({ bars: today, plan, profile, rules, ctx: { ma10: plan.ma10, prevClose: plan.price } });
  return { ...r, profileDays: profile.days, today };
}

module.exports = { yahoo5m, history5m, planAsOf, closeAndMa, trigger, hmET, round };
