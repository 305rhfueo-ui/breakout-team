'use strict';
// 텔레그램 알림 — 설정이 없으면 조용히 건너뛰고, 아침 메시지에 관심 종목만 실리는지.
//
//   node tests/lib/notify.test.js

const assert = require('assert');
const path = require('path');
const nt = require(path.join(__dirname, '..', '..', 'scripts/lib/notify'));

let pass = 0, fail = 0;
const ok = async (name, fn) => { try { await fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

const t6 = { generated: '2026-09-28', sessionDate: '2026-09-25', regime: 'green', earningsOk: true,
  plans: [
    { ticker: 'HNGE', grade: 'A', watch: true, price: 95.57, pivot: 96.66, stop: 92.2, distToPivotPct: -1.13, riskPerSharePct: 4.61, weightPct: 10.8, lastRead: { verdict: 'keep' } },
    { ticker: 'MRVL', grade: 'C', watch: false, blocked: '등급 C', price: 261.94, pivot: 274.95, stop: 256.9, distToPivotPct: -4.7, riskPerSharePct: 6.5, weightPct: 7.6 },
  ],
  post: [{ ticker: 'ZS' }, { ticker: 'CRWD' }] };

(async () => {
  const saved = { t: process.env.TELEGRAM_TOKEN, c: process.env.TELEGRAM_CHAT_ID };
  const realFetch = global.fetch;

  console.log('\n[1] 전송');
  await ok('설정이 없으면 보내지 않는다 (네트워크를 건드리지 않는다)', async () => {
    delete process.env.TELEGRAM_TOKEN; delete process.env.TELEGRAM_CHAT_ID;
    let called = 0; global.fetch = async () => { called++; throw new Error('호출되면 안 된다'); };
    const r = await nt.notify('x');
    assert.strictEqual(r.ok, false);
    assert.strictEqual(r.error, 'not configured');
    assert.strictEqual(called, 0);
  });
  await ok('보낼 때 받는 사람과 본문을 넣는다', async () => {
    process.env.TELEGRAM_TOKEN = 'T'; process.env.TELEGRAM_CHAT_ID = '42';
    let seen = null;
    global.fetch = async (url, init) => { seen = { url, body: JSON.parse(init.body) }; return { status: 200, json: async () => ({ ok: true, result: {} }) }; };
    const r = await nt.notify('안녕');
    assert.strictEqual(r.ok, true);
    assert.ok(seen.url.endsWith('/botT/sendMessage'));
    assert.deepStrictEqual([seen.body.chat_id, seen.body.text], ['42', '안녕']);
  });
  await ok('실패해도 throw 하지 않는다', async () => {
    global.fetch = async () => { throw new Error('ECONNRESET'); };
    const r = await nt.notify('x');
    assert.strictEqual(r.ok, false);
    assert.ok(/ECONNRESET/.test(r.error));
    global.fetch = async () => ({ status: 401, json: async () => ({ ok: false, description: 'Unauthorized' }) });
    assert.strictEqual((await nt.notify('x')).error, 'Unauthorized');
  });

  console.log('\n[2] 아침 메시지');
  const msg = nt.watchMessage(t6, (p) => (p.ticker === 'HNGE' ? 111 : null));
  await ok('관심 종목만 싣는다 — 뺀 종목은 없다', async () => {
    assert.ok(msg.includes('오늘 밤 관심 종목 1개'));
    assert.ok(msg.includes('HNGE (A) 현재 95.57'));
    assert.ok(msg.includes('넘으면 사는 선 96.66 (-1.13%)'));
    assert.ok(!msg.includes('MRVL'));
  });
  await ok('수량과 차트 소견이 붙는다', async () => {
    assert.ok(msg.includes('비중 10.8% · 111주 · 차트 소견 유지'), msg);
  });
  await ok('이미 넘은 종목은 따로 적는다', async () => assert.ok(msg.includes('이미 넘은 종목(따라 사지 않음): ZS · CRWD')));
  await ok('시장이 빨간불이면 그렇게 말한다', async () => {
    assert.ok(nt.watchMessage({ ...t6, regime: 'red', plans: [] }).includes('🔴 빨강 — 신규 매수 중단'));
    assert.ok(nt.watchMessage({ ...t6, plans: [] }).includes('오늘 밤은 살 것이 없습니다'));
  });
  await ok('실적 달력을 못 받은 날은 경고한다', async () => assert.ok(nt.watchMessage({ ...t6, earningsOk: false }).includes('실적 달력을 받지 못했습니다')));

  global.fetch = realFetch;
  if (saved.t) process.env.TELEGRAM_TOKEN = saved.t; else delete process.env.TELEGRAM_TOKEN;
  if (saved.c) process.env.TELEGRAM_CHAT_ID = saved.c; else delete process.env.TELEGRAM_CHAT_ID;
  console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
  process.exit(fail ? 1 : 0);
})();
