'use strict';
// 6팀 자체 원장과 밤 루프 — 네트워크 없이 가짜 시세로 돌린다.
//
//   node tests/lib/paper-trader.test.js

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const REPO = path.join(__dirname, '..', '..');
const paper = require(path.join(REPO, 'scripts/lib/paper'));
const { tick, Ledger, summary, loadWatch } = require(path.join(REPO, 'scripts/paper-trader'));
const { etToEpoch } = require(path.join(REPO, 'scripts/lib/kis'));
const { loadRules } = require(path.join(REPO, 'scripts/lib/rules'));

let pass = 0, fail = 0;
const ok = async (name, fn) => { try { await fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

const rules = loadRules();
const acct = { usd: 100000, riskPct: 0.5 };
const D = '2026-09-25';
const at = (hm) => etToEpoch(D.replace(/-/g, ''), hm + '00');
const hmAt = (i) => { const m = 570 + i * 5; return String(Math.floor(m / 60)).padStart(2, '0') + String(m % 60).padStart(2, '0'); };
const mkDay = (date, px, vol) => Array.from({ length: 78 }, (_, i) => { const [o, h, l, c] = px(i); return { t: etToEpoch(date.replace(/-/g, ''), hmAt(i) + '00'), date, hm: hmAt(i), o, h, l, c, v: vol(i) }; });
const u = (i) => (i === 0 ? 5000 : 1000);
const hist = [];
for (let d = 8; d <= 24; d++) { const iso = `2026-09-${String(d).padStart(2, '0')}`; if ([12, 13, 19, 20].includes(d)) continue; hist.push(...mkDay(iso, () => [100, 100.5, 99.5, 100], u)); }
// 오늘: 09:35 봉이 102 로 끝난다(피벗 101 위) · 거래량 3배. 그 뒤 stopAt 번째 봉에서 저가가 98 로 빠진다.
const today = (stopAt = -1) => mkDay(D, (i) => (i === 0 ? [99.8, 100.5, 99, 100.2] : i === 1 ? [100.2, 102.3, 100.1, 102] : i === stopAt ? [101, 101.2, 98, 98.5] : [102.1, 102.6, 101.8, 102.3]), (i) => u(i) * 3);
const dailyBars = (close, n = 30) => Array.from({ length: n }, (_, i) => ({ t: etToEpoch(D.replace(/-/g, ''), '093000') - (n - 1 - i) * 86400000, o: 100, h: 103, l: 99, c: i === n - 1 ? close : 100, v: 1e6 }));
const provider = (bars, close = 102.3) => ({ name: 'test',
  history: async () => ({ ok: true, bars: hist }),
  today: async (t, nowMs) => ({ ok: true, bars: bars.filter((b) => b.t + 300000 <= nowMs) }),
  daily: async () => ({ ok: true, bars: dailyBars(close) }) });
const watchOf = (over = {}) => ({ regime: 'green', fresh: true, sessionDate: '2026-09-24',
  items: [{ ticker: 'AAA', grade: 'B', pivot: 101, adrPct: 4, price: 100, ma10: 98, sector: 'Tech', metrics: { baseWeeks: 3 } }], ...over });
const tmp = () => new Ledger(fs.mkdtempSync(path.join(os.tmpdir(), 'paper-test-'))).load();
const run = (ledger, hm, opts = {}) => tick({ nowMs: at(hm), sessionDate: D, ledger, watch: opts.watch === undefined ? watchOf() : opts.watch, rules, acct,
  prov: opts.prov || provider(today()), dry: !!opts.dry, log: opts.log || [], events: opts.events || [] });

(async () => {
  console.log('\n[1] 장부 — 진입·손절·익절');
  await ok('비중 = 리스크 0.5% ÷ 손절 거리, 상한 20%', () => {
    const p = paper.open({ ticker: 'X', date: D, entry: 100, stop: 97, rules, riskPct: 0.5, regime: 'green' });
    assert.strictEqual(p.weightPct, 16.7);
    assert.strictEqual(paper.open({ ticker: 'X', date: D, entry: 100, stop: 99.5, rules, riskPct: 0.5 }).weightPct, rules.risk.maxPositionPct);
    assert.strictEqual(paper.open({ ticker: 'X', date: D, entry: 100, stop: 97, rules, riskPct: 0.5, regime: 'yellow' }).weightPct, 8.3);
    assert.strictEqual(paper.open({ ticker: 'X', date: D, entry: 100, stop: 100, rules, riskPct: 0.5 }), null);
  });
  await ok('손절에 닿으면 −1R 근처, 갭으로 건너뛰면 시가에 판다', () => {
    const p = paper.open({ ticker: 'X', date: D, entry: 100, stop: 97, rules, riskPct: 0.5 });
    const t = paper.onBar(p, { o: 99, h: 99.5, l: 96.5, c: 97.2, hm: '1000' }, { date: D, rules });
    assert.strictEqual(t.why, '당일 손절');
    assert.ok(Math.abs(t.R - (97 * 0.998 - 100) / 3) < 0.01, 'R ' + t.R);
    const g = paper.open({ ticker: 'X', date: D, entry: 100, stop: 97, rules, riskPct: 0.5 });
    const t2 = paper.onBar(g, { o: 94, h: 95, l: 93, c: 94.5, hm: '0930' }, { date: '2026-09-28', rules });
    assert.strictEqual(t2.why, '손절');
    assert.ok(t2.R < -1.9, '갭 하락은 −1R 보다 크게 진다: ' + t2.R);
  });
  await ok('3일 뒤 이익 중이면 1/3 팔고 손절을 본전으로 — 그 뒤 10일선 종가 이탈에 나머지', () => {
    const p = paper.open({ ticker: 'X', date: '2026-09-21', entry: 100, stop: 97, rules, riskPct: 0.5 });
    for (const d of ['2026-09-22', '2026-09-23']) assert.deepStrictEqual(paper.onClose(p, { date: d, close: 104, ma: 99, rules, trailMa: 10 }), []);
    assert.strictEqual(p.partial, false);
    paper.onClose(p, { date: '2026-09-24', close: 106, ma: 100, rules, trailMa: 10 });
    assert.strictEqual(p.partial, true);
    assert.strictEqual(p.stop, 100);
    assert.ok(Math.abs(p.left - (1 - rules.exit.partialFraction)) < 1e-6);
    const out = paper.onClose(p, { date: '2026-09-25', close: 103, ma: 104, rules, trailMa: 10 });
    assert.strictEqual(out.length, 1);
    assert.strictEqual(out[0].why, '10일선 이탈');
    assert.ok(out[0].R > 1, 'R ' + out[0].R);
    assert.strictEqual(out[0].days, 4);
  });
  await ok('같은 날 마감 처리를 두 번 해도 보유일이 두 번 늘지 않는다', () => {
    const p = paper.open({ ticker: 'X', date: '2026-09-21', entry: 100, stop: 97, rules, riskPct: 0.5 });
    paper.onClose(p, { date: '2026-09-22', close: 101, ma: 99, rules, trailMa: 10 });
    paper.onClose(p, { date: '2026-09-22', close: 101, ma: 99, rules, trailMa: 10 });
    assert.strictEqual(p.days, 1);
  });

  console.log('\n[2] 밤 루프');
  await ok('트리거가 나면 실제 장부와 20일선 그림자 장부에 같이 적는다', async () => {
    const L = tmp(), events = [];
    const r = await run(L, '0941', { events });
    assert.strictEqual(r.fired.length, 1);
    assert.deepStrictEqual(L.positions.map((p) => p.book).sort(), ['main', 'trail20']);
    assert.strictEqual(L.main()[0].entry, +(102 * 1.002).toFixed(2));
    assert.strictEqual(L.main()[0].stop, 99);
    assert.ok(/AAA\(B\) 모의 매수/.test(events[0]));
    assert.strictEqual(L.pending.length, 1);
  });
  await ok('같은 종목을 하루에 두 번 사지 않는다', async () => {
    const L = tmp();
    await run(L, '0941');
    const r = await run(L, '0946');
    assert.strictEqual(r.fired.length, 0);
    assert.strictEqual(L.main().length, 1);
  });
  await ok('산 뒤에 손절에 닿으면 판다 (산 봉 이전의 저가는 보지 않는다)', async () => {
    const L = tmp(), prov = provider(today(6));
    await run(L, '0941', { prov });
    assert.strictEqual(L.main().length, 1);
    const r = await run(L, '1006', { prov });
    assert.strictEqual(r.closed.filter((t) => t.book === 'main').length, 1);
    assert.strictEqual(L.trades.find((t) => t.book === 'main').why, '당일 손절');
    assert.strictEqual(L.main().length, 0);
  });
  await ok('시장이 빨간불이면 사지 않는다', async () => {
    const L = tmp();
    const r = await run(L, '0941', { watch: watchOf({ regime: 'red' }) });
    assert.strictEqual(r.fired.length, 0);
    assert.strictEqual(L.positions.length, 0);
  });
  await ok('관심 목록이 직전 세션 기준이 아니면 사지 않는다', async () => {
    const L = tmp(), log = [];
    const r = await run(L, '0941', { watch: watchOf({ fresh: false }), log });
    assert.strictEqual(r.fired.length, 0);
    assert.strictEqual(log[0].fired, true, '트리거 자체는 기록한다');
  });
  await ok('진입 창(120분)이 지나면 사지 않는다', async () => {
    const late = mkDay(D, (i) => (i < 30 ? [100, 100.5, 99.5, 100] : [102, 103, 101.5, 102.8]), (i) => u(i) * 3);
    const L = tmp();
    const r = await run(L, '1230', { prov: provider(late) });
    assert.strictEqual(r.fired.length, 0);
  });
  await ok('--status 는 아무것도 바꾸지 않는다', async () => {
    const L = tmp();
    await run(L, '0941', { dry: true });
    assert.strictEqual(L.positions.length, 0);
    assert.strictEqual(L.pending.length, 0);
  });
  await ok('등급 C 는 그림자 장부에만 적는다', async () => {
    const L = tmp(), w = watchOf();
    w.items[0].shadowOnly = true; w.items[0].grade = 'C';
    const r = await run(L, '0941', { watch: w });
    assert.strictEqual(r.fired.length, 0);
    assert.deepStrictEqual(L.positions.map((p) => p.book), ['gradeC']);
  });
  await ok('장 마감 처리는 세션당 한 번', async () => {
    const L = tmp();
    await run(L, '0941');
    const a = await run(L, '1605');
    assert.strictEqual(a.eod, true);
    assert.strictEqual(L.equity.length, 1);
    const b = await run(L, '1610');
    assert.strictEqual(b.eod, undefined);
    assert.strictEqual(L.equity.length, 1);
  });
  await ok('하루 신규 진입 상한', async () => {
    const L = tmp(), w = watchOf();
    w.items = ['AAA', 'BBB', 'CCC', 'DDD'].map((t, i) => ({ ...w.items[0], ticker: t, sector: 'S' + i }));
    const r = await run(L, '0941', { watch: w });
    assert.strictEqual(r.fired.length, rules.entry.maxNewPerDay);
  });

  console.log('\n[3] 공개되는 요약');
  await ok('금액·수량이 들어 있지 않다', async () => {
    const L = tmp();
    await run(L, '0941');
    const s = JSON.stringify(summary(L, rules));
    assert.ok(!/"(shares|usd|qty|amount|dollars)"/i.test(s), s.slice(0, 200));
    assert.ok(!/100000/.test(s));
  });

  console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
  process.exit(fail ? 1 : 0);
})();
