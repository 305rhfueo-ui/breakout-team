# 여기서부터 이어서 하면 됩니다

마지막 작업: **2026-08-09**

## 재개 방법

Claude Code 를 열고 이렇게 말하면 됩니다:

```
breakout-team 이어서 하자. RESUME.md 읽어봐
```

---

## ✅ 4팀(재민) 정직성 버그 수정 — 완료 (2026-08-09)

사용자가 "재민이 좀 이상하다"고 해서 검토했더니 버그 3개 + 판단 필요 2건이 나왔다. 전부 처리.

| 문제 | 조치 |
|---|---|
| **커버리지 은폐** — 화면 `12/12` (실제 40 중 12) | `lib/util.js` 에 `coverageOf()` 공용 함수. 2·4팀 공용 |
| **상한 40 이 셋업을 가림** | 상한 제거 → **WAB(리테스트, 45점)·NSC** 새로 드러남 |
| **촉매 열 하드코딩 '⏳대기'** | `r.catalyst` 읽기 · '대기'→**'미조사'** |
| **6분류 카드가 데이터 무시** | `byCategory` + 종목별 설명 표시 (①11건·⑥1건) |
| **재사용 표기 누락** | 1·2·4·5팀 탭에 배지 |
| **ETF 혼입** (상한 제거로 드러남) | `isEtf()` 로 4팀에서만 제외 (GDXU·MLPR) |

**커버리지 은폐는 2회차 재발이었다.** 2팀에서 고쳤던 버그가 4팀에서 스프레드 순서
(`{done, total, ...payload.coverage}` — 뒤가 앞을 덮음) 때문에 되살아났다.
→ `tests/lib/coverage.test.js` 가 `total` 이 실제 항목 수와 다르면 실패시킨다. 3회차 차단.

**상한 제거가 뜻밖의 수확이었다.** 40개를 VOL_X(거래대금)로만 골랐는데 필터는
"VOL_X **또는** 주간 거래량배수"였다. 단위가 다른 두 지표를 하나로 줄세운 게 원인.
정렬을 고치는 대신 상한을 없앴다(봉만 쓰고 LLM 을 안 써서 비용 ~0, 실측 7.1s→4.9s).
그 결과 **WAB — 돌파 후 저항선 리테스트 · 6개월 횡보 · 45점**이 드러났다.
리테스트는 `bounce_trigger` 직전 단계로 이 전략이 노리는 바로 그 자리다.
차트 볼 종목 1순위가 CZFS → **WAB** 으로 바뀌었다.

⚠️ ETF 는 **4팀에서만** 뺐다. 1팀 주도주(GDXU)와 5팀 업종표(ETF 업종 FRANK 41)에는
   그대로 둔다 — 거기서는 "시장에서 뭐가 극단적인가"를 보는 용도다. 2·3팀은 원래 깨끗하다.

### 테스트

```bash
npm test    # 43개 (briefing-plain 14 + coverage 11 + sector-flow 18) 전부 통과
```

---

## ✅ 5팀 "자금 흐름" 확장 — 완료 (2026-08-08)

승인된 계획: `~/.claude/plans/prancy-kindling-thompson.md` 맨 아래 절. **전 항목 구현·검증 완료.**

### 무엇이 생겼나

- **미르(5팀)** 가 순위표 대신 **"돈이 들어오는 곳 / 빠지는 곳 / 아직 안 온 곳"** 3단락으로 보고한다.
- **실장** 보고에 **"돈이 몰리는 곳의 강세 종목"** 표가 붙는다 (종목 / 두 달 평균 대비 /
  1년 평균 대비 / 초입·눌림·과열·이탈 판정).
- **대시보드 5팀 탭**에 자금 흐름 표. 업종 클릭 → 흐름 판정 + 소속 종목 분해.
- **티커 검색창** (전 1,412종목, 한글 회사명 가능). 미조사 종목은 "아직 조사하지 않았습니다"로 명시.

### 새 파일

| 파일 | 역할 |
|---|---|
| `scripts/lib/sector-flow.js` | F10d/F25d/FRANK/200DIV변화 계산. 사이트 재현값과 정정값 두 벌 |
| `scripts/lib/flow-cross.js` | 5팀 업종 흐름 × 2·3팀 종목 교차 (실장 보고용) |
| `dashboard/data/industry-ko.js` | 업종·섹터 한글명 (141개 중 139개). 두 화면 공용 |
| `dashboard/data/universe.js` | 티커 검색용 전 종목 (646KB, **검색창 첫 사용 시에만 지연 로드**) |
| `tests/run-all.js` · `tests/lib/*.test.js` | `npm test` 로 전체 실행 |

### ⚠️ 확인된 RS 사이트 버그 3종 (전부 회피 구현됨)

1. **감쇠계수 불일치** — 사이트는 오늘값(감쇠 O)과 과거값(감쇠 X)을 비교한다.
   종목 수가 적은 업종일수록 왜곡이 크다. **137개 중 30개 업종의 부호가 뒤집힌다.**
   예) Computer Hardware 화면 −38.3% → 정정 +0.2% (1위 업종인데 하락으로 표시됨)
2. **기준일에 주말 스냅샷(금요일 복제)이 섞임** — 사이트의 "25일 전"이 실제로는 18거래일 전.
   → 평일만 골라 진짜 10·25거래일 사용.
3. **NaN 오염** (기존에 알던 것) — `lib/wrs.js` 가 이미 회피.

사이트 화면값 재현 골든값이 테스트에 박혀 있다 (Computer Hardware −38.3% 등 6종, 오차 <0.15%p).
화면에는 우리 값과 사이트 값을 **나란히** 띄우고 부호가 다르면 노란 배지를 단다.

### 검증

```bash
npm test                              # 38개 (sector-flow 24 + briefing-plain 14) 전부 통과
node scripts/run-breakout.js --no-git # 약 18초
```

`briefing-plain.test.js` 가 **브리핑에 풀지 않은 영문 약어**(F10d·WRS·ADR·CLS_POS·BBWTHD·
bounce_trigger 등)가 남으면 실패시킨다. `undefined`/`NaN`/`—%` 누출과
미르·실장이 같은 업종을 가리키는지도 함께 검사한다.

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

## ✅ 2026-08-05 기준 완료 상태

Stage 0~12 전부 완료. **Node 파이프라인 + 대시보드 + LLM 워크플로 + 자동화까지 동작 확인.**

- 대시보드 8탭 + 종목 팝업(RS 3기간·종가·업종 WRS 그래프 + 4분기 실적 + 뉴스 + 8-K + 국내 리포트)
- 업종 팝업(WRS 3기간 3개월 추이 + 소속 종목)
- LLM 워크플로 5종 + `verify-claims` + `build-chief-report`
- 루트 `.claude/commands/` 7종 (start-breakout, team1~5, chart-check)
- 무인 런처, GitHub Actions, git 커밋 완료

### 실제 워크플로 실행 검증 (2026-08-05)

- **1팀 뉴스**: 중학생 눈높이 비유·전문용어 괄호풀이·Node 수치 인용 정확. 품질 우수
- **5팀 섹터**: 실제 웹검색으로 TrendForce·Dell IR·Forbes·Zacks 등 진짜 출처 확보.
  URL 검증 결과 **생존 6 / 미검증(봇차단) 2 / 죽음 0**.
  BAND 종목은 "직접 근거를 확인하지 못함(근거 없음)"이라고 스스로 밝힘 — 의도한 동작
- **환각 방어 실증**: 내가 워크플로 인자를 손으로 타이핑하며 URL 4개를 지어냈는데
  verify-claims 가 전부 죽은 링크로 잡아 `근거 없음` 으로 강등시켰다.
  ⚠️ **교훈: 뉴스 URL 은 반드시 `prepare-llm-args.js` 출력을 그대로 넘길 것.**
  기억으로 타이핑하면 그럴듯하지만 틀린 URL 이 만들어진다.

### ✅ start breakout 전체 흐름 통과 (2026-08-05)

워크플로 → 수집 → 출처검증 → 대시보드 병합까지 처음으로 끝까지 성공.

```bash
node scripts/run-breakout.js          # Node 파이프라인
node scripts/prepare-llm-args.js      # 워크플로 args 생성
node scripts/slim-args.js --t2=6      # 인라인 전달용 축약
# → Workflow({scriptPath:'<abs>/scripts/workflows/teamN-*.js', args:...}) 실행
node scripts/collect-llm.js --team1=<output> --team2=<output> ...
node scripts/build-chief-report.js    # 출처 검증 + 병합
```

실행 결과: 1팀 뉴스 7건 · 2팀 리서치 6종목(에이전트 8명 전원 성공) · 4팀 촉매 4 · 5팀 업종 3
출처 URL 64개 → 생존 51 · 미검증 15 · 죽음 8 제거 · 근거없음 강등 4

**⚠️ 반드시 지킬 것**: 뉴스 URL 은 `prepare-llm-args.js` 출력을 **그대로** 넘긴다.
기억으로 타이핑하면 그럴듯하지만 틀린 URL 이 만들어진다(실측: 5개 중 4개가 죽은 링크).

## 남은 작업

1. **GitHub 업로드** — `gh` 2.97.0 설치 완료. `gh auth login`(브라우저 인증, 직접 해야 함) 후
   `gh auth login` → `gh repo create 305rhfueo-ui/breakout-team --private --source=. --push`
   (로컬 git 커밋은 이미 완료)
2. **NotebookLM 인증** — Chrome 완전 종료 → `setup_auth` → 브라우저 로그인
   - 노트북 2개(전략용 `ria` + 주간 리서치용). **URL 은 `.notebooklm-local.md` 에 있다(git 제외)** —
     공유 링크 UUID 라서 공개 repo 에 두면 노트북 내용이 노출된다
   - ⚠️ 두 노트북의 소유 계정이 같은지 미확인 → 로그인 후 `list_notebooks` 로 판별
   - 무료 티어 한도: 하루 50쿼리 · 노트북당 소스 50개
3. **2팀·4팀 워크플로 전체 실행** — 검증은 소규모(2~4종목)로만 했다. 전체 20종목 실행은 미검증
4. **맥미니 이전** — `tools/run-unattended.sh` + launchd 등록

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

## LLM 토큰·품질 실측 (2026-08-14, 리포트형 전환 후)

⚠️ **이날은 비교를 위해 `RESEARCH_CAP=10` 으로 종목 수를 어제와 맞췄다.**
기본값은 20 이므로 **평소 2팀 토큰은 아래의 약 2배(1.6M 안팎)를 예상**해야 한다.
서술을 깊게 바꾼 뒤라 종목당 단가가 올랐다는 뜻이지, 회귀가 아니다.

| 팀 | 8/13 (전) | 8/14 (후) | 배수 | 종목·업종 수 |
|---|---|---|---|---|
| 2팀 | 558k | **818k** | 1.47× | 10 (동일) |
| 4팀 | 436k | **459k** | 1.05× | 8 |
| 5팀 | 274k | **416k** | 1.52× | 6 |
| 1팀 | — | 29k | — | 뉴스 7건 |
| 실장 | — | 42k | — | — |

롤백 기준은 합계 3배였다. 1.5배 안쪽이라 서술량을 되돌릴 이유가 없다.

**품질 지표** (같은 날 기준)

| 항목 | 8/13 | 8/14 |
|---|---|---|
| 주장 수 | 100 | **147** |
| sourced 인데 인용문 없음 | 16 (16%) | **0** |
| `no_source` 비율 | — | 0.7% |
| 2팀 회사 설명 | 렌더 안 됨 | 평균 473자 |
| 4팀 거래량 설명 | 한두 문장 | 평균 463자 |
| 5팀 risk | 선택 항목 | 평균 482자 (필수) |
| 출처 검증 | — | URL 130개 · 죽음 **0** · 봇차단 44 |

⚠️ `quote` 를 required 로 걸면 `no_source` 가 급증할 것이 이번 변경의 최대 실패 모드였는데,
실제로는 0.7% 로 오히려 낮았다. Node 가 준 자료의 인용을 인정한 것이 주효했다.

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
