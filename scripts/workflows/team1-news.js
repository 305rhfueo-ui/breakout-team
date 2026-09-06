export const meta = {
  name: 'bt-team1-news',
  description: '1팀 시장 뉴스 — 금융 실무자 대상 시황 digest, 출처 링크 필수',
  whenToUse: 'start breakout 실행 시. 오늘 미국 시장 이슈를 근거 딸린 시황으로 정리할 때',
  phases: [{ title: '시황뉴스', detail: 'Node 가 수집한 RSS 후보를 해석 (URL 창작 불가)' }],
}
// 사용법: Workflow({ scriptPath:'<abs>/scripts/workflows/team1-news.js',
//   args:{ date, candidates:[{publisher,title,url,date}], context:{qqq,finra,sectors} } })

let A = args
if (typeof A === 'string') { try { A = JSON.parse(A) } catch (e) { A = null } }
const date = (A && A.date) || 'today'
const candidates = (A && A.candidates) || []
const ctx = (A && A.context) || {}

/* ⚠️ date 가 required 가 아니면 verify-claims.js 의 미래 날짜 검사를 1팀 출처만 통과해 버린다
      (검사가 s.date 를 보기 때문). 후보 목록에 날짜가 없으면 빈 문자열로 두게 하고 required 로 건다 —
      빈 문자열은 검사에서 그냥 건너뛴다. quote 도 2·4·5팀과 맞춰 추가한다. */
const SOURCE = { type: 'object', properties: {
  title: { type: 'string' }, publisher: { type: 'string' }, url: { type: 'string' },
  date: { type: 'string', description: '후보 목록의 날짜 그대로. 없으면 빈 문자열' },
  quote: { type: 'string', description: '실제로 읽은 원문 문장. 못 읽었으면 후보 목록의 제목을 그대로 복사' },
}, required: ['title', 'publisher', 'url', 'date', 'quote'] }

// ⚠️ 필드 이름(easy·easySummary)은 대시보드 렌더러가 읽는다. 이름은 두고 설명만 바꾼다.
const NEWS = { type: 'object', properties: {
  digest: { type: 'array', items: { type: 'object', properties: {
    headline: { type: 'string', description: '한국어 헤드라인' },
    easy: { type: 'string', description: '핵심 분석 최대 5문장, 금융 실무자 대상. 무슨 일이 있었는지 · 원인 · 그래서 무엇이 달라지는지. 기사에 있는 수치는 단위·기간을 붙여 그대로 인용' },
    whyMatters: { type: 'string', description: '이게 왜 중요한지 최대 4문장. **구체적인 업종이나 종목 이름을 들어** 어떤 영향인지. 위 주도 섹터 목록을 활용하라' },
    impact: { type: 'string', enum: ['up', 'down', 'neutral'] },
    sources: { type: 'array', items: SOURCE },
  }, required: ['headline', 'easy', 'whyMatters', 'impact', 'sources'] } },
  marketNarrative: { type: 'string', description: '오늘 시장 국면 최대 6문장. 지수 판정·마진부채·주도 섹터 수치를 인용해 결론 → 근거 → 리스크 → 확인할 조건 순으로' },
  keyRisks: { type: 'array', items: { type: 'string' } },
  easySummary: { type: 'array', items: { type: 'string' }, description: '3줄 요약' },
}, required: ['digest', 'marketNarrative', 'keyRisks', 'easySummary'] }

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

phase('시황뉴스')
// 에이전트가 죽으면 1회만 다시 시도한다.
// ⚠️ 이 워크플로는 에이전트가 하나뿐이라 실패하면 `{...null}` 이 되어 필드가 통째로 사라진다.
//    JS 에서 {...null} 은 합법이라 오류도 안 난다 — 빈 리포트가 조용히 나간다. 아래에서 막는다.
const tryAgent = async (p, o) => {
  const r = await agent(p, o)
  if (r) return r
  log(`재시도: ${o.label}`)
  return await agent(p, { ...o, label: `${o.label}#2` })
}

const result = await tryAgent(
  `당신은 매크로 분석가입니다. 독자는 금융 실무자입니다. 오늘은 ${date}.

## Node 가 이미 계산한 수치 (⚠️ 이 숫자를 절대 바꾸지 마라. 해석만 하라)
- QQQ 쿨라매기 판정: ${ctx.qqqKo || '—'}
- QQQ 종가 ${ctx.qqqPrice ?? '—'} · MA10 ${ctx.ma10 ?? '—'} / MA20 ${ctx.ma20 ?? '—'} / MA50 ${ctx.ma50 ?? '—'}
- FINRA 고객 마진부채: ${ctx.finraKo || '—'}
- 주도 섹터: ${(ctx.sectors || []).map((s) => `${s.name} ${s.count}종목(${s.sharePct}%)`).join(' · ') || '—'}
- 200일선 +150% 초과 종목수: ${ctx.over150 ?? '—'}

## 뉴스 후보 (Node 가 RSS 로 수집한 실제 기사. **이 목록 밖의 URL 을 쓰지 마라**)
${candidates.map((c, i) => `[${i + 1}] ${c.date || ''} [${c.publisher}] ${c.title}\n    ${c.url}`).join('\n')}

## 할 일
위 후보 중 **오늘 미국 주식시장에 중요한 최대 10건**을 골라 정리하세요.
후보가 그만큼 안 되면 적게 써도 됩니다 — **채우려고 무관한 기사를 끌어오지 마세요.**
영국 국내 뉴스(수도요금·백화점 인수 등)처럼 미국장과 무관한 것은 후보에 있어도 빼세요.

반드시 지킬 것:
1. **sources 의 url 은 위 후보 목록에 있는 것만 쓴다. 새 URL 을 만들지 마라.**
2. 후보에 없는 사건을 지어내지 마라. 후보가 빈약하면 적게 써도 된다.
3. 위에 제공된 QQQ·마진부채 숫자를 인용할 때 값을 바꾸지 마라.
4. whyMatters 는 "그래서 어느 업종·종목에 무엇이 달라지나"를 **구체적인 이름을 들어** 답하라.
   "기술주에 영향"처럼 뭉뚱그리지 말고 위에 준 주도 섹터를 근거로 어디에 어떻게 영향인지 써라.
   후보 기사에 없는 종목의 실적·사건을 지어내지는 마라 — 영향의 방향만 말하라.
5. **quote 에는 실제로 읽은 문장을 그대로 넣어라.** 기사 본문을 못 읽었으면
   위 후보 목록의 제목을 그대로 복사해라. **요약해서 새로 쓰거나 번역하지 마라.**
6. date 는 후보 목록의 날짜를 그대로 쓰고, 목록에 날짜가 없으면 빈 문자열로 둬라. **추정하지 마라.**
7. 확인 못 한 것은 쓰지 않는다. 분량을 채우려고 추측을 늘리지 마라.
${STYLE}`,
  { label: '시황뉴스', phase: '시황뉴스', schema: NEWS, model: 'opus' }
)

if (!result) {
  log('❌ 시황뉴스 에이전트가 재시도 후에도 실패했습니다 — 빈 리포트 대신 실패를 명시합니다')
  return { date, team: 1, error: 'agent_failed', digest: [], candidateCount: candidates.length }
}

return { date, team: 1, ...result, candidateCount: candidates.length }
