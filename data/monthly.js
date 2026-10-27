/*
 * 월간 데이터 (매월 이 파일만 교체)
 * 자료: 한국벤처캐피탈협회 Venture Capital Market Brief 2026년 8월 (벤처투자회사·벤처투자조합 기준)
 * 단위: 억 원 / 개사 / 개 / %. 원자료 숫자만 입력하고, 환산·평균·증감률은 assets/js/calc.js가 계산합니다.
 */
window.KVW_MONTHLY = {
  updated: '26.8',          // 배지·출처 줄에 표시되는 기준월
  month: 8,                 // "1~8월 누계", "8월 당월" 표시에 사용
  sourceName: '한국벤처캐피탈협회 Venture Capital Market Brief',
  sourceScope: '벤처투자회사·조합 기준',

  // 연도별 열: 연간 실적 … 전년동기 누계, 당해 누계 (마지막 두 열은 항상 누계)
  years:   ['2022', '2023', '2024', '2025', '25.8', '26.8'],
  partial: [false, false, false, false, true, true],
  lastFullYearIndex: 3,     // '2025' 열 (연간 실적 대비 달성률 기준)
  cumulativeFrom: 0,        // 누계 합산 시작 열 ('2022')

  invest:    [67640, 53977, 66315, 68111, 41243, 58452],   // 신규투자(억 원)
  companies: [2474, 2281, 2494, 2373, 1486, 1695],         // 피투자기업(개사)
  funds:     [110719, 68129, 58620, 76535, 39979, 60588],  // 신규 조합결성(억 원)
  fundCount: [380, 290, 286, 309, 162, 225],               // 신규 조합 수(개)
  aum:       [513130, 566384, 608311, 671368, 642250, 711434], // 운영 조합 약정액(억 원), 연말·8월 말 기준
  aumCount:  [1736, 1956, 2159, 2379, 2273, 2522],         // 운영 조합 수(개)

  growthReported: { invest: 41.7, funds: 51.6 },  // 원자료 기재 전년동기 대비 증감률(%)
  firms: { total: 259, newYtd: 17, removed: 7 },  // 벤처투자회사(8월 말)

  sectors: [ // 26.8 누계 금액(amt)과 25.8 누계 금액(prev), 비중(%)
    { name: 'ICT서비스', amt: 15157, prev: 11204, pct: 25.9 },
    { name: '전기/기계/장비', amt: 10609, prev: 5874, pct: 18.1 },
    { name: '바이오/의료', amt: 10503, prev: 7444, pct: 18.0 },
    { name: 'ICT제조', amt: 6711, prev: 1885, pct: 11.5 },
    { name: '유통/서비스', amt: 6681, prev: 5485, pct: 11.4 },
    { name: '그 외 4개 업종', amt: 8791, prev: 9351, pct: 15.1 }
  ],
  stages: [
    { year: '26.8', early: 18.9, mid: 36.2, late: 44.9 },
    { year: '25.8', early: 14.6, mid: 41.3, late: 44.1 }
  ],
  types: [
    { name: '우선주', pct: 70.2 }, { name: '보통주', pct: 16.4 },
    { name: '투자사채', pct: 6.9 }, { name: '기타', pct: 3.4 },
    { name: '프로젝트', pct: 3.2 }
  ],
  lps: [
    { name: '금융기관', pct: 25.4 }, { name: '모태펀드', pct: 15.8 },
    { name: '일반법인', pct: 14.6 }, { name: '성장금융', pct: 9.6 },
    { name: '연금/공제회', pct: 9.3 }, { name: '기타정책기관', pct: 8.8 },
    { name: '벤처캐피탈', pct: 8.5 }, { name: '개인', pct: 4.2 },
    { name: '기타단체/외국인', pct: 2.8 }, { name: '민간모펀드', pct: 1.0 }
  ],
  highlightLp: '민간모펀드',
  exits: [
    { name: '매각', pct: 53.0 }, { name: 'IPO', pct: 32.2 }, { name: '상환', pct: 6.2 },
    { name: '프로젝트', pct: 5.7 }, { name: '기타', pct: 2.9 }
  ],
  ipoShare: [ // 회수 중 IPO 비중(%)
    { year: '2022', pct: 24.3 }, { year: '2023', pct: 32.3 }, { year: '2024', pct: 30.6 },
    { year: '2025', pct: 37.3 }, { year: '25.8', pct: 40.3 }, { year: '26.8', pct: 32.2 }
  ],
  kosdaq: [ // 코스닥 신규상장: 상장 기업 수, VC 투자기업 수, 비중(%)
    { year: '2022', ipo: 112, vc: 67, pct: 59.8 }, { year: '2023', ipo: 114, vc: 62, pct: 54.4 },
    { year: '2024', ipo: 111, vc: 70, pct: 63.1 }, { year: '2025', ipo: 94, vc: 69, pct: 73.4 },
    { year: '26.8', ipo: 36, vc: 24, pct: 66.7 }
  ],

  // 당월(8월) 기준 목록
  newFirms: [
    { name: '웨이브벤처스', date: '08.05' },
    { name: '전남지역대학연합창업기술지주', date: '08.05' },
    { name: '한국전자기술연구원기술지주', date: '08.05' },
    { name: '크레센도얼터너티브매니지먼트', date: '08.20' },
    { name: '드레이퍼엑스벤처스', date: '08.31' },
    { name: '사제파트너스', date: '08.31' }
  ],
  firmTypeNote: '조합 운용사 기준 LLC 59개사, 신기술사 94개사',
  topFunds: [ // 금액이 같으면 원자료 표 순서 유지
    { name: '스톤브릿지벤처스', type: '벤처투자회사', amt: 3250 },
    { name: '코로프라넥스트코리아', type: '벤처투자회사', amt: 500 },
    { name: '에스엠컬처파트너스', type: '벤처투자회사', amt: 500 },
    { name: '한국투자파트너스', type: '벤처투자회사', amt: 444 },
    { name: '에코프로파트너스', type: '벤처투자회사', amt: 408 },
    { name: '아이비케이자산운용 주식회사', type: '기타운용사', amt: 408 },
    { name: '마그나인베스트먼트', type: '벤처투자회사', amt: 347 },
    { name: '프로텍벤처스', type: '벤처투자회사', amt: 347 },
    { name: '시그나이트', type: '벤처투자회사', amt: 335 },
    { name: '빅무브벤처스', type: '벤처투자회사', amt: 334 }
  ]
};
