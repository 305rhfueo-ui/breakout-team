'use strict';
// 리서치 로테이션 — "같은 종목만 영원히 재조사"를 막는다.
//
// 배경: 선정이 매 실행 bestPct 상위 고정이라 2팀 54종목 중 상위 10개만 계속 조사되고
//       나머지 44종목은 순위가 바뀌지 않는 한 영원히 미조사로 남았다. 그런데 화면에는
//       "캐시가 쌓이면 며칠 안에 전량 커버됩니다"라고 떴다 — 아무것도 순환하지 않는데.
//       그 문구를 참으로 만드는 것이 이 모듈이다.
//
// 원칙: LLM 상한은 올리지 않는다(비용 고정). 대신 매일 다른 종목을 조사해 며칠에 걸쳐 전량을 덮는다.
//       그리고 돈이 들어오는 업종 소속을 앞순위로 당겨, 같은 예산으로 더 중요한 것부터 본다.

const { paths, readJson, writeJson } = require('./util');

const CACHE_VERSION = 1;
const PRUNE_DAYS = 60;          // 유니버스에서 빠진 티커가 무한 누적되지 않게
const BIG = 9999;               // 정렬용 Infinity 대체 (Infinity 는 뺄셈에서 NaN 을 만든다)

// 자금 흐름 등급 — 낮을수록 먼저 조사한다.
const FLOW_RANK = { leading: 0, inflow: 1, narrow: 2 };
const FLOW_RANK_OTHER = 3;

function emptyCache() {
  return { version: CACHE_VERSION, detail: {}, team2: {}, team4: {} };
}

function loadCache(file = paths.researchCache) {
  const c = readJson(file, null);
  if (!c || c.version !== CACHE_VERSION) return emptyCache();
  return { version: CACHE_VERSION, detail: c.detail || {}, team2: c.team2 || {}, team4: c.team4 || {} };
}

// 오래된 항목을 정리하고 저장한다. today 를 주면 그 기준으로 자른다.
function saveCache(cache, today, file = paths.researchCache) {
  const out = emptyCache();
  for (const bucket of ['detail', 'team2', 'team4']) {
    for (const [ticker, v] of Object.entries(cache[bucket] || {})) {
      const last = typeof v === 'string' ? v : (v && v.last);
      if (!last) continue;
      if (today && tradingDaysSince(last, today) > PRUNE_DAYS) continue;
      out[bucket][ticker] = v;
    }
  }
  writeJson(file, out);
  return out;
}

// 두 날짜 사이의 평일 수. from 다음 날부터 today 까지 센다.
//
// ⚠️ 미국 장 휴장일(추수감사절 등)은 추적하지 않는다. 그래서 실제 거래일보다 조금 크게 나온다.
//    로테이션 우선순위를 정하는 용도라 이 정도 오차는 무해하다 — 순서만 바뀌지 누락은 안 생긴다.
//    (휴장일까지 맞추려면 히스토리 스냅샷 인덱스를 읽어야 하는데, 그 비용을 낼 이유가 없다)
function tradingDaysSince(from, today) {
  if (!from || !today) return Infinity;
  const a = new Date(`${from}T00:00:00Z`);
  const b = new Date(`${today}T00:00:00Z`);
  if (Number.isNaN(a.getTime()) || Number.isNaN(b.getTime())) return Infinity;
  if (b <= a) return 0;
  let n = 0;
  const cur = new Date(a.getTime());
  while (cur < b) {
    cur.setUTCDate(cur.getUTCDate() + 1);
    const wd = cur.getUTCDay();
    if (wd !== 0 && wd !== 6) n++;
  }
  return n;
}

function lastResearched(cache, bucket, ticker) {
  const v = (cache && cache[bucket] || {})[ticker];
  if (!v) return null;
  return typeof v === 'string' ? v : (v.last || null);
}

function stalenessOf(cache, bucket, ticker, today) {
  return tradingDaysSince(lastResearched(cache, bucket, ticker), today);
}

// 조사 완료를 캐시에 찍는다. cache 를 제자리에서 수정하고 돌려준다.
function recordResearched(cache, bucket, tickers, date) {
  if (!cache[bucket]) cache[bucket] = {};
  for (const t of tickers || []) {
    if (!t) continue;
    const prev = cache[bucket][t];
    const count = (prev && typeof prev === 'object' && Number(prev.count)) || 0;
    cache[bucket][t] = { last: date, count: count + 1 };
  }
  return cache;
}

// computeFlow 결과 → Map(`${sector}|${industry}` → 0..3)
// ⚠️ industries 가 없으면(오프라인·스냅샷 26개 미만) 빈 Map 을 준다.
//    그러면 아래 정렬에서 전 종목이 같은 등급이 되어 자금흐름 항이 조용히 사라진다 — 실행은 계속된다.
function flowRankOf(industries) {
  const m = new Map();
  if (!Array.isArray(industries)) return m;
  for (const x of industries) {
    if (!x || !x.key) continue;
    m.set(x.key, FLOW_RANK[x.flow] ?? FLOW_RANK_OTHER);
  }
  return m;
}

function keyOf(item) {
  return `${item.sector ?? ''}|${item.industry ?? ''}`;
}

// 조사 순서를 정한다. 원본을 건드리지 않고 정렬된 복사본을 돌려준다.
//
// 정렬 키 (앞이 우선):
//   ① 오래됐거나 한 번도 안 한 것    — 이게 로테이션의 핵심
//   ② 돈이 들어오는 업종             — 같은 예산으로 중요한 것부터
//   ③ 그 안에서 가장 오래된 것        — 전부 최신이어도 cap 을 채우고, 가장 묵은 것부터 간다
//   ④ 지표 내림차순 (2팀 bestPct · 4팀 volx)
function orderForResearch(items, {
  flowRank = new Map(), cache = emptyCache(), bucket = 'team2',
  today, ttl = 5, metric = () => 0,
} = {}) {
  const scored = (items || []).map((it, i) => {
    const stale = stalenessOf(cache, bucket, it.ticker, today);
    const s = Math.min(stale, BIG);
    return {
      it, i,
      k: [stale >= ttl ? 0 : 1, flowRank.get(keyOf(it)) ?? FLOW_RANK_OTHER, -s, -(Number(metric(it)) || 0)],
    };
  });
  scored.sort((a, b) => {
    for (let j = 0; j < a.k.length; j++) if (a.k[j] !== b.k[j]) return a.k[j] - b.k[j];
    return a.i - b.i;                      // 동점이면 원래 순서 유지 (재현 가능하게)
  });
  return scored.map((x) => x.it);
}

module.exports = {
  loadCache, saveCache, emptyCache,
  tradingDaysSince, lastResearched, stalenessOf, recordResearched,
  flowRankOf, orderForResearch,
  CACHE_VERSION, PRUNE_DAYS, FLOW_RANK,
};
