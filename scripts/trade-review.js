'use strict';
// 12팀 도담 — 매매 복기 글 (2026-11-07 사용자: "매매일지에 승 패가 나오면 왜 성공했는지 왜 실패했는지 분석글 써서 티스토리에 올려")
//   node scripts/trade-review.js              정기(아침 morning.sh) — trading-journal 에 새로 청산된 거래가 있으면 복기 글 → 티스토리 → 텔레그램
//   node scripts/trade-review.js --seed       지금 청산돼 있는 거래를 전부 "이미 복기함"으로 기록만 (처음 한 번)
//   node scripts/trade-review.js --ticker=ZS --dry   그 거래로 글만 만들어 CACHE_DIR/blog/ 에 저장 (발행·알림·기록 없음)
//
// 숫자는 코드가 계산한다(체크리스트 21번 글 기준 — lib/user-checklist). AI(오퍼스, 도구 없음)는 그 숫자와 사용자 글로 문체만 입힌다.
// 수량·수수료는 읽지도 넘기지도 않는다. 판단 보조 — 결과가 아니라 규칙을 지켰는지로 채점한다.

const fs = require('fs');
const path = require('path');
const { paths, loadEnv, readJson, writeJson, ensureDir, say, today, round } = require('./lib/util');
const { fetchBarsCached, barDateET } = require('./lib/bars');
const { gradeSetup } = require('./lib/setup-grade');
const { loadRules } = require('./lib/rules');
const { qullamaggieRegime } = require('./lib/regime');
const { loadSnapshot } = require('./lib/history-series');
const { saveChart } = require('./lib/chart');
const UC = require('./lib/user-checklist');
const TS = require('./lib/tistory');

const TJ = 'https://raw.githubusercontent.com/305rhfueo-ui/trading-journal/main/trades.json';
const DONE_FILE = path.join(paths.cacheDir, 'trade-reviews.json');
const OUT_DIR = path.join(paths.cacheDir, 'blog');
const MAX_TRIES = 3;
const iso = (b) => barDateET(b.t);
const idxOn = (bars, d) => bars.findIndex((b) => iso(b) >= d);
const pct = (a, b) => round((a / b - 1) * 100, 1);
const keyOf = (t) => `${t.id}`;

// 청산 거래의 사실 (순수 함수 — 테스트 대상). long 만 규칙 계산, short 는 기본 숫자만.
function tradeFacts({ trade, bars, qqq, snap, rules }) {
  const T = String(trade.ticker).toUpperCase();
  const ei = idxOn(bars, trade.entryDate), xi = idxOn(bars, trade.exitDate);
  if (ei < 60 || xi < ei) return { ok: false, error: '매수·매도일 봉이 없다' };
  const entry = Number(trade.entryPrice), exit = Number(trade.exitPrice), long = trade.side !== 'short';
  const ret = long ? pct(exit, entry) : pct(entry, exit);
  const f = { ticker: T, side: long ? '매수' : '공매도', tag: trade.tag || null, memo: trade.memo || '', entryDate: iso(bars[ei]), entryPrice: entry,
    exitDate: iso(bars[xi]), exitPrice: exit, returnPct: ret, result: ret > 0 ? '승' : '패', holdSessions: xi - ei };

  // 매수 전날 밤 기준 — 체크리스트 (시장·종목·횡보·돌파)
  let pre = bars.slice(0, ei);
  let setup = gradeSetup(pre, { rules, regime: 'green' });
  // 돌파 당일 장중에 산 거래(SMTC·OKTA) — 전날 밤엔 '돌파 전'이라 4번을 못 본다 → 매수일 봉까지 넣어 그 돌파를 판정한다
  let onBreakDay = false;
  if (setup.state === 'pre' && setup.pivot && bars[ei].h > setup.pivot) {
    const s2 = gradeSetup(bars.slice(0, ei + 1), { rules, regime: 'green' });
    if (s2.state === 'post' && s2.breakDate === iso(bars[ei])) { pre = bars.slice(0, ei + 1); setup = s2; onBreakDay = true; }
  }
  const qi = idxOn(qqq, f.entryDate);
  const regime = qi > 60 ? qullamaggieRegime(qqq.slice(0, qi)) : null;
  const ranks = snap ? UC.rsRanks(snap).get(T) || null : null;
  const ev = UC.evaluate({ bars: pre, setup, ranks, regime });
  f.marketAtEntry = regime ? { verdict: regime.verdict, ko: regime.ko, qqqClose: regime.price ?? null, ma10: regime.ma10 ?? null, ma20: regime.ma20 ?? null } : null;
  f.rsSnapshot = snap ? snap.date || null : null;
  f.checklist = ev.rows.map(({ no, item, icon, detail }) => ({ no, item, 판정: icon, detail }));
  f.setup = { state: setup.state || null, grade: setup.grade || null, boughtOnBreakoutDay: onBreakDay, ...ev.num, reasons: setup.reasons || null };
  const adr = ev.num.adr;
  f.setup.sessionsSinceBreak = ev.num.breakDate ? pre.length - 1 - pre.findIndex((b) => iso(b) === ev.num.breakDate) : null;
  if (ev.num.pivot && adr) {
    f.setup.entryAbovePivotPct = pct(entry, ev.num.pivot);
    f.setup.entryAbovePivotAdr = round(((entry / ev.num.pivot - 1) * 100) / adr, 2);
    f.setup.entryWithinCap = ev.num.cap != null ? entry <= ev.num.cap : null;
  }
  // 첫날 시가(다음 날 진입판은 시가 매수) — 상한 대비
  f.entryDayOpen = round(bars[ei].o, 2);

  if (long && adr) {
    // 6 손절 규칙: 매수가 × (1 − ADR%) 스톱
    const stop = round(entry * (1 - adr / 100), 2);
    let si = -1;
    for (let k = onBreakDay ? ei + 1 : ei; k <= Math.min(xi, bars.length - 1); k++) if (bars[k].l <= stop) { si = k; break; }   // 돌파 당일 매수는 그날 저가가 매수 전인지 후인지 모른다 → 다음 날부터
    f.stopRule = { stop, stopPct: round(-adr, 2), hitDate: si >= 0 ? iso(bars[si]) : null,
      fillIfOrdered: si >= 0 ? round(Math.min(bars[si].o, stop), 2) : null,
      retIfOrdered: si >= 0 ? pct(Math.min(bars[si].o, stop), entry) : null,
      gapThrough: si >= 0 ? bars[si].o < stop : null,
      sessionsLate: si >= 0 ? xi - si : null };
    // 돌파일 저가(LOD) 이탈
    if (ev.num.breakLow) {
      let li = -1;
      for (let k = ei; k <= xi; k++) if (bars[k].l < ev.num.breakLow) { li = k; break; }
      f.breakLowRule = { breakLow: ev.num.breakLow, brokenDate: li >= 0 ? iso(bars[li]) : null };
    }
    // 7 보유 중: 10일선·20일선 종가 이탈 (매수 다음 날부터)
    for (const ma of [10, 20]) {
      let ti = -1;
      for (let k = ei + 1; k < bars.length && k <= xi + 30; k++) { const m = UC.smaAt(bars, k, ma); if (m != null && bars[k].c < m) { ti = k; break; } }
      f[`ma${ma}Exit`] = ti >= 0 ? { date: iso(bars[ti]), close: round(bars[ti].c, 2), retAtClose: pct(bars[ti].c, entry), vsActualExit: ti < xi ? '실제 매도보다 먼저' : ti === xi ? '실제 매도일과 같음' : '실제 매도보다 나중' } : null;
    }
  }
  // 보유 중 최고·최저, 판 뒤 10세션
  const hold = bars.slice(ei, xi + 1);
  const hi = hold.reduce((a, b) => (b.h > a.h ? b : a)), lo = hold.reduce((a, b) => (b.l < a.l ? b : a));
  f.duringHold = { maxHigh: round(hi.h, 2), maxHighDate: iso(hi), maxHighPct: pct(hi.h, entry), minLow: round(lo.l, 2), minLowDate: iso(lo), minLowPct: pct(lo.l, entry) };
  const after = bars.slice(xi + 1, xi + 11);
  if (after.length) {
    const ah = after.reduce((a, b) => (b.h > a.h ? b : a)), al = after.reduce((a, b) => (b.l < a.l ? b : a));
    f.afterExit = { sessions: after.length, maxHigh: round(ah.h, 2), maxHighDate: iso(ah), maxHighPctVsExit: pct(ah.h, exit), minLow: round(al.l, 2), minLowDate: iso(al), minLowPctVsExit: pct(al.l, exit) };
  }
  return { ok: true, facts: f, idx: { ei, xi } };
}

// 그림: ① 종목 일봉(매수 45봉 전 ~ 매도 10봉 뒤, 피벗·매수·손절·매도 선) ② QQQ(10·20일선)
function charts({ T, bars, qqq, f, idx, dir }) {
  const end = Math.min(bars.length, idx.xi + 11), start = Math.max(0, idx.ei - 45);
  const hl = [];
  if (f.setup.pivot) hl.push({ price: f.setup.pivot, label: 'PIVOT', color: [245, 165, 36] });
  hl.push({ price: f.entryPrice, label: `BUY ${f.entryDate.slice(5)}`, color: [88, 166, 255] });
  if (f.stopRule) hl.push({ price: f.stopRule.stop, label: 'STOP -1ADR', color: [248, 81, 73] });
  hl.push({ price: f.exitPrice, label: `SELL ${f.exitDate.slice(5)}`, color: [230, 230, 230] });
  const a = saveChart(bars.slice(0, end), { maPeriods: [10, 20, 50], displayBars: end - start, title: `${T} DAILY`, subtitle: `BUY ${f.entryDate} ${f.entryPrice}  SELL ${f.exitDate} ${f.exitPrice}  (${f.returnPct}%)`, hlines: hl, file: path.join(dir, `${T}-trade.png`), png: true });
  const qe = Math.min(qqq.length, idxOn(qqq, f.exitDate) + 6), qs = Math.max(0, idxOn(qqq, f.entryDate) - 45);
  const b = saveChart(qqq.slice(0, qe), { maPeriods: [10, 20], displayBars: qe - qs, title: 'QQQ DAILY', subtitle: `MA 10 / 20   BUY ${f.entryDate}  SELL ${f.exitDate}`, hlines: [], file: path.join(dir, `${T}-qqq.png`), png: true });
  return [a.ok && a.file, b.ok && b.file].filter(Boolean);
}

const TASK = (f) => `너는 블로그 주인의 매매 복기 글을 대신 쓴다. 이 거래: ${f.ticker} ${f.side} ${f.entryDate} → ${f.exitDate}, ${f.returnPct}% (${f.result}).
목표: 왜 ${f.result === '승' ? '성공' : '실패'}했는지를 "결과"가 아니라 "블로그 주인이 스스로 정한 규칙(매수 전 체크리스트 21번 글 · Break Out 전략 글)을 지켰는지"로 복기한다.
${f.result === '승' ? '이겼어도 규칙을 어긴 게 있으면 "운"이라고 솔직하게 쓴다.' : '졌어도 규칙대로였으면 "규칙대로 한 손실 — 잘한 것"이라고 쓴다.'}
구성 (예시 글 22번과 같은 흐름):
- 첫 줄들: 언제 얼마에 사서 언제 얼마에 팔았는지, 결과 %, 한 줄 요지
- "## 1. 시장상황" — facts.marketAtEntry · 체크리스트 1번. 그림 {{IMG2}}
- "## 2. 매수 전 체크리스트 대조" — facts.checklist 줄마다 ✅/❌/🟡/확인 불가 와 숫자. 5번(실적·N)은 당시 자료가 없으면 "확인 못 함"
- "## 3. 매수·손절·매도 실행" — 그림 {{IMG1}}. 다음 날 시가 상한(피벗 + 1 ADR) 지켰는지, 손절 규칙(매수가 − 1 ADR 스톱)이 언제 걸렸고 실제 매도가 몇 세션 늦었는지/빨랐는지, 돌파일 저가 이탈, 10일선·20일선 이탈과 실제 매도 비교, 보유 중 최고·최저, 판 뒤 흐름
- 사용자가 매수 때 쓴 글(아래 사용자 글 중 이 종목 글)이 있으면 그때의 판단을 "> " 로 인용하고 맞았는지 대조
- "## 4. 정리 — 담부터 이것만은 지키자!" (1)(2)… 마지막 줄은 다음 매매에서 바꿀 것 한 줄
제목: 사용자의 이 종목 매수 글 제목 앞머리(예: "(BO, 단기용)")를 그대로 쓰고 "${f.ticker} 복기(${f.result}) — 한 줄 요지". 매수 글이 없으면 "(${f.tag === 'breakout' ? 'BO, 단기용' : f.tag || '매매'}) ${f.ticker} 복기(${f.result}) — 한 줄 요지".`;

async function review(trade, { dry = false } = {}) {
  const T = String(trade.ticker).toUpperCase();
  const [br, bq] = [await fetchBarsCached(T, { range: '2y' }), await fetchBarsCached('QQQ', { range: '2y' })];
  if (!br.ok || !bq.ok) return { ok: false, error: `봉 없음 (${br.error || bq.error})` };
  // 매수일 이전 가장 최근 RS 스냅샷
  const snapDate = fs.readdirSync(paths.snapshotCache).map((x) => (x.match(/^result_(\d{4}-\d\d-\d\d)\.json$/) || [])[1]).filter((d) => d && d <= trade.entryDate).sort().pop();
  const snap = snapDate ? loadSnapshot(snapDate) : null;
  const tf = tradeFacts({ trade, bars: br.bars, qqq: bq.bars, snap, rules: loadRules() });
  if (!tf.ok) return tf;
  const dir = path.join(OUT_DIR, `${today()}-${T}-review`); ensureDir(dir);
  const images = charts({ T, bars: br.bars, qqq: bq.bars, f: tf.facts, idx: tf.idx, dir });

  // 사용자 글: 이 종목 글(검색) + 체크리스트(21) + Break Out 전략(10) + 매매 금지 타임(17) + 예시 복기(22)
  const nos = [...new Set([...(await TS.searchPosts(T).catch(() => [])).slice(0, 3), 21, 10, 17, 22])];
  const refs = [];
  for (const no of nos) { try { refs.push(await TS.readPost(no)); } catch (e) { /* 지워진 글 */ } await new Promise((r) => setTimeout(r, 1500)); }
  const W = require('./lib/blog-writer').writePost({ task: TASK(tf.facts), facts: tf.facts, refs, images: ['종목 일봉 (매수·손절·매도 선)', 'QQQ 일봉 (10·20일선)'].slice(0, images.length) });
  if (!W.ok) return W;
  fs.writeFileSync(path.join(dir, 'post.txt'), [W.title, ...W.lines].join('\n'), 'utf8');
  writeJson(path.join(dir, 'facts.json'), tf.facts);
  say('T12', `${T} 복기 글: ${W.title} · ${W.lines.length}줄 · 숫자 대조 삭제 ${W.cut.length} → ${dir}`);
  if (dry) return { ok: true, dry: true, dir, title: W.title };
  const f = tf.facts;
  const r = await TS.post({ team: 't12', title: W.title, lines: W.lines, images, category: TS.CATEGORY.tradeStock,
    text: `📝 12팀 도담 — ${T} 매매 복기 (${f.result} ${f.returnPct}%)\n${W.telegram}\n티스토리에 올렸습니다: {{URL}}`,
    entry: { ticker: T, entryDate: trade.entryDate, exitDate: trade.exitDate, result: f.result, returnPct: f.returnPct, title: W.title, at: today() },
    rec: { file: DONE_FILE, root: 'done', key: keyOf(trade) } });
  return { ...r, dir, title: W.title, error: r.error && `티스토리 발행 실패: ${r.error}` };
}

async function main() {
  loadEnv();
  const a = process.argv.slice(2), only = (a.find((x) => x.startsWith('--ticker=')) || '').slice(9).toUpperCase(), dry = a.includes('--dry');
  const { notify } = require('./lib/notify');
  let trades;
  try { const r = await fetch(`${TJ}?t=${Date.now()}`, { signal: AbortSignal.timeout(20000) }); trades = r.ok ? await r.json() : null; } catch (e) { trades = null; }
  if (!Array.isArray(trades)) { say('WARN', 'trading-journal trades.json 을 읽지 못함 — 다음에 다시'); return; }
  const closed = trades.filter((t) => t && t.ticker && t.exitDate && t.exitPrice != null && t.entryDate && t.entryPrice != null);
  const done = readJson(DONE_FILE, { v: 1, done: {} });
  if (a.includes('--seed')) { for (const t of closed) done.done[keyOf(t)] = done.done[keyOf(t)] || { ticker: t.ticker, seeded: today() }; writeJson(DONE_FILE, done); say('T12', `기록만: ${closed.map((t) => t.ticker).join(', ')}`); return; }
  const todo = only ? closed.filter((t) => String(t.ticker).toUpperCase() === only) : closed.filter((t) => !(done.done[keyOf(t)] && (done.done[keyOf(t)].url || done.done[keyOf(t)].seeded || done.done[keyOf(t)].pending || done.done[keyOf(t)].tries >= MAX_TRIES)));
  if (!todo.length) { say('T12', '새로 청산된 거래 없음'); return; }
  for (const t of todo) {
    const r = await review(t, { dry }).catch((e) => ({ ok: false, error: e.message }));
    if (dry || only) { say('T12', JSON.stringify({ ok: r.ok, dir: r.dir, title: r.title, error: r.error })); continue; }
    const k = keyOf(t), rec = done.done[k] || { ticker: t.ticker, tries: 0 };
    if (r.ok) done.done[k] = { ...rec, url: r.url, at: new Date().toISOString() };   // 대시보드·텔레그램은 TS.post 가 했다
    else if (r.queued) done.done[k] = { ...rec, pending: true };                       // 로그인 대기 — 텔레그램 "로그인 했어" 때 이 글 그대로 올린다
    else {
      done.done[k] = { ...rec, tries: (rec.tries || 0) + 1, lastError: r.error };
      say('WARN', `${t.ticker} 복기 실패: ${r.error}`);
      await notify(`⚠️ 12팀 도담 — ${t.ticker} 복기 글을 올리지 못했습니다 (${done.done[k].tries}/${MAX_TRIES}번째, 다음 아침 다시)\n${String(r.error).slice(0, 200)}${r.dir ? `\n글 초안: ${r.dir}` : ''}`);
    }
    writeJson(DONE_FILE, done);
  }
}

if (require.main === module) main().catch((e) => { say('ERROR', e.stack || e.message); process.exit(1); });
module.exports = { tradeFacts };
