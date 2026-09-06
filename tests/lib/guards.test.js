'use strict';
// 2026-09-03 감사에서 추가한 방어 4종의 회귀 테스트.
//   1. market-calendar — RS 세션일 · 야후 봉 누락 탐지
//   2. ma-guard — 지표가 비어 있는 행(X 지만 200DIV·RS null)을 "이탈"로 읽지 않는다
//   3. tracking.revertReentries — 배제 사유가 살아 있는 재편입을 되돌린다 (churn 방지)
//   4. research-rotation.selectForResearch — TTL 안이면 건너뛴다 (cap 은 목표가 아니다)
//
//   node tests/lib/guards.test.js

const assert = require('assert');
const cal = require('../../scripts/lib/market-calendar');
const { checkMaColumns, aboveMa150Of, isBlankRow } = require('../../scripts/lib/ma-guard');
const tracking = require('../../scripts/lib/tracking');
const rot = require('../../scripts/lib/research-rotation');

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

console.log('\n[1] market-calendar');
ok('RS last_updated("… UTC") → ET 마지막 거래일', () => {
  assert.strictEqual(cal.sessionDateFromUtc('2026-09-04 00:55:33 UTC'), '2026-09-03');   // 9/3 20:55 ET → 9/3 세션
  assert.strictEqual(cal.sessionDateFromUtc('2026-09-03T00:01:14Z'), '2026-09-02');
  assert.strictEqual(cal.sessionDateFromUtc('2026-08-31T01:32:00Z'), '2026-08-28');       // 일요일 저녁 → 금요일 세션
  assert.strictEqual(cal.sessionDateFromUtc(null), null);
});
ok('금요일 하나가 빠진 봉 목록에서 누락 거래일을 찾는다 (2026-08-28 사고)', () => {
  const miss = cal.missingSessions(['2026-08-24', '2026-08-25', '2026-08-26', '2026-08-27', '2026-08-31', '2026-09-01']);
  assert.deepStrictEqual(miss, ['2026-08-28']);
});
ok('휴장일(노동절 9/7)은 누락으로 보지 않는다', () => {
  assert.deepStrictEqual(cal.missingSessions(['2026-09-03', '2026-09-04', '2026-09-08']), []);
  assert.strictEqual(cal.isTradingDay('2026-09-07'), false);
  assert.strictEqual(cal.prevTradingDay('2026-09-08'), '2026-09-04');
});

console.log('\n[2] ma-guard — 빈 행');
ok('지표가 전부 null 인 행의 X 는 판정불가(null)다', () => {
  assert.strictEqual(aboveMa150Of({ Above_150_SMA: 'X', '200DIV': null, '50DIV': null, RS_6mo: null, RS_3mo: null }), null);
  assert.strictEqual(aboveMa150Of({ Above_150_SMA: 'X', '200DIV': 12.3, '50DIV': 2, RS_6mo: 0.1, RS_3mo: 0.2 }), false);
  assert.strictEqual(aboveMa150Of({ Above_150_SMA: 'O', '200DIV': null }), true);
});
ok('컬럼 자체가 없는 행은 빈 행이 아니다 (옛 스냅샷·픽스처)', () => {
  assert.strictEqual(isBlankRow({ Ticker: 'T', Above_150_SMA: 'X' }), false);
});
ok('빈 행이 15% 를 넘으면 컬럼을 못 믿는다 (2026-09-04 실측 43.6%)', () => {
  const rows = Array.from({ length: 100 }, (_, i) => (i < 40
    ? { Ticker: `B${i}`, Above_150_SMA: 'X', '200DIV': null, '50DIV': null, RS_6mo: null, RS_3mo: null }
    : { Ticker: `G${i}`, Above_150_SMA: i % 3 ? 'O' : 'X', '200DIV': i % 3 ? 15 : -5, '50DIV': 1, RS_6mo: 0.1, RS_3mo: 0.1 }));
  const c = checkMaColumns(rows);
  assert.strictEqual(c.ok, false);
  assert.ok(/비어 있는 행/.test(c.reason), c.reason);
  assert.strictEqual(c.stats.blank, 40);
});
ok('빈 행이 소수면 통과한다', () => {
  const rows = Array.from({ length: 100 }, (_, i) => (i < 5
    ? { Ticker: `B${i}`, Above_150_SMA: 'X', '200DIV': null, '50DIV': null, RS_6mo: null, RS_3mo: null }
    : { Ticker: `G${i}`, Above_150_SMA: i % 3 ? 'O' : 'X', '200DIV': i % 3 ? 15 : -5, '50DIV': 1, RS_6mo: 0.1, RS_3mo: 0.1 }));
  assert.strictEqual(checkMaColumns(rows).ok, true);
});

console.log('\n[3] tracking — 재편입 churn 방지');
const mkState = () => ({ updated: null, items: [{
  ticker: 'MXL', sector: 'Technology', industry: 'Semiconductors', added: '2026-08-05', lastPicked: '2026-09-02', pickCount: 20,
  status: 'excluded', excludedAt: '2026-09-02', excludedReason: '50일선 아래 12일 연속(2026-08-15 ~ 2026-09-01)', excludedAsOf: '2026-09-01',
  firstExcludedAt: '2026-08-18', peak: 30, peakDate: '2026-08-10', manualHold: false,
  history: [{ date: '2026-08-05', status: 'active', note: '신규 편입 (2팀 선정)' }, { date: '2026-09-02', status: 'excluded', note: '50일선 아래 12일 연속' }],
}] });
const pick = { ticker: 'MXL', sector: 'Technology', industry: 'Semiconductors', price: 25, adr: 5, bestPct: 99 };
ok('배제 사유가 그대로면 재편입을 되돌리고 히스토리를 남기지 않는다', () => {
  const st = mkState();
  const ing = tracking.ingestPicks(st, [pick], '2026-09-03');
  assert.deepStrictEqual(ing.restoredTickers, ['MXL']);
  const ctx = { MXL: { price: 25, lastBarDate: '2026-09-02', belowMa50: { ok: true, days: 13, firstBelowDate: '2026-08-15', lastBarDate: '2026-09-02' }, aboveMa150: true } };
  const blocked = tracking.revertReentries(st, '2026-09-03', ctx, ing.restoredTickers);
  const it = st.items[0];
  assert.strictEqual(blocked.length, 1);
  assert.strictEqual(it.status, 'excluded');
  assert.strictEqual(it.excludedAt, '2026-09-02', '원래 배제일이 유지된다');
  assert.strictEqual(it.firstExcludedAt, '2026-08-18');
  assert.strictEqual(it.history.length, 2, '재편입 히스토리가 남으면 안 된다');
  assert.strictEqual(it.reentryBlocked.count, 1);
  assert.strictEqual(tracking.evaluate(st, '2026-09-03', ctx).length, 0, '이미 배제라 오늘 탈락으로 다시 세지 않는다');
});
ok('배제 사유가 사라졌으면 정상 재편입된다 (peak 는 야후 종가로 초기화)', () => {
  const st = mkState();
  const ing = tracking.ingestPicks(st, [pick], '2026-09-03');
  const ctx = { MXL: { price: 25, lastBarDate: '2026-09-02', belowMa50: { ok: true, days: 0 }, aboveMa150: true } };
  const blocked = tracking.revertReentries(st, '2026-09-03', ctx, ing.restoredTickers);
  assert.strictEqual(blocked.length, 0);
  assert.strictEqual(st.items[0].status, 'active');
  assert.strictEqual(st.items[0].peak, null, 'ingest 는 peak 를 정하지 않는다');
  tracking.evaluate(st, '2026-09-03', ctx);
  assert.strictEqual(st.items[0].peak, 25, '첫 평가에서 야후 종가로 초기화');
});
ok('봉이 없으면 판정을 보류하고 재편입을 유지한다', () => {
  const st = mkState();
  const ing = tracking.ingestPicks(st, [pick], '2026-09-03');
  const blocked = tracking.revertReentries(st, '2026-09-03', {}, ing.restoredTickers);
  assert.strictEqual(blocked.length, 0);
  assert.strictEqual(st.items[0].status, 'active');
});

console.log('\n[4] research-rotation.selectForResearch');
const cache = { version: 1, detail: {}, team2: { A: { last: '2026-09-02', count: 3 }, B: { last: '2026-08-20', count: 1 }, D: { last: '2026-09-02', count: 2 } }, team4: {}, team5: {} };
const items = ['A', 'B', 'C', 'D', 'E'].map((t) => ({ ticker: t }));
ok('TTL 안(A·D)은 건너뛰고 신규(C·E)·경과(B)만 뽑는다 — cap 을 채우지 않는다', () => {
  const r = rot.selectForResearch(items, { cache, bucket: 'team2', today: '2026-09-03', ttl: 5, cap: 20 });
  assert.deepStrictEqual(r.picked.map((x) => x.ticker).sort(), ['B', 'C', 'E']);
  assert.deepStrictEqual(r.skipped.map((s) => s.key).sort(), ['A', 'D']);
});
ok('변화(changed)가 있으면 TTL 안이라도 뽑는다', () => {
  const r = rot.selectForResearch(items, { cache, bucket: 'team2', today: '2026-09-03', ttl: 5, cap: 20, changed: (it) => (it.ticker === 'A' ? '돌파' : null) });
  assert.ok(r.picked.some((x) => x.ticker === 'A'));
  assert.ok(r.why.some((w) => /A\(changed: 돌파\)/.test(w)));
});
ok('cap 은 상한으로만 작동한다', () => {
  const r = rot.selectForResearch(items, { cache, bucket: 'team2', today: '2026-09-03', ttl: 5, cap: 2 });
  assert.strictEqual(r.picked.length, 2);
  assert.ok(r.skipped.some((s) => s.why === 'cap'));
});
ok('skip 조건(4팀 ⑥ 재조사 제외)이 먼저 적용된다', () => {
  const c4 = { version: 1, detail: {}, team2: {}, team4: { X: { last: '2026-09-02', count: 5, cat: 6 } }, team5: {} };
  const r = rot.selectForResearch([{ ticker: 'X' }, { ticker: 'Y' }], { cache: c4, bucket: 'team4', today: '2026-09-03', ttl: 5, cap: 5,
    skip: (it, e) => !!(e && e.cat === 6 && rot.tradingDaysSince(e.last, '2026-09-03') < 5) });
  assert.deepStrictEqual(r.picked.map((x) => x.ticker), ['Y']);
  assert.deepStrictEqual(r.ineligible.map((x) => x.key), ['X']);
});
ok('team4Eligible — 셋업 있거나 VOL_X≥3', () => {
  assert.strictEqual(rot.team4Eligible({ congestion: { phase: 'base' }, volx: 2 }), true);
  assert.strictEqual(rot.team4Eligible({ congestion: { phase: 'none' }, volx: 3.1 }), true);
  assert.strictEqual(rot.team4Eligible({ congestion: { phase: 'none' }, volx: 2.5 }), false);
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
