'use strict';
// 6팀 규칙의 일봉 백테스트 — 모의투자를 돌리기 전에 "이 문턱이면 후보가 하루 몇 개 나오고 과거에 어땠나"를 본다.
//
//   node scripts/backtest-daily.js                 기준 규칙 + 민감도 표 → docs/BACKTEST-{날짜}.md
//   node scripts/backtest-daily.js --no-grid       기준 규칙만
//   node scripts/backtest-daily.js --cache-only    네트워크 없이 캐시에 있는 봉만
//   node scripts/backtest-daily.js --range=5y      더 긴 기간 (표본을 늘린다. 생존 편향은 더 커진다)
//
// 두 가지 진입을 같이 잰다 (일봉으로 장중을 흉내 낼 수 있는 한계 안에서):
//   intraday — 피벗을 장중에 넘은 날 max(시가, 피벗)에 산다. 그날 거래량 ≥ N×20일 평균이어야 한다.
//              ⚠️ 그날 거래량은 장이 끝나야 아는 값이다 → 밤 트리거(장중 거래량 페이스)의 근사치일 뿐이다.
//              ⚠️ 진입 뒤 저가가 손절 아래면 그날 손절된 것으로 친다(보수적).
//   next     — 피벗을 종가로 넘고 거래량이 확인된 다음 날 시가에 산다. 미래 정보가 없다.
//              사용자가 아침에 보고 따라 사는 경우의 성적이다.
//
// ⚠️ 생존 편향: 봉 캐시에 있는 종목은 "최근에" 2·3·4팀에 걸린 종목이다. 지금 강한 종목만 모여 있으니
//    과거 성적이 실제보다 좋게 나온다. picks 구간(--picks, 2026-08-05~)은 그날 실제 2팀 통과 종목만 쓴다.
// ⚠️ 실적 필터는 과거 달력이 없어 백테스트에 없다. 시가총액·RS 순위 필터도 없다(ADR≥4·150일선 위로 대신).

const fs = require('fs');
const path = require('path');
const { paths, loadEnv, today, round, say, readJson, writeText } = require('./lib/util');
const { fetchMany, barDateET } = require('./lib/bars');
const { gradeSetup, adrPct } = require('./lib/setup-grade');
const { sma } = require('./lib/ta');
const { qullamaggieRegime } = require('./lib/regime');
const { loadRules } = require('./lib/rules');

const WARMUP = 200;   // gradeSetup 에 넘기는 봉 수 (126봉 수익률 + 60봉 베이스 + 여유)

function cacheUniverse() {
  let best = [];
  for (const d of fs.existsSync(paths.barsCache) ? fs.readdirSync(paths.barsCache) : []) {
    const fsx = fs.readdirSync(path.join(paths.barsCache, d)).filter((f) => f.endsWith('_2y_1d.json'));
    if (fsx.length > best.length) best = fsx.map((f) => ({ sym: f.replace('_2y_1d.json', ''), file: path.join(paths.barsCache, d, f) }));
  }
  return best;
}

async function loadData({ cacheOnly, range = '2y' }) {
  const uni = cacheUniverse();
  const data = new Map();
  if (cacheOnly) {
    for (const u of uni) { const j = readJson(u.file, null); if (j && j.bars && j.bars.length > WARMUP + 20) data.set(u.sym, j.bars); }
  } else {
    const { results } = await fetchMany(uni.map((u) => u.sym), { range, concurrency: 5, budgetMs: 600000, label: '백테스트 봉' });
    for (const [t, r] of results) if (r.ok && r.bars.length > WARMUP + 20) data.set(t, r.bars);
  }
  for (const [t, bars] of data) {
    const idx = new Map();
    bars.forEach((b, i) => { b.d = barDateET(b.t); idx.set(b.d, i); });
    data.set(t, { bars, idx });
  }
  return data;
}

// 날짜별 2팀 통과 종목 (생존 편향 없는 구간)
function loadPicks() {
  const out = [];
  for (const f of fs.existsSync(paths.picksDir) ? fs.readdirSync(paths.picksDir).sort() : []) {
    const j = readJson(path.join(paths.picksDir, f), null);
    if (j && Array.isArray(j.tickers)) out.push({ date: j.date || f.slice(0, 10), set: new Set(j.tickers.map((t) => String(t).toUpperCase().replace(/\./g, '-'))) });
  }
  return out;
}

function simulate(data, rules, { variant = 'intraday', grades = ['A', 'B'], picks = null, from = null } = {}) {
  const R = rules.risk, X = rules.exit, slipB = 1 + rules.fill.buySlipPct / 100, slipS = 1 - rules.fill.sellSlipPct / 100;
  const q = data.get('QQQ');
  if (!q) throw new Error('QQQ 봉이 없습니다');
  let dates = q.bars.slice(WARMUP).map((b) => b.d);
  if (picks) dates = dates.filter((d) => d >= picks[0].date);
  if (from) dates = dates.filter((d) => d >= from);

  const picksAt = (d) => { let cur = null; for (const p of picks) { if (p.date <= d) cur = p; else break; } return cur ? cur.set : null; };
  const regimeAt = new Map();
  for (const d of dates) regimeAt.set(d, qullamaggieRegime(q.bars.slice(0, q.idx.get(d) + 1)).verdict);

  let cash = 100, equity = 100, peak = 100, mdd = 0;
  const open = new Map();
  const trades = [];
  let watch = [], armed = [];
  const perDay = { watch: 0, entries: 0, days: 0 };

  const sell = (p, frac, px, date, why) => {
    const f = Math.min(frac, p.left);
    cash += p.value0 * f * (px / p.entry);
    p.realR += f * (px - p.entry) / p.risk;
    p.left -= f;
    if (p.left < 1e-9) {
      trades.push({ ticker: p.ticker, grade: p.grade, entryDate: p.entryDate, exitDate: date, days: p.days, R: round(p.realR), why,
        mfeR: round(p.mfe), maeR: round(p.mae), regime: p.regime });
      open.delete(p.ticker);
    }
  };
  const buy = (c, entry, stop, date) => {
    if (open.has(c.ticker) || open.size >= rules.entry.maxPositions) return false;
    const risk = entry - stop;
    if (!(risk > 0)) return false;
    const riskAcct = R.riskPct * (c.regime === 'yellow' ? R.yellowRiskMult : 1);
    const weight = Math.min(riskAcct / (risk / entry * 100), R.maxPositionPct / 100);
    const value0 = Math.min(equity * weight, cash);
    if (value0 <= 0.01) return false;
    cash -= value0;
    open.set(c.ticker, { ticker: c.ticker, grade: c.grade, entry, stop, risk, value0, left: 1, realR: 0, days: 0, partial: false,
      entryDate: date, mfe: 0, mae: 0, regime: c.regime });
    return true;
  };

  for (let i = 0; i < dates.length; i++) {
    const d = dates[i];
    perDay.days++;

    // 1) 보유 관리
    for (const p of [...open.values()]) {
      const t = data.get(p.ticker), bi = t.idx.get(d);
      if (bi == null || p.entryDate === d) continue;
      const b = t.bars[bi];
      p.days++;
      p.mfe = Math.max(p.mfe, (b.h - p.entry) / p.risk);
      p.mae = Math.min(p.mae, (b.l - p.entry) / p.risk);
      if (b.l <= p.stop) { sell(p, 1, Math.min(b.o, p.stop) * slipS, d, p.partial ? '본전 손절' : '손절'); continue; }
      if (!p.partial && p.days >= X.partialAfterDays && b.c >= p.entry + X.partialMinR * p.risk) {
        sell(p, X.partialFraction, b.c * slipS, d, '부분 익절');
        p.partial = true;
        p.stop = Math.max(p.stop, p.entry);
      }
      const ma = sma(t.bars.slice(0, bi + 1), X.trailMa);
      if (open.has(p.ticker) && ma != null && b.c < ma) sell(p, 1, b.c * slipS, d, `${X.trailMa}일선 이탈`);
    }

    // 2) 진입
    let newToday = 0;
    const tryBuy = (c, entry, stop) => {
      if (newToday >= rules.entry.maxNewPerDay || c.regime === 'red') return;
      if (c.adrUsd > 0 && c.ma10 != null && (entry - c.ma10) / c.adrUsd >= R.maxExtensionAdr) return;
      if (buy(c, entry, stop, d)) { newToday++; perDay.entries++; return true; }
    };
    if (variant === 'next') {
      for (const c of armed) {
        const t = data.get(c.ticker), bi = t.idx.get(d);
        if (bi == null) continue;
        const entry = t.bars[bi].o * slipB;
        tryBuy(c, entry, Math.min(c.breakLow, entry - R.minStopAdr * c.adrUsd));
      }
      armed = [];
    }
    for (const c of watch) {
      const t = data.get(c.ticker), bi = t.idx.get(d);
      if (bi == null) continue;
      const b = t.bars[bi];
      const volOk = c.avgVol20 > 0 && b.v >= rules.backtest.breakVolMin * c.avgVol20;
      if (variant === 'next') { if (b.c > c.pivot && volOk) armed.push({ ...c, breakLow: b.l }); continue; }
      if (!(b.h > c.pivot) || !volOk) continue;
      const entry = Math.max(b.o, c.pivot) * slipB;
      if (tryBuy(c, entry, c.stop) && b.l <= c.stop) sell(open.get(c.ticker), 1, c.stop * slipS, d, '당일 손절');
    }

    // 3) 내일 볼 후보 — 오늘 종가까지의 봉으로만 잰다
    watch = [];
    const regime = regimeAt.get(d);
    const allowed = picks ? picksAt(d) : null;
    for (const [ticker, t] of data) {
      if (ticker === 'QQQ' || open.has(ticker)) continue;
      if (allowed && !allowed.has(ticker)) continue;
      const bi = t.idx.get(d);
      if (bi == null || bi < WARMUP) continue;
      const b = t.bars[bi];
      // 싼 사전 필터: 최근 60봉 고점에서 너무 멀면 등급을 잴 필요가 없다
      let hi = 0;
      for (let k = bi - 59; k <= bi; k++) if (t.bars[k].h > hi) hi = t.bars[k].h;
      if (b.c < hi * (1 - rules.setup.preMaxBelowPivotPct / 100)) continue;
      const sub = t.bars.slice(bi - WARMUP + 1, bi + 1);
      if (!picks) {   // 2팀 필터의 근사 — ADR ≥ 4 · 150일선 위
        const a = adrPct(sub), m150 = sma(sub, 150);
        if (a == null || a < 4 || m150 == null || b.c < m150) continue;
      }
      const g = gradeSetup(sub, { rules, regime });
      if (!g.ok || !g.near || !g.liquid || g.chase || !grades.includes(g.grade)) continue;
      let v = 0;
      for (let k = bi - 19; k <= bi; k++) v += t.bars[k].v || 0;
      watch.push({ ticker, grade: g.grade, pivot: g.pivot, stop: g.stop, adrUsd: b.c * g.adrPct / 100, ma10: sma(sub, 10),
        avgVol20: v / 20, regime, fails: g.fails.length, dist: g.distToPivotPct });
    }
    watch.sort((a, b) => (a.fails - b.fails) || (b.dist - a.dist));
    perDay.watch += watch.length;

    // 평가액
    let mtm = cash;
    for (const p of open.values()) {
      const t = data.get(p.ticker), bi = t.idx.get(d);
      const c = bi != null ? t.bars[bi].c : p.entry;
      mtm += p.value0 * p.left * (c / p.entry);
    }
    equity = mtm;
    peak = Math.max(peak, equity);
    mdd = Math.max(mdd, (peak - equity) / peak * 100);
  }

  return { trades, stillOpen: open.size, equity: round(equity), mdd: round(mdd, 1), from: dates[0], to: dates[dates.length - 1],
    days: perDay.days, watchPerDay: round(perDay.watch / perDay.days, 1), entriesPerWeek: round(perDay.entries / perDay.days * 5, 1) };
}

function stats(trades) {
  const n = trades.length;
  if (!n) return { n: 0 };
  const wins = trades.filter((t) => t.R > 0), loss = trades.filter((t) => t.R <= 0);
  const sum = (a) => a.reduce((s, t) => s + t.R, 0);
  const gw = sum(wins), gl = Math.abs(sum(loss));
  return { n, winPct: round(wins.length / n * 100, 1), avgR: round(sum(trades) / n), totalR: round(sum(trades), 1),
    avgWinR: wins.length ? round(gw / wins.length) : null, avgLossR: loss.length ? round(-gl / loss.length) : null,
    profitFactor: gl > 0 ? round(gw / gl) : null, avgDays: round(trades.reduce((s, t) => s + t.days, 0) / n, 1),
    sameDayStopPct: round(trades.filter((t) => t.why === '당일 손절').length / n * 100, 1) };
}

const withRules = (base, patch) => {
  const r = JSON.parse(JSON.stringify(base));
  for (const [k, v] of Object.entries(patch)) { const [a, b] = k.split('.'); r[a][b] = v; }
  return r;
};

const row = (label, r) => {
  const s = stats(r.trades);
  return `| ${label} | ${r.watchPerDay} | ${r.entriesPerWeek} | ${s.n} | ${s.n ? s.winPct + '%' : '—'} | ${s.n ? s.avgR : '—'} | ${s.n ? s.profitFactor ?? '—' : '—'} | ${s.n ? s.avgWinR + ' / ' + s.avgLossR : '—'} | ${s.n ? s.avgDays : '—'} | ${s.n ? s.sameDayStopPct + '%' : '—'} | ${round(r.equity - 100, 1)}% | ${r.mdd}% |`;
};
const HEAD = ['| 구분 | 후보/일 | 진입/주 | 거래 | 승률 | 평균 R | 손익비(PF) | 평균 이익R / 손실R | 보유일 | 당일 손절 | 누적 | MDD |',
  '|---|---:|---:|---:|---:|---:|---:|---|---:|---:|---:|---:|'];

async function main() {
  loadEnv();
  const argv = process.argv.slice(2);
  const rules = loadRules();
  const range = (argv.find((a) => a.startsWith('--range=')) || '--range=2y').slice(8);
  const data = await loadData({ cacheOnly: argv.includes('--cache-only'), range });
  const picks = loadPicks();
  say('SYSTEM', `백테스트: ${data.size}종목 · 규칙 v${rules.version} · picks ${picks.length}일`);

  const L = [`# 6팀 규칙 백테스트 — ${today()} (규칙 v${rules.version})`, '',
    '> 일봉 시뮬레이션이다. 장중 진입(ORH·거래량 페이스)은 흉내만 낸다. 체결은 매수 +' + rules.fill.buySlipPct + '% · 매도 −' + rules.fill.sellSlipPct + '% 슬리피지를 가정했다.',
    '> **생존 편향**: 아래 "캐시 전체" 표는 최근에 시스템에 걸린(=지금 강한) 종목만으로 돌린 것이라 실제보다 좋게 나온다. "2팀 통과 종목만" 표가 편향이 없는 대신 기간이 짧다.',
    '> 실적 직전 진입 금지·RS 순위·시가총액 필터는 과거 자료가 없어 반영하지 못했다.', ''];

  const base = {};
  for (const variant of ['intraday', 'next']) {
    const all = simulate(data, rules, { variant });
    base[variant] = all;
    L.push(`## ${variant === 'intraday' ? '장중 돌파 진입 (근사)' : '돌파 다음 날 시가 진입'} — ${all.from} ~ ${all.to} (${all.days}거래일, ${data.size}종목)`, '', ...HEAD);
    L.push(row('A·B 전체', all));
    for (const g of ['A', 'B']) L.push(row(`${g}등급만`, simulate(data, rules, { variant, grades: [g] })));
    L.push(row('A·B·C', simulate(data, rules, { variant, grades: ['A', 'B', 'C'] })));
    if (picks.length) {
      const p = simulate(data, rules, { variant, picks });
      L.push(row(`2팀 통과 종목만 (${p.from}~, 편향 없음)`, p));
    }
    L.push('');
    const by = {};
    for (const t of all.trades) (by[t.why] = by[t.why] || []).push(t);
    L.push('청산 사유: ' + Object.entries(by).map(([k, v]) => `${k} ${v.length}건(평균 ${stats(v).avgR}R)`).join(' · '));
    const rg = {};
    for (const t of all.trades) (rg[t.regime] = rg[t.regime] || []).push(t);
    L.push('진입 시 국면: ' + Object.entries(rg).map(([k, v]) => `${k} ${v.length}건(승률 ${stats(v).winPct}% · 평균 ${stats(v).avgR}R)`).join(' · '));
    L.push('');
    const s = stats(all.trades);
    say('SYSTEM', `${variant}: 후보 ${all.watchPerDay}/일 · 거래 ${s.n} · 승률 ${s.winPct}% · 평균 ${s.avgR}R · PF ${s.profitFactor} · 누적 ${round(all.equity - 100, 1)}% · MDD ${all.mdd}%`);
  }

  if (!argv.includes('--no-grid')) {
    const grid = [
      ['베이스 최소 5봉', { 'setup.minBaseBars': 5 }], ['베이스 최소 15봉', { 'setup.minBaseBars': 15 }],
      ['선행 상승 ≥20%', { 'setup.priorMoveMinPct': 20 }], ['선행 상승 ≥50%', { 'setup.priorMoveMinPct': 50 }],
      ['깊이 ≤15%', { 'setup.maxDepthPct': 15 }], ['깊이 ≤35%', { 'setup.maxDepthPct': 35 }],
      ['피벗 −3% 이내', { 'setup.preMaxBelowPivotPct': 3 }], ['피벗 −8% 이내', { 'setup.preMaxBelowPivotPct': 8 }],
      ['거래량 ≥1.5×', { 'backtest.breakVolMin': 1.5 }], ['거래량 ≥3×', { 'backtest.breakVolMin': 3 }], ['거래량 조건 없음', { 'backtest.breakVolMin': 0 }],
      ['손절 0.5 ADR', { 'risk.stopAdr': 0.5 }], ['손절 1.5 ADR', { 'risk.stopAdr': 1.5 }], ['손절 2 ADR', { 'risk.stopAdr': 2 }],
      ['20일선 트레일', { 'exit.trailMa': 20 }], ['부분 익절 2R', { 'exit.partialMinR': 2 }],
      ['추격 상한 2 ADR', { 'risk.maxExtensionAdr': 2 }],
      ['조합: 베이스 5봉 + 거래량 1.5×', { 'setup.minBaseBars': 5, 'backtest.breakVolMin': 1.5 }],
      ['조합: 베이스 5봉 + 거래량 1.5× + 손절 1.5 ADR', { 'setup.minBaseBars': 5, 'backtest.breakVolMin': 1.5, 'risk.stopAdr': 1.5 }],
      ['조합: 위 + 20일선 트레일', { 'setup.minBaseBars': 5, 'backtest.breakVolMin': 1.5, 'risk.stopAdr': 1.5, 'exit.trailMa': 20 }],
    ];
    for (const variant of ['intraday', 'next']) {
      L.push(`## 민감도 — ${variant === 'intraday' ? '장중 돌파 진입' : '다음 날 시가 진입'} (한 번에 하나만 바꿈, A·B)`, '', ...HEAD);
      L.push(row(`**기준 v${rules.version}**`, base[variant]));
      for (const [label, patch] of grid) L.push(row(label, simulate(data, withRules(rules, patch), { variant })));
      L.push('');
    }
  }

  const out = path.join(paths.root, 'docs', `BACKTEST-${today()}.md`);
  writeText(out, L.join('\n') + '\n');
  say('SYSTEM', `보고서: ${out}`);
}

module.exports = { simulate, stats };

if (require.main === module) main().catch((e) => { console.error('백테스트 오류:', e); process.exit(1); });
