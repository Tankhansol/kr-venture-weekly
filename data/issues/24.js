/*
 * 제24호 (2026년 10월 4주차) — 운영자 원고 기준, 2026.10.27 원문 대조 반영, 원문 미확인 항목(모태펀드 숏리스트·투자 의무 완화) 삭제
 * 금액: 국내 krw(억 원), 해외 usdM(백만 달러). 비공개는 null
 */
window.KVW_ISSUES = window.KVW_ISSUES || {};
window.KVW_ISSUES[24] = {
  no: 24,
  week: '2026년 10월 4주차',
  shortWeek: '10월 4주',
  coverage: '2026.10.19 ~ 10.23 및 10월 주요 딜',
  title: ['벤처투자법 개정안 국무회의 통과,', 'Tenstorrent $1.5B Series E'],
  summary: '핵심 요약: 벤처투자법 개정안 국무회의 통과(2027.03.30 시행 예정) · 국내 딜 3건 · 해외 딜 3건',
  correction: '2026.10.27 원문을 확인하지 못한 항목 삭제: 한국벤처투자 9월 수시 출자 숏리스트, 투자 의무 완화 내용',
  points: [
    { tag: 'Policy', text: '벤처투자법 개정안 국무회의 통과, 부당 조기상환·과도한 리픽싱 조건 제한 (2027.03.30 시행 예정)' },
    { tag: 'Report', text: 'Kopin 백서, 1만 GPU 가정 시 AI 학습 시간 23~38% 단축 (모델링 값)' }
  ],
  // figures 생략 시 국내·해외 최대 딜과 딜 건수로 자동 구성
  articles: [
    {
      type: 'policy', marker: 'POLICY · 벤처투자법',
      title: '벤처투자법 개정안 국무회의 통과, 2027.03.30 시행 예정',
      facts: [
        '투자 계약 내 부당한 조기상환 청구 조건과 IPO 실패를 이유로 한 과도한 리픽싱 조건을 불공정 계약조건으로 제한',
        '2026.09.29 공포 예정, 2027.03.30 시행 예정. 시행 전 불공정 계약 유형·제재 기준 하위법령 정비 예정'
      ],
      sources: [
        { name: '벤처스퀘어', url: 'https://www.venturesquare.net/1116149/', date: '2026.09.25' }
      ]
    },
    {
      type: 'report', marker: 'REPORT · 데이터센터 인터커넥트',
      title: 'Kopin 백서: 1만 GPU 가정 시 AI 학습 시간 23~38% 단축 (모델링 값)',
      facts: [
        'Kopin 발간 (2026.10.19), Fabric.AI 공동 저자 참여',
        '마이크로LED 기반 광학 인터커넥트 적용 시 10,000-GPU 시스템 가정에서 동일 작업 학습 시간 약 23~38% 단축',
        '백서 가정에 따른 모델링 결과이며 실측치가 아님'
      ],
      notes: {
        label: '심사 활용 포인트',
        items: [
          '딥테크 심사 시 시뮬레이션 수치와 현장 PoC 실측치를 분리해 검증',
          '전력·통신 병목 해소 소부장 자산의 밸류에이션 재평가 근거로 활용 가능'
        ]
      },
      sources: [
        { name: 'Kopin 보도자료 (Business Wire)', url: 'https://finviz.com/news/403972/kopin-analysis-finds-optical-interconnect-architecture-could-break-the-data-center-copper-wall', date: '2026.10.19' }
      ]
    }
  ],
  deals: [
    { name: '네이션에이', region: '국내', sector: 'AI 영상·콘텐츠 테크', round: 'Series A', krw: 85, note: '누적 117억 원',
      investors: '하나증권(후속), KDB산업은행·현대투자파트너스·일신창업투자(신규)', date: '2026.10.22',
      source: { name: '벤처스퀘어', url: 'https://www.venturesquare.net/1121809/' } },
    { name: '휴로틱스', region: '국내', sector: '웨어러블 재활 로봇', round: 'Series A', krw: 250, note: '누적 335억 원',
      investors: '에이티넘인베스트먼트(리드), 스톤브릿지벤처스·미래에셋벤처투자·대웅·네이버·롯데 등', date: '2026.10.15',
      source: { name: '벤처스퀘어', url: 'https://www.venturesquare.net/1120296/' } },
    { name: '더휴식', region: '국내', sector: '프롭테크(숙박)', round: 'Pre-IPO', krw: 650, note: 'VIP자산운용 고유자금 200억 원 포함',
      investors: 'TS인베스트먼트·VIP자산운용 프로젝트 펀드', date: '2026.10.01',
      source: { name: 'SBS Biz', url: 'https://biz.sbs.co.kr/amp/article/20000337907' } },
    { name: 'Tenstorrent', region: '해외', sector: 'AI 반도체(RISC-V)', round: 'Series E', usdM: 1500, note: 'Post-money $6.2B',
      investors: 'Trace Capital·Innovation X(공동 리드)', date: '2026.10.19',
      source: { name: 'Kyodo News PR Wire', url: 'https://kyodonewsprwire.jp/release/202610218369' } },
    { name: 'Eka Robotics', region: '해외', sector: '피지컬 AI·로봇 조작', round: 'Series A', usdM: 150, note: '밸류 $1.45B(보도 기준)',
      investors: 'a16z·F-Prime(공동 리드)', date: '2026.10.24',
      source: { name: 'The Robot Report', url: 'https://www.therobotreport.com/eka-robotics-raises-150m-scale-vision-force-action-model-robots/' } },
    { name: 'Dream Labs', region: '해외', sector: '로봇 파운데이션 모델', round: 'Seed', usdM: 90, note: '밸류 비공개',
      investors: 'B Capital·Kindred Ventures(공동 리드)', date: '2026.10.19',
      source: { name: 'Dealroom', url: 'https://dealroom.co/news/163965-dream-labs-lands-90m-seed-to-put-one-brain-inside-any-robot/' } }
  ],
  insight: [
    '불공정 계약조건 제한 개정안 통과에 따라 기존 펀드의 리픽싱·조기상환 청구권 관련 투자계약서 템플릿 재정비 필요',
    '글로벌 VC 자금이 생성형 AI에서 피지컬 AI·데이터센터 하드웨어 병목 해소(실리콘 포토닉스, RISC-V) 분야로 이동 중',
    '국내는 대형 기관 LP 출자 재개와 맞물려 실적(BEP)이 입증된 프롭테크·바이오와 로보틱스 딥테크로 자금 집중 추세'
  ]
};
