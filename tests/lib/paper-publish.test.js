'use strict';
// 모의투자 일지 데이터 — 공개되는 파일에 금액·수량이 없고, 누적 수익률이 곡선과 같은 정의인지.
//
//   node tests/lib/paper-publish.test.js

const assert = require('assert');
const path = require('path');
const REPO = path.join(__dirname, '..', '..');
const paper = require(path.join(REPO, 'scripts/lib/paper'));
const { buildPaper, whyEntered } = require(path.join(REPO, 'scripts/lib/paper-publish'));
const { loadRules } = require(path.join(REPO, 'scripts/lib/rules'));

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };
const rules = loadRules();
const ctx = { pivot: 100, levelIs: 'pivot', pace: 2.3, ext: 0.9, stopIs: 'lod', baseWeeks: 3 };

// 이긴 거래 하나(부분 익절 뒤 10일선 이탈) · 진 거래 하나 · 들고 있는 것 하나
const win = paper.open({ ticker: 'WIN', date: '2026-09-28', at: '0950', entry: 100, stop: 97, rules, riskPct: 0.5, regime: 'green', grade: 'A', ctx });
for (const d of ['2026-09-29', '2026-09-30']) paper.onClose(win, { date: d, close: 103, ma: 99, rules, trailMa: 10 });
paper.onClose(win, { date: '2026-10-01', close: 106, ma: 100, rules, trailMa: 10 });
const tWin = paper.onClose(win, { date: '2026-10-02', close: 104, ma: 105, rules, trailMa: 10 })[0];
const lose = paper.open({ ticker: 'LOSE', date: '2026-09-29', at: '1005', entry: 50, stop: 48.5, rules, riskPct: 0.5, regime: 'yellow', grade: 'B', ctx });
const tLose = paper.onBar(lose, { o: 49, h: 49.2, l: 48, c: 48.3, hm: '1100' }, { date: '2026-09-30', rules });
const hold = paper.open({ ticker: 'HOLD', date: '2026-10-02', at: '0945', entry: 200, stop: 194, rules, riskPct: 0.5, regime: 'green', grade: 'A', ctx });
paper.onBar(hold, { o: 201, h: 205, l: 200, c: 204, hm: '1500' }, { date: '2026-10-02', rules });
const shadow = { ...tLose, id: 'x', book: 'trail20' };
const ledger = { positions: [hold], trades: [tWin, tLose, shadow], equity: [{ date: '2026-10-02', pct: 1 }] };
const d = buildPaper(ledger, rules);

console.log('\n[1] 공개 데이터');
ok('금액·수량이 없다', () => {
  const s = JSON.stringify(d);
  assert.ok(!/"(shares|usd|qty|amount|dollars|accountUsd)"/i.test(s));
});
ok('실제 장부와 비교 장부를 섞지 않는다', () => {
  assert.strictEqual(d.stats.n, 2);
  assert.strictEqual(d.trades.length, 2);
  assert.strictEqual(d.books.trail20.n, 1);
  assert.strictEqual(d.stats.winPct, 50);
});
ok('누적 = 끝난 거래 + 보유 평가 (곡선과 같은 정의)', () => {
  const want = +(tWin.pct + tLose.pct + paper.curPct(hold)).toFixed(2);
  assert.strictEqual(d.stats.totalPct, want);
  assert.strictEqual(d.stats.open, 1);
});
ok('표본이 30건 미만이면 관찰 단계', () => assert.strictEqual(d.observing, true));
ok('매매 기록은 매수·매도가 한 줄씩, 최근 것이 위', () => {
  assert.strictEqual(d.fills.filter((f) => f.side === 'buy').length, 3);
  assert.strictEqual(d.fills.filter((f) => f.ticker === 'WIN' && f.side === 'sell').length, 2);
  assert.ok(d.fills[0].date >= d.fills[d.fills.length - 1].date);
  const part = d.fills.find((f) => f.why === '부분 익절');
  assert.ok(part.R > 1.9 && part.R < 2.1, '부분 익절의 R 은 그 체결가 기준: ' + part.R);
});
ok('매수 근거는 원장에 적힌 숫자로만 만든다', () => {
  assert.strictEqual(whyEntered(ctx), '피벗 100 돌파 · 거래량 페이스 2.3× · 10일선 이격 0.9 ADR · 손절 기준 당일 저가 · 베이스 3주');
  assert.strictEqual(whyEntered(null), '');
});
ok('거래가 하나도 없어도 만들어진다', () => {
  const e = buildPaper({ positions: [], trades: [], equity: [] }, rules);
  assert.strictEqual(e.stats.n, 0);
  assert.strictEqual(e.stats.totalPct, 0);
  assert.deepStrictEqual(e.fills, []);
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
