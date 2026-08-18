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

console.log('\n[2b] 감쇠 불일치 메커니즘 (합성 픽스처 — 라이브 노이즈 없음)');
ok('종목 수가 적을수록 감쇠 왜곡이 크다', () => {
  // 사이트 버그의 정체: 오늘값은 감쇠(×count/(count+5))를 먹이고, 과거값은 안 먹인 채 비교한다.
  // 과거값이 1/damping 배로 부풀려지므로 변화율이 인위적으로 낮아지고,
  // 그 왜곡 배율은 종목 수가 적을수록 크다 — 이게 137개 중 40개의 부호를 뒤집은 원인이다.
  //
  // ⚠️ 이 성질을 라이브 F10d 값의 gap 으로 재던 예전 테스트는 거짓 실패했다.
  //    F10d 는 분모(과거 Final_WRS)가 0 근처면 폭발해서(관측 +2762%) 표본 7개짜리
  //    대형 버킷을 한 업종이 통째로 흔든다. 크기가 아니라 메커니즘을 직접 검증한다.
  const mkRows = (n, industry) => Array.from({ length: n }, (_, i) => ({
    Ticker: `${industry}${i}`, Sector: 'Test', Industry: industry,
    'Market Cap': '10.00B', RS_6mo: 0.5,
  }));
  const g = siteWrsCalc([...mkRows(3, 'Small'), ...mkRows(40, 'Big')]);
  const small = g.get('Test|Small'), big = g.get('Test|Big');
  assert.strictEqual(small.count, 3);
  assert.strictEqual(big.count, 40);

  // 왜곡 배율 = 감쇠 미적용 / 감쇠 적용 = (count+5)/count
  const distort = (x) => x.raw / x.damped;
  near(distort(small), 8 / 3, 1e-9, '3종목 왜곡 배율');
  near(distort(big), 45 / 40, 1e-9, '40종목 왜곡 배율');
  assert.ok(distort(small) > distort(big),
    `소형이 더 왜곡돼야 한다: ${distort(small).toFixed(2)} vs ${distort(big).toFixed(2)}`);
  console.log(`     → 과거값 부풀림 배율: 3종목 ${distort(small).toFixed(2)}배 · 40종목 ${distort(big).toFixed(2)}배`);
});
ok('감쇠는 종목 수에 대해 단조 증가한다 (1 을 넘지 않는다)', () => {
  const f = (n) => n / (n + 5);
  for (let n = 1; n < 60; n++) assert.ok(f(n) < f(n + 1) && f(n) < 1, `n=${n} 에서 단조성 깨짐`);
});

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
  /* 감쇠 불일치의 방향은 **오늘 Final_WRS 의 부호**가 결정한다.
   *   사이트 = (T − raw)/|raw| ,  정정 = (T − raw·d)/(|raw|·d)   (d = count/(count+5) < 1)
   *   양변에 |raw| 를 곱해 빼면  정정 − 사이트 = T·(1/d − 1)
   *   1/d − 1 > 0 이므로 부호는 오직 T 가 정한다 — T>0 이면 사이트가 낮고, T<0 이면 사이트가 높다.
   *
   * ⚠️ 예전 이 테스트는 "사이트가 대부분 더 낮다(>60%)"고만 검사했다. 그건 테스트를 쓰던 날
   *    양수 업종이 다수였던 우연이지 규칙이 아니다. 2026-08-17 실측에서 양수 업종이 127개 중
   *    37개(29%)로 줄자 전체 비율이 39%가 되어 실패했다 — 코드가 아니라 시장 폭이 바뀐 것이다.
   *    이제 부호별로 나눠 실제 메커니즘을 검사한다. */
  ok('감쇠 불일치의 방향이 오늘 Final_WRS 부호를 따른다', () => {
    const s = flow.filter((x) => Number.isFinite(x.f10) && Number.isFinite(x.siteF10) && x.count >= 2);
    // final 이 0 근처면 부동소수점 경계라 방향이 뒤집힐 수 있다 — 판정에서 뺀다.
    const EPS = 1e-3;
    const pos = s.filter((x) => x.final > EPS);
    const neg = s.filter((x) => x.final < -EPS);
    const loP = pos.filter((x) => x.siteF10 < x.f10).length;
    const hiN = neg.filter((x) => x.siteF10 > x.f10).length;
    console.log(`     → 오늘값 양수 ${pos.length}개 중 사이트가 더 낮음 ${loP}`
      + ` · 음수 ${neg.length}개 중 사이트가 더 높음 ${hiN}`);
    assert.ok(pos.length + neg.length > 50, `비교 가능 ${pos.length + neg.length}개`);
    if (pos.length >= 10) {
      assert.ok(loP / pos.length > 0.9,
        `오늘값이 양수면 사이트가 더 낮아야 한다 — ${loP}/${pos.length} 뿐이다`);
    }
    if (neg.length >= 10) {
      assert.ok(hiN / neg.length > 0.8,
        `오늘값이 음수면 사이트가 더 높아야 한다 — ${hiN}/${neg.length} 뿐이다`);
    }
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
