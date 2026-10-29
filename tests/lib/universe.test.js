'use strict';
// RS 사이트 티커 목록 자동 갱신 (2026-10-29) — 보통주 거르기 · $70 넣고 $50 빼기 · 가격대 나누기
//   node tests/lib/universe.test.js
const assert = require('assert');
const U = require('../../scripts/ticker-universe');
let pass = 0, fail = 0;
const ok = async (name, fn) => { try { await fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

(async () => {
  await ok('보통주만 — ETF·우선주·폐쇄형 펀드 제외, PFBC·CIB·BRK.A(Nasdaq Traded N)는 남김', () => {
    const H = 'Nasdaq Traded|Symbol|Security Name|Listing Exchange|Market Category|ETF|Round Lot Size|Test Issue|Financial Status|CQS Symbol|NASDAQ Symbol|NextShares';
    const row = (tr, sym, name, etf = 'N', test = 'N') => [tr, sym, name, 'N', ' ', etf, '100', test, '', sym, sym, 'N'].join('|');
    const txt = [H, row('N', 'BRK.A', 'Berkshire Hathaway Inc. Common Stock'), row('Y', 'PFBC', 'Preferred Bank - Common Stock'),
      row('Y', 'CIB', 'Grupo Cibest S.A. American Depositary Shares each representing four Preferred Shares'),
      row('Y', 'WFC$L', 'Wells Fargo 7.5% Non-Cumulative Perpetual Convertible Class A Preferred Stock'),
      row('Y', 'STRF', 'Strategy Inc - 10.00% Series A Perpetual Strife Preferred Stock'), row('Y', 'TWN', 'Taiwan Fund, Inc. (The) Common Stock'),
      row('Y', 'GDXU', 'MicroSectors Gold Miners 3X Leveraged ETNs', 'Y'), row('Y', 'BHAVU', 'BHAV Acquisition Corp - Units'),
      row('Y', 'ZXZZT', 'NASDAQ TEST STOCK', 'N', 'Y'), 'File Creation Time: 1029202600:00|||||||||||'].join('\n');
    assert.deepStrictEqual([...U.commonStocks(txt)].sort(), ['BRK.A', 'CIB', 'PFBC']);
  });

  await ok('$70 넘으면 넣고, 이미 있으면 $50 밑으로 가야 뺀다 · 가격 모르면 남김 · 상장 목록에 없으면 뺌 · 수기는 뒤에', () => {
    const prices = new Map([['NEW75', 75], ['NEW60', 60], ['OLD60', 60], ['OLD45', 45], ['BIG', 900]]);
    const common = new Set(['NEW75', 'NEW60', 'OLD60', 'OLD45', 'BIG', 'NOPRICE', 'MAN']);
    const next = U.build({ prices, common, prev: ['OLD60', 'OLD45', 'NOPRICE', 'GONE'], manual: ['MAN', 'BIG'] });
    assert.deepStrictEqual(next, ['BIG', 'NEW75', 'OLD60', 'NOPRICE', 'MAN']);
    assert.deepStrictEqual(U.diff(['OLD60', 'OLD45', 'NOPRICE', 'GONE'], next), { added: ['BIG', 'NEW75', 'MAN'], removed: ['OLD45', 'GONE'] });
  });

  await ok('가격대 나누기 — 100개 넘으면 반으로 나눠 다시, 겹치는 경계는 티커로 한 번만, / 는 . 으로', async () => {
    const all = Array.from({ length: 250 }, (_, i) => ({ ticker: i === 0 ? 'BRK/A' : `T${i}`, price: 50 + i * 4 }));
    const calls = [];
    const search = async ({ priceMin, priceMax }) => {
      calls.push([priceMin, priceMax]);
      const hit = all.filter((x) => x.price >= priceMin && x.price <= priceMax);
      return { ok: true, total: hit.length, rows: hit.slice(0, 100) };
    };
    const out = { rows: new Map(), cut: 0 };
    await U.priceBand(search, 'NAS', 50, 10000000, out);
    assert.strictEqual(out.rows.size, 250); assert.strictEqual(out.cut, 0);
    assert.ok(out.rows.has('BRK.A') && !out.rows.has('BRK/A'));
    assert.ok(calls.length > 3);
    const bad = { rows: new Map(), cut: 0 };
    await U.priceBand(async () => ({ ok: true, total: 150, rows: all.slice(0, 100) }), 'NAS', 70, 70.04, bad);
    assert.strictEqual(bad.cut, 50, '더 못 나누면 잘린 수를 센다(쓰기 전에 멈춤)');
  });

  await ok('시트 CSV 첫 열 — 따옴표·공백·빈 줄·중복 정리', () => {
    assert.deepStrictEqual(U.csvCol('"brk.a"\nNVR\n\nNVR\n bf-b ,x\n123\n'), ['BRK.A', 'NVR', 'BF-B']);
  });

  console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
  process.exit(fail ? 1 : 0);
})();
