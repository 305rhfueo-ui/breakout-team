export const meta = {
  name: 'bt-team2-research',
  description: '2팀 종목 리서치 — 상승 이유 + 증권사 실적 전망치 조정, 전부 출처 URL 필수',
  whenToUse: 'start breakout 실행 시. 2팀이 선정한 종목의 상승 이유와 테마를 사실 기반으로 조사할 때',
  phases: [
    { title: '종목리서치', detail: '종목별 상승 이유 · 추정치 조정 (제공 자료 우선, 부족분만 웹검색)' },
    { title: '팩트체크', detail: '출처 없는 주장 제거 (6종목 배치, 텍스트 대조만)' },
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
// 기간별(1M·3M·6M) 테마 3세트 + 교차 — Node 확정 (2026-09-07). 없으면 유니온만 본다.
const themesByPeriod = (A && A.themesByPeriod) || null
const cross = (A && A.cross) || null
const crossDetail = (A && A.crossDetail) || null
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
  // ⚠️ quote 를 required 로 걸되 "제공된 자료의 문장"도 인정한다.
  //    그냥 필수로만 걸면 원문을 못 읽는 유료기사·국내 PDF 인용이 통째로 강등돼 보고서가 더 얇아진다.
  quote: { type: 'string', description: '실제로 읽은 원문 문장 그대로. 웹에서 읽은 문장이거나 위에 제공된 자료(뉴스 제목·리포트 요약·실적 수치)의 문장. 둘 다 아니면 그 주장은 no_source 다. 요약하거나 번역하지 마라' },
}, required: ['title', 'publisher', 'url', 'date', 'quote'] }

const CLAIM = { type: 'object', properties: {
  id: { type: 'string' },
  statement: { type: 'string' },
  evidence_level: { type: 'string', enum: ['sourced', 'no_source'] },
  sources: { type: 'array', items: SOURCE },
}, required: ['id', 'statement', 'evidence_level', 'sources'] }

// ⚠️ 필드 이름(company·lead·whyRose…)은 대시보드 렌더러가 읽는다. 이름은 두고 설명만 바꾼다.
const STOCK = { type: 'object', properties: {
  ticker: { type: 'string' },
  company: { type: 'string', description: '사업 모델·매출 구성·핵심 고객·현 국면을 밀도 있게 최대 3문장. 금융 실무자 대상, 교과서식 부연 금지' },
  lead: { type: 'string', description: '리포트 첫 문단 최대 3문장. 지금 무슨 일이 벌어지고 있는지. 아래 whyRose 의 요약이어야 하며 리드문에만 있고 근거에 없는 사실을 넣지 마라' },
  whyRose: { type: 'array', items: CLAIM, description: '최근 상승 이유 최대 4개. 각 항목에 출처 필수. 제공된 뉴스·리포트·8-K 를 근거로 써도 된다(가장 안전하다)' },
  counterpoint: { type: 'array', items: CLAIM, description: '반대 근거·한계·리스크 최대 2개 (실적은 좋은데 주가가 빠짐, 증자·희석, 성장률 둔화 등). 비어 있어도 정상 — 칸을 채우려고 지어내지 마라' },
  estimateRevisions: { type: 'object', properties: {
    direction: { type: 'string', enum: ['raised', 'lowered', 'mixed', 'none', 'unknown'] },
    claims: { type: 'array', items: CLAIM, description: '최대 2개. 확인 안 되면 direction:"unknown", claims:[]' },
  }, required: ['direction', 'claims'] },
  themeTags: { type: 'array', items: { type: 'string' }, description: '이 종목을 묶을 수 있는 테마 (예: "AI 인프라", "비만치료제"). 없으면 빈 배열' },
  upcomingCatalyst: { type: 'object', description: '확정된 일정(실적발표일 등)이 있을 때만. 확정된 일정이 없으면 이 필드를 생략하라', properties: { date: { type: 'string' }, what: { type: 'string' }, sources: { type: 'array', items: SOURCE } } },
  confidence: { type: 'string', enum: ['high', 'medium', 'low'], description: '근거의 충실도' },
}, required: ['ticker', 'company', 'lead', 'whyRose', 'estimateRevisions', 'confidence'] }

const STYLE = `
## 서술 기준 — 독자는 재무·회계 전공의 금융 실무자다
1. 눈높이를 낮추지 마라. 비유·초보자용 요약·"쉽게 말해" 식 풀이는 쓰지 않는다.
2. 표준 용어는 그대로 쓴다: YoY/QoQ, 가이던스, 컨센서스, EPS, FCF, 마진, 백로그, 크랙 스프레드, PIPE, 전환사채, 희석, 리레이팅, 밸류에이션, RS 백분위, ADR, 50/200일선 이격 등.
3. 이 시스템 고유 지표(WRS·VOL_X·CLS_POS·BBWTHD·F10d·Congestion)는 처음 한 번만 정의를 붙이고 이후엔 이름만 쓴다. 예: "VOL_X 3.1(거래대금 20일 평균 대비)" → 이후 "VOL_X 3.1".
4. 원 수치를 생략하지 마라. 제공된 실적표·RS·WRS·이격·거래량 배수·가이던스 수치는 단위와 기간을 붙여 그대로 인용한다. 문단당 숫자 개수 제한은 없다.
5. 숫자는 quote나 제공 자료에 실제로 있는 것만 쓴다. 근거에 숫자가 없으면 숫자 없이 서술한다.
6. 구조: 결론 → 근거(출처) → 반대 근거/리스크 → 확인할 조건. 각 항목은 필요한 만큼만, 상한은 지킨다.
7. 회사 설명은 사업 모델·매출 구성·핵심 고객·현 국면을 밀도 있게 2~3문장. 교과서식 부연 금지.
8. 판단 근거를 밝히되 매수·매도 권유는 하지 않는다. "무엇이 확인되면 논리가 성립/붕괴하는지"로 끝낸다.
9. 근거가 없으면 "근거 없음"이라고 짧게 쓴다. 분량을 채우기 위한 서술·추측은 금지.
10. 한국어로 쓴다. 영문 고유명사·티커·지표명은 원문 그대로 둔다.`

const RULES = `
반드시 지킬 것 (어기면 결과를 폐기한다):
1. **제공된 자료(뉴스·8-K·국내 리포트 요약·SEC 실적표)에서 먼저 근거를 채우고**, 그래도 부족한 항목만 웹검색한다.
   웹검색·페이지 열람은 종목당 최대 6회.
2. 웹검색으로 실제 확인한 내용만 쓴다. 기억에 의존하지 마라.
3. 모든 주장에 실제 접속 가능한 원문 URL 을 붙인다. **URL 을 만들어내지 마라.**
   검색결과 페이지(google.com/search 등)는 출처가 아니다.
4. 근거를 못 찾으면 evidence_level:"no_source", statement:"근거 없음", sources:[] 로 반환한다.
   **추측으로 채우지 마라.** 빈 결과는 실패가 아니라 정상이다.
5. **lead → whyRose → counterpoint** 순서다. 리드문은 근거의 요약이며 리드문에만 있는 사실을 쓰면 안 된다.
${STYLE}`

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
위 자료를 출발점으로 스키마의 각 필드를 채우세요. 각 필드의 분량·조건은 스키마 설명을 따른다.
- company → lead → whyRose → counterpoint → estimateRevisions(국내 리포트 요약에 단서가 있으면 활용)
  → themeTags → upcomingCatalyst(확정 일정 없으면 생략) → confidence
${RULES}`,
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
    idx: { type: 'number', description: '입력 배열의 idx 를 그대로' },
    ticker: { type: 'string' },
    verdict: { type: 'string', enum: ['pass', 'partial', 'reject'] },
    removed_claim_ids: { type: 'array', items: { type: 'string' } },
    // ⚠️ 리드문은 근거의 요약이다. 근거가 제거되면 리드문에서도 그 문장을 빼야 하는데
    //    검증을 근거에만 걸어서 "근거는 지워졌는데 요약문만 살아남는" 구멍이 있었다
    //    (2026-08-14 실측: 5팀 리드문에 팩트체크가 지운 "백로그 513억 달러"가 그대로 남음).
    correctedLead: { type: 'string', description: '제거한 주장의 숫자·사실이 lead 에도 있으면 그 문장을 뺀 리드문. 뺄 것이 없으면 빈 문자열' },
    reasons: { type: 'array', items: { type: 'string' } },
  }, required: ['idx', 'ticker', 'verdict', 'removed_claim_ids'],
} } }, required: ['results'] }

// 단위 환산 주의는 모델용이다. 2026-08-14 실측: 환산을 틀려 정확한 근거 2건을 지웠다 —
// 검증이 지나치게 지우는 것도 오류라서 "환산만 다르면 정상" 을 명시한다.
const checks = await parallel(batches.map((b, i) => () => tryAgent(
  `다음 종목 리서치 결과를 검증하세요. 오늘은 ${date}.
**웹에 접근하지 말고** 아래 텍스트(statement·quote·출처 제목)만 대조하라.

${JSON.stringify(b.map((x, idx) => ({ idx, ticker: x.ticker, lead: x.lead, whyRose: x.whyRose, counterpoint: x.counterpoint, estimateRevisions: x.estimateRevisions })), null, 1)}

각 claim 에 대해 다음을 확인하고, 문제가 있으면 removed_claim_ids 에 넣으세요:
- **statement 안의 숫자·날짜가 quote 나 출처 제목에 실제로 있는가?** 없으면 제거하라.
  분량을 늘리려고 그럴듯한 수치를 지어내는 것이 가장 위험하다. 이게 최우선 검증 항목이다.
- 단위 환산: 1 billion = 10억, 1 million = 100만 ($64.1 billion = 641억 달러 · $143.5 million = 1억 4,350만 달러).
  **환산만 다르고 값이 같으면 정상이다 — 지우지 마라.**
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

results 의 각 항목에 입력의 idx 를 그대로 넣어라. 의심스러우면 제거하는 쪽을 택하세요.`,
  { label: `팩트체크:${i + 1}/${batches.length}`, phase: '팩트체크', schema: CHECK, model: 'haiku' }
)))

// 팩트체크 결과 반영 (Node 가 확정적으로 적용 — LLM 이 다시 쓰게 두지 않는다)
// ⚠️ ticker 문자열로 대조하지 않는다 — 모델이 바꿔 쓰면 그 종목이 검증 없이 조용히 통과했다.
//    배치 내 위치(idx)로 대조하고, 못 찾으면 'unchecked' 로 표시해 "검증됨"과 구분한다.
const checkFor = new Map()
checks.forEach((c, bi) => { for (const r of ((c && c.results) || [])) { const k = Number(r.idx); if (Number.isInteger(k)) checkFor.set(`${bi}:${k}`, r) } })
batches.forEach((b, bi) => b.forEach((s, idx) => {
  const r = checkFor.get(`${bi}:${idx}`)
  if (!r) {
    s.factcheck = { verdict: 'unchecked', removed: [], reasons: ['팩트체크 결과를 대조하지 못했다 — 검증되지 않았다'] }
    log(`⚠️ 팩트체크 미대조: ${s.ticker}`)
    return
  }
  const rm = new Set(r.removed_claim_ids || [])
  s.factcheck = { verdict: r.verdict, removed: [...rm], reasons: r.reasons || [] }
  s.whyRose = (s.whyRose || []).filter((c) => !rm.has(c.id))
  s.counterpoint = (s.counterpoint || []).filter((c) => !rm.has(c.id))
  if (s.estimateRevisions) s.estimateRevisions.claims = (s.estimateRevisions.claims || []).filter((c) => !rm.has(c.id))
  if (!s.whyRose.length) s.whyRose = [{ id: 'none', statement: '검증을 통과한 상승 이유 근거 없음', evidence_level: 'no_source', sources: [] }]
  // 근거가 지워졌으면 그 근거를 요약한 리드문도 같이 고친다. 원문은 남겨 대조할 수 있게 한다.
  const cl = String(r.correctedLead || '').trim()
  if (rm.size && cl.length > 20 && cl !== s.lead) { s.leadOriginal = s.lead; s.lead = cl; s.factcheck.leadFixed = true }
  // 주장이 전부 지워졌는데 고친 리드문이 없으면 원래 리드문은 근거 없는 요약이다 — 남기지 않는다 (2026-09-09 5팀 실측).
  else if (rm.size && s.whyRose[0].id === 'none') {
    s.leadOriginal = s.lead
    s.lead = `근거 없음 — 출처 검증을 통과한 상승 이유가 없다 (${rm.size}개 주장 제거)`
    s.factcheck.leadFixed = true
  }
}))

phase('테마종합')
// ⚠️ plainKo 라는 이름은 대시보드가 읽는다. 이름은 두고 설명만 바꾼다.
const THEME = { type: 'object', properties: {
  leadingTheme: { type: 'object', properties: {
    name: { type: 'string' },
    plainKo: { type: 'string', description: '한 문단 요약 최대 3문장. 화면 맨 위에 굵게 보여줄 결론 — 이 종목들이 왜 같이 오르는지. URL·원문 인용·(1)(2) 번호 금지' },
    why: { type: 'string', description: '출처 딸린 상세 근거. URL·원문 인용은 여기에만' },
    tickers: { type: 'array', items: { type: 'string' } },
    strength: { type: 'string', enum: ['strong', 'emerging', 'weak', 'none'] },
  }, required: ['name', 'plainKo', 'why', 'tickers', 'strength'] },
  subThemes: { type: 'array', items: { type: 'object', properties: {
    name: { type: 'string' },
    plainKo: { type: 'string', description: '한 문단 요약 최대 2문장. URL 넣지 마라' },
    tickers: { type: 'array', items: { type: 'string' } }, why: { type: 'string' },
  }, required: ['name', 'plainKo', 'tickers'] } },
  crossCuttingDriver: { type: 'string', description: '종목들을 관통하는 공통 원인 한 문단 (예: 금리, AI 자본지출, 정책)' },
  caution: { type: 'string', description: '이 테마 해석의 한계·반증 가능성' },
  // 기간별 3세트 — 각 기간의 상위 2% 안에서만 테마를 붙인다. 티커는 Node 클러스터에 있는 것만 (build-chief-report 가 교집합으로 정제)
  byPeriod: { type: 'object', properties: Object.fromEntries(['m1', 'm3', 'm6'].map((k) => [k, { type: 'object', properties: {
    name: { type: 'string', description: '이 기간 상위 2% 의 주도 테마 이름. 없으면 "공통 테마 없음"' },
    plainKo: { type: 'string', description: '최대 2문장 결론. URL 금지' },
    tickers: { type: 'array', items: { type: 'string' }, description: '이 기간 클러스터에 실제로 있는 티커만' },
    strength: { type: 'string', enum: ['strong', 'emerging', 'weak', 'none'] },
  }, required: ['name', 'plainKo', 'tickers', 'strength'] }])), required: ['m1', 'm3', 'm6'] },
  rotation: { type: 'object', properties: {
    persistent: { type: 'array', items: { type: 'string' }, description: 'Node 교차 목록의 지속 주도(1M·3M·6M 모두) 중 해석에 쓴 티커' },
    newEntrants: { type: 'array', items: { type: 'string' }, description: 'Node 교차 목록의 신규 진입(1M 만) 중 해석에 쓴 티커' },
    fading: { type: 'array', items: { type: 'string' }, description: 'Node 교차 목록의 퇴조(6M 만) 중 해석에 쓴 티커' },
    narrative: { type: 'string', description: '1M 에 새로 들어오는 곳과 6M 에만 남은 곳의 차이를 최대 4문장으로. 기간별 클러스터 수치를 그대로 인용' },
  }, required: ['persistent', 'newEntrants', 'fading', 'narrative'] },
}, required: ['leadingTheme', 'subThemes', 'crossCuttingDriver', 'byPeriod', 'rotation'] }

const periodBlock = themesByPeriod ? `
## Node 가 확정한 기간별 상위 2% 클러스터 (1M·3M·6M 각각. 숫자 절대 바꾸지 마라)
한 종목이 여러 기간에 들어갈 수 있다. 비중의 분모는 그 기간의 종목 수다.
${JSON.stringify(themesByPeriod, null, 1)}

## Node 가 확정한 기간 교차 (지속 = 3기간 모두 · 신규 = 1M 만 · 중기 = 3M · 퇴조 = 6M 만)
${JSON.stringify({ counts: cross && cross.counts, persistent: cross && cross.persistent, newEntrants: cross && cross.newEntrants, midTerm: cross && cross.midTerm, fading: cross && cross.fading, other: cross && cross.other, streaks: crossDetail }, null, 1)}
(streaks 의 D+N = 그 기간 상위 2% 에 연속 포함된 거래일 수)` : ''

const theme = await tryAgent(
  `당신은 주도 테마를 판별하는 전략가입니다. 오늘은 ${date}.

## Node 가 확정한 클러스터 — 전 기간 합집합 (이 숫자는 절대 바꾸지 마라)
${clusters.length ? JSON.stringify(clusters, null, 1) : '(클러스터 없음 — 테마를 만들지 마세요)'}
${periodBlock}

## 검증 통과한 종목별 리서치
${JSON.stringify(clean.map((x) => ({ ticker: x.ticker, themeTags: x.themeTags, whyRose: (x.whyRose || []).map((c) => c.statement) })), null, 1)}

## 할 일
- leadingTheme: 지금의 주도 테마. **위 클러스터에 실제로 존재하는 종목만** 넣어라.
  ⚠️ 공통 테마가 없으면 name:"공통 테마 없음", strength:"none" 으로 정직하게 답하라. 억지로 묶지 마라.
- subThemes: 2~3개 종목 수준의 소규모 공통점도 잡아라. 전원 공통일 필요 없다.
- byPeriod: 1M·3M·6M **각각의 상위 2% 안에서** 주도 테마를 따로 붙여라. 그 기간 클러스터에 있는 티커만 넣고,
  그 기간에 공통 테마가 없으면 strength:"none". 유니온 테마를 복사하지 마라 — 기간마다 달라야 정상이다.
- rotation: Node 교차 목록(지속·신규·퇴조) 안의 티커만 써서 "1M 에 새로 들어오는 곳 vs 6M 에만 남은 곳" 의 차이를 narrative 로.
  기간별 클러스터 수치(N종목, %)를 그대로 인용하라. 교차 목록이 비면 그렇다고 써라.
- plainKo 와 why 는 역할이 다르다 — plainKo 는 결론 요약, why 는 출처 딸린 근거. 섞지 마라.
- 근거는 위 리서치에 있는 것만 쓴다. 웹검색은 하지 않는다. 입력에 없는 티커·사실을 만들지 마라.
${STYLE}`,
  { label: '테마종합', phase: '테마종합', schema: THEME, model: 'sonnet' }
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
