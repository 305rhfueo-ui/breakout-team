'use strict';
// 애널리스트 전망치 (야후 파이낸스 analysis, 2026-10-15) — 실측 응답(SNDK·TSM, tests/fixtures)으로 정리값 고정
//   node tests/lib/estimates.test.js
const assert = require('assert');
const Y = require('../../scripts/data/yahoo-estimates');
let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };
const sndk = Y.parseQuoteSummary(require('../fixtures/yahoo-SNDK.json'), { ticker: 'SNDK', today: '2026-10-15' });
const tsm = Y.parseQuoteSummary(require('../fixtures/yahoo-TSM.json'), { ticker: 'TSM', today: '2026-10-15' });

ok('구간 4개를 결산일로 — 0q 는 다음에 발표될 분기', () => {
  assert.deepStrictEqual(sndk.periods.map((p) => [p.period, p.endDate]), [['0q', '2026-09-30'], ['+1q', '2026-12-31'], ['0y', '2027-06-30'], ['+1y', '2028-06-30']]);
  assert.strictEqual(sndk.periods[0].eps, 46.27); assert.strictEqual(sndk.periods[0].epsAnalysts, 18);
});
ok('비율은 % 로(소수 1자리), 작은 기준에서 폭발한 성장률은 n/m', () => {
  assert.strictEqual(sndk.surprises[0].surprisePct, 13.7);                // 야후 0.1372
  assert.strictEqual(sndk.periods[2].epsGrowth, 203.1);                   // 2.0308
  assert.strictEqual(sndk.periods[0].epsGrowth, 'n/m');                   // 36.93 = 3,693%
});
ok('통화는 항목별 — TSM EPS 달러 · 매출 대만달러', () => {
  assert.strictEqual(tsm.periods[0].epsCur, 'USD'); assert.strictEqual(tsm.periods[0].revCur, 'TWD');
});
ok('EPS 추정치 변화(7·30·90일 %)와 상향/하향 애널리스트 수', () => {
  const c = sndk.changes[0];
  assert.deepStrictEqual([c.now, c.d30, c.d90, c.up30, c.down30, c.up7, c.down7], [46.27, 0.1, 5.6, 10, 3, 9, 3]);
});
ok('서프라이즈는 최신 분기부터, 상회 횟수', () => {
  assert.deepStrictEqual(sndk.surprises.map((s) => s.quarter), ['2026-06-30', '2026-03-31', '2025-12-31', '2025-09-30']);
  assert.strictEqual(sndk.beats, 4);
});
ok('투자의견 변경(up/down/init)과 목표가 상·하향은 따로 센다, 최근 90일·10건만', () => {
  const R = sndk.ratings;
  assert.ok(R.recent.length <= 10); assert.strictEqual(R.recent[0].firm, 'Mizuho');
  assert.strictEqual(R.recent[0].action, 'main'); assert.strictEqual(R.recent[0].ptAction, 'Raises');
  assert.strictEqual(R.upgrades + R.downgrades + R.initiations <= R.total, true);
  assert.ok(R.ptRaised >= 1);
});
ok('다음 실적일 — 오늘 이후면 다음, 지났으면 발표됨', () => {
  assert.deepStrictEqual(sndk.nextEarnings, { date: '2026-10-29', upcoming: true, estimated: false });
  const past = Y.parseQuoteSummary(require('../fixtures/yahoo-SNDK.json'), { ticker: 'SNDK', today: '2026-11-02' });
  assert.strictEqual(past.nextEarnings.upcoming, false);
});
ok('정리값은 작다(공개 저장소에 매일 커밋) · 원자료가 비면 null', () => {
  assert.ok(JSON.stringify(sndk).length < 5000, String(JSON.stringify(sndk).length));
  assert.strictEqual(Y.parseQuoteSummary(null, { ticker: 'X' }), null);
  assert.strictEqual(Y.parseQuoteSummary({ earningsTrend: { trend: [] } }, { ticker: 'X' }), null);
  assert.ok(sndk.url.endsWith('/quote/SNDK/analysis/'));
});
ok('차단당하지 않게 — 요청 간격 3~5초, 429·403 뒤 12시간 쉰다', () => {
  assert.deepStrictEqual(Y.GAP_MS, [3000, 5000]); assert.strictEqual(Y.COOLDOWN_H, 12);
  const src = require('fs').readFileSync(require('path').join(__dirname, '../../scripts/data/yahoo-estimates.js'), 'utf8');
  assert.ok(/status === 429 \|\| r\.status === 403\) \{ startCooldown/.test(src), '429·403 처리 없음');
  assert.ok(!/throttler\(4\)/.test(src), '초당 4건 그대로');
});
Y.getEstimates('$(id)').then((r) => {
  ok('  → 잘못된 티커 null', () => assert.strictEqual(r, null));
  console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
  process.exit(fail ? 1 : 0);
});
