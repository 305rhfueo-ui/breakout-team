'use strict';
// 주간 "이번 주 주도주" 질문에 답하기.
//   node scripts/answer-weekly.js --tickers=NVDA,AVGO --note="AI 인프라"
// 답한 종목의 200DIV 를 조회(없으면 야후 200봉으로 직접 계산)하고 과열 상태를 판정해 기록한다.

const { paths, loadEnv, readJson, writeJson, today, isoWeek, num, round, say } = require('./lib/util');
const { fetchRsData } = require('./fetch-rs-data');
const { fetchBarsCached } = require('./lib/bars');
const { sma } = require('./lib/ta');
const { overheatStatus } = require('./lib/leaders');
const { rankPercentiles, bestPct } = require('./lib/percentile');

function arg(name, def = null) {
  const p = process.argv.find((s) => s.startsWith(`--${name}=`));
  return p ? p.slice(name.length + 3) : def;
}

async function main() {
  loadEnv();
  const tickersRaw = arg('tickers');
  if (!tickersRaw) {
    console.log('사용법: node scripts/answer-weekly.js --tickers=NVDA,AVGO --note="AI 인프라"');
    process.exit(1);
  }
  const tickers = tickersRaw.split(',').map((s) => s.trim().toUpperCase()).filter(Boolean);
  const note = arg('note', '');
  const dateStr = arg('date', today());

  const { rows } = await fetchRsData();
  rankPercentiles(rows);
  const byTicker = new Map(rows.map((r) => [r.Ticker, r]));

  const results = [];
  for (const t of tickers) {
    const row = byTicker.get(t);
    if (row) {
      const p = bestPct(row);
      results.push({
        ticker: t, source: 'rs',
        nameHint: row.Industry || null,
        price: round(num(row.Price)),
        div200: num(row['200DIV']), div50: num(row['50DIV']),
        rs: { m1: row.__p.RS_1mo, m3: row.__p.RS_3mo, m6: row.__p.RS_6mo },
        bestPct: round(p, 2),
        overheat: overheatStatus(row, p),
        inUniverse: true,
      });
      continue;
    }
    // RS 유니버스 밖 → 야후 200봉으로 직접 계산
    const b = await fetchBarsCached(t, { range: '2y' });
    if (!b.ok || b.bars.length < 200) {
      results.push({ ticker: t, source: 'none', inUniverse: false, div200: null,
        note: b.ok ? `봉 ${b.bars.length}개 — 200일선 계산 불가(상장 2년 미만)` : `봉 수신 실패(${b.error})` });
      continue;
    }
    const ma200 = sma(b.bars, 200);
    const price = b.bars[b.bars.length - 1].c;
    const div200 = ((price - ma200) / ma200) * 100;
    const fake = { '200DIV': div200, ADR_20D: null, __p: {} };
    results.push({ ticker: t, source: 'yahoo', inUniverse: false,
      price: round(price), div200: round(div200), overheat: overheatStatus(fake, null) });
  }

  const st = readJson(paths.weeklyQuestion, { current: null, history: [] });
  const wk = isoWeek(dateStr);
  if (!st.current || st.current.week !== wk) {
    if (st.current) st.history.unshift(st.current);
    st.current = { week: wk, opened_on: dateStr, question: '이번 주 주도주가 뭐라고 생각하세요?' };
  }
  st.current.answered = true;
  st.current.answered_on = dateStr;
  st.current.note = note;
  st.current.tickers = results;
  writeJson(paths.weeklyQuestion, st);

  console.log(`\n════════ 주간 주도주 답변 기록 (${wk}) ════════`);
  if (note) console.log(`메모: ${note}\n`);
  console.log('티커     출처    현재가      200DIV   상태');
  for (const r of results) {
    console.log(`${r.ticker.padEnd(8)} ${String(r.source).padEnd(7)} ${String(r.price ?? '—').padStart(10)}  ${String(r.div200 ?? '—').padStart(7)}  ${r.overheat ? r.overheat.label : (r.note || '—')}`);
    if (r.overheat && r.overheat.note) console.log(`         → ${r.overheat.note}`);
  }
  console.log(`\n저장: ${paths.weeklyQuestion}`);
  console.log('다음 run-breakout 실행 시 대시보드에 반영됩니다.');
}

if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
