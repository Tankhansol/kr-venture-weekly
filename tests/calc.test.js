/*
 * 계산 로직 단독 검증 — 실행: node tests/calc.test.js
 * 1) 26.8 기대값 대조  2) 부수기(빈칸·분모 0·경계·문자·극단값)  3) 데이터 합계 점검
 * 실패가 있으면 종료 코드 1
 */
'use strict';
var path = require('path');
var C = require(path.join(__dirname, '..', 'assets', 'js', 'calc.js'));
global.window = {};
require(path.join(__dirname, '..', 'data', 'monthly.js'));
var M = global.window.KVW_MONTHLY;

var fails = [], passes = 0;
function eq(name, got, want) {
  if (got === want) { passes++; return; }
  fails.push(name + ': 기대 ' + JSON.stringify(want) + ', 실제 ' + JSON.stringify(got));
}
function clone(o) { return JSON.parse(JSON.stringify(o)); }

// 1. 기대값 (요청서 6-3)
var R = C.computeMonthly(M);
eq('신규투자 조 원', R.big[0].value, '5.8');
eq('신규투자 증감률(원자료)', R.big[0].delta, '+41.7%');
eq('조합결성 조 원', R.big[1].value, '6.1');
eq('조합결성 증감률(원자료)', R.big[1].delta, '+51.6%');
eq('운영 약정액 조 원', R.big[2].value, '71.1');
eq('운영 약정액 증감률', R.big[2].delta, '+10.8%*');
eq('벤처투자회사', R.big[3].value, '259');
eq('기업당 평균', R.derived[0].value, '34.5억 원');
eq('기업당 평균 전년동기', R.derived[0].sub, '전년동기 27.8억 원 대비 +24.3%');
eq('조합당 평균', R.derived[1].value, '269.3억 원');
eq('조합당 평균 전년동기', R.derived[1].sub, '전년동기 246.8억 원 대비 +9.1%');
eq('달성률 투자', R.derived[2].value, '투자 85.8%');
eq('달성률 결성', R.derived[2].sub, '조합결성 79.2%');
eq('누계 투자', R.derived[3].value, '투자 31.4조 원');
eq('누계 결성', R.derived[3].sub, '조합결성 37.5조 원');
eq('업종 증감률', R.sectors.map(function (s) { return s.yoy; }).join(' '),
  '+35.3%* +80.6%* +41.1%* +256.0%* +21.8%* −6.0%*');
eq('상위 10개사 합계', R.topSum, '6,873');
eq('연도별 기업당 평균', R.rows.map(function (r) { return r.perCo; }).join(' '), '27.3 23.7 26.6 28.7 27.8 34.5');
eq('연도별 조합당 평균', R.rows.map(function (r) { return r.perFund; }).join(' '), '291.4 234.9 205.0 247.7 246.8 269.3');
eq('연도별 운영 약정액', R.rows.map(function (r) { return r.aum; }).join(' '), '51.3 56.6 60.8 67.1 64.2 71.1');
eq('기간 표시 누계', R.labels.ytd, '1~8월 누계');
eq('기간 표시 당월', R.labels.monthOnly, '8월 당월');
eq('데이터 점검 경고 없음', R.checks.length, 0);

// 금액 표기 규칙
eq('USD 110M', C.fmtUSD(110), '$110M');
eq('USD 27.5M', C.fmtUSD(27.5), '$27.5M');
eq('USD 999M', C.fmtUSD(999), '$999M');
eq('USD 1000M → B', C.fmtUSD(1000), '$1.0B');
eq('USD 1500M → B', C.fmtUSD(1500), '$1.5B');
eq('USD 3900M → B', C.fmtUSD(3900), '$3.9B');
eq('KRW 650', C.fmtKRW(650), '650억 원');
eq('KRW 비공개', C.fmtKRW(null), '비공개');

// 2. 부수기 (C-1·C-2)
// 2-1 빈칸·공백
eq('빈 문자열', C.fmtInt(''), '—');
eq('공백', C.fmtInt('   '), '—');
eq('null', C.jo(null), '—');
// 2-2 분모 0
eq('분모 0 나눗셈', C.div(10, 0), null);
eq('분모 0 증감률', C.pctSigned(C.growth(10, 0)), '—');
var Z = clone(M); Z.companies[5] = 0; Z.fundCount[5] = 0; Z.aum[4] = 0;
var RZ = C.computeMonthly(Z);
eq('피투자기업 0 → 평균', RZ.derived[0].value, '—');
eq('조합 수 0 → 평균', RZ.derived[1].value, '—');
eq('전년 약정액 0 → 증감률', RZ.big[2].delta, '—');
eq('NaN 미노출', JSON.stringify(RZ).indexOf('NaN'), -1);
eq('Infinity 미노출', JSON.stringify(RZ).indexOf('Infinity'), -1);
// 2-3 경계값 (막대 폭 0~100 고정, 반올림 경계)
eq('막대 최대', C.barWidth(100, 100), 100);
eq('막대 초과', C.barWidth(100.01, 100), 100);
eq('막대 미만', C.barWidth(99.99, 100), 100);
eq('막대 음수', C.barWidth(-5, 100), 0);
eq('반올림 경계 0.04%', C.pctSigned(0.0004), '0.0%');
eq('반올림 경계 0.05%', C.pctSigned(0.0005), '+0.1%');
eq('USD 경계 999.9', C.fmtUSD(999.9), '$999.9M');
// 2-4 문자·특수문자
eq('글자', C.fmtInt('abc'), '—');
eq('이모지', C.fmt1('📈'), '—');
var S = clone(M); S.invest[5] = '오만';
var RS = C.computeMonthly(S);
eq('문자 입력 → 조 원', RS.big[0].value, '—');
eq('문자 입력 → 점검 경고', RS.checks.length > 0, true);
// 2-5 최대·최소
eq('매우 큰 수', C.jo(1e12), '100,000,000.0');
eq('음수 증감', C.pctSigned(-0.4174), '−41.7%');
var B = clone(M); B.sectors[0].pct = 5000; B.topFunds[0].amt = -10;
var RB = C.computeMonthly(B);
eq('큰 비중 막대 고정', RB.sectors[0].bar, 100);
eq('음수 결성액 막대', RB.topRows[0].bar, 0);
// 2-6 일부만 입력 (C-2): 연도 개수 불일치 → 경고
var P = clone(M); P.funds.pop();
eq('일부 입력 → 경고', C.computeMonthly(P).checks.length > 0, true);

// 3. 합계 점검 (원자료 대사)
eq('업종 합계 = 총액', C.sum(M.sectors.map(function (s) { return s.amt; })), M.invest[5]);
eq('업력 26.8 합 100', Math.round((M.stages[0].early + M.stages[0].mid + M.stages[0].late) * 10) / 10, 100);
eq('LP 합 100', Math.round(C.sum(M.lps.map(function (x) { return x.pct; })) * 10) / 10, 100);
eq('회수 합 100', Math.round(C.sum(M.exits.map(function (x) { return x.pct; })) * 10) / 10, 100);
eq('투자 유형 합 100.1 (원자료 반올림)', Math.round(C.sum(M.types.map(function (x) { return x.pct; })) * 10) / 10, 100.1);

console.log('통과 ' + passes + '건, 결함 ' + fails.length + '건');
fails.forEach(function (f) { console.log('  결함: ' + f); });
process.exit(fails.length ? 1 : 0);
