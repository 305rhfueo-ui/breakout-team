---
description: 쿨라매기 Break-out + Episodic Pivot 5팀 시스템 실행 — 스크리닝·추적·촉매 분석 후 실장 리포트
argument-hint: "[light | full]  (기본 full)"
---

# start breakout

`breakout-team/` 의 5팀 시스템을 실행한다. 사용자가 `start breakout`, `브레이크아웃 실행`,
`/start-breakout` 중 무엇으로 부르든 이 절차를 따른다.

REPO 경로: `c:\Users\305le\OneDrive\바탕 화면\클로드코드test\breakout-team`

## 최우선 원칙

1. **숫자는 Node 가 확정한다.** 스크리닝·TA·WRS·실적·차트 수치를 네가 직접 계산하거나 바꾸지 마라.
2. **근거 없으면 "근거 없음"이라고 그대로 쓴다.** 뉴스·촉매·상승 이유를 지어내지 마라.
3. **중간에 사용자에게 yes/no 를 묻지 마라.** 끝까지 자동으로 진행한다.
   (외부 공개 동작인 `gh repo create` 만 예외 — 그건 물어본다)

## 절차

### 1. Node 파이프라인 (필수, 약 10~20초)

```bash
cd "c:\Users\305le\OneDrive\바탕 화면\클로드코드test\breakout-team"
node scripts/run-breakout.js
```

- `state/rs-snapshots` 가 비어 있다는 경고가 나오면 먼저 `node scripts/backfill-history.js` 를 1회 실행 (약 25초)
- 출력에서 다음을 읽어둔다: QQQ 판정 · FINRA YoY · 2팀 퍼널 · 3팀 활성/배제 · 4팀 국면 · 차트확인 종목

`light` 인자가 주어지면 여기서 멈추고 결과만 보고한다.

### 2. LLM 리서치 (기본값 full)

`dashboard/data/*.js` 를 읽어 각 워크플로에 넘길 인자를 만든 뒤, **절대경로**로 실행한다.
(상대경로는 기준이 모호하다)

```
Workflow({ scriptPath: '<REPO>/scripts/workflows/team1-news.js',    args: {...} })
Workflow({ scriptPath: '<REPO>/scripts/workflows/team2-research.js', args: {...} })
Workflow({ scriptPath: '<REPO>/scripts/workflows/team4-catalyst.js', args: {...} })
Workflow({ scriptPath: '<REPO>/scripts/workflows/team5-sector.js',   args: {...} })
```

각 워크플로 파일 상단 주석에 필요한 args 형태가 적혀 있다. 요약:
- `team1-news`: `{ date, candidates: [뉴스 후보], context: { qqqKo, qqqPrice, ma10, ma20, ma50, finraKo, sectors, over150 } }`
  - candidates 는 `node -e "require('./scripts/data/news-rss').getMarketNews().then(r=>console.log(JSON.stringify(r.items)))"` 로 얻는다
- `team2-research`: `{ date, picks: TEAM2_DATA.picks (detail 포함), clusters: TEAM2_DATA.themes.clusters, cap: 20 }`
- `team4-catalyst`: `{ date, items: TEAM4_DATA.items, cap: 15 }`
- `team5-sector`: `{ date, industries: TEAM5_DATA.strictTop2.m6 + top10by6 상위, cap: 6 }`

4개는 서로 독립이므로 **한 메시지에서 병렬로** 띄운다.

**조사 대상은 매일 순환한다.** `prepare-llm-args.js` 가 ① 오래 안 본 종목 → ② 돈이 들어오는
업종 → ③ 지표 순으로 정렬하므로, 상한을 올리지 않아도 며칠이면 전량이 커버된다
(`state/research-cache.json` 이 기록). 실행 로그의 `조사 순서` 줄로 오늘 누가 뽑혔는지 확인한다.

**에이전트가 죽으면 워크플로가 1회 자동 재시도한다.** 그래도 실패하면 결과에 `failed: [티커]`
(단일 에이전트 워크플로는 `error: 'agent_failed'`)가 담겨 오고, 화면에는 `대기`가 아니라
**`실패`** 로 표시된다. 수동으로 `resumeFromRunId` 를 돌릴 필요가 없다 —
다음 날 실행이 그 종목을 우선순위 맨 앞으로 올린다.

### 3. 실장 종합

먼저 실장 인자를 **오늘 날짜로 새로 조립한다.** 5팀 결과 파일 경로를 넘긴다.

```bash
node scripts/prepare-chief-args.js --team5=<5팀 워크플로 출력파일>
```

이게 세 가지를 합쳐 `state/llm-in/_chiefargs.json` 을 만든다 —
`_args.json` 의 팀 요약, `chief.js` 의 `flowCross`(자금 유입 업종 × 그 안의 실제 종목),
그리고 5팀이 조사한 강세 근거.
⚠️ **이 단계를 건너뛰면 지난 실행분 인자가 그대로 남아 실장이 옛날 섹터 판정을 보고한다** (2026-08-11 실제 발생).

그 다음 실장을 띄운다. 인자가 20KB 를 넘으므로 **파일 경로로 넘긴다** —
객체로 인라인하면 프롬프트에서 `flowCross` 가 잘려 "돈이 몰리는 섹터의 강세 종목"이 사라진다.

```
Workflow({ scriptPath: '<REPO>/scripts/workflows/chief-report.js',
           args: { date, argsFile: '<REPO>/state/llm-in/_chiefargs.json' } })
```

### 4. 검증 + 병합

결과 5개를 하나로 합쳐 `state/llm-in/{YYYY-MM-DD}.json` 에 저장한 뒤:

```bash
node scripts/build-chief-report.js
```

이 스크립트가 **모든 출처 URL 에 실제 HTTP 요청을 보내** 죽은 링크를 제거하고,
근거가 사라진 주장은 "근거 없음"으로 강등한다. 그 뒤 대시보드와 리포트에 병합한다.

`build-chief-report.js` 가 병합 직후 **자동으로 커밋 + push** 하므로
공개 웹사이트 https://305rhfueo-ui.github.io/breakout-team/ 가 1~2분 뒤 갱신된다.
push 를 원하지 않으면 `node scripts/build-chief-report.js --no-git`.

### 5. 보고

사용자에게 한국어로 보고한다. 반드시 포함할 것:
- 🚦 시장 판정 (QQQ 쿨라매기 + FINRA 마진부채) — 🔴 면 흐리지 말고 그대로 전달
- 2팀 퍼널 숫자와 테마 (공통 테마가 없으면 "없음"이라고)
- 3팀 오늘 배제된 종목과 사유, 전고점 돌파 종목
- 4팀 ①어닝서프라이즈 ⑤산업돌파 하이라이트
- 👁️ **오늘 차트를 봐야 할 종목**과 각각 무엇을 확인할지
- 출처 검증 결과 (생존/미검증/제거 건수)
- 대시보드 경로 안내

리서치 커버리지가 상한에 걸려 일부 종목이 조사되지 않았으면 **그 사실을 숨기지 말고** 알린다.
- `research_coverage` 는 `done` / `failed` / `pending` 을 따로 센다. **셋을 뭉뚱그리지 마라.**
  `failed` 는 "조사하다 에이전트가 죽었다", `pending` 은 "상한 밖이라 아직 안 했다" — 다른 말이다.
- `build-chief-report.js` 가 `[WARN] 에이전트 실패(재시도 후에도): …` 를 찍으면 그 종목을 보고에 명시한다.

## 사용자가 "N팀" 이라고만 말하면

`/team1` ~ `/team5` 커맨드를 참조해 해당 팀만 상세 보고한다.
