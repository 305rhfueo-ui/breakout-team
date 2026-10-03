export const meta = {
  name: 'bt-team6-deepdive',
  description: '6팀 관심 종목 심층 분석 — 뉴스·재무(CAN SLIM)·리스크·차트 관찰(쿨라매기 기준), 전부 출처 필수',
  whenToUse: 'start breakout 실행 시. 서준(6팀)이 고른 오늘 밤 관심 종목을 투자 전에 꼼꼼히 볼 수 있게 조사할 때',
  phases: [
    { title: '심층분석', detail: '종목별 1명 — 기준 문서 2장을 읽고 항목별 체크 + 서술 (제공 자료 우선, 부족분만 웹검색)' },
    { title: '팩트체크', detail: '출처 없는 주장 제거 (5종목 배치, 텍스트 대조만) · 서술문에서 지워진 숫자 제거' },
  ],
}
// 사용법: Workflow({ scriptPath: '<abs>/scripts/workflows/team6-deepdive.js',
//   args: <state/llm-in/_t6args.json 내용> })   — prepare-deepdive-args.js 가 만든다
//   { date, session, cap, model, argsDir, items:[{ticker,name,grade,sector,industry,price,pivot,stop,distToPivotPct,earnings,hasChart,hasDetail}], skipped }
// 2026-10-03 사용자 요청: "투자자가 최종적으로 투자하기 전에 볼 내용을 자세히". 차트는 쿨라매기 기준으로 '관찰'만(판정 금지),
// 재무는 CAN SLIM 기준. 두 기준은 docs/기준-*.md 에 있고 에이전트가 매번 읽는다 — 사용자가 문서를 고치면 그대로 반영된다.

let A = args
if (typeof A === 'string') { try { A = JSON.parse(A) } catch (e) { A = null } }
const date = (A && A.date) || 'today'
const items = (A && A.items) || []
const CAP = Number.isFinite(A && A.cap) ? A.cap : 10     // `|| 10` 이면 cap:0 이 10 으로 둔갑한다
const MODEL = (A && A.model) || 'opus'                    // 워크플로는 env 를 못 읽는다 — prepare 가 DEEP_MODEL 을 여기로 넘긴다
const argsDir = (A && A.argsDir) || null
const docsDir = (A && A.docsDir) || 'docs'               // 기준 문서 폴더 (절대경로 — 세션의 cwd 가 저장소가 아닐 수 있다)

if (!items.length) return { date, team: 6, items: [], failed: [], coverage: { done: 0, total: 0, cap: CAP, failed: 0 }, note: '관심 종목 없음' }

// 에이전트가 API 오류로 죽으면 agent() 가 null 을 준다. 1회만 다시 시도한다.
// ⚠️ 재시도 후에도 null 이면 그 종목을 조용히 버리지 말고 호출부가 실패로 표시할 수 있게 남긴다.
const tryAgent = async (p, o) => {
  const r = await agent(p, o)
  if (r) return r
  log(`재시도: ${o.label}`)
  return await agent(p, { ...o, label: `${o.label}#2` })
}

const SOURCE = { type: 'object', properties: {
  title: { type: 'string' }, publisher: { type: 'string' }, url: { type: 'string' }, date: { type: 'string' },
  // ⚠️ quote 를 required 로 걸되 "제공된 자료의 문장"도 인정한다. 그냥 필수로만 걸면 유료기사·국내 PDF 인용이 통째로 강등된다.
  quote: { type: 'string', description: '실제로 읽은 원문 문장 그대로. 웹에서 읽은 문장이거나 위에 제공된 자료(뉴스 제목·공시 내용·리포트 요약·실적 수치)의 문장. 둘 다 아니면 그 주장은 no_source 다. 요약하거나 번역하지 마라' },
}, required: ['title', 'publisher', 'url', 'date', 'quote'] }

const CLAIM = { type: 'object', properties: {
  id: { type: 'string' }, statement: { type: 'string' },
  evidence_level: { type: 'string', enum: ['sourced', 'no_source'] },
  sources: { type: 'array', items: SOURCE },
}, required: ['id', 'statement', 'evidence_level', 'sources'] }

const CHECK_ITEM = { type: 'object', properties: {
  item: { type: 'string', description: '기준 문서의 항목 이름 그대로 (예: "선행 상승", "C 최근 분기 이익")' },
  status: { type: 'string', enum: ['충족', '미충족', '확인 불가'] },
  evidence: { type: 'string', description: '근거 숫자 한 줄. 입력 JSON 의 숫자만 인용 (예: "선행 상승 132%, 베이스 8주"). 자료가 null 이면 "자료 없음"' },
}, required: ['item', 'status', 'evidence'] }

// ⚠️ 필드 이름은 index.html(서준 카드 deepBlock) 과 build-chief-report 가 읽는다. 이름은 두고 설명만 바꾼다.
const DEEP = { type: 'object', properties: {
  ticker: { type: 'string' },
  company: { type: 'string', description: '이 회사가 뭘 해서 돈을 버는지 2~3문장. 주 고객·주력 제품·최근 성장 축' },
  lead: { type: 'string', description: '3~4문장. ①지금 왜 관심 종목인지(한 줄 결론) ②가장 강한 근거 ③가장 큰 걱정 ④무엇이 확인되면 이 그림이 깨지는지. 아래 근거(recentNews·financials·risks)의 요약이어야 하며 근거에 없는 사실·숫자를 넣지 마라' },
  newsNarrative: { type: 'string', description: '최근 1~2달 뉴스 흐름을 3~4문장의 이야기로. 무슨 일이 왜 있었고 주가에 어떻게 이어졌는지. recentNews 의 요약이어야 하며 거기 없는 숫자를 넣지 마라' },
  recentNews: { type: 'array', items: CLAIM, description: '최근 1~2달 뉴스·공시·리포트 근거 최대 6개. 각 항목 출처 필수. 제공된 뉴스·8-K·국내 리포트 요약을 근거로 써도 된다(가장 안전하다)' },
  financialsNarrative: { type: 'string', description: '3~4문장. 매출·이익이 어느 방향으로 가고 있고 그게 무슨 뜻인지 쉬운 말로. 숫자는 단위·기간을 붙여 2~3개. financials 의 요약이어야 하며 거기 없는 숫자를 넣지 마라' },
  financials: { type: 'object', properties: {
    revenueTrend: { type: 'array', items: CLAIM, description: '매출 추세 근거 최대 2개 (SEC 실적표 인용 가능)' },
    profitTrend: { type: 'array', items: CLAIM, description: '이익 추세 근거 최대 2개. 적자→흑자 전환이면 그렇게' },
    guidance: { type: 'array', items: CLAIM, description: '회사 가이던스(다음 분기·연간 전망) 근거 최대 2개. 없으면 빈 배열' },
    estimateRevisions: { type: 'object', properties: {
      direction: { type: 'string', enum: ['raised', 'lowered', 'mixed', 'none', 'unknown'] },
      claims: { type: 'array', items: CLAIM, description: '증권사 전망치 변화 근거 최대 2개. 확인 안 되면 direction:"unknown", claims:[]' },
    }, required: ['direction', 'claims'] },
  }, required: ['revenueTrend', 'profitTrend', 'guidance', 'estimateRevisions'] },
  canslim: { type: 'array', items: CHECK_ITEM, description: 'docs/기준-CANSLIM-재무.md 의 C·A·N·S·L·I·M 순서로 7개. item 은 "C 최근 분기 이익" 처럼 글자+이름. I 는 항상 "확인 불가". C·A 의 evidence 에는 "(순이익 기준, 주식 수 변동 미반영)" 을 붙인다' },
  risks: { type: 'array', items: CLAIM, description: '출처 있는 리스크 최대 4개 — 실적 둔화·증자·소송·규제·고객 이탈 등 실제 보도된 것. 비어 있어도 정상 — 칸을 채우려고 지어내지 마라' },
  structuralRisks: { type: 'array', items: { type: 'string' }, description: '사업 구조상 늘 있는 위험 최대 3개 (고객 집중·단일 제품·규제 산업 등). 제공 자료나 웹에서 확인된 것만, 숫자 없이 한 문장씩. 없으면 빈 배열' },
  chartCheck: { type: 'array', items: CHECK_ITEM, description: 'docs/기준-쿨라매기-차트.md 표의 11개 항목을 그 순서대로. evidence 는 입력 JSON 의 plan.metrics·chart.numbers 숫자만' },
  chartObservation: { type: 'object', properties: {
    base: { type: 'string', description: '횡보 구간 관찰 2~3문장: 몇 주째인지, 저점이 높아지는지, 깊이가 어느 정도인지. 숫자는 plan.metrics 에서' },
    volume: { type: 'string', description: '거래량 관찰 2~3문장: 횡보 중 줄었는지, 최근 10봉에서 늘어난 날이 있는지. 숫자는 chart.numbers·last10 에서' },
    position: { type: 'string', description: '현재가가 피벗(넘으면 사는 선)·예비 손절·10일선 대비 어디 있는지 2~3문장. 숫자는 plan 에서' },
    maStack: { type: 'string', description: '이평선 배열 관찰 1~2문장: 가격이 20·50·150일선 위인지, 선들이 오르는지' },
    note: { type: 'string', description: '그림(PNG)을 보고 숫자와 다르게 보이는 점이 있으면 1~2문장. 없으면 "그림과 숫자가 일치한다". 차트가 없으면 "차트 없음"' },
  }, required: ['base', 'volume', 'position', 'maStack', 'note'] },
  entryChecklist: { type: 'array', items: { type: 'string' }, description: '"무엇이 확인되면" 형식 3~5개. 매수 전 사용자가 직접 확인할 조건 (예: "피벗 $196.72 를 거래량 20일 평균 2배 이상으로 종가 돌파하는지"). 매수 권유 문장 금지' },
  earningsRisk: { type: 'string', description: '실적 발표 일정과 그 위험 1~2문장. plan.earnings 가 있으면 날짜를 쓰고, 없으면 "확정된 실적 발표 일정 없음(달력 기준)"' },
  confidence: { type: 'string', enum: ['high', 'medium', 'low'], description: '근거의 충실도' },
}, required: ['ticker', 'company', 'lead', 'newsNarrative', 'recentNews', 'financialsNarrative', 'financials', 'canslim', 'risks', 'chartCheck', 'chartObservation', 'entryChecklist', 'earningsRisk', 'confidence'] }

const STYLE = `
## 서술 기준 — 독자는 주식 투자를 하는 일반인이다 (2026-10-02 사용자 결정)
1. 한 문장은 한 가지 내용만, 60~80자. 칸마다 정해진 문장 수 상한을 넘기지 마라.
   짧게 쓰되 **무슨 일이 왜 일어났고 그래서 뭐가 달라지는지**는 반드시 쓴다 — 사실만 나열하고 이유·영향을 빼면 읽는 사람이 이해하지 못한다.
   빼야 할 것은 작업 경위("제공 자료에", "본문 403")와 당연한 말뿐이다.
2. 결론부터. 첫 문장만 읽어도 "그래서 뭐가 중요한지"가 보이게 쓴다.
3. 숫자는 결론을 받치는 핵심만. 같은 숫자를 칸마다 반복하지 마라. 쓸 때는 단위·기간을 붙인다(예: "분기 매출 1.7억 달러, 1년 전보다 55% 증가").
4. 전문 용어는 꼭 필요할 때만, 처음 나올 때 괄호로 풀어 준다.
   예: "가이던스(회사가 내놓은 다음 분기 전망)", "컨센서스(증권사 예상치 평균)", "희석(새 주식 발행으로 기존 주주 몫이 줄어듦)", "피벗(넘으면 사는 선)".
5. 이 시스템 지표 이름(WRS·FRANK·VOL_X·CLS_POS·BBWTHD·frank25·stageKo·d50·d200·dryUpRatio·priorMovePct)과 입력 JSON 의 키 이름을 문장에 쓰지 마라.
   뜻으로 바꿔 쓴다: d50 → "두 달 평균보다 N% 위", FRANK 3위 → "업종 순위 3위", dryUpRatio 0.6 → "최근 1주 거래량이 한 달 평균의 0.6배".
6. 영어 업종 이름은 한국어로(Semiconductors → 반도체). 회사명·티커는 원문 그대로. 영어 문장을 섞지 마라.
7. 서술문에는 작업 과정을 쓰지 않는다. "제공 자료에 없다", "입력에 없다", "Node", "본문 403" 같은 설명 금지.
   (체크표의 status "확인 불가" 는 예외 — 그건 값이다.) 서술에서 모르는 것은 그냥 쓰지 않는다.
8. 숫자는 quote 나 제공 자료에 실제로 있는 것만 쓴다. 분량을 채우려고 추측하지 마라.
9. 매수·매도 권유는 하지 않는다. 대신 "무엇이 확인되면 이 이야기가 맞고/틀린지"로 끝낸다.`

const RULES = `
반드시 지킬 것 (어기면 결과를 폐기한다):
1. **제공된 자료(뉴스·8-K·국내 리포트 요약·SEC 실적표)에서 먼저 근거를 채우고**, 그래도 부족한 항목만 웹검색한다.
   웹검색·페이지 열람은 종목당 최대 8회. 공신력 있는 언론·공시·증권사 리포트만.
2. 웹검색으로 실제 확인한 내용만 쓴다. 기억에 의존하지 마라.
3. 모든 주장에 실제 접속 가능한 원문 URL 을 붙인다. **URL 을 만들어내지 마라.** 검색결과 페이지는 출처가 아니다.
4. 근거를 못 찾으면 evidence_level:"no_source", statement:"근거 없음", sources:[] 로 반환한다. **추측으로 채우지 마라.**
5. 서술문(lead·newsNarrative·financialsNarrative)은 근거(claims)의 요약이다. 근거에 없는 숫자·사실을 서술문에만 넣으면 안 된다.
6. **차트는 판정하지 않는다 — 관찰만.** "사기 좋은 자리", "돌파 실패", "리테스트", "눌림목", "셋업 완성", "곧 터진다" 같은 결론 어휘 금지.
   그림에서 눈으로 읽은 가격·이평선 값을 쓰지 마라. 숫자는 전부 입력 JSON 의 \`plan.metrics\`·\`chart.numbers\`·\`chart.last10\` 에서 인용한다.
   PNG 는 숫자가 맞는지 모양으로 확인하는 용도다(횡보 구간이 보이는지, 거래량 막대가 줄어드는지).
7. Node 가 확정한 수치(현재가·피벗·손절·거리·등급·실적일·업종 흐름)는 바꾸지 마라. 해석만 하라.
${STYLE}`

phase('심층분석')
const targets = items.slice(0, CAP)
const researched = await parallel(targets.map((it) => () => {
  const file = `${argsDir}/${it.ticker}.json`
  const pngs = it.hasChart ? `그다음 **Read 도구로 차트 그림 두 장을 봐라**: \`${argsDir}/${it.ticker}-3m.png\` (3개월, 10·20·50일선) · \`${argsDir}/${it.ticker}-6m.png\` (6개월, 20·50·150일선).
   주황 점선 PIVOT = 넘으면 사는 선, 빨간 점선 STOP = 예비 손절.` : `차트 그림은 없다. chartObservation.note 에 "차트 없음" 이라고 쓰고 나머지 관찰은 숫자(plan.metrics·chart.numbers)로만 한다.`
  return tryAgent(
    `당신은 서준(6팀)이 고른 오늘 밤 관심 종목을 투자자가 최종 결정 전에 꼼꼼히 볼 수 있게 조사하는 담당자입니다. 독자는 일반 투자자입니다. 오늘은 ${date}.
종목: ${it.ticker}${it.name ? ` (${it.name})` : ''} · ${it.sector} / ${it.industry} · 등급 ${it.grade}

## 순서 — 반드시 이 순서로
1. **가장 먼저 Read 도구로 기준 문서 두 장을 읽어라**: \`${docsDir}/기준-쿨라매기-차트.md\` (차트 관찰 11개 항목) · \`${docsDir}/기준-CANSLIM-재무.md\` (C·A·N·S·L·I·M).
   체크표(chartCheck·canslim)는 그 문서의 항목 순서와 판정 요령을 그대로 따른다.
2. **Read 도구로 종목 자료를 읽어라**: \`${file}\` — ${it.ticker} 전용이다. 그 안의
   \`plan\`(피벗·손절·베이스 지표) · \`site\`(RS·컨센서스·52주 고점) · \`flow\`(업종 자금 흐름) · \`eye\`(차트확인 플래그) ·
   \`detail.financials\`(SEC 분기 실적) · \`detail.news\`(이 종목 직접 언급 기사) · \`detail.filings\`(8-K) · \`detail.krReports\`(국내 증권사 리포트 요약·PDF 링크) ·
   \`chart.numbers\`·\`chart.last10\`(차트 숫자) · \`market\`(한별 시장 판정). **여기 있는 숫자는 절대 바꾸지 마라.**
3. ${pngs}
4. 제공 자료로 부족한 것만 웹검색(최대 8회) — 최근 1~2달 뉴스, 가이던스, 증권사 전망 변화, 증자·소송 같은 리스크.

## Node 가 확정한 수치 (바꾸지 마라)
현재가 ${it.price} · 피벗 ${it.pivot} (${it.distToPivotPct}%) · 예비 손절 ${it.stop} · 등급 ${it.grade} · 실적 발표 ${it.earnings ? JSON.stringify(it.earnings) : '달력에 없음'}${it.hasDetail ? '' : '\n⚠️ 실적·뉴스·공시 자료를 수집하지 못한 종목이다. 웹검색으로 채우되 quote 와 URL 없는 숫자는 쓰지 마라.'}

## 할 일
스키마의 각 필드를 채운다. 분량·조건은 스키마 설명을 따른다. 순서:
company → newsNarrative·recentNews → financialsNarrative·financials → canslim(7개) → risks·structuralRisks → chartCheck(11개)·chartObservation → entryChecklist → earningsRisk → lead(마지막에, 전체 요약) → confidence
${RULES}`,
    { label: `심층:${it.ticker}`, phase: '심층분석', schema: DEEP, model: MODEL }
  )
}))

phase('팩트체크')
const clean = researched.filter(Boolean)
// ⚠️ 반환값의 ticker 로 대조하지 마라 — 모델이 입력값을 그대로 준다는 보장이 없다. parallel 은 입력 순서를 보존하므로 인덱스로 판정한다.
const failed = targets.filter((t, i) => !researched[i]).map((t) => t.ticker)
if (failed.length) log(`⚠️ 심층 분석 실패 ${failed.length}종목: ${failed.join(', ')}`)
// 입력 티커를 결과에 강제한다 (모델이 바꿔 쓴 티커가 병합 키로 새지 않게)
targets.forEach((t, i) => { if (researched[i]) researched[i].ticker = t.ticker })

const BATCH = 5
const batches = []
for (let i = 0; i < clean.length; i += BATCH) batches.push(clean.slice(i, i + BATCH))

const CHECK = { type: 'object', properties: { results: { type: 'array', items: {
  type: 'object', properties: {
    idx: { type: 'number', description: '입력 배열의 idx 를 그대로' },
    ticker: { type: 'string' },
    verdict: { type: 'string', enum: ['pass', 'partial', 'reject'] },
    removed_claim_ids: { type: 'array', items: { type: 'string' } },
    // 서술문은 근거의 요약이다 — 근거가 지워지면 서술문의 그 문장도 빠져야 한다 (2026-08-14 2·5팀 실측 구멍)
    correctedLead: { type: 'string', description: '제거한 주장의 숫자·사실이 lead 에도 있으면 그 문장을 뺀 lead. 뺄 것이 없으면 빈 문자열' },
    correctedNewsNarrative: { type: 'string', description: '같은 방식으로 고친 newsNarrative. 뺄 것이 없으면 빈 문자열' },
    correctedFinancialsNarrative: { type: 'string', description: '같은 방식으로 고친 financialsNarrative. 뺄 것이 없으면 빈 문자열' },
    reasons: { type: 'array', items: { type: 'string' } },
  }, required: ['idx', 'ticker', 'verdict', 'removed_claim_ids'],
} } }, required: ['results'] }

const claimsOf = (x) => [...(x.recentNews || []), ...(x.risks || []),
  ...(((x.financials || {}).revenueTrend) || []), ...(((x.financials || {}).profitTrend) || []), ...(((x.financials || {}).guidance) || []),
  ...((((x.financials || {}).estimateRevisions || {}).claims) || [])]

const checks = await parallel(batches.map((b, i) => () => tryAgent(
  `다음 종목 심층 분석 결과를 검증하세요. 오늘은 ${date}.
**웹에 접근하지 말고** 아래 텍스트(statement·quote·출처 제목)만 대조하라.

${JSON.stringify(b.map((x, idx) => ({ idx, ticker: x.ticker, lead: x.lead, newsNarrative: x.newsNarrative, financialsNarrative: x.financialsNarrative, claims: claimsOf(x) })), null, 1)}

각 claim 에 대해 다음을 확인하고, 문제가 있으면 removed_claim_ids 에 넣으세요:
- **statement 안의 숫자·날짜가 quote 나 출처 제목에 실제로 있는가?** 없으면 제거하라. 분량을 늘리려고 그럴듯한 수치를 지어내는 것이 가장 위험하다.
- 단위 환산: 1 billion = 10억, 1 million = 100만 ($64.1 billion = 641억 달러). SEC 실적표의 생숫자도 같다(revenue 182175000 = 1.82억 달러 · yoy 11 = 11% 증가).
  **환산·표기만 다르고 값이 같으면 정상이다 — 지우지 마라.** (2026-10-03 시험: 이 규칙이 없을 때 정확한 매출 근거 2건을 지웠다)
- 출처가 그 주장을 실제로 뒷받침하는가 (제목·발행처가 무관하면 제거)
- 다른 회사 기사를 이 종목 근거로 쓰지 않았는가
- 날짜가 "최근"을 설명하기에 너무 오래되지 않았는가 (6개월 초과면 의심)
- evidence_level 이 'sourced' 인데 sources 가 비어있지 않은가
- 리스크가 근거 없이 "~할 수 있다" 식으로 채워져 있으면 제거하라. 지어낸 리스크는 없느니만 못하다.

⚠️ **마지막으로 세 서술문(lead·newsNarrative·financialsNarrative)을 검사하라.** 서술문은 근거의 요약이므로,
위에서 제거하기로 한 주장의 숫자·사실이 서술문에도 들어 있으면 **근거는 지워졌는데 요약문만 살아남는다.**
그런 문장이 있으면 corrected* 에 **그 문장을 뺀 서술문**을 다시 써라. 남은 근거만으로 다시 쓰고 **새 사실을 넣지 마라.** 뺄 것이 없으면 빈 문자열.
고친 서술문은 문장 흐름이 자연스러워야 한다 — 앞 문장을 뺐으면 "그런데", "같은 분기" 같은 이어주는 말도 정리하라.

results 의 각 항목에 입력의 idx 를 그대로 넣어라. 의심스러우면 제거하는 쪽을 택하세요.`,
  { label: `팩트체크:${i + 1}/${batches.length}`, phase: '팩트체크', schema: CHECK, model: 'haiku' }
)))

// 팩트체크 적용 — 배치 내 위치(idx)로 대조하고, 못 찾으면 'unchecked' 로 표시해 "검증됨"과 구분한다.
const checkFor = new Map()
checks.forEach((c, bi) => { for (const r of ((c && c.results) || [])) { const k = Number(r.idx); if (Number.isInteger(k)) checkFor.set(`${bi}:${k}`, r) } })
batches.forEach((b, bi) => b.forEach((s, idx) => {
  const r = checkFor.get(`${bi}:${idx}`)
  if (!r) { s.factcheck = { verdict: 'unchecked', removed: [], reasons: ['팩트체크 결과를 대조하지 못했다 — 검증되지 않았다'] }; log(`⚠️ 팩트체크 미대조: ${s.ticker}`); return }
  const rm = new Set(r.removed_claim_ids || [])
  s.factcheck = { verdict: r.verdict, removed: [...rm], reasons: r.reasons || [] }
  const keep = (arr) => (arr || []).filter((c) => !rm.has(c.id))
  s.recentNews = keep(s.recentNews); s.risks = keep(s.risks)
  const f = s.financials || {}
  f.revenueTrend = keep(f.revenueTrend); f.profitTrend = keep(f.profitTrend); f.guidance = keep(f.guidance)
  if (f.estimateRevisions) f.estimateRevisions.claims = keep(f.estimateRevisions.claims)
  s.financials = f
  if (!rm.size) return
  const fix = (field, corrected) => {
    const cl = String(corrected || '').trim()
    if (cl.length > 20 && cl !== s[field]) { s[`${field}Original`] = s[field]; s[field] = cl; s.factcheck[`${field}Fixed`] = true }
  }
  fix('lead', r.correctedLead); fix('newsNarrative', r.correctedNewsNarrative); fix('financialsNarrative', r.correctedFinancialsNarrative)
  // 근거가 전부 지워졌는데 고친 서술이 없으면 원래 서술은 근거 없는 요약이다 — 남기지 않는다
  if (!claimsOf(s).length && !s.factcheck.leadFixed) { s.leadOriginal = s.lead; s.lead = `근거 없음 — 출처 검증을 통과한 내용이 없다 (${rm.size}개 주장 제거)`; s.factcheck.leadFixed = true }
}))

return {
  date, team: 6, items: clean, failed,
  coverage: { done: clean.length, total: items.length, cap: CAP, failed: failed.length },
  factcheckBatches: batches.length,
}
