# 여기서부터 이어서 하면 됩니다

마지막 작업: **2026-08-05**

## 재개 방법

Claude Code 를 열고 이렇게 말하면 됩니다:

```
breakout-team 이어서 하자. RESUME.md 읽어봐
```

---

## 지금 바로 돌아가는 것 (전부 검증 완료)

```bash
cd breakout-team

node scripts/run-breakout.js --no-git    # 5팀 전체 실행 (약 6초)
node scripts/backfill-history.js         # 히스토리 백필 (약 23초, 1회성)

node scripts/answer-weekly.js --tickers=NVDA,AVGO --note="AI 인프라"
node scripts/exclude-ticker.js --list
node scripts/exclude-ticker.js --ticker=XYZ --reason="차트 확인 결과 추세 붕괴"
node scripts/exclude-ticker.js --ticker=XYZ --restore
node scripts/mark-breakout.js --ticker=PANW --verdict=breakout --note="..."
node scripts/mark-breakout.js --list
```

대시보드: `dashboard/breakout-room.html` 더블클릭 (file:// 로 열림, 서버 불필요)

### 개별 모듈 단독 실행 (디버깅용)
```bash
node scripts/fetch-rs-data.js            # RS 1412종목 + 46컬럼
node scripts/lib/screen.js               # 2팀 퍼널 + 테마
node scripts/lib/wrs.js                  # WRS 3기간 + 사이트 대조 검증
node scripts/lib/regime.js QQQ           # 쿨라매기 판정
node scripts/lib/leaders.js              # 주도주 200DIV
node scripts/lib/congestion.js --scan    # 횡보 국면 히스토그램
node scripts/lib/vcp.js                  # 눈으로 볼 종목
node scripts/lib/chart/index.js QQQ      # 차트 SVG+PNG
node scripts/lib/chart/png.js --selftest # PNG 인코더 자체검증
node scripts/data/finra-margin.js        # 마진부채 YoY
node scripts/data/sec-edgar.js AAPL JPM  # 4분기 실적
node scripts/data/kr-reports.js NVDA     # 국내 증권사 리포트 + PDF
```

---

## ⏸️ 정확한 중단 지점

**팝업에 RS/WRS 3개월 그래프를 붙이는 작업 도중.**

- `dashboard/breakout-room.html` 에 `loadSeries()` 와 `miniChart()` 함수는 **추가 완료**
- 그런데 `openModal()` 안에서 이 함수들을 **호출하는 코드가 아직 없음**
- 현재 상태로도 대시보드는 정상 동작한다 (함수가 정의만 되고 안 쓰일 뿐)
- 팝업의 그래프 영역은 여전히 "준비 중"으로 표시됨
- 시계열 데이터는 이미 생성돼 있음: `dashboard/data/series/` 에 종목 54개 + 업종 141개 × 63일

**다음 한 걸음**: `openModal()` 에서 `loadSeries('t', ticker, s => ...)` 를 호출해
`miniChart(s.d, [{n:'RS 1M',v:s.r1,c:'#f5a524'}, {n:'RS 3M',v:s.r3,c:'#58a6ff'}, {n:'RS 6M',v:s.r6,c:'#c084fc'}])`
와 종가 차트를 렌더링하면 된다.

---

## 남은 작업 (우선순위 순)

1. **팝업 그래프 배선** — 위 참조. 거의 다 됨
2. **팝업 나머지 배선** — SEC 4분기 실적 / Nasdaq 뉴스 / 국내 증권사 리포트
   (데이터 모듈은 전부 완성·검증됨. `run-breakout.js` 에서 호출해 `team2.js` 에 넣기만 하면 됨)
3. **LLM 워크플로 5종** — `scripts/workflows/` 에 생성
   - team1-news / team2-research / team4-catalyst / team5-sector / chief-report
   - `verify-claims.js` (환각 3중 방어: 스키마 `근거없음` 강제 → Node HTTP 생존확인 → LLM 팩트체크)
4. **자동화** — 루트 `.claude/commands/start-breakout.md` (⚠️ 하위 폴더에 두면 인식 안 됨),
   무인 런처, GitHub Actions, `git init` + push
5. **NotebookLM** — Chrome 완전 종료 → `setup_auth` → 브라우저 로그인
   - 노트북 2개: `ria`(전략용, 이미 등록) + `83b212bd-a443-4a53-8b7e-28b97398bbfc`(주간 리서치용, 등록 대기)
   - ⚠️ 두 노트북의 소유 계정이 같은지 미확인 → 로그인 후 `list_notebooks` 로 판별

---

## 검증된 골든값 (회귀 테스트용)

바꾼 뒤 이 값들이 유지되는지 확인하면 된다.

| 항목 | 값 |
|---|---|
| RS 유니버스 | 1,412종목 · 46컬럼 |
| 2팀 퍼널 (2026-08-05) | 1412 → 상위2% 72 → ADR≥4 58 → 150일선 **54** |
| **WRS 자체계산** | 사이트 정상 119그룹 **오차 0.00e+0** 완전일치 ← 가장 중요한 관문 |
| FINRA | 2026-06 = 1,502,072 / 2025-06 = 1,007,961 / **YoY +49.0%** |
| SEC AAPL 2026-06-27 | 매출 109,417M · 영업이익 35,695M · 순이익 29,789M · 32.6% · YoY +16.4% |
| SEC JPM | 영업이익 없음 → **세전이익 20,479M** 으로 폴백 (라벨 변경 확인) |
| 국내 리포트 | NVDA 33건 / TSLA 28건 · PDF 매직바이트 `%PDF` |
| Above_150_SMA 교차검증 | 사이트 vs 야후 **53/53 일치** |
| PNG 인코더 | 자체검증 4/4 · MA50 63/63점(끊김 없음) |

---

## 중요한 설계 결정 (다시 논의하지 말 것)

- **숫자는 Node 가 확정, 서술은 LLM 이 담당.** LLM 은 수치를 만들지 못한다
- **근거 없으면 "근거 없음"** 이라고 그대로 쓴다. 지어내지 않는다
- **캐시는 OneDrive 밖** (`%LOCALAPPDATA%\breakout-team`) — `.gitignore` 는 OneDrive 동기화를 막지 못한다
- **대시보드는 `file://`** 로 열리므로 데이터는 `.json` fetch 가 아니라 `window.X_DATA` 형태의 `.js` 로만 내보낸다
- **시계열 파일은 추적 종목분만** 유지 (전체 1,412개를 쓰면 git 히스토리가 폭증)
- `Vol_Surge_Wk`(거래량, 당일제외 5일평균 대비) 와 `VOL_X`(거래대금, 20일평균 대비)는 **서로 다른 지표** — 합치지 말 것
- RS 는 **QQQ 대비 초과수익률**이지 절대 상승률이 아니다
- 3팀 "직전 고점" = **추적 편입 이후 최고 종가**. 재편입 시 peak 리셋 필수

## 알려진 외부 이슈

- **RS 사이트 버그**: `fetch_and_save.py:173` 의 `is not None` 가드가 NaN 을 통과시켜
  140개 업종 중 20개의 WRS 가 오염돼 있다. 우리는 복구해서 쓴다.
  사이트 수정안: `isinstance(v,(int,float)) and math.isfinite(v)`
- **SEC**: UA 에 URL 이 섞이면 403. `앱명/버전 (이메일)` 형식만 통과.
  `companyconcept` 은 신뢰 불가 → `companyfacts` 사용
- **인포맥스**: 뉴스 API 티커 검색은 2025-10 이후 무효 → 반드시 한글명으로 검색
