'use strict';
// 실장 차트 확인 종목 감시 (2026-10-30 사용자: "실장이 알려준 종목 중 장 개시 2시간 이내 상승하고 거래량이 붙으면 알려 줘,
//   장 끝나고 30분 뒤에도 전일 대비 상승 + 많은 거래량 종목을 알려 줘"). LLM 없음 · 모의 매수 없음 — 알림만.
//
//   node scripts/chartcheck-watch.js --prep       개장 전 — 거래량 프로필(지난 20세션 5분봉)을 받아 둔다 (종목당 20~30초)
//   node scripts/chartcheck-watch.js --intraday   개장 2시간 안 — 5분봉 종가가 '넘어야 할 선'과 장중 고가를 넘고
//                                                 거래량 페이스(그 시각까지 누적 ÷ 지난 20일 같은 시각 평균)가 1.5배 이상이면 알림. 종목당 하루 한 번
//   node scripts/chartcheck-watch.js --close      장 마감 30분 뒤 — 전일 대비 상승 + 거래량이 20일 평균의 1.5배 이상인 종목 요약 (세션당 한 번)
//   --dry  알림 없이 출력만
// 밤 루프(night-loop.js)가 부른다. 판정은 서준과 같은 orh.evaluate — 기준선만 피벗 대신 실장이 본 저항(resistance).
// 이 목록은 서준 관심 목록과 달리 돌파 성적이 검증된 적이 없다 → 알림 기록을 남겨 두고 나중에 성적을 본다.
// 종료 코드: --close 가 일봉이 아직 없어 못 보냈으면 1 (밤 루프가 다음 틱에 다시 부른다).
const fs = require('fs');
const path = require('path');
const { paths, loadEnv, readJson, writeJson, say, round } = require('./lib/util');
const cal = require('./lib/market-calendar');
const kis = require('./lib/kis');
const { barDateET } = require('./lib/bars');
const orh = require('./lib/orh');
const intraday = require('./lib/intraday');
const { loadRules } = require('./lib/rules');
const { etParts, loadWatch } = require('./paper-trader');

const SITE = 'https://305rhfueo-ui.github.io/breakout-team/';
const STATE = path.join(paths.cacheDir, 'chartcheck-alerts.json');   // { days: { 세션일: { intraday: {티커: 알림}, close: [...] } } }
const REGIME = { green: '🟢 초록', yellow: '🟡 노랑 — 종목당 위험 절반', red: '🔴 빨강 — 규칙상 새로 사지 않는 구간' };
const TAIL = '판단 보조이며 매매 지시가 아닙니다 — 실장 차트 확인';
const sgn = (x) => `${x > 0 ? '+' : ''}${x}`;

function loadList() {
  try {
    const src = fs.readFileSync(path.join(paths.dashboardData, 'chartcheck.js'), 'utf8');
    return JSON.parse(src.match(/window\.CHARTCHECK_DATA\s*=\s*([\s\S]*);\s*$/)[1]);
  } catch (e) { return null; }
}

// 개장 2시간 안 — 기준선 = max(실장이 본 저항, 그 봉 이전 장중 고가). 저항이 없는 종목은 장중 고가만 본다.
function intradayCheck({ bars5, sessionDate, item, rules }) {
  return intraday.trigger({ bars5, sessionDate, rules, plan: { ticker: item.ticker, pivot: item.resistance ?? 0, adrPct: 0, price: item.price } });
}
function intradayMessage(item, r, regime) {
  const day = item.price ? `전일 대비 ${sgn(round((r.close / item.price - 1) * 100, 1))}% · ` : '';
  return [`📈 실장 차트 확인 ${item.ticker} — 선 돌파 + 거래량`,
    `${r.at} ET 5분봉 종가 ${r.close} > ${r.levelIs === 'pivot' ? `넘어야 할 선 ${r.level}` : `장중 고가 ${r.level}(넘어야 할 선 ${item.resistance ?? '—'})`}`,
    `${day}거래량 페이스 ${r.pace}배(평소 같은 시각 대비) · 당일 저가 ${r.lod}`,
    `시장 ${REGIME[regime] || '확인 불가'}`, `${TAIL}\n${SITE}#tk=${item.ticker}`].join('\n');
}

// 장 마감 — 그 세션 일봉 하나와 그 앞 20개 (일봉은 { t, o, h, l, c, v } — 날짜는 t 에서)
function closeRow(daily, sessionDate, item) {
  const upTo = daily.filter((b) => barDateET(b.t) <= sessionDate);
  const d = upTo[upTo.length - 1];
  if (!d || barDateET(d.t) !== sessionDate || upTo.length < 22) return null;
  const prev = upTo[upTo.length - 2], avg = upTo.slice(-21, -1).reduce((s, b) => s + (b.v || 0), 0) / 20;
  return { ticker: item.ticker, close: round(d.c), pct: round((d.c / prev.c - 1) * 100, 1), volX: avg > 0 ? round(d.v / avg, 1) : null,
    resistance: item.resistance ?? null, aboveLine: item.resistance != null ? d.c > item.resistance : null };
}
function closeMessage(sessionDate, rows, total, regime, rules) {
  const hit = rows.filter((r) => r.pct > 0 && r.volX != null && r.volX >= rules.entry.paceMin).sort((a, b) => b.volX - a.volX);
  const L = [`📋 ${sessionDate} 장 마감 확인 — 실장 차트 확인 ${total}종목`];
  if (!hit.length) L.push(`오른 데다 거래량이 20일 평균의 ${rules.entry.paceMin}배를 넘은 종목은 없습니다.`);
  else {
    L.push(`오른 데다 거래량이 20일 평균의 ${rules.entry.paceMin}배를 넘은 종목:`);
    for (const r of hit) L.push(`· ${r.ticker} ${sgn(r.pct)}% · 거래량 ${r.volX}배 · 종가 ${r.close}${r.resistance != null ? ` — ${r.aboveLine ? `선 ${r.resistance} 돌파 마감` : `선 ${r.resistance} 아래`}` : ''}`);
  }
  L.push(`시장 ${REGIME[regime] || '확인 불가'}`, TAIL);
  return L.join('\n');
}

async function main(argv) {
  loadEnv();
  const dry = argv.includes('--dry'), et = etParts(Date.now()), sessionDate = et.date;
  if (!cal.isTradingDay(sessionDate)) return 0;
  const list = loadList();
  // 아침 run-breakout 이 오늘(한국 날짜 = 오늘 밤 미국 세션일) 만든 목록만 쓴다
  if (!list || list.generated !== sessionDate) { say('T6', `차트 확인 목록이 오늘 것이 아니다(${list ? list.generated : '없음'}) — 건너뜀`); return 0; }
  const items = list.items || [];
  if (!items.length) return 0;
  if (!kis.configured()) { say('WARN', '차트 확인 감시: KIS 키 없음'); return 0; }
  const rules = loadRules(), w = loadWatch(sessionDate), regime = w ? w.regime : null;
  const st = readJson(STATE, { days: {} }), day = (st.days[sessionDate] = st.days[sessionDate] || { intraday: {}, close: null });
  const N = require('./lib/notify');

  if (argv.includes('--prep')) {
    for (const x of items) { const h = await intraday.history5m(x.ticker, { source: 'kis', asOf: sessionDate }); say('T6', `차트 확인 ${x.ticker.padEnd(6)} 프로필 ${h.ok ? '받음' : '실패 — ' + h.error}`); }
    return 0;
  }
  if (argv.includes('--intraday')) {
    if (et.hm < '0935' || orh.minSinceOpen(et.hm) > rules.entry.entryWindowMin + 5) return 0;
    for (const x of items) {
      if (day.intraday[x.ticker]) continue;
      const h = await intraday.history5m(x.ticker, { source: 'kis', asOf: sessionDate });
      const b = await kis.minuteBars(x.ticker, { pages: et.hm >= '1130' ? 2 : 1, regularOnly: true });   // 04:00 부터 센 봉이 120개를 넘는 시각 (paper-trader 와 같음)
      if (!h.ok || !b.ok) { say('WARN', `차트 확인 ${x.ticker}: ${h.error || b.error}`); continue; }
      const today = orh.completed(b.bars.filter((y) => y.date === sessionDate), Date.now());
      const r = intradayCheck({ bars5: [...h.bars.filter((y) => y.date < sessionDate), ...today], sessionDate, item: x, rules });
      if (!r.fired) continue;
      const msg = intradayMessage(x, r, regime);
      say('T6', msg.split('\n').slice(0, 3).join(' · '));
      if (dry) continue;
      day.intraday[x.ticker] = { at: r.at, level: r.level, levelIs: r.levelIs, close: r.close, pace: r.pace, lod: r.lod, resistance: x.resistance ?? null };
      writeJson(STATE, st);    // 보내기 전에 적는다 — 전송이 실패해도 5분마다 같은 알림을 되풀이하지 않게
      await N.notify(msg);
    }
    return 0;
  }
  if (argv.includes('--close')) {
    if (day.close) return 0;
    const rows = [];
    for (const x of items) {
      const d = await kis.dailyBars(x.ticker, { pages: 1 });
      const r = d.ok ? closeRow(d.bars, sessionDate, x) : null;
      if (!r) { say('WARN', `차트 확인 ${x.ticker}: ${sessionDate} 일봉이 아직 없음${d.ok ? '' : ` (${d.error})`} — 다음 틱에 다시`); return 1; }
      rows.push(r);
    }
    const msg = closeMessage(sessionDate, rows, items.length, regime, rules);
    console.log(msg);
    if (dry) return 0;
    day.close = rows;
    writeJson(STATE, st);
    await N.notify(msg);
    return 0;
  }
  return 0;
}

if (require.main === module) main(process.argv.slice(2)).then((c) => process.exit(c)).catch((e) => { console.error(e); process.exit(1); });
module.exports = { intradayCheck, intradayMessage, closeRow, closeMessage };
