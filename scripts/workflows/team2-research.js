export const meta = {
  name: 'bt-team2-research',
  description: '2팀 종목 리서치 — 상승 이유 + 증권사 실적 전망치 조정, 전부 출처 URL 필수',
  whenToUse: 'start breakout 실행 시. 2팀이 선정한 종목의 상승 이유와 테마를 사실 기반으로 조사할 때',
  phases: [
    { title: '종목리서치', detail: '종목별 상승 이유 · 추정치 조정 (웹검색, 출처 필수)' },
    { title: '팩트체크', detail: '출처 없는 주장 제거 (6종목 배치)' },
    { title: '테마종합', detail: 'Node 가 확정한 클러스터 위에서 공통 테마 해석' },
  ],
}
// 사용법: Workflow({ scriptPath: '<abs>/scripts/workflows/team2-research.js',
//   args: { date:'YYYY-MM-DD', picks:[{ticker,sector,industry,...,detail:{...}}], clusters:[...] } })

let A = args
if (typeof A === 'string') { try { A = JSON.parse(A) } catch (e) { A = null } }
const date = (A && A.date) || 'today'
const picks = (A && A.picks) || []
const clusters = (A && A.clusters) || []
const CAP = (A && A.cap) || 20

// ── 환각 0 스키마 ──
const SOURCE = { type: 'object', properties: {
  title: { type: 'string' }, publisher: { type: 'string' },
  url: { type: 'string' }, date: { type: 'string' },
  quote: { type: 'string', description: '근거가 되는 원문 문장 1개. 번역하지 말고 원문 그대로.' },
}, required: ['title', 'publisher', 'url', 'date'] }

const CLAIM = { type: 'object', properties: {
  id: { type: 'string' },
  statement: { type: 'string' },
  evidence_level: { type: 'string', enum: ['sourced', 'no_source'] },
  sources: { type: 'array', items: SOURCE },
}, required: ['id', 'statement', 'evidence_level', 'sources'] }

const STOCK = { type: 'object', properties: {
  ticker: { type: 'string' },
  company: { type: 'string', description: '이 회사가 뭐 하는 곳인지 2~3문장, 쉬운 말로' },
  whyRose: { type: 'array', items: CLAIM, description: '최근 상승 이유. 각 항목에 출처 필수' },
  estimateRevisions: { type: 'object', properties: {
    direction: { type: 'string', enum: ['raised', 'lowered', 'mixed', 'none', 'unknown'] },
    claims: { type: 'array', items: CLAIM },
  }, required: ['direction', 'claims'] },
  themeTags: { type: 'array', items: { type: 'string' } },
  upcomingCatalyst: { type: 'object', properties: { date: { type: 'string' }, what: { type: 'string' }, sources: { type: 'array', items: SOURCE } } },
  confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
}, required: ['ticker', 'company', 'whyRose', 'estimateRevisions', 'confidence'] }

const RULES = `
반드시 지킬 것 (어기면 결과를 폐기한다):
1. 웹검색으로 실제 확인한 내용만 쓴다. 기억에 의존하지 마라.
2. 모든 주장에 실제 접속 가능한 원문 URL 을 붙인다. **URL 을 만들어내지 마라.**
3. 검색해도 근거를 못 찾으면 evidence_level:"no_source", statement:"근거 없음", sources:[] 로 반환한다.
   **추측으로 채우지 마라.** 빈 결과는 실패가 아니라 정상이다.
4. 검색결과 페이지(google.com/search 등)는 출처가 아니다. 원문 기사 URL 을 써라.
5. quote 에는 번역이 아니라 원문 문장을 그대로 넣는다.
6. 아래 "이미 확보된 자료"에 있는 숫자는 절대 바꾸지 마라. 해석만 하라.`

phase('종목리서치')
const targets = picks.slice(0, CAP)
const researched = await parallel(targets.map((p) => () => {
  const d = p.detail || {}
  const fin = d.financials ? d.financials.quarters.slice(0, 4).map((q) =>
    `${q.periodEnd}: 매출 ${Math.round((q.revenue || 0) / 1e6)}M(YoY ${q.yoy.revenue}%) · ${d.financials.profitLabel} ${Math.round((q.profit || 0) / 1e6)}M(YoY ${q.yoy.profit}%)`).join('\n  ') : '없음'
  const news = (d.news && d.news.items || []).filter((x) => x.direct).slice(0, 6)
    .map((x) => `- ${x.date} [${x.publisher}] ${x.title}\n  ${x.url}`).join('\n') || '없음'
  const kr = (d.krReports && d.krReports.reports || []).slice(0, 5)
    .map((r) => `- ${r.date} ${r.broker} ${r.analyst || ''}: ${r.title}\n  요약: ${(r.summary || '').replace(/\s+/g, ' ').slice(0, 160)}\n  PDF: ${r.pdfUrl}`).join('\n') || '없음'
  const filings = (d.filings || []).slice(0, 4).map((f) => `- ${f.filingDate} ${f.itemsKo.join(',')}${f.isEarnings ? ' ★실적' : ''} ${f.url}`).join('\n') || '없음'

  return agent(
    `당신은 미국 주식 리서치 애널리스트입니다. 오늘은 ${date}. 종목: ${p.ticker} (${d.nameKo || ''} / ${p.sector} / ${p.industry})

## 이미 확보된 자료 (Node 가 수집·검증한 것. 이 숫자를 바꾸지 마라)
스크리닝: RS 상위 1M ${(100 - (p.rs?.m1?.pct ?? 0)).toFixed(1)}% / 3M ${(100 - (p.rs?.m3?.pct ?? 0)).toFixed(1)}% / 6M ${(100 - (p.rs?.m6?.pct ?? 0)).toFixed(1)}% · ADR ${p.adr}% · 52주 고점 대비 ${p.high52}% · 200일선 이격 ${p.div200}%
절대 상승률: 1M ${p.ret1m}% · 3M ${p.ret3m}% · 6M ${p.ret6m}%
최근 4분기 실적(SEC EDGAR):
  ${fin}
최근 뉴스(Nasdaq RSS, 이 종목 직접 언급분):
${news}
SEC 8-K 공시:
${filings}
국내 증권사 리포트(연합인포맥스):
${kr}

## 할 일
위 자료를 출발점으로 **웹검색을 더 해서** 다음을 채우세요.
- company: 이 회사가 뭐 하는 곳인지 2~3문장, 중학생도 이해할 쉬운 말로
- whyRose: **최근 이 종목이 오른 이유**를 2~4개 항목으로. 각 항목에 출처 URL 필수.
  위에 제공된 뉴스·리포트·8-K 를 근거로 써도 좋다(그게 가장 안전하다).
- estimateRevisions: 증권사가 최근 이 종목의 **실적 전망치를 상향/하향 조정했는지**와 그 이유.
  국내 리포트 요약에 단서가 있으면 활용하라. 확인 안 되면 direction:"unknown", claims:[] 로 두라.
- themeTags: 이 종목을 묶을 수 있는 테마 (예: "AI 인프라", "비만치료제"). 없으면 빈 배열.
- upcomingCatalyst: 다가오는 실적발표일 등. 모르면 비워라.
- confidence: 근거의 충실도

${RULES}
한글로 작성하세요.`,
    { label: `연구:${p.ticker}`, phase: '종목리서치', schema: STOCK, model: 'sonnet' }
  )
}))

phase('팩트체크')
const clean = researched.filter(Boolean)
const BATCH = 6
const batches = []
for (let i = 0; i < clean.length; i += BATCH) batches.push(clean.slice(i, i + BATCH))

const CHECK = { type: 'object', properties: { results: { type: 'array', items: {
  type: 'object', properties: {
    ticker: { type: 'string' },
    verdict: { type: 'string', enum: ['pass', 'partial', 'reject'] },
    removed_claim_ids: { type: 'array', items: { type: 'string' } },
    reasons: { type: 'array', items: { type: 'string' } },
  }, required: ['ticker', 'verdict', 'removed_claim_ids'],
} } }, required: ['results'] }

const checks = await parallel(batches.map((b, i) => () => agent(
  `다음 종목 리서치 결과를 검증하세요. 오늘은 ${date}.

${JSON.stringify(b.map((x) => ({ ticker: x.ticker, whyRose: x.whyRose, estimateRevisions: x.estimateRevisions })), null, 1)}

각 claim 에 대해 다음을 확인하고, 문제가 있으면 removed_claim_ids 에 넣으세요:
- 출처 URL 이 그 주장을 실제로 뒷받침하는가 (제목·발행처가 주장과 무관하면 제거)
- 다른 회사 기사를 이 종목 근거로 쓰지 않았는가
- 날짜가 "최근 상승"을 설명하기에 너무 오래되지 않았는가 (6개월 초과면 의심)
- evidence_level 이 'sourced' 인데 sources 가 비어있지 않은가

의심스러우면 제거하는 쪽을 택하세요. 근거 없는 주장이 남는 것보다 낫습니다.`,
  { label: `팩트체크:${i + 1}/${batches.length}`, phase: '팩트체크', schema: CHECK, model: 'haiku' }
)))

// 팩트체크 결과 반영 (Node 가 확정적으로 적용 — LLM 이 다시 쓰게 두지 않는다)
const removeMap = new Map()
for (const c of checks.filter(Boolean)) for (const r of (c.results || [])) removeMap.set(r.ticker, r)
for (const s of clean) {
  const r = removeMap.get(s.ticker)
  if (!r) continue
  const rm = new Set(r.removed_claim_ids || [])
  s.factcheck = { verdict: r.verdict, removed: [...rm], reasons: r.reasons || [] }
  s.whyRose = (s.whyRose || []).filter((c) => !rm.has(c.id))
  if (s.estimateRevisions) s.estimateRevisions.claims = (s.estimateRevisions.claims || []).filter((c) => !rm.has(c.id))
  if (!s.whyRose.length) s.whyRose = [{ id: 'none', statement: '검증을 통과한 상승 이유 근거 없음', evidence_level: 'no_source', sources: [] }]
}

phase('테마종합')
const THEME = { type: 'object', properties: {
  leadingTheme: { type: 'object', properties: {
    name: { type: 'string' },
    plainKo: { type: 'string', description: '중학생도 이해할 2~3문장. 전문용어 금지, URL·인용문 넣지 마라' },
    why: { type: 'string' },
    tickers: { type: 'array', items: { type: 'string' } },
    strength: { type: 'string', enum: ['strong', 'emerging', 'weak', 'none'] },
  }, required: ['name', 'plainKo', 'why', 'tickers', 'strength'] },
  subThemes: { type: 'array', items: { type: 'object', properties: {
    name: { type: 'string' },
    plainKo: { type: 'string', description: '중학생도 이해할 1~2문장. 전문용어 금지, URL 넣지 마라' },
    tickers: { type: 'array', items: { type: 'string' } }, why: { type: 'string' },
  }, required: ['name', 'plainKo', 'tickers'] } },
  crossCuttingDriver: { type: 'string' },
  caution: { type: 'string' },
}, required: ['leadingTheme', 'subThemes', 'crossCuttingDriver'] }

const theme = await agent(
  `당신은 주도 테마를 판별하는 전략가입니다. 오늘은 ${date}.

## Node 가 확정한 클러스터 (이 숫자는 절대 바꾸지 마라)
${JSON.stringify(clusters, null, 1)}

## 검증 통과한 종목별 리서치
${JSON.stringify(clean.map((x) => ({ ticker: x.ticker, themeTags: x.themeTags, whyRose: (x.whyRose || []).map((c) => c.statement) })), null, 1)}

## 할 일
- leadingTheme: 지금의 주도 테마. **위 클러스터에 실제로 존재하는 종목만** 넣어라.
  ⚠️ 공통 테마가 없으면 name:"공통 테마 없음", strength:"none" 으로 정직하게 답하라. 억지로 묶지 마라.
- subThemes: 2~3개 종목 수준의 소규모 공통점도 잡아라. 전원 공통일 필요 없다.

⚠️ **plainKo 와 why 는 역할이 다르다. 섞지 마라.**
- \`plainKo\`: 화면 맨 위에 굵게 보여줄 **쉬운 요약**. 중학생이 읽고 "아, 이 회사들이 이래서 같이 오르는구나"
  하고 바로 알 수 있어야 한다. 2~3문장. **URL·원문 인용·(1)(2) 번호·영문 약어 나열 금지.**
  전문용어를 꼭 써야 하면 괄호로 풀어라 (예: "캐펙스(설비 투자)").
  좋은 예: "AI를 돌리려면 거대한 데이터센터가 필요한데, 큰 회사들이 여기에 돈을 쏟아붓고 있습니다.
  그 돈이 반도체를 만드는 회사, 서버를 파는 회사, 데이터를 옮기는 부품 회사로 차례로 흘러갑니다.
  이 테마의 종목들은 같은 지출 사이클의 서로 다른 층을 먹고 있습니다."
- \`why\`: 그 아래 '근거' 영역에 접어서 보여줄 **출처 딸린 상세 근거**. 여기에만 URL·원문 인용을 넣어라.
- crossCuttingDriver: 종목들을 관통하는 공통 원인 한 문단 (예: 금리, AI 자본지출, 정책)
- caution: 이 테마 해석의 한계·반증 가능성

${RULES}
한글로 작성하세요.`,
  { label: '테마종합', phase: '테마종합', schema: THEME, model: 'opus' }
)

return {
  date,
  team: 2,
  researched: clean,
  theme,
  coverage: { done: clean.length, total: picks.length, cap: CAP },
  factcheckBatches: batches.length,
}
