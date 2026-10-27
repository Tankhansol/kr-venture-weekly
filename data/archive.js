/*
 * 호 목록 (매주 맨 위에 한 줄 추가하고 latest 숫자를 올립니다)
 * local: true  → 새 디자인 페이지(issues/issue-NN.html), false면 이전 사이트로 연결
 * verified: false → 원문 대조 전 (목록에 "대조 전" 표시). 대조를 마치면 이 항목을 지웁니다
 * keywords: 검색용 회사·기관명 (선택). 제목·대표 딜은 목록용 요약입니다.
 */
window.KVW_ARCHIVE = {
  latest: 24,
  legacyBase: 'https://mjbfkqkk.gensparkspace.com/issues/issue-',
  issues: [
    { no: 24, week: '10월 4주', local: true, title: '벤처투자법 개정안 국무회의 통과 · Tenstorrent $1.5B Series E', deals: 'Tenstorrent $1.5B · 더휴식 650억 원 · Eka Robotics $150M',
      keywords: '네이션에이 휴로틱스 더휴식 Tenstorrent Eka Robotics Dream Labs Kopin 한국벤처투자 모태펀드 벤처투자법' },
    { no: 23, week: '10월 3주', local: true, title: '군인공제회 3,000억 원 출자 확정 · Q3 글로벌 VC 투자 $170.9B', deals: 'Veir $110M · Mecka $60M · 대동로보틱스 50억 원',
      keywords: 'DEEPX 딥엑스 대동로보틱스 NdotLight 엔닷라이트 Veir Mecka Novele 군인공제회 표준계약서 KPMG Crunchbase' },
    { no: 22, week: '10월 2주', local: true, title: 'K-GX 10년 1,000조 원 녹색전환 · 프론티어 AI 사업 계획', deals: 'Mecka $60M · Novele $17M · RentBetter A$5M', keywords: 'Mecka Novele RentBetter' },
    { no: 21, week: '10월 1주', local: true, title: '벤처투자법 개정안 국무회의 통과 · EliseAI $350M', deals: 'EliseAI $350M · Homeward $120M · Destro AI $8M', keywords: 'EliseAI Homeward Destro AI Satlyt' },
    { no: 20, week: '9월 4주', local: true, title: 'KKR 한국 투자 연간 역대 최대 · SK hynix Ventures 출범', deals: 'Adaptive $30M · PicoJool $27.5M · Trebellar $18M', keywords: 'Adaptive PicoJool Trebellar' },
    { no: 19, week: '9월 3주', local: true, title: 'Try Everything 2026 · Crusoe $3.9B Series F', deals: 'Crusoe Energy $3.9B · D-Robotics $400M', keywords: 'Crusoe Energy D-Robotics' },
    { no: 18, week: '9월 2주', local: true, title: 'KVCA 세컨더리 인프라 추진 · Hugging Face 인수 보도', deals: 'Hugging Face $12.9B(인수 보도) · Maven Robotics $100M', keywords: 'Hugging Face Maven Robotics STARK' },
    { no: 17, week: '9월 1주', local: true, title: '증권업계 3년간 1조 원 벤처 세컨더리 투자', deals: 'Gravis Robotics $200M · UBTECH $13.9M', keywords: 'Gravis Robotics UBTECH Robotics' },
    { no: 16, week: '8월 4주', local: true, title: '하나증권 2,000억 원 민간벤처모펀드 결성', deals: 'Lyte $165M · Orbital $60M', keywords: 'Lyte Orbital' },
    { no: 15, week: '8월 3주', local: true, title: '상반기 국내 벤처투자 약 8.9조 원 · 딥테크 세액공제', deals: 'Infiforce 약 $150M · Rillet $100M · Terra Industries $52M', keywords: 'Infiforce Rillet Terra Industries' },
    { no: 14, week: '7월 3주', local: true, title: '벤처투자법 시행령 개정 시행 · 상반기 글로벌 스타트업 투자 $510B', deals: '홀리데이로보틱스 1,550억 원 · 대동로보틱스 50억 원', keywords: '홀리데이로보틱스 대동로보틱스' },
    { no: 13, week: '7월 2주', local: true, title: '상반기 국내 IPO 17곳(−55%) · Proxima Fusion €411M', deals: 'Proxima Fusion €411M · Norm $120M · Gradium $100M', keywords: 'Proxima Fusion Norm Gradium' },
    { no: 12, week: '7월 1주', local: true, title: '반도체 800조·AI 데이터센터 550조 원 계획 · Joulent $1.75B', deals: 'Joulent $1.75B · Together AI $800M · Etched $500M', keywords: 'Joulent Together AI LeapXpert 8090 Solutions Etched Arena' },
    { no: 11, week: '6월 5주', local: true, title: '메모리 가격 상승·AI 과금 논란 · 4대 창업도시 지원 공고', deals: 'Baseten $1.5B · Groq $650M · Odyssey $310M', keywords: 'DeepSeek Baseten AppsFlyer Groq Odyssey Vaudit 창업도시' },
    { no: 10, week: '6월 4주', local: true, title: '넥스트라이즈 2026 · Anthropic 모델 차단과 AI 주권', deals: 'Supabase $500M · Odyssey $310M · PhysicsX $300M', keywords: 'Baseten Supabase Odyssey PhysicsX Sarvam Flutterwave SpaceX Cursor 넥스트라이즈' },
    { no: 9, week: '6월 3주', local: true, title: '벤처투자법 시행령 국무회의 통과 · 수도권 임대주택 펀드', deals: 'Anthropic $65B · Supabase $500M · Mind Robotics $400M', keywords: 'Anthropic Supabase Mind Robotics PhysicsX Stord Focused Energy Coralogix Standard Bots Corgi Xpanner' },
    { no: 8, week: '6월 2주', local: true, title: '삼성중공업 해상 데이터센터 · 국민성장펀드 퓨리오사AI 8,000억 원', deals: 'Anthropic $65B · Supabase $500M · Focused Energy $240M', keywords: 'Anthropic Supabase Focused Energy Coralogix 퓨리오사AI 삼성중공업' },
    { no: 7, week: '5월 4주', local: true, verified: false, title: '엔터프라이즈 AI ROI 점검', deals: 'Stord $250M · Corgi $106M', keywords: 'Anthropic Stord Corgi' },
    { no: 6, week: '5월 3주', local: true, verified: false, title: '1분기 벤처투자 24.1% 반등', deals: 'Anduril · Blitzy $200M · Quantum Motion $160M', keywords: 'Anduril Blitzy Quantum Motion Xpanner' },
    { no: 5, week: '5월 2주', local: true, verified: false, title: '방산·데이터센터 인프라 대형 딜', deals: 'Anduril · VoltaGrid $775M', keywords: 'Anduril VoltaGrid Recursive Superintelligence 그래폰' },
    { no: 4, week: '5월 1주', local: true, verified: false, title: 'CVC M&A 규제 폐지 · 업스테이지 정부 투자', deals: 'Ineffable $1.1B · Kalshi $1B · True Anomaly $650M', keywords: 'Ineffable Intelligence Kalshi True Anomaly Blitzy Robot Era Quantum Motion' },
    { no: 3, week: '4월 4주', local: true, verified: false, title: 'AI 에이전트 거버넌스 · 휴머노이드 양산', deals: 'Legora · Parallel Web Systems · Firestorm Labs $82M', keywords: 'Parallel Web Systems Firestorm Labs Legora' },
    { no: 2, week: '4월 3주', local: true, verified: false, title: 'CVC 지분 매각 의무 폐지 · 한국 스타트업 미국 플립', deals: 'Reliable Robotics $160M · Ray Therapeutics $125M', keywords: 'Anthropic Reliable Robotics Ray Therapeutics Omni' },
    { no: 1, week: '4월 2주', local: true, verified: false, title: '중기부 벤처투자 개편안 · Stanford HAI AI 인덱스', deals: '—', keywords: 'General Robotics' }
  ]
};
