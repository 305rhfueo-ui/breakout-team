'use strict';
// N 심층분석 (2026-11-06) — 준비(prepare-n-args)와 마무리(finish-n)가 같이 쓰는 규칙. 순수 함수만.
//   사용자: "N 내용이 너무 부실하다 — 오닐·미너비니 관점에서 N 만 따로 심층분석하라. 중요하다"
//   기준: docs/기준-N-심층.md
const NG = require('./number-guard');

const N_V = 2;   // 기준·입력이 바뀌면 올린다 → 모든 종목을 다시 조사한다 (1 = 6팀 심층 분석 안에 섞여 있던 옛 N)
const N_KEYS = ['basis', 'revenueImpact', 'profitImpact', 'expectedGrowth', 'counter'];
const Q_KEYS = ['newProduct', 'marketShare', 'marketStructure', 'salesMargin', 'costProductivity'];

// 미너비니 '코드 33' — 최근 3분기 동안 매출 증가율·이익 증가율·순이익률이 각각 오르는가.
//   quarters 는 sec-edgar.getQuarterlyFinancials 의 것(최신이 앞). EPS 가 없어 이익은 순이익으로 근사한다.
function code33(quarters) {
  const q = (quarters || []).slice(0, 3);
  if (q.length < 3) return null;
  const nm = (x) => (x.netIncome != null && x.revenue ? Math.round((x.netIncome / x.revenue) * 1000) / 10 : null);
  const rows = q.map((x) => ({ periodEnd: x.periodEnd, revenueYoy: (x.yoy || {}).revenue ?? null, netIncomeYoy: (x.yoy || {}).netIncome ?? null, netMargin: nm(x) }));
  const rising = (k) => { const v = rows.map((r) => r[k]); return v.every((x) => x != null) ? v[2] < v[1] && v[1] < v[0] : null; };
  const r = { revenue: rising('revenueYoy'), netIncome: rising('netIncomeYoy'), netMargin: rising('netMargin') };
  return { rows, rising: r, all: r.revenue === true && r.netIncome === true && r.netMargin === true };
}

// 다시 조사할 이유 — 없으면 null. N 은 분기 사이에 거의 안 바뀌므로 새 실적 공시가 나올 때만 다시 본다.
function needN(e, asOf) {
  if (!e) return '신규';
  if (e.v !== N_V) return '기준 변경';
  if (e.status !== 'done') return '지난 실패';
  if (asOf && (!e.asOf || asOf > e.asOf)) return '새 공시';
  return null;
}

const sourced = (c) => c && c.evidence_level === 'sourced' && (c.sources || []).length > 0;
const claimsOf = (it) => [
  ...(it.drivers || []).flatMap((d) => N_KEYS.flatMap((k) => d[k] || [])),
  ...Q_KEYS.flatMap((k) => ((it.quality || {})[k]) || []),
];

// 숫자 대조와 판정 강등. corpus = NG.corpusOf(입력 자료 원문…). 지운 개수를 돌려준다.
//   ① 출처 붙은 주장은 **자기 인용문**과 대조한다(NG.checkClaims) — 다른 문서의 숫자로 통과시키지 않는다
//   ② 출처 없는 서술(headline·narrative·growthLink·동력 이름·watch)은 입력 원문 + 남은 주장과 대조한다
//   ③ "새로 나왔다"는 근거가 다 지워진 동력은 빼고, 판정을 기준 문서대로 다시 맞춘다
function guardN(it, inputCorpusText, { onCut = () => {} } = {}) {
  let n = 0;
  const keep = (arr) => { const r = NG.checkClaims(arr || []); for (const d of r.dropped) { n++; onCut({ sentence: d.statement, missing: d.missing }); } return r.kept; };
  it.drivers = (it.drivers || []).map((d) => { const o = { ...d }; for (const k of N_KEYS) o[k] = keep(d[k]); return o; })
    .filter((d) => (d.basis || []).some(sourced));
  const Q = it.quality || {};
  it.quality = Object.fromEntries(Q_KEYS.map((k) => [k, keep(Q[k])]));
  const corpus = NG.corpusOf(inputCorpusText, claimsOf(it));
  const fix = (o, k) => {
    if (!o || typeof o[k] !== 'string') return;
    const r = NG.checkText(o[k], corpus);
    if (!r.cut.length) return;
    o[k] = r.text; n += r.cut.length; r.cut.forEach(onCut);
  };
  for (const k of ['headline', 'narrative', 'growthLink']) fix(it, k);
  for (const d of it.drivers) fix(d, 'what');
  it.watch = (it.watch || []).filter((w) => { const bad = NG.checkText(String(w || ''), corpus).cut; if (bad.length) { n++; bad.forEach(onCut); } return !bad.length; });
  if (!it.drivers.length && ['충족', '부분 충족'].includes(it.nVerdict)) it.nVerdict = '미충족';
  const impact = it.drivers.some((d) => [...(d.revenueImpact || []), ...(d.profitImpact || [])].some(sourced));
  if (it.nVerdict === '충족' && !impact) it.nVerdict = '부분 충족';
  return n;
}

module.exports = { N_V, N_KEYS, Q_KEYS, code33, needN, guardN, claimsOf };
