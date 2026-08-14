'use strict';
// LLM 워크플로 결과 → 검증 → 대시보드/리포트 병합.
//
// 흐름: Claude 가 워크플로를 실행해 state/llm-in/{date}.json 에 결과를 쓰면
//       이 스크립트가 verify-claims 로 출처를 검증한 뒤 dashboard/data/*.js 를 갱신한다.
//
// ⚠️ Node 산출물은 LLM 없이도 완결이다. 이 단계는 서술을 "덧입히는" 것이지 대체하지 않는다.

const path = require('path');
const fs = require('fs');
const { paths, loadEnv, today, readJson, writeJson, writeWindowData, say, coverageOf } = require('./lib/util');
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
  // 주말·휴장일에는 RS 데이터가 갱신되지 않아 같은 숫자가 나온다. 그럴 때 팀별 리서치를
  // 다시 돌리면 같은 뉴스를 다시 읽을 뿐이라 이전 조사분을 재사용한다.
  // ⚠️ 재사용했다는 사실을 반드시 화면에 남긴다 — 오늘 새로 조사한 것처럼 보이면 안 된다.
  const reuse = {};
  for (const k of ['team1', 'team2', 'team4', 'team5', 'chief']) {
    const src = llm[k] && llm[k]._reusedFrom;
    if (src) reuse[k] = src;
  }
  if (Object.keys(reuse).length) {
    say('SYSTEM', `재사용: ${Object.entries(reuse).map(([k, v]) => `${k}←${v}`).join(' · ')} (시장 데이터가 그날과 동일)`);
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
  // 로테이션 캐시 — 오늘 실제로 조사한 티커를 기록해야 내일 다른 종목이 뽑힌다.
  const rc = loadCache();

  if (payload.team1) {
    const f = path.join(paths.dashboardData, 'team1.js');
    const d = loadWindowData(f, 'TEAM1_DATA');
    if (d) {
      d.news = { llm: true, ...payload.team1, verified: report, reusedFrom: reuse.team1 || null };
      writeWindowData(f, 'TEAM1_DATA', d);
      merged.push('team1(뉴스)');
    }
  }

  if (payload.team2) {
    const f = path.join(paths.dashboardData, 'team2.js');
    const d = loadWindowData(f, 'TEAM2_DATA');
    if (d) {
      const byTicker = new Map((payload.team2.researched || []).map((x) => [x.ticker, x]));
      // ⚠️ 조사를 "시도했다가 실패한 것"과 "상한 밖이라 아예 안 한 것"은 다르다.
      //    예전엔 둘 다 '상한 초과'로 표시돼 에이전트 오류가 숨겨졌다 (2026-08-11 BMRN).
      const failedSet = new Set(payload.team2.failed || []);
      let done = 0, failedCount = 0;
      for (const p of d.picks || []) {
        const r = byTicker.get(p.ticker);
        if (r) {
          const sourced = (r.whyRose || []).filter((c) => c.evidence_level === 'sourced').length;
          p.research = { status: sourced ? 'done' : 'no_source', ...r };
          done++;
        } else if (failedSet.has(p.ticker)) {
          p.research = { status: 'failed', note: 'LLM 리서치 실패 (에이전트 오류) — 다음 실행에서 우선 재시도합니다' };
          failedCount++;
        } else {
          p.research = { status: 'pending', note: '아직 조사하지 않았습니다 (순환 조사 대기)' };
        }
      }
      recordResearched(rc, 'team2', [...byTicker.keys()], dateStr);
      d.themes = { ...(d.themes || {}), llm: payload.team2.theme, reusedFrom: reuse.team2 || null };
      // ⚠️ total 은 반드시 "전체 선정 종목 수"여야 한다.
      //    워크플로가 돌려주는 coverage.total 은 "그 실행에 넘긴 종목 수"라
      //    그대로 쓰면 6/6 처럼 전량 조사한 것으로 보인다(실제로는 54 중 6).
      //    상한 때문에 빠진 종목을 숨기지 않는 것이 이 시스템의 원칙이다.
      d.research_coverage = coverageOf({
        done, failed: failedCount, total: (d.picks || []).length,
        cap: (payload.team2.coverage || {}).cap ?? null,
      });
      writeWindowData(f, 'TEAM2_DATA', d);
      merged.push(`team2(리서치 ${done}${failedCount ? ` · 실패 ${failedCount}` : ''})`);
    }
  }

  if (payload.team4) {
    const f = path.join(paths.dashboardData, 'team4.js');
    const d = loadWindowData(f, 'TEAM4_DATA');
    if (d) {
      const byTicker = new Map((payload.team4.items || []).map((x) => [x.ticker, x]));
      const failedSet = new Set(payload.team4.failed || []);
      let done = 0, failedCount = 0;
      for (const it of d.items || []) {
        const c = byTicker.get(it.ticker);
        if (c) { it.catalyst = { status: 'done', ...c }; done++; }
        else if (failedSet.has(it.ticker)) {
          it.catalyst = { status: 'failed', note: 'LLM 촉매 분류 실패 (에이전트 오류) — 다음 실행에서 우선 재시도합니다' };
          failedCount++;
        } else it.catalyst = { status: 'pending', note: '아직 조사하지 않았습니다 (순환 조사 대기)' };
      }
      recordResearched(rc, 'team4', [...byTicker.keys()], dateStr);
      d.llm = payload.team4.summary || null;
      d.reusedFrom = reuse.team4 || null;
      d.byCategory = payload.team4.byCategory || d.byCategory;
      // ⚠️ 예전엔 ...payload.team4.coverage 를 뒤에 펼쳐서 total 이 12(=상한)로 덮였다.
      //    40종목 중 12개만 조사했는데 화면엔 12/12 로 나왔다. 절대 되돌리지 말 것.
      d.research_coverage = coverageOf({
        done, failed: failedCount, total: (d.items || []).length,
        cap: (payload.team4.coverage || {}).cap ?? null,
        hint: '자금이 들어오는 업종 · 거래대금 급증 순으로 우선 조사합니다.',
      });
      writeWindowData(f, 'TEAM4_DATA', d);
      merged.push(`team4(촉매 ${done}${failedCount ? ` · 실패 ${failedCount}` : ''})`);
    }
  }

  if (payload.team5) {
    const f = path.join(paths.dashboardData, 'team5.js');
    const d = loadWindowData(f, 'TEAM5_DATA');
    if (d) {
      d.llm = { status: 'done', industries: payload.team5.industries || [], summary: payload.team5.summary || null, reusedFrom: reuse.team5 || null };
      writeWindowData(f, 'TEAM5_DATA', d);
      merged.push(`team5(업종 ${(payload.team5.industries || []).length})`);
    }
  }

  if (payload.chief) {
    const f = path.join(paths.dashboardData, 'chief.js');
    const d = loadWindowData(f, 'CHIEF_DATA');
    if (d) {
      d.llm = { status: 'done', ...payload.chief, verified: report, reusedFrom: reuse.chief || null, reuseAll: Object.keys(reuse).length ? reuse : null };
      writeWindowData(f, 'CHIEF_DATA', d);
      merged.push('chief(실장)');
    }
  }

  // ── 3) 마크다운 리포트 보강 ──
  const mdFile = path.join(paths.reportsDir, `${dateStr}-breakout.md`);
  const CHIEF_MARK = '\n---\n\n## 🧑‍💼 실장 종합 (LLM)';

  // 3-a) 종목별 리서치를 리포트에 싣는다.
  // ⚠️ 예전엔 마크다운에 개별 종목 리서치가 0줄이었다 — 회사 설명도, 상승 이유도, 출처도.
  //    .md 만 읽는 사람에게는 리서치 계층이 통째로 없는 것과 같았다.
  if (fs.existsSync(mdFile)) {
    const t2 = loadWindowData(path.join(paths.dashboardData, 'team2.js'), 'TEAM2_DATA');
    const done = ((t2 && t2.picks) || []).filter((p) => p.research && p.research.status === 'done');
    let md = fs.readFileSync(mdFile, 'utf8');

    // 커버리지 줄의 거짓 표기를 실제 상태로 교체
    if (t2 && t2.research_coverage) {
      const rc = t2.research_coverage;
      md = md.replace(/^- 리서치 커버리지: .*$/m,
        `- 리서치 커버리지: ${rc.done}/${rc.total}`
        + (rc.failed ? ` · 실패 ${rc.failed}` : '') + (rc.pending ? ` · 대기 ${rc.pending}` : ''));
    }

    if (done.length) {
      const S = [];
      S.push('', '### 리서치 완료 종목 — 어떤 회사이고, 왜 올랐나', '');
      for (const p of done) {
        const R = p.research;
        const nm = p.nameKo || p.nameEn || '';
        S.push(`#### ${p.ticker}${nm ? ` · ${nm}` : ''} — ${p.industry || p.sector}`);
        if (R.company) S.push('', R.company);
        if (R.lead) S.push('', R.lead);   // 리포트형: 리드문 → 근거 → 반대 근거
        const cl = (R.whyRose || []).filter((c) => c.evidence_level === 'sourced' && (c.sources || []).length);
        if (cl.length) {
          S.push('', '**왜 올랐나**');
          for (const c of cl) {
            const src = (c.sources || []).slice(0, 4)
              .map((s) => `[${s.publisher || '출처'}${s.date ? ' ' + String(s.date).slice(0, 10) : ''}](${s.url})`).join(' · ');
            S.push(`- ${c.statement} ${src}`);
            const q = (c.sources || []).map((s) => s && s.quote).find((x) => x && String(x).trim().length > 8);
            if (q) S.push(`  > ${String(q).trim().replace(/\n+/g, ' ')}`);
          }
        } else {
          S.push('', '**왜 올랐나** — 검증을 통과한 근거가 없습니다 (지어내지 않습니다)');
        }
        // 반대 근거는 비어 있는 게 정상이다 — 있을 때만 쓴다
        const cp = (R.counterpoint || []).filter((c) => c.evidence_level === 'sourced' && (c.sources || []).length);
        if (cp.length) {
          S.push('', '**반대 근거·한계**');
          for (const c of cp) {
            const src = (c.sources || []).slice(0, 4)
              .map((s) => `[${s.publisher || '출처'}${s.date ? ' ' + String(s.date).slice(0, 10) : ''}](${s.url})`).join(' · ');
            S.push(`- ${c.statement} ${src}`);
          }
        }
        const rev = R.estimateRevisions || {};
        const rc2 = (rev.claims || []).filter((c) => c.evidence_level === 'sourced');
        if (rc2.length) {
          const dirKo = { raised: '상향', lowered: '하향', mixed: '혼조', none: '조정 없음', unknown: '확인 안 됨' }[rev.direction] || '';
          S.push('', `**증권사 실적 전망치 ${dirKo}**`);
          for (const c of rc2) {
            const src = (c.sources || []).slice(0, 3)
              .map((s) => `[${s.publisher || '출처'}](${s.url})`).join(' · ');
            S.push(`- ${c.statement} ${src}`);
          }
        }
        S.push('');
      }
      const failed = ((t2 && t2.picks) || []).filter((p) => p.research && p.research.status === 'failed');
      if (failed.length) S.push(`> ⚠️ 리서치 실패: ${failed.map((p) => p.ticker).join(', ')} — 다음 실행에서 우선 재시도합니다.`, '');

      // 실장 절 앞에 끼워 넣는다. 재실행 시 중복되지 않게 기존 절을 먼저 걷어낸다.
      const RES_MARK = '\n### 리서치 완료 종목 — 어떤 회사이고, 왜 올랐나\n';
      const chiefAt = md.indexOf(CHIEF_MARK);
      const body = chiefAt >= 0 ? md.slice(0, chiefAt) : md;
      const tail = chiefAt >= 0 ? md.slice(chiefAt) : '';
      const resAt = body.indexOf(RES_MARK);
      const clean = resAt >= 0 ? body.slice(0, resAt) : body;
      fs.writeFileSync(mdFile, clean.replace(/\s*$/, '') + '\n' + S.join('\n') + tail, 'utf8');
      merged.push(`리포트.md(종목 ${done.length})`);
    } else {
      fs.writeFileSync(mdFile, md, 'utf8');
    }
  }

  if (payload.chief && fs.existsSync(mdFile)) {
    // ⚠️ append 라서 이 스크립트를 두 번 돌리면 실장 절이 두 번 붙는다 (2026-08-12 실제 발생).
    //    붙이기 전에 기존 실장 절을 잘라내 항상 한 벌만 남게 한다.
    const prev = fs.readFileSync(mdFile, 'utf8');
    const at = prev.indexOf(CHIEF_MARK);
    if (at >= 0) fs.writeFileSync(mdFile, prev.slice(0, at), 'utf8');

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

  // ── 로테이션 캐시 저장 ──
  // 이걸 안 쓰면 내일도 같은 종목만 조사한다 (예전 동작).
  saveCache(rc, dateStr);
  const covered = { team2: Object.keys(rc.team2).length, team4: Object.keys(rc.team4).length };
  say('SYSTEM', `로테이션 캐시: 2팀 누적 ${covered.team2}종목 · 4팀 누적 ${covered.team4}종목 조사됨`);

  // ── 에이전트 실패를 로그에 그대로 남긴다 ──
  const fails = [];
  for (const [k, label] of [['team1', '1팀'], ['team2', '2팀'], ['team4', '4팀'], ['team5', '5팀'], ['chief', '실장']]) {
    const p = payload[k];
    if (!p) continue;
    if (p.error === 'agent_failed') fails.push(`${label} 전체`);
    if (Array.isArray(p.failed) && p.failed.length) fails.push(`${label} ${p.failed.join(',')}`);
  }
  if (fails.length) say('WARN', `에이전트 실패(재시도 후에도): ${fails.join(' · ')} — 화면에 '실패'로 표시됩니다`);

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
