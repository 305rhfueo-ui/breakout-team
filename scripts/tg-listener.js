'use strict';
// 7팀(지우) 텔레그램 수신기 — "SNOW 심층분석" 을 받으면 그 종목을 분석해 답한다 (2026-10-13).
//   launchd com.breakout.listen 이 상주시킨다(KeepAlive). 직접 시험: node scripts/tg-listener.js --once
//
// 받는 글 (대소문자·띄어쓰기 무관):
//   SNOW 심층분석 | SNOW 분석 | SNOW, NET 심층분석      → 분석 (오늘 이미 했으면 저장된 결과를 다시 보냄)
//   SNOW 다시                                           → 오늘 했어도 새로 분석
//   목록                                                 → 최근 분석한 종목과 결론
//   그 밖                                                → 사용법 안내
//
// 안전장치:
//   · 등록된 대화(TELEGRAM_CHAT_ID)에서 온 글만 처리한다. 다른 대화는 답도 하지 않는다.
//   · 글을 셸·프롬프트에 그대로 넣지 않는다 — 정규식을 통과하고 종목 마스터에 있는 티커만, execFile 인자로 넘긴다.
//   · 폴링 위치·큐는 저장소가 아니라 CACHE_DIR 에 둔다(공개 저장소에 대화 흔적이 남지 않게, 헬스체크 오경보도 없게).
//   · 폴링 위치를 **먼저** 전진시키고 일한다 — 한 메시지가 프로그램을 죽여도 재시작 뒤 같은 분석을 또 돌리지 않는다.
//   · 한 번에 한 종목. 아침 스캔·리서치(run-breakout / run-claude-job)가 돌고 있으면 끝날 때까지 기다린다.
//   · 버그로 인한 폭주 차단용 하루 상한 ONDEMAND_DAILY_MAX(기본 30). 사용자 한도가 아니라 사고 방지용이다.

const fs = require('fs');
const path = require('path');
const { execFile, execFileSync } = require('child_process');
const { paths, loadEnv, readJson, writeJson, ensureDir, say, today } = require('./lib/util');
const { tg, notify, configured } = require('./lib/notify');
const master = require('./data/kis-master');

const STATE = path.join(paths.cacheDir, 'tg-listener.json');     // { offset, day, count }
const MAX_AGE_SEC = 6 * 3600;                                     // 이보다 오래된 요청은 버린다(맥이 꺼져 있던 동안 쌓인 것)
const USAGE = '사용법: 티커와 함께 "살까?" 또는 "심층분석"을 보내 주세요.\n예) SNOW 살까?  (실장이 팀 의견을 모아 결론을 드립니다)\n    SNOW 심층분석\n    SNOW, NET 심층분석\n    SNOW 다시 (오늘 한 분석을 새로)\n    목록 (최근 분석한 종목)\n    보유 (보유 종목 새 뉴스·공시·증권사 리포트 확인)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ── 명령 해석 (순수 함수 — 테스트 대상) ──
const TICKER_RE = /^[A-Za-z][A-Za-z.\-/]{0,7}$/;
function parseCommand(text) {
  const s = String(text || '').trim().replace(/\s+/g, ' ');
  if (!s) return { kind: 'none' };
  if (/^(목록|list)$/i.test(s)) return { kind: 'list' };
  if (/^(보유|보유\s*종목|holdings?)$/i.test(s)) return { kind: 'holdings' };
  // "SNOW 살까?" — 같은 분석을 실장 종합 형식으로 답한다 (2026-10-26)
  const b = s.match(/^(.+?)\s*(살까요?|사도\s*될까요?|매수\s*할까요?)\s*\??$/);
  if (b) {
    const tk = b[1].split(/[,\s]+/).map((x) => x.trim()).filter(Boolean);
    if (!tk.length || tk.length > 3 || !tk.every((t) => TICKER_RE.test(t))) return { kind: 'usage' };
    return { kind: 'analyze', tickers: [...new Set(tk.map((t) => t.toUpperCase()))], force: false, ask: 'buy' };
  }
  const m = s.match(/^(.+?)\s*(심층\s*분석|분석|다시|deep)$/i);
  if (!m) return { kind: 'usage' };
  const tickers = m[1].split(/[,\s]+/).map((x) => x.trim()).filter(Boolean);
  if (!tickers.length || tickers.length > 5 || !tickers.every((t) => TICKER_RE.test(t))) return { kind: 'usage' };
  return { kind: 'analyze', tickers: [...new Set(tickers.map((t) => t.toUpperCase()))], force: /다시/.test(m[2]) };
}

const fromOwner = (u) => !!(u && u.message && u.message.chat && String(u.message.chat.id) === String(process.env.TELEGRAM_CHAT_ID) && typeof u.message.text === 'string');

// 아침 스캔·리서치·주간 리뷰가 돌고 있는가 (RS 대기 중인 morning.sh 는 막지 않는다 — 2~3시간 걸린다)
function busy() {
  try { return execFileSync('pgrep', ['-f', 'scripts/run-breakout.js|run-claude-job.sh|build-chief-report.js']).toString().trim().length > 0; } catch (e) { return false; }
}

function loadState() { const s = readJson(STATE, null) || {}; return { offset: s.offset || 0, day: s.day || null, count: s.count || 0 }; }
function saveState(s) { ensureDir(path.dirname(STATE)); writeJson(STATE, s); }

function savedResult(ticker, date) {
  const { loadOndemand } = require('./finish-ondemand');
  return (loadOndemand().items || []).find((x) => x.ticker === ticker && x.requestedOn === date) || null;
}

function runOne(ticker, ask = null) {
  return new Promise((resolve) => {
    const sh = path.join(paths.root, 'deploy', 'macmini', 'run-ondemand.sh');
    // ask 는 결과 메시지 형식만 바꾼다(finish-ondemand 가 ONDEMAND_ASK 를 읽는다) — "살까?" = 실장 종합 형식
    execFile('/bin/bash', [sh, ticker], { cwd: paths.root, timeout: 30 * 60 * 1000, maxBuffer: 1e7, env: { ...process.env, ONDEMAND_ASK: ask || '' } }, (err, stdout) => {
      resolve({ ok: !err, tail: String(stdout || '').trim().split('\n').slice(-2).join(' ').slice(-300), code: err && err.code });
    });
  });
}

const queue = [];
let working = false;
async function drain() {
  if (working) return;
  working = true;
  try {
    while (queue.length) {
      if (busy()) { await sleep(60000); continue; }
      const job = queue.shift();
      const st = loadState(), d = today();
      if (st.day !== d) { st.day = d; st.count = 0; }
      const max = Number(process.env.ONDEMAND_DAILY_MAX || 30);
      if (st.count >= max) { await notify(`⛔ ${job.ticker}: 오늘 분석 상한(${max}건)에 닿아 멈췄습니다. 상한은 사고 방지용입니다 — 더 필요하면 알려 주세요.`); continue; }
      st.count += 1; saveState(st);
      say('SYSTEM', `분석 시작: ${job.ticker}`);
      const r = await runOne(job.ticker, job.ask);
      // 결과·실패 알림은 run-ondemand.sh(→ finish-ondemand)가 보낸다. 여기서는 래퍼 자체가 죽었을 때만 알린다.
      if (!r.ok && r.code !== 1) await notify(`❌ ${job.ticker} 분석이 끝나지 못했습니다 (${r.tail || '원인 불명'})`);
      say('SYSTEM', `분석 끝: ${job.ticker} ${r.ok ? 'ok' : 'fail'}`);
    }
  } finally { working = false; }
}

async function handle(text) {
  const c = parseCommand(text);
  if (c.kind === 'none') return;
  if (c.kind === 'usage') return notify(USAGE);
  if (c.kind === 'holdings') {
    // 보유 종목 새 소식 (2026-10-17) — 1~2분 걸린다. 기다리지 않고 띄운다(그동안에도 메시지를 받게). 결과는 그 스크립트가 보낸다.
    await notify('🔎 보유 종목 새 소식을 확인합니다 — 1~2분 걸립니다.');
    execFile(process.execPath, [path.join(paths.root, 'scripts', 'holdings-watch.js'), '--force'], { cwd: paths.root, timeout: 10 * 60 * 1000 },
      (err) => { if (err) notify('❌ 보유 종목 소식 확인이 끝나지 못했습니다 — 잠시 뒤 "보유"를 다시 보내 주세요.'); });
    return;
  }
  if (c.kind === 'list') {
    const { loadOndemand } = require('./finish-ondemand');
    const items = (loadOndemand().items || []).slice(0, 15);
    const icon = { '매수 적정': '🟢', '조건부': '🟡', '아니다': '🔴', '판정 불가': '⚪' };
    return notify(items.length ? ['최근 분석한 종목', ...items.map((x) => `${icon[x.verdict] || '⚪'} ${x.ticker} ${x.requestedOn} — ${x.verdict}`)].join('\n') : '아직 분석한 종목이 없습니다.\n' + USAGE);
  }
  for (const raw of c.tickers) {
    const m = await master.lookup(raw);
    if (!m.ok && m.reason === 'not_found') { await notify(`❓ ${raw}: 미국 거래소(나스닥·뉴욕·아멕스)에 그런 종목이 없습니다.`); continue; }
    if (m.ok && m.isEtf) { await notify(`ℹ️ ${m.ticker}: ETF·ETN 은 분석하지 않습니다 (실적·신제품이 없어 기준이 맞지 않습니다).`); continue; }
    const T = m.ok ? m.ticker : raw;                                   // 마스터를 못 받았으면 정규식을 통과한 글자 그대로 시도한다
    if (!c.force) {
      const prev = savedResult(T, today());
      if (prev) { const { messages } = require('./finish-ondemand'); for (const x of messages(prev, { ask: c.ask })) await notify(x); await notify(`(오늘 ${T} 를 이미 분석했습니다 — 저장된 결과입니다. 새로 하려면 "${T} 다시")`); continue; }
    }
    if (queue.some((q) => q.ticker === T)) { await notify(`⏳ ${T}: 이미 대기 중입니다.`); continue; }
    queue.push({ ticker: T, ask: c.ask || null });
    const pos = queue.length + (working ? 1 : 0);
    await notify(busy() ? `⏳ ${T}${m.ok && m.nameKo ? ` (${m.nameKo})` : ''}: 아침 자동 실행이 돌고 있어 끝나면 바로 분석합니다.`
      : `🔎 ${T}${m.ok && m.nameKo ? ` (${m.nameKo})` : ''} ${c.ask === 'buy' ? '실장이 팀 의견을 모아 검토합니다' : '분석을 시작합니다'} — 약 15분 걸립니다${pos > 1 ? ` (앞에 ${pos - 1}건)` : ''}.`);
  }
  drain();   // 기다리지 않는다 — 분석하는 동안에도 새 메시지를 받는다
}

async function poll({ once = false } = {}) {
  const st = loadState();
  let backoff = 2000;
  for (;;) {
    const r = await tg('getUpdates', { offset: st.offset, timeout: once ? 0 : 50, allowed_updates: ['message'] }, once ? 20000 : 65000);
    if (!r.ok) { say('WARN', `getUpdates 실패: ${r.error} — ${backoff / 1000}초 뒤 재시도`); if (once) return; await sleep(backoff); backoff = Math.min(backoff * 2, 60000); continue; }
    backoff = 2000;
    for (const u of r.result || []) {
      st.offset = Math.max(st.offset, u.update_id + 1);
      saveState({ ...loadState(), offset: st.offset });               // 먼저 전진 — 이 메시지를 처리하다 죽어도 다시 돌지 않는다
      if (!fromOwner(u)) continue;                                     // 다른 대화·글이 아닌 것은 무시
      if (Date.now() / 1000 - u.message.date > MAX_AGE_SEC) { await notify(`(오래된 요청은 버렸습니다: "${String(u.message.text).slice(0, 40)}" — 다시 보내 주세요)`); continue; }
      try { await handle(u.message.text); } catch (e) { say('WARN', `처리 실패: ${e.message}`); await notify('요청을 처리하지 못했습니다. 잠시 뒤 다시 보내 주세요.'); }
    }
    if (once) { while (working || queue.length) await sleep(1000); return; }
  }
}

if (require.main === module) {
  loadEnv();
  if (!configured()) { console.error('TELEGRAM_TOKEN · TELEGRAM_CHAT_ID 가 없습니다'); process.exit(2); }
  say('SYSTEM', '텔레그램 수신 시작 (7팀)');
  poll({ once: process.argv.includes('--once') }).then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
}
module.exports = { parseCommand, fromOwner, busy, USAGE };
