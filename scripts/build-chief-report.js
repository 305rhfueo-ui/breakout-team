'use strict';
// LLM 워크플로 결과 → 검증 → 대시보드/리포트 병합.
//
// 흐름: Claude 가 워크플로를 실행해 state/llm-in/{date}.json 에 결과를 쓰면
//       이 스크립트가 verify-claims 로 출처를 검증한 뒤 dashboard/data/*.js 를 갱신한다.
//
// ⚠️ Node 산출물은 LLM 없이도 완결이다. 이 단계는 서술을 "덧입히는" 것이지 대체하지 않는다.
// ⚠️ 이월(carry-forward): run-breakout 이 TTL 안 종목의 지난 리서치를 team*.js 에 물려놓는다.
//    여기서는 오늘 새 결과가 있는 항목만 덮어쓰고, 나머지는 이월분을 그대로 둔다(researchedOn 표기).
//    독자는 금융 실무자다 — 리포트에는 실적표·증권사 리포트·8-K·촉매 근거·자금흐름 표를 원 수치 그대로 싣는다.

const path = require('path');
const fs = require('fs');
const { paths, loadEnv, today, readJson, writeJson, writeWindowData, say, coverageOf, round } = require('./lib/util');
const { verifyPayload } = require('./lib/verify-claims');
const { loadCache, saveCache, recordResearched, team4Eligible } = require('./lib/research-rotation');

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
  const done = ((t2 && t2.picks) || []).filter((p) => p.research && ['done', 'no_source'].includes(p.research.status));
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
  const failed = ((t2 && t2.picks) || []).filter((p) => p.research && p.research.status === 'failed');
  if (failed.length) S.push(`> ⚠️ 리서치 실패: ${failed.map((p) => p.ticker).join(', ')} — 다음 실행에서 우선 재시도합니다.`, '');
  const theme = t2 && t2.themes && (t2.themes.llm || t2.themes.llmCarried);
  if (theme && theme.leadingTheme) {
    const lt = theme.leadingTheme;
    S.push('### 테마 종합 (LLM)' + (theme.researchedOn ? dateTag(theme.researchedOn, dateStr) : ''), '');
    S.push(`**${lt.name}** (${lt.strength || ''}) — ${lt.tickers ? lt.tickers.join(', ') : ''}`, '', lt.plainKo || '', '');
    if (lt.why) S.push(lt.why, '');
    for (const st of (theme.subThemes || [])) S.push(`- **${st.name}** (${(st.tickers || []).join(', ')}) — ${st.plainKo || ''}${st.why ? ` ${st.why}` : ''}`);
    if (theme.crossCuttingDriver) S.push('', `공통 원인: ${theme.crossCuttingDriver}`);
    // 기간별 3세트 + 로테이션 (2026-09-07)
    if (theme.byPeriod) {
      S.push('', '**기간별 주도 테마 (해당 기간 상위 2% 안에서)**');
      for (const [k, label] of [['m1', '1개월'], ['m3', '3개월'], ['m6', '6개월']]) {
        const b = theme.byPeriod[k];
        if (!b) continue;
        S.push(`- ${label}: **${b.name}** (${b.strength || '—'}) — ${(b.tickers || []).join(', ') || '해당 없음'}${b.plainKo ? ` · ${b.plainKo}` : ''}`);
      }
    }
    if (theme.rotation) {
      const r = theme.rotation;
      S.push('', '**로테이션 (지속 · 신규 · 퇴조)**');
      S.push(`- 지속 주도: ${(r.persistent || []).join(', ') || '—'} · 신규 진입(1M): ${(r.newEntrants || []).join(', ') || '—'} · 퇴조(6M만): ${(r.fading || []).join(', ') || '—'}`);
      if (r.narrative) S.push('', r.narrative);
    }
    if (theme.sanitized && theme.sanitized.removed && theme.sanitized.removed.length) S.push('', `> 정제: Node 목록에 없어 제거한 티커 ${theme.sanitized.removed.length}개 (${theme.sanitized.removed.slice(0, 8).join(', ')})`);
    if (theme.caution) S.push('', `> ${theme.caution}`);
    S.push('');
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
  if (L4 && L4.sectorSignal) S.push(`섹터 신호: ${L4.sectorSignal}`, '');
  if (L4 && Array.isArray(L4.watchList) && L4.watchList.length) S.push(`관찰 목록: ${L4.watchList.join(', ')}`, '');
  const order = { 1: 0, 5: 1, 2: 2, 3: 3, 4: 4, 6: 5 };
  for (const i of items.slice().sort((a, b) => (order[a.catalyst.category] ?? 9) - (order[b.catalyst.category] ?? 9))) {
    const C = i.catalyst;
    S.push(`#### ${i.ticker} — ${C.isHighlight ? '★ ' : ''}${C.categoryName || `분류 ${C.category}`}${C.corrected ? ` (팩트체크가 ${C.originalCategory}→${C.category} 정정)` : ''}${dateTag(C.researchedOn, dateStr)}`);
    S.push(`VOL_X ${v(i.volx)} · 주간 ${v(i.volSurgeWk)} · 종가강도 ${v(i.clsPos)} · 52주% ${v(i.high52)} · 국면 ${i.congestion ? i.congestion.phaseKo : '—'}${C.confidence ? ` · 근거 충실도 ${C.confidence}` : ''}`);
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

function sectorSection(t5, dateStr) {
  const L5 = t5 && t5.llm;
  const inds = (L5 && L5.industries) || [];
  if (!inds.length) return null;
  const S = [];
  S.push('', '### 5팀 업종 강세 사유 (LLM) — 왜 강하고, 언제 꺾이나', '');
  const drv = { earnings: '실적', policy: '정책', macro: '매크로', technology: '기술 수요', commodity: '원자재 가격', rotation: '순환매', unknown: '불명' };
  const dur = { structural: '구조적', cyclical: '경기순환', short_term: '단기', unknown: '불명' };
  const sum = L5.summary;
  if (sum && sum.rotationView) {
    S.push(`**섹터 순환 종합**${L5.summaryResearchedOn ? dateTag(L5.summaryResearchedOn, dateStr) : ''}: ${sum.rotationView}`);
    if (sum.strongest) S.push(`- 가장 강한 업종: ${typeof sum.strongest === 'string' ? sum.strongest : `${sum.strongest.industry} — ${sum.strongest.why || ''}`}`);
    if (Array.isArray(sum.emerging) && sum.emerging.length) S.push(`- 부상: ${sum.emerging.join(' · ')}`);
    if (Array.isArray(sum.fading) && sum.fading.length) S.push(`- 퇴조: ${sum.fading.join(' · ')}`);
    if (sum.caution) S.push(`- 한계: ${sum.caution}`);
    S.push('');
  }
  for (const x of inds) {
    S.push(`#### ${x.industry}${dateTag(x.researchedOn, dateStr)} — 동인 ${drv[x.driver] || x.driver || '—'} · 지속성 ${dur[x.durability] || x.durability || '—'}${Array.isArray(x.keyStocks) && x.keyStocks.length ? ` · 핵심 종목 ${x.keyStocks.join(', ')}` : ''}`);
    if (x.lead) S.push('', x.lead);
    const cl = (x.whyStrong || []).filter((c) => c.evidence_level === 'sourced' && (c.sources || []).length);
    if (cl.length) {
      S.push('', '**왜 강한가**');
      for (const c of cl) {
        S.push(`- ${c.statement} ${srcLinks(c)}`);
        const q = firstQuote(c);
        if (q) S.push(`  > ${String(q).trim().replace(/\n+/g, ' ')}`);
      }
    } else S.push('', '**왜 강한가** — 검증을 통과한 근거가 없습니다');
    if (x.risk) S.push('', `**꺾일 조건**: ${x.risk}`);
    if (x.factcheck && x.factcheck.verdict && x.factcheck.verdict !== 'pass') S.push('', `> 팩트체크 ${x.factcheck.verdict}${(x.factcheck.removed || []).length ? ` · 제거 ${x.factcheck.removed.length}건` : ''}${x.factcheck.verdict === 'unchecked' ? ' — 이 업종의 주장은 검증되지 않았다' : ''}`);
    S.push('');
  }
  return S;
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
  for (const k of ['team1', 'team2', 'team4', 'team5', 'chief']) {
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
      for (const p of d.picks || []) {
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
      if (payload.team2.theme) {
        // 기간별·교차 티커를 Node 확정 목록과 교집합으로 정제한다 — 제거분은 숨기지 않고 sanitized 에 남긴다
        const th = { ...payload.team2.theme, researchedOn: dateStr };
        const removed = [];
        const keepOnly = (arr, allowed, label) => {
          if (!Array.isArray(arr)) return [];
          const ok = new Set(allowed || []);
          const out = [];
          for (const t of arr) { if (ok.has(t)) out.push(t); else removed.push(`${label}:${t}`); }
          return out;
        };
        const BPn = (d.themes && d.themes.byPeriod) || null, CRn = (d.themes && d.themes.cross) || null;
        if (th.byPeriod && BPn) for (const k of ['m1', 'm3', 'm6']) if (th.byPeriod[k]) th.byPeriod[k].tickers = keepOnly(th.byPeriod[k].tickers, BPn[k] && BPn[k].tickers, `byPeriod.${k}`);
        if (th.rotation && CRn) for (const k of ['persistent', 'newEntrants', 'fading']) th.rotation[k] = keepOnly(th.rotation[k], CRn[k], `rotation.${k}`);
        if (removed.length) { th.sanitized = { removed }; say('WARN', `2팀 테마종합: Node 목록에 없는 티커 ${removed.length}개 제거 — ${removed.slice(0, 8).join(', ')}`); }
        d.themes = { ...(d.themes || {}), llm: th, reusedFrom: reuse.team2 || null };
      }
      else if (d.themes && d.themes.llmCarried) d.themes = { ...d.themes, llm: d.themes.llmCarried };
      d.research_coverage = coverageOf({
        done, failed: failedCount, carried, total: (d.picks || []).length,
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
      let done = 0, failedCount = 0, carried = 0, ineligible = 0;
      const extra = {};
      for (const it of d.items || []) {
        const c = byTicker.get(it.ticker);
        if (c) { it.catalyst = { status: 'done', ...c, researchedOn: dateStr, carried: false }; done++; extra[it.ticker] = { cat: c.category }; }
        else if (failedSet.has(it.ticker)) {
          it.catalyst = { status: 'failed', note: 'LLM 촉매 분류 실패 (에이전트 오류) — 다음 실행에서 우선 재시도합니다' };
          failedCount++;
        } else if (it.catalyst && it.catalyst.status === 'done' && it.catalyst.carried) { done++; carried++; }
        else if (!team4Eligible(it)) { it.catalyst = { status: 'ineligible', note: 'Congestion 셋업이 없고 VOL_X < 3 — 촉매 조사 대상이 아닙니다' }; ineligible++; }
        else it.catalyst = { status: 'pending', note: '아직 조사하지 않았습니다 (순환 조사 대기)' };
      }
      recordResearched(rc, 'team4', [...byTicker.keys()], dateStr, extra);
      if (payload.team4.summary) d.llm = { ...payload.team4.summary, researchedOn: dateStr };
      else if (d.llmCarried) d.llm = d.llmCarried;
      d.reusedFrom = reuse.team4 || null;
      const byCategory = {};
      for (const it of d.items || []) if (it.catalyst && it.catalyst.status === 'done') byCategory[it.catalyst.category] = (byCategory[it.catalyst.category] || 0) + 1;
      d.byCategory = byCategory;
      d.research_coverage = coverageOf({
        done, failed: failedCount, carried, ineligible, ineligibleWhy: '셋업·거래량 기준 미달', total: (d.items || []).length,
        cap: (payload.team4.coverage || {}).cap ?? null,
        hint: '자금이 들어오는 업종 · 거래대금 급증 순으로 우선 조사합니다.',
      });
      writeWindowData(f, 'TEAM4_DATA', d);
      merged.push(`team4(촉매 ${done}${carried ? ` · 이월 ${carried}` : ''}${failedCount ? ` · 실패 ${failedCount}` : ''})`);
    }
  }

  if (payload.team5) {
    const f = path.join(paths.dashboardData, 'team5.js');
    const d = loadWindowData(f, 'TEAM5_DATA');
    if (d) {
      guardDate(d, '5팀');
      const fresh = (payload.team5.industries || []).map((x) => ({ ...x, researchedOn: dateStr, carried: false }));
      const freshKeys = new Set(fresh.map((x) => x.key));
      const prevInds = (d.llm && Array.isArray(d.llm.industries)) ? d.llm.industries : [];
      const carriedInds = prevInds.filter((x) => x.carried && !freshKeys.has(x.key));
      // 오늘 후보 업종 순서를 유지한다 (_args.json 의 team5args 후보 목록)
      const args = readJson(path.join(paths.llmInDir, '_args.json'), null);
      const order = ((args && args.team5args && args.team5args.industries) || []).map((x) => x.key);
      const all = [...fresh, ...carriedInds].sort((a, b) => (order.indexOf(a.key) === -1 ? 999 : order.indexOf(a.key)) - (order.indexOf(b.key) === -1 ? 999 : order.indexOf(b.key)));
      const extra = {};
      for (const x of fresh) extra[x.key] = { rankPct6: (((args && args.team5args && args.team5args.industries) || []).find((i) => i.key === x.key) || {}).rankPct?.m6 ?? null };
      recordResearched(rc, 'team5', fresh.map((x) => x.key), dateStr, extra);
      const summary = payload.team5.summary || (d.llm && d.llm.summary) || null;
      const summaryResearchedOn = payload.team5.summary ? dateStr : (d.llm && d.llm.summaryResearchedOn) || null;
      d.llm = { status: 'done', industries: all, summary, summaryResearchedOn, reusedFrom: reuse.team5 || null };
      const poolTotal = (args && args.team5args && args.team5args.poolTotal) || all.length;
      d.research_coverage = coverageOf({ done: all.length, carried: carriedInds.length, total: poolTotal, cap: (payload.team5.coverage || {}).cap ?? 6, unit: '업종' });
      writeWindowData(f, 'TEAM5_DATA', d);
      merged.push(`team5(업종 ${fresh.length}${carriedInds.length ? ` · 이월 ${carriedInds.length}` : ''})`);
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
    const t5 = loadWindowData(path.join(paths.dashboardData, 'team5.js'), 'TEAM5_DATA');
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
    for (const sec of [newsSection(t1, dateStr), researchSection(t2, dateStr), catalystSection(t4, dateStr), sectorSection(t5, dateStr)]) {
      if (sec) S.push(...sec);
    }
    let out = body.replace(/\s*$/, '') + '\n';
    if (S.length) {
      out += LLM_MARK + '\n' + S.join('\n');
      merged.push(`리포트.md(리서치 ${(t2 && t2.research_coverage && t2.research_coverage.done) || 0}종목 · 촉매 ${((t4 && t4.items) || []).filter((i) => i.catalyst && i.catalyst.status === 'done').length} · 업종 ${((t5 && t5.llm && t5.llm.industries) || []).length})`);
    }

    if (payload.chief) {
      const c = payload.chief;
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
        for (const [k, label] of [['team1', '1팀 시장환경'], ['team2', '2팀 종목선정'], ['team3', '3팀 추적'], ['team4', '4팀 EP·촉매'], ['team5', '5팀 주도섹터']]) {
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
    fs.writeFileSync(mdFile, out, 'utf8');
  }

  // ── 로테이션 캐시 저장 ──
  saveCache(rc, dateStr);
  const covered = { team2: Object.keys(rc.team2).length, team4: Object.keys(rc.team4).length, team5: Object.keys(rc.team5 || {}).length };
  say('SYSTEM', `로테이션 캐시: 2팀 누적 ${covered.team2}종목 · 4팀 누적 ${covered.team4}종목 · 5팀 누적 ${covered.team5}업종 조사됨`);

  // ── 에이전트 실패를 로그에 그대로 남긴다 ──
  const fails = [];
  for (const [k, label] of [['team1', '1팀'], ['team2', '2팀'], ['team4', '4팀'], ['team5', '5팀'], ['chief', '실장']]) {
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
  }
}

if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
module.exports = { main };
