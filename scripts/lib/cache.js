'use strict';
// TTL 파일 캐시 — 외부 API 호출을 데이터 성격별 수명으로 통제한다.
// 캐시는 OneDrive 밖(CACHE_DIR)에 저장한다.
//
// 미설정 시 하루 400+ 요청이 나가므로 이 계층이 필수다.

const fs = require('fs');
const path = require('path');
const { paths, ensureDir, say } = require('./util');

const DAY = 86400000;
const TTL = {
  cikMap: 30 * DAY,
  secFinancials: 30 * DAY,   // 분기 단위로만 갱신 (+ 신규 8-K 감지 시 무효화)
  secSubmissions: 1 * DAY,
  newsRss: 6 * 3600 * 1000,
  estimates: 1 * DAY,
  krReportList: 7 * DAY,     // 티커당 월 1.5~3건뿐 — 매일 조회할 이유가 없다
  krTickerMap: 30 * DAY,
  pdf: Infinity,             // secureId 단위 불변
};

const _stats = { hit: 0, miss: 0, write: 0, byNs: {} };

function keyPath(ns, key, ext = 'json') {
  const safe = String(key).replace(/[^A-Za-z0-9._-]/g, '_').slice(0, 120);
  return path.join(paths.apiCache, ns, `${safe}.${ext}`);
}

function bump(ns, field) {
  if (!_stats.byNs[ns]) _stats.byNs[ns] = { hit: 0, miss: 0, write: 0 };
  _stats.byNs[ns][field]++;
  _stats[field]++;
}

function get(ns, key, ttlMs) {
  const file = keyPath(ns, key);
  try {
    const st = fs.statSync(file);
    const ttl = ttlMs === undefined ? (TTL[ns] || DAY) : ttlMs;
    if (ttl !== Infinity && Date.now() - st.mtimeMs > ttl) { bump(ns, 'miss'); return null; }
    const v = JSON.parse(fs.readFileSync(file, 'utf8'));
    bump(ns, 'hit');
    return v;
  } catch (e) {
    bump(ns, 'miss');
    return null;
  }
}

function set(ns, key, value) {
  const file = keyPath(ns, key);
  try {
    ensureDir(path.dirname(file));
    fs.writeFileSync(file, JSON.stringify(value), 'utf8');
    bump(ns, 'write');
  } catch (e) { /* 캐시 실패는 실행을 막지 않는다 */ }
  return value;
}

function del(ns, key) {
  try { fs.unlinkSync(keyPath(ns, key)); return true; } catch (e) { return false; }
}

// 바이너리(PDF 등)
function getBuf(ns, key, ext = 'pdf') {
  const file = keyPath(ns, key, ext);
  try {
    const b = fs.readFileSync(file);
    bump(ns, 'hit');
    return b;
  } catch (e) { bump(ns, 'miss'); return null; }
}

function setBuf(ns, key, buf, ext = 'pdf') {
  const file = keyPath(ns, key, ext);
  try {
    ensureDir(path.dirname(file));
    fs.writeFileSync(file, buf);
    bump(ns, 'write');
  } catch (e) { /* noop */ }
  return file;
}

// 캐시를 통과하는 fetch 래퍼
async function through(ns, key, producer, ttlMs) {
  const hit = get(ns, key, ttlMs);
  if (hit !== null) return hit;
  const v = await producer();
  if (v !== null && v !== undefined) set(ns, key, v);
  return v;
}

function stats() { return JSON.parse(JSON.stringify(_stats)); }

function report(label = '캐시') {
  const s = _stats;
  const total = s.hit + s.miss;
  const rate = total ? ((s.hit / total) * 100).toFixed(0) : '—';
  const detail = Object.entries(s.byNs).map(([ns, v]) => `${ns} ${v.hit}/${v.hit + v.miss}`).join(' · ');
  say('SYSTEM', `${label}: 히트 ${s.hit} / 미스 ${s.miss} (${rate}%)${detail ? ' — ' + detail : ''}`);
}

// ── 레이트리밋 스로틀 (SEC 는 10req/s 정책 → 8 로 자체 제한) ──
function throttler(perSec) {
  const minGap = 1000 / perSec;
  let last = 0;
  return async function wait() {
    const now = Date.now();
    const gap = now - last;
    if (gap < minGap) await new Promise((r) => setTimeout(r, minGap - gap));
    last = Date.now();
  };
}

module.exports = { get, set, del, getBuf, setBuf, through, stats, report, throttler, TTL, DAY };
