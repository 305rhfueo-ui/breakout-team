export const meta = {
  name: 'bt-team5-industry',
  description: '5팀 하린 — RS 사이트 FRANK 상위 업종이 왜 상위인지·주도주는 누구인지, CNBC·증권사 리포트 근거로만',
  whenToUse: 'start breakout 아침 리서치. prepare-llm-args.js 가 만든 _args.json 의 team5args 를 그대로 넘긴다',
  phases: [
    { title: '업종분석', detail: '업종당 소넷 1명 — 왜 상위인가 · 주도주 · 리스크 (출처 필수)' },
    { title: '팩트체크', detail: '하이쿠 — 인용문에 없는 숫자·사실, 다른 업종 근거 제거 (3업종 배치)' },
  ],
}
// 사용법: Workflow({ scriptPath:'<abs>/scripts/workflows/team5-industry.js', args: <_args.json 의 team5args> })
//   args = { date, argsDir, degraded, items:[{ key, file, sector, industry, industryKo, frank, frank25dChg, count, evidenceCount }] }
// 결과는 build-chief-report 가 verify-claims(URL·quote)·number-guard(숫자)·주도주 멤버 검사를 거쳐 dashboard/data/team5.js 에 붙인다.
// (2026-10-12 신설. 옛 5팀 미르(c1960b9:team5-sector.js)의 SOURCE/CLAIM 스키마·팩트체크 방식을 이어받았다)

let A = args
if (typeof A === 'string') { try { A = JSON.parse(A) } catch (e) { A = null } }
const date = (A && A.date) || 'today'
const argsDir = (A && A.argsDir) || ''
const items = (A && A.items) || []

const tryAgent = async (p, o) => {
  const r = await agent(p, o)
  if (r) return r
  log(`재시도: ${o.label}`)
  return await agent(p, { ...o, label: `${o.label}#2` })
}

const SOURCE = { type: 'object', properties: {
  title: { type: 'string' },
  publisher: { type: 'string', description: '매체 또는 증권사. 연합인포맥스 리포트는 "○○증권(연합인포맥스)"' },
  url: { type: 'string', description: '실제 원문 URL. 제공 자료의 url 을 그대로 쓰거나, 직접 열어 본 페이지 URL. 만들어내지 마라' },
  date: { type: 'string', description: 'YYYY-MM-DD' },
  quote: { type: 'string', description: '원문 문장 그대로(제공 자료의 제목·요약 문장 포함). 요약·번역 금지' },
}, required: ['title', 'publisher', 'url', 'date', 'quote'] }

const CLAIM = { type: 'object', properties: {
  id: { type: 'string', description: '업종 안에서 고유. 왜 상위 w1·w2…, 주도주 l1a·l1b…, 리스크 r1·r2…' },
  statement: { type: 'string', description: '한국어 1~2문장. 숫자는 quote 에 있는 것만' },
  evidence_level: { type: 'string', enum: ['sourced', 'no_source'] },
  sources: { type: 'array', items: SOURCE },
}, required: ['id', 'statement', 'evidence_level', 'sources'] }

const REPORT = { type: 'object', properties: {
  key: { type: 'string', description: '입력 key 그대로' },
  headline: { type: 'string', description: '결론 한 문장 — 이 업종이 지금 왜 상위인가. whyLeading 의 요약이어야 하고 새 사실을 넣지 마라' },
  summary: { type: 'string', description: '3~5문장. 무슨 일이 있었고 왜 주가가 반응했으며 무엇이 이어져야 하는지. whyLeading·leaders 에 있는 사실만' },
  whyLeading: { type: 'array', items: CLAIM, description: '왜 상위인가 최대 5개 — 수요·실적·가격·정책·계약 등 구체적 원인. 각 항목 출처 필수' },
  leaders: { type: 'array', description: '주도주 최대 5개. 기사·리포트가 이 업종의 선두·최대 수혜로 직접 다룬 종목만. 반드시 members 에 있는 티커', items: {
    type: 'object', properties: {
      ticker: { type: 'string' },
      role: { type: 'string', description: '이 종목이 업종 안에서 어떤 자리인지 한 문장 (예: "미국 최대 독립 정유사로 정제마진 상승의 직접 수혜")' },
      why: { type: 'array', items: CLAIM, description: '이 종목이 주도주인 근거 1~3개, 출처 필수' },
    }, required: ['ticker', 'role', 'why'] } },
  risks: { type: 'array', items: CLAIM, description: '이 강세가 꺾일 조건 최대 3개. 출처가 있는 것만' },
  sourceGap: { type: 'string', description: '근거가 부족했던 부분을 한 문장으로(예: "증권사 리포트 없음 — CNBC 기사만으로 작성"). 없으면 빈 문자열' },
}, required: ['key', 'headline', 'summary', 'whyLeading', 'leaders', 'risks', 'sourceGap'] }

const STYLE = `
## 서술 기준 — 독자는 직장인 일반 투자자다
1. 한 문장은 한 가지 내용, 60~90자. 짧게 쓰되 **무슨 일이 왜 일어났고 그래서 뭐가 달라지는지(원인·영향)**는 반드시 쓴다. 사실만 나열하면 이해하지 못한다.
2. 결론부터. headline 한 줄만 읽어도 "왜 이 업종인가"가 보여야 한다.
3. 숫자는 결론을 받치는 핵심만, 단위·기간을 붙인다(예: "3분기 정제마진 배럴당 25달러, 1년 전의 두 배").
4. 전문 용어는 처음 나올 때 괄호로 풀어 준다(예: "정제마진(원유를 휘발유로 바꿔 남기는 이익)").
5. 이 시스템 지표 이름(WRS·FRANK·rnk·finalWrs)과 JSON 키 이름을 문장에 쓰지 마라. 뜻으로: FRANK 3위 → "업종 순위 3위", frank25dChg +13 → "한 달 새 13계단 상승".
6. 영어 업종 이름은 한국어로. 회사명·티커는 그대로. 영어 문장을 섞지 마라.
7. 작업 과정("제공 자료에 없다", "403", "확인 불가")을 쓰지 마라. 모르는 것은 쓰지 않는다. 근거 부족은 sourceGap 한 곳에만.
8. 매수·매도 권유 금지.`

const RULES = `
## 반드시 지킬 것 — 사실만 (사용자 지시: "철저히 사실 기반")
1. **제공된 근거 묶음부터** 쓴다: evidence[티커].cnbc(CNBC 가 그 종목에 태그한 기사) · .reports(연합인포맥스 증권사 리포트 — 제목·요약) · .news(나스닥) · industryReports(업종 검색어 리포트).
   부족하면 웹검색·페이지 열람 최대 6회 — CNBC·Reuters·AP·회사 IR·SEC 공시 같은 원문만. 검색결과 페이지·블로그·AI 요약 사이트는 출처가 아니다.
2. quote 는 **실제로 읽은 문장 그대로**다. 제공 자료라면 그 title 또는 summary 문장을 그대로 옮긴다. 웹 기사는 직접 열어서 본문 문장을 따온다.
   - CNBC 의 url 에 /pro/ 가 있으면 유료 기사다 — 제목만 quote 로 쓸 수 있고, 본문 숫자를 쓰지 마라. /video/ 도 제목만.
   - "Stocks making the biggest moves" 같은 **여러 종목 모음 기사는 그 회사를 직접 다룬 문장을 열어서 따올 때만** 근거가 된다. 제목만으로는 안 된다.
   - 연합인포맥스 리포트: publisher 는 "○○증권(연합인포맥스)", url 은 제공된 PDF 주소, quote 는 요약 문장 그대로. 원문 해외 기관 의견을 옮긴 것이면 statement 에 "○○증권이 전한 △△ 의견"처럼 원출처를 밝힌다.
3. **statement 의 숫자·날짜는 quote 에 실제로 있어야 한다.** 코드가 숫자를 하나하나 대조해 quote 에 없는 숫자가 든 문장을 지운다. 환산(1 billion = 10억)은 괜찮다.
4. **URL 을 만들어내지 마라.** 근거를 못 찾은 항목은 넣지 마라(분량 채우기 금지). whyLeading 이 하나도 없으면 [{id:"w0", statement:"근거 없음", evidence_level:"no_source", sources:[]}].
5. **주도주 근거는 "그 회사가 무엇을 했는가"여야 한다** — 실적·수주·점유율·제품·계약·증권사가 꼽은 경쟁력. 다음은 주도주 근거가 **아니다**(코드가 지운다):
   "신고가를 기록했다", "N% 올랐다", "투자의견·등급이 올랐다", "기사에 종목으로 태그됐다", 목표주가 상승 여력. 이런 것밖에 없는 종목은 주도주에 넣지 마라.
   CNBC 기사는 가능하면 **직접 열어서** 그 회사를 다룬 본문 문장을 quote 로 따와라(제목만으로는 약하다).
5-1. **주도주(leaders)는 members 목록에 있는 티커만.** 기사·리포트가 그 회사를 이 업종 강세의 중심으로 직접 다룬 경우만 고른다. 주가 순위(rnk)만 보고 고르지 마라 — 근거 기사가 없으면 넣지 마라. 다른 업종 회사는 아무리 기사가 많아도 넣지 마라(코드가 지운다).
6. **다른 업종 이야기를 이 업종 근거로 쓰지 마라**(예: 반도체 기사를 소프트웨어 근거로).
7. 근거 날짜는 최근 3개월 안의 것을 우선한다. 6개월보다 오래된 것은 쓰지 마라.
8. 업종 순위·종목 수·RS 숫자는 Node 가 확정한 값이다. 바꾸지 마라.
${STYLE}`

phase('업종분석')
const analyzed = await parallel(items.map((x) => () => tryAgent(
  `당신은 브레이크아웃 팀 5팀 "하린"입니다 — 강한 업종을 전담해 "왜 이 업종이 지금 상위인가, 주도주는 누구인가"를 사실로만 정리합니다. 오늘은 ${date}.

## 대상 업종 (Node 확정 — 바꾸지 마라)
${x.sector} / ${x.industry}${x.industryKo ? ` (${x.industryKo})` : ''}   key: "${x.key}"
RS 사이트 업종 순위 ${x.frank}위 (전체 업종 중)${x.frank25dChg != null ? ` · 25거래일 전보다 ${x.frank25dChg > 0 ? `${x.frank25dChg}계단 상승` : x.frank25dChg < 0 ? `${-x.frank25dChg}계단 하락` : '변화 없음'}` : ''} · 종목 ${x.count}개
${A && A.degraded ? '⚠️ 오늘 RS 사이트 데이터 갱신이 실패해 전날 값이다.' : ''}

## 근거 묶음 — 먼저 Read 로 읽어라
**${argsDir}/${x.file}**
members(이 업종 전 종목, 6개월 상대강도 순) · evidence(상위 12종목의 CNBC·증권사 리포트·나스닥 기사) · industryReports(업종 검색어로 찾은 증권사 리포트)

## 할 일
headline → summary → whyLeading → leaders → risks → sourceGap. 각 칸의 분량·조건은 스키마 설명을 따른다.
${RULES}`,
  { label: `업종:${String(x.industry).slice(0, 20)}`, phase: '업종분석', schema: REPORT, model: 'sonnet' }
)))
// key 는 입력값으로 덮는다 — 모델이 고쳐 쓴 key 가 캐시·화면으로 새지 않게(2026-08-12 실측). parallel 은 순서를 보존한다.
items.forEach((t, i) => { if (analyzed[i]) analyzed[i].key = t.key })
const failed = items.filter((t, i) => !analyzed[i]).map((t) => t.key)
if (failed.length) log(`⚠️ 업종 분석 실패 ${failed.length}건: ${failed.join(', ')}`)
const clean = analyzed.filter(Boolean)

phase('팩트체크')
const CHECK = { type: 'object', properties: { results: { type: 'array', items: {
  type: 'object', properties: {
    key: { type: 'string', description: '입력의 key 그대로' },
    verdict: { type: 'string', enum: ['pass', 'partial', 'reject'] },
    removed_claim_ids: { type: 'array', items: { type: 'string' } },
    correctedSummary: { type: 'string', description: '지운 주장의 사실이 headline·summary 에 남아 있으면 그 문장을 뺀 summary. 뺄 것이 없으면 빈 문자열' },
    correctedHeadline: { type: 'string', description: '같은 이유로 고친 headline. 고칠 것 없으면 빈 문자열' },
    reason: { type: 'string' },
  }, required: ['key', 'verdict', 'removed_claim_ids', 'correctedSummary', 'correctedHeadline'] } } }, required: ['results'] }

const B = 3
const batches = []
for (let i = 0; i < clean.length; i += B) batches.push(clean.slice(i, i + B))
const checks = await parallel(batches.map((b, i) => () => tryAgent(
  `다음 업종 리포트의 주장을 검증하세요. 오늘은 ${date}. **웹에 접근하지 말고** 아래 텍스트(statement·quote·출처 제목)만 대조하라.

${JSON.stringify(b.map((x) => ({ key: x.key, headline: x.headline, summary: x.summary, whyLeading: x.whyLeading, leaders: x.leaders, risks: x.risks })), null, 1)}

각 claim(whyLeading·leaders[].why·risks 안의 id)을 확인하고 문제가 있으면 removed_claim_ids 에 넣어라:
- statement 의 숫자·날짜·사실이 quote 나 출처 제목에 실제로 있는가? 없으면 제거. (단위 환산만 다르면 정상 — 1 billion = 10억)
- 출처가 그 주장을 실제로 뒷받침하는가. 제목·내용이 무관하면 제거.
- 다른 업종 이야기를 이 업종 근거로 썼으면 제거.
- 주도주 근거가 그 회사를 직접 다루지 않으면(여러 종목 모음 기사 제목뿐 등) 제거.
- 주도주 근거가 주가 움직임뿐이면(신고가·N% 상승·등급 상향·"태그됐다") 제거 — 회사가 한 일(실적·수주·제품·경쟁력)이 있어야 한다.
- 출처 날짜가 6개월보다 오래됐으면 제거.
그다음 headline·summary 에 지운 주장의 사실이 남아 있으면 그 문장을 뺀 correctedHeadline·correctedSummary 를 써라. 남은 근거만으로, 새 사실 없이. 의심스러우면 지우는 쪽을 택하라.`,
  { label: `팩트체크:${i + 1}/${batches.length}`, phase: '팩트체크', schema: CHECK, model: 'haiku' }
)))

const byKey = new Map()
for (const c of checks.filter(Boolean)) for (const r of (c.results || [])) byKey.set(r.key, r)
const none = (id) => [{ id, statement: '근거 없음', evidence_level: 'no_source', sources: [] }]
for (const x of clean) {
  const r = byKey.get(x.key)
  if (!r) { x.factcheck = { verdict: 'unchecked', removed: [] }; log(`⚠️ 팩트체크 미대조: ${x.key} — 화면에 "검증 안 됨"으로 표시`); continue }
  const rm = new Set(r.removed_claim_ids || [])
  x.factcheck = { verdict: r.verdict, removed: [...rm], reason: r.reason || '' }
  x.whyLeading = (x.whyLeading || []).filter((c) => !rm.has(c.id))
  x.risks = (x.risks || []).filter((c) => !rm.has(c.id))
  x.leaders = (x.leaders || []).map((l) => ({ ...l, why: (l.why || []).filter((c) => !rm.has(c.id)) })).filter((l) => l.why.length)
  if (!x.whyLeading.length) x.whyLeading = none('w0')
  const ch = String(r.correctedHeadline || '').trim(), cs = String(r.correctedSummary || '').trim()
  if (rm.size && ch.length > 10 && ch !== x.headline) { x.headlineOriginal = x.headline; x.headline = ch }
  if (rm.size && cs.length > 20 && cs !== x.summary) { x.summaryOriginal = x.summary; x.summary = cs }
  // 근거가 다 지워졌는데 요약이 남으면 근거 없는 요약이다 — 남기지 않는다
  if (x.whyLeading[0].id === 'w0') { x.headline = '근거 없음 — 출처 검증을 통과한 상위 이유가 없다'; x.summary = '' }
}

return { date, team: 5, industries: clean, failed, coverage: { done: clean.length, total: items.length, failed: failed.length } }
