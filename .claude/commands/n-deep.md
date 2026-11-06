---
description: N 심층분석 — 오닐 CAN SLIM 의 N + 미너비니 이익의 질 (회사 공시 원문 기반). 전 종목 다시 채우기·특정 종목
argument-hint: "[all | TICKER,TICKER] [nopush]"
---

# N 심층분석

2026-11-06 사용자: "N 내용이 너무 부실하다 — 오닐·미너비니 관점에서 N 만 따로 떼어 심층분석. 중요하다."
매일 아침에는 `start breakout` 안에서 새 실적 공시가 난 종목만 돈다. 이 명령은 **전 종목을 다시 채우거나 특정 종목만** 돌릴 때 쓴다.
REPO 는 이 명령을 실행한 저장소(현재 폴더)다. 중간에 사용자에게 묻지 말고 끝까지 진행한다.

## 절차

1. **준비** — 인자(`$ARGUMENTS`)에 따라:
   - `all` → `N_ALL=1 node scripts/prepare-n-args.js` (대상 전부)
   - 티커 목록(`IDXX,TEAM`) → `node scripts/prepare-n-args.js --tickers=IDXX,TEAM`
   - 없음 → `node scripts/prepare-n-args.js` (신규·새 공시만, 하루 8개)
   `state/llm-in/_nargs.json` 의 `items` 가 비면 "N 심층 대상 없음"이라고 보고하고 끝낸다.
2. **조사** — `_nargs.json` 내용을 그대로 args 로 넘긴다(절대경로):
   ```
   Workflow({ scriptPath: '<REPO>/scripts/workflows/n-deep.js', args: <_nargs.json 내용> })
   ```
   종목이 많아도 한 번에 넘긴다 — 워크플로가 동시 실행 수를 알아서 나눈다.
3. **병합** — 워크플로가 끝나면 그 task id 로:
   ```bash
   node scripts/finish-n.js --task=<task id> --push      # 인자에 nopush 가 있으면 --push 를 빼라
   ```
   ⚠️ 결과 JSON 을 손으로 옮겨 적지 마라 — finish-n 이 워크플로 출력 파일에서 읽는다.
   워크플로가 죽어 `resumeFromRunId` 로 재개할 때는 **처음과 똑같은 args** 를 다시 넘긴다.
4. **보고** (한국어, 짧게) — 조사 종목 수 · 판정 분포(충족/부분 충족/미충족/확인 불가) · 실패 티커 · 숫자 대조 삭제 수 · 출처 검증(생존/미검증/강등) · 상한 밖으로 미룬 종목.
   내용은 옮기지 않는다 — 대시보드 종목 팝업의 "N 심층분석" 칸에서 본다.
