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

// 에이전트가 죽으면 1회만 다시 시도한다. 그래도 실패하면 호출부가 '실패'로 표시하게 남긴다.
// (2026-08-11 BMRN 이 죽었는데 화면엔 "상한 초과"로 표시됐다)
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

const CAT = { type: 'object', properties: {
  ticker: { type: 'string' },
  category: { type: 'number', enum: [1, 2, 3, 4, 5, 6] },
  categoryName: { type: 'string' },
  claims: { type: 'array', items: CLAIM },
  volumeExplanation: { type: 'string', description: '거래량이 왜 터졌는지 한두 문장' },
  isHighlight: { type: 'boolean', description: 'category 1 또는 5 이면 true' },
  confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
}, required: ['ticker', 'category', 'categoryName', 'claims', 'isHighlight'] }

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
5. 아래 제공된 숫자(VOL_X·거래량배수·Congestion)는 바꾸지 마라.`

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

## 확보된 뉴스 (Nasdaq RSS, 이 종목 직접 언급)
${news}

## SEC 8-K 공시 (item 2.02 = 실적발표. 촉매 판정의 1차 근거)
${fil}

## 호재 6분류
${CATEGORIES}

## 할 일
이 종목의 거래량이 터진 이유를 6분류 중 하나로 판정하고 근거를 대세요.
${RULES}
한글로 작성하세요.`,
    { label: `촉매:${it.ticker}`, phase: '촉매분류', schema: CAT, model: 'sonnet' }
  )
}))

phase('팩트체크')
const clean = classified.filter(Boolean)
// 재시도까지 하고도 결과가 없는 종목 = 실패. 조용히 사라지게 두지 않는다.
const gotSet = new Set(clean.map((x) => x.ticker))
const failed = targets.filter((t) => !gotSet.has(t.ticker)).map((t) => t.ticker)
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
    reason: { type: 'string' },
  }, required: ['ticker', 'verdict', 'removed_claim_ids'],
} } }, required: ['results'] }

const checks = await parallel(batches.map((b, i) => () => tryAgent(
  `다음 촉매 분류를 검증하세요. 오늘은 ${date}.

${JSON.stringify(b, null, 1)}

확인 사항:
- 출처가 그 주장을 실제로 뒷받침하는가 (무관하면 removed_claim_ids)
- 다른 회사 뉴스를 근거로 쓰지 않았는가
- **근거가 빈약한데 ①~⑤ 로 분류했으면 correctedCategory: 6 으로 정정하라.** 이게 핵심 검증 포인트다
- ①(어닝) 로 분류했으면 실제 실적 발표 근거(8-K item 2.02 또는 실적 기사)가 있는가`,
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
}

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
