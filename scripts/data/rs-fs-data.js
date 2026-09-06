'use strict';
// RS 사이트 fs_data.json — 최근 3분기 매출성장(%) · 순이익 성장(% 또는 "흑자전환" 같은 문자열) · 영업이익률(%).
// 사이트 배치(fetch_fs_data.py)가 만든다. 종목 1,473개, 14일 주기 갱신.
//
// 값은 사이트가 준 그대로 둔다 — "흑자전환"/"적자축소" 문자열은 숫자로 바꾸지 않는다(CLAUDE.md 함정 목록).
// OPM 키는 옛 파일에 없을 수 있어 옵셔널.

const cache = require('../lib/cache');
const { parseLooseJson, fetchText } = require('../fetch-rs-data');

const URL = 'https://305rhfueo-ui.github.io/RS_Investment/static/fs_data.json';

async function getFsData() {
  return cache.through('rsFsData', 'all', async () => {
    const txt = await fetchText(URL, 30000);
    const j = parseLooseJson(txt);
    return j && typeof j === 'object' ? j : null;
  });
}

const clean = (v) => (v === undefined || v === null || v === '' || (typeof v === 'number' && !Number.isFinite(v))) ? null : v;

// 종목 하나 → { sale:[q0,q1,q2], ni:[...], opm:[...]|null, updated }. 없으면 null.
function fsOf(map, ticker) {
  const r = map && map[ticker];
  if (!r || typeof r !== 'object') return null;
  const tri = (pfx) => ['0', '1', '2'].map((i) => clean(r[`${i}${pfx}`]));
  const opm = tri('OPM');
  return {
    sale: tri('SALE'), ni: tri('NI'),
    opm: opm.every((x) => x === null) ? null : opm,
    updated: r.last_updated || null,
  };
}

module.exports = { getFsData, fsOf, URL };

if (require.main === module) {
  require('../lib/util').loadEnv();
  getFsData().then((m) => {
    const n = m ? Object.keys(m).length : 0;
    console.log(`fs_data.json: ${n}종목`);
    for (const t of ['NVDA', 'DELL', 'MRNA']) console.log(t, JSON.stringify(fsOf(m, t)));
  }).catch((e) => { console.error(e.message); process.exit(1); });
}
