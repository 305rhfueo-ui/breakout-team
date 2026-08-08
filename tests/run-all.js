'use strict';
// 전체 테스트 실행.  node tests/run-all.js
//
// ⚠️ 일부 테스트는 라이브 데이터(RS 사이트)를 받는다. 네트워크가 없으면 그 테스트는
//    스스로 건너뛰고 통과 처리한다 — 오프라인에서 빨간불이 뜨지 않게 하기 위해서다.

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'lib');
const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.test.js')).sort() : [];

let fail = 0;
for (const f of files) {
  const p = path.join(dir, f);
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
