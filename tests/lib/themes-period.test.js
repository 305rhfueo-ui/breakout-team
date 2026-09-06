'use strict';
// 기간별(1M·3M·6M) 테마 3세트 + 교차 집합, 상위 2% 진입일(rs-entry) 회귀 테스트.
//   node tests/lib/themes-period.test.js

const assert = require('assert');
const { detectThemes, detectThemesByPeriod } = require('../../scripts/lib/screen');
const rs = require('../../scripts/lib/rs-entry');

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

// 8종목 픽스처 — qualifiedBy 조합 × 섹터/업종
const Q = [
  { ticker: 'A', sector: 'Technology', industry: 'Semiconductors', qualifiedBy: ['1mo', '3mo', '6mo'], bestPct: 99.9 },
  { ticker: 'B', sector: 'Technology', industry: 'Semiconductors', qualifiedBy: ['1mo', '3mo', '6mo'], bestPct: 99.5 },
  { ticker: 'C', sector: 'Technology', industry: 'Software - Application', qualifiedBy: ['1mo'], bestPct: 98.5 },
  { ticker: 'D', sector: 'Healthcare', industry: 'Biotechnology', qualifiedBy: ['1mo'], bestPct: 98.2 },
  { ticker: 'E', sector: 'Healthcare', industry: 'Biotechnology', qualifiedBy: ['3mo', '6mo'], bestPct: 99.0 },
  { ticker: 'F', sector: 'Energy', industry: 'Oil & Gas E&P', qualifiedBy: ['6mo'], bestPct: 98.1 },
  { ticker: 'G', sector: 'Energy', industry: 'Oil & Gas E&P', qualifiedBy: ['1mo', '6mo'], bestPct: 98.9 },
  { ticker: 'H', sector: 'N/A', industry: 'N/A', qualifiedBy: ['3mo'], bestPct: 98.3 },
];

console.log('\n[1] detectThemesByPeriod');
const P = detectThemesByPeriod(Q);
ok('기간별 count — 한 종목이 여러 기간에 중복 포함된다', () => {
  assert.strictEqual(P.byPeriod.m1.count, 5);   // A B C D G
  assert.strictEqual(P.byPeriod.m3.count, 4);   // A B E H
  assert.strictEqual(P.byPeriod.m6.count, 5);   // A B E F G
  assert.ok(P.byPeriod.m1.count + P.byPeriod.m3.count + P.byPeriod.m6.count > Q.length, '합 > 유니온');
});
ok('sharePct 분모는 그 기간의 count 다', () => {
  const semi1 = P.byPeriod.m1.clusters.find((c) => c.key === 'Industry:Semiconductors');
  assert.strictEqual(semi1.count, 2);
  assert.strictEqual(semi1.sharePct, 40);       // 2/5
  const semi6 = P.byPeriod.m6.clusters.find((c) => c.key === 'Industry:Semiconductors');
  assert.strictEqual(semi6.sharePct, 40);       // 2/5
});
ok('topSectors/topIndustries 는 미분류를 뺀 상위 3', () => {
  assert.ok(P.byPeriod.m3.topSectors.every((s) => s.name !== '미분류'));
  assert.deepStrictEqual(P.byPeriod.m1.topSectors[0], { name: 'Technology', count: 3, sharePct: 60 });
});
ok('교차 4집합 + other, counts 합 = 전체', () => {
  const C = P.cross;
  assert.deepStrictEqual(C.persistent, ['A', 'B']);
  assert.deepStrictEqual(C.newEntrants, ['C', 'D']);
  assert.deepStrictEqual(C.midTerm, ['E', 'H']);
  assert.deepStrictEqual(C.fading, ['F']);
  assert.deepStrictEqual(C.other, { '1mo+6mo': ['G'] });
  const s = C.counts.persistent + C.counts.newEntrants + C.counts.midTerm + C.counts.fading + C.counts.other;
  assert.strictEqual(s, C.counts.total);
  assert.strictEqual(C.counts.total, Q.length);
});
ok('빈 기간은 headline "자격 종목 없음"', () => {
  const E = detectThemesByPeriod(Q.filter((q) => !q.qualifiedBy.includes('3mo')));
  assert.strictEqual(E.byPeriod.m3.count, 0);
  assert.strictEqual(E.byPeriod.m3.headline, '자격 종목 없음');
});
ok('유니온 detectThemes 는 기존 필드를 유지하고 periods 태그를 붙인다', () => {
  const T = detectThemes(Q);
  for (const k of ['bySector', 'byIndustry', 'clusters', 'headline', 'minCount', 'total']) assert.ok(k in T, k);
  const semi = T.clusters.find((c) => c.key === 'Industry:Semiconductors');
  assert.deepStrictEqual(semi.periods, { m1: 2, m3: 2, m6: 2 });
  assert.ok(Q.every((q) => Array.isArray(q.qualifiedBy) && typeof q.bestPct === 'number'));
});

console.log('\n[2] rs-entry');
// 합성 스냅샷: 100종목, T00~T99. r 값이 클수록 상위. 상위 2% = 2종목.
const snap = (top1, top3, top6) => ({ data: Array.from({ length: 100 }, (_, i) => {
  const t = `T${String(i).padStart(2, '0')}`;
  const base = i / 100;
  return { T: t, r1: top1.includes(t) ? 5 + base : base, r3: top3.includes(t) ? 5 + base : base, r6: top6.includes(t) ? 5 + base : base };
}) });
ok('computeTop2Sets — 상위 2% 집합', () => {
  const s = rs.computeTop2Sets(snap(['T01', 'T02'], ['T03', 'T04'], ['T05', 'T06']));
  assert.deepStrictEqual(s, { m1: ['T01', 'T02'], m3: ['T03', 'T04'], m6: ['T05', 'T06'] });
});
ok('entryStats — 진입일·연속일·결손·캡', () => {
  const cache = { v: 1, threshold: 98, days: {
    '2026-08-31': { m1: ['T01', 'T02'], m3: ['T01'], m6: ['T09'] },
    '2026-09-01': { m1: ['T01', 'T02'], m3: ['T01'], m6: ['T09'] },
    // 09-02 는 사이트 결손(캐시에 없음)
    '2026-09-03': { m1: ['T01'], m3: ['T01', 'T02'], m6: ['T09'] },
  } };
  const st = rs.entryStats(cache, ['T01', 'T02', 'T09', 'T50'], '2026-09-03');
  assert.strictEqual(st.T01.top2Streak.m1, 3);
  assert.strictEqual(st.T01.top2Since.m1, '≤2026-08-31');   // 캐시 첫날까지 포함 → 캡
  assert.strictEqual(st.T01.streakCapped.m1, true);
  assert.strictEqual(st.T01.gaps.m1, 1);                    // 09-02 결손
  assert.strictEqual(st.T02.top2Streak.m1, 0);              // 09-03 에 빠짐 → 연속 0
  assert.strictEqual(st.T02.top2Since.m3, '2026-09-03');    // 09-03 신규 진입
  assert.strictEqual(st.T02.top2Streak.m3, 1);
  assert.strictEqual(st.T50.top2Streak.m6, 0);
  assert.strictEqual(st.T50.top2Since.m6, null);
});
ok('entryStats — 캐시가 비면 null', () => {
  assert.deepStrictEqual(rs.entryStats({ v: 1, threshold: 98, days: {} }, ['X'], '2026-09-03'), { X: null });
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
