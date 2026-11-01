/*
 * 제25호 (2026년 10월 5주차) — Gemini 초안 + Claude 국내 보완, 2026.11.02 원문 대조 반영
 * 금액: 국내 krw(억 원), 해외 usdM(백만 달러). 비공개는 null
 */
window.KVW_ISSUES = window.KVW_ISSUES || {};
window.KVW_ISSUES[25] = {
  no: 25,
  week: '2026년 10월 5주차',
  shortWeek: '10월 5주',
  coverage: '2026.10.26 ~ 10.30 및 10월 주요 딜',
  title: ['퓨리오사AI 8,200억 원 Series D,', 'Modal $750M · Hex $100M'],
  summary: '핵심 요약: 퓨리오사AI 8,200억 원 Series D · 국민성장펀드 누적 승인 22.3조 원 · 10월 스타트업 투자 1.59조 원 · 국내 딜 3건 · 해외 딜 4건',
  points: [
    { tag: 'Deal', text: '퓨리오사AI 8,200억 원 Series D, 투자 후 기업가치 약 3.8조 원 (국민성장펀드 3,700억 원)' },
    { tag: 'Policy', text: '국민성장펀드 10월 4건 승인, 누적 승인 22.3조 원 (연간 목표 30조 원의 약 74%)' },
    { tag: 'Report', text: '10월 국내 스타트업 투자 1조 5,902억 원, 퓨리오사AI 1건이 51.6%' }
  ],
  // figures 생략 시 국내·해외 최대 딜과 딜 건수로 자동 구성
  articles: [
    {
      type: 'policy', marker: 'POLICY · 정책금융',
      title: '국민성장펀드 10월 4건 승인, 누적 승인 22.3조 원',
      facts: [
        '해남 태양광 1,000억 원, PSK(반도체 장비) 1,400억 원(펀드 1,200억 원·민간 200억 원, 대출), 하나마이크론(시스템반도체 테스트) 500억 원, GC녹십자(차세대 혈액제제) 1,700억 원',
        '4건 총사업비 약 1.15조 원*, 펀드 지원액 4,400억 원*',
        '※ *직접 계산한 값: 총사업비 6,846억+1,819억+700억+2,100억 원 / 펀드 지원액 1,000억+1,200억+500억+1,700억 원',
        '10월까지 누적 승인 22.3조 원(39건), 연간 목표 30조 원의 약 74%',
        '9월 신설 리스크관리위원회의 첫 심의 대상'
      ],
      sources: [
        { name: '아주경제 (금융위원회 발표)', url: 'https://www.ajunews.com/view/20261029181958057', date: '2026.10.29' }
      ]
    },
    {
      type: 'policy', marker: 'POLICY · 지역 모펀드',
      title: '대전 D-Growth Fund 540억 원 결성 (10월 주요 소식)',
      facts: [
        '모태펀드 350억 원 출자, 대전시·대전투자금융·KAIST·IBK기업은행·하나은행·NH농협은행 등 참여',
        '자펀드 출자사업으로 약 800억 원 규모 벤처펀드 조성 목표, 대전 지역 벤처·스타트업 투자',
        '2026.10.01 결성식 개최, 자펀드 출자사업은 10월 말 공고 예정'
      ],
      sources: [
        { name: '헤럴드경제', url: 'https://biz.heraldcorp.com/article/10889746', date: '2026.10.01' }
      ]
    },
    {
      type: 'report', marker: 'REPORT · 투자 동향',
      title: '10월 국내 스타트업 투자 1조 5,902억 원, 187건',
      facts: [
        '투자 금액 1조 5,902억 원(전년 동월 대비 +208.2%), 건수 187건(+50.8%). 금액은 공개된 50건 기준',
        '퓨리오사AI 8,200억 원이 전체 금액의 51.6%, 제외 시 7,702억 원(전년 동월 대비 +49.3%)',
        '시리즈A(15건)·시리즈B(5건) 등 중기 성장 단계 축소, 시리즈C(8건)·시리즈D(2건) 후기 라운드로 자금 집중',
        '전체 건수의 48.1%(90건)가 TIPS 등 지원금'
      ],
      sources: [
        { name: '스타트업레시피 월간 리포트 10월호', url: 'https://startuprecipe.co.kr/archives/invest-report/5839802', date: '2026.11.01' }
      ]
    },
    {
      type: 'report', marker: 'REPORT · 자산운용 AI',
      title: 'ICI 백서: 자산운용 업무의 AI 기반 지능형 운영 모델',
      facts: [
        'Investment Company Institute(ICI) 금융혁신자문위원회 발간 (2026.10.29)',
        '오류 사후 처리가 아닌 사전 예방, 업무 현황 실시간 파악, 리스크 조기 포착을 목표로 한 운영 모델 제안',
        '권고 시작점: 반복되는 운영 문제 하나를 골라 AI 적용 효과를 시험(결제 예외 건수, 조사 시간 등으로 측정)',
        'AI는 지원 수단이며 사람의 판단·거버넌스·책임 구조 유지 강조',
        '백서 본문이 아닌 보도 기사 기준 요약'
      ],
      sources: [
        { name: 'InvestmentNews', url: 'https://www.investmentnews.com/transformation/ai-in-asset-management-operations-moves-beyond-fixing-errors-faster/268808', date: '2026.10.29' }
      ]
    }
  ],
  deals: [
    { name: '퓨리오사AI', region: '국내', sector: 'AI 추론 반도체', round: 'Series D', krw: 8200, note: '투자 후 기업가치 약 3.8조 원',
      investors: '국민성장펀드(3,700억 원, 최대 투자자), 인피니텀, 한국수출입은행(첫 벤처 직접투자), 유암코·한화자산운용 등', date: '2026.10.29',
      source: { name: 'ZDNet Korea', url: 'https://zdnet.co.kr/view/?no=20261029090026' } },
    { name: '프리뉴', region: '국내', sector: '드론 설계·제조', round: 'Series D', krw: 166, note: '누적 506억 원, 기술특례상장 추진',
      investors: 'IBK기업은행·한국투자증권·IBK캐피탈 등 9곳(리드 미기재)', date: '2026.10.30',
      source: { name: '블로터', url: 'https://www.bloter.net/news/articleView.html?idxno=677294' } },
    { name: '나노포지에이아이', region: '국내', sector: 'AI 신소재 개발', round: 'Seed', krw: 146, note: '누적 150억 원 이상',
      investors: '미래에셋벤처투자(리드), DSC인베스트먼트·KDB산업은행·에코프로파트너스 등', date: '2026.10.30',
      source: { name: '스타트업레시피', url: 'https://startuprecipe.co.kr/archives/5839651' } },
    { name: 'Modal', region: '해외', sector: 'AI 추론 인프라', round: 'Series D', usdM: 750, note: '밸류 $15.75B, 연환산 매출 $1B 돌파',
      investors: 'Accel(리드)', date: '2026.10.14',
      source: { name: 'AI Weekly', url: 'https://aiweekly.co/alerts/modal-closes-750m-series-d-led-by-accel-at-1575b-valuation-crosses-1b-arr' } },
    { name: 'Hex', region: '해외', sector: 'AI 데이터 분석', round: '미기재', usdM: 100, note: '밸류 $1.2B',
      investors: 'Peak XV·137 Ventures(공동 앵커), a16z·Sequoia 등', date: '2026.10.29',
      source: { name: 'DealStreetAsia', url: 'https://dealstreetasia.com/stories/peak-xv-co-anchors-hex-funding-499490' } },
    { name: 'Machenta', region: '해외', sector: '로봇 학습 모델', round: 'Seed', usdM: 40, note: '영국 로보틱스 시드 최대',
      investors: 'Creandum·USV(공동 리드)', date: '2026.10.27',
      source: { name: 'Tech.eu', url: 'https://tech.eu/2026/10/27/london-robotics-startup-machenta-raises-40m-seed-investment/' } },
    { name: 'FORT Robotics', region: '해외', sector: '로봇 안전 제어', round: '기존 투자자 추가 출자', usdM: 20, note: '약 $20M, SPAC 상장 추진 중',
      investors: 'Tiger Global(약 $10M)·Mark Cuban Companies', date: '2026.10.23',
      source: { name: 'Robotics 24/7', url: 'https://www.robotics247.com/article/fort-robotics-secures-20m-funding-round-led-by-tiger-global-mark-cuban-companies' } }
  ],
  insight: [
    '10월 국내 스타트업 투자의 절반 이상(51.6%)이 퓨리오사AI 1건에 집중됨. 반면 시리즈A·B 등 중기 성장 단계는 축소됨',
    '정책금융이 지분투자(퓨리오사AI 3,700억 원)와 설비 대출(PSK 등)에 동시 투입됨. 후기 라운드에서는 정책금융 참여 여부가 성사 변수로 부상함',
    '해외 자금은 AI 추론 인프라(Modal), 로봇 학습 모델(Machenta), AI 데이터 분석(Hex)으로 계속 유입됨'
  ]
};
