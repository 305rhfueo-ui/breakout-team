'use strict';
// 전체 테스트 실행.  node tests/run-all.js
//
// ⚠️ 일부 테스트는 라이브 데이터(RS 사이트)를 받는다. 네트워크가 없으면 그 테스트는
//    스스로 건너뛰고 통과 처리한다 — 오프라인에서 빨간불이 뜨지 않게 하기 위해서다.

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// tests/ 아래 모든 하위 폴더를 훑는다 (lib · workflows · …).
// 예전엔 tests/lib 만 봐서 다른 폴더에 테스트를 두면 조용히 실행되지 않았다.
const files = [];
for (const sub of fs.readdirSync(__dirname, { withFileTypes: true })) {
  if (!sub.isDirectory()) continue;
  const d = path.join(__dirname, sub.name);
  for (const f of fs.readdirSync(d).filter((x) => x.endsWith('.test.js')).sort()) {
    files.push({ rel: `${sub.name}/${f}`, abs: path.join(d, f) });
  }
}
files.sort((a, b) => a.rel.localeCompare(b.rel));

let fail = 0;
for (const { rel: f, abs: p } of files) {
  console.log(`\n${'═'.repeat(58)}\n▶ ${f}\n${'═'.repeat(58)}`);
  try {
    execFileSync(process.execPath, [p], { stdio: 'inherit' });
  } catch (e) {
    fail++;
  }
}

console.log(`\n${'═'.repeat(58)}`);
console.log(fail ? `❌ 테스트 파일 ${fail}/${files.length} 실패` : `✅ 테스트 파일 ${files.length}개 전부 통과`);
process.exit(fail ? 1 : 0);
