export const meta = {
  name: 'bt-team5-sector',
  description: '5팀 주도 섹터/업종 — WRS 상위 2% 업종이 왜 강한지 출처 기반 분석',
  whenToUse: 'start breakout 실행 시. WRS 상위 업종의 강세 사유를 조사할 때',
  phases: [
    { title: '업종분석', detail: '상위 업종별 강세 사유 (웹검색, 출처 필수)' },
    { title: '팩트체크', detail: '출처 없는 주장 제거 (3업종 배치)' },
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

/* 무거운 자료는 파일로 (에이전트가 직접 Read). 스크립트는 업종 목록만 인라인으로 받는다.
   5팀은 지금까지 문서 근거가 0이었다 — WRS 숫자만 주고 나머지는 전부 웹검색이었다. */
const argsFile = (A && A.argsFile) || null
const evidenceBlock = (key) => argsFile ? `
## 이미 확보된 자료
**${argsFile}**
⚠️ **먼저 Read 도구로 이 파일을 읽어라.** \`industries\` 배열에서 \`key\` 가 **"${key}"** 인 항목의
\`memberNews\`(이 업종 대표 종목들의 최근 기사) 를 출발점으로 삼아라. 웹검색은 그 위에 더한다.` : ''

// 에이전트가 죽으면 1회만 다시 시도한다. 그래도 실패하면 실패로 남긴다.
const tryAgent = async (p, o) => {
  const r = await agent(p, o)
  if (r) return r
  log(`재시도: ${o.label}`)
  return await agent(p, { ...o, label: `${o.label}#2` })
}

const SOURCE = { type: 'object', properties: {
  title: { type: 'string' }, publisher: { type: 'string' }, url: { type: 'string' }, date: { type: 'string' },
  // ⚠️ quote 를 required 로 걸되 "제공된 자료의 문장"도 인정한다(RULES 참조).
  //    그냥 필수로만 걸면 원문을 못 읽는 유료기사·국내 PDF 인용이 통째로 강등돼 보고서가 더 얇아진다.
  quote: { type: 'string', description: '실제로 읽은 원문 문장 그대로. 웹에서 읽은 문장이거나 위에 제공된 자료(뉴스 제목·리포트 요약·실적 수치)의 문장. 요약하거나 번역하지 마라' },
}, required: ['title', 'publisher', 'url', 'date', 'quote'] }

const CLAIM = { type: 'object', properties: {
  id: { type: 'string' }, statement: { type: 'string' },
  evidence_level: { type: 'string', enum: ['sourced', 'no_source'] },
  sources: { type: 'array', items: SOURCE },
}, required: ['id', 'statement', 'evidence_level', 'sources'] }

const IND = { type: 'object', properties: {
  key: { type: 'string' }, industry: { type: 'string' },
  lead: { type: 'string', description: '리포트 첫 문단 3~5문장. 이 업종이 무엇을 하는 업종이고 지금 무슨 일이 벌어지는지. 아래 whyStrong 의 요약이어야 하며 새 사실을 넣지 마라' },
  whyStrong: { type: 'array', items: CLAIM, description: '이 업종이 강한 이유 3~5개. 각 항목 출처 필수. 각 문장에 숫자나 날짜를 넣어라' },
  driver: { type: 'string', enum: ['earnings', 'policy', 'macro', 'technology', 'commodity', 'rotation', 'unknown'] },
  durability: { type: 'string', enum: ['structural', 'cyclical', 'short_term', 'unknown'], description: '구조적인가 일시적인가' },
  keyStocks: { type: 'array', items: { type: 'string' } },
  risk: { type: 'string', description: '이 강세가 꺾일 조건 2~4문장. 무엇이 일어나면 이 논리가 깨지는지 구체적으로' },
}, required: ['key', 'industry', 'lead', 'whyStrong', 'driver', 'durability', 'risk'] }

const RULES = `
반드시 지킬 것:
1. 웹검색으로 실제 확인한 것만. 기억에 의존하지 마라.
2. 모든 주장에 접속 가능한 원문 URL. **URL 을 만들어내지 마라.**
3. 근거를 못 찾으면 evidence_level:"no_source", statement:"근거 없음", sources:[]. **추측 금지.**
4. 검색결과 페이지는 출처가 아니다.
5. ⚠️ 국내 매체(연합인포맥스/써치엠글로벌)를 인용할 때는 원출처를 2단으로 밝혀라.
   그 매체들은 해외 IB 코멘터리를 옮긴 것이 많다.
   예: "연합인포맥스 경유 · 원출처: 미즈호". 원출처가 불명이면 그렇게 적어라.
6. 아래 WRS 수치는 Node 가 확정한 것이다. 바꾸지 마라.
7. **quote 에는 실제로 읽은 문장을 원문 그대로 넣는다.** 제공된 memberNews 의 제목도 된다.
   요약해서 새로 쓰지 마라. 없으면 그 주장은 no_source 다.

## 글의 형태 — 리포트로 쓴다
- **lead(리드문) → whyStrong(근거) → risk(꺾일 조건)** 순서다. 리드문은 아래 근거의 요약이며
  리드문에만 있고 근거에 없는 사실을 쓰면 안 된다.
- **각 근거 문장에 숫자나 날짜를 최소 하나 넣어라.** 그 숫자는 quote 나 제공된 자료에 실제로 있어야 한다.
- 분량을 채우려고 추측하지 마라. 확인 못 한 것은 짧게 "근거 없음"이라고 적어라.
- **영문 약어를 그냥 쓰지 마라.** 뜻을 먼저 쓰고 이름은 괄호에 넣어라 —
  "WRS 0.42" 가 아니라 "업종 강도가 0.42(WRS, 지수 대비 초과수익률의 시총가중 평균)".
  길어졌다고 어려워지면 안 된다.`

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
${evidenceBlock(x.key)}

## 할 일
웹검색으로 **이 업종이 최근 왜 강한지**를 조사하세요.
공신력 있는 언론·투자은행·증권사 리포트를 근거로 삼으세요.
- lead: 리포트 첫 문단 3~5문장. 이 업종이 뭘 하는 곳이고 지금 무슨 일이 벌어지는지.
  **아래 whyStrong 의 요약이어야 한다** — 리드문에만 있는 사실을 쓰지 마라
- whyStrong: 3~5개 항목, 각각 출처 필수. 각 문장에 숫자나 날짜를 넣어라
- driver: 무엇이 이끄는가 (실적/정책/매크로/기술/원자재/단순 로테이션)
- durability: 구조적인가 순환적인가 단기인가
- keyStocks: 이 업종의 핵심 종목
- risk: **이 강세가 꺾일 조건 2~4문장.** 무엇이 일어나면 이 논리가 깨지는지 구체적으로.
  (필수 항목이다 — 비워두지 마라)

${RULES}
한글로 작성하세요.`,
  { label: `업종:${String(x.industry).slice(0, 18)}`, phase: '업종분석', schema: IND, model: 'sonnet' }
)))

const SUM = { type: 'object', properties: {
  rotationView: { type: 'string', description: '지금 자금이 어디서 어디로 움직이는지 한 문단' },
  strongest: { type: 'object', properties: { industry: { type: 'string' }, why: { type: 'string' } }, required: ['industry', 'why'] },
  emerging: { type: 'array', items: { type: 'string' }, description: '1개월 WRS 가 6개월보다 좋은 신흥 강세 업종' },
  fading: { type: 'array', items: { type: 'string' }, description: '6개월은 좋은데 1개월이 꺾인 업종' },
  caution: { type: 'string' },
}, required: ['rotationView', 'strongest'] }

const clean = analyzed.filter(Boolean)
// 재시도까지 하고도 결과가 없는 업종 = 실패.
// ⚠️ 반환값의 key 로 대조하면 안 된다. 스키마가 key 를 required 로 걸어도 모델이 입력값을
//    그대로 주지 않는다 — 실측(2026-08-12): "Technology|Computer Hardware" 를 넣었는데
//    "technology-computer-hardware" 를 돌려줬고, 그 결과 성공한 6건이 전부 실패로 표시됐다.
//    parallel 은 입력 순서를 보존하므로 인덱스로 판정한다. 이게 유일하게 확실한 방법이다.
const failed = targets.filter((t, i) => !analyzed[i]).map((t) => t.key)
const gotKeys = new Set(targets.filter((t, i) => analyzed[i]).map((t) => t.key))
if (failed.length) log(`⚠️ 업종 조사 실패 ${failed.length}건: ${failed.join(', ')}`)

/* ── 팩트체크 ──
   5팀은 지금까지 팩트체크 단계가 아예 없었다. 2·4팀은 있는데 5팀만 없어서
   출처 없는 업종 서술이 그대로 실장까지 올라갔다. 2·4팀과 같은 배치 검증을 넣는다. */
phase('팩트체크')
const CHECK = { type: 'object', properties: { results: { type: 'array', items: {
  type: 'object', properties: {
    industry: { type: 'string' },
    verdict: { type: 'string', enum: ['pass', 'partial', 'reject'] },
    removed_claim_ids: { type: 'array', items: { type: 'string' } },
    // ⚠️ 리드문은 근거의 요약이라 근거가 지워지면 같이 고쳐야 한다.
    //    2026-08-14 실측: 이 업종 리드문에 팩트체크가 지운 "백로그 513억 달러"(실제 51.3억)가 그대로 남았다.
    correctedLead: { type: 'string', description: '제거한 주장의 숫자·사실이 lead 에도 있으면 그 문장을 뺀 리드문. 뺄 것이 없으면 빈 문자열' },
    reason: { type: 'string' },
  }, required: ['industry', 'verdict', 'removed_claim_ids'],
} } }, required: ['results'] }

const FBATCH = 3
const fbatches = []
for (let i = 0; i < clean.length; i += FBATCH) fbatches.push(clean.slice(i, i + FBATCH))

const fchecks = await parallel(fbatches.map((b, i) => () => tryAgent(
  `다음 업종 강세 근거를 검증하세요. 오늘은 ${date}.

${JSON.stringify(b.map((x) => ({ industry: x.industry, lead: x.lead, whyStrong: x.whyStrong })), null, 1)}

각 claim 을 확인하고 문제가 있으면 removed_claim_ids 에 넣으세요:
- **statement 안의 숫자·날짜가 quote 나 출처 제목에 실제로 있는가?** 없으면 제거하라.
  분량을 늘리려고 그럴듯한 수치를 지어내는 것이 가장 위험하다. 이게 최우선 검증 항목이다.
- ⚠️ **단위 환산을 정확히 하라.** 1 billion = 10억, 1 million = 100만 이다.
  $64.1 billion = 641억 달러 · $104 billion = 1,040억 달러 · $143.5 million = 1억 4,350만 달러.
  **환산만 다르고 값이 같으면 정상이다 — 지우지 마라.**
  (2026-08-14 실측: 이 환산을 틀려 정확한 근거 2건을 지웠다. 검증이 지나치게 지우는 것도 오류다.)
- 출처가 그 주장을 실제로 뒷받침하는가 (제목·발행처가 무관하면 제거)
- **다른 업종 이야기를 이 업종 근거로 쓰지 않았는가** (예: 반도체 기사를 소프트웨어 근거로)
- 날짜가 "최근 강세"를 설명하기에 너무 오래되지 않았는가 (6개월 초과면 의심)
- evidence_level 이 'sourced' 인데 sources 가 비어있지 않은가

⚠️ **마지막으로 lead(리드문)를 검사하라.** 리드문은 근거의 요약이므로,
위에서 제거하기로 한 주장의 숫자·사실이 리드문에도 들어 있으면
**근거는 지워졌는데 요약문만 살아남는다.** 그런 문장이 있으면
correctedLead 에 **그 문장을 뺀 리드문**을 다시 써라.
남은 근거만으로 다시 쓰고 **새 사실을 넣지 마라.** 뺄 것이 없으면 correctedLead 를 빈 문자열로 두라.

의심스러우면 제거하는 쪽을 택하세요. 근거 없는 주장이 남는 것보다 낫습니다.`,
  { label: `팩트체크:${i + 1}/${fbatches.length}`, phase: '팩트체크', schema: CHECK, model: 'haiku' }
)))

// ⚠️ 여기선 industry 명으로 대조한다 — key 와 달리 industry 는 프롬프트에 그대로 노출돼
//    모델이 변형할 여지가 적다. 그래도 못 찾으면 그냥 건너뛴다(검증 실패 ≠ 주장 삭제).
const frm = new Map()
for (const c of fchecks.filter(Boolean)) for (const r of (c.results || [])) frm.set(r.industry, r)
for (const x of clean) {
  const r = frm.get(x.industry)
  if (!r) continue
  const rm = new Set(r.removed_claim_ids || [])
  x.factcheck = { verdict: r.verdict, removed: [...rm], reason: r.reason || '' }
  x.whyStrong = (x.whyStrong || []).filter((c) => !rm.has(c.id))
  if (!x.whyStrong.length) x.whyStrong = [{ id: 'none', statement: '근거 없음', evidence_level: 'no_source', sources: [] }]
  // 근거가 지워졌으면 그 근거를 요약한 리드문도 같이 고친다. 원문은 남겨 대조할 수 있게 한다.
  const cl = String(r.correctedLead || '').trim()
  if (rm.size && cl.length > 20 && cl !== x.lead) { x.leadOriginal = x.lead; x.lead = cl; x.factcheck.leadFixed = true }
}

phase('종합')
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
