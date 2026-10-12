'use strict';
// 한국투자증권 해외종목 마스터 (나스닥·뉴욕·아멕스) — 키 없이 받는 공개 파일, 매일 갱신 (2026-10-13 확인).
//   https://new.real.download.dws.co.kr/common/master/{nas|nys|ams}mst.cod.zip  (탭 구분, cp949)
//   열: [4]=티커(클래스·우선주는 "BRK/B") [6]=한글명 [7]=영문명 [8]=구분(2=주식, 3=ETF·ETN) [12]=기준가 [2]=거래소
// 7팀 텔레그램 요청의 티커 검증(없는 종목·ETF 거절)과 회사명·거래소에 쓴다. 하루 캐시. 절대 throw 하지 않는다.
//
//   lookup('snow') → { ok:true, ticker:'SNOW', exchange:'NYS', nameKo, nameEn, isEtf:false, basePrice } | { ok:false, reason:'not_found'|'master_unavailable' }
const zlib = require('zlib');
const cache = require('../lib/cache');

const BASE = 'https://new.real.download.dws.co.kr/common/master';
const EX = ['nas', 'nys', 'ams'];

// zip 안에 파일이 하나뿐이다 — 중앙 디렉터리에서 크기·오프셋을 읽어 그 하나만 푼다 (의존성 추가 없이)
function unzipFirst(buf) {
  const eocd = buf.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]));
  if (eocd < 0) throw new Error('zip 아님');
  const cd = buf.readUInt32LE(eocd + 16);
  if (buf.readUInt32LE(cd) !== 0x02014b50) throw new Error('zip 중앙 디렉터리 없음');
  const method = buf.readUInt16LE(cd + 10), csize = buf.readUInt32LE(cd + 20), lho = buf.readUInt32LE(cd + 42);
  const start = lho + 30 + buf.readUInt16LE(lho + 26) + buf.readUInt16LE(lho + 28);
  const data = buf.subarray(start, start + csize);
  return method === 0 ? data : zlib.inflateRawSync(data);
}

async function fetchOne(ex) {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 30000);
  try {
    const r = await fetch(`${BASE}/${ex}mst.cod.zip`, { signal: ctl.signal });
    if (!r.ok) return null;
    const text = new TextDecoder('euc-kr').decode(unzipFirst(Buffer.from(await r.arrayBuffer())));
    const out = {};
    for (const line of text.split('\n')) {
      const c = line.split('\t');
      if (c.length < 13 || !c[4]) continue;
      out[c[4].trim().toUpperCase()] = { ex: c[2], ko: c[6].trim(), en: c[7].trim(), type: c[8], px: Number(c[12]) || null };
    }
    return Object.keys(out).length > 500 ? out : null;      // 반쯤 받은 파일을 캐시하지 않는다
  } catch (e) { return null; } finally { clearTimeout(timer); }
}

async function loadMaster() {
  try {
    return await cache.through('kisMaster', 'us', async () => {
      const parts = await Promise.all(EX.map(fetchOne));
      if (parts.some((p) => !p)) return null;               // 셋 다 받아야 "없는 종목"이라고 말할 수 있다
      return Object.assign({}, ...parts);
    }, cache.DAY);
  } catch (e) { return null; }
}

// 사용자가 쓰는 표기(BRK.B · BRK-B · brk/b)를 마스터 표기(BRK/B)로
const keyOf = (t) => String(t || '').trim().toUpperCase().replace(/[.\-]/g, '/');

async function lookup(ticker) {
  const m = await loadMaster();
  if (!m) return { ok: false, reason: 'master_unavailable' };
  const k = keyOf(ticker), r = m[k];
  if (!r) return { ok: false, reason: 'not_found' };
  return { ok: true, ticker: k.replace(/\//g, '.'), exchange: r.ex, nameKo: r.ko || null, nameEn: r.en || null, isEtf: r.type !== '2', basePrice: r.px };
}

module.exports = { lookup, loadMaster, unzipFirst, keyOf };
