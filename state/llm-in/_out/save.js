// 워크플로 task 출력 파일의 .result 를 _out/{team}.json 으로 옮긴다 (손으로 다시 적지 않기 위해).
// 사용법: node state/llm-in/_out/save.js <taskId> <team1|team2|team4|team6>
const fs = require('fs')
const path = require('path')
const TASKS = '/private/tmp/claude-501/-Users-leetheman-AI-breakout-team/229cdfa2-0406-4eff-af7a-fb789de35a8c/tasks'
const [id, name] = process.argv.slice(2)
const out = path.join(__dirname, name + '.json')
const o = JSON.parse(fs.readFileSync(path.join(TASKS, id + '.output'), 'utf8'))
fs.writeFileSync(out, JSON.stringify(o.result))
console.log(name, '저장 →', out, '· keys:', Object.keys(o.result || {}).join(','))
