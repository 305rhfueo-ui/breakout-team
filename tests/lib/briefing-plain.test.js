'use strict';
// 실장·담당자 브리핑에 내부 코드·불량 값이 새지 않는지 검사한다.
//
// 2026-09-03 독자 기준 변경: 사용자는 재무·회계 전공의 금융 실무자다.
//   "중학생도 이해할 수 있게" 규칙(영문 약어 금지·숫자 5개 제한·비유 강제)은 폐기했다.
//   WRS·ADR·VOL_X·200DIV 같은 지표명은 이제 그대로 써도 된다.
//   남는 검사는 셋뿐이다:
//   1. 내부 코드(evidence_level·no_source·bounce_trigger·RS_1mo)가 산문에 새지 않는다
//   2. undefined/NaN/null 이 문장에 새지 않는다
//   3. 업종명은 한글을 앞에 둔다 (영문은 괄호 안에만)
//
//   node tests/lib/briefing-plain.test.js

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const REPO = path.join(__dirname, '..', '..');

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

// ── 최소 DOM 셰임으로 index.html 의 함수를 그대로 실행 ──
function loadRoom() {
  const html = fs.readFileSync(path.join(REPO, 'index.html'), 'utf8');
  const script = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/.exec(html)[1];
  const mkStyle = () => { const o = {}; o.setProperty = (k, v) => { o[k] = v; }; o.getPropertyValue = (k) => o[k] || ''; return o; };
  const mk = () => ({ innerHTML: '', className: '', style: mkStyle(), dataset: {}, clientWidth: 1148, clientHeight: 600, classList: { add() {}, remove() {}, contains: () => false, toggle() {} },
    appendChild() {}, addEventListener() {}, querySelectorAll: () => [], querySelector: () => null, setAttribute() {}, remove() {} });
  const nodes = new Map();
  const doc = { getElementById: (id) => { if (!nodes.has(id)) nodes.set(id, mk()); return nodes.get(id); },
    querySelectorAll: () => [], querySelector: () => null, createElement: () => mk(),
    head: mk(), body: mk(), addEventListener() {} };
  const win = { document: doc, location: { href: '', hash: '' }, URLSearchParams, setTimeout, clearTimeout, setInterval, clearInterval, console,
    matchMedia: () => ({ matches: false, addEventListener() {} }),
    innerWidth: 1180, innerHeight: 900, addEventListener() {} };
  const ctx = vm.createContext(win);
  ctx.window = win; ctx.document = doc;
  for (const f of ['industry-ko.js', 'chief.js', 'team1.js', 'team2.js', 'team3.js', 'team4.js', 'team6.js', 'chartcheck.js']) {
    const p = path.join(REPO, 'dashboard', 'data', f);
    if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, 'utf8'), ctx, { filename: f });
  }
  vm.runInContext(script, ctx, { filename: 'index.html' });
  return ctx;
}

const strip = (h) => String(h || '').replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
  .replace(/\s+/g, ' ').trim();

// 내부 코드 유출만 잡는다. 금융 용어·지표명은 허용한다.
const LEAKS = [
  ['RS_1mo 같은 원본 키', /RS_\d\w*mo/i],
  ['evidence_level', /evidence_level/i], ['no_source', /no_source/i],
  ['bounce_trigger 같은 내부 코드', /bounce_trigger|dryUp|volSurgeWk|aboveMa150/],
  ['[object Object]', /\[object Object\]/],
];

const ctx = loadRoom();
const targets = [['실장', 'chief'], ['한별(1팀)', 't1'], ['도윤(2팀)', 't2'], ['수아(3팀)', 't3'], ['재민(4팀)', 't4']];

console.log('\n[1] 내부 코드가 산문에 새지 않는가');
for (const [who, id] of targets) {
  ok(`${who} 브리핑`, () => {
    const t = strip(ctx.briefing(id));
    const hits = LEAKS.filter(([, re]) => re.test(t)).map(([name]) => name);
    if (hits.length) throw new Error(`내부 코드 유출: ${hits.join(', ')}\n     본문: ${t.slice(0, 200)}…`);
  });
}

console.log('\n[2] 값이 새지 않는가');
for (const [who, id] of targets) {
  ok(`${who} 브리핑`, () => {
    const t = strip(ctx.briefing(id));
    const m = t.match(/.{0,50}(undefined|\bNaN\b|\bnull\b|\[object Object\]|—%).{0,50}/);
    if (m) throw new Error(`불량 값: …${m[0]}…`);
  });
}

console.log('\n[3] 업종명이 한글로 나오는가 (도윤 목록)');
ok('도윤 브리핑에 순수 영문 업종명이 없다', () => {
  const raw = strip(ctx.briefing('t2'));
  if (!raw) return;
  const KO = ctx.window.INDUSTRY_KO || {};
  const bare = Object.keys(KO).filter((en) => raw.includes(en) && !raw.includes(KO[en]));
  if (bare.length) throw new Error(`한글 없이 영문만: ${bare.join(', ')}`);
});

console.log('\n[5] LLM 산문 필드에 내부 코드가 새지 않는가');
function proseFields() {
  const out = [];
  const push = (who, what, v) => { if (v && String(v).trim()) out.push([who, what, String(v)]); };
  const T2 = ctx.window.TEAM2_DATA || {}, T4 = ctx.window.TEAM4_DATA || {};
  for (const p of [...(T2.picks || []), ...(T2.listPicks || [])]) {
    const R = p.research; if (!R || R.status !== 'done') continue;
    push(p.ticker, 'company', R.company); push(p.ticker, 'lead', R.lead);
    for (const c of [...(R.whyRose || []), ...(R.counterpoint || [])]) push(p.ticker, 'claim', c.statement);
  }
  for (const i of (T4.items || [])) {
    const C = i.catalyst; if (!C || C.status !== 'done') continue;
    push(i.ticker, 'company', C.company); push(i.ticker, 'volumeExplanation', C.volumeExplanation);
  }
  return out;
}
const prose = proseFields();
if (!prose.length) console.log('  ⏭️  LLM 산문 데이터 없음');
else ok(`산문 ${prose.length}건`, () => {
  const bad = [];
  for (const [who, what, v] of prose) {
    const hits = LEAKS.filter(([, re]) => re.test(v)).map(([n]) => n);
    if (hits.length) bad.push(`${String(who).slice(0, 24)}.${what}: ${hits.join(',')}`);
  }
  if (bad.length) throw new Error(`내부 코드 유출 — ${bad.slice(0, 8).join(' | ')}`);
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
