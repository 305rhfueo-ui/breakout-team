export const meta = {
  name: 'bt-team1-news',
  description: '1팀 시장 뉴스 — 중학생도 이해할 수 있게, 출처 링크 필수',
  whenToUse: 'start breakout 실행 시. 오늘 미국 시장 이슈를 쉬운 말로 정리할 때',
  phases: [{ title: '시황뉴스', detail: 'Node 가 수집한 RSS 후보를 해석 (URL 창작 불가)' }],
}
// 사용법: Workflow({ scriptPath:'<abs>/scripts/workflows/team1-news.js',
//   args:{ date, candidates:[{publisher,title,url,date}], context:{qqq,finra,sectors} } })

let A = args
if (typeof A === 'string') { try { A = JSON.parse(A) } catch (e) { A = null } }
const date = (A && A.date) || 'today'
const candidates = (A && A.candidates) || []
const ctx = (A && A.context) || {}

const SOURCE = { type: 'object', properties: {
  title: { type: 'string' }, publisher: { type: 'string' }, url: { type: 'string' }, date: { type: 'string' },
}, required: ['title', 'publisher', 'url'] }

const NEWS = { type: 'object', properties: {
  digest: { type: 'array', items: { type: 'object', properties: {
    headline: { type: 'string', description: '한국어 헤드라인' },
    easy: { type: 'string', description: '중학생도 이해할 3~5문장 설명. 비유를 쓰고 전문용어는 괄호로 풀어라' },
    whyMatters: { type: 'string', description: '이게 왜 중요한지, 내 종목에 어떤 영향인지' },
    impact: { type: 'string', enum: ['up', 'down', 'neutral'] },
    sources: { type: 'array', items: SOURCE },
  }, required: ['headline', 'easy', 'whyMatters', 'impact', 'sources'] } },
  marketNarrative: { type: 'string', description: '오늘 시장이 어떤 상황인지 4~6문장, 쉽게' },
  keyRisks: { type: 'array', items: { type: 'string' } },
  easySummary: { type: 'array', items: { type: 'string' }, description: '초보자용 3줄 요약' },
}, required: ['digest', 'marketNarrative', 'keyRisks', 'easySummary'] }

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
  `당신은 개인 투자자에게 시장을 아주 쉽게 설명하는 매크로 분석가입니다. 오늘은 ${date}.

## Node 가 이미 계산한 수치 (⚠️ 이 숫자를 절대 바꾸지 마라. 해석만 하라)
- QQQ 쿨라매기 판정: ${ctx.qqqKo || '—'}
- QQQ 종가 ${ctx.qqqPrice ?? '—'} · MA10 ${ctx.ma10 ?? '—'} / MA20 ${ctx.ma20 ?? '—'} / MA50 ${ctx.ma50 ?? '—'}
- FINRA 고객 마진부채: ${ctx.finraKo || '—'}
- 주도 섹터: ${(ctx.sectors || []).map((s) => `${s.name} ${s.count}종목(${s.sharePct}%)`).join(' · ') || '—'}
- 200일선 +150% 초과 종목수: ${ctx.over150 ?? '—'}

## 뉴스 후보 (Node 가 RSS 로 수집한 실제 기사. **이 목록 밖의 URL 을 쓰지 마라**)
${candidates.map((c, i) => `[${i + 1}] ${c.date || ''} [${c.publisher}] ${c.title}\n    ${c.url}`).join('\n')}

## 할 일
위 후보 중 **오늘 미국 주식시장에 가장 중요한 5~7건**을 골라 정리하세요.

반드시 지킬 것:
1. **sources 의 url 은 위 후보 목록에 있는 것만 쓴다. 새 URL 을 만들지 마라.**
2. 후보에 없는 사건을 지어내지 마라. 후보가 빈약하면 적게 써도 된다.
3. easy 는 **중학생도 이해할 수 있게** 비유를 써서 3~5문장. 전문용어는 괄호로 풀어라.
   (예: "연준이 금리를 내렸습니다(금리 = 돈을 빌릴 때 내는 이자). 돈이 싸지면...")
4. 위에 제공된 QQQ·마진부채 숫자를 인용할 때 값을 바꾸지 마라.
5. whyMatters 는 "그래서 내 종목에 뭐가 달라지나"를 답하라.

한글로 작성하세요.`,
  { label: '시황뉴스', phase: '시황뉴스', schema: NEWS, model: 'opus' }
)

if (!result) {
  log('❌ 시황뉴스 에이전트가 재시도 후에도 실패했습니다 — 빈 리포트 대신 실패를 명시합니다')
  return { date, team: 1, error: 'agent_failed', digest: [], candidateCount: candidates.length }
}

return { date, team: 1, ...result, candidateCount: candidates.length }
