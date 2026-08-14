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
const CAP = Number.isFinite(A && A.cap) ? A.cap : 20     // `|| 20` 이면 cap:0 이 20 으로 둔갑한다

/* ── 무거운 자료는 파일로 ──
   워크플로 스크립트는 파일시스템에 접근할 수 없다. 그래서 **에이전트가 직접 Read 한다.**
   ⚠️ 스크립트는 몇 명을 띄울지 알아야 하므로 티커 목록만 인라인으로 받고,
      실적·뉴스·공시·국내리포트 같은 무거운 자료는 argsFile 에 둔다.
      이걸 안 하면 근거를 늘릴수록 호출부가 붙여넣어야 할 인자가 수십 KB 로 불어난다. */
const argsDir = (A && A.argsDir) || null
const fileFor = (tk) => argsDir ? `${argsDir}/${tk}.json` : null
const evidenceBlock = (tk, d) => argsDir ? `## 이미 확보된 자료 (Node 가 수집·검증한 1차 자료)
**${fileFor(tk)}**

⚠️ **가장 먼저 Read 도구로 이 파일을 읽어라.** 읽지 않고 쓰면 안 된다. ${tk} 전용 파일이다.
그 안의
\`detail.financials\`(최근 분기 실적) · \`detail.news\`(이 종목 직접 언급 기사) ·
\`detail.filings\`(SEC 8-K) · \`detail.krReports\`(국내 증권사 리포트, 요약·PDF 링크) 를 근거로 삼아라.
**여기 있는 숫자는 절대 바꾸지 마라. 해석만 하라.**` : `## 이미 확보된 자료 (Node 가 수집·검증한 것. 이 숫자를 바꾸지 마라)
최근 4분기 실적(SEC EDGAR):
  ${d.fin}
최근 뉴스(Nasdaq RSS, 이 종목 직접 언급분):
${d.news}
SEC 8-K 공시:
${d.filings}
국내 증권사 리포트(연합인포맥스):
${d.kr}`

// 에이전트가 API 오류로 죽으면 agent() 가 null 을 준다. 1회만 다시 시도한다.
// ⚠️ 재시도 후에도 null 이면 그 종목을 조용히 버리지 말고 호출부가 실패로 표시할 수 있게 남긴다.
//    2026-08-11 에 죽은 에이전트가 화면에 "상한 초과"로 표시되는 사고가 있었다.
const tryAgent = async (p, o) => {
  const r = await agent(p, o)
  if (r) return r
  log(`재시도: ${o.label}`)
  return await agent(p, { ...o, label: `${o.label}#2` })
}

// ── 환각 0 스키마 ──
const SOURCE = { type: 'object', properties: {
  title: { type: 'string' }, publisher: { type: 'string' },
  url: { type: 'string' }, date: { type: 'string' },
  // ⚠️ quote 를 required 로 걸되 "제공된 자료의 문장"도 인정한다(RULES 참조).
  //    그냥 필수로만 걸면 원문을 못 읽는 유료기사·국내 PDF 인용이 통째로 강등돼 보고서가 더 얇아진다.
  quote: { type: 'string', description: '실제로 읽은 원문 문장 그대로. 웹에서 읽은 문장이거나 위에 제공된 자료(뉴스 제목·리포트 요약·실적 수치)의 문장. 요약하거나 번역하지 마라' },
}, required: ['title', 'publisher', 'url', 'date', 'quote'] }

const CLAIM = { type: 'object', properties: {
  id: { type: 'string' },
  statement: { type: 'string' },
  evidence_level: { type: 'string', enum: ['sourced', 'no_source'] },
  sources: { type: 'array', items: SOURCE },
}, required: ['id', 'statement', 'evidence_level', 'sources'] }

const STOCK = { type: 'object', properties: {
  ticker: { type: 'string' },
  company: { type: 'string', description: '이 회사가 뭐 하는 곳인지 4~6문장. 무엇을 팔아 돈을 버는지 · 주 고객이 누구인지 · 지금 왜 주목받는지. 중학생도 이해할 쉬운 말로' },
  lead: { type: 'string', description: '리포트 첫 문단 3~5문장. 이 회사가 뭐 하는 곳이고 지금 무슨 일이 벌어지고 있는지를 한 문단으로. 아래 근거의 요약이어야 하며 새 사실을 넣지 마라' },
  whyRose: { type: 'array', items: CLAIM, description: '최근 상승 이유 3~6개. 각 항목에 출처 필수. 각 문장에 숫자나 날짜를 넣어라' },
  counterpoint: { type: 'array', items: CLAIM, description: '반대 근거·한계·리스크. 없으면 빈 배열로 두라 — 칸을 채우려고 지어내지 마라' },
  estimateRevisions: { type: 'object', properties: {
    direction: { type: 'string', enum: ['raised', 'lowered', 'mixed', 'none', 'unknown'] },
    claims: { type: 'array', items: CLAIM },
  }, required: ['direction', 'claims'] },
  themeTags: { type: 'array', items: { type: 'string' } },
  upcomingCatalyst: { type: 'object', properties: { date: { type: 'string' }, what: { type: 'string' }, sources: { type: 'array', items: SOURCE } } },
  confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
}, required: ['ticker', 'company', 'lead', 'whyRose', 'estimateRevisions', 'confidence'] }

const RULES = `
반드시 지킬 것 (어기면 결과를 폐기한다):
1. 웹검색으로 실제 확인한 내용만 쓴다. 기억에 의존하지 마라.
2. 모든 주장에 실제 접속 가능한 원문 URL 을 붙인다. **URL 을 만들어내지 마라.**
3. 검색해도 근거를 못 찾으면 evidence_level:"no_source", statement:"근거 없음", sources:[] 로 반환한다.
   **추측으로 채우지 마라.** 빈 결과는 실패가 아니라 정상이다.
4. 검색결과 페이지(google.com/search 등)는 출처가 아니다. 원문 기사 URL 을 써라.
5. **quote 에는 실제로 읽은 문장을 원문 그대로 넣는다.** 웹에서 읽은 기사 문장이거나,
   위에 제공된 자료(뉴스 제목·국내 리포트 요약·SEC 실적 수치)의 문장이면 된다.
   둘 다 아니면 그 주장은 evidence_level:"no_source" 다. **요약해서 새로 쓰지 마라. 번역하지 마라.**
6. 제공된 자료에 있는 숫자는 절대 바꾸지 마라. 해석만 하라.

## 글의 형태 — 리포트로 쓴다
- **lead(리드문) → whyRose(근거) → counterpoint(반대 근거)** 순서다. 리드문은 아래 근거의 요약이며
  리드문에만 있고 근거에 없는 사실을 쓰면 안 된다.
- **각 근거 문장에는 숫자나 날짜를 최소 하나 넣어라.** 그 숫자는 quote 나 제공된 자료에 실제로 있어야 한다.
  "실적이 좋았다"가 아니라 "8월 4일 발표한 2분기 매출이 1억8,220만 달러로 전년비 11% 늘었다".
- 분량을 채우려고 추측을 늘리지 마라. **확인 못 한 것은 짧게 "근거 없음"이라고 적는 것이 낫다.**
- **영문 약어를 그냥 쓰지 마라.** 뜻을 먼저 쓰고 이름은 괄호에 넣어라 —
  "VOL_X 3.1" 이 아니라 "거래대금이 20일 평균의 3.1배(VOL_X)". 중학생도 이해할 수 있게 쓴다.
- 전문용어는 괄호로 풀어라. 길어졌다고 어려워지면 안 된다.`

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

  return tryAgent(
    `당신은 미국 주식 리서치 애널리스트입니다. 오늘은 ${date}. 종목: ${p.ticker} (${p.nameKo || d.nameKo || ''} / ${p.sector} / ${p.industry})

## Node 가 확정한 수치 (바꾸지 마라)
스크리닝: RS 상위 1M ${(100 - (p.rs?.m1?.pct ?? 0)).toFixed(1)}% / 3M ${(100 - (p.rs?.m3?.pct ?? 0)).toFixed(1)}% / 6M ${(100 - (p.rs?.m6?.pct ?? 0)).toFixed(1)}% · ADR ${p.adr}% · 52주 고점 대비 ${p.high52}% · 200일선 이격 ${p.div200}%
절대 상승률: 1M ${p.ret1m}% · 3M ${p.ret3m}% · 6M ${p.ret6m}%

${evidenceBlock(p.ticker, { fin, news, filings, kr })}

## 할 일
위 자료를 출발점으로 **웹검색을 더 해서** 다음을 채우세요.
- company: **이 회사가 뭐 하는 곳인지 4~6문장.** 무엇을 팔아 돈을 버는지, 주 고객이 누구인지,
  지금 왜 주목받는지. 중학생도 이해할 쉬운 말로. (사용자가 명시적으로 요구한 항목이다)
- lead: 리포트 첫 문단 3~5문장. 회사가 뭐 하는 곳이고 지금 무슨 일이 벌어지는지 한 문단으로.
  **아래 whyRose 의 요약이어야 한다** — 리드문에만 있고 근거에 없는 사실을 쓰지 마라.
- whyRose: **최근 이 종목이 오른 이유**를 3~6개 항목으로. 각 항목에 출처 URL 필수.
  위에 제공된 뉴스·리포트·8-K 를 근거로 써도 좋다(그게 가장 안전하다).
- counterpoint: **반대 근거·한계·리스크.** 실적은 좋은데 주가가 빠졌다든지, 증자·희석이 있었다든지,
  성장률이 둔화됐다든지. 찾은 만큼만 쓰고 **없으면 빈 배열로 둬라 — 칸을 채우려고 지어내지 마라.**
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
// 재시도까지 하고도 결과가 없는 종목 = 실패. 조용히 사라지게 두지 않는다.
// ⚠️ 반환값의 ticker 로 대조하지 마라. 스키마가 required 여도 모델이 입력값을 그대로 준다는
//    보장이 없다(5팀에서 key 가 슬러그로 바뀌어 성공 6건이 전부 실패로 표시된 사고가 있었다).
//    parallel 은 입력 순서를 보존하므로 인덱스로 판정한다.
const failed = targets.filter((t, i) => !researched[i]).map((t) => t.ticker)
if (failed.length) log(`⚠️ 리서치 실패 ${failed.length}종목: ${failed.join(', ')}`)
const BATCH = 6
const batches = []
for (let i = 0; i < clean.length; i += BATCH) batches.push(clean.slice(i, i + BATCH))

const CHECK = { type: 'object', properties: { results: { type: 'array', items: {
  type: 'object', properties: {
    ticker: { type: 'string' },
    verdict: { type: 'string', enum: ['pass', 'partial', 'reject'] },
    removed_claim_ids: { type: 'array', items: { type: 'string' } },
    // ⚠️ 리드문은 근거의 요약이다. 근거가 제거되면 리드문에서도 그 문장을 빼야 하는데
    //    검증을 근거에만 걸어서 "근거는 지워졌는데 요약문만 살아남는" 구멍이 있었다
    //    (2026-08-14 실측: 5팀 리드문에 팩트체크가 지운 "백로그 513억 달러"가 그대로 남음).
    correctedLead: { type: 'string', description: '제거한 주장의 숫자·사실이 lead 에도 있으면 그 문장을 뺀 리드문. 뺄 것이 없으면 빈 문자열' },
    reasons: { type: 'array', items: { type: 'string' } },
  }, required: ['ticker', 'verdict', 'removed_claim_ids'],
} } }, required: ['results'] }

const checks = await parallel(batches.map((b, i) => () => tryAgent(
  `다음 종목 리서치 결과를 검증하세요. 오늘은 ${date}.

${JSON.stringify(b.map((x) => ({ ticker: x.ticker, lead: x.lead, whyRose: x.whyRose, counterpoint: x.counterpoint, estimateRevisions: x.estimateRevisions })), null, 1)}

각 claim 에 대해 다음을 확인하고, 문제가 있으면 removed_claim_ids 에 넣으세요:
- **statement 안의 숫자·날짜가 quote 나 출처 제목에 실제로 있는가?** 없으면 제거하라.
  분량을 늘리려고 그럴듯한 수치를 지어내는 것이 가장 위험하다. 이게 최우선 검증 항목이다.
- ⚠️ **단위 환산을 정확히 하라.** 1 billion = 10억, 1 million = 100만 이다.
  $64.1 billion = 641억 달러 · $104 billion = 1,040억 달러 · $143.5 million = 1억 4,350만 달러.
  **환산만 다르고 값이 같으면 정상이다 — 지우지 마라.**
  (2026-08-14 실측: 이 환산을 틀려 정확한 근거 2건을 지웠다. 검증이 지나치게 지우는 것도 오류다.)
- 출처 URL 이 그 주장을 실제로 뒷받침하는가 (제목·발행처가 주장과 무관하면 제거)
- 다른 회사 기사를 이 종목 근거로 쓰지 않았는가
- 날짜가 "최근 상승"을 설명하기에 너무 오래되지 않았는가 (6개월 초과면 의심)
- evidence_level 이 'sourced' 인데 sources 가 비어있지 않은가
- counterpoint 가 근거 없이 "리스크가 있을 수 있다" 식으로 채워져 있으면 제거하라.
  반대 근거는 있으면 좋지만 **지어낸 반대 근거는 없느니만 못하다.**

⚠️ **마지막으로 lead(리드문)를 검사하라.** 리드문은 근거의 요약이므로,
위에서 제거하기로 한 주장의 숫자·사실이 리드문에도 들어 있으면
**근거는 지워졌는데 요약문만 살아남는다.** 그런 문장이 있으면
correctedLead 에 **그 문장을 뺀 리드문**을 다시 써라.
남은 근거만으로 다시 쓰고 **새 사실을 넣지 마라.** 뺄 것이 없으면 correctedLead 를 빈 문자열로 두라.

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
  s.counterpoint = (s.counterpoint || []).filter((c) => !rm.has(c.id))
  if (s.estimateRevisions) s.estimateRevisions.claims = (s.estimateRevisions.claims || []).filter((c) => !rm.has(c.id))
  if (!s.whyRose.length) s.whyRose = [{ id: 'none', statement: '검증을 통과한 상승 이유 근거 없음', evidence_level: 'no_source', sources: [] }]
  // 근거가 지워졌으면 그 근거를 요약한 리드문도 같이 고친다. 원문은 남겨 대조할 수 있게 한다.
  const cl = String(r.correctedLead || '').trim()
  if (rm.size && cl.length > 20 && cl !== s.lead) { s.leadOriginal = s.lead; s.lead = cl; s.factcheck.leadFixed = true }
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

const theme = await tryAgent(
  `당신은 주도 테마를 판별하는 전략가입니다. 오늘은 ${date}.

## Node 가 확정한 클러스터 (이 숫자는 절대 바꾸지 마라)
${clusters.length ? JSON.stringify(clusters, null, 1) : '(클러스터 없음 — 테마를 만들지 마세요)'}

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
  failed,
  coverage: { done: clean.length, total: picks.length, cap: CAP, failed: failed.length },
  factcheckBatches: batches.length,
}
