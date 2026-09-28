'use strict';
// 6팀 셋업 등급 — 잰 것만 말하는지, 미래 봉을 안 보는지, 수량이 폭발하지 않는지.
//
//   node tests/lib/setup-grade.test.js

const assert = require('assert');
const path = require('path');
const REPO = path.join(__dirname, '..', '..');
const { gradeSetup, sharesFor, adrPct } = require(path.join(REPO, 'scripts/lib/setup-grade'));
const { loadRules } = require(path.join(REPO, 'scripts/lib/rules'));

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

const rules = loadRules();
const DAY = 86400000, T0 = Date.UTC(2025, 0, 2, 14, 30);
// 종가 목록 → 봉. half = 봉 진폭의 절반(비율)
const mk = (closes, half, vol = 1e6) => closes.map((c, i) => ({ t: T0 + i * DAY, o: c, h: c * (1 + half(i)), l: c * (1 - half(i)), c, v: vol }));
const lin = (a, b, n) => Array.from({ length: n }, (_, i) => a + (b - a) * (i + 1) / n);

// 140봉 횡보(50) → 40봉 상승(50→80, +60%) → 20봉 베이스(저점이 73 → 75 로 올라오고 78.5 에서 끝남)
const flat = Array(140).fill(50);
const run = lin(50, 80, 40);
const base = [76, 75, 74, 73.5, 73, 74, 75, 76, 76.5, 77, 77, 76.5, 76, 75, 75.5, 76.5, 77, 77.5, 78, 78.5];
const closes = [...flat, ...run, ...base];
const half = (i) => (i < 180 ? 0.02 : 0.012);
const bars = mk(closes, half, 40e6);

console.log('\n[1] 베이스 안에서 쉬는 종목');
const g = gradeSetup(bars, { rules, riskPct: 0.5 });
ok('pre 상태 · 피벗은 베이스 위 최고가(상승 마지막 봉의 고가)', () => {
  assert.strictEqual(g.ok, true);
  assert.strictEqual(g.state, 'pre');
  assert.strictEqual(g.pivot, +(80 * 1.02).toFixed(2));
  // 베이스는 고점 봉이 아니라 "피벗 아래 상자에 들어온 첫 봉"부터 센다 — 상승 끝의 몇 봉이 상자 안에 든다
  assert.ok(g.metrics.baseBars >= 20 && g.metrics.baseBars <= 26, 'baseBars ' + g.metrics.baseBars);
});
ok('좁은 범위에서 고가를 조금씩 높여도 베이스를 짧게 세지 않는다', () => {
  // 20봉을 77.8~79.5 에서 쉬다가 6봉 전에 고가 82.2 를 한 번 찍었다 (그 전 최고가 81.6 을 살짝 넘음)
  const creep = [78, 78.5, 78, 77.8, 78.2, 78.6, 78.4, 78, 78.3, 78.8, 79, 78.6, 78.4, 79.5, 79, 78.6, 78.8, 79, 78.7, 79.2];
  const b3 = mk([...flat, ...run, ...creep], half, 40e6);
  b3[b3.length - 7].h = 82.2;
  const c = gradeSetup(b3, { rules, riskPct: 0.5 });
  assert.strictEqual(c.state, 'pre');
  assert.strictEqual(c.pivot, 82.2);
  assert.ok(c.metrics.baseBars >= 15, '고점 봉 이후 6봉이 아니라 상자에 머문 기간을 센다: ' + c.metrics.baseBars);
});
ok('선행 상승·깊이·저점 상승을 잰다', () => {
  assert.ok(g.metrics.priorMovePct > 60 && g.metrics.priorMovePct < 70, 'priorMove ' + g.metrics.priorMovePct);
  assert.ok(g.metrics.depthPct > 10 && g.metrics.depthPct < 13, 'depth ' + g.metrics.depthPct);
  assert.ok(g.metrics.higherLows >= 1, 'higherLows ' + g.metrics.higherLows);
});
ok('등급은 실패한 검사 수로만 정해진다', () => {
  assert.strictEqual(g.grade, g.fails.length === 0 ? 'A' : g.fails.length === 1 ? 'B' : 'C');
  assert.strictEqual(g.reasons.length, 7);
  assert.strictEqual(g.reasons.filter((r) => r.startsWith('✗')).length, g.fails.length);
});
ok('예비 손절 = 피벗 − stopAdr × ADR (스윙 저점을 쓰지 않는다)', () => {
  const adrUsd = bars[bars.length - 1].c * adrPct(bars) / 100;
  assert.ok(Math.abs(g.stop - (g.pivot - rules.risk.stopAdr * adrUsd)) < 0.02, `${g.stop}`);
  assert.ok(g.stop < g.pivot);
});
ok('비중 = 리스크% ÷ 손절 거리%, 상한 20%', () => {
  const want = Math.min(0.5 / g.riskPerSharePct * 100, rules.risk.maxPositionPct);
  assert.ok(Math.abs(g.weightPct - want) < 0.1, `${g.weightPct} vs ${want}`);
  assert.ok(g.weightPct <= rules.risk.maxPositionPct);
});
ok('🟡 국면이면 리스크가 절반', () => {
  const y = gradeSetup(bars, { rules, riskPct: 0.5, regime: 'yellow' });
  if (!g.weightCapped) assert.ok(Math.abs(y.weightPct - g.weightPct * rules.risk.yellowRiskMult) < 0.1);
  else assert.ok(y.weightPct <= g.weightPct);
});
ok('금액·수량은 결과에 없다 (공개 파일에 쓰이므로)', () => {
  assert.strictEqual('shares' in g, false);
  assert.strictEqual(sharesFor(g, 100000), Math.floor(100000 * g.weightPct / 100 / g.pivot));
  assert.strictEqual(sharesFor(g, null), null);
});

console.log('\n[2] 미래 봉을 보지 않는다');
ok('뒤에 봉을 붙여도 그날까지의 판정은 같다', () => {
  // 앞쪽 봉은 그대로 두고 뒤에만 큰 봉 4개를 붙인다
  const future = mk([...closes, 90, 95, 40, 120], (i) => (i < closes.length ? half(i) : 0.05), 40e6);
  const a = gradeSetup(future.slice(0, bars.length), { rules, riskPct: 0.5 });
  assert.deepStrictEqual(a, g);
});

console.log('\n[3] 이미 돌파한 종목 · 쉬지 않는 종목');
ok('피벗을 종가로 넘은 날부터는 post — 밤 관심 목록에서 빠진다', () => {
  const b2 = mk([...closes, 83], half, 40e6);
  const p = gradeSetup(b2, { rules, riskPct: 0.5 });
  assert.strictEqual(p.state, 'post');
  assert.strictEqual(p.barsSinceBreak, 0);
  assert.strictEqual(p.pivot, g.pivot);
  assert.strictEqual(p.watch, false);
});
ok('쉬지 않고 오르는 종목은 등급이 없다', () => {
  const s = gradeSetup(mk([...flat, ...lin(50, 110, 60)], () => 0.02, 40e6), { rules, riskPct: 0.5 });
  assert.strictEqual(s.state, 'none');
  assert.strictEqual(s.grade, null);
  assert.strictEqual(s.watch, false);
});
ok('피벗에서 5% 넘게 아래면 관심 목록이 아니다', () => {
  const far = gradeSetup(mk([...flat, ...run, ...base.map((c) => c - 6)], half, 40e6), { rules, riskPct: 0.5 });
  assert.strictEqual(far.state, 'pre');
  assert.strictEqual(far.near, false);
  assert.strictEqual(far.watch, false);
});
ok('거래대금이 작으면 관심 목록이 아니다', () => {
  const thin = gradeSetup(mk(closes, half, 1000), { rules, riskPct: 0.5 });
  assert.strictEqual(thin.liquid, false);
  assert.strictEqual(thin.watch, false);
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
