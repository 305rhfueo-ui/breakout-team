'use strict';
// 리포트 md 상단 "📌 오늘의 요약" — 숫자만 조립하고, 재실행해도 한 개만 남는다.
//
//   node tests/lib/digest.test.js

const assert = require('assert');
const path = require('path');
const { digestSection, insertDigest } = require(path.join(__dirname, '..', '..', 'scripts/build-chief-report'));

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

const fx = {
  t2: { lists: {
    dollar: { label: '거래대금 상위', count: 20, note: null, industries: { headline: 'Diagnostics & Research 5종목(25%)' } },
    all: { label: 'RS(1~6MO)', count: 0, note: null, industries: { headline: '자격 종목 없음' } },
  } },
  t3: {
    breakouts: [
      { ticker: 'ZS', breakVolRatio: 2.52, volumeConfirmed: true },
      { ticker: 'DELL', breakVolRatio: 0.96, volumeConfirmed: false },
    ],
    dropped_today: [{ ticker: 'AMR', reason: '종가가 150일선 아래' }],
    reentryBlocked: [{ ticker: 'AGL' }],
  },
  c: {
    counts: { chartCheck: 19, chartCheckShown: 1 },
    chartCheck: [{ ticker: 'MRNA', score: 8, reasons: ['볼밴 폭 0.19'] }],
  },
  chief: { headline: '한 줄 헤드라인', marketVerdictKo: '리테스트 성공 여부를 본다', todayFocus: [{ ticker: 'MSTR' }] },
  report: { checked: 179, ok: 191, unverified: 24, dead: 2, stripped: 3 },
  leaks: ['teamSummaries.team4: "리테스트"'],
};

console.log('\n[1] 요약 내용');
const text = digestSection(fx).join('\n');
ok('거래량 확인된 돌파만 확인 목록에 들어간다', () => {
  assert.ok(/거래량 확인 1건 \(ZS 2\.52×\)/.test(text), text);
  assert.ok(/거래량 미확인: DELL 0\.96×/.test(text));
});
ok('도윤 5개 목록 — 목록마다 개수와 공통 업종 (2026-10-06, 5팀 자금흐름 대신)', () => {
  assert.ok(/2팀 목록/.test(text), text);
  assert.ok(/거래대금 상위 20종목 → Diagnostics & Research 5종목\(25%\)/.test(text));
  assert.ok(/RS\(1~6MO\) 0종목 → 자격 종목 없음/.test(text));
  assert.ok(!/5팀|frank25|자금흐름/.test(text), '5팀 흔적');
});
ok('WARN 은 싣고, 실장 산문(marketVerdictKo)은 싣지 않는다', () => {
  assert.ok(text.includes('차트 결론 어휘 WARN'));
  assert.ok(!text.includes('리테스트 성공 여부'));
  assert.ok(text.includes('관찰 종목: MSTR'));
});

ok('6팀 매수 계획 — 관심 종목만, 금액·수량 없이', () => {
  const t6 = { regime: 'green', counts: { watch: 1, A: 1, B: 0, post: 2 },
    plans: [{ ticker: 'FEIM', grade: 'A', watch: true, pivot: 89.76, stop: 82.13, distToPivotPct: -1.48, weightPct: 5.9 },
      { ticker: 'MRVL', grade: 'C', watch: false, pivot: 274.95, stop: 256.91, distToPivotPct: -4.73, weightPct: 7.6 }] };
  const t = digestSection({ ...fx, t6 }).join('\n');
  assert.ok(t.includes('6팀 매수 계획**: 관심 1종목 (A 1 · B 0) · 이미 돌파 2'), t);
  assert.ok(t.includes('FEIM(A) 피벗 $89.76'));
  assert.ok(!t.includes('MRVL'));
  const line = t.split('\n').find((l) => l.includes('FEIM(A)'));
  assert.ok(!/\d\s*주/.test(line), '수량이 실리면 안 된다: ' + line);
});

console.log('\n[2] 삽입');
const md = '# 제목\n\n> RS 결측률 0.0%\n\n## 1팀\n- 본문\n';
ok('첫 절 앞에 들어가고, 두 번 넣어도 한 개', () => {
  const once = insertDigest(md, digestSection(fx));
  const twice = insertDigest(once, digestSection(fx));
  assert.strictEqual(twice, once);
  assert.strictEqual(once.match(/digest:start/g).length, 1);
  assert.ok(once.indexOf('📌 오늘의 요약') < once.indexOf('## 1팀'));
  assert.ok(once.indexOf('RS 결측률') < once.indexOf('📌 오늘의 요약'));
});

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
