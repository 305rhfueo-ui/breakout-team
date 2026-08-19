'use strict';
// 5팀 — "돈이 어디로 흘러가는가" 판정.
//
// RS 사이트가 화면에 보여주는 F10d chg / F25d chg / FRANK / FRANK 25d CHG 를
// 우리가 직접 계산한다. 사이트 result.json 에는 이 값들이 없고 브라우저가 그때그때 만든다.
//
// ⚠️ 사이트 계산에 버그가 3개 있다. 화면값을 그대로 쓰면 판단이 뒤집힌다.
//
//   ① 감쇠계수 불일치 (가장 큼)
//      사이트는 "오늘 Final_WRS"(파이썬 산출, ×count/(count+5) 감쇠 적용)를
//      "과거 Final_WRS"(브라우저 calculateWRSForData 산출, 감쇠 미적용)와 비교한다.
//      서로 다른 공식을 비교하는 것이라 종목 수가 적은 업종일수록 과거값이 부풀어
//      변화율이 인위적으로 음수가 된다.
//      실측(2026-08-08): 정정하면 137개 업종 중 F10d 32개(23%)·F25d 24개(18%)의 부호가 뒤집힌다.
//      예) Computer Hardware 화면 −38.3% → 정정 +0.2% (FRANK 1위인데 하락으로 표시됐다)
//
//   ② 기준일에 주말 스냅샷이 섞임
//      사이트는 history_index 의 dates[10]/dates[25] 를 쓰는데 인덱스에 주말분이 있다.
//      주말 스냅샷은 금요일 복제라 사이트의 "25일 전"은 실제로 18거래일 전이고
//      2026-07-12(일요일)처럼 주말 날짜가 기준일이 되기도 한다.
//      → 우리는 평일만 골라 진짜 10·25 거래일을 쓴다.
//
//   ③ NaN 오염 — lib/wrs.js 가 이미 회피 중.
//
// 그래서 두 벌을 낸다:
//   site*  — 사이트 화면값 재현 (사용자가 대조할 수 있게. 회귀 테스트로 고정)
//   정정값 — 양쪽 다 감쇠 적용 + 평일 기준일. 서술과 판정은 반드시 이쪽만 쓴다.

const { computeWrsAll } = require('./wrs');
const { num } = require('./util');

// ── 사이트 브라우저(calculateWRSForData) 복제 — 재현 전용 ──
// 파이썬과 다른 점: NaN RS 를 0 으로 치환, mc<=0 행 제외, 감쇠계수 미적용.
function parseMcJs(s) {
  if (typeof s !== 'string') return 0;
  const m = /^([\d.]+)\s*([TBMK]?)/.exec(s.trim());
  if (!m) return 0;
  const mult = { T: 1e12, B: 1e9, M: 1e6, K: 1e3, '': 1 }[m[2]] || 1;
  return parseFloat(m[1]) * mult;
}

function siteWrsCalc(rows) {
  const g = {};
  for (const it of rows) {
    if (!it['Market Cap'] || it['Market Cap'] === 'N/A') continue;
    if (!it.Sector || it.Sector === 'N/A' || it.Sector === 'nan') continue;
    const k = `${it.Sector}|${it.Industry}`;
    if (!g[k]) g[k] = { Count: 0, TotalMC: 0, W6: 0, RS: [], Win: 0 };
    const mc = parseMcJs(it['Market Cap']);
    const rs6 = parseFloat(it.RS_6mo) || 0;   // ← NaN·null 이 0 이 된다 (사이트 동작)
    if (mc > 0) {
      g[k].Count += 1; g[k].TotalMC += mc; g[k].W6 += mc * rs6;
      g[k].RS.push(rs6); if (rs6 > 0) g[k].Win += 1;
    }
  }
  const out = new Map();
  for (const [k, x] of Object.entries(g)) {
    const s = x.RS.sort((a, b) => a - b), mid = Math.floor(s.length / 2);
    const md = s.length ? (s.length % 2 === 0 ? (s[mid - 1] + s[mid]) / 2 : s[mid]) : 0;
    const w6 = x.TotalMC > 0 ? x.W6 / x.TotalMC : 0;
    const wr = x.Count > 0 ? x.Win / x.Count : 0;
    const wf = x.Count > 1 ? 1 - 1 / x.Count : 0;
    const raw = (w6 * 0.4) + (md * 0.4) + (wr * wf * 0.2);
    out.set(k, { raw, damped: raw * (x.Count / (x.Count + 5)), count: x.Count });
  }
  return out;
}

// Final_WRS 내림차순 순위 = FRANK (1위가 최상위)
function rankByFinal(entries) {
  const arr = [...entries].filter((e) => Number.isFinite(e.final));
  arr.sort((a, b) => b.final - a.final);
  const m = new Map();
  arr.forEach((e, i) => m.set(e.key, { ...e, FRANK: i + 1 }));
  return m;
}

const pctChg = (cur, past) => (Number.isFinite(cur) && Number.isFinite(past) && past !== 0)
  ? ((cur - past) / Math.abs(past)) * 100 : null;

function median(a) {
  const s = a.filter(Number.isFinite).sort((x, y) => x - y);
  if (!s.length) return null;
  const m = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? (s[m - 1] + s[m]) / 2 : s[m];
}

// wrs.computeWrsAll 결과 → {key, final, count, winRate} 목록 (6개월 기준)
function finalEntries(rows) {
  const all = computeWrsAll(rows);
  const out = [];
  for (const e of all.byKey.values()) {
    if (!e.m6 || !Number.isFinite(e.m6.final)) continue;
    out.push({ key: e.key, sector: e.Sector, industry: e.Industry,
      final: e.m6.final, count: e.counts.m6 ?? e.Count, winRate: e.m6.winRate });
  }
  return out;
}

// 슬림 스냅샷(history-series) → computeWrsAll 이 기대하는 행 모양
function slimToRows(slim) {
  return (slim.data || []).map((d) => ({
    Ticker: d.T, Sector: d.S, Industry: d.I, 'Market Cap': d.MC,
    RS_1mo: d.r1, RS_3mo: d.r3, RS_6mo: d.r6,
  }));
}

// ── 업종 국면 라벨 ──
// 200DIV = 1년 평균에서 얼마나 떠 있나(사이클 위치), 그 변화량 = 벌어지는 중인가 좁혀지는 중인가,
// 50DIV = 두 달 평균에서 얼마나 떠 있나(진입 타이밍).
// ⚠️ 200DIV 절대 기준선을 전 업종에 일괄 적용하면 틀린다(바이오 +200% vs 유틸리티 +20%).
//    그래서 '방향(delta)'을 라벨의 주 축으로 쓰고 수준은 보조로만 쓴다.
function stageOf({ d50, d200, d200Delta }) {
  if (Number.isFinite(d50) && d50 > 30) return { stage: 'hot', ko: '🔥 단기 과열', note: '두 달 평균에서 30% 넘게 떠 있습니다 — 추격 금지' };
  if (Number.isFinite(d50) && d50 < 0) return { stage: 'pullback', ko: '❄️ 조정 중', note: '두 달 평균 아래로 내려왔습니다' };
  if (!Number.isFinite(d200)) return { stage: 'unknown', ko: '판정불가', note: '과거 이격도 데이터가 없습니다' };
  const expanding = Number.isFinite(d200Delta) ? d200Delta > 0 : null;
  if (expanding === null) return { stage: 'unknown', ko: '판정불가', note: '25거래일 전 이격도를 비교할 수 없습니다' };
  if (d200 < 15) return expanding
    ? { stage: 'early', ko: '⭐ 상승 초입', note: '아직 많이 안 왔는데 격차가 벌어지는 중입니다' }
    : { stage: 'none', ko: '💤 미형성', note: '추세가 아직 만들어지지 않았습니다' };
  if (d200 < 40) return expanding
    ? { stage: 'mid_up', ko: '📈 상승 중반 (확장 중)', note: '어느 정도 왔지만 아직 벌어지는 중입니다' }
    : { stage: 'mid_flat', ko: '🔶 중반이나 수축 중', note: '격차가 좁혀지는 중 — 힘이 빠지고 있습니다' };
  return expanding
    ? { stage: 'late_up', ko: '⚠️ 후반 가속', note: '많이 온 상태에서 더 벌어지는 중 — 과열 위험' }
    : { stage: 'late_down', ko: '📉 후반 수축', note: '많이 왔고 이제 좁혀지는 중입니다' };
}

// "실적 기대가 오르는가" 판정.
// ⚠️ 상향한 애널리스트 '수'(upRatio)만 보면 안 된다. 전망치 중앙값(cy)이 내려갔는데
//    상향 인원만 많은 경우가 실제로 있다 — BAND(2026-08-08): 상향비율 71%(10/4)인데
//    올해 전망 −2.8%·내년 −15.3%. 소수가 크게 내리면 이런 모순이 생긴다.
//    그래서 전망치가 꺾이지 않은(cy >= 0) 경우에만 동의율을 근거로 인정한다.
function estimatesRising(cy, upRatio, coverage) {
  if (Number.isFinite(cy) && cy > 2) return true;
  if (Number.isFinite(upRatio) && upRatio >= 70 && (!Number.isFinite(cy) || cy >= 0)) {
    return coverage == null || coverage >= 10;   // 커버리지 2~3명의 100% 는 신뢰하지 않는다
  }
  return false;
}

// 개별 종목 라벨 (업종 클릭 시 분해)
function tickerStage({ d50, d200, cy, upRatio, coverage }) {
  const est = estimatesRising(cy, upRatio, coverage);
  if (Number.isFinite(d50) && d50 > 30) return { k: 'hot', ko: '🔥 과열', why: '두 달 평균에서 30% 넘게 떠 있습니다' };
  if (Number.isFinite(d50) && d50 < 0) {
    return Number.isFinite(d200) && d200 > 20
      ? (est ? { k: 'dip', ko: '🎯 눌림 후보', why: '많이 왔다가 눌렸는데 실적 기대는 살아 있습니다' }
             : { k: 'out', ko: '❌ 이탈', why: '두 달 평균 아래로 내려왔고 실적 기대도 없습니다' })
      : { k: 'out', ko: '❌ 이탈', why: '두 달 평균 아래로 내려왔습니다' };
  }
  if (Number.isFinite(d200) && d200 < 20) {
    return est ? { k: 'early', ko: '⭐ 초입', why: '1년 평균 대비 아직 낮은데 실적 기대가 오릅니다' }
               : { k: 'early_weak', ko: '⚠️ 초입이나 근거 약함', why: '아직 안 왔지만 실적 기대는 안 오릅니다' };
  }
  return est ? { k: 'lead', ko: '✅ 선도', why: '많이 왔고 실적 기대도 받쳐줍니다' }
             : { k: 'lead_weak', ko: '🔶 관성', why: '많이 왔는데 실적 기대는 멈췄습니다' };
}

/**
 * 업종별 자금 흐름 판정.
 * @param {object[]} liveRows       오늘 RS 원본 행 (fetchRsData().rows)
 * @param {object}   snap10         10거래일 전 슬림 스냅샷 (없으면 null)
 * @param {object}   snap25         25거래일 전 슬림 스냅샷 (없으면 null)
 * @param {object}   opts.siteDates 사이트 재현용 {d10, d25} 슬림 스냅샷 (주말 포함 인덱스 기준)
 */
function computeFlow(liveRows, snap10, snap25, opts = {}) {
  const today = rankByFinal(finalEntries(liveRows));
  const p10 = snap10 ? rankByFinal(finalEntries(slimToRows(snap10))) : null;
  const p25 = snap25 ? rankByFinal(finalEntries(slimToRows(snap25))) : null;

  // 사이트 재현 — 오늘은 감쇠 적용, 과거는 감쇠 미적용 (사이트가 하는 그대로)
  const siteToday = siteWrsCalc(liveRows);
  const siteP10 = opts.site10 ? siteWrsCalc(slimToRows(opts.site10)) : null;
  const siteP25 = opts.site25 ? siteWrsCalc(slimToRows(opts.site25)) : null;

  // 종목을 업종별로 모은다 (오늘 / 25거래일 전)
  const bucket = (rows, get) => {
    const g = new Map();
    for (const r of rows) {
      const k = `${get.sector(r)}|${get.industry(r)}`;
      if (!g.has(k)) g.set(k, []);
      g.get(k).push(r);
    }
    return g;
  };
  const nowG = bucket(liveRows, { sector: (r) => r.Sector, industry: (r) => r.Industry });
  const oldG = snap25 ? bucket(snap25.data, { sector: (d) => d.S, industry: (d) => d.I }) : null;

  const out = [];
  for (const [key, t] of today) {
    const m = nowG.get(key) || [];
    const a = p10 && p10.get(key), b = p25 && p25.get(key);
    const sa = siteP10 && siteP10.get(key), sb = siteP25 && siteP25.get(key);
    const st = siteToday.get(key);

    const d50 = median(m.map((r) => num(r['50DIV'])));
    const d200 = median(m.map((r) => num(r['200DIV'])));
    const oldRows = oldG ? (oldG.get(key) || []) : [];
    const o200 = oldRows.length ? median(oldRows.map((d) => d.d200)) : null;
    const d200Delta = (Number.isFinite(d200) && Number.isFinite(o200)) ? d200 - o200 : null;

    const up = m.reduce((s, r) => s + (num(r.Up_Count) ?? 0), 0);
    const dn = m.reduce((s, r) => s + (num(r.Down_Count) ?? 0), 0);
    const upRatio = (up + dn) ? (up / (up + dn)) * 100 : null;
    const cy = median(m.map((r) => num(r.CY_Trend)));
    const ny = median(m.map((r) => num(r.NY_Trend)));

    const f10 = pctChg(t.final, a && a.final);
    const f25 = pctChg(t.final, b && b.final);
    const frank25 = b ? b.FRANK - t.FRANK : null;
    const s = stageOf({ d50, d200, d200Delta });

    // 3축 — 자금 유입 / 관심 집중 / 몰림의 폭
    const inflow = Number.isFinite(f10) && f10 > 0 && (frank25 == null || frank25 >= 0) && (d200Delta == null || d200Delta > 0);
    const outflow = Number.isFinite(f10) && f10 < 0 && Number.isFinite(d200Delta) && d200Delta < 0;
    const attention = estimatesRising(cy, upRatio, up + dn) && (up + dn) >= 30;
    const broad = Number.isFinite(t.winRate) && t.winRate >= 0.7 && t.count >= 5;

    let flow = 'neutral';
    if (inflow && attention && broad) flow = 'leading';        // 🟢 본격 주도
    else if (inflow && !broad) flow = 'narrow';                // ⚠️ 소수 종목 게임
    else if (inflow) flow = 'inflow';
    else if (!inflow && attention && !outflow) flow = 'pending'; // ⭐ 다음 후보
    else if (outflow) flow = 'outflow';

    out.push({
      key, sector: t.sector, industry: t.industry,
      count: t.count, winRate: t.winRate, final: t.final, FRANK: t.FRANK,
      f10, f25, frank25,
      // 사이트 재현 (대조용) — 오늘 감쇠 vs 과거 무감쇠
      siteF10: st && sa ? pctChg(st.damped, sa.raw) : null,
      siteF25: st && sb ? pctChg(st.damped, sb.raw) : null,
      // ⚠️ 사이트 변화율의 분자는 `final`(파이썬 공식)이 아니라 이 값이다.
      //    둘은 서로 다른 수라, 감쇠 불일치의 방향을 따질 때 final 부호로 판정하면 틀린다.
      //    (2026-08-19 실측: 음수 업종 20개 중 4개가 그 이유로 규칙을 어기는 것처럼 보였다)
      siteToday: st ? st.damped : null,
      d50, d200, d200Prev: o200, d200Delta,
      cy, ny, upRatio, coverage: up + dn,
      stage: s.stage, stageKo: s.ko, stageNote: s.note,
      flow, axes: { inflow, outflow, attention, broad },
      members: m.map((r) => r.Ticker),
    });
  }
  return out.sort((x, y) => x.FRANK - y.FRANK);
}

module.exports = { computeFlow, siteWrsCalc, stageOf, tickerStage, estimatesRising, slimToRows, median, pctChg, rankByFinal, finalEntries };
