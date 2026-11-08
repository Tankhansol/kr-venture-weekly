/*
 * 제26호 (2026년 11월 1주차, 수록 2026.11.02~11.06) — Gemini·ChatGPT 리서치 + Claude 보완, 2026.11.09 원문 대조 반영
 * 금액: 국내 krw(억 원), 해외 usdM(백만 달러). 다른 통화는 amountText
 */
window.KVW_ISSUES = window.KVW_ISSUES || {};
window.KVW_ISSUES[26] = {
  no: 26,
  week: '2026년 11월 1주차',
  shortWeek: '11월 1주',
  coverage: '2026.11.02 ~ 11.06',
  title: ['유로보틱스 400억 원 Series A,', 'Zipline $1.5B · Shield AI $1B'],
  summary: '핵심 요약: 금융권 민간벤처모펀드 올해 7개 · 미국 데이터센터 규제 우려 · 건설 로보틱스 투자 $1.6B · 국내 딜 4건 · 해외 딜 4건',
  points: [
    { tag: 'Policy', text: '금융권 민간벤처모펀드 올해 7개, 합산 약정 약 9,040억 원' },
    { tag: 'Deal', text: '유로보틱스 400억 원 Series A · 무빈 100억 원 Series A, 피지컬 AI 소프트웨어·데이터 투자' },
    { tag: 'Deal', text: 'Zipline $1.5B(밸류 $21.5B) · Shield AI $1B Series H(밸류 $28.8B)' }
  ],
  articles: [
    {
      type: 'policy', marker: 'POLICY · 민간모펀드',
      title: '금융권 민간벤처모펀드 올해 7개, 합산 약정 약 9,040억 원',
      facts: [
        '결성 완료 4곳(약정 합계 6,040억 원): 하나벤처스 1,000억 원(5월), 키움인베스트먼트 2,040억 원(6월), 신한벤처투자 1,000억 원(7월), 하나증권 2,000억 원(9월)',
        '결성 추진 3곳(각 1,000억 원): NH벤처투자(연내), KB금융·우리금융(연말 전후)',
        '은행: 정책자금 20% 이상 참여 적격 펀드 출자 시 위험가중치 최대 400% → 100% 특례',
        '증권사: 발행어음·IMA 조달자금의 일정 비율을 모험자본에 단계적으로 공급해야 함'
      ],
      sources: [
        { name: '톱데일리 (뉴스통 게재)', url: 'https://www.newstong.co.kr/view3.aspx?seq=14788060', date: '2026.11.02' }
      ]
    },
    {
      type: 'policy', marker: 'POLICY · 해외 정책',
      title: '미국 중간선거 이후 데이터센터 규제 우려, 미국 반도체주 급락',
      facts: [
        '데이터센터 예정 지역 선거 결과 이후 건설 승인·전력 공급 규제 강화 우려 확산, 구체적 입법은 아직 없음',
        '11.05(현지) 나스닥 −5.52%, S&P500 −4.36%, 필라델피아 반도체지수 −12% 이상',
        '엔비디아 −9.3%, 마이크론 −17.4%, 샌디스크 −22.2%',
        'NH투자증권: 내년 신규 데이터센터 용량의 약 3/4이 이미 건설 중, 2028년 예정 물량도 취소보다 지연 가능성이 커 시장 반응 과도'
      ],
      sources: [
        { name: '비즈니스워치', url: 'https://news.bizwatch.co.kr/article/market/2026/11/06/0002', date: '2026.11.06' }
      ]
    },
    {
      type: 'policy', marker: 'POLICY · 오픈이노베이션',
      title: '삼성물산 2026 퓨처스케이프 데모데이, 스타트업 6곳 실증 성과 공유 (10월 5주 소식)',
      facts: [
        '삼성물산 건설부문·서울경제진흥원 공동 운영, 7월부터 약 3개월간 실증',
        '참여사: 홈앤코(홈케어), 르몽(AI 학습), 디버(오피스 물류 로봇), 인부스(모듈형 부스), 팀엘리시움(근골격 분석), 씨플랫에이아이(시니어 정서 지원)',
        '래미안 단지·홈닉 플랫폼·오피스 빌딩에서 실증, 서비스 고도화와 자사 플랫폼 탑재 등 후속 협업 계획'
      ],
      sources: [
        { name: '메트로신문', url: 'https://www.metroseoul.co.kr/article/20261027500067', date: '2026.10.27' }
      ]
    },
    {
      type: 'report', marker: 'REPORT · 섹터 동향',
      title: 'Crunchbase: 2026년 건설 로보틱스 투자 $1.6B, 2021년 최고치의 약 3배',
      facts: [
        '2026년 건설 로보틱스 투자 약 $1.6B(10.29 기준), 이전 최고치 2021년 $506M',
        'Bedrock Robotics 2개 라운드 $870M(2월 Series B $270M, 10월 Series C $600M)',
        'Icon 2개 라운드 $265M(3월 Series C $65M, 10월 Series D $200M)'
      ],
      sources: [
        { name: 'Value Add Pulse (Crunchbase News 인용)', url: 'https://valueaddvc.com/pulse/construction-robotics-funding-1-6b-2026-sector-snapshot', date: '2026.11.05' }
      ]
    },
    {
      type: 'report', marker: 'REPORT · 투자 동향',
      title: '11월 1주 국내 스타트업 투자: 34곳 유치, 공개 9개사 914억 원',
      facts: [
        '투자 유치 스타트업 34곳, 금액 공개 9개사 합계 914억 원 (스타트업레시피 집계)',
        '100억 원 이상: 유로보틱스 400억 원, 액션핏 150억 원, 페르소나AI 150억 원, 무빈 100억 원'
      ],
      sources: [
        { name: '스타트업레시피 (이번주투자)', url: 'https://startuprecipe.co.kr/archives/5840517', date: '' }
      ]
    }
  ],
  deals: [
    { name: '유로보틱스', region: '국내', sector: '로봇 자율이동 AI', round: 'Series A', krw: 400, note: '회사 측: 시드 대비 기업가치 10배 이상',
      investors: '키움인베스트먼트·케이투인베스트먼트파트너스(공동 리드), 현대차그룹 제로원·서울투자파트너스 등', date: '2026.11.04',
      source: { name: '이데일리', url: 'https://www.edaily.co.kr/News/Read?newsId=03870406645642440' } },
    { name: '액션핏', region: '국내', sector: '미기재', round: '미기재', krw: 150, note: '누적 220억 원',
      investors: '에이티넘인베스트먼트·코오롱인베스트먼트 등', date: '11월 1주',
      source: { name: '스타트업레시피', url: 'https://startuprecipe.co.kr/archives/5840517' } },
    { name: '페르소나AI', region: '국내', sector: 'AI', round: 'RCPS 발행', krw: 150, note: '납입 11.11 예정',
      investors: '한국투자밸류자산운용 펀드 2곳(국민성장펀드 자금)', date: '11월 1주',
      source: { name: '스타트업레시피', url: 'https://startuprecipe.co.kr/archives/5840517' } },
    { name: '무빈', region: '국내', sector: '로봇 학습용 3D 모션 데이터', round: 'Series A', krw: 100, note: '라이다 기반 모션캡처, 해외 매출 비중 70%',
      investors: 'IMM인베스트먼트(리드), IBK기업은행·Voyager Ventures(신규), 에이티넘인베스트먼트·네이버 D2SF·슈미트(후속)', date: '2026.11.03',
      source: { name: '아시아경제', url: 'https://core.asiae.co.kr/article/2026110309500320099' } },
    { name: 'Zipline', region: '해외', sector: '드론 배송', round: '미기재', usdM: 1500, note: '밸류 $21.5B',
      investors: 'Paradigm·WCM Investment Management·Layer Global(리드), Uber·Fidelity·ARK Invest 등', date: '2026.11.05',
      source: { name: 'Tech Startups', url: 'https://techstartups.com/2026/11/05/top-tech-news-roundup-for-today-november-5-2026-googles-17b-ai-data-center-nvidia-ziplines-1-5b-funding-and-nasdaqs-5-5-plunge/' } },
    { name: 'Shield AI', region: '해외', sector: '국방 AI', round: 'Series H', usdM: 1000, note: '밸류 $28.8B, 총 조달 $2.5B(부채 포함)',
      investors: 'Disruptive·Innovation X Capital(공동 리드)', date: '2026.11.05',
      source: { name: 'The Next Web', url: 'https://thenextweb.com/news/shield-ai-echodyne-5-3b-acquisition-28-8b-valuation' } },
    { name: 'Ocient', region: '해외', sector: '데이터 분석 인프라', round: 'Series C', usdM: 100, note: '누적 약 $260M',
      investors: 'BOKA Capital·OCA Ventures(공동 리드), Greycroft·In-Q-Tel 등', date: '2026.11.05',
      source: { name: 'Tech Startups', url: 'https://techstartups.com/2026/11/05/top-tech-news-roundup-for-today-november-5-2026-googles-17b-ai-data-center-nvidia-ziplines-1-5b-funding-and-nasdaqs-5-5-plunge/' } },
    { name: 'Supa', region: '해외', sector: '부동산 관리 AI', round: 'Seed', amountText: '£21M', note: '지분·부채 포함(비율 비공개), 지역 관리업체 인수 후 AI 운영',
      investors: '2150·OpenOcean(공동 리드), KOMPAS VC 등', date: '2026.11.05',
      source: { name: 'The Cap Table', url: 'https://www.thecaptable.co.uk/article/supa-raises-21m-seed-co-led-by-2150-and-openocean-to-buy-up-local-block-managers-and-run-them-on-ai' } }
  ],
  insight: [
    '금융권 민간벤처모펀드가 올해 7개, 약 9,040억 원 규모로 확대됨. 위험가중치 완화와 모험자본 공급 의무가 결성 동력임',
    '국내 피지컬 AI 투자가 로봇 본체가 아닌 제어 소프트웨어(유로보틱스)와 학습 데이터(무빈)로 확대됨',
    '해외에서는 국방(Shield AI)·드론 배송(Zipline) 등 하드웨어 기반 기업에 대형 자금이 집중됨. 미국 데이터센터 규제 우려는 입법 전 단계임'
  ]
};
