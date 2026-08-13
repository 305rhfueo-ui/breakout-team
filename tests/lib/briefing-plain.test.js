'use strict';
// 미르·실장 브리핑이 "중학생도 이해할 수 있게" 규칙을 지키는지 검사한다.
//
// 사용자가 반복해 요구한 사항이라 사람 눈이 아니라 테스트로 지킨다.
//   1. 영문 약어를 풀지 않고 쓰지 않는다 (F10d, WRS, ADR, CLS_POS, BBWTHD …)
//   2. 업종명은 한글을 앞에 둔다 (영문은 괄호 안에만)
//   3. undefined/NaN/null 이 문장에 새지 않는다
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
  // style 은 setProperty/getPropertyValue 까지 흉내낸다 — 사무실 배치 코드가 CSS 변수를 쓴다
  const mkStyle = () => { const o = {}; o.setProperty = (k, v) => { o[k] = v; }; o.getPropertyValue = (k) => o[k] || ''; return o; };
  const mk = () => ({ innerHTML: '', className: '', style: mkStyle(), dataset: {}, clientWidth: 1148, clientHeight: 600, classList: { add() {}, remove() {}, contains: () => false, toggle() {} },
    appendChild() {}, addEventListener() {}, querySelectorAll: () => [], querySelector: () => null, setAttribute() {}, remove() {} });
  const nodes = new Map();
  const doc = { getElementById: (id) => { if (!nodes.has(id)) nodes.set(id, mk()); return nodes.get(id); },
    querySelectorAll: () => [], querySelector: () => null, createElement: () => mk(),
    head: mk(), body: mk(), addEventListener() {} };
  const win = { document: doc, location: { href: '', hash: '' }, setTimeout, clearTimeout, setInterval, clearInterval, console,
    matchMedia: () => ({ matches: false, addEventListener() {} }),
    innerWidth: 1180, innerHeight: 900, addEventListener() {} };
  const ctx = vm.createContext(win);
  ctx.window = win; ctx.document = doc;
  for (const f of ['industry-ko.js', 'chief.js', 'team1.js', 'team2.js', 'team3.js', 'team4.js', 'team5.js', 'chartcheck.js']) {
    const p = path.join(REPO, 'dashboard', 'data', f);
    if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, 'utf8'), ctx, { filename: f });
  }
  vm.runInContext(script, ctx, { filename: 'index.html' });
  return ctx;
}

const strip = (h) => String(h || '').replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
  .replace(/\s+/g, ' ').trim();

// 풀어 쓰지 않으면 안 되는 것들. 괄호 안(영문 병기)에 있는 건 허용한다.
const JARGON = [
  ['F10d', /F\s?10\s?d/i], ['F25d', /F\s?25\s?d/i],
  ['WRS', /\bWRS\b/], ['FRANK', /\bFRANK\b/],
  ['ADR', /\bADR\b/], ['CLS_POS', /CLS_POS/i], ['BBWTHD', /BBWTHD/i],
  ['VOL_X', /VOL_X/i], ['200DIV', /\b\d{2,3}DIV\b/i],
  ['RS_1mo 같은 원본 키', /RS_\d\w*mo/i],
  ['evidence_level', /evidence_level/i], ['no_source', /no_source/i],
  ['bounce_trigger 같은 내부 코드', /bounce_trigger|congestion|dryUp/i],
];

// 괄호 안 영문 병기는 지운 뒤 검사한다 — "응용 소프트웨어(Software - Application)" 는 허용
const outsideParens = (t) => t.replace(/\([^)]*\)/g, ' ');

const ctx = loadRoom();
const targets = [['미르(5팀)', 't5'], ['실장', 'chief'], ['한별(1팀)', 't1'], ['도윤(2팀)', 't2'], ['수아(3팀)', 't3'], ['재민(4팀)', 't4']];

console.log('\n[1] 풀지 않은 영문 약어가 없는가');
for (const [who, id] of targets) {
  ok(`${who} 브리핑`, () => {
    const t = outsideParens(strip(ctx.briefing(id)));
    const hits = JARGON.filter(([, re]) => re.test(t)).map(([name]) => name);
    if (hits.length) throw new Error(`괄호 설명 없이 등장: ${hits.join(', ')}\n     본문: ${t.slice(0, 200)}…`);
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

console.log('\n[3] 업종명이 한글로 나오는가 (미르)');
ok('미르 브리핑에 순수 영문 업종명이 없다', () => {
  const raw = strip(ctx.briefing('t5'));
  if (!raw) return;                                  // 데이터 없는 날은 검사 생략
  const KO = ctx.window.INDUSTRY_KO || {};
  // 한글 병기 없이 영문 업종명만 등장하면 실패
  const bare = Object.keys(KO).filter((en) => {
    if (!raw.includes(en)) return false;
    return !raw.includes(`${KO[en]}(${en})`);
  });
  if (bare.length) throw new Error(`한글 없이 영문만: ${bare.join(', ')}`);
});

console.log('\n[4] 미르와 실장이 같은 업종을 가리키는가');
ok('실장이 말하는 업종은 미르의 "돈 들어오는 곳" 목록 안에 있다', () => {
  const fc = ctx.window.CHIEF_DATA && ctx.window.CHIEF_DATA.flowCross;
  const F = ctx.window.TEAM5_DATA && ctx.window.TEAM5_DATA.flow;
  if (!fc || !F) return;
  const chiefInd = (fc.inflow || []).filter((i) => i.picks && i.picks.length)[0];
  if (!chiefInd) return;
  const mirSet = new Set(F.industries.filter((x) => ['leading', 'inflow', 'narrow'].includes(x.flow)).map((x) => x.key));
  if (!mirSet.has(chiefInd.key)) throw new Error(`실장 ${chiefInd.key} 가 미르의 유입 목록에 없다`);
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
