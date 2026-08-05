# 📈 breakout-team

쿨라매기(Qullamaggie) **Break-out + Episodic Pivot** 전략을 매일 실행하는 5팀 + 실장 시스템.
의존성 0 (Node 내장 기능만). 스크리닝·추적·리포팅 전용이며 **주문 집행은 하지 않는다.**

> ⚠️ 교육용 자료이며 투자 조언이 아닙니다. 최종 판단은 본인의 차트 확인으로 하세요.

## 빠른 시작

```bash
node scripts/backfill-history.js   # 최초 1회 (약 25초)
node scripts/run-breakout.js       # 매일 (약 10~20초)
```
그 다음 `dashboard/breakout-room.html` 을 더블클릭. (서버 불필요 — `file://` 로 동작)

Claude Code 에서는 `start breakout` 이라고 말하면 LLM 리서치까지 붙는다.

## 팀 구성

| 팀 | 하는 일 |
|---|---|
| **1팀 시장환경** | QQQ 10/20/50일선 3개월 차트 · 쿨라매기 판정(골든크로스 경과일·기울기) · FINRA 마진부채 YoY · 주도주 200DIV 과열 · 매일 시장 뉴스 · 주간 주도주 질문 |
| **2팀 종목선정** | RS(1M/3M/6M) 중 하나라도 상위 2% + ADR≥4% + 150일선 위 → 테마 클러스터링 → 종목별 상승 이유·실적 전망치 조정 |
| **3팀 추적** | 선정 종목 누적 관리. 배제 3조건(50일선 3일 이탈 / 편입 후 고점 −40% / 150일선 아래), 자동 재편입, 수동 배제, 전고점 돌파 + 거래량 확인 |
| **4팀 EP·촉매** | 거래량 급증(VOL_X≥2 또는 주간 2배) 종목의 호재 6분류. 6개월 횡보 → 돌파 → 리테스트 → 반등 국면 판정 |
| **5팀 주도섹터** | WRS(1M/3M/6M) 상위 2% 업종과 강세 사유. 기간 비교로 로테이션 판독 |
| **실장** | 5팀 종합 + 오늘의 포커스 + 👁️ 차트를 봐야 할 종목 |

## 명령어

```bash
node scripts/run-breakout.js              # 전체 실행
  --no-git --no-png --no-yahoo --offline --teams=1,2 --date=YYYY-MM-DD
node scripts/backfill-history.js --days=63

node scripts/answer-weekly.js --tickers=NVDA,AVGO --note="AI 인프라"
node scripts/exclude-ticker.js --ticker=XYZ --reason="추세 붕괴"   # --restore --list
node scripts/mark-breakout.js --ticker=PANW --verdict=breakout     # --list
node scripts/open-dashboard.js
```

Claude Code 슬래시 커맨드: `/start-breakout` `/team1`~`/team5` `/chart-check`

## 설계 원칙

1. **숫자는 Node 가 확정, 서술은 LLM 이 담당.** LLM 은 수치를 만들 수 없다.
2. **근거 없으면 "근거 없음".** 뉴스·촉매를 지어내지 않는다.
3. **출처 URL 을 Node 가 실제 HTTP 로 검증**한다 — LLM 이 링크를 지어내면 네트워크가 잡아낸다.
   (단 403/429 는 WSJ 같은 정상 매체의 봇 차단이므로 `미검증`으로 남기고 지우지 않는다)
4. **원본에 없는 데이터는 없다고 말한다.** 계산으로 유도한 값은 `자체 계산`으로 라벨링한다.

## 데이터 소스

RS 사이트(RS·WRS·ADR·VOL_X·150일선) · Yahoo(봉·MA·저항·거래량) ·
SEC EDGAR companyfacts(4분기 실적·8-K) · FINRA(마진부채 xlsx) ·
연합인포맥스(국내 증권사 리포트 + PDF) · Nasdaq RSS(티커별 뉴스)

전부 무료·무인증. 자세한 함정과 주의사항은 [CLAUDE.md](CLAUDE.md) 참조.

## 검증

주요 모듈은 단독 실행으로 검증할 수 있다.

```bash
node scripts/lib/wrs.js                   # 자체계산 WRS 가 사이트와 일치하는지 ← 가장 중요
node scripts/lib/screen.js                # 스크리닝 퍼널
node scripts/lib/regime.js QQQ            # 쿨라매기 판정
node scripts/lib/congestion.js --scan     # 횡보 국면 히스토그램
node scripts/lib/chart/png.js --selftest  # PNG 인코더
node scripts/lib/verify-claims.js --fixture  # 환각 방어
node scripts/data/finra-margin.js
node scripts/data/sec-edgar.js AAPL JPM
node scripts/data/kr-reports.js NVDA
```

검증된 골든값은 [RESUME.md](RESUME.md) 에 있다.

## 자동화

- `tools/run-unattended.ps1` / `.sh` — 무인 실행 런처
- `.github/workflows/daily-breakout.yml` — 평일 UTC 23:00 (Node 파트만; LLM 은 로컬에서)
- 맥미니 이전 시 launchd/cron 에 런처를 등록
