'use strict';
// 5팀 하린 — RS 사이트 FRANK 재현 (2026-10-12). 사이트 index.html 의 calculateWRS(오늘) · calculateWRSForData(과거) 규칙 고정.
// 실측 대조: 2026-10-11 사이트 화면 FRANK 1~12 위와 25d CHG 가 전부 일치했다.
//   node tests/lib/frank.test.js
const assert = require('assert');
const { siteFrank, site25Date, parseMarketCap } = require('../../scripts/lib/frank');
const { vetLeaders } = require('../../scripts/build-chief-report');
let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

const row = (T, S, I, mc, r6) => ({ Ticker: T, Sector: S, Industry: I, 'Market Cap': mc, RS_6mo: r6 });
const today = [
  row('A1', 'Energy', 'Refining', '50B', 0.9), row('A2', 'Energy', 'Refining', '10B', 0.5), row('A3', 'Energy', 'Refining', '5B', 'NaN'),
  row('B1', 'Tech', 'Chips', '900B', 0.4), row('B2', 'Tech', 'Chips', '100B', -0.1),
  row('C1', 'Tech', 'Solo', '1T', 3.0),                     // 종목 1개 업종 — 오늘 순위에서 빠진다
  row('D1', 'N/A', 'N/A', '1B', 1.0), row('E1', 'Tech', 'Chips', 'N/A', 1.0),
];
ok('시총 파싱은 사이트와 같다 (T/B/M/K, N/A → 0)', () => {
  assert.strictEqual(parseMarketCap('1.5T'), 1.5e12); assert.strictEqual(parseMarketCap('N/A'), 0); assert.strictEqual(parseMarketCap(null), 0);
});
const r = siteFrank(today);
ok('종목 1개 업종 제외, N/A 업종 제외, Final 내림차순 = FRANK', () => {
  assert.deepStrictEqual(r.map((x) => [x.frank, x.industry, x.count]), [[1, 'Refining', 3], [2, 'Chips', 2]]);
});
ok('Final = (가중 RS×0.4 + 중앙값×0.4 + 승률×(1−1/n)×0.2) × n/(n+5), NaN 은 0', () => {
  const w6 = (50 * 0.9 + 10 * 0.5 + 5 * 0) / 65, med = 0.5, base = w6 * 0.4 + med * 0.4 + (2 / 3) * (1 - 1 / 3) * 0.2;
  assert.ok(Math.abs(r[0].finalWrs - base * 3 / 8) < 1e-12);
});
ok('25일 변화: 과거는 감쇠 없이·1종목 업종 포함 순위 (사이트 그대로), 양수 = 올라옴', () => {
  const past = [row('A1', 'Energy', 'Refining', '50B', -0.5), row('A2', 'Energy', 'Refining', '10B', -0.5),
    row('B1', 'Tech', 'Chips', '900B', 0.4), row('B2', 'Tech', 'Chips', '100B', 0.3), row('C1', 'Tech', 'Solo', '1T', 3.0)];
  const x = siteFrank(today, past);
  // 과거 순위: Solo 1 · Chips 2 · Refining 3 → 오늘 Refining 1(▲2) · Chips 2(0)
  assert.deepStrictEqual(x.map((y) => [y.industry, y.frank25dChg]), [['Refining', 2], ['Chips', 0]]);
});
ok('25일 전 날짜 = history_index 최신순 [25], 12개 미만이면 없음', () => {
  const d = Array.from({ length: 30 }, (_, i) => `2026-09-${String(i + 1).padStart(2, '0')}`);
  assert.strictEqual(site25Date(d), '2026-09-05');
  assert.strictEqual(site25Date(d.slice(0, 11)), null);
  assert.strictEqual(site25Date(d.slice(0, 20)), '2026-09-01');
});
ok('주도주 검사 — 업종 밖 티커·근거 없는 주도주 제거, RS 순위 붙임', () => {
  const src = [{ url: 'https://x.com/a.html', quote: 'q' }];
  const v = vetLeaders([
    { ticker: 'vlo', why: [{ evidence_level: 'sourced', sources: src }] },
    { ticker: 'NVDA', why: [{ evidence_level: 'sourced', sources: src }] },
    { ticker: 'MPC', why: [{ evidence_level: 'no_source', sources: [] }] },
  ], [{ ticker: 'VLO', rnk6: 1.2, name: '발레로' }, { ticker: 'MPC', rnk6: 3 }]);
  assert.deepStrictEqual(v.kept.map((x) => [x.ticker, x.rnk6, x.name]), [['VLO', 1.2, '발레로']]);
  assert.deepStrictEqual(v.dropped, [{ ticker: 'NVDA', why: 'not_member' }, { ticker: 'MPC', why: 'no_source' }]);
});
ok('주가 움직임뿐인 근거(신고가·N% 상승·등급 상향·"태그됐다")는 주도주 근거가 아니다', () => {
  const mk = (title, statement = '실적이 좋았다') => ({ evidence_level: 'sourced', statement, sources: [{ url: 'https://x.com/a.html', title, quote: title }] });
  const v = vetLeaders([
    { ticker: 'DINO', why: [mk('HF Sinclair Corporation (DINO) Hits Fresh High: Is There Still Room to Run?')] },
    { ticker: 'AVT', why: [mk('Avnet (AVT) Is Up 7.24% in One Week: What You Should Know')] },
    { ticker: 'MPC', why: [mk("What's next for oil refiners", 'CNBC 기사에 종목으로 태그됐다')] },
    { ticker: 'HUM', why: [mk('Humana tops estimates, maintains profit outlook as medical costs stay in check')] },
  ], ['DINO', 'AVT', 'MPC', 'HUM'].map((ticker) => ({ ticker })));
  assert.deepStrictEqual(v.kept.map((x) => x.ticker), ['HUM']);
});
ok('업종 검색어 리포트 — 한글 검색어가 캐시 키에서 겹치지 않는다', () => {
  const src = require('fs').readFileSync(require('path').join(__dirname, '../../scripts/data/kr-reports.js'), 'utf8');
  assert.ok(/opts\.keyword \? 'kw' \+ Buffer\.from\(searchStr\)\.toString\('hex'\)/.test(src));
});
console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
