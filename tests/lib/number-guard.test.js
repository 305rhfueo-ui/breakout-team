'use strict';
// 숫자 대조 가드 (2026-10-08) — 출처에 없는 숫자가 든 문장은 지운다. 실측 사례로 고정.
//   node tests/lib/number-guard.test.js
const assert = require('assert');
const NG = require('../../scripts/lib/number-guard');
let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };
const kept = (s, src) => NG.checkText(s, NG.corpusOf(src)).cut.length === 0;

ok('단위 환산은 같은 값 — 200억 달러 = $20 Billion, 25억 = $2.5B', () => {
  assert.ok(kept('마벨은 2028 회계연도 매출 전망을 200억 달러로 올렸다.', 'Marvell Raises FY2028 Revenue Outlook to $20 Billion'));
  assert.ok(kept('최대 25억 달러의 잉여현금흐름 목표.', 'Quanta Targets Up to $2.5B FCF'));
});
ok('SEC 원값·반올림 — 1.82억 ← 182175000, 20.4 ← 20.43, 180 ← 179.75', () => {
  assert.ok(kept('2분기 매출이 1.82억 달러로 11% 늘었다.', 'revenue 182175000 yoy revenue 11.0'));
  assert.ok(kept('영업이익은 6,190만 달러로 20.4% 늘었다.', 'profit 61902000 yoy 20.43'));
  assert.ok(kept('3개월간 약 180% 올랐다.', { ret3m: 179.75 }));
});
ok('날짜·기간·단계·개수는 숫자로 안 센다', () => {
  assert.ok(kept('MPC는 4~6월 분기에 흑색종 3상, 10일선 위 12일째, 3종목 모두.', 'days 12'));
});
ok('2026-10-08 실측 환각은 지운다 — 41%·609억 달러·150%', () => {
  assert.ok(!kept('콴타는 분기 매출이 41% 늘었다.', 'Quanta Targets Up to $2.5B FCF'));
  assert.ok(!kept('DELL은 AI 서버 주문이 분기 609억 달러로 150% 늘었다.', 'Dell AI orders'));
});
ok('문장 단위로 지우고 나머지는 남긴다', () => {
  const r = NG.checkText('매출이 55% 늘었다. 이익은 99% 늘었다.', NG.corpusOf('yoy revenue 55'));
  assert.strictEqual(r.text, '매출이 55% 늘었다.');
  assert.strictEqual(r.cut.length, 1);
});
(async () => {
  const { verifyPayload } = require('../../scripts/lib/verify-claims');
  const p = { a: { id: 'c1', statement: '매출이 41% 늘었다.', evidence_level: 'sourced', sources: [{ url: 'https://www.cnbc.com/2026/10/01/x.html', date: '2026-10-01', title: 'Quanta Targets Up to $2.5B FCF', quote: 'Quanta Targets Up to $2.5B FCF' }] } };
  const { payload, report } = await verifyPayload(p, { runDate: '2026-10-08', check: false });
  ok('  → 41% 주장은 근거 없음으로 강등', () => { assert.strictEqual(payload.a.evidence_level, 'no_source'); assert.strictEqual(report.numberCut, 1); });
  console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
  process.exit(fail ? 1 : 0);
})();
