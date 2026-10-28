'use strict';
// 팝업 SNS 반응 (2026-10-28) — 그 종목 글인지 · 보관소 글에서 종목 글 고르기 · 정리문 숫자 대조
//   node tests/lib/sns.test.js
const assert = require('assert');
const R = require('../../scripts/data/reddit');
const S = require('../../scripts/sns-watch');
let pass = 0, fail = 0;
const ok = (name, fn) => { try { fn(); console.log('  ✅ ' + name); pass++; } catch (e) { console.log('  ❌ ' + name + '\n     ' + e.message); fail++; } };

ok('그 종목 글인가 — $티커 · 대문자 티커(3글자 이상)만', () => {
  assert.ok(R.relevant({ title: 'Loading up $ON calls' }, 'ON'));
  assert.ok(!R.relevant({ title: 'ALL IN ON this one' }, 'ON'), '짧은 티커는 대문자 단어만으로는 안 센다');
  assert.ok(R.relevant({ title: 'Why I sold', body: 'my TSLA shares' }, 'TSLA'));
  assert.ok(!R.relevant({ title: 'NBISX fund' }, 'NBIS') && !R.relevant({ title: 'bought tsla' }, 'TSLA'));
});
ok('종목 글 고르기 — 최근 1주 · 추천 순 · 날짜 붙임', () => {
  const now = Date.parse('2026-10-28T09:00:00Z'), t = (d) => Math.floor(Date.parse(d) / 1000);
  const store = { posts: {
    a: { id: 'a', sub: 'stocks', title: '$NBIS dip', body: '', t: t('2026-10-26T10:00:00Z'), score: 5, comments: 1, url: 'u' },
    b: { id: 'b', sub: 'wallstreetbets', title: 'NBIS bear case', body: '', t: t('2026-10-27T10:00:00Z'), score: 50, comments: 9, url: 'u' },
    c: { id: 'c', sub: 'stocks', title: 'NBIS old', body: '', t: t('2026-10-19T10:00:00Z'), score: 999, comments: 1, url: 'u' },
    d: { id: 'd', sub: 'stocks', title: 'AMD only', body: '', t: t('2026-10-27T10:00:00Z'), score: 80, comments: 1, url: 'u' } } };
  const p = R.postsFor('NBIS', { now, store });
  assert.deepStrictEqual(p.map((x) => x.id), ['b', 'a'], '8일 전 글·다른 종목 글은 뺀다');
  assert.strictEqual(p[0].date, '2026-10-27'); assert.ok(!('t' in p[0]));
});
ok('정리문 — 글에 없는 숫자 문장은 지우고, 분위기 값은 셋 중 하나', () => {
  const posts = [{ title: 'NBIS at 152', body: 'buying every 5 dollars down' }];
  const m = S.cleanMood({ mood: 'moon', summary: '152달러까지 밀렸다는 글이 많다. 목표가 400달러라는 주장도 있다.', heat: '' }, posts);
  assert.strictEqual(m.summary, '152달러까지 밀렸다는 글이 많다.'); assert.strictEqual(m.mood, 'mixed');
  assert.strictEqual(S.cleanMood(null, posts), null);
});
console.log(`\n${fail ? '❌' : '✅'} 통과 ${pass} · 실패 ${fail}`);
process.exit(fail ? 1 : 0);
