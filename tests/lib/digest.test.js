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
    flowCross: {
      inflow: [{ industry: 'Gold', frank25: 94, stageKo: '⭐ 상승 초입', picks: [{ ticker: 'AUGO' }] }],
      outflow: [{ industry: 'Aluminum', frank25: -44, stageKo: '❄️ 조정 중', picks: [] }],
    },
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
ok('통과 종목이 없는 업종은 그렇게 적는다', () => {
  assert.ok(/Aluminum\(frank25 -44[^/\n]*→ 통과 종목 없음/.test(text));
  assert.ok(/Gold\(frank25 \+94[^/\n]*→ AUGO/.test(text));
});
ok('WARN 은 싣고, 실장 산문(marketVerdictKo)은 싣지 않는다', () => {
  assert.ok(text.includes('차트 결론 어휘 WARN'));
  assert.ok(!text.includes('리테스트 성공 여부'));
  assert.ok(text.includes('관찰 종목: MSTR'));
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
