export const meta = {
  name: 'bt-chief-report',
  description: '실장 종합 — 5개 팀 결과를 한국어 리포트로 병합',
  whenToUse: 'start breakout 의 마지막 단계. 팀별 결과를 사용자에게 보고할 때',
  phases: [{ title: '실장종합', detail: '5팀 결과 병합 + 오늘의 포커스' }],
}
// 사용법: Workflow({ scriptPath:'<abs>/scripts/workflows/chief-report.js', args:{ date, teams:{...} } })

let A = args
if (typeof A === 'string') { try { A = JSON.parse(A) } catch (e) { A = null } }
const date = (A && A.date) || 'today'
const T = (A && A.teams) || {}

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
const report = await agent(
  `당신은 투자 리서치팀의 실장입니다. 오늘은 ${date}.
5개 팀의 결과를 사용자에게 보고하세요.

## 1팀 시장환경
${JSON.stringify(T.team1 || {}, null, 1).slice(0, 4000)}

## 2팀 종목선정
${JSON.stringify(T.team2 || {}, null, 1).slice(0, 6000)}

## 3팀 추적
${JSON.stringify(T.team3 || {}, null, 1).slice(0, 4000)}

## 4팀 EP·촉매
${JSON.stringify(T.team4 || {}, null, 1).slice(0, 4000)}

## 5팀 주도섹터
${JSON.stringify(T.team5 || {}, null, 1).slice(0, 3000)}

## 오늘 차트를 봐야 할 종목
${JSON.stringify(T.chartCheck || [], null, 1).slice(0, 2000)}

## 반드시 지킬 것
1. **입력 JSON 에 없는 티커·숫자·뉴스를 새로 만들지 마라.** 이게 가장 중요하다.
2. 근거가 '근거 없음'으로 표시된 항목은 그렇게 전달하라. 채워 넣지 마라.
3. 시장이 🔴 면 그 사실을 흐리지 마라. 신규 진입 부적합이면 그렇게 말하라.
4. todayFocus 는 3~5종목. 왜 주목하는지와 **지금 뭘 해야 하는지**를 함께.
5. chartCheckNote 는 "이 종목의 차트에서 무엇을 확인하라"를 구체적으로.
   (예: "PANW — 저항 $368.8 을 거래량 동반해 뚫는지, 뚫을 때 거래량이 20일 평균의 2배인지")
6. 사용자가 최종 판단자다. 단정적 매수 권유 대신 확인할 조건을 제시하라.
7. caution 에 이 리포트의 한계를 솔직히 적어라.

중학생도 이해할 수 있는 쉬운 한국어로 작성하세요.`,
  { label: '실장종합', phase: '실장종합', schema: CHIEF, model: 'opus' }
)

return { date, ...report }
