'use strict';
// RS 데이터 수집 — 라이브 사이트에서 가져오고, 실패 시 번들 샘플로 폴백.
// 출처: https://305rhfueo-ui.github.io/RS_Investment/  (사용자 본인 사이트)

const { paths, readJson, say, num } = require('./lib/util');

const DEFAULT_URL = 'https://305rhfueo-ui.github.io/RS_Investment/static/result.json';

// 사이트 JSON 은 pandas to_json 산출물이라 bare NaN / Infinity 가 들어있어 JSON.parse 가 던진다.
// ⚠️ 전역 /\bNaN\b/g 치환은 문자열 값 안의 "NaN" 까지 건드릴 위험이 있다.
//    값 위치(: 또는 [ 또는 , 직후)에 오는 것만 정확히 바꾼다.
function parseLooseJson(text) {
  const cleaned = text
    .replace(/([:[,]\s*)NaN\b/g, '$1null')
    .replace(/([:[,]\s*)-?Infinity\b/g, '$1null');
  return JSON.parse(cleaned);
}

// { data: [...] } 또는 배열 형태 모두 허용 → 종목 행 배열로 정규화
function normalize(raw) {
  const rows = Array.isArray(raw) ? raw : (raw && raw.data) ? raw.data : [];
  return rows.filter((r) => r && (r.Ticker || r.ticker));
}

function extractMeta(raw) {
  if (!raw || Array.isArray(raw)) return { wrs_data: [], market_condition: null, last_updated: null, total_count: null };
  return {
    wrs_data: Array.isArray(raw.wrs_data) ? raw.wrs_data : [],
    market_condition: raw.market_condition != null ? raw.market_condition : null,
    last_updated: raw.last_updated || null,
    total_count: num(raw.total_count),
  };
}

// last_updated("2026-08-03 23:38:29 UTC") 가 며칠 지났는지
function stalenessDays(lastUpdated) {
  if (!lastUpdated) return null;
  const m = String(lastUpdated).match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2}):(\d{2})/);
  if (!m) return null;
  const t = Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6]);
  return (Date.now() - t) / 86400000;
}

async function fetchText(url, timeoutMs = 20000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: controller.signal, headers: { 'User-Agent': 'breakout-team/0.1' } });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

async function fetchRsData(opts = {}) {
  const url = opts.url || process.env.RS_DATA_URL || DEFAULT_URL;
  if (process.env.OFFLINE === '1' || opts.offline) {
    const sample = readJson(paths.sampleData, { data: [] });
    const rows = normalize(sample);
    say('SYSTEM', `OFFLINE 모드 → 번들 샘플 ${rows.length}종목`);
    return { rows, source: 'sample', url, meta: extractMeta(sample), stale: null };
  }
  try {
    const text = await fetchText(url);
    const raw = parseLooseJson(text);
    const rows = normalize(raw);
    if (rows.length === 0) throw new Error('빈 데이터');
    const meta = extractMeta(raw);
    const staleDays = stalenessDays(meta.last_updated);
    say('T1', `RS 데이터 ${rows.length}종목 수신 (라이브) · last_updated ${meta.last_updated || '?'}`);
    if (staleDays !== null && staleDays >= 4) {
      say('WARN', `⚠️ RS 데이터가 ${staleDays.toFixed(1)}일 경과 — 추적 상태 변경을 건너뜁니다`);
    }
    if (meta.total_count != null && meta.total_count !== rows.length) {
      say('WARN', `⚠️ total_count(${meta.total_count}) != 실제 행수(${rows.length})`);
    }
    return { rows, source: 'live', url, meta, stale: staleDays };
  } catch (e) {
    say('WARN', `라이브 수신 실패(${e.message}) → 번들 샘플 사용`);
    const sample = readJson(paths.sampleData, { data: [] });
    const rows = normalize(sample);
    say('T1', `RS 데이터 ${rows.length}종목 (샘플)`);
    return { rows, source: 'sample', url, meta: extractMeta(sample), stale: null };
  }
}

module.exports = { fetchRsData, fetchText, normalize, parseLooseJson, extractMeta, stalenessDays, DEFAULT_URL };

if (require.main === module) {
  require('./lib/util').loadEnv();
  fetchRsData().then((r) => {
    console.log(`\nsource=${r.source}, rows=${r.rows.length}`);
    console.log(`market_condition=${r.meta.market_condition}, wrs_data=${r.meta.wrs_data.length}행`);
    const keys = Object.keys(r.rows[0] || {});
    console.log(`data[] 키 ${keys.length}개:`, keys.join(', '));
    const wkeys = Object.keys(r.meta.wrs_data[0] || {});
    console.log(`wrs_data[] 키 ${wkeys.length}개:`, wkeys.join(', '));
  }).catch((e) => { console.error(e); process.exit(1); });
}
