export const meta = {
  name: 'bt-chief-report',
  description: '실장 종합 — 팀별 결과를 한국어 리포트로 병합',
  whenToUse: 'start breakout 의 마지막 단계. 팀별 결과를 사용자에게 보고할 때',
  phases: [{ title: '실장종합', detail: '팀별 결과 병합 + 오늘의 포커스' }],
}
// 사용법: Workflow({ scriptPath:'<abs>/scripts/workflows/chief-report.js', args:{ date, teams:{...} } })
//   또는 args:{ date, argsFile:'<abs>/state/llm-in/_chiefargs.json' } — 팀 데이터가 크면 이쪽.
//   워크플로 스크립트는 파일을 못 읽으므로 실장 에이전트가 Read 도구로 직접 읽는다.

let A = args
if (typeof A === 'string') { try { A = JSON.parse(A) } catch (e) { A = null } }
const date = (A && A.date) || 'today'
const T = (A && A.teams) || {}
const argsFile = A && A.argsFile

const teamBlocks = argsFile
  ? `## 팀별 결과 — 아래 파일에 전부 들어 있다
**${argsFile}**

⚠️ **가장 먼저 Read 도구로 이 파일을 읽어라.** 읽지 않고 리포트를 쓰면 안 된다.

⚠️ **teams.dataNotice 가 있으면 원본 데이터가 오염된 날이다.**
그 안의 ko 문장을 **marketVerdictKo 맨 앞과 caution 에 반드시 넣어라.**
그날의 종목 목록은 걸러지지 않은 것이므로 "기준을 통과했다"고 말하면 안 된다.
숨기거나 완곡하게 돌려 말하지 마라 — 사용자가 이걸 모르고 매매하면 안 된다.
⚠️ **teams.barsNotice 가 있으면 야후 봉이 누락됐거나 RS 세션과 어긋난 날이다.** dataNotice 와 같이
그 ko 문장을 marketVerdictKo 맨 앞과 caution 에 넣어라. 데드크로스 날짜·연속 이탈일수·돌파 거래량은 그날 신뢰도가 낮다.

JSON 구조: \`teams.team1\`(시장환경 + \`news\` 1팀 LLM 뉴스 digest·marketNarrative·keyRisks + \`finra\` 절대금액) ·
\`teams.team2\`(종목선정 + \`llmResearched\` 종목별 상승 이유·반대 근거·최근 분기 실적 \`financials\`
  + \`lists\` 도윤 5개 목록 — 거래대금 상위(전일 +5% 이상 중 거래대금 큰 20)·RS 1개월·3개월·6개월 상위 2%·세 기간 모두 상위 2%,
    목록마다 \`industries\`(공통 업종과 그 안의 티커)·\`headline\`
  + \`listThemes\` 목록별 AI 테마 분석 — \`commonIndustries\`·\`themes\`(뉴스 근거)·\`unexplained\`·\`narrative\`
  · \`targetStatusCount\`·top[].qualifiedBy/targetStatus/saleCy/epsCy) ·
\`teams.siteCondition\`(사용자 시트의 시장국면 문자열 — **QQQ 판정을 덮어쓰지 말고 나란히 보고**) · \`teams.apiCalled\`(사이트 오늘 신규 조회 수) · \`teams.siteDegraded\`(사이트 발행 보류일) ·
\`teams.team3\`(추적 · \`dropped[]\` 오늘 배제 · \`unevaluated\` 봉 없어 미평가) ·
\`teams.team4\`(EP·촉매 + \`llmItems\` 종목별 촉매 분류·근거 + \`summary\` sectorSignal·caution) ·
\`teams.chartCheck\`(오늘 차트 볼 종목, 상한 적용 — 전체 수는 \`chartCheckTotal\`).

⚠️ **돌파일보다 나중에 배제된 종목은 모순이 아니라 "실패한 돌파"다.**
\`teams.team3.breakouts[].breakDate\` 와 \`teams.team3.dropped[].asOf\`(배제 판정의 기준 봉 날짜 — 실행일이 아니다)를 비교하라.
돌파 뒤에 50·150일선을 잃은 것은 데이터 오류가 아니다 — "판단 보류"가 아니라 **"돌파 후 배제(50일선 3일 이탈 등 Node 사유 그대로)"** 라고 써라.
차트 해석(되돌림·갭·리테스트 실패 같은 말)은 붙이지 마라. 같은 날짜면 같은 세션의 일이다.

⚠️ **개수는 직접 세지 마라. Node 가 센 값을 그대로 써라.**
조사된 종목 수 = \`teams.team2.llmResearchedCount\` (그중 이월 = \`llmCarriedCount\`), 촉매 분류 수 = \`teams.team4.llmItemsCount\`,
돌파 = \`teams.team3.breakoutTotal\` (목록은 \`breakoutShown\` 개만) · 거래량 확인 = \`breakoutVolumeConfirmed\`,
차트확인 = \`teams.chartCheckTotal\`, 선정 종목 = \`teams.team2.picksTotal\`. 잘린 개수를 전체로 말하지 마라.

⚠️ **\`llmResearched\` / \`llmItems\` 가 있으면 그 종목들은 이미 조사된 것이다.**
"상승 이유는 조사되지 않았습니다" 라고 쓰지 마라 — 사실과 다르다. 조사 안 된 종목은
\`llmFailed\` 에 있거나 애초에 이 목록에 없는 종목뿐이고, 그 구분을 그대로 전달하라.
\`researchedOn\` 이 오늘이 아닌 항목은 그날 조사분을 이월한 것이다 — 필요하면 "N일 조사분"이라고 밝혀라.

\`teams.team2.lists\` 는 이 리포트의 핵심이다 (2026-10-06 — 업종 자금흐름 대신). **"오늘 강한 종목이 어디에 몰렸는지"**를
목록의 공통 업종(\`industries\`)과 AI 테마(\`listThemes\`)로 말하라. 특히 거래대금 상위(돈이 실제로 들어온 종목)와
세 기간 모두 상위 2%(오래 강한 종목)를 먼저 본다. 매수 위치("자리"·"눌림을 기다려라"·"추격 불리") 판단은 쓰지 마라 — 봉을 받지 않았고, 차트는 사용자가 본다.`
  : `## 1팀 시장환경
${JSON.stringify(T.team1 || {}, null, 1).slice(0, 4000)}

## 2팀 종목선정
${JSON.stringify(T.team2 || {}, null, 1).slice(0, 6000)}

## 3팀 추적
${JSON.stringify(T.team3 || {}, null, 1).slice(0, 4000)}

## 4팀 EP·촉매
${JSON.stringify(T.team4 || {}, null, 1).slice(0, 4000)}

## 오늘 차트를 봐야 할 종목
${JSON.stringify(T.chartCheck || [], null, 1).slice(0, 2000)}`

const CHIEF = { type: 'object', properties: {
  headline: { type: 'string', description: '오늘을 한 줄로, 50자 안팎. 시장 신호 + 오늘 가장 중요한 한 가지. 이동평균 숫자 나열 금지' },
  marketVerdictKo: { type: 'string', description: '세 문단, 문단마다 3~4문장. 결론과 함께 왜 그런지를 쓴다. ①시장: 지금 사도 되는 때인가 ②강한 종목이 몰린 곳: 도윤 목록의 공통 업종·테마(업종 이름 한국어 + 그 안의 티커 2~3개, 거래대금 상위와 세 기간 공통 우선) ③그래서 오늘 어떻게 할지. 문단은 빈 줄로 나눈다. 【】 머리말·번호 목록 금지. 입력에 없는 사실로 채우지 마라' },
  todayFocus: { type: 'array', items: { type: 'object', properties: {
    ticker: { type: 'string' },
    reason: { type: 'string', description: '왜 주목하는지 1~2문장' },
    action: { type: 'string', description: '무엇을 확인하면 되는지 한 문장, 숫자는 1~2개. 입력의 확인 조건만 (예: "기준선 $X 종가 유지 여부 · 거래량이 20일 평균 2배인지 · QQQ MA20 713 회복 여부"). 차트 결론 금지 — 돌파 실패로 처리·리테스트·지지로 전환·눌림·갭·셋업·자리·추격 같은 말을 쓰지 마라' },
  }, required: ['ticker', 'reason', 'action'] }, description: '오늘 가장 주목할 종목 0~5개 — Node 신호(거래량 확인 돌파·차트확인 목록·도윤 거래대금 상위나 세 기간 공통 목록)가 있는 종목만. 없으면 비워라' },
  teamSummaries: { type: 'object', properties: {
    team1: { type: 'string', description: '한별(시장) 요약 2~3문장. 결론 + 이유' }, team2: { type: 'string', description: '도윤(종목 선정) 요약 2~3문장. 어떤 업종·테마가 왜 강한지' },
    team3: { type: 'string', description: '수아(추적) 요약 2~3문장' }, team4: { type: 'string', description: '재민(호재 찾기) 요약 2~3문장. 호재가 확인된 종목은 무슨 호재인지' },
  }, required: ['team1', 'team2', 'team3', 'team4'] },
  chartCheckNote: { type: 'string', description: '오늘 눈으로 차트를 봐야 할 종목 최대 5개, 종목당 한 줄로 "티커 — 확인할 것". 시스템 플래그(reasons)를 뜻으로 풀어 옮긴다. 플래그에 없는 방향(상방/하방)·매물·소진 추론 금지' },
  tomorrowWatch: { type: 'string', description: '내일 지켜볼 것 2~3문장. 무엇을 왜 보는지' },
  // ⚠️ 프롬프트 규칙 7번은 caution 을 필수라고 말하는데 스키마에선 선택이었다. 어긋나 있었다.
  caution: { type: 'string', description: '이 리포트를 믿을 때 조심할 점 최대 3문장. 조사 안 된 종목 · 근거 없는 항목 · 데이터 문제를 솔직히, 쉬운 말로' },
}, required: ['headline', 'marketVerdictKo', 'todayFocus', 'teamSummaries', 'chartCheckNote', 'caution'] }

phase('실장종합')
// 에이전트가 죽으면 1회만 다시 시도한다.
// ⚠️ 실패 시 `{...null}` 이 되어 실장 리포트가 통째로 비는데 오류는 안 난다. 아래에서 막는다.
const tryAgent = async (p, o) => {
  const r = await agent(p, o)
  if (r) return r
  log(`재시도: ${o.label}`)
  return await agent(p, { ...o, label: `${o.label}#2` })
}

const report = await tryAgent(
  `당신은 투자 리서치팀의 실장입니다. 오늘은 ${date}.
팀별 결과를 사용자에게 보고하세요.

${teamBlocks}

## 반드시 지킬 것
1. **입력 JSON 에 없는 티커·숫자·뉴스를 새로 만들지 마라.** 이게 가장 중요하다.
2. 근거가 '근거 없음'으로 표시된 항목은 그렇게 전달하라. 채워 넣지 마라.
3. 시장이 🔴 면 그 사실을 흐리지 마라. 신규 진입 부적합이면 그렇게 말하라.
4. todayFocus 는 0~5종목. 왜 주목하는지(Node 신호)와 **무엇이 확인되면 논리가 성립/붕괴하는지**를 Node 수치로만.
   Node 신호가 없으면 비워라. "돌파 실패로 처리하라·리테스트·지지로 바뀌는지·눌림을 기다려라·추격 금지" 같은 차트 결론은 쓰지 마라.
5. chartCheckNote 는 chartCheck[].reasons 에 있는 내용만, 쉬운 말로 옮긴다. 거기 없는 것을 보태지 마라.
   (예: "PANW — 최근 석 달 중 가장 조용히 움직이고 있고, 넘어야 할 선 $368.8 까지 3.8% 남았다. 차트에서 이 둘이 실제로 보이는지 확인")
   플래그에 없는 방향(상방/하방)·매물·소진 추론은 쓰지 마라.
6. 사용자가 최종 판단자다. 단정적 매수 권유 대신 확인할 조건을 제시하라.
7. caution 에 이 리포트의 한계를 **솔직히** 적어라 (필수 항목이다).
   조사되지 않은 종목 수, '근거 없음'으로 남은 항목, 데이터 결함(dataNotice·barsNotice·unevaluated)을 숨기지 마라.
8. **marketVerdictKo 둘째 문단에는 "오늘 강한 종목이 어디에 몰렸는지"를 반드시 넣어라.**
   \`teams.team2.lists\` 의 공통 업종(한국어) + 그 안의 티커 2~3개, \`listThemes\` 가 있으면 그 테마와 이유. 매수 위치 판단은 쓰지 않는다.
   공통 업종이 없으면 "오늘 강한 종목은 여러 업종에 흩어져 있습니다"라고 그대로 써라.
   **입력에 없는 사실로 분량을 채우지 마라** — 근거가 부족하면 짧게 끝내는 것이 낫다.
9. 1팀 news(digest·keyRisks)·2팀 lists/listThemes·4팀 summary 가 있으면 teamSummaries 에 그 내용을 반영하라 — 숫자만 보고 쓰지 마라.
   2팀은 **목록별 차이를 구분해** 써라: 거래대금 상위(오늘 돈이 몰린 곳) · 1개월 상위(새로 강해진 곳) · 세 기간 모두(오래 강한 곳).
   teams.siteCondition 이 있으면 "사이트 시장국면: X" 를 QQQ 판정 옆에 한 번 병기하라(둘이 다르면 다르다고).
10. **차트 모양(횡보·베이스·돌파의 질·되돌림·갭·리테스트)은 판정하지 않는다.** 당신은 봉을 받지 않았다.
    3팀 표의 "돌파" 는 35봉(약 7주) 고점을 종가가 넘었다는 뜻이고 "거래량 확인" 은 돌파봉/20일 평균 비율일 뿐이다. 그 이상을 말하지 마라.

## 서술 기준 — 독자는 주식 투자를 하는 일반인이다 (2026-10-02 사용자 결정. 이전: 금융 실무자 대상)
1. 한 문장은 한 가지 내용, 60~80자. 칸마다 정해진 문장 수를 넘기지 마라. 첫 문장만 읽어도 결론이 보이게.
   짧게 쓰되 **결론에는 반드시 이유를 붙인다** — "반도체에 몰렸다"로 끝내지 말고 왜 그런지(실적 전망·뉴스)까지 쓴다.
2. **입력 JSON 의 키 이름·내부 값을 문장에 쓰지 마라.** dataNotice·barsNotice·sessionMismatch·lists·listThemes·picks·
   commonIndustries·unexplained·llmResearchedCount·null·true 같은 말이 보이면 그 문장은 실패다. 뜻으로 바꿔 써라:
   lists 의 dollar → "거래대금 상위", m1 → "1개월 상대강도 상위 2%", all → "세 기간 모두 상위 2%".
3. 숫자는 결론에 필요한 것만 문단당 2~3개. QQQ 종가·이동평균은 한 번만, 그것도 "10일선이 20일선 위" 정도로.
   마진부채는 "빚내서 산 주식이 1년 새 37% 늘었다"처럼 뜻으로.
4. 데이터 문제가 없으면 데이터 상태는 쓰지 마라. 문제가 있을 때만 맨 앞에 한 문장으로("오늘은 일부 가격 자료가 빠져 있어 돌파 판단을 믿기 어렵다").
5. 전문 용어는 꼭 필요할 때만, 처음 나올 때 괄호로 풀어 준다. 영어 업종 이름은 한국어로. 회사명·티커는 원문 그대로.
6. 숫자는 입력 JSON 에 실제로 있는 것만 쓴다. 근거가 부족하면 짧게 끝내는 것이 낫다.
7. 매수·매도 권유는 하지 않는다. "무엇이 확인되면 이야기가 맞고/틀린지"로 끝낸다.`,
  { label: '실장종합', phase: '실장종합', schema: CHIEF, model: 'opus' }
)

if (!report) {
  log('❌ 실장 에이전트가 재시도 후에도 실패했습니다 — 빈 종합 대신 실패를 명시합니다')
  return { date, error: 'agent_failed' }
}

return { date, ...report }
