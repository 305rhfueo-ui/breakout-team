---
description: 2팀 종목선정 상세 보고 — breakout-team
---

# 2팀 · 종목선정

사용자가 `2팀`, `/team2`, `종목선정` 중 무엇으로 부르든 이 팀의 분석 자료를 최대한 상세히 보고한다.

## 자료 위치

REPO: `~/AI/breakout-team`

1. `dashboard/data/team2.js` 의 `TEAM2_DATA (dashboard/data/team2.js)` 를 읽는다 (`window.TEAM2_DATA = {...};` 형태)
   2026-10-06부터 `lists` (도윤 5개 목록: dollar 거래대금 상위 · m1/m3/m6 RS 상위 2% · all 세 기간 공통 — 목록마다 items·industries·lone),
   `listPicks` (목록 전용 종목, picks 와 같은 모양), `themes.llm.lists` (목록별 AI 공통 테마) 가 있다. **보고는 목록 순서대로.**
2. `analysis/reports/{오늘날짜}-breakout.md` 의 2팀 섹션도 함께 참고한다

파일이 없거나 오래됐으면 먼저 실행한다:
```bash
cd "~/AI/breakout-team" && node scripts/run-breakout.js
```

## 보고 내용

퍼널(유니버스→RS 상위2% 합집합→ADR≥4→150일선 위), 선정 종목 전체 표(RS 3기간 값·백분위, 섹터/업종, CY/NY Trend, Up/Down, BBWTHD, 52주대비, VOL_X, 주간거래량배수, WRS 3기간, 150MA 기울기, 200DIV), 테마 클러스터, 종목별 리서치(상승 이유·실적 전망치 조정)와 출처

## 보고 규칙

- **숫자를 바꾸지 마라.** 파일에 있는 값을 그대로 전달한다.
- 값이 `null` 이거나 상태가 `pending`/`no_source` 면 **"판정불가" 또는 "근거 없음"으로 그대로 표기**한다. 채워 넣지 마라.
- 리서치 커버리지가 상한에 걸려 빠진 종목이 있으면 그 사실을 알린다.
- 표가 길면 핵심 컬럼 위주로 보여주되, 사용자가 더 요청하면 전체를 준다.
- 마지막에 대시보드 경로를 안내한다: `breakout-team/dashboard/breakout-room.html`
