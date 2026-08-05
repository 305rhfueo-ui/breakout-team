'use strict';
// WRS(가중 상대강도) 재계산 — 사이트가 WRS_6mo 하나만 제공하므로 1mo/3mo 를 직접 만든다.
//
// ⚠️ 자체 계산값이다. 리포트에는 반드시 "자체 계산(사이트 공식 동일)" 라벨을 붙인다.
//
// 공식 출처: RS_Investment/fetch_and_save.py L165-217 (원문 그대로 복제)
//   그룹      = Sector|Industry  (Sector/Industry 가 'N/A'·'nan' 이거나 RS 가 없으면 제외)
//   WRS       = Σ(MC × RS) / Σ(MC)          시총가중 평균
//   WRS_MD    = median(RS)
//   Win_Rate  = count(RS > 0) / count        (0~1 소수)
//   WinFactor = (1 - 1/count) if count > 1 else 0
//   Final_WRS = (WRS×0.4 + MD×0.4 + WinRate×WinFactor×0.2) × (count / (count + 5))
//
// 검증: 내가 계산한 WRS_6mo 가 사이트 wrs_data[].WRS_6mo 와 일치해야 한다.
//       일치하면 1mo/3mo 계산도 신뢰할 수 있다. (`node scripts/lib/wrs.js`)

const { num, say } = require('./util');

const EXCLUDED = new Set(['N/A', 'NAN', '']);

// fetch_and_save.py:22 parse_market_cap 을 그대로 복제.
// ⚠️ 실패 시 null 이 아니라 0.0 을 반환한다 — 가중치는 0이지만 count/median/win_rate 에는 포함된다.
//    (우리 util.parseMarketCap 은 null 을 반환하므로 여기서는 쓰지 않는다.)
function parseMarketCapPy(mcStr) {
  if (!mcStr || mcStr === 'N/A') return 0.0;
  try {
    const s = String(mcStr);
    const valStr = s.replace(/B/g, '').replace(/M/g, '').replace(/T/g, '').replace(/,/g, '');
    const val = parseFloat(valStr);
    if (!Number.isFinite(val)) return 0.0;
    if (s.includes('B')) return val * 1e9;
    if (s.includes('M')) return val * 1e6;
    if (s.includes('T')) return val * 1e12;
    return val;
  } catch (e) {
    return 0.0;
  }
}

// statistics.median — 짝수 개수면 가운데 두 값의 평균
function median(arr) {
  if (!arr.length) return 0;
  const s = [...arr].sort((a, b) => a - b);
  const mid = s.length >> 1;
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

// Python round(x, 4) 근사. (은행가 반올림 차이는 1e-4 미만이라 검증 시 허용오차로 흡수)
function r4(x) {
  return Math.round(x * 1e4) / 1e4;
}

function isUsable(row) {
  const sec = String(row.Sector == null ? '' : row.Sector).trim();
  const ind = String(row.Industry == null ? '' : row.Industry).trim();
  if (EXCLUDED.has(sec.toUpperCase()) || EXCLUDED.has(ind.toUpperCase())) return false;
  return true;
}

// utils.calculate_percentile_rank 복제 — 내림차순 정렬 후 (첫 등장 순위 / 전체) × 100.
// ⚠️ 낮을수록 상위다 (1등 = 작은 값). 사이트 표기와 동일하게 유지한다.
function percentileRankDesc(value, allValues) {
  if (value === null || value === undefined) return null;
  const sortedDesc = allValues.filter((v) => v !== null && v !== undefined).sort((a, b) => b - a);
  if (!sortedDesc.length) return null;
  const idx = sortedDesc.indexOf(value);
  if (idx === -1) return null;
  return Math.round(((idx + 1) / sortedDesc.length) * 1e4) / 1e2;
}

// 한 기간(rsKey)에 대한 산업별 WRS 계산
function computeWrsFor(rows, rsKey) {
  const groups = new Map();
  for (const row of rows) {
    if (!isUsable(row)) continue;
    const rs = num(row[rsKey]);
    if (rs === null) continue;
    const key = `${String(row.Sector).trim()}|${String(row.Industry).trim()}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push({ RS: rs, MC: parseMarketCapPy(row['Market Cap']) });
  }

  const out = [];
  for (const [key, values] of groups) {
    if (values.length < 1) continue;
    const [sector, industry] = key.split('|');
    const rsValues = values.map((v) => v.RS);
    const medianRs = median(rsValues);
    const totalMc = values.reduce((a, v) => a + v.MC, 0);
    const weightedSum = values.reduce((a, v) => a + v.MC * v.RS, 0);
    const wrs = totalMc > 0 ? weightedSum / totalMc : 0;
    const count = values.length;
    const winCount = values.filter((v) => v.RS > 0).length;
    const winRate = count > 0 ? winCount / count : 0;
    const winFactor = count > 1 ? (1 - 1 / count) : 0;
    const baseWrs = (wrs * 0.4) + (medianRs * 0.4) + (winRate * winFactor * 0.2);
    const finalWrs = baseWrs * (count / (count + 5));
    out.push({
      key, Sector: sector, Industry: industry, Count: count,
      WRS: r4(wrs), WRS_MD: r4(medianRs), Win_Rate: r4(winRate), Final_WRS: r4(finalWrs),
    });
  }

  // 랭킹 부여 (사이트와 동일 방식: 낮을수록 상위) + 우리 표기용 상위% 도 함께
  const wrsVals = out.map((o) => o.WRS);
  const finalVals = out.map((o) => o.Final_WRS);
  for (const o of out) {
    o.WRS_Rank_Pct = percentileRankDesc(o.WRS, wrsVals);            // 낮을수록 상위 (사이트 호환)
    o.Final_WRS_Rank_Pct = percentileRankDesc(o.Final_WRS, finalVals);
    o.topPctWrs = o.WRS_Rank_Pct;                                    // "상위 N%" 그대로
    o.topPctFinal = o.Final_WRS_Rank_Pct;
  }
  out.sort((a, b) => b.Final_WRS - a.Final_WRS);
  return out;
}

// 1mo/3mo/6mo 전부 계산 → { m1:[...], m3:[...], m6:[...], byKey: Map }
function computeWrsAll(rows) {
  const m1 = computeWrsFor(rows, 'RS_1mo');
  const m3 = computeWrsFor(rows, 'RS_3mo');
  const m6 = computeWrsFor(rows, 'RS_6mo');
  const byKey = new Map();
  // ⚠️ Count 는 기간마다 다르다 — RS_1mo 가 NaN 인 종목과 RS_6mo 가 NaN 인 종목이 서로 다르기 때문.
  //    (실측: Technology|Semiconductors 는 1개월 43종목 / 6개월 42종목)
  //    하나만 저장하면 6개월 WRS 옆에 1개월 종목수가 붙는 오표기가 생긴다 → 기간별로 보관한다.
  const put = (list, period) => {
    for (const o of list) {
      if (!byKey.has(o.key)) byKey.set(o.key, { key: o.key, Sector: o.Sector, Industry: o.Industry, Count: null, counts: {} });
      const e = byKey.get(o.key);
      e.counts[period] = o.Count;
      e[period] = { wrs: o.WRS, md: o.WRS_MD, winRate: o.Win_Rate, final: o.Final_WRS, rankPct: o.WRS_Rank_Pct, finalRankPct: o.Final_WRS_Rank_Pct, count: o.Count };
    }
  };
  put(m1, 'm1'); put(m3, 'm3'); put(m6, 'm6');
  // 대표 Count 는 6개월 기준 (없으면 3개월 → 1개월)
  for (const e of byKey.values()) e.Count = e.counts.m6 ?? e.counts.m3 ?? e.counts.m1 ?? null;
  return { m1, m3, m6, byKey };
}

// 사이트 wrs_data 와 내 WRS_6mo 를 대조 — 이게 통과해야 1mo/3mo 를 신뢰할 수 있다.
//
// ⚠️ 사이트에는 알려진 결함이 있다 (2026-08-05 실측 확인):
//    fetch_and_save.py:173 의 가드가 `item.get('RS_6mo') is not None` 인데
//    파이썬에서 `float('nan') is not None` 은 True 다. 따라서 RS 가 NaN 인 행이
//    그룹에 섞여 들어가 weighted_sum 을 NaN 으로 오염시킨다.
//    → 140개 그룹 중 19개의 WRS_6mo 가 NaN(=JSON null) 이다.
//    → 우리는 NaN 행을 제외하므로 그 그룹에 대해 "정상 값을 복구"한다.
//    따라서 검증은 **사이트가 정상 계산한 그룹만** 대조하고,
//    사이트가 NaN 인 그룹은 recovered 로 따로 집계한다.
function isFiniteNum(v) {
  return v !== null && v !== undefined && Number.isFinite(Number(v));
}

// 그룹별 "RS 가 NaN 인 행" 개수 — 사이트 오염 여부를 값이 아니라 원인으로 판정한다.
// (ETF|ETF 처럼 total_mc==0 퇴화 분기로 WRS 가 0(유한)이 나와도 MD/Win_Rate 는 오염돼 있다)
function nanCountsByGroup(rows, rsKey = 'RS_6mo') {
  const counts = new Map();
  for (const row of rows) {
    if (!isUsable(row)) continue;
    const key = `${String(row.Sector).trim()}|${String(row.Industry).trim()}`;
    const bad = num(row[rsKey]) === null ? 1 : 0;
    counts.set(key, (counts.get(key) || 0) + bad);
  }
  return counts;
}

function validateAgainstSite(rows, siteWrsData, { tol = 1e-4 } = {}) {
  const mine = computeWrsFor(rows, 'RS_6mo');
  const mineByKey = new Map(mine.map((o) => [`${o.Sector}|${o.Industry}`, o]));
  const nanCounts = nanCountsByGroup(rows, 'RS_6mo');
  const report = {
    total: siteWrsData.length,
    comparable: 0, matched: 0,
    recovered: [],   // 사이트가 NaN → 우리가 정상 계산
    missing: [],     // 유효 RS 가 0행이라 우리는 그룹 자체를 만들지 않음
    mismatch: [],
    maxDiff: { WRS: 0, MD: 0, WinRate: 0, Final: 0, Count: 0 },
  };

  for (const s of siteWrsData) {
    const k = `${String(s.Sector).trim()}|${String(s.Industry).trim()}`;
    const m = mineByKey.get(k);
    const nanRows = nanCounts.get(k) || 0;
    // 오염 판정: NaN 행이 하나라도 있거나, 사이트 산출값에 비유한값이 있으면 대조 불가
    const polluted = nanRows > 0
      || !isFiniteNum(s.WRS_6mo) || !isFiniteNum(s.WRS_6mo_MD) || !isFiniteNum(s.Final_WRS);

    if (!m) {
      report.missing.push({ key: k, site: s, reason: '유효 RS_6mo 0행 — 그룹 생성 안 함' });
      continue;
    }
    if (polluted) {
      report.recovered.push({ key: k, siteCount: s.Count, myCount: m.Count, nanRows, mine: m });
      continue;
    }

    report.comparable++;
    const diffs = {
      Count: Math.abs((s.Count ?? 0) - m.Count),
      WRS: Math.abs(Number(s.WRS_6mo) - m.WRS),
      MD: Math.abs(Number(s.WRS_6mo_MD) - m.WRS_MD),
      WinRate: Math.abs(Number(s.Win_Rate ?? 0) - m.Win_Rate),
      Final: Math.abs(Number(s.Final_WRS) - m.Final_WRS),
    };
    for (const kk of Object.keys(diffs)) {
      if (diffs[kk] > report.maxDiff[kk]) report.maxDiff[kk] = diffs[kk];
    }
    const bad = diffs.Count > 0 || diffs.WRS > tol || diffs.MD > tol || diffs.WinRate > tol || diffs.Final > tol;
    if (bad) report.mismatch.push({ key: k, site: s, mine: m, diffs });
    else report.matched++;
  }

  report.ok = report.comparable > 0 && report.mismatch.length === 0 && report.matched === report.comparable;
  return report;
}

module.exports = { computeWrsFor, computeWrsAll, validateAgainstSite, parseMarketCapPy, median, percentileRankDesc };

if (require.main === module) {
  require('./util').loadEnv();
  const { fetchRsData } = require('../fetch-rs-data');
  fetchRsData().then(({ rows, meta }) => {
    console.log('\n════════ WRS 자체계산 검증 (핵심 관문) ════════');
    const rep = validateAgainstSite(rows, meta.wrs_data);
    console.log(`사이트 wrs_data          ${rep.total}개 그룹`);
    console.log(`  대조 가능(사이트 정상)  ${rep.comparable}`);
    console.log(`    → 일치                ${rep.matched}`);
    console.log(`    → 불일치              ${rep.mismatch.length}`);
    console.log(`  사이트 NaN → 복구       ${rep.recovered.length}  (사이트 버그: NaN 행이 그룹 오염)`);
    console.log(`  그룹 미생성             ${rep.missing.length}  (유효 RS 0행)`);
    console.log(`최대 오차                Count ${rep.maxDiff.Count} · WRS ${rep.maxDiff.WRS.toExponential(2)} · MD ${rep.maxDiff.MD.toExponential(2)} · WinRate ${rep.maxDiff.WinRate.toExponential(2)} · Final ${rep.maxDiff.Final.toExponential(2)}`);
    console.log(rep.ok
      ? `\n✅ 통과 — 사이트가 정상 계산한 ${rep.comparable}개 그룹 전부 일치. WRS(1mo)/WRS(3mo) 를 신뢰할 수 있다`
      : '\n❌ 실패 — 1mo/3mo 를 신뢰할 수 없다');
    if (rep.mismatch.length) {
      console.log('\n불일치 샘플 3건:');
      for (const m of rep.mismatch.slice(0, 3)) {
        console.log(`  ${m.key}`);
        console.log(`    사이트: count=${m.site.Count} WRS=${m.site.WRS_6mo} MD=${m.site.WRS_6mo_MD} win=${m.site.Win_Rate} final=${m.site.Final_WRS}`);
        console.log(`    내계산: count=${m.mine.Count} WRS=${m.mine.WRS} MD=${m.mine.WRS_MD} win=${m.mine.Win_Rate} final=${m.mine.Final_WRS}`);
      }
    }
    if (rep.recovered.length) {
      console.log(`\n복구된 그룹 (사이트 NaN → 우리 정상값) 상위 5:`);
      for (const r of rep.recovered.slice(0, 5)) {
        console.log(`  ${r.key.padEnd(48)} 사이트cnt ${r.siteCount} → 내cnt ${r.myCount}, WRS=${r.mine.WRS}`);
      }
    }

    const all = computeWrsAll(rows);
    console.log(`\n════════ WRS 3기간 (그룹 ${all.byKey.size}개) ════════`);
    console.log('상위 12 업종 (Final_WRS 6개월 기준):');
    console.log('업종                                          count   WRS1mo   WRS3mo   WRS6mo  상위%(6mo)');
    for (const o of all.m6.slice(0, 12)) {
      const e = all.byKey.get(o.key);
      const f = (x) => (x === undefined || x === null ? '     —' : (x >= 0 ? '+' : '') + x.toFixed(4));
      console.log(`${String(o.Industry).slice(0, 42).padEnd(44)}${String(o.Count).padStart(4)} ${f(e.m1 && e.m1.wrs)} ${f(e.m3 && e.m3.wrs)} ${f(e.m6 && e.m6.wrs)}  ${String(o.WRS_Rank_Pct).padStart(6)}`);
    }
  }).catch((e) => { console.error(e); process.exit(1); });
}
