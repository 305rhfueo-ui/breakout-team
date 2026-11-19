'use strict';
// 14팀 하율 — 수축→폭발 판정(순수 함수)과 텔레그램 문구
//   node tests/lib/bbsqueeze.test.js
const assert = require('assert');
const { judge, bollinger, message, entry, TH, VOLK } = require('../../scripts/bb-squeeze-watch');

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

// 60봉: 조용한 횡보(폭 작음·거래량 1,000) → 마지막 봉 거래량 3,000·종가 +4%
const flat = (n, c = 100, v = 1000) => Array.from({ length: n }, (_, i) => ({ t: i, o: c, h: c + 0.5, l: c - 0.5, c: c + (i % 2 ? 0.2 : -0.2), v }));
const bars = flat(59).concat([{ t: 59, o: 100, h: 104.5, l: 99.8, c: 104, v: 3000 }]);

ok('볼린저 폭은 RS 사이트 식(4σ/중간 · 표본 표준편차)', () => {
  const bb = bollinger(bars.map((b) => b.c));
  assert.strictEqual(bb[18], null); assert.ok(bb[19].bbw > 0 && bb[19].bbw < 0.02);
  const w = bars.slice(39, 59).map((b) => b.c), mu = w.reduce((s, x) => s + x, 0) / 20, sd = Math.sqrt(w.reduce((s, x) => s + (x - mu) ** 2, 0) / 19);
  assert.ok(Math.abs(bb[58].bbw - 4 * sd / mu) < 1e-9);
});
ok('수축 뒤 거래량 3배 + 상승 → 충족, 상단 돌파·밴드 확장 참고 표시', () => {
  const j = judge(bars);
  assert.strictEqual(j.pass, true); assert.strictEqual(j.volX, 2.88);
  assert.deepStrictEqual(j.rows.slice(0, 3).map((r) => r.status), ['ok', 'ok', 'ok']);
  assert.ok(j.aboveUp && j.expand && j.rows[3].status === 'ok' && j.rows[4].status === 'ok');
  assert.ok(j.rows[1].detail.includes('2.88배'));
});
ok('거래량이 2배 미만이면 미충족 · 종가 하락이면 미충족', () => {
  const b1 = bars.slice(0, 59).concat([{ ...bars[59], v: 1900 }]);
  assert.strictEqual(judge(b1).pass, false); assert.strictEqual(judge(b1).rows[1].status, 'no');
  const b2 = bars.slice(0, 59).concat([{ ...bars[59], c: 99, v: 3000 }]);
  assert.strictEqual(judge(b2).pass, false); assert.strictEqual(judge(b2).rows[2].status, 'no');
});
ok('전날 폭이 0.25 넘으면 미충족(이미 벌어진 밴드)', () => {
  const wild = Array.from({ length: 59 }, (_, i) => ({ t: i, o: 100, h: 130, l: 70, c: i % 2 ? 130 : 70, v: 1000 })).concat([{ t: 59, o: 100, h: 140, l: 99, c: 139, v: 5000 }]);
  const j = judge(wild); assert.strictEqual(j.rows[0].status, 'no'); assert.strictEqual(j.pass, false);
});
ok('봉이 52개 미만이면 null', () => assert.strictEqual(judge(flat(40)), null));
ok('사이트 행 → 항목: 상위 % · 등락률 · 섹터', () => {
  const e = entry({ Ticker: 'ZZQ', Sector: 'Tech', Industry: 'Semis', Price: 10, ADR_20D: 5.5, Ret_1M_Pct: 12.3, Ret_3M_Pct: 45.6, Ret_6M_Pct: null, __p: { RS_1mo: 98.5, RS_3mo: 90, RS_6mo: null } }, judge(bars), '2026-11-18');
  assert.deepStrictEqual(e.rsTop, { m1: 1.5, m3: 10, m6: null }); assert.strictEqual(e.ret.m3, 45.6); assert.strictEqual(e.industry, 'Semis'); assert.strictEqual(e.session, '2026-11-18');
  const m = message([e], '2026-11-18', { capDropped: 3 });
  for (const k of ['14팀 하율', 'ZZQ Tech/Semis', '2.88배', '3M +46%★', '6M —', 'RS 상위 1.5/10/—%', '상단 돌파', '밴드 확장', '3종목은 못 봤습니다', '매수 권유가 아닙니다']) assert.ok(m.includes(k), `문구 없음: ${k}`);
  assert.ok(!/\d+주(?! 횡보)|\$\d/.test(m), '수량·금액 없음');
});
ok('기준 상수', () => { assert.strictEqual(TH, 0.25); assert.strictEqual(VOLK, 2); });

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
