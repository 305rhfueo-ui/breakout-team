#!/bin/bash
# 7팀(지우) — 텔레그램으로 받은 한 종목을 분석한다. scripts/tg-listener.js 가 부른다.
#
#   bash deploy/macmini/run-ondemand.sh SNOW
#
# 세 단계: ① 재료 수집(Node, AI 없음) ② Claude 헤드리스로 /deep SNOW (워크플로 실행·결과 저장만) ③ 검증·대시보드·텔레그램(Node)
#
# 권한: 임의 종목의 뉴스·증권사 PDF 를 읽는 에이전트이므로 run-claude-job.sh 보다 **좁게** 준다 —
#   셸·git·gh 가 없다. 파일 읽기/쓰기·웹 조사·워크플로만. 재료 수집과 git·텔레그램은 이 래퍼의 Node 가 한다.
# 모델: Opus 5 (결론은 사용자 결정대로 AI 가 낸다). 최대 25분.
# 종료 코드: 0 성공 · 1 분석 실패(텔레그램으로 사유를 이미 보냄) · 2 사용법 오류

set -u
T="${1:-}"
case "$T" in ''|*[!A-Za-z./-]*) echo "용법: $0 TICKER"; exit 2 ;; esac
REPO="$(cd "$(dirname "$0")/../.." && pwd)"
LOGS="$HOME/Library/Logs/breakout-team"
MAX_MIN=25
mkdir -p "$LOGS"
cd "$REPO"
OUT="$LOGS/ondemand-$(date +%F).log"
DAY="$(node -e 'console.log(require("./scripts/lib/util").today())')"

tg() {
  node -e 'require("./scripts/lib/util").loadEnv(); require("./scripts/lib/notify").notify(process.argv[1]).then((r) => process.exit(r.ok ? 0 : 1));' "$1" >/dev/null 2>&1 || true
}
echo "=== ondemand $T 시작 $(date '+%m/%d %H:%M')" >> "$OUT"

# ① 재료
PREP="$(node scripts/prepare-ondemand.js "$T" 2>>"$OUT" | tail -1)"
echo "$PREP" >> "$OUT"
case "$PREP" in
  *'"ok":true'*) ;;
  *'"error":"etf"'*) tg "ℹ️ $T: ETF·ETN 은 분석하지 않습니다."; exit 1 ;;
  *'"error":"not_found"'*) tg "❓ $T: 그런 종목이 없습니다."; exit 1 ;;
  *) tg "❌ $T: 분석 재료를 모으지 못했습니다 ($(echo "$PREP" | cut -c1-200))"; exit 1 ;;
esac
TAG="$(echo "$PREP" | node -e 'let s="";process.stdin.on("data",(d)=>s+=d).on("end",()=>{try{console.log(JSON.parse(s).tag)}catch(e){console.log("")}})')"
[ -z "$TAG" ] && { tg "❌ $T: 재료 파일 이름을 읽지 못했습니다"; exit 1; }
rm -f "state/ondemand/$DAY/$TAG-out.json"

# ② Claude 헤드리스
CLAUDE="$(command -v claude 2>/dev/null || true)"
for c in /opt/homebrew/bin/claude /usr/local/bin/claude "$HOME/.local/bin/claude"; do
  [ -z "$CLAUDE" ] && [ -x "$c" ] && CLAUDE="$c"
done
[ -z "$CLAUDE" ] && { tg "⚠️ $T: 맥미니에 claude CLI 가 없어 분석하지 못했습니다."; exit 1; }
ALLOWED=( "Read" "Write" "Glob" "Grep" "WebFetch" "WebSearch" "Workflow" "Agent" "TaskStop" )
RUN="$(mktemp)"
"$CLAUDE" -p "/deep $TAG" --model claude-opus-5 --allowedTools "${ALLOWED[@]}" > "$RUN" 2>&1 &
PID=$!
( sleep $((MAX_MIN * 60)); kill "$PID" 2>/dev/null && touch "$RUN.timeout" ) &
WATCH=$!
wait "$PID"; RC=$?
kill "$WATCH" 2>/dev/null; wait "$WATCH" 2>/dev/null
cat "$RUN" >> "$OUT"
if [ -f "$RUN.timeout" ]; then rm -f "$RUN" "$RUN.timeout"; tg "⏱ $T: 분석이 ${MAX_MIN}분을 넘어 중단했습니다. 잠시 뒤 \"$T 다시\" 로 재시도해 주세요."; exit 1; fi
rm -f "$RUN"
if [ ! -s "state/ondemand/$DAY/$TAG-out.json" ]; then
  tg "❌ $T: 분석 결과가 만들어지지 않았습니다 (종료 $RC). 잠시 뒤 \"$T 다시\" 로 재시도해 주세요. 로그: $OUT"
  exit 1
fi

# ③ 검증 · 대시보드 · 텔레그램
FIN="$(node scripts/finish-ondemand.js "$TAG" --date="$DAY" 2>>"$OUT" | tail -1)"
echo "$FIN" >> "$OUT"
case "$FIN" in
  *'"ok":true'*) exit 0 ;;
  *) tg "❌ $T: 결과를 정리하지 못했습니다 ($(echo "$FIN" | cut -c1-200))"; exit 1 ;;
esac
