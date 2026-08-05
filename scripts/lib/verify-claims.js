'use strict';
// 환각 방어 2단계 — LLM 없이 결정론적으로 출처를 검증한다.
//
// 이 계층이 가장 강력하다. LLM 이 URL 을 지어내도 네트워크가 잡아낸다.
// LLM 팩트체크(3단계)보다 싸고 확실하다.
//
// 규칙
//  1. http(s) 가 아니면 제거
//  2. example.com / localhost / 검색결과 페이지(google.com/search 등)는 출처가 아니다 → 제거
//  3. 발행일이 실행일보다 미래면 제거
//  4. HEAD 요청으로 생존 확인. 4xx·DNS 실패는 제거
//     ⚠️ 403/429/999 는 봇 차단이다(WSJ·Bloomberg 등 정상 매체) → 제거하지 않고 unverified 로 표시.
//        여기서 지우면 진짜 기사를 잃는다.
//  5. 동일 URL 중복 제거
//  6. 정제 후 sources 가 비었는데 evidence_level 이 'sourced' 면
//     statement 를 '근거 없음(출처 검증 실패로 제거됨)' 으로 바꾸고 no_source 로 강등

const { say } = require('./util');

const BAD_HOST = /^(www\.)?(example\.(com|org|net)|localhost|127\.0\.0\.1|test\.com)$/i;
const SEARCH_PAGE = /(google\.[a-z.]+\/search|bing\.com\/search|duckduckgo\.com\/\?q|search\.yahoo\.com|news\.google\.com\/rss)/i;
// 봇 차단으로 유명한 도메인 — 4xx 가 와도 '없는 기사'라고 단정하지 않는다
const BOT_BLOCKED = /(wsj\.com|bloomberg\.com|ft\.com|reuters\.com|barrons\.com|seekingalpha\.com|investors\.com)/i;

function normUrl(u) {
  try {
    const x = new URL(String(u).trim());
    if (!/^https?:$/.test(x.protocol)) return null;
    if (BAD_HOST.test(x.hostname)) return null;
    if (SEARCH_PAGE.test(x.href)) return null;
    x.hash = '';
    // 추적 파라미터 제거
    for (const p of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) x.searchParams.delete(p);
    return x.href;
  } catch (e) { return null; }
}

async function headCheck(url, timeoutMs = 8000) {
  const tryOnce = async (method, extra) => {
    const c = new AbortController();
    const timer = setTimeout(() => c.abort(), timeoutMs);
    try {
      const res = await fetch(url, {
        method, redirect: 'follow', signal: c.signal,
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; breakout-team/0.1)', ...(extra || {}) },
      });
      return res.status;
    } catch (e) { return 0; } finally { clearTimeout(timer); }
  };
  let status = await tryOnce('HEAD');
  // HEAD 를 막는 서버가 많다 → 1바이트 GET 으로 재시도
  if (status === 0 || status === 405 || status === 501) status = await tryOnce('GET', { Range: 'bytes=0-0' });
  return status;
}

async function linkCheck(urls, { concurrency = 6, timeoutMs = 8000 } = {}) {
  const uniq = [...new Set(urls.filter(Boolean))];
  const out = new Map();
  let i = 0;
  async function worker() {
    while (i < uniq.length) {
      const u = uniq[i++];
      const status = await headCheck(u, timeoutMs);
      const blocked = BOT_BLOCKED.test(u);
      let verdict;
      if (status >= 200 && status < 400) verdict = 'ok';
      else if (status === 403 || status === 429 || status === 999 || (blocked && status >= 400)) verdict = 'unverified';
      else verdict = 'dead';
      out.set(u, { status, verdict });
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, uniq.length) }, worker));
  return out;
}

function collectUrls(node, acc = []) {
  if (!node || typeof node !== 'object') return acc;
  if (Array.isArray(node)) { for (const x of node) collectUrls(x, acc); return acc; }
  if (Array.isArray(node.sources)) for (const s of node.sources) { if (s && s.url) acc.push(normUrl(s.url) || s.url); }
  for (const v of Object.values(node)) if (v && typeof v === 'object') collectUrls(v, acc);
  return acc;
}

// payload 안의 모든 sources[] 를 정제한다 (구조를 몰라도 재귀로 훑는다)
function sanitizeNode(node, { runDate, linkMap, report }) {
  if (!node || typeof node !== 'object') return node;
  if (Array.isArray(node)) return node.map((x) => sanitizeNode(x, { runDate, linkMap, report }));

  if (Array.isArray(node.sources)) {
    const seen = new Set();
    const kept = [];
    for (const s of node.sources) {
      if (!s || typeof s !== 'object') { report.removed.push({ reason: '형식 오류' }); continue; }
      const u = normUrl(s.url);
      if (!u) { report.removed.push({ reason: 'URL 부적격(비http·example·검색결과)', url: s.url }); continue; }
      if (s.date && runDate && String(s.date) > String(runDate)) {
        report.removed.push({ reason: `미래 날짜(${s.date} > ${runDate})`, url: u }); continue;
      }
      if (seen.has(u)) { report.removed.push({ reason: '중복', url: u }); continue; }
      seen.add(u);
      const lk = linkMap ? linkMap.get(u) : null;
      if (lk && lk.verdict === 'dead') { report.removed.push({ reason: `링크 죽음(HTTP ${lk.status})`, url: u }); report.dead++; continue; }
      kept.push({ ...s, url: u, verified: lk ? lk.verdict : 'unchecked', httpStatus: lk ? lk.status : null });
      if (lk && lk.verdict === 'ok') report.ok++;
      if (lk && lk.verdict === 'unverified') report.unverified++;
    }
    node.sources = kept;
    // 근거가 사라졌는데 'sourced' 라고 주장하면 강등한다
    if (kept.length === 0 && node.evidence_level === 'sourced') {
      node.statement = '근거 없음(출처 검증 실패로 제거됨)';
      node.evidence_level = 'no_source';
      node.stripped = true;
      report.stripped++;
    }
  }

  for (const [k, v] of Object.entries(node)) {
    if (k === 'sources') continue;
    if (v && typeof v === 'object') node[k] = sanitizeNode(v, { runDate, linkMap, report });
  }
  return node;
}

async function verifyPayload(payload, { runDate, check = true, concurrency = 6 } = {}) {
  const report = { checked: 0, ok: 0, unverified: 0, dead: 0, stripped: 0, removed: [] };
  const urls = collectUrls(payload);
  report.checked = new Set(urls).size;
  let linkMap = null;
  if (check && urls.length) linkMap = await linkCheck(urls, { concurrency });
  const cleaned = sanitizeNode(JSON.parse(JSON.stringify(payload)), { runDate, linkMap, report });
  return { payload: cleaned, report };
}

module.exports = { verifyPayload, linkCheck, normUrl, collectUrls };

if (require.main === module) {
  require('./util').loadEnv();
  if (process.argv.includes('--fixture')) {
    const fixture = {
      ticker: 'TEST',
      whyRose: [
        { id: 'c1', statement: '실적 서프라이즈', evidence_level: 'sourced', sources: [
          { title: '진짜 기사', publisher: 'Nasdaq', url: 'https://www.nasdaq.com/articles/nvidia-vs-advanced-micro-devices-evaluating-revenue-growth-trajectories-these-artificial', date: '2026-08-04' },
        ] },
        { id: 'c2', statement: '지어낸 근거', evidence_level: 'sourced', sources: [
          { title: '가짜', publisher: 'X', url: 'https://example.com/fake-article', date: '2026-08-01' },
        ] },
        { id: 'c3', statement: '검색결과를 출처로', evidence_level: 'sourced', sources: [
          { title: '검색', publisher: 'Google', url: 'https://www.google.com/search?q=nvda', date: '2026-08-01' },
        ] },
        { id: 'c4', statement: '미래 날짜', evidence_level: 'sourced', sources: [
          { title: '미래', publisher: 'Y', url: 'https://www.nasdaq.com/articles/x', date: '2099-01-01' },
        ] },
        { id: 'c5', statement: '봇차단 매체', evidence_level: 'sourced', sources: [
          { title: 'WSJ', publisher: 'WSJ', url: 'https://www.wsj.com/finance/stocks/some-article', date: '2026-08-01' },
        ] },
        { id: 'c6', statement: '근거 없음', evidence_level: 'no_source', sources: [] },
      ],
    };
    verifyPayload(fixture, { runDate: '2026-08-05' }).then(({ payload, report }) => {
      console.log('\n════════ verify-claims 픽스처 검증 ════════');
      for (const c of payload.whyRose) {
        const src = c.sources.map((s) => `${s.publisher}(${s.verified}/${s.httpStatus})`).join(', ') || '—';
        console.log(`  ${c.id}  ${c.evidence_level.padEnd(10)} ${c.stripped ? '⚠️강등 ' : ''}${c.statement.slice(0, 34).padEnd(36)} ${src}`);
      }
      console.log(`\n검사 ${report.checked} · 생존 ${report.ok} · 미검증(봇차단) ${report.unverified} · 죽음 ${report.dead} · 강등 ${report.stripped}`);
      console.log('제거 내역:');
      for (const r of report.removed) console.log(`  · ${r.reason}${r.url ? ' — ' + r.url.slice(0, 60) : ''}`);
      const pass = report.stripped >= 3 && report.ok >= 1;
      console.log(pass ? '\n✅ 통과 — 가짜/검색결과/미래날짜는 제거되고 진짜 기사와 봇차단 매체는 살아남음' : '\n❌ 기대와 다름');
    });
  } else {
    console.log('사용법: node scripts/lib/verify-claims.js --fixture');
  }
}
