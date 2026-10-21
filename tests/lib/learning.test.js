'use strict';
// 학습 고리 1단계 (2026-10-22) — 사지 않은 후보 기록 · 한 건 채점 · 로컬 판정 모델이 꺼져 있을 때
//   node tests/lib/learning.test.js
const assert = require('assert');
process.env.OLLAMA_URL = 'http://127.0.0.1:1';            // 아무것도 듣지 않는 곳 — 이 기기에 Ollama 가 있든 없든 같은 결과
const { watchlistOf } = require('../../scripts/lib/team6');
const { scoreAt } = require('../../scripts/paper-review');
const LJ = require('../../scripts/lib/local-judge');
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
    assert.deepStrictEqual(Object.keys(w.items[0]), ['shadowOnly', 'shadowBook', 'ticker', 'grade', 'pivot', 'stopPre', 'adrPct', 'weightPct', 'ma10', 'metrics', 'catalyst', 'price', 'sector', 'industry', 'score', 'reasons']);
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

  await ok('Ollama 가 응답하지 않으면 null — throw 하지 않는다', async () => {
    assert.strictEqual(await LJ.judgeNews({ ticker: 'X', title: 't' }), null);
    assert.strictEqual(await LJ.judgeCatalyst({ ticker: 'X', news: [{ title: 'n' }], filings: [{ filingDate: '2026-10-01', form: '8-K', items: ['2.02'] }] }), null);
  });
  await ok('촉매 입력 = Claude 가 받은 원문 제목·8-K 항목', () => {
    const s = LJ.catalystState({ ticker: 'X', news: [{ date: '2026-10-20', title: 'X beats Q3 estimates' }], filings: [{ filingDate: '2026-10-19', form: '8-K', items: ['2.02', '9.01'] }] });
    assert.ok(s.includes('X beats Q3 estimates') && s.includes('earnings results, financial exhibits'));
  });

  console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
  process.exit(fail ? 1 : 0);
})();
