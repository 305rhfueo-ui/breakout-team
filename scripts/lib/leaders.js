'use strict';
// 1팀(c) 주도주 · 주도섹터 · 200DIV 과열/재진입.
// 근거: aiinvestmentworkbook.tistory.com/6
//   · 주도주 2~3개가 200div +150% 동시 초과 → 분할 차익 검토
//   · 고변동성 종목은 +100~125%, 초강세 신규주는 +200% 로 조정
//   · -20% 재진입 관찰, -30% 극단 매수구간
//   · 지수(QQQ) 자체는 -10~-15% 가 눌림목 구간 (개별종목과 스케일이 다르다)

const { num, round } = require('./util');
const { rankPercentiles, bestPct } = require('./percentile');

const TH = { base: 150, highVol: 112, ultra: 200, reentry: -20, extreme: -30, indexDip: [-15, -10] };

// 종목 특성에 따른 동적 과열 임계값
function overheatThreshold(row, pct) {
  const adr = num(row.ADR_20D);
  const p = row.__p || {};
  const allTop2 = [p.RS_1mo, p.RS_3mo, p.RS_6mo].every((v) => v !== null && v !== undefined && v >= 98);
  if (allTop2 && (pct || 0) >= 99.5) return { th: TH.ultra, why: '3기간 모두 상위 2% 초강세' };
  if (adr !== null && adr >= 8) return { th: TH.highVol, why: `고변동성(ADR ${adr}%)` };
  return { th: TH.base, why: '표준' };
}

function overheatStatus(row, pct) {
  const d = num(row['200DIV']);
  const { th, why } = overheatThreshold(row, pct);
  if (d === null) return { status: 'unknown', label: '—', div200: null, threshold: th };
  if (d <= TH.extreme) {
    return { status: 'extreme', label: `🔻극단(${d.toFixed(0)}%)`, div200: d, threshold: th,
      note: '−30% 이하: 매수 강도 ↑. 단 개별 악재·주도주 탈락 여부를 먼저 점검' };
  }
  if (d <= TH.reentry) {
    return { status: 'reentry', label: `🟢재진입 관찰(${d.toFixed(0)}%)`, div200: d, threshold: th,
      note: '하락 멈춤 + RS 회복 확인 후 분할 매수' };
  }
  if (d >= th) {
    return { status: 'overheat', label: `🔥과열(+${d.toFixed(0)}%)`, div200: d, threshold: th,
      note: `${why} 기준 +${th}% 초과 — 분할 차익 검토. 전량 매도는 금지(추세 지속 사례 다수)` };
  }
  return { status: 'normal', label: `정상(${d >= 0 ? '+' : ''}${d.toFixed(0)}%)`, div200: d, threshold: th };
}

// 주도주 상위 N (3기간 최고 백분위 기준)
function leadingStocks(rows, n = 10) {
  rankPercentiles(rows);
  return [...rows]
    .filter((r) => (r.Ticker || r.ticker) && bestPct(r) !== null)
    .sort((a, b) => bestPct(b) - bestPct(a))
    .slice(0, n)
    .map((r) => {
      const p = bestPct(r);
      return {
        ticker: r.Ticker || r.ticker,
        sector: r.Sector || '', industry: r.Industry || '',
        price: num(r.Price), bestPct: round(p, 2),
        rs: { m1: r.__p.RS_1mo, m3: r.__p.RS_3mo, m6: r.__p.RS_6mo },
        div200: num(r['200DIV']), div50: num(r['50DIV']),
        adr: num(r.ADR_20D), high52: num(r.High_52W_Pct),
        overheat: overheatStatus(r, p),
      };
    });
}

// 주도 섹터 = 상위 종목이 어디에 몰렸나 (WRS 랭킹 노이즈 회피)
function leadingSectors(rows, { topN = 50, sectorN = 6, by = 'Sector' } = {}) {
  rankPercentiles(rows);
  const top = [...rows]
    .filter((r) => (r.Ticker || r.ticker) && bestPct(r) !== null)
    .sort((a, b) => bestPct(b) - bestPct(a))
    .slice(0, topN);
  const buckets = new Map();
  for (const r of top) {
    const key = String(r[by] || '기타').trim() || '기타';
    if (!buckets.has(key)) buckets.set(key, { name: key, count: 0, tickers: [] });
    const b = buckets.get(key);
    b.count++;
    if (b.tickers.length < 8) b.tickers.push(r.Ticker || r.ticker);
  }
  return [...buckets.values()]
    .map((b) => ({ ...b, sharePct: round((b.count / top.length) * 100, 1) }))
    .sort((a, b) => b.count - a.count)
    .slice(0, sectorN);
}

// 유니버스 과열도 — 주도주 몇 개가 +150% 를 넘었나 (tistory/6 의 핵심 체크)
function marketOverheat(rows) {
  const ds = rows.map((r) => num(r['200DIV'])).filter((v) => v !== null);
  const over150 = ds.filter((v) => v >= 150).length;
  const over100 = ds.filter((v) => v >= 100).length;
  const reentry = ds.filter((v) => v <= -20).length;
  return {
    count: ds.length, over150, over100, reentry,
    max: ds.length ? round(Math.max(...ds)) : null,
    median: ds.length ? round(ds.slice().sort((a, b) => a - b)[Math.floor(ds.length / 2)]) : null,
    ko: over150 >= 2
      ? `🔥 200일선 +150% 초과 ${over150}종목 — 주도주 과열 신호(분할 차익 검토 구간)`
      : `200일선 +150% 초과 ${over150}종목 · +100% 초과 ${over100}종목 — 과열 임계 미달`,
  };
}

// 지수(QQQ) 자체의 눌림목 판정 — 개별종목 -20/-30 과 스케일이 다르다
function indexDip(div200) {
  if (div200 === null || div200 === undefined) return { status: 'unknown', ko: '지수 200DIV 계산 불가' };
  const [lo, hi] = TH.indexDip;
  if (div200 >= lo && div200 <= hi) return { status: 'dip', div200: round(div200), ko: `🟢 지수 200일선 ${round(div200)}% — 눌림목 매수 구간(-10~-15%)` };
  if (div200 < lo) return { status: 'deep', div200: round(div200), ko: `🔻 지수 200일선 ${round(div200)}% — 깊은 조정(추세 훼손 점검)` };
  return { status: 'normal', div200: round(div200), ko: `지수 200일선 ${round(div200)}% — 정상 구간` };
}

module.exports = { leadingStocks, leadingSectors, marketOverheat, overheatStatus, indexDip, TH };

if (require.main === module) {
  require('./util').loadEnv();
  const { fetchRsData } = require('../fetch-rs-data');
  fetchRsData().then(({ rows }) => {
    const ls = leadingStocks(rows, 10);
    const sec = leadingSectors(rows);
    const oh = marketOverheat(rows);
    console.log('\n════════ 주도주 TOP 10 (200DIV) ════════');
    console.log('티커     섹터                 업종                        상위%   200DIV  임계   상태');
    for (const s of ls) {
      console.log(`${s.ticker.padEnd(8)} ${String(s.sector).slice(0, 19).padEnd(20)} ${String(s.industry).slice(0, 26).padEnd(27)} ${String(round(100 - s.bestPct, 2)).padStart(5)}  ${String(s.div200 ?? '—').padStart(7)}  ${String(s.overheat.threshold).padStart(4)}  ${s.overheat.label}`);
    }
    console.log('\n════════ 주도 섹터 (상위 50종목 쏠림) ════════');
    for (const s of sec) console.log(`  ${String(s.name).padEnd(24)} ${String(s.count).padStart(3)}종목 (${s.sharePct}%)  ${s.tickers.slice(0, 6).join(', ')}`);
    console.log('\n════════ 유니버스 과열도 ════════');
    console.log(`  ${oh.ko}`);
    console.log(`  최대 200DIV ${oh.max}%  ·  중앙값 ${oh.median}%  ·  재진입권(-20%↓) ${oh.reentry}종목`);
  });
}
