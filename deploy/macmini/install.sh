#!/bin/bash
# breakout-team 을 맥미니에서 24시간 돌리기 위한 설치 스크립트.
#
#   bash deploy/macmini/install.sh          설치 (여러 번 실행해도 된다)
#   bash deploy/macmini/install.sh remove   등록 해제
#
# 하는 일: 테스트 → 한투 연결 확인 → launchd 작업 2개 등록
#   com.breakout.daily  매일 07:10  morning.sh — RS 갱신 대기 → 아침 스캔·push → 화~토 start breakout
#   com.breakout.night  매일 22:20  밤 루프 — 미국 장이 열리는 날에만 돌고, 아니면 바로 끝난다
# 시각은 맥의 시스템 시간대 기준이다. 시스템 설정 → 일반 → 날짜 및 시간이 "서울"인지 확인할 것.

set -e
REPO="$(cd "$(dirname "$0")/../.." && pwd)"
AGENTS="$HOME/Library/LaunchAgents"
LOGS="$HOME/Library/Logs/breakout-team"
JOBS="com.breakout.daily com.breakout.night"
# Claude 가 돌아야 하는 작업 — claude CLI 가 있을 때만 등록한다 (run-claude-job.sh 참고)
#   com.breakout.review    일   09:00  /review (모의투자 주간 리뷰)
# start breakout 은 따로 등록하지 않는다 — 아침 스캔 뒤에 morning.sh 가 잇는다.
CLAUDE_JOBS="com.breakout.review"
# 예전에 따로 등록했던 작업 — 지운다 (09:00 에 따로 돌면 낡은 스캔을 재사용했다, 2026-09-30·10-01)
for j in com.breakout.research; do launchctl unload "$AGENTS/$j.plist" 2>/dev/null || true; rm -f "$AGENTS/$j.plist"; done

if [ "$1" = "remove" ]; then
  for j in $JOBS $CLAUDE_JOBS; do launchctl unload "$AGENTS/$j.plist" 2>/dev/null || true; rm -f "$AGENTS/$j.plist"; done
  echo "등록을 해제했습니다."
  exit 0
fi

NODE="$(command -v node || true)"
if [ -z "$NODE" ]; then echo "❌ Node 가 없습니다. https://nodejs.org 에서 LTS 를 설치하세요."; exit 1; fi
echo "Node: $NODE ($("$NODE" -v))"
if [ ! -f "$REPO/.env" ]; then
  echo "❌ $REPO/.env 가 없습니다. PC 의 .env 를 그대로 복사해 오세요 (git 에는 없습니다)."
  exit 1
fi
if ! grep -q '^CACHE_DIR=' "$REPO/.env"; then
  echo "CACHE_DIR=$HOME/Library/Caches/breakout-team" >> "$REPO/.env"
  echo ".env 에 CACHE_DIR 를 추가했습니다."
fi
if ! git -C "$REPO" config user.email >/dev/null; then
  echo "❌ git 사용자 정보가 없습니다:  git config --global user.name \"이름\" && git config --global user.email \"메일\""
  exit 1
fi

cd "$REPO"
echo "── 테스트"
"$NODE" tests/run-all.js | tail -1
echo "── 한투 연결"
"$NODE" scripts/lib/kis.js QQQ | head -2
echo "── GitHub push 권한"
git ls-remote --exit-code origin >/dev/null && echo "원격 접근 OK" || { echo "❌ 원격에 접근할 수 없습니다. gh auth login 또는 SSH 키를 설정하세요."; exit 1; }

mkdir -p "$AGENTS" "$LOGS"
for j in $JOBS; do
  sed -e "s|__NODE__|$NODE|g" -e "s|__REPO__|$REPO|g" -e "s|__LOGS__|$LOGS|g" "$REPO/deploy/macmini/$j.plist" > "$AGENTS/$j.plist"
  launchctl unload "$AGENTS/$j.plist" 2>/dev/null || true
  launchctl load "$AGENTS/$j.plist"
  echo "등록: $j"
done
if command -v claude >/dev/null 2>&1 || [ -x /usr/local/bin/claude ] || [ -x /opt/homebrew/bin/claude ]; then
  for j in $CLAUDE_JOBS; do
    sed -e "s|__REPO__|$REPO|g" -e "s|__LOGS__|$LOGS|g" "$REPO/deploy/macmini/$j.plist" > "$AGENTS/$j.plist"
    launchctl unload "$AGENTS/$j.plist" 2>/dev/null || true
    launchctl load "$AGENTS/$j.plist"
    echo "등록: $j"
  done
else
  echo "claude CLI 가 없어 research/review 작업은 건너뜁니다.  npm install -g @anthropic-ai/claude-code && claude login  뒤에 다시 실행하세요."
fi

echo
echo "✅ 설치 완료"
echo "   로그: $LOGS"
echo "   지금 한 번 돌려 보기:  node scripts/run-breakout.js --no-git"
echo "   밤 루프 상태 보기:     node scripts/paper-trader.js --status"
echo "   맥이 잠들지 않게:      시스템 설정 → 에너지 → '디스플레이가 꺼져 있을 때 자동으로 잠자기 방지' 켜기"
