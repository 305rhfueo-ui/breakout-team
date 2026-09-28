'use strict';
// 6팀 장중 트리거 — 완성된 봉으로만 판정하는지, 거래량 페이스를 시각별로 재는지, 손절이 범위 안인지.
//
//   node tests/lib/orh.test.js

const assert = require('assert');
const path = require('path');
const REPO = path.join(__dirname, '..', '..');
const { evaluate, volumeProfile, completed } = require(path.join(REPO, 'scripts/lib/orh'));
const { loadRules } = require(path.join(REPO, 'scripts/lib/rules'));

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

const rules = loadRules();
const hmAt = (i) => { const m = 570 + i * 5; return String(Math.floor(m / 60)).padStart(2, '0') + String(m % 60).padStart(2, '0'); };
const T0 = Date.UTC(2026, 8, 25, 13, 30);
// 하루치 5분봉 78개. vol(i) = 봉 거래량, px(i) = [o,h,l,c]
const day = (date, px, vol, n = 78) => Array.from({ length: n }, (_, i) => { const [o, h, l, c] = px(i); return { t: T0 + i * 300000, date, hm: hmAt(i), o, h, l, c, v: vol(i) }; });
// 개장 직후 거래가 몰리는 U자형 (첫 봉이 평소의 5배)
const uShape = (i) => (i === 0 ? 5000 : i < 6 ? 2000 : i > 72 ? 2000 : 1000);
const flat = () => [100, 100.5, 99.5, 100];
const hist = [];
for (let d = 1; d <= 10; d++) hist.push(...day(`2026-09-${String(d).padStart(2, '0')}`, flat, uShape));
const profile = volumeProfile(hist, { exclude: '2026-09-25' });

const plan = { ticker: 'AAA', pivot: 101, adrPct: 4, price: 100 };
const ctx = { ma10: 98, prevClose: 100 };       // ADR$ = 4

console.log('\n[1] 거래량 프로필');
ok('슬롯별 평균 누적 — 09:30 봉까지 5000, 09:35 봉까지 7000', () => {
  assert.strictEqual(profile.ok, true);
  assert.strictEqual(profile.days, 10);
  assert.strictEqual(profile.slots.get('0930'), 5000);
  assert.strictEqual(profile.slots.get('0935'), 7000);
});
ok('지난 세션이 5일 미만이면 쓰지 않는다', () => {
  assert.strictEqual(volumeProfile(hist.filter((b) => b.date <= '2026-09-03'), {}).ok, false);
});
ok('판정일 이후 날짜는 평균에 넣지 않는다', () => {
  const p = volumeProfile([...hist, ...day('2026-09-26', flat, () => 99999)], { exclude: '2026-09-25' });
  assert.strictEqual(p.slots.get('0930'), 5000);
});

console.log('\n[2] 트리거');
// 09:30 봉 99~100.5, 09:35 봉이 102 로 끝난다(피벗 101 위 · 장중 고가 100.5 위), 거래량은 평소의 3배
const breakout = (volMult) => day('2026-09-25',
  (i) => (i === 0 ? [99.8, 100.5, 99, 100.2] : i === 1 ? [100.2, 102.3, 100.1, 102] : [102.1, 102.6, 101.8, 102.3]),
  (i) => uShape(i) * volMult);
const r = evaluate({ bars: breakout(3), plan, profile, rules, ctx });
ok('09:35 봉 종가가 기준선 위 + 페이스 3× → 트리거', () => {
  assert.strictEqual(r.fired, true, JSON.stringify(r));
  assert.strictEqual(r.at, '0935');
  assert.strictEqual(r.level, 101);
  assert.strictEqual(r.levelIs, 'pivot');
  assert.strictEqual(r.pace, 3);
});
ok('체결가는 트리거 봉의 종가 + 슬리피지 (봉 안에서 선을 건드린 가격이 아니다)', () => {
  assert.strictEqual(r.entryAt, '0940');
  assert.strictEqual(r.entry, +(102 * (1 + rules.fill.buySlipPct / 100)).toFixed(2));
});
ok('뒤에 봉이 더 있어도 체결가는 같다 (실전과 백테스트가 같은 값)', () => {
  const live = evaluate({ bars: breakout(3).slice(0, 2), plan, profile, rules, ctx });
  assert.strictEqual(live.fired, true);
  assert.strictEqual(live.entry, r.entry);
  assert.strictEqual(live.stop, r.stop);
});
ok('손절은 당일 저가(99) — 진입가에서 0.5~1.5 ADR 사이', () => {
  assert.strictEqual(r.stop, 99);
  assert.strictEqual(r.stopIs, 'lod');
  const dist = (r.entry - r.stop) / 4;
  assert.ok(dist >= rules.risk.minStopAdr && dist <= rules.risk.stopAdr, 'dist ' + dist);
});
ok('거래량이 평소와 같으면 사지 않는다', () => {
  const q = evaluate({ bars: breakout(1), plan, profile, rules, ctx });
  assert.strictEqual(q.fired, false);
  assert.ok(/페이스/.test(q.why), q.why);
});
ok('하루 거래량을 시간으로 나눈 값과 비교하지 않는다 (개장 직후 부풀림)', () => {
  // 오늘 거래량이 평소와 똑같은 날: 선형 근사(하루 평균 × 10분/390분)로 재면 09:35 의 페이스가 3배 가까이 나온다.
  const today = breakout(1).slice(0, 2);
  const dayTotal = hist.filter((b) => b.date === '2026-09-01').reduce((s, b) => s + b.v, 0);
  const linear = (today[0].v + today[1].v) / (dayTotal * 10 / 390);
  assert.ok(linear > 2.5, 'linear ' + linear);
  assert.strictEqual(evaluate({ bars: breakout(1), plan, profile, rules, ctx }).pace, 1);
});
ok('첫 5분봉만으로는 판정하지 않는다', () => {
  const q = evaluate({ bars: breakout(3).slice(0, 1), plan, profile, rules, ctx });
  assert.strictEqual(q.fired, false);
});
ok('피벗은 넘었지만 장중 고가를 못 넘으면 사지 않는다', () => {
  // 첫 봉 고가 103, 둘째 봉 종가 102 — 피벗(101) 위지만 장중 고가(103) 아래
  const bars = day('2026-09-25', (i) => (i === 0 ? [102, 103, 101.5, 102] : [102, 102.4, 101.6, 102]), (i) => uShape(i) * 3);
  const q = evaluate({ bars, plan, profile, rules, ctx });
  assert.strictEqual(q.fired, false);
  assert.ok(/미돌파/.test(q.why), q.why);
});
ok('진입 창(120분)이 지나면 사지 않는다', () => {
  const bars = day('2026-09-25', (i) => (i < 30 ? [100, 100.5, 99.5, 100] : [102, 103, 101.5, 102.8]), (i) => uShape(i) * 3);
  const q = evaluate({ bars, plan, profile, rules, ctx });
  assert.strictEqual(q.fired, false);
  assert.ok(/진입 창/.test(q.why), q.why);
});
ok('10일선에서 3 ADR 이상 뜬 자리는 사지 않는다', () => {
  const q = evaluate({ bars: breakout(3), plan, profile, rules, ctx: { ma10: 89, prevClose: 100 } });
  assert.strictEqual(q.fired, false);
  assert.ok(/추격/.test(q.why), q.why);
});
ok('당일 저가가 너무 멀면 손절을 1.5 ADR 로 당긴다', () => {
  const bars = day('2026-09-25', (i) => (i === 0 ? [99.8, 100.5, 90, 100.2] : i === 1 ? [100.2, 102.3, 100.1, 102] : [102.1, 102.6, 101.8, 102.3]), (i) => uShape(i) * 3);
  const q = evaluate({ bars, plan, profile, rules, ctx });
  assert.strictEqual(q.fired, true);
  assert.strictEqual(q.stopIs, 'stopAdr');
  assert.ok(Math.abs((q.entry - q.stop) - rules.risk.stopAdr * 4) < 0.02);
});
ok('당일 저가가 너무 가까우면 손절을 0.5 ADR 로 벌린다', () => {
  const bars = day('2026-09-25', (i) => (i === 0 ? [101.9, 102, 101.8, 101.9] : i === 1 ? [101.9, 102.6, 101.85, 102.5] : [102.5, 102.8, 102.3, 102.6]), (i) => uShape(i) * 3);
  const q = evaluate({ bars, plan: { ...plan, pivot: 102.1 }, profile, rules, ctx });
  assert.strictEqual(q.fired, true);
  assert.strictEqual(q.stopIs, 'minStopAdr');
});
ok('프로필이 없으면 사지 않는다 (눈 감고 사지 않는다)', () => {
  const q = evaluate({ bars: breakout(3), plan, profile: { ok: false, days: 2, slots: new Map() }, rules, ctx });
  assert.strictEqual(q.fired, false);
  assert.ok(/프로필/.test(q.why));
});

console.log('\n[3] 미완성 봉');
ok('아직 만들어지는 봉은 판정에서 뺀다', () => {
  const bars = breakout(3).slice(0, 3);
  const now = T0 + 2 * 300000 + 120000;   // 09:42 — 09:40 봉은 진행 중
  assert.deepStrictEqual(completed(bars, now).map((b) => b.hm), ['0930', '0935']);
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
