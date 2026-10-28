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
  await ok('기사 정리 — 근거에 없는 숫자 문장은 지우고, 인용은 본문에 있어야, 근거가 없으면 "찾지 못했다"', () => {
    const news = [{ title: 'SoFi beats estimates, raises guidance', text: '', body: 'SoFi reported that adjusted net revenue climbed 44% year-over-year to a record $1.4 billion. Shares rose.' },
      { title: 'SoFi joins new index', text: 'SoFi was added to an index on Monday.' }];
    const s = M.cleanStory({ headline: '실적 서프라이즈·가이던스 상향', detail: '조정 순매출이 44% 늘어 14억 달러였다. 주가는 30% 더 오를 것이다.',
      quote: 'SoFi reported that adjusted net revenue climbed 44% year-over-year to a record $1.4 billion.', quoteFrom: 0, others: [{ n: 1, line: '지수에 새로 편입됐다.' }], refs: [0] }, news);
    assert.strictEqual(s.detail, '조정 순매출이 44% 늘어 14억 달러였다.');
    assert.ok(s.quote.startsWith('SoFi reported') && s.quoteFrom === 0);
    assert.deepStrictEqual(s.others, [{ n: 1, line: '지수에 새로 편입됐다.' }]);
    assert.strictEqual(M.cleanStory({ headline: 'h', detail: 'd', quote: 'This sentence is not in the body at all.', quoteFrom: 0, others: [], refs: [0] }, news).quote, '', '본문에 없는 인용은 지운다');
    const none = M.cleanStory({ headline: '좋은 소식', detail: '좋다', quote: '', quoteFrom: -1, others: [], refs: [] }, news);
    assert.strictEqual(none.detail, '기사로는 이유를 찾지 못했다'); assert.strictEqual(none.headline, '');
    assert.strictEqual(M.cleanStory(null, news), null);
    assert.strictEqual(M.cleanStory({ headline: 'h', detail: '실적이 좋았다(기사 0, 요약 기준). 매출이 44% 늘었다 (기사 0).', quote: '', quoteFrom: -1, others: [], refs: [0] }, news).detail,
      '실적이 좋았다. 매출이 44% 늘었다.', '내부 기사 번호는 지운다');
  });
  await ok('메시지 — 3900자 단위로 나누고 기준 시각·꼬리 문구', () => {
    const item = (i) => ({ ticker: `T${i}`, nameKo: '이름', ratePct: 7.25, price: 10, amountUsd: 2.5e9,
      story: { headline: '핵심', detail: '자세히 '.repeat(60), quote: 'Quoted sentence from the body text.', quoteFrom: 0, others: [], refs: [0] }, news: [{ title: 'x'.repeat(100), publisher: 'P', date: '2026-10-27' }] });
    const msgs = M.buildMessages(Array.from({ length: 15 }, (_, i) => item(i)), { basis: '10/28 10:30 ET 기준' });
    assert.ok(msgs.length >= 2 && msgs.every((m) => m.length <= 3900));
    assert.ok(msgs[0].startsWith('🚀 9팀 나래 · 개장 1시간 급등 TOP 15 — 10/28 10:30 ET 기준'));
    assert.ok(!msgs[0].includes('🧩'), 'AI 정리가 없으면(themes null) 공통 테마가 없다고 단정하지 않는다');
    assert.ok(msgs.at(-1).includes('매수 권유가 아닙니다') && msgs.at(-1).includes('티커 살까?'));
    assert.ok(msgs[0].includes('1. T0 이름 +7.3% · $10 · 대금 $2.5B\n📌 핵심\n자세히'));
    assert.ok(msgs[0].includes('“Quoted sentence from the body text.” — P 10-27') && msgs[0].includes('근거: x'));
  });
  await ok('공통 테마 — 근거 기사가 있는 종목만, 둘 이상일 때만, 숫자는 그 기사와 대조 · 같은 업종은 코드가 센다', () => {
    const list = [
      { ticker: 'LITE', industry: 'Communication Equipment', news: [{ title: 'Lumentum rallies', text: 'Lumentum rallied after StoneX initiated coverage with a Buy rating, citing AI-related demand stretching into 2029.' }] },
      { ticker: 'COHR', industry: 'Scientific & Technical Instruments', news: [{ title: 'Coherent jumps', body: 'Coherent jumped 5.6% after StoneX initiated coverage with a Buy rating.' }] },
      { ticker: 'CRDO', industry: 'Semiconductors', news: [] },
      { ticker: 'ALAB', industry: 'Semiconductors', news: [{ title: 'Astera Labs product' }] },
    ];
    const t = M.cleanThemes([
      { name: 'AI 광부품(StoneX 매수 개시)', why: 'StoneX가 매수 의견으로 분석을 시작했다. 목표가가 50% 높다.', members: [{ ticker: 'lite', n: 0 }, { ticker: 'COHR', n: 0 }, { ticker: 'CRDO', n: 0 }] },
      { name: 'AI 반도체', why: '같이 올랐다', members: [{ ticker: 'CRDO', n: 0 }, { ticker: 'ALAB', n: 0 }] },
      { name: '없는 종목', why: 'x', members: [{ ticker: 'ZZZ', n: 0 }, { ticker: 'LITE', n: 0 }] }], list);
    assert.strictEqual(t.length, 1, '근거 기사가 있는 종목이 하나뿐인 테마는 버린다');
    assert.deepStrictEqual(t[0].members.map((x) => x.ticker), ['LITE', 'COHR'], '기사 없는 CRDO 는 뺀다');
    assert.strictEqual(t[0].why, 'StoneX가 매수 의견으로 분석을 시작했다.', '근거에 없는 숫자 문장은 지운다');
    assert.deepStrictEqual(M.industryGroups(list), [{ industry: 'Semiconductors', ko: '반도체', tickers: ['CRDO', 'ALAB'] }]);
    const msg = M.buildMessages(list.map((m) => ({ ...m, nameKo: '', ratePct: 6, price: 1, amountUsd: 2e9, story: null })), { basis: 'b', themes: t })[0];
    assert.ok(msg.includes('🧩 공통 테마\n· AI 광부품(StoneX 매수 개시) — LITE·COHR\n  StoneX가 매수 의견으로 분석을 시작했다.\n· 같은 업종: 반도체 2종목(CRDO·ALAB)'));
    assert.ok(msg.includes('3. CRDO +6.0% · $1 · 대금 $2.0B · 반도체'));
    assert.ok(M.buildMessages([], { basis: 'b', themes: [] })[0].includes('뚜렷한 공통 테마 없음'));
  });
  await ok('대시보드 자료 — 기사 본문·요약문은 싣지 않는다', () => {
    const d = M.dashboardData([{ ticker: 'COHR', ratePct: 6, price: 1, amountUsd: 2e9, industry: 'Semiconductors', story: null,
      news: [{ title: 'T', url: 'https://x', date: '2026-10-27', publisher: 'P', text: 'SUMMARYTEXT', body: 'BODYTEXT' }] }], { basis: 'b', themes: null, updated: 'u' });
    assert.ok(!/SUMMARYTEXT|BODYTEXT/.test(JSON.stringify(d)));
    assert.deepStrictEqual(d.themes, []); assert.strictEqual(d.items[0].industryKo, '반도체');
  });
  await ok('텔레그램 "급등" 명령', () => {
    const L = require('../../scripts/tg-listener');
    assert.deepStrictEqual(L.parseCommand('급등'), { kind: 'movers' });
    assert.ok(L.USAGE.includes('급등'));
  });
  console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
  process.exit(fail ? 1 : 0);
})();
