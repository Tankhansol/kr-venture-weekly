/*
 * KR Venture Weekly — 계산 로직 (화면과 분리, 단독 실행 가능)
 * 브라우저: window.KVWCalc / Node: require('./calc.js')
 * 원칙: 숫자가 아니거나 분모가 0이면 null을 돌려주고, 화면에서는 "—"로 표시한다.
 */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.KVWCalc = api;
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var MINUS = '−';

  // 숫자만 통과. 숫자 형태 문자열("58452")은 허용, 그 외(빈칸·글자·NaN·Infinity)는 null
  function num(v) {
    if (typeof v === 'number') return isFinite(v) ? v : null;
    if (typeof v === 'string' && /^\s*-?\d+(\.\d+)?\s*$/.test(v)) return Number(v);
    return null;
  }

  function div(a, b) {
    a = num(a); b = num(b);
    if (a === null || b === null || b === 0) return null;
    return a / b;
  }

  // 증감률: a ÷ b − 1
  function growth(a, b) {
    var r = div(a, b);
    return r === null ? null : r - 1;
  }

  function sum(arr) {
    var s = 0, ok = false;
    (arr || []).forEach(function (v) { v = num(v); if (v !== null) { s += v; ok = true; } });
    return ok ? s : null;
  }

  function round1(v) { return Math.round(v * 10) / 10; }

  // 값이 없으면("—") 단위·별표를 붙이지 않음
  var DASH = '\u2014';
  function unit(s, u) { return s === DASH ? DASH : s + u; }

  function fmtInt(v) {
    v = num(v);
    if (v === null) return '—';
    var s = Math.round(Math.abs(v)).toLocaleString('en-US');
    return (v < 0 && Math.round(Math.abs(v)) !== 0 ? MINUS : '') + s;
  }

  function fmt1(v) {
    v = num(v);
    if (v === null) return '—';
    var r = round1(v);
    var s = Math.abs(r).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    return (r < 0 ? MINUS : '') + s;
  }

  // 억 원 → 조 원(소수 첫째 자리)
  function jo(eok) {
    var v = num(eok);
    return v === null ? '—' : fmt1(v / 10000);
  }

  // 비율(0.417) → "+41.7%", 음수는 U+2212
  function pctSigned(r) {
    r = num(r);
    if (r === null) return '—';
    var p = round1(r * 100);
    if (p === 0) return '0.0%';
    return (p > 0 ? '+' : MINUS) + Math.abs(p).toFixed(1) + '%';
  }

  // 막대 폭(%) 0~100으로 고정
  function barWidth(v, max) {
    v = num(v); max = num(max);
    if (v === null || max === null || max <= 0) return 0;
    var w = (v / max) * 100;
    if (w < 0) return 0;
    if (w > 100) return 100;
    return Math.round(w * 10) / 10;
  }

  function maxOf(arr) {
    var m = null;
    (arr || []).forEach(function (v) { v = num(v); if (v !== null && (m === null || v > m)) m = v; });
    return m;
  }

  // 금액 표기: 국내 억 원, 해외 $M(10억 달러 미만) / $B(이상, 소수 첫째 자리)
  function fmtKRW(eok) {
    var v = num(eok);
    return v === null ? '비공개' : fmtInt(v) + '억 원';
  }
  function fmtUSD(million) {
    var v = num(million);
    if (v === null) return '비공개';
    if (Math.abs(v) >= 1000) return '$' + (Math.round(v / 100) / 10).toFixed(1) + 'B';
    var s = Number.isInteger(v) ? String(v) : String(round1(v));
    return '$' + s + 'M';
  }
  function fmtDealAmount(d) {
    if (!d) return '비공개';
    if (d.region === '해외') return fmtUSD(d.usdM);
    return fmtKRW(d.krw);
  }

  // 합계·비중 점검: 허용오차 tol 이내면 true
  function near(a, b, tol) {
    a = num(a); b = num(b);
    if (a === null || b === null) return false;
    return Math.abs(a - b) <= tol;
  }

  /*
   * 월간 데이터 계산. D = window.KVW_MONTHLY
   * 반환값은 화면이 그대로 쓰는 표시 문자열과 막대 폭, 점검 결과
   */
  function computeMonthly(D) {
    var y = D.years || [];
    var n = y.length - 1;           // 당해 누계 열
    var p = y.length - 2;           // 전년동기 누계 열
    var full = D.lastFullYearIndex; // 직전 연도 연간 실적 열
    var inv = D.invest || [], co = D.companies || [], fu = D.funds || [], fc = D.fundCount || [];
    var aum = D.aum || [], aumC = D.aumCount || [];

    var perCo = y.map(function (_, i) { return div(inv[i], co[i]); });
    var perFund = y.map(function (_, i) { return div(fu[i], fc[i]); });

    var cumInv = null, cumFund = null;
    if (D.cumulativeFrom != null) {
      var idx = [];
      for (var i = D.cumulativeFrom; i <= full; i++) idx.push(i);
      idx.push(n);
      cumInv = sum(idx.map(function (k) { return inv[k]; }));
      cumFund = sum(idx.map(function (k) { return fu[k]; }));
    }

    var month = num(D.month);
    var labels = {
      ytd: month ? '1~' + month + '월 누계' : '—',
      monthOnly: month ? month + '월 당월' : '—'
    };

    var big = [
      { label: '신규투자', value: jo(inv[n]), unit: '조 원',
        delta: D.growthReported && num(D.growthReported.invest) !== null ? pctSigned(num(D.growthReported.invest) / 100) : unit(pctSigned(growth(inv[n], inv[p])), '*'),
        sub: '피투자 ' + fmtInt(co[n]) + '개사' },
      { label: '신규 조합결성', value: jo(fu[n]), unit: '조 원',
        delta: D.growthReported && num(D.growthReported.funds) !== null ? pctSigned(num(D.growthReported.funds) / 100) : unit(pctSigned(growth(fu[n], fu[p])), '*'),
        sub: fmtInt(fc[n]) + '개 조합' },
      { label: '운영 조합 약정액', value: jo(aum[n]), unit: '조 원',
        delta: unit(pctSigned(growth(aum[n], aum[p])), '*'), sub: fmtInt(aumC[n]) + '개 조합' },
      { label: '벤처투자회사', value: fmtInt(D.firms && D.firms.total), unit: '개사',
        delta: '신규 ' + fmtInt(D.firms && D.firms.newYtd) + '개', sub: '말소 ' + fmtInt(D.firms && D.firms.removed) + '개' }
    ];

    var derived = [
      { label: '기업당 평균 투자액', value: unit(fmt1(perCo[n]), '억 원'),
        sub: '전년동기 ' + fmt1(perCo[p]) + '억 원 대비 ' + pctSigned(growth(perCo[n], perCo[p])) },
      { label: '조합당 평균 결성액', value: unit(fmt1(perFund[n]), '억 원'),
        sub: '전년동기 ' + fmt1(perFund[p]) + '억 원 대비 ' + pctSigned(growth(perFund[n], perFund[p])) },
      { label: y[full] + '년 연간 실적 대비 달성률',
        value: '투자 ' + fmt1(div(inv[n], inv[full]) === null ? null : div(inv[n], inv[full]) * 100) + '%',
        sub: '조합결성 ' + fmt1(div(fu[n], fu[full]) === null ? null : div(fu[n], fu[full]) * 100) + '%' },
      { label: (y[D.cumulativeFrom] || '') + '~' + y[n] + ' 누계',
        value: '투자 ' + jo(cumInv) + '조 원', sub: '조합결성 ' + jo(cumFund) + '조 원' }
    ];

    var invMax = maxOf(inv), fundMax = maxOf(fu);
    var rows = y.map(function (label, i) {
      return {
        year: label, partial: !!(D.partial && D.partial[i]), current: i === n,
        inv: jo(inv[i]), invBar: barWidth(inv[i], invMax),
        co: fmtInt(co[i]), perCo: fmt1(perCo[i]),
        fund: jo(fu[i]), fundBar: barWidth(fu[i], fundMax),
        fc: fmtInt(fc[i]), perFund: fmt1(perFund[i]),
        aum: jo(aum[i])
      };
    });

    var sectors = (D.sectors || []);
    var secMax = maxOf(sectors.map(function (s) { return s.pct; }));
    var sectorRows = sectors.map(function (s) {
      return { name: s.name, pct: fmt1(s.pct) + '%', amt: fmtInt(s.amt), yoy: unit(pctSigned(growth(s.amt, s.prev)), '*'),
        bar: barWidth(s.pct, secMax) };
    });

    function shareRows(list, highlight) {
      var mx = maxOf((list || []).map(function (x) { return x.pct; }));
      return (list || []).map(function (x) {
        return { name: x.name, pct: fmt1(x.pct), bar: barWidth(x.pct, mx), hi: x.name === highlight };
      });
    }

    var top = D.topFunds || [];
    var topMax = maxOf(top.map(function (f) { return f.amt; }));
    var topRows = top.map(function (f, i) {
      return { rank: i + 1, name: f.name, type: f.type, amt: fmtInt(f.amt), bar: barWidth(f.amt, topMax) };
    });

    // 점검: 실패 항목은 화면에 경고로 노출
    var checks = [];
    function check(ok, msg) { if (!ok) checks.push(msg); }
    check(near(sum(sectors.map(function (s) { return s.amt; })), inv[n], 0.5),
      '업종별 금액 합계가 신규투자 총액과 다름');
    (D.stages || []).forEach(function (s) {
      check(near(sum([s.early, s.mid, s.late]), 100, 0.2), '업력별 비중 합계가 100%가 아님 (' + s.year + ')');
    });
    check(near(sum((D.types || []).map(function (t) { return t.pct; })), 100, 0.2), '투자 유형별 비중 합계가 100%가 아님');
    check(near(sum((D.lps || []).map(function (t) { return t.pct; })), 100, 0.2), 'LP 유형별 비중 합계가 100%가 아님');
    check(near(sum((D.exits || []).map(function (t) { return t.pct; })), 100, 0.2), '회수 유형별 비중 합계가 100%가 아님');
    [inv, co, fu, fc, aum, aumC].forEach(function (arr, k) {
      if ((arr || []).length !== y.length) checks.push('연도 수와 데이터 개수가 다름 (항목 ' + (k + 1) + ')');
    });

    return {
      labels: labels, big: big, derived: derived, rows: rows, sectors: sectorRows,
      stages: (D.stages || []).map(function (s) {
        return { year: s.year, early: num(s.early), mid: num(s.mid), late: num(s.late) };
      }),
      types: shareRows(D.types), lps: shareRows(D.lps, D.highlightLp), exits: shareRows(D.exits),
      topRows: topRows, topSum: fmtInt(sum(top.map(function (f) { return f.amt; }))),
      checks: checks
    };
  }

  return {
    num: num, div: div, growth: growth, sum: sum, fmtInt: fmtInt, fmt1: fmt1, jo: jo,
    pctSigned: pctSigned, barWidth: barWidth, maxOf: maxOf, fmtKRW: fmtKRW, fmtUSD: fmtUSD,
    fmtDealAmount: fmtDealAmount, near: near, computeMonthly: computeMonthly
  };
});
