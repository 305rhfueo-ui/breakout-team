export const meta = {
  name: 'bt-team5-sector',
  description: '5팀 주도 섹터/업종 — WRS 상위 2% 업종이 왜 강한지 출처 기반 분석',
  whenToUse: 'start breakout 실행 시. WRS 상위 업종의 강세 사유를 조사할 때',
  phases: [
    { title: '업종분석', detail: '상위 업종별 강세 사유 (웹검색, 출처 필수)' },
    { title: '종합', detail: '섹터 로테이션 해석' },
  ],
}
// 사용법: Workflow({ scriptPath:'<abs>/scripts/workflows/team5-sector.js',
//   args:{ date, industries:[{key,sector,industry,wrs,rankPct,count,members}], cap } })

let A = args
if (typeof A === 'string') { try { A = JSON.parse(A) } catch (e) { A = null } }
const date = (A && A.date) || 'today'
const industries = (A && A.industries) || []
const CAP = Number.isFinite(A && A.cap) ? A.cap : 6      // `|| 6` 이면 cap:0 이 6 으로 둔갑한다

// 에이전트가 죽으면 1회만 다시 시도한다. 그래도 실패하면 실패로 남긴다.
const tryAgent = async (p, o) => {
  const r = await agent(p, o)
  if (r) return r
  log(`재시도: ${o.label}`)
  return await agent(p, { ...o, label: `${o.label}#2` })
}

const SOURCE = { type: 'object', properties: {
  title: { type: 'string' }, publisher: { type: 'string' }, url: { type: 'string' }, date: { type: 'string' }, quote: { type: 'string' },
}, required: ['title', 'publisher', 'url', 'date'] }

const CLAIM = { type: 'object', properties: {
  id: { type: 'string' }, statement: { type: 'string' },
  evidence_level: { type: 'string', enum: ['sourced', 'no_source'] },
  sources: { type: 'array', items: SOURCE },
}, required: ['id', 'statement', 'evidence_level', 'sources'] }

const IND = { type: 'object', properties: {
  key: { type: 'string' }, industry: { type: 'string' },
  whyStrong: { type: 'array', items: CLAIM, description: '이 업종이 강한 이유. 각 항목 출처 필수' },
  driver: { type: 'string', enum: ['earnings', 'policy', 'macro', 'technology', 'commodity', 'rotation', 'unknown'] },
  durability: { type: 'string', enum: ['structural', 'cyclical', 'short_term', 'unknown'], description: '구조적인가 일시적인가' },
  keyStocks: { type: 'array', items: { type: 'string' } },
  risk: { type: 'string' },
}, required: ['key', 'industry', 'whyStrong', 'driver', 'durability'] }

const RULES = `
반드시 지킬 것:
1. 웹검색으로 실제 확인한 것만. 기억에 의존하지 마라.
2. 모든 주장에 접속 가능한 원문 URL. **URL 을 만들어내지 마라.**
3. 근거를 못 찾으면 evidence_level:"no_source", statement:"근거 없음", sources:[]. **추측 금지.**
4. 검색결과 페이지는 출처가 아니다.
5. ⚠️ 국내 매체(연합인포맥스/써치엠글로벌)를 인용할 때는 원출처를 2단으로 밝혀라.
   그 매체들은 해외 IB 코멘터리를 옮긴 것이 많다.
   예: "연합인포맥스 경유 · 원출처: 미즈호". 원출처가 불명이면 그렇게 적어라.
6. 아래 WRS 수치는 Node 가 확정한 것이다. 바꾸지 마라.`

phase('업종분석')
const targets = industries.slice(0, CAP)
const analyzed = await parallel(targets.map((x) => () => tryAgent(
  `당신은 섹터 로테이션을 분석하는 전략가입니다. 오늘은 ${date}.

## 대상 업종 (Node 확정 수치 — 바꾸지 마라)
${x.sector} / ${x.industry}
WRS 1개월 ${x.wrs?.m1} (상위 ${x.rankPct?.m1}%) · 3개월 ${x.wrs?.m3} (상위 ${x.rankPct?.m3}%) · 6개월 ${x.wrs?.m6} (상위 ${x.rankPct?.m6}%)
업종 내 종목수 ${x.count}
※ WRS = 업종 내 시총가중 평균 RS(QQQ 대비 초과수익률). 0 이면 QQQ 와 동일.
   1개월·3개월 WRS 는 사이트에 없어 동일 공식으로 자체 계산한 값이다.
이 업종에서 2팀이 선정한 종목: ${(x.members || []).join(', ') || '없음'}

## 할 일
웹검색으로 **이 업종이 최근 왜 강한지**를 조사하세요.
공신력 있는 언론·투자은행·증권사 리포트를 근거로 삼으세요.
- whyStrong: 2~4개 항목, 각각 출처 필수
- driver: 무엇이 이끄는가 (실적/정책/매크로/기술/원자재/단순 로테이션)
- durability: 구조적인가 순환적인가 단기인가
- keyStocks: 이 업종의 핵심 종목
- risk: 이 강세가 꺾일 조건

${RULES}
한글로 작성하세요.`,
  { label: `업종:${String(x.industry).slice(0, 18)}`, phase: '업종분석', schema: IND, model: 'sonnet' }
)))

phase('종합')
const SUM = { type: 'object', properties: {
  rotationView: { type: 'string', description: '지금 자금이 어디서 어디로 움직이는지 한 문단' },
  strongest: { type: 'object', properties: { industry: { type: 'string' }, why: { type: 'string' } }, required: ['industry', 'why'] },
  emerging: { type: 'array', items: { type: 'string' }, description: '1개월 WRS 가 6개월보다 좋은 신흥 강세 업종' },
  fading: { type: 'array', items: { type: 'string' }, description: '6개월은 좋은데 1개월이 꺾인 업종' },
  caution: { type: 'string' },
}, required: ['rotationView', 'strongest'] }

const clean = analyzed.filter(Boolean)
// 재시도까지 하고도 결과가 없는 업종 = 실패. 식별자는 key 다.
const gotKeys = new Set(clean.map((x) => x.key))
const failed = targets.filter((t) => !gotKeys.has(t.key)).map((t) => t.key)
if (failed.length) log(`⚠️ 업종 조사 실패 ${failed.length}건: ${failed.join(', ')}`)

const summary = await tryAgent(
  `오늘(${date}) 주도 업종을 종합하세요.

## Node 확정 WRS (기간 비교로 로테이션을 읽어라)
⚠️ researched:false 인 업종은 **조사가 안 됐다.** WRS 숫자로 순위·로테이션을 말하는 건 되지만,
   그 업종이 "왜" 강한지는 절대 지어내지 마라. 근거가 필요한 서술에서는 빼라.
${JSON.stringify(targets.map((x) => ({
    industry: x.industry, sector: x.sector, wrs: x.wrs, rankPct: x.rankPct,
    researched: gotKeys.has(x.key),
  })), null, 1)}

## 업종별 조사 결과 (근거는 여기 있는 것만 쓴다)
${JSON.stringify(clean.map((x) => ({ industry: x.industry, driver: x.driver, durability: x.durability, why: (x.whyStrong || []).map((c) => c.statement) })), null, 1)}

- emerging: **1개월 WRS 가 6개월보다 뚜렷이 높은** 업종 = 새로 돈이 들어오는 곳
- fading: 6개월은 상위인데 1개월이 꺾인 업종 = 빠져나가는 곳
입력에 없는 업종이나 사실을 만들지 마라. 한글로.`,
  { label: '섹터종합', phase: '종합', schema: SUM, model: 'opus' }
)

return { date, team: 5, industries: clean, summary, failed,
  coverage: { done: clean.length, total: industries.length, cap: CAP, failed: failed.length } }
