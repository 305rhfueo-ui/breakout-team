'use strict';
// CNBC 종목 페이지(cnbc.com/quotes/{T})의 "Latest News" — CNBC 가 그 종목에 태그한 기사·영상 목록 (2026-10-08 사용자 요청).
//
// 실측(NET, 2026-10-08): <a href="…/2026/09/17/investor-steve-grasso-is-buying-cloudflare.html" class="LatestNews-headline"
//   title="AI is giving this cybersecurity stock more juice. …">…</a> … <time class="LatestNews-timestamp">September 17, 2026</time>
// 제목·URL·날짜만 모은다(날짜는 URL 경로 /YYYY/MM/DD/ 에서 — 가장 확실). 본문 인용은 에이전트가 URL 을 직접 열어 따온다.
// ⚠️ /pro/ 는 유료 기사 — 제목만 근거로 쓸 수 있다(본문 숫자 인용 금지). /video/ 는 영상 — 제목만.
//
//   getTickerArticles('NET') → { ok, items:[{title,url,date,kind:'article'|'video'|'pro',publisher:'CNBC'}] }
// 절대 throw 하지 않는다. 6시간 캐시. 종목당 1요청.

const cache = require('../lib/cache');

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36';
const TTL = 6 * 3600 * 1000;

const unesc = (s) => String(s || '')
  .replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/\s+/g, ' ').trim();

function parseQuotePage(html, { maxAgeDays = 120, limit = 8, today = new Date() } = {}) {
  const out = [], seen = new Set();
  const re = /<a href="(https:\/\/www\.cnbc\.com\/[^"]+\.html)" class="LatestNews-headline"[^>]*title="([^"]*)"/g;
  let m;
  while ((m = re.exec(String(html || '')))) {
    const url = m[1];
    if (seen.has(url)) continue;
    seen.add(url);
    const d = url.match(/\/(20\d\d)\/(\d\d)\/(\d\d)\//);
    const date = d ? `${d[1]}-${d[2]}-${d[3]}` : null;
    if (date && (today - new Date(`${date}T00:00:00Z`)) / 864e5 > maxAgeDays) continue;
    out.push({ title: unesc(m[2]), url, date, publisher: 'CNBC',
      kind: /\/pro\//.test(url) ? 'pro' : /\/video\//.test(url) ? 'video' : 'article' });
  }
  // 기사 먼저, 같은 종류 안에서는 최신순
  const rank = { article: 0, pro: 1, video: 2 };
  out.sort((a, b) => (rank[a.kind] - rank[b.kind]) || String(b.date || '').localeCompare(String(a.date || '')));
  return out.slice(0, limit);
}

async function fetchPage(t) {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 15000);
  try {
    const r = await fetch(`https://www.cnbc.com/quotes/${encodeURIComponent(t)}`, { headers: { 'User-Agent': UA, Accept: 'text/html' }, signal: ctl.signal });
    return r.ok ? await r.text() : null;
  } catch (e) { return null; } finally { clearTimeout(timer); }
}

async function getTickerArticles(ticker, opts = {}) {
  const t = String(ticker || '').toUpperCase().replace(/\//g, '.');
  if (!t) return { ok: false, items: [] };
  try {
    const items = await cache.through('cnbcQuote', t, async () => {
      const html = await fetchPage(t);
      return html == null ? null : parseQuotePage(html, opts);     // 실패는 캐시하지 않는다 — 다음 실행에서 다시
    }, TTL);
    return { ok: Array.isArray(items), items: items || [] };
  } catch (e) { return { ok: false, items: [] }; }
}

module.exports = { getTickerArticles, parseQuotePage };
