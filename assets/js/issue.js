/* KR Venture Weekly — 이슈 페이지 (모든 호 공통 템플릿) */
(function () {
  'use strict';
  var K = window.KVW, C = window.KVWCalc, esc = K.esc;
  var root = document.getElementById('app');
  var no = Number(document.body.getAttribute('data-issue'));
  var I = (window.KVW_ISSUES || {})[no];
  var A = window.KVW_ARCHIVE || { issues: [] };
  var BASE = '../';

  if (!I) { K.fail(root, '이 호의 데이터(data/issues/' + no + '.js)를 불러오지 못했습니다.'); return; }

  document.title = 'No. ' + I.no + ' · ' + I.week + ' | KR Venture Weekly';

  var policy = (I.articles || []).filter(function (a) { return a.type === 'policy'; });
  var report = (I.articles || []).filter(function (a) { return a.type === 'report'; });
  var deals = I.deals || [];
  var cnt = K.dealCounts(deals);

  function biggest(region) {
    var best = null;
    deals.forEach(function (d) {
      if (d.region !== region) return;
      var v = C.num(region === '해외' ? d.usdM : d.krw);
      if (v === null) return;
      if (!best || v > best.v) best = { v: v, d: d };
    });
    return best;
  }

  function figures() {
    var list = (I.figures || []).slice();
    if (!I.figures) {
      var dm = biggest('국내'), gl = biggest('해외');
      if (dm) list.push({ label: '국내 최대 딜', value: C.fmtDealAmount(dm.d), note: dm.d.name + ' · ' + dm.d.round });
      if (gl) list.push({ label: '해외 최대 딜', value: C.fmtDealAmount(gl.d), note: gl.d.name + ' · ' + gl.d.round });
    }
    list.push({ label: 'Weekly Deals', value: cnt.total + '건', note: cnt.label });
    var cols = Math.min(Math.max(list.length, 2), 4);
    return '<div class="grid grid-' + cols + '" style="margin-top:28px">' + list.map(function (f) {
      return '<div class="card figure"><p class="label">' + esc(f.label) + '</p><p class="value">' + esc(f.value) + '</p><p class="note">' + esc(f.note) + '</p></div>';
    }).join('') + '</div>';
  }

  function sourceLine(a) {
    var parts = (a.sources || []).map(function (s) {
      var u = K.safeUrl(s.url);
      var name = u ? '<a href="' + esc(u) + '" target="_blank" rel="noopener">' + esc(s.name) + '</a>' : esc(s.name);
      return name + (s.date ? ' · ' + esc(s.date) : '');
    });
    if (a.pending) parts.push('<span class="pending">' + esc(a.pending) + '</span>');
    return '<p class="src">자료: ' + (parts.length ? parts.join(' / ') : '<span class="pending">[확인 필요: 출처]</span>') + '</p>';
  }

  function article(a) {
    var notes = a.notes ? '<div class="notes"><p>' + esc(a.notes.label) + '</p><ul>' +
      a.notes.items.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div>' : '';
    return '<article class="card article"><p class="marker">' + esc(a.marker) + '</p><h2>' + esc(a.title) + '</h2>' +
      '<ul>' + (a.facts || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' +
      notes + sourceLine(a) + '</article>';
  }

  function dealTable() {
    if (!deals.length) return '';
    return '<div class="table-box"><table class="deal-table" style="min-width:760px"><thead><tr>' +
      '<th>기업</th><th>섹터</th><th>라운드</th><th class="r">금액</th><th>주요 투자자</th><th>발표일 · 출처</th>' +
      '</tr></thead><tbody>' + deals.map(function (d) {
        var u = d.source && K.safeUrl(d.source.url);
        var src = u ? '<a href="' + esc(u) + '" target="_blank" rel="noopener">' + esc(d.source.name) + '</a>' :
          (d.source && d.source.name ? esc(d.source.name) + ' <span class="pending">[URL 확인 필요]</span>' : '<span class="pending">[확인 필요]</span>');
        var dateTxt = d.date ? esc(d.date) : '—';
        return '<tr><td class="co">' + esc(d.name) + '<span class="nt">' + esc(d.region) + '</span></td>' +
          '<td>' + esc(d.sector) + '</td><td style="white-space:nowrap">' + esc(d.round) + '</td>' +
          '<td class="num r" style="white-space:nowrap">' + esc(C.fmtDealAmount(d)) + (d.note ? '<span class="nt">' + esc(d.note) + '</span>' : '') + '</td>' +
          '<td>' + esc(d.investors) + '</td>' +
          '<td style="white-space:nowrap"><span class="num">' + dateTxt + '</span><span class="nt">' + src + '</span></td></tr>';
      }).join('') + '</tbody></table></div>' +
      '<p class="table-note">단위: 국내 억 원, 해외 US$ (M=백만, B=10억) · 발표일이 수록 주차 밖인 딜은 해당 월 주요 딜로 수록</p>';
  }

  var sections = [
    { id: 'policy', label: 'Policy', count: policy.length, html: function () { return policy.map(article).join(''); } },
    { id: 'report', label: 'Report', count: report.length, html: function () { return report.map(article).join(''); } },
    { id: 'deal', label: 'Deal', count: deals.length, html: dealTable }
  ].filter(function (x) { return x.count > 0; }); // 0건 섹션은 생략

  function nav() {
    var prev = K.issueHref(BASE, no - 1);
    var next = K.issueHref(BASE, no + 1);
    var prevRow = (A.issues || []).filter(function (r) { return r.no === no - 1; })[0];
    var nextRow = (A.issues || []).filter(function (r) { return r.no === no + 1; })[0];
    var left = prev ? '<a href="' + esc(prev.href) + '"' + (prev.legacy ? ' target="_blank" rel="noopener"' : '') + '>← No. ' + esc(K.pad2(no - 1)) + ' · ' + esc(prevRow.week) + (prev.legacy ? ' (이전 사이트)' : '') + '</a>' : '<span></span>';
    var right = next ? '<a href="' + esc(next.href) + '">No. ' + esc(K.pad2(no + 1)) + ' · ' + esc(nextRow.week) + ' →</a>' :
      '<span class="muted">No. ' + esc(K.pad2(no + 1)) + ' 발행 예정</span>';
    return '<nav class="issue-nav" aria-label="호 이동">' + left + right + '</nav>';
  }

  var insights = (I.insight || []).filter(function (x) { return String(x || '').trim(); });

  function render() {
    var articles = policy.length + report.length;
    root.innerHTML = K.header(BASE, A.latest === no ? 'weekly' : '') +
      '<main class="wrap-narrow">' +
      '<section class="issue-head"><p class="issue-meta">No. ' + esc(I.no) + ' · ' + esc(I.week) + ' · 기사 ' + articles + '건 · 딜 ' + deals.length + '건</p>' +
      '<h1 class="issue-title">' + (I.title || []).map(esc).join('<br>') + '</h1>' +
      '<p class="issue-summary">' + esc(I.summary) + '</p>' +
      (I.status === 'unverified' ? '<p class="correction"><b>원문 대조 전</b> · 이전 사이트에서 옮긴 내용입니다. 출처 URL이 없는 항목은 [확인 필요]로 표시했으며, 대조 후 정정 내용을 이 자리에 안내합니다.</p>' : '') +
      (I.correction ? '<p class="correction">' + esc(I.correction) + '</p>' : '') +
      figures() + '</section>' +
      (sections.length ? '<nav class="toc" aria-label="이 호 목차">' + sections.map(function (x) {
        return '<a href="#' + x.id + '">' + esc(x.label) + ' <span class="num">' + x.count + '</span></a>';
      }).join('') + (insights.length ? '<a href="#insight">Insight</a>' : '') + '</nav>' : '') +
      sections.map(function (x) {
        return '<section class="issue-sec" id="' + x.id + '"><h2 class="sec-title">' + esc(x.label) +
          ' <span class="num muted">' + x.count + '</span></h2><div class="panel">' + x.html() + '</div></section>';
      }).join('') +
      (insights.length ? '<aside class="insight" id="insight"><p class="marker">INSIGHT</p><ul>' + insights.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' +
      '<p class="disc">칼럼 의견은 운영자 개인 의견이며 소속 기관의 공식 입장이 아닙니다.</p></aside>' : '') +
      nav() + '</main>' + K.footer();

    // 내용이 스크립트로 그려지므로, 주소에 #deal 등이 있으면 그린 뒤 해당 위치로 이동
    var target = (location.hash || '').replace('#', '');
    var el = target && document.getElementById(target);
    if (el) el.scrollIntoView();
  }

  render();
})();
