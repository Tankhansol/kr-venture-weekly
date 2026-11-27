/* KR Venture Weekly — Deals 모아보기 화면 (섹터·지역·신규 필터, 필터 상태는 주소에 저장) */
(function () {
  'use strict';
  var K = window.KVW, C = window.KVWCalc, D = window.KVWDeals, esc = K.esc;
  var root = document.getElementById('app');
  var A = window.KVW_ARCHIVE;
  if (!A || !D || !C) { K.fail(root, '데이터 파일을 불러오지 못했습니다. data/archive.js와 assets/js 파일을 확인해 주세요.'); return; }

  var CATS = (window.KVW_DEAL_CATS || []).slice();
  var REGIONS = ['전체', '국내', '해외'];
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
    var isNew = D.isNew(d, A.latest);
    return '<tr' + (isNew ? ' class="is-new"' : '') + '><td class="co">' + esc(d.name) +
      '<span class="nt">' + esc(d.region) + ' · ' + esc(d.sector) + '</span><span class="cat-tag">' + esc(d.cat) + '</span></td>' +
      '<td style="white-space:nowrap">' + (d.round ? esc(d.round) : '—') + '</td>' +
      '<td class="num r" style="white-space:nowrap">' + esc(C.fmtDealAmount(d)) + (d.note ? '<span class="nt">' + esc(d.note) + '</span>' : '') + '</td>' +
      '<td>' + esc(d.investors) + '</td>' +
      '<td style="white-space:nowrap"><span class="num">' + (d.date ? esc(d.date) : '—') + '</span>' + (src ? '<span class="nt">' + src + '</span>' : '') + '</td>' +
      '<td class="num" style="white-space:nowrap">' + issueLinks(d.issues) + '</td></tr>';
  }

  // 주소 → 상태 (잘못된 값은 기본값)
  function readState() {
    var s = { q: '', region: '전체', cat: '전체', onlyNew: false, sort: 'date' };
    try {
      var p = new URLSearchParams(location.search);
      if (REGIONS.indexOf(p.get('region')) !== -1) s.region = p.get('region');
      if (CATS.indexOf(p.get('cat')) !== -1) s.cat = p.get('cat');
      s.onlyNew = p.get('new') === '1';
      if (p.get('sort') === 'amount') s.sort = 'amount';
      s.q = (p.get('q') || '').slice(0, 60);
    } catch (e) { /* 주소 해석 실패 시 기본값 */ }
    return s;
  }
  function writeState(s) {
    try {
      var p = new URLSearchParams();
      if (s.region !== '전체') p.set('region', s.region);
      if (s.cat !== '전체') p.set('cat', s.cat);
      if (s.onlyNew) p.set('new', '1');
      if (s.sort !== 'date') p.set('sort', s.sort);
      if (s.q) p.set('q', s.q);
      var qs = p.toString();
      history.replaceState(null, '', location.pathname + (qs ? '?' + qs : '') + location.hash);
    } catch (e) { /* file:// 등에서 막히면 저장만 생략 */ }
  }

  function render() {
    var all = D.build(window.KVW_ISSUES || {}, window.KVW_DEAL_SECTOR_MAP);
    var c = D.counts(all, A.latest);
    var hasUncat = all.some(function (d) { return d.cat === '미분류'; });
    var catList = CATS.concat(hasUncat ? ['미분류'] : []);
    var first = nos.length ? Math.min.apply(null, nos) : 0, last = nos.length ? Math.max.apply(null, nos) : 0;
    var state = readState();

    root.innerHTML = K.header('', 'deals') +
      '<main class="wrap"><section class="issue-head">' +
      '<p class="issue-meta">No. ' + esc(K.pad2(first)) + '~' + esc(K.pad2(last)) + ' 수록 딜</p>' +
      '<h1 class="issue-title">Deals</h1>' +
      '<p class="issue-summary">주간 칼럼에 실린 국내외 투자 딜을 한곳에 모았습니다. 섹터·지역·최신호 기준으로 걸러 볼 수 있고, 같은 딜이 여러 호에 실린 경우 한 줄로 합칩니다.</p>' +
      (failed.length ? '<p class="warn">일부 호를 불러오지 못해 목록에서 빠졌습니다: No. ' + esc(failed.sort(function (a, b) { return a - b; }).map(K.pad2).join(', ')) + '</p>' : '') +
      '<div class="grid grid-4 deal-figs" style="margin-top:28px">' +
      fig('all', '전체 딜', c.total + '건', '중복 수록 제외') + fig('국내', '국내', c.domestic + '건', '단위 억 원') +
      fig('해외', '해외', c.global + '건', '단위 US$') + fig('new', '최신호 신규', c.latest + '건', 'No. ' + K.pad2(A.latest) + ' 수록') +
      '</div></section>' +
      '<section class="section" style="padding-top:36px"><div class="deal-filters">' +
      '<div class="filter-row"><span class="filter-label">지역</span><div class="seg" role="group" aria-label="지역" id="f-region"></div></div>' +
      '<div class="filter-row"><span class="filter-label">섹터</span><div class="chips" role="group" aria-label="섹터" id="f-cat"></div></div>' +
      '<div class="filter-row"><span class="filter-label">수록</span><div class="seg" role="group" aria-label="수록 범위" id="f-new"></div></div>' +
      '<div class="deal-tools">' +
      '<label class="search">기업·섹터·투자자 검색<input id="deal-q" type="search" placeholder="예: 로봇, Sequoia, 하나증권" autocomplete="off" maxlength="60"></label>' +
      '<label class="search sort">정렬<select id="deal-sort"><option value="date">발표일 최신순</option><option value="amount">금액 큰 순</option></select></label>' +
      '<button type="button" class="btn btn-outline" id="deal-reset">필터 초기화</button>' +
      '</div></div>' +
      '<p class="small muted" id="deal-status" role="status" style="margin:16px 0 0"></p>' +
      '<p class="small muted new-legend"><span class="swatch" aria-hidden="true"></span>최신호(No. ' + esc(K.pad2(A.latest)) + ') 수록 딜</p>' +
      '<div class="table-box" style="margin-top:12px"><table class="deal-table deals-all" style="min-width:920px"><thead><tr>' +
      '<th>기업 · 섹터</th><th>라운드</th><th class="r">금액</th><th>주요 투자자</th><th>발표일 · 출처</th><th>수록 호</th>' +
      '</tr></thead><tbody id="deal-body"></tbody></table></div>' +
      '<p class="table-note">단위: 국내 억 원, 해외 US$ (M=백만, B=10억) · 통화가 달라 금액순 정렬은 국내와 해외를 나눠 정렬 · 유로 등 다른 통화와 비공개 금액은 금액순에서 맨 뒤 · 섹터는 주된 수요처 기준 운영자 분류</p>' +
      '</section></main>' + K.footer();

    var body = document.getElementById('deal-body');
    var q = document.getElementById('deal-q');
    var sort = document.getElementById('deal-sort');
    var status = document.getElementById('deal-status');
    q.value = state.q; sort.value = state.sort;

    function segBtns(box, items, cur, attr) {
      box.innerHTML = items.map(function (it) {
        return '<button type="button" class="seg-btn" ' + attr + '="' + esc(it.v) + '" aria-pressed="' + (it.v === cur) + '">' +
          esc(it.label) + ' <span class="cnt">' + esc(it.n) + '</span></button>';
      }).join('');
    }

    function draw() {
      // 지역 건수: 지역 외 조건(섹터·신규·검색) 적용 후
      var rc = {};
      REGIONS.forEach(function (r) { rc[r] = D.query(all, { q: state.q, region: r, cat: state.cat, onlyNew: state.onlyNew, latest: A.latest }).length; });
      segBtns(document.getElementById('f-region'), REGIONS.map(function (r) { return { v: r, label: r, n: rc[r] }; }), state.region, 'data-region');

      var cc = D.catCounts(all, { q: state.q, region: state.region, onlyNew: state.onlyNew, latest: A.latest }, catList);
      document.getElementById('f-cat').innerHTML = ['전체'].concat(catList).map(function (k) {
        var n = cc[k] || 0;
        return '<button type="button" class="chip-btn" data-cat="' + esc(k) + '" aria-pressed="' + (k === state.cat) + '"' +
          (n === 0 && k !== state.cat ? ' data-empty="1"' : '') + '>' + esc(k) + ' <span class="cnt">' + esc(n) + '</span></button>';
      }).join('');

      var nAll = D.query(all, { q: state.q, region: state.region, cat: state.cat }).length;
      var nNew = D.query(all, { q: state.q, region: state.region, cat: state.cat, onlyNew: true, latest: A.latest }).length;
      segBtns(document.getElementById('f-new'), [{ v: '0', label: '전체', n: nAll }, { v: '1', label: '최신호 신규만', n: nNew }], state.onlyNew ? '1' : '0', 'data-new');

      var list = D.query(all, { q: state.q, region: state.region, cat: state.cat, onlyNew: state.onlyNew, latest: A.latest, sort: state.sort });
      body.innerHTML = list.length ? list.map(row).join('') :
        '<tr><td colspan="6" class="muted">조건에 맞는 딜이 없습니다. 필터를 줄이거나 초기화해 주세요.</td></tr>';
      var cond = [];
      if (state.region !== '전체') cond.push(state.region);
      if (state.cat !== '전체') cond.push(state.cat);
      if (state.onlyNew) cond.push('최신호 신규');
      if (state.q) cond.push('검색어 "' + state.q + '"');
      status.textContent = list.length + '건 표시' + (cond.length ? ' · ' + cond.join(' · ') : '') +
        (state.sort === 'amount' && state.region === '전체' ? ' · 금액순은 국내 → 해외 순으로 각각 정렬' : '');
      Array.prototype.forEach.call(root.querySelectorAll('.deal-figs .fig-btn'), function (b) {
        var f = b.getAttribute('data-fig');
        var on = (f === 'all' && state.region === '전체' && state.cat === '전체' && !state.onlyNew && !state.q) ||
          (f === state.region && !state.onlyNew) || (f === 'new' && state.onlyNew && state.region === '전체');
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      writeState(state);
    }

    root.addEventListener('click', function (e) {
      var t = e.target.closest ? e.target.closest('button') : null;
      if (!t || !root.contains(t)) return;
      if (t.hasAttribute('data-region')) state.region = t.getAttribute('data-region');
      else if (t.hasAttribute('data-cat')) state.cat = t.getAttribute('data-cat');
      else if (t.hasAttribute('data-new')) state.onlyNew = t.getAttribute('data-new') === '1';
      else if (t.hasAttribute('data-fig')) {
        var f = t.getAttribute('data-fig');
        if (f === 'all') { state.region = '전체'; state.cat = '전체'; state.onlyNew = false; state.q = ''; q.value = ''; }
        else if (f === 'new') { state.region = '전체'; state.onlyNew = true; }
        else { state.region = f; state.onlyNew = false; }
      } else if (t.id === 'deal-reset') {
        state = { q: '', region: '전체', cat: '전체', onlyNew: false, sort: 'date' }; q.value = ''; sort.value = 'date';
      } else return;
      draw();
    });
    q.addEventListener('input', function () { state.q = q.value.trim().slice(0, 60); draw(); });
    sort.addEventListener('change', function () { state.sort = sort.value === 'amount' ? 'amount' : 'date'; draw(); });
    draw();
  }

  function fig(key, label, value, note) {
    return '<button type="button" class="card figure fig-btn" data-fig="' + esc(key) + '" aria-pressed="false"><p class="label">' + esc(label) +
      '</p><p class="value">' + esc(value) + '</p><p class="note">' + esc(note) + '</p></button>';
  }
})();
