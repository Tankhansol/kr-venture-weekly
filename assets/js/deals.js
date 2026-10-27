/* KR Venture Weekly — Deals 모아보기 화면 */
(function () {
  'use strict';
  var K = window.KVW, C = window.KVWCalc, D = window.KVWDeals, esc = K.esc;
  var root = document.getElementById('app');
  var A = window.KVW_ARCHIVE;
  if (!A || !D || !C) { K.fail(root, '데이터 파일을 불러오지 못했습니다. data/archive.js와 assets/js 파일을 확인해 주세요.'); return; }

  document.title = 'Deals | KR Venture Weekly';
  var nos = (A.issues || []).filter(function (r) { return r.local; }).map(function (r) { return r.no; });
  var failed = [], left = nos.length;

  root.innerHTML = K.header('', 'deals') + '<main class="wrap"><p class="muted" style="padding:48px 0">딜 목록을 불러오는 중입니다.</p></main>';
  if (!left) { render(); return; }
  nos.forEach(function (no) {
    K.loadScript('data/issues/' + no + '.js', function (err) {
      if (err || !(window.KVW_ISSUES || {})[no]) failed.push(no);
      if (--left === 0) render();
    });
  });

  function issueLinks(list) {
    return list.map(function (no) {
      return '<a href="issues/issue-' + K.pad2(no) + '.html#deal">' + esc(K.pad2(no)) + '</a>';
    }).join(' · ');
  }

  function row(d) {
    var u = d.source && K.safeUrl(d.source.url);
    var src = u ? '<a href="' + esc(u) + '" target="_blank" rel="noopener">' + esc(d.source.name) + '</a>' : '';
    return '<tr><td class="co">' + esc(d.name) + '<span class="nt">' + esc(d.region) + ' · ' + esc(d.sector) + '</span></td>' +
      '<td style="white-space:nowrap">' + esc(d.round) + '</td>' +
      '<td class="num r" style="white-space:nowrap">' + esc(C.fmtDealAmount(d)) + (d.note ? '<span class="nt">' + esc(d.note) + '</span>' : '') + '</td>' +
      '<td>' + esc(d.investors) + '</td>' +
      '<td style="white-space:nowrap"><span class="num">' + (d.date ? esc(d.date) : '—') + '</span>' + (src ? '<span class="nt">' + src + '</span>' : '') + '</td>' +
      '<td class="num" style="white-space:nowrap">' + issueLinks(d.issues) + '</td></tr>';
  }

  function render() {
    var all = D.build(window.KVW_ISSUES || {});
    var c = D.counts(all);
    var first = nos.length ? Math.min.apply(null, nos) : 0, last = nos.length ? Math.max.apply(null, nos) : 0;
    var state = { q: '', region: '전체', sort: 'date' };

    root.innerHTML = K.header('', 'deals') +
      '<main class="wrap"><section class="issue-head">' +
      '<p class="issue-meta">No. ' + esc(K.pad2(first)) + '~' + esc(K.pad2(last)) + ' 수록 딜</p>' +
      '<h1 class="issue-title">Deals</h1>' +
      '<p class="issue-summary">주간 칼럼에 실린 국내외 투자 딜을 한곳에 모았습니다. 같은 딜이 여러 호에 실린 경우 한 줄로 합치고 수록 호를 함께 표시합니다.</p>' +
      (failed.length ? '<p class="warn">일부 호를 불러오지 못해 목록에서 빠졌습니다: No. ' + esc(failed.sort(function (a, b) { return a - b; }).map(K.pad2).join(', ')) + '</p>' : '') +
      '<div class="grid grid-3 deal-figs" style="margin-top:28px">' +
      fig('전체 딜', c.total + '건', '중복 수록 제외') + fig('국내', c.domestic + '건', '단위 억 원') + fig('해외', c.global + '건', '단위 US$') +
      '</div></section>' +
      '<section class="section" style="padding-top:40px"><div class="deal-tools">' +
      '<div class="seg" role="group" aria-label="지역">' + ['전체', '국내', '해외'].map(function (r) {
        return '<button type="button" class="seg-btn" data-region="' + r + '" aria-pressed="' + (r === '전체') + '">' + r + '</button>';
      }).join('') + '</div>' +
      '<label class="search">기업·섹터·투자자 검색<input id="deal-q" type="search" placeholder="예: 로봇, Sequoia, 하나증권" autocomplete="off"></label>' +
      '<label class="search sort">정렬<select id="deal-sort"><option value="date">발표일 최신순</option><option value="amount">금액 큰 순</option></select></label>' +
      '</div>' +
      '<p class="small muted" id="deal-status" role="status" style="margin:14px 0 0"></p>' +
      '<div class="table-box" style="margin-top:12px"><table class="deal-table deals-all" style="min-width:920px"><thead><tr>' +
      '<th>기업</th><th>라운드</th><th class="r">금액</th><th>주요 투자자</th><th>발표일 · 출처</th><th>수록 호</th>' +
      '</tr></thead><tbody id="deal-body"></tbody></table></div>' +
      '<p class="table-note">단위: 국내 억 원, 해외 US$ (M=백만, B=10억) · 통화가 달라 금액순 정렬은 국내와 해외를 나눠 정렬 · 유로 등 다른 통화와 비공개 금액은 금액순에서 맨 뒤</p>' +
      '</section></main>' + K.footer();

    var body = document.getElementById('deal-body');
    var q = document.getElementById('deal-q');
    var sort = document.getElementById('deal-sort');
    var status = document.getElementById('deal-status');
    var segs = Array.prototype.slice.call(root.querySelectorAll('.seg-btn'));

    function draw() {
      var list = D.query(all, state);
      body.innerHTML = list.length ? list.map(row).join('') :
        '<tr><td colspan="6" class="muted">조건에 맞는 딜이 없습니다.</td></tr>';
      status.textContent = list.length + '건 표시' + (state.q ? ' · 검색어 "' + state.q + '"' : '') +
        (state.sort === 'amount' && state.region === '전체' ? ' · 금액순은 국내 → 해외 순으로 각각 정렬' : '');
    }
    segs.forEach(function (b) {
      b.addEventListener('click', function () {
        state.region = b.getAttribute('data-region');
        segs.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        draw();
      });
    });
    q.addEventListener('input', function () { state.q = q.value.trim(); draw(); });
    sort.addEventListener('change', function () { state.sort = sort.value; draw(); });
    draw();
  }

  function fig(label, value, note) {
    return '<div class="card figure"><p class="label">' + esc(label) + '</p><p class="value">' + esc(value) + '</p><p class="note">' + esc(note) + '</p></div>';
  }
})();
