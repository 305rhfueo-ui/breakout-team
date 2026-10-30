# breakout-team — Claude 작업 지침

쿨라매기 Break-out + Episodic Pivot 전략을 실행하는 6팀 + 실장 시스템.
1~4팀이 후보를 만들고, 6팀(매매)이 그걸 매수 계획·모의 거래로 바꾼다 (2026-09-28 추가). 5팀(업종 자금흐름·미르)은 2026-10-06 제거 — 도윤 5개 목록이 대신한다. 서준 점수의 '업종 유입 +5' 가산도 함께 없어졌다(순서만 바뀜, 관심 종목 판정 규칙은 그대로). 2026-10-12 5팀을 **하린(주도 업종)**으로 새로 만들었다 — RS 사이트 Sector/Industry WRS 의 FRANK 1~10 업종을 사이트와 같은 계산(`lib/frank.js`)으로 받고, 왜 상위인지·주도주를 CNBC·연합인포맥스 증권사 리포트 근거로만 쓴다(`workflows/team5-industry.js`, 매일 바뀐 업종·3일 지난 업종만, 소넷). 서준 점수와는 연결하지 않는다. 2026-10-13 **7팀 지우(종목 판정)** 신설 — 텔레그램 봇에 `SNOW 심층분석` 을 보내면 `scripts/tg-listener.js`(launchd `com.breakout.listen`, 상주)가 받아 `deploy/macmini/run-ondemand.sh` → `prepare-ondemand.js`(재료) → `/deep`(오퍼스, 결론 모드) → `finish-ondemand.js`(검증·결론 안전장치·대시보드·답장)를 돌린다. 2026-10-17: **보유 종목 새 소식** — `scripts/holdings-watch.js` 가 trading-journal(공개 저장소 `trades.json`)의 보유 티커만 읽어 새 나스닥·CNBC 기사·8-K·연합인포맥스 리포트를 텔레그램으로(새 것만, 소넷 도구 없이 한 줄 요약 + 코드 검사). 아침 morning.sh 맨 앞 · 밤 22:00 `com.breakout.holdings` · 텔레그램 "보유". 2026-10-18 화면에도 **8팀 다온** 카드 — 사용자 결정으로 보유 종목·최근 2주 소식을 공개 사이트(`dashboard/data/holdings.js`)에 보인다(수량·금액은 없음). 알림 기록·요약 캐시는 CACHE_DIR. 2026-10-15: 팝업 맨 아래 **전망치** 칸(야후 파이낸스 analysis — `scripts/data/yahoo-estimates.js`, 코드 요약 + 심층 분석의 해석)과 체크표 N 줄을 실제 N 분석으로 바꿈, 목록 순환 심층 하루 14개·N 없는 종목 먼저. 같은 날 심층 분석 전체에 **CAN SLIM N 심층**(신제품·신서비스의 매출·이익 영향과 기대 성장 — `newDrivers`, 증권사 리포트 원문 PDF 포함)이 들어갔다.
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
   **유일한 예외 = 7팀 지우(2026-10-13 사용자 결정)** — 사용자가 텔레그램으로 직접 물어본 종목(`/deep`, `team6-deepdive.js` 의 `mode:'verdict'`)에 한해
   "매수 적정 / 조건부 / 아니다" 결론을 낸다. 결론은 기준 문서 두 장과 출처·체크표에서만 나오고, 코드가 막는 조건(시장 빨간불·50일선 아래·실적 임박·피벗 없음·추격)에 걸리면
   '매수 적정'은 '조건부'로 내려간다(`finish-ondemand.js enforceVerdict`). 금액·수량·비중은 쓰지 않는다. 1~6팀·실장은 지금처럼 판정하지 않는다.
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
                         ·lists(도윤 5개 목록)·checklist(쿨라매기·CAN SLIM 체크표, AI 없음)·number-guard(AI 문장 속 숫자를 출처·입력 자료와 코드로 대조, 없으면 문장 삭제)·research-rotation
                         ·kis(한투 시세) ·rules ·setup-grade ·team6 ·earnings
                         ·orh(장중 트리거) ·intraday ·paper(자체 원장)          ← 6팀
                         ·paper-publish(일지 데이터) ·notify(텔레그램 알림)
  paper-trader.js        6팀 밤 루프 한 틱 (--status · --prep · --replay=날짜)
  night-loop.js          장이 열려 있는 동안 5분마다 paper-trader 를 부른다
  chartcheck-watch.js    실장 차트 확인 종목 — 개장 2시간 안 선 돌파+거래량 알림 · 장 마감 30분 뒤 요약 (밤 루프가 부름)
  paper-review.js        주간 리뷰 (구간별 성적 · Claude 소견 채점)
  render-charts.js       후보 차트 PNG (Claude 가 Read 로 본다 · 저장소 밖 캐시)
  backtest-daily.js      6팀 규칙 일봉 백테스트 → docs/BACKTEST-{날짜}.md
  backtest-intraday.js   6팀 규칙 5분봉 백테스트 → docs/BACKTEST-INTRADAY-{날짜}.md
deploy/macmini/          맥미니 24시간 구동 (install.sh · launchd plist 2개)
  data/                  finra-margin · sec-edgar · kr-reports · news-rss · cnbc(종목 태그 기사, 2026-10-08)
  workflows/             team1-news · team2-research(종목 리서치 + 목록 테마) · team4-catalyst · team6-deepdive · chief-report
state/                   tracking·picks·weekly-question·chart-check·breakout-log·llm-in·history
                         ·watchlist(6팀 아침 관심 목록) ·paper(자체 원장) ·orh(밤 트리거)
config/rules.json        6팀 매매 규칙 (버전 관리 — 바꾸면 version 을 올리고 docs/STRATEGY-LOG.md 에 근거)
dashboard/               breakout-room.html (9탭 + 팝업) · data/*.js · data/series/ · charts/
paper.html               서준의 모의투자 일지 (누적 수익률 곡선 · 매매 기록 · 비교 장부) ← dashboard/data/paper.js
                         리서치룸 첫 화면의 요약 띠에서 이어진다. 데이터는 lib/paper-publish.js 가 아침·밤 양쪽에서 쓴다
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
| 기준금리·S&P500·삼 지표·장단기 (10팀) | FRED `fred.stlouisfed.org/graph/fredgraph.csv?id=` (키 없음) | DFEDTARU 는 결정 다음 날 날짜로 바뀐다 · SP500 은 10년치만 |
| 연준 경제전망(SEP) (10팀) | `federalreserve.gov/monetarypolicy/fomcprojtablYYYYMMDD.htm` 표 1 + 성명서 `monetaryYYYYMMDDa.htm` | 표 1 ~ 그림 5(점도표·분포·위원 리스크 판단) 전부. 발표일은 FRED FEDTARMDLR 마지막 날짜로 안다 |

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
  (7팀 지우의 결론 칸만 예외 — 위 원칙 4. 7팀 결과는 `dashboard/data/ondemand.js` 와 텔레그램에만 나가고 실장·다른 팀 입력으로 들어가지 않는다.)
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
- **RS 사이트 티커 목록**(사용자 구글 시트 첫 탭 A열 — RS_Investment 가 매일 읽는 종목) 자동 갱신(`scripts/ticker-universe.js`, 2026-10-29 사용자 "해보자"): 토요일 아침 작업이
  한투 조건검색 $70 이상 보통주를 넣고, 이미 있는 종목은 $50 밑이어야 뺀다(기준은 기존 시트에서 거꾸로 찾음). ETF·ETN·우선주·폐쇄형 펀드는 나스닥 공식 상장 목록으로 거른다.
  사용자가 직접 넣는 종목은 "수기" 탭 — 첫 탭은 통째로 바뀐다. 30% 넘게 바뀌거나 조건검색이 잘리면 쓰지 않는다. 서비스 계정 키는 `~/.config/breakout-team/google-sa.json`(저장소 밖, 사용자가 둔다).
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
- 후보 채점(관심 목록 `others`·`state/ep-log/` → 주간 리뷰 표)은 참고다. 30건 규칙은 그대로 — 전략은 고정, 배우는 것은 실행이다.
- **로컬 판정 모델(Ollama 의 Laya·Nimble)은 2026-10-29 뺐다**(사용자: "빼자"). 실측: 재민 촉매 32건 중 Laya 31건이 ①(찍기와 같음), 서준 부합도는 23종목이 2.29~2.72 로 거의 같은 점수.
  Ollama 는 학습이 안 된다 — 학습은 LayaStudio(MLX, 애플 칩) 같은 별도 도구로. 매일 돌리지 말고 **학습 자료만 쌓는다**:
  서준 후보 입력(관심 목록 `fit` = `{v, at, in}`, `team6.setupInput`) + 1주·2주·1개월 결과 → `state/learn/setups.json`(정답 up1w = 5세션 수익률 > QQQ) ·
  재민 Claude 분류(`state/ep-log/`) + 그날 원문(`state/llm-in/_t4/`, 아침 커밋). 학습한 모델은 저장된 입력의 뒤 기간으로만 채점해 등급·전체 평균과 비교한다.
  학습 입력은 계획 객체(p)에 붙이지 마라 — prepare-deepdive-args 가 계획을 통째로 Claude 에 넘긴다. `LEARN_V` 를 바꾸면 이전 입력과 섞지 않는다.
  학습은 텔레그램 알림(1주 정답 1,000건 · 빨간불·초록불 각 100건) 뒤 사용자가 "학습해" 할 때만.
- **야후 기사**(2026-10-26): 재민 종목·텔레그램 분석 종목만 받는다(전망치와 같은 3~5초 간격·쿨다운). 유료 기사가 많아 제목은 단서로만 — 인용은 열 수 있는 원문에서.
- **실장 차트 확인 감시**(`scripts/chartcheck-watch.js`, 2026-10-30 사용자): 알림만, 모의 매수 없음. 그날 아침 차트 확인 목록(generated = 그날 밤 미국 세션일)만 본다.
  ① 개장 2시간 안: 5분봉 종가가 max(실장이 본 저항, 장중 고가) 위 + 거래량 페이스 ≥ entry.paceMin(1.5) → 즉시 텔레그램(종목당 하루 한 번). 판정은 서준과 같은 orh.evaluate.
  ② 장 마감 30분 뒤(조기 폐장 13:30): 전일 대비 상승 + 거래량 20일 평균의 1.5배 이상 종목 요약(선 돌파 마감 여부 표시, 없으면 없다고). 일봉이 아직 없으면 다음 틱에 다시 — 밤 루프는 이 요약까지 보내고 끝난다.
  기록은 캐시 `chartcheck-alerts.json`(세션별). 이 목록은 돌파 성적이 검증된 적 없다 — 몇 주 쌓이면 성적을 본다. 백테스트에서 '다음 날 시가 진입'은 장중 돌파 진입보다 약했다(−0.15R vs +0.12R).
- **개장 1시간 급등 TOP 15**(`scripts/open-movers.js`, 2026-10-28): 밤 루프가 10:30 ET 에 한 번(세션당 한 번, 11:30 ET 넘으면 안 보냄) · 텔레그램 "급등"은 지금 다시.
  한투 조건검색(무료실시간)은 상승률 순 100개까지만 준다 → 거래대금 하한을 낮춰 가며, 잘리면 상승률 구간으로 나눠 빠짐없이 받는다. ETF 제외. 종목마다 📌 핵심 · 자세히 3~5문장 · 원문 인용 — 야후 무료 제휴 기사 본문 최대 2건(이유를 다룬 제목 먼저, 본문이 스크립트면 페이지 요약)·CNBC 1건을 읽는다. 숫자·인용은 코드가 원문과 대조. 야후 개별 기사 403 은 그 기사만 건너뛴다(쿨다운 없음).
  담당 = **9팀 나래**(2026-10-28 사용자: "에이전트 하나 더 만들어서 이거 알려주는 애") — 텔레그램 머리말 · 화면 카드·탭(`dashboard/data/movers.js`, 그 파일만 커밋·push, 기사 본문·요약문은 싣지 않음).
  **공통 테마**(같은 날 사용자: "공통된 테마가 있으면 알려줘"): 기사 테마는 종목마다 자기 근거 기사 번호가 있어야 하고 그런 종목이 2개 이상일 때만(`cleanThemes`) ·
  같은 업종은 RS 사이트 스냅샷 Industry 로 코드가 센다. AI 정리가 실패하면 "테마 없음"이라고 단정하지 않는다. 정규장 밖에 돌리면 장외 시세가 섞인다고 표시한다.
- **10팀 윤슬 — 연준**(`scripts/fed-watch.js`, 2026-10-29 사용자: "연준 SEP 분석 … 올리다가 내리기 시작하면 위험 신호"): 아침 morning.sh 보유 소식 다음.
  ① 기준금리가 **올리다가 처음 내리면** 🟠 알리고 36개월 감시 → 그동안 **S&P500 월말 종가 < 10개월 이동평균**이면 🔴 장기 보유분 비중 축소(현금·단기 국채) 검토, 위로 오면 🟢.
  근거(FRED, 1958~2026 월간·배당 3% 근사·세금 제외): 계속 보유 연 10.1%·최대 -51% / 첫 인하 뒤 36개월만 10개월선 11.4%·-26%. 첫 인하에 **바로 매도는 18번 중 7번만** 보유보다 나았다 — 그렇게 바꾸지 마라.
  **삼 법칙은 매도 조건이 아니다**(2024-09 첫 인하 때 0.50 이었는데 침체 없음) — 장단기 금리차와 함께 참고로만. 10개월은 Faber 의 값 — 결과 보고 고쳐 맞추지 마라.
  ② SEP(3·6·9·12월): FEDTARMDLR 날짜가 바뀌면 SEP 페이지(표 1 · 점도표 · 분포 · 위원 불확실성·리스크 판단 — 확산지수 이력·표 2 는 뺌)와 성명서를 코드가 받아 Claude(opus, 도구 없음)가 해석, 자료에 없는 숫자가 든 문장은 number-guard 가 지운다.
  형식(2026-10-30 사용자가 claude.ai 답을 보고 고름 — 바꾸지 마라): **굵은 결론** → 중간값 표(괄호 지난번, 표는 코드가 만듦) → 핵심 포인트 3~5개(굵은 한 줄 + 숫자 근거) → "한 줄로 요약하면 …". 텔레그램은 HTML(<b>·<pre>), 실패하면 일반 글. 해석 실패 뒤 다시: `node scripts/fed-watch.js --sep`.
  상태는 `state/fed/state.json`(바뀐 것만 알림) · SEP 는 `state/fed/sep-날짜.json` · 화면 `dashboard/data/fed.js`(10팀 카드·보드 한 줄) — 그 파일들만 커밋·push. 서준 시장 신호등(새로 살까)과 다른 층(장기 보유분)이다. 판단 보조, 매매 지시 아님.
- **팝업 SNS 반응**(`scripts/sns-watch.js` · `scripts/data/reddit.js`, 2026-10-28): 아침 morning.sh 맨 끝. **레딧에는 접속하지 않는다** —
  공개 보관소 arctic-shift 에서 주식 게시판 14곳의 새 글을 받아 쌓고(하루 20번 안팎, 3~5초 간격) 티커가 나온 글($TSLA·대문자 TSLA)을 골라
  소넷(도구 없음)이 분위기·이야기·과열 신호로 정리. 레딧 직접 접속은 2026-10-28 실측으로 막혔다(.json 403 · RSS 1분 1번 ·
  검색 HTML 조각은 몇 번 뒤 "blocked by network security") — **다른 접속 방식(curl 등)으로 피해 가지 마라**(집 IP 가 막히면 사용자 레딧도 막힌다).
  공식 API 는 2025-11 부터 승인제. 종목 전용 게시판(r/NBIS_Stock)은 못 본다. 레딧 글은 의견이지 근거가 아니다 — 다른 팀·심층 분석 입력에 넣지 않는다.
  **X 는 자동 수집하지 않는다**(사용자 결정 — 로그인 쿠키 방식은 약관 위반·계정 정지 위험) → 팝업에 `$티커` 검색 링크만.
- **텔레그램 "티커 살까?"**: 지우 분석과 같은 흐름 + 팀 의견 묶음(코드가 모음) → 실장 형식으로 답한다. 판정·막는 조건 규칙은 그대로, 판단 보조다.
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
