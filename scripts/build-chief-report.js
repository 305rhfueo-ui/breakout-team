'use strict';
// LLM 워크플로 결과 → 검증 → 대시보드/리포트 병합.
//
// 흐름: Claude 가 워크플로를 실행해 state/llm-in/{date}.json 에 결과를 쓰면
//       이 스크립트가 verify-claims 로 출처를 검증한 뒤 dashboard/data/*.js 를 갱신한다.
//
// ⚠️ Node 산출물은 LLM 없이도 완결이다. 이 단계는 서술을 "덧입히는" 것이지 대체하지 않는다.

const path = require('path');
const fs = require('fs');
const { paths, loadEnv, today, readJson, writeJson, writeText, writeWindowData, say, round } = require('./lib/util');
const { verifyPayload } = require('./lib/verify-claims');

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

  // ── 1) 출처 검증 (환각 방어 2단계, LLM 무관) ──
  say('SYSTEM', '출처 검증 중 (URL 생존 확인)…');
  const { payload, report } = await verifyPayload(llm, { runDate: dateStr, check: process.env.SKIP_LINKCHECK !== '1' });
  say('SYSTEM', `검증: URL ${report.checked}개 · 생존 ${report.ok} · 미검증(봇차단) ${report.unverified} · 죽음 ${report.dead} · 근거없음 강등 ${report.stripped}`);
  if (report.removed.length) {
    const byReason = {};
    for (const r of report.removed) byReason[r.reason] = (byReason[r.reason] || 0) + 1;
    say('SYSTEM', `제거 사유: ${Object.entries(byReason).map(([k, v]) => `${k} ${v}`).join(' · ')}`);
  }

  // ── 2) 팀별 데이터에 병합 ──
  const merged = [];

  if (payload.team1) {
    const f = path.join(paths.dashboardData, 'team1.js');
    const d = loadWindowData(f, 'TEAM1_DATA');
    if (d) {
      d.news = { llm: true, ...payload.team1, verified: report };
      writeWindowData(f, 'TEAM1_DATA', d);
      merged.push('team1(뉴스)');
    }
  }

  if (payload.team2) {
    const f = path.join(paths.dashboardData, 'team2.js');
    const d = loadWindowData(f, 'TEAM2_DATA');
    if (d) {
      const byTicker = new Map((payload.team2.researched || []).map((x) => [x.ticker, x]));
      let done = 0;
      for (const p of d.picks || []) {
        const r = byTicker.get(p.ticker);
        if (r) {
          const sourced = (r.whyRose || []).filter((c) => c.evidence_level === 'sourced').length;
          p.research = { status: sourced ? 'done' : 'no_source', ...r };
          done++;
        } else {
          p.research = { status: 'pending', note: `LLM 리서치 대기 (상한 ${payload.team2.coverage ? payload.team2.coverage.cap : '?'} 초과)` };
        }
      }
      d.themes = { ...(d.themes || {}), llm: payload.team2.theme };
      // ⚠️ total 은 반드시 "전체 선정 종목 수"여야 한다.
      //    워크플로가 돌려주는 coverage.total 은 "그 실행에 넘긴 종목 수"라
      //    그대로 쓰면 6/6 처럼 전량 조사한 것으로 보인다(실제로는 54 중 6).
      //    상한 때문에 빠진 종목을 숨기지 않는 것이 이 시스템의 원칙이다.
      const totalPicks = (d.picks || []).length;
      d.research_coverage = {
        done, total: totalPicks,
        cap: (payload.team2.coverage || {}).cap ?? null,
        pending: Math.max(0, totalPicks - done),
        note: done < totalPicks
          ? `상한(${(payload.team2.coverage || {}).cap ?? '?'}) 때문에 ${totalPicks - done}종목은 아직 리서치 대기입니다. 캐시가 쌓이면 며칠 안에 전량 커버됩니다.`
          : '전 종목 리서치 완료',
      };
      writeWindowData(f, 'TEAM2_DATA', d);
      merged.push(`team2(리서치 ${done})`);
    }
  }

  if (payload.team4) {
    const f = path.join(paths.dashboardData, 'team4.js');
    const d = loadWindowData(f, 'TEAM4_DATA');
    if (d) {
      const byTicker = new Map((payload.team4.items || []).map((x) => [x.ticker, x]));
      let done = 0;
      for (const it of d.items || []) {
        const c = byTicker.get(it.ticker);
        if (c) { it.catalyst = { status: 'done', ...c }; done++; }
        else it.catalyst = { status: 'pending', note: 'LLM 촉매 분류 대기 (상한 초과)' };
      }
      d.llm = payload.team4.summary || null;
      d.byCategory = payload.team4.byCategory || d.byCategory;
      d.research_coverage = { done, total: (d.items || []).length, ...(payload.team4.coverage || {}) };
      writeWindowData(f, 'TEAM4_DATA', d);
      merged.push(`team4(촉매 ${done})`);
    }
  }

  if (payload.team5) {
    const f = path.join(paths.dashboardData, 'team5.js');
    const d = loadWindowData(f, 'TEAM5_DATA');
    if (d) {
      d.llm = { status: 'done', industries: payload.team5.industries || [], summary: payload.team5.summary || null };
      writeWindowData(f, 'TEAM5_DATA', d);
      merged.push(`team5(업종 ${(payload.team5.industries || []).length})`);
    }
  }

  if (payload.chief) {
    const f = path.join(paths.dashboardData, 'chief.js');
    const d = loadWindowData(f, 'CHIEF_DATA');
    if (d) {
      d.llm = { status: 'done', ...payload.chief, verified: report };
      writeWindowData(f, 'CHIEF_DATA', d);
      merged.push('chief(실장)');
    }
  }

  // ── 3) 마크다운 리포트에 실장 종합을 덧붙인다 ──
  const mdFile = path.join(paths.reportsDir, `${dateStr}-breakout.md`);
  if (payload.chief && fs.existsSync(mdFile)) {
    const c = payload.chief;
    const L = [];
    L.push('');
    L.push('---');
    L.push('');
    L.push('## 🧑‍💼 실장 종합 (LLM)');
    L.push('');
    L.push(`> **${c.headline || ''}**`);
    L.push('');
    L.push(c.marketVerdictKo || '');
    L.push('');
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
    fs.appendFileSync(mdFile, L.join('\n'), 'utf8');
    merged.push('리포트.md');
  }

  // 검증 리포트 보관
  writeJson(path.join(paths.llmInDir, `${dateStr}-verified.json`), { date: dateStr, report, payload });

  say('CHIEF', `병합 완료: ${merged.join(' · ') || '대상 없음'}`);
  say('SYSTEM', `대시보드: ${paths.dashboardHtml}`);

  // ── GitHub 반영 — 이걸 해야 Pages 웹사이트에 LLM 리서치가 올라간다 ──
  if (!process.argv.includes('--no-git')) {
    const { commitAndPush } = require('./update-github');
    const r = commitAndPush(dateStr, `LLM 리서치 병합 (${merged.join('·')})`);
    if (r.pushed) say('SYSTEM', '웹사이트: https://305rhfueo-ui.github.io/breakout-team/ (1~2분 뒤 반영)');
  }
}

if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
module.exports = { main };
