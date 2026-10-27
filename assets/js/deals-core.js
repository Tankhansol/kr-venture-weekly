/* KR Venture Weekly — 딜 모아보기 계산 로직 (화면과 분리, Node 테스트 가능) */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.KVWDeals = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function str(v) { return v === null || v === undefined ? '' : String(v); }

  function numOrNull(v) {
    if (v === null || v === undefined || v === '' || typeof v === 'boolean') return null;
    var n = typeof v === 'number' ? v : Number(String(v).replace(/,/g, ''));
    return isFinite(n) ? n : null;
  }

  // 같은 딜 판정: 기업명(대소문자·공백 무시) + 금액. 라운드명은 호마다 표기가 달라 제외
  function amountKey(d) {
    if (d.amountText) return 't:' + str(d.amountText).trim();
    if (d.region === '해외') { var u = numOrNull(d.usdM); return u === null ? 'u:none' : 'u:' + u; }
    var k = numOrNull(d.krw); return k === null ? 'k:none' : 'k:' + k;
  }
  function dealKey(d) {
    return str(d.name).toLowerCase().replace(/\s+/g, '') + '|' + str(d.region) + '|' + amountKey(d);
  }

  // '2026.07.13' / '2026.07' / '' → 정렬용 문자열 (없으면 '')
  function dateKey(s) {
    var m = str(s).match(/(\d{4})\.(\d{1,2})(?:\.(\d{1,2}))?/);
    if (!m) return '';
    function p(x) { return x ? (x.length < 2 ? '0' + x : x) : '00'; }
    return m[1] + p(m[2]) + p(m[3]);
  }

  // issuesMap: { no: issueData }. 반환: 합친 딜 목록. 각 딜에 issues[](오름차순) 부여
  // 같은 딜이 여러 호에 실리면 가장 최근 호의 기록을 대표로 쓴다
  function build(issuesMap) {
    var nos = Object.keys(issuesMap || {}).map(Number).filter(function (n) { return isFinite(n); }).sort(function (a, b) { return a - b; });
    var byKey = {}, order = [];
    nos.forEach(function (no) {
      var I = issuesMap[no];
      if (!I || !Array.isArray(I.deals)) return;
      I.deals.forEach(function (d) {
        if (!d || !str(d.name).trim()) return;
        var k = dealKey(d);
        if (!byKey[k]) { byKey[k] = { issues: [] }; order.push(k); }
        var rec = byKey[k];
        if (rec.issues.indexOf(no) === -1) rec.issues.push(no);
        rec.deal = d; // 최근 호가 덮어씀
        rec.week = I.shortWeek || I.week || '';
      });
    });
    return order.map(function (k) {
      var r = byKey[k], d = r.deal;
      return {
        key: k, name: str(d.name).trim(), region: d.region === '해외' ? '해외' : '국내',
        sector: str(d.sector), round: str(d.round), krw: numOrNull(d.krw), usdM: numOrNull(d.usdM),
        amountText: d.amountText ? str(d.amountText) : '', note: str(d.note), investors: str(d.investors),
        date: str(d.date), source: d.source || null, issues: r.issues, latestIssue: r.issues[r.issues.length - 1]
      };
    });
  }

  // 정렬용 금액: 국내 억 원, 해외 백만 달러. amountText(통화 상이·비공개·누적)는 비교 불가 → null
  function amountValue(d) {
    if (d.amountText) return null;
    return d.region === '해외' ? d.usdM : d.krw;
  }

  function matches(d, term) {
    if (!term) return true;
    var hay = (d.name + ' ' + d.sector + ' ' + d.round + ' ' + d.investors + ' ' + d.note).toLowerCase();
    return hay.indexOf(term) !== -1;
  }

  // 기본 정렬 순서 끝단: 최근 호 → 기업명 (실행마다 같은 결과)
  function tieBreak(a, b) {
    if (a.latestIssue !== b.latestIssue) return b.latestIssue - a.latestIssue;
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  }
  function byDate(a, b) {
    var x = dateKey(a.date), y = dateKey(b.date);
    if (x !== y) { if (!x) return 1; if (!y) return -1; return x < y ? 1 : -1; }
    return tieBreak(a, b);
  }
  function byAmount(a, b) {
    // 통화가 달라 국내·해외는 섞어 비교하지 않음: 국내 묶음 → 해외 묶음
    if (a.region !== b.region) return a.region === '국내' ? -1 : 1;
    var x = amountValue(a), y = amountValue(b);
    if (x !== y) { if (x === null) return 1; if (y === null) return -1; return y - x; }
    return byDate(a, b);
  }

  // opts: { q, region: '전체'|'국내'|'해외', sort: 'date'|'amount' }
  function query(list, opts) {
    opts = opts || {};
    var term = str(opts.q).trim().toLowerCase();
    var region = opts.region === '국내' || opts.region === '해외' ? opts.region : '전체';
    var out = (list || []).filter(function (d) {
      return (region === '전체' || d.region === region) && matches(d, term);
    });
    out.sort(opts.sort === 'amount' ? byAmount : byDate);
    return out;
  }

  function counts(list) {
    var c = { total: 0, domestic: 0, global: 0 };
    (list || []).forEach(function (d) { c.total++; if (d.region === '해외') c.global++; else c.domestic++; });
    return c;
  }

  return { build: build, query: query, counts: counts, dealKey: dealKey, dateKey: dateKey, amountValue: amountValue };
});
