'use strict';
// 한투 시세 모듈 — 네트워크 없이 fetch 를 갈아끼워 검사한다.
//
//   node tests/lib/kis.test.js

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'kis-test-'));
process.env.KIS_APP_KEY = 'test-key';
process.env.KIS_APP_SECRET = 'test-secret';
process.env.KIS_GAP_MS = '0';
process.env.KIS_TOKEN_FILE = path.join(TMP, 'token.json');
process.env.KIS_EXCD_FILE = path.join(TMP, 'excd.json');

const kis = require(path.join(__dirname, '..', '..', 'scripts/lib/kis'));

let pass = 0, fail = 0;
const ok = async (name, fn) => { try { await fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

const realFetch = global.fetch;
let calls = [];
// handler(url, params, init) → 응답 본문
function stub(handler) {
  calls = [];
  global.fetch = async (url, init) => {
    const u = new URL(url);
    const params = Object.fromEntries(u.searchParams);
    calls.push({ path: u.pathname, params, init });
    if (u.pathname === '/oauth2/tokenP') return { status: 200, json: async () => ({ access_token: 'TOK', expires_in: 86400 }) };
    return { status: 200, json: async () => handler(u.pathname, params, init) };
  };
}
const priceOf = (last) => ({ rt_cd: '0', output: { last, base: '100.0', tvol: '10', tamt: '1000' } });

(async () => {
  console.log('\n[1] 토큰');
  await ok('한 번 받으면 파일 캐시를 쓴다 (1분 1회 발급 제한)', async () => {
    stub(() => priceOf('10.0'));
    const a = await kis.token(), b = await kis.token();
    assert.strictEqual(a.ok && b.ok, true);
    assert.strictEqual(b.cached, true);
    assert.strictEqual(calls.filter((c) => c.path === '/oauth2/tokenP').length, 1);
  });

  console.log('\n[2] 거래소·티커');
  await ok('틀린 거래소는 last 가 비어 온다 → 다음 거래소로', async () => {
    stub((p, q) => priceOf(q.EXCD === 'NYS' ? '204.45' : ''));
    const r = await kis.price('CVX');
    assert.strictEqual(r.ok, true);
    assert.strictEqual(r.excd, 'NYS');
    assert.strictEqual(r.last, 204.45);
    assert.deepStrictEqual(calls.filter((c) => c.path.endsWith('/price')).map((c) => c.params.EXCD), ['NAS', 'NYS']);
  });
  await ok('판별한 거래소는 기억한다', async () => {
    stub((p, q) => priceOf(q.EXCD === 'NYS' ? '205.0' : ''));
    await kis.price('CVX');
    assert.deepStrictEqual(calls.map((c) => c.params.EXCD), ['NYS']);
  });
  await ok('점·하이픈 티커는 슬래시로 보낸다', async () => {
    stub((p, q) => priceOf(q.EXCD === 'NYS' ? '505.48' : ''));
    await kis.price('BRK.B');
    assert.ok(calls.every((c) => c.params.SYMB === 'BRK/B'));
    assert.strictEqual(kis.kisSymbol('brk-b'), 'BRK/B');
  });
  await ok('어느 거래소에도 없으면 ok:false (throw 하지 않는다)', async () => {
    stub(() => priceOf(''));
    const r = await kis.price('NOPE');
    assert.strictEqual(r.ok, false);
  });

  console.log('\n[3] 분봉');
  const rows = [
    { xymd: '20260925', xhms: '160000', open: '9', high: '9', low: '9', last: '9', evol: '1', eamt: '9' },     // 시간외
    { xymd: '20260925', xhms: '155500', open: '5', high: '6', low: '4', last: '5.5', evol: '300', eamt: '1650' },
    { xymd: '20260925', xhms: '093000', open: '1', high: '2', low: '0.5', last: '1.5', evol: '100', eamt: '150' },
    { xymd: '20260925', xhms: '092500', open: '8', high: '8', low: '8', last: '8', evol: '1', eamt: '8' },     // 프리마켓
  ];
  await ok('정규장(09:30~16:00 ET)만 남기고 시간순으로 돌려준다', async () => {
    stub((p) => (p.endsWith('/price') ? priceOf('1.0') : { rt_cd: '0', output1: { next: '0' }, output2: rows }));
    const r = await kis.minuteBars('QQQ', { pages: 1 });
    assert.strictEqual(r.ok, true);
    assert.deepStrictEqual(r.bars.map((b) => b.hm), ['0930', '1555']);
    assert.strictEqual(r.bars[0].date, '2026-09-25');
    assert.strictEqual(r.bars[0].v, 100);
    // 09:30 ET = 13:30 UTC (서머타임)
    assert.strictEqual(new Date(r.bars[0].t).toISOString(), '2026-09-25T13:30:00.000Z');
  });
  await ok('확장시간 포함 옵션', async () => {
    stub((p) => (p.endsWith('/price') ? priceOf('1.0') : { rt_cd: '0', output1: { next: '0' }, output2: rows }));
    const r = await kis.minuteBars('QQQ', { pages: 1, regularOnly: false });
    assert.strictEqual(r.bars.length, 4);
  });
  await ok('겨울 시간에는 09:30 ET = 14:30 UTC', async () => {
    assert.strictEqual(new Date(kis.etToEpoch('20261201', '093000')).toISOString(), '2026-12-01T14:30:00.000Z');
  });

  console.log('\n[4] 실패 처리');
  await ok('초당 거래건수 초과 → 한 번 다시 부른다', async () => {
    let n = 0;
    stub(() => (++n === 1 ? { rt_cd: '1', msg1: '초당 거래건수를 초과하였습니다.' } : priceOf('744.5')));
    const realSet = global.setTimeout;
    global.setTimeout = (fn, ms, ...a) => realSet(fn, Math.min(ms, 5), ...a);   // 1.5초 대기를 줄인다
    try {
      const r = await kis.price('QQQ');
      assert.strictEqual(r.ok, true);
      assert.strictEqual(r.last, 744.5);
    } finally { global.setTimeout = realSet; }
  });
  await ok('네트워크 오류는 { ok:false, error }', async () => {
    global.fetch = async (url) => {
      if (String(url).includes('/oauth2/')) return { status: 200, json: async () => ({ access_token: 'TOK', expires_in: 86400 }) };
      throw new Error('ECONNRESET');
    };
    const realSet = global.setTimeout;
    global.setTimeout = (fn, ms, ...a) => realSet(fn, Math.min(ms, 5), ...a);
    try {
      const r = await kis.dailyBars('QQQ');
      assert.strictEqual(r.ok, false);
      assert.ok(/ECONNRESET/.test(r.error));
    } finally { global.setTimeout = realSet; }
  });
  await ok('주문 함수가 없다', async () => {
    assert.deepStrictEqual(Object.keys(kis).filter((k) => /order|buy|sell|주문/i.test(k)), []);
  });

  global.fetch = realFetch;
  try { fs.rmSync(TMP, { recursive: true, force: true }); } catch (e) { /* noop */ }
  console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
  process.exit(fail ? 1 : 0);
})();
