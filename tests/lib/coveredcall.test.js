'use strict';
// 11팀 시윤 (2026-11-01) — 와인스타인 단계(주봉 30주선) 판정 · 커버드콜 분배율 · 같은 기간 기초 주가
//   node tests/lib/coveredcall.test.js
const assert = require('assert');
const path = require('path');
const REPO = path.join(__dirname, '..', '..');
const W = require(path.join(REPO, 'scripts/lib/weinstein'));
const { parseDistributions } = require(path.join(REPO, 'scripts/data/yahoo-estimates'));
const { underPct } = require(path.join(REPO, 'scripts/covered-call-watch'));

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };
const dateOf = (t) => new Date(t).toISOString().slice(0, 10);
const T0 = Date.UTC(2024, 0, 1);                                   // 월요일
// 주마다 종가 하나 → 월~금 일봉 5개
const daily = (closes, vol) => closes.flatMap((c, w) => [0, 1, 2, 3, 4].map((d) => ({ t: T0 + (w * 7 + d) * 864e5, h: c * 1.01, l: c * 0.99, c, v: vol(w) })));
const line = (a, b, n) => Array.from({ length: n }, (_, i) => a + (b - a) * (i / (n - 1)));
const wave = (mid, amp, n) => Array.from({ length: n }, (_, k) => mid + amp * Math.sin((2 * Math.PI * (k + 0.5)) / 6));
const qqq = daily(Array(120).fill(100), () => 1);
const run = (closes, vol = (w) => (w < 40 ? 2000 : 1000)) => W.analyze(daily(closes, vol), qqq, { dateOf });
const st = (r, i) => r.checks[i].status;

console.log('\n[1] 와인스타인 단계');
ok('40주 하락 뒤 40주 횡보 → 1단계, ①~⑤ 충족', () => {
  const r = run([...line(200, 100, 40), ...wave(100, 5, 40)]);
  assert.strictEqual(r.verdict, '1단계', r.why);
  for (let i = 0; i < 5; i++) assert.strictEqual(st(r, i), '충족', `${r.checks[i].item}: ${r.checks[i].evidence}`);
  assert.ok(r.flatWeeks >= 8 && r.box.top > 105 && r.box.bottom < 95);
  assert.ok(r.checks[0].evidence.includes('하락 뒤 횡보'));
});
ok('같은 횡보인데 주가가 박스 위쪽 근처 → 1단계 막바지', () => {
  const r = run([...line(200, 100, 40), ...wave(100, 5, 38)]);
  assert.strictEqual(r.verdict, '1단계 막바지');
  assert.ok(r.why.includes('돌파선 근처'));
});
ok('평평해진 지 8주가 안 됨 → 경계(④ 미충족)', () => {
  const r = run([...line(200, 100, 40), ...wave(100, 5, 30)]);
  assert.strictEqual(r.verdict, '경계');
  assert.strictEqual(st(r, 3), '미충족');
  assert.ok(r.why.includes('박스권'));
});
ok('오른 뒤 횡보 → 3단계(① 미충족)', () => {
  const r = run([...line(100, 200, 40), ...wave(200, 10, 40)]);
  assert.strictEqual(r.verdict, '3단계');
  assert.strictEqual(st(r, 0), '미충족');
});
ok('꾸준한 상승 → 2단계 · 꾸준한 하락 → 4단계', () => {
  assert.strictEqual(run(line(100, 300, 80)).verdict, '2단계');
  assert.strictEqual(run(line(300, 100, 80)).verdict, '4단계');
});
ok('1단계 뒤 급등 → 2단계 진입(최근 8주 안 1→2)', () => {
  const r = run([...line(200, 100, 40), ...wave(100, 5, 40), ...line(105, 160, 10)]);
  assert.strictEqual(r.verdict, '2단계 진입');
  assert.ok(r.changes.some((c) => c.from === 1 && c.to === 2));
});
ok('34주 미만 → 판정 불가 · QQQ 없으면 ⑥ 확인 불가', () => {
  assert.strictEqual(run(line(100, 120, 20)).verdict, '판정 불가');
  const r = W.analyze(daily([...line(200, 100, 40), ...wave(100, 5, 40)], () => 1), [], { dateOf });
  assert.strictEqual(st(r, 5), '확인 불가');
});
ok('화면용 주봉 [날짜, 종가, 30주선] — 처음 29주는 선 없음', () => {
  const r = run([...line(200, 100, 40), ...wave(100, 5, 40)]);
  assert.strictEqual(r.weeks.length, 80);
  assert.strictEqual(r.weeks[0][2], null);
  assert.ok(r.weeks[79][2] > 90);
});

console.log('\n[2] 분배금 · 같은 기간 기초 주가');
ok('가격 10 고정 · 매주 0.1 분배 → 연 52회 · 분배율 52% · 가격 0% · 총수익 = 받은 분배', () => {
  const t0 = Date.UTC(2025, 9, 1, 13, 30) / 1000, ts = Array.from({ length: 400 }, (_, i) => t0 + i * 86400);
  const dividends = {}; for (let i = 3; i < 400; i += 7) dividends[ts[i]] = { amount: 0.1, date: ts[i] };
  const d = parseDistributions({ chart: { result: [{ timestamp: ts, indicators: { quote: [{ close: ts.map(() => 10) }] }, events: { dividends } }] } });
  assert.strictEqual(d.perYear, 52);
  assert.strictEqual(d.ratePct, 52);
  assert.strictEqual(d.pricePct, 0);
  assert.ok(d.paidPct >= 51 && d.paidPct <= 53, d.paidPct);
  assert.strictEqual(d.totalPct, d.paidPct);
  assert.strictEqual(parseDistributions({ chart: { result: [] } }), null);
});
ok('기초 주가는 상품 기간 시작일부터 잰다', () => {
  const bars = [['2025-11-17', 100], ['2025-11-18', 120], ['2026-10-30', 150]].map(([d, c]) => ({ t: Date.parse(d), c }));
  assert.strictEqual(underPct(bars, '2025-11-18', dateOf), 25);
  assert.strictEqual(underPct(bars, null, dateOf), null);
});

console.log(`\n결과: ${pass} 통과 · ${fail} 실패`);
process.exit(fail ? 1 : 0);
