export const meta = {
  name: 'bt-chief-report',
  description: '실장 종합 — 5개 팀 결과를 한국어 리포트로 병합',
  whenToUse: 'start breakout 의 마지막 단계. 팀별 결과를 사용자에게 보고할 때',
  phases: [{ title: '실장종합', detail: '5팀 결과 병합 + 오늘의 포커스' }],
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
\`teams.team2\`(종목선정 + \`llmResearched\` 종목별 상승 이유·반대 근거·최근 분기 실적 \`financials\` + \`theme\` 테마 종합
  — \`theme.byPeriod\`(1M·3M·6M 각각의 주도 테마)와 \`theme.rotation\`(지속·신규·퇴조 + narrative),
  \`themeHeadlineByPeriod\`·\`crossCounts\`·\`crossTop\`(지속 주도 D+N 일수)·\`targetStatusCount\`·top[].qualifiedBy/targetStatus/saleCy/epsCy) ·
\`teams.siteCondition\`(사용자 시트의 시장국면 문자열 — **QQQ 판정을 덮어쓰지 말고 나란히 보고**) · \`teams.apiCalled\`(사이트 오늘 신규 조회 수) · \`teams.siteDegraded\`(사이트 발행 보류일) ·
\`teams.team3\`(추적 · \`dropped[]\` 오늘 배제 · \`unevaluated\` 봉 없어 미평가) ·
\`teams.team4\`(EP·촉매 + \`llmItems\` 종목별 촉매 분류·근거 + \`summary\` sectorSignal·watchList·caution) ·
\`teams.team5\`(주도섹터 + \`llmIndustries\` 강세 근거·risk + \`summary\` rotationView·emerging·fading) ·
\`teams.chartCheck\`(오늘 차트 볼 종목, 상한 적용 — 전체 수는 \`chartCheckTotal\`) ·
\`teams.flowCross\`(자금이 들어오는 업종 × 그 안의 실제 종목 · \`agreement\` 5팀 유출과 3팀 배제의 일치).

⚠️ **돌파일보다 나중에 배제된 종목은 모순이 아니라 "실패한 돌파"다.**
\`teams.team3.breakouts[].breakDate\` 와 \`teams.team3.dropped[].asOf\`(배제 판정의 기준 봉 날짜 — 실행일이 아니다)를 비교하라.
돌파 뒤에 50·150일선을 잃은 것은 데이터 오류가 아니라 **그 돌파가 무너졌다는 뜻**이다 —
"판단 보류"가 아니라 "돌파 실패, 후보에서 제외"라고 써라. 같은 날짜면 같은 세션의 일이다.

⚠️ **개수는 직접 세지 마라. Node 가 센 값을 그대로 써라.**
조사된 종목 수 = \`teams.team2.llmResearchedCount\` (그중 이월 = \`llmCarriedCount\`), 촉매 분류 수 = \`teams.team4.llmItemsCount\`,
돌파 = \`teams.team3.breakoutTotal\` (목록은 \`breakoutShown\` 개만) · 거래량 확인 = \`breakoutVolumeConfirmed\`,
차트확인 = \`teams.chartCheckTotal\`, 선정 종목 = \`teams.team2.picksTotal\`. 잘린 개수를 전체로 말하지 마라.

⚠️ **\`llmResearched\` / \`llmItems\` 가 있으면 그 종목들은 이미 조사된 것이다.**
"상승 이유는 조사되지 않았습니다" 라고 쓰지 마라 — 사실과 다르다. 조사 안 된 종목은
\`llmFailed\` 에 있거나 애초에 이 목록에 없는 종목뿐이고, 그 구분을 그대로 전달하라.
\`researchedOn\` 이 오늘이 아닌 항목은 그날 조사분을 이월한 것이다 — 필요하면 "N일 조사분"이라고 밝혀라.

\`flowCross\` 는 이 리포트의 핵심이다. \`inflow\`(돈이 들어오는 업종) 각각에
\`picks[]\` 가 붙어 있고 종목마다 \`d50\`(최근 두 달 평균 대비 이격) · \`d200\`(1년 평균 대비 이격) ·
\`stageKo\`(초입/선도/관성/눌림/과열/이탈) · \`tracking\` · \`breakout\` 이 있다.
**"돈이 몰리는 섹터에서 지금 어떤 종목이 강한지, 그런데 지금 사기 좋은 자리인지"를
반드시 이 데이터로 말하라.** \`outflow\` 는 돈이 빠지는 업종, \`pending\` 은 기대만 오른 업종이다.`
  : `## 1팀 시장환경
${JSON.stringify(T.team1 || {}, null, 1).slice(0, 4000)}

## 2팀 종목선정
${JSON.stringify(T.team2 || {}, null, 1).slice(0, 6000)}

## 3팀 추적
${JSON.stringify(T.team3 || {}, null, 1).slice(0, 4000)}

## 4팀 EP·촉매
${JSON.stringify(T.team4 || {}, null, 1).slice(0, 4000)}

## 5팀 주도섹터
${JSON.stringify(T.team5 || {}, null, 1).slice(0, 3000)}

## 자금 흐름 × 종목 교차
${JSON.stringify(T.flowCross || {}, null, 1).slice(0, 6000)}

## 오늘 차트를 봐야 할 종목
${JSON.stringify(T.chartCheck || [], null, 1).slice(0, 2000)}`

const CHIEF = { type: 'object', properties: {
  headline: { type: 'string', description: '오늘을 한 줄로' },
  marketVerdictKo: { type: 'string', description: '시장 국면 판단 + 자금 흐름(어디로 들어오고 어디서 빠지는지, 업종명과 종목 티커까지) + 포지션 지침. 문단 수·숫자 개수 제한 없음. 입력에 없는 사실로 채우지 마라' },
  todayFocus: { type: 'array', items: { type: 'object', properties: {
    ticker: { type: 'string' },
    reason: { type: 'string' },
    action: { type: 'string', description: '지금 뭘 해야 하는지 (관찰/차트확인/트리거대기/추격금지 등)' },
  }, required: ['ticker', 'reason', 'action'] }, description: '오늘 가장 주목할 종목 0~5개. 🔴 이고 볼 만한 셋업이 없으면 비워도 된다' },
  teamSummaries: { type: 'object', properties: {
    team1: { type: 'string' }, team2: { type: 'string' }, team3: { type: 'string' },
    team4: { type: 'string' }, team5: { type: 'string' },
  }, required: ['team1', 'team2', 'team3', 'team4', 'team5'] },
  chartCheckNote: { type: 'string', description: '오늘 눈으로 차트를 봐야 할 종목과 무엇을 볼지' },
  tomorrowWatch: { type: 'string' },
  // ⚠️ 프롬프트 규칙 7번은 caution 을 필수라고 말하는데 스키마에선 선택이었다. 어긋나 있었다.
  caution: { type: 'string', description: '이 리포트의 한계·불확실성 2~4문장. 조사 안 된 종목 · 근거 없는 항목 · 데이터 결함을 솔직히' },
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
5개 팀의 결과를 사용자에게 보고하세요.

${teamBlocks}

## 반드시 지킬 것
1. **입력 JSON 에 없는 티커·숫자·뉴스를 새로 만들지 마라.** 이게 가장 중요하다.
2. 근거가 '근거 없음'으로 표시된 항목은 그렇게 전달하라. 채워 넣지 마라.
3. 시장이 🔴 면 그 사실을 흐리지 마라. 신규 진입 부적합이면 그렇게 말하라.
4. todayFocus 는 0~5종목. 왜 주목하는지와 **지금 뭘 해야 하는지**를 함께. 볼 만한 셋업이 없으면 비워라.
5. chartCheckNote 는 "이 종목의 차트에서 무엇을 확인하라"를 구체적으로.
   (예: "PANW — 저항 $368.8 을 거래량 동반해 뚫는지, 뚫을 때 거래량이 20일 평균의 2배인지")
6. 사용자가 최종 판단자다. 단정적 매수 권유 대신 확인할 조건을 제시하라.
7. caution 에 이 리포트의 한계를 **솔직히** 적어라 (필수 항목이다).
   조사되지 않은 종목 수, '근거 없음'으로 남은 항목, 데이터 결함(dataNotice·barsNotice·unevaluated)을 숨기지 마라.
8. **marketVerdictKo 에는 "돈이 어디로 들어오고 어디서 빠지는지"를 반드시 넣어라.**
   업종 이름 + 그 안에서 지금 강한 종목 티커(flowCross.picks 의 d50·d200·stageKo 수치 그대로) + 지금 사기 좋은 자리인지까지.
   교차 결과가 비면 "이 업종에서 오늘 기준을 통과한 종목은 없습니다"라고 그대로 써라.
   **입력에 없는 사실로 분량을 채우지 마라** — 근거가 부족하면 짧게 끝내는 것이 낫다.
9. 1팀 news(digest·keyRisks)·2팀 theme·4팀 summary·5팀 summary 가 있으면 teamSummaries 에 그 내용을 반영하라 — 숫자만 보고 쓰지 마라.
   2팀 테마는 **기간별 차이를 구분해** 써라: 1M 에 새로 진입한 곳(theme.byPeriod.m1 · rotation.newEntrants)과
   6M 에만 남은 곳(byPeriod.m6 · rotation.fading), 세 기간 모두인 지속 주도(rotation.persistent, crossTop.persistent 의 D+N)를 나눠 말하라.
   teams.siteCondition 이 있으면 "사이트 시장국면: X" 를 QQQ 판정 옆에 한 번 병기하라(둘이 다르면 다르다고).
10. 업종 강도 변화율(F10d/F25d %)은 분모가 0 근처면 폭발한다. **크기가 아니라 순위 변동(frank25)으로 말하라.**

## 서술 기준 — 독자는 재무·회계 전공의 금융 실무자다
1. 눈높이를 낮추지 마라. 비유·초보자용 요약·"쉽게 말해" 식 풀이는 쓰지 않는다.
2. 표준 용어는 그대로 쓴다: YoY/QoQ, 가이던스, 컨센서스, EPS, FCF, 마진, 백로그, 크랙 스프레드, PIPE, 전환사채, 희석, 리레이팅, 밸류에이션, RS 백분위, ADR, 50/200일선 이격 등.
3. 이 시스템 고유 지표(WRS·VOL_X·CLS_POS·BBWTHD·F10d·Congestion)는 처음 한 번만 정의를 붙이고 이후엔 이름만 쓴다.
4. 원 수치를 생략하지 마라. 실적표·RS·WRS·이격·거래량 배수·가이던스 수치는 단위와 기간을 붙여 그대로 인용한다. 문단당 숫자 개수 제한은 없다.
5. 숫자는 입력 JSON 에 실제로 있는 것만 쓴다.
6. 구조: 결론 → 근거 → 반대 근거/리스크 → 확인할 조건. 매 문단 끝에 "그래서 무엇을 확인/실행할지"를 한 줄로.
7. 판단 근거를 밝히되 매수·매도 권유는 하지 않는다. "무엇이 확인되면 논리가 성립/붕괴하는지"로 끝낸다.
8. 한국어로 쓴다. 영문 고유명사·티커·지표명은 원문 그대로 둔다.`,
  { label: '실장종합', phase: '실장종합', schema: CHIEF, model: 'opus' }
)

if (!report) {
  log('❌ 실장 에이전트가 재시도 후에도 실패했습니다 — 빈 종합 대신 실패를 명시합니다')
  return { date, error: 'agent_failed' }
}

return { date, ...report }
