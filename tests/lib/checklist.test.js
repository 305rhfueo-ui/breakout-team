'use strict';
// 종목 체크표 (2026-10-08) — 쿨라매기 11 · CAN SLIM 7. AI 없이 숫자로만 판정한다.
//   node tests/lib/checklist.test.js

const assert = require('assert');
const CK = require('../../scripts/lib/checklist');
const { parseQuotePage } = require('../../scripts/data/cnbc');
const { mapPriceDetail, mapProductInfo } = require('../../scripts/lib/kis');

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };
const st = (list, item) => (list.find((x) => x.item === item) || {}).status;

// 60봉: 앞 40봉 상승, 뒤 20봉 거래량 감소
const bars = Array.from({ length: 60 }, (_, i) => ({ t: Date.UTC(2026, 7, 1) + i * 864e5, o: 100 + i, h: 102 + i, l: 99 + i, c: 101 + i, v: i < 55 ? 1000 : 400 }));
const setup = { ok: true, state: 'pre', pivot: 165, stop: 158, adrPct: 5, distToPivotPct: -3, distToPivotAdr: -0.6, riskPerSharePct: 4.2, extensionAdr: 1.1,
  metrics: { priorMovePct: 80, baseWeeks: 4, higherLows: 2, contraction: 0.7, depthPct: 18 } };
const market = { verdict: 'green', finra: 'warn' };

console.log('\n[1] 쿨라매기 11항목');
const qm = CK.qullamaggie({ item: {}, setup, bars, market });
ok('11개, 기준 문서 표 순서 그대로', () => assert.deepStrictEqual(qm.map((x) => x.item),
  ['선행 상승', '횡보 길이', '저점 높아짐', '깊이', '이평선 위', '거래량 마름', '돌파 거래량', '피벗 거리', '손절 폭', '10일선 이격', '시장']));
ok('좋은 셋업은 돌파 거래량(돌파 전)만 확인 불가, 나머지 충족', () => {
  assert.strictEqual(st(qm, '돌파 거래량'), CK.NA);
  for (const x of qm.filter((y) => y.item !== '돌파 거래량')) assert.strictEqual(x.status, CK.OK, `${x.item}: ${x.evidence}`);
});
ok('베이스가 없으면 베이스 관련 항목은 확인 불가 — 지어내지 않는다', () => {
  const q2 = CK.qullamaggie({ item: { maxRise3m: 40, ext10Adr: 3.5 }, setup: { ok: true, state: 'none' }, bars, market: { verdict: 'red' } });
  for (const k of ['횡보 길이', '저점 높아짐', '깊이', '피벗 거리', '손절 폭']) assert.strictEqual(st(q2, k), CK.NA, k);
  assert.strictEqual(st(q2, '선행 상승'), CK.OK);            // 3개월 최대상승 40%로 대신 판정
  assert.strictEqual(st(q2, '10일선 이격'), CK.NO);
  assert.strictEqual(st(q2, '시장'), CK.NO);
});
ok('이미 돌파한 종목은 피벗 거리 미충족(추격)', () => {
  const q3 = CK.qullamaggie({ setup: { ...setup, state: 'post', breakDate: new Date(bars[50].t).toISOString().slice(0, 10) }, bars, market });
  assert.strictEqual(st(q3, '피벗 거리'), CK.NO);
  assert.ok(/돌파봉 거래량/.test(q3.find((x) => x.item === '돌파 거래량').evidence));
});

console.log('\n[2] CAN SLIM 7항목');
const item = { high52: 95, volx: 2.4, ret1d: 3, rnk1: 0.5, rnk3: 5, rnk6: 30 };
const cs = CK.canslim({ item, fs: { ni: [40, 30, 12] }, detail: null, kis: { shares: 322619000 },
  cnbc: [{ url: 'https://www.cnbc.com/x.html', date: new Date().toISOString().slice(0, 10) }], market, dry: 0.6 });
ok('7개, C·A·N·S·L·I·M 순서', () => assert.deepStrictEqual(cs.map((x) => x.item[0]), ['C', 'A', 'N', 'S', 'L', 'I', 'M']));
ok('C +40% 충족, (순이익 기준) 표기', () => { assert.strictEqual(st(cs, 'C 최근 분기 이익'), CK.OK); assert.ok(/순이익 기준/.test(cs[0].evidence)); });
ok('I 는 항상 확인 불가', () => assert.strictEqual(st(cs, 'I 기관 보유'), CK.NA));
ok('S 에 한국투자증권 상장주식수가 들어간다', () => assert.ok(/323M주\(한국투자증권\)/.test(cs[3].evidence), cs[3].evidence));
ok('흑자전환 문자열은 충족, 적자확대는 미충족', () => {
  assert.strictEqual(st(CK.canslim({ item, fs: { ni: ['흑자전환', 1, 2] }, market }), 'C 최근 분기 이익'), CK.OK);
  assert.strictEqual(st(CK.canslim({ item, fs: { ni: ['적자확대', 1, 2] }, market }), 'C 최근 분기 이익'), CK.NO);
});
ok('자료가 없으면 확인 불가 — 지어내지 않는다', () => {
  const e = CK.canslim({ item: {}, market: null });
  for (const x of e) assert.strictEqual(x.status, CK.NA, x.item);
});
ok('fs 가 없으면 SEC 분기 실적으로 대신 판정', () => {
  const d = { financials: { profitLabel: '영업이익', quarters: [{ periodEnd: '2026-06-30', yoy: { profit: 12 } }] } };
  const c = CK.canslim({ item, detail: d, market });
  assert.strictEqual(st(c, 'C 최근 분기 이익'), CK.NO);
  assert.ok(/SEC/.test(c[0].evidence));
});

console.log('\n[3] 새 자료 출처 파서');
ok('CNBC 종목 페이지 — 기사·영상·Pro 구분, 날짜는 URL 에서, 중복 제거', () => {
  const html = `<a href="https://www.cnbc.com/2026/09/17/investor-steve-grasso-is-buying-cloudflare.html" class="LatestNews-headline" title="AI is giving this stock more juice">x</a>
    <a href="https://www.cnbc.com/2026/09/17/investor-steve-grasso-is-buying-cloudflare.html" class="LatestNews-headline" title="dup">x</a>
    <a href="https://www.cnbc.com/video/2026/10/05/clip.html" class="LatestNews-headline" title="Clip &#x27;net&#x27;">x</a>
    <a href="https://www.cnbc.com/2026/10/01/pro/deep-dive.html" class="LatestNews-headline" title="Pro piece">x</a>`;
  const r = parseQuotePage(html, { today: new Date('2026-10-08') });
  assert.deepStrictEqual(r.map((x) => [x.kind, x.date]), [['article', '2026-09-17'], ['pro', '2026-10-01'], ['video', '2026-10-05']]);
  assert.strictEqual(r[2].title, "Clip 'net'");
});
ok('한국투자증권 응답 매핑 (2026-10-08 NET 실측 필드)', () => {
  const d = mapPriceDetail({ perx: '586.17', pbrx: '75.06', epsx: '0.58', bpsx: '4.55', shar: '322619000', tomv: '110213102780', h52p: '370.3500', h52d: '20261006', l52p: '158.8300', l52d: '20260223', last: '341.62', base: '355.01' });
  assert.deepStrictEqual([d.per, d.eps, d.shares, d.marketCapM, d.high52Date], [586.17, 0.58, 322619000, 110213, '2026-10-06']);
  const p = mapProductInfo({ prdt_name: '클라우드플레어', prdt_eng_name: 'CLOUDFLARE INC', lstg_dt: '20190912', ovrs_excg_name: '뉴욕거래소', lstg_stck_num: '322619000' });
  assert.deepStrictEqual([p.nameKo, p.listedOn, p.exchange], ['클라우드플레어', '2019-09-12', '뉴욕거래소']);
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
