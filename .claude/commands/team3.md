---
description: 3팀 추적 상세 보고 — breakout-team
---

# 3팀 · 추적

사용자가 `3팀`, `/team3`, `추적` 중 무엇으로 부르든 이 팀의 분석 자료를 최대한 상세히 보고한다.

## 자료 위치

REPO: `c:\Users\305le\OneDrive\바탕 화면\클로드코드test\breakout-team`

1. `dashboard/data/team3.js` 의 `TEAM3_DATA (dashboard/data/team3.js)` 를 읽는다 (`window.TEAM3_DATA = {...};` 형태)
2. `analysis/reports/{오늘날짜}-breakout.md` 의 3팀 섹션도 함께 참고한다

파일이 없거나 오래됐으면 먼저 실행한다:
```bash
cd "c:\Users\305le\OneDrive\바탕 화면\클로드코드test\breakout-team" && node scripts/run-breakout.js
```

## 보고 내용

누적 추적 표(활성/휴면/배제), 오늘 배제된 종목과 사유(50일선 3일 이탈/고점 -40%/150일선 아래), 재편입 이력, 전고점 돌파 종목과 거래량 확인(VOL_X 또는 주간 2배), Congestion 국면, 사용자 육안 판정 기록

## 보고 규칙

- **숫자를 바꾸지 마라.** 파일에 있는 값을 그대로 전달한다.
- 값이 `null` 이거나 상태가 `pending`/`no_source` 면 **"판정불가" 또는 "근거 없음"으로 그대로 표기**한다. 채워 넣지 마라.
- 리서치 커버리지가 상한에 걸려 빠진 종목이 있으면 그 사실을 알린다.
- 표가 길면 핵심 컬럼 위주로 보여주되, 사용자가 더 요청하면 전체를 준다.
- 마지막에 대시보드 경로를 안내한다: `breakout-team/dashboard/breakout-room.html`
