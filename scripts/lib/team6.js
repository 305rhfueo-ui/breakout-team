'use strict';
// 6팀 · 매매 — 아침 "돌파 대기" 목록을 만든다. LLM 없음.
//
// 다른 팀이 고른 후보(2팀 통과 · 3팀 추적 · 4팀 촉매)에 쿨라매기 셋업 등급을 매기고,
// 아직 피벗 아래에 있는 것만 밤 관심 목록으로 넘긴다. 이미 피벗을 넘은 종목은 표에만 싣는다 —
// 관심 목록에 넣으면 오르는 날마다 추격 매수하게 된다.
//
// ⚠️ 이 파일이 만드는 것은 전부 공개 저장소(GitHub Pages)에 올라간다.
//    금액·수량은 쓰지 않는다. 비중(%)과 가격만 쓴다. 수량은 터미널·알림에서만 계산한다.

const { round } = require('./util');
const { gradeSetup, sharesFor } = require('./setup-grade');
const { earningsOf } = require('./earnings');

const PLAN_CAP = 30;

function buildPlans({ tickers, barsOf, rowOf, rules, regime, riskPct, earnings, catOf, nameOf }) {
  const plans = [], post = [];
  const skipped = { noBars: [], noBase: 0, far: 0 };
  for (const t of [...new Set(tickers)]) {
    const bars = barsOf(t);
    if (!bars) { skipped.noBars.push(t); continue; }
    const g = gradeSetup(bars, { rules, regime, riskPct });
    if (!g.ok || g.state === 'none') { skipped.noBase++; continue; }
    const row = (rowOf && rowOf(t)) || {};
    const cat = catOf ? catOf(t) : null;
    const earn = earningsOf(earnings, t);
    const item = {
      ticker: t, name: nameOf ? nameOf(t) : null, sector: row.Sector || null, industry: row.Industry || null,
      grade: g.grade, state: g.state, asOf: g.asOf, price: g.price,
      pivot: g.pivot, pivotDate: g.pivotDate, stop: g.stop, riskPerSharePct: g.riskPerSharePct,
      weightPct: g.weightPct, weightCapped: g.weightCapped,
      distToPivotPct: g.distToPivotPct, distToPivotAdr: g.distToPivotAdr, extensionAdr: g.extensionAdr, chase: g.chase, adrPct: g.adrPct,
      ma10: g.ma10,
      dollarVol20M: g.dollarVol20 == null ? null : round(g.dollarVol20 / 1e6, 1), liquid: g.liquid,
      reasons: g.reasons, fails: g.fails, metrics: g.metrics,
      catalyst: cat, earnings: earn,
    };
    if (g.state === 'post') { post.push({ ...item, breakDate: g.breakDate, barsSinceBreak: g.barsSinceBreak }); continue; }
    if (!g.near) { skipped.far++; continue; }
    // 막는 사유는 하나만 적는다 — 위에서부터 먼저 걸린 것
    item.blocked = regime === 'red' ? '시장 빨간불 — 신규 매수 중단'
      : (typeof earn === 'string' && earn !== 'unknown') ? `실적 발표 ${earn} — 발표 전 진입 금지`
      : (rules.risk.minAdrPct && g.adrPct < rules.risk.minAdrPct) ? `ADR ${g.adrPct}% — 기준(${rules.risk.minAdrPct}%) 미달`
      : !g.liquid ? `거래대금 ${item.dollarVol20M}M — 기준 미달`
      : g.chase ? `이격 ${g.extensionAdr} ADR — 추격 금지`
      : g.grade === 'C' ? '등급 C'
      : (rules.setup.mainMaxBelowPivotAdr && g.distToPivotAdr < -rules.setup.mainMaxBelowPivotAdr) ? `피벗까지 ${Math.abs(g.distToPivotAdr)} ADR — ${rules.setup.mainMaxBelowPivotAdr} ADR 넘게 떨어져 있음`
      : null;
    // 실제 장부에서는 안 사지만 그림자 장부로 같이 돌리는 것 — 그 조건이 성적을 가르는지 보려면 결과가 필요하다
    item.shadowBook = item.blocked === '등급 C' ? 'gradeC' : (item.blocked && item.blocked.startsWith('피벗까지')) ? 'far' : null;
    item.watch = !item.blocked;
    item.score = round((7 - g.fails.length) * 10
      + (cat && (cat.category === 1 || cat.category === 5) ? 5 : 0)
      - Math.abs(g.distToPivotPct), 1);
    plans.push(item);
  }
  plans.sort((a, b) => (b.watch - a.watch) || (b.score - a.score));
  post.sort((a, b) => (a.barsSinceBreak - b.barsSinceBreak) || (a.extensionAdr - b.extensionAdr));
  const watch = plans.filter((p) => p.watch);
  return {
    plans: plans.slice(0, PLAN_CAP), plansTotal: plans.length, post: post.slice(0, PLAN_CAP), postTotal: post.length,
    counts: { evaluated: new Set(tickers).size, near: plans.length, watch: watch.length,
      A: watch.filter((p) => p.grade === 'A').length, B: watch.filter((p) => p.grade === 'B').length,
      blocked: plans.length - watch.length, post: post.length, far: skipped.far, noBase: skipped.noBase, noBars: skipped.noBars.length },
    noBars: skipped.noBars,
  };
}

// 밤 트리거가 읽는 파일 — 관심 종목만, 필요한 숫자만
function watchlistOf(team6) {
  return {
    date: team6.generated, sessionDate: team6.sessionDate, rulesVersion: team6.rulesVersion, regime: team6.regime,
    // 등급 C 는 실제 장부에서는 안 사지만 그림자 장부(gradeC)로 같이 돌린다 — 등급이 성적을 가르는지 보려면 C 의 결과도 필요하다
    items: team6.plans.filter((p) => p.watch || p.shadowBook).map((p) => ({
      shadowOnly: !p.watch, shadowBook: p.shadowBook || null,
      ticker: p.ticker, grade: p.grade, pivot: p.pivot, stopPre: p.stop, adrPct: p.adrPct, weightPct: p.weightPct,
      ma10: p.ma10, metrics: p.metrics, catalyst: p.catalyst,
      price: p.price, sector: p.sector, industry: p.industry, score: p.score, reasons: p.reasons,
    })),
  };
}

const sg = (x) => (x == null ? '—' : `${x > 0 ? '+' : ''}${x}`);
const catKo = (c) => (c && c.category ? `${'①②③④⑤⑥'[c.category - 1] || ''}` : '');

function reportSection(t6) {
  if (!t6) return [];
  const L = ['## 6팀 · 매매 (돌파 대기 · 매수 계획)'];
  const c = t6.counts;
  L.push(`- 규칙 v${t6.rulesVersion} · 시장 ${t6.regime}${t6.regime === 'red' ? ' — **신규 매수 중단**' : t6.regime === 'yellow' ? ' — 종목당 리스크 절반' : ''} · 기준 봉 ${t6.sessionDate || '—'}`);
  L.push(`- 후보 ${c.evaluated}종목 → 피벗 ${t6.nearAdr} ADR 이내 ${c.near} → **오늘 밤 관심 ${c.watch}** (A ${c.A} · B ${c.B}) · 막힘 ${c.blocked} · 이미 돌파 ${c.post} · 피벗에서 멂 ${c.far} · 쉬는 구간 없음 ${c.noBase}`);
  L.push(`- 실적 달력: ${t6.earningsOk ? '확인' : '⚠️ 못 받음 — 실적 직전 여부를 걸러내지 못했다'}`);
  L.push('- 피벗 = 베이스 구간 최고가 · 예비 손절 = 피벗 − ' + t6.stopAdr + ' ADR(밤에 사면 당일 저가로 바뀐다) · 비중 = 계좌 대비 %, 종목당 리스크 ' + t6.riskPct + '% 기준 · 이격 = (종가 − 10일선) ÷ ADR');
  L.push('- 등급은 검사 7개 중 실패 수(0=A, 1=B, 2 이상=C)다. 차트 모양은 판정하지 않는다.');
  L.push('');
  if (t6.plans.length) {
    L.push('| 순위 | 종목 | 등급 | 현재가 | 피벗 | 피벗까지 | 예비 손절 | 리스크/주 | 비중 | 이격 | 4팀 | 상태 |');
    L.push('|---:|---|:-:|---:|---:|---:|---:|---:|---:|---:|:-:|---|');
    t6.plans.forEach((p, i) => {
      L.push(`| ${i + 1} | **${p.ticker}** | ${p.grade} | ${p.price} | ${p.pivot} | ${sg(p.distToPivotPct)}% | ${p.stop} | ${p.riskPerSharePct}% | ${p.weightPct}%${p.weightCapped ? '(상한)' : ''} | ${sg(p.extensionAdr)} | ${catKo(p.catalyst)} | ${p.watch ? '👀 관심' : '⛔ ' + p.blocked} |`);
    });
    L.push('');
    for (const p of t6.plans.filter((x) => x.watch)) L.push(`- **${p.ticker}** — ${p.reasons.join(' · ')}`);
    L.push('');
  } else {
    L.push('피벗 가까이에서 쉬고 있는 종목이 없다.', '');
  }
  if (t6.post.length) {
    L.push(`### 이미 피벗을 넘은 종목 ${t6.postTotal}개 (밤 관심 목록 아님)`);
    L.push('| 종목 | 등급 | 돌파일 | 경과 | 피벗 | 현재가 | 피벗 대비 | 이격 |');
    L.push('|---|:-:|---|---:|---:|---:|---:|---:|');
    for (const p of t6.post) L.push(`| ${p.ticker} | ${p.grade} | ${p.breakDate} | ${p.barsSinceBreak}봉 | ${p.pivot} | ${p.price} | ${sg(p.distToPivotPct)}% | ${sg(p.extensionAdr)} ADR${p.chase ? ' ⚠️' : ''} |`);
    L.push('');
  }
  const s = t6.stats;
  if (s && s.n) L.push(`### 모의투자 성적 (자체 원장 · 슬리피지 ${t6.slipPct}% 가정)`, `- 거래 ${s.n}건 · 승률 ${s.winPct}% · 평균 ${s.avgR}R · 손익비 ${s.profitFactor ?? '—'} · 누적 ${sg(s.equityPct)}% · MDD ${s.mdd}%`, '');
  return L;
}

function digestLine(t6) {
  if (!t6) return null;
  const w = t6.plans.filter((p) => p.watch);
  const head = `- **6팀 매수 계획**: 관심 ${t6.counts.watch}종목 (A ${t6.counts.A} · B ${t6.counts.B}) · 이미 돌파 ${t6.counts.post}${t6.regime === 'red' ? ' · 시장 빨간불 — 신규 매수 중단' : ''}`;
  return [head, ...w.slice(0, 8).map((p) => `  - ${p.ticker}(${p.grade}) 피벗 $${p.pivot} · 현재 ${sg(p.distToPivotPct)}% · 예비 손절 $${p.stop} · 비중 ${p.weightPct}%`)];
}

module.exports = { buildPlans, watchlistOf, reportSection, digestLine, sharesFor };
