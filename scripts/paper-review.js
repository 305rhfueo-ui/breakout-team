'use strict';
// 6팀 주간 리뷰 — 원장을 구간별로 나눠 세고, Claude 의 차트 소견을 실제 결과와 대조한다. LLM 없음.
//
//   node scripts/paper-review.js            터미널에 표 + docs/STRATEGY-LOG.md 뒤에 주간 절을 붙인다
//   node scripts/paper-review.js --dry      파일에 쓰지 않는다
//
// 이 스크립트는 "무엇을 바꿔라"를 말하지 않는다. 숫자만 낸다.
// 표본이 30건 미만이면 '관찰 단계'라고 적는다 — 그동안은 모의 성적으로 규칙을 바꾸지 않는다.

const fs = require('fs');
const path = require('path');
const { paths, loadEnv, today, readJson, round, say } = require('./lib/util');
const { fetchBarsCached, barDateET } = require('./lib/bars');
const paper = require('./lib/paper');
const { loadRules } = require('./lib/rules');

const MIN_SAMPLE = 30;
const bucket = (v, cuts, unit = '') => { if (v == null) return '미상'; for (let i = 0; i < cuts.length; i++) if (v < cuts[i]) return `${i ? cuts[i - 1] : '<'}${i ? '~' : ''}${cuts[i]}${unit}`; return `${cuts[cuts.length - 1]}${unit} 이상`; };
const HEAD = ['| 구분 | 거래 | 승률 | 평균 R | 손익비 | 평균 이익R / 손실R | 보유일 | 당일 손절 |', '|---|---:|---:|---:|---:|---|---:|---:|'];
const row = (k, s) => `| ${k} | ${s.n} | ${s.n ? s.winPct + '%' : '—'} | ${s.n ? s.avgR : '—'} | ${s.n ? s.profitFactor ?? '—' : '—'} | ${s.n ? `${s.avgWinR} / ${s.avgLossR}` : '—'} | ${s.n ? s.avgDays : '—'} | ${s.n ? s.sameDayStopPct + '%' : '—'} |`;
const table = (title, groups) => (Object.keys(groups).length ? [`**${title}**`, '', ...HEAD, ...Object.entries(groups).sort().map(([k, s]) => row(k, s)), ''] : []);

// 봉은 아침 스캔 캐시를 먼저 쓰고, 캐시에 없던 종목만 1초 간격으로 받는다(야후 차단 방지 — 2026-10-15 사용자 지시). 종목당 한 번.
const barsMemo = new Map();
async function barsOf(T) {
  if (!barsMemo.has(T)) {
    const r = await fetchBarsCached(T, { range: '1y' });
    if (!r.cached) await new Promise((ok) => setTimeout(ok, 1000));
    barsMemo.set(T, r.ok ? r.bars : null);
  }
  return barsMemo.get(T);
}

// 한 건 채점 — asOf(그날 봉, 제외) 다음 horizon 세션 동안 무슨 일이 있었나 (일봉)
//   r: 피벗 위 종가에 샀다면 대략 몇 R — 그 뒤 저가가 손절에 닿으면 -1R, 아니면 끝 종가 기준. ponytail: 청산 규칙(10·20일선)은 반영 안 함, 정밀판은 backtest-daily
function scoreAt(bars, { asOf, price, pivot = null, stop = null }, horizon = 10) {
  const after = bars.filter((b) => barDateET(b.t) > asOf).slice(0, horizon);
  if (!after.length || !price) return { sessions: 0 };
  const bi = pivot ? after.findIndex((b) => b.c > pivot) : -1;
  const hi = Math.max(...after.map((b) => b.h)), lo = Math.min(...after.map((b) => b.l));
  const last = after[after.length - 1].c;
  let r = null;
  if (bi >= 0 && stop && stop < after[bi].c && price < pivot) {
    const entry = after[bi].c, risk = entry - stop;
    r = round(after.slice(bi + 1).some((b) => b.l <= stop) ? -1 : (last - entry) / risk, 2);
  }
  return { sessions: after.length, lastDate: barDateET(after[after.length - 1].t), broke: bi >= 0, brokeOn: bi >= 0 ? barDateET(after[bi].t) : null,
    retPct: round((last / price - 1) * 100, 1), maxUpPct: round((hi / price - 1) * 100, 1), maxDownPct: round((lo / price - 1) * 100, 1),
    afterBreakPct: bi >= 0 ? round((last / after[bi].c - 1) * 100, 1) : null, r };
}

// Claude 소견 채점 — 소견을 쓴 날 이후 N 세션
async function scoreReads(log, horizon = 10) {
  const reads = (log.entries || []).filter((e) => (e.by || 'user') === 'claude' && e.at && e.at.pivot);
  const out = [];
  for (const e of reads) {
    const bars = await barsOf(e.ticker);
    if (!bars) continue;
    out.push({ date: e.date, ticker: e.ticker, verdict: e.verdict, grade: e.at.grade, pivot: e.at.pivot, price: e.at.price, ...scoreAt(bars, e.at, horizon) });
  }
  return out;
}

// 사지 않은 후보·재민 촉매·로컬 판정 모델 채점 (2026-10-22 학습 고리)
//   **참고 자료다** — 규칙 변경 근거는 여전히 실제 모의거래 30건 규칙(review.md)뿐. 칸 표본 30 미만은 "판단 보류".
const HORIZONS = [5, 10, 21];        // 5 = 1주 — 부합도 학습의 주 정답 (2026-10-26 사용자: "한 달 말고 일주일 뒤")
const dayBefore = (d) => new Date(Date.parse(d) - 864e5).toISOString().slice(0, 10);
const jsonFiles = (dir) => { try { return fs.readdirSync(dir).filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f)).sort().slice(-120).map((f) => path.join(dir, f)); } catch (e) { return []; } };
async function scoreLearning() {
  const recs = [];
  const seen = new Set();                        // 같은 셋업(티커·피벗)이 며칠 연속 목록에 오르면 처음 오른 날 한 건만 — 표본을 부풀리지 않게
  const byKey = new Map();
  // 처음 오른 날 한 건만. 다만 그날 부합도가 비었는데(Ollama 오류 등) 다음 날 붙었으면 그 점수를 첫 기록에 옮긴다 — 학습 자료에서 빠지지 않게.
  const fresh = (p) => { const k = `${p.ticker}|${p.pivot}`; if (seen.has(k)) { const r0 = byKey.get(k); if (r0 && !r0.fit && p.fit) r0.fit = p.fit; return false; } seen.add(k); return true; };
  for (const f of jsonFiles(paths.watchlistDir)) {
    const w = readJson(f, null); if (!w) continue;
    const asOf = w.sessionDate || dayBefore(w.date);
    const fitOf = (p) => ({ fit: p.fit || null, regime: w.regime || null, setup: p.kind === 'post' ? 'post' : 'pre' });
    const add = (r) => { recs.push(r); byKey.set(`${r.ticker}|${r.pivot}`, r); };
    for (const p of (w.items || []).filter(fresh)) add({ src: 'cand', ...fitOf(p), ticker: p.ticker, asOf, price: p.price, pivot: p.pivot, stop: p.stopPre, grade: p.grade, kind: p.shadowOnly ? `그림자(${{ gradeC: '등급 C', far: '피벗에서 1~1.5 ADR' }[p.shadowBook] || p.shadowBook})` : '관심(매수 대상)' });
    for (const p of (w.others || []).filter(fresh)) add({ src: 'cand', ...fitOf(p), ticker: p.ticker, asOf, price: p.price, pivot: p.pivot, stop: p.stopPre, grade: p.grade, kind: p.kind === 'post' ? '이미 돌파' : `막힘: ${p.blocked || '미상'}` });
  }
  for (const f of jsonFiles(path.join(paths.root, 'state', 'ep-log'))) {
    const e = readJson(f, null); if (!e) continue;
    for (const x of e.items || []) recs.push({ src: 'ep', ticker: x.ticker, asOf: dayBefore(e.date), price: x.price, claude: x.category,
      laya: x.local && x.local.laya ? x.local.laya.category : null, nimble: x.local && x.local.nimble ? x.local.nimble.category : null });
  }
  const qqq = await barsOf('QQQ');
  const closeOn = (d, upTo) => { if (!qqq) return null; const b = upTo ? [...qqq].reverse().find((x) => barDateET(x.t) <= d) : qqq.find((x) => barDateET(x.t) === d); return b ? b.c : null; };
  const out = [];
  for (const r of recs) {
    const bars = await barsOf(r.ticker);
    if (!bars) { r.noBars = true; continue; }                          // 상장폐지 등 — 학습 자료엔 no_bars 로 남긴다(생존 편향 대비)
    for (const h of HORIZONS) {
      const s = scoreAt(bars, r, h);
      if (s.sessions < h) continue;                                   // 다 지난 것만
      const q0 = closeOn(r.asOf, true), q1 = closeOn(s.lastDate, false);
      out.push({ ...r, h, ...s, qqqPct: q0 && q1 ? round((q1 / q0 - 1) * 100, 1) : null });
    }
  }
  return { recs, out };
}
const avg = (a) => (a.length ? round(a.reduce((x, y) => x + y, 0) / a.length, 1) : null);
const hold = (n) => (n < MIN_SAMPLE ? ' · 판단 보류' : '');
const groupRows = (rows, key) => { const g = {}; for (const x of rows) { const k = `${key(x)} · ${x.h}세션`; (g[k] = g[k] || []).push(x); } return g; };
const statOf = (a) => { const q = a.map((x) => x.qqqPct).filter((v) => v != null), rs = a.filter((x) => x.r != null).map((x) => x.r);
  return { n: a.length, broke: a.filter((x) => x.broke).length, ret: avg(a.map((x) => x.retPct)), qqq: avg(q),
    excess: avg(a.filter((x) => x.qqqPct != null).map((x) => x.retPct - x.qqqPct)), r: rs.length ? avg(rs) : null, rN: rs.length }; };
const tbl = (title, rows, key) => {
  const g = groupRows(rows, key);
  if (!Object.keys(g).length) return [];
  return [`**${title}**`, '', '| 구분 | 건수 | 피벗 돌파 | 평균 수익률 | 같은 기간 QQQ | 대략 R(돌파분) |', '|---|---:|---:|---:|---:|---:|',
    ...Object.entries(g).sort().map(([k, a]) => { const s = statOf(a);
      return `| ${k} | ${s.n}${hold(s.n)} | ${s.broke} | ${s.ret}% | ${s.qqq ?? '—'}% | ${s.rN ? `${s.r}R (${s.rN})` : '—'} |`; }), ''];
};

// ── 서준 후보 부합도 (Nimble·Laya) 채점 · 학습 자료 · 성적표 (2026-10-26) ──
//   구간은 질문 버전(SETUP_Q_V)에 묶어 고정 — 매주 바뀌는 3등분을 쓰지 않는다. 돌파 전 후보만(이미 돌파한 후보는 R·돌파가 성립하지 않는다).
const FIT_V = require('./lib/local-judge').SETUP_Q_V;
const fitBand = (v) => (v == null ? null : v < 1.5 ? '낮음' : v < 2.5 ? '중간' : '높음');
const RETRAIN = { rows: 1000, perRegime: 100 };
function fitRows(out) { return out.filter((x) => x.src === 'cand' && x.setup === 'pre' && x.fit && x.fit.v === FIT_V); }
// 화면에 보일 모델 — 채점 30건 이상인 "높음" 묶음 중 1주 초과수익이 가장 큰 모델. 없으면 nimble.
function pickShow(rows) {
  let best = null;
  for (const m of ['nimble', 'laya']) {
    const a = rows.filter((x) => x.h === 5 && x.fit[m] && fitBand(x.fit[m].fit) === '높음' && x.qqqPct != null);
    if (a.length < MIN_SAMPLE) continue;
    const e = avg(a.map((x) => x.retPct - x.qqqPct));
    if (!best || e > best.excess) best = { model: m, excess: e, n: a.length };
  }
  return best ? best.model : 'nimble';
}
function fitSection(out) {
  const rows = fitRows(out);
  const L = ['### 서준 후보 쿨라매기 부합도 (Nimble·Laya, 검증 전 — 참고)', ''];
  if (!rows.length) return { L: [...L, '- 부합도가 붙은 후보 중 5세션이 다 지난 것이 아직 없다.', ''], rows, table: [] };
  const key = (m) => (x) => `${x.regime || '?'} · ${m === 'nimble' ? 'Nimble' : 'Laya'} ${fitBand(x.fit[m] && x.fit[m].fit) || '점수 없음'}`;
  L.push(...tbl('Nimble 부합도별', rows, key('nimble')), ...tbl('Laya 부합도별', rows, key('laya')),
    ...tbl('등급 안에서 Nimble 부합도 (부합도가 등급을 되풀이하는지)', rows, (x) => `등급 ${x.grade || '?'} · ${fitBand(x.fit.nimble && x.fit.nimble.fit) === '높음' ? '높음' : '그 외'}`),
    ...tbl('Nimble 경고(redFlag ≥ 0.5)', rows, (x) => `경고 ${x.fit.nimble && x.fit.nimble.redFlag != null ? (x.fit.nimble.redFlag >= 0.5 ? '예' : '아니오') : '?'}`),
    ...tbl('전체 (비교 기준)', rows, () => '전체'));
  L.push('- 같은 기간에 겹치는 후보가 많아 실제 독립 표본은 건수보다 적다. 30건 미만 칸은 판단 보류.', '');
  const table = Object.entries(groupRows(rows, key('nimble'))).filter(([k]) => /5세션$/.test(k)).map(([k, a]) => ({ key: k, ...statOf(a) }));
  return { L, rows, table };
}
// 학습 자료 — 키 티커|피벗 → 기록 하나. 5·10·21세션이 지나는 대로 같은 기록에 결과를 채운다(덧붙이기만 하면 중복이 생긴다).
//   up1w(주 정답) = 5세션 수익률 > 같은 기간 QQQ. QQQ 가 없으면 null(false 가 아니다).
function updateSetups(map, recs, out, todayStr) {
  let added = 0, filled = 0;
  for (const r of recs) {
    if (r.src !== 'cand' || !r.fit || r.fit.v !== FIT_V) continue;
    const k = `${r.ticker}|${r.pivot}`;
    if (!map[k]) { map[k] = { ticker: r.ticker, pivot: r.pivot, sessionDate: r.asOf, setup: r.setup, kind: r.kind, grade: r.grade, regime: r.regime, fit: r.fit, out: {} }; added++; }
    const row = map[k];
    if (r.noBars && !row.out[5] && Date.parse(todayStr) - Date.parse(r.asOf) > 14 * 864e5) row.reason = 'no_bars';
    for (const x of out) {
      if (x.src !== 'cand' || x.ticker !== r.ticker || x.pivot !== r.pivot || row.out[x.h]) continue;
      row.out[x.h] = { retPct: x.retPct, maxUpPct: x.maxUpPct, maxDownPct: x.maxDownPct, broke: x.broke, r: x.r, qqqPct: x.qqqPct }; filled++;
    }
    const lab = (h) => (row.out[h] && row.out[h].qqqPct != null ? row.out[h].retPct > row.out[h].qqqPct : null);
    row.up1w = lab(5); row.up2w = lab(10); row.up1m = lab(21);
  }
  return { added, filled };
}
function retrainStatus(map) {
  const v = Object.values(map).filter((x) => x.up1w != null);
  const red = v.filter((x) => x.regime === 'red').length, green = v.filter((x) => x.regime === 'green').length;
  return { ready: v.length >= RETRAIN.rows && red >= RETRAIN.perRegime && green >= RETRAIN.perRegime, have: v.length, need: RETRAIN.rows, red, green, perRegime: RETRAIN.perRegime };
}
function learnSection({ recs, out }) {
  const L = ['### 사지 않은 후보·재민 촉매 채점 (참고 — 규칙 변경은 30건 규칙으로만)', ''];
  const cand = out.filter((x) => x.src === 'cand'), ep = out.filter((x) => x.src === 'ep');
  L.push(`- 기록: 후보 ${recs.filter((x) => x.src === 'cand').length}건 · 재민 촉매 ${recs.filter((x) => x.src === 'ep').length}건 · 결과가 다 나온 것 ${out.length}건(10·21세션 따로 셈)`, '');
  L.push(...tbl('후보 종류·막힌 사유별', cand, (x) => x.kind), ...tbl('후보 등급별', cand, (x) => `등급 ${x.grade || '미상'}`));
  // 같은 기사·공시를 읽은 세 판정 — 분류마다 그 뒤 수익률이 얼마나 갈렸나. 분류가 결과를 잘 가를수록 칸 사이 차이가 크다
  if (ep.length) {
    L.push('**재민 촉매 분류별 — Claude · Laya · Nimble (같은 원문)**', '', '| 분류 · 기간 | Claude 건수 / 평균 | Laya 건수 / 평균 | Nimble 건수 / 평균 |', '|---|---|---|---|');
    for (const h of HORIZONS) for (let c = 1; c <= 6; c++) {
      const cell = (who) => { const a = ep.filter((x) => x.h === h && x[who] === c).map((x) => x.retPct); return a.length ? `${a.length}${hold(a.length)} / ${avg(a)}%` : '—'; };
      L.push(`| ${'①②③④⑤⑥'[c - 1]} · ${h}세션 | ${cell('claude')} | ${cell('laya')} | ${cell('nimble')} |`);
    }
    L.push('');
  }
  const both = recs.filter((x) => x.src === 'ep' && x.laya != null);
  if (both.length) L.push(`- 분류 일치: Laya ${both.filter((x) => x.laya === x.claude).length}/${both.length} · Nimble ${both.filter((x) => x.nimble === x.claude).length}/${recs.filter((x) => x.src === 'ep' && x.nimble != null).length} (Claude 기준)`);
  // 다온 보유 소식 — 표본이 작아(보유 1~2종목) 일치율만 본다
  const sums = Object.values(readJson(path.join(paths.cacheDir, 'holdings-summaries.json'), null) || {}).filter((x) => x.local && x.about);
  if (sums.length) for (const m of ['laya', 'nimble']) {
    const a = sums.filter((x) => x.local[m]);
    const flip = (t, side) => (side === 'short' && t !== 'neutral' ? (t === 'good' ? 'bad' : 'good') : t);   // Claude 는 포지션 기준, 로컬 모델은 주가 기준
    L.push(`- 다온 소식 ${m}: ${a.length}건 · 회사 기사 판단 일치 ${a.filter((x) => (x.local[m].about >= 0.5) === (x.about === 'yes')).length} · 호재/악재 일치 ${a.filter((x) => flip(x.local[m].tone, x.side) === x.claudeTone).length}`);
  }
  if (!out.length) L.push('- 10세션이 다 지난 기록이 아직 없다.');
  L.push('');
  return L;
}

async function main() {
  loadEnv();
  const dry = process.argv.includes('--dry');
  const rules = loadRules();
  const trades = readJson(path.join(paths.paperDir, 'trades.json'), { trades: [] }).trades;
  const equity = readJson(path.join(paths.paperDir, 'equity.json'), { series: [] }).series;
  const positions = readJson(path.join(paths.paperDir, 'positions.json'), { positions: [] }).positions;
  const main = trades.filter((t) => t.book === 'main');
  const all = paper.stats(main, { equity });
  const observe = main.length < MIN_SAMPLE;

  const L = [`## 주간 리뷰 ${today()} (규칙 v${rules.version})`, ''];
  L.push(observe
    ? `> **관찰 단계** — 끝난 거래 ${main.length}건 (기준 ${MIN_SAMPLE}건). 아래 숫자로 규칙을 바꾸지 않는다. 기록만 한다.`
    : `> 끝난 거래 ${main.length}건. 구간별 표본이 10건 미만인 줄은 참고만 한다.`, '');
  L.push(...HEAD, row('실제 규칙 (main)', all));
  for (const b of ['trail20', 'nextOpen', 'gradeC', 'far']) L.push(row({ trail20: '그림자: 20일선 트레일', nextOpen: '그림자: 다음 날 시가 진입', gradeC: '그림자: 등급 C', far: '그림자: 피벗에서 1~1.5 ADR' }[b], paper.stats(trades.filter((t) => t.book === b))));
  L.push('', `누적 ${all.equityPct ?? 0}% (계좌 대비) · 최대 낙폭 ${all.mdd ?? 0}% · 보유 중 ${positions.filter((p) => p.book === 'main').length}종목`, '');

  if (main.length) {
    const g = (f) => paper.groupStats(main, f);
    L.push(...table('등급별', g((t) => t.grade)));
    L.push(...table('규칙 버전별', g((t) => 'v' + t.ruleVersion)));
    L.push(...table('진입 시 시장', g((t) => t.regime)));
    L.push(...table('청산 사유', g((t) => t.why)));
    L.push(...table('거래량 페이스', g((t) => bucket(t.ctx && t.ctx.pace, [2, 3, 5], '×'))));
    L.push(...table('진입 시 이격(ADR)', g((t) => bucket(t.ctx && t.ctx.ext, [1, 2, 3]))));
    L.push(...table('진입 시각', g((t) => (t.ctx && t.ctx.orh ? `개장 ${t.ctx.orh === 5 ? '15분 안' : t.ctx.orh === 15 ? '15~60분' : '60분 이후'}` : null))));
    L.push(...table('넘은 기준선', g((t) => (t.ctx ? (t.ctx.levelIs === 'pivot' ? '피벗' : '장중 고가') : null))));
    L.push(...table('손절 기준', g((t) => (t.ctx ? { lod: '당일 저가', minStopAdr: '최소 거리로 벌림', stopAdr: '최대 거리로 당김' }[t.ctx.stopIs] : null))));
    L.push(...table('베이스 길이', g((t) => bucket(t.ctx && t.ctx.baseWeeks, [2, 4, 8], '주'))));
    L.push(...table('4팀 촉매', g((t) => (t.ctx ? (t.ctx.catalyst ? `분류 ${t.ctx.catalyst}` : '없음') : null))));
    L.push(...table('5팀 업종 흐름', g((t) => (t.ctx ? t.ctx.flow || '미상' : null))));
    const mfe = main.filter((t) => t.mfeR != null);
    if (mfe.length) L.push(`최대 이익폭 대비 실현: 평균 MFE ${round(mfe.reduce((s, t) => s + t.mfeR, 0) / mfe.length)}R → 평균 실현 ${all.avgR}R · 평균 MAE ${round(mfe.reduce((s, t) => s + t.maeR, 0) / mfe.length)}R`, '');
  }

  const reads = await scoreReads(readJson(paths.breakoutLog, { entries: [] }));
  if (reads.length) {
    L.push('### Claude 차트 소견 대조 (소견 이후 최대 10세션, 일봉)', '',
      '| 소견일 | 종목 | 소견 | 등급 | 피벗 | 지난 세션 | 피벗 돌파 | 소견 뒤 수익률 | 최대 상승 / 하락 | 돌파 뒤 수익률 |', '|---|---|---|:-:|---:|---:|---|---:|---|---:|');
    for (const r of reads) L.push(`| ${r.date} | ${r.ticker} | ${r.verdict} | ${r.grade || '—'} | ${r.pivot} | ${r.sessions} | ${r.sessions ? (r.broke ? r.brokeOn : '아직') : '—'} | ${r.sessions ? r.retPct + '%' : '—'} | ${r.sessions ? `${r.maxUpPct}% / ${r.maxDownPct}%` : '—'} | ${r.afterBreakPct != null ? r.afterBreakPct + '%' : '—'} |`);
    const done = reads.filter((r) => r.sessions >= 5);
    const by = {};
    for (const r of done) (by[r.verdict] = by[r.verdict] || []).push(r);
    L.push('');
    for (const [v, a] of Object.entries(by)) L.push(`- ${v}: ${a.length}건 · 피벗 돌파 ${a.filter((r) => r.broke).length}건 · 평균 수익률 ${round(a.reduce((s, r) => s + r.retPct, 0) / a.length, 1)}%`);
    if (!done.length) L.push('- 5세션 이상 지난 소견이 아직 없다.');
    L.push('', '틀린 소견(keep 인데 돌파 실패·하락, hold/drop 인데 돌파 후 상승)은 `docs/CLAUDE-NOTES.md` 에 다섯 줄 형식으로 남긴다.', '');
  }

  const learned = await scoreLearning();
  L.push(...learnSection(learned));
  const fs6 = fitSection(learned.out);
  L.push(...fs6.L);
  const setupsFile = path.join(paths.root, 'state', 'learn', 'setups.json');
  const setups = readJson(setupsFile, null) || {};
  const upd = updateSetups(setups, learned.recs, learned.out, today());
  const rt = retrainStatus(setups);
  L.push(`- 학습 자료(state/learn/setups.json): ${Object.keys(setups).length}건 · 이번 주 새로 ${upd.added} · 결과 채움 ${upd.filled} · 1주 정답 ${rt.have}/${rt.need}건 (빨간불 ${rt.red} · 초록불 ${rt.green}) — ${rt.ready ? '**재학습 가능**' : '재학습 조건 미충족'}`, '');

  console.log(L.join('\n'));
  if (!dry) {
    const f = path.join(paths.root, 'docs', 'STRATEGY-LOG.md');
    fs.appendFileSync(f, '\n' + L.join('\n') + '\n', 'utf8');
    say('SYSTEM', `docs/STRATEGY-LOG.md 에 붙였습니다`);
    require('./lib/util').writeJson(setupsFile, setups);                                   // 비어 있어도 만든다 — 리뷰 커밋 목록에 늘 있다
    require('./lib/util').writeWindowData(path.join(paths.dashboardData, 'fitscore.js'), 'FITSCORE_DATA', {
      updated: today(), v: FIT_V, show: pickShow(fs6.rows), scored5: fs6.rows.filter((x) => x.h === 5).length, table: fs6.table, retrain: rt });
    // 재학습 조건이 처음 채워진 주에 텔레그램 한 번 (사용자가 "재학습해" 하면 진행)
    const flag = path.join(paths.cacheDir, 'notified-retrain.json');
    if (rt.ready && !readJson(flag, null)) {
      const r = await require('./lib/notify').notify(`📚 부합도 학습 자료가 찼습니다 — 1주 정답 ${rt.have}건(빨간불 ${rt.red} · 초록불 ${rt.green}). Laya 재학습이 가능합니다. 원하시면 "재학습해"라고 말씀해 주세요.`);
      if (r.ok) require('./lib/util').writeJson(flag, { at: today() });
    }
  }
}

module.exports = { scoreReads, scoreAt, fitSection, updateSetups, retrainStatus, pickShow, fitBand };

if (require.main === module) main().catch((e) => { console.error('리뷰 오류:', e); process.exit(1); });
