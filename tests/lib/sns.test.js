'use strict';
// 팝업 SNS 반응 (2026-10-28) — 레딧 검색 조각 읽기 · 그 종목 글인지 · 정리문 숫자 대조
//   node tests/lib/sns.test.js
const assert = require('assert');
const R = require('../../scripts/data/reddit');
const S = require('../../scripts/sns-watch');
let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

const unit = (id, title, sub, href, ts, votes, comments) => `<search-telemetry-tracker data-faceplate-tracking-context="${JSON.stringify({ action_info: { type: 'post' }, post: { id: `t3_${id}`, title }, subreddit: { name: sub } }).replace(/&/g, '&amp;').replace(/"/g, '&quot;')}">
  ${href ? `<a data-testid="post-title" href="${href}">${title}</a>` : ''}<faceplate-timeago ts="${ts}"></faceplate-timeago>
  <faceplate-number number="${votes}"></faceplate-number> votes <faceplate-number number="${comments}"></faceplate-number> comments</search-telemetry-tracker>`;
ok('검색 조각 → 글(제목·게시판·날짜·추천·댓글·주소), 중복·글 아닌 조각은 뺀다', () => {
  const html = `<div view-events="search/view/post">${unit('abc', 'NBIS at 152 & falling', 'NBIS_Stock', '/r/NBIS_Stock/comments/abc/nbis_at_152/?utm=x', '2026-10-26T15:00:00.000000+0000', 78, 40)}
    ${unit('abc', 'dup', 'NBIS_Stock', '', '2026-10-26T15:00:00+0000', 1, 1)}
    <search-telemetry-tracker data-faceplate-tracking-context="{&quot;action_info&quot;:{&quot;type&quot;:&quot;community&quot;}}"></search-telemetry-tracker>
    ${unit('xyz', 'Is it over?', 'stocks', '', '2026-10-27T01:00:00+0000', 5, 2)}</div>`;
  const p = R.parseSearch(html);
  assert.strictEqual(p.length, 2);
  assert.deepStrictEqual(p[0], { id: 'abc', sub: 'NBIS_Stock', title: 'NBIS at 152 & falling', body: '', date: '2026-10-26', score: 78, comments: 40, url: 'https://www.reddit.com/r/NBIS_Stock/comments/abc/nbis_at_152/' });
  assert.strictEqual(p[1].url, 'https://www.reddit.com/r/stocks/comments/xyz/');
});
ok('그 종목 글인가 — $티커 · 대문자 티커(3글자 이상) · 전용 게시판만', () => {
  assert.ok(R.relevant({ title: 'Loading up $ON calls', sub: 'stocks' }, 'ON'));
  assert.ok(!R.relevant({ title: 'ALL IN ON this one', sub: 'stocks' }, 'ON'), '짧은 티커는 대문자 단어만으로는 안 센다');
  assert.ok(R.relevant({ title: 'Why I sold', body: 'my TSLA shares', sub: 'stocks' }, 'TSLA'));
  assert.ok(!R.relevant({ title: 'NBISX fund', sub: 'stocks' }, 'NBIS'));
  assert.ok(R.relevant({ title: 'Are u still buying the dip?', sub: 'NBIS_Stock' }, 'NBIS') && R.relevant({ title: 'q', sub: 'sofistock' }, 'SOFI'));
});
ok('정리문 — 글에 없는 숫자 문장은 지우고, 분위기 값은 셋 중 하나', () => {
  const posts = [{ title: 'NBIS at 152', body: 'buying every 5 dollars down' }];
  const m = S.cleanMood({ mood: 'moon', summary: '152달러까지 밀렸다는 글이 많다. 목표가 400달러라는 주장도 있다.', heat: '' }, posts);
  assert.strictEqual(m.summary, '152달러까지 밀렸다는 글이 많다.'); assert.strictEqual(m.mood, 'mixed');
  assert.strictEqual(S.cleanMood(null, posts), null);
});
console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
