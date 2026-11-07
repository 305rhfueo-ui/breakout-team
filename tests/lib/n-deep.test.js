'use strict';
// N 심층분석 (2026-11-06) — 공시 본문 자르기 · 코드 33 · 재조사 판단 · 숫자 대조와 판정 강등
//   node tests/lib/n-deep.test.js

const assert = require('assert');
const sec = require('../../scripts/data/sec-edgar');
const N = require('../../scripts/lib/n-deep');
const { asOfOf } = require('../../scripts/prepare-n-args');

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

console.log('\n[1] 공시 본문');
ok('htmlToText — 표 칸·문단·엔티티', () => {
  const t = sec.htmlToText('<div>Revenue&nbsp;grew <b>12%</b></div><table><tr><td>CAG</td><td>$1.09&#160;billion</td></tr></table><p>Q&amp;A &squarf; ok</p><script>x()</script>');
  assert.ok(/Revenue grew 12%/.test(t), t);
  assert.ok(/CAG \| \$1\.09 billion/.test(t), t);
  assert.ok(/Q&A\s+ok/.test(t) && !/x\(\)/.test(t), t);
});
const TOC = 'PART I\nItem 2. | Management’s Discussion and Analysis of Financial Condition and Results of Operations | 33\nItem 3. | Quantitative and Qualitative Disclosures | 50\n';
ok('mdnaOf 10-Q — 목차가 아니라 본문 구간, 본문 속 "Item 3" 언급에서 끊지 않는다', () => {
  const body = 'Item 2. Management’s Discussion and Analysis of Financial Condition and Results of Operations\nRevenue increased primarily driven by new instrument placements, see Item 3 for rates.\nMore detail here.\nItem 3. Quantitative and Qualitative Disclosures About Market Risk\nrates...';
  const m = sec.mdnaOf(TOC + 'Item 1. Financial Statements\n...\n' + body, '10-Q');
  assert.ok(m.startsWith('Item 2. Management’s'), m.slice(0, 60));
  assert.ok(/primarily driven by new instrument/.test(m) && /More detail here/.test(m), m);
  assert.ok(!/Market Risk/.test(m), '끝 제목 뒤까지 잘랐다');
});
ok('mdnaOf — "Item" 없이 "2. MANAGEMENT’S" 로 쓴 회사(MRNA)', () => {
  const m = sec.mdnaOf(TOC + '28\nTable of Contents\n2. MANAGEMENT’S DISCUSSION AND ANALYSIS OF FINANCIAL CONDITION AND RESULTS OF OPERATIONS\nProduct sales rose.\n3. QUANTITATIVE AND QUALITATIVE DISCLOSURES\nx', '10-Q');
  assert.ok(/Product sales rose/.test(m), m);
});
ok('mdnaOf 10-K — Item 7 부터 7A 전까지, 본문의 "Item 8" 언급은 무시', () => {
  const m = sec.mdnaOf('Item 7. Management’s Discussion and Analysis\nCloud revenue grew; see Item 8 of this report.\nGuidance raised.\nItem 7A. Quantitative and Qualitative Disclosures\nfx', '10-K');
  assert.ok(/Guidance raised/.test(m) && !/fx$/.test(m), m);
});
ok('asOfOf — 실적 8-K·10-Q·10-K 만 본다 (다른 8-K 는 무시)', () => {
  assert.strictEqual(asOfOf([{ form: '8-K', isEarnings: false, filingDate: '2026-11-05' }, { form: '10-Q', filingDate: '2026-11-02' }, { form: '8-K', isEarnings: true, filingDate: '2026-10-30' }]), '2026-11-02');
  assert.strictEqual(asOfOf([]), null);
});

console.log('\n[2] 코드 33 · 재조사');
const q = (end, rev, ni, revenue, netIncome) => ({ periodEnd: end, revenue, netIncome, yoy: { revenue: rev, netIncome: ni } });
ok('세 가지 모두 3분기 연속 상승이면 all', () => {
  const c = N.code33([q('2026-09-30', 30, 50, 100, 15), q('2026-06-30', 20, 40, 100, 12), q('2026-03-31', 10, 30, 100, 10)]);
  assert.deepStrictEqual(c.rising, { revenue: true, netIncome: true, netMargin: true }); assert.strictEqual(c.all, true);
  assert.strictEqual(c.rows[0].netMargin, 15);
});
ok('하나라도 꺾이면 all 아님 · 자료 빠지면 null · 3분기 미만이면 null', () => {
  const c = N.code33([q('a', 30, 50, 100, 15), q('b', 35, 40, 100, 12), q('c', 10, null, 100, 10)]);
  assert.strictEqual(c.rising.revenue, false); assert.strictEqual(c.rising.netIncome, null); assert.strictEqual(c.all, false);
  assert.strictEqual(N.code33([q('a', 1, 1, 1, 1)]), null);
});
ok('needN — 신규·기준 변경·지난 실패·새 공시, 그 밖엔 null', () => {
  assert.strictEqual(N.needN(null, '2026-11-02'), '신규');
  assert.strictEqual(N.needN({ v: 1, status: 'done', asOf: '2026-11-02' }, '2026-11-02'), '기준 변경');
  assert.strictEqual(N.needN({ v: N.N_V, status: 'failed' }, null), '지난 실패');
  assert.strictEqual(N.needN({ v: N.N_V, status: 'done', asOf: '2026-08-04' }, '2026-11-02'), '새 공시');
  assert.strictEqual(N.needN({ v: N.N_V, status: 'done', asOf: '2026-11-02' }, '2026-11-02'), null);
});

console.log('\n[3] 숫자 대조 · 판정 강등');
const S = (quote) => [{ title: 't', publisher: 'p', url: 'https://www.sec.gov/a.htm', date: '2026-11-02', quote }];
const C = (id, statement, quote) => ({ id, statement, evidence_level: 'sourced', sources: S(quote) });
ok('주장 숫자는 자기 인용문과만 대조 — 없으면 그 주장만 지운다 (환산은 통과)', () => {
  const it = { nVerdict: '충족', headline: 'h', narrative: '', growthLink: '', watch: [], quality: {},
    drivers: [{ what: 'inVue Dx', basis: [C('b', 'inVue Dx 를 출시했다', 'launched inVue Dx')],
      revenueImpact: [C('r1', '3분기 매출 10.9억 달러', 'revenue of $1.09 billion'), C('r2', '설치 대수 5,000대', 'placements grew strongly')], profitImpact: [], expectedGrowth: [], counter: [] }] };
  const n = N.guardN(it, '');
  assert.strictEqual(n, 1);
  assert.deepStrictEqual(it.drivers[0].revenueImpact.map((c) => c.id), ['r1']);
  assert.strictEqual(it.nVerdict, '충족');
});
ok('매출·이익 영향 근거가 없으면 충족 → 부분 충족, 동력이 다 빠지면 → 미충족', () => {
  const a = { nVerdict: '충족', drivers: [{ what: 'x', basis: [C('b', '출시', 'launched')], revenueImpact: [], profitImpact: [], expectedGrowth: [C('e', '회사 가이던스 10% 성장', 'expects 10% growth')], counter: [] }], quality: {}, watch: [] };
  N.guardN(a, ''); assert.strictEqual(a.nVerdict, '부분 충족');
  const b = { nVerdict: '부분 충족', drivers: [{ what: 'x', basis: [{ id: 'b', statement: '근거 없음', evidence_level: 'no_source', sources: [] }], revenueImpact: [], profitImpact: [], expectedGrowth: [], counter: [] }], quality: {}, watch: [] };
  N.guardN(b, ''); assert.strictEqual(b.drivers.length, 0); assert.strictEqual(b.nVerdict, '미충족');
  const c = { nVerdict: '확인 불가', drivers: [], quality: {}, watch: [] };
  N.guardN(c, ''); assert.strictEqual(c.nVerdict, '확인 불가');
});
ok('서술문 — 입력 원문·남은 주장에 없는 숫자가 든 문장만 지운다', () => {
  const it = { nVerdict: '부분 충족', drivers: [{ what: 'x', basis: [C('b', '출시', 'launched')], revenueImpact: [], profitImpact: [], expectedGrowth: [], counter: [] }], quality: {},
    narrative: '신제품이 나왔다. 매출의 37%를 차지한다. 3분기 매출은 12% 늘었다.', watch: ['다음 분기 비중 45% 넘는지', '출하가 늘어나는지'] };
  N.guardN(it, 'Revenue grew 12% in the third quarter');
  assert.strictEqual(it.narrative, '신제품이 나왔다. 3분기 매출은 12% 늘었다.');
  assert.deepStrictEqual(it.watch, ['출하가 늘어나는지']);
});
ok('이익의 질 5문항도 같은 대조를 받는다', () => {
  const it = { nVerdict: '미충족', drivers: [], watch: [], quality: { marketShare: [C('m', '점유율 40%', 'share of 40%'), C('m2', '점유율 60%', 'leading share')] } };
  N.guardN(it, '');
  assert.deepStrictEqual(it.quality.marketShare.map((c) => c.id), ['m']);
  assert.deepStrictEqual(Object.keys(it.quality), N.Q_KEYS);
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
