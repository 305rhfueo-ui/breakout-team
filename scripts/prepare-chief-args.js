'use strict';
// 실장(chief-report) 워크플로에 넘길 인자를 만든다.
//
//   node scripts/prepare-chief-args.js --team5=<5팀 워크플로 출력파일>
//
// prepare-llm-args.js 가 만든 _args.json 의 chiefTeams 를 바탕으로
//   ① chief.js 의 flowCross (5팀 업종판정 × 2·3팀 종목 교차)
//   ② 5팀 LLM 이 조사한 "왜 강한지" 한 줄 요약
// 두 가지를 덧붙여 state/llm-in/_chiefargs.json 에 저장한다.
//
// ⚠️ flowCross 를 빼먹으면 실장이 "돈이 몰리는 섹터의 강세 종목"을 말하지 못한다.

const fs = require('fs');
const path = require('path');
const { paths, loadEnv, say } = require('./lib/util');

function arg(n, d = null) { const p = process.argv.find((s) => s.startsWith(`--${n}=`)); return p ? p.slice(n.length + 3) : d; }

function loadWindowData(file, varName) {
  const src = fs.readFileSync(path.join(paths.dashboardData, file), 'utf8');
  const m = src.match(new RegExp(`window\\.${varName}\\s*=\\s*([\\s\\S]*);\\s*$`));
  return m ? JSON.parse(m[1]) : null;
}

function readResult(file) {
  if (!file || !fs.existsSync(file)) return null;
  const j = JSON.parse(fs.readFileSync(file, 'utf8'));
  return j.result !== undefined ? j.result : j;
}

function main() {
  loadEnv();
  const base = JSON.parse(fs.readFileSync(path.join(paths.llmInDir, '_args.json'), 'utf8'));
  const teams = { ...base.chiefTeams };

  const chief = loadWindowData('chief.js', 'CHIEF_DATA');
  if (chief && chief.flowCross) teams.flowCross = chief.flowCross;
  else say('WARN', 'chief.js 에 flowCross 가 없다 — 실장이 섹터×종목 교차를 못 본다');

  // 5팀 LLM 결과에서 업종별 핵심 근거 한 줄만 뽑아 넣는다 (전문은 대시보드에 있다)
  const t5 = readResult(arg('team5'));
  if (t5 && t5.industries) {
    teams.team5 = {
      ...teams.team5,
      llmIndustries: t5.industries.map((x) => ({
        industry: x.industry,
        driver: x.driver,
        durability: x.durability,
        top: ((x.whyStrong || [])[0] || {}).statement || '근거 없음',
      })),
    };
  }

  const out = { date: base.date, teams };
  const file = path.join(paths.llmInDir, '_chiefargs.json');
  fs.writeFileSync(file, JSON.stringify(out), 'utf8');
  say('SYSTEM', `실장 인자 준비: ${base.date} · ${JSON.stringify(out).length}자 · flowCross ${teams.flowCross ? '있음' : '없음'} · 5팀 근거 ${(teams.team5.llmIndustries || []).length}건`);
  console.log(file);
}

if (require.main === module) main();
module.exports = { main };
