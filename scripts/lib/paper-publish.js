'use strict';
// 6팀 모의투자 일지(paper.html)가 읽는 데이터를 만든다 → dashboard/data/paper.js
//
// 원장(state/paper)을 그대로 옮기되 공개용으로 고른다.
// ⚠️ 저장소가 공개다. 금액·수량은 없다 — 비중(계좌 대비 %)과 R, 가격만 나간다.
//
// 아침(run-breakout)과 밤(paper-trader) 양쪽에서 부른다. 그래야 거래가 한 건도 없는 날에도
// 페이지가 "아직 거래 없음"을 제대로 보여 준다.

const path = require('path');
const { paths, readJson, writeWindowData, round } = require('./util');
const paper = require('./paper');

const MIN_SAMPLE = 30;
const BOOKS = { trail20: '20일선 트레일', nextOpen: '다음 날 시가 진입', gradeC: '등급 C', far: '피벗에서 1~1.5 ADR' };
const STOP_KO = { lod: '당일 저가', minStopAdr: '최소 거리(0.5 ADR)로 벌림', stopAdr: '최대 거리(1 ADR)로 당김' };

function loadLedger(dir = paths.paperDir) {
  return {
    positions: readJson(path.join(dir, 'positions.json'), { positions: [] }).positions,
    trades: readJson(path.join(dir, 'trades.json'), { trades: [] }).trades,
    equity: readJson(path.join(dir, 'equity.json'), { series: [] }).series,
    health: readJson(path.join(dir, 'health.json'), null),
  };
}

// 진입 근거를 한 줄로 — 원장에 적힌 숫자만 쓴다
function whyEntered(ctx) {
  if (!ctx) return '';
  const p = [];
  if (ctx.pivot != null) p.push(`피벗 ${ctx.pivot} ${ctx.levelIs === 'hod' ? '위에서 장중 고가 돌파' : '돌파'}`);
  if (ctx.pace != null) p.push(`거래량 페이스 ${ctx.pace}×`);
  if (ctx.ext != null) p.push(`10일선 이격 ${ctx.ext} ADR`);
  if (ctx.stopIs) p.push(`손절 기준 ${STOP_KO[ctx.stopIs] || ctx.stopIs}`);
  if (ctx.baseWeeks != null) p.push(`베이스 ${ctx.baseWeeks}주`);
  if (ctx.catalyst) p.push(`4팀 촉매 ${'①②③④⑤⑥'[ctx.catalyst - 1] || ctx.catalyst}`);
  if (ctx.flow) p.push(`5팀 업종 ${({ leading: '주도', inflow: '유입', narrow: '소수종목', pending: '대기', outflow: '유출' })[ctx.flow] || ctx.flow}`);
  return p.join(' · ');
}

const pubTrade = (t) => ({
  ticker: t.ticker, grade: t.grade, regime: t.regime, ruleVersion: t.ruleVersion,
  entryDate: t.entryDate, entryAt: t.entryAt, exitDate: t.exitDate, exitAt: t.exitAt, days: t.days,
  entry: t.entry, stop0: t.stop0, exit: t.exit, riskPerSharePct: t.riskPerSharePct, weightPct: t.weightPct,
  R: t.R, pct: t.pct, mfeR: t.mfeR, maeR: t.maeR, why: t.why, partial: !!t.partial, entered: whyEntered(t.ctx),
});

function buildPaper(ledger, rules, { health = null } = {}) {
  const main = ledger.trades.filter((t) => t.book === 'main');
  const open = ledger.positions.filter((p) => p.book === 'main');
  const stats = paper.stats(main, { equity: ledger.equity });
  const books = {};
  for (const [k, ko] of Object.entries(BOOKS)) books[k] = { ko, ...paper.stats(ledger.trades.filter((t) => t.book === k)), open: ledger.positions.filter((p) => p.book === k).length };

  // 체결 기록 — 끝난 거래와 들고 있는 것의 매수·매도를 한 줄씩
  const fills = [];
  for (const x of [...main, ...open]) {
    let left = 1;
    for (const f of x.fills || []) {
      const sell = f.side === 'sell';
      fills.push({ date: f.date, at: f.at, side: f.side, ticker: x.ticker, grade: x.grade, px: f.px,
        weightPct: round(x.weightPct * f.frac, 1), frac: f.frac,
        R: sell ? round((f.px - x.entry) / (x.risk || (x.entry - x.stop0))) : null,
        why: sell ? f.why : whyEntered(x.ctx) });
      if (sell) left -= f.frac;
    }
  }
  fills.sort((a, b) => (`${b.date} ${b.at || ''}`).localeCompare(`${a.date} ${a.at || ''}`));

  return {
    generated: new Date().toISOString(),
    rulesVersion: rules.version, slipPct: rules.fill.buySlipPct, minSample: MIN_SAMPLE,
    riskPct: rules.risk.riskPct, maxPositionPct: rules.risk.maxPositionPct,
    observing: main.length < MIN_SAMPLE,
    stats: { ...stats, open: open.length, openPct: round(open.reduce((s, p) => s + paper.curPct(p), 0)),
      // 누적 = 끝난 거래 + 들고 있는 것의 평가분. 곡선의 마지막 점과 같은 정의다
      totalPct: round(main.reduce((s, t) => s + (t.pct || 0), 0) + open.reduce((s, p) => s + paper.curPct(p), 0)) },
    byGrade: paper.groupStats(main, (t) => t.grade),
    byRegime: paper.groupStats(main, (t) => t.regime),
    byWhy: paper.groupStats(main, (t) => t.why),
    books,
    equity: ledger.equity,
    positions: open.map((p) => ({ ...paper.view(p), stop0: p.stop0, riskPerSharePct: p.riskPerSharePct, pct: paper.curPct(p),
      mfeR: round(p.mfe), maeR: round(p.mae), regime: p.regime, entered: whyEntered(p.ctx) })),
    trades: main.map(pubTrade),
    fills: fills.slice(0, 200),
    health: health || ledger.health || null,
  };
}

function writePaper(data) {
  writeWindowData(path.join(paths.dashboardData, 'paper.js'), 'PAPER_DATA', data);
}

// 원장 폴더에서 읽어 바로 쓴다 (아침 run-breakout 용)
function publishFromDisk(rules, opts = {}) {
  const data = buildPaper(loadLedger(opts.dir), rules, opts);
  writePaper(data);
  return data;
}

module.exports = { buildPaper, writePaper, publishFromDisk, loadLedger, whyEntered, MIN_SAMPLE };
