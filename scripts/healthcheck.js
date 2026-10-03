'use strict';
// 자동 실행이 빠짐없이 돌았는지 점검하고 결과를 텔레그램으로 보낸다. LLM 없음 — 파일·로그·git 사실만 본다.
//   node scripts/healthcheck.js          월·수·금 13:30 launchd(com.breakout.check) 가 부른다
//   node scripts/healthcheck.js --quiet  문제가 있을 때만 알린다
//
// 점검 항목 (오늘 = 맥 시간대 날짜, 세션 = 지금 기준 마지막으로 끝난 미국 세션)
//   ① 아침 스캔: state/watchlist/<오늘>.json — 없으면 아직 RS 대기 중인지(wait-rs-fresh 프로세스) 본다
//   ② 리서치(화~토): research-<날짜>.log 가 있고 "실패/강제 종료"가 없는지. 월요일은 토요일분을 본다
//   ③ 밤 루프: night.log 가 마지막 세션의 장 시작(세션일 21:00) 이후에 쓰였는지 · night.err.log 비었는지
//   ④ daily.err.log 비었는지
//   ⑤ launchd 예약 3개(daily·night·review) 가 올라와 있는지
//   ⑥ git: 커밋 안 된 변경 없음 · origin 과 같음
//   ⑦ 공개 사이트의 데이터 날짜가 로컬과 같은지
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { loadEnv, say } = require('./lib/util');
const cal = require('./lib/market-calendar');

const REPO = path.resolve(__dirname, '..');
const LOGS = path.join(process.env.HOME, 'Library/Logs/breakout-team');
const SITE = 'https://305rhfueo-ui.github.io/breakout-team/dashboard/data/chief.js';
const QUIET = process.argv.includes('--quiet');

const sh = (cmd) => { try { return execSync(cmd, { cwd: REPO, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); } catch (e) { return null; } };
const kstDate = (d = new Date()) => new Date(d.getTime() + 9 * 3600e3).toISOString().slice(0, 10);
const mtime = (f) => { try { return fs.statSync(f).mtimeMs; } catch (e) { return null; } };
const size = (f) => { try { return fs.statSync(f).size; } catch (e) { return 0; } };
const tail = (f, n = 2) => { try { return fs.readFileSync(f, 'utf8').replace(/\x1b\[[0-9;]*m/g, '').trim().split('\n').slice(-n).join(' / ').slice(0, 200); } catch (e) { return ''; } };

(async () => {
  loadEnv();
  const now = new Date();
  const today = kstDate(now);
  const dow = new Date(now.getTime() + 9 * 3600e3).getUTCDay();   // 0 일 … 6 토 (KST)
  const session = cal.sessionDateFromUtc(now.toISOString());
  const ok = [], bad = [];

  // ① 아침 스캔
  if (fs.existsSync(path.join(REPO, 'state/watchlist', `${today}.json`))) ok.push(`아침 스캔 ${today}`);
  else if (sh('pgrep -f wait-rs-fresh.js')) bad.push(`아침 스캔 아직 RS 사이트 대기 중 (07:10부터) — ${tail(path.join(LOGS, 'daily.log'), 1)}`);
  else bad.push(`아침 스캔 ${today} 결과 없음 — ${tail(path.join(LOGS, 'daily.log'))}`);

  // ② 리서치 (화~토). 월요일 점검은 토요일분을, 일요일은 토요일분을 본다
  const rDate = dow >= 2 && dow <= 6 ? today : kstDate(new Date(now.getTime() - (dow === 0 ? 1 : 2) * 86400e3));
  const rLog = path.join(LOGS, `research-${rDate}.log`);
  if (!fs.existsSync(rLog)) {
    if (rDate === today && sh('pgrep -f wait-rs-fresh.js')) ok.push('리서치 — 스캔 뒤에 이어서 돈다');
    else bad.push(`리서치 ${rDate} 로그 없음`);
  } else {
    const txt = fs.readFileSync(rLog, 'utf8');
    if (/강제 종료|실패 \(/.test(txt)) bad.push(`리서치 ${rDate} 실패 흔적 — ${tail(rLog)}`);
    else ok.push(`리서치 ${rDate}`);
  }

  // ③ 밤 루프
  const nightSince = new Date(`${session}T21:00:00+09:00`).getTime();
  const nm = mtime(path.join(LOGS, 'night.log'));
  if (nm && nm >= nightSince) ok.push(`밤 루프 (세션 ${session})`);
  else bad.push(`밤 루프가 세션 ${session} 에 돌지 않음 (night.log 마지막 ${nm ? new Date(nm).toISOString().slice(0, 16) : '없음'})`);
  if (size(path.join(LOGS, 'night.err.log'))) bad.push(`night.err.log — ${tail(path.join(LOGS, 'night.err.log'))}`);

  // ④ 아침 오류
  if (size(path.join(LOGS, 'daily.err.log'))) bad.push(`daily.err.log — ${tail(path.join(LOGS, 'daily.err.log'))}`);

  // ⑤ launchd
  const list = sh('launchctl list') || '';
  const missing = ['com.breakout.daily', 'com.breakout.night', 'com.breakout.review'].filter((j) => !list.includes(j));
  if (missing.length) bad.push(`예약 빠짐: ${missing.join(', ')}`); else ok.push('예약 3개');

  // ⑥ git
  if (sh('git status --porcelain')) bad.push('커밋 안 된 변경이 있음');
  sh('git fetch -q origin');
  const ahead = sh('git rev-list --count origin/master..HEAD'), behind = sh('git rev-list --count HEAD..origin/master');
  if (ahead !== '0' || behind !== '0') bad.push(`git 이 origin 과 다름 (앞 ${ahead} · 뒤 ${behind})`); else ok.push('git 동기화');

  // ⑦ 공개 사이트
  try {
    const local = (fs.readFileSync(path.join(REPO, 'dashboard/data/chief.js'), 'utf8').match(/"generated":\s*"([^"]+)"/) || [])[1];
    const r = await fetch(`${SITE}?t=${Date.now()}`, { cache: 'no-store' });
    const web = ((await r.text()).match(/"generated":\s*"([^"]+)"/) || [])[1];
    if (web && web === local) ok.push(`웹 반영 ${web}`); else bad.push(`웹 데이터 ${web || '?'} ≠ 로컬 ${local || '?'}`);
  } catch (e) { bad.push(`공개 사이트 확인 실패: ${e.message}`); }

  const head = bad.length ? `⚠️ 자동 실행 점검 — 문제 ${bad.length}건` : '✅ 자동 실행 점검 — 이상 없음';
  const msg = [head, ...bad.map((b) => `✗ ${b}`), ...ok.map((o) => `✓ ${o}`)].join('\n');
  say(bad.length ? 'WARN' : 'SYSTEM', msg);
  if (bad.length || !QUIET) await require('./lib/notify').notify(msg);
  process.exit(bad.length ? 1 : 0);
})();
