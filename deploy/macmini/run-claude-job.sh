#!/bin/bash
# Claude 가 돌아야 하는 작업을 launchd 에서 무인으로 돌리고, 결과를 텔레그램으로 알린다.
#
#   bash deploy/macmini/run-claude-job.sh research   start breakout (LLM 조사 + 실장 리포트)
#   bash deploy/macmini/run-claude-job.sh review     /review (모의투자 주간 리뷰)
#
# 왜 래퍼가 필요한가: 새벽에 무인으로 돌면 `⛔ start breakout 중단`(RS 결측률 >10%)을 볼 사람이 없다.
#   성공 · 중단 · 오류 · 시간 초과를 전부 텔레그램으로 보내 폰에서 확인하게 한다.
#
# 권한: 허락을 통째로 끄지 않는다. 아래 ALLOWED 목록의 도구만 허용한다 — node·git·gh 와 파일 읽기/쓰기,
#   조사용 웹 도구, 팀 워크플로. rm · sudo · 임의 셸 명령은 목록에 없으므로 실행되지 않는다.
#   이 저장소 안에서 이 사용자가 돌리는 자기 작업이라는 전제다. 다른 폴더에서는 쓰지 말 것.
# 모델: Opus 5 고정 (--model). 세션 기본값(Fable 등)을 물려받지 않게 한다 — Fable 은 주간 한도가 따로 잡힌다.
# 전제: claude CLI 설치 + 로그인 (npm i -g @anthropic-ai/claude-code && claude login). 없으면 텔레그램으로 알리고 끝.
# 로그: ~/Library/Logs/breakout-team/<job>-<날짜>.log (키·시크릿은 어디에도 찍지 않는다)
# 시범 운영: 2026-09-30 ~ 10-03 (화~토) 돌려 보고 사용량·결과를 보고 계속할지 정한다.

set -u
JOB="${1:-}"
REPO="$(cd "$(dirname "$0")/../.." && pwd)"
LOGS="$HOME/Library/Logs/breakout-team"
MAX_MIN=90                                   # 이 시간을 넘기면 강제 종료 (macOS 에는 timeout 명령이 없다)
mkdir -p "$LOGS"
cd "$REPO"

# 텔레그램 — 저장소의 notify.js 를 그대로 쓴다 (.env 의 TELEGRAM_TOKEN · CHAT_ID). 실패해도 이 스크립트는 계속 간다.
tg() {
  node -e 'require("./scripts/lib/util").loadEnv(); require("./scripts/lib/notify").notify(process.argv[1]).then((r) => process.exit(r.ok ? 0 : 1));' "$1" >/dev/null 2>&1 || true
}

case "$JOB" in
  research) PROMPT="start breakout"; TITLE="📊 실장 리포트"; URL="https://305rhfueo-ui.github.io/breakout-team/" ;;
  review)   PROMPT="/review";        TITLE="📋 주간 리뷰";   URL="https://github.com/305rhfueo-ui/breakout-team/blob/master/docs/STRATEGY-LOG.md" ;;
  *) echo "용법: $0 research|review"; exit 2 ;;
esac

# launchd 는 사용자의 셸 PATH 를 모른다. claude 가 있을 만한 곳을 직접 찾는다.
CLAUDE="$(command -v claude 2>/dev/null || true)"
for c in /opt/homebrew/bin/claude /usr/local/bin/claude "$HOME/.local/bin/claude"; do
  [ -z "$CLAUDE" ] && [ -x "$c" ] && CLAUDE="$c"
done
if [ -z "$CLAUDE" ]; then
  tg "⚠️ $TITLE 을 돌리지 못했습니다 — 맥미니에 claude CLI 가 없습니다. 터미널에서:  npm install -g @anthropic-ai/claude-code && claude login"
  exit 1
fi

# 허용 도구 목록. 여기 없는 건 실행되지 않는다.
ALLOWED=(
  "Bash(node *)" "Bash(git *)" "Bash(gh *)"
  "Bash(launchctl list*)" "Bash(ls *)" "Bash(cat *)" "Bash(tail *)" "Bash(head *)" "Bash(grep *)"
  "Read" "Write" "Edit" "Glob" "Grep"
  "WebFetch" "WebSearch"
  "Workflow" "Agent" "Skill"
)

HEAD0="$(git rev-parse HEAD 2>/dev/null)"     # 끝난 뒤 커밋이 늘었는지 본다 — 안 늘었으면 새로 만든 것이 없다
OUT="$LOGS/$JOB-$(date +%F).log"
STARTED="$(date '+%m/%d %H:%M')"
echo "=== $JOB 시작 $STARTED  ($CLAUDE, opus-5, 최대 ${MAX_MIN}분)" >> "$OUT"

# -p: 비대화(헤드리스) 실행. 감시 프로세스가 MAX_MIN 뒤에 강제 종료한다.
"$CLAUDE" -p "$PROMPT" --model claude-opus-5 --allowedTools "${ALLOWED[@]}" >> "$OUT" 2>&1 &
PID=$!
( sleep $((MAX_MIN * 60)); kill "$PID" 2>/dev/null && echo "=== ${MAX_MIN}분 초과로 강제 종료" >> "$OUT" ) &
WATCH=$!
wait "$PID"; RC=$?
kill "$WATCH" 2>/dev/null; wait "$WATCH" 2>/dev/null

ENDED="$(date '+%H:%M')"
if grep -q '강제 종료' "$OUT"; then
  tg "⏱ $TITLE 시간 초과 ($STARTED 시작, ${MAX_MIN}분 넘어 중단) — 로그: $OUT"
  exit 124
elif [ "$RC" -ne 0 ]; then
  tg "❌ $TITLE 실패 ($STARTED → $ENDED, 종료 $RC)
$(tail -3 "$OUT" | cut -c1-300)
로그: $OUT"
  exit "$RC"
elif grep -q '⛔' "$OUT"; then
  tg "⛔ $TITLE 중단 ($STARTED) — RS 결측률이 높거나 사이트가 발행을 보류한 날입니다. 강행하려면 Claude Code 에서 start breakout 을 직접 돌리고 --force 여부를 정하세요.
$(grep '⛔' "$OUT" | tail -1 | cut -c1-200)"
elif [ "$JOB" = research ] && [ "$(git rev-parse HEAD 2>/dev/null)" = "$HEAD0" ]; then
  # 2026-09-29 첫 시험: 오늘 분이 이미 있어 Claude 가 재실행하지 않았는데 "업데이트 완료"라고 알렸다. 구분한다.
  tg "ℹ️ $TITLE — 새로 만든 것 없음 ($STARTED → $ENDED). 오늘 분이 이미 있어 다시 만들지 않았습니다.
$URL"
else
  tg "$TITLE 업데이트 완료 ($STARTED → $ENDED)
$URL"
fi
