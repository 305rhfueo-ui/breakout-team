export const meta = {
  name: 'bt-n-deep',
  description: 'N 심층분석 — 오닐 CAN SLIM 의 N + 미너비니 이익의 질, 회사 공시 원문(실적 보도자료·MD&A) 우선, 전부 출처 필수',
  whenToUse: 'start breakout 실행 시(새 실적 공시가 난 종목) · /n-deep 으로 전 종목 다시 채울 때',
  phases: [
    { title: 'N 심층', detail: '종목별 1명 — 기준 문서·공시 원문을 전부 읽고 동력별 다섯 칸 + 이익의 질 5문항' },
    { title: '팩트체크', detail: '출처 없는 주장 제거 (5종목 배치, 텍스트 대조만)' },
  ],
}
// 사용법: Workflow({ scriptPath: '<abs>/scripts/workflows/n-deep.js', args: <state/llm-in/_nargs.json 내용> })
//   { date, model, argsDir, docsDir, cap, items:[{ticker,name,industry,why,asOf,files,pdfs}] }   — prepare-n-args.js 가 만든다
// 결과는 finish-n.js 가 숫자 대조·출처 검증 뒤 state/n-deep.json · dashboard/data/ndeep.js 에 합친다.
// 2026-11-06 사용자: "N 내용이 너무 부실하다 — 오닐·미너비니 관점에서 N 만 따로 떼어 심층분석. 중요하다"
//   부실했던 원인: ① "최근 3개월 뉴스"에서만 찾았다 ② 제품별 매출이 실린 공시 원문을 주지 않았다 ③ 심층 분석의 한 칸이었다

let A = args
if (typeof A === 'string') { try { A = JSON.parse(A) } catch (e) { A = null } }
const date = (A && A.date) || 'today'
const items = (A && A.items) || []
const CAP = Number.isFinite(A && A.cap) ? A.cap : 80
const MODEL = (A && A.model) || 'opus'
const argsDir = (A && A.argsDir) || null
const docsDir = (A && A.docsDir) || 'docs'

if (!items.length || !argsDir) return { date, team: 'n', items: [], failed: [], coverage: { done: 0, total: 0, cap: CAP, failed: 0 }, note: '대상 없음' }

const tryAgent = async (p, o) => {
  const r = await agent(p, o)
  if (r) return r
  log(`재시도: ${o.label}`)
  return await agent(p, { ...o, label: `${o.label}#2` })
}

const SOURCE = { type: 'object', properties: {
  title: { type: 'string' }, publisher: { type: 'string' }, url: { type: 'string' }, date: { type: 'string' },
  quote: { type: 'string', description: '실제로 읽은 원문 문장 그대로 — 제공된 자료(공시 원문 파일·리포트 PDF·리포트 요약)의 문장이거나 웹에서 연 원문의 문장. 영어면 영어 그대로. 요약하거나 번역하지 마라' },
}, required: ['title', 'publisher', 'url', 'date', 'quote'] }

const CLAIM = { type: 'object', properties: {
  id: { type: 'string' }, statement: { type: 'string', description: '한국어 한 문장. 숫자는 quote 에 있는 것만' },
  evidence_level: { type: 'string', enum: ['sourced', 'no_source'] },
  sources: { type: 'array', items: SOURCE },
}, required: ['id', 'statement', 'evidence_level', 'sources'] }
const CLAIMS = (d) => ({ type: 'array', items: CLAIM, description: d })

const DRIVER = { type: 'object', properties: {
  what: { type: 'string', description: '무엇이 새로운가 — 제품·서비스·경영진·계약·업계 변화의 이름과 한 줄 설명' },
  kind: { type: 'string', enum: ['product', 'service', 'management', 'contract', 'industry'] },
  stage: { type: 'string', enum: ['발표만', '출시', '매출 발생 중', '이익 기여 중', '확인 불가'] },
  since: { type: 'string', description: '처음 발표·출시된 때 (YYYY-MM 또는 YYYY). 모르면 빈 문자열' },
  basis: CLAIMS('① 새로 나왔다는 사실 — 출시·선임·계약 공시 문장'),
  revenueImpact: CLAIMS('② 매출에 얼마나 — 제품·부문 매출, 비중, 성장률, 수주잔고, 고객 수. 근거 없으면 빈 배열'),
  profitImpact: CLAIMS('③ 이익·마진에 어떻게. 근거 없으면 빈 배열'),
  expectedGrowth: CLAIMS('④ 기대 성장률 — 누구의 전망(회사 가이던스/○○증권)이고 어느 기간인지 문장에 밝힌다. 근거 없으면 빈 배열'),
  counter: CLAIMS('⑤ 이 기대를 꺾을 수 있는 것 — 경쟁·지연·수요 둔화·가격·규제 (회사 공시의 위험 문장도 된다)'),
}, required: ['what', 'kind', 'stage', 'since', 'basis', 'revenueImpact', 'profitImpact', 'expectedGrowth', 'counter'] }

// ⚠️ 필드 이름은 finish-n.js · index.html(nDeepSec) 이 읽는다
const NDEEP = { type: 'object', properties: {
  ticker: { type: 'string' },
  headline: { type: 'string', description: '한 줄 결론 (60자 안팎) — 무엇이 새로워서 지금 성장하고 있나, 또는 없다' },
  nVerdict: { type: 'string', enum: ['충족', '부분 충족', '미충족', '확인 불가'] },
  drivers: { type: 'array', items: DRIVER, description: '새로운 성장 동력, 중요한 순서로 최대 3개. 없으면 빈 배열' },
  growthLink: { type: 'string', description: '2~3문장. 코드가 계산한 코드 33(최근 3분기 매출·이익 증가율·순이익률 흐름)이 보여 주는 가속/둔화를 어느 동력이 만들었는지 — 회사가 쓴 원인 문장으로 연결. 근거가 없으면 없다고' },
  quality: { type: 'object', description: '미너비니 이익의 질 5가지 질문 — 질문마다 출처 붙은 주장 0~2개', properties: {
    newProduct: CLAIMS('새로운 제품·서비스 또는 업계의 긍정적 변화가 있는가 (동력과 겹치면 가장 중요한 것 1개)'),
    marketShare: CLAIMS('시장 점유율을 늘리고 있는가'),
    marketStructure: CLAIMS('그 시장은 소수 기업이 지배하는 구조인가'),
    salesMargin: CLAIMS('매출과 마진을 늘리려고 무엇을 하고 있는가'),
    costProductivity: CLAIMS('비용을 줄이고 생산성을 높이려고 무엇을 하고 있는가'),
  }, required: ['newProduct', 'marketShare', 'marketStructure', 'salesMargin', 'costProductivity'] },
  narrative: { type: 'string', description: '6~10문장. 무엇이 새롭고 → 매출에 얼마나 → 이익에 어떻게 → 숫자 가속과의 연결 → 누구의 기대 성장률 → 무엇이 꺾을 수 있나. drivers·quality 에 없는 숫자를 넣지 마라' },
  watch: { type: 'array', items: { type: 'string' }, description: '다음 실적에서 확인할 것 2~4개 — 무엇이 나오면 이 그림이 맞고/틀린지' },
  sourceGap: { type: 'string', description: '읽지 못했거나 없던 자료 한 줄 (예: "실적 발표 콜 원고를 찾지 못함"). 없으면 빈 문자열' },
}, required: ['ticker', 'headline', 'nVerdict', 'drivers', 'growthLink', 'quality', 'narrative', 'watch', 'sourceGap'] }

const targets = items.slice(0, CAP)
if (items.length > targets.length) log(`상한 ${CAP} 밖 ${items.length - targets.length}종목은 이번에 하지 않음: ${items.slice(CAP).map((t) => t.ticker).join(', ')}`)

phase('N 심층')
const researched = await parallel(targets.map((t) => () => tryAgent(
  `${t.ticker}${t.name ? ` (${t.name})` : ''}${t.industry ? ` · ${t.industry}` : ''} 의 CAN SLIM **N(새로운 성장 동력)** 을 심층 분석하세요. 오늘은 ${date}.

먼저 **Read 도구로** 기준 문서 \`${docsDir}/기준-N-심층.md\` 를 끝까지 읽어라. 판정·칸·쓰는 법이 전부 거기 있다.
그다음 이 종목 자료 폴더 \`${argsDir}/${t.ticker}/\` 를 **Read 도구로 전부** 읽어라:
- \`input.json\` — code33(코드가 SEC 분기 자료로 계산한 매출·이익 증가율·순이익률 3분기 흐름) · quarters · consensus · krReports(국내 증권사 리포트 요약) · reportPdfs(원문 PDF 경로 — 있으면 Read) · news/cnbc(기사 제목 — 단서로만) · docs(원문 URL 목록)
${(t.files || []).map((f) => `- \`${f}\` — ${f.startsWith('release') ? '실적 보도자료 원문 (SEC 8-K 첨부)' : '10-Q/10-K 경영진 설명(MD&A) 원문'}. 길면 offset 을 옮겨 끝까지 읽어라`).join('\n') || '- 공시 원문 파일이 없다 — input.json 의 docsNote 를 보고 회사 IR 보도자료·실적 발표 원고를 웹에서 찾아 읽어라'}

규칙:
1. **N 은 "지금의 이익 성장을 만들고 있는 새로운 무언가"다.** 최근 3개월로 자르지 마라 — 1~2년 전에 나왔어도 지금 매출 증가를 끌고 있으면 N 이다. 주가·신고가·목표주가·투자의견·자사주·단순 비용 절감은 N 이 아니다.
2. **회사 공시 원문이 1순위 근거다.** 회사가 "매출 증가는 주로 X 때문(primarily driven by …)"이라고 쓴 문장, 제품·부문별 매출 표, 가이던스를 찾아라. 공시를 다 읽고도 비는 칸만 웹검색(회사 IR·실적 발표 콜 원고)하라.
3. 제공된 자료의 문장을 인용할 때: title 은 "○○ 실적 보도자료 (YYYY-MM-DD)" 또는 "○○ 10-Q 경영진 설명", publisher 는 회사 이름(SEC 공시), url 은 그 파일 첫 줄에 적힌 원문 URL, quote 는 파일의 문장·표의 줄 그대로.
4. **숫자는 quote 에 있는 것만 statement 에 써라.** 코드가 주장마다 statement 의 숫자를 그 주장의 quote 와 하나하나 대조해 없으면 지운다. 분량을 늘리려고 숫자를 만들거나 추정하지 마라 — 근거가 없으면 빈 배열이 정답이다.
5. 단위 환산은 정확히: $1.09 billion = 10.9억 달러, $182.2 million = 1.822억 달러.
6. 매수·매도 권유를 하지 마라. watch 는 "무엇이 확인되면 이 그림이 맞고/틀린지"다.
7. ticker 는 "${t.ticker}" 그대로.

서술(headline·narrative·growthLink·statement·watch) — 독자는 주식 투자를 하는 일반인이다:
- 결론부터. 한 문장에는 한 가지 내용만(60~90자). 숫자는 핵심만, 단위·기간을 붙여서.
- 전문 용어는 처음 나올 때 괄호로 풀어 준다: ARR(연간 반복 매출), RPO(이미 계약했지만 아직 매출로 잡지 않은 금액), DTC(소비자 직접 판매), SG&A(판매·관리비), 가이던스(회사가 내놓은 전망), 유기 성장(인수 효과를 뺀 성장), GAAP·비GAAP(회계 기준 이익·일회성을 뺀 회사 기준 이익), bp(0.01%p).
- 영어 문장·영어 업계 표현(razor-and-blade, lapping 등)을 섞지 마라 — 뜻으로 쓴다. 제품·회사 이름은 원문 그대로.
- **파일·키 이름(input.json·code33·release-1.txt·mdna.txt·krReports)과 작업 경위("제공 자료에", "파일을 읽어 보니")를 쓰지 마라.** "회사 실적 보도자료", "10-Q 경영진 설명", "코드 33"처럼 쓴다.`,
  { label: `N:${t.ticker}`, phase: 'N 심층', schema: NDEEP, model: MODEL }
)))

phase('팩트체크')
const failed = targets.filter((t, i) => !researched[i]).map((t) => t.ticker)
if (failed.length) log(`⚠️ N 심층 실패 ${failed.length}종목: ${failed.join(', ')}`)
targets.forEach((t, i) => { if (researched[i]) researched[i].ticker = t.ticker })
const clean = researched.filter(Boolean)

const KEYS = ['basis', 'revenueImpact', 'profitImpact', 'expectedGrowth', 'counter']
const QK = ['newProduct', 'marketShare', 'marketStructure', 'salesMargin', 'costProductivity']
const claimsOf = (x) => [...(x.drivers || []).flatMap((d) => KEYS.flatMap((k) => d[k] || [])), ...QK.flatMap((k) => ((x.quality || {})[k]) || [])]

const BATCH = 5
const batches = []
for (let i = 0; i < clean.length; i += BATCH) batches.push(clean.slice(i, i + BATCH))

const CHECK = { type: 'object', properties: { results: { type: 'array', items: {
  type: 'object', properties: {
    idx: { type: 'number', description: '입력 배열의 idx 를 그대로' },
    ticker: { type: 'string' },
    verdict: { type: 'string', enum: ['pass', 'partial', 'reject'] },
    removed_claim_ids: { type: 'array', items: { type: 'string' } },
    correctedNarrative: { type: 'string', description: '제거한 주장의 숫자·사실이 narrative 에도 있으면 그 문장을 뺀 narrative. 뺄 것이 없으면 빈 문자열' },
    reasons: { type: 'array', items: { type: 'string' } },
  }, required: ['idx', 'ticker', 'verdict', 'removed_claim_ids'],
} } }, required: ['results'] }

const checks = await parallel(batches.map((b, i) => () => tryAgent(
  `다음 종목들의 N 심층분석 결과를 검증하세요. 오늘은 ${date}.
**웹에 접근하지 말고** 아래 텍스트(statement·quote·출처 제목)만 대조하라.

${JSON.stringify(b.map((x, idx) => ({ idx, ticker: x.ticker, headline: x.headline, narrative: x.narrative, claims: claimsOf(x) })), null, 1)}

각 claim 을 확인하고 문제가 있으면 removed_claim_ids 에 넣으세요:
- **statement 안의 숫자·날짜가 quote 나 출처 제목에 실제로 있는가?** 없으면 제거하라. 분량을 늘리려고 그럴듯한 수치를 지어내는 것이 가장 위험하다.
- 단위 환산·번역만 다르고 값이 같으면 정상이다(1 billion = 10억, 영어 quote 를 한국어 statement 로 옮긴 것) — 지우지 마라.
- quote 가 statement 를 실제로 뒷받침하는가 — 다른 제품·다른 회사·다른 기간 이야기면 제거
- 매출·이익 영향, 기대 성장률은 특히 엄격히: 그 숫자와 "누구의 전망인지"가 quote 에 없으면 제거
- 주가 상승·신고가·목표주가·투자의견을 "새로운 성장 동력"으로 든 주장은 제거
- evidence_level 이 'sourced' 인데 sources 가 비었으면 제거
그다음 narrative 를 보라: 제거한 주장의 숫자·사실이 narrative 에 남아 있으면 correctedNarrative 에 그 문장을 뺀 글을 다시 써라(새 사실 금지, 흐름은 자연스럽게). 없으면 빈 문자열.
results 의 각 항목에 입력의 idx 를 그대로 넣어라. 의심스러우면 제거하는 쪽을 택하세요.`,
  { label: `팩트체크:${i + 1}/${batches.length}`, phase: '팩트체크', schema: CHECK, model: 'haiku' }
)))

const checkFor = new Map()
checks.forEach((c, bi) => { for (const r of ((c && c.results) || [])) { const k = Number(r.idx); if (Number.isInteger(k)) checkFor.set(`${bi}:${k}`, r) } })
batches.forEach((b, bi) => b.forEach((s, idx) => {
  const r = checkFor.get(`${bi}:${idx}`)
  if (!r) { s.factcheck = { verdict: 'unchecked', removed: [], reasons: ['팩트체크 결과를 대조하지 못했다 — 검증되지 않았다'] }; log(`⚠️ 팩트체크 미대조: ${s.ticker}`); return }
  const rm = new Set(r.removed_claim_ids || [])
  s.factcheck = { verdict: r.verdict, removed: [...rm], reasons: r.reasons || [] }
  const keep = (arr) => (arr || []).filter((c) => !rm.has(c.id))
  s.drivers = (s.drivers || []).map((d) => { const o = { ...d }; for (const k of KEYS) o[k] = keep(d[k]); return o }).filter((d) => d.basis.length)
  const q = s.quality || {}
  s.quality = Object.fromEntries(QK.map((k) => [k, keep(q[k])]))
  const cn = String(r.correctedNarrative || '').trim()
  if (rm.size && cn.length > 20 && cn !== s.narrative) { s.narrativeOriginal = s.narrative; s.narrative = cn; s.factcheck.narrativeFixed = true }
}))

return {
  date, team: 'n', items: clean, failed,
  coverage: { done: clean.length, total: items.length, cap: CAP, failed: failed.length },
  factcheckBatches: batches.length,
}
