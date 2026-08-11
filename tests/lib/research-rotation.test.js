'use strict';
// 리서치 로테이션 회귀 테스트.
//
// 이 모듈이 없던 시절의 버그: 매 실행 bestPct 상위 10개만 조사되고 나머지 44종목은
// 영원히 미조사인데 화면엔 "며칠 안에 전량 커버"라고 떴다. 아래 단언들이 그 재발을 막는다.
//
//   node tests/lib/research-rotation.test.js

const assert = require('assert');
const path = require('path');
const REPO = path.join(__dirname, '..', '..');
const R = require(path.join(REPO, 'scripts/lib/research-rotation'));

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

const TODAY = '2026-08-11';                                  // 화요일
const mk = (ticker, sector, industry, m) => ({ ticker, sector, industry, bestPct: m });
const cacheWith = (bucket, entries) => {
  const c = R.emptyCache();
  for (const [t, d] of Object.entries(entries)) c[bucket][t] = { last: d, count: 1 };
  return c;
};

console.log('\n[1] tradingDaysSince — 주말을 건너뛴다');
ok('금요일 → 월요일 = 1거래일', () => assert.strictEqual(R.tradingDaysSince('2026-08-07', '2026-08-10'), 1));
ok('월요일 → 다음 월요일 = 5거래일', () => assert.strictEqual(R.tradingDaysSince('2026-08-03', '2026-08-10'), 5));
ok('같은 날 = 0', () => assert.strictEqual(R.tradingDaysSince(TODAY, TODAY), 0));
ok('기록 없으면 Infinity', () => assert.strictEqual(R.tradingDaysSince(null, TODAY), Infinity));
ok('미래 날짜여도 음수가 되지 않는다', () => assert.strictEqual(R.tradingDaysSince('2026-09-01', TODAY), 0));

console.log('\n[2] flowRankOf');
ok('leading < inflow < narrow < 그 외', () => {
  const m = R.flowRankOf([
    { key: 'Technology|Software - Infrastructure', flow: 'inflow' },
    { key: 'Technology|Semiconductors', flow: 'outflow' },
    { key: 'Healthcare|Biotechnology', flow: 'leading' },
    { key: 'Energy|Oil & Gas', flow: 'narrow' },
  ]);
  assert.strictEqual(m.get('Healthcare|Biotechnology'), 0);
  assert.strictEqual(m.get('Technology|Software - Infrastructure'), 1);
  assert.strictEqual(m.get('Energy|Oil & Gas'), 2);
  assert.strictEqual(m.get('Technology|Semiconductors'), 3);
});
ok('flow 데이터가 없으면 빈 Map (오프라인에서 조용히 퇴화)', () => {
  assert.strictEqual(R.flowRankOf(null).size, 0);
  assert.strictEqual(R.flowRankOf(undefined).size, 0);
});

console.log('\n[3] orderForResearch — 로테이션');
const INFLOW = R.flowRankOf([
  { key: 'Technology|Software - Infrastructure', flow: 'inflow' },
  { key: 'Technology|Semiconductors', flow: 'outflow' },
]);
const soft = (t, m) => mk(t, 'Technology', 'Software - Infrastructure', m);
const semi = (t, m) => mk(t, 'Technology', 'Semiconductors', m);

ok('한 번도 조사 안 한 종목이 어제 조사한 종목보다 앞선다', () => {
  const items = [semi('OLD', 99), semi('NEW', 1)];
  const cache = cacheWith('team2', { OLD: '2026-08-10' });
  const out = R.orderForResearch(items, { cache, today: TODAY, ttl: 5, metric: (x) => x.bestPct });
  assert.strictEqual(out[0].ticker, 'NEW', '미조사 종목이 앞에 와야 한다');
});

ok('자금 유입 업종 종목이 bestPct 더 높은 유출 업종 종목을 앞선다', () => {
  const items = [semi('SEMI', 99.9), soft('SOFT', 50.0)];
  const out = R.orderForResearch(items, { flowRank: INFLOW, today: TODAY, metric: (x) => x.bestPct });
  assert.strictEqual(out[0].ticker, 'SOFT',
    '자금 유입 업종이 우선이어야 하는데 bestPct 만으로 정렬됐다');
});

ok('신선도가 자금흐름보다 우선한다 (커버리지가 먼저)', () => {
  // 유입 업종이지만 어제 조사했고, 유출 업종이지만 한 번도 안 했다 → 미조사가 먼저
  const items = [soft('FRESH', 99), semi('NEVER', 1)];
  const cache = cacheWith('team2', { FRESH: '2026-08-10' });
  const out = R.orderForResearch(items, { flowRank: INFLOW, cache, today: TODAY, ttl: 5, metric: (x) => x.bestPct });
  assert.strictEqual(out[0].ticker, 'NEVER');
});

ok('전부 최신이어도 cap 을 채우고, 가장 오래된 것이 앞에 온다', () => {
  const items = [semi('D1', 10), semi('D3', 20), semi('D0', 90)];
  const cache = cacheWith('team2', { D0: '2026-08-11', D1: '2026-08-10', D3: '2026-08-06' });
  const out = R.orderForResearch(items, { cache, today: TODAY, ttl: 5, metric: (x) => x.bestPct });
  assert.deepStrictEqual(out.map((x) => x.ticker), ['D3', 'D1', 'D0'],
    '전부 TTL 안이면 가장 묵은 순이어야 한다 — 아니면 빈 결과가 나오거나 같은 것만 또 조사한다');
  assert.strictEqual(out.length, items.length, '후보가 줄어들면 안 된다');
});

ok('TTL 을 넘긴 종목은 지표가 낮아도 미조사와 같은 그룹', () => {
  const items = [semi('STALE', 1), semi('FRESH', 99)];
  const cache = cacheWith('team2', { STALE: '2026-07-01', FRESH: '2026-08-10' });
  const out = R.orderForResearch(items, { cache, today: TODAY, ttl: 5, metric: (x) => x.bestPct });
  assert.strictEqual(out[0].ticker, 'STALE');
});

ok('flowRank 가 비면 순수 신선도+지표 순으로 퇴화한다', () => {
  const items = [semi('A', 10), soft('B', 90)];
  const out = R.orderForResearch(items, { today: TODAY, metric: (x) => x.bestPct });
  assert.strictEqual(out[0].ticker, 'B', 'flow 없으면 지표 내림차순이어야 한다');
});

ok('원본 배열을 훼손하지 않는다', () => {
  const items = [semi('A', 1), soft('B', 2)];
  const before = items.map((x) => x.ticker).join(',');
  R.orderForResearch(items, { flowRank: INFLOW, today: TODAY, metric: (x) => x.bestPct });
  assert.strictEqual(items.map((x) => x.ticker).join(','), before);
});

ok('동점이면 원래 순서를 유지한다 (실행마다 결과가 흔들리지 않게)', () => {
  const items = [semi('A', 5), semi('B', 5), semi('C', 5)];
  const out = R.orderForResearch(items, { today: TODAY, metric: (x) => x.bestPct });
  assert.deepStrictEqual(out.map((x) => x.ticker), ['A', 'B', 'C']);
});

console.log('\n[4] recordResearched');
ok('조사 기록이 쌓이고 count 가 증가한다', () => {
  const c = R.emptyCache();
  R.recordResearched(c, 'team2', ['AAA', 'BBB'], '2026-08-10');
  R.recordResearched(c, 'team2', ['AAA'], TODAY);
  assert.strictEqual(c.team2.AAA.last, TODAY);
  assert.strictEqual(c.team2.AAA.count, 2);
  assert.strictEqual(c.team2.BBB.count, 1);
});
ok('빈 배열·null 을 넣어도 터지지 않는다', () => {
  const c = R.emptyCache();
  R.recordResearched(c, 'team4', null, TODAY);
  R.recordResearched(c, 'team4', [null, ''], TODAY);
  assert.strictEqual(Object.keys(c.team4).length, 0);
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
