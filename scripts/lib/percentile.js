'use strict';
// 기간별 개별 백분위 랭킹 — 2팀 스크리닝의 기초.
//
// ⚠️ 방향 주의: 사이트의 RS_Rank_Pct 는 "낮을수록 상위"다(utils.calculate_percentile_rank).
//    여기서 계산하는 백분위는 반대로 "높을수록 강함"이다. p >= 98 이 상위 2%.
//    표에는 topPct() 로 "상위 X%" 형태로만 노출해 혼동을 없앤다.
//
// ⚠️ 가중합성이 아니다. RS_1mo / RS_3mo / RS_6mo 를 각각 독립적으로 랭킹한다.
//    (investment-agent-team 의 rsComposite 는 6:3:1 가중합성이라 여기선 쓰지 않는다.)

const { num } = require('./util');

// 동점 처리: mid-rank. pct = (below + 0.5 * equal) / n * 100
// 인덱스 기반(i/(n-1))은 동점 구간에서 앞쪽에 불리하게 편향된다.
function rankOne(rows, key, outKey) {
  const scored = [];
  for (const r of rows) {
    const v = num(r[key]);
    if (v !== null) scored.push({ r, v });
  }
  const n = scored.length;
  // 값 없는 행은 null (0 이 아니다 — 0 은 "최하위"라는 잘못된 주장이 된다)
  for (const r of rows) {
    if (!r[outKey]) r[outKey] = {};
    r[outKey][key] = null;
  }
  if (n === 0) return 0;

  scored.sort((a, b) => a.v - b.v);
  let i = 0;
  while (i < n) {
    let j = i;
    while (j + 1 < n && scored[j + 1].v === scored[i].v) j++;
    const equal = j - i + 1;
    const pct = ((i + 0.5 * equal) / n) * 100;
    for (let k = i; k <= j; k++) scored[k].r[outKey][key] = pct;
    i = j + 1;
  }
  return n;
}

// rows 각 행에 row.__p = { RS_1mo: 99.6, RS_3mo: ..., RS_6mo: ... } 를 부여
function rankPercentiles(rows, keys = ['RS_1mo', 'RS_3mo', 'RS_6mo'], { outKey = '__p' } = {}) {
  const counts = {};
  for (const k of keys) counts[k] = rankOne(rows, k, outKey);
  return { counts, universe: rows.length, outKey };
}

// 3기간 중 최고 백분위 (주도주 정렬·우선순위용)
function bestPct(row, keys = ['RS_1mo', 'RS_3mo', 'RS_6mo'], outKey = '__p') {
  const p = row[outKey];
  if (!p) return null;
  const vals = keys.map((k) => p[k]).filter((v) => v !== null && v !== undefined);
  return vals.length ? Math.max(...vals) : null;
}

module.exports = { rankPercentiles, bestPct, rankOne };

if (require.main === module) {
  require('./util').loadEnv();
  const { fetchRsData } = require('../fetch-rs-data');
  fetchRsData().then(({ rows }) => {
    const { counts, universe } = rankPercentiles(rows);
    console.log(`\n유니버스 ${universe}종목`);
    for (const [k, n] of Object.entries(counts)) console.log(`  ${k}: ${n}종목 랭킹됨 (값 없음 ${universe - n})`);
    const top = [...rows].sort((a, b) => (bestPct(b) || 0) - (bestPct(a) || 0)).slice(0, 10);
    console.log('\n최고 백분위 상위 10:');
    for (const r of top) {
      const p = r.__p;
      console.log(`  ${String(r.Ticker).padEnd(7)} best=${(bestPct(r) || 0).toFixed(2)}  1mo=${p.RS_1mo === null ? '—' : p.RS_1mo.toFixed(1)} 3mo=${p.RS_3mo === null ? '—' : p.RS_3mo.toFixed(1)} 6mo=${p.RS_6mo === null ? '—' : p.RS_6mo.toFixed(1)}`);
    }
  });
}
