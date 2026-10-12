'use strict';
// 7팀(지우) — 텔레그램 명령 해석 · 결론 안전장치 · N 심층 가드 · 텔레그램 답장 (2026-10-13)
//   node tests/lib/ondemand.test.js
const assert = require('assert');
const L = require('../../scripts/tg-listener');
const F = require('../../scripts/finish-ondemand');
const P = require('../../scripts/prepare-ondemand');
const { guardDeepItem } = require('../../scripts/lib/deep-guard');
const { unzipFirst, keyOf } = require('../../scripts/data/kis-master');
let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

console.log('\n[1] 텔레그램 명령 해석');
ok('SNOW 심층분석 · snow 분석 · 띄어쓰기', () => {
  assert.deepStrictEqual(L.parseCommand('SNOW 심층분석'), { kind: 'analyze', tickers: ['SNOW'], force: false });
  assert.deepStrictEqual(L.parseCommand('  snow   심층 분석 ').tickers, ['SNOW']);
  assert.deepStrictEqual(L.parseCommand('snow분석').tickers, ['SNOW']);
});
ok('여러 종목 · 다시 · 목록', () => {
  assert.deepStrictEqual(L.parseCommand('SNOW, NET 심층분석').tickers, ['SNOW', 'NET']);
  assert.strictEqual(L.parseCommand('SNOW 다시').force, true);
  assert.strictEqual(L.parseCommand('목록').kind, 'list');
  assert.strictEqual(L.parseCommand('BRK.B 심층분석').tickers[0], 'BRK.B');
});
ok('그 밖의 글·이상한 글자는 사용법 — 셸에 닿지 않는다', () => {
  for (const t of ['안녕', 'SNOW', '오늘 시장 어때', 'SNOW; rm -rf / 심층분석', '$(id) 분석', 'A B C D E F 분석', '`ls` 심층분석', '../etc 분석', '123 분석'])
    assert.strictEqual(L.parseCommand(t).kind, 'usage', t);
  assert.strictEqual(L.parseCommand('').kind, 'none');
});
ok('등록된 대화에서 온 글만 — chat id 는 숫자·문자 섞여도 같게 본다', () => {
  process.env.TELEGRAM_CHAT_ID = '12345';
  assert.ok(L.fromOwner({ message: { chat: { id: 12345 }, text: 'x' } }));
  assert.ok(!L.fromOwner({ message: { chat: { id: 999 }, text: 'x' } }));
  assert.ok(!L.fromOwner({ edited_message: { chat: { id: 12345 }, text: 'x' } }));
  assert.ok(!L.fromOwner({ message: { chat: { id: 12345 }, photo: [] } }));
});

console.log('\n[2] 매수 적정을 막는 조건 (코드 계산)');
const okSetup = { state: 'pre', pivot: 100, stop: 95, chase: false, extensionAdr: 1 };
const nums = { price: 98, ma50: 90 };
const gate = (o) => P.gatesOf({ market: { verdict: 'green' }, setup: okSetup, numbers: nums, earnings: null, ...o });
ok('다 괜찮으면 막지 않는다', () => assert.strictEqual(gate({}).blocked, false));
ok('시장 빨간불 · 50일선 아래 · 실적 임박/모름 · 베이스 없음 · 이미 돌파 · 추격', () => {
  const keys = (o) => gate(o).reasons.map((r) => r.key);
  assert.deepStrictEqual(keys({ market: { verdict: 'red' } }), ['market_red']);
  assert.deepStrictEqual(keys({ numbers: { price: 80, ma50: 90 } }), ['below_ma50']);
  assert.deepStrictEqual(keys({ earnings: '2026-10-15' }), ['earnings_soon']);
  assert.deepStrictEqual(keys({ earnings: 'unknown' }), ['earnings_unknown']);
  assert.deepStrictEqual(keys({ setup: { state: 'none' } }), ['no_base']);
  assert.deepStrictEqual(keys({ setup: { state: 'post', pivot: 100, breakDate: '2026-10-01' } }), ['post_breakout']);
  assert.deepStrictEqual(keys({ setup: { ...okSetup, chase: true, extensionAdr: 3 } }), ['chase']);
  assert.deepStrictEqual(keys({ market: null }), ['market_unknown']);
});

console.log('\n[3] 결론 안전장치');
const src = [{ url: 'https://www.cnbc.com/a.html', title: 't', quote: 'q' }];
const mk = (over = {}) => ({ verdict: '매수 적정', verdictLine: 'x', nVerdict: '충족', recentNews: [{ id: 'n1', evidence_level: 'sourced', sources: src }], risks: [], financials: {},
  basis: [{ point: '거래량이 말랐다', side: 'for', checkRef: '차트:거래량 마름' }, { point: '이익이 줄었다', side: 'against', checkRef: 'CANSLIM:C' }, { point: '신제품', side: 'for', checkRef: 'n1' }], conditions: [], ...over });
const input = (gates = { blocked: false, reasons: [] }) => ({ gates, checks: { qm: [{ item: '거래량 마름', status: '충족' }, { item: '피벗 거리', status: '미충족' }], canslim: [{ item: 'C 최근 분기 이익', status: '미충족' }, { item: 'L 주도주', status: '충족' }] } });
ok('막는 조건이 없고 근거가 맞으면 AI 결론 그대로', () => { const it = F.enforceVerdict(mk(), input()); assert.strictEqual(it.verdict, '매수 적정'); assert.strictEqual(it.basis.length, 3); assert.ok(!it.verdictAdjusted); });
ok("막는 조건에 걸리면 '매수 적정' → '조건부', 사유를 남긴다", () => {
  const it = F.enforceVerdict(mk(), input({ blocked: true, reasons: [{ key: 'market_red', ko: '시장 판정이 빨간불이다' }] }));
  assert.strictEqual(it.verdict, '조건부'); assert.strictEqual(it.verdictOriginal, '매수 적정');
  assert.ok(/빨간불/.test(it.verdictAdjusted.join(' '))); assert.ok(it.conditions.some((c) => /빨간불/.test(c)));
});
ok("'아니다'·'조건부'는 막는 조건이 있어도 그대로", () => assert.strictEqual(F.enforceVerdict(mk({ verdict: '아니다' }), input({ blocked: true, reasons: [{ key: 'x', ko: 'y' }] })).verdict, '아니다'));
ok('코드 체크표와 어긋난 근거는 지운다 (미충족을 유리하게 · 없는 항목 · 지워진 주장)', () => {
  const it = F.enforceVerdict(mk({ basis: [{ point: 'a', side: 'for', checkRef: '차트:피벗 거리' }, { point: 'b', side: 'for', checkRef: '차트:없는항목' }, { point: 'c', side: 'for', checkRef: 'n9' },
    { point: 'd', side: 'against', checkRef: 'CANSLIM:L' }, { point: 'e', side: 'for', checkRef: 'CANSLIM:L' }] }), input());
  assert.deepStrictEqual(it.basis.map((b) => b.point), ['e']);
});
ok('근거가 하나도 안 남으면 판정 불가, 유리한 근거가 없으면 매수 적정 불가', () => {
  assert.strictEqual(F.enforceVerdict(mk({ basis: [{ point: 'x', side: 'for', checkRef: 'zz' }] }), input()).verdict, '판정 불가');
  assert.strictEqual(F.enforceVerdict(mk({ basis: [{ point: 'x', side: 'against', checkRef: 'CANSLIM:C' }] }), input()).verdict, '조건부');
});
ok('N 을 근거로 쓰려면 검증을 거친 N 심층이 충족이어야 한다', () => {
  const b = [{ point: '신제품', side: 'for', checkRef: 'CANSLIM:N' }, { point: 'L', side: 'for', checkRef: 'CANSLIM:L' }];
  assert.strictEqual(F.enforceVerdict(mk({ basis: b, nVerdict: '충족' }), input()).basis.length, 2);
  assert.strictEqual(F.enforceVerdict(mk({ basis: b, nVerdict: '미충족' }), input()).basis.length, 1);
});

console.log('\n[4] N 심층 가드');
const drv = (o = {}) => ({ what: 'AIDR 신제품', kind: 'product', stage: '매출 발생 중', since: '', basis: [{ id: 'd1', statement: '출시', evidence_level: 'sourced', sources: src }], revenueImpact: [], profitImpact: [], expectedGrowth: [], counter: [], ...o });
ok('영향 근거가 없으면 충족 → 부분 충족, 동력이 없으면 미충족', () => {
  const a = { nVerdict: '충족', newDrivers: [drv()] }; guardDeepItem(a, {}); assert.strictEqual(a.nVerdict, '부분 충족');
  const b = { nVerdict: '충족', newDrivers: [drv({ basis: [{ id: 'd1', evidence_level: 'no_source', sources: [] }] })] }; guardDeepItem(b, {}); assert.strictEqual(b.nVerdict, '미충족'); assert.strictEqual(b.newDrivers.length, 0);
  const c = { nVerdict: '충족', newDrivers: [drv({ revenueImpact: [{ id: 'r', statement: '매출', evidence_level: 'sourced', sources: src }] })] }; guardDeepItem(c, {}); assert.strictEqual(c.nVerdict, '충족');
});
ok('N 서술문의 숫자는 그 종목 주장·입력 자료에 있어야 한다, 컨센서스는 코드가 붙인다', () => {
  const it = { nVerdict: '충족', nNarrative: '신제품 매출이 48% 늘었다. 내년 이익은 300% 늘 전망이다.', newDrivers: [drv({ revenueImpact: [{ id: 'r', statement: '48% 증가', evidence_level: 'sourced', sources: [{ url: 'https://x.com/a', title: 't', quote: 'revenue grew 48%' }] }] })] };
  const n = guardDeepItem(it, { site: { saleCy: 28.5, epsCy: 40, saleNy: null, epsNy: null } });
  assert.strictEqual(it.nNarrative, '신제품 매출이 48% 늘었다.'); assert.strictEqual(n, 1);
  assert.deepStrictEqual([it.consensus.saleCy, it.consensus.epsCy], [28.5, 40]);
});

console.log('\n[5] 텔레그램 답장 · 종목 마스터');
ok('답장은 4000자 이하, 결론·근거·링크·면책이 들어가고 금액·수량이 없다', () => {
  const rec = { ticker: 'SNOW', nameKo: '스노우플레이크', verdict: '조건부', verdictLine: '피벗 아래라 돌파 확인이 필요하다', basis: [{ point: '거래량이 말랐다', side: 'for', checkRef: 'x' }], conditions: ['피벗 384.56 을 거래량 실어 넘는지'],
    invalidation: '예비 손절 370.18 이탈', session: '2026-10-12', requestedOn: '2026-10-13', gates: { asOf: { market: '2026-10-09' } }, setup: { pivot: 384.56, stop: 370.18 },
    checks: { qm: [{ status: '충족' }], canslim: [{ status: '미충족' }] }, verified: { checked: 12 }, numberCut: 0, deep: { nVerdict: '충족', nNarrative: 'N'.repeat(5000), company: 'c', risks: [], factcheck: { removed: [] } } };
  const m = F.messages(rec);
  assert.strictEqual(m.length, 2); for (const x of m) assert.ok(x.length <= 4000);
  assert.ok(m[0].startsWith('🟡 SNOW (스노우플레이크) — 조건부')); assert.ok(m[1].includes('#tk=SNOW')); assert.ok(m[1].includes('최종 판단과 책임은 본인'));
  assert.ok(!/주\s*매수|비중\s*\d|\d+주\b|계좌/.test(m.join('\n')));
});
ok('티커 표기 통일 · zip 한 파일 풀기', () => {
  assert.strictEqual(keyOf('brk.b'), 'BRK/B'); assert.strictEqual(keyOf('BAC-L'), 'BAC/L');
  const zlib = require('zlib'), data = Buffer.from('hello\tworld\n'), comp = zlib.deflateRawSync(data), name = Buffer.from('A.COD');
  const lh = Buffer.alloc(30); lh.writeUInt32LE(0x04034b50, 0); lh.writeUInt16LE(8, 8); lh.writeUInt32LE(comp.length, 18); lh.writeUInt32LE(data.length, 22); lh.writeUInt16LE(name.length, 26);
  const cd = Buffer.alloc(46); cd.writeUInt32LE(0x02014b50, 0); cd.writeUInt16LE(8, 10); cd.writeUInt32LE(comp.length, 20); cd.writeUInt32LE(data.length, 24); cd.writeUInt16LE(name.length, 28); cd.writeUInt32LE(0, 42);
  const eo = Buffer.alloc(22); eo.writeUInt32LE(0x06054b50, 0); eo.writeUInt16LE(1, 10); eo.writeUInt32LE(46 + name.length, 12); eo.writeUInt32LE(30 + name.length + comp.length, 16);
  assert.strictEqual(unzipFirst(Buffer.concat([lh, name, comp, cd, name, eo])).toString(), 'hello\tworld\n');
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
