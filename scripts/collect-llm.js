'use strict';
// 워크플로 실행 결과(태스크 출력 파일)를 모아 state/llm-in/{date}.json 으로 합친다.
//   node scripts/collect-llm.js --team1=<파일> --team2=<파일> --team4=<파일> --team5=<파일> --chief=<파일>
//
// 태스크 출력 파일은 { summary, agentCount, logs, result } 형태이고 우리가 쓸 건 result 다.
// Claude 가 Workflow 실행 후 받은 output-file 경로를 그대로 넘기면 된다.

const fs = require('fs');
const path = require('path');
const { paths, loadEnv, today, ensureDir, say } = require('./lib/util');

function arg(n, d = null) { const p = process.argv.find((s) => s.startsWith(`--${n}=`)); return p ? p.slice(n.length + 3) : d; }

function readResult(file) {
  if (!file) return null;
  try {
    const j = JSON.parse(fs.readFileSync(file, 'utf8'));
    return j.result !== undefined ? j.result : j;
  } catch (e) {
    say('WARN', `읽기 실패 ${file}: ${e.message}`);
    return null;
  }
}

function main() {
  loadEnv();
  const dateStr = arg('date', today());
  ensureDir(paths.llmInDir);

  const out = { date: dateStr, collected_at: new Date().toISOString() };
  const map = { team1: 'team1', team2: 'team2', team4: 'team4', team5: 'team5', chief: 'chief' };
  const got = [];
  for (const [k, key] of Object.entries(map)) {
    const f = arg(k);
    if (!f) continue;
    const r = readResult(f);
    if (r) { out[key] = r; got.push(k); }
  }

  if (!got.length) {
    console.log('사용법: node scripts/collect-llm.js --team1=<output파일> --team2=... --team4=... --team5=... --chief=...');
    process.exit(1);
  }

  const file = path.join(paths.llmInDir, `${dateStr}.json`);
  // 기존 파일이 있으면 병합 (여러 번 나눠 수집 가능)
  let prev = {};
  try { prev = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { /* 없으면 새로 */ }
  fs.writeFileSync(file, JSON.stringify({ ...prev, ...out }, null, 1), 'utf8');

  say('SYSTEM', `수집 완료: ${got.join(', ')} → ${file}`);
  console.log('\n다음: node scripts/build-chief-report.js   (출처 URL 검증 후 대시보드 병합)');
}

if (require.main === module) main();
module.exports = { readResult };
