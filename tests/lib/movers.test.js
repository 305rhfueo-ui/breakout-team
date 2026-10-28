'use strict';
// 개장 1시간 급등 TOP 15 (2026-10-28) — 거래대금 하한 고르기 · ETF 제외 · 숫자 대조 · 메시지
//   node tests/lib/movers.test.js
const assert = require('assert');
const M = require('../../scripts/open-movers');
let pass = 0, fail = 0;
const ok = async (name, fn) => { try { await fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

(async () => {
  // 가짜 시장: 거래대금(천 달러) 이 큰 순서. 한 거래소 응답은 상승률 순 100개까지만(실측과 같게)
  const market = { NAS: Array.from({ length: 300 }, (_, i) => ({ ticker: `N${i}`, amountUsd: (300 - i) * 2e6, ratePct: 5 + (i % 50) })),
    NYS: Array.from({ length: 40 }, (_, i) => ({ ticker: `Y${i}`, amountUsd: (40 - i) * 9e6, ratePct: 6 })), AMS: [] };
  const search = async (ex, amtMinK, lo = 5, hi = 100000) => { const all = market[ex].filter((r) => r.amountUsd >= amtMinK * 1000 && r.ratePct >= lo && r.ratePct <= hi);
    return { ok: true, total: all.length, rows: [...all].sort((a, b) => b.ratePct - a.ratePct).slice(0, 100) }; };
  await ok('하한을 높은 데서부터 낮춰 "거래소마다 100개 이하 · 합계 30개 이상"에서 멈추고 거래대금 순으로 정렬', async () => {
    const r = await M.scan(search);
    // $300M 에서 나스닥이 151개라 100개에서 잘린다 → 상승률 구간으로 나눠 빠짐없이 받는다(구간마다 100개 안)
    assert.ok(r.ok && r.exact); assert.strictEqual(r.amtMinK, 300000);
    assert.strictEqual(r.rows.length, 151 + 7);                      // 나스닥 151 + 뉴욕 7 (9백만×34~40 = 3.06억~3.6억)
    for (let i = 1; i < r.rows.length; i++) assert.ok(r.rows[i - 1].amountUsd >= r.rows[i].amountUsd);
    assert.strictEqual(r.rows[0].ticker, 'N0');
  });
  await ok('구간으로 나눠도 넘치면 "일부 추정"으로 표시하고 그 자료를 쓴다', async () => {
    const r = await M.scan(async () => ({ ok: true, total: 500, rows: Array.from({ length: 100 }, (_, i) => ({ ticker: `Z${i}`, amountUsd: 1e9 - i })) }));
    assert.ok(r.ok); assert.strictEqual(r.exact, false); assert.strictEqual(r.amtMinK, 1000000);
    assert.ok(M.buildMessages([], { basis: 'b', exact: false })[0].includes('일부 추정'));
  });
  await ok('API 실패는 그대로 실패', async () => {
    assert.strictEqual((await M.scan(async () => ({ ok: false, error: 'x' }))).ok, false);
  });
  await ok('ETF 는 빼고 15개', async () => {
    const rows = Array.from({ length: 20 }, (_, i) => ({ ticker: i % 3 ? `S${i}` : `E${i}` }));
    const top = await M.pickTop(rows, async (t) => t.startsWith('E'));
    assert.strictEqual(top.length, 13); assert.ok(top.every((x) => x.ticker.startsWith('S')));
  });
  await ok('왜 올랐나 — 근거 기사에 없는 숫자 문장은 지우고, 근거가 없으면 "찾지 못했다"', () => {
    const news = [{ title: 'SoFi beats estimates, raises guidance', text: 'Net revenue rose 44% to $1.4 billion.' }];
    assert.strictEqual(M.cleanWhy({ why: '실적이 예상을 웃돌았다. 매출이 44% 늘었다. 주가가 30% 더 오를 것이다.', refs: [0] }, news).why, '실적이 예상을 웃돌았다. 매출이 44% 늘었다.');
    assert.strictEqual(M.cleanWhy({ why: '좋은 소식', refs: [] }, news).why, '기사로는 이유를 찾지 못했다');
    assert.strictEqual(M.cleanWhy({ why: '좋은 소식', refs: [5] }, news).why, '기사로는 이유를 찾지 못했다', '없는 기사 번호');
    assert.strictEqual(M.cleanWhy(null, news), null);
  });
  await ok('메시지 — 3900자 단위로 나누고 기준 시각·꼬리 문구', () => {
    const item = (i) => ({ ticker: `T${i}`, nameKo: '이름', ratePct: 7.25, price: 10, amountUsd: 2.5e9, why: { why: '이유 '.repeat(60), refs: [0] }, news: [{ title: 'x'.repeat(100), publisher: 'P', date: '2026-10-27' }] });
    const msgs = M.buildMessages(Array.from({ length: 15 }, (_, i) => item(i)), { basis: '10/28 10:30 ET 기준' });
    assert.ok(msgs.length >= 2 && msgs.every((m) => m.length <= 3900));
    assert.ok(msgs[0].startsWith('🚀 개장 1시간 급등 TOP 15 — 10/28 10:30 ET 기준'));
    assert.ok(msgs.at(-1).includes('매수 권유가 아닙니다') && msgs.at(-1).includes('티커 살까?'));
    assert.ok(msgs[0].includes('1. T0 이름 +7.3% · $10 · 대금 $2.5B'));
  });
  await ok('텔레그램 "급등" 명령', () => {
    const L = require('../../scripts/tg-listener');
    assert.deepStrictEqual(L.parseCommand('급등'), { kind: 'movers' });
    assert.ok(L.USAGE.includes('급등'));
  });
  console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
  process.exit(fail ? 1 : 0);
})();
