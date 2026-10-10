// 워크플로 task 출력 파일의 .result 를 _out/{team}.json 으로 옮긴다 (손으로 다시 적지 않기 위해).
// 사용법: node state/llm-in/_out/save.js <taskId> <team1|team2|team4|team6>
const fs = require('fs')
const path = require('path')
// 세션 디렉터리 이름은 실행마다 바뀐다 — 하드코딩하면 다음 세션에서 못 찾는다.
const ROOT = '/private/tmp/claude-501/-Users-leetheman-AI-breakout-team'
const [id, name] = process.argv.slice(2)
const out = path.join(__dirname, name + '.json')
const found = fs.readdirSync(ROOT)
  .map((s) => path.join(ROOT, s, 'tasks', id + '.output'))
  .filter((p) => fs.existsSync(p))
  .sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs)[0]
if (!found) throw new Error('task 출력 파일 없음: ' + id)
const o = JSON.parse(fs.readFileSync(found, 'utf8'))
fs.writeFileSync(out, JSON.stringify(o.result))
console.log(name, '저장 →', out, '· keys:', Object.keys(o.result || {}).join(','))
