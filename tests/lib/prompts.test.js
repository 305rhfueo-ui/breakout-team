'use strict';
// 2026-09-17 "숫자는 Node, 모양은 사람" 회귀 테스트.
//   1. 실장·4팀 프롬프트에 차트 판정을 요구하는 문구가 되살아나지 않는다
//   2. chart-verdict 가 어제(2026-09-16) 실장이 실제로 쓴 문장을 잡는다
//   3. Node 라벨("눌림 후보")은 오탐하지 않는다
//
//   node tests/lib/prompts.test.js

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const REPO = path.join(__dirname, '..', '..');
const { chartVerdictLeaks } = require('../../scripts/lib/chart-verdict');

let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };
const src = (p) => fs.readFileSync(path.join(REPO, p), 'utf8');

console.log('\n[1] 프롬프트 — 차트 판정 요구 문구 없음');
ok('실장 프롬프트에 "사기 좋은 자리"·"볼 만한 셋업" 이 없다', () => {
  const s = src('scripts/workflows/chief-report.js');
  assert.ok(!/사기 좋은 자리/.test(s), '사기 좋은 자리');
  assert.ok(!/볼 만한 셋업/.test(s), '볼 만한 셋업');
  assert.ok(/차트 모양.*판정하지 않는다/.test(s), '금지 규칙 문장이 있어야 한다');
});
ok('6팀 심층 분석은 실장에게 전달되지 않고, 프롬프트가 차트 "관찰"만 요구한다 (2026-10-03)', () => {
  assert.ok(!/team6/.test(src('scripts/prepare-chief-args.js')), 'prepare-chief-args 가 team6 를 읽는다 — 차트 관찰이 실장 판정으로 샌다');
  const d = src('scripts/workflows/team6-deepdive.js');
  assert.ok(/차트는 판정하지 않는다 — 관찰만/.test(d), '관찰만 하라는 규칙이 없다');
  assert.ok(/"사기 좋은 자리", "돌파 실패"/.test(d), '결론 어휘 금지 목록이 없다');
  assert.ok(/기준-쿨라매기-차트\.md/.test(d) && /기준-CANSLIM-재무\.md/.test(d), '기준 문서를 읽으라는 지시가 없다');
});
ok('4팀 종합 스키마에 watchList 가 없다', () => {
  const s = src('scripts/workflows/team4-catalyst.js');
  assert.ok(!/watchList:\s*\{/.test(s));
});
ok('실장 입력에 congestionKo 를 넘기지 않는다', () => {
  assert.ok(!/congestionKo:\s*b\.congestionKo/.test(src('scripts/prepare-llm-args.js')));
});

console.log('\n[2] chart-verdict — 실측 문장');
ok('2026-09-16 실장 action 문장을 잡는다', () => {
  const c = { todayFocus: [
    { ticker: 'ZS', action: '돌파 기준선 $190.97이 종가로 지켜지는지만 관찰하라. 이 선을 거래량 증가와 함께 깨면 돌파 실패로 처리하고 후보에서 제외.' },
    { ticker: 'WGS', action: 'd50이 25.75%까지 벌어져 있어 눌림을 기다리는 쪽이 자리 논리에 부합한다.' },
  ], marketVerdictKo: '지금 사기 좋은 자리로 보기 어렵다.' };
  const w = chartVerdictLeaks(c);
  assert.ok(w.some((x) => x.startsWith('todayFocus[0 ZS]') && /돌파 실패로 처리/.test(x)), JSON.stringify(w));
  assert.ok(w.some((x) => x.startsWith('todayFocus[1 WGS]') && /눌림/.test(x)), JSON.stringify(w));
  assert.ok(w.some((x) => x.startsWith('marketVerdictKo') && /사기 좋은 자리/.test(x)), JSON.stringify(w));
});
ok('Node 라벨 "눌림 후보" 와 수치 인용은 오탐하지 않는다', () => {
  const c = { marketVerdictKo: 'WGS d50 +25.75% / d200 +13.89%, 🎯 눌림 후보. 확인할 조건: $91.78 종가 유지 여부, 돌파봉 거래량 20일 평균 2배 여부.' };
  assert.deepStrictEqual(chartVerdictLeaks(c), []);
});
ok('빈 입력은 빈 배열', () => { assert.deepStrictEqual(chartVerdictLeaks(null), []); assert.deepStrictEqual(chartVerdictLeaks({}), []); });

console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
