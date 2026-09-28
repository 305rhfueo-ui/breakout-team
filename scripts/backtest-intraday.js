'use strict';
// 6팀 규칙의 5분봉 백테스트 — 밤 루프가 쓰는 것과 같은 트리거(orh.evaluate)·같은 장부(paper)로 지난 세션을 돌린다.
//
//   node scripts/backtest-intraday.js            기준 규칙 + 변형 비교 → docs/BACKTEST-INTRADAY-{날짜}.md
//   node scripts/backtest-intraday.js --no-grid
//
// 일봉 백테스트와 다른 점:
//   · 후보는 그날 아침 기준으로 실제 2팀을 통과한 종목(state/picks)이다 → 생존 편향이 없다.
//   · 하루 안의 순서를 안다 → "진입 뒤에 손절에 닿았는가"를 정확히 센다.
//   · 거래량 페이스를 실제로 잰다 (지난 세션들의 같은 시각 누적 평균과 비교).
// 한계:
//   · 야후 5분봉은 60일까지만 준다 → 기간이 두 달이 안 된다. 표본이 작다.
//   · 3팀 추적 종목·4팀 촉매 종목은 과거 목록이 없어 후보에 못 넣었다 (실전 6팀은 넣는다).
//   · 실적 직전 진입 금지는 과거 달력이 없어 반영하지 못했다.

const fs = require('fs');
const path = require('path');
const { paths, loadEnv, today, round, say, readJson, writeText } = require('./lib/util');
const { fetchMany, barDateET } = require('./lib/bars');
const { gradeSetup } = require('./lib/setup-grade');
const { sma } = require('./lib/ta');
const { qullamaggieRegime } = require('./lib/regime');
const { loadRules } = require('./lib/rules');
const intraday = require('./lib/intraday');
const orh = require('./lib/orh');
const paper = require('./lib/paper');

const ysym = (t) => String(t).toUpperCase().replace(/\./g, '-');

function loadPicks() {
  const out = [];
  for (const f of fs.existsSync(paths.picksDir) ? fs.readdirSync(paths.picksDir).sort() : []) {
    const j = readJson(path.join(paths.picksDir, f), null);
    if (j && Array.isArray(j.tickers)) out.push({ date: j.date || f.slice(0, 10), tickers: j.tickers.map(ysym) });
  }
  return out;
}

async function loadData() {
  const picks = loadPicks();
  if (!picks.length) throw new Error('state/picks 가 비어 있습니다');
  const uni = [...new Set(picks.flatMap((p) => p.tickers))];
  const { results } = await fetchMany(['QQQ', ...uni], { range: '2y', concurrency: 5, budgetMs: 300000, label: '일봉' });
  const daily = new Map();
  for (const [t, r] of results) if (r.ok) daily.set(t, r.bars.map((b) => ({ ...b, d: barDateET(b.t) })));
  const m5 = new Map();
  let done = 0, failed = 0;
  const asOf = today();
  const queue = uni.filter((t) => daily.has(t));
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (queue.length) {
      const t = queue.shift();
      const r = await intraday.history5m(t, { source: 'yahoo', asOf });
      if (r.ok) m5.set(t, orh.byDate(r.bars)); else failed++;
      if (++done % 25 === 0) say('SYSTEM', `5분봉 ${done}/${uni.length}`);
    }
  }));
  say('SYSTEM', `5분봉: ${m5.size}종목 · 실패 ${failed}`);
  return { picks, daily, m5 };
}

function run({ picks, daily, m5 }, rules, { grades = ['A', 'B'] } = {}) {
  const q = daily.get('QQQ');
  const allDates = [...new Set([...m5.values()].flatMap((m) => [...m.keys()]))].sort();
  // 프로필에 지난 세션이 최소 5일 필요하고, 후보는 picks 가 있는 날부터
  const sessions = allDates.slice(6).filter((d) => d > picks[0].date);
  const picksBefore = (d) => { let cur = null; for (const p of picks) { if (p.date < d || p.date === d) cur = p; else break; } return cur; };
  const flat5 = new Map([...m5].map(([t, m]) => [t, [...m.values()].flat()]));

  const open = [];
  const trades = [];
  const equity = [];
  const pendingNext = [];     // nextOpen 장부: 다음 세션 시가에 산다
  let watchN = 0, firedN = 0, realized = 0;
  const trailOf = (book) => (book === 'trail20' ? 20 : rules.exit.trailMa);
  const closeTrade = (t) => { if (!t) return; trades.push(t); if (t.book === 'main') realized += t.pct; const i = open.findIndex((p) => p.id === t.id); if (i >= 0) open.splice(i, 1); };

  for (const D of sessions) {
    const regime = qullamaggieRegime(q.filter((b) => b.d < D)).verdict;

    // 1) nextOpen 그림자 — 어제 신호가 난 종목을 오늘 첫 봉 시가에 산다
    for (const n of pendingNext.splice(0)) {
      const bars = (m5.get(n.ticker) || new Map()).get(D) || [];
      if (!bars.length) continue;
      const entry = bars[0].o * (1 + rules.fill.buySlipPct / 100);
      const ext = n.ma10 != null ? (bars[0].o - n.ma10) / n.adrUsd : null;
      if (ext != null && ext >= rules.risk.maxExtensionAdr) continue;
      const stop = Math.min(Math.max(n.dayLow, entry - rules.risk.stopAdr * n.adrUsd), entry - rules.risk.minStopAdr * n.adrUsd);
      const p = paper.open({ ticker: n.ticker, date: D, at: '0930', entry, stop, book: 'nextOpen', rules, regime, grade: n.grade, ctx: n.ctx });
      if (p) { p._fromIdx = 0; open.push(p); }
    }

    // 2) 보유 관리 — 오늘 5분봉으로 손절 확인 (진입일에는 진입 봉 이후만)
    const manage = (p) => {
      const bars = (m5.get(p.ticker) || new Map()).get(D) || [];
      const from = p.entryDate === D ? (p._fromIdx ?? 0) : 0;
      for (let i = from; i < bars.length; i++) { const t = paper.onBar(p, bars[i], { date: D, rules }); if (t) { closeTrade(t); return; } }
    };
    for (const p of [...open]) if (p.entryDate !== D || p.book === 'nextOpen') manage(p);

    // 3) 신규 진입
    const pk = picksBefore(sessions[sessions.indexOf(D) - 1] || D);
    const held = new Set(open.filter((p) => p.book === 'main').map((p) => p.ticker));
    const fired = [];
    if (regime !== 'red' && pk) {
      for (const t of pk.tickers) {
        if (held.has(t) || !daily.has(t) || !flat5.has(t)) continue;
        const dbars = daily.get(t).filter((b) => b.d < D);
        if (dbars.length < 60) continue;
        const g = gradeSetup(dbars.slice(-260), { rules, regime });
        if (!g.ok || !g.near || !g.liquid || g.chase || !grades.includes(g.grade)) continue;
        if (rules.risk.minAdrPct && g.adrPct < rules.risk.minAdrPct) continue;
        watchN++;
        const plan = { ticker: t, pivot: g.pivot, adrPct: g.adrPct, price: g.price, ma10: g.ma10 };
        const r = intraday.trigger({ bars5: flat5.get(t), sessionDate: D, plan, rules });
        if (r.fired) fired.push({ t, g, r });
      }
    }
    fired.sort((a, b) => (a.r.at < b.r.at ? -1 : 1));
    let newToday = 0;
    for (const { t, g, r } of fired) {
      if (newToday >= rules.entry.maxNewPerDay) break;
      if (open.filter((p) => p.book === 'main').length >= rules.entry.maxPositions) break;
      const ctx = { orh: r.orh, pace: r.pace, ext: r.ext, levelIs: r.levelIs, stopIs: r.stopIs, at: r.at,
        baseWeeks: g.metrics.baseWeeks, depthPct: g.metrics.depthPct, priorMovePct: g.metrics.priorMovePct, fails: g.fails };
      for (const book of ['main', 'trail20']) {
        const p = paper.open({ ticker: t, date: D, at: r.entryAt, entry: r.entry, stop: r.stop, book, rules, regime, grade: g.grade, ctx });
        if (!p) continue;
        p._fromIdx = r.barIdx + 1;
        open.push(p);
        manage(p);
      }
      const dayBars = (m5.get(t) || new Map()).get(D) || [];
      pendingNext.push({ ticker: t, grade: g.grade, ma10: g.ma10, adrUsd: g.price * g.adrPct / 100, dayLow: Math.min(...dayBars.map((b) => b.l)), ctx });
      newToday++; firedN++;
    }

    // 4) 장 마감 — 부분 익절·이평 이탈
    for (const p of [...open]) {
      const d = daily.get(p.ticker);
      const i = d ? d.findIndex((b) => b.d === D) : -1;
      if (i < 0) continue;
      const trail = trailOf(p.book);
      for (const t of paper.onClose(p, { date: D, close: d[i].c, ma: sma(d.slice(0, i + 1), trail), rules, trailMa: trail })) closeTrade(t);
    }
    // 계좌 대비 누적 % = 끝난 거래의 손익 + 들고 있는 것의 (부분 익절분 + 평가 손익)
    equity.push({ date: D, pct: round(realized + open.filter((p) => p.book === 'main').reduce((s, p) => s + paper.curPct(p), 0)) });
  }

  const by = (book) => trades.filter((t) => t.book === book);
  return { from: sessions[0], to: sessions[sessions.length - 1], sessions: sessions.length,
    watchPerDay: round(watchN / sessions.length, 1), fired: firedN, trades, equity,
    main: paper.stats(by('main'), { equity }), trail20: paper.stats(by('trail20')), nextOpen: paper.stats(by('nextOpen')),
    stillOpen: open.filter((p) => p.book === 'main').map(paper.view) };
}

const withRules = (base, patch) => {
  const r = JSON.parse(JSON.stringify(base));
  for (const [k, v] of Object.entries(patch)) { const [a, b] = k.split('.'); r[a][b] = v; }
  return r;
};
const HEAD = ['| 구분 | 후보/일 | 신호 | 끝난 거래 | 승률 | 평균 R | 손익비(PF) | 평균 이익R / 손실R | 보유일 | 당일 손절 | 누적(계좌 %) | MDD |',
  '|---|---:|---:|---:|---:|---:|---:|---|---:|---:|---:|---:|'];
const row = (label, r, s = r.main) => `| ${label} | ${r.watchPerDay} | ${r.fired} | ${s.n} | ${s.n ? s.winPct + '%' : '—'} | ${s.n ? s.avgR : '—'} | ${s.n ? s.profitFactor ?? '—' : '—'} | ${s.n ? `${s.avgWinR} / ${s.avgLossR}` : '—'} | ${s.n ? s.avgDays : '—'} | ${s.n ? s.sameDayStopPct + '%' : '—'} | ${s.n ? s.equityPct + '%' : '—'} | ${s.mdd != null ? s.mdd + '%' : '—'} |`;

async function main() {
  loadEnv();
  const argv = process.argv.slice(2);
  const rules = loadRules();
  const data = await loadData();
  const base = run(data, rules);
  say('SYSTEM', `5분봉 백테스트 ${base.from}~${base.to} (${base.sessions}세션): 후보 ${base.watchPerDay}/일 · 신호 ${base.fired} · 거래 ${base.main.n} · 승률 ${base.main.winPct ?? '—'}% · 평균 ${base.main.avgR ?? '—'}R`);

  const L = [`# 6팀 규칙 5분봉 백테스트 — ${today()} (규칙 v${rules.version})`, '',
    `> 기간 ${base.from} ~ ${base.to} (${base.sessions}세션). 후보는 그날 아침 기준 2팀 통과 종목이다 — 생존 편향 없음.`,
    `> 밤 루프와 같은 트리거·같은 장부를 쓴다. 체결은 매수 +${rules.fill.buySlipPct}% · 매도 −${rules.fill.sellSlipPct}% 를 가정했다.`,
    '> **표본이 작다.** 야후 5분봉이 60일까지만 있어 두 달이 안 된다. 방향을 보는 용도이지 크기를 믿을 수는 없다.',
    '> 3팀 추적·4팀 촉매 종목과 실적 직전 진입 금지는 과거 자료가 없어 반영하지 못했다.', '',
    '## 기준 규칙', '', ...HEAD,
    row('실제 규칙 (돌파 순간 · 10일선 트레일)', base),
    row('그림자: 20일선 트레일', base, base.trail20),
    row('그림자: 다음 날 시가 진입', base, base.nextOpen), ''];
  for (const g of ['A', 'B']) L.push(row(`${g}등급만`, run(data, rules, { grades: [g] })));
  L.push(row('A·B·C', run(data, rules, { grades: ['A', 'B', 'C'] })), '');

  const mainT = base.trades.filter((t) => t.book === 'main');
  if (mainT.length) {
    const why = paper.groupStats(mainT, (t) => t.why);
    L.push('청산 사유: ' + Object.entries(why).map(([k, s]) => `${k} ${s.n}건(평균 ${s.avgR}R)`).join(' · '));
    const lv = paper.groupStats(mainT, (t) => (t.ctx.levelIs === 'pivot' ? '피벗을 넘음' : '장중 고가를 넘음'));
    L.push('넘은 기준선: ' + Object.entries(lv).map(([k, s]) => `${k} ${s.n}건(승률 ${s.winPct}% · 평균 ${s.avgR}R)`).join(' · '));
    const st = paper.groupStats(mainT, (t) => ({ lod: '당일 저가', minStopAdr: '최소 거리로 벌림', stopAdr: '최대 거리로 당김' }[t.ctx.stopIs]));
    L.push('손절 기준: ' + Object.entries(st).map(([k, s]) => `${k} ${s.n}건(승률 ${s.winPct}% · 평균 ${s.avgR}R)`).join(' · '));
    L.push('', '### 거래 목록 (실제 규칙)', '', '| 종목 | 등급 | 진입 | 시각 | 진입가 | 손절 | 페이스 | 이격 | 청산 | 보유일 | R | 사유 |', '|---|:-:|---|---|---:|---:|---:|---:|---|---:|---:|---|');
    for (const t of mainT) L.push(`| ${t.ticker} | ${t.grade} | ${t.entryDate} | ${t.entryAt} | ${t.entry} | ${t.stop0} | ${t.ctx.pace}× | ${t.ctx.ext} | ${t.exitDate} | ${t.days} | ${t.R} | ${t.why} |`);
    L.push('');
  }
  if (base.stillOpen.length) L.push(`아직 들고 있는 것: ${base.stillOpen.map((p) => `${p.ticker}(${p.R}R)`).join(' · ')}`, '');

  if (!argv.includes('--no-grid')) {
    L.push('## 변형 비교 (한 번에 하나만 바꿈 · A·B)', '', ...HEAD, row(`**기준 v${rules.version}**`, base));
    for (const [label, patch] of [
      ['거래량 페이스 ≥1.5×', { 'entry.paceMin': 1.5 }], ['거래량 페이스 ≥3×', { 'entry.paceMin': 3 }], ['거래량 조건 없음', { 'entry.paceMin': 0 }],
      ['진입 창 60분', { 'entry.entryWindowMin': 60 }], ['진입 창 240분', { 'entry.entryWindowMin': 240 }],
      ['손절 최대 1 ADR', { 'risk.stopAdr': 1 }], ['손절 최소 1 ADR', { 'risk.minStopAdr': 1 }],
      ['피벗 구간 15봉', { 'setup.lookbackBars': 15 }], ['피벗 구간 20봉', { 'setup.lookbackBars': 20 }], ['피벗 구간 30봉', { 'setup.lookbackBars': 30 }], ['피벗 구간 40봉', { 'setup.lookbackBars': 40 }],
      ['베이스 최소 10봉', { 'setup.minBaseBars': 10 }], ['피벗 −3% 이내', { 'setup.preMaxBelowPivotPct': 3 }], ['피벗 −8% 이내', { 'setup.preMaxBelowPivotPct': 8 }],
      ['피벗 1 ADR 이내', { 'setup.preMaxBelowPivotAdr': 1 }], ['피벗 1.5 ADR 이내', { 'setup.preMaxBelowPivotAdr': 1.5 }], ['피벗 2 ADR 이내', { 'setup.preMaxBelowPivotAdr': 2 }], ['피벗 3 ADR 이내', { 'setup.preMaxBelowPivotAdr': 3 }],
      ['조합: 2 ADR 이내 + 피벗 구간 20봉', { 'setup.preMaxBelowPivotAdr': 2, 'setup.lookbackBars': 20 }],
      ['조합: 2 ADR 이내 + 피벗 구간 15봉', { 'setup.preMaxBelowPivotAdr': 2, 'setup.lookbackBars': 15 }],
      ['조합: 2 ADR · 20봉 · 페이스 1.5×', { 'setup.preMaxBelowPivotAdr': 2, 'setup.lookbackBars': 20, 'entry.paceMin': 1.5 }],
      ['추격 상한 2 ADR', { 'risk.maxExtensionAdr': 2 }],
    ]) L.push(row(label, run(data, withRules(rules, patch))));
    L.push('');
  }
  const out = path.join(paths.root, 'docs', `BACKTEST-INTRADAY-${today()}.md`);
  writeText(out, L.join('\n') + '\n');
  say('SYSTEM', `보고서: ${out}`);
}

module.exports = { run };

if (require.main === module) main().catch((e) => { console.error('5분봉 백테스트 오류:', e); process.exit(1); });
