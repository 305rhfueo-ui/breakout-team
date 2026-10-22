'use strict';
// 로컬 판정 모델(Ollama · Laya·Nimble) — Claude 판정 옆에 **기록만** 남긴다. 매매·화면 판단에는 쓰지 않는다.
//   (2026-10-22 사용자 합의: Claude 분류와 나란히 채점을 쌓다가 → 자료가 충분하면 재학습한 Laya 를 검증해 교체)
//
// API(2026-10-22 실측, Ollama 0.40.7 — 새 기능이라 버전마다 바뀐다. brew upgrade 는 자동으로 하지 않는다):
//   POST /v1/systemone {model, state, questions:{이름:{type, instructions, criteria}}}
//     noul   → answers.이름.noul (0~1, "예" 확률)
//     choice → criteria 는 {키: 설명|null} 객체(배열이면 400) → .choice, .confidence
//   Laya(4.2억) 건당 1초 미만, Nimble(9B) 첫 로딩 뒤 건당 수 초.
// Ollama 가 꺼져 있거나 응답 모양이 바뀌면 그 모델 값은 null — 절대 throw 하지 않는다(기존 흐름에 영향 없음).
const HOST = process.env.OLLAMA_URL || 'http://localhost:11434';
const MODELS = ['laya', 'nimble'];

const r2 = (v) => (Number.isFinite(v) ? Math.round(v * 100) / 100 : null);

async function ask(model, state, questions) {
  try {
    const r = await fetch(`${HOST}/v1/systemone`, { method: 'POST', body: JSON.stringify({ model, state, questions }), signal: AbortSignal.timeout(60000) });
    if (!r.ok) return null;
    const a = (await r.json()).answers;
    if (!a) return null;
    const out = {};
    for (const [k, q] of Object.entries(questions)) {
      const x = a[k] || {};
      out[k] = q.type === 'noul' ? r2(x.noul) : typeof x.choice === 'string' ? { v: x.choice, conf: r2(x.confidence) } : null;
    }
    return out;
  } catch (e) { return null; }
}

// 같은 입력을 두 모델에 → { laya: {...}|null, nimble: {...}|null } | null(둘 다 실패)
async function judge(state, questions) {
  const out = {};
  for (const m of MODELS) out[m] = await ask(m, state, questions);
  return MODELS.some((m) => out[m]) ? out : null;
}

// ── 재민(4팀) 촉매 — Claude 가 받은 것과 같은 원문(state/llm-in/_t4/<T>.json 의 뉴스 제목·8-K 항목)만 읽는다
const CAT_Q = { category: { type: 'choice', instructions: 'Why did this stock trade on unusually heavy volume? Pick the most likely catalyst from the news headlines and SEC 8-K filings.',
  criteria: {
    1: 'Earnings surprise or raised guidance',
    2: 'Biotech/healthcare: clinical trial success or FDA approval',
    3: 'Large partnership or supply contract with a major company',
    4: 'Turnaround: new CEO, breakthrough new product, return to profit',
    5: 'Macro, policy or industry breakthrough (AI, quantum, robotics, regulation, election)',
    6: 'No clear news — unusual volume only',
  } } };
const ITEM_EN = { '1.01': 'material agreement', '1.02': 'agreement terminated', '2.01': 'acquisition/disposal completed', '2.02': 'earnings results',
  '2.03': 'new debt', '3.02': 'unregistered share sale', '5.02': 'executive change', '5.07': 'shareholder vote', '7.01': 'Reg FD disclosure', '8.01': 'other events', '9.01': 'financial exhibits' };
function catalystState(t4) {
  const news = (t4.news || []).slice(0, 15).map((n) => `- ${n.date || ''} ${n.title}`);
  const filings = (t4.filings || []).slice(0, 6).map((f) => `- ${f.filingDate} ${f.form}: ${(f.items || []).map((i) => ITEM_EN[i] || i).join(', ')}`);
  return `Company ticker: ${t4.ticker}\nNews headlines:\n${news.join('\n') || '(none)'}\nSEC filings:\n${filings.join('\n') || '(none)'}`;
}
async function judgeCatalyst(t4) {
  const r = await judge(catalystState(t4), CAT_Q);
  if (!r) return null;
  const out = {};
  for (const m of MODELS) out[m] = r[m] && r[m].category ? { category: Number(r[m].category.v) || null, conf: r[m].category.conf } : null;
  return out;
}

// ── 다온(8팀) 보유 종목 소식 — Claude 가 받은 것과 같은 제목·요약·본문. tone 은 회사(주가) 기준 — 공매도 뒤집기는 채점이 한다
function newsQ(ticker) {
  return { about: { type: 'noul', instructions: `Is this article mainly about the company with ticker ${ticker} (not just a passing mention)?` },
    tone: { type: 'choice', instructions: `Is this news good, bad or neutral for the stock price of ${ticker}?`, criteria: { good: null, bad: null, neutral: null } } };
}
async function judgeNews({ ticker, title, text, body }) {
  const state = `Ticker: ${ticker}\nTitle: ${title || ''}\nSummary: ${String(text || '').slice(0, 1500)}\n${body ? `Article: ${String(body).slice(0, 4000)}` : ''}`;
  const r = await judge(state, newsQ(ticker));
  if (!r) return null;
  const out = {};
  for (const m of MODELS) out[m] = r[m] ? { about: r[m].about, tone: r[m].tone ? r[m].tone.v : null } : null;
  return out;
}

module.exports = { judgeCatalyst, judgeNews, catalystState };
