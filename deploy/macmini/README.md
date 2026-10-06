# 맥미니에서 24시간 돌리기

맥미니가 하는 일은 둘이다. 둘 다 Claude 없이 돈다.

| 언제 (한국 시간) | 무엇 | 걸리는 시간 |
|---|---|---|
| 매일 07:10 | 아침 스캔 → 6팀 매수 계획 → 리포트 → 대시보드 갱신 | 1분 |
| 매일 22:20 ~ 장 마감 | 밤 루프 — 5분마다 관심 종목을 보고 모의 매매 | 미국 장이 열리는 날만 |

뉴스·촉매 조사(2·4팀 LLM 리서치·6팀 심층 분석과 실장 종합)는 여기에 없다. 그건 Claude Code 에서 `start breakout` 으로 돌린다.
6팀의 매수 계획과 모의 매매는 그 조사 없이도 돈다.

## 빠른 길

비공개 저장소 `305rhfueo-ui/mac-handoff` 의 `setup-mac.sh` 가 아래 5~7번을 한 번에 한다
(저장소 받기 · 한투 키 입력 · Claude 기억 넣기 · 이 폴더의 `install.sh` 실행). 그쪽 README 를 따르면 된다.

## 설치 (약 30분)

1. **맥 설정**
   - 시스템 설정 → 일반 → 날짜 및 시간 → 시간대 **서울**
   - 시스템 설정 → 에너지 → "디스플레이가 꺼져 있을 때 자동으로 잠자기 방지" **켜기**, "정전 후 자동으로 시작" **켜기**
   - 시스템 설정 → 사용자 및 그룹 → 자동 로그인 **켜기** (재부팅 뒤에도 작업이 돌게)

2. **Node** — https://nodejs.org 에서 LTS(20 이상) 설치. 터미널에서 `node -v` 로 확인.

3. **Git** — 터미널에 `git` 을 치면 설치 안내가 뜬다. 설치 후:
   ```bash
   git config --global user.name "이름"
   git config --global user.email "GitHub 메일"
   ```

4. **GitHub 로그인** — 대시보드를 올리려면 push 권한이 필요하다.
   ```bash
   brew install gh && gh auth login      # 또는 SSH 키를 등록
   ```

5. **저장소 받기**
   ```bash
   cd ~ && git clone https://github.com/305rhfueo-ui/breakout-team.git && cd breakout-team
   ```

6. **`.env` 옮기기** — git 에 없다. PC 의 `breakout-team/.env` 내용을 맥의 `~/breakout-team/.env` 에 그대로 붙여 넣는다.
   메신저·메일로 보내지 말고 USB 나 AirDrop 을 쓴다.

7. **설치 스크립트**
   ```bash
   bash deploy/macmini/install.sh
   ```
   테스트 → 한투 연결 → push 권한을 확인하고 작업 2개를 등록한다. 하나라도 실패하면 멈추고 이유를 말한다.

## PC 와 같이 쓸 때 — 한 가지 규칙

**숫자를 만드는 기계는 하나여야 한다.** 맥미니로 옮긴 뒤에는 PC 에서 `node scripts/run-breakout.js` 나 밤 루프를 돌리지 않는다.
두 기계가 같은 파일을 쓰면 충돌하고, 충돌하면 push 를 멈추게 해 두었다(덮어쓰지 않는다).

PC 의 Claude Code 에서 `start breakout` 을 돌릴 때는 먼저 `git pull` 로 맥미니가 만든 아침 결과를 받는다.

## 확인

```bash
node scripts/paper-trader.js --status        # 지금 상태 (사지 않는다)
tail -50 ~/Library/Logs/breakout-team/night.log
launchctl list | grep breakout               # 등록된 작업
```
대시보드 6️⃣ 매매 탭의 "루프" 줄에 마지막으로 돈 시각이 나온다. 밤에 이 시각이 5분마다 바뀌면 정상이다.

## 알림 (선택)

`.env` 에 텔레그램 봇을 넣으면 모의 매수·청산 때 폰으로 온다. 수량(주)은 알림에만 나온다.
```
TELEGRAM_TOKEN=…
TELEGRAM_CHAT_ID=…
```

## 끄기

```bash
bash deploy/macmini/install.sh remove
```

## Windows PC 에서 임시로 돌릴 때

맥미니가 오기 전에는 PC 에서 밤마다 직접 켠다. PC 가 잠들면 멈춘다.
```
cd "…\breakout-team"
node scripts/run-breakout.js          아침에 한 번
node scripts/night-loop.js            밤 10시 20분쯤 켜 두고 잔다
```
