'use strict';
// 6팀 자체 원장 — 모의 포지션의 진입·손절·부분 익절·이평 이탈 청산과 성적 계산.
//
// 실제 주문은 어디에도 없다. 여기 있는 건 "그 가격에 샀다고 치고" 적는 장부다.
// 밤 루프(paper-trader)와 5분봉 백테스트가 같은 함수를 쓴다.
//
// ⚠️ 금액·수량을 다루지 않는다. 포지션 크기는 계좌 대비 비중(%), 손익은 R 과 계좌 대비 % 로만 적는다.
//    (원장은 공개 저장소에 올라간다.)
// 장부(book): 'main' = 실제 규칙. 그 밖은 그림자 — 같은 신호를 다른 규칙으로 돌려 비교만 한다.
//   'trail20'  잔량을 10일선 대신 20일선 이탈에 판다
//   'nextOpen' 돌파 순간이 아니라 다음 날 시가에 산다 (아침에 보고 따라 사는 경우)

const { round } = require('./util');

function weightFor(riskPerSharePct, { rules, riskPct, regime }) {
  const acct = (riskPct ?? rules.risk.riskPct) * (regime === 'yellow' ? rules.risk.yellowRiskMult : 1);
  return Math.min(acct / riskPerSharePct * 100, rules.risk.maxPositionPct);
}

function open({ ticker, date, at, entry, stop, book = 'main', rules, riskPct, regime, grade = null, ctx = {} }) {
  const risk = entry - stop;
  if (!(risk > 0)) return null;
  const riskPerSharePct = risk / entry * 100;
  return {
    id: `${ticker}-${date}-${book}`, book, ticker, grade, ruleVersion: rules.version,
    entryDate: date, entryAt: at || null, entry: round(entry), stop: round(stop), stop0: round(stop), risk: round(risk, 4),
    riskPerSharePct: round(riskPerSharePct), weightPct: round(weightFor(riskPerSharePct, { rules, riskPct, regime }), 1),
    left: 1, realR: 0, realPct: 0, partial: false, days: 0, mfe: 0, mae: 0, last: round(entry), lastDate: date, regime: regime || null,
    fills: [{ date, at: at || null, side: 'buy', frac: 1, px: round(entry), why: '진입' }], ctx,
  };
}

function sell(pos, frac, px, { date, at = null, why }) {
  const f = Math.min(frac, pos.left);
  if (f <= 0) return null;
  pos.realR += f * (px - pos.entry) / pos.risk;
  pos.realPct += pos.weightPct * f * (px / pos.entry - 1);
  pos.left = +(pos.left - f).toFixed(6);
  pos.fills.push({ date, at, side: 'sell', frac: round(f, 4), px: round(px), why });
  pos.last = round(px); pos.lastDate = date;
  if (pos.left > 1e-6) return null;
  pos.left = 0;
  return { id: pos.id, book: pos.book, ticker: pos.ticker, grade: pos.grade, ruleVersion: pos.ruleVersion, regime: pos.regime,
    entryDate: pos.entryDate, entryAt: pos.entryAt, exitDate: date, exitAt: at, days: pos.days,
    entry: pos.entry, stop0: pos.stop0, exit: round(px), riskPerSharePct: pos.riskPerSharePct, weightPct: pos.weightPct,
    R: round(pos.realR), pct: round(pos.realPct), mfeR: round(pos.mfe), maeR: round(pos.mae), why, partial: pos.partial, fills: pos.fills, ctx: pos.ctx };
}

// 장중 봉(또는 현재가 한 점)을 반영한다. 손절에 닿았으면 거래 기록을 돌려준다.
// 갭으로 손절을 건너뛰어 열렸으면 손절가가 아니라 시가에 팔린 것으로 친다.
function onBar(pos, bar, { date, rules }) {
  if (bar.h != null) pos.mfe = Math.max(pos.mfe, (bar.h - pos.entry) / pos.risk);
  if (bar.l != null) pos.mae = Math.min(pos.mae, (bar.l - pos.entry) / pos.risk);
  pos.last = round(bar.c); pos.lastDate = date;
  if (bar.l <= pos.stop) {
    const px = Math.min(bar.o ?? pos.stop, pos.stop) * (1 - rules.fill.sellSlipPct / 100);
    return sell(pos, 1, px, { date, at: bar.hm || null, why: pos.partial ? '본전 손절' : (date === pos.entryDate ? '당일 손절' : '손절') });
  }
  return null;
}

// 세션이 끝난 뒤 한 번. close = 그날 종가, ma = 그날 종가 기준 이동평균(장부 규칙의 기간).
function onClose(pos, { date, close, ma, rules, trailMa }) {
  const X = rules.exit, slipS = 1 - rules.fill.sellSlipPct / 100;
  if (date > pos.entryDate && pos._lastCloseDate !== date) { pos.days++; pos._lastCloseDate = date; }
  pos.last = round(close); pos.lastDate = date;
  const out = [];
  if (!pos.partial && pos.days >= X.partialAfterDays && close >= pos.entry + X.partialMinR * pos.risk) {
    sell(pos, X.partialFraction, close * slipS, { date, at: 'close', why: '부분 익절' });
    pos.partial = true;
    if (X.breakevenAfterPartial) pos.stop = Math.max(pos.stop, pos.entry);
  }
  if (pos.left > 0 && ma != null && close < ma) {
    const t = sell(pos, 1, close * slipS, { date, at: 'close', why: `${trailMa}일선 이탈` });
    if (t) out.push(t);
  }
  return out;
}

const curR = (pos) => round(pos.realR + pos.left * (pos.last - pos.entry) / pos.risk);
const curPct = (pos) => round(pos.realPct + pos.weightPct * pos.left * (pos.last / pos.entry - 1));

// 공개용 요약 — 원장에서 대시보드로 나가는 모양
function view(pos) {
  return { ticker: pos.ticker, book: pos.book, grade: pos.grade, entryDate: pos.entryDate, entryAt: pos.entryAt, entry: pos.entry,
    stop: pos.stop, last: pos.last, R: curR(pos), left: pos.left, days: pos.days, weightPct: pos.weightPct, partial: pos.partial };
}

function stats(trades, { equity = null } = {}) {
  const n = trades.length;
  if (!n) return { n: 0 };
  const wins = trades.filter((t) => t.R > 0), loss = trades.filter((t) => t.R <= 0);
  const sum = (a, k = 'R') => a.reduce((s, t) => s + (t[k] || 0), 0);
  const gw = sum(wins), gl = Math.abs(sum(loss));
  const out = { n, winPct: round(wins.length / n * 100, 1), avgR: round(sum(trades) / n), totalR: round(sum(trades), 1),
    avgWinR: wins.length ? round(gw / wins.length) : null, avgLossR: loss.length ? round(-gl / loss.length) : null,
    profitFactor: gl > 0 ? round(gw / gl) : null, avgDays: round(sum(trades, 'days') / n, 1),
    sameDayStopPct: round(trades.filter((t) => t.why === '당일 손절').length / n * 100, 1),
    equityPct: round(sum(trades, 'pct')) };
  if (equity && equity.length) {
    let peak = -Infinity, mdd = 0;
    for (const e of equity) { peak = Math.max(peak, e.pct); mdd = Math.max(mdd, peak - e.pct); }
    out.mdd = round(mdd, 1);
    out.equityPct = round(equity[equity.length - 1].pct);
  }
  return out;
}

function groupStats(trades, keyOf) {
  const g = {};
  for (const t of trades) { const k = keyOf(t); if (k == null) continue; (g[k] = g[k] || []).push(t); }
  return Object.fromEntries(Object.entries(g).map(([k, v]) => [k, stats(v)]));
}

module.exports = { open, sell, onBar, onClose, view, stats, groupStats, weightFor, curR, curPct };
