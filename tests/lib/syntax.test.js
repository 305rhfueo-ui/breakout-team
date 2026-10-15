'use strict';
// 모든 Node 스크립트가 문법적으로 실행 가능한가 (2026-10-15 — 주석을 코드 한가운데 넣어 prepare-deepdive-args.js 가 통째로 안 돌던 것을
// 테스트가 못 잡았다. 그 파일을 직접 실행하는 테스트가 없었기 때문). 워크플로(scripts/workflows)는 retry.test.js 가 따로 파싱한다.
//   node tests/lib/syntax.test.js
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const dirs = ['scripts', 'scripts/lib', 'scripts/data', 'scripts/lib/chart'];
let pass = 0, fail = 0;
for (const d of dirs) {
  const abs = path.join(ROOT, d);
  if (!fs.existsSync(abs)) continue;
  for (const f of fs.readdirSync(abs).filter((x) => x.endsWith('.js')).sort()) {
    try { execFileSync(process.execPath, ['--check', path.join(abs, f)], { stdio: 'pipe' }); pass++; }
    catch (e) { fail++; console.log(`  ❌ ${d}/${f}\n     ${String(e.stderr || e.message).split('\n').find((l) => /Error/.test(l)) || ''}`); }
  }
}
console.log(`\n${fail ? '❌' : '✅'} 문법 검사 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
