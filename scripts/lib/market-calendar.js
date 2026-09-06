'use strict';
// 미국 증시 거래일 달력 — 야후 봉 누락과 RS 세션일을 판정하기 위한 최소 구현.
//
// 배경 (2026-08-31 · 09-01 실제 발생): 야후가 2026-08-28(금) 봉을 빼고 줬는데 아무 검사가 없어
//   데드크로스 날짜가 실행마다 바뀌고(8/31 D+0 → 8/28 D+2), 3팀 "50일선 아래 N일 연속"이 하루씩 적게 세어졌다.
//   금요일 하나가 빠지면 목→월 간격이 4일이라 "연휴"와 구분이 안 된다 → 달력 없이는 못 잡는다.
//
// ⚠️ 휴장일 목록은 정기 휴장만 담았다. 임시 휴장(국장일 등)은 "봉 누락"으로 오탐된다.
//    오탐은 경고만 띄우고 종목을 자르지 않으므로 무해하다 — 목록에 날짜를 추가하면 사라진다.

const HOLIDAYS = new Set([
  // 2025
  '2025-01-01', '2025-01-09', '2025-01-20', '2025-02-17', '2025-04-18', '2025-05-26',
  '2025-06-19', '2025-07-04', '2025-09-01', '2025-11-27', '2025-12-25',
  // 2026
  '2026-01-01', '2026-01-19', '2026-02-16', '2026-04-03', '2026-05-25', '2026-06-19',
  '2026-07-03', '2026-09-07', '2026-11-26', '2026-12-25',
  // 2027
  '2027-01-01', '2027-01-18', '2027-02-15', '2027-03-26', '2027-05-31', '2027-06-18',
  '2027-07-05', '2027-09-06', '2027-11-25', '2027-12-24',
]);

function isTradingDay(iso) {
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return false;
  const wd = d.getUTCDay();
  if (wd === 0 || wd === 6) return false;
  return !HOLIDAYS.has(iso);
}

function addDays(iso, n) {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

// iso 이하(포함)의 마지막 거래일
function lastTradingDayOnOrBefore(iso) {
  let cur = iso;
  for (let i = 0; i < 10; i++) {
    if (isTradingDay(cur)) return cur;
    cur = addDays(cur, -1);
  }
  return null;
}

// iso 미만의 마지막 거래일
function prevTradingDay(iso) { return lastTradingDayOnOrBefore(addDays(iso, -1)); }

// [from, to] 구간의 거래일 목록
function tradingDaysBetween(from, to) {
  const out = [];
  let cur = from;
  for (let i = 0; i < 400 && cur <= to; i++) {
    if (isTradingDay(cur)) out.push(cur);
    cur = addDays(cur, 1);
  }
  return out;
}

// 봉 날짜 목록(ET, YYYY-MM-DD, 오름차순)에서 빠진 거래일을 찾는다. 최근 lookback 봉 구간만 본다.
function missingSessions(barDates, { lookback = 40 } = {}) {
  const ds = (barDates || []).slice(-lookback);
  if (ds.length < 2) return [];
  const expect = tradingDaysBetween(ds[0], ds[ds.length - 1]);
  const have = new Set(ds);
  return expect.filter((d) => !have.has(d));
}

// RS 사이트 last_updated(UTC ISO) → 그 데이터가 가리키는 세션일(ET 기준 마지막 거래일).
// 사이트는 장 마감 후 렌더한다. ET 16:00 이전이면 전날 세션이다.
function sessionDateFromUtc(utcIso) {
  if (!utcIso) return null;
  // RS 사이트는 "2026-09-04 00:55:33 UTC" 형식으로 준다
  const s = String(utcIso).trim().replace(/\s*UTC$/i, '').replace(' ', 'T');
  const d = new Date(/Z$|[+-]\d\d:\d\d$/.test(s) ? s : `${s}Z`);
  if (Number.isNaN(d.getTime())) return null;
  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false,
  });
  const p = {};
  for (const part of fmt.formatToParts(d)) p[part.type] = part.value;
  const etDate = `${p.year}-${p.month}-${p.day}`;
  const hour = p.hour === '24' ? 0 : Number(p.hour);
  if (isTradingDay(etDate) && hour >= 16) return etDate;
  return prevTradingDay(etDate);
}

module.exports = {
  HOLIDAYS, isTradingDay, addDays, lastTradingDayOnOrBefore, prevTradingDay,
  tradingDaysBetween, missingSessions, sessionDateFromUtc,
};
