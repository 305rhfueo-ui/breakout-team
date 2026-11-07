'use strict';
// 사용자 티스토리 블로그 (2026-11-07 사용자: 매매 복기 · 체크리스트 부합 종목 분석 글을 자동으로 올린다)
//   읽기 = 공개 페이지·RSS 일반 접속 (로그인 불필요)
//   쓰기 = Aside 브라우저(사용자가 로그인해 둔 것)에 **고정된 코드**만 넘긴다. AI 는 브라우저를 다루지 않는다 —
//          AI 가 쓴 글은 HTML 로 이스케이프된 자료로만 들어가므로, 기사 속 지시문이 브라우저를 움직일 수 없다.
//   티스토리 오픈 API 는 2024 년에 닫혔다 → 글쓰기 화면을 그대로 쓴다.
//
// 함정 (2026-11-07 실측)
//   · 새 글 화면이 **임시저장 글을 몇 초 뒤 자동 복원**해 본문을 덮는다(21번 글 사고) → 7초 기다린 뒤 비우고, 넣은 뒤 change 신호, 발행 직전 길이 확인
//   · Aside repl 은 표준입력 한 줄만 제대로 돈다 · 호출마다 새 탭 · atob 는 64KB 넘으면 실패 → 그림은 페이지 안에서 File 로 만든다
//   · 파일 선택 창은 HTMLInputElement.prototype.click 을 가로채 File 을 넣는다

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { paths, writeWindowData, say, readJson, writeJson } = require('./util');

const BLOG = 'https://aiinvestmentworkbook.tistory.com';
const ASIDE = path.join(process.env.HOME || '', '.local/bin/aside');
const CATEGORY = { tradeStock: '1313367', tradeMarket: '1313366', strategy: '1320050', company: '1313688', analysis: null };   // analysis = 종목 분석 (2026-11-07 사용자가 만들라고 함 — 13팀 글) · 번호를 넣기 전엔 기업분석으로
const UA = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36' };

const unescape = (s) => String(s || '').replace(/<!\[CDATA\[|\]\]>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').replace(/&middot;/g, '·').replace(/&mdash;/g, '—');
function textOf(html) {
  return unescape(String(html || '').replace(/<\/(p|div|blockquote|h\d|li)>|<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, ''))
    .split('\n').map((l) => l.trim()).filter(Boolean).join('\n');
}

async function get(url) {
  const r = await fetch(url, { headers: UA, signal: AbortSignal.timeout(20000) });
  if (!r.ok) throw new Error(`${url} ${r.status}`);
  return r.text();
}

// 최근 10편 (RSS 는 본문 전체를 준다)
async function recentPosts() {
  const s = await get(`${BLOG}/rss`);
  return [...s.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([, x]) => {
    const tag = (k) => unescape(((x.match(new RegExp(`<${k}>([\\s\\S]*?)</${k}>`)) || [])[1] || '').trim());
    const link = tag('link');
    const html = (x.match(/<description>([\s\S]*?)<\/description>/) || [])[1] || '';
    return { no: Number((link.match(/\/(\d+)$/) || [])[1]) || null, url: link, title: unescape(tag('title')), category: tag('category'),
      date: tag('pubDate'), text: textOf(unescape(html)), images: (unescape(html).match(/<img\s/gi) || []).length };
  });
}

// 글 한 편 (공개 글만)
async function readPost(no) {
  const h = await get(`${BLOG}/${no}`);
  const title = unescape((h.match(/<meta property="og:title" content="([^"]*)"/) || h.match(/<title>([^<]*)/) || [])[1] || '');
  const body = (h.match(/<div class="tt_article_useless_p_margin[^"]*">([\s\S]*?)<\/div>\s*<!-- System - START -->/) || h.match(/<div class="contents_style">([\s\S]*?)<\/div>/) || [])[1] || '';
  return { no, url: `${BLOG}/${no}`, title, text: textOf(body) };
}

// 블로그 검색 → 글 번호 (최신순)
async function searchPosts(q) {
  const h = await get(`${BLOG}/search/${encodeURIComponent(q)}`);
  return [...new Set([...h.matchAll(/href="\/(\d+)"/g)].map((m) => Number(m[1])))].sort((a, b) => b - a);
}

// 글(줄 배열) → 티스토리 HTML. "## " 굵은 소제목 · "> " 인용 · "{{IMGn}}" 그림 자리 · 앞 공백 유지
function toHtml(lines) {
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return lines.map((l) => {
    if (!l.trim()) return '<p data-ke-size="size16">&nbsp;</p>';
    if (l.startsWith('## ')) return `<p data-ke-size="size16"><b>${esc(l.slice(3))}</b></p>`;
    if (l.startsWith('> ')) return `<blockquote data-ke-style="style2">${esc(l.slice(2))}</blockquote>`;
    if (/^\{\{IMG\d+\}\}$/.test(l.trim())) return l.trim();
    const lead = l.match(/^ */)[0].length;
    return `<p data-ke-size="size16">${'&nbsp;'.repeat(lead)}${esc(l.slice(lead))}</p>`;
  }).join('');
}

// 공개 발행. images = PNG 경로 배열 — 본문의 {{IMG1}} 이 images[0].
// 그림 수가 다르거나 · 본문이 덮였거나 · 버튼이 '공개 발행'이 아니면 누르지 않고 { ok:false } 를 돌려준다.
function publish({ title, lines, images = [], category, dry = false }) {
  if (!fs.existsSync(ASIDE)) return { ok: false, error: `Aside CLI 없음 (${ASIDE})` };
  const html = toHtml(lines);
  const order = [...html.matchAll(/\{\{IMG(\d+)\}\}/g)].map((m) => Number(m[1]));
  if (order.some((n) => !images[n - 1])) return { ok: false, error: `그림 자리 ${order.join(',')} 에 맞는 파일이 없음` };
  const imgs = order.map((n) => [path.basename(images[n - 1]), fs.readFileSync(images[n - 1]).toString('base64')]);
  const js = `
const DRY = ${!!dry}; const IMGS = ${JSON.stringify(imgs)};
const HTML = ${JSON.stringify(html)}; const TITLE = ${JSON.stringify(title)}; const CAT = ${JSON.stringify(String(category))};
const page = await openTab("about:blank"); page.on("dialog", d => { console.log("창:", d.message()); d.dismiss().catch(()=>{}); });
await page.goto("${BLOG}/manage/newpost/"); await sleep(7000);
if (page.url().includes("/auth/login")) { console.log("RESULT " + JSON.stringify({ ok: false, login: true, error: "티스토리 로그인이 풀림 — Aside 브라우저에서 티스토리(카카오) 다시 로그인" })); } else {
await page.evaluate(() => tinymce.activeEditor.setContent("")); await page.fill("#post-title-inp", "");
await page.evaluate((imgs) => { window.__imgs = imgs.map(([n,b]) => { const bin = atob(b); const u8 = new Uint8Array(bin.length); for (let i=0;i<bin.length;i++) u8[i] = bin.charCodeAt(i); return new File([u8], n, {type:"image/png"}); }); const orig = HTMLInputElement.prototype.click; HTMLInputElement.prototype.click = function() { if (this.type === "file" && window.__next) { const dt = new DataTransfer(); dt.items.add(window.__next); window.__next = null; this.files = dt.files; this.dispatchEvent(new Event("change", {bubbles:true})); return; } return orig.call(this); }; }, IMGS);
const count = () => page.evaluate(() => (tinymce.activeEditor.getContent().match(/\\[##_Image\\|/g) || []).length);
for (let k = 0; k < IMGS.length; k++) {
  await page.evaluate((k) => { const ed = tinymce.activeEditor; ed.selection.select(ed.getBody(), true); ed.selection.collapse(false); window.__next = window.__imgs[k]; }, k);
  await page.click("#mceu_0-open"); await sleep(500); await page.click("#attach-image");
  for (let t = 0; t < 20 && (await count()) < k + 1; t++) await sleep(1000);
}
const blocks = await page.evaluate(() => tinymce.activeEditor.getContent().match(/\\[##_Image\\|[\\s\\S]*?_##\\]/g) || []);
if (blocks.length !== IMGS.length) { console.log("RESULT " + JSON.stringify({ ok: false, error: "그림 블록 " + blocks.length + "/" + IMGS.length })); } else {
  let k = 0; const final = HTML.replace(/\\{\\{IMG\\d+\\}\\}/g, () => "<p>" + blocks[k++] + "</p>");
  await page.evaluate((h) => { const ed = tinymce.activeEditor; ed.setContent(h); ed.undoManager.add(); ed.setDirty(true); ed.fire("change"); ed.fire("input"); ed.save(); }, final); await sleep(3000);
  await page.fill("#post-title-inp", TITLE);
  await page.click("#category-btn"); await sleep(600); await page.click("#category-item-" + CAT); await sleep(400);
  await page.click("#publish-layer-btn"); await sleep(1500);
  await page.evaluate(() => document.querySelector("#open20").click()); await sleep(500);
  const btn = await page.evaluate(() => document.querySelector("#publish-btn").textContent.trim());
  const still = await page.evaluate((h) => tinymce.activeEditor.getContent().length >= h.length * 0.8, final);
  if (DRY || !still || !/공개/.test(btn) || /비공개|보호/.test(btn)) { console.log("RESULT " + JSON.stringify({ ok: !!DRY && still, dry: DRY, error: DRY ? null : (!still ? "본문이 덮임" : "버튼: " + btn) })); } else {
    await page.click("#publish-btn"); await sleep(6000); console.log("RESULT " + JSON.stringify({ ok: true, after: page.url() }));
  }
}}`;
  try {
    const out = execFileSync(ASIDE, ['repl'], { input: js.split('\n').join(' ') + '\n', maxBuffer: 1 << 24, timeout: 240000 }).toString().replace(/\x1b\[[0-9;]*m/g, '');
    const m = out.match(/RESULT (\{.*\})/);
    return m ? JSON.parse(m[1]) : { ok: false, error: `Aside 응답 없음: ${out.split('\n').filter(Boolean).slice(-2).join(' / ').slice(0, 200)}` };
  } catch (e) {
    return { ok: false, error: `Aside 실행 실패 — 앱이 켜져 있고 티스토리에 로그인돼 있는지 확인 (${String(e.message).split('\n')[0].slice(0, 150)})` };
  }
}

// 발행 뒤 공개 글 찾기 — RSS 에 같은 제목이 뜰 때까지 (몇 초~1분)
async function findPublished(title, { tries = 6, waitMs = 10000 } = {}) {
  for (let i = 0; i < tries; i++) {
    try { const p = (await recentPosts()).find((x) => x.title === title); if (p) return p; } catch (e) { /* 다시 */ }
    await new Promise((r) => setTimeout(r, waitMs));
  }
  return null;
}

// 대시보드 12·13팀 카드 자료 (dashboard/data/blog.js) — fn(d) 로 고친 뒤 이 파일만 커밋·push
const BOARD = path.join(paths.root, 'dashboard', 'data', 'blog.js');
function board(fn, { git = true, msg = 'blog: 12·13팀 글 기록' } = {}) {
  let d = {};
  try { d = JSON.parse(fs.readFileSync(BOARD, 'utf8').match(/=\s*([\s\S]*);\s*$/)[1]); } catch (e) { /* 첫 실행 */ }
  d.t12 = { posts: [], ...d.t12 }; d.t13 = { posts: [], ...d.t13 };
  fn(d);
  d.t12.posts = d.t12.posts.slice(0, 30); d.t13.posts = d.t13.posts.slice(0, 30); d.updated = new Date().toISOString();
  writeWindowData(BOARD, 'BLOG_DATA', d);
  if (git) { const r = require('../finish-ondemand').gitPublish([BOARD], msg); if (!r.ok) say('WARN', `GitHub: ${r.error}`); }
}

// ── 발행 → 기록·대시보드·텔레그램 (2026-11-07 사용자: "로그인 어려움 겪으면 텔레그램으로 로그인 해달라고 알려줘, 내가 '로그인 했어' 할게") ──
// item = { team:'t12'|'t13', title, lines, images, category, text(텔레그램 — 링크 자리 {{URL}}), entry(대시보드 카드 줄), rec:{ file, root, key }(그 팀 기록) }
// 로그인이 풀렸으면 글을 버리지 않고 대기열에 넣고 로그인을 부탁한다(3시간에 한 번) → 텔레그램 "로그인 했어" → retryPending() 이 그대로 다시 올린다.
const PENDING = path.join(paths.cacheDir, 'tistory-pending.json');
const LOGIN_ASK = '🔑 티스토리 로그인이 풀려 글을 올리지 못했습니다.\nAside 브라우저에서 티스토리(카카오)에 로그인한 뒤 여기에 "로그인 했어"라고 보내 주세요 — 써 둔 글을 그대로 다시 올립니다.';
const tellDefault = (m) => require('./notify').notify(m);

async function finish(item, tell) {
  const p = await findPublished(item.title), url = p ? p.url : BLOG;
  if (item.rec) { const j = readJson(item.rec.file, {}); j[item.rec.root] = j[item.rec.root] || {}; j[item.rec.root][item.rec.key] = { ...j[item.rec.root][item.rec.key], url, pending: false, at: new Date().toISOString() }; writeJson(item.rec.file, j); }
  board((d) => d[item.team].posts.unshift({ ...item.entry, url }), { msg: `blog: ${item.team === 't12' ? '12팀' : '13팀'} ${item.entry.ticker} 글` });
  await tell(item.text.replace('{{URL}}', url));
  return url;
}

// → { ok, url } · { ok:false, queued:true } · { ok:false, error }
async function post(item, { tell = tellDefault, pub = publish, file = PENDING } = {}) {
  const r = pub(item);
  if (r.ok) return { ok: true, url: await finish(item, tell) };
  if (!r.login) return { ok: false, error: r.error };
  const q = readJson(file, { items: [], askedAt: 0 }), ask = Date.now() - (q.askedAt || 0) > 3 * 3600e3;
  q.items = q.items.filter((x) => x.title !== item.title).concat(item);
  if (ask) q.askedAt = Date.now();
  writeJson(file, q);
  if (ask) await tell(LOGIN_ASK);
  return { ok: false, queued: true, error: r.error };
}

async function retryPending({ tell = tellDefault, pub = publish, file = PENDING } = {}) {
  const q = readJson(file, { items: [] }), left = [];
  if (!q.items.length) return tell('✅ 다시 올릴 티스토리 글이 없습니다.');
  await tell(`🔄 티스토리 글 ${q.items.length}편을 다시 올립니다 — 한 편에 1~2분.`);
  for (let i = 0; i < q.items.length; i++) {
    const it = q.items[i], r = pub(it);
    if (r.ok) { await finish(it, tell); continue; }
    if (r.login) { left.push(...q.items.slice(i)); await tell('🔑 아직 티스토리 로그인 화면이 뜹니다 — 로그인한 뒤 다시 "로그인 했어"라고 보내 주세요.'); break; }
    it.tries = (it.tries || 0) + 1;
    if (it.tries < 3) left.push(it);
    await tell(`⚠️ ${it.entry.ticker} 글을 다시 올리지 못했습니다 (${it.tries}/3) — ${String(r.error).slice(0, 150)}`);
  }
  writeJson(file, { ...q, items: left });
}

module.exports = { BLOG, CATEGORY, recentPosts, readPost, searchPosts, toHtml, publish, findPublished, textOf, board, post, retryPending, PENDING };

if (require.main === module && process.argv[2] === 'retry') { require('./util').loadEnv(); retryPending().catch((e) => { say('ERROR', e.stack || e.message); process.exit(1); }); }
