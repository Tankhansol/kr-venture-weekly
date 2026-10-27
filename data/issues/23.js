/*
 * 제23호 (2026년 10월 3주차) — 이전 사이트 원문을 2026.10.27 원문 대조 후 정정해 옮김
 */
window.KVW_ISSUES = window.KVW_ISSUES || {};
window.KVW_ISSUES[23] = {
  no: 23,
  week: '2026년 10월 3주차',
  shortWeek: '10월 3주',
  title: ['군인공제회 3,000억 원 출자 확정,', 'Q3 글로벌 VC 투자 $170.9B'],
  summary: '핵심 요약: 군인공제회 3,000억 원 출자 확정 · 벤처투자 표준계약서 개정 · KPMG 기준 Q3 글로벌 VC 투자 $170.9B',
  correction: '2026.10.27 원문 대조 후 정정: 대동로보틱스 금액·라운드, DEEPX 라운드 상태, Mecka 사업 설명, Veir·KPMG·표준계약서·군인공제회 항목의 원문에 없는 서술 삭제',
  points: [
    { tag: 'Policy', text: '군인공제회, 국내 PE·VC 18개 운용사에 3,000억 원 출자 확정 (PE 8곳·VC 10곳)' },
    { tag: 'Policy', text: '벤처투자 표준계약서 개정, 전환우선주(CPS) 기본안 권고 (2026.06.30 발표)' },
    { tag: 'Report', text: 'KPMG Venture Pulse: Q3 글로벌 VC 투자 $170.9B, 8,341건' }
  ],
  figures: [
    { label: '군인공제회 출자 확정액', value: '3,000억 원', note: '자료: MTN, 2026.10.15' },
    { label: 'Q3 글로벌 VC 투자', value: '$170.9B', note: '자료: KPMG Venture Pulse, 2026.10.14' }
  ],
  articles: [
    {
      type: 'policy', marker: 'POLICY · 기관 LP',
      title: '군인공제회, 국내 PE·VC 18개 운용사에 3,000억 원 출자 확정',
      facts: [
        'PE 8곳 2,000억 원, VC 10곳 1,000억 원 배정',
        '7월 말 제안서 접수 후 PT 평가·평가위원회 심사·실사를 거쳐 선정'
      ],
      sources: [ { name: 'MTN', url: 'https://news.mtn.co.kr/article/2026101514242352111', date: '2026.10.15' } ]
    },
    {
      type: 'policy', marker: 'POLICY · 투자 계약',
      title: '벤처투자 표준계약서 개정, 전환우선주(CPS) 기본안 권고',
      facts: [
        '상환전환우선주(RCPS) 중심에서 전환우선주(CPS) 기본안 권고로 전환',
        '제3자 연대책임 제한, 투자자별 개별 동의권을 투자 라운드 단위 일괄 동의로 개편',
        '중소벤처기업부·한국벤처투자 발표, 2023년 이후 첫 개정'
      ],
      sources: [ { name: '뉴스토마토', url: 'https://www.newstomato.com/readnews.aspx?no=1305707', date: '2026.06.30' } ]
    },
    {
      type: 'report', marker: 'REPORT · 글로벌 VC',
      title: 'KPMG Venture Pulse: Q3 글로벌 VC 투자 $170.9B',
      facts: [
        'Q3 2026 글로벌 VC 투자 $170.9B, 8,341건',
        'AI가 최대 투자 테마. AI 모델·인프라·데이터센터·로보틱스·국방기술 분야 대형 투자 언급',
        '참고: Crunchbase 집계 Q3 글로벌 투자는 $159B (집계 기준 상이)'
      ],
      sources: [
        { name: 'KPMG', url: 'https://kpmg.com/xx/en/media/press-releases/2026/10/ai-megadeals-dominate-venture-capital-as-investors-pour-billions-into-fewer-startups.html', date: '2026.10.14' },
        { name: 'FourWeekMBA (Crunchbase 인용)', url: 'https://fourweekmba.com/ai-crunchbase-q3-2026-159b-venture-27-billion-dollar-rounds-ai/', date: '2026.10' }
      ]
    }
  ],
  deals: [
    { name: 'DEEPX', region: '국내', sector: '온디바이스 AI 반도체', round: 'Series D(진행 중)', krw: 3000, note: '2026.09 기준 유치액, 연말 6,000억 원 목표',
      investors: '비공개', date: '2026.09.08',
      source: { name: '딜사이트', url: 'https://dealsite.co.kr/articles/168519' } },
    { name: '대동로보틱스', region: '국내', sector: '건설 현장 로봇', round: 'Series A', krw: 50, note: '',
      investors: '엑스플로인베스트먼트·포스코기술투자·나우아이비캐피탈', date: '2026.07.06',
      source: { name: 'MTN', url: 'https://news.mtn.co.kr/news-detail/2026070614473581371' } },
    { name: 'NdotLight', region: '국내', sector: '3D 시뮬레이션 데이터', round: '후속 투자', krw: 150, note: '라운드명 원문 미기재',
      investors: 'KDB산업은행(리드), 네이버 D2SF·IMM인베스트먼트 등', date: '2026.08.12',
      source: { name: '헬로티', url: 'https://www.hellot.net/news/article.html?no=114302' } },
    { name: 'Veir', region: '해외', sector: '데이터센터 초전도 전력', round: 'Series C', usdM: 110, note: '누적 $225M',
      investors: 'Matter Venture Partners·Tyche Partners(공동 리드)', date: '2026.10.10',
      source: { name: 'Pulse 2.0', url: 'https://pulse2.com/veir-raises-110-million-series-c-co-led-by-matter-venture-partners-and-tyche-partners/' } },
    { name: 'Mecka', region: '해외', sector: '로봇 학습 데이터 플랫폼', round: 'Series B', usdM: 60, note: '',
      investors: 'Sequoia Capital(리드), NVIDIA·Microsoft·Qualcomm CVC 등', date: '2026.10.07',
      source: { name: 'BetaKit', url: 'https://betakit.com/?p=410690' } },
    { name: 'Novele', region: '해외', sector: '빌딩 에너지 AI', round: 'Series A', usdM: 17, note: '',
      investors: 'Boisei Labs(리드)', date: '2026.10.02',
      source: { name: 'Pulse 2.0', url: 'https://pulse2.com/novele-raises-17-million-series-a-to-scale-ai-energy-platform-for-commercial-buildings' } }
  ],
  insight: [
    '기관 LP 출자 재개로 4분기 GP 펀드레이징 여건 개선 가능성',
    'CPS 중심 전환 시 장기 보유형 딥테크 펀드에 유리'
  ]
};
