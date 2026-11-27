/*
 * 제28호 (2026년 11월 3주차, 수록 2026.11.16~11.20) — Gemini 리서치 + Claude 보완(AI 뉴스 데일리 포함), 2026.11.23 원문 대조 반영
 * 금액: 국내 krw(억 원), 해외 usdM(백만 달러)
 */
window.KVW_ISSUES = window.KVW_ISSUES || {};
window.KVW_ISSUES[28] = {
  no: 28,
  week: '2026년 11월 3주차',
  shortWeek: '11월 3주',
  coverage: '2026.11.16 ~ 11.20',
  title: ['메디인테크 338억 원 Series C,', 'Isomorphic $5B · Genesis AI $500M'],
  summary: '핵심 요약: 1~3분기 벤처투자·펀드결성 역대 최대 · Anthropic 나스닥 상장 · 미국 AI 칩 수출 허가제 · 국내 딜 3건 · 해외 딜 5건',
  points: [
    { tag: 'Report', text: '중기부 1~3분기 벤처투자 12조 6,248억 원 · 펀드결성 12조 9,971억 원, 모두 역대 최대' },
    { tag: 'Market', text: 'Anthropic 나스닥 상장, 공모가 $83 · 공모 총액 $81.34B' },
    { tag: 'Deal', text: '메디인테크 338억 원 Series C · Isomorphic Labs $5B · Genesis AI $500M' }
  ],
  articles: [
    {
      type: 'policy', marker: 'POLICY · 해외 정책',
      title: '미 상무부, 동남아 4개국·브라질 AI 칩 수출 허가제 도입',
      facts: [
        '2026.11.17 BIS, 인도네시아·말레이시아·싱가포르·태국·브라질을 우회 위험국으로 지정',
        '5개국으로 첨단 AI 칩 수출 시 허가 필요, 중국 기업의 제3국 데이터센터 원격 이용 차단 목적',
        '11.17(현지) 나스닥 −2.5%, S&P500 −1.9%, 엔비디아 −4.1% / 11.18 코스피 −2.6%'
      ],
      sources: [
        { name: 'Al Jazeera', url: 'https://aljazeera.com/economy/2026/11/17/us-moves-to-block-chinas-remote-access-to-ai-chips-amid-nvidia-scandal', date: '2026.11.17' }
      ]
    },
    {
      type: 'market', marker: 'MARKET · 회수 시장',
      title: 'Anthropic 나스닥 상장, 공모 총액 $81.34B',
      facts: [
        '2026.11.18 공모가 $83 확정(희망 범위 $70~78 상회), 공모 주식 8.25억 주 → 9.8억 주로 증액',
        '11.19 나스닥 상장(티커 ANT), 완전희석 기준 시가총액 약 $1.5T',
        '별도 사모 배정 $26B(컴퓨팅 공급사 7곳, 구글·엔비디아 각 $10B)',
        'SpaceX(2026.06) 최초 공모 $75B 상회, 초과배정 포함 최종 $86.25B에는 미달',
        '초과배정 1.47억 주(약 $12.2B) 전량 행사 시 공모 총액 약 $93.5B'
      ],
      sources: [
        { name: 'Al Jazeera', url: 'https://aljazeera.com/economy/2026/11/19/anthropic-raises-81-3bn-in-biggest-ipo-of-all-time', date: '2026.11.19' },
        { name: 'Decrypt', url: 'https://decrypt.co/383623/anthropic-tops-spacex-initial-ipo-81-billion-deal-where-the-money-went', date: '2026.11.19' }
      ]
    },
    {
      type: 'market', marker: 'MARKET · 글로벌 CVC',
      title: '엔비디아, CEO 사임 후 첫 실적에서 AI 기업 금융 지원 선별 방침',
      facts: [
        '콜렛 크레스 임시 CEO: 향후 투자·약정·보증을 엄격히 평가, 지원은 지속하되 선별',
        '네오클라우드 약정은 자금 조달 완료와 장비 가동·인수 이후에만 적용(기존 계약 변경 아닌 명확화)',
        '보증·약정 약 $160B, 내년 매출 증가율 전망 70% → 75% 상향',
        '27호 젠슨 황 사임 기사의 후속 소식'
      ],
      sources: [
        { name: 'Axios', url: 'https://axios.com/2026/11/18/nvidia-market-backstop-tech', date: '2026.11.18' }
      ]
    },
    {
      type: 'market', marker: 'MARKET · M&A',
      title: 'Palo Alto Networks, AI 스타트업 Applied Compute $4.5B 인수',
      facts: [
        '2026.11.19 발표, 인수가 $4.5B(조정 가능), 전액 주식 지급',
        'Applied Compute: 오픈웨이트 AI 모델의 후학습·추론 플랫폼',
        'Yash Patil CEO는 인수 후 Palo Alto Networks 공동 최고AI책임자 선임 예정'
      ],
      sources: [
        { name: 'Help Net Security', url: 'https://www.helpnetsecurity.com/?p=391728', date: '2026.11.19' }
      ]
    },
    {
      type: 'report', marker: 'REPORT · 정부 통계',
      title: '중기부: 1~3분기 벤처투자 12.6조 원 · 펀드결성 13.0조 원, 역대 최대',
      facts: [
        '신규 벤처투자 12조 6,248억 원(전년 동기 대비 +28.4%), 종전 최고 2021년 10.9조 원 상회',
        '기업당 평균 37.0억 원(+19.2%), 3년 이하 초기기업 투자 2조 5,476억 원(+47.6%)',
        '업종: ICT서비스 2.5조 원(19.9%), 전기·기계·장비 2.2조 원(17.8%), 바이오·의료 1.9조 원(15.2%)',
        '펀드결성 12조 9,971억 원(+29.7%), 종전 최고 2022년 12조 7,465억 원 상회',
        '출자: 금융기관 3조 9,527억 원(+48.2%), 일반법인 3조 4,788억 원(+40.9%), 정책금융 2조 5,522억 원',
        '벤처투자회사·신기술금융사 합산 기준이라 홈 월간 데이터(KVCA)와 직접 비교하지 않음'
      ],
      sources: [
        { name: '대한민국 정책브리핑 (중기부 발표)', url: 'https://www.korea.kr/news/policyNewsView.do?newsId=148975903', date: '2026.11.17' }
      ]
    },
    {
      type: 'report', marker: 'REPORT · 투자 동향',
      title: '11월 3주 국내 스타트업 투자: 26곳 유치, 공개 8개사 666억 원',
      facts: [
        '투자 유치 스타트업 26곳, 금액 공개 8개사 합계 666억 원 (스타트업레시피 집계, 11.16~11.20)',
        '시리즈C 2건(메디인테크 338억 원·익스톨 200억 원)이 공개 금액의 80% 이상'
      ],
      sources: [
        { name: '스타트업레시피 (이번주투자)', url: 'https://startuprecipe.co.kr/archives/5842153', date: '2026.11.21' }
      ]
    }
  ],
  deals: [
    { name: '메디인테크', region: '국내', sector: '전동식 AI 로봇 내시경', round: 'Series C', krw: 338, note: '',
      investors: '에이티넘인베스트먼트(기존)·케이비인베스트먼트(신규) 공동 리드, 케이투인베스트먼트파트너스·스마일게이트인베스트먼트 등', date: '2026.11.17',
      source: { name: '바이라인네트워크', url: 'https://byline.network/?p=9004111222628143' } },
    { name: '익스톨', region: '국내', sector: '유리기판 도금 소재', round: 'Series C', krw: 200, note: '',
      investors: 'SV인베스트먼트·아주IB투자·우리벤처', date: '2026.11.16~20',
      source: { name: '스타트업레시피', url: 'https://startuprecipe.co.kr/archives/5842153' } },
    { name: '헥사로보틱스', region: '국내', sector: '웨어러블 보행 보조 로봇', round: '전략적 투자(RCPS)', krw: 40, note: '',
      investors: '위너스일렉(코스닥 상장사, 지분 10.52%·2대 주주)', date: '2026.11.18',
      source: { name: '디지털투데이 (공시)', url: 'https://www.digitaltoday.co.kr/disclosure/articleView.html?idxno=716416' } },
    { name: 'Isomorphic Labs', region: '해외', sector: 'AI 신약 설계', round: 'Series C', usdM: 5000, note: '',
      investors: 'Greenoaks·Sequoia Capital(공동 리드), a16z(신규), Alphabet·Thrive·MGX·Temasek 등', date: '2026.11.17',
      source: { name: 'Pulse 2.0', url: 'https://pulse2.com/isomorphic-labs-raises-5-billion-series-c-for-ai-drug-discovery-platform/' } },
    { name: 'Genesis AI', region: '해외', sector: '범용 로봇 피지컬 AI', round: 'Series A', usdM: 500, note: '밸류 $3.5B',
      investors: 'Premji Invest·Khosla Ventures·Eclipse(공동 리드), NVIDIA·AMD Ventures·Samsung Next 등', date: '2026.11.17',
      source: { name: 'Robotics 24/7', url: 'https://www.robotics247.com/article/genesis-ai-announces-500m-series-a-at-3.5b-valuation' } },
    { name: 'Model ML', region: '해외', sector: '금융 업무 AI 에이전트', round: 'Series B', usdM: 250, note: '밸류 $1.5B',
      investors: 'General Atlantic·QED Investors(공동 리드)', date: '2026.11.17',
      source: { name: 'Tech.eu', url: 'https://tech.eu/2026/11/17/model-ml-hits-15b-valuation-with-250m-raise-just-18-months-after-emerging-from-stealth/' } },
    { name: 'BrightAI', region: '해외', sector: '인프라 점검 피지컬 AI', round: '', usdM: 97, note: '',
      investors: 'Smith Point Capital(리드), GE Vernova(고객사)·Cobalt Capital 등', date: '2026.11.18',
      source: { name: 'T&D World', url: 'https://www.tdworld.com/utility-business/news/55419892/brightai-raises-97-million-to-expand-ai-technology-for-infrastructure-monitoring' } },
    { name: 'Humyn Labs', region: '해외', sector: '로봇 학습용 데이터', round: 'Series A', usdM: 47, note: '',
      investors: 'Accel(지분 $26M 리드), Lighthouse Canton(벤처 대출 $21M 리드)', date: '2026.11.18',
      source: { name: 'Robotics 24/7', url: 'https://www.robotics247.com/article/physical-ai-research-and-deployment-company-humyn-labs-raises-47m-in-series-a' } }
  ],
  insight: [
    '1~3분기 벤처투자·펀드결성이 모두 역대 최대. 금융기관 출자가 48.2% 늘어 제도 개선 효과가 반영됨',
    'Anthropic 상장으로 AI 기업 공모 회수 경로 확대, 엔비디아는 AI 기업 지원을 선별로 전환',
    '국내외 투자가 피지컬 AI(메디인테크·헥사로보틱스·Genesis AI·BrightAI)와 학습 데이터(Humyn Labs)로 집중됨'
  ]
};
