---
description: 오늘 눈으로 차트를 봐야 할 종목 + 육안 판정 기록/배제 지시
argument-hint: "[없음 | 돌파 TICKER | 배제 TICKER 사유]"
---

# 차트 확인

REPO: `c:\Users\305le\OneDrive\바탕 화면\클로드코드test\breakout-team`

## 인자 없이 부른 경우 — 오늘 봐야 할 종목 보고

`dashboard/data/chartcheck.js` 의 `window.CHARTCHECK_DATA` 를 읽어 종목별로 보고한다.

각 종목마다 **차트에서 무엇을 확인할지** 구체적으로 알려준다:
- 저항선 가격이 있으면 그 가격을 뚫는지
- 뚫을 때 거래량이 20일 평균의 2배 이상인지 (VOL_X ≥ 2.0 또는 주간 배수 ≥ 2.0)
- 변동성이 계속 줄고 있는지 (수축비)
- 거래량이 마르고 있는지 (5일/20일 평균비)

Finviz·TradingView 링크도 함께 준다.
`dashboard/data/team3.js` 의 `breakouts` 와 `team4.js` 의 congestion `retest`/`bounce_trigger` 도 함께 짚는다.

## "돌파 TICKER" — 육안 판정 기록

사용자가 차트를 보고 돌파를 확인했다고 하면 기록한다.

```bash
cd "<REPO>" && node scripts/mark-breakout.js --ticker=TICKER --verdict=breakout --note="사용자가 말한 근거"
```

verdict 는 `breakout`(돌파) / `watching`(관찰) / `failed`(실패) / `reject`(관심제외) 중 하나.
기록 후 대시보드 3팀 탭에 시스템 판정과 나란히 표시된다는 것을 알린다.

## "배제 TICKER 사유" — 수동 배제

```bash
cd "<REPO>" && node scripts/exclude-ticker.js --ticker=TICKER --reason="사유"
```

복구는 `--restore`, 전체 목록은 `--list`.
수동 배제는 자동 재편입보다 우선한다(2팀이 다시 뽑아도 복귀하지 않음)는 점을 알린다.

## 규칙

- 시스템 판정은 **보조 자료**다. 최종 판단은 사용자의 육안 확인이라는 점을 분명히 한다.
- 수치가 애매하면 "판정불가"라고 하고 단정하지 마라.
