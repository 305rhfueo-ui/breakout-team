'use strict';
// 도윤 5개 목록 (2026-10-06) — 거래대금 상위 · RS 1/3/6개월 상위 2% · 세 기간 모두.
//   node tests/lib/lists.test.js

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const L = require('../../scripts/lib/lists');

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

// __p = 자체 백분위(높을수록 강함). 98 이상이 상위 2%.
const row = (t, { p1 = 50, p3 = 50, p6 = 50, r1d = 0, dv = 10, ind = 'Software - Infrastructure', sector = 'Technology' } = {}) => ({
  Ticker: t, Sector: sector, Industry: ind, Ret_1D_Pct: r1d, Ret_5D_Pct: r1d * 2, Dollar_Vol_M: dv,
  ADR_20D: 5, '10DIV': 10, BBWTHD: 0.12, BBWTHD_LOW: 0.1, Above_50_SMA: 'O', VOL_X: 2.5, Max_Rise_3M_Pct: 45, High_52W_Pct: 95,
  __p: { RS_1mo: p1, RS_3mo: p3, RS_6mo: p6 },
});
const rows = [
  row('AAA', { p1: 99, p3: 99, p6: 99, r1d: 6, dv: 500 }),
  row('BBB', { p1: 99.5, p3: 98.5, p6: 98.2, r1d: 8, dv: 900 }),
  row('CCC', { p1: 98.1, r1d: 4.9, dv: 5000 }),                             // +5% 미만 → 거래대금 목록 제외
  row('ETF1', { p1: 99.9, p3: 99.9, p6: 99.9, r1d: 9, dv: 99999, ind: 'ETF', sector: 'ETF' }),   // ETF 는 어디에도 없다
  row('DDD', { p6: 99, r1d: 7, dv: 50, ind: 'Biotechnology', sector: 'Healthcare' }),
  ...Array.from({ length: 25 }, (_, i) => row(`Z${i}`, { r1d: 5 + i / 10, dv: 1 + i, ind: `Ind${i}` })),
];
const S = L.buildLists(rows);

console.log('\n[1] buildLists');
ok('거래대금 상위 — +5% 이상만, 거래대금 내림차순, 20개 상한, ETF 제외', () => {
  const t = S.dollar.items.map((i) => i.ticker);
  assert.strictEqual(t.length, 20);
  assert.deepStrictEqual(t.slice(0, 3), ['BBB', 'AAA', 'DDD']);
  assert.ok(!t.includes('CCC') && !t.includes('ETF1'));
});
ok('RS 목록은 __p ≥ 98 (사이트 2% 그대로 — ADR·150일선 필터 없음), 강한 순', () => {
  assert.deepStrictEqual(S.m1.items.map((i) => i.ticker), ['BBB', 'AAA', 'CCC']);
  assert.deepStrictEqual(S.m6.items.map((i) => i.ticker), ['AAA', 'DDD', 'BBB']);
});
ok('RS(1~6MO) = 세 기간 모두 상위 2%', () => assert.deepStrictEqual(S.all.items.map((i) => i.ticker), ['AAA', 'BBB']));
ok('공통 업종(2종목 이상) 과 업종 공통 없음(lone) 이 나뉜다', () => {
  assert.deepStrictEqual(S.m6.industries.clusters.map((c) => [c.name, c.count]), [['Software - Infrastructure', 2]]);
  assert.deepStrictEqual(S.m6.lone, ['DDD']);
});
ok('쿨라매기 판단용 파생값', () => {
  const a = S.all.items[0];
  assert.strictEqual(a.ext10Adr, 2);       // 10DIV 10 ÷ ADR 5
  assert.strictEqual(a.squeeze, 1.2);      // 0.12 ÷ 0.1
  assert.strictEqual(a.above50, 'O');
  assert.strictEqual(a.rnk1, 1);           // 상위 1%
  assert.strictEqual(a.ret1d, 6);
});
ok('사이트에 전일比·거래대금 열이 없는 날은 빈 목록 + 사유', () => {
  const old = rows.map(({ Ret_1D_Pct, Dollar_Vol_M, ...r }) => r);
  const s2 = L.buildLists(old);
  assert.strictEqual(s2.dollar.count, 0);
  assert.ok(s2.dollar.note);
  assert.strictEqual(s2.m1.count, 3, 'RS 목록은 그대로 나와야 한다');
});

console.log('\n[2] 우선순위·합집합');
ok('listRankOf — 거래대금·세 기간 공통 0, 1개월 1, 3·6개월 2 (가장 높은 등급)', () => {
  const r = L.listRankOf(S);
  assert.strictEqual(r.get('AAA'), 0);
  assert.strictEqual(r.get('CCC'), 1);
  assert.strictEqual(r.get('ETF1'), undefined);
});
ok('unionTickers — 중복 없이', () => {
  const u = L.unionTickers(S);
  assert.strictEqual(u.length, new Set(u).size);
  assert.ok(u.includes('DDD') && u.includes('CCC'));
});

console.log('\n[3] 팝업 차트용 봉 파일');
ok('window.OHLC 로 쓰고, 오늘 목록에 없는 종목 파일은 지운다', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ohlc-'));
  fs.writeFileSync(path.join(dir, 'OLD.js'), 'x');
  const bars = Array.from({ length: 200 }, (_, i) => ({ t: Date.UTC(2026, 0, 1) + i * 864e5, o: 1, h: 2, l: 0.5, c: 1.5, v: 1000 + i }));
  const r = L.writeOhlcFiles(['AAA', 'NOBARS'], (t) => (t === 'AAA' ? bars : null), dir);
  assert.deepStrictEqual(r, { written: 1, pruned: 1 });
  const w = {}; new Function('window', fs.readFileSync(path.join(dir, 'AAA.js'), 'utf8'))(w);
  assert.strictEqual(w.OHLC.AAA.length, 126, '최근 126봉만');
  assert.deepStrictEqual(w.OHLC.AAA[125].slice(1), [1, 2, 0.5, 1.5, 1199]);
  fs.rmSync(dir, { recursive: true });
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
