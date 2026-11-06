'use strict';
// 숫자 대조 가드 (2026-10-08 사용자 요구: "절대 할루시네이션이 발생하면 안 된다").
//
// AI 가 쓴 문장 속 숫자가 **근거 텍스트에 실제로 있는지** 코드로 대조한다. AI 팩트체커(하이쿠)는 실측에서
// "콴타는 분기 매출이 41% 늘었고"(출처는 제목뿐, 41% 없음)를 통과시켰다 — 숫자는 사람 대신 코드가 본다.
//
//   근거 텍스트 = 그 주장의 출처(quote·title) + Node 가 모아 넘긴 입력 자료(실적표·KIS·사이트 수치 JSON).
//   · 단위 환산: 200억 달러 = $20 billion = 20000000000 (금액은 1.5% 오차까지 같은 값)
//   · 반올림: 37.2 → "37", 20.43 → "20.4" 는 같은 값
//   · 숫자로 세지 않는 것: 연도(19xx·20xx), 날짜(N월·N일·4~6월), 분기·회계연도 이름(2분기·FY2028), 이평선(N일선),
//     임상 단계(3상), 기간 이름(1·3·6개월·N주·N년 전)
//
//   checkText(text, corpus)  → { text: 남긴 문장, cut: [지운 문장] }   문장 단위로 지운다
//   checkClaims(claims)       → { kept, dropped }   주장마다 자기 출처(quote·title)로만 대조
//   corpusOf(...values)       → 대조용 근거 묶음 (문자열·객체 아무거나 — 객체는 JSON 으로)

const MONEY_KO = { 조: 1e12, 억: 1e8, 만: 1e4 };
const MONEY_EN = { trillion: 1e12, billion: 1e9, bn: 1e9, b: 1e9, million: 1e6, mn: 1e6, m: 1e6, thousand: 1e3, k: 1e3 };

// 숫자로 세지 않는 것 — 날짜·기간·이름
const SKIP_AFTER = /^(?:\s*(?:월|일(?!선)|분기|회계연도|년\s*(?:전|째|간|만|동안|연속)?|개월|주(?:\s*(?:전|째|간|동안|고점|연속))?|상(?![승향])|차|번째|시|분|위(?!안)|일선|일\s*선|일\s*평균|거래일|영업일|세|명|종목|개\s*종목|개\s*목록))/;
const SKIP_BEFORE = /(?:FY|Q|H|CY|NY|20)$/i;
// 회사 이름에 든 숫자 (2026-10-12 실측: "필립스 66" 을 숫자로 세어 멀쩡한 문장을 지웠다)
const NAME_BEFORE = /(?:필립스|Phillips|S&P|러셀|Russell|나스닥|Nasdaq|Nasdaq-|나스닥-)\s?$/i;

const num = (s) => Number(String(s).replace(/,/g, ''));

function tokens(text) {
  const out = [];
  const t = String(text || '');
  // 금액 (한국어 단위)
  const reKo = /(\d+(?:[.,]\d+)*)\s*(천\s*)?(조|억|만)\s*(\d+(?:[.,]\d+)*\s*(?:억|만)\s*)?(?:\d+\s*)?(?:달러|원|USD)?/g;   // "3천억" = 3,000억
  const used = [];
  let m;
  // "1만 1,000대" = 11,000 — 달러·원이 붙지 않은 만 단위 수. 쪼개 읽으면 1 과 1,000 이 되어 멀쩡한 문장을 지운다 (2026-11-06 N 심층 실측)
  //   "1만1천대" = 11,000 · "3천 명" = 3,000 도 같은 방식
  const reMan = /(\d+(?:[.,]\d+)*)\s*(만|천)(?:\s*(\d+(?:\.\d+)?)\s*천|\s*(\d{1,3}(?:,\d{3})+|\d{1,4}))?(?!\s*(?:[\d.,]|달러|원|USD|억|만))/g;
  while ((m = reMan.exec(t))) {
    if (m[2] === '천' && (m[3] || m[4])) continue;
    const v = num(m[1]) * (m[2] === '만' ? 1e4 : 1e3) + (m[3] ? num(m[3]) * 1e3 : m[4] ? num(m[4]) : 0);
    out.push({ kind: 'num', raw: m[0].trim(), value: v, dec: 0 });
    used.push([m.index, m.index + m[0].length]);
  }
  while ((m = reKo.exec(t))) {
    if (!/달러|원|USD/.test(m[0]) && !/억|조/.test(m[3])) continue;           // "3만" 처럼 단위 없는 것은 일반 숫자로(위 reMan)
    let v = num(m[1]) * (m[2] ? 1e3 : 1) * MONEY_KO[m[3]];
    if (m[4]) { const mm = m[4].match(/(\d+(?:[.,]\d+)*)\s*(억|만)/); if (mm) v += num(mm[1]) * MONEY_KO[mm[2]]; }
    out.push({ kind: 'money', raw: m[0].trim(), value: v });
    used.push([m.index, m.index + m[0].length]);
  }
  // 금액 (영어 단위)
  const reEn = /\$?\s?(\d+(?:[.,]\d+)*)\s*(trillion|billion|million|thousand|bn|mn|[bmk])\b/gi;
  while ((m = reEn.exec(t))) {
    out.push({ kind: 'money', raw: m[0].trim(), value: num(m[1]) * MONEY_EN[m[2].toLowerCase()] });
    used.push([m.index, m.index + m[0].length]);
  }
  // 날짜 범위 "4~6월" 은 통째로 건너뛴다
  const reRange = /\d+\s*[~\-–]\s*\d+\s*(?:월|일|분기)/g;
  while ((m = reRange.exec(t))) used.push([m.index, m.index + m[0].length]);
  // 나머지 숫자
  const reNum = /\d+(?:[.,]\d+)*/g;
  while ((m = reNum.exec(t))) {
    const a = m.index, b = a + m[0].length;
    if (used.some(([x, y]) => a >= x && b <= y)) continue;
    const after = t.slice(b, b + 8), before = t.slice(Math.max(0, a - 3), a);
    const v = num(m[0]);
    if (/^(19|20)\d\d$/.test(m[0])) continue;                              // 연도
    if (/^\d\d$/.test(m[0]) && /['’‘]$/.test(t.slice(a - 1, a))) continue;   // Team'26 · FY'27 같은 연도 약칭
    if (SKIP_AFTER.test(after) || SKIP_BEFORE.test(before) || NAME_BEFORE.test(t.slice(Math.max(0, a - 9), a))) continue;
    if (/^\d{1,2}$/.test(m[0]) && /^\s*[/.]\s*\d{1,2}\b/.test(after)) continue; // 9/30 같은 날짜
    if (/^[/.-]\d{1,2}$/.test(t.slice(a - 3, a).slice(-3)) && /^\d{1,2}$/.test(m[0])) continue;
    out.push({ kind: 'num', raw: m[0], value: v, dec: (m[0].split('.')[1] || '').length });
  }
  return out;
}

function corpusOf(...vals) {
  const text = vals.map((v) => (v == null ? '' : typeof v === 'string' ? v : JSON.stringify(v))).join(' \n ');
  const toks = tokens(text);
  // JSON 의 큰 정수(182175000 같은 SEC 원값)는 금액 후보로도 본다
  const money = toks.filter((x) => x.kind === 'money').map((x) => x.value)
    .concat(toks.filter((x) => x.kind === 'num' && x.value >= 1e5).map((x) => x.value));
  const nums = toks.filter((x) => x.kind === 'num').map((x) => x.value);
  // 짧은 근거(주장 하나의 인용문)는 표 한 줄일 때가 많다 — SEC 표의 단위(천·백만 달러)는 표 머리에 있어 인용문에 안 나온다.
  //   443,245(천 달러) = 4.432억 달러 · ~$160(백만 달러) = 1.6억 달러. 긴 원문 전체와 맞출 때는 우연히 맞는 수가 많아 허용하지 않는다 (2026-11-06)
  return { money, nums, short: text.length <= 1500 };
}

function supported(tok, c) {
  if (tok.kind === 'money') return c.money.some((v) => v > 0 && Math.abs(v - tok.value) / tok.value <= 0.015)
    || (!!c.short && c.nums.some((x) => x > 0 && [1e3, 1e6].some((u) => Math.abs(x * u - tok.value) / tok.value <= 0.015)));
  const v = tok.value;
  if (v === 0) return true;
  const f = 10 ** (tok.dec || 0);
  return c.nums.some((x) => Math.round(x * f) / f === v || Math.round(Math.abs(x) * f) / f === v)
    // "월 사용자 200만 명" ← "2 million monthly users" — 영어 원문의 million 은 금액이 아니어도 금액으로 읽힌다 (2026-11-06)
    || (v >= 1e4 && c.money.some((x) => Math.abs(x - v) / v <= 0.015))
    // 금액 원값(달러)을 줄여 쓴 경우: 1.82(억) ← 182175000, 6,190(만) ← 61902000
    || c.money.some((x) => [1e8, 1e4, 1e9, 1e6].some((u) => Math.round((x / u) * f) / f === v));
}

const splitSentences = (t) => String(t || '').split(/(?<=[.!?。])\s+|\n+/).map((x) => x.trim()).filter(Boolean);

function checkText(text, corpus) {
  if (!text || typeof text !== 'string') return { text, cut: [] };
  const kept = [], cut = [];
  for (const s of splitSentences(text)) {
    const bad = tokens(s).filter((tk) => !supported(tk, corpus));
    if (bad.length) cut.push({ sentence: s, missing: bad.map((b) => b.raw) }); else kept.push(s);
  }
  return { text: kept.join(' '), cut };
}

const sourceText = (c) => (c && c.sources || []).map((s) => `${s.title || ''} ${s.quote || ''}`).join(' ');

// 주장 하나하나를 **자기 출처로만** 대조한다. 숫자가 출처에 없으면 그 주장을 뺀다.
function checkClaims(claims, extra = '') {
  const kept = [], dropped = [];
  for (const c of claims || []) {
    if (!c || c.evidence_level !== 'sourced') { kept.push(c); continue; }
    const r = checkText(c.statement, corpusOf(sourceText(c), extra));
    if (r.cut.length) dropped.push({ id: c.id, statement: c.statement, missing: r.cut.flatMap((x) => x.missing) });
    else kept.push(c);
  }
  return { kept, dropped };
}

module.exports = { tokens, corpusOf, supported, checkText, checkClaims, sourceText, splitSentences };
