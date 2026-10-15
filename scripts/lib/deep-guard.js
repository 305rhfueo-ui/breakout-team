'use strict';
// 심층 분석 결과(6팀 관심·목록 순환 · 7팀 온디맨드)의 **서술문 숫자 대조** — 출처 붙은 주장(CLAIM)은 verify-claims 가 본다.
// 여기서는 출처가 따로 없는 서술(요약·뉴스/재무/N 흐름·차트 관찰·체크표 근거·결론 근거)을
// "그 종목 입력 자료(JSON) + 그 종목의 출처 붙은 주장" 과 대조해, 어디에도 없는 숫자가 든 문장을 지운다.
// (build-chief-report 에 있던 것을 2026-10-13 7팀과 같이 쓰려고 옮겼다. N 심층 칸 포함)
const NG = require('./number-guard');

const N_KEYS = ['basis', 'revenueImpact', 'profitImpact', 'expectedGrowth', 'counter'];
const nClaims = (it) => (it.newDrivers || []).flatMap((d) => N_KEYS.flatMap((k) => d[k] || []));

// 컨센서스(RS 사이트) — N 블록의 "Node 확정" 줄. AI 가 쓰지 않고 코드가 붙인다.
function consensusOf(site) {
  if (!site) return null;
  const c = { saleCy: site.saleCy ?? null, saleNy: site.saleNy ?? null, epsCy: site.epsCy ?? null, epsNy: site.epsNy ?? null, cyTrend: site.cyTrend ?? null, nyTrend: site.nyTrend ?? null };
  return Object.values(c).some((v) => v != null) ? c : null;
}

function guardDeepItem(it, input, { onCut = () => {} } = {}) {
  const corpus = NG.corpusOf(input, it.recentNews, it.financials, it.risks, nClaims(it));
  let n = 0;
  const fix = (o, k) => {
    if (!o || typeof o[k] !== 'string') return;
    const r = NG.checkText(o[k], corpus);
    if (!r.cut.length) return;
    o[k] = r.text; n += r.cut.length;
    for (const c of r.cut) onCut(c);
  };
  for (const k of ['company', 'lead', 'newsNarrative', 'financialsNarrative', 'estimatesNarrative', 'nNarrative', 'earningsRisk', 'verdictLine', 'invalidation', 'dataLimits']) fix(it, k);
  for (const k of Object.keys(it.chartObservation || {})) fix(it.chartObservation, k);
  for (const row of [...(it.canslim || []), ...(it.chartCheck || [])]) {
    fix(row, 'evidence');
    if (row && row.evidence === '') { row.status = '확인 불가'; row.evidence = '근거 숫자를 입력 자료에서 찾지 못해 지웠다'; }
  }
  for (const d of it.newDrivers || []) fix(d, 'what');
  const clean = (arr, get = (x) => x) => (Array.isArray(arr) ? arr.filter((x) => { const bad = NG.checkText(String(get(x) || ''), corpus).cut; if (bad.length) { n += 1; bad.forEach(onCut); } return !bad.length; }) : arr);
  it.entryChecklist = clean(it.entryChecklist);
  if (Array.isArray(it.conditions)) it.conditions = clean(it.conditions);
  if (Array.isArray(it.basis)) it.basis = clean(it.basis, (b) => b && b.point);
  // 근거가 다 지워진 성장 동력은 뺀다. 남은 게 없으면 N 은 충족일 수 없다.
  if (Array.isArray(it.newDrivers)) {
    it.newDrivers = it.newDrivers.filter((d) => (d.basis || []).some((c) => c && c.evidence_level === 'sourced' && (c.sources || []).length));
    if (!it.newDrivers.length && ['충족', '부분 충족'].includes(it.nVerdict)) it.nVerdict = '미충족';
    const hasImpact = it.newDrivers.some((d) => [...(d.revenueImpact || []), ...(d.profitImpact || []), ...(d.expectedGrowth || [])].some((c) => c && c.evidence_level === 'sourced' && (c.sources || []).length));
    if (it.nVerdict === '충족' && !hasImpact) it.nVerdict = '부분 충족';
  }
  it.consensus = consensusOf(input && input.site);
  return n;
}

module.exports = { guardDeepItem, consensusOf, nClaims, N_KEYS };
