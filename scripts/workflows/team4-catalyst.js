export const meta = {
  name: 'bt-team4-catalyst',
  description: '4팀 Episodic Pivot — 거래량 급증 종목의 호재성 뉴스 6분류, 출처 URL 필수',
  whenToUse: 'start breakout 실행 시. VOL_X 급증 종목의 촉매를 사실 기반으로 분류할 때',
  phases: [
    { title: '촉매분류', detail: '종목별 호재 6분류 + 근거 (웹검색)' },
    { title: '팩트체크', detail: '출처 없는 주장 제거 (5종목 배치)' },
    { title: '종합', detail: '①어닝서프라이즈 ⑤산업돌파 하이라이트' },
  ],
}
// 사용법: Workflow({ scriptPath:'<abs>/scripts/workflows/team4-catalyst.js',
//   args:{ date, items:[{ticker,volx,volSurgeWk,congestion,...}], cap } })

let A = args
if (typeof A === 'string') { try { A = JSON.parse(A) } catch (e) { A = null } }
const date = (A && A.date) || 'today'
const items = (A && A.items) || []
const CAP = Number.isFinite(A && A.cap) ? A.cap : 15     // `|| 15` 이면 cap:0 이 15 로 둔갑한다

/* ── 무거운 자료는 파일로 ──
   워크플로 스크립트는 파일시스템에 접근할 수 없다 → 에이전트가 직접 Read 한다.
   스크립트는 몇 명을 띄울지 알아야 하므로 티커 목록만 인라인으로 받는다. */
const argsDir = (A && A.argsDir) || null
const fileFor = (tk) => argsDir ? `${argsDir}/${tk}.json` : null
const evidenceBlock = (tk, news, fil) => argsDir ? `## 이미 확보된 자료 (Node 가 수집한 1차 자료)
**${fileFor(tk)}**

⚠️ **가장 먼저 Read 도구로 이 파일을 읽어라.** 읽지 않고 판정하면 안 된다. ${tk} 전용 파일이다.
그 안의 \`news\`(이 종목을 직접 언급한 기사) 와 \`filings\`(SEC 8-K · item 2.02 = 실적발표) 를
촉매 판정의 1차 근거로 삼아라. 거기 있는 숫자는 바꾸지 마라.
⚠️ 예전엔 4팀에 문서 근거를 하나도 안 줬다. 이제 준다 — **웹검색보다 이걸 먼저 보라.**` : `## 확보된 뉴스 (Nasdaq RSS, 이 종목 직접 언급)
${news}

## SEC 8-K 공시 (item 2.02 = 실적발표. 촉매 판정의 1차 근거)
${fil}`

// 에이전트가 죽으면 1회만 다시 시도한다. 그래도 실패하면 호출부가 '실패'로 표시하게 남긴다.
// (2026-08-11 BMRN 이 죽었는데 화면엔 "상한 초과"로 표시됐다)
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

const CAT = { type: 'object', properties: {
  ticker: { type: 'string' },
  category: { type: 'number', enum: [1, 2, 3, 4, 5, 6] },
  categoryName: { type: 'string' },
  claims: { type: 'array', items: CLAIM },
  company: { type: 'string', description: '이 회사가 뭐 하는 곳인지 2~4문장, 쉬운 말로. 무엇을 팔아 돈을 버는지' },
  volumeExplanation: { type: 'string', description: '거래량이 왜 터졌는지 3~5문장. 언제·무슨 일이 있었고 왜 그게 거래량으로 이어졌는지. 숫자와 날짜를 넣어라' },
  isHighlight: { type: 'boolean', description: 'category 1 또는 5 이면 true' },
  confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
}, required: ['ticker', 'category', 'categoryName', 'claims', 'company', 'volumeExplanation', 'isHighlight'] }

const CATEGORIES = `
① 어닝 서프라이즈 및 향후 실적 가이던스 상향 ★가장 중요
   시장 예상치를 크게 뛰어넘는 실적, 두 자릿수 중후반~세 자릿수 매출·EPS 성장, 가이던스 상향
② 바이오테크·헬스케어 — 임상 성공, FDA 승인
③ 대형 파트너십·공급계약 — 아마존·MS 같은 대기업과의 계약
④ 기업 턴어라운드 — 신임 CEO, 획기적 신제품, 흑자 전환
⑤ 매크로·정책·산업 돌파 ★ — AI·양자컴퓨터·로봇 등 기술 혁신, 정부 규제·정책 변화, 선거 결과
⑥ 암묵적 호재 — 표면적 뉴스는 없는데 비정상적 거래량만 터진 경우`

const RULES = `
반드시 지킬 것:
1. 웹검색으로 실제 확인한 것만. 기억에 의존하지 마라.
2. 모든 주장에 접속 가능한 원문 URL. **URL 을 만들어내지 마라.**
3. **검색해도 뉴스를 못 찾으면 반드시 category 6(암묵적)** 으로 분류하고
   claims 에 evidence_level:"no_source", statement:"근거 없음" 을 넣어라.
   "뭔가 있을 것"이라는 추측으로 ①~⑤ 를 고르지 마라. 이게 가장 흔한 실수다.
4. 검색결과 페이지는 출처가 아니다.
5. 아래 제공된 숫자(VOL_X·거래량배수·Congestion)는 바꾸지 마라.
6. **quote 에는 실제로 읽은 문장을 원문 그대로 넣는다.** 제공된 뉴스 제목·공시 내용도 된다.
   요약해서 새로 쓰지 마라. 없으면 그 주장은 no_source 다.

## 글의 형태
- company(이 회사가 뭐 하는 곳인지) → volumeExplanation(무슨 일이 있었고 왜 거래량으로 이어졌는지)
  → claims(출처 딸린 근거) 순서다.
- **각 문장에 숫자나 날짜를 넣어라.** 그 숫자는 quote 나 제공된 자료에 실제로 있어야 한다.
- 분량을 채우려고 추측하지 마라. 모르면 ⑥ 으로 분류하고 짧게 "근거 없음"이라고 적어라.
- **영문 약어를 그냥 쓰지 마라.** 뜻을 먼저 쓰고 이름은 괄호에 넣어라 —
  "VOL_X 3.1" 이 아니라 "거래대금이 20일 평균의 3.1배(VOL_X)". 중학생도 이해할 수 있게 쓴다.`

phase('촉매분류')
const targets = items.slice(0, CAP)
const classified = await parallel(targets.map((it) => () => {
  const c = it.congestion || {}
  const news = (it.news || []).slice(0, 6).map((x) => `- ${x.date} [${x.publisher}] ${x.title}\n  ${x.url}`).join('\n') || '없음'
  const fil = (it.filings || []).slice(0, 4).map((f) => `- ${f.filingDate} ${(f.itemsKo || []).join(',')}${f.isEarnings ? ' ★실적발표(8-K item 2.02)' : ''} ${f.url}`).join('\n') || '없음'
  return tryAgent(
    `당신은 Episodic Pivot 촉매를 판별하는 트레이더입니다. 오늘은 ${date}. 종목: ${it.ticker} (${it.sector} / ${it.industry})

## Node 가 확정한 수치 (바꾸지 마라)
VOL_X ${it.volx} (거래대금 20일평균 대비) · 주간 거래량배수 ${it.volSurgeWk} (당일제외 5일평균 대비)
150일선 ${it.aboveMa150 ? '위' : '아래'} · 60일 신고가 돌파 ${it.brk60d ? 'YES' : 'NO'} · 종가강도 ${it.clsPos} · 52주 고점 대비 ${it.high52}%
Congestion: ${c.phaseKo || '판정불가'}${c.baseMonths ? ` · 횡보 ${c.baseMonths}개월 · 베이스폭 ${c.rangePct}%` : ''}${c.breakoutDate ? ` · 돌파 ${c.breakoutDate} 거래량 ${c.breakoutVolX}배` : ''}

${evidenceBlock(it.ticker, news, fil)}

## 호재 6분류
${CATEGORIES}

## 할 일
이 종목의 거래량이 터진 이유를 6분류 중 하나로 판정하고 근거를 대세요.
먼저 **이 회사가 뭐 하는 곳인지**(company) 부터 적으세요 — 뭘 하는 회사인지 모르면
왜 올랐는지도 이해할 수 없습니다.
${RULES}
한글로 작성하세요.`,
    { label: `촉매:${it.ticker}`, phase: '촉매분류', schema: CAT, model: 'sonnet' }
  )
}))

phase('팩트체크')
const clean = classified.filter(Boolean)
// 재시도까지 하고도 결과가 없는 종목 = 실패. 조용히 사라지게 두지 않는다.
// ⚠️ 반환값의 ticker 로 대조하지 마라 — 모델이 입력값을 그대로 준다는 보장이 없다.
//    parallel 은 입력 순서를 보존하므로 인덱스로 판정한다.
const failed = targets.filter((t, i) => !classified[i]).map((t) => t.ticker)
if (failed.length) log(`⚠️ 촉매 분류 실패 ${failed.length}종목: ${failed.join(', ')}`)
const BATCH = 5
const batches = []
for (let i = 0; i < clean.length; i += BATCH) batches.push(clean.slice(i, i + BATCH))

const CHECK = { type: 'object', properties: { results: { type: 'array', items: {
  type: 'object', properties: {
    ticker: { type: 'string' },
    verdict: { type: 'string', enum: ['pass', 'partial', 'reject'] },
    removed_claim_ids: { type: 'array', items: { type: 'string' } },
    correctedCategory: { type: 'number' },
    // ⚠️ volumeExplanation 은 claims 의 요약이라 근거가 지워지면 같이 고쳐야 한다.
    //    2026-08-14 실측: WDAY 의 시총·주가 수치가 팩트체크로 제거됐는데 설명문엔 그대로 남았다.
    correctedVolumeExplanation: { type: 'string', description: '제거한 주장의 숫자·사실이 volumeExplanation 에도 있으면 그 문장을 뺀 설명. 뺄 것이 없으면 빈 문자열' },
    reason: { type: 'string' },
  }, required: ['ticker', 'verdict', 'removed_claim_ids'],
} } }, required: ['results'] }

const checks = await parallel(batches.map((b, i) => () => tryAgent(
  `다음 촉매 분류를 검증하세요. 오늘은 ${date}.

${JSON.stringify(b, null, 1)}

확인 사항:
- 출처가 그 주장을 실제로 뒷받침하는가 (무관하면 removed_claim_ids)
- 다른 회사 뉴스를 근거로 쓰지 않았는가
- **statement 안의 숫자·날짜가 quote 나 출처 제목에 실제로 있는가?** 없으면 제거하라
- ⚠️ **단위 환산을 정확히 하라.** 1 billion = 10억, 1 million = 100만 이다.
  $64.1 billion = 641억 달러 · $104 billion = 1,040억 달러 · $143.5 million = 1억 4,350만 달러.
  **환산만 다르고 값이 같으면 정상이다 — 지우지 마라.**
  (2026-08-14 실측: 이 환산을 틀려 정확한 근거 2건을 지웠다. 검증이 지나치게 지우는 것도 오류다.)
- **근거가 빈약한데 ①~⑤ 로 분류했으면 correctedCategory: 6 으로 정정하라.** 이게 핵심 검증 포인트다
- ①(어닝) 로 분류했으면 실제 실적 발표 근거(8-K item 2.02 또는 실적 기사)가 있는가

⚠️ **마지막으로 volumeExplanation 을 검사하라.** 이 설명문은 claims 의 요약이므로,
위에서 제거하기로 한 주장의 숫자·사실이 설명문에도 들어 있으면
**근거는 지워졌는데 요약문만 살아남는다.** 그런 문장이 있으면
correctedVolumeExplanation 에 **그 문장을 뺀 설명**을 다시 써라.
남은 근거만으로 다시 쓰고 **새 사실을 넣지 마라.** 뺄 것이 없으면 빈 문자열로 두라.`,
  { label: `팩트체크:${i + 1}/${batches.length}`, phase: '팩트체크', schema: CHECK, model: 'haiku' }
)))

const CATNAME = { 1: '어닝 서프라이즈/가이던스 상향', 2: '바이오·FDA·임상', 3: '대형 파트너십·공급계약', 4: '기업 턴어라운드', 5: '매크로·정책·산업 돌파', 6: '암묵적(뉴스 없는 이상거래량)' }
const rmMap = new Map()
for (const c of checks.filter(Boolean)) for (const r of (c.results || [])) rmMap.set(r.ticker, r)
for (const s of clean) {
  const r = rmMap.get(s.ticker)
  if (!r) continue
  const rm = new Set(r.removed_claim_ids || [])
  s.factcheck = { verdict: r.verdict, removed: [...rm], reason: r.reason || '' }
  s.claims = (s.claims || []).filter((c) => !rm.has(c.id))
  if (r.correctedCategory && r.correctedCategory !== s.category) {
    s.originalCategory = s.category
    s.category = r.correctedCategory
    s.categoryName = CATNAME[r.correctedCategory] || s.categoryName
    s.corrected = true
  }
  if (!s.claims.length) {
    s.claims = [{ id: 'none', statement: '근거 없음', evidence_level: 'no_source', sources: [] }]
    if (s.category !== 6) { s.originalCategory = s.category; s.category = 6; s.categoryName = CATNAME[6]; s.corrected = true }
  }
  s.isHighlight = s.category === 1 || s.category === 5
  // 근거가 지워졌으면 그 근거를 요약한 설명문도 같이 고친다. 원문은 남겨 대조할 수 있게 한다.
  const cv = String(r.correctedVolumeExplanation || '').trim()
  if (rm.size && cv.length > 20 && cv !== s.volumeExplanation) {
    s.volumeExplanationOriginal = s.volumeExplanation
    s.volumeExplanation = cv
    s.factcheck.narrativeFixed = true
  }
}

/* 스키마에 없는 필드는 버린다.
   2026-08-14 실측: WDAY 결과에 `volumeExplanation2: "placeholder"` 가 딸려 왔다.
   화면에 나가진 않지만 데이터에 쌓이면 나중에 진짜 필드로 오인된다. */
const KEEP = new Set(['ticker', 'category', 'categoryName', 'claims', 'company', 'volumeExplanation',
  'volumeExplanationOriginal', 'isHighlight', 'confidence', 'factcheck', 'originalCategory', 'corrected'])
for (const s of clean) for (const k of Object.keys(s)) if (!KEEP.has(k)) delete s[k]

phase('종합')
const SUM = { type: 'object', properties: {
  highlights: { type: 'array', items: { type: 'object', properties: {
    ticker: { type: 'string' }, category: { type: 'number' }, oneLine: { type: 'string' },
  }, required: ['ticker', 'category', 'oneLine'] } },
  sectorSignal: { type: 'string' },
  watchList: { type: 'array', items: { type: 'string' } },
  caution: { type: 'string' },
}, required: ['highlights', 'sectorSignal'] }

const summary = await tryAgent(
  `오늘(${date}) Episodic Pivot 후보를 종합하세요.

${JSON.stringify(clean.map((x) => ({ ticker: x.ticker, category: x.category, categoryName: x.categoryName, corrected: !!x.corrected, claims: (x.claims || []).map((c) => c.statement) })), null, 1)}

- highlights: **category 1(어닝 서프라이즈/가이던스 상향)과 5(산업 기술 돌파)** 만 골라 한 줄씩.
  쿨라매기가 가장 선호하는 호재이므로 이 둘만 강조한다.
- sectorSignal: 촉매가 특정 섹터에 몰렸는지. 몰리지 않았으면 그렇게 말하라.
- watchList: 6개월 횡보 후 돌파·리테스트 국면이라 지켜볼 종목
- caution: 이 분류의 한계

입력에 없는 티커나 사실을 만들지 마라. 한글로.`,
  { label: '촉매종합', phase: '종합', schema: SUM, model: 'opus' }
)

const byCategory = {}
for (const s of clean) byCategory[s.category] = (byCategory[s.category] || 0) + 1

return { date, team: 4, items: clean, summary, byCategory, failed,
  coverage: { done: clean.length, total: items.length, cap: CAP, failed: failed.length } }
