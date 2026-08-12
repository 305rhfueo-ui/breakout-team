'use strict';
// 워크플로 스크립트 구조 검사.
//
// 배경: 2026-08-11 실행에서 에이전트가 두 번 죽었다(1팀 시황뉴스, 4팀 BMRN).
//   - 배열형 워크플로는 `.filter(Boolean)` 로 조용히 버려서 화면에 "상한 초과"로 표시됐다.
//   - 단일 에이전트 워크플로는 `return { ...result }` 에서 `{...null}` 이 합법이라
//     오류 없이 **빈 리포트**가 나갔다.
// 워크플로는 파일시스템 접근이 없어 공용 헬퍼를 못 쓴다 → 각 파일에 인라인 복제해야 하고,
// 그래서 한 파일만 빠뜨리기 쉽다. 이 테스트가 그걸 막는다.
//
//   node tests/workflows/retry.test.js

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const REPO = path.join(__dirname, '..', '..');
const DIR = path.join(REPO, 'scripts', 'workflows');

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.js')).sort();
const src = Object.fromEntries(files.map((f) => [f, fs.readFileSync(path.join(DIR, f), 'utf8')]));

console.log('\n[1] 모든 워크플로에 재시도 래퍼가 있다');
for (const f of files) {
  ok(`${f} — tryAgent 정의`, () => {
    assert.ok(/const tryAgent = async \(p, o\) =>/.test(src[f]),
      'tryAgent 래퍼가 없다. 에이전트가 죽으면 재시도 없이 결과가 사라진다');
  });
}

console.log('\n[2] 호출부가 전부 tryAgent 를 쓴다 (래퍼 내부 2줄만 예외)');
for (const f of files) {
  ok(`${f} — raw agent( 호출 없음`, () => {
    const raw = src[f].split('\n')
      .map((line, i) => ({ line, n: i + 1 }))
      .filter(({ line }) => /(await |=> |return )agent\(/.test(line))
      .filter(({ line }) => !/const r = await agent\(p, o\)/.test(line))
      .filter(({ line }) => !/return await agent\(p, \{ \.\.\.o/.test(line));
    assert.strictEqual(raw.length, 0,
      `래퍼를 안 거치는 호출: ${raw.map((x) => `L${x.n}`).join(', ')}`);
  });
}

console.log('\n[3] cap:0 이 기본값으로 둔갑하지 않는다');
for (const f of files) {
  if (!/const CAP = /.test(src[f])) continue;
  ok(`${f} — CAP 이 || 기본값 관용구를 쓰지 않는다`, () => {
    assert.ok(!/const CAP = \(A && A\.cap\) \|\|/.test(src[f]),
      '`(A && A.cap) || N` 은 cap:0 을 N 으로 바꾼다. Number.isFinite 로 판정해야 한다');
    assert.ok(/Number\.isFinite\(A && A\.cap\)/.test(src[f]), 'Number.isFinite 판정이 없다');
  });
}

console.log('\n[4] 배열형 워크플로가 실패 목록을 반환한다');
for (const f of ['team2-research.js', 'team4-catalyst.js', 'team5-sector.js']) {
  ok(`${f} — failed 를 인덱스로 계산해 반환한다`, () => {
    // ⚠️ 반환값의 ticker/key 로 대조하면 안 된다. 스키마가 required 로 걸어도 모델이 입력값을
    //    그대로 돌려주지 않는다 — 2026-08-12 실측: 5팀이 "Technology|Computer Hardware" 를
    //    "technology-computer-hardware" 로 바꿔 돌려주는 바람에 성공 6건이 전부 실패로 표시됐다.
    //    parallel 은 순서를 보존하므로 인덱스 판정만이 확실하다.
    assert.ok(/const failed = targets\.filter\(\(t, i\) => !\w+\[i\]\)/.test(src[f]),
      'failed 를 인덱스(!results[i])로 판정해야 한다 — 반환값 식별자 대조는 신뢰할 수 없다');
    assert.ok(!/new Set\(clean\.map\(\(x\) => x\.(ticker|key)\)\)[\s\S]{0,120}targets\.filter\(\(t\) =>/.test(src[f]),
      '식별자 대조 방식이 되살아났다');
    assert.ok(/\bfailed,/.test(src[f]), 'return 에 failed 가 없다 — 실패가 화면까지 전달되지 않는다');
    assert.ok(/coverage: \{[^}]*failed: failed\.length/.test(src[f]),
      'coverage.failed 가 없다 — done+failed+pending = total 이 깨진다');
  });
}

console.log('\n[5] 단일 에이전트 워크플로가 {...null} 로 빈 결과를 내지 않는다');
for (const [f, needle] of [['team1-news.js', 'result'], ['chief-report.js', 'report']]) {
  ok(`${f} — null 가드가 있다`, () => {
    assert.ok(new RegExp(`if \\(!${needle}\\)`).test(src[f]),
      `if (!${needle}) 가드가 없다. {...null} 은 오류 없이 빈 객체가 되어 리포트가 조용히 빈다`);
    assert.ok(/error: 'agent_failed'/.test(src[f]), '실패를 명시하는 error 필드가 없다');
  });
}

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
