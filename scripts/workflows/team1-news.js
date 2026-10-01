export const meta = {
  name: 'bt-team1-news',
  description: '1팀 시장 뉴스 — 일반 투자자 대상 시황 정리, 출처 링크 필수',
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
    headline: { type: 'string', description: '한국어 헤드라인, 30자 안팎. 주어·서술어가 있는 한 문장' },
    easy: { type: 'string', description: '무슨 일인지 최대 3문장. ①무슨 일이 있었나 ②왜 그랬나 ③그래서 뭐가 달라지나. 기사에 있는 핵심 숫자 1~2개만' },
    whyMatters: { type: 'string', description: '내 투자에 무슨 의미인지 최대 2문장. 어느 업종·종목에 좋은지/나쁜지를 이름을 들어 말한다. QQQ·이평선 숫자는 다시 쓰지 않는다' },
    impact: { type: 'string', enum: ['up', 'down', 'neutral'] },
    sources: { type: 'array', items: SOURCE },
  }, required: ['headline', 'easy', 'whyMatters', 'impact', 'sources'] } },
  marketNarrative: { type: 'string', description: '오늘 시장 한 줄 결론 + 이유 + 조심할 점 + 지켜볼 것, 최대 4문장. 지수·마진부채 숫자는 여기서 한 번만 쓴다' },
  keyRisks: { type: 'array', items: { type: 'string' }, description: '조심할 점 최대 4개. 각 항목은 "제목: 한 문장" 형식, 60자 안팎' },
  easySummary: { type: 'array', items: { type: 'string' }, description: '3줄 요약' },
}, required: ['digest', 'marketNarrative', 'keyRisks', 'easySummary'] }

// 2026-10-02 사용자 요청: "일반인도 쉽게 이해할 수 있게". 이전 기준(금융 실무자 대상·용어 그대로·숫자 무제한)은
// 한 문단이 길고 같은 숫자가 서사·뉴스마다 반복되고 작업 메모("본문 403")가 섞여 읽히지 않았다.
const STYLE = `
## 서술 기준 — 독자는 주식 투자를 하는 일반인이다
1. 짧게 쓴다. 한 문장은 한 가지 내용만, 60자 안팎. 칸마다 정해진 문장 수 상한을 넘기지 마라.
2. 전문 용어는 꼭 필요할 때만 쓰고, 처음 나올 때 괄호로 풀어 준다.
   예: "가이던스(회사가 내놓은 다음 분기 전망)", "할인율이 오른다(미래 이익의 현재 가치가 줄어든다)".
   듀레이션·리레이팅·크랙 스프레드·멀티플처럼 일반인이 모르는 말은 풀어 쓴 표현으로 바꿔라.
3. 숫자는 결론에 꼭 필요한 것만, 한 칸에 1~2개. QQQ 종가·이동평균·마진부채 숫자는 marketNarrative 에서 한 번만 쓰고
   뉴스·리스크 칸에서는 다시 쓰지 않는다.
4. 업종·섹터 이름은 한국어로 쓴다 (Technology → 기술, Semiconductors → 반도체). 회사명·티커는 원문 그대로.
5. 작업 과정은 쓰지 않는다. "본문이 403으로 열리지 않았다", "Node", "제공 자료", "클러스터" 같은 말은 금지.
   기사 본문을 못 읽어 숫자를 확인할 수 없으면 제목에 있는 내용만 쓰고 넘어가라 — 못 읽었다는 설명을 붙이지 마라.
6. 숫자는 quote나 제공 자료에 실제로 있는 것만 쓴다. 모르는 것은 쓰지 않는다. 분량을 채우려고 추측하지 마라.
7. 매수·매도 권유는 하지 않는다. 대신 "무엇을 지켜보면 되는지"를 한 문장으로 알려준다.
8. 한국어로 쓴다. 영어 문장·영어 인용을 섞지 마라.`

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
  `당신은 시장 소식을 일반 투자자에게 쉽게 전하는 시황 담당자입니다. 오늘은 ${date}.

## Node 가 이미 계산한 수치 (⚠️ 이 숫자를 절대 바꾸지 마라. 해석만 하라)
- QQQ 쿨라매기 판정: ${ctx.qqqKo || '—'}
- QQQ 종가 ${ctx.qqqPrice ?? '—'} · MA10 ${ctx.ma10 ?? '—'} / MA20 ${ctx.ma20 ?? '—'} / MA50 ${ctx.ma50 ?? '—'}
- FINRA 고객 마진부채: ${ctx.finraKo || '—'}
- 주도 섹터: ${(ctx.sectors || []).map((s) => `${s.name} ${s.count}종목(${s.sharePct}%)`).join(' · ') || '—'}
- 200일선 +150% 초과 종목수: ${ctx.over150 ?? '—'}

## 뉴스 후보 (Node 가 RSS 로 수집한 실제 기사. **이 목록 밖의 URL 을 쓰지 마라**)
${candidates.map((c, i) => `[${i + 1}] ${c.date || ''} [${c.publisher}] ${c.title}\n    ${c.url}`).join('\n')}

## 할 일
위 후보 중 **오늘 미국 주식시장에 중요한 최대 6건**을 골라 정리하세요. 중요한 순서로.
후보가 그만큼 안 되면 적게 써도 됩니다 — **채우려고 무관한 기사를 끌어오지 마세요.**
영국 국내 뉴스(수도요금·백화점 인수 등)처럼 미국장과 무관한 것은 후보에 있어도 빼세요.

반드시 지킬 것:
1. **sources 의 url 은 위 후보 목록에 있는 것만 쓴다. 새 URL 을 만들지 마라.**
2. 후보에 없는 사건을 지어내지 마라. 후보가 빈약하면 적게 써도 된다.
3. 위에 제공된 QQQ·마진부채 숫자를 인용할 때 값을 바꾸지 마라.
4. whyMatters 는 "그래서 어느 업종·종목에 좋은가/나쁜가"를 **구체적인 이름을 들어** 2문장 안에 답하라.
   "기술주에 영향"처럼 뭉뚱그리지 말고 업종 이름(한국어)을 들어라.
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
