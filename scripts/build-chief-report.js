'use strict';
// LLM 워크플로 결과 → 검증 → 대시보드/리포트 병합.
//
// 흐름: Claude 가 워크플로를 실행해 state/llm-in/{date}.json 에 결과를 쓰면
//       이 스크립트가 verify-claims 로 출처를 검증한 뒤 dashboard/data/*.js 를 갱신한다.
//
// ⚠️ Node 산출물은 LLM 없이도 완결이다. 이 단계는 서술을 "덧입히는" 것이지 대체하지 않는다.
// ⚠️ 이월(carry-forward): run-breakout 이 TTL 안 종목의 지난 리서치를 team*.js 에 물려놓는다.
//    여기서는 오늘 새 결과가 있는 항목만 덮어쓰고, 나머지는 이월분을 그대로 둔다(researchedOn 표기).
//    독자는 금융 실무자다 — 리포트에는 실적표·증권사 리포트·8-K·촉매 근거를 원 수치 그대로 싣는다.

const path = require('path');
const fs = require('fs');
const { paths, loadEnv, today, readJson, writeJson, writeWindowData, say, coverageOf, round } = require('./lib/util');
const { chartVerdictLeaks } = require('./lib/chart-verdict');
const { verifyPayload } = require('./lib/verify-claims');
const { loadCache, saveCache, recordResearched } = require('./lib/research-rotation');

function loadWindowData(file, varName) {
  try {
    const src = fs.readFileSync(file, 'utf8');
    const m = src.match(new RegExp(`window\\.${varName}\\s*=\\s*([\\s\\S]*);\\s*$`));
    return m ? JSON.parse(m[1]) : null;
  } catch (e) { return null; }
}

function arg(name, def = null) {
  const p = process.argv.find((s) => s.startsWith(`--${name}=`));
  return p ? p.slice(name.length + 3) : def;
}

const v = (x, d = '—') => (x === null || x === undefined || Number.isNaN(x) ? d : x);
const fmtUsdM = (n) => (n == null ? '—' : (n / 1e6).toLocaleString('en-US', { maximumFractionDigits: 1 }));
const pct = (n) => (n == null ? '—' : `${n > 0 ? '+' : ''}${n}%`);
const srcLinks = (c, n = 4) => (c.sources || []).slice(0, n)
  .map((s) => `[${s.publisher || '출처'}${s.date ? ' ' + String(s.date).slice(0, 10) : ''}](${s.url})`).join(' · ');
const firstQuote = (c) => (c.sources || []).map((s) => s && s.quote).find((x) => x && String(x).trim().length > 8);
const dateTag = (on, todayStr) => (on && on !== todayStr ? ` (조사 ${on})` : '');

// ── 리포트 절 생성기 ──
function researchSection(t2, dateStr) {
  const pool = [...((t2 && t2.picks) || []), ...((t2 && t2.listPicks) || [])];   // 2026-10-06: 목록 전용 종목 포함
  const done = pool.filter((p) => p.research && ['done', 'no_source'].includes(p.research.status));
  if (!done.length) return null;
  const S = [];
  S.push('', '### 리서치 완료 종목 — 어떤 회사이고, 왜 올랐나', '');
  for (const p of done) {
    const R = p.research;
    const nm = p.nameKo || p.nameEn || '';
    S.push(`#### ${p.ticker}${nm ? ` · ${nm}` : ''} — ${p.industry || p.sector}${dateTag(R.researchedOn, dateStr)}${R.confidence ? ` · 근거 충실도 ${R.confidence}` : ''}`);
    if (R.company) S.push('', R.company);
    if (R.lead) S.push('', R.lead);
    // 원천 데이터 — SEC 4분기 실적표 (계산은 매일 되는데 리포트엔 0줄이었다)
    const fin = p.detail && p.detail.financials;
    if (fin && Array.isArray(fin.quarters) && fin.quarters.length) {
      S.push('', `**최근 4분기 실적 (SEC, 단위 M$${fin.profitLabel ? ` · ${fin.profitLabel}` : ''})**`, '');
      S.push(`| 분기 | 매출 | YoY | ${fin.profitLabel || '영업이익'} | YoY | 순이익 | YoY | ${fin.marginLabel || '영업이익률'} |`);
      S.push('|---|---:|---:|---:|---:|---:|---:|---:|');
      for (const q of fin.quarters.slice(0, 4)) {
        const y = q.yoy || {};
        S.push(`| ${q.periodEnd}${q.derived ? ' (유도)' : ''} | ${fmtUsdM(q.revenue)} | ${pct(y.revenue)} | ${fmtUsdM(q.profit)} | ${pct(y.profit)} | ${fmtUsdM(q.netIncome)} | ${pct(y.netIncome)} | ${q.margin != null ? q.margin + '%' : '—'} |`);
      }
      if (fin.source_url) S.push('', `출처: [SEC EDGAR](${fin.source_url})`);
    }
    const cl = (R.whyRose || []).filter((c) => c.evidence_level === 'sourced' && (c.sources || []).length);
    if (cl.length) {
      S.push('', '**왜 올랐나**');
      for (const c of cl) {
        S.push(`- ${c.statement} ${srcLinks(c)}`);
        const q = firstQuote(c);
        if (q) S.push(`  > ${String(q).trim().replace(/\n+/g, ' ')}`);
      }
    } else {
      S.push('', '**왜 올랐나** — 검증을 통과한 근거가 없습니다 (지어내지 않습니다)');
    }
    const cp = (R.counterpoint || []).filter((c) => c.evidence_level === 'sourced' && (c.sources || []).length);
    if (cp.length) {
      S.push('', '**반대 근거·한계**');
      for (const c of cp) S.push(`- ${c.statement} ${srcLinks(c)}`);
    }
    const rev = R.estimateRevisions || {};
    const rc2 = (rev.claims || []).filter((c) => c.evidence_level === 'sourced');
    const dirKo = { raised: '상향', lowered: '하향', mixed: '혼조', none: '조정 없음', unknown: '확인 안 됨' }[rev.direction] || '';
    const estLine = (p.cyTrend != null || p.upCount != null)
      ? ` — RS 사이트 컨센서스: 당해 ${v(p.cyTrend)}% / 차기 ${v(p.nyTrend)}% · 30일 상향/하향 ${v(p.upCount)}/${v(p.downCount)}` : '';
    if (rc2.length || estLine) {
      S.push('', `**증권사 실적 전망치 ${dirKo}**${estLine}`);
      for (const c of rc2) S.push(`- ${c.statement} ${srcLinks(c, 3)}`);
    }
    // 원천 데이터 — 국내 증권사 리포트 (팝업에만 있고 220자로 잘리던 것)
    const kr = p.detail && p.detail.krReports;
    if (kr && Array.isArray(kr.reports) && kr.reports.length) {
      S.push('', `**국내 증권사 리포트 (최근 12개월 ${kr.total ?? kr.reports.length}건 중 ${Math.min(kr.reports.length, 5)}건)**`);
      for (const r of kr.reports.slice(0, 5)) {
        S.push(`- ${r.date} ${r.broker}${r.analyst ? ` · ${r.analyst}` : ''} — ${String(r.title || '').replace(/^\[[^\]]*\]\s*/, '')}${r.pdfUrl ? ` [PDF](${r.pdfUrl})` : ''}`);
        if (r.summary) S.push(`  > ${String(r.summary).replace(/\s*-\s*/g, ' · ').replace(/^\s*·\s*/, '').trim()}`);
      }
    }
    // 원천 데이터 — 8-K 공시
    const fl = p.detail && p.detail.filings;
    if (Array.isArray(fl) && fl.length) {
      S.push('', `**SEC 8-K 공시 (최근 ${Math.min(fl.length, 6)}건)**`);
      for (const f of fl.slice(0, 6)) S.push(`- ${f.filingDate} ${(f.itemsKo || f.items || []).join(', ')}${f.isEarnings ? ' ★실적발표' : ''} [원문](${f.url})`);
    }
    if (R.upcomingCatalyst && (R.upcomingCatalyst.what || R.upcomingCatalyst.date)) {
      S.push('', `**다가올 촉매**: ${R.upcomingCatalyst.date || '일정 미확정'} — ${R.upcomingCatalyst.what || ''}`);
    }
    if (Array.isArray(R.themeTags) && R.themeTags.length) S.push('', `테마: ${R.themeTags.join(' · ')}`);
    if (R.factcheck && R.factcheck.verdict && R.factcheck.verdict !== 'pass') {
      S.push('', `> 팩트체크 ${R.factcheck.verdict}${(R.factcheck.removed || []).length ? ` · 제거 ${R.factcheck.removed.length}건` : ''}${R.factcheck.verdict === 'unchecked' ? ' — 이 종목의 주장은 검증되지 않았다' : ''}`);
    }
    S.push('');
  }
  const failed = pool.filter((p) => p.research && p.research.status === 'failed');
  if (failed.length) S.push(`> ⚠️ 리서치 실패: ${failed.map((p) => p.ticker).join(', ')} — 다음 실행에서 우선 재시도합니다.`, '');
  // 도윤 5개 목록의 AI 테마 (2026-10-06 — 예전 테마종합 대체)
  const theme = t2 && t2.themes && (t2.themes.llm || t2.themes.llmCarried);
  if (theme && Array.isArray(theme.lists) && theme.lists.length) {
    S.push('### 목록별 공통 테마 (LLM)' + (theme.researchedOn ? dateTag(theme.researchedOn, dateStr) : ''), '');
    for (const l of theme.lists) {
      S.push(`#### ${l.label || l.key}`);
      if (l.failed) { S.push('', '- ⚠️ 테마 분석 실패 — 다음 실행에서 다시', ''); continue; }
      if (l.narrative) S.push('', l.narrative);
      for (const ci of (l.commonIndustries || [])) S.push(`- 업종 **${ci.industry}** (${(ci.tickers || []).join(', ')}) — ${ci.why || ''}`);
      for (const th of (l.themes || [])) S.push(`- 테마 **${th.name}** (${(th.tickers || []).join(', ')}) — ${th.plainKo || ''}${th.why ? ` ${th.why}` : ''} ${srcLinks(th, 3)}`);
      if ((l.unexplained || []).length) S.push(`- 이유 확인 안 됨: ${l.unexplained.join(', ')}`);
      S.push('');
    }
    if (theme.sanitized && theme.sanitized.removed && theme.sanitized.removed.length) S.push(`> 정제: 목록에 없어 제거한 티커 ${theme.sanitized.removed.length}개 (${theme.sanitized.removed.slice(0, 8).join(', ')})`, '');
  }
  return S;
}

function newsSection(t1, dateStr) {
  const nw = t1 && t1.news;
  if (!nw || !nw.llm) return null;
  const S = [];
  S.push('', '### 1팀 시장 뉴스 (LLM)' + (nw.reusedFrom ? ` (${nw.reusedFrom} 재사용)` : ''), '');
  if (nw.marketNarrative) S.push(nw.marketNarrative, '');
  const impKo = { up: '▲', down: '▼', neutral: '●' };
  for (const d of (nw.digest || [])) {
    const src = (d.sources || []).slice(0, 2).map((s) => `[${s.publisher || '출처'}${s.date ? ' ' + String(s.date).slice(0, 10) : ''}](${s.url})`).join(' · ');
    S.push(`- ${impKo[d.impact] || '●'} **${d.headline}** ${src}`);
    if (d.easy) S.push(`  ${d.easy}`);
    if (d.whyMatters) S.push(`  영향: ${d.whyMatters}`);
  }
  if (Array.isArray(nw.keyRisks) && nw.keyRisks.length) {
    S.push('', '**핵심 리스크**');
    for (const r of nw.keyRisks) S.push(`- ${typeof r === 'string' ? r : JSON.stringify(r)}`);
  }
  S.push('');
  return S;
}

function catalystSection(t4, dateStr) {
  const items = ((t4 && t4.items) || []).filter((i) => i.catalyst && i.catalyst.status === 'done');
  if (!items.length) return null;
  const S = [];
  S.push('', '### 4팀 촉매 분류 (LLM) — 거래량이 왜 터졌나', '');
  const L4 = t4.llm || t4.llmCarried;
  if (L4 && L4.sectorSignal) S.push(`업종 신호: ${L4.sectorSignal}`, '');
  const order = { 1: 0, 5: 1, 2: 2, 3: 3, 4: 4, 6: 5 };
  for (const i of items.slice().sort((a, b) => (order[a.catalyst.category] ?? 9) - (order[b.catalyst.category] ?? 9))) {
    const C = i.catalyst;
    S.push(`#### ${i.ticker} — ${C.isHighlight ? '★ ' : ''}${C.categoryName || `분류 ${C.category}`}${C.corrected ? ` (팩트체크가 ${C.originalCategory}→${C.category} 정정)` : ''}${dateTag(C.researchedOn, dateStr)}`);
    S.push(`VOL_X ${v(i.volx)} · 주간 ${v(i.volSurgeWk)} · 종가강도 ${v(i.clsPos)} · 52주% ${v(i.high52)} · 150일선 ${i.aboveMa150 ? '위' : '아래'}${C.confidence ? ` · 근거 충실도 ${C.confidence}` : ''}`);
    if (C.company) S.push('', C.company);
    if (C.volumeExplanation) S.push('', C.volumeExplanation);
    const cl = (C.claims || []).filter((c) => c.evidence_level === 'sourced' && (c.sources || []).length);
    if (cl.length) {
      S.push('', '**근거**');
      for (const c of cl) {
        S.push(`- ${c.statement} ${srcLinks(c)}`);
        const q = firstQuote(c);
        if (q) S.push(`  > ${String(q).trim().replace(/\n+/g, ' ')}`);
      }
    } else S.push('', '**근거** — 검증을 통과한 출처가 없습니다 (⑥ 암묵적)');
    if (C.factcheck && C.factcheck.verdict && C.factcheck.verdict !== 'pass') S.push('', `> 팩트체크 ${C.factcheck.verdict}${(C.factcheck.removed || []).length ? ` · 제거 ${C.factcheck.removed.length}건` : ''}`);
    S.push('');
  }
  if (L4 && L4.caution) S.push(`> ${L4.caution}`, '');
  return S;
}

// ── 📌 오늘의 요약 — 리포트 md 맨 위에 붙는 한 화면짜리 요약 ──
// 채팅 보고(start-breakout.md §5)와 같은 순서다. LLM 을 부르지 않고 이미 계산된 숫자만 조립한다.
// 실장 산문은 headline 한 줄과 todayFocus 티커만 쓴다 — 차트 결론 어휘가 새는 경로를 늘리지 않는다.
const DIGEST_RE = /<!-- digest:start -->[\s\S]*?<!-- digest:end -->\n*/g;

function digestSection({ t1, t2, t3, t4, t6, c, chief, report, leaks }) {
  const L = ['<!-- digest:start -->', '## 📌 오늘의 요약', ''];
  const tickers = (arr) => (arr || []).map((x) => x.ticker).join(' · ');

  if (c && c.barsNotice) L.push(`> ${c.barsNotice.ko}`, '');
  if (t2 && t2.dataNotice) L.push(`> ${t2.dataNotice.ko}`, '');

  if (t1) {
    const ds = t1.data_source || {}, rq = ds.rsQuality, q = t1.qqq || {};
    L.push(`- **데이터**: RS 세션 ${v(ds.sessionDate)}`
      + (rq ? ` · RS 결측률 ${(rq.nullRate * 100).toFixed(1)}% (빈 행 ${rq.blank}/${rq.total})${rq.forced && rq.block ? ' — ⚠️ 상한 초과 강행' : ''}` : '')
      + (ds.siteCondition ? ` · 사이트 시장국면 ${ds.siteCondition}` : ''));
    L.push(`- **🚦 시장**: ${v(q.ko)} — QQQ ${v(q.price)} · MA10 ${v(q.ma10)} / MA20 ${v(q.ma20)} / MA50 ${v(q.ma50)}`
      + (q.slope10Pct != null ? ` · 기울기 10일 ${pct(q.slope10Pct)} / 20일 ${pct(q.slope20Pct)}` : '')
      + (q.goldenCrossDate ? ` · 골든크로스 ${q.goldenCrossDate}` : '') + (q.deathCrossDate ? ` · 데드크로스 ${q.deathCrossDate}` : ''));
    if (t1.finra && t1.finra.ko) L.push(`- **FINRA**: ${t1.finra.ko}`);
  }

  if (t2 && t2.stats) {
    const s = t2.stats, rc = t2.research_coverage;
    L.push(`- **2팀 퍼널**: ${s.universe} → 상위 2% ${s.unionTop} → ETF 제외 ${s.afterEtf} → ADR ${s.afterAdr} → 150일선 위 ${s.afterMa150}`
      + (rc ? ` · 리서치 ${rc.done}/${rc.total} (이월 ${rc.carried || 0} · 대기 ${rc.pending || 0} · 실패 ${rc.failed || 0})` : ''));
    const ind = ((t2.themes && t2.themes.byIndustry) || []).filter((x) => x.name !== '미분류').slice(0, 3).map((x) => `${x.name} ${x.count}종목(${x.sharePct}%)`);
    if (ind.length) L.push(`  - 업종 분포: ${ind.join(' · ')}`);
  }
  // 도윤 5개 목록 (2026-10-06) — 목록마다 개수와 공통 업종 한 줄
  if (t2 && t2.lists) {
    const ks = ['dollar', 'm1', 'm3', 'm6', 'all'].filter((k) => t2.lists[k]);
    L.push('- **2팀 목록**');
    for (const k of ks) {
      const l = t2.lists[k];
      L.push(`  - ${l.label} ${l.count}종목 → ${l.note ? `⚠️ ${l.note}` : l.industries.headline}`);
    }
  }

  if (t3) {
    const br = t3.breakouts || [];
    const ratio = (b) => `${b.ticker} ${v(b.breakVolRatio)}×`;
    const yes = br.filter((b) => b.volumeConfirmed), no = br.filter((b) => !b.volumeConfirmed);
    L.push(`- **3팀 7주 고점 상향 마감**: ${br.length}건 · 거래량 확인 ${yes.length}건${yes.length ? ` (${yes.map(ratio).join(' · ')})` : ''}`);
    if (no.length) L.push(`  - 거래량 미확인: ${no.map(ratio).join(' · ')}`);
    const dr = t3.dropped_today || [];
    L.push(`  - 오늘 배제: ${dr.length ? dr.map((d) => `${d.ticker}(${d.reason})`).join(' · ') : '없음'}`);
    if ((t3.reentryBlocked || []).length) L.push(`  - 재편입 차단: ${tickers(t3.reentryBlocked)}`);
  }

  if (t4) {
    const rc = t4.research_coverage, bc = t4.byCategory;
    L.push(`- **4팀 촉매**: 분석 ${v(t4.analyzed)}종목`
      + (rc ? ` · 조사 ${rc.done}/${rc.total} (이월 ${rc.carried || 0} · 대기 ${rc.pending || 0} · 실패 ${rc.failed || 0})` : '')
      + (bc ? ` · 분류 ${Object.entries(bc).map(([k, n]) => `${k}:${n}`).join(' ')}` : ''));
    for (const h of ((t4.llm && t4.llm.highlights) || []).filter((x) => x.category === 1 || x.category === 5)) {
      L.push(`  - ${h.category === 1 ? '①' : '⑤'} **${h.ticker}** — ${h.oneLine}`);
    }
    const none = (t4.items || []).filter((i) => i.catalyst && i.catalyst.category === 6);
    if (none.length) L.push(`  - ⑥ 근거 없음 ${none.length}종목: ${tickers(none)}`);
  }

  const d6 = require('./lib/team6').digestLine(t6);
  if (d6) L.push(...d6);

  if (c && c.counts) {
    const cc = Array.isArray(c.chartCheck) ? c.chartCheck : [];
    L.push(`- **👁️ 차트확인**: ${v(c.counts.chartCheckShown)}/${v(c.counts.chartCheck)}종목 — 차트 모양은 어느 팀도 판정하지 않는다. 직접 확인`);
    for (const x of cc) L.push(`  - ${x.ticker}(${x.score}) — ${(x.reasons || []).join(' · ')}`);
  }

  if (chief) {
    if (chief.headline) L.push(`- **실장**: ${chief.headline}`);
    if ((chief.todayFocus || []).length) L.push(`  - 관찰 종목: ${tickers(chief.todayFocus)}`);
  }

  if (report) L.push(`- **출처 검증**: URL ${report.checked}개 · 생존 ${report.ok} · 미검증(봇차단) ${report.unverified} · 죽음 ${report.dead} · 근거없음 강등 ${report.stripped}`);
  for (const w of leaks || []) L.push(`- ⚠️ 차트 결론 어휘 WARN: ${w} (보고에 옮기지 않음)`);

  L.push('', '<!-- digest:end -->');
  return L;
}

// 첫 '## ' 절 앞에 끼운다. 재실행해도 한 개만 남는다.
function insertDigest(md, lines) {
  const body = md.replace(DIGEST_RE, '');
  const block = lines.join('\n') + '\n\n';
  const at = body.indexOf('\n## ');
  return at < 0 ? body.replace(/\s*$/, '\n\n') + block : body.slice(0, at + 1) + block + body.slice(at + 1);
}

async function main() {
  loadEnv();
  const dateStr = arg('date', today());
  const inFile = path.join(paths.llmInDir, `${dateStr}.json`);
  const llm = readJson(inFile, null);

  if (!llm) {
    say('WARN', `LLM 결과 파일 없음: ${inFile}`);
    say('SYSTEM', 'Claude 가 워크플로를 실행해 이 파일을 먼저 만들어야 합니다. Node 산출물은 이미 완결돼 있습니다.');
    process.exit(0);
  }

  // ── 0) 재사용 표기 ──
  const reuse = {};
  for (const k of ['team1', 'team2', 'team4', 'team6', 'chief']) {
    const src = llm[k] && llm[k]._reusedFrom;
    if (src) reuse[k] = src;
  }
  if (Object.keys(reuse).length) {
    say('SYSTEM', `재사용: ${Object.entries(reuse).map(([k, val]) => `${k}←${val}`).join(' · ')} (시장 데이터가 그날과 동일)`);
  }

  // ── 1) 출처 검증 (환각 방어 2단계, LLM 무관) ──
  say('SYSTEM', '출처 검증 중 (URL 생존 확인)…');
  const { payload, report } = await verifyPayload(llm, { runDate: dateStr, check: process.env.SKIP_LINKCHECK !== '1' });
  say('SYSTEM', `검증: URL ${report.checked}개 · 생존 ${report.ok} · 미검증(봇차단) ${report.unverified} · 죽음 ${report.dead} · 근거없음 강등 ${report.stripped}`);
  if (report.removed.length) {
    const byReason = {};
    for (const r of report.removed) byReason[r.reason] = (byReason[r.reason] || 0) + 1;
    say('SYSTEM', `제거 사유: ${Object.entries(byReason).map(([k, val]) => `${k} ${val}`).join(' · ')}`);
  }

  // ── 2) 팀별 데이터에 병합 ──
  const merged = [];
  const rc = loadCache();
  // 산출물 날짜 확인 — run-breakout 이 실패한 날 어제 파일에 오늘 결과를 덮는 사고 방지
  const guardDate = (d, label) => {
    if (d && d.generated && d.generated !== dateStr) say('WARN', `${label} 데이터 날짜(${d.generated})가 오늘(${dateStr})과 다릅니다 — run-breakout 을 먼저 실행했는지 확인하세요`);
  };

  if (payload.team1) {
    const f = path.join(paths.dashboardData, 'team1.js');
    const d = loadWindowData(f, 'TEAM1_DATA');
    if (d) {
      guardDate(d, '1팀');
      d.news = { llm: true, ...payload.team1, verified: report, reusedFrom: reuse.team1 || null, researchedOn: dateStr };
      writeWindowData(f, 'TEAM1_DATA', d);
      merged.push('team1(뉴스)');
    }
  }

  if (payload.team2) {
    const f = path.join(paths.dashboardData, 'team2.js');
    const d = loadWindowData(f, 'TEAM2_DATA');
    if (d) {
      guardDate(d, '2팀');
      const byTicker = new Map((payload.team2.researched || []).map((x) => [x.ticker, x]));
      const failedSet = new Set(payload.team2.failed || []);
      let done = 0, failedCount = 0, carried = 0;
      const pool = [...(d.picks || []), ...(d.listPicks || [])];   // 2026-10-06: 목록 전용 종목도 같은 방식
      for (const p of pool) {
        const r = byTicker.get(p.ticker);
        if (r) {
          const sourced = (r.whyRose || []).filter((c) => c.evidence_level === 'sourced').length;
          p.research = { status: sourced ? 'done' : 'no_source', ...r, researchedOn: dateStr, carried: false };
          done++;
        } else if (failedSet.has(p.ticker)) {
          p.research = { status: 'failed', note: 'LLM 리서치 실패 (에이전트 오류) — 다음 실행에서 우선 재시도합니다' };
          failedCount++;
        } else if (p.research && ['done', 'no_source'].includes(p.research.status) && p.research.carried) {
          done++; carried++;                       // run-breakout 이 이월해 둔 지난 조사분 — 그대로 둔다
        } else {
          p.research = { status: 'pending', note: '아직 조사하지 않았습니다 (순환 조사 대기)' };
        }
      }
      recordResearched(rc, 'team2', [...byTicker.keys()], dateStr);
      // 도윤 5개 목록의 AI 테마 (2026-10-06). 티커는 그 목록에 실제로 있는 것만 남긴다 — 제거분은 sanitized 에 남긴다.
      if (Array.isArray(payload.team2.listThemes) && payload.team2.listThemes.length) {
        const removed = [];
        const lists = payload.team2.listThemes.map((lt) => {
          const L = d.lists && d.lists[lt.key];
          if (!L || lt.failed) return lt;
          const allow = new Set(L.items.map((i) => i.ticker));
          const keep = (arr, where) => (Array.isArray(arr) ? arr.filter((t) => (allow.has(t) ? true : (removed.push(`${lt.key}.${where}:${t}`), false))) : []);
          return { ...lt,
            commonIndustries: (lt.commonIndustries || []).map((c) => ({ ...c, tickers: keep(c.tickers, 'industry') })),
            themes: (lt.themes || []).map((th) => ({ ...th, tickers: keep(th.tickers, 'theme') })).filter((th) => th.tickers.length >= 2),
            unexplained: keep(lt.unexplained, 'unexplained') };
        });
        if (removed.length) say('WARN', `2팀 목록 테마: 목록에 없는 티커 ${removed.length}개 제거 — ${removed.slice(0, 8).join(', ')}`);
        d.themes = { ...(d.themes || {}), llm: { lists, researchedOn: dateStr, sanitized: removed.length ? { removed } : null }, reusedFrom: reuse.team2 || null };
      }
      else if (d.themes && d.themes.llmCarried) d.themes = { ...d.themes, llm: d.themes.llmCarried };
      d.research_coverage = coverageOf({
        done, failed: failedCount, carried, total: pool.length,
        cap: (payload.team2.coverage || {}).cap ?? null,
      });
      writeWindowData(f, 'TEAM2_DATA', d);
      merged.push(`team2(리서치 ${done}${carried ? ` · 이월 ${carried}` : ''}${failedCount ? ` · 실패 ${failedCount}` : ''})`);
    }
  }

  if (payload.team4) {
    const f = path.join(paths.dashboardData, 'team4.js');
    const d = loadWindowData(f, 'TEAM4_DATA');
    if (d) {
      guardDate(d, '4팀');
      const byTicker = new Map((payload.team4.items || []).map((x) => [x.ticker, x]));
      const failedSet = new Set(payload.team4.failed || []);
      // 자료 지문(evid) — prepare-llm-args 가 _args.json 의 team4args.items[] 에 넣어 둔 값을 캐시에 기록한다.
      // 다음 날 prepare-llm-args 가 이 값과 오늘 지문을 비교해 같으면 이월한다 (2026-09-16).
      const args4 = readJson(path.join(paths.llmInDir, '_args.json'), null);
      const evidByT = new Map((((args4 || {}).team4args || {}).items || []).map((x) => [x.ticker, x.evid || null]));
      let done = 0, failedCount = 0, carried = 0;
      const extra = {};
      for (const it of d.items || []) {
        const c = byTicker.get(it.ticker);
        if (c) { it.catalyst = { status: 'done', ...c, researchedOn: dateStr, carried: false }; done++; extra[it.ticker] = { cat: c.category, evid: evidByT.get(it.ticker) || null }; }
        else if (failedSet.has(it.ticker)) {
          it.catalyst = { status: 'failed', note: 'LLM 촉매 분류 실패 (에이전트 오류) — 다음 실행에서 우선 재시도합니다' };
          failedCount++;
        } else if (it.catalyst && it.catalyst.status === 'done' && it.catalyst.carried) { done++; carried++; }
        else it.catalyst = { status: 'pending', note: '아직 조사하지 않았습니다' };
      }
      recordResearched(rc, 'team4', [...byTicker.keys()], dateStr, extra);
      // 오늘 조사한 종목이 0이면 LLM 종합은 빈 입력을 보고 "데이터 없음"이라고 쓴 문구다 (2026-09-15 실측).
      // 그걸 이월된 지난 종합 위에 덮어쓰면 화면이 퇴행하므로 신규 결과가 있을 때만 받는다.
      const t4Summary = byTicker.size ? payload.team4.summary : null;
      if (t4Summary) d.llm = { ...t4Summary, researchedOn: dateStr };
      else if (d.llmCarried) d.llm = d.llmCarried;
      d.reusedFrom = reuse.team4 || null;
      const byCategory = {};
      for (const it of d.items || []) if (it.catalyst && it.catalyst.status === 'done') byCategory[it.catalyst.category] = (byCategory[it.catalyst.category] || 0) + 1;
      d.byCategory = byCategory;
      d.research_coverage = coverageOf({
        done, failed: failedCount, carried, total: (d.items || []).length,
        cap: (payload.team4.coverage || {}).cap ?? null,
        hint: '150일선 위 거래량 급증 종목 전원을 조사합니다. 뉴스·8-K 자료가 그대로면 지난 결과를 이월합니다.',
      });
      writeWindowData(f, 'TEAM4_DATA', d);
      merged.push(`team4(촉매 ${done}${carried ? ` · 이월 ${carried}` : ''}${failedCount ? ` · 실패 ${failedCount}` : ''})`);
    }
  }

  // 6팀 심층 분석 (2026-10-03) — 관심 종목 plans[].deep 에 붙인다. 실장에게는 넘기지 않는다(차트 관찰이 실장 판정으로 새지 않게).
  let deepT6 = null;
  if (payload.team6) {
    const f = path.join(paths.dashboardData, 'team6.js');
    const d = loadWindowData(f, 'TEAM6_DATA');
    if (d) {
      guardDate(d, '6팀');
      const byTicker = new Map((payload.team6.items || []).map((x) => [x.ticker, x]));
      const failedSet = new Set(payload.team6.failed || []);
      let done = 0, failedCount = 0, carried = 0;
      for (const p of d.plans || []) {
        if (!p.watch) continue;
        const r = byTicker.get(p.ticker);
        if (r) { p.deep = { status: 'done', ...r, researchedOn: dateStr, session: d.sessionDate || null, carried: false }; done++; }
        else if (failedSet.has(p.ticker)) {
          // 전날 분석이 이월돼 있으면 그걸 두고 실패만 표시한다
          if (p.deep && p.deep.status === 'done' && p.deep.carried) { p.deep.failedToday = true; done++; carried++; }
          else { p.deep = { status: 'failed', note: '심층 분석 실패 (에이전트 오류) — 다음 실행에서 다시 시도합니다' }; failedCount++; }
        } else if (p.deep && p.deep.status === 'done' && p.deep.carried) { done++; carried++; }
      }
      recordResearched(rc, 'team6', [...byTicker.keys()], dateStr);
      const watchN = (d.plans || []).filter((p) => p.watch).length;
      d.deep_coverage = coverageOf({ done, failed: failedCount, carried, total: watchN, cap: (payload.team6.coverage || {}).cap ?? 10 });
      writeWindowData(f, 'TEAM6_DATA', d);
      merged.push(`team6(심층 ${done - carried}${carried ? ` · 이월 ${carried}` : ''}${failedCount ? ` · 실패 ${failedCount}` : ''})`);
      deepT6 = d;
    }
  }

  if (payload.chief) {
    const f = path.join(paths.dashboardData, 'chief.js');
    const d = loadWindowData(f, 'CHIEF_DATA');
    if (d) {
      guardDate(d, '실장');
      d.llm = { status: 'done', ...payload.chief, verified: report, reusedFrom: reuse.chief || null, reuseAll: Object.keys(reuse).length ? reuse : null };
      writeWindowData(f, 'CHIEF_DATA', d);
      merged.push('chief(실장)');
    }
  }

  // ── 3) 마크다운 리포트 보강 ──
  const mdFile = path.join(paths.reportsDir, `${dateStr}-breakout.md`);
  const CHIEF_MARK = '\n---\n\n## 🧑‍💼 실장 종합 (LLM)';
  const LLM_MARK = '\n---\n\n## 📚 LLM 리서치 (출처 검증 통과분)';

  if (fs.existsSync(mdFile)) {
    const t1 = loadWindowData(path.join(paths.dashboardData, 'team1.js'), 'TEAM1_DATA');
    const t2 = loadWindowData(path.join(paths.dashboardData, 'team2.js'), 'TEAM2_DATA');
    const t4 = loadWindowData(path.join(paths.dashboardData, 'team4.js'), 'TEAM4_DATA');
    const t3 = loadWindowData(path.join(paths.dashboardData, 'team3.js'), 'TEAM3_DATA');
    const cNode = loadWindowData(path.join(paths.dashboardData, 'chief.js'), 'CHIEF_DATA');
    const leaks = payload.chief ? chartVerdictLeaks(payload.chief) : [];
    let md = fs.readFileSync(mdFile, 'utf8');

    if (t2 && t2.research_coverage) {
      const rcv = t2.research_coverage;
      md = md.replace(/^- 리서치 커버리지: .*$/m,
        `- 리서치 커버리지: ${rcv.done}/${rcv.total}` + (rcv.carried ? ` (이월 ${rcv.carried})` : '')
        + (rcv.failed ? ` · 실패 ${rcv.failed}` : '') + (rcv.pending ? ` · 대기 ${rcv.pending}` : ''));
    }

    // Node 본문 → [LLM 리서치 절] → [실장 절]. 재실행 시 두 절을 걷어내고 다시 붙인다.
    const cut = (s, mark) => { const at = s.indexOf(mark); return at >= 0 ? s.slice(0, at) : s; };
    let body = cut(cut(md, CHIEF_MARK), LLM_MARK);
    // 옛 형식(리서치 절이 마커 없이 붙어 있던 것)도 걷어낸다
    const OLD_RES = '\n### 리서치 완료 종목 — 어떤 회사이고, 왜 올랐나\n';
    body = cut(body, OLD_RES);

    const S = [];
    for (const sec of [newsSection(t1, dateStr), researchSection(t2, dateStr), catalystSection(t4, dateStr)]) {
      if (sec) S.push(...sec);
    }
    let out = body.replace(/\s*$/, '') + '\n';
    if (S.length) {
      out += LLM_MARK + '\n' + S.join('\n');
      merged.push(`리포트.md(리서치 ${(t2 && t2.research_coverage && t2.research_coverage.done) || 0}종목 · 촉매 ${((t4 && t4.items) || []).filter((i) => i.catalyst && i.catalyst.status === 'done').length})`);
    }

    if (payload.chief) {
      const c = payload.chief;
      for (const w of leaks) say('WARN', `⚠️ 실장 차트 결론 어휘: ${w} — 봉을 받지 않은 판정이다. 보고에 옮기지 마세요`);
      const L = [];
      L.push('', '---', '', '## 🧑‍💼 실장 종합 (LLM)', '');
      L.push(`> **${c.headline || ''}**`, '');
      L.push(c.marketVerdictKo || '', '');
      if (c.todayFocus && c.todayFocus.length) {
        L.push('### 오늘의 포커스');
        for (const f2 of c.todayFocus) L.push(`- **${f2.ticker}** — ${f2.reason}\n  - 대응: ${f2.action}`);
        L.push('');
      }
      if (c.teamSummaries) {
        L.push('### 팀별 요약');
        for (const [k, label] of [['team1', '1팀 시장환경'], ['team2', '2팀 종목선정'], ['team3', '3팀 추적'], ['team4', '4팀 EP·촉매']]) {
          if (c.teamSummaries[k]) L.push(`- **${label}**: ${c.teamSummaries[k]}`);
        }
        L.push('');
      }
      if (c.chartCheckNote) { L.push('### 👁️ 차트에서 확인할 것'); L.push(c.chartCheckNote); L.push(''); }
      if (c.tomorrowWatch) { L.push('### 내일 지켜볼 것'); L.push(c.tomorrowWatch); L.push(''); }
      if (c.caution) { L.push(`> ⚠️ ${c.caution}`); L.push(''); }
      L.push(`> 출처 검증: URL ${report.checked}개 중 생존 ${report.ok} · 미검증(봇차단) ${report.unverified} · 죽은 링크 제거 ${report.dead} · 근거없음 강등 ${report.stripped}`);
      if (report.removed && report.removed.length) {
        L.push('', '<details><summary>검증에서 제거된 출처</summary>', '');
        for (const r of report.removed.slice(0, 40)) L.push(`- ${r.reason}: ${r.url || r.title || ''}`);
        L.push('', '</details>');
      }
      out += (S.length ? '\n' : '') + L.join('\n');
      merged.push('리포트.md(실장)');
    }
    out = insertDigest(out, digestSection({ t1, t2, t3, t4, c: cNode, chief: payload.chief, report, leaks }));
    merged.push('리포트.md(요약)');
    fs.writeFileSync(mdFile, out, 'utf8');
  }

  // ── 로테이션 캐시 저장 ──
  saveCache(rc, dateStr);
  const covered = { team2: Object.keys(rc.team2).length, team4: Object.keys(rc.team4).length };
  say('SYSTEM', `로테이션 캐시: 2팀 누적 ${covered.team2}종목 · 4팀 누적 ${covered.team4}종목 조사됨`);

  // ── 에이전트 실패를 로그에 그대로 남긴다 ──
  const fails = [];
  for (const [k, label] of [['team1', '1팀'], ['team2', '2팀'], ['team4', '4팀'], ['team6', '6팀 심층'], ['chief', '실장']]) {
    const p = payload[k];
    if (!p) continue;
    if (p.error === 'agent_failed') fails.push(`${label} 전체`);
    if (Array.isArray(p.failed) && p.failed.length) fails.push(`${label} ${p.failed.join(',')}`);
  }
  if (fails.length) say('WARN', `에이전트 실패(재시도 후에도): ${fails.join(' · ')} — 화면에 '실패'로 표시됩니다`);

  // 검증 리포트 보관 — payload 복제본은 git 을 부풀리므로 report(제거 목록)만 남긴다
  writeJson(path.join(paths.llmInDir, `${dateStr}-verified.json`), { date: dateStr, report });

  say('CHIEF', `병합 완료: ${merged.join(' · ') || '대상 없음'}`);
  say('SYSTEM', `대시보드: ${paths.dashboardHtml}`);

  if (!process.argv.includes('--no-git')) {
    const { commitAndPush } = require('./update-github');
    const r = commitAndPush(dateStr, `LLM 리서치 병합 (${merged.join('·')})`);
    if (r.pushed) say('SYSTEM', '웹사이트: https://305rhfueo-ui.github.io/breakout-team/ (1~2분 뒤 반영)');
    // 심층 분석 요약 텔레그램 — 하루 한 번 (재실행 시 중복 금지, run-breakout 의 notified-watch 와 같은 방식)
    if (deepT6 && (deepT6.plans || []).some((p) => p.watch && p.deep)) {
      const nt = require('./lib/notify');
      const flag = path.join(paths.cacheDir, 'notified-deep.json');
      if (nt.configured() && (readJson(flag, {}).date !== dateStr)) {
        const res = await nt.notify(nt.deepMessage(deepT6));
        if (res.ok) { writeJson(flag, { date: dateStr }); say('T6', '심층 분석 요약을 텔레그램으로 보냈습니다'); }
        else say('WARN', `텔레그램 전송 실패: ${res.error}`);
      }
    }
  }
}

if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
module.exports = { main, digestSection, insertDigest };
