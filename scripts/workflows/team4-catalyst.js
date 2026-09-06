export const meta = {
  name: 'bt-team4-catalyst',
  description: '4팀 Episodic Pivot — 거래량 급증 종목의 호재성 뉴스 6분류, 출처 URL 필수',
  whenToUse: 'start breakout 실행 시. VOL_X 급증 종목의 촉매를 사실 기반으로 분류할 때',
  phases: [
    { title: '촉매분류', detail: '종목별 호재 6분류 + 근거 (제공 자료 우선, 부족분만 웹검색)' },
    { title: '팩트체크', detail: '출처 없는 주장 제거 (5종목 배치, 텍스트 대조만)' },
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
   스크립트는 몇 명을 띄울지 알아야 하므로 티커 목록만 인라인으로 받는다.
   (예전엔 4팀에 문서 근거를 하나도 안 줬다 — 지금은 news·filings 를 파일로 준다) */
const argsDir = (A && A.argsDir) || null
const fileFor = (tk) => argsDir ? `${argsDir}/${tk}.json` : null
const evidenceBlock = (tk, news, fil) => argsDir ? `## 이미 확보된 자료 (Node 가 수집한 1차 자료)
**${fileFor(tk)}**

⚠️ **가장 먼저 Read 도구로 이 파일을 읽어라.** 읽지 않고 판정하면 안 된다. ${tk} 전용 파일이다.
그 안의 \`news\`(이 종목을 직접 언급한 기사) 와 \`filings\`(SEC 8-K · item 2.02 = 실적발표),
있으면 \`financials\`(SEC 실적표)·\`krReports\`(국내 리포트 요약)를 촉매 판정의 1차 근거로 삼아라.
거기 있는 숫자는 바꾸지 마라. **웹검색보다 이걸 먼저 보라.**` : `## 확보된 뉴스 (Nasdaq RSS, 이 종목 직접 언급)
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
  // ⚠️ quote 를 required 로 걸되 "제공된 자료의 문장"도 인정한다.
  //    그냥 필수로만 걸면 원문을 못 읽는 유료기사·국내 PDF 인용이 통째로 강등돼 보고서가 더 얇아진다.
  quote: { type: 'string', description: '실제로 읽은 원문 문장 그대로. 웹에서 읽은 문장이거나 위에 제공된 자료(뉴스 제목·공시 내용·리포트 요약·실적 수치)의 문장. 둘 다 아니면 그 주장은 no_source 다. 요약하거나 번역하지 마라' },
}, required: ['title', 'publisher', 'url', 'date', 'quote'] }

const CLAIM = { type: 'object', properties: {
  id: { type: 'string' }, statement: { type: 'string' },
  evidence_level: { type: 'string', enum: ['sourced', 'no_source'] },
  sources: { type: 'array', items: SOURCE },
}, required: ['id', 'statement', 'evidence_level', 'sources'] }

// ⚠️ categoryName·isHighlight 는 Node 가 category 로부터 확정한다 — 스키마에 두지 않는다.
//    필드 이름(company·volumeExplanation)은 대시보드 렌더러가 읽는다. 이름은 두고 설명만 바꾼다.
const CAT = { type: 'object', properties: {
  ticker: { type: 'string' },
  category: { type: 'number', enum: [1, 2, 3, 4, 5, 6] },
  claims: { type: 'array', items: CLAIM, description: '출처 딸린 근거 최대 4개. 뉴스를 못 찾으면 evidence_level:"no_source", statement:"근거 없음" 하나만' },
  company: { type: 'string', description: '사업 모델·매출 구성·핵심 고객·현 국면을 밀도 있게 최대 3문장. 금융 실무자 대상' },
  volumeExplanation: { type: 'string', description: '거래량이 왜 터졌는지 최대 3문장. 언제 무슨 일이 있었고 왜 거래량으로 이어졌는지. claims 의 요약이어야 하며 새 사실을 넣지 마라' },
  confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
}, required: ['ticker', 'category', 'claims', 'company', 'volumeExplanation', 'confidence'] }

const CATEGORIES = `
① 어닝 서프라이즈 및 향후 실적 가이던스 상향 ★가장 중요
   시장 예상치를 크게 뛰어넘는 실적, 두 자릿수 중후반~세 자릿수 매출·EPS 성장, 가이던스 상향
② 바이오테크·헬스케어 — 임상 성공, FDA 승인
③ 대형 파트너십·공급계약 — 아마존·MS 같은 대기업과의 계약
④ 기업 턴어라운드 — 신임 CEO, 획기적 신제품, 흑자 전환
⑤ 매크로·정책·산업 돌파 ★ — AI·양자컴퓨터·로봇 등 기술 혁신, 정부 규제·정책 변화, 선거 결과
⑥ 암묵적 호재 — 표면적 뉴스는 없는데 비정상적 거래량만 터진 경우`

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
반드시 지킬 것:
1. **제공된 자료(뉴스·8-K·국내 리포트 요약·SEC 실적표)에서 먼저 근거를 채우고**, 그래도 부족한 항목만 웹검색한다.
   웹검색·페이지 열람은 종목당 최대 6회.
2. 웹검색으로 실제 확인한 것만. 기억에 의존하지 마라.
3. 모든 주장에 접속 가능한 원문 URL. **URL 을 만들어내지 마라.** 검색결과 페이지는 출처가 아니다.
4. **뉴스를 못 찾으면 반드시 category 6(암묵적)** 으로 분류하고 claims 에 "근거 없음" 하나만 넣어라.
   "뭔가 있을 것"이라는 추측으로 ①~⑤ 를 고르지 마라. 이게 가장 흔한 실수다. 분량을 채우려고 추측하지 마라.
5. company → volumeExplanation → claims 순서다. 설명문은 claims 의 요약이며 설명문에만 있는 사실을 쓰면 안 된다.
${STYLE}`

phase('촉매분류')
const targets = items.slice(0, CAP)
const classified = await parallel(targets.map((it) => () => {
  const c = it.congestion || {}
  const news = (it.news || []).slice(0, 6).map((x) => `- ${x.date} [${x.publisher}] ${x.title}\n  ${x.url}`).join('\n') || '없음'
  const fil = (it.filings || []).slice(0, 4).map((f) => `- ${f.filingDate} ${(f.itemsKo || []).join(',')}${f.isEarnings ? ' ★실적발표(8-K item 2.02)' : ''} ${f.url}`).join('\n') || '없음'
  return tryAgent(
    `당신은 Episodic Pivot 촉매를 판별하는 트레이더입니다. 독자는 금융 실무자입니다. 오늘은 ${date}. 종목: ${it.ticker} (${it.sector} / ${it.industry})

## Node 가 확정한 수치 (바꾸지 마라)
VOL_X ${it.volx} (거래대금 20일평균 대비) · 주간 거래량배수 ${it.volSurgeWk} (당일제외 5일평균 대비)${it.marketCap ? ` · 시총 ${it.marketCap}` : ''}
컨센서스(사이트 yfinance): 매출성장 CY ${it.saleCy ?? '—'}% / NY ${it.saleNy ?? '—'}% · EPS 성장 CY ${it.epsCy ?? '—'}% / NY ${it.epsNy ?? '—'}% · 30일 전망 변화 CY ${it.cyTrend ?? '—'}% / NY ${it.nyTrend ?? '—'}% · Target_Status ${it.targetStatus === true ? 'YES(당해·차기 전망 둘 다 +5% 이상 상향)' : it.targetStatus === false ? 'NO' : '—'} · 52주 신고가 ${it.newHigh52 === true ? 'Y' : it.newHigh52 === false ? 'N' : '—'}${it.fs ? ` · 최근 3분기(q0/q1/q2) 매출성장 ${(it.fs.sale || []).map((x) => x ?? '—').join('/')}% · 순이익 ${(it.fs.ni || []).map((x) => x ?? '—').join('/')}${it.fs.opm ? ` · 영업이익률 ${it.fs.opm.map((x) => x ?? '—').join('/')}%` : ''}` : ''}
150일선 ${it.aboveMa150 ? '위' : '아래'} · 60일 신고가 돌파 ${it.brk60d ? 'YES' : 'NO'} · 종가강도(CLS_POS) ${it.clsPos} · 52주 고점 대비 ${it.high52}%
Congestion: ${c.phaseKo || '판정불가'}${c.baseMonths ? ` · 횡보 ${c.baseMonths}개월 · 베이스 ${c.baseLow}~${c.baseHigh} (폭 ${c.rangePct}%)` : ''}${c.breakoutDate ? ` · 돌파 ${c.breakoutDate} 거래량 ${c.breakoutVolX}배` : ''}

${evidenceBlock(it.ticker, news, fil)}

## 호재 6분류
${CATEGORIES}

## 할 일
이 종목의 거래량이 터진 이유를 6분류 중 하나로 판정하고 근거를 대세요.
스키마의 각 필드 분량·조건은 스키마 설명을 따른다. company → volumeExplanation → claims → confidence.
${RULES}`,
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
// 티커도 입력값으로 덮는다 — 모델이 바꿔 쓰면 build-chief-report 의 병합이 실패한다.
targets.forEach((t, i) => { if (classified[i]) classified[i].ticker = t.ticker })
const BATCH = 5
const batches = []
for (let i = 0; i < clean.length; i += BATCH) batches.push(clean.slice(i, i + BATCH))

const CHECK = { type: 'object', properties: { results: { type: 'array', items: {
  type: 'object', properties: {
    idx: { type: 'number', description: '입력 배열의 idx 를 그대로' },
    ticker: { type: 'string' },
    verdict: { type: 'string', enum: ['pass', 'partial', 'reject'] },
    removed_claim_ids: { type: 'array', items: { type: 'string' } },
    correctedCategory: { type: 'number' },
    // ⚠️ volumeExplanation 은 claims 의 요약이라 근거가 지워지면 같이 고쳐야 한다.
    //    2026-08-14 실측: WDAY 의 시총·주가 수치가 팩트체크로 제거됐는데 설명문엔 그대로 남았다.
    correctedVolumeExplanation: { type: 'string', description: '제거한 주장의 숫자·사실이 volumeExplanation 에도 있으면 그 문장을 뺀 설명. 뺄 것이 없으면 빈 문자열' },
    reason: { type: 'string' },
  }, required: ['idx', 'ticker', 'verdict', 'removed_claim_ids'],
} } }, required: ['results'] }

// 단위 환산 주의는 모델용이다. 2026-08-14 실측: 환산을 틀려 정확한 근거 2건을 지웠다 —
// 검증이 지나치게 지우는 것도 오류라서 "환산만 다르면 정상" 을 명시한다.
const checks = await parallel(batches.map((b, i) => () => tryAgent(
  `다음 촉매 분류를 검증하세요. 오늘은 ${date}.
**웹에 접근하지 말고** 아래 텍스트(statement·quote·출처 제목)만 대조하라.

${JSON.stringify(b.map((x, idx) => ({ idx, ticker: x.ticker, category: x.category, volumeExplanation: x.volumeExplanation, claims: x.claims })), null, 1)}

확인 사항:
- 출처가 그 주장을 실제로 뒷받침하는가 (무관하면 removed_claim_ids)
- 다른 회사 뉴스를 근거로 쓰지 않았는가 (우선주·유닛·다른 클래스 티커 주의)
- **statement 안의 숫자·날짜가 quote 나 출처 제목에 실제로 있는가?** 없으면 제거하라
- 단위 환산: 1 billion = 10억, 1 million = 100만 ($64.1 billion = 641억 달러 · $143.5 million = 1억 4,350만 달러).
  **환산만 다르고 값이 같으면 정상이다 — 지우지 마라.**
- **근거가 빈약한데 ①~⑤ 로 분류했으면 correctedCategory: 6 으로 정정하라.** 이게 핵심 검증 포인트다
- ①(어닝) 로 분류했으면 실제 실적 발표 근거(8-K item 2.02 또는 실적 기사)가 있는가

⚠️ **마지막으로 volumeExplanation 을 검사하라.** 이 설명문은 claims 의 요약이므로,
위에서 제거하기로 한 주장의 숫자·사실이 설명문에도 들어 있으면
**근거는 지워졌는데 요약문만 살아남는다.** 그런 문장이 있으면
correctedVolumeExplanation 에 **그 문장을 뺀 설명**을 다시 써라.
남은 근거만으로 다시 쓰고 **새 사실을 넣지 마라.** 뺄 것이 없으면 빈 문자열로 두라.

results 의 각 항목에 입력의 idx 를 그대로 넣어라.`,
  { label: `팩트체크:${i + 1}/${batches.length}`, phase: '팩트체크', schema: CHECK, model: 'haiku' }
)))

const CATNAME = { 1: '어닝 서프라이즈/가이던스 상향', 2: '바이오·FDA·임상', 3: '대형 파트너십·공급계약', 4: '기업 턴어라운드', 5: '매크로·정책·산업 돌파', 6: '암묵적(뉴스 없는 이상거래량)' }
// ⚠️ ticker 문자열로 대조하지 않는다 — 모델이 바꿔 쓰면 그 종목이 검증 없이 조용히 통과했다.
//    배치 내 위치(idx)로 대조하고, 못 찾으면 'unchecked' 로 표시해 "검증됨"과 구분한다.
const checkFor = new Map()
checks.forEach((c, bi) => { for (const r of ((c && c.results) || [])) { const k = Number(r.idx); if (Number.isInteger(k)) checkFor.set(`${bi}:${k}`, r) } })
batches.forEach((b, bi) => b.forEach((s, idx) => {
  const r = checkFor.get(`${bi}:${idx}`)
  if (!r) {
    s.factcheck = { verdict: 'unchecked', removed: [], reason: '팩트체크 결과를 대조하지 못했다 — 검증되지 않았다' }
    log(`⚠️ 팩트체크 미대조: ${s.ticker}`)
    return
  }
  const rm = new Set(r.removed_claim_ids || [])
  s.factcheck = { verdict: r.verdict, removed: [...rm], reason: r.reason || '' }
  s.claims = (s.claims || []).filter((c) => !rm.has(c.id))
  if (r.correctedCategory && r.correctedCategory !== s.category) {
    s.originalCategory = s.category
    s.category = r.correctedCategory
    s.corrected = true
  }
  if (!s.claims.length) {
    s.claims = [{ id: 'none', statement: '근거 없음', evidence_level: 'no_source', sources: [] }]
    if (s.category !== 6) { s.originalCategory = s.category; s.category = 6; s.corrected = true }
  }
  // 근거가 지워졌으면 그 근거를 요약한 설명문도 같이 고친다. 원문은 남겨 대조할 수 있게 한다.
  const cv = String(r.correctedVolumeExplanation || '').trim()
  if (rm.size && cv.length > 20 && cv !== s.volumeExplanation) {
    s.volumeExplanationOriginal = s.volumeExplanation
    s.volumeExplanation = cv
    s.factcheck.narrativeFixed = true
  }
}))
// categoryName·isHighlight 는 Node 가 category 로부터 확정한다 (모델이 쓰지 않는다)
for (const s of clean) {
  if (![1, 2, 3, 4, 5, 6].includes(s.category)) s.category = 6
  s.categoryName = CATNAME[s.category]
  s.isHighlight = s.category === 1 || s.category === 5
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
  sectorSignal: { type: 'string', description: '촉매가 특정 섹터·업종에 몰렸는지. 몰리지 않았으면 그렇게 쓴다' },
  watchList: { type: 'array', items: { type: 'string' }, description: '6개월 횡보 후 돌파·리테스트 국면이라 지켜볼 종목' },
  caution: { type: 'string', description: '이 분류의 한계' },
}, required: ['highlights', 'sectorSignal'] }

const summary = await tryAgent(
  `오늘(${date}) Episodic Pivot 후보를 종합하세요. 독자는 금융 실무자입니다.

${JSON.stringify(clean.map((x) => ({ ticker: x.ticker, category: x.category, categoryName: x.categoryName, corrected: !!x.corrected, claims: (x.claims || []).map((c) => c.statement) })), null, 1)}

- highlights: **category 1(어닝 서프라이즈/가이던스 상향)과 5(산업 기술 돌파)** 만 골라 한 줄씩.
  쿨라매기가 가장 선호하는 호재이므로 이 둘만 강조한다.
- sectorSignal · watchList · caution 은 스키마 설명대로.

입력에 없는 티커나 사실을 만들지 마라. 웹검색은 하지 않는다. 한글로.`,
  { label: '촉매종합', phase: '종합', schema: SUM, model: 'sonnet' }
)

const byCategory = {}
for (const s of clean) byCategory[s.category] = (byCategory[s.category] || 0) + 1

return { date, team: 4, items: clean, summary, byCategory, failed,
  coverage: { done: clean.length, total: items.length, cap: CAP, failed: failed.length } }
