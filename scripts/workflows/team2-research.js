export const meta = {
  name: 'bt-team2-research',
  description: '2팀 종목 리서치 — 상승 이유 + 증권사 실적 전망치 조정, 전부 출처 URL 필수',
  whenToUse: 'start breakout 실행 시. 2팀이 선정한 종목의 상승 이유와 테마를 사실 기반으로 조사할 때',
  phases: [
    { title: '종목리서치', detail: '종목별 상승 이유 · 추정치 조정 (제공 자료 우선, 부족분만 웹검색)' },
    { title: '팩트체크', detail: '출처 없는 주장 제거 (6종목 배치, 텍스트 대조만)' },
    { title: '목록테마', detail: '도윤 5개 목록마다 1명 — 공통 업종·뉴스로 묶이는 테마 (2026-10-06)' },
    { title: '목록팩트체크', detail: '테마 설명의 숫자·사실이 출처에 실제로 있는지 대조 — 없으면 테마 삭제 (2026-10-08)' },
  ],
}
// 사용법: Workflow({ scriptPath: '<abs>/scripts/workflows/team2-research.js',
//   args: <state/llm-in/_args.json 의 team2args> — { date, cap, argsDir, listsFile, lists:[{key,label,count}], picks:[경량] }

let A = args
if (typeof A === 'string') { try { A = JSON.parse(A) } catch (e) { A = null } }
const date = (A && A.date) || 'today'
const picks = (A && A.picks) || []
// 도윤 5개 목록 (2026-10-06) — 목록별 테마 분석. 무거운 자료(뉴스·리서치)는 listsFile 에 있고 에이전트가 Read 한다.
const lists = ((A && A.lists) || []).filter((l) => l && l.count > 0)
const listsFile = (A && A.listsFile) || null
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
\`detail.filings\`(SEC 8-K) · \`detail.krReports\`(국내 증권사 리포트, 요약·PDF 링크) ·
\`cnbc\`(CNBC 가 이 종목에 태그한 기사 제목·URL — 본문 숫자가 필요하면 URL 을 직접 열어 인용하라. 'pro' 는 유료라 제목만) ·
\`kis\`(한국투자증권 — PER·EPS·상장주식수·시가총액) 를 근거로 삼아라.
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
  company: { type: 'string', description: '이 회사가 뭘 해서 돈을 버는지 최대 2문장. 예: "인터넷·데이터센터용 통신 반도체를 만드는 회사. 최근 AI 데이터센터용 매출이 빠르게 늘고 있다"' },
  lead: { type: 'string', description: '최대 3문장. ①왜 올랐나 ②그 근거 ③무엇이 확인되면 이야기가 깨지나. 아래 whyRose 의 요약이어야 하며 리드문에만 있고 근거에 없는 사실을 넣지 마라' },
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
## 서술 기준 — 독자는 주식 투자를 하는 일반인이다 (2026-10-02 사용자 결정. 이전: 금융 실무자 대상)
1. 한 문장은 한 가지 내용만, 60~80자. 칸마다 정해진 문장 수 상한을 넘기지 마라.
   짧게 쓰되 **무슨 일이 왜 일어났고 그래서 뭐가 달라지는지**는 반드시 쓴다 — 사실만 나열하고 이유·영향을 빼면 읽는 사람이 이해하지 못한다.
   빼야 할 것은 작업 경위("제공 자료에", "본문 403")와 당연한 말뿐이다.
2. 결론부터. 첫 문장만 읽어도 "그래서 뭐가 중요한지"가 보이게 쓴다.
3. 숫자는 결론을 받치는 핵심 1~3개만. 같은 숫자를 칸마다 반복하지 마라. 쓸 때는 단위·기간을 붙인다(예: "분기 매출 1.7억 달러, 1년 전보다 55% 증가").
4. 전문 용어는 꼭 필요할 때만, 처음 나올 때 괄호로 풀어 준다.
   예: "가이던스(회사가 내놓은 다음 분기 전망)", "컨센서스(증권사 예상치 평균)", "희석(새 주식 발행으로 기존 주주 몫이 줄어듦)".
   리레이팅·멀티플·듀레이션·크랙 스프레드처럼 일반인이 모르는 말은 풀어 쓴 표현으로 바꿔라.
5. 이 시스템 지표 이름(WRS·FRANK·VOL_X·CLS_POS·BBWTHD·F10d·F25d·frank25·stageKo·d50·d200)과 입력 JSON 의 키 이름을 문장에 쓰지 마라.
   뜻으로 바꿔 쓴다: d50 → "두 달 평균보다 N% 위", d200 → "1년 평균보다 N% 위", FRANK 3위 → "업종 순위 3위",
   frank25 +25 → "한 달 새 순위 25계단 상승", VOL_X 3.1 → "거래량이 평소의 3.1배".
6. 영어 업종·섹터 이름은 한국어로(Semiconductors → 반도체). 회사명·티커는 원문 그대로. 영어 문장을 섞지 마라.
7. 작업 과정은 쓰지 않는다. "제공 자료에 없다", "입력에 없다", "Node", "본문 403", "확인 불가" 같은 설명 금지.
   모르는 것은 그냥 쓰지 않는다. 근거가 하나도 없을 때만 "근거 없음" 한 마디.
8. 숫자는 quote나 제공 자료에 실제로 있는 것만 쓴다. 분량을 채우려고 추측하지 마라.
9. 매수·매도 권유는 하지 않는다. 대신 "무엇이 확인되면 이 이야기가 맞고/틀린지"를 한 문장으로 끝낸다.`

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
    `당신은 미국 주식이 왜 올랐는지 조사하는 담당자입니다. 독자는 일반 투자자입니다. 오늘은 ${date}. 종목: ${p.ticker} (${p.nameKo || d.nameKo || ''} / ${p.sector} / ${p.industry})

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

phase('목록테마')
// 2026-10-06 사용자 요청: 도윤을 RS 사이트 기준 5개 목록(거래대금 상위 · RS 1/3/6개월 상위 2% · 세 기간 모두)으로 나누고,
//   목록마다 ① 공통 업종(Node 가 이미 계산) ② 업종이 달라도 뉴스로 묶이는 공통 테마를 찾는다. 예전 테마종합(1명)을 대체한다.
const THEME_STYLE = `
## 서술 기준 — 독자는 주식 투자를 하는 일반인이다
1. 한 문장에 한 가지 내용, 60~80자. 칸마다 정해진 문장 수를 넘기지 마라. 왜 같이 오르는지(원인)는 반드시 쓴다.
2. 묶는 단위는 업종과 테마 두 가지뿐이다. 섹터(기술·헬스케어 같은 큰 분류)로 묶지 마라.
3. 업종 이름은 한국어로 쓴다 (Semiconductors → 반도체, Diagnostics & Research → 진단·연구). 티커는 원문 그대로.
4. 테마 이름은 "무엇 때문에 오르는지"가 보이게 짓는다 (예: "AI 데이터센터 전력 수요", "비만 치료제 임상 결과"). "○○ 쏠림" 같은 이름은 금지.
5. 숫자는 "N종목" 정도만. 퍼센트·순위 나열 금지 — 표가 화면에 따로 있다.
6. 작업 과정은 쓰지 않는다. "Node", "클러스터", "제공 자료", "입력 파일" 같은 말은 금지.
7. 이유가 확인 안 된 종목은 지어내지 말고 unexplained 에 모은다.
8. 한국어로 쓴다. 영어 문장을 섞지 마라.`

const LIST_THEME = { type: 'object', properties: {
  key: { type: 'string', description: '입력 목록의 key 그대로' },
  commonIndustries: { type: 'array', items: { type: 'object', properties: {
    industry: { type: 'string', description: '입력 industries 의 industry 그대로(영문)' },
    tickers: { type: 'array', items: { type: 'string' } },
    why: { type: 'string', description: '이 업종 종목들이 왜 같이 강한지 최대 2문장. 뉴스·리서치에 근거가 있을 때만. 없으면 "이유 확인 안 됨"' },
  }, required: ['industry', 'tickers', 'why'] }, description: '입력 industries(2종목 이상 모인 업종) 각각에 대해 한 줄씩. 입력에 없는 업종을 만들지 마라' },
  themes: { type: 'array', items: { type: 'object', properties: {
    name: { type: 'string', description: '테마 이름 20자 안팎, 한국어, 무엇 때문에 오르는지가 보이게' },
    plainKo: { type: 'string', description: '최대 2문장. 이 종목들이 왜 같이 오르는지 결론' },
    why: { type: 'string', description: '근거 최대 3문장. 종목별로 무슨 일이 있었는지' },
    tickers: { type: 'array', items: { type: 'string' }, description: '이 목록 안의 티커만. 업종이 달라도 된다 — 업종을 가로지르는 공통점이 핵심이다' },
    sources: { type: 'array', items: SOURCE, description: '근거 기사. 입력 news 의 url·제목을 그대로 쓰거나 웹에서 실제로 읽은 것만' },
  }, required: ['name', 'plainKo', 'why', 'tickers', 'sources'] }, description: '2종목 이상이 같은 이유로 오르는 테마 0~4개. 없으면 빈 배열 — 억지로 묶지 마라' },
  unexplained: { type: 'array', items: { type: 'string' }, description: '어떤 업종·테마로도 이유를 확인하지 못한 티커' },
  narrative: { type: 'string', description: '이 목록을 3~4문장으로 요약 — 어디에 몰렸고, 왜, 무엇이 확인되면 이 흐름이 맞는지/틀린지' },
}, required: ['key', 'commonIndustries', 'themes', 'unexplained', 'narrative'] }

const listThemes = await parallel(lists.map((l) => () => tryAgent(
  `당신은 오늘 강한 종목 목록에서 공통점(업종·테마)을 찾는 담당자입니다. 독자는 일반 투자자입니다. 오늘은 ${date}.
목록: **${l.label}** (key: "${l.key}", ${l.count}종목)

## 가장 먼저 Read 도구로 이 파일을 읽어라
**${listsFile}**
그 안의 \`lists\` 배열에서 **key 가 "${l.key}" 인 항목만** 본다. 다른 목록은 보지 마라.
- \`items\`: 목록 종목(티커·이름·업종)
- \`industries\`: 2종목 이상 모인 업종 (Node 가 계산 — 이미 확정)
- \`lone\`: 업종이 겹치지 않는 종목
- \`news\`: 종목별 최근 뉴스 제목·URL (제공된 자료 — 가장 안전한 근거)
- \`research\`: 이미 조사된 종목의 회사 설명·상승 이유(출처 검증 통과분)

## 할 일
1. commonIndustries — industries 각각에 대해 "왜 같이 강한지"를 뉴스·리서치로 한두 문장. 근거가 없으면 "이유 확인 안 됨".
2. themes — **업종이 달라도** 같은 이유(같은 정책·같은 기술 수요·같은 원자재·같은 실적 사이클)로 오르는 종목을 묶는다.
   2종목 이상일 때만. 억지로 묶지 마라 — 공통 테마가 없으면 빈 배열이 정답이다.
3. unexplained — 이유를 못 찾은 티커.
4. narrative — 목록 전체 요약 3~4문장.

## 반드시 지킬 것
1. **제공된 자료(뉴스 제목·리서치)에서 먼저 근거를 찾고**, 그래도 부족한 테마만 웹검색한다. 웹검색·페이지 열람은 최대 6회.
2. 티커는 이 목록(items) 안의 것만 쓴다. 목록 밖 티커를 만들지 마라.
3. sources 의 url 은 news 에 있는 것이거나 웹에서 실제로 읽은 원문만. **URL 을 만들어내지 마라.**
   **숫자(%, 금액, 건수)를 쓰려면 그 숫자가 들어 있는 원문 문장을 그 테마 sources 의 quote 에 그대로 넣어라.** quote·제목에 없는 숫자가 든 문장은 코드가 자동으로 지운다.
4. 근거가 부족하면 짧게 끝낸다. 분량을 채우려고 추측하지 마라.
${THEME_STYLE}`,
  { label: `목록테마:${l.key}`, phase: '목록테마', schema: LIST_THEME, model: 'sonnet' }
)))
// 입력 key 를 결과에 강제한다 (모델이 key 를 바꿔 쓰면 화면이 목록을 못 찾는다). 실패한 목록은 failed 로 남긴다.
const listThemesOut = lists.map((l, i) => (listThemes[i] ? { ...listThemes[i], key: l.key, label: l.label } : { key: l.key, label: l.label, failed: true }))
const failedLists = listThemesOut.filter((x) => x.failed).map((x) => x.key)
if (failedLists.length) log(`⚠️ 목록 테마 실패: ${failedLists.join(', ')}`)

// ── 목록테마 팩트체크 (2026-10-08) — 테마 설명의 숫자·사실이 출처(인용문·제목)에 실제로 있는가 ──
//    없으면 그 테마를 지운다(테마는 근거가 핵심이라 문장만 고치지 않는다). 하이쿠 1명이 5개 목록을 한 번에 본다.
phase('목록팩트체크')
const TCHK = { type: 'object', properties: { results: { type: 'array', items: { type: 'object', properties: {
  key: { type: 'string' }, themeIndex: { type: 'number', description: '입력 themes 배열의 위치 그대로' },
  keep: { type: 'boolean', description: 'why·plainKo 의 숫자·날짜·사건이 sources 의 quote 나 title 에 실제로 있으면 true' },
  reason: { type: 'string' },
}, required: ['key', 'themeIndex', 'keep'] } } }, required: ['results'] }
const toCheck = listThemesOut.filter((l) => !l.failed && (l.themes || []).length)
if (toCheck.length) {
  const chk = await tryAgent(
    `다음 목록별 테마를 검증하세요. **웹에 접근하지 말고** 아래 텍스트만 대조하라.

${JSON.stringify(toCheck.map((l) => ({ key: l.key, themes: (l.themes || []).map((t, i) => ({ themeIndex: i, name: t.name, plainKo: t.plainKo, why: t.why, sources: (t.sources || []).map((x) => ({ title: x.title, quote: x.quote, url: x.url })) })) })), null, 1)}

각 테마마다 판정하라:
- **why·plainKo 안의 숫자·날짜가 quote 나 출처 제목에 실제로 있는가?** 없으면 keep:false. 분량을 늘리려고 지어낸 수치가 가장 위험하다.
- 출처가 그 테마의 종목 이야기를 실제로 담고 있는가(제목이 무관하면 keep:false).
- sources 가 비어 있으면 keep:false.
- 단위 환산(1 billion = 10억)만 다르고 값이 같으면 정상이다.
의심스러우면 지우는 쪽(keep:false)을 택하라. results 에 모든 테마를 하나씩 넣어라.`,
    { label: '목록팩트체크', phase: '목록팩트체크', schema: TCHK, model: 'haiku' })
  if (!chk) log('⚠️ 목록 테마 팩트체크 실패 — 검증되지 않은 테마는 화면에 "검증 안 됨"으로 표시된다')
  const drop = new Set(((chk && chk.results) || []).filter((r) => r.keep === false).map((r) => `${r.key}:${r.themeIndex}`))
  // 숫자 대조는 Node(build-chief-report → verify-claims → lib/number-guard)가 한다 — 하이쿠는 2026-10-08 "41% 늘었다"(출처에 없음)를 통과시켰다.
  for (const l of toCheck) {
    const before = (l.themes || []).length
    l.themes = (l.themes || []).filter((t, i) => !drop.has(`${l.key}:${i}`))
    l.factcheck = chk ? { verdict: before === l.themes.length ? 'pass' : 'partial', removed: before - l.themes.length } : { verdict: 'unchecked', removed: 0 }
  }
}

return {
  date,
  team: 2,
  researched: clean,
  listThemes: listThemesOut,
  failed,
  coverage: { done: clean.length, total: picks.length, cap: CAP, failed: failed.length },
  factcheckBatches: batches.length,
}
