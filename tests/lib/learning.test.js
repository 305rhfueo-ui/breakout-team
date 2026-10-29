'use strict';
// 학습 고리 (2026-10-22) — 사지 않은 후보 기록 · 한 건 채점 · 서준 후보 학습 자료
//   node tests/lib/learning.test.js
const assert = require('assert');
const { watchlistOf, setupInput, LEARN_V } = require('../../scripts/lib/team6');
const { scoreAt } = require('../../scripts/paper-review');
let pass = 0, fail = 0;
const ok = async (name, fn) => { try { await fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

(async () => {
  const plan = (o) => ({ ticker: 'X', grade: 'A', state: 'pre', price: 100, pivot: 105, stop: 98, adrPct: 4, weightPct: 12, ma10: 99, metrics: { baseWeeks: 3 },
    catalyst: { category: 1 }, sector: 's', industry: 'i', score: 70, reasons: ['r'], ...o });
  const t6 = { generated: '2026-10-22', sessionDate: '2026-10-21', rulesVersion: 3, regime: 'red',
    plans: [plan({ ticker: 'W', watch: true }), plan({ ticker: 'C', shadowBook: 'gradeC', grade: 'C' }), plan({ ticker: 'B', blocked: '시장 빨간불 — 신규 매수 중단' })],
    post: [plan({ ticker: 'P', state: 'post', breakDate: '2026-10-20' })] };
  const w = watchlistOf(t6);
  await ok('items(밤 매매가 읽는 것)는 그대로 — 관심·그림자만', () => {
    assert.deepStrictEqual(w.items.map((x) => x.ticker), ['W', 'C']);
    assert.deepStrictEqual(Object.keys(w.items[0]), ['shadowOnly', 'shadowBook', 'ticker', 'grade', 'pivot', 'stopPre', 'adrPct', 'weightPct', 'ma10', 'metrics', 'catalyst', 'price', 'sector', 'industry', 'score', 'reasons', 'fit']);   // 정확 비교 유지 — 수량·금액이 새어 들어가지 않게
  });
  await ok('others = 막힌 후보(사유)·이미 돌파한 후보, 비중·수량 없음', () => {
    assert.deepStrictEqual(w.others.map((x) => [x.ticker, x.kind, x.blocked || x.breakDate]), [['B', 'blocked', '시장 빨간불 — 신규 매수 중단'], ['P', 'post', '2026-10-20']]);
    assert.ok(!/weightPct|qty|shares/.test(JSON.stringify(w.others)));
    assert.strictEqual(w.others[0].catalyst, 1);
  });

  const bar = (d, h, l, c) => ({ t: Date.UTC(2026, 9, d, 20), o: c, h, l, c });
  const bars = [bar(1, 101, 99, 100), bar(2, 104, 99, 103), bar(5, 107, 104, 106), bar(6, 112, 105, 110), bar(7, 111, 108, 109)];
  await ok('한 건 채점 — asOf 다음 봉부터 · 피벗 위 종가에 샀다면 R · 손절 닿으면 -1R', () => {
    const s = scoreAt(bars, { asOf: '2026-10-01', price: 100, pivot: 105, stop: 98 }, 3);
    assert.deepStrictEqual([s.sessions, s.lastDate, s.broke, s.brokeOn, s.retPct, s.maxUpPct, s.maxDownPct, s.r], [3, '2026-10-06', true, '2026-10-05', 10, 12, -1, 0.5]);
    const hit = scoreAt([...bars.slice(0, 3), bar(6, 107, 97, 104)], { asOf: '2026-10-01', price: 100, pivot: 105, stop: 98 }, 3);
    assert.strictEqual(hit.r, -1);
    assert.strictEqual(scoreAt(bars, { asOf: '2026-10-07', price: 100 }, 10).sessions, 0);
    assert.strictEqual(scoreAt(bars, { asOf: '2026-10-01', price: 100 }, 3).r, null, '피벗 없으면 R 없음');
  });

  // ── 학습 자료 · 야후 기사 · "살까?" (2026-10-26) ──
  const PR = require('../../scripts/paper-review');
  await ok('학습 입력은 fitOf 로만 들어간다 — 계획 객체엔 없고, 없으면 null', () => {
    const f = { v: LEARN_V, at: '2026-10-22', in: setupInput(t6.plans[0], 'red') };
    const w2 = watchlistOf(t6, new Map([['W|105', f]]));
    assert.strictEqual(w2.items[0].fit.in.baseWeeks, 3); assert.strictEqual(w2.items[1].fit, null); assert.strictEqual(w.items[0].fit, null);
    assert.ok(!('fit' in t6.plans[0]));
    assert.ok(!/weight|qty|shares|usd|amount/i.test(JSON.stringify(f.in)), '입력에 수량·금액 없음');
  });
  await ok('학습 자료 — 5세션 뒤 기록 생성, 21세션 뒤 같은 기록에 채움, 두 번 돌려도 같음, QQQ 없으면 라벨 null', () => {
    const fit = { v: LEARN_V, at: '2026-10-01', in: {}, nimble: { fit: 3, redFlag: 0.1 } };   // 10/26~28 기록엔 모델 점수가 남아 있다 — 학습 자료엔 입력만
    const rec = { src: 'cand', ticker: 'X', pivot: 105, asOf: '2026-10-01', setup: 'pre', kind: 'k', grade: 'A', regime: 'red', fit };
    const o5 = { src: 'cand', ticker: 'X', pivot: 105, h: 5, retPct: 4, maxUpPct: 6, maxDownPct: -1, broke: true, r: 0.5, qqqPct: 1 };
    const map = {};
    assert.deepStrictEqual(PR.updateSetups(map, [rec], [o5], '2026-10-10'), { added: 1, filled: 1 });
    assert.deepStrictEqual(map['X|105'].fit, { v: LEARN_V, at: '2026-10-01', in: {} });
    assert.strictEqual(map['X|105'].up1w, true); assert.strictEqual(map['X|105'].up1m, null);
    assert.deepStrictEqual(PR.updateSetups(map, [rec], [o5], '2026-10-10'), { added: 0, filled: 0 }, '중복 없음');
    PR.updateSetups(map, [rec], [{ ...o5, h: 21, retPct: -2, qqqPct: null }], '2026-11-01');
    assert.strictEqual(map['X|105'].out[21].retPct, -2); assert.strictEqual(map['X|105'].up1m, null, 'QQQ 없으면 null');
    PR.updateSetups(map, [{ ...rec, fit: null, ticker: 'Y' }], [], '2026-11-01');
    assert.ok(!map['Y|105'], '입력 없는 후보(10/26 이전 목록)는 학습 자료에 넣지 않음');
  });
  await ok('학습 조건 — 1주 정답 1,000건 · 빨간불·초록불 각 100건', () => {
    const m = {}; for (let i = 0; i < 1000; i++) m['T' + i] = { up1w: true, regime: i < 500 ? 'red' : 'green' };
    assert.strictEqual(PR.retrainStatus(m).ready, true); assert.strictEqual(PR.retrainStatus({ a: { up1w: true, regime: 'red' } }).ready, false);
  });
  await ok('야후 기사 거르기 — 그 티커가 있고 3개 이하 · 14일 · STORY · 가격 소음 제외', () => {
    const { parseNews } = require('../../scripts/data/yahoo-estimates');
    const now = Date.parse('2026-10-25T00:00:00Z'), t = (d) => Date.parse(d) / 1000;
    const news = [
      { type: 'STORY', title: 'Novartis drug cuts MS relapses in Phase III', link: 'u1', publisher: 'MB', relatedTickers: ['NVS'], providerPublishTime: t('2026-10-24') },
      { type: 'STORY', title: 'Stocks making the biggest moves midday', link: 'u2', relatedTickers: ['NVS'], providerPublishTime: t('2026-10-24') },
      { type: 'STORY', title: 'Moderna, Meta, SpaceX and more', link: 'u3', relatedTickers: ['NVS', 'META', 'SPCX', 'BE'], providerPublishTime: t('2026-10-24') },
      { type: 'STORY', title: 'old news', link: 'u4', relatedTickers: ['NVS'], providerPublishTime: t('2026-09-01') },
      { type: 'VIDEO', title: 'video', link: 'u5', relatedTickers: ['NVS'], providerPublishTime: t('2026-10-24') },
      { type: 'STORY', title: 'Other company', link: 'u6', relatedTickers: ['MRK'], providerPublishTime: t('2026-10-24') }];
    assert.deepStrictEqual(parseNews({ news }, 'NVS', now).map((x) => x.url), ['u1']);
    assert.strictEqual(parseNews({ news }, 'NVS', now)[0].via, 'Yahoo');
  });
  await ok('"살까?" 명령 · 실장 형식 메시지(판정 말만 바꿈 · 팀 의견 · 수량 없음)', () => {
    const L = require('../../scripts/tg-listener');
    assert.deepStrictEqual(L.parseCommand('SNOW 살까?'), { kind: 'analyze', tickers: ['SNOW'], force: false, ask: 'buy' });
    assert.strictEqual(L.parseCommand('NET, ZS 사도 될까').tickers.join(), 'NET,ZS');
    assert.strictEqual(L.parseCommand('삼성전자 살까?').kind, 'usage');
    assert.ok(L.USAGE.includes('살까?'));
    const { messages } = require('../../scripts/finish-ondemand');
    const rec = { ticker: 'SNOW', verdict: '조건부', verdictLine: 'VLINE', basis: [{ side: 'for', point: 'P1' }], conditions: [], invalidation: '', checks: { qm: [], canslim: [] },
      gates: { asOf: {} }, session: '2026-10-23', deep: { factcheck: { removed: [] } }, verified: { checked: 3 }, market: { verdict: 'red' }, industryRank: { frank: 3, headline: 'HL' },
      teamView: { seojun: { grade: 'B', state: 'pre', watch: false, blocked: '시장 빨간불' }, doyun: { lists: ['RS 1개월'], lead: 'LEAD' }, jaemin: null, holding: { side: 'long' } } };
    const [m1, m2] = messages(rec, { ask: 'buy' });
    for (const k of ['🧑‍💼 실장 — SNOW', '결론: 🟡 조건이 맞으면', '[팀 의견]', '🔴 빨간불', 'B등급', 'RS 1개월 — LEAD', '거래량 급증 종목 아님', '업종 순위 3위', '이미 보유 중']) assert.ok(m1.includes(k), `없음: ${k}`);
    assert.ok(m2.includes('최종 결정과 책임은 사장님'));
    assert.ok(!/부합도|Nimble|Laya/.test(m1), '로컬 모델 점수는 뺐다(2026-10-29)');
    assert.ok(messages(rec)[0].startsWith('🟡 SNOW — 조건부'), '"심층분석"은 지금 형식 그대로');
    assert.ok(!/qty|수량|주\b|\$\d/.test(m1));
  });

  console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
  process.exit(fail ? 1 : 0);
})();
