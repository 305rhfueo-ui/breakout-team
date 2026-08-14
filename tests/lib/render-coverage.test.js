'use strict';
// "만들었는데 화면에 안 나오는" 재발 방지.
//
// 2026-08-13 실측 사고: LLM 이 매일 생성하던 것들이 통째로 버려지고 있었다.
//   · team2 `company` — 스키마 필수 필드인데(회사가 뭐 하는 곳인지) 어느 화면에도 없었다
//   · `quote` — 출처 원문 인용문. 수집하고 verify-claims 로 검증까지 하고 미표시
//   · team5 `risk` — "이 강세가 언제 꺾이나". 가장 실행에 가까운 항목인데 미표시
//   · team4 `claims[]` — 4팀 출처가 전부 여기 있는데 화면엔 출처 없는 한 줄만
// 고친 뒤 2팀 상세가 307자 → 64,741자가 됐다. 데이터는 그대로였다.
//
// ⚠️ 템플릿을 grep 하는 방식은 쓰지 않는다 — 주석에도 걸리고, 변수만 참조하고
//    실제로 출력하지 않아도 통과한다. 실제 렌더 함수를 돌려 결과 HTML 을 본다.
//
//   node tests/lib/render-coverage.test.js

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const REPO = path.join(__dirname, '..', '..');

let pass = 0, fail = 0, skip = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };
const skipIt = (name, why) => { console.log('  ⏭️  ' + name + '  (' + why + ')'); skip++; };

function loadRoom() {
  const html = fs.readFileSync(path.join(REPO, 'index.html'), 'utf8');
  const script = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/.exec(html)[1];
  const mkStyle = () => { const o = {}; o.setProperty = (k, v) => { o[k] = v; }; o.getPropertyValue = (k) => o[k] || ''; return o; };
  const mk = () => ({ innerHTML: '', className: '', style: mkStyle(), dataset: {}, clientWidth: 1148, clientHeight: 600,
    classList: { add() {}, remove() {}, contains: () => false, toggle() {} },
    appendChild() {}, addEventListener() {}, querySelectorAll: () => [], querySelector: () => null, setAttribute() {}, remove() {} });
  const nodes = new Map();
  const doc = { getElementById: (id) => { if (!nodes.has(id)) nodes.set(id, mk()); return nodes.get(id); },
    querySelectorAll: () => [], querySelector: () => null, createElement: () => mk(), head: mk(), body: mk(), addEventListener() {} };
  const win = { document: doc, location: { href: '', hash: '' }, setTimeout, clearTimeout, setInterval, clearInterval, console,
    matchMedia: () => ({ matches: false, addEventListener() {} }), innerWidth: 1180, innerHeight: 900, addEventListener() {} };
  const ctx = vm.createContext(win);
  ctx.window = win; ctx.document = doc;
  for (const f of ['industry-ko.js', 'chief.js', 'team1.js', 'team2.js', 'team3.js', 'team4.js', 'team5.js', 'chartcheck.js']) {
    const p = path.join(REPO, 'dashboard', 'data', f);
    if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, 'utf8'), ctx, { filename: f });
  }
  vm.runInContext(script, ctx, { filename: 'index.html' });
  return ctx;
}

const ctx = loadRoom();
const T2 = ctx.window.TEAM2_DATA, T4 = ctx.window.TEAM4_DATA, T5 = ctx.window.TEAM5_DATA;
// bodyFor 가 상세 본문이다 (briefing 은 그 위의 짧은 서술). 모달은 둘을 합쳐 보여준다.
const h2 = ctx.bodyFor('t2'), h4 = ctx.bodyFor('t4'), h5 = ctx.bodyFor('t5');

console.log('\n[1] 2팀 — 회사 설명·근거·인용문이 실제로 렌더되는가');
const done2 = (T2.picks || []).filter((p) => p.research && p.research.status === 'done');
if (!done2.length) skipIt('2팀 리서치 렌더', 'LLM 리서치 데이터 없음');
else {
  ok(`조사한 ${done2.length}종목이 전부 화면에 나온다`, () => {
    const miss = done2.filter((p) => !h2.includes(p.ticker)).map((p) => p.ticker);
    assert.strictEqual(miss.length, 0, `빠진 종목: ${miss.join(', ')}`);
  });
  ok('회사 설명(company)이 글자 그대로 렌더된다', () => {
    // 사용자가 명시적으로 요구한 항목 — "이 회사가 어떤 회사인지"
    const has = done2.filter((p) => p.research.company);
    assert.ok(has.length, 'company 를 가진 종목이 하나도 없다 (스키마 필수인데)');
    const miss = has.filter((p) => !h2.includes(p.research.company.slice(0, 40))).map((p) => p.ticker);
    assert.strictEqual(miss.length, 0, `회사 설명이 안 나오는 종목: ${miss.join(', ')}`);
  });
  ok('출처 원문 인용문(quote)이 렌더된다', () => {
    const quotes = done2.flatMap((p) => (p.research.whyRose || [])
      .flatMap((c) => (c.sources || []).map((s) => s && s.quote))).filter((q) => q && q.length > 12);
    if (!quotes.length) return;                       // 인용문이 하나도 없는 날은 통과
    const shown = quotes.filter((q) => h2.includes(q.slice(0, 30))).length;
    assert.ok(shown > 0, `인용문 ${quotes.length}개 중 화면에 나온 건 0개`);
  });
  ok('출처 링크에 날짜가 붙는다', () => {
    const dated = done2.flatMap((p) => (p.research.whyRose || [])
      .flatMap((c) => (c.sources || []).map((s) => s && s.date))).filter(Boolean);
    if (!dated.length) return;
    assert.ok(dated.some((d) => h2.includes(String(d).slice(0, 10))), '어떤 출처 날짜도 화면에 없다');
  });
}

console.log('\n[2] 4팀 — 촉매 근거의 출처가 보이는가');
const done4 = (T4.items || []).filter((i) => i.catalyst && i.catalyst.status === 'done');
if (!done4.length) skipIt('4팀 촉매 렌더', 'LLM 촉매 데이터 없음');
else {
  ok('claims 의 출처 URL 이 렌더된다', () => {
    // 4팀 출처는 전부 claims[] 안에 있다. 이게 안 나오면 사용자는 검증할 방법이 없다.
    const urls = done4.flatMap((i) => (i.catalyst.claims || [])
      .flatMap((c) => (c.sources || []).map((s) => s && s.url))).filter(Boolean);
    if (!urls.length) return;
    const shown = urls.filter((u) => h4.includes(u)).length;
    assert.strictEqual(shown, urls.length, `출처 ${urls.length}개 중 ${shown}개만 렌더됨`);
  });
}

console.log('\n[3] 5팀 — risk 와 한글 라벨');
const inds = (T5.llm && T5.llm.industries) || [];
if (!inds.length) skipIt('5팀 업종 렌더', 'LLM 업종 데이터 없음');
else {
  ok('risk(꺾이는 조건)가 렌더된다', () => {
    const risks = inds.map((x) => x.risk).filter(Boolean);
    if (!risks.length) return;
    const miss = risks.filter((r) => !h5.includes(r.slice(0, 40))).length;
    assert.strictEqual(miss, 0, `risk ${risks.length}건 중 ${miss}건이 화면에 없다`);
  });
  ok('driver·durability 를 영문 enum 그대로 노출하지 않는다', () => {
    // 자체 서술 규칙: 영문 약어를 풀지 않고 쓰지 않는다
    assert.ok(!/>(earnings|technology|commodity|policy|macro|rotation)</.test(h5), 'driver 가 영문으로 노출');
    assert.ok(!/>(structural|cyclical|short_term)</.test(h5), 'durability 가 영문으로 노출');
  });
}

/* 리포트형(2026-08-14)으로 새로 넣은 필드들.
   오늘 데이터에는 아직 없을 수 있으므로 값을 주입해 렌더 경로가 살아있는지 본다.
   실데이터를 기다렸다가 "안 나오네" 하고 발견하는 걸 막는 게 목적이다. */
console.log('\n[4] 리포트형 신규 필드 — lead · counterpoint · 4팀 company');
const SENT = 'ZZSENTINEL리드문검사용문자열';
const mkClaim = (txt) => ({ id: 'zz1', statement: txt, evidence_level: 'sourced',
  sources: [{ title: 't', publisher: 'p', url: 'https://example.org/zz', date: '2026-08-14', quote: 'q' }] });

if (!done2.length) skipIt('2팀 lead·counterpoint 렌더', '2팀 리서치 데이터 없음');
else {
  ok('2팀 lead(리드문)가 렌더된다', () => {
    done2[0].research.lead = SENT + 'A';
    assert.ok(ctx.bodyFor('t2').includes(SENT + 'A'), 'lead 가 화면에 없다');
  });
  ok('2팀 counterpoint(반대 근거)가 렌더된다', () => {
    done2[0].research.counterpoint = [mkClaim(SENT + 'B')];
    assert.ok(ctx.bodyFor('t2').includes(SENT + 'B'), 'counterpoint 가 화면에 없다');
  });
  ok('counterpoint 가 비어도 빈 제목만 남지 않는다', () => {
    done2[0].research.counterpoint = [];
    assert.ok(!ctx.bodyFor('t2').includes('반대 근거·한계'), '반대 근거가 없는데 제목만 그려진다');
  });
}
if (!done4.length) skipIt('4팀 company 렌더', '4팀 촉매 데이터 없음');
else ok('4팀 company(회사 설명)가 렌더된다', () => {
  done4[0].catalyst.company = SENT + 'C';
  assert.ok(ctx.bodyFor('t4').includes(SENT + 'C'), '4팀 회사 설명이 화면에 없다');
});
if (!inds.length) skipIt('5팀 lead 렌더', '5팀 업종 데이터 없음');
else ok('5팀 lead(리드문)가 렌더된다', () => {
  inds[0].lead = SENT + 'D';
  assert.ok(ctx.bodyFor('t5').includes(SENT + 'D'), '5팀 리드문이 화면에 없다');
});

console.log('\n[5] 대시보드에 죽은 하드코딩이 되살아나지 않았는가');
const room = fs.readFileSync(path.join(REPO, 'dashboard', 'breakout-room.html'), 'utf8');
ok('표 열 렌더러가 행 데이터를 읽지 않고 상수 배지를 뿌리지 않는다', () => {
  // 2026-08-11 4팀 촉매 열, 2026-08-13 2팀 리서치 열에서 같은 버그가 났다.
  //   {h:'리서치',l:1,f:r=>`<span class="b b-yel">⏳대기</span>`,s:r=>0}
  // f 안에서 인자 r 을 한 번도 안 쓰면 무조건 같은 값이 나온다는 뜻이다.
  const bad = [];
  const re = /f:\s*(\w+)\s*=>\s*(`[^`]*`|'[^']*'|"[^"]*")/g;
  let m;
  while ((m = re.exec(room))) {
    const [, arg, body] = m;
    if (!new RegExp('\\b' + arg + '\\b').test(body)) bad.push(body.slice(0, 60));
  }
  assert.strictEqual(bad.length, 0, `행 데이터를 안 읽는 열: ${bad.join(' | ')}`);
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}${skip ? ` · 건너뜀 ${skip}` : ''}`);
process.exit(fail ? 1 : 0);
