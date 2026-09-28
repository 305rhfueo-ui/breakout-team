# breakout-team — Claude 작업 지침

쿨라매기 Break-out + Episodic Pivot 전략을 실행하는 6팀 + 실장 시스템.
1~5팀이 후보를 만들고, 6팀(매매)이 그걸 매수 계획·모의 거래로 바꾼다 (2026-09-28 추가).
기존 `../investment-agent-team/`(모의투자)와는 **별개 repo**이며 그쪽은 건드리지 않는다.

## 자연어 트리거 매핑

슬래시 없는 자연어는 자동 인식되지 않으므로 이 표대로 매핑한다.

| 사용자가 말하면 | 실행 |
|---|---|
| `start breakout`, `브레이크아웃 실행`, `브레이크아웃 돌려` | `/start-breakout` |
| `1팀`, `시장환경` | `/team1` |
| `2팀`, `종목선정` | `/team2` |
| `3팀`, `추적` | `/team3` |
| `4팀`, `EP`, `촉매` | `/team4` |
| `5팀`, `섹터`, `WRS` | `/team5` |
| `6팀`, `매매`, `매수 계획`, `오늘 뭐 사` | `/team6` |
| `차트 읽어줘`, `차트 분석` | `/chart-read` |
| `리뷰`, `주간 리뷰`, `모의투자 성적` | `/review` |
| `차트 볼 종목`, `오늘 뭐 봐야 해` | `/chart-check` |
| `XXX 돌파했어`, `XXX 배제해` | `/chart-check` 의 해당 절 |

## 최우선 원칙

1. **숫자는 Node 가 확정한다.** 스크리닝·TA·WRS·실적·차트 수치를 직접 계산하거나 바꾸지 마라.
   대시보드 데이터 파일에 있는 값을 그대로 전달한다.
2. **근거 없으면 "근거 없음"이라고 그대로 쓴다.** 뉴스·촉매·상승 이유를 지어내지 마라.
   `pending` / `no_source` / `판정불가` 상태를 임의로 채우지 마라.
3. **상한 때문에 빠진 종목을 숨기지 마라.** 리서치 커버리지를 항상 알린다.
4. **사용자가 최종 판단자다.** 단정적 매수 권유 대신 확인할 조건을 제시한다.
5. **독자는 재무·회계 전공의 금융 실무자다** (2026-09-03 기준 변경). 비유·초보자용 풀이를 쓰지 않고,
   원천 수치를 단위·기간과 함께 그대로 전달한다. 시스템 고유 지표(WRS·VOL_X·CLS_POS·F10d)만 처음 한 번 정의한다.

## 구조

```
scripts/
  run-breakout.js        메인 오케스트레이터 (LLM 0, 약 10~20초)
  backfill-history.js    히스토리 백필 (1회성, 약 25초)
  build-chief-report.js  LLM 결과 → 출처 검증 → 대시보드 병합
  answer-weekly.js / exclude-ticker.js / mark-breakout.js / open-dashboard.js
  lib/                   util·ta·bars·percentile·wrs·screen·tracking·congestion·vcp
                         ·leaders·regime·chart/·xlsx/·history-series·verify-claims·cache
                         ·sector-flow·flow-cross·research-rotation
                         ·kis(한투 시세) ·rules ·setup-grade ·team6 ·earnings
                         ·orh(장중 트리거) ·intraday ·paper(자체 원장)          ← 6팀
  paper-trader.js        6팀 밤 루프 한 틱 (--status · --prep · --replay=날짜)
  night-loop.js          장이 열려 있는 동안 5분마다 paper-trader 를 부른다
  paper-review.js        주간 리뷰 (구간별 성적 · Claude 소견 채점)
  render-charts.js       후보 차트 PNG (Claude 가 Read 로 본다 · 저장소 밖 캐시)
  backtest-daily.js      6팀 규칙 일봉 백테스트 → docs/BACKTEST-{날짜}.md
  backtest-intraday.js   6팀 규칙 5분봉 백테스트 → docs/BACKTEST-INTRADAY-{날짜}.md
deploy/macmini/          맥미니 24시간 구동 (install.sh · launchd plist 2개)
  data/                  finra-margin · sec-edgar · kr-reports · news-rss
  workflows/             team1-news · team2-research · team4-catalyst · team5-sector · chief-report
state/                   tracking·picks·weekly-question·chart-check·breakout-log·llm-in·history
                         ·watchlist(6팀 아침 관심 목록) ·paper(자체 원장) ·orh(밤 트리거)
config/rules.json        6팀 매매 규칙 (버전 관리 — 바꾸면 version 을 올리고 docs/STRATEGY-LOG.md 에 근거)
dashboard/               breakout-room.html (9탭 + 팝업) · data/*.js · data/series/ · charts/
```

캐시(스냅샷·야후봉·PDF·API)는 **OneDrive 밖** `%LOCALAPPDATA%\breakout-team` 에 있다.
`.gitignore` 는 OneDrive 동기화를 막지 못하기 때문이다.

## 데이터 소스

| 용도 | 소스 | 주의 |
|---|---|---|
| RS·WRS·ADR·VOL_X·150일선 | `305rhfueo-ui.github.io/RS_Investment/static/result.json` | bare `NaN` 포함 → 값 위치만 치환 |
| 봉·MA·저항·거래량 | Yahoo `query1.finance.yahoo.com/v8/finance/chart` | 닷 티커는 `BRK.A→BRK-A` |
| 4분기 실적 | SEC EDGAR **companyfacts** | UA 필수(`앱명/버전 (이메일)`). companyconcept 는 신뢰 불가 |
| 마진부채 | FINRA `margin-statistics.xlsx` | ZIP 직접 파싱 |
| 국내 증권사 리포트 | 연합인포맥스 `bizrpt/reportlist` | 티커 검색은 `NAS:NVDA` 형태 |
| 티커별 뉴스 | Nasdaq RSS | `<nasdaq:tickers>` ≤3 + 제목 매칭으로 관련성 판별 |
| 장중 시세·분봉 (6팀) | 한투 KIS `openapi.koreainvestment.com:9443` | **시세 전용**. 호출 간격 700ms. 점 티커는 `BRK.B→BRK/B`. 키는 `.env` |
| 실적 발표일 (6팀) | Nasdaq `api.nasdaq.com/api/calendar/earnings?date=` | 야후 quoteSummary 는 crumb 401 |

## 알려진 함정 (다시 밟지 말 것)

- RS 사이트 `Price` 는 **분할 미조정** → 종가 시계열은 반드시 야후로 덮어쓴다 (CRWD 4:1 사례)
- RS 사이트 WRS 는 NaN 오염으로 **140개 중 20개가 깨져 있다** → `data[]` 에서 재계산
- WRS 종목수는 **기간마다 다르다** (RS 결측 종목이 기간별로 다름) → 기간별로 보관
- 히스토리 스냅샷의 **주말분은 금요일 복제** → 반드시 평일만
- 라이브 `result.json` 은 같은 거래일이라도 스냅샷보다 새로울 수 있다 → 마지막 지점 동기화
- 대시보드는 `file://` 로 열리므로 **`fetch()` 금지**, `window.X_DATA` 형태 `.js` 만
- SEC UA 에 URL 이 섞이면 403
- 워크플로 `agent()` 는 죽으면 **null 을 준다.** `.filter(Boolean)` 로 버리면 그 종목이 조용히 사라지고
  화면엔 "상한 초과"로 표시된다 → 각 워크플로의 `tryAgent` 래퍼를 쓰고 `failed` 로 반환할 것
- 단일 에이전트 워크플로에서 `return {...result}` 는 실패 시 `{...null}` 이라 **오류 없이 빈 리포트**가 된다
- 조사 대상은 `research-rotation.js` 가 순환시키고 **TTL(5거래일) 안이면 건너뛴다**(`selectForResearch`).
  건너뛴 종목은 `run-breakout.js` 가 지난 결과를 이월한다(`research.carried` · `researchedOn`).
  상한을 올리지 말 것. 에이전트가 적게 뜨는 게 정상이다 (2026-09-03 이전엔 2팀 68% 가 TTL 안 재조사였다)
  **4팀은 예외(2026-09-16 사용자 결정)** — 국면 필터·VOL_X≥3·상한 없이 150일선 위 후보 전원을 조사한다.
  남는 건 자료 지문(`evid` = 뉴스 URL+8-K URL 해시) 이월 하나: 5거래일 안에 같은 지문으로 조사했으면 이월.
  **모든 팀·실장은 차트 모양(횡보·베이스·돌파의 질·되돌림)을 판정하지 않는다 — 사용자가 직접 본다 (2026-09-17 확장).**
  LLM 은 봉을 받지 않는다. 3팀 "돌파" 는 35봉(7주) 고점 상향 마감 + 돌파봉 거래량/20일 평균일 뿐이고, stage 라벨(초입·관성·과열)은
  이격·컨센서스 컬럼 분류다. congestion.js 는 3팀 enforceCap 보호용 데이터로만 남고 화면·실장 입력에는 안 나간다.
  `build-chief-report` 가 실장 출력에서 차트 결론 어휘를 찾으면 WARN 을 찍는다 — 그 문장은 보고에 옮기지 말 것
- 야후 봉은 거래일이 통째로 빠질 수 있다(2026-08-28 실측). `market-calendar.js` 로 대조해 `barsNotice` 로 표면화한다.
  데드크로스 날짜·연속 이탈일수가 실행마다 바뀌면 이걸 먼저 의심할 것
- 3팀 재편입은 `revertReentries` 가 배제 사유 재검사 후 확정한다. 이게 없으면 50일선 아래 종목이 매일 복귀·재배제되어
  "오늘 배제" 와 차트확인 목록이 오염된다 (MXL·BAND·PENG 29회 churn 실측)
- 4팀 후보에서 시총 N/A 티커(우선주·유닛)는 제외한다 — NEE-T 를 넥스트에라 보통주로 조사한 사고(2026-09-03)
- 거래량 확인은 **돌파봉** 거래량(`breakVolRatio`)으로 한다. 마지막 봉 거래량으로 판정하면 8/31 돌파를 9/02 거래량으로 "확인"한다
- 2팀 테마는 유니온 + **기간별 3세트(1M·3M·6M) + 교차(지속/신규/중기/퇴조)** 를 Node 가 확정한다(`detectThemesByPeriod`, `rs-entry.js`).
  LLM 테마종합의 byPeriod/rotation 티커는 `build-chief-report` 가 Node 목록과 교집합으로 정제한다. 상세: `docs/PERIOD-THEMES-2026-09-07.md`
- 사이트 `RS_Rank_Pct` 는 NaN 정렬 버그로 틀려 있다(2026-09-07 실측 1378/1392 불일치) → 자체 백분위(`__p`)만 쓴다. 사이트 PR 반영 후 재확인
- 사이트 `market_condition`(사용자 시트 A1)은 QQQ 판정을 **덮어쓰지 않고 병기**한다. `fs_data.json` 은 `scripts/data/rs-fs-data.js`(하루 캐시)
- `const CAP = (A && A.cap) || N` 은 `cap:0` 을 N 으로 둔갑시킨다 → `Number.isFinite` 로 판정
- **NotebookLM `setup_auth` 는 세션 MCP 서버로는 절대 성공하지 못한다.** 서버가 `headless:true`
  로 떠 있어 로그인 창이 안 보인 채 죽는다. `HEADLESS=false` 로 서버를 따로 띄워 로그인만 끝낸다
- **NotebookLM `get_health` 의 `authenticated` 를 믿지 마라.** 로그인에 성공해도 false 로 남는다
  (서버가 `notebooklm.google.com` 을 기다리는데 실제로는 `notebook.google.com` 에 도달한다).
  가용 여부는 `ask_question` 을 한 번 던져 확인한다. 자세한 내용은 `.notebooklm-local.md`

## 6팀 · 매매 (2026-09-28)

- **6팀은 LLM 이 아니다.** `setup-grade.js` 가 일봉에서 숫자를 재고 `config/rules.json` 문턱으로 등급을 매긴다.
  등급 = 검사 7개 중 실패 수. 차트 모양 판정이 아니며 그렇게 말하지도 않는다.
- **주문 코드는 없다.** `kis.js` 는 시세만 읽는다. 체결은 자체 원장(`state/paper/`)의 계산이다.
  실전 주문 기능을 붙이자는 요청이 오면 별도 파일 + `KIS_MODE=live` + 별도 승인 플래그 + 주문 상한을 모두 갖춰야 한다.
- **저장소는 공개다.** 금액·수량·계좌 규모를 `state/`·`dashboard/`·`analysis/` 에 쓰지 마라. 비중(%)과 R 로만 쓴다.
  수량은 터미널·알림에서만 계산한다(`sharesFor`). 한투 시세 원본(분봉·호가)도 게시하지 않는다.
- **밤 관심 목록은 아직 피벗 아래에 있는 종목(`state:'pre'`)만.** 이미 넘은 종목(`post`)을 넣으면 오르는 날마다 추격 매수한다.
- **미래 봉을 보지 마라.** `gradeSetup` 은 넘겨받은 봉의 마지막을 "오늘"로 본다. 백테스트는 날짜마다 `slice` 해서 넘긴다.
  `swingHighs`/`swingLows` 는 앞뒤 N봉을 보므로 피벗·손절에 확정 스윙을 쓰면 늦거나 새어 나간다.
- **표본 30건 전에는 모의 성적으로 규칙을 바꾸지 않는다.** 바꿀 땐 한 번에 하나, 버전을 올리고, 근거를 `docs/STRATEGY-LOG.md` 에.
- 등급이 높다고 더 잘 오른다는 증거는 아직 없다(백테스트 A 5건 0승 · B 10건 5승). 등급을 추천 강도처럼 말하지 마라.
- **규칙의 기본값은 쿨라매기 공식 글을 따른다** (손절은 ADR 보다 넓지 않게 · 베이스 2주~2개월 · 3~5일 뒤 1/3 익절 후 본전 · 10일선 종가 이탈).
  백테스트 하나로 공식을 뒤집지 마라 — 2026-09-28 에 일봉 백테스트만 보고 손절을 1.5 ADR 로 넓혔다가 되돌렸다.
  공식에 없는 우리 추가분은 `config/rules.json` 의 `ours` 에 적혀 있다.
- **피벗까지의 거리는 ADR 배수로 잰다.** ADR 8% 종목에게 5% 는 하루치도 안 된다.
  2026-09 의 MSTR·TWST·GRAL·P 는 전부 피벗 8~12% 아래에서 하루 만에 넘었다.
- **백테스트와 실전은 같은 함수를 쓴다** (`orh.evaluate` · `paper.*` · `gradeSetup`). 조건을 두 군데 따로 쓰면 한쪽이 빠진다.
- 트리거는 완성된 5분봉의 종가로 판정하고 체결가도 그 종가다. 다음 봉 시가를 쓰면 실전과 백테스트의 체결가가 달라진다.
- 차트 PNG 는 저장소에 넣지 않는다(`CACHE_DIR/charts`). 매일 40장이면 git 이 1년에 200MB 가까이 분다.

## 검증된 골든값 (회귀 확인용)

`RESUME.md` 참조. 핵심: **자체계산 WRS_6mo 가 사이트와 오차 0으로 일치**해야 한다.
