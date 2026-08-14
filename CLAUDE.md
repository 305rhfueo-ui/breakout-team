# breakout-team — Claude 작업 지침

쿨라매기 Break-out + Episodic Pivot 전략을 실행하는 5팀 + 실장 시스템.
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
| `차트 볼 종목`, `오늘 뭐 봐야 해` | `/chart-check` |
| `XXX 돌파했어`, `XXX 배제해` | `/chart-check` 의 해당 절 |

## 최우선 원칙

1. **숫자는 Node 가 확정한다.** 스크리닝·TA·WRS·실적·차트 수치를 직접 계산하거나 바꾸지 마라.
   대시보드 데이터 파일에 있는 값을 그대로 전달한다.
2. **근거 없으면 "근거 없음"이라고 그대로 쓴다.** 뉴스·촉매·상승 이유를 지어내지 마라.
   `pending` / `no_source` / `판정불가` 상태를 임의로 채우지 마라.
3. **상한 때문에 빠진 종목을 숨기지 마라.** 리서치 커버리지를 항상 알린다.
4. **사용자가 최종 판단자다.** 단정적 매수 권유 대신 확인할 조건을 제시한다.

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
  data/                  finra-margin · sec-edgar · kr-reports · news-rss
  workflows/             team1-news · team2-research · team4-catalyst · team5-sector · chief-report
state/                   tracking·picks·weekly-question·chart-check·breakout-log·llm-in·history
dashboard/               breakout-room.html (8탭 + 팝업) · data/*.js · data/series/ · charts/
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
- 조사 대상은 `research-rotation.js` 가 순환시킨다. 상한을 올리지 말고 로테이션으로 커버리지를 채운다
  (실측: detail 20/54 고정 → 3회 실행에 54/54)
- `const CAP = (A && A.cap) || N` 은 `cap:0` 을 N 으로 둔갑시킨다 → `Number.isFinite` 로 판정
- **NotebookLM `setup_auth` 는 세션 MCP 서버로는 절대 성공하지 못한다.** 서버가 `headless:true`
  로 떠 있어 로그인 창이 안 보인 채 죽는다. `HEADLESS=false` 로 서버를 따로 띄워 로그인만 끝낸다
- **NotebookLM `get_health` 의 `authenticated` 를 믿지 마라.** 로그인에 성공해도 false 로 남는다
  (서버가 `notebooklm.google.com` 을 기다리는데 실제로는 `notebook.google.com` 에 도달한다).
  가용 여부는 `ask_question` 을 한 번 던져 확인한다. 자세한 내용은 `.notebooklm-local.md`

## 검증된 골든값 (회귀 확인용)

`RESUME.md` 참조. 핵심: **자체계산 WRS_6mo 가 사이트와 오차 0으로 일치**해야 한다.
