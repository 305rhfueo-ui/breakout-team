'use strict';
// 6팀 밤 루프 실행기 — 미국 장이 열려 있는 동안 5분마다 paper-trader 를 부른다.
//
//   node scripts/night-loop.js            지금부터 장 마감 처리까지 돈다 (한국 시간 22:20 쯤 켜 두면 된다)
//   node scripts/night-loop.js --no-git   결과를 올리지 않는다
//
// OS 스케줄러(작업 스케줄러·launchd)에 5분 간격 작업을 거는 대신 이 파일 하나를 하루 한 번 띄운다.
// 그래야 Windows 와 맥에서 똑같이 돈다. 장이 안 열리는 날이면 바로 끝난다.

const path = require('path');
const { spawnSync } = require('child_process');
const { loadEnv, say, readJson, paths } = require('./lib/util');
const cal = require('./lib/market-calendar');
const { etParts } = require('./paper-trader');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const run = (args) => spawnSync(process.execPath, [path.join(__dirname, 'paper-trader.js'), ...args], { stdio: 'inherit', cwd: paths.root });

(async () => {
  loadEnv();
  const pass = process.argv.slice(2).filter((a) => a === '--no-git');
  const start = etParts(Date.now());
  // 자정 넘어 켰으면(ET 기준 새벽) 그날 세션, 장 마감 뒤에 켰으면 할 일이 없다
  const session = start.date;
  if (!cal.isTradingDay(session)) { say('T6', `${session} (ET) 은 거래일이 아닙니다 — 끝냅니다`); return; }
  if (start.hm > '1700') { say('T6', `지금은 ${start.hm} ET — 오늘 장은 끝났습니다`); return; }
  say('T6', `밤 루프 시작 — 세션 ${session} (ET) · 지금 ${start.hm} ET`);

  if (start.hm < '0930') {
    say('T6', '개장 전 — 관심 종목의 거래량 프로필을 미리 받아 둡니다');
    run(['--prep']);
  }
  for (;;) {
    const et = etParts(Date.now());
    if (et.date !== session || et.hm > '1700') break;
    if (et.hm >= '0935') {
      run(pass);
      const meta = readJson(path.join(paths.paperDir, 'meta.json'), {});
      if (meta.lastEod === session) { say('T6', '장 마감 처리 완료 — 밤 루프를 끝냅니다'); break; }
    }
    // 다음 5분 경계 + 20초 (봉이 완성되고 시세 서버에 올라올 시간)
    const now = Date.now();
    const next = Math.ceil((now + 1000) / 300000) * 300000 + 20000;
    await sleep(Math.max(5000, next - now));
  }
})().catch((e) => { console.error('밤 루프 오류:', e); process.exit(1); });
