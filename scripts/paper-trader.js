'use strict';
// 6팀 밤 루프 — 관심 종목의 장중 트리거를 보고 자체 원장에 모의 매매를 적는다. LLM 없음.
//
//   node scripts/paper-trader.js                  한 번 돈다 (스케줄러가 5분마다 부른다). 장 시간이 아니면 바로 끝난다
//   node scripts/paper-trader.js --status         사지 않고 지금 상태만 본다
//   node scripts/paper-trader.js --prep           개장 전에 거래량 프로필을 미리 받아 둔다
//   node scripts/paper-trader.js --replay=2026-09-25 [--tickers=ZS,MRNA] [--source=yahoo|kis]
//                                                 지난 세션을 5분 단위로 다시 돌려 본다 (임시 원장 — 실제 원장을 건드리지 않는다)
//   --no-git   결과를 올리지 않는다
//
// ⚠️ 실제 주문은 없다. kis.js 는 시세만 읽는다. 여기서 "샀다"는 state/paper/ 의 장부에 적었다는 뜻이다.
// ⚠️ 원장은 공개 저장소에 올라간다. 금액·수량은 쓰지 않는다. 수량은 알림(텔레그램)에서만 계산한다.
// ⚠️ 관심 목록은 아침 run-breakout 이 만든다. 그 목록이 "직전 세션 종가 기준"이 아니면 새로 사지 않는다.

const fs = require('fs');
const os = require('os');
const path = require('path');
const { paths, loadEnv, readJson, writeJson, writeWindowData, say, ensureDir, round } = require('./lib/util');
const cal = require('./lib/market-calendar');
const { fetchBarsCached, barDateET } = require('./lib/bars');
const { sma } = require('./lib/ta');
const kis = require('./lib/kis');
const orh = require('./lib/orh');
const intraday = require('./lib/intraday');
const paper = require('./lib/paper');
const { loadRules, account } = require('./lib/rules');

const arg = (argv, name, def = null) => { const p = argv.find((s) => s.startsWith(`--${name}=`)); return p ? p.slice(name.length + 3) : def; };
const etParts = (ms) => {
  const p = {};
  for (const x of new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).formatToParts(new Date(ms))) p[x.type] = x.value;
  return { date: `${p.year}-${p.month}-${p.day}`, hm: (p.hour === '24' ? '00' : p.hour) + p.minute };
};
const kst = (ms) => new Date(ms + 9 * 3600000).toISOString().replace('T', ' ').slice(0, 16) + ' KST';
const closeHm = (date) => (cal.EARLY_CLOSE && cal.EARLY_CLOSE.has(date) ? '1300' : '1600');

// ── 원장 (디렉터리 하나) ──
class Ledger {
  constructor(dir) { this.dir = dir; ensureDir(dir); }
  f(name) { return path.join(this.dir, name); }
  load() {
    this.positions = readJson(this.f('positions.json'), { positions: [] }).positions;
    this.trades = readJson(this.f('trades.json'), { trades: [] }).trades;
    this.equity = readJson(this.f('equity.json'), { series: [] }).series;
    this.pending = readJson(this.f('pending.json'), { items: [] }).items;
    this.meta = readJson(this.f('meta.json'), { lastEod: null, days: {} });
    return this;
  }
  save() {
    writeJson(this.f('positions.json'), { positions: this.positions });
    writeJson(this.f('trades.json'), { trades: this.trades });
    writeJson(this.f('equity.json'), { series: this.equity });
    writeJson(this.f('pending.json'), { items: this.pending });
    writeJson(this.f('meta.json'), this.meta);
  }
  close(trade) {
    if (!trade) return;
    this.trades.unshift(trade);
    this.positions = this.positions.filter((p) => p.id !== trade.id);
  }
  main() { return this.positions.filter((p) => p.book === 'main'); }
}

// ── 시세 공급자 ──
function liveProvider(sessionDate) {
  return {
    name: 'kis',
    async history(t) { return intraday.history5m(t, { source: 'kis', asOf: sessionDate }); },
    async today(t, nowMs) {
      const et = etParts(nowMs);
      const pages = et.hm >= '1130' ? 2 : 1;      // 04:00 부터 센 봉이 120개를 넘는 시각
      const r = await kis.minuteBars(t, { pages, regularOnly: true });
      if (!r.ok) return r;
      return { ok: true, bars: orh.completed(r.bars.filter((b) => b.date === sessionDate), nowMs) };
    },
    async daily(t) {
      const r = await kis.dailyBars(t, { pages: 1 });
      if (r.ok) return r;
      const y = await fetchBarsCached(t, { range: '1y', noCache: true });
      return y.ok ? { ok: true, bars: y.bars } : { ok: false, error: `${r.error} / yahoo ${y.error}` };
    },
  };
}
function replayProvider(sessionDate, source) {
  const mem = new Map();
  const hist = async (t) => { if (!mem.has(t)) mem.set(t, await intraday.history5m(t, { source, asOf: require('./lib/util').today() })); return mem.get(t); };
  return {
    name: `replay:${source}`,
    history: hist,
    async today(t, nowMs) { const h = await hist(t); return h.ok ? { ok: true, bars: orh.completed(h.bars.filter((b) => b.date === sessionDate), nowMs) } : h; },
    async daily(t) { const r = await fetchBarsCached(t, { range: '2y' }); return r.ok ? { ok: true, bars: r.bars.filter((b) => barDateET(b.t) <= sessionDate) } : r; },
  };
}

// ── 알림 (텔레그램). 수량은 여기서만 계산한다 ──
async function notify(text) {
  const tok = process.env.TELEGRAM_TOKEN, chat = process.env.TELEGRAM_CHAT_ID;
  if (!tok || !chat) return false;
  try {
    const c = new AbortController(); const timer = setTimeout(() => c.abort(), 8000);
    try { await fetch(`https://api.telegram.org/bot${tok}/sendMessage`, { method: 'POST', signal: c.signal,
      headers: { 'content-type': 'application/json' }, body: JSON.stringify({ chat_id: chat, text, disable_web_page_preview: true }) }); } finally { clearTimeout(timer); }
    return true;
  } catch (e) { return false; }
}

// ── 한 틱 ──
async function tick({ nowMs, sessionDate, ledger, watch, rules, acct, prov, dry = false, log = [], events = [] }) {
  const et = etParts(nowMs);
  const out = { phase: null, fired: [], closed: [], checked: 0, errors: [] };
  const day = (ledger.meta.days[sessionDate] = ledger.meta.days[sessionDate] || { fired: [], newMain: 0, nextDone: false });
  const close = closeHm(sessionDate);
  out.phase = et.date !== sessionDate ? 'off' : et.hm < '0935' ? 'pre' : et.hm < close ? 'open' : 'post';
  if (out.phase === 'off' || out.phase === 'pre') return out;

  const todayOf = new Map();
  const barsToday = async (t) => { if (!todayOf.has(t)) todayOf.set(t, await prov.today(t, nowMs)); return todayOf.get(t); };
  const closeTrade = (tr) => {
    if (!tr) return;
    ledger.close(tr); out.closed.push(tr);
    if (tr.book === 'main') events.push(`🔻 ${tr.ticker} 청산 — ${tr.why} · ${tr.exit} · ${tr.R > 0 ? '+' : ''}${tr.R}R (보유 ${tr.days}일)`);
  };

  // 1) '다음 날 시가' 그림자 장부 — 어제 신호가 난 종목을 오늘 첫 봉 시가에 산다
  if (!day.nextDone) {
    for (const n of ledger.pending.filter((x) => x.forSession === sessionDate)) {
      const b = await barsToday(n.ticker);
      if (!b.ok || !b.bars.length) continue;
      const entry = b.bars[0].o * (1 + rules.fill.buySlipPct / 100);
      const ext = n.ma10 != null ? (b.bars[0].o - n.ma10) / n.adrUsd : null;
      if (ext == null || ext < rules.risk.maxExtensionAdr) {
        const stop = Math.min(Math.max(n.dayLow, entry - rules.risk.stopAdr * n.adrUsd), entry - rules.risk.minStopAdr * n.adrUsd);
        const p = paper.open({ ticker: n.ticker, date: sessionDate, at: '0930', entry, stop, book: 'nextOpen', rules, riskPct: acct.riskPct, regime: watch ? watch.regime : null, grade: n.grade, ctx: n.ctx });
        if (p && !dry) { p.lastBarT = b.bars[0].t - 1; ledger.positions.push(p); }
      }
    }
    ledger.pending = ledger.pending.filter((x) => x.forSession > sessionDate);
    day.nextDone = true;
  }

  // 2) 보유 관리 — 마지막으로 본 봉 이후의 5분봉으로 손절을 확인한다
  for (const t of [...new Set(ledger.positions.map((p) => p.ticker))]) {
    const b = await barsToday(t);
    if (!b.ok) { out.errors.push(`${t}: ${b.error}`); continue; }
    for (const p of ledger.positions.filter((x) => x.ticker === t)) {
      for (const bar of b.bars) {
        if (bar.t <= (p.lastBarT || 0)) continue;
        p.lastBarT = bar.t;
        const tr = paper.onBar(p, bar, { date: sessionDate, rules });
        if (tr) { if (!dry) closeTrade(tr); break; }
      }
    }
  }

  // 3) 신규 진입 — 진입 창 안에서만
  const minsOpen = orh.hmToMin(et.hm) - orh.hmToMin('0930');
  const canEnter = out.phase === 'open' && watch && watch.fresh && watch.regime !== 'red' && minsOpen <= rules.entry.entryWindowMin + 5;
  if (watch && out.phase === 'open') {
    for (const w of watch.items) {
      if (day.fired.includes(w.ticker)) continue;
      const held = ledger.main().some((p) => p.ticker === w.ticker);
      if (held) continue;
      const h = await prov.history(w.ticker);
      const b = await barsToday(w.ticker);
      if (!h.ok || !b.ok) { out.errors.push(`${w.ticker}: ${(h.error || b.error)}`); log.push({ ticker: w.ticker, at: et.hm, fired: false, ko: `시세 없음 — ${h.error || b.error}` }); continue; }
      out.checked++;
      const bars5 = [...h.bars.filter((x) => x.date < sessionDate), ...b.bars];
      const r = intraday.trigger({ bars5, sessionDate, plan: { ticker: w.ticker, pivot: w.pivot, adrPct: w.adrPct, price: w.price, ma10: w.ma10 }, rules });
      log.push({ ticker: w.ticker, at: r.at || et.hm, fired: r.fired, grade: w.grade, ko: orh.describe(r), pace: r.pace ?? null, level: r.level ?? null });
      if (!r.fired || !canEnter || dry) continue;
      const isMain = !w.shadowOnly;
      if (isMain && (day.newMain >= rules.entry.maxNewPerDay || ledger.main().length >= rules.entry.maxPositions)) { log[log.length - 1].ko += ' — 상한에 걸려 사지 않음'; continue; }
      if (isMain && w.sector && ledger.main().filter((p) => p.ctx && p.ctx.sector === w.sector).length >= rules.entry.maxPerSector) { log[log.length - 1].ko += ' — 같은 섹터 상한'; continue; }
      const ctx = { orh: r.orh, pace: r.pace, ext: r.ext, levelIs: r.levelIs, stopIs: r.stopIs, at: r.at, pivot: w.pivot, sector: w.sector || null, industry: w.industry || null,
        baseWeeks: w.metrics ? w.metrics.baseWeeks : null, depthPct: w.metrics ? w.metrics.depthPct : null, priorMovePct: w.metrics ? w.metrics.priorMovePct : null,
        catalyst: w.catalyst ? w.catalyst.category : null, flow: w.flow ? w.flow.flow : null, regime: watch.regime, source: prov.name };
      const lastT = b.bars[r.barIdx].t;   // 트리거 봉까지는 본 것으로 친다 — 손절 확인은 그다음 봉부터
      for (const book of (isMain ? ['main', 'trail20'] : [w.shadowBook || 'gradeC'])) {
        const p = paper.open({ ticker: w.ticker, date: sessionDate, at: r.entryAt, entry: r.entry, stop: r.stop, book, rules, riskPct: acct.riskPct, regime: watch.regime, grade: w.grade, ctx });
        if (!p) continue;
        p.lastBarT = lastT;
        ledger.positions.push(p);
        if (book === 'main') {
          day.newMain++; out.fired.push(p);
          const sh = acct.usd ? Math.floor(acct.usd * p.weightPct / 100 / p.entry) : null;
          events.push(`🟢 ${w.ticker}(${w.grade}) 모의 매수 ${r.entryAt} ET\n진입 ${p.entry} · 손절 ${p.stop} (리스크 ${p.riskPerSharePct}%) · 비중 ${p.weightPct}%${sh != null ? ` · ${sh}주` : ''}\n${r.levelIs === 'pivot' ? '피벗' : '장중 고가'} ${r.level} 돌파 · 거래량 페이스 ${r.pace}× · 이격 ${r.ext} ADR`);
        }
      }
      day.fired.push(w.ticker);
      const dl = Math.min(...b.bars.map((x) => x.l));
      ledger.pending.push({ ticker: w.ticker, grade: w.grade, forSession: nextSession(sessionDate), ma10: w.ma10, adrUsd: w.price * w.adrPct / 100, dayLow: dl, ctx });
    }
  }

  // 4) 장 마감 처리 — 세션당 한 번
  if (out.phase === 'post' && ledger.meta.lastEod !== sessionDate) {
    let done = true;
    for (const t of [...new Set(ledger.positions.map((p) => p.ticker))]) {
      const d = await prov.daily(t);
      if (!d.ok) { out.errors.push(`${t} 일봉: ${d.error}`); done = false; continue; }
      for (const p of ledger.positions.filter((x) => x.ticker === t)) {
        const trail = p.book === 'trail20' ? 20 : rules.exit.trailMa;
        const cm = intraday.closeAndMa(d.bars, sessionDate, trail);
        if (!cm) { out.errors.push(`${t}: ${sessionDate} 일봉이 아직 없음`); done = false; continue; }
        if (!dry) for (const tr of paper.onClose(p, { date: sessionDate, close: cm.close, ma: cm.ma, rules, trailMa: trail })) closeTrade(tr);
      }
    }
    if (done && !dry) {
      const realized = ledger.trades.filter((t) => t.book === 'main').reduce((s, t) => s + (t.pct || 0), 0);
      const pct = round(realized + ledger.main().reduce((s, p) => s + paper.curPct(p), 0));
      ledger.equity = [...ledger.equity.filter((e) => e.date !== sessionDate), { date: sessionDate, pct }].sort((a, b) => (a.date < b.date ? -1 : 1));
      ledger.meta.lastEod = sessionDate;
      out.eod = true;
    }
  }
  return out;
}

function nextSession(d) { let c = d; for (let i = 0; i < 10; i++) { c = cal.addDays(c, 1); if (cal.isTradingDay(c)) return c; } return null; }

// 아침 관심 목록 — 직전 세션 종가 기준으로 만든 것이어야 한다
function loadWatch(sessionDate) {
  const dir = paths.watchlistDir;
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort() : [];
  if (!files.length) return null;
  const w = readJson(path.join(dir, files[files.length - 1]), null);
  if (!w) return null;
  const expect = cal.prevTradingDay(sessionDate);
  return { ...w, fresh: w.sessionDate === expect, expect };
}

function summary(ledger, rules) {
  const main = ledger.trades.filter((t) => t.book === 'main');
  const pub = (t) => ({ ticker: t.ticker, grade: t.grade, entryDate: t.entryDate, entryAt: t.entryAt, exitDate: t.exitDate, days: t.days,
    entry: t.entry, stop0: t.stop0, exit: t.exit, R: t.R, pct: t.pct, why: t.why, ruleVersion: t.ruleVersion });
  const books = {};
  for (const b of ['trail20', 'nextOpen', 'gradeC', 'far']) books[b] = paper.stats(ledger.trades.filter((t) => t.book === b));
  return { positions: ledger.main().map(paper.view), trades: main.slice(0, 60).map(pub),
    stats: { ...paper.stats(main, { equity: ledger.equity }), byGrade: paper.groupStats(main, (t) => t.grade), books, slipPct: rules.fill.buySlipPct } };
}

function publish(ledger, rules, { triggers, health }) {
  const file = path.join(paths.dashboardData, 'team6.js');
  let data = null;
  try { const m = fs.readFileSync(file, 'utf8').match(/window\.TEAM6_DATA\s*=\s*([\s\S]*);\s*$/); data = m ? JSON.parse(m[1]) : null; } catch (e) { /* 없으면 만들지 않는다 */ }
  if (!data) return false;
  Object.assign(data, summary(ledger, rules), { health });
  if (triggers) data.triggers = triggers;
  writeWindowData(file, 'TEAM6_DATA', data);
  return true;
}

async function live(argv) {
  const rules = loadRules(), acct = account(rules);
  const nowMs = Date.now(), et = etParts(nowMs);
  const dry = argv.includes('--status');
  if (!kis.configured()) { say('WARN', '.env 에 KIS_APP_KEY / KIS_APP_SECRET 가 없습니다'); return; }
  if (!cal.isTradingDay(et.date)) { if (dry) say('T6', `${et.date} 은 거래일이 아닙니다`); return; }
  const sessionDate = et.date;
  if (argv.includes('--prep')) {
    // 개장 전에 거래량 프로필(지난 20세션의 5분봉)을 받아 캐시에 둔다 — 종목당 20~30초 걸린다
    const w = loadWatch(sessionDate);
    if (!w) { say('WARN', '관심 목록이 없습니다 — 아침 run-breakout 을 먼저 실행하세요'); return; }
    const prov = liveProvider(sessionDate);
    for (const x of w.items) {
      const h = await prov.history(x.ticker);
      const days = h.ok ? orh.volumeProfile(h.bars, { exclude: sessionDate }).days : 0;
      say('T6', `${x.ticker.padEnd(6)} 프로필 ${h.ok ? days + '세션' + (h.cached ? ' (캐시)' : '') : '실패 — ' + h.error}`);
    }
    if (!w.fresh) say('WARN', `관심 목록 기준일 ${w.sessionDate} ≠ 직전 세션 ${w.expect} — 오늘 밤은 새로 사지 않습니다`);
    return;
  }
  if (et.hm < '0935' || et.hm > '2000') { if (dry) say('T6', `지금은 ${et.hm} ET — 장 시간이 아닙니다`); return; }

  const ledger = new Ledger(paths.paperDir).load();
  if (et.hm >= closeHm(sessionDate) && ledger.meta.lastEod === sessionDate) { if (dry) say('T6', '오늘 마감 처리는 끝났습니다'); return; }
  const watch = loadWatch(sessionDate);
  const logFile = path.join(paths.orhDir, `${sessionDate}.json`);
  const prevLog = readJson(logFile, { date: sessionDate, ticks: 0, items: {} });
  const log = [], events = [];
  const res = await tick({ nowMs, sessionDate, ledger, watch, rules, acct, prov: liveProvider(sessionDate), dry, log, events });

  for (const l of log) prevLog.items[l.ticker] = l;       // 종목당 최신 상태 하나
  prevLog.ticks++;
  const triggers = Object.values(prevLog.items).sort((a, b) => (b.fired - a.fired) || (a.ticker < b.ticker ? -1 : 1));
  const stale = watch && !watch.fresh;
  const health = { at: new Date(nowMs).toISOString(), atKst: kst(nowMs), atEt: `${et.date} ${et.hm}`, phase: res.phase, source: 'kis',
    status: res.errors.length ? `오류 ${res.errors.length}건` : stale ? '관심 목록이 오래됨 — 새로 사지 않음' : '정상',
    watch: watch ? watch.items.length : 0, checked: res.checked, errors: res.errors.slice(0, 5) };
  for (const l of log) say('T6', `${l.ticker.padEnd(6)} ${l.ko}`);
  if (stale) say('WARN', `관심 목록 기준일 ${watch.sessionDate} ≠ 직전 세션 ${watch.expect} — 아침 run-breakout 이 돌지 않았습니다. 새로 사지 않습니다`);
  for (const e of res.errors) say('WARN', e);
  if (dry) { say('T6', `상태 확인만 했습니다 (${et.hm} ET · 관심 ${health.watch} · 보유 ${ledger.main().length})`); return; }

  ledger.save();
  writeJson(logFile, prevLog);
  writeJson(path.join(paths.paperDir, 'health.json'), health);
  publish(ledger, rules, { triggers, health });
  for (const e of events) { say('T6', e.replace(/\n/g, ' · ')); await notify(e); }
  say('T6', `${et.hm} ET · ${res.phase} · 관심 ${health.watch} · 신규 ${res.fired.length} · 청산 ${res.closed.length} · 보유 ${ledger.main().length}${res.eod ? ' · 마감 처리 완료' : ''}`);

  // 올리는 건 일이 있었을 때만 — 5분마다 커밋하지 않는다
  if ((res.fired.length || res.closed.length || res.eod) && !argv.includes('--no-git')) {
    require('./update-github').commitAndPush(sessionDate, `6팀 ${res.fired.length ? '진입 ' + res.fired.map((p) => p.ticker).join(',') + ' ' : ''}${res.closed.length ? '청산 ' + res.closed.filter((t) => t.book === 'main').map((t) => t.ticker).join(',') + ' ' : ''}${res.eod ? '마감' : ''}`.trim());
  }
}

async function replay(argv) {
  const rules = loadRules(), acct = account(rules);
  const sessionDate = arg(argv, 'replay');
  const source = arg(argv, 'source', 'yahoo');
  if (!cal.isTradingDay(sessionDate)) { say('WARN', `${sessionDate} 은 거래일이 아닙니다`); return; }
  const { qullamaggieRegime } = require('./lib/regime');
  const q = await fetchBarsCached('QQQ', { range: '2y' });
  const regime = qullamaggieRegime(q.bars.filter((b) => barDateET(b.t) < sessionDate)).verdict;
  let tickers = (arg(argv, 'tickers') || '').split(',').map((t) => t.trim().toUpperCase()).filter(Boolean);
  if (!tickers.length) { const w = loadWatch(sessionDate) || { items: [] }; tickers = w.items.map((x) => x.ticker); }
  const items = [];
  for (const t of tickers) {
    const p = await intraday.planAsOf(t, sessionDate, { rules, regime, riskPct: acct.riskPct });
    if (!p.ok) { say('WARN', `${t}: ${p.error}`); continue; }
    const g = p.plan;
    say('T6', `${t.padEnd(6)} ${sessionDate} 아침 기준 · ${g.state}${g.grade ? ' ' + g.grade : ''}${g.pivot ? ` · 피벗 ${g.pivot} (${g.distToPivotPct}% · ${g.distToPivotAdr} ADR)` : ''}${g.near ? '' : ' · 관심 목록 아님'}`);
    if (g.state === 'pre' && g.near) items.push({ ticker: t, grade: g.grade, pivot: g.pivot, stopPre: g.stop, adrPct: g.adrPct, weightPct: g.weightPct, price: g.price, ma10: g.ma10, metrics: g.metrics, shadowOnly: g.grade === 'C' });
  }
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'paper-replay-'));
  const ledger = new Ledger(dir).load();
  const watch = { items, regime, fresh: true, sessionDate: cal.prevTradingDay(sessionDate) };
  const prov = replayProvider(sessionDate, source);
  say('T6', `재생 ${sessionDate} · 시세 ${source} · 국면 ${regime} · 관심 ${items.length}종목 · 임시 원장 ${dir}`);
  const start = kis.etToEpoch(sessionDate.replace(/-/g, ''), '093500');
  const last = {};
  for (let ms = start; ms <= start + (6 * 60 + 40) * 60000; ms += 300000) {
    const log = [], events = [];
    const r = await tick({ nowMs: ms, sessionDate, ledger, watch, rules, acct, prov, log, events });
    for (const l of log) last[l.ticker] = l;
    for (const e of events) say('T6', `[${etParts(ms).hm}] ${e.replace(/\n/g, ' · ')}`);
    if (r.eod) break;
  }
  for (const l of Object.values(last)) if (!l.fired) say('T6', `${l.ticker.padEnd(6)} ${l.ko}`);
  for (const p of ledger.main()) say('T6', `보유 ${p.ticker} 진입 ${p.entry} 손절 ${p.stop} 종가 ${p.last} → ${paper.curR(p)}R`);
  const s = summary(ledger, rules);
  say('T6', `재생 끝 — 보유 ${s.positions.length} · 끝난 거래 ${s.trades.length}${s.stats.n ? ` · 평균 ${s.stats.avgR}R` : ''}`);
  try { fs.rmSync(dir, { recursive: true, force: true }); } catch (e) { /* noop */ }
}

module.exports = { tick, Ledger, loadWatch, summary, etParts, nextSession };

if (require.main === module) {
  loadEnv();
  const argv = process.argv.slice(2);
  (arg(argv, 'replay') ? replay(argv) : live(argv)).catch((e) => { console.error('6팀 루프 오류:', e); process.exit(1); });
}
