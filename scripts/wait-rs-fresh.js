'use strict';
// 아침 스캔 전에 RS 사이트가 직전 미국 세션으로 갱신될 때까지 기다린다.
//
// 배경 (2026-09-30 · 10-01 실제 발생): 수집 cron 은 06:50 KST 지만 GitHub 예약 실행이 매일 3~4시간 밀려
//   실제 갱신은 09:30~10:50 KST 였다. 07:10 에 그냥 돌면 하루 전 데이터로 관심 목록이 만들어지고,
//   밤 루프는 "관심 목록 기준일 ≠ 직전 세션"으로 이틀 밤 내내 새로 사지 않았다.
//
//   node scripts/wait-rs-fresh.js    갱신되면 종료 0 · 6시간 넘으면 텔레그램 알리고 종료 1
const { loadEnv, say } = require('./lib/util');
const cal = require('./lib/market-calendar');

const URL = 'https://305rhfueo-ui.github.io/RS_Investment/static/result.json';
const EVERY_MIN = 5;
const MAX_HOURS = 6;

async function rsSession() {
  try {
    // 이 파일에는 NaN 이 섞여 있어 JSON.parse 가 실패한다 — 필요한 last_updated 하나만 뽑는다
    const r = await fetch(`${URL}?t=${Date.now()}`, { cache: 'no-store' });
    const m = (await r.text()).match(/"last_updated"\s*:\s*"([^"]+)"/);
    return m ? cal.sessionDateFromUtc(m[1]) : null;
  } catch (e) {
    return null;   // 네트워크 실패는 "아직 안 됨"으로 보고 다시 시도한다
  }
}

(async () => {
  loadEnv();
  const want = cal.sessionDateFromUtc(new Date().toISOString());   // 지금 기준 마지막으로 끝난 미국 세션
  const until = Date.now() + MAX_HOURS * 3600e3;
  for (;;) {
    const got = await rsSession();
    if (got === want) { say('SYSTEM', `RS 사이트 갱신 확인 — 세션 ${got}`); return; }
    if (Date.now() > until) {
      const msg = `⚠️ RS 사이트가 ${MAX_HOURS}시간 넘게 갱신되지 않았습니다 (지금 ${got || '?'} · 기다린 세션 ${want}). 낡은 데이터로 스캔하고, 밤 루프는 오늘 새로 사지 않습니다.`;
      say('WARN', msg);
      await require('./lib/notify').notify(msg);
      process.exit(1);
    }
    say('SYSTEM', `RS 사이트 아직 ${got || '?'} (기다리는 세션 ${want}) — ${EVERY_MIN}분 뒤 다시`);
    await new Promise((r) => setTimeout(r, EVERY_MIN * 60e3));
  }
})();
