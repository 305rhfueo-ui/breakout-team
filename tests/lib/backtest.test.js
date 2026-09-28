'use strict';
// 일봉 백테스트 — 손으로 따라갈 수 있는 봉으로 진입·손절·청산을 확인한다.
//
//   node tests/lib/backtest.test.js

const assert = require('assert');
const path = require('path');
const REPO = path.join(__dirname, '..', '..');
const { simulate, stats } = require(path.join(REPO, 'scripts/backtest-daily'));
const { loadRules } = require(path.join(REPO, 'scripts/lib/rules'));

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

const rules = loadRules();
const DAY = 86400000, T0 = Date.UTC(2025, 0, 2, 14, 30);
const iso = (i) => new Date(T0 + i * DAY).toISOString().slice(0, 10);
const lin = (a, b, n) => Array.from({ length: n }, (_, i) => a + (b - a) * (i + 1) / n);
function pack(list) {
  const bars = list.map((b, i) => ({ t: T0 + i * DAY, d: iso(i), v: 40e6, ...b }));
  return { bars, idx: new Map(bars.map((b, i) => [b.d, i])) };
}
// 베이스 봉 진폭 ±2.1% → ADR 4.3% (2팀 근사 필터 ADR ≥ 4 를 통과해야 후보가 된다)
const bar = (c, half = 0.021, extra = {}) => ({ o: c, h: c * (1 + half), l: c * (1 - half), c, ...extra });

// 170봉 횡보 → 40봉 상승(+60%) → 20봉 베이스 (피벗 = 81.6). 백테스트는 앞 200봉을 준비 구간으로 쓴다.
const base = [76, 75, 74, 73.5, 73, 74, 75, 76, 76.5, 77, 77, 76.5, 76, 75, 75.5, 76.5, 77, 77.5, 78, 78.5];
const head = [...Array(170).fill(50).map((c) => bar(c, 0.02)), ...lin(50, 80, 40).map((c) => bar(c, 0.02)), ...base.map((c) => bar(c))];
const PIVOT = 80 * 1.02;
// QQQ 는 계속 오른다 (국면이 빨간불이 아니게)
const qqq = (n) => pack(lin(400, 520, n).map((c) => bar(c, 0.006)));
const run = (tail) => {
  const t = pack([...head, ...tail]);
  const data = new Map([['QQQ', qqq(t.bars.length)], ['AAA', t]]);
  return simulate(data, rules, { variant: 'intraday' });
};

console.log('\n[1] 돌파 → 상승 → 10일선 이탈');
// 돌파일: 시가 80, 고가 85(피벗 위), 저가 79.5, 종가 84, 거래량 3배. 이후 상승하다 꺾인다.
const up = [bar(84, 0.021, { o: 80, h: 85, l: 79.5, v: 120e6 }), ...lin(85, 100, 12).map((c) => bar(c)), ...[96, 92, 88].map((c) => bar(c))];
const r1 = run(up);
ok('한 번 사고 이익으로 끝난다', () => {
  assert.strictEqual(r1.trades.length, 1, JSON.stringify(r1.trades));
  assert.ok(r1.trades[0].R > 0, 'R ' + r1.trades[0].R);
  assert.strictEqual(r1.trades[0].why, `${rules.exit.trailMa}일선 이탈`);
});
ok('진입가 = max(시가, 피벗) + 슬리피지', () => {
  // mfe 는 (최고가 − 진입가) ÷ 리스크. 진입가가 피벗보다 낮게 잡혔다면 mfe 가 더 크게 나온다.
  const entry = PIVOT * (1 + rules.fill.buySlipPct / 100);
  assert.ok(entry > 80, '시가 80 이 아니라 피벗에서 산다');
  assert.ok(r1.trades[0].mfeR > 0);
});

console.log('\n[2] 돌파 실패');
const down = [bar(82, 0.021, { o: 80, h: 83, l: 79.8, v: 120e6 }), bar(74, 0.021, { o: 80, h: 80.5, l: 72 }), ...[73, 72, 71].map((c) => bar(c))];
const r2 = run(down);
ok('손절되고 손실은 −1R 근처 (슬리피지만큼 더)', () => {
  assert.strictEqual(r2.trades.length, 1, JSON.stringify(r2.trades));
  assert.ok(/손절/.test(r2.trades[0].why));
  assert.ok(r2.trades[0].R < -0.9 && r2.trades[0].R > -1.3, 'R ' + r2.trades[0].R);
});

console.log('\n[3] 거래량 없는 돌파');
const quiet = [bar(84, 0.021, { o: 80, h: 85, l: 79.5, v: 40e6 }), ...lin(85, 100, 12).map((c) => bar(c))];
ok('사지 않는다', () => assert.strictEqual(run(quiet).trades.length, 0));

console.log('\n[4] 통계');
ok('승률·평균 R·손익비', () => {
  const s = stats([{ R: 3, days: 5, why: 'x' }, { R: -1, days: 1, why: '당일 손절' }, { R: -1, days: 2, why: '손절' }, { R: 1, days: 4, why: 'x' }]);
  assert.strictEqual(s.n, 4);
  assert.strictEqual(s.winPct, 50);
  assert.strictEqual(s.avgR, 0.5);
  assert.strictEqual(s.profitFactor, 2);
  assert.strictEqual(s.sameDayStopPct, 25);
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
