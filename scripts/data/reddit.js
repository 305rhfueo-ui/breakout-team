'use strict';
// 레딧 글 — API 키 없이 (2026-10-28 사용자: "티커 팝업 맨 밑에 SNS 에서 해당 종목 글들을 분석 — 레딧이랑 X")
//
//   getPosts('NBIS') → [{ id, sub, title, body, url, date, score, comments }] (최근 1주 · 관련 글만) | null(막힘·실패)
//
// 검색: reddit.com 검색 화면이 불러오는 HTML 조각 /svc/shreddit/search/ — 글마다 제목·게시판·날짜·추천·댓글 수가 들어 있다.
//   .json 은 2026 년부터 키 없이 403, RSS 는 1분에 1번(x-ratelimit-remaining 0)이라 못 쓴다. 이 경로는 약 6분에 200번(2026-10-28 실측).
//   방식은 mvanhorn/last30days-skill(MIT) 의 reddit_search.py 를 따랐다.
// 본문: arctic-shift(공개 레딧 보관소) /api/posts/ids — 검색 한 번에 나온 글을 묶어 한 번에.
// 예절: 레딧·arctic-shift 각각 요청 사이 3~5초, 종목당 하루 1번 캐시. 429·403 이면 이 실행에서는 그 사이트를 더 부르지 않는다.
const cache = require('../lib/cache');
const { httpsText } = require('./yahoo-estimates');

const GAP_MS = [3000, 5000];
const DAYS = 7, MAX_POSTS = 10;
const gate = () => { let last = 0; return async () => { const w = last + GAP_MS[0] + Math.random() * (GAP_MS[1] - GAP_MS[0]) - Date.now(); if (w > 0) await new Promise((r) => setTimeout(r, w)); last = Date.now(); }; };
const waitReddit = gate(), waitArctic = gate();
const blocked = { reddit: false, arctic: false };
const un = (s) => String(s || '').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

// 검색 HTML 조각 → 글 목록 (순수 함수 — 시험 대상). 글 하나 = search-telemetry-tracker(JSON: id·제목·게시판) 부터 다음 tracker 전까지
function parseSearch(html) {
  const units = [];
  for (const m of String(html || '').matchAll(/<search-telemetry-tracker\b[^>]*?\bdata-faceplate-tracking-context="([^"]*)"/g)) {
    try { const c = JSON.parse(un(m[1])); if (c && c.action_info && c.action_info.type === 'post' && c.post && c.post.id) units.push([m.index, c]); } catch (e) { /* 모양이 바뀐 조각은 건너뛴다 */ }
  }
  const seen = new Set(), out = [];
  units.forEach(([at, c], i) => {
    const id = String(c.post.id).replace(/^t3_/, '');
    if (seen.has(id)) return; seen.add(id);
    const ch = html.slice(at, i + 1 < units.length ? units[i + 1][0] : html.length);
    const sub = (c.subreddit && c.subreddit.name) || '';
    const href = (ch.match(/<a\b[^>]*?data-testid="post-title"[^>]*?\bhref="([^"]*)"|<a\b[^>]*?\bhref="([^"]*)"[^>]*?data-testid="post-title"/) || []).slice(1).find(Boolean);
    const ts = (ch.match(/<faceplate-timeago\b[^>]*?\bts="([^"]+)"/) || [])[1];
    const cnt = {};
    for (const x of ch.matchAll(/<faceplate-number\b[^>]*?\bnumber="(\d+)"[^>]*>\s*<\/faceplate-number>\s*(vote|comment)/g)) if (cnt[x[2]] == null) cnt[x[2]] = +x[1];
    const path = href && un(href).split('?')[0];
    out.push({ id, sub, title: String(c.post.title || ''), body: '', date: ts ? ts.slice(0, 10) : null, score: cnt.vote || 0, comments: cnt.comment || 0,
      url: path && path.startsWith('/r/') && path.includes(`/comments/${id}/`) ? `https://www.reddit.com${path}` : `https://www.reddit.com/r/${sub}/comments/${id}/` });
  });
  return out;
}

// 그 종목 글인가 — 검색은 단어만 맞춰 준다(ON·ALL 같은 티커는 엉뚱한 글이 섞인다).
//   $TSLA · 대문자 TSLA(3글자 이상) · 전용 게시판(r/NBIS_Stock) 중 하나
function relevant(p, T) {
  const t = `${p.title} ${p.body || ''}`, e = T.replace(/[.^$*+?()[\]{}|\\]/g, '\\$&');
  return new RegExp(`\\$${e}\\b`).test(t) || (T.length >= 3 && new RegExp(`(^|[^A-Za-z0-9])${e}([^A-Za-z0-9]|$)`).test(t))
    || new RegExp(`^${e}(_|stock|$)`, 'i').test(p.sub || '');
}

async function search(T) {
  if (blocked.reddit) return null;
  await waitReddit();
  const r = await httpsText(`https://www.reddit.com/svc/shreddit/search/?q=${encodeURIComponent(T)}&type=posts&t=week&sort=relevance`);
  if (r.status === 429 || r.status === 403) { blocked.reddit = true; return null; }
  if (r.status !== 200 || !/search\/view\/(post|no_results)/.test(r.html)) return null;    // 봇 확인 화면·모양 바뀜 = 실패(빈 결과와 구분)
  return parseSearch(r.html);
}
async function bodies(ids) {
  if (!ids.length || blocked.arctic) return {};
  await waitArctic();
  const r = await httpsText(`https://arctic-shift.photon-reddit.com/api/posts/ids?ids=${ids.join(',')}`);
  if (r.status === 429 || r.status === 422 || r.status === 403) { blocked.arctic = true; return {}; }
  try { return Object.fromEntries((JSON.parse(r.html).data || []).map((x) => [x.id, x])); } catch (e) { return {}; }
}

async function getPosts(T, { now = Date.now() } = {}) {
  T = String(T || '').toUpperCase();
  try {
    return await cache.through('reddit', T, async () => {
      const found = await search(T);
      if (!found) return null;
      const since = new Date(now - DAYS * 864e5).toISOString().slice(0, 10);
      const posts = found.filter((p) => !p.date || p.date >= since);
      const B = await bodies(posts.map((p) => p.id));
      for (const p of posts) { const b = B[p.id]; if (b) { p.body = String(b.selftext || '').replace(/\s+/g, ' ').trim().slice(0, 1500); if (/^\[(removed|deleted)\]$/.test(p.body)) p.body = ''; } }
      return posts.filter((p) => relevant(p, T)).sort((a, b) => b.score - a.score).slice(0, MAX_POSTS);
    }, 20 * 3600e3);
  } catch (e) { return null; }
}

module.exports = { getPosts, parseSearch, relevant, blocked };
