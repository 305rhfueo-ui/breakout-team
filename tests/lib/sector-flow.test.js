'use strict';
// sector-flow 회귀 테스트 — 라이브 데이터를 받아 사이트 화면값 재현과 정정값을 함께 검증한다.
//
// ⚠️ 라이브 의존이라 날짜가 지나면 골든값이 바뀐다. 그래서 두 종류로 나눈다.
//    A. 구조 불변식 — 날짜와 무관하게 항상 참이어야 하는 것 (항상 검사)
//    B. 2026-08-08 골든값 — 그날 스냅샷이 캐시에 있을 때만 검사 (없으면 skip)
//
//   node tests/lib/sector-flow.test.js

const assert = require('assert');
const path = require('path');
const REPO = path.join(__dirname, '..', '..');
const { computeFlow, siteWrsCalc, stageOf, tickerStage, slimToRows } = require(path.join(REPO, 'scripts/lib/sector-flow'));
const { fetchRsData } = require(path.join(REPO, 'scripts/fetch-rs-data'));
const hist = require(path.join(REPO, 'scripts/lib/history-series'));

let pass = 0, fail = 0, skip = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };
const skipIt = (name, why) => { console.log('  ⏭️  ' + name + '  (' + why + ')'); skip++; };
const near = (a, b, tol, msg) => assert.ok(Number.isFinite(a) && Math.abs(a - b) <= tol, `${msg}: ${a} vs ${b} (허용 ±${tol})`);

// ── 순수 함수 (네트워크 불필요) ──
console.log('\n[1] 국면 라벨 (stageOf)');
ok('50DIV 30% 초과 → 과열', () => assert.strictEqual(stageOf({ d50: 35, d200: 50, d200Delta: 5 }).stage, 'hot'));
ok('50DIV 음수 → 조정 중', () => assert.strictEqual(stageOf({ d50: -6, d200: 24, d200Delta: -25 }).stage, 'pullback'));
ok('200DIV 낮음 + 확장 → 상승 초입', () => assert.strictEqual(stageOf({ d50: 5, d200: 10, d200Delta: 4 }).stage, 'early'));
ok('200DIV 중간 + 확장 → 중반 확장', () => assert.strictEqual(stageOf({ d50: 5, d200: 27, d200Delta: 10.8 }).stage, 'mid_up'));
ok('200DIV 중간 + 수축 → 중반 수축', () => assert.strictEqual(stageOf({ d50: 5, d200: 27, d200Delta: -10 }).stage, 'mid_flat'));
ok('과거 이격도 없으면 판정불가 (0 으로 때우지 않는다)',
  () => assert.strictEqual(stageOf({ d50: 5, d200: 27, d200Delta: null }).stage, 'unknown'));

console.log('\n[2] 종목 라벨 (tickerStage)');
ok('BAND형 — 많이 왔고 이탈 + 기대 꺾임 → 이탈',
  () => assert.strictEqual(tickerStage({ d50: -16.9, d200: 65.3, cy: -2.8, upRatio: 71 }).k, 'out'));
ok('DOCN형 — 이탈했으나 기대 살아있음 → 눌림 후보',
  () => assert.strictEqual(tickerStage({ d50: -14.0, d200: 38.6, cy: 24.6, upRatio: 96 }).k, 'dip'));
ok('PLTR형 — 사이클 초입 + 기대 상향 → 초입',
  () => assert.strictEqual(tickerStage({ d50: 29.7, d200: 13.0, cy: 6.9, upRatio: 100 }).k, 'early'));
ok('QLYS형 — 50DIV 30 초과 → 과열',
  () => assert.strictEqual(tickerStage({ d50: 35.9, d200: 52.9, cy: 2.1, upRatio: 95 }).k, 'hot'));
ok('AFRM형 — 초입이나 기대 하향 → 근거 약함',
  () => assert.strictEqual(tickerStage({ d50: 0.4, d200: 13.6, cy: -0.6, upRatio: 14 }).k, 'early_weak'));

// ── 라이브 데이터 ──
(async () => {
  console.log('\n[3] 라이브 데이터로 구조 검증');
  let live, idx;
  try {
    live = await fetchRsData();
    idx = await hist.fetchIndex();
  } catch (e) {
    console.log('  ⏭️  네트워크 실패 — 라이브 검증 건너뜀: ' + e.message);
    return done();
  }

  const wdays = hist.weekdaysOnly(idx.dates).slice().reverse();   // 최신순
  const all = idx.dates.slice().reverse();                        // 주말 포함 최신순
  if (wdays.length < 26 || all.length < 26) { console.log('  ⏭️  스냅샷 26개 미만 — 건너뜀'); return done(); }

  const [d10, d25, s10, s25] = [wdays[10], wdays[25], all[10], all[25]];
  console.log(`     오늘 ${all[0]} · 진짜10거래일 ${d10} · 진짜25거래일 ${d25} · 사이트기준 ${s10}/${s25}`);

  for (const d of new Set([d10, d25, s10, s25])) await hist.ensureSnapshot(d);
  const L = (d) => hist.loadSnapshot(d);
  const flow = computeFlow(live.rows, L(d10), L(d25), { site10: L(s10), site25: L(s25) });

  ok('업종이 100개 이상 산출된다', () => assert.ok(flow.length >= 100, `${flow.length}개`));
  ok('FRANK 는 1부터 연속이다', () => {
    const fr = flow.map((x) => x.FRANK).sort((a, b) => a - b);
    assert.strictEqual(fr[0], 1);
    assert.strictEqual(fr[fr.length - 1], fr.length);
  });
  ok('사이트 재현값과 정정값이 실제로 다르다 (버그가 존재한다는 증거)', () => {
    const both = flow.filter((x) => Number.isFinite(x.f10) && Number.isFinite(x.siteF10));
    const flipped = both.filter((x) => (x.f10 > 0) !== (x.siteF10 > 0));
    assert.ok(both.length > 50, `비교 가능 ${both.length}개`);
    assert.ok(flipped.length > 0, '부호가 뒤집히는 업종이 하나도 없다 — 감쇠계수 정정이 안 먹었을 수 있다');
    console.log(`     → 비교 ${both.length}개 중 F10d 부호 뒤집힘 ${flipped.length}개 (${(flipped.length / both.length * 100).toFixed(0)}%)`);
  });
  ok('종목 수가 적을수록 사이트 왜곡이 크다', () => {
    // ⚠️ 반드시 중앙값으로 본다. 평균은 못 쓴다.
    //    f10 은 나누는 값(과거 Final_WRS)이 0 근처면 폭발한다. 2026-08-11 실측에서
    //    Software-Application 하나가 gap 2704%p 라 count≥30 표본 7개의 평균을 혼자 411 로 끌어올렸고
    //    (중앙값은 26) 소형 89개 평균 198(중앙값 35.5)을 역전시켜 테스트가 거짓 실패했다.
    //    "% 크기가 아니라 순위로 읽는다"는 이 시스템의 원칙을 테스트에도 적용한다.
    const s = flow.filter((x) => Number.isFinite(x.f10) && Number.isFinite(x.siteF10) && x.count >= 2)
      .map((x) => ({ c: x.count, gap: Math.abs(x.f10 - x.siteF10) }));
    const small = s.filter((x) => x.c <= 10), big = s.filter((x) => x.c >= 30);
    const med = (a) => {
      const v = a.map((x) => x.gap).sort((p, q) => p - q);
      return v.length % 2 ? v[(v.length - 1) / 2] : (v[v.length / 2 - 1] + v[v.length / 2]) / 2;
    };
    const avg = (a) => a.reduce((p, q) => p + q.gap, 0) / (a.length || 1);
    assert.ok(small.length && big.length, '표본 부족');
    assert.ok(med(small) > med(big), `소형 중앙값 ${med(small).toFixed(1)} vs 대형 중앙값 ${med(big).toFixed(1)}`);
    console.log(`     → 왜곡 중앙값: 10종목 이하 ${med(small).toFixed(1)}%p (n=${small.length}) `
      + `· 30종목 이상 ${med(big).toFixed(1)}%p (n=${big.length})`);
    console.log(`        참고 평균 ${avg(small).toFixed(0)} / ${avg(big).toFixed(0)} — 분모 0 근처 업종 때문에 평균은 무의미`);
  });
  ok('200DIV 변화량이 산출된다 (스냅샷 v2 스키마 확인)', () => {
    const withDelta = flow.filter((x) => Number.isFinite(x.d200Delta));
    assert.ok(withDelta.length > 50, `${withDelta.length}개만 계산됨 — 스냅샷에 200DIV 가 없을 수 있다`);
  });
  ok('국면 라벨이 한 버킷에 몰리지 않는다', () => {
    const h = {};
    for (const x of flow) h[x.stage] = (h[x.stage] || 0) + 1;
    const top = Math.max(...Object.values(h));
    console.log('     → ' + Object.entries(h).map(([k, v]) => `${k} ${v}`).join(' · '));
    assert.ok(top < flow.length * 0.9, '한 라벨이 90% 이상 — 임계값 버그');
  });
  ok('자금 흐름 분류가 동작한다', () => {
    const h = {};
    for (const x of flow) h[x.flow] = (h[x.flow] || 0) + 1;
    console.log('     → ' + Object.entries(h).map(([k, v]) => `${k} ${v}`).join(' · '));
    assert.ok(Object.keys(h).length >= 3, '분류가 3종 미만 — 축 임계값 확인 필요');
  });

  // ── 2026-08-08 골든값 (그날 데이터일 때만) ──
  console.log('\n[4] 2026-08-08 골든값');
  const GOLD = {
    'Technology|Computer Hardware': -38.3,
    'Technology|Semiconductors': -7.5,
    'Technology|Communication Equipment': -16.9,
    'Technology|Semiconductor Equipment & Materials': -20.2,
    'Technology|Software - Infrastructure': 61.3,
    'Healthcare|Biotechnology': 12.8,
  };
  if (s10 !== '2026-07-27' || s25 !== '2026-07-12') {
    skipIt(`사이트 화면값 6종 재현 (기준일 ${s10}/${s25} 이 골든값 시점과 다름)`, '날짜 불일치');
  } else {
    for (const [k, want] of Object.entries(GOLD)) {
      ok(`사이트 재현 ${k.split('|')[1]} = ${want}%`, () => {
        const r = flow.find((x) => x.key === k);
        assert.ok(r, '업종 없음');
        near(r.siteF10, want, 0.15, '사이트 F10d 재현');
      });
    }
  }
  done();

  function done() {
    console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail} · 건너뜀 ${skip}`);
    process.exit(fail ? 1 : 0);
  }
})();
