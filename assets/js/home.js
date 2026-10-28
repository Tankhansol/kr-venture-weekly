/* KR Venture Weekly — 홈 화면 */
(function () {
  'use strict';
  var K = window.KVW, C = window.KVWCalc, esc = K.esc;
  var root = document.getElementById('app');
  var A = window.KVW_ARCHIVE, M = window.KVW_MONTHLY;
  var ARCHIVE_DEFAULT_ROWS = 5;

  if (!A || !M) { K.fail(root, '데이터 파일을 불러오지 못했습니다. data/archive.js, data/monthly.js를 확인해 주세요.'); return; }

  var issues = (A.issues || []).slice().sort(function (a, b) { return b.no - a.no; });
  var latestNo = A.latest;

  K.loadScript('data/issues/' + latestNo + '.js', function (err) {
    var I = (window.KVW_ISSUES || {})[latestNo];
    if (err || !I) { K.fail(root, '최신호 데이터(data/issues/' + latestNo + '.js)를 불러오지 못했습니다.'); return; }
    render(I);
  });

  function tagHtml(t, light) { return '<span class="tag' + (light ? ' tag-light' : '') + '">' + esc(t) + '</span>'; }

  function hero(I) {
    var cnt = K.dealCounts(I.deals);
    return '<section class="hero" id="weekly"><div class="wrap">' +
      '<p class="hero-intro">국내 벤처투자 브리핑 (Weekly)</p>' +
      '<p>국내 벤처투자 시장 주요 이슈를 주간단위로 제공합니다.</p>' +
      '<div class="hero-grid"><article>' +
      '<p class="marker">WEEKLY · No. ' + esc(I.no) + ' · ' + esc(I.week) + '</p>' +
      '<h1 class="hero-title">' + (I.title || []).map(esc).join('<br>') + '</h1>' +
      '<ul class="points">' + (I.points || []).map(function (p) {
        return '<li>' + tagHtml(p.tag) + '<span>' + esc(p.text) + '</span></li>';
      }).join('') + '</ul>' +
      '<div class="hero-actions"><a class="btn btn-light" href="issues/issue-' + K.pad2(I.no) + '.html">No. ' + esc(I.no) + ' 전문 보기</a>' +
      '<a class="btn btn-ghost-dark" href="#archive">Archive</a></div>' +
      '</article>' +
      '<aside class="deals-card" aria-label="Weekly Deals"><div class="card-head"><h3>Weekly Deals</h3>' +
      '<span class="small" style="color:var(--on-dark-2)">' + esc(cnt.label) + '</span></div>' +
      '<ul>' + (I.deals || []).map(function (d) {
        return '<li><span><span class="co">' + esc(d.name) + '</span><span class="rd">' + esc(d.round) + '</span></span>' +
          '<span class="amt">' + esc(C.fmtDealAmount(d)) + '</span></li>';
      }).join('') + '</ul>' +
      '<p class="foot">단위: 국내 억 원, 해외 US$ (M=백만, B=10억)</p>' +
      '<a class="all-deals" href="deals.html">전체 딜 모아보기 →</a></aside>' +
      '</div></div></section>';
  }

  function recent() {
    var rows = issues.filter(function (r) { return r.no < latestNo; }).slice(0, 3);
    return '<section class="section" id="recent"><div class="wrap">' +
      '<div class="section-head"><h2 class="section-title" style="margin:0">Recent Issues</h2><a href="#archive" class="small">Archive</a></div>' +
      '<div class="grid grid-3" style="margin-top:16px">' + rows.map(function (r) {
        var h = K.issueHref('', r.no);
        return '<a class="card issue-card" href="' + esc(h.href) + '"' + (h.legacy ? ' target="_blank" rel="noopener"' : '') + '>' +
          '<span class="meta">No. ' + esc(r.no) + ' · ' + esc(r.week) + (h.legacy ? '<span class="legacy">이전 사이트 ↗</span>' : '') + (r.verified === false ? '<span class="legacy">대조 전</span>' : '') + '</span>' +
          '<span class="ttl">' + esc(r.title) + '</span>' +
          '<span class="dl">' + esc(r.deals) + '</span></a>';
      }).join('') + '</div></div></section>';
  }

  function archiveShell() {
    var oldest = issues.length ? issues[issues.length - 1].no : 1;
    return '<section class="section" id="archive"><div class="wrap">' +
      '<div class="section-head"><h2 class="section-title" style="margin:0">Archive</h2>' +
      '<label class="search">회사·키워드 검색<input id="archive-q" type="search" placeholder="예: Tenstorrent, 세컨더리, 모펀드" autocomplete="off"></label></div>' +
      '<div class="table-box" style="margin-top:20px"><table><thead><tr>' +
      '<th class="num">호</th><th>주차</th><th>핵심 이슈</th><th>대표 딜</th></tr></thead>' +
      '<tbody id="archive-body"></tbody></table></div>' +
      '<div class="archive-actions"><button type="button" class="btn btn-outline" id="archive-toggle" aria-controls="archive-body" aria-expanded="false"></button>' +
      '<span class="small muted" id="archive-status" role="status"></span></div>' +
      '</div></section>';
  }

  function bindArchive() {
    var body = document.getElementById('archive-body');
    var q = document.getElementById('archive-q');
    var btn = document.getElementById('archive-toggle');
    var status = document.getElementById('archive-status');
    var expanded = false;
    // 전체 호 목록(최신호 포함). 기본 5개, 펼치면 전체
    var base = issues.slice();
    var oldest = issues.length ? issues[issues.length - 1].no : 1;

    function rowHtml(r) {
      var h = K.issueHref('', r.no);
      return '<tr><td class="num"><a href="' + esc(h.href) + '"' + (h.legacy ? ' target="_blank" rel="noopener"' : '') + '>' + esc(K.pad2(r.no)) + '</a></td>' +
        '<td class="muted" style="white-space:nowrap">' + esc(r.week) + '</td>' +
        '<td style="font-weight:500">' + esc(r.title) + (h.legacy ? '<span class="legacy">이전 사이트 ↗</span>' : '') + (r.verified === false ? '<span class="legacy">대조 전</span>' : '') + '</td>' +
        '<td class="muted">' + esc(r.deals) + '</td></tr>';
    }

    function draw() {
      var term = (q.value || '').trim().toLowerCase();
      var list;
      if (term) {
        list = issues.filter(function (r) {
          return (String(r.no) + ' ' + r.week + ' ' + r.title + ' ' + r.deals + ' ' + (r.keywords || '')).toLowerCase().indexOf(term) !== -1;
        });
        status.textContent = '검색 결과 ' + list.length + '건 (전체 호 대상)';
        btn.hidden = true;
      } else {
        list = expanded ? base : base.slice(0, ARCHIVE_DEFAULT_ROWS);
        status.textContent = '';
        btn.hidden = base.length <= ARCHIVE_DEFAULT_ROWS;
      }
      body.innerHTML = list.length ? list.map(rowHtml).join('') :
        '<tr><td colspan="4" class="muted">검색 결과가 없습니다.</td></tr>';
      btn.textContent = expanded ? '접기' : '전체 목록 (No. ' + K.pad2(oldest) + '~' + K.pad2(latestNo) + ')';
      btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    }

    btn.addEventListener('click', function () { expanded = !expanded; draw(); });
    q.addEventListener('input', draw);
    draw();
  }

  function monthly() {
    var R = C.computeMonthly(M);
    var big = R.big.map(function (b) {
      return '<div class="big"><p class="label">' + esc(b.label) + '</p>' +
        '<p class="value">' + esc(b.value) + '<span class="unit">' + esc(b.unit) + '</span></p>' +
        '<p class="delta"><b>' + esc(b.delta) + '</b> <span>' + esc(b.sub) + '</span></p></div>';
    }).join('');
    var derived = R.derived.map(function (d) {
      return '<div class="mini"><p class="label">' + esc(d.label) + '*</p><p class="value">' + esc(d.value) + '</p><p class="sub">' + esc(d.sub) + '</p></div>';
    }).join('');

    var yearRows = R.rows.map(function (r) {
      var cls = r.partial ? 'fill accent' : 'fill';
      return '<tr' + (r.current ? ' class="current"' : '') + '>' +
        '<td class="num">' + esc(r.year) + '</td>' +
        '<td><div class="cell-bar"><div class="track"><div class="' + cls + '" style="width:' + r.invBar + '%"></div></div><span class="num">' + esc(r.inv) + '</span></div></td>' +
        '<td class="num r">' + esc(r.co) + '</td>' +
        '<td class="num r">' + esc(r.perCo) + '</td>' +
        '<td><div class="cell-bar"><div class="track"><div class="' + cls + '" style="width:' + r.fundBar + '%"></div></div><span class="num">' + esc(r.fund) + '</span></div></td>' +
        '<td class="num r">' + esc(r.fc) + '</td>' +
        '<td class="num r">' + esc(r.perFund) + '</td>' +
        '<td class="num r">' + esc(r.aum) + '</td></tr>';
    }).join('');

    var sectors = R.sectors.map(function (s) {
      return '<div class="sector"><div class="top"><span>' + esc(s.name) + '</span><span class="vals">' + esc(s.pct) + ' · ' + esc(s.amt) + ' · <b>' + esc(s.yoy) + '</b></span></div>' +
        '<div class="track"><div class="fill accent" style="width:' + s.bar + '%"></div></div></div>';
    }).join('');

    function stack(s) {
      var parts = [['s1', '초기', s.early], ['s2', '중기', s.mid], ['s3', '후기', s.late]];
      return '<p class="stack-label">' + esc(s.year) + '</p><div class="stack" role="img" aria-label="' +
        esc(s.year + ' 초기 ' + C.fmt1(s.early) + '%, 중기 ' + C.fmt1(s.mid) + '%, 후기 ' + C.fmt1(s.late) + '%') + '">' +
        parts.map(function (p) {
          var w = C.barWidth(p[2], 100);
          return '<div class="' + p[0] + '" style="width:' + w + '%">' + esc(p[1] + ' ' + C.fmt1(p[2])) + '</div>';
        }).join('') + '</div>';
    }

    function barRows(list, accentAll) {
      return '<div class="bar-list">' + list.map(function (x) {
        return '<div class="bar-row"><span class="label">' + esc(x.name) + '</span>' +
          '<div class="track"><div class="fill' + (accentAll || x.hi ? ' accent' : '') + '" style="width:' + x.bar + '%"></div></div>' +
          '<span class="val num">' + esc(x.pct) + '</span></div>';
      }).join('') + '</div>';
    }

    var firms = (M.newFirms || []).map(function (f) {
      return '<li><span>' + esc(f.name) + '</span><span class="num">' + esc(f.date) + '</span></li>';
    }).join('');

    var ipo = (M.ipoShare || []).map(function (p, i, arr) {
      return '<span class="chip' + (i === arr.length - 1 ? ' current' : '') + '"><span class="y">' + esc(p.year) + '</span><span class="v">' + esc(C.fmt1(p.pct)) + '%</span></span>';
    }).join('');

    var kosdaq = (M.kosdaq || []).map(function (q, i, arr) {
      return '<tr' + (i === arr.length - 1 ? ' class="current"' : '') + '><td class="num">' + esc(q.year) + '</td><td class="num r">' + esc(C.fmtInt(q.ipo)) +
        '</td><td class="num r">' + esc(C.fmtInt(q.vc)) + '</td><td class="num r">' + esc(C.fmt1(q.pct)) + '</td></tr>';
    }).join('');

    var warn = R.checks.length ? '<div class="warn" role="alert"><b>데이터 점검 필요</b><ul>' +
      R.checks.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul></div>' : '';

    return '<section class="section" id="data"><div class="wrap">' +
      '<div class="section-head"><div><p class="marker">MONTHLY</p><h2 class="section-title">국내 벤처투자 시장 동향</h2></div>' +
      '<span class="badge">Updated ' + esc(M.updated) + ' <span class="ko">&nbsp;· 자료: KVCA</span></span></div>' + warn +

      // 1. 투자 현황
      '<div class="sub-block"><div class="sub-head"><h3 class="sub-title">1. 투자 현황</h3><span class="sub-basis">' + esc(R.labels.ytd) + '</span></div>' +
      '<div class="band"><p class="band-note">증감률: 전년동기 대비</p><div class="grid grid-4" style="gap:28px">' + big + '</div>' +
      '<div class="band-derived grid grid-4" style="gap:12px">' + derived + '</div></div>' +
      '<div style="display:flex;justify-content:flex-end;margin-top:16px"><div class="legend"><span><i style="background:var(--ink)"></i>연간 실적</span><span><i style="background:var(--accent)"></i>1~' + esc(M.month) + '월 누계</span></div></div>' +
      '<div class="table-box" style="margin-top:8px"><table style="min-width:920px"><thead><tr>' +
      '<th>연도</th><th>신규투자 (조 원)</th><th class="r">피투자기업</th><th class="r">기업당 평균* (억 원)</th>' +
      '<th>조합결성 (조 원)</th><th class="r">조합 수</th><th class="r">조합당 평균* (억 원)</th><th class="r">운영 조합 약정액 (조 원)</th>' +
      '</tr></thead><tbody>' + yearRows + '</tbody></table></div>' +
      '<p class="table-note">' + esc(M.years[M.years.length - 2] + '·' + M.years[M.years.length - 1] + '은 1~' + M.month + '월 누계, 그 외는 연간 실적 · 운영 조합 약정액은 연말(누계 열은 ' + M.month + '월 말) 기준') + '</p>' +
      '<div class="grid grid-2" style="margin-top:20px">' +
      '<div class="card"><h4 class="card-title">업종별 신규투자</h4><p class="card-sub">비중 · 금액(억 원) · 전년동기 대비 증감률</p><div class="sector-list">' + sectors + '</div></div>' +
      '<div class="card"><h4 class="card-title">업력별 신규투자 비중</h4><p class="card-sub">초기 · 중기 · 후기, 단위: %</p>' +
      R.stages.map(stack).join('') + '<hr class="divider">' +
      '<h4 class="card-title" style="margin-top:20px">투자 유형별 신규투자 비중</h4><p class="card-sub">단위: %</p>' + barRows(R.types) + '</div>' +
      '</div></div>' +

      // 2. 신규 운용사·조합결성
      '<div class="sub-block"><div class="sub-head"><h3 class="sub-title">2. 신규 운용사·조합결성</h3><span class="sub-basis">' + esc(R.labels.monthOnly) + '</span></div>' +
      '<div class="grid grid-2-wide">' +
      '<div class="card"><div class="card-head"><h4 class="card-title">신규 등록 벤처투자회사</h4><span class="num small">' + esc((M.newFirms || []).length) + '개사</span></div>' +
      '<ul class="firm-list">' + firms + '</ul><p class="card-foot">' + esc(M.firmTypeNote) + '</p></div>' +
      '<div class="card"><div class="card-head"><h4 class="card-title">조합결성 상위 10개 운용사</h4><span class="small muted">상위 10개사 합계* ' + esc(R.topSum) + '억 원</span></div>' +
      '<div style="overflow-x:auto;margin-top:8px"><table class="inline-table" style="min-width:440px"><thead><tr><th class="num">순위</th><th>운용사</th><th>구분</th><th class="r">결성액 (억 원)</th></tr></thead>' +
      '<tbody id="top-body"></tbody></table></div>' +
      '<div style="margin-top:auto;padding-top:12px"><button type="button" class="btn btn-outline" id="top-toggle" aria-controls="top-body" aria-expanded="false">전체 보기</button></div></div>' +
      '</div></div>' +

      // 3. 출자·회수 현황
      '<div class="sub-block"><div class="sub-head"><h3 class="sub-title">3. 출자·회수 현황</h3><span class="sub-basis">' + esc(R.labels.ytd) + '</span></div>' +
      '<div class="grid grid-3">' +
      '<div class="card"><h4 class="card-title">LP 유형별 출자 비중</h4><p class="card-sub">신규조합 기준 · 단위: %</p>' + barRows(R.lps) + '</div>' +
      '<div class="card"><h4 class="card-title">회수 유형별 비중</h4><p class="card-sub">단위: %</p>' + barRows(R.exits) +
      '<h4 class="card-title" style="margin-top:22px">IPO 회수 비중 추이</h4><p class="card-sub">단위: %</p><div class="chips">' + ipo + '</div></div>' +
      '<div class="card"><h4 class="card-title">코스닥 신규상장 중 VC 투자기업</h4><p class="card-sub">단위: 개사, %</p>' +
      '<div style="overflow-x:auto;margin-top:8px;flex:1"><table class="inline-table" style="height:100%"><thead><tr><th>연도</th><th class="r">상장 기업</th><th class="r">VC 투자기업</th><th class="r">비중</th></tr></thead><tbody>' + kosdaq + '</tbody></table></div></div>' +
      '</div></div>' +

      '<p class="source-line">자료: ' + esc(M.sourceName + ' ' + M.updated + ' (' + M.sourceScope + ')') + ' · * 원자료 기반 계산 · 소수 둘째 자리 반올림</p>' +
      '</div></section>';
  }

  function bindTop() {
    var R = C.computeMonthly(M);
    var body = document.getElementById('top-body');
    var btn = document.getElementById('top-toggle');
    var open = false;
    function draw() {
      var rows = open ? R.topRows : R.topRows.slice(0, 5);
      body.innerHTML = rows.map(function (f) {
        return '<tr><td class="num muted">' + esc(f.rank) + '</td><td style="font-weight:500">' + esc(f.name) + '</td><td class="muted">' + esc(f.type) + '</td>' +
          '<td><div class="cell-bar" style="grid-template-columns:minmax(60px,1fr) 56px"><div class="track"><div class="fill accent" style="width:' + f.bar + '%"></div></div><span class="num">' + esc(f.amt) + '</span></div></td></tr>';
      }).join('');
      btn.textContent = open ? '접기' : '전체 보기';
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.hidden = R.topRows.length <= 5;
    }
    btn.addEventListener('click', function () { open = !open; draw(); });
    draw();
  }

  function render(I) {
    root.innerHTML = K.header('', '') + '<main>' + hero(I) + recent() + archiveShell() + monthly() + '</main>' + K.footer();
    bindArchive();
    bindTop();
    if (location.hash) {
      var el = document.getElementById(location.hash.slice(1));
      if (el) el.scrollIntoView();
    }
  }
})();
