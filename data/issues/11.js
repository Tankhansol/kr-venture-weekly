/*
 * 제11호 (2026년 6월 5주차) — 이전 사이트에서 옮긴 뒤 2026.10.27 원문 대조 반영
 */
window.KVW_ISSUES = window.KVW_ISSUES || {};
window.KVW_ISSUES[11] = {
  "week": "2026년 6월 5주차",
  "shortWeek": "6월 5주",
  "title": [
    "메모리 가격 상승과 AI 과금 논란,",
    "Baseten·Groq 추론 인프라 투자"
  ],
  "summary": "핵심 요약: 메모리 가격 상승·AI 과금 논란 · 4대 창업도시 지원 공고 · 해외 딜 5건",
  "points": [
    {
      "tag": "Policy",
      "text": "4대 창업도시(대구·대전·광주·울산) 지원 공고: 기업당 최대 4억 원, 278개사"
    },
    {
      "tag": "Report",
      "text": "하이퍼네트워크: 추론 시점 가중치 생성으로 운영 비용 10~30배 절감 가능성"
    },
    {
      "tag": "Deal",
      "text": "DeepSeek 500억 위안($7.4B) 조달 추진 · Baseten $1.5B · AppsFlyer $1B+ · Groq $650M · Odyssey $310M"
    }
  ],
  "articles": [
    {
      "type": "policy",
      "marker": "POLICY · AI 인프라 원가",
      "title": "메모리 가격 상승에 애플 맥·아이패드 가격 인상, AI API 과다 청구 논란",
      "facts": [
        "메모리·저장장치 가격 최근 3개 분기 약 4배 상승(Counterpoint Research)",
        "애플, 맥북·아이패드 가격 최대 $300 인상(2026.06.25), iPad Air 128GB $599 → $749(+25.0%*)",
        "AI 비용 감사 스타트업 Vaudit, 60개 기업 청구서 $34M 중 약 $1.7M 과다 청구 추정, 실패 작업 반복 재시도가 원인. OpenAI·Anthropic은 청구 오류 부인",
        "원문의 \"HBM·NAND 가격 246% 상승\" 수치는 원문 확인 불가",
        "※ +25.0%*는 직접 계산한 값: 749 ÷ 599 − 1"
      ],
      "sources": [
        {
          "name": "다음(한국경제 등)",
          "url": "https://v.daum.net/v/20260626060102523",
          "date": "2026.06.26"
        },
        {
          "name": "Outlook Business",
          "url": "https://www.outlookbusiness.com/deeptech/are-openai-anthropic-overbilling-you-companies-claim-17-mn-in-ai-overcharges",
          "date": "2026.06.29"
        }
      ]
    },
    {
      "type": "policy",
      "marker": "POLICY · 창업 정책",
      "title": "4대 창업도시(대구·대전·광주·울산) 지원 사업 공고",
      "facts": [
        "2026.04 첫 창업도시 4곳 발표, 하반기 6곳 추가 지정 예정(2030년까지 10곳)",
        "기업당 사업화 자금 최대 4억 원, 4개 도시 총 278개사 선정 예정",
        "2026.06.22 통합 공고(투자 연계형 창업패키지·지역창업패키지)"
      ],
      "sources": [
        {
          "name": "헤럴드경제",
          "url": "https://www.heraldk.com/article/2026062118183878322",
          "date": "2026.06.21"
        },
        {
          "name": "머니투데이",
          "url": "https://www.mt.co.kr/future/2026/05/21/2026052113444083196",
          "date": "2026.05.21"
        }
      ]
    },
    {
      "type": "report",
      "marker": "REPORT · AI 아키텍처",
      "title": "하이퍼네트워크: RAG·미세조정의 대안",
      "facts": [
        "추론 시점에 다른 신경망의 가중치를 생성하는 방식",
        "운영 비용 10~30배 절감 가능성 소개"
      ],
      "sources": [
        {
          "name": "AI타임스",
          "url": "https://www.aitimes.com/news/articleView.html?idxno=211947",
          "date": ""
        }
      ],
      "pending": "[확인 불가: 원문 보고서·기사를 찾지 못함]"
    }
  ],
  "deals": [
    {
      "name": "DeepSeek",
      "region": "해외",
      "sector": "파운데이션 AI",
      "round": "첫 외부 조달",
      "note": "500억 위안 규모, 2026.07.17 마무리 보도(창업자 출자 포함)",
      "investors": "Tencent·CATL 등(마무리 시점 보도)",
      "date": "2026.07.17",
      "source": {
        "name": "Yellow.com",
        "url": "https://yellow.com/ko/news/74억달러-외부-투자-유치한-딥시크-중국-ai-연구소-빅리그-진입"
      },
      "amountText": "$7.4B(추진)"
    },
    {
      "name": "Baseten",
      "region": "해외",
      "sector": "AI 추론 라우팅",
      "round": "미기재",
      "note": "보도 기준, 밸류 $11B·$13B 두 단계",
      "investors": "Altimeter Capital·Conviction 등(공동 리드, 보도)",
      "date": "2026.06.18",
      "usdM": 1500,
      "source": {
        "name": "KuCoin News (CryptoBriefing 인용)",
        "url": "https://www.kucoin.com/news/flash/baseten-secures-1-5b-funding-valuation-hits-13b"
      }
    },
    {
      "name": "AppsFlyer",
      "region": "해외",
      "sector": "마케팅 측정 인프라",
      "round": "미기재",
      "note": "대부분 구주 매입(지분 48%), 보도 기준 $1.3B·밸류 $2.7B",
      "investors": "Moloco(리드)·Google·Meta·Unity",
      "date": "2026.06.22",
      "amountText": "$1B+",
      "source": {
        "name": "Globes",
        "url": "https://en.globes.co.il/en/article-1001546734"
      }
    },
    {
      "name": "Groq",
      "region": "해외",
      "sector": "AI 추론 칩·클라우드",
      "round": "미기재",
      "note": "Nvidia와 $20B 라이선스·인력 이동 계약 이후 조달",
      "investors": "Disruptive·Infinitum(공동 리드)",
      "date": "2026.06.22",
      "usdM": 650,
      "source": {
        "name": "TechCrunch",
        "url": "https://techcrunch.com/2026/06/22/ai-chipmaker-groq-confirms-650m-raise-re-staffs-after-nvidias-20b-not-acqui-hire-deal/"
      }
    },
    {
      "name": "Odyssey",
      "region": "해외",
      "sector": "월드 모델",
      "round": "Series B",
      "note": "밸류 $1.45B",
      "investors": "Natural Capital(리드), Amazon·AMD Ventures·GV 참여",
      "date": "2026.06.17",
      "usdM": 310,
      "source": {
        "name": "TechCrunch",
        "url": "https://techcrunch.com/2026/06/17/world-model-maker-odyssey-nabs-1-45b-valuation-backed-by-amazon-and-other-big-names/"
      }
    }
  ],
  "insight": [
    "AI 인프라 원가 상승으로 토큰 단가 방어력과 B2B 가격 결정력이 평가 기준으로 부상",
    "자본이 파운데이션 모델에서 추론 인프라·실행 계층으로 이동"
  ],
  "no": 11,
  "correction": "2026.10.27 원문 대조 후 정정: \"창업도시 4곳 지정\"을 \"4월 발표된 4대 창업도시 지원 사업 공고(6.22)\"로 정정, HBM·NAND 246%는 원문 미확인으로 Counterpoint \"약 4배\"로 교체, API 과다 청구 주체(Vaudit) 명시, DeepSeek $7.4B는 6월 기준 추진 단계로 표기, AppsFlyer는 대부분 구주 매입임을 명시, Baseten은 보도 기준으로 명시. 하이퍼네트워크 항목은 원문 확인 불가"
};
