'use strict';
// 리서치 커버리지 정직성 검사.
//
// "상한 때문에 빠진 항목을 숨기지 마라"는 이 시스템의 원칙인데 같은 버그가 두 번 났다.
//   1차: 2팀 — 6/6 으로 표시 (실제 54 중 6)
//   2차: 4팀 — 12/12 로 표시 (실제 40 중 12). 스프레드 순서 때문에 total 이 덮였다.
// 세 번째가 없도록 여기서 막는다.
//
//   node tests/lib/coverage.test.js

const assert = require('assert');
const path = require('path');
const fs = require('fs');
const REPO = path.join(__dirname, '..', '..');
const { coverageOf } = require(path.join(REPO, 'scripts/lib/util'));

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

console.log('\n[1] coverageOf 자체');
ok('일부만 조사하면 pending 과 안내문이 남는다', () => {
  const c = coverageOf({ done: 12, total: 40, cap: 12 });
  assert.strictEqual(c.done, 12);
  assert.strictEqual(c.total, 40);
  assert.strictEqual(c.pending, 28);
  assert.ok(/28종목/.test(c.note), '남은 개수가 안내문에 없다: ' + c.note);
});
ok('전량 조사하면 pending 0', () => {
  const c = coverageOf({ done: 40, total: 40, cap: 60 });
  assert.strictEqual(c.pending, 0);
  assert.ok(/완료/.test(c.note));
});
ok('done 이 total 을 넘어도 pending 이 음수가 되지 않는다', () => {
  assert.strictEqual(coverageOf({ done: 50, total: 40 }).pending, 0);
});
ok('실패는 대기와 분리된다 — done+failed+pending = total', () => {
  const c = coverageOf({ done: 8, total: 34, cap: 9, failed: 1 });
  assert.strictEqual(c.failed, 1);
  assert.strictEqual(c.pending, 25);
  assert.strictEqual(c.done + c.failed + c.pending, c.total);
  assert.ok(/오류로 실패/.test(c.note), '실패 사실이 안내문에 없다: ' + c.note);
  assert.ok(!/1종목은 상한/.test(c.note), '실패를 상한 탓으로 돌리고 있다: ' + c.note);
});
ok('실패가 total 을 넘겨도 pending 이 음수가 되지 않는다', () => {
  const c = coverageOf({ done: 5, total: 6, failed: 99 });
  assert.strictEqual(c.failed, 1);
  assert.strictEqual(c.pending, 0);
});
ok('거짓 약속 문구가 되살아나지 않는다', () => {
  // 예전 문구는 "캐시가 쌓이면 며칠 안에 전량 커버됩니다"였는데 순환 로직이 없어 거짓이었다.
  // 이제 로테이션이 있으므로 "순환 조사"라고만 약속한다.
  const c = coverageOf({ done: 10, total: 54, cap: 10 });
  assert.ok(!/캐시가 쌓이면/.test(c.note), '근거 없는 약속 문구가 돌아왔다: ' + c.note);
  assert.ok(/순환 조사/.test(c.note), '로테이션 안내가 없다: ' + c.note);
});

console.log('\n[2] 실제 대시보드 데이터 — total 이 전체 항목 수와 일치하는가');
function load(file, varName) {
  const p = path.join(REPO, 'dashboard', 'data', file);
  if (!fs.existsSync(p)) return null;
  const m = fs.readFileSync(p, 'utf8').match(new RegExp(`window\\.${varName}\\s*=\\s*([\\s\\S]*);\\s*$`));
  return m ? JSON.parse(m[1]) : null;
}
const cases = [
  ['2팀', 'team2.js', 'TEAM2_DATA', (d) => (d.picks || []).length],
  ['4팀', 'team4.js', 'TEAM4_DATA', (d) => (d.items || []).length],
];
for (const [who, file, v, countOf] of cases) {
  const d = load(file, v);
  if (!d) { console.log(`  ⏭️  ${who} — 데이터 없음`); continue; }
  const rc = d.research_coverage;
  ok(`${who} research_coverage.total = 실제 항목 수`, () => {
    assert.ok(rc, 'research_coverage 자체가 없다');
    const real = countOf(d);
    assert.strictEqual(rc.total, real,
      `total ${rc.total} 인데 실제 항목은 ${real}개다. 상한값이 total 을 덮어썼을 수 있다`);
  });
  ok(`${who} done ≤ total`, () => assert.ok(rc.done <= rc.total, `${rc.done}/${rc.total}`));
  ok(`${who} done + failed + pending = total`, () => {
    if (rc.pending == null) return;                    // 구버전 데이터는 통과
    assert.strictEqual(rc.done + (rc.failed || 0) + rc.pending, rc.total,
      `done ${rc.done} + failed ${rc.failed || 0} + pending ${rc.pending} ≠ total ${rc.total}`);
  });
}

console.log('\n[2b] 실패한 조사가 "상한 초과"로 둔갑하지 않는가');
// 2026-08-11: BMRN 촉매 에이전트가 API 오류로 죽었는데 화면엔 "상한 초과"로 떴다.
// 워크플로가 실패 티커를 payload.failed 로 넘기고 build-chief-report 가 그걸 반영해야 한다.
for (const [who, file, v, key] of [['2팀', 'team2.js', 'TEAM2_DATA', 'research'], ['4팀', 'team4.js', 'TEAM4_DATA', 'catalyst']]) {
  const d = load(file, v);
  if (!d) { console.log(`  ⏭️  ${who} — 데이터 없음`); continue; }
  const list = d.picks || d.items || [];
  ok(`${who} 상태값이 done/failed/pending 셋 중 하나다`, () => {
    const bad = list.filter((x) => x[key] && !['done', 'failed', 'pending', 'no_source'].includes(x[key].status));
    assert.strictEqual(bad.length, 0, `알 수 없는 상태: ${bad.map((x) => `${x.ticker}=${x[key].status}`).join(', ')}`);
  });
  ok(`${who} pending 안내문이 실패를 상한 탓으로 돌리지 않는다`, () => {
    const lying = list.filter((x) => x[key] && x[key].status === 'failed' && /상한/.test(x[key].note || ''));
    assert.strictEqual(lying.length, 0,
      `실패한 종목에 '상한' 문구가 붙었다: ${lying.map((x) => x.ticker).join(', ')}`);
  });
  ok(`${who} coverage.failed 와 실제 failed 개수가 일치한다`, () => {
    const rc = d.research_coverage || {};
    if (rc.failed == null) return;                     // 구버전 데이터는 통과
    const actual = list.filter((x) => x[key] && x[key].status === 'failed').length;
    assert.strictEqual(rc.failed, actual, `coverage.failed ${rc.failed} vs 실제 ${actual}`);
  });
}

console.log('\n[3] 화면이 조사 안 한 항목을 조사한 것처럼 보이지 않는가');
ok('4팀 — 촉매 미조사 종목이 실제로 미조사로 표시된다', () => {
  const d = load('team4.js', 'TEAM4_DATA');
  if (!d) return;
  const done = (d.items || []).filter((i) => i.catalyst && i.catalyst.status === 'done').length;
  const rc = d.research_coverage || {};
  assert.strictEqual(done, rc.done, `catalyst done ${done} vs coverage.done ${rc.done} 불일치`);
  const html = fs.readFileSync(path.join(REPO, 'dashboard', 'breakout-room.html'), 'utf8');
  assert.ok(!/f:r=>'<span class="b b-yel">⏳대기<\/span>'/.test(html),
    '촉매 열이 다시 하드코딩됐다 — r.catalyst 를 읽어야 한다');
});

/* 분량을 늘린 만큼 방어도 올린다(2026-08-14).
   'sourced' 인데 인용문이 없으면 그 주장이 실제로 어디서 나왔는지 확인할 방법이 없다.
   스키마에서 quote 를 required 로 걸었으므로 결과에도 있어야 한다.
   ⚠️ 규칙 적용일 이전 데이터는 경고만 — 매일 빨간불이 남는 게 더 나쁘다. */
console.log('\n[3b] sourced 인데 인용문(quote)이 빠진 주장이 없는가');
const QUOTE_FROM = '2026-08-14';
function claimsOf() {
  const out = [];
  const t2 = load('team2.js', 'TEAM2_DATA'), t4 = load('team4.js', 'TEAM4_DATA'), t5 = load('team5.js', 'TEAM5_DATA');
  for (const p of ((t2 && t2.picks) || [])) {
    const R = p.research; if (!R || R.status !== 'done') continue;
    for (const c of [...(R.whyRose || []), ...(R.counterpoint || []), ...((R.estimateRevisions || {}).claims || [])]) out.push([p.ticker, c]);
  }
  for (const i of ((t4 && t4.items) || [])) {
    const C = i.catalyst; if (!C || C.status !== 'done') continue;
    for (const c of (C.claims || [])) out.push([i.ticker, c]);
  }
  for (const x of (((t5 && t5.llm) || {}).industries || [])) for (const c of (x.whyStrong || [])) out.push([x.industry, c]);
  return out;
}
const allClaims = claimsOf();
const noQuote = allClaims.filter(([, c]) => c.evidence_level === 'sourced'
  && (c.sources || []).length && !(c.sources || []).some((s) => s && String(s.quote || '').trim().length > 8));
const t2d = load('team2.js', 'TEAM2_DATA');
const runDate = String((t2d && (t2d.generated || t2d.date)) || '');   // team2.js 의 날짜 필드는 generated
if (!allClaims.length) console.log('  ⏭️  LLM 주장 데이터 없음');
else if (runDate && runDate < QUOTE_FROM) {
  console.log(`  ⏭️  ${runDate} 데이터 — quote 필수화(${QUOTE_FROM}) 이전이라 경고만`
    + `\n     인용문 없는 sourced 주장 ${noQuote.length}/${allClaims.length}건`);
} else ok(`sourced 주장 ${allClaims.length}건 전부 인용문이 있다`, () => {
  assert.strictEqual(noQuote.length, 0,
    `인용문 없는 주장 ${noQuote.length}건: ${noQuote.slice(0, 6).map(([t, c]) => `${String(t).slice(0, 20)}#${c.id}`).join(', ')}`);
});

console.log('\n[4] ETF·ETN 이 섞이지 않았는가');
const isEtfRow = (x) => String(x.sector || '').toUpperCase() === 'ETF'
  || String(x.industry || '').toUpperCase() === 'ETF';
ok('4팀 EP 후보에 ETF·ETN 이 없다', () => {
  const d = load('team4.js', 'TEAM4_DATA');
  if (!d) return;
  const etf = (d.items || []).filter(isEtfRow);
  assert.strictEqual(etf.length, 0,
    `ETF 가 섞였다: ${etf.map((x) => x.ticker).join(', ')} — 4팀은 개별 종목의 실적 촉매를 찾는 팀이라 `
    + 'ETF 는 실적 발표가 없어 6분류가 성립하지 않는다');
});
ok('2팀 선정 종목에 ETF·ETN 이 없다', () => {
  // 2026-08-13: GDXU(3배 레버리지 금광 ETN)가 2팀 리서치 슬롯을 하나 먹었다.
  // 2팀은 "왜 올랐나 + 증권사 실적 전망 조정"을 조사하는데 ETN 은 실적도 커버리지도 없다.
  const d = load('team2.js', 'TEAM2_DATA');
  if (!d) return;
  const etf = (d.picks || []).filter(isEtfRow);
  assert.strictEqual(etf.length, 0,
    `ETF 가 섞였다: ${etf.map((x) => x.ticker).join(', ')} — 실적 발표도 애널리스트 커버리지도 없어 `
    + '2팀 리서치 질문이 성립하지 않는다');
});
ok('screen 이 ETF 를 실제로 걸러낸다', () => {
  const { selectBreakoutCandidates } = require(path.join(REPO, 'scripts/lib/screen'));
  const mk = (t, sector, industry, rs) => ({
    Ticker: t, Sector: sector, Industry: industry, 'Market Cap': '10.00B', Price: 100,
    RS_1mo: rs, RS_3mo: rs, RS_6mo: rs, ADR_20D: 9, Above_150_SMA: 'O', '200DIV': 30,
  });
  // 상위 2% 안에 ETF 와 일반주가 하나씩 들어가도록 RS 를 벌려 놓는다.
  // (전부 같은 값이면 동점 처리로 아무도 98 백분위를 못 넘어 ETF 검사까지 가지도 못한다)
  const rows = [mk('GDXU', 'ETF', 'ETF', 100), mk('AAPL', 'Technology', 'Consumer Electronics', 99)];
  for (let i = 0; i < 100; i++) rows.push(mk('F' + i, 'Technology', 'Software', i * 0.1));
  const { qualified, stats } = selectBreakoutCandidates(rows);
  assert.ok(!qualified.some((q) => q.ticker === 'GDXU'), 'ETF 가 통과했다');
  assert.strictEqual(stats.dropped.etf, 1);
  assert.deepStrictEqual(stats.etfExcluded, ['GDXU']);
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
