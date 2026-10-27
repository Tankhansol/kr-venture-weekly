/* KR Venture Weekly — 공통 화면 요소 (헤더·푸터·이스케이프) */
(function () {
  'use strict';

  function esc(v) {
    if (v === null || v === undefined) return '';
    return String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // http(s) 주소만 링크로 허용
  function safeUrl(u) {
    return typeof u === 'string' && /^https?:\/\//i.test(u) ? u : '';
  }

  function pad2(n) { return n < 10 ? '0' + n : String(n); }

  // base: 루트까지의 상대 경로 ('' 또는 '../')
  function issueHref(base, no) {
    var A = window.KVW_ARCHIVE || { issues: [] };
    var row = (A.issues || []).filter(function (r) { return r.no === no; })[0];
    if (!row) return null;
    if (row.local) return { href: base + 'issues/issue-' + pad2(no) + '.html', legacy: false };
    return { href: A.legacyBase + pad2(no) + '.html', legacy: true };
  }

  function header(base, current) {
    var A = window.KVW_ARCHIVE || {};
    var latest = A.latest ? base + 'issues/issue-' + pad2(A.latest) + '.html' : base + 'index.html';
    var items = [
      { key: 'weekly', text: 'Weekly', href: latest },
      { key: 'deals', text: 'Deals', href: base + 'deals.html' },
      { key: 'archive', text: 'Archive', href: base + 'index.html#archive' },
      { key: 'data', text: 'Monthly Data', href: base + 'index.html#data' }
    ];
    return '<header class="site-header"><div class="wrap">' +
      '<a class="brand" href="' + esc(base + 'index.html') + '">KR Venture Weekly</a>' +
      '<nav class="nav" aria-label="주 메뉴">' + items.map(function (it) {
        return '<a href="' + esc(it.href) + '"' + (it.key === current ? ' aria-current="page"' : '') + '>' + esc(it.text) + '</a>';
      }).join('') + '</nav></div></header>';
  }

  function footer() {
    return '<footer class="site-footer"><div class="wrap">' +
      '<p class="name">KR Venture Weekly</p>' +
      '<p>벤처투자 이슈는 매주, 국내 통계는 매월 정리하는 개인 운영 사이트입니다.</p>' +
      '<p>칼럼 의견은 운영자 개인 의견이며 소속 기관의 공식 입장이 아닙니다.</p>' +
      '<p class="by">Created by hansol.jang</p>' +
      '</div></footer>';
  }

  function dealCounts(deals) {
    var d = 0, g = 0;
    (deals || []).forEach(function (x) { if (x.region === '해외') g++; else d++; });
    return { domestic: d, global: g, total: d + g, label: '국내 ' + d + '건 · 해외 ' + g + '건' };
  }

  // 동적 스크립트 로드 (file:// 에서도 동작)
  function loadScript(src, done) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = function () { done(null); };
    s.onerror = function () { done(new Error('load failed: ' + src)); };
    document.head.appendChild(s);
  }

  function fail(root, msg) {
    root.innerHTML = '<div class="wrap noscript">' + esc(msg) + '</div>';
  }

  window.KVW = { esc: esc, safeUrl: safeUrl, pad2: pad2, issueHref: issueHref, header: header, footer: footer,
    dealCounts: dealCounts, loadScript: loadScript, fail: fail };
})();
