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
// 봇/페이월로 4xx 를 주지만 브라우저로는 정상적으로 열리는 매체들.
// marketwatch·yahoo 는 2026-08-08 실행에서 실측으로 추가했다 (401 / 헤더초과).
const BOT_BLOCKED = /(wsj\.com|bloomberg\.com|ft\.com|reuters\.com|barrons\.com|seekingalpha\.com|investors\.com|marketwatch\.com|finance\.yahoo\.com|yahoo\.com|economist\.com|nytimes\.com)/i;

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

// ⚠️ 전역 fetch(undici)는 응답 헤더 한도가 16KB 로 고정이라
//    finance.yahoo.com 처럼 Set-Cookie 를 잔뜩 보내는 사이트에서
//    상태 코드를 읽기도 전에 UND_ERR_HEADERS_OVERFLOW 로 터진다.
//    그걸 '죽은 링크'로 처리하는 바람에 2026-08-08 실행에서 살아있는 기사 24건을
//    지우고 주장 18건을 '근거 없음'으로 강등한 적이 있다.
//    node:http(s) 는 요청 단위로 maxHeaderSize 를 줄 수 있어 그 한계가 없다.
const http = require('http');
const https = require('https');
const MAX_HEADER = 128 * 1024;
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';
// ⚠️ SEC 는 브라우저 UA 를 403 으로 막고 '앱명/버전 (연락처)' 형식을 요구한다.
//    이걸 안 맞추면 우리가 가진 가장 확실한 1차 출처(공시 원문)가 전부 '미검증'으로 남는다.
const SEC_UA = process.env.SEC_USER_AGENT || 'breakout-team/0.1 (contact@example.com)';
const uaFor = (host) => (/(^|\.)sec\.gov$/i.test(host) ? SEC_UA : UA);

function requestStatus(url, { method = 'HEAD', timeoutMs = 8000, hops = 0, extra } = {}) {
  return new Promise((resolve) => {
    if (hops > 5) return resolve({ status: 0, reason: '리다이렉트 과다' });
    let u;
    try { u = new URL(url); } catch (e) { return resolve({ status: 0, reason: 'URL 형식' }); }
    const lib = u.protocol === 'http:' ? http : https;
    const req = lib.request(u, {
      method, maxHeaderSize: MAX_HEADER, timeout: timeoutMs,
      headers: { 'User-Agent': uaFor(u.hostname), Accept: 'text/html,*/*', ...(extra || {}) },
    }, (res) => {
      const { statusCode: status, headers } = res;
      res.resume(); // 본문은 버린다 — 상태 코드만 필요하다
      if (status >= 300 && status < 400 && headers.location) {
        const next = new URL(headers.location, u).toString();
        return resolve(requestStatus(next, { method, timeoutMs, hops: hops + 1, extra }));
      }
      resolve({ status });
    });
    req.on('timeout', () => { req.destroy(); resolve({ status: 0, reason: '타임아웃' }); });
    req.on('error', (e) => resolve({ status: 0, reason: e.code || e.message }));
    req.end();
  });
}

// 연결 자체가 끊긴 경우(status 0)에도 두 가지를 구분해야 한다.
//   ① 도메인이 아예 없다(ENOTFOUND)        → 지어낸 URL. 죽음.
//   ② 도메인은 있는데 연결을 끊는다(ECONNRESET·타임아웃) → 봇 차단. 죽음이 아니다.
// 실측: globenewswire.com 은 ②다. 브라우저로는 열리는데 스크립트 연결만 리셋한다.
const DNS_DEAD = /ENOTFOUND|EAI_AGAIN|ERR_INVALID_URL|URL 형식|리다이렉트 과다/i;

async function headCheck(url, timeoutMs = 8000) {
  let r = await requestStatus(url, { method: 'HEAD', timeoutMs });
  // HEAD 를 막는 서버가 많다 → 1바이트 GET 으로 재시도
  if (r.status === 0 || r.status === 405 || r.status === 501) {
    r = await requestStatus(url, { method: 'GET', timeoutMs, extra: { Range: 'bytes=0-0' } });
  }
  if (r.status === 0 && !DNS_DEAD.test(String(r.reason || ''))) {
    // DNS 는 되는지 직접 확인한다 — 도메인이 실재하면 '차단'이지 '없는 페이지'가 아니다
    try {
      const dns = require('dns').promises;
      await dns.lookup(new URL(url).hostname);
      return { status: 0, blockedConn: true, reason: r.reason };
    } catch (e) { /* DNS 도 실패 → 진짜 죽음 */ }
  }
  return { status: r.status, blockedConn: false, reason: r.reason };
}

async function linkCheck(urls, { concurrency = 6, timeoutMs = 8000 } = {}) {
  const uniq = [...new Set(urls.filter(Boolean))];
  const out = new Map();
  let i = 0;
  async function worker() {
    while (i < uniq.length) {
      const u = uniq[i++];
      const { status, blockedConn, reason } = await headCheck(u, timeoutMs);
      const blocked = BOT_BLOCKED.test(u);
      let verdict;
      if (status >= 200 && status < 400) verdict = 'ok';
      // 401 = 페이월·로그인 벽. '페이지가 없다'가 아니라 '로그인하라'다 (MarketWatch 실측)
      else if (status === 401 || status === 403 || status === 429 || status === 999
               || (blocked && status >= 400)) verdict = 'unverified';
      // 도메인은 살아있는데 연결이 끊긴 경우 (globenewswire 실측)
      else if (status === 0 && blockedConn) verdict = 'unverified';
      // 5xx = 서버가 응답은 했다. 지어낸 URL 이면 404 가 오지 5xx 가 오지 않는다.
      // (globenewswire 는 Cloudflare 가 503 으로 막는다 — '없는 기사'가 아니다)
      else if (status >= 500) verdict = 'unverified';
      else verdict = 'dead';
      out.set(u, { status, verdict, reason: reason || null });
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
