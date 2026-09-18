'use strict';
// 야후 마지막 일봉의 close 만 null 로 오는 경우(마감 후 정산 지연) 메타 종가로 메운다.
//
// 2026-09-17 실측: QQQ o716.05 h718.04 l713.32 c null / meta.regularMarketPrice 716.92(16:00 ET 확정).
//   그대로 버리면 그날 봉이 사라져 RS 세션(9/17)과 봉(9/16)이 어긋나고 3팀 돌파·50일선 판정이 하루 밀렸다.
//   ⚠️ 메우는 건 **마지막 봉 하나**뿐이다. 중간 구멍(2026-08-28 야후가 금요일을 통째로 뺀 사고)은
//      그대로 두고 market-calendar 가 barsNotice 로 표면화해야 한다.
//
//   node tests/lib/bars-lastclose.test.js

const assert = require('assert');
const ta = require('../../scripts/lib/ta');

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

// 2026-09-17 16:00 ET = 20:00 UTC
const SEC = (iso) => Math.floor(new Date(iso).getTime() / 1000);
const D16 = SEC('2026-09-16T13:30:00Z');   // 09-16 09:30 ET
const D17 = SEC('2026-09-17T13:30:00Z');   // 09-17 09:30 ET
const CLOSE17 = SEC('2026-09-17T20:00:00Z');   // 09-17 16:00 ET
const NOON17 = SEC('2026-09-17T16:00:00Z');    // 09-17 12:00 ET (장중)

function chart({ close, meta }) {
  return { chart: { result: [{
    timestamp: [D16, D17],
    indicators: { quote: [{ open: [704, 716.05], high: [706, 718.04], low: [700, 713.32], close, volume: [35688000, 36358508] }] },
    meta,
  }] } };
}

// fetch 를 갈아끼워 fetchBars 를 그대로 태운다
const realFetch = global.fetch;
const run = async (payload) => {
  global.fetch = async () => ({ ok: true, json: async () => payload });
  try { return await ta.fetchBars('QQQ', { range: '5d', interval: '1d' }); }
  finally { global.fetch = realFetch; }
};
const sync = (p) => { let out, err; run(p).then((r) => (out = r), (e) => (err = e));
  // 위 fetch 셰임은 동기적으로 resolve 되므로 마이크로태스크만 비우면 된다
  return new Promise((res) => setImmediate(() => (err ? res(Promise.reject(err)) : res(out)))); };

(async () => {
  console.log('\n[1] 마지막 봉 close 만 null — 메타 종가로 메운다');
  let r = await sync(chart({ close: [704.72, null], meta: { regularMarketPrice: 716.92, regularMarketTime: CLOSE17 } }));
  ok('종가가 채워지고 dropped 0', () => {
    assert.strictEqual(r.bars.length, 2);
    assert.strictEqual(r.bars[1].c, 716.92);
    assert.strictEqual(r.dropped, 0);
    assert.strictEqual(r.filledLast, 1);
  });

  console.log('\n[2] 메우지 않는 경우');
  r = await sync(chart({ close: [704.72, null], meta: { regularMarketPrice: 716.92, regularMarketTime: NOON17 } }));
  ok('장중(16:00 ET 전)이면 메우지 않는다', () => { assert.strictEqual(r.bars.length, 1); assert.strictEqual(r.dropped, 1); });

  r = await sync(chart({ close: [704.72, null], meta: { regularMarketPrice: 999, regularMarketTime: CLOSE17 } }));
  ok('메타 가격이 그날 고저 범위 밖이면 메우지 않는다', () => { assert.strictEqual(r.bars.length, 1); assert.strictEqual(r.dropped, 1); });

  r = await sync(chart({ close: [null, 716.92], meta: { regularMarketPrice: 716.92, regularMarketTime: CLOSE17 } }));
  ok('중간 봉의 구멍은 그대로 버린다 (2026-08-28 사고를 숨기지 않는다)', () => {
    assert.strictEqual(r.bars.length, 1);
    assert.strictEqual(r.dropped, 1);
    assert.strictEqual(r.filledLast, 0);
  });

  r = await sync(chart({ close: [704.72, 717.5], meta: { regularMarketPrice: 716.92, regularMarketTime: CLOSE17 } }));
  ok('정상 종가가 있으면 메타로 덮어쓰지 않는다', () => { assert.strictEqual(r.bars[1].c, 717.5); assert.strictEqual(r.filledLast, 0); });

  console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
  process.exit(fail ? 1 : 0);
})();
