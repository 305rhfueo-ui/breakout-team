'use strict';
// 티커별 뉴스 — Nasdaq RSS(티커 필터 가능) + 시장 뉴스 RSS.
//
// ⚠️ 사용하지 않는 소스 (실측 근거):
//   · Reuters / AP — 공개 RSS 404 또는 HTML
//   · Google News RSS — 200 이지만 <link> 가 토큰 URL 이라 원문으로 연결되지 않는다 → 출처로 부적격
//   · Yahoo v1/finance/search — 동작하지만 relatedTickers 로만 매칭돼 무관 기사가 상위에 온다
//     (NVDA 검색에 Texas Roadhouse 기사가 1위로 나온 실측 사례)
//
// Nasdaq RSS 는 <nasdaq:tickers> 를 주므로 "진짜 그 종목 기사"인지 판별할 수 있다.
// 티커가 3개 이하면 종목 기사, 수십 개면 시황 랩이다.

const cache = require('../lib/cache');
const { say } = require('../lib/util');

const MARKET_FEEDS = [
  { name: 'WSJ Markets', url: 'https://feeds.a.dj.com/rss/RSSMarketsMain.xml' },
  { name: 'CNBC Top News', url: 'https://www.cnbc.com/id/100003114/device/rss/rss.html' },
  { name: 'MarketWatch', url: 'https://feeds.content.dowjones.io/public/rss/mw_topstories' },
  { name: 'BBC Business', url: 'https://feeds.bbci.co.uk/news/business/rss.xml' },
];

// 신뢰 발행처 (Nasdaq 피드의 dc:creator 는 Zacks/Barchart 같은 애그리게이터가 많다)
const TIER1 = /reuters|bloomberg|wall street journal|wsj|financial times|associated press|cnbc|barron|marketwatch|dow jones|business wire|globe ?newswire|pr ?newswire|nasdaq/i;

async function fetchXml(url, timeoutMs = 15000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: controller.signal, headers: { 'User-Agent': 'Mozilla/5.0 (compatible; breakout-team/0.1)' } });
    if (!res.ok) return null;
    return await res.text();
  } catch (e) { return null; } finally { clearTimeout(timer); }
}

function decode(s) {
  return String(s).replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(+d))
    .replace(/&amp;/g, '&').trim();
}

function tag(item, name) {
  const m = item.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, 'i'));
  return m ? decode(m[1]) : null;
}

function parseRss(xml) {
  if (!xml) return [];
  const items = xml.match(/<item[\s\S]*?<\/item>/gi) || [];
  return items.map((it) => {
    const tickersRaw = tag(it, 'nasdaq:tickers');
    return {
      title: tag(it, 'title'),
      url: tag(it, 'link'),
      published: tag(it, 'pubDate'),
      creator: tag(it, 'dc:creator') || tag(it, 'author'),
      tickers: tickersRaw ? tickersRaw.split(',').map((s) => s.trim()).filter(Boolean) : null,
    };
  }).filter((x) => x.title && x.url);
}

function toIso(d) {
  if (!d) return null;
  const t = Date.parse(d);
  return Number.isFinite(t) ? new Date(t).toISOString().slice(0, 10) : null;
}

// 제목에 이 종목이 실제로 등장하는가?
// ⚠️ <nasdaq:tickers> 만 믿으면 안 된다 — 실측: NVDA 태그가 붙은 "Baker Hughes' Chart Deal" 기사,
//    CRWD 태그가 붙은 "Zscaler's Large Deal Activity" 기사가 섞여 나온다(동종업계 언급).
//    제목 매칭으로 direct / related 를 구분해 사용자가 오해하지 않게 한다.
function titleMentions(title, ticker, nameHint) {
  const T = String(title || '');
  if (new RegExp(`\\b${ticker}\\b`, 'i').test(T)) return true;
  if (nameHint) {
    // "NVIDIA CORP" → 첫 단어 "NVIDIA" 로 매칭
    const w = String(nameHint).split(/[\s,]+/)[0];
    if (w && w.length >= 3 && new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i').test(T)) return true;
  }
  return false;
}

// 티커별 뉴스 — Nasdaq 피드에서 그 종목 기사만 추린다
async function getTickerNews(ticker, { limit = 8, nameHint = null } = {}) {
  const t = String(ticker).toUpperCase();
  const items = await cache.through('newsRss', `nasdaq_${t}`, async () => {
    const xml = await fetchXml(`https://www.nasdaq.com/feed/rssoutbound?symbol=${encodeURIComponent(t)}`);
    return parseRss(xml);
  });
  if (!items) return { ok: false, ticker: t, items: [], error: '수신 실패' };

  // 같은 기사가 URL 만 다르게 중복 노출된다 (실측: SNOW "Stock Sinks As Market Gains" 2회)
  // → 제목+날짜로 중복 제거
  const seen = new Set();
  const scored = items
    // <nasdaq:tickers> 가 3개 이하 = 종목 기사. 수십 개면 시황 랩이라 버린다
    .filter((x) => !x.tickers || (x.tickers.includes(t) && x.tickers.length <= 3))
    .filter((x) => {
      const k = `${String(x.title).toLowerCase().replace(/\s+/g, ' ').trim()}|${toIso(x.published) || ''}`;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    })
    .map((x) => ({
      title: x.title, url: x.url, date: toIso(x.published),
      publisher: x.creator || 'Nasdaq',
      tier1: TIER1.test(x.creator || ''),
      direct: titleMentions(x.title, t, nameHint),   // 제목에 이 종목이 나오는가
      tickers: x.tickers,
    }))
    // 직접 언급 우선, 그 다음 최신순
    .sort((a, b) => (b.direct - a.direct) || String(b.date || '').localeCompare(String(a.date || '')));

  const direct = scored.filter((x) => x.direct);
  return {
    ok: true, ticker: t,
    items: scored.slice(0, limit),
    directCount: direct.length, total: scored.length,
    note: 'Nasdaq RSS · <nasdaq:tickers> 3개 이하만. ' +
      '제목에 종목명이 없는 항목은 동종업계 언급일 수 있어 "관련"으로 표시합니다. ' +
      '발행처가 Zacks·Motley Fool 등 애그리게이터일 수 있으니 원문 링크로 확인하세요.',
  };
}

// 시장 전체 뉴스 — 1팀 LLM 프롬프트에 "실제 URL 후보"로 넘긴다.
// Node 가 URL 을 먼저 확보하므로 LLM 이 링크를 지어낼 여지가 없다.
async function getMarketNews({ perFeed = 6 } = {}) {
  const out = [];
  for (const f of MARKET_FEEDS) {
    const items = await cache.through('newsRss', `mkt_${f.name.replace(/\W+/g, '_')}`, async () => {
      const xml = await fetchXml(f.url);
      return parseRss(xml);
    });
    if (!items) continue;
    for (const x of items.slice(0, perFeed)) {
      out.push({ publisher: f.name, title: x.title, url: x.url, date: toIso(x.published) });
    }
  }
  out.sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
  return { ok: out.length > 0, items: out, feeds: MARKET_FEEDS.map((f) => f.name) };
}

module.exports = { getTickerNews, getMarketNews, parseRss, MARKET_FEEDS };

if (require.main === module) {
  require('../lib/util').loadEnv();
  const tks = process.argv.slice(2).length ? process.argv.slice(2) : ['NVDA', 'CRWD'];
  (async () => {
    for (const t of tks) {
      const r = await getTickerNews(t);
      console.log(`\n════════ ${t} 뉴스 ════════`);
      if (!r.ok) { console.log('  ' + r.error); continue; }
      console.log(`  필터 통과 ${r.total}건 중 ${r.items.length}건 표시`);
      for (const x of r.items) {
        console.log(`  ${x.date || '?'}  [${x.publisher}]${x.tier1 ? ' ★' : ''} ${x.title.slice(0, 68)}`);
        console.log(`     ${x.url}`);
      }
    }
    const m = await getMarketNews();
    console.log(`\n════════ 시장 뉴스 (${m.items.length}건) ════════`);
    for (const x of m.items.slice(0, 8)) console.log(`  ${x.date || '?'}  [${x.publisher}] ${x.title.slice(0, 70)}`);
    cache.report('뉴스 캐시');
  })();
}
