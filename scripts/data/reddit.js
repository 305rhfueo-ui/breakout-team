'use strict';
// 레딧 글 — API 키 없이, 레딧에는 접속하지 않는다 (2026-10-28 사용자: "티커 팝업 맨 밑에 SNS 에서 해당 종목 글들을 분석 — 레딧이랑 X")
//
//   await sync()       주식 게시판들의 새 글을 공개 보관소 arctic-shift 에서 받아 CACHE 에 쌓는다(최근 8일만 둔다)
//   postsFor('NBIS')   → 최근 1주 그 종목 글 [{ id, sub, title, body, url, date, score, comments }] (추천 순 10개)
//   await refresh(ids) → 고른 글의 추천·댓글 수를 보관소 최신 값으로
//
// 왜 보관소인가 (2026-10-28 실측):
//   레딧 .json 은 키 없이 403, RSS 는 1분에 1번, 검색 HTML 조각은 몇 번 뒤 "You've been blocked by network security"(우리 스크립트만 — curl 은 통과).
//   막힌 것을 다른 접속 방식으로 피해 가지 않는다(집 IP 전체가 막히면 사장님 레딧 사용도 막힌다). 공식 API 는 2025-11 부터 승인제.
//   arctic-shift 는 검색에 게시판 이름이 필요해서, 게시판별로 새 글을 통째로 받고 티커는 우리가 찾는다 — 하루 15~20번이면 된다.
//   그래서 r/NBIS_Stock 같은 종목 전용 게시판은 못 본다.
// 예절: 요청 사이 3~5초. 429·422·403 이면 이 실행에서는 더 부르지 않는다.
const fs = require('fs');
const path = require('path');
const { paths, readJson } = require('../lib/util');
const { httpsText } = require('./yahoo-estimates');

const API = 'https://arctic-shift.photon-reddit.com/api/posts';
const SUBS = ['wallstreetbets', 'stocks', 'investing', 'StockMarket', 'options', 'pennystocks', 'ValueInvesting', 'smallstreetbets',
  'Daytrading', 'swingtrading', 'wallstreetbetsELITE', 'Shortsqueeze', 'stockstobuytoday', 'InnerCircleInvesting'];
const KEEP_DAYS = 8, DAYS = 7, MAX_POSTS = 10, MAX_PAGES = 30;
const STORE = path.join(paths.cacheDir, 'reddit-store.json');
const GAP_MS = [3000, 5000];
let last = 0, blocked = false;
const wait = async () => { const w = last + GAP_MS[0] + Math.random() * (GAP_MS[1] - GAP_MS[0]) - Date.now(); if (w > 0) await new Promise((r) => setTimeout(r, w)); last = Date.now(); };
async function api(q) {
  if (blocked) return null;
  await wait();
  const r = await httpsText(`${API}/${q}`);
  if ([403, 422, 429].includes(r.status)) { blocked = true; return null; }
  try { return r.status === 200 ? JSON.parse(r.html).data || [] : null; } catch (e) { return null; }
}
const FIELDS = 'id,title,selftext,created_utc,score,num_comments,subreddit';   // permalink 은 보관소가 받지 않는다(400) — 주소는 id 로 만든다
const slim = (x) => ({ id: x.id, sub: x.subreddit, title: String(x.title || ''), body: /^\[(removed|deleted)\]$/.test(x.selftext || '') ? '' : String(x.selftext || '').replace(/\s+/g, ' ').trim().slice(0, 800),
  t: x.created_utc, score: x.score || 0, comments: x.num_comments || 0, url: `https://www.reddit.com/r/${x.subreddit}/comments/${x.id}/` });

function load() { const s = readJson(STORE, null) || {}; return { posts: s.posts || {}, until: s.until || {} }; }
async function sync(now = Date.now()) {
  const s = load(), floor = Math.floor(now / 1000) - KEEP_DAYS * 86400;
  let got = 0;
  for (const sub of SUBS) {
    let after = Math.max(s.until[sub] || 0, floor);
    for (let page = 0; page < MAX_PAGES; page++) {
      const rows = await api(`search?subreddit=${sub}&after=${after}&limit=100&sort=asc&fields=${FIELDS}`);
      if (!rows) break;
      for (const x of rows) { s.posts[x.id] = slim(x); got++; }
      if (rows.length) after = s.until[sub] = Math.max(...rows.map((x) => x.created_utc));
      if (rows.length < 100) break;
    }
  }
  for (const [id, p] of Object.entries(s.posts)) if (p.t < floor) delete s.posts[id];
  fs.mkdirSync(path.dirname(STORE), { recursive: true });
  fs.writeFileSync(STORE, JSON.stringify(s));
  return { ok: !blocked, got, total: Object.keys(s.posts).length };
}

// 그 종목 글인가 — $TSLA 또는 대문자 TSLA(3글자 이상). ON·ALL 같은 짧은 티커는 $ 붙은 글만
function relevant(p, T) {
  const t = `${p.title} ${p.body || ''}`, e = T.replace(/[.^$*+?()[\]{}|\\]/g, '\\$&');
  return new RegExp(`\\$${e}\\b`).test(t) || (T.length >= 3 && new RegExp(`(^|[^A-Za-z0-9])${e}([^A-Za-z0-9]|$)`).test(t));
}
function postsFor(T, { now = Date.now(), store = null } = {}) {
  const s = store || load(), since = Math.floor(now / 1000) - DAYS * 86400;
  return Object.values(s.posts).filter((p) => p.t >= since && relevant(p, T)).sort((a, b) => b.score - a.score).slice(0, MAX_POSTS)
    .map(({ t, ...p }) => ({ ...p, date: new Date(t * 1000).toISOString().slice(0, 10) }));
}
// 보관소는 글을 처음 받은 때의 추천 수를 들고 있다 — 고른 글만 최신 값으로(100개씩 묶어)
async function refresh(ids) {
  const out = {};
  for (let i = 0; i < ids.length; i += 100) {
    const rows = await api(`ids?ids=${ids.slice(i, i + 100).join(',')}&fields=id,score,num_comments`);
    for (const x of rows || []) out[x.id] = { score: x.score || 0, comments: x.num_comments || 0 };
  }
  return out;
}

module.exports = { sync, load, postsFor, refresh, relevant, SUBS, isBlocked: () => blocked };
