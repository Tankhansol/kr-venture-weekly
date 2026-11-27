/*
 * Deals 섹터 분류 (운영자 분류, 주된 수요처 기준)
 * 키: 기업명 소문자·공백 제거. 딜 데이터에 cat 값이 있으면 그 값이 우선
 * 새 딜은 issue 데이터에 cat을 직접 넣거나 이 파일에 추가 (누락 시 tests/deals.test.js가 결함으로 표시)
 */
window.KVW_DEAL_CATS = [
  '로봇·피지컬 AI',
  'AI 모델·소프트웨어',
  'AI 인프라·반도체',
  '핀테크·프롭테크·소비자',
  '방산·우주',
  '바이오·헬스케어',
  '에너지·소재·양자'
];
window.KVW_DEAL_SECTOR_MAP = {
  "bedrockrobotics": "로봇·피지컬 AI",  // Bedrock Robotics — 자율 건설 장비
  "brightai": "로봇·피지컬 AI",  // BrightAI — 인프라 점검 피지컬 AI
  "d-robotics": "로봇·피지컬 AI",  // D-Robotics — 로봇용 칩·개발 플랫폼(중국)
  "destroai": "로봇·피지컬 AI",  // Destro AI — 물류창고 이기종 로봇 OS
  "dreamlabs": "로봇·피지컬 AI",  // Dream Labs — 로봇 파운데이션 모델
  "ekarobotics": "로봇·피지컬 AI",  // Eka Robotics — 피지컬 AI·로봇 조작
  "fortrobotics": "로봇·피지컬 AI",  // FORT Robotics — 로봇 안전 제어
  "foundry": "로봇·피지컬 AI",  // Foundry — 로봇 자율 조립 공장
  "generalrobotics": "로봇·피지컬 AI",  // General Robotics — 범용 로보틱스 AI
  "genesisai": "로봇·피지컬 AI",  // Genesis AI — 범용 로봇 피지컬 AI
  "gravisrobotics": "로봇·피지컬 AI",  // Gravis Robotics — 중장비 자율주행(ETH 취리히 스핀오프)
  "humynlabs": "로봇·피지컬 AI",  // Humyn Labs — 로봇 학습용 데이터
  "infiforce": "로봇·피지컬 AI",  // Infiforce — 로봇 월드 모델(중국)
  "lyte": "로봇·피지컬 AI",  // Lyte — 로봇 인지(퍼셉션) 기술
  "machenta": "로봇·피지컬 AI",  // Machenta — 로봇 학습 모델
  "mavenrobotics": "로봇·피지컬 AI",  // Maven Robotics — 산업용 범용 로봇(자체 개발)
  "mecka": "로봇·피지컬 AI",  // Mecka — 로봇 학습 데이터 플랫폼
  "mindrobotics": "로봇·피지컬 AI",  // Mind Robotics — 범용 로봇 플랫폼
  "odyssey": "로봇·피지컬 AI",  // Odyssey — 월드 모델
  "pathrobotics": "로봇·피지컬 AI",  // Path Robotics — 용접 자동화 피지컬 AI
  "physicsx": "로봇·피지컬 AI",  // PhysicsX — 산업용 물리 AI
  "robotera": "로봇·피지컬 AI",  // Robot Era — 휴머노이드(중국)
  "standardbots": "로봇·피지컬 AI",  // Standard Bots — 산업용 로봇
  "ubtechrobotics": "로봇·피지컬 AI",  // UBTECH Robotics — 휴머노이드 관절 모듈
  "xpanner": "로봇·피지컬 AI",  // Xpanner — 건설 자동화(AaaS)
  "zipline": "로봇·피지컬 AI",  // Zipline — 드론 배송
  "대동로보틱스": "로봇·피지컬 AI",  // 대동로보틱스 — 건설 현장 로봇
  "무빈": "로봇·피지컬 AI",  // 무빈 — 로봇 학습용 3D 모션 데이터
  "유로보틱스": "로봇·피지컬 AI",  // 유로보틱스 — 로봇 자율이동 AI
  "헥사로보틱스": "로봇·피지컬 AI",  // 헥사로보틱스 — 웨어러블 보행 보조 로봇
  "홀리데이로보틱스": "로봇·피지컬 AI",  // 홀리데이로보틱스 — 휴머노이드 로봇
  "8090solutions": "AI 모델·소프트웨어",  // 8090 Solutions — 에이전틱 AI 소프트웨어 개발
  "adaptive": "AI 모델·소프트웨어",  // Adaptive — 건설 회계 에이전트 AI
  "anthropic": "AI 모델·소프트웨어",  // Anthropic — 파운데이션 AI
  "appsflyer": "AI 모델·소프트웨어",  // AppsFlyer — 마케팅 측정 인프라
  "blitzy": "AI 모델·소프트웨어",  // Blitzy — 자율 코딩 에이전트
  "deepseek": "AI 모델·소프트웨어",  // DeepSeek — 파운데이션 AI
  "eliseai": "AI 모델·소프트웨어",  // EliseAI — 주거·헬스케어 운영 AI
  "gradium": "AI 모델·소프트웨어",  // Gradium — AI 음성 인프라
  "hex": "AI 모델·소프트웨어",  // Hex — AI 데이터 분석
  "huggingface": "AI 모델·소프트웨어",  // Hugging Face — 오픈소스 AI 플랫폼
  "leapxpert": "AI 모델·소프트웨어",  // LeapXpert — 엔터프라이즈 컴플라이언스
  "legora": "AI 모델·소프트웨어",  // Legora — 법률 AI
  "mercor": "AI 모델·소프트웨어",  // Mercor — AI 학습용 전문가 데이터
  "mirendil": "AI 모델·소프트웨어",  // Mirendil — AI 연구 자동화
  "modelml": "AI 모델·소프트웨어",  // Model ML — 금융 업무 AI 에이전트
  "ndotlight": "AI 모델·소프트웨어",  // NdotLight — 3D 시뮬레이션 데이터
  "nominal": "AI 모델·소프트웨어",  // Nominal — 하드웨어 시험 AI
  "norm": "AI 모델·소프트웨어",  // Norm — AI 법률
  "omni": "AI 모델·소프트웨어",  // Omni — 기업용 BI
  "parallelwebsystems": "AI 모델·소프트웨어",  // Parallel Web Systems — AI 에이전트 리서치 도구
  "recursivesuperintelligence": "AI 모델·소프트웨어",  // Recursive Superintelligence — 프론티어 AI
  "rillet": "AI 모델·소프트웨어",  // Rillet — AI 네이티브 ERP·재무 결산
  "sarvam": "AI 모델·소프트웨어",  // Sarvam — 인도 소버린 AI
  "upwind": "AI 모델·소프트웨어",  // Upwind — 클라우드·AI 보안
  "네이션에이": "AI 모델·소프트웨어",  // 네이션에이 — AI 영상·콘텐츠 테크
  "페르소나ai": "AI 모델·소프트웨어",  // 페르소나AI — 기업용 AI 에이전트
  "baseten": "AI 인프라·반도체",  // Baseten — AI 추론 라우팅
  "coralogix": "AI 인프라·반도체",  // Coralogix — AI 관측(옵저버빌리티)
  "crusoe": "AI 인프라·반도체",  // Crusoe — AI 데이터센터·전력 인프라
  "deepx": "AI 인프라·반도체",  // DEEPX — 온디바이스 AI 반도체
  "etched": "AI 인프라·반도체",  // Etched — AI 추론 칩
  "fractile": "AI 인프라·반도체",  // Fractile — AI 추론 칩
  "generalcompute": "AI 인프라·반도체",  // General Compute — AI 추론 클라우드(비엔비디아 칩)
  "groq": "AI 인프라·반도체",  // Groq — AI 추론 칩·클라우드
  "ineffableintelligence": "AI 인프라·반도체",  // Ineffable Intelligence — 프론티어 AI 인프라
  "modal": "AI 인프라·반도체",  // Modal — AI 추론 인프라
  "ocient": "AI 인프라·반도체",  // Ocient — 데이터 분석 인프라
  "picojool": "AI 인프라·반도체",  // PicoJool — AI 데이터센터 광 칩(VCSEL)
  "supabase": "AI 인프라·반도체",  // Supabase — 개발자 DB 플랫폼
  "tenstorrent": "AI 인프라·반도체",  // Tenstorrent — AI 반도체(RISC-V)
  "togetherai": "AI 인프라·반도체",  // Together AI — AI 추론·연산 인프라
  "torus": "AI 인프라·반도체",  // Torus — 모듈형 AI 데이터센터
  "veir": "AI 인프라·반도체",  // Veir — 데이터센터 초전도 전력
  "voltagrid": "AI 인프라·반도체",  // VoltaGrid — 데이터센터 전력 인프라
  "엔트리움": "AI 인프라·반도체",  // 엔트리움 — 반도체 테스트 소켓 소재
  "익스톨": "AI 인프라·반도체",  // 익스톨 — 유리기판 도금 소재
  "퓨리오사ai": "AI 인프라·반도체",  // 퓨리오사AI — AI 추론 반도체
  "corgi": "핀테크·프롭테크·소비자",  // Corgi — AI 리스크 보험
  "flutterwave": "핀테크·프롭테크·소비자",  // Flutterwave — 아프리카 핀테크
  "homeward": "핀테크·프롭테크·소비자",  // Homeward — 주택 브릿지 금융 프롭테크
  "kalshi": "핀테크·프롭테크·소비자",  // Kalshi — 예측 시장 플랫폼
  "orbital": "핀테크·프롭테크·소비자",  // Orbital — 부동산 법률 AI(영국)
  "rentbetter": "핀테크·프롭테크·소비자",  // RentBetter — 개인 임대인용 임대 관리 플랫폼(호주)
  "stord": "핀테크·프롭테크·소비자",  // Stord — 이커머스 물류
  "supa": "핀테크·프롭테크·소비자",  // Supa — 부동산 관리 AI
  "trebellar": "핀테크·프롭테크·소비자",  // Trebellar — 기업 부동산 의사결정 AI
  "더휴식": "핀테크·프롭테크·소비자",  // 더휴식 — 프롭테크(숙박)
  "액션핏": "핀테크·프롭테크·소비자",  // 액션핏 — 모바일 게임
  "anduril": "방산·우주",  // Anduril — 방산 하드웨어
  "firestormlabs": "방산·우주",  // Firestorm Labs — 이동식 드론 공장
  "reliablerobotics": "방산·우주",  // Reliable Robotics — 자율 항공기
  "satlyt": "방산·우주",  // Satlyt — 위성 공간 컴퓨팅
  "shieldai": "방산·우주",  // Shield AI — 국방 AI
  "terraindustries": "방산·우주",  // Terra Industries — 자율 방산 시스템(나이지리아)
  "trueanomaly": "방산·우주",  // True Anomaly — 우주·방산
  "프리뉴": "방산·우주",  // 프리뉴 — 드론 설계·제조
  "isomorphiclabs": "바이오·헬스케어",  // Isomorphic Labs — AI 신약 설계
  "raytherapeutics": "바이오·헬스케어",  // Ray Therapeutics — 망막 유전자 치료제
  "레이와트": "바이오·헬스케어",  // 레이와트 — 심뇌혈관 영상 의료기기
  "메디인테크": "바이오·헬스케어",  // 메디인테크 — 전동식 AI 로봇 내시경
  "메디컬에이아이": "바이오·헬스케어",  // 메디컬에이아이 — 심전도 AI
  "숨빗ai": "바이오·헬스케어",  // 숨빗AI — 흉부 X-ray 판독 AI
  "에버엑스": "바이오·헬스케어",  // 에버엑스 — AI 재활 디지털헬스
  "휴로틱스": "바이오·헬스케어",  // 휴로틱스 — 웨어러블 재활 로봇
  "focusedenergy": "에너지·소재·양자",  // Focused Energy — 레이저 핵융합
  "joulent": "에너지·소재·양자",  // Joulent — 에너지 인프라
  "novele": "에너지·소재·양자",  // Novele — 빌딩 에너지 AI
  "proximafusion": "에너지·소재·양자",  // Proxima Fusion — 핵융합 에너지
  "q-ctrl": "에너지·소재·양자",  // Q-CTRL — 양자 제어 소프트웨어
  "quantummotion": "에너지·소재·양자",  // Quantum Motion — 실리콘 양자컴퓨터
  "나노포지에이아이": "에너지·소재·양자"
};
