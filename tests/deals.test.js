/* Deals 모아보기 로직 검증: node tests/deals.test.js */
'use strict';
var D = require('../assets/js/deals-core.js');
var fs = require('fs'), path = require('path'), vm = require('vm');
var defects = [], pass = 0;
function ok(cond, name, detail) { if (cond) pass++; else defects.push(name + (detail ? ' → ' + detail : '')); }
function names(l) { return l.map(function (d) { return d.name; }).join(','); }

// 1. 표본 데이터
var S = {
  1: { shortWeek: '4월 2주', deals: [
    { name: 'Alpha', region: '해외', sector: 'AI', round: 'Seed', usdM: 100, investors: 'Sequoia', date: '2026.04.10' },
    { name: '가나', region: '국내', sector: '로봇', round: 'Series A', krw: 50, investors: '하나증권', date: '2026.04.11' }
  ] },
  2: { shortWeek: '4월 3주', deals: [
    { name: 'alpha ', region: '해외', sector: 'AI', round: '미기재', usdM: 100, investors: 'Sequoia(리드)', date: '2026.04.10' },
    { name: 'Beta', region: '해외', sector: '핀테크', round: 'Series B', amountText: '€411M', date: '2026.04' },
    { name: 'Gamma', region: '해외', sector: 'AI', round: 'Series C', usdM: 1500, date: '' },
    { name: '다라', region: '국내', sector: '바이오', round: 'Pre-IPO', krw: 650, date: '2026.04.12' }
  ] }
};
var all = D.build(S);

// 2. 병합
ok(all.length === 5, '중복 병합(이름 대소문자·공백 무시, 라운드 표기 차이 무시)', all.length);
var alpha = all.filter(function (d) { return d.name.toLowerCase() === 'alpha'; })[0];
ok(alpha && alpha.issues.join() === '1,2', '수록 호 목록 오름차순', alpha && alpha.issues.join());
ok(alpha && alpha.investors === 'Sequoia(리드)', '대표 기록은 최근 호', alpha && alpha.investors);
var c = D.counts(all);
ok(c.total === 5 && c.domestic === 2 && c.global === 3, '건수 국내·해외 분리', JSON.stringify(c));

// 3. 정렬
var byDate = D.query(all, { sort: 'date' });
ok(names(byDate) === '다라,가나,alpha,Beta,Gamma', '발표일 최신순, 월만 있는 날짜는 해당 월 앞, 날짜 없음은 맨 뒤', names(byDate));
var byAmt = D.query(all, { sort: 'amount' });
ok(names(byAmt) === '다라,가나,Gamma,alpha,Beta', '금액순: 국내 묶음 → 해외 묶음, 다른 통화(€)는 맨 뒤', names(byAmt));
ok(names(D.query(all, { sort: 'amount', region: '해외' })) === 'Gamma,alpha,Beta', '해외만 금액순');

// 4. 필터·검색 (C-1)
ok(D.query(all, { q: '' }).length === 5, '빈 검색어 = 전체');
ok(D.query(all, { q: '   ' }).length === 5, '공백 검색어 = 전체');
ok(names(D.query(all, { q: 'SEQUOIA' })) === 'alpha', '대소문자 무시 투자자 검색');
ok(names(D.query(all, { q: '하나증권' })) === '가나', '한글 투자자 검색');
ok(D.query(all, { q: '<script>' }).length === 0, '특수문자 검색 오류 없음');
ok(D.query(all, { q: '🚀' }).length === 0, '이모지 검색 오류 없음');
ok(D.query(all, { region: '엉뚱한값' }).length === 5, '잘못된 지역 값은 전체로 처리');
ok(D.query(all, { region: '국내' }).every(function (d) { return d.region === '국내'; }), '국내 필터');

// 5. 빈 값·이상값 (C-1, C-2)
ok(D.build({}).length === 0 && D.query([], {}).length === 0, '데이터 없음');
ok(D.build(null).length === 0 && D.query(null).length === 0, 'null 입력');
ok(D.build({ 3: { deals: null }, 4: null }).length === 0, '딜 배열 없는 호(일부만 입력)');
ok(D.build({ 5: { deals: [{ name: '' }, null, { name: '  ' }] } }).length === 0, '이름 없는 딜 제외');
var odd = D.build({ 6: { deals: [
  { name: 'Txt', region: '국내', krw: '억', date: '날짜아님' },
  { name: 'Big', region: '해외', usdM: 1e12, date: '2026.13.40' },
  { name: 'Neg', region: '해외', usdM: -5 },
  { name: 'Nan', region: '해외', usdM: NaN },
  { name: 'Comma', region: '국내', krw: '1,550' }
] } });
ok(odd.filter(function (d) { return d.name === 'Txt'; })[0].krw === null, '숫자 자리에 글자 → null');
ok(odd.filter(function (d) { return d.name === 'Nan'; })[0].usdM === null, 'NaN → null');
ok(odd.filter(function (d) { return d.name === 'Comma'; })[0].krw === 1550, '쉼표 숫자 인식');
var oa = D.query(odd, { sort: 'amount', region: '해외' });
ok(names(oa) === 'Big,Neg,Nan', '매우 큰 수·음수·NaN 정렬', names(oa));
ok(D.dateKey('날짜아님') === '' && D.dateKey('2026.7') === '20260700', '날짜 파싱 경계');

// 6. 동점 (C-3-8): 순서 고정
var tie = D.build({ 7: { deals: [
  { name: 'B', region: '해외', usdM: 10, date: '2026.05.01' },
  { name: 'A', region: '해외', usdM: 10, date: '2026.05.01' }
] }, 8: { deals: [{ name: 'C', region: '해외', usdM: 10, date: '2026.05.01' }] } });
var r1 = names(D.query(tie, { sort: 'amount' })), r2 = names(D.query(tie.slice().reverse(), { sort: 'amount' }));
ok(r1 === 'C,A,B' && r1 === r2, '동점: 최근 호 → 기업명, 입력 순서와 무관', r1 + ' / ' + r2);

// 7. 입력 배열 보존
var before = names(all); D.query(all, { sort: 'amount' });
ok(names(all) === before, '원본 배열 순서 불변');

// 8. 실제 데이터 전체 (data/issues/*.js)
var ctx = { window: {} }; vm.createContext(ctx);
var dir = path.join(__dirname, '..', 'data', 'issues');
fs.readdirSync(dir).filter(function (f) { return /^\d+\.js$/.test(f); }).forEach(function (f) {
  vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx);
});
var real = D.build(ctx.window.KVW_ISSUES), rawCount = 0;
Object.keys(ctx.window.KVW_ISSUES).forEach(function (k) { rawCount += (ctx.window.KVW_ISSUES[k].deals || []).length; });
ok(real.length > 0 && real.length <= rawCount, '실데이터 병합 건수 ≤ 원 건수', real.length + '/' + rawCount);
ok(real.every(function (d) { return d.issues.length >= 1; }), '모든 딜에 수록 호 존재');
var keys = {}; real.forEach(function (d) { keys[d.key] = (keys[d.key] || 0) + 1; });
ok(Object.keys(keys).every(function (k) { return keys[k] === 1; }), '병합 후 중복 키 없음');
var multi = real.filter(function (d) { return d.issues.length > 1; });
console.log('실데이터: 원 ' + rawCount + '건 → 병합 ' + real.length + '건, 여러 호 수록 ' + multi.length + '건 (' +
  multi.map(function (d) { return d.name + '[' + d.issues.join('·') + ']'; }).join(', ') + ')');

console.log('통과 ' + pass + '건, 결함 ' + defects.length + '건');
defects.forEach(function (d) { console.log(' - ' + d); });
process.exit(defects.length ? 1 : 0);
