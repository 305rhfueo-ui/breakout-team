'use strict';
// RS 사이트 "Sector/Industry WRS" 화면의 FRANK · FRANK 25d CHG 를 **사이트와 똑같이** 재현한다 (2026-10-12, 5팀 하린).
// 사이트 result.json 에는 FRANK 가 없고 브라우저(index.html)가 그때그때 계산한다. 사용자가 화면과 대조하므로 고치지 않고 그대로 따른다.
//
//   오늘  (calculateWRS):        Sector·Industry 가 'N/A' 아닌 행, 시총>0 만 센다. RS NaN→0.
//                                Final = (시총가중 RS6×0.4 + RS6 중앙값×0.4 + 승률×(1−1/n)×0.2) × n/(n+5)
//                                종목 1개 이하 업종은 뺀다 → Final 내림차순 순위 = FRANK
//   25일 전 (calculateWRSForData): history_index 의 dates[25](최신순, 주말 포함) 파일. 감쇠 n/(n+5) **없음**,
//                                종목 1개 업종도 **포함**한 채 순위. FRANK 25d = 과거 FRANK − 오늘 FRANK (양수 = 올라옴)
//   ⚠️ 두 계산이 서로 다르다(감쇠·필터) — 사이트의 버그지만 화면값과 맞추려고 그대로 둔다.

function parseMarketCap(s) {               // 사이트 parseMarketCap 그대로
  if (!s || typeof s !== 'string') return 0;
  const last = s.slice(-1).toUpperCase();
  const v = parseFloat(s.slice(0, -1));
  if (Number.isNaN(v)) return 0;
  return v * ({ T: 1e12, B: 1e9, M: 1e6, K: 1e3 }[last] || 1);
}

function group(rows, { past }) {
  const g = new Map();
  for (const it of rows || []) {
    if (past) {
      if (!it['Market Cap'] || it['Market Cap'] === 'N/A') continue;
      if (!it.Sector || it.Sector === 'N/A' || it.Sector === 'nan') continue;
    } else if (!it.Sector || it.Sector === 'N/A' || !it.Industry || it.Industry === 'N/A') continue;
    const k = `${it.Sector}|${it.Industry}`;
    if (!g.has(k)) g.set(k, { key: k, sector: it.Sector, industry: it.Industry, n: 0, mc: 0, w6: 0, rs: [], win: 0, tickers: [] });
    const x = g.get(k);
    const mc = parseMarketCap(it['Market Cap']);
    if (mc > 0) {
      const r6 = parseFloat(it.RS_6mo) || 0;
      x.n++; x.mc += mc; x.w6 += mc * r6; x.rs.push(r6); if (r6 > 0) x.win++;
      x.tickers.push(it.Ticker);
    }
  }
  const out = [];
  for (const x of g.values()) {
    const s = x.rs.sort((a, b) => a - b), m = Math.floor(s.length / 2);
    const med = s.length ? (s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2) : 0;
    const w6 = x.mc > 0 ? x.w6 / x.mc : 0, wr = x.n > 0 ? x.win / x.n : 0, wf = x.n > 1 ? 1 - 1 / x.n : 0;
    const base = w6 * 0.4 + med * 0.4 + wr * wf * 0.2;
    out.push({ key: x.key, sector: x.sector, industry: x.industry, count: x.n, winRate: wr, wrs6: w6,
      finalWrs: past ? base : base * (x.n / (x.n + 5)), tickers: x.tickers });
  }
  const arr = past ? out : out.filter((x) => x.count > 1);
  arr.sort((a, b) => b.finalWrs - a.finalWrs);
  arr.forEach((x, i) => { x.frank = i + 1; });
  return arr;
}

// rows = 오늘 result.json data[] · pastRows = 25번째 과거 파일 data[] (없으면 null)
function siteFrank(rows, pastRows = null) {
  const today = group(rows, { past: false });
  const past = pastRows ? new Map(group(pastRows, { past: true }).map((x) => [x.key, x.frank])) : null;
  for (const x of today) x.frank25dChg = past && past.has(x.key) ? past.get(x.key) - x.frank : null;
  return today;
}

// 사이트가 25일 전으로 쓰는 날짜: history_index dates(최신순)의 [25], 26개 미만이면 가장 오래된 것, 12개 미만이면 없음
function site25Date(datesAsc) {
  const d = [...(datesAsc || [])].sort().reverse();
  if (d.length < 12) return null;
  return d.length >= 26 ? d[25] : d[d.length - 1];
}

module.exports = { siteFrank, site25Date, parseMarketCap };
