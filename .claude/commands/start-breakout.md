---
description: 쿨라매기 Break-out + Episodic Pivot 팀 시스템 실행 — 스크리닝·추적·촉매 분석 후 실장 리포트
argument-hint: "[light | full]  (기본 full)"
---

# start breakout

`breakout-team/` 의 팀 시스템(한별·도윤·수아·재민·서준 + 실장)을 실행한다. (2026-10-06 5팀 미르 제거) 사용자가 `start breakout`, `브레이크아웃 실행`,
`/start-breakout` 중 무엇으로 부르든 이 절차를 따른다.

REPO 경로: `~/AI/breakout-team`

## 최우선 원칙

1. **숫자는 Node 가 확정한다.** 스크리닝·TA·실적·차트 수치를 네가 직접 계산하거나 바꾸지 마라.
2. **근거 없으면 "근거 없음"이라고 그대로 쓴다.** 뉴스·촉매·상승 이유를 지어내지 마라.
3. **중간에 사용자에게 yes/no 를 묻지 마라.** 끝까지 자동으로 진행한다.
   (외부 공개 동작인 `gh repo create` 만 예외 — 그건 물어본다)

## 절차

### 0. 시작 전에

- `docs/CLAUDE-NOTES.md` 의 "지금 적용 중인 규칙"을 읽는다.
- **이 기계가 아침 스캔을 맡고 있으면 1번을 돌리지 않는다.** 판정: `launchctl list | grep -q com.breakout.daily` 가 참이고
  `state/watchlist/<오늘>.json` 이 있으면 07:10 작업이 이미 같은 일을 했다. 같은 날짜를 두 번 만들면 충돌한다.
  - 1번에서 "출력에서 읽어둔다"고 한 항목(RS 결측률 · QQQ 판정 · FINRA YoY · 2팀 퍼널 · 3팀 활성/배제 · 4팀 후보 · 차트확인 종목)은
    `~/Library/Logs/breakout-team/daily.log` 의 **마지막 실행 블록**에서 읽는다.
  - `⛔ start breakout 중단` 은 `throw` 라 표준오류로 나간다 — `daily.log` 가 아니라 **`daily.err.log`** 의 끝을 본다.
    오늘 자 `⛔` 가 있으면 1번을 돌린 것과 똑같이 **여기서 멈추고** 결측률·사유를 보고한다.
    (⛔ 로 멈춘 날은 오늘 watchlist 가 만들어지지 않으므로 아래 "오늘 파일이 없으면"에도 걸린다.)
  - 무인 실행(`deploy/macmini/run-claude-job.sh`)일 때: **응답의 첫 줄에 결론을 쓴다** — 새로 만들었는지, 이미 있어 건너뛰었는지,
    `⛔` 로 멈췄는지. 래퍼가 그 첫 줄을 텔레그램으로 그대로 보낸다.
  - 오늘 파일이 없으면(07:10 작업이 실패했거나 아직 안 돈 경우) 그때만 1번을 직접 돌린다.
- 다른 기계(PC)에서 돌리는 경우: 1번을 돌리지 말고 `git pull` 로 맥미니 결과를 받는다.

### 1. Node 파이프라인 (필수, 약 1분)

```bash
cd "~/AI/breakout-team"
node scripts/run-breakout.js
```

- 6팀(매매)이 여기서 **오늘 밤 관심 목록**을 만든다 (`[T6]` 줄). 피벗·예비 손절·비중이 같이 나온다.
  6팀은 LLM 이 아니다 — 숫자 규칙(`config/rules.json`)으로만 움직인다.

- `state/rs-snapshots` 가 비어 있다는 경고가 나오면 먼저 `node scripts/backfill-history.js` 를 1회 실행 (약 25초)
- **`⛔ start breakout 중단`** 이 찍히면(RS 결측률 >10% 또는 사이트 degraded) **여기서 멈춘다.** 워크플로를 띄우지 말고
  결측률·사유를 사용자에게 보고한다. 사용자가 강행을 원할 때만 `node scripts/run-breakout.js --force`.
- 출력에서 다음을 읽어둔다: RS 결측률 · QQQ 판정 · FINRA YoY · 2팀 퍼널 · 3팀 활성/배제 · 4팀 후보(150일선 위)·제외 수 · 차트확인 종목

`light` 인자가 주어지면 여기서 멈추고 결과만 보고한다.

### 2. LLM 리서치 (기본값 full)

`dashboard/data/*.js` 를 읽어 각 워크플로에 넘길 인자를 만든 뒤, **절대경로**로 실행한다.
(상대경로는 기준이 모호하다)

```bash
node scripts/prepare-llm-args.js        # 1·2·4팀 인자 → state/llm-in/_args.json (2팀 목록 테마 자료 _t2lists.json 포함)
node scripts/prepare-deepdive-args.js   # 6팀 심층 분석 인자 → state/llm-in/_t6args.json (차트 PNG 포함)
```

```
Workflow({ scriptPath: '<REPO>/scripts/workflows/team1-news.js',    args: {...} })
Workflow({ scriptPath: '<REPO>/scripts/workflows/team2-research.js', args: {...} })
Workflow({ scriptPath: '<REPO>/scripts/workflows/team4-catalyst.js', args: {...} })
Workflow({ scriptPath: '<REPO>/scripts/workflows/team6-deepdive.js', args: {...} })   ← 관심 종목이 있을 때만
```

⚠️ **2·4팀 인자는 인라인으로 붙여넣지 마라.** `prepare-llm-args.js` 가
`state/llm-in/_t2/{TICKER}.json` · `_t2lists.json` · `_t4/{TICKER}.json` 로 무거운 자료를 빼놓고,
`_args.json` 의 `team2args.argsDir`·`team2args.listsFile` / `team4args.argsDir` 에 경로를 담는다.
그 경로를 그대로 넘기면 **에이전트가 자기 종목 파일만 Read** 한다.
(한 파일에 몰면 60종목 × 상세 = 580KB 라 에이전트의 Read 가 잘려 자료를 못 본다)

각 워크플로 파일 상단 주석에 필요한 args 형태가 적혀 있다. 요약:
- `team1-news`: `{ date, candidates: [뉴스 후보], context: { qqqKo, qqqPrice, ma10, ma20, ma50, finraKo, sectors, over150 } }`
  - candidates 는 `node -e "require('./scripts/data/news-rss').getMarketNews().then(r=>console.log(JSON.stringify(r.items)))"` 로 얻는다
- `team2-research`: `_args.json` 의 `team2args` 를 그대로 (picks 는 detail 없는 경량 · argsDir·listsFile 포함).
  종목 리서치(순환 20) + **도윤 5개 목록 테마**(거래대금 상위·RS 1/3/6개월·세 기간 공통 — 목록당 1명) 를 한다. 결과의 `listThemes`.
- `team4-catalyst`: `_args.json` 의 `team4args` 를 그대로 (argsDir 포함)
- `team6-deepdive` (2026-10-03): **`node scripts/prepare-deepdive-args.js`** 를 `prepare-llm-args.js` 다음에 실행하면
  `state/llm-in/_t6args.json` 과 `_t6/{TICKER}.json`·차트 PNG 가 만들어진다. 그 파일 내용을 args 로 그대로 넘긴다.
  `items` 가 비어 있으면(관심 종목 없음 · 전부 이월) 이 워크플로는 **띄우지 않는다.**
  서준이 고른 오늘 밤 관심 종목(≤10)을 종목당 오퍼스 1명이 뉴스·재무(CAN SLIM)·리스크·차트 관찰(쿨라매기 기준)로 조사한다.
  2026-10-08부터 **도윤 목록 종목도 하루 8개씩 소넷으로 순환**(거래대금 상위·세 기간 공통 먼저, 5거래일마다 갱신, `items[].source:'list'`).
  결과는 build-chief-report 가 서준 종목은 team6.js 에, 목록 종목은 team2.js 에 붙인다.
  기준은 `docs/기준-쿨라매기-차트.md`·`docs/기준-CANSLIM-재무.md` — 에이전트가 매번 읽는다.

4개(관심 종목이 있으면 심층 분석 포함)는 서로 독립이므로 **한 메시지에서 병렬로** 띄운다.

**조사 대상은 매일 순환하고, TTL(5거래일) 안에 조사한 대상은 건너뛴다.** `prepare-llm-args.js` 가
① 신규 ② TTL 경과 ③ 변화(오늘 돌파·차트확인 진입·최근 8-K 실적) 만 남기고, 나머지는
`run-breakout.js` 가 지난 결과를 이월해 둔다(`researchedOn` 표기). 그래서 **2팀 에이전트가 20명보다 훨씬 적어도
정상이다** — 실행 로그의 `조사 이유` / `이월` 줄로 확인한다. 2팀 조사 순서는 도윤 목록 우선(거래대금 상위·세 기간 공통 → 1개월 → 3·6개월)이다.
**4팀은 다르다(2026-09-16)**: 150일선 위 후보 전원이 대상이고 상한이 없다. 5거래일 안에 같은 자료(뉴스·8-K URL 집합)로
조사한 종목만 이월한다. 그래서 4팀 에이전트는 하루 20~30명이 정상이다.
(2026-09-03 감사: 이 로직이 없을 때 2팀 68%·5팀 87%가 TTL 안 재조사였다 — 하루 약 300만 토큰의 절반)

**에이전트가 죽으면 워크플로가 1회 자동 재시도한다.** 그래도 실패하면 결과에 `failed: [티커]`
(단일 에이전트 워크플로는 `error: 'agent_failed'`)가 담겨 오고, 화면에는 `대기`가 아니라
**`실패`** 로 표시된다. 수동으로 `resumeFromRunId` 를 돌릴 필요가 없다 —
다음 날 실행이 그 종목을 우선순위 맨 앞으로 올린다.

⚠️ **워크플로 자체가 죽어서(세션 429 등) `resumeFromRunId` 로 재개할 때는 처음과 똑같은 `args` 를 다시 넘겨야 한다.**
args 없이 재개하면 스크립트가 빈 입력으로 재실행돼 캐시가 하나도 안 맞고
`{date:"today", items:[]}` 같은 빈 결과가 오류 없이 나온다 (2026-09-07 실제 발생).
그래서 워크플로를 띄우기 전에 팀별 args 를 scratchpad 에 `team2args.json` 등으로 저장해 둔다.
아직 돌고 있는 run 은 `TaskStop` 으로 먼저 멈춰야 같은 runId 로 재개할 수 있다.

### 3. 실장 종합

먼저 실장 인자를 **오늘 날짜로 새로 조립한다.** 1·2·4팀 결과 파일을 전부 넘긴다
(각 워크플로 결과를 `state/llm-in/_out/{team}.json` 에 저장해 두고 그 경로를 쓴다).

```bash
node scripts/prepare-chief-args.js --team1=state/llm-in/_out/team1.json --team2=state/llm-in/_out/team2.json --team4=state/llm-in/_out/team4.json
```

(`--team6` 은 없다 — **실장은 심층 분석을 받지 않는다.** 차트 관찰이 실장 판정으로 새지 않게 하기 위해서다.)

이게 `state/llm-in/_chiefargs.json` 을 만든다 — `_args.json` 의 팀 요약(도윤 5개 목록 포함),
1·2·4팀 LLM 결과(이월분·목록 테마 포함), 그리고 Node 가 센 개수
(`llmResearchedCount` 등). ⚠️ `--team2/--team4` 를 빼면 실장이 "상승 이유 조사 안 됨"이라고 오보한다(2026-08-20 실제 발생).
⚠️ **이 단계를 건너뛰면 지난 실행분 인자가 그대로 남아 실장이 옛날 판정을 보고한다** (2026-08-11 실제 발생).

그 다음 실장을 띄운다. 인자가 20KB 를 넘으므로 **파일 경로로 넘긴다** —
객체로 인라인하면 프롬프트에서 뒤쪽 자료가 잘린다.

```
Workflow({ scriptPath: '<REPO>/scripts/workflows/chief-report.js',
           args: { date, argsFile: '<REPO>/state/llm-in/_chiefargs.json' } })
```

### 4. 검증 + 병합

결과를 하나로 합쳐 `state/llm-in/{YYYY-MM-DD}.json` 에 저장한 뒤 (키: `team1`·`team2`·`team4`·`chief`, 심층 분석을 띄웠으면 `team6` 도):

```bash
node scripts/build-chief-report.js
```

이 스크립트가 **모든 출처 URL 에 실제 HTTP 요청을 보내** 죽은 링크를 제거하고,
근거가 사라진 주장은 "근거 없음"으로 강등한다. 그 뒤 대시보드와 리포트에 병합한다.
리포트 md 맨 위에는 **📌 오늘의 요약** 절이 자동 생성된다(Node 숫자 조립, LLM 없음) — §5 채팅 보고는 이 절과 같은 순서로 한다.

`build-chief-report.js` 가 병합 직후 **자동으로 커밋 + push** 하므로
공개 웹사이트 https://305rhfueo-ui.github.io/breakout-team/ 가 1~2분 뒤 갱신된다.
push 를 원하지 않으면 `node scripts/build-chief-report.js --no-git`.

### 5. 보고

사용자에게 한국어로 보고한다. **독자는 주식 투자를 하는 일반인이다**(2026-10-02 사용자 결정) — 짧게, 결론부터,
핵심 숫자만 단위·기간을 붙여 쓰고 지표 이름(VOL_X·d50 등)은 뜻으로 풀어 쓴다. 반드시 포함할 것:
- ⚠️ `barsNotice`(야후 봉 누락·세션 불일치)·`dataNotice`(150일선 오염)가 있으면 맨 앞에
- RS 결측률 x.x% (빈 행 b/t) — `--force` 강행이었다면 그 사실도
- 🚦 시장 판정 (QQQ 쿨라매기 + FINRA 마진부채) — 🔴 면 흐리지 말고 그대로 전달
- 2팀 **5개 목록** — 거래대금 상위 20의 공통 업종·테마, RS 1/3/6개월 상위 2% 개수, 세 기간 공통 종목
  (공통 업종·테마가 없으면 "없음"이라고). 사이트 시장국면(`siteCondition`)은 QQQ 판정과 병기
- 3팀 오늘 배제된 종목과 사유, 7주 고점 상향 마감 종목(돌파봉 거래량 확인 수)
- 4팀 ①어닝서프라이즈 ⑤산업돌파 하이라이트
- 💹 **6팀 오늘 밤 관심 종목** — 종목마다 등급 · 피벗(현재가에서 몇 %) · 예비 손절 · 리스크/주 · 비중 · 뺀 종목과 이유.
  모의 보유·어젯밤 체결·성적이 있으면 같이. 등급을 추천 강도처럼 말하지 마라(`/team6` 의 보고 규칙).
  사용자가 원하면 `/chart-read` 로 관심 종목 차트를 그려 직접 읽고 소견을 붙인다
- 👁️ **오늘 차트를 봐야 할 종목**과 각각 왜 골랐는지(변동폭 축소·거래량 감소·저항선 근접) — 쉬운 말로
- 🔎 **심층 분석 N/M** (실패 종목 있으면 티커). 내용은 옮기지 않는다 — 특히 **차트 관찰 칸은 채팅 보고에 쓰지 않는다**
  (대시보드 서준 탭에서 본다. 실장·채팅 보고는 여전히 차트 모양을 판정하지 않는다)
- ⚠️ 차트 모양(횡보·베이스·돌파 실패·리테스트·눌림)은 **어느 팀도 판정하지 않는다** — `build-chief-report` 가
  `실장 차트 결론 어휘` WARN 을 찍으면 그 문장은 보고에 옮기지 말고 사용자에게 알린다
- 출처 검증 결과 (생존/미검증/제거 건수)
- 대시보드 경로 안내

리서치 커버리지가 상한에 걸려 일부 종목이 조사되지 않았으면 **그 사실을 숨기지 말고** 알린다.
- `research_coverage` 는 `done` / `failed` / `pending` 을 따로 센다. **셋을 뭉뚱그리지 마라.**
  `failed` 는 "조사하다 에이전트가 죽었다", `pending` 은 "상한 밖이라 아직 안 했다" — 다른 말이다.
- `build-chief-report.js` 가 `[WARN] 에이전트 실패(재시도 후에도): …` 를 찍으면 그 종목을 보고에 명시한다.

## 사용자가 "N팀" 이라고만 말하면

`/team1` ~ `/team4`·`/team6` 커맨드를 참조해 해당 팀만 상세 보고한다.
