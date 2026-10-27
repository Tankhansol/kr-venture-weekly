/*
 * 호 목록 (매주 맨 위에 한 줄 추가하고 latest 숫자를 올립니다)
 * local: true  → 새 디자인 페이지(issues/issue-NN.html)
 * local: false → 이전 사이트 페이지로 연결 (아직 옮기지 않은 호)
 * keywords: 검색용 회사·기관명 (선택). 제목·대표 딜은 목록용 요약입니다. 이전 사이트에서 옮긴 01~22호는 아직 원문 대조 전입니다.
 */
window.KVW_ARCHIVE = {
  latest: 24,
  legacyBase: 'https://mjbfkqkk.gensparkspace.com/issues/issue-',
  issues: [
    { no: 24, week: '10월 4주', local: true, title: '벤처투자법 개정안 국무회의 통과 · Tenstorrent $1.5B Series E', deals: 'Tenstorrent $1.5B · 더휴식 650억 원 · Eka Robotics $150M',
      keywords: '네이션에이 휴로틱스 더휴식 Tenstorrent Eka Robotics Dream Labs Kopin 한국벤처투자 모태펀드 벤처투자법' },
    { no: 23, week: '10월 3주', local: true, title: '군인공제회 3,000억 원 출자 확정 · Q3 글로벌 VC 투자 $170.9B', deals: 'Veir $110M · Mecka $60M · 대동로보틱스 50억 원',
      keywords: 'DEEPX 딥엑스 대동로보틱스 NdotLight 엔닷라이트 Veir Mecka Novele 군인공제회 표준계약서 KPMG Crunchbase' },
    { no: 22, week: '10월 2주', local: false, title: '과기정통부 프론티어 AI 사업 착수 · K-GX 정책금융 청사진', deals: 'Mecka $60M · Novele $17M · RentBetter A$5M' },
    { no: 21, week: '10월 1주', local: false, title: '벤처투자법 개정 · 부당 조기상환 요구 금지', deals: 'EliseAI $350M · Homeward $120M · Destro AI $8M' },
    { no: 20, week: '9월 4주', local: false, title: 'KKR 한국 $3B · SK hynix Ventures 출범', deals: 'Adaptive $30M · PicoJool $27.5M · Trebellar $18M' },
    { no: 19, week: '9월 3주', local: false, title: '중기부 하반기 벤처 지원 프로그램 3.46조 원', deals: 'Crusoe Energy $3.9B · D-Robotics $400M' },
    { no: 18, week: '9월 2주', local: false, title: 'KVCA 세컨더리 거래 인프라 구축 추진', deals: 'Hugging Face $12.9B(M&A) · Maven Robotics $100M' },
    { no: 17, week: '9월 1주', local: false, title: '15개 증권사 1조 원 세컨더리 펀드 · 전북 1,000억 원 모펀드', deals: 'Gravis Robotics $200M · UBTECH $13.9M' },
    { no: 16, week: '8월 4주', local: false, title: '하나증권 2,000억 원 민간모펀드 출자 개시', deals: 'Lyte $165M · Orbital $60M' },
    { no: 15, week: '8월 3주', local: false, title: '상반기 국내 벤처투자 8.87조 원 · 딥테크 세액공제 확대', deals: 'Infiforce $150M · Rillet $100M · Terra Industries $52M' },
    { no: 14, week: '7월 3주', local: false, title: '벤처투자법 개정 시행 · 상반기 글로벌 VC $510B', deals: '홀리데이로보틱스 1,550억 원 · 대동로보틱스 50억 원' },
    { no: 13, week: '7월 2주', local: false, title: 'IPO 회수 둔화 · 모태펀드 GP 투심위 참관', deals: 'Proxima Fusion €411M · Norm $120M · Gradium $100M' },
    { no: 12, week: '7월 1주', local: false, title: '모태펀드 GP 투심위 참관 · 코스닥 퇴출 기준 강화', deals: 'Together AI $800M · Etched($5B 밸류) · Joulent' },
    { no: 11, week: '6월 5주', local: false, title: 'HBM 가격 상승과 AI 인프라 원가 · 중기부 창업도시 4곳', deals: 'DeepSeek · Baseten · Groq $650M' },
    { no: 10, week: '6월 4주', local: false, title: '피지컬 AI·월드 모델 투자 확대', deals: 'Supabase $500M · Odyssey $310M · PhysicsX $300M' },
    { no: 9, week: '6월 3주', local: false, title: '벤처투자 촉진법 개정안 · APG·CPPIB 한국 리빙인프라 투자', deals: 'Supabase $500M · PhysicsX $300M · Focused Energy $240M' },
    { no: 8, week: '6월 2주', local: false, title: 'AI 가치 검증(AIVI) · 삼성중공업 해상 데이터센터', deals: 'Supabase $500M · Focused Energy $240M · Coralogix $200M' },
    { no: 7, week: '5월 4주', local: false, title: '엔터프라이즈 AI ROI 점검', deals: 'Stord $250M · Corgi $106M' },
    { no: 6, week: '5월 3주', local: false, title: '1분기 벤처투자 24.1% 반등', deals: 'Anduril · Blitzy $200M · Quantum Motion $160M' },
    { no: 5, week: '5월 2주', local: false, title: '방산·데이터센터 인프라 대형 딜', deals: 'Anduril · VoltaGrid $775M' },
    { no: 4, week: '5월 1주', local: false, title: 'CVC M&A 규제 폐지 · 업스테이지 정부 투자', deals: 'Ineffable $1.1B · Kalshi $1B · True Anomaly $650M' },
    { no: 3, week: '4월 4주', local: false, title: 'AI 에이전트 거버넌스 · 휴머노이드 양산', deals: 'Legora · Parallel Web Systems · Firestorm Labs $82M' },
    { no: 2, week: '4월 3주', local: false, title: 'CVC 지분 매각 의무 폐지 · 한국 스타트업 미국 플립', deals: 'Reliable Robotics $160M · Ray Therapeutics $125M' },
    { no: 1, week: '4월 2주', local: false, title: '중기부 벤처투자 개편안 · Stanford HAI AI 인덱스', deals: '—' }
  ]
};
