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
  ok(`${who} pending 이 계산과 맞는다`, () => {
    if (rc.pending == null) return;                    // 구버전 데이터는 통과
    assert.strictEqual(rc.pending, Math.max(0, rc.total - rc.done));
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

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
