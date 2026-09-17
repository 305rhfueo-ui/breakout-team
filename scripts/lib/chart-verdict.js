'use strict';
// 실장(LLM)은 봉을 받지 않는다. 그런데도 차트 결론 어휘가 나오면 프롬프트가 샌 것이다.
// 막지는 않고 어느 필드에서 무엇이 나왔는지 알린다 — build-chief-report 가 WARN 으로 찍는다 (2026-09-17).
//
// 2026-09-16 실측: "돌파 기준선 $190.97 을 깨면 돌파 실패로 처리", "리테스트 성공 여부",
//   "눌림을 기다리는 쪽이 자리 논리에 부합" — 전부 d50 숫자 하나에서 나온 문장이었다.
// "눌림 후보" 는 Node 의 stageKo 라벨(sector-flow.tickerStage)이라 제외한다.

const CHART_VERDICT_RE = /돌파 실패로 처리|리테스트|지지로 (?:바뀌|전환)|눌림(?! 후보)|갭성|셋업|사기 좋은 자리|자리 논리/g;

// @returns ['todayFocus[0 ZS].action: "돌파 실패로 처리"', …]
function chartVerdictLeaks(c) {
  const out = [];
  if (!c || typeof c !== 'object') return out;
  const scan = (field, text) => { for (const m of String(text || '').matchAll(CHART_VERDICT_RE)) out.push(`${field}: "${m[0]}"`); };
  scan('marketVerdictKo', c.marketVerdictKo);
  scan('chartCheckNote', c.chartCheckNote);
  (c.todayFocus || []).forEach((f, i) => scan(`todayFocus[${i}${f && f.ticker ? ' ' + f.ticker : ''}].action`, f && f.action));
  for (const [k, v] of Object.entries(c.teamSummaries || {})) scan(`teamSummaries.${k}`, v);
  return out;
}

module.exports = { CHART_VERDICT_RE, chartVerdictLeaks };
