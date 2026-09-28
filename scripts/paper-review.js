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

// Claude 소견 채점 — 소견을 쓴 날 이후 N 세션 동안 무슨 일이 있었나 (일봉)
async function scoreReads(log, horizon = 10) {
  const reads = (log.entries || []).filter((e) => (e.by || 'user') === 'claude' && e.at && e.at.pivot);
  const out = [];
  for (const e of reads) {
    const r = await fetchBarsCached(e.ticker, { range: '1y' });
    if (!r.ok) continue;
    const after = r.bars.filter((b) => barDateET(b.t) > e.at.asOf).slice(0, horizon);
    if (!after.length) { out.push({ ...e, sessions: 0 }); continue; }
    const bi = after.findIndex((b) => b.c > e.at.pivot);
    const hi = Math.max(...after.map((b) => b.h)), lo = Math.min(...after.map((b) => b.l));
    const last = after[after.length - 1].c;
    out.push({ date: e.date, ticker: e.ticker, verdict: e.verdict, grade: e.at.grade, pivot: e.at.pivot, price: e.at.price, sessions: after.length,
      broke: bi >= 0, brokeOn: bi >= 0 ? barDateET(after[bi].t) : null,
      retPct: round((last / e.at.price - 1) * 100, 1), maxUpPct: round((hi / e.at.price - 1) * 100, 1), maxDownPct: round((lo / e.at.price - 1) * 100, 1),
      afterBreakPct: bi >= 0 ? round((last / after[bi].c - 1) * 100, 1) : null });
  }
  return out;
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

  console.log(L.join('\n'));
  if (!dry) {
    const f = path.join(paths.root, 'docs', 'STRATEGY-LOG.md');
    fs.appendFileSync(f, '\n' + L.join('\n') + '\n', 'utf8');
    say('SYSTEM', `docs/STRATEGY-LOG.md 에 붙였습니다`);
  }
}

module.exports = { scoreReads };

if (require.main === module) main().catch((e) => { console.error('리뷰 오류:', e); process.exit(1); });
