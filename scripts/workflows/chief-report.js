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
JSON 구조: \`teams.team1\`(시장환경) · \`teams.team2\`(종목선정) · \`teams.team3\`(추적) ·
\`teams.team4\`(EP·촉매) · \`teams.team5\`(주도섹터 + \`llmIndustries\` 강세 근거) ·
\`teams.chartCheck\`(오늘 차트 볼 종목) · \`teams.flowCross\`(자금이 들어오는 업종 × 그 안의 실제 종목).

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
  marketVerdictKo: { type: 'string', description: '시장 환경 3~4문장, 쉬운 말로' },
  todayFocus: { type: 'array', items: { type: 'object', properties: {
    ticker: { type: 'string' },
    reason: { type: 'string' },
    action: { type: 'string', description: '지금 뭘 해야 하는지 (관찰/차트확인/트리거대기 등)' },
  }, required: ['ticker', 'reason', 'action'] }, description: '오늘 가장 주목할 3~5종목' },
  teamSummaries: { type: 'object', properties: {
    team1: { type: 'string' }, team2: { type: 'string' }, team3: { type: 'string' },
    team4: { type: 'string' }, team5: { type: 'string' },
  }, required: ['team1', 'team2', 'team3', 'team4', 'team5'] },
  chartCheckNote: { type: 'string', description: '오늘 눈으로 차트를 봐야 할 종목과 무엇을 볼지' },
  tomorrowWatch: { type: 'string' },
  caution: { type: 'string', description: '이 리포트의 한계·불확실성' },
}, required: ['headline', 'marketVerdictKo', 'todayFocus', 'teamSummaries', 'chartCheckNote'] }

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
4. todayFocus 는 3~5종목. 왜 주목하는지와 **지금 뭘 해야 하는지**를 함께.
5. chartCheckNote 는 "이 종목의 차트에서 무엇을 확인하라"를 구체적으로.
   (예: "PANW — 저항 $368.8 을 거래량 동반해 뚫는지, 뚫을 때 거래량이 20일 평균의 2배인지")
6. 사용자가 최종 판단자다. 단정적 매수 권유 대신 확인할 조건을 제시하라.
7. caution 에 이 리포트의 한계를 솔직히 적어라.
8. **marketVerdictKo 에 "돈이 어디로 들어오고 어디서 빠지는지"를 반드시 넣어라.**
   업종 이름 + 그 안에서 지금 강한 종목 티커 + 지금 사기 좋은 자리인지까지.
   교차 결과가 비면 "이 업종에서 오늘 기준을 통과한 종목은 없습니다"라고 그대로 써라.

## 말하는 방식 (사용자가 반복해서 요구한 것)
- 영문 약어를 그냥 쓰지 마라. **뜻을 먼저 쓰고 이름은 괄호로**:
  "1년 평균 가격보다 27% 위에 있습니다(200일선 이격)" — 그냥 "200DIV 27" 은 금지.
  F10d·WRS·ADR·CLS_POS·BBWTHD 도 마찬가지다.
- 한 문단에 숫자를 5개 이상 늘어놓지 마라.
- "모멘텀 가속"·"리레이팅"·"밸류에이션 부담" 같은 업계 용어를 설명 없이 쓰지 마라.
- 비유를 하나 이상 써라 (예: 1년 평균에서 얼마나 위로 떠 있나).
- **매 문단 끝에 "그래서 뭘 하라는 건지"를 한 줄로** 붙여라.
- 업종 강도 변화율(%)은 나누는 값이 0에 가까우면 숫자가 터진다. **크기가 아니라 순위 변동으로 말하라.**

중학생도 이해할 수 있는 쉬운 한국어로 작성하세요.`,
  { label: '실장종합', phase: '실장종합', schema: CHIEF, model: 'opus' }
)

if (!report) {
  log('❌ 실장 에이전트가 재시도 후에도 실패했습니다 — 빈 종합 대신 실패를 명시합니다')
  return { date, error: 'agent_failed' }
}

return { date, ...report }
