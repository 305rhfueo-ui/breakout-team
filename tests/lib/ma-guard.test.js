'use strict';
// 150일선 컬럼 오염 감지 회귀 테스트.
//
// 2026-08-13 사고 재현: RS 사이트가 이동평균 계산에 실패해 1,412종목 중 1,272개를
// "150일선 아래(X)"로 표시했다. 사이트 코드가 `ma150 > 0 and price > ma150` 이라
// ma150 이 0 이면 조용히 X 가 되기 때문이다.
//   · 2팀 선정 61 → 18 종목으로 붕괴
//   · 3팀이 48종목을 "150일선 이탈"로 배제 (tracking.json 에 영구 기록될 뻔했다)
// 실제로는 폭락이 아니었다 — 같은 스냅샷에서 1,047종목이 200일선 위였다.
//
//   node tests/lib/ma-guard.test.js

const assert = require('assert');
const path = require('path');
const REPO = path.join(__dirname, '..', '..');
const { checkMaColumns } = require(path.join(REPO, 'scripts/lib/ma-guard'));

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

// 정상적인 시장: 200일선 위 종목이 많고 150일선 위도 그에 걸맞게 많다
function healthy(n = 1412) {
  return Array.from({ length: n }, (_, i) => {
    const above = i < 1000;
    return { Ticker: `T${i}`, Above_150_SMA: above ? 'O' : 'X', '200DIV': above ? 20 + (i % 50) : -5 - (i % 20) };
  });
}
// 2026-08-13 모양: 200DIV 는 멀쩡한데 150일선만 죄다 X
function broken(n = 1412) {
  const r = healthy(n);
  for (const x of r) x.Above_150_SMA = 'X';
  for (let i = 0; i < 140; i++) r[i].Above_150_SMA = 'O';
  return r;
}

console.log('\n[1] 정상 데이터는 통과시킨다');
ok('평범한 상승장', () => {
  const c = checkMaColumns(healthy());
  assert.ok(c.ok, '정상인데 오염으로 판정했다: ' + c.reason);
});
ok('진짜 하락장도 통과시킨다 (200일선도 같이 무너진 경우)', () => {
  // 진짜 폭락이면 200DIV 도 음수가 된다 — 모순이 없으므로 막으면 안 된다
  const rows = Array.from({ length: 1412 }, (_, i) => ({
    Ticker: `T${i}`, Above_150_SMA: i < 120 ? 'O' : 'X', '200DIV': i < 120 ? 10 : -15,
  }));
  const c = checkMaColumns(rows);
  assert.ok(c.ok, '진짜 하락장을 데이터 오염으로 오판했다 — 이러면 실제 위험을 못 본다: ' + c.reason);
});

console.log('\n[2] 2026-08-13 오염을 잡는다');
ok('200일선 위인데 150일선 아래 → 오염 판정', () => {
  const c = checkMaColumns(broken());
  assert.strictEqual(c.ok, false, '오염을 통과시켰다 — 2팀이 다시 붕괴한다');
  assert.ok(/불가능/.test(c.reason), '사유가 모순을 지목하지 않는다: ' + c.reason);
  assert.ok(c.stats.contradiction > 300, `모순 종목 수가 적다: ${c.stats.contradiction}`);
});
ok('통계에 실제 수치가 담긴다 (사용자에게 보여줄 근거)', () => {
  const c = checkMaColumns(broken());
  assert.strictEqual(c.stats.o150, 140);
  assert.strictEqual(c.stats.x150, 1272);
  assert.ok(c.stats.d200Pos > 900, '200일선 위 종목 수가 안 잡힌다');
});

console.log('\n[3] 엣지 케이스');
ok('컬럼 자체가 없으면 오염으로 본다 (스키마 변경)', () => {
  const rows = Array.from({ length: 100 }, (_, i) => ({ Ticker: `T${i}`, '200DIV': 10 }));
  const c = checkMaColumns(rows);
  assert.strictEqual(c.ok, false);
  assert.ok(/컬럼이 비어/.test(c.reason), c.reason);
});
ok('200DIV 가 없으면 교차검증을 포기하고 그대로 신뢰한다', () => {
  const rows = Array.from({ length: 100 }, (_, i) => ({ Ticker: `T${i}`, Above_150_SMA: i < 50 ? 'O' : 'X' }));
  const c = checkMaColumns(rows);
  assert.ok(c.ok, '검증 못 한다고 막아버리면 안 된다');
});
ok('빈 입력에도 터지지 않는다', () => {
  const c = checkMaColumns([]);
  assert.strictEqual(c.ok, false);
});

console.log('\n[4] 오염 시 종목을 잘라내지 않는다 (핵심 안전장치)');
ok('screen 의 requireMa150:false 가 150일선 필터를 건너뛴다', () => {
  const { selectBreakoutCandidates } = require(path.join(REPO, 'scripts/lib/screen'));
  // ADR 은 통과하되 150일선이 전부 X 인 표본
  const rows = Array.from({ length: 200 }, (_, i) => ({
    Ticker: `T${i}`, Sector: 'Technology', Industry: 'Software - Infrastructure',
    'Market Cap': '10.00B', Price: 100,
    RS_1mo: i / 100, RS_3mo: i / 100, RS_6mo: i / 100,
    ADR_20D: 8, Above_150_SMA: 'X', '200DIV': 30,
  }));
  const { rankPercentiles } = require(path.join(REPO, 'scripts/lib/percentile'));
  rankPercentiles(rows);
  const on = selectBreakoutCandidates(rows, { requireMa150: true });
  const off = selectBreakoutCandidates(rows, { requireMa150: false });
  assert.strictEqual(on.qualified.length, 0, '필터가 켜져 있으면 전부 탈락해야 정상');
  assert.ok(off.qualified.length > 0,
    '필터를 껐는데도 종목이 안 남는다 — 오염 시 후보가 통째로 사라진다');
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
