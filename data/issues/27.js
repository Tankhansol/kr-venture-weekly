/*
 * 제27호 (2026년 11월 2주차, 수록 2026.11.09~11.13) — Gemini 리서치 + Claude 보완(AI 뉴스 데일리 포함), 2026.11.16 원문 대조 반영
 * 금액: 국내 krw(억 원), 해외 usdM(백만 달러)
 */
window.KVW_ISSUES = window.KVW_ISSUES || {};
window.KVW_ISSUES[27] = {
  no: 27,
  week: '2026년 11월 2주차',
  shortWeek: '11월 2주',
  coverage: '2026.11.09 ~ 11.13',
  title: ['메디컬에이아이 300억 원 Pre-IPO,', 'Mirendil $1B · Mercor $750M'],
  summary: '핵심 요약: 젠슨 황 엔비디아 CEO 사임 · 엔비디아 국내 AI 스타트업 4곳 투자 계획 · 10월 국내 투자 1조 원 · 국내 딜 6건 · 해외 딜 7건',
  correction: '2026.11.16 정정: 라운드 출처 보완, Torus 라운드 수정, 문구 2건 원문 표현으로 수정',
  points: [
    { tag: 'Market', text: '젠슨 황 엔비디아 CEO 사임, 비상장사 229곳 지분 보유한 AI 최대 투자자 리더십 공백' },
    { tag: 'Market', text: '엔비디아, 업스테이지·리얼월드 등 국내 AI 스타트업 4곳 투자 계획 발표 (금액 미언급)' },
    { tag: 'Report', text: 'THE VC 10월 국내 투자 1조 187억 원, 5개월 만에 1조 원 재돌파 (AI·로봇 비중 53%)' },
    { tag: 'Deal', text: '메디컬에이아이 300억 원 Pre-IPO · Mirendil $1B Series A · Mercor $750M Series D' }
  ],
  articles: [
    {
      type: 'market', marker: 'MARKET · 글로벌 이슈',
      title: '젠슨 황 엔비디아 CEO 사임, AI 스타트업 최대 투자자 리더십 공백',
      facts: [
        '2026.11.12(현지) 사장·CEO·이사직 즉시 사임, 회사는 사유 미공개(언론은 사생활 논란 보도)',
        '콜레트 크레스 CFO가 임시 CEO 겸임, 하비 존스 이사가 창사 첫 이사회 의장',
        '11.12 뉴욕 증시에서 주가 장중 최대 −14.3%',
        'NYT 보도: 엔비디아는 7월 말 기준 비상장사 229곳 지분 480억 달러 보유',
        'VC 전망: 단기 혼란과 엔비디아 자금 일부 이탈 예상(하나비캐피털)',
        '국내 4곳 투자 계획(아래 기사) 영향은 [확인 필요: 엔비디아·과기정통부 후속 발표]'
      ],
      sources: [
        { name: 'AI타임스', url: 'https://www.aitimes.com/news/articleView.html?idxno=217348', date: '2026.11.13' },
        { name: '뉴스핌 (NYT 인용)', url: 'https://www.newspim.com/news/view/20261114000012', date: '2026.11.14' }
      ]
    },
    {
      type: 'market', marker: 'MARKET · 글로벌 CVC',
      title: '엔비디아, 국내 AI 스타트업 4곳 투자 계획 발표',
      facts: [
        '2026.11.09 과학기술정보통신부와 함께 연 AI 스타트업 파트너십 포럼(코엑스)에서 발표',
        '포인트투테크놀로지(AI 데이터센터 칩 간 데이터 전송): 투자 기업으로 발표',
        '업스테이지(시리즈C 2차 진행 중)·모티프테크놀로지스·리얼월드(로봇 파운데이션 모델): 투자 예정',
        '4곳 모두 기사에 투자 금액 미언급',
        '같은 날 리벨리온 R200 NPU를 NVLink Fusion으로 연결, SKT AI 데이터센터 배치 협력 발표(금액 없음)'
      ],
      sources: [
        { name: '이투데이', url: 'https://www.etoday.co.kr/news/view/2645985', date: '2026.11.09' },
        { name: 'ZDNet Korea', url: 'https://zdnet.co.kr/view?no=20261109152937', date: '2026.11.09' }
      ]
    },
    {
      type: 'market', marker: 'MARKET · 민간 펀드',
      title: '매쉬업벤처스, 정책자금 없는 259억 원 민간 펀드 결성',
      facts: [
        '매쉬업퍼스트빌리버벤처투자조합5호 259억 원, 모태펀드 등 정책자금 미참여',
        '운용사 파트너가 최대 출자자, 성공 창업자·산업 선도 기업·금융기관 출자',
        '프리시드·시드 단계 AI·딥테크 중심, 피지컬 AI·버티컬 AI·에너지·우주항공 포함, 존속기간 10년'
      ],
      sources: [
        { name: '아시아경제', url: 'https://core.asiae.co.kr/article/2026111109552645701', date: '2026.11.11' }
      ]
    },
    {
      type: 'market', marker: 'MARKET · 전략적 투자',
      title: 'Axon, Skydio에 $1.2B 투자·공공안전 독점 유통 (11월 1주 소식)',
      facts: [
        'Skydio 투자 전 기업가치 $5.2B, Axon 지분 약 15% → 약 37%(전 단계 종결 시)',
        '1차 신주 $254.9M 납입 완료, 잔여분은 기존 주주 지분 공개매수 등으로 2026년 4분기~2027년 1분기 종결 예정',
        'Axon, 미국·캐나다 공공안전 기관 대상 Skydio 드론 독점 유통권 확보'
      ],
      sources: [
        { name: 'DroneXL', url: 'https://dronexl.co/2026/11/06/axon-skydio-1-2-billion-exclusive-police-distributor/', date: '2026.11.06' }
      ]
    },
    {
      type: 'market', marker: 'MARKET · 해외 펀드',
      title: 'Norwest 18호 펀드 $4B 결성, 65년 역사상 최대',
      facts: [
        '직전 17호 $3B(2024.04), 결성 후 운용자산 $18B',
        '미국·인도·이스라엘, 초기~후기 벤처와 그로스 투자',
        '피지컬·음성 AI, 에이전트 보안, 헬스케어 AI 등 AI 분야 확대'
      ],
      sources: [
        { name: 'Tech Funding News', url: 'https://techfundingnews.com/norwest-closes-4b-fund-its-largest-in-65-years-to-back-companies-in-the-us-india-and-israel/', date: '2026.11.13' }
      ]
    },
    {
      type: 'market', marker: 'MARKET · 회수 시장',
      title: 'Anthropic IPO 공모가 범위 $70~78 제시, 11.19 나스닥 상장 예정',
      facts: [
        '8.25억 주 공모, 범위 상단 기준 최대 약 $64.4B 조달',
        '11.18 공모가 확정, 11.19 나스닥 상장(티커 ANT)',
        '컴퓨팅 공급사 7곳이 공모가로 $26B 별도 매입(범위 중간값 기준 구글·엔비디아 각 약 $10B)'
      ],
      sources: [
        { name: 'Decrypt', url: 'https://decrypt.co/382939/anthropic-sets-ipo-price-range-at-70-to-78-valuing-company-at-up-to-1-4-trillion?amp=1', date: '2026.11.10' }
      ]
    },
    {
      type: 'report', marker: 'REPORT · 투자 동향',
      title: 'THE VC: 10월 국내 투자 1조 187억 원, 5개월 만에 1조 원 재돌파',
      facts: [
        '10월 투자액 1조 187억 원(86건), AI·로봇 비중 53%',
        '상위 5개사(퓨리오사AI·아시아마스터트레이드·드림랩스·더휴식·업스테이지) 비중 약 66%',
        '1~10월 누적 11조 7,039억 원(전년 동기 대비 +91%), 건수 1,008건(−28%)',
        '25호에 실은 스타트업레시피 10월 집계와 집계 기준이 달라 직접 비교하지 않음'
      ],
      sources: [
        { name: '뉴스1 (THE VC 집계)', url: 'https://www.news1.kr/industry/sb-founded/6350948', date: '2026.11.12' }
      ]
    },
    {
      type: 'report', marker: 'REPORT · 투자 동향',
      title: '11월 2주 국내 스타트업 투자: 37곳 유치, 공개 14개사 1,141억 원',
      facts: [
        '투자 유치 스타트업 37곳, 금액 공개 14개사 합계 1,141억 원 (스타트업레시피 집계, 11.09~11.13)',
        '100억 원 이상 5개사 중 4곳*이 의료 AI·의료기기(메디컬에이아이·에버엑스·레이와트·숨빗AI)',
        '※ *직접 계산한 값: 기사 속 100억 원 이상 5개사 중 엔트리움(반도체 소재) 제외 4곳'
      ],
      sources: [
        { name: '스타트업레시피 (이번주투자)', url: 'https://startuprecipe.co.kr/archives/5841423', date: '2026.11.14' }
      ]
    }
  ],
  deals: [
    { name: '메디컬에이아이', region: '국내', sector: '심전도 AI', round: 'Pre-IPO', krw: 300, note: '최대주주 IMM으로 변경 전망',
      investors: 'IMM인베스트먼트(리드)', date: '2026.11.09~13',
      source: { name: '스타트업레시피', url: 'https://startuprecipe.co.kr/archives/5841423' } },
    { name: '엔트리움', region: '국내', sector: '반도체 테스트 소켓 소재', round: '', krw: 166, note: '',
      investors: '아주IB투자·SBI인베스트먼트·한국투자파트너스', date: '2026.11.06',
      source: { name: '네이트 뉴스', url: 'https://news.nate.com/view/20261106n35408' } },
    { name: '에버엑스', region: '국내', sector: 'AI 재활 디지털헬스', round: 'Series B 브릿지', krw: 155, note: '',
      investors: '프리미어파트너스(기존), LB인베스트먼트·유진투자증권·IBK기업은행(신규)', date: '2026.11.09~13',
      source: { name: '스타트업레시피', url: 'https://startuprecipe.co.kr/archives/5841423' } },
    { name: '레이와트', region: '국내', sector: '심뇌혈관 영상 의료기기', round: 'Series B', krw: 130, note: '누적 235억 원',
      investors: '인터베스트·라이프자산운용·현대기술투자 등 9곳', date: '2026.11.11',
      source: { name: '이코노미스트', url: 'https://economist.co.kr/article/view/ecn202611160025' } },
    { name: '숨빗AI', region: '국내', sector: '흉부 X-ray 판독 AI', round: 'Series A', krw: 120, note: '스케일업 팁스 포함 150억 원',
      investors: 'SV인베스트먼트(리드)', date: '2026.11.09~13',
      source: { name: '스타트업레시피', url: 'https://startuprecipe.co.kr/archives/5841423' } },
    { name: '페르소나AI', region: '국내', sector: '기업용 AI 에이전트', round: '제3자배정 유상증자', krw: 150, note: '납입 11.13 완료',
      investors: '한국투자밸류자산운용 펀드 2곳(국민성장펀드 자금)', date: '2026.11.15',
      source: { name: 'ZDNet Korea', url: 'https://zdnet.co.kr/view/?no=20261115233648' } },
    { name: 'Mirendil', region: '해외', sector: 'AI 연구 자동화', round: 'Series A', usdM: 1000, note: '밸류 미공개, 시드 $200M(6월)',
      investors: 'Kleiner Perkins·Clearlake Capital(공동 리드), Battery Ventures·Google 등', date: '2026.11.12',
      source: { name: 'Unite.AI', url: 'https://www.unite.ai/mirendil-raises-1b-series-a-to-bring-frontier-ai-r-and-d-to-more-teams/' } },
    { name: 'Mercor', region: '해외', sector: 'AI 학습용 전문가 데이터', round: 'Series D', usdM: 750, note: '밸류 $20B',
      investors: 'Benchmark·General Catalyst·NVIDIA·Salesforce·Zoom 등', date: '2026.11.10',
      source: { name: 'AI Weekly (Reuters 인용)', url: 'https://aiweekly.co/alerts/mercor-raises-750m-series-d-at-20b-doubling-in-a-year' } },
    { name: 'Fractile', region: '해외', sector: 'AI 추론 칩', round: 'Series C', usdM: 720, note: '밸류 $7B(FT 보도 인용)',
      investors: 'Thrive Capital·Founders Fund·Lightspeed·Redpoint(공동 리드), CapitalG 등', date: '2026.11.11',
      source: { name: 'The Next Web', url: 'https://thenextweb.com/news/fractile-7bn-valuation-720m-ai-inference-chips' } },
    { name: 'Torus', region: '해외', sector: '모듈형 AI 데이터센터', round: 'Growth capital', usdM: 500, note: '',
      investors: 'Magnetar(리드), ICONIQ 등', date: '2026.11.11',
      source: { name: 'Pulse 2.0', url: 'https://pulse2.com/torus-500-million-financing-supports-foundry-modular-ai-infrastructure-launch/' } },
    { name: 'Path Robotics', region: '해외', sector: '용접 자동화 피지컬 AI', round: 'Series E', usdM: 300, note: '포스트머니 $2.45B',
      investors: 'Georgian(리드), NAVER Ventures·D. E. Shaw(신규)', date: '2026.11.10',
      source: { name: 'Robotics 24/7', url: 'https://www.robotics247.com/article/path-robotics-announces-300m-series-e-financing-at-2.45b-valuation' } },
    { name: 'Q-CTRL', region: '해외', sector: '양자 제어 소프트웨어', round: 'Series C', usdM: 290, note: 'A$425M, 밸류 US$1B 이상',
      investors: 'Salesforce Ventures(리드)', date: '2026.11.12',
      source: { name: 'Startup Daily', url: 'https://www.startupdaily.net/topic/funding/quantum-of-unicorn-q-ctrl-hits-1-4-billion-valuation-from-425m-series-c/' } },
    { name: 'Nominal', region: '해외', sector: '하드웨어 시험 AI', round: 'Series C', usdM: 240, note: '밸류 $3B',
      investors: 'Lightspeed(리드)·Insight Partners(공동 리드)', date: '2026.11.09',
      source: { name: 'Value Add Pulse (SiliconANGLE 인용)', url: 'https://valueaddvc.com/pulse/nominal-triples-3b-valuation-240m-series-c-2026' } }
  ],
  insight: [
    '10월 국내 투자는 5개월 만에 1조 원을 넘었지만, 상위 5개사가 약 66%를 차지해 대형 딜 집중이 이어짐',
    '11월 2주 국내 딜은 의료 AI·의료기기(메디컬에이아이·에버엑스·레이와트·숨빗AI)에 집중됨',
    '해외 자금은 AI 추론 칩(Fractile)·데이터센터(Torus)·학습 데이터(Mercor) 등 AI 인프라 계층으로 유입됨',
    'AI 스타트업 최대 투자자인 엔비디아의 CEO 공백으로 후속 투자 축소 여부가 변수로 부상함'
  ]
};
