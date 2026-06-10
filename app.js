const STORAGE_KEY = 'ebrainOS.dashboard.v1';
const SIDEBAR_STATE_KEY = 'ebrainOS.sidebarCollapsed.v1';

const MENU_GROUPS = [
  { group: '워크스페이스', icon: '▣', defaultOpen: true, items: [
    { key: 'products', label: '상품관리', icon: '▣' },
    { key: 'marketing', label: '마켓팅관리', icon: '↗' },
    { key: 'ideaMemo', label: '아이디어 메모', icon: '✎' },
    { key: 'inquiries', label: '리드관리', icon: '☏' },
    { key: 'customers', label: '고객관리', icon: '◉' },
    { key: 'projects', label: '프로젝트관리', icon: '□' },
    { key: 'tasks', label: '할일관리', icon: '✓' },
    { key: 'courseMgmt', label: '강의관리', icon: '▤' },
    { key: 'profileHistory', label: '프로필 이력관리', icon: '☷' },
    { key: 'lectures', label: '일정관리', icon: '▣' },
    { key: 'emails', label: '메일관리', icon: '✉' },
  ]},
  { group: '콘텐츠', icon: '✎', items: [
    { key: 'content', label: '콘텐츠 제작소', icon: '✎' },
    { key: 'publishCalendar', label: '발행 캘린더', icon: '◷' },
    { key: 'youtube', label: '유튜브', icon: '▶' },
    { key: 'blog', label: '네이버 블로그', icon: 'B' },
    { key: 'naverCafe', label: '네이버카페', icon: 'N' },
    { key: 'threads', label: '스레드/SNS', icon: '#' },
    { key: 'openChat', label: '오픈채팅', icon: '☷' },
    { key: 'membership', label: '멤버쉽', icon: '★' },
  ]},
];

const ROUTE_META = {
  dashboard: { eyebrow: '오늘', title: '관제판', desc: '오늘 처리해야 할 업무와 전환 흐름을 한눈에 봅니다.' },
  products: { eyebrow: '워크스페이스', title: '상품관리', desc: '상품, 가격, 상태, 판매 흐름을 확인합니다.' },
  marketing: { eyebrow: '워크스페이스', title: '마켓팅관리', desc: '광고·전환·리드 흐름을 한 화면에서 점검합니다.' },
  ideaMemo: { eyebrow: '워크스페이스', title: '아이디어 메모', desc: '떠오른 생각을 저장하고, 실행 후보를 골라 할일·콘텐츠·상품으로 전환합니다.' },
  inquiries: { eyebrow: '워크스페이스', title: '리드관리', desc: '문의 추가·수정·상태변경·후속 할일 생성을 관리합니다.' },
  customers: { eyebrow: '워크스페이스', title: '고객관리', desc: '고객/문의 데이터를 고객 관점으로 확인합니다.' },
  projects: { eyebrow: '워크스페이스', title: '프로젝트관리', desc: '진행 중인 업무를 프로젝트 실행 단위로 관리합니다.' },
  tasks: { eyebrow: '워크스페이스', title: '할일관리', desc: '업무를 추가·수정·상태변경하고 우선순위별로 관리합니다.' },
  courseMgmt: { eyebrow: '워크스페이스', title: '강의관리', desc: '강의 준비 상태와 자료·안내 메일을 관리합니다.' },
  profileHistory: { eyebrow: '워크스페이스', title: '프로필 이력관리', desc: '나의 AI·AX 강의, 저서, 컨설팅, 운영채널 커리어 이력을 정리합니다.' },
  lectures: { eyebrow: '워크스페이스', title: '일정관리', desc: '개인 일정, 업무 일정, 운영 약속을 날짜와 시간 기준으로 관리합니다.' },
  meetings: { eyebrow: '워크스페이스', title: '미팅관리', desc: '회의 일정·회의록·결정사항·후속 할일을 한 화면에서 작업합니다.' },
  emails: { eyebrow: '워크스페이스', title: '메일관리', desc: 'Google Workspace 계정 받은메일을 Gmail API로 불러와 확인합니다.' },
  content: { eyebrow: '콘텐츠', title: '콘텐츠 제작소', desc: '주제 입력 뒤 원본·유튜브·블로그·네이버카페·스레드 카드로 변환하고 발행 캘린더로 넘기는 허브입니다.' },
  publishCalendar: { eyebrow: '콘텐츠', title: '발행 캘린더', desc: '등록 예정 관리와 등록 후 링크 관리를 달력 기준으로 함께 운영합니다.' },
  youtube: { eyebrow: '콘텐츠', title: '유튜브', desc: '기존 업로드 성과 분석, 개선 액션, 등록 예정 영상 큐를 한 화면에서 관리합니다.' },
  blog: { eyebrow: '콘텐츠', title: '네이버 블로그', desc: '네이버 블로그 글/SEO 운영, 조회수·댓글·검색 유입, 신규 글 주제를 관리합니다.' },
  naverCafe: { eyebrow: '콘텐츠', title: '네이버카페', desc: '발행한 카페 글의 반응을 확인하고 댓글·질문·답변 필요·FAQ/구매자료 후보를 우선 관리합니다.' },
  threads: { eyebrow: '콘텐츠', title: '스레드/SNS', desc: '지속 콘텐츠 관리용으로 반응을 체크하고 다음 콘텐츠 기획·작성 후보를 이어서 정리합니다.' },
  reactionCheck: { eyebrow: '콘텐츠', title: '반응 체크', desc: '유튜브·블로그·네이버카페·스레드 반응과 답변/재활용 후보를 통합 확인합니다.' },
  openChat: { eyebrow: '콘텐츠', title: '오픈채팅', desc: '카톡 대화에서 공유할 자료 후보와 수강생 반응을 기록하고 콘텐츠 전환 후보까지 이어서 관리합니다.' },
  membership: { eyebrow: '콘텐츠', title: '멤버쉽', desc: '구매자/유료회원 온보딩, 자료 요청, 질문 응대, 전용 콘텐츠 후보를 독립 메뉴로 관리합니다.' },
  conversion: { eyebrow: '비즈니스', title: '광고·전환', desc: '유튜브→랜딩/무료자료→Pixel/Lead→Meta 리타겟팅 전환판입니다.' },
  sns: { eyebrow: '콘텐츠', title: 'SNS 운영', desc: 'SNS/Threads/Meta 소재로 재활용할 콘텐츠를 확인합니다.' },
  lectureAssets: { eyebrow: '콘텐츠', title: '강의·자료', desc: '강의 자료와 구매자료 안내 자산을 확인합니다.' },
  assets: { eyebrow: '콘텐츠', title: '파일·자산', desc: 'PDF, 이미지, 크리에이티브, 문서 자산 목록입니다.' },
  community: { eyebrow: '관계', title: '커뮤니티', desc: '카페/디스코드/오픈채팅 게시와 질문 흐름입니다.' },
  opsos: { eyebrow: 'AI 운영', title: '운영 OS', desc: 'Zoom 52분 이후 인사이트를 반영한 24시간 MVP·진통제 자동화 운영판입니다.' },
  automation: { eyebrow: 'AI 운영', title: 'Hermes 자동화', desc: '크론, 링크 리뷰, KPI 점검 등 자동화 실행 로그입니다.' },
  research: { eyebrow: 'AI 운영', title: '리서치', desc: '정책, 벤치마크, 소재 조사 항목을 관리합니다.' },
  settings: { eyebrow: '관리', title: '설정', desc: '로컬 저장, JSON 백업/복원, 샘플 데이터 초기화 설정입니다.' },
};

const CRUD_CONFIG = {
  tasks: {
    collection: 'tasks',
    title: '오늘의 할일',
    empty: '등록된 할일이 없습니다. 위 빠른 입력에서 첫 업무를 바로 추가하세요.',
    fields: [
      { name: 'title', label: '할일', type: 'text', required: true, placeholder: '예: 오늘 올릴 카페 공지 작성' },
      { name: 'owner', label: '담당', type: 'text', default: '이브레인', placeholder: '예: 이브레인, Hermes' },
      { name: 'status', label: '상태', type: 'select', options: ['대기','진행중','완료','보류'] },
      { name: 'priority', label: '우선순위', type: 'select', options: ['높음','중간','낮음'] },
      { name: 'due', label: '마감일', type: 'date' },
      { name: 'memo', label: '메모', type: 'textarea', placeholder: '링크, 판단 기준, 다음 행동을 짧게 적으세요.' },
    ],
    columns: ['title','owner','status','priority','due','memo'],
    statusOptions: ['대기','진행중','완료','보류'],
    filters: { status: ['전체','대기','진행중','완료','보류'], priority: ['전체','높음','중간','낮음'], dateScope: ['전체','오늘','이번주'] },
  },
  projects: {
    collection: 'projects',
    title: '프로젝트',
    empty: '등록된 프로젝트가 없습니다. 프로젝트는 할일과 별개로 만들고, 필요할 때 후속 할일을 연결합니다.',
    fields: [
      { name: 'title', label: '프로젝트명', type: 'text', required: true, placeholder: '예: AI커머스 브레인 6월 판매 캠페인' },
      { name: 'owner', label: '책임자', type: 'text', default: '이브레인', placeholder: '예: 이브레인, Hermes' },
      { name: 'status', label: '상태', type: 'select', options: ['기획','진행중','검수','완료','보류'] },
      { name: 'priority', label: '우선순위', type: 'select', options: ['높음','중간','낮음'] },
      { name: 'startDate', label: '시작일', type: 'date' },
      { name: 'targetDate', label: '목표 완료일', type: 'date' },
      { name: 'goal', label: '목표/결과물', type: 'textarea', placeholder: '이 프로젝트가 끝났을 때 남아야 할 산출물을 적으세요.' },
      { name: 'successMetric', label: '성공 기준', type: 'textarea', placeholder: '예: 매출, 리드 수, 발행 개수, 검수 완료 기준' },
      { name: 'nextAction', label: '다음 결정/액션', type: 'textarea', placeholder: '지금 막힌 지점 또는 다음 회의/결정 사항' },
      { name: 'memo', label: '메모', type: 'textarea', placeholder: '관련 링크, 고객, 자료 위치를 적으세요.' },
    ],
    columns: ['title','owner','status','priority','startDate','targetDate','goal','nextAction'],
    statusOptions: ['기획','진행중','검수','완료','보류'],
    filters: { status: ['전체','기획','진행중','검수','완료','보류'], priority: ['전체','높음','중간','낮음'], dateScope: ['전체','오늘','이번주'] },
  },
  lectures: {
    collection: 'lectures',
    title: '일정',
    empty: '등록된 일정이 없습니다.',
    fields: [
      { name: 'title', label: '일정명', type: 'text', required: true, placeholder: '예: AI커머스 주간 운영회의' },
      { name: 'date', label: '날짜', type: 'date' },
      { name: 'startTime', label: '시작 시간', type: 'time', default: '10:00' },
      { name: 'endTime', label: '종료 시간', type: 'time', default: '11:00' },
      { name: 'channel', label: '분류', type: 'text', default: '개인', placeholder: '예: 개인, 업무, Zoom, 강의' },
      { name: 'location', label: '장소', type: 'text', default: '', placeholder: '예: 온라인, 사무실, 강의장, 카페' },
      { name: 'type', label: '유형', type: 'select', options: ['개인','업무','강의','미팅','콘텐츠','외부약속'], default: '업무' },
      { name: 'priority', label: '중요도', type: 'select', options: ['높음','보통','낮음'], default: '보통' },
      { name: 'movement', label: '이동 필요', type: 'select', options: ['없음','이동 있음','온라인'], default: '온라인' },
      { name: 'linkTarget', label: '연결 대상', type: 'select', options: ['없음','강의관리','미팅관리','할일관리'], default: '없음' },
      { name: 'status', label: '상태', type: 'select', options: ['예정','진행중','완료','보류'] },
      { name: 'materialStatus', label: '준비물', type: 'select', options: ['없음','준비중','완료'], default: '없음' },
      { name: 'mailStatus', label: '알림/공유', type: 'select', options: ['없음','필요','완료'], default: '없음' },
      { name: 'repeatRule', label: '반복', type: 'select', options: ['없음','매주','매월','평일'], default: '없음' },
      { name: 'repeatCount', label: '반복 횟수', type: 'number', default: '1', placeholder: '예: 4' },
      { name: 'memo', label: '메모', type: 'textarea', placeholder: '준비물, 이동, 공유할 링크를 짧게 적으세요.' },
    ],
    columns: ['title','date','startTime','endTime','type','priority','movement','channel','location','status','materialStatus','mailStatus','memo'],
    statusOptions: ['예정','진행중','완료','보류'],
    filters: { status: ['전체','예정','진행중','완료','보류'], dateScope: ['전체','오늘','이번주'], type: ['전체','개인','업무','강의','미팅','콘텐츠','외부약속','Google'], priority: ['전체','높음','보통','낮음'] },
  },
  courseMgmt: {
    collection: 'courseItems',
    title: '강의관리',
    empty: '등록된 강의가 없습니다. 오른쪽 폼에서 첫 강의를 추가하세요.',
    fields: [
      { name: 'title', label: '강의명', type: 'text', required: true, placeholder: '예: AI 상세페이지 실전 강의' },
      { name: 'audience', label: '주관', type: 'text', placeholder: '예: 이브레인, 파트너사, 담당 강사' },
      { name: 'format', label: '형식', type: 'select', options: ['VOD','라이브','오프라인','PDF/자료','코칭','기업교육'] },
      { name: 'status', label: '상태', type: 'select', options: ['기획중','준비중','운영중','판매중','완료','보류'] },
      { name: 'materialStatus', label: '자료 준비', type: 'select', options: ['미정','준비중','검수중','완료'], default: '준비중' },
      { name: 'mailStatus', label: '안내/공지', type: 'select', options: ['없음','작성필요','발송준비','발송완료'], default: '작성필요' },
      { name: 'launchDate', label: '첫 회차/오픈일', type: 'date' },
      { name: 'sessionCount', label: '회차 수', type: 'number', default: '1', placeholder: '예: 8' },
      { name: 'startTime', label: '시작 시간', type: 'time', default: '10:00' },
      { name: 'endTime', label: '종료 시간', type: 'time', default: '11:00' },
      { name: 'scheduleLabelColor', label: '일정 라벨 색상', type: 'select', options: ['강의-청록','강의-보라','강의-주황','강의-핑크','강의-남색'], default: '강의-청록' },
      { name: 'sessionDates', label: '회차 날짜', type: 'textarea', placeholder: '8회차면 날짜 8개를 줄 단위로 입력하세요.\n예:\n2026-06-05\n2026-06-12\n2026-06-19', help: '비워두면 첫 회차/오픈일부터 회차 수만큼 매주 자동 생성됩니다.' },
      { name: 'assetLink', label: '자료 링크', type: 'url', placeholder: 'https://...' },
      { name: 'nextAction', label: '다음 할 일', type: 'textarea', placeholder: '자료 보완, 안내문 작성, 수강생 공지 등 다음 행동을 적으세요.' },
      { name: 'memo', label: '메모', type: 'textarea', placeholder: '커리큘럼, 판매 포인트, 수강생 피드백을 적으세요.' },
    ],
    columns: ['title','audience','format','status','materialStatus','mailStatus','sessionCount','launchDate','scheduleSync','nextAction'],
    statusOptions: ['기획중','준비중','운영중','판매중','완료','보류'],
    filters: { status: ['전체','기획중','준비중','운영중','판매중','완료','보류'], format: ['전체','VOD','라이브','오프라인','PDF/자료','코칭','기업교육'] },
  },
  meetings: {
    collection: 'meetings',
    title: '미팅관리',
    empty: '등록된 미팅이 없습니다. 오른쪽 폼에서 첫 미팅을 추가하세요.',
    fields: [
      { name: 'title', label: '미팅명', type: 'text', required: true, placeholder: '예: 구매자료 패키지 판매 점검' },
      { name: 'date', label: '미팅일', type: 'date' },
      { name: 'startTime', label: '시작 시간', type: 'time', default: '10:00' },
      { name: 'endTime', label: '종료 시간', type: 'time', default: '11:00' },
      { name: 'type', label: '유형', type: 'select', options: ['내부회의','고객미팅','강의미팅','제휴미팅','운영점검','아이디어회의'] },
      { name: 'status', label: '상태', type: 'select', options: ['예정','진행중','후속필요','완료','보류'] },
      { name: 'owner', label: '담당', type: 'text', default: '이브레인' },
      { name: 'participants', label: '참석자', type: 'text', default: '이브레인', placeholder: '예: 이브레인, 강수구' },
      { name: 'project', label: '연결 프로젝트/고객', type: 'text', placeholder: '예: AI커머스 브레인 PDP' },
      { name: 'agenda', label: '안건', type: 'textarea', placeholder: '오늘 논의할 안건을 줄 단위로 적으세요.' },
      { name: 'minutes', label: '회의록', type: 'textarea', placeholder: '회의 중 나온 내용을 줄 단위로 적으세요.' },
      { name: 'decisions', label: '결정사항', type: 'textarea', placeholder: '결정된 내용만 줄 단위로 정리하세요.' },
      { name: 'nextActions', label: '후속 할일', type: 'textarea', placeholder: '할일 만들 항목을 줄 단위로 적으세요. 예: PDP CTA 문구 수정', help: '줄 단위로 적고 아래 체크박스를 켜면 할일관리에도 자동 추가됩니다.' },
      { name: 'followUpDate', label: '후속일', type: 'date', default: '' },
      { name: 'link', label: '회의 링크/자료', type: 'url', placeholder: 'https://...' },
    ],
    columns: ['title','date','startTime','type','status','owner','project','nextActions'],
    statusOptions: ['예정','진행중','후속필요','완료','보류'],
    filters: { status: ['전체','예정','진행중','후속필요','완료','보류'], type: ['전체','내부회의','고객미팅','강의미팅','제휴미팅','운영점검','아이디어회의'], dateScope: ['전체','오늘','이번주'] },
  },

  profileHistory: {
    collection: 'profileHistory',
    title: '프로필 이력관리',
    empty: '등록된 커리어 이력이 없습니다. 강의, 저서, 컨설팅, 운영채널 이력을 하나씩 기록하세요.',
    fields: [
      { name: 'title', label: '이력/활동명', type: 'text', required: true, placeholder: '예: 전국 순회 생성형 AI 강연 진행' },
      { name: 'versionDate', label: '이력 기준일', type: 'date', default: todayIso() },
      { name: 'status', label: '프로필 반영', type: 'select', options: ['정리필요','반영중','대표이력','증빙필요','보관'] },
      { name: 'purpose', label: '분류/영역', type: 'text', placeholder: '예: 강의, 저서, 컨설팅, 운영채널, 자격' },
      { name: 'docLink', label: '증빙/대표 링크', type: 'url', placeholder: 'https://...' },
      { name: 'lectureFiles', label: '강의자료 파일 업로드', type: 'file', multiple: true, accept: '.pdf,.ppt,.pptx,.doc,.docx,.hwp,.hwpx,.xls,.xlsx,.csv,.txt,.md,.png,.jpg,.jpeg,.webp,.zip', help: 'PDF, PPT, 한글, 이미지, ZIP 등 강의자료를 여러 개 올릴 수 있습니다. 업로드 파일은 대시보드 uploads 폴더에 저장됩니다.' },
      { name: 'sentTo', label: '기관/브랜드/대상', type: 'text', placeholder: '예: 샘플 교육기관, 샘플 이커머스 교육사, 초보셀러, 소상공인' },
      { name: 'sentDate', label: '시작/발생일', type: 'date' },
      { name: 'sentHistory', label: '프로필 활용/제출 기록', type: 'textarea', placeholder: '예: 2026-06-02 | KT 강의 제안용 프로필에 대표이력으로 반영' },
      { name: 'headline', label: '역할/포지션', type: 'text', placeholder: '예: AI·AX 교육 전문가, AI 커머스 강사, 저자' },
      { name: 'summary', label: '이력 설명/성과', type: 'textarea', placeholder: '프로필에 넣을 경력 설명과 성과를 정리하세요.' },
      { name: 'links', label: '관련 채널/자료', type: 'textarea', placeholder: '유튜브 / 블로그 / 카페 / 증빙자료 링크' },
      { name: 'changeMemo', label: '프로필 반영 메모', type: 'textarea', placeholder: '예: 강사 프로필 핵심 이력으로 반영, 증빙자료 필요' },
      { name: 'memo', label: '관리 메모', type: 'textarea', placeholder: '보완할 수치, 증빙, 업데이트할 표현' },
    ],
    columns: ['title','versionDate','status','purpose','docLink','sentTo','sentDate','headline','changeMemo'],
    statusOptions: ['정리필요','반영중','대표이력','증빙필요','보관'],
    filters: { status: ['전체','정리필요','반영중','대표이력','증빙필요','보관'], purpose: ['전체','강의','저서','컨설팅','운영채널','자격','AI강사','AX컨설턴트','기타'], dateScope: ['전체','오늘','이번주'] },
  },

  inquiries: {
    collection: 'customerInquiries',
    title: '고객·문의',
    empty: '등록된 문의가 없습니다.',
    fields: [
      { name: 'name', label: '고객명', type: 'text', required: true },
      { name: 'source', label: '유입', type: 'text', default: 'YouTube' },
      { name: 'status', label: '상태', type: 'select', options: ['신규','대기','처리중','완료','보류'] },
      { name: 'priority', label: '우선순위', type: 'select', options: ['높음','중간','낮음'] },
      { name: 'question', label: '문의 내용', type: 'textarea', required: true },
      { name: 'memo', label: '응대 메모', type: 'textarea' },
    ],
    columns: ['name','source','status','priority','question','memo'],
    statusOptions: ['신규','대기','처리중','완료','보류'],
    filters: { status: ['전체','신규','대기','처리중','완료','보류'], priority: ['전체','높음','중간','낮음'] },
  },
  content: {
    collection: 'contentItems',
    title: '콘텐츠 기획',
    empty: '등록된 콘텐츠가 없습니다.',
    fields: [
      { name: 'title', label: '콘텐츠명', type: 'text', required: true },
      { name: 'sourceTopic', label: '원본 주제', type: 'text', placeholder: '예: AI 상세페이지가 막히는 이유' },
      { name: 'type', label: '채널/형식', type: 'select', options: ['Original','YouTube','Shorts','Blog','Cafe','Meta Ad','SNS','Lecture','Open Kakao'] },
      { name: 'targetGoal', label: '목적', type: 'select', options: ['AI커머스브레인 상품 홍보','강의/교육 콘텐츠','초보셀러 문제 해결','구매자료 안내','커뮤니티 질문 답변'] },
      { name: 'targetAudience', label: '대상', type: 'select', options: ['초보셀러','수강생','구매자료 관심자','카페 회원','AI커머스브레인 구매자'] },
      { name: 'status', label: '상태', type: 'select', options: ['아이디어','원본 작성중','작성중','검수','확장 준비','예약','발행완료','완료','보류'] },
      { name: 'stage', label: '단계', type: 'text', default: '초안' },
      { name: 'due', label: '마감/발행일', type: 'date' },
      { name: 'publishUrl', label: '발행 URL', type: 'url', placeholder: 'https://...' },
      { name: 'syncStatus', label: '자동 수집 상태', type: 'select', options: ['연결 필요','준비됨','수집중','마지막 수집 완료','실패','수동 확인 필요'] },
      { name: 'lastSyncedAt', label: '마지막 수집', type: 'text', placeholder: '예: 2026-06-03 09:00' },
      { name: 'views', label: '조회수', type: 'number', default: '0' },
      { name: 'comments', label: '댓글', type: 'number', default: '0' },
      { name: 'likes', label: '반응', type: 'number', default: '0' },
      { name: 'replyNeeded', label: '답변 필요', type: 'select', options: ['아니오','예'] },
      { name: 'reuseCandidate', label: '재활용 후보', type: 'select', options: ['아니오','예'] },
      { name: 'cta', label: 'CTA', type: 'textarea', placeholder: '구매자료/강의/카페 연결 문구' },
      { name: 'nextAction', label: '다음 액션', type: 'textarea', placeholder: '답변, 재활용, 후속 글 작성 등' },
      { name: 'memo', label: '메모', type: 'textarea' },
    ],
    columns: ['title','type','targetGoal','status','stage','due','syncStatus','views','comments','replyNeeded','reuseCandidate','nextAction'],
    statusOptions: ['아이디어','원본 작성중','작성중','검수','확장 준비','예약','발행완료','완료','보류'],
    filters: { status: ['전체','아이디어','원본 작성중','작성중','검수','확장 준비','예약','발행완료','완료','보류'], type: ['전체','Original','YouTube','Shorts','Blog','Cafe','Meta Ad','SNS','Lecture','Open Kakao'] },
  },
};

const state = {
  data: null,
  googleCalendar: { events: [], meta: { status: 'not-loaded' } },
  gmail: { messages: [], meta: { status: 'not-loaded', account: 'Google Workspace 계정', query: 'in:inbox newer_than:14d' } },
  serverStore: { status: 'not-loaded', itemCount: 0, lastSavedAt: null, error: '', dbPath: '' },
  apiLogs: { status: 'not-loaded', logs: [], error: '' },
  selectedGmailLabel: '받은메일',
  gmailDetail: { status: 'idle', message: null, selectedId: null },
  gmailMessageCache: {},
  gmailSearchCache: {},
  gmailSearchRequestId: 0,
  calendarMonth: currentMonthKey(),
  selectedPublishDate: todayIso(),
  selectedLectureDate: null,
  selectedScheduleEventKey: null,
  schedulePopover: null,
  scheduleSearchOpen: false,
  scheduleFormOpen: false,
  scheduleFocusFilter: '전체',
  sidebarCollapsed: localStorage.getItem(SIDEBAR_STATE_KEY) === '1',
  route: 'dashboard',
  navSearch: '',
  editing: null,
  taskAddOpen: false,
  projectAddOpen: false,
  courseAddOpen: false,
  profileHistoryView: localStorage.getItem('ebrainOS.profileHistoryView') || 'table',
  courseOpsFocus: '전체',
  channelWorkspaceFilters: {},
  youtubeApiStatus: { status: 'idle', message: '', result: null, authStatus: null },
  contentImportStatus: { status: 'idle', channels: [], error: '' },
  publishOpsStatus: { status: 'idle', message: '', result: null, error: '' },
  contentOpsExportStatus: { status: 'idle', export: null, error: '' },
  filters: { query: '', status: '전체', priority: '전체', owner: '전체', type: '전체', format: '전체', purpose: '전체', dateScope: '전체' },
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
let filterRenderTimer = null;
let serverSaveTimer = null;
let serverSaveInFlight = false;
let serverSaveQueued = false;

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function todayIso() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function addDaysIso(delta = 0) {
  const date = new Date(`${todayIso()}T00:00:00`);
  date.setDate(date.getDate() + Number(delta || 0));
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function monthKeyFromDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function currentMonthKey() {
  return monthKeyFromDate(new Date());
}

function monthLabel(monthKey) {
  const [year, month] = monthKey.split('-').map(Number);
  return `${year}년 ${month}월`;
}

function addMonths(monthKey, delta) {
  const [year, month] = monthKey.split('-').map(Number);
  const date = new Date(year, month - 1 + delta, 1);
  return monthKeyFromDate(date);
}

function eventDate(value) {
  if (!value) return '';
  return String(value).slice(0, 10);
}

function normalizeTime(value, fallback = '') {
  const raw = String(value || '').trim();
  const match = raw.match(/^(\d{1,2}):(\d{2})/);
  if (!match) return fallback;
  const hour = Math.min(23, Math.max(0, Number(match[1])));
  const minute = Math.min(59, Math.max(0, Number(match[2])));
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}

function eventDateTime(date, time, fallbackTime = '10:00') {
  const dateValue = String(date || todayIso()).slice(0, 10);
  const timeValue = normalizeTime(time, fallbackTime);
  return `${dateValue}T${timeValue}:00`;
}

function eventTimeLabel(event) {
  const start = normalizeTime(event.startTime) || normalizeTime(String(event.start || '').slice(11, 16));
  const end = normalizeTime(event.endTime) || normalizeTime(String(event.end || '').slice(11, 16));
  if (start && end) return `${start}~${end}`;
  if (start) return start;
  return '시간 미정';
}

function isThisWeek(dateString) {
  if (!dateString) return false;
  const now = new Date();
  const date = new Date(`${dateString}T00:00:00`);
  const day = now.getDay() || 7;
  const monday = new Date(now);
  monday.setDate(now.getDate() - day + 1);
  monday.setHours(0,0,0,0);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23,59,59,999);
  return date >= monday && date <= sunday;
}

async function loadGoogleCalendarEvents() {
  try {
    const response = await fetch('google-calendar-events.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    state.googleCalendar = {
      events: Array.isArray(payload.events) ? payload.events : [],
      meta: { ...(payload.meta || { status: 'loaded' }), clientLoadedAt: new Date().toISOString() },
    };
  } catch (error) {
    state.googleCalendar = { events: [], meta: { status: 'missing', message: error.message } };
  }
}

async function loadGmailMessages(query = state.gmail.meta.query || 'in:inbox newer_than:14d', options = {}) {
  const normalizedQuery = String(query || 'in:inbox newer_than:14d').trim() || 'in:inbox newer_than:14d';
  const force = Boolean(options.force);
  const requestId = (state.gmailSearchRequestId || 0) + 1;
  state.gmailSearchRequestId = requestId;
  const clientCached = state.gmailSearchCache?.[normalizedQuery];
  const cacheAgeMs = clientCached?.storedAt ? Date.now() - clientCached.storedAt : Infinity;
  if (!force && clientCached && cacheAgeMs < 60_000) {
    state.gmail = {
      messages: clientCached.messages || [],
      meta: { ...(clientCached.meta || {}), status: 'loaded', query: normalizedQuery, cached: true, cacheSource: 'browser', cacheAgeSec: Math.round(cacheAgeMs / 100) / 10, loadedAt: new Date().toISOString() },
    };
    if (state.route === 'emails') renderEmailManagement();
    return;
  }
  state.gmail.meta = { ...state.gmail.meta, status: 'loading', query: normalizedQuery, loadingStartedAt: new Date().toISOString(), usingPreviousResults: (state.gmail.messages || []).length > 0 };
  if (state.route === 'emails') renderEmailManagement();
  try {
    const params = new URLSearchParams({ q: normalizedQuery, max: '20' });
    const response = await fetch(`/api/gmail/search?${params.toString()}`, { cache: 'no-store' });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) throw new Error(payload.error || `HTTP ${response.status}`);
    if (state.gmailSearchRequestId !== requestId) return;
    const messages = payload.messages || [];
    const meta = { status: 'loaded', account: payload.account || 'Google Workspace 계정', query: payload.query || normalizedQuery, count: payload.count || 0, cached: Boolean(payload.cached), cacheSource: payload.cached ? 'server' : 'gmail', cacheAgeSec: payload.cacheAgeSec, loadedAt: new Date().toISOString() };
    state.gmail = { messages, meta };
    state.gmailSearchCache = { ...(state.gmailSearchCache || {}), [normalizedQuery]: { messages, meta, storedAt: Date.now() } };
  } catch (error) {
    if (state.gmailSearchRequestId !== requestId) return;
    state.gmail = { messages: [], meta: { ...state.gmail.meta, status: 'error', error: error.message, account: 'Google Workspace 계정', query: normalizedQuery } };
  }
  if (state.route === 'emails') renderEmailManagement();
}

async function loadGmailMessage(id) {
  const messageId = String(id || '').trim();
  if (!messageId) return;
  const cachedMessage = state.gmailMessageCache?.[messageId];
  if (cachedMessage) {
    state.gmailDetail = { status: 'loaded', message: cachedMessage, selectedId: messageId, loadedAt: new Date().toISOString(), cached: true };
    if (state.route === 'emails') renderEmailManagement();
    return;
  }
  state.gmailDetail = { status: 'loading', message: null, selectedId: messageId };
  if (state.route === 'emails') renderEmailManagement();
  try {
    const params = new URLSearchParams({ id: messageId });
    const response = await fetch(`/api/gmail/message?${params.toString()}`, { cache: 'no-store' });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) throw new Error(payload.error || `HTTP ${response.status}`);
    state.gmailMessageCache = { ...(state.gmailMessageCache || {}), [messageId]: payload.message || {} };
    state.gmailDetail = { status: 'loaded', message: payload.message || {}, selectedId: messageId, loadedAt: new Date().toISOString(), cached: Boolean(payload.cached) };
  } catch (error) {
    state.gmailDetail = { status: 'error', message: null, selectedId: messageId, error: error.message };
  }
  if (state.route === 'emails') renderEmailManagement();
}

function closeGmailMessage() {
  state.gmailDetail = { status: 'idle', message: null, selectedId: null };
  renderEmailManagement();
}

async function seedFromSample() {
  const response = await fetch('sample-data.json', { cache: 'no-store' });
  if (!response.ok) throw new Error(`sample-data.json 로드 실패: ${response.status}`);
  const sample = await response.json();
  normalizeData(sample);
  return sample;
}

async function ensureProfileHistorySeed(data) {
  normalizeData(data);
  if (Array.isArray(data.profileHistory) && data.profileHistory.length > 0) return data;
  try {
    const sample = await seedFromSample();
    if (Array.isArray(sample.profileHistory) && sample.profileHistory.length > 0) {
      data.profileHistory = sample.profileHistory.map((item) => ({ ...item }));
      console.info(`profileHistory seed restored: ${data.profileHistory.length} career records`);
    }
  } catch (error) {
    console.warn('profileHistory seed restore failed', error);
  }
  normalizeData(data);
  return data;
}

function normalizeData(data) {
  const defaults = {
    tasks: [], projects: [], lectures: [], courseItems: [], profileHistory: [], products: [], conversionMetrics: [], contentItems: [],
    communityPosts: [], customerInquiries: [], meetings: [], emails: [], automationRuns: [], researchItems: [], ideaItems: [], assets: [],
    settings: { storageKey: STORAGE_KEY, checklist: [] },
  };
  Object.entries(defaults).forEach(([key, value]) => {
    if (data[key] === undefined) data[key] = Array.isArray(value) ? [] : value;
  });
  data.projects.forEach((item) => {
    if (!item.status) item.status = '기획';
    if (!item.priority) item.priority = '중간';
    if (!item.owner) item.owner = '이브레인';
    if (!item.targetDate && item.due) item.targetDate = item.due;
    if (!item.goal && item.memo) item.goal = item.memo;
  });
  data.lectures.forEach((item) => {
    if (!item.status) item.status = '예정';
    if (item.status === '대기') item.status = '예정';
    if (item.status === '준비중') item.status = '진행중';
    if (!item.materialStatus) item.materialStatus = item.status === '완료' ? '완료' : '없음';
    if (item.materialStatus === '미정') item.materialStatus = '없음';
    if (!item.mailStatus) item.mailStatus = item.status === '완료' ? '완료' : '없음';
    if (['미작성','초안','발송준비'].includes(item.mailStatus)) item.mailStatus = item.mailStatus === '발송준비' ? '필요' : '없음';
  });
  data.profileHistory.forEach((item) => {
    if (!item.status) item.status = '정리필요';
    if (!item.versionDate) item.versionDate = item.sentDate || todayIso();
    if (!item.title && item.headline) item.title = item.headline;
    if (!item.sentHistory && item.sentTo) item.sentHistory = `${item.sentDate || item.versionDate || todayIso()} | ${item.sentTo} | ${item.status || '기록'} | ${item.purpose || ''}`;
  });
  data.courseItems.forEach((item) => {
    if (!item.status) item.status = '기획중';
    if (!item.format) item.format = 'VOD';
    if (!item.materialStatus) item.materialStatus = '준비중';
    if (!item.mailStatus) item.mailStatus = '작성필요';
    if (!item.sessionCount) item.sessionCount = '1';
    if (!item.startTime) item.startTime = '10:00';
    if (!item.endTime) item.endTime = '11:00';
    if (!item.scheduleLabelColor) item.scheduleLabelColor = '강의-청록';
  });
  data.ideaItems.forEach((item) => {
    if (!item.title && item.name) item.title = item.name;
    if (!item.type) item.type = item.source || '콘텐츠';
    if (!item.status) item.status = '검토';
    if (!item.priority) item.priority = '중간';
    if (!item.score) item.score = ideaScore(item);
    if (!item.createdAt) item.createdAt = todayIso();
  });
  data.contentItems.forEach((item) => {
    if (!item.sourceTopic) item.sourceTopic = item.title || '';
    if (!item.platform) item.platform = contentPlatformFromType(item.type);
    if (!item.targetGoal) item.targetGoal = 'AI커머스브레인 상품 홍보';
    if (!item.targetAudience) item.targetAudience = '초보셀러';
    if (!item.syncStatus) item.syncStatus = ['YouTube','Shorts','Blog','Cafe','SNS','Meta Ad'].includes(item.type) ? '연결 필요' : '수동 확인 필요';
    if (!item.publishStatus) item.publishStatus = ['예약','발행완료','완료'].includes(item.status) ? item.status : '초안';
    if (item.views === undefined) item.views = 0;
    if (item.comments === undefined) item.comments = 0;
    if (item.likes === undefined) item.likes = 0;
    if (item.thumbnailCtr === undefined && item.ctr !== undefined) item.thumbnailCtr = item.ctr;
    if (item.thumbnailCtr === undefined && item.clickThroughRate !== undefined) item.thumbnailCtr = item.clickThroughRate;
    if (item.thumbnailImpressions === undefined && item.impressions !== undefined) item.thumbnailImpressions = item.impressions;
    if (item.thumbnailImpressions === undefined && item.reachImpressions !== undefined) item.thumbnailImpressions = item.reachImpressions;
    if (item.uniqueViewers === undefined && item.uniqueViewer !== undefined) item.uniqueViewers = item.uniqueViewer;
    if (item.uniqueViewers === undefined && item.analyticsUniqueViewers !== undefined) item.uniqueViewers = item.analyticsUniqueViewers;
    if (item.watchTimeMinutes === undefined && item.watchMinutes !== undefined) item.watchTimeMinutes = item.watchMinutes;
    if (item.watchTimeMinutes === undefined && item.estimatedMinutesWatched !== undefined) item.watchTimeMinutes = item.estimatedMinutesWatched;
    if (item.type === 'Blog') {
      if (item.blogStatsUrl === undefined) item.blogStatsUrl = item.naverStatsUrl || '';
      if (item.inflowKeywords === undefined) item.inflowKeywords = item.searchKeywords || item.keywords || '';
      if (item.inflowRoutes === undefined) item.inflowRoutes = item.trafficSources || '';
      if (item.blogStatsImportedAt === undefined) item.blogStatsImportedAt = '';
    }
    if (!item.aiBrief) item.aiBrief = '';
    if (!item.draftBody) item.draftBody = '';
    if (!item.replyNeeded) item.replyNeeded = '아니오';
    if (!item.reuseCandidate) item.reuseCandidate = '아니오';
    if (!item.nextAction) item.nextAction = item.status === '완료' || item.status === '발행완료' ? '반응 확인' : '초안 보완';
  });
  data.communityPosts.forEach((item) => {
    if (!item.channel) item.channel = 'Open Kakao';
    if (!item.status) item.status = '확인필요';
    if (!item.date) item.date = item.createdAt || todayIso();
    if (item.memo === undefined || item.memo === null) item.memo = '';
    if (!item.nextAction) item.nextAction = item.status === '완료' ? '완료' : '답변 또는 콘텐츠 전환 검토';
  });
  data.meetings.forEach((item) => {
    if (!item.type) item.type = '내부회의';
    if (!item.status) item.status = '예정';
    if (!item.owner) item.owner = '이브레인';
    if (!item.startTime) item.startTime = '10:00';
    if (!item.endTime) item.endTime = '11:00';
  });
  if (!data.settings) data.settings = { storageKey: STORAGE_KEY, checklist: [] };
  if (!Array.isArray(data.settings.checklist)) data.settings.checklist = [];
  if (!data.settings.contentOpsIntegrations || typeof data.settings.contentOpsIntegrations !== 'object') data.settings.contentOpsIntegrations = {};
}

function loadData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;
  try {
    const parsed = JSON.parse(stored);
    normalizeData(parsed);
    return parsed;
  } catch (error) {
    console.warn('localStorage JSON parse failed, sample will be loaded', error);
    return null;
  }
}

function dashboardItemCount(data = state.data) {
  if (!data) return 0;
  return Object.values(data).filter(Array.isArray).reduce((acc, arr) => acc + arr.length, 0);
}

async function loadServerData() {
  try {
    const response = await fetch('/api/dashboard/data', { cache: 'no-store' });
    if (!response.ok) throw new Error(`DB 로드 실패: ${response.status}`);
    const payload = await response.json();
    if (!payload.ok) throw new Error(payload.error || 'DB 로드 실패');
    const data = payload.data || null;
    if (data) normalizeData(data);
    state.serverStore = {
      status: 'loaded',
      itemCount: Number(payload.itemCount || dashboardItemCount(data)),
      lastSavedAt: payload.loadedAt || null,
      error: '',
      dbPath: payload.dbPath || '',
    };
    return data;
  } catch (error) {
    state.serverStore = { ...state.serverStore, status: 'error', error: error.message || String(error) };
    console.warn('dashboard DB load failed; using localStorage/sample fallback', error);
    return null;
  }
}

async function flushServerSave(reason = 'normal-save') {
  if (!state.data) return null;
  if (serverSaveInFlight) {
    serverSaveQueued = true;
    return null;
  }
  serverSaveInFlight = true;
  try {
    const response = await fetch('/api/dashboard/save-all', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reason, data: state.data }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) throw new Error(payload.error || `DB 저장 실패: ${response.status}`);
    state.serverStore = {
      status: 'saved',
      itemCount: Number(payload.itemCount || dashboardItemCount()),
      lastSavedAt: payload.updatedAt || new Date().toISOString(),
      error: '',
      dbPath: payload.dbPath || state.serverStore.dbPath || '',
    };
    return payload;
  } catch (error) {
    state.serverStore = { ...state.serverStore, status: 'error', error: error.message || String(error) };
    console.warn('dashboard DB save failed', error);
    return null;
  } finally {
    serverSaveInFlight = false;
    if (serverSaveQueued) {
      serverSaveQueued = false;
      queueServerSave('queued-save', 250);
    }
  }
}

function queueServerSave(reason = 'normal-save', delay = 800) {
  clearTimeout(serverSaveTimer);
  serverSaveTimer = setTimeout(() => {
    flushServerSave(reason).then(() => {
      if (state.route === 'settings') render();
    });
  }, delay);
}

async function createServerSnapshot(reason = 'manual-snapshot') {
  const response = await fetch('/api/dashboard/snapshot', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ reason, data: state.data }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload.ok) throw new Error(payload.error || `스냅샷 실패: ${response.status}`);
  state.serverStore = { ...state.serverStore, status: 'saved', itemCount: dashboardItemCount(), error: '' };
  return payload.snapshot;
}

async function loadApiLogs(limit = 12) {
  try {
    const response = await fetch(`/api/dashboard/api-logs?limit=${encodeURIComponent(limit)}`);
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) throw new Error(payload.error || `API 로그 조회 실패: ${response.status}`);
    state.apiLogs = { status: 'loaded', logs: Array.isArray(payload.logs) ? payload.logs : [], error: '' };
    return state.apiLogs.logs;
  } catch (error) {
    state.apiLogs = { ...state.apiLogs, status: 'error', error: error.message || String(error) };
    console.warn('dashboard API log load failed', error);
    return [];
  }
}

function saveData(data = state.data) {
  normalizeData(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  queueServerSave('normal-save');
}

async function resetData() {
  state.data = await seedFromSample();
  saveData();
  state.editing = null;
  render();
  toast('샘플 데이터로 초기화했습니다.');
}

function getCollection(name) {
  return state.data?.[name] || [];
}

function upsertItem(collection, item) {
  const list = getCollection(collection);
  const index = list.findIndex((entry) => entry.id === item.id);
  if (index >= 0) list[index] = { ...list[index], ...item };
  else list.unshift(item);
  saveData();
}

function deleteItem(collection, id) {
  state.data[collection] = getCollection(collection).filter((entry) => entry.id !== id);
  saveData();
}

function inquiryTaskTitle(inquiry) {
  const source = inquiry.source ? ` · ${inquiry.source}` : '';
  return `[문의응대] ${inquiry.name || '고객'}${source}`;
}

function inquiryTaskMemo(inquiry) {
  return [
    `문의 ID: ${inquiry.id}`,
    inquiry.question ? `문의: ${inquiry.question}` : '',
    inquiry.memo ? `응대 메모: ${inquiry.memo}` : '',
    '고객·문의에서 자동 생성/동기화됨'
  ].filter(Boolean).join('\n');
}

function syncInquiryLinkedTask(inquiry, enabled = true) {
  if (!enabled) return { skipped: true };
  const existing = inquiry.taskId ? getCollection('tasks').find((task) => task.id === inquiry.taskId) : null;
  const taskId = existing?.id || makeId('tasks');
  const task = {
    ...(existing || {}),
    id: taskId,
    title: inquiryTaskTitle(inquiry),
    owner: existing?.owner || inquiry.owner || '이브레인',
    status: inquiry.status === '완료' ? '완료' : (existing?.status === '완료' ? '진행중' : (existing?.status || '대기')),
    priority: inquiry.priority || existing?.priority || '중간',
    due: existing?.due || todayIso(),
    memo: inquiryTaskMemo(inquiry),
    sourceType: 'customerInquiry',
    sourceId: inquiry.id,
  };
  upsertItem('tasks', task);
  inquiry.taskId = taskId;
  inquiry.taskLinkedAt = new Date().toISOString();
  return { taskId };
}

function deleteInquiryLinkedTask(inquiry) {
  if (!inquiry?.taskId) return false;
  const task = getCollection('tasks').find((entry) => entry.id === inquiry.taskId);
  if (task?.sourceType === 'customerInquiry' && task?.sourceId === inquiry.id) {
    deleteItem('tasks', inquiry.taskId);
    return true;
  }
  return false;
}

function makeId(collection) {
  const prefix = { tasks: 'task', lectures: 'lec', courseItems: 'course', customerInquiries: 'inq', meetings: 'meet' }[collection] || 'item';
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
}

function toast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2400);
}

function badge(value) {
  const dangerValues = ['높음','신규','주의','실패','보류'];
  const warnValues = ['대기','준비중','작성중','검수','예약','처리중','필요','미작성','미정'];
  const cls = dangerValues.includes(value) ? 'danger' : warnValues.includes(value) ? 'warn' : value === '완료' || value === '성공' ? '' : 'navy';
  return `<span class="badge ${cls}">${escapeHtml(value || '-')}</span>`;
}

function renderSidebarChrome() {
  const shell = document.querySelector('.app-shell');
  const toggle = document.querySelector('[data-sidebar-toggle]');
  if (!shell || !toggle) return;
  shell.classList.toggle('sidebar-collapsed', state.sidebarCollapsed);
  toggle.setAttribute('aria-label', state.sidebarCollapsed ? '왼쪽 메뉴 펼치기' : '왼쪽 메뉴 접기');
  toggle.setAttribute('aria-expanded', String(!state.sidebarCollapsed));
  toggle.setAttribute('title', state.sidebarCollapsed ? '왼쪽 메뉴 펼치기' : '왼쪽 메뉴 접기');
  toggle.textContent = state.sidebarCollapsed ? '›' : '‹';
}

function renderNav() {
  const query = state.navSearch.trim().toLowerCase();
  const quickRoutes = [
    { key: 'dashboard', label: '관제판', icon: '⌂' },
    { key: 'tasks', label: '오늘 할일', icon: '✓' },
    { key: 'inquiries', label: '리드', icon: '☏' },
    { key: 'content', label: '콘텐츠', icon: '✎' },
  ];
  const groupsHtml = MENU_GROUPS.map((group) => {
    const items = query
      ? group.items.filter((item) => `${group.group} ${item.label}`.toLowerCase().includes(query))
      : group.items;
    if (!items.length) return '';
    const isActiveGroup = group.items.some((item) => item.key === state.route);
    const openAttr = query || group.defaultOpen || isActiveGroup ? 'open' : '';
    return `
      <details class="nav-group" ${openAttr}>
        <summary class="nav-group-title"><span class="nav-group-icon">${escapeHtml(group.icon || '•')}</span><span>${escapeHtml(group.group)}</span></summary>
        <div class="nav-group-items">
          ${items.map((item) => {
            const badgeText = navBadgeForRoute(item.key);
            return `
              <button class="nav-item ${state.route === item.key ? 'active' : ''}" data-route="${item.key}" title="${escapeHtml(item.label)}">
                <span class="nav-item-main"><span class="nav-icon">${escapeHtml(item.icon || '•')}</span><span>${escapeHtml(item.label)}</span></span>
                ${badgeText ? `<span class="nav-badge">${escapeHtml(badgeText)}</span>` : ''}
              </button>
            `;
          }).join('')}
        </div>
      </details>
    `;
  }).join('') || '<p class="nav-empty">검색 결과가 없습니다.</p>';

  $('#sidebarNav').innerHTML = `
    <div class="sidebar-quick" aria-label="빠른 실행">
      ${quickRoutes.map((item) => `<button class="quick-route ${state.route === item.key ? 'active' : ''}" data-route="${item.key}"><span>${escapeHtml(item.icon)}</span>${escapeHtml(item.label)}</button>`).join('')}
    </div>
    <label class="nav-search-wrap"><span>메뉴 검색</span><input class="nav-search" data-nav-search value="${escapeHtml(state.navSearch)}" placeholder="예: 리드, 콘텐츠" /></label>
    ${groupsHtml}
  `;
}

function navBadgeForRoute(route) {
  const stats = dashboardStats();
  const badges = {
    tasks: stats.openTasks,
    projects: getCollection('projects').filter((p)=>p.status !== '완료').length,
    inquiries: stats.openInquiries,
    customers: getCollection('customerInquiries').length,
    courseMgmt: getCollection('courseItems').length,
    lectures: stats.weekLectures,
    content: stats.plannedContent,
    publishCalendar: getCollection('contentItems').filter((c)=>['예약','검수','작성중','확장 준비'].includes(c.status) || c.due).length,
    reactionCheck: getCollection('contentItems').filter((c)=>c.replyNeeded === '예' || c.reuseCandidate === '예' || Number(c.comments || 0) > 0).length,
    openChat: getCollection('communityPosts').filter((c)=>String(c.channel || '').includes('Open')).length,
    membership: getCollection('communityPosts').filter((c)=>['멤버쉽','Membership','Discord'].some((channel)=>String(c.channel || '').includes(channel))).length,
    marketing: stats.adWarnings,
  };
  if (channelConfigByKey(route)) return String(getChannelStats(route).attentionCount || '');
  const value = badges[route];
  return value ? String(value) : '';
}

function setRoute(route) {
  state.route = ROUTE_META[route] ? route : 'dashboard';
  state.editing = null;
  state.filters = { query: '', status: '전체', priority: '전체', type: '전체', format: '전체', purpose: '전체', dateScope: '전체' };
  location.hash = state.route;
  render();
}

function renderHeader() {
  const meta = ROUTE_META[state.route] || ROUTE_META.dashboard;
  $('#pageEyebrow').textContent = meta.eyebrow;
  $('#pageTitle').textContent = meta.title;
  $('#pageDescription').textContent = meta.desc;
}

function dashboardStats() {
  const tasks = getCollection('tasks');
  const lectures = getCollection('lectures');
  const inquiries = getCollection('customerInquiries');
  const autos = getCollection('automationRuns');
  const metrics = getCollection('conversionMetrics');
  const contents = getCollection('contentItems');
  return {
    openTasks: tasks.filter((t) => t.status !== '완료').length,
    weekLectures: lectures.filter((l) => l.date === todayIso() || isThisWeek(l.date)).length,
    openInquiries: inquiries.filter((i) => ['신규','대기','처리중'].includes(i.status)).length,
    autoWarnings: autos.filter((a) => ['주의','실패'].includes(a.status)).length,
    adWarnings: metrics.filter((m) => Number(m.spend || 0) > Number(m.revenue || 0) * 0.45 || Number(m.purchases || 0) <= 3).length,
    plannedContent: contents.filter((c) => c.status !== '완료').length,
  };
}

function renderKpis() {
  const stats = dashboardStats();
  const channelKpiMap = CONTENT_CHANNELS.reduce((acc, channel) => {
    const channelStats = getChannelStats(channel.key);
    acc[channel.key] = [
      ['발행 기록', channelStats.publishedCount, 'URL/발행완료'],
      ['답변 필요', channelStats.replyCount, '댓글/문의'],
      ['재활용 후보', channelStats.reuseCount, '후속 소재'],
      ['오늘 체크', channelStats.attentionCount, '먼저 볼 운영 항목'],
    ];
    return acc;
  }, {});
  const kpis = {
    dashboard: [
      ['오늘 미완료 할일', stats.openTasks, '완료 전 업무'],
      ['이번 주 일정', stats.weekLectures, '오늘/이번 주 일정'],
      ['미응답 문의', stats.openInquiries, '신규·대기·처리중'],
      ['자동화/광고 경고', stats.autoWarnings + stats.adWarnings, '주의 필요'],
    ],
    tasks: [['미완료', stats.openTasks, '완료 전 할일'], ['높음', getCollection('tasks').filter(t=>t.priority==='높음'&&t.status!=='완료').length, '우선순위'], ['오늘 마감', getCollection('tasks').filter(t=>t.due===todayIso()).length, '마감일'], ['전체', getCollection('tasks').length, '저장된 할일']],
    courseMgmt: [['운영 강의', getCollection('courseItems').filter(c=>['운영중','판매중'].includes(c.status)).length, '진행/판매'], ['준비 필요', getCollection('courseItems').filter(c=>!['완료'].includes(c.materialStatus)).length, '자료'], ['공지 필요', getCollection('courseItems').filter(c=>['작성필요','발송준비'].includes(c.mailStatus)).length, '안내/메일'], ['전체', getCollection('courseItems').length, '강의']],
    lectures: [['이번 주', stats.weekLectures, '일정'], ['진행 전/중', getCollection('lectures').filter(l=>l.status!=='완료').length, '미완료'], ['준비 필요', getCollection('lectures').filter(l=>l.materialStatus && !['없음','완료'].includes(l.materialStatus)).length, '준비물'], ['전체', getCollection('lectures').length, '일정']],
    inquiries: [['미응답', stats.openInquiries, '응대 필요'], ['높음', getCollection('customerInquiries').filter(i=>i.priority==='높음'&&i.status!=='완료').length, '우선'], ['구매/자료 문의', getCollection('customerInquiries').filter(i=>`${i.question} ${i.memo}`.includes('자료') || `${i.question} ${i.memo}`.includes('구매')).length, '전환 후보'], ['전체', getCollection('customerInquiries').length, '문의']],
    content: [['제작중', getContentTodayCreateItems().length, '원본/초안'], ['검수 필요', getCollection('contentItems').filter(c=>['검수','발행 준비'].includes(c.status)).length, '발행 전'], ['발행 준비', getCollection('contentItems').filter(c=>['예약','발행 준비'].includes(c.status)).length, '캘린더 이동'], ['제작 채널', '4채널', '유튜브·블로그·카페·스레드']],
    publishCalendar: [['오늘 등록', getCollection('contentItems').filter(c=>isContentCoreChannel(c) && contentDate(c) === todayIso()).length, 'SNS 일정'], ['이번 주', getCollection('contentItems').filter(c=>isContentCoreChannel(c) && isThisWeek(contentDate(c))).length, '등록/예약'], ['누락 위험', getCollection('contentItems').filter(c=>isContentCoreChannel(c) && !contentDate(c)).length, '날짜 없음'], ['발행완료', getCollection('contentItems').filter(c=>isContentCoreChannel(c) && ['발행완료','완료'].includes(c.status)).length, 'SNS 게시']],
    reactionCheck: [['답변 필요', getContentReactionItems().filter(c=>c.replyNeeded === '예').length, '댓글/문의'], ['재활용 후보', getContentReactionItems().filter(c=>c.reuseCandidate === '예').length, '후속 콘텐츠'], ['댓글 합계', sumContentMetric('comments'), '1차 채널'], ['조회수 합계', sumContentMetric('views'), '자동수집 예정']],
    ideaMemo: [['전체 아이디어', getCollection('ideaItems').length, '저장됨'], ['검토 필요', getCollection('ideaItems').filter(i=>['검토','보류'].includes(i.status)).length, '판단 대기'], ['실행 후보', getCollection('ideaItems').filter(i=>i.status==='실행후보' || Number(i.score || 0) >= 8).length, '우선 검토'], ['전환 완료', getCollection('ideaItems').filter(i=>i.status==='전환완료' || i.convertedTo).length, '할일/콘텐츠/프로젝트']],
    conversion: [['방문자', sum('conversionMetrics','visitors'), '전체'], ['리드', sum('conversionMetrics','leads'), '무료자료'], ['구매', sum('conversionMetrics','purchases'), '전환'], ['광고비', formatWon(sum('conversionMetrics','spend')), '집행']],
    ...channelKpiMap,
  };
  const routeKpis = kpis[state.route] || [
    ['저장 항목', countCurrentRouteItems(), '현재 화면'],
    ['localStorage', 'ON', STORAGE_KEY],
    ['JSON', '백업 가능', '전체 데이터'],
    ['CSV', '내보내기', '현재 화면'],
  ];
  $('#kpiCards').innerHTML = routeKpis.map(([label, value, desc]) => `
    <article class="kpi-card"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong><em>${escapeHtml(desc)}</em></article>
  `).join('');
}

function sum(collection, key) {
  return getCollection(collection).reduce((acc, item) => acc + Number(item[key] || 0), 0);
}

function formatWon(value) {
  return `${Number(value || 0).toLocaleString('ko-KR')}원`;
}

function countCurrentRouteItems() {
  const map = {
    products:'products', marketing:'conversionMetrics', ideaMemo:'ideaItems', inquiries:'customerInquiries', customers:'customerInquiries',
    projects:'projects', tasks:'tasks', courseMgmt:'courseItems', profileHistory:'profileHistory', lectures:'lectures', meetings:'meetings', emails:'emails',
    content:'contentItems', youtube:'contentItems', blog:'contentItems', naverCafe:'contentItems', threads:'contentItems', openChat:'communityPosts', membership:'communityPosts',
    assets:'assets', community:'communityPosts', automation:'automationRuns', research:'researchItems', sns:'contentItems', lectureAssets:'assets'
  };
  if (channelConfigByKey(state.route)) return getChannelContentItems(state.route).length;
  return getCollection(map[state.route] || 'tasks').length;
}

function renderDashboard() {
  const stats = dashboardStats();
  const urgentTasks = getCollection('tasks').filter((t) => t.status !== '완료' && (t.priority === '높음' || t.due <= todayIso())).slice(0, 5);
  const prepLectures = getCollection('lectures').filter((l) => l.status !== '완료' || l.materialStatus !== '완료').slice(0, 5);
  const openInquiries = getCollection('customerInquiries').filter((i) => ['신규','대기','처리중'].includes(i.status)).slice(0, 5);
  const activeContent = getCollection('contentItems').filter((c) => c.status !== '완료').slice(0, 5);
  const failedAutos = getCollection('automationRuns').filter((a) => ['주의','실패'].includes(a.status)).slice(0, 5);
  const focusScore = Math.max(0, 100 - (stats.openTasks * 4) - (stats.openInquiries * 6) - ((stats.autoWarnings + stats.adWarnings) * 10));
  $('#routeContent').innerHTML = `
    <div class="section-head command-head">
      <div><h2>오늘 실행 관제판</h2><p>상품 → 마케팅 → 리드 → 콘텐츠 흐름을 바로 실행하도록 재구성했습니다.</p></div>
      <div class="command-score"><span>운영 안정도</span><strong>${focusScore}</strong><em>/100</em></div>
    </div>
    <div class="command-strip">
      <button data-route="tasks"><strong>${stats.openTasks}</strong><span>미완료 할일</span></button>
      <button data-route="inquiries"><strong>${stats.openInquiries}</strong><span>응답할 리드</span></button>
      <button data-route="content"><strong>${stats.plannedContent}</strong><span>제작 콘텐츠</span></button>
      <button data-route="marketing"><strong>${stats.autoWarnings + stats.adWarnings}</strong><span>주의 신호</span></button>
    </div>
    <div class="flow-cards">
      ${workflowCard('상품관리', '팔 상품과 구매 명분 점검', 'products', '상품 보기')}
      ${workflowCard('마켓팅관리', '광고비·전환·리드 점검', 'marketing', '전환 보기')}
      ${workflowCard('리드관리', '미응답 문의 우선 처리', 'inquiries', '리드 처리')}
      ${workflowCard('콘텐츠 제작소', '오늘 발행할 소재 정리', 'content', '콘텐츠 제작')}
    </div>
    <div class="grid-2 ops-grid">
      <div class="panel soft-panel"><h3>오늘 먼저 할 일</h3>${miniList(urgentTasks, (t)=>`${badge(t.priority)} ${escapeHtml(t.title)}<br><small>${escapeHtml(t.due)} · ${escapeHtml(t.status)}</small>`, '긴급 할일 없음')}</div>
      <div class="panel"><h3>미응답 리드</h3>${miniList(openInquiries, (i)=>`${badge(i.status)} ${escapeHtml(i.name)}<br><small>${escapeHtml(i.question)}</small>`, '미응답 문의 없음')}</div>
      <div class="panel"><h3>다가오는 일정</h3>${miniList(prepLectures, (l)=>`${badge(l.status)} ${escapeHtml(l.title)}<br><small>${escapeHtml(l.date)} · 준비물 ${escapeHtml(l.materialStatus || '없음')}</small>`, '다가오는 일정 없음')}</div>
      <div class="panel"><h3>콘텐츠 진행</h3>${miniList(activeContent, (c)=>`${badge(c.status)} ${escapeHtml(c.title)}<br><small>${escapeHtml(c.type)} · ${escapeHtml(c.due || '마감 미정')}</small>`, '진행 콘텐츠 없음')}</div>
    </div>
    <div class="panel signal-panel"><h3>자동화/마케팅 경고</h3>${miniList(failedAutos, (a)=>`${badge(a.status)} ${escapeHtml(a.name)}<br><small>${escapeHtml(a.lastRun)} · ${escapeHtml(a.memo)}</small>`, '자동화 경고 없음')}</div>
  `;
}

function workflowCard(title, desc, route, cta) {
  return `<article class="workflow-card"><span>${escapeHtml(title)}</span><p>${escapeHtml(desc)}</p><button class="soft" data-route="${escapeHtml(route)}">${escapeHtml(cta)}</button></article>`;
}

function miniList(items, renderItem, empty) {
  if (!items.length) return `<p class="empty">${escapeHtml(empty)}</p>`;
  return `<div class="mini-list">${items.map((item)=>`<div class="check-item"><span>${renderItem(item)}</span></div>`).join('')}</div>`;
}

function applyFilters(items, config) {
  const query = state.filters.query.trim().toLowerCase();
  return items.filter((item) => {
    if (query && !Object.values(item).join(' ').toLowerCase().includes(query)) return false;
    if (state.filters.status !== '전체' && item.status !== state.filters.status) return false;
    if (config.filters?.priority && state.filters.priority !== '전체' && item.priority !== state.filters.priority) return false;
    if (state.filters.owner && state.filters.owner !== '전체' && item.owner !== state.filters.owner) return false;
    if (config.filters?.type && state.filters.type !== '전체' && item.type !== state.filters.type) return false;
    if (config.filters?.format && (state.filters.format || '전체') !== '전체' && item.format !== state.filters.format) return false;
    if (config.filters?.purpose && (state.filters.purpose || '전체') !== '전체') {
      const purposeValue = config.collection === 'profileHistory' ? profilePurposeCategory(item) : (item.purpose || '기타');
      if (purposeValue !== state.filters.purpose) return false;
    }
    if (config.filters?.dateScope && state.filters.dateScope !== '전체') {
      const scopedDate = config.collection === 'tasks' ? item.due : config.collection === 'projects' ? item.targetDate : config.collection === 'profileHistory' ? item.versionDate : item.date;
      if (state.filters.dateScope === '오늘' && scopedDate !== todayIso()) return false;
      if (state.filters.dateScope === '이번주' && !isThisWeek(scopedDate)) return false;
    }
    return true;
  });
}



function operatingRhythmEvents(monthKey) {
  const seeds = [
    [1,'10:00','11:00','AI 커머스 상세페이지 초안 리뷰','콘텐츠','진행중'],
    [1,'14:00','15:00','카페 공지/구매 CTA 점검','Cafe','대기'],
    [6,'10:00','11:00','무료 체크리스트 랜딩 문구 작성','자료','진행중'],
    [6,'13:00','14:00','메타 픽셀 이벤트 확인','Meta','대기'],
    [7,'10:00','10:30','자료 패키지 FAQ 정리','Cafe','대기'],
    [7,'15:00','16:00','리타겟팅 소재 문제공감형 제작','Meta','진행중'],
    [8,'10:30','11:30','구매자 온보딩 메일 초안','Email','초안'],
    [8,'14:00','15:00','상세페이지 증거 이미지 체크','PDP','진행중'],
    [9,'11:00','12:00','AI 질문 환영 공지 리마인드','Community','예약'],
    [10,'10:00','10:30','주간 KPI 기준 확인','KPI','대기'],
    [11,'10:00','11:00','유튜브 설명란 CTA 통일','YouTube','진행중'],
    [11,'13:00','14:00','자료 신청자 맞춤타겟 정리','Meta','대기'],
    [12,'10:00','11:00','무료 PDF 목차 보강','자료','진행중'],
    [12,'15:00','16:00','미구매자 리마인드 카피','Email','초안'],
    [13,'10:30','11:30','카페 질문 답변 묶음 작성','Cafe','진행중'],
    [14,'10:00','11:00','리타겟팅 소재 증거형 제작','Meta','진행중'],
    [14,'14:00','15:00','구매 불안 해소 문구 정리','PDP','대기'],
    [15,'09:30','10:00','오늘 핵심 일정 점검','운영','진행중'],
    [15,'11:00','12:00','자료 패키지 구매 흐름 QA','Cafe24','진행중'],
    [15,'16:00','17:00','리드 응대/문의 정리','리드관리','대기'],
    [16,'10:00','11:00','AI커머스 강의안 업데이트','Lecture','준비중'],
    [16,'14:00','15:00','커뮤니티 뉴스 선별','Discord','예약'],
    [17,'10:00','10:30','주간 회고/다음 액션 정리','운영','대기'],
    [22,'11:00','12:00','구매자료 활용 순서 안내','Discord','예약'],
    [23,'10:00','11:00','광고소재 안심형 점검','Meta','대기'],
    [25,'14:00','15:00','초보셀러 Q&A 수집','Cafe','대기'],
    [26,'10:00','11:00','PDP 후반 불안해소 섹션 수정','PDP','진행중'],
    [27,'13:00','14:00','결제 시작 미구매자 흐름 점검','Cafe24','대기'],
    [28,'10:00','11:00','일정관리 화면 QA','Hermes','진행중'],
    [28,'15:00','16:00','구글캘린더 동기화 확인','Google Calendar','대기'],
    [29,'10:00','11:00','샘플 커머스 교육 브랜드 자료 패키지 안내 라이브','YouTube','준비중'],
    [30,'11:00','12:00','Meta KPI 3일 재측정','Meta','대기']
  ];
  return seeds.map(([day, startTime, endTime, title, channel, status], index) => ({
    id: `rhythm-${monthKey}-${index}`,
    title,
    date: `${monthKey}-${String(day).padStart(2, '0')}`,
    startTime,
    endTime,
    start: eventDateTime(`${monthKey}-${String(day).padStart(2, '0')}`, startTime, '10:00'),
    end: eventDateTime(`${monthKey}-${String(day).padStart(2, '0')}`, endTime, '11:00'),
    source: 'rhythm',
    channel,
    status,
    memo: '운영 리듬 샘플 일정'
  }));
}

function combinedLectureEvents() {
  const localLectures = getCollection('lectures').map((lecture) => ({
    id: lecture.id,
    title: lecture.title,
    date: lecture.date,
    startTime: normalizeTime(lecture.startTime, '10:00'),
    endTime: normalizeTime(lecture.endTime, '11:00'),
    start: eventDateTime(lecture.date, lecture.startTime, '10:00'),
    end: eventDateTime(lecture.date, lecture.endTime, '11:00'),
    source: 'local',
    channel: lecture.channel,
    location: lecture.location,
    status: lecture.status,
    materialStatus: lecture.materialStatus,
    mailStatus: lecture.mailStatus,
    type: lecture.type || '업무',
    priority: lecture.priority || '보통',
    movement: lecture.movement || '온라인',
    linkTarget: lecture.linkTarget || '없음',
    labelColor: lecture.labelColor,
    sourceType: lecture.sourceType,
    sourceId: lecture.sourceId,
    sessionNo: lecture.sessionNo,
    memo: lecture.memo,
  }));
  const linkedGoogleIds = new Set(getCollection('lectures').map((lecture) => lecture.googleEventId).filter(Boolean));
  const googleEvents = (state.googleCalendar.events || [])
    .filter((event) => !linkedGoogleIds.has(event.id))
    .map((event) => ({
    id: event.id,
    title: event.summary || event.title || '(제목 없음)',
    date: eventDate(event.start?.dateTime || event.start?.date || event.start),
    startTime: normalizeTime(String(event.start?.dateTime || event.start || '').slice(11, 16)),
    endTime: normalizeTime(String(event.end?.dateTime || event.end || '').slice(11, 16)),
    start: event.start?.dateTime || event.start?.date || event.start,
    end: event.end?.dateTime || event.end?.date || event.end,
    source: 'google',
    channel: event.calendar || 'Google Calendar',
    location: event.location || '',
    status: event.status || '구글',
    type: 'Google',
    priority: '보통',
    movement: event.location ? '이동 있음' : '온라인',
    linkTarget: '없음',
    memo: event.location || event.description || '',
    htmlLink: event.htmlLink,
  })).filter((event) => event.date);
  return [...localLectures, ...googleEvents].sort((a, b) => String(a.date).localeCompare(String(b.date)) || String(a.startTime || '').localeCompare(String(b.startTime || '')) || String(a.title).localeCompare(String(b.title)));
}

function scheduleEventKey(event = {}) {
  return `${event.source || 'local'}:${event.id || ''}`;
}

function findScheduleEventByKey(key) {
  if (!key) return null;
  return combinedLectureEvents().find((event) => scheduleEventKey(event) === key) || null;
}

function localLectureFromGoogleEvent(event = {}) {
  const existing = getCollection('lectures').find((lecture) => lecture.googleEventId === event.id);
  const fallbackId = `google-${String(event.id || makeId('lectures')).replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 48)}` || makeId('lectures');
  return {
    ...(existing || {}),
    id: existing?.id || fallbackId,
    title: event.title || '(제목 없음)',
    date: event.date || todayIso(),
    startTime: normalizeTime(event.startTime, '10:00'),
    endTime: normalizeTime(event.endTime, '11:00'),
    channel: event.channel || 'Google Calendar',
    location: event.location || '',
    type: '업무',
    priority: event.priority || '보통',
    movement: event.location ? '이동 있음' : '온라인',
    linkTarget: event.linkTarget || '없음',
    status: SCHEDULE_STATUS_OPTIONS.includes(event.status) ? event.status : '예정',
    materialStatus: event.materialStatus || '없음',
    mailStatus: event.mailStatus || '없음',
    repeatRule: '없음',
    repeatCount: '1',
    memo: event.memo || '',
    googleEventId: event.id,
    googleHtmlLink: event.htmlLink || existing?.googleHtmlLink || '',
    sourceType: existing?.sourceType || 'google-import',
    googleSyncStatus: existing?.googleSyncStatus || 'synced',
  };
}

function openGoogleScheduleWebEdit(eventId) {
  const event = combinedLectureEvents().find((item) => item.source === 'google' && item.id === eventId)
    || findScheduleEventByKey(`google:${eventId}`);
  if (!event) {
    toast('수정할 Google 일정을 찾지 못했습니다.');
    return false;
  }
  const localItem = localLectureFromGoogleEvent(event);
  upsertItem('lectures', localItem);
  saveData();
  state.editing = localItem.id;
  state.scheduleFormOpen = true;
  state.schedulePopover = null;
  state.selectedScheduleEventKey = scheduleEventKey({ source: 'local', id: localItem.id });
  state.selectedLectureDate = localItem.date || state.selectedLectureDate;
  state.calendarMonth = localItem.date ? localItem.date.slice(0, 7) : state.calendarMonth;
  render();
  window.requestAnimationFrame(() => {
    const form = document.querySelector('[data-crud-form="lectures"]');
    form?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    form?.querySelector('input[name="title"]')?.focus({ preventScroll: true });
  });
  toast('웹 수정 폼을 열었습니다. 저장하면 Google Calendar에도 반영됩니다.');
  return false;
}

function scheduleNeedsPrep(event = {}) {
  return Boolean((event.materialStatus && !['없음','완료'].includes(event.materialStatus)) || (event.mailStatus && !['없음','완료'].includes(event.mailStatus)));
}

function scheduleIsOpen(event = {}) {
  return !['완료','cancelled','취소'].includes(event.status || '');
}

function scheduleEventMatchesFocus(event, focus = state.scheduleFocusFilter || '전체') {
  if (focus === '전체') return true;
  if (focus === '오늘') return event.date === todayIso();
  if (focus === '이번주') return isThisWeek(event.date);
  if (focus === '미완료') return scheduleIsOpen(event);
  if (focus === '준비필요') return scheduleNeedsPrep(event);
  if (focus === 'Google') return event.source === 'google' || event.type === 'Google';
  return true;
}

function scheduleEventMatchesFilters(event) {
  const query = String(state.filters.query || '').trim().toLowerCase();
  if (query && ![event.title, event.channel, event.location, event.status, event.type, event.priority, event.memo].join(' ').toLowerCase().includes(query)) return false;
  if (state.filters.status && state.filters.status !== '전체' && event.status !== state.filters.status) return false;
  if (state.filters.type && state.filters.type !== '전체' && event.type !== state.filters.type) return false;
  if (state.filters.priority && state.filters.priority !== '전체' && event.priority !== state.filters.priority) return false;
  if (state.filters.dateScope && state.filters.dateScope !== '전체') {
    if (state.filters.dateScope === '오늘' && event.date !== todayIso()) return false;
    if (state.filters.dateScope === '이번주' && !isThisWeek(event.date)) return false;
  }
  return scheduleEventMatchesFocus(event);
}

function shortScheduleTitle(title = '') {
  const text = String(title || '제목 없음').trim();
  return text.length > 13 ? `${text.slice(0, 13)}…` : text;
}

function googleSyncTimeLabel() {
  const raw = state.googleCalendar.meta?.clientLoadedAt || state.googleCalendar.meta?.generatedAt || state.googleCalendar.meta?.updatedAt;
  if (!raw) return '방금 전';
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) return '확인됨';
  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}

function daysUntil(dateString) {
  if (!dateString) return null;
  const today = new Date(`${todayIso()}T00:00:00`);
  const target = new Date(`${dateString}T00:00:00`);
  return Math.round((target - today) / 86400000);
}

function dueText(dateString) {
  const diff = daysUntil(dateString);
  if (diff === null || Number.isNaN(diff)) return '마감일 없음';
  if (diff < 0) return `${Math.abs(diff)}일 지남`;
  if (diff === 0) return '오늘 마감';
  if (diff === 1) return '내일 마감';
  return `${diff}일 남음`;
}

function taskUrgencyClass(task) {
  const diff = daysUntil(task.due);
  if (task.status === '완료') return 'done';
  if (diff !== null && diff < 0) return 'overdue';
  if (diff === 0 || task.priority === '높음') return 'hot';
  return task.priority === '낮음' ? 'low' : 'normal';
}

function renderTaskQuickAdd() {
  const today = todayIso();
  const tomorrow = addDaysIso(1);
  const week = addDaysIso(7);
  return `
    <form class="task-quick-add task-visual-add" data-task-quick-form onsubmit="return submitTaskQuickAdd(this)">
      <div class="task-add-title-block">
        <span class="task-step-badge">1</span>
        <label class="task-title-input">할일 제목
          <input name="title" placeholder="예: 오늘 올릴 카페 공지 작성" required autocomplete="off" />
        </label>
        <p>제목만 적고 Enter를 눌러도 바로 저장됩니다.</p>
      </div>
      <div class="task-add-options-grid">
        <section class="task-choice-card priority-choice" aria-label="우선순위 선택">
          <div class="task-choice-head"><span class="task-step-badge small">2</span><strong>우선순위</strong></div>
          <input type="hidden" name="priority" value="중간" data-task-priority-value />
          <div class="task-segment-row">
            <button type="button" data-task-priority-preset="높음" class="danger">높음</button>
            <button type="button" data-task-priority-preset="중간" class="active">중간</button>
            <button type="button" data-task-priority-preset="낮음">낮음</button>
          </div>
        </section>
        <section class="task-choice-card due-choice" aria-label="마감일 선택">
          <div class="task-choice-head"><span class="task-step-badge small">3</span><strong>마감일</strong></div>
          <div class="task-due-preset-row">
            <button type="button" data-task-due-preset="${today}" class="active">오늘</button>
            <button type="button" data-task-due-preset="${tomorrow}">내일</button>
            <button type="button" data-task-due-preset="${week}">7일후</button>
            <button type="button" data-task-due-preset="">없음</button>
          </div>
          <input name="due" type="date" value="${today}" data-task-due-input />
        </section>
        <label class="task-owner-input">담당
          <input name="owner" value="이브레인" placeholder="예: 이브레인, Hermes" />
        </label>
      </div>
      <label class="task-memo-input">메모 / 링크 / 다음 행동
        <textarea name="memo" placeholder="예: 참고 링크, 판단 기준, 완료 기준을 짧게 적어두세요."></textarea>
      </label>
      <div class="task-add-submit-row">
        <span>저장 후 목록 맨 위에 추가됩니다.</span>
        <button class="primary task-add-button" type="submit">+ 할일 추가</button>
      </div>
    </form>
  `;
}

function renderTaskInlineAddPanel() {
  if (!state.taskAddOpen) return '';
  return `
    <section class="task-inline-add-panel" id="taskInlineAddPanel" aria-label="새 할일 추가 창">
      <div class="task-inline-add-head">
        <div class="task-add-head-copy">
          <p class="task-add-kicker"><span>＋</span> 새 할일 추가</p>
          <h3>할 일을 빠르게 정리하세요</h3>
          <small>제목만 먼저 적고, 우선순위와 마감일은 버튼으로 바로 선택하세요.</small>
        </div>
        <button type="button" class="task-inline-close" data-task-add-close onclick="return closeTaskAddPanel()" aria-label="할일 추가 창 닫기">×</button>
      </div>
      ${renderTaskQuickAdd()}
    </section>
  `;
}

function renderTaskFocusStrip(tasks) {
  const open = tasks.filter((task) => task.status !== '완료');
  const urgent = open.filter((task) => task.priority === '높음' || daysUntil(task.due) <= 0).slice(0, 4);
  const byDue = [...open].sort((a,b) => (a.due || '9999').localeCompare(b.due || '9999')).slice(0, 4);
  return `
    <div class="task-focus-grid">
      <div class="task-focus-card hot"><strong>🔥 오늘 먼저 볼 것</strong><p>높음/오늘 마감/지난 일을 먼저 보여줍니다.</p>${urgent.length ? urgent.map(renderTaskMini).join('') : '<p class="empty">급한 일이 없습니다.</p>'}</div>
      <div class="task-focus-card"><strong>⏱ 마감 가까운 순서</strong><p>열린 할일을 마감일 기준으로 정렬했습니다.</p>${byDue.length ? byDue.map(renderTaskMini).join('') : '<p class="empty">열린 할일이 없습니다.</p>'}</div>
    </div>
  `;
}

function renderTaskMini(task) {
  return `<button class="task-mini" data-task-edit="${escapeHtml(task.id)}"><span>${escapeHtml(task.title)}</span><small>${escapeHtml(dueText(task.due))} · ${escapeHtml(task.priority || '-')}</small></button>`;
}

function renderTaskCard(task) {
  const cls = taskUrgencyClass(task);
  return `
    <article class="task-card ${cls}">
      <div class="task-card-head">
        <strong>${escapeHtml(task.title)}</strong>
        ${badge(task.priority || '-')}
      </div>
      <div class="task-meta"><span>${escapeHtml(task.owner || '이브레인')}</span><span>${escapeHtml(dueText(task.due))}</span></div>
      ${task.memo ? `<p>${escapeHtml(task.memo)}</p>` : ''}
      <div class="task-card-actions">
        ${task.status !== '진행중' ? `<button data-task-status="진행중" data-id="${escapeHtml(task.id)}">진행</button>` : ''}
        ${task.status !== '완료' ? `<button data-task-status="완료" data-id="${escapeHtml(task.id)}">완료</button>` : ''}
        <button data-task-edit="${escapeHtml(task.id)}">수정</button>
        <button data-task-delete="${escapeHtml(task.id)}">삭제</button>
      </div>
    </article>
  `;
}

function renderTaskBoard(tasks) {
  const columns = [
    { key: '대기', title: '대기', hint: '아직 시작 전' },
    { key: '진행중', title: '진행중', hint: '오늘 집중' },
    { key: '완료', title: '완료', hint: '끝낸 일' },
    { key: '보류', title: '보류', hint: '잠시 멈춤' },
  ];
  return `<div class="task-board">${columns.map((col)=>{
    const list = tasks.filter((task)=>task.status === col.key);
    return `<section class="task-column"><div class="task-column-head"><div><h3>${col.title}</h3><span>${col.hint}</span></div><b>${list.length}</b></div>${list.length ? list.map(renderTaskCard).join('') : '<p class="empty">비어있음</p>'}</section>`;
  }).join('')}</div>`;
}

function renderTaskFilterChip(key, value, count, label = value) {
  const current = state.filters[key] ?? '전체';
  return `<button type="button" class="task-ref-chip ${current === value ? 'active' : ''}" data-chip-filter="${escapeHtml(key)}" data-chip-value="${escapeHtml(value)}">${escapeHtml(label)} <b>${count}</b></button>`;
}

function taskPriorityRank(task = {}) {
  return ({ '높음': 0, '중간': 1, '낮음': 2 })[task.priority || '중간'] ?? 1;
}

function compareTasksForFocus(a = {}, b = {}) {
  const dueA = a.due || '9999-12-31';
  const dueB = b.due || '9999-12-31';
  const dueCompare = dueA.localeCompare(dueB);
  if (dueCompare) return dueCompare;
  const priorityCompare = taskPriorityRank(a) - taskPriorityRank(b);
  if (priorityCompare) return priorityCompare;
  return String(a.title || '').localeCompare(String(b.title || ''), 'ko');
}

function renderTaskBoardItem(task, mode = 'today') {
  const diff = daysUntil(task.due);
  const dueLabel = diff !== null && !Number.isNaN(diff) ? dueText(task.due) : '마감일 없음';
  const owner = task.owner || '이브레인';
  const status = task.status || '대기';
  const source = task.sourceType === 'schedule' ? '일정' : task.sourceType === 'meeting' ? '미팅' : task.sourceType === 'gmail' ? '메일' : '';
  return `
    <article class="task-today-week-item ${taskUrgencyClass(task)}" data-task-edit="${escapeHtml(task.id)}" tabindex="0" aria-label="${escapeHtml(task.title || '할일')} 수정">
      <div class="task-today-week-main">
        <span class="task-today-week-date ${mode === 'week' ? 'week' : ''}">${escapeHtml(mode === 'week' ? (task.due || '미정') : dueLabel)}</span>
        <strong>${escapeHtml(task.title || '제목 없는 할일')}</strong>
        <small>${escapeHtml(owner)} · ${escapeHtml(task.priority || '중간')} · ${escapeHtml(status)}${source ? ` · ${escapeHtml(source)}` : ''}</small>
      </div>
      <div class="task-today-week-actions">
        ${status !== '진행중' ? `<button type="button" data-task-status="진행중" data-id="${escapeHtml(task.id)}">진행</button>` : ''}
        ${status !== '완료' ? `<button type="button" class="done" data-task-status="완료" data-id="${escapeHtml(task.id)}">완료</button>` : `<button type="button" data-task-status="대기" data-id="${escapeHtml(task.id)}">되돌림</button>`}
        ${status !== '보류' ? `<button type="button" data-task-status="보류" data-id="${escapeHtml(task.id)}">보류</button>` : ''}
      </div>
    </article>
  `;
}

function renderTaskTodayWeekBoard(allTasks = []) {
  const open = allTasks.filter((task)=>task.status !== '완료');
  const today = todayIso();
  const weekEnd = addDaysIso(7);
  const overdue = open.filter((task)=>task.due && task.due < today).sort(compareTasksForFocus);
  const todayDue = open.filter((task)=>task.due === today).sort(compareTasksForFocus);
  const inProgress = open.filter((task)=>task.status === '진행중').sort(compareTasksForFocus);
  const todayMap = new Map([...overdue, ...todayDue, ...inProgress].map((task)=>[task.id, task]));
  const todayItems = Array.from(todayMap.values()).sort(compareTasksForFocus).slice(0, 5);
  const weekItems = open
    .filter((task)=>task.due && task.due >= today && task.due <= weekEnd)
    .sort(compareTasksForFocus)
    .slice(0, 7);
  const noDue = open.filter((task)=>!task.due).length;
  return `
    <section class="task-today-week-board" aria-label="오늘 주간 할일 보드">
      <div class="task-today-week-summary">
        <article class="hot"><span>오늘 처리</span><strong>${todayItems.length}</strong><em>지난 미완료 + 오늘 마감 + 진행중</em></article>
        <article><span>지난 미완료</span><strong>${overdue.length}</strong><em>밀린 할일 먼저 확인</em></article>
        <article><span>이번주 마감</span><strong>${weekItems.length}</strong><em>${escapeHtml(today)} ~ ${escapeHtml(weekEnd)}</em></article>
        <article><span>진행중</span><strong>${inProgress.length}</strong><em>지금 움직이는 일</em></article>
      </div>
      <div class="task-today-week-columns">
        <section class="task-today-panel">
          <div class="task-today-week-head"><div><span>TODAY BOARD</span><h3>오늘 먼저 끝낼 일</h3></div><b>${todayItems.length}건</b></div>
          <div class="task-today-week-list">${todayItems.length ? todayItems.map((task)=>renderTaskBoardItem(task, 'today')).join('') : '<p class="empty">오늘 급하게 볼 할일이 없습니다.</p>'}</div>
        </section>
        <section class="task-week-panel">
          <div class="task-today-week-head"><div><span>WEEK BOARD</span><h3>이번주 마감 흐름</h3></div><b>${weekItems.length}건</b></div>
          <div class="task-today-week-list week">${weekItems.length ? weekItems.map((task)=>renderTaskBoardItem(task, 'week')).join('') : '<p class="empty">이번주 마감 할일이 없습니다.</p>'}</div>
          ${noDue ? `<p class="task-no-due-note">마감일 없는 열린 할일 ${noDue}건은 전체 목록에서 날짜를 넣어주세요.</p>` : ''}
        </section>
      </div>
    </section>
  `;
}

function renderTaskReferenceTabs() {
  const tabs = [
    ['오늘', '▣', '오늘 마감만 보기'],
    ['주간', '▣', '이번주 마감 보기'],
    ['보드', '▥', '상태별 카드 보기'],
    ['목록', '☰', '전체 목록 보기'],
  ];
  return `<nav class="task-view-tabs" aria-label="할일 보기 방식">${tabs.map(([label, icon, title])=>`<button type="button" class="${label === '목록' ? 'active' : ''}" title="${escapeHtml(title)}"><span>${icon}</span>${label}</button>`).join('')}</nav>`;
}

function renderTaskFilterPanel(allTasks) {
  const statuses = ['전체','대기','진행중','완료','보류'];
  const owners = ['전체', ...Array.from(new Set(allTasks.map((task)=>task.owner || '이브레인').filter(Boolean)))];
  const statusChips = statuses.map((status)=>renderTaskFilterChip('status', status, status === '전체' ? allTasks.length : allTasks.filter((task)=>task.status === status).length, status === '대기' ? '할일' : status)).join('');
  const ownerChips = owners.map((owner)=>renderTaskFilterChip('owner', owner, owner === '전체' ? allTasks.length : allTasks.filter((task)=>(task.owner || '이브레인') === owner).length)).join('');
  const priorityChips = ['전체','높음','중간','낮음'].map((priority)=>renderTaskFilterChip('priority', priority, priority === '전체' ? allTasks.length : allTasks.filter((task)=>(task.priority || '중간') === priority).length)).join('');
  return `
    <section class="task-ref-filter-card">
      <div class="task-ref-search-line">
        <label class="task-ref-search"><span>⌕</span><input data-filter="query" placeholder="제목, 설명, 담당자, 우선순위 검색" value="${escapeHtml(state.filters.query)}" /></label>
        <button type="button" class="task-hide-done-toggle ${state.filters.status === '완료' ? 'active' : ''}" data-chip-filter="status" data-chip-value="전체">완료 숨김 OFF</button>
      </div>
      <div class="task-ref-chip-row">${statusChips}</div>
      <div class="task-ref-chip-row secondary">${priorityChips}${ownerChips}</div>
    </section>
  `;
}

function renderTaskActionTable(tasks) {
  if (!tasks.length) return `<section class="task-action-table-card clean"><p class="empty">조건에 맞는 할일이 없습니다. 검색어나 필터를 바꿔보세요.</p></section>`;
  const rows = tasks.map((task) => {
    const done = task.status === '완료';
    const urgency = taskUrgencyClass(task);
    return `
      <tr class="task-action-row ${urgency} ${done ? 'is-done' : ''}">
        <td class="task-check-cell">
          <label class="task-check-wrap simple" title="완료 체크" data-task-done-click="${escapeHtml(task.id)}">
            <input type="checkbox" data-task-done-toggle="${escapeHtml(task.id)}" ${done ? 'checked' : ''} />
            <span></span>
          </label>
        </td>
        <td class="task-drag-cell"><span title="정렬 핸들">⋮⋮</span></td>
        <td class="task-title-cell inline-edit-cell clean-title-cell">
          <input class="task-inline-title" data-task-inline-field="title" data-id="${escapeHtml(task.id)}" value="${escapeHtml(task.title || '')}" placeholder="할일 제목" aria-label="할일 제목 바로 수정" />
          <textarea class="task-inline-memo" data-task-inline-field="memo" data-id="${escapeHtml(task.id)}" placeholder="메모 바로 수정" aria-label="메모 바로 수정">${escapeHtml(task.memo || '')}</textarea>
        </td>
        <td class="inline-edit-cell priority-cell">
          <select class="task-priority-select priority-${escapeHtml(task.priority || '중간')}" data-task-inline-field="priority" data-id="${escapeHtml(task.id)}" aria-label="우선순위 바로 수정">
            ${['높음','중간','낮음'].map((value)=>`<option value="${value}" ${(task.priority || '중간') === value ? 'selected' : ''}>${value}</option>`).join('')}
          </select>
        </td>
        <td class="task-owner-cell inline-edit-cell">
          <input data-task-inline-field="owner" data-id="${escapeHtml(task.id)}" value="${escapeHtml(task.owner || '이브레인')}" placeholder="담당" aria-label="담당 바로 수정" />
        </td>
        <td class="task-date-cell inline-edit-cell">
          <input type="text" inputmode="numeric" data-task-inline-field="due" data-id="${escapeHtml(task.id)}" value="${escapeHtml(task.due || todayIso())}" aria-label="마감일 바로 수정" />
        </td>
        <td class="inline-edit-cell status-cell">
          <select class="task-status-select status-${escapeHtml(task.status || '대기')}" data-task-inline-field="status" data-id="${escapeHtml(task.id)}" aria-label="상태 바로 수정">
            ${['대기','진행중','완료','보류'].map((value)=>`<option value="${value}" ${(task.status || '대기') === value ? 'selected' : ''}>${value}</option>`).join('')}
          </select>
          <div class="task-row-actions">
            ${task.status !== '진행중' ? `<button type="button" data-task-status="진행중" data-id="${escapeHtml(task.id)}">진행</button>` : ''}
            ${task.status !== '완료' ? `<button type="button" data-task-status="완료" data-id="${escapeHtml(task.id)}">완료</button>` : `<button type="button" data-task-status="대기" data-id="${escapeHtml(task.id)}">되돌림</button>`}
            <button type="button" data-task-status="보류" data-id="${escapeHtml(task.id)}">보류</button>
            <button type="button" class="delete-action" data-task-delete="${escapeHtml(task.id)}">삭제</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
  return `
    <section class="task-action-table-card clean">
      <div class="task-action-table-head clean">
        <div>
          <h3>전체 할일 <span>총 ${tasks.length}건</span></h3>
          <p>상태 기준으로 정렬된 할일 목록입니다.</p>
        </div>
        <button class="task-quick-link" type="button" data-task-add-focus onclick="return openTaskAddPanel()">⚡ 빠른추가</button>
      </div>
      <div class="task-action-table-wrap clean">
        <table class="task-action-table clean">
          <thead><tr><th></th><th></th><th>할일명</th><th>우선순위</th><th>담당자</th><th>마감일</th><th>상태</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>
  `;
}

function filterButtonClass(key, value) {
  const current = state.filters[key] ?? '전체';
  return current === value ? 'active' : '';
}

function filterLabelFor(key) {
  return ({ status: '상태', priority: '우선순위', dateScope: '마감일', type: '유형', owner: '담당자', format: '형식' })[key] || key;
}

function renderReferenceToolbar(config, placeholder = '제목, 설명, 담당자, 우선순위 검색') {
  const filterEntries = Object.entries(config.filters || {});
  const chipRows = filterEntries.map(([key, options]) => `
    <div class="reference-filter-group" data-filter-row="${escapeHtml(key)}">
      <span>${escapeHtml(filterLabelFor(key))}</span>
      <div class="reference-chip-row">
        ${options.map((opt)=>`<button type="button" class="reference-chip ${filterButtonClass(key, opt)}" data-chip-filter="${escapeHtml(key)}" data-chip-value="${escapeHtml(opt)}">${escapeHtml(opt)} ${opt === '전체' ? `<b>${countForFilter(config, key, opt)}</b>` : ''}</button>`).join('')}
      </div>
    </div>
  `).join('');
  return `
    <section class="reference-filter-card">
      <div class="reference-search-line">
        <label class="reference-search"><span>⌕</span><input data-filter="query" placeholder="${escapeHtml(placeholder)}" value="${escapeHtml(state.filters.query)}" /></label>
        <button class="ghost" data-clear-filters>필터 초기화</button>
      </div>
      ${chipRows}
    </section>
  `;
}

function countForFilter(config, key, value) {
  const items = getCollection(config.collection);
  if (value === '전체') return items.length;
  return items.filter((item)=>item[key] === value).length;
}

function referenceMetric(label, value, desc, icon = '□', tone = '') {
  return `<article class="reference-metric ${tone}"><div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong><em>${escapeHtml(desc)}</em></div><i>${escapeHtml(icon)}</i></article>`;
}

function renderReferenceTable(items, columns, config, routeKey, emptyText = '표시할 항목이 없습니다.') {
  if (!items.length) return `<div class="reference-table-card"><p class="empty">${escapeHtml(emptyText)}</p></div>`;
  const headers = columns.map((col)=>`<th>${escapeHtml(col.label)} ↕</th>`).join('');
  const rows = items.map((item)=>`
    <tr>
      ${columns.map((col)=>`<td>${formatReferenceCell(item, col)}</td>`).join('')}
      ${routeKey ? `<td class="reference-actions"><button data-edit="${escapeHtml(item.id)}" data-route-key="${escapeHtml(routeKey)}">수정</button>${(config.statusOptions || []).slice(0,3).map((status)=>`<button data-quick-status="${escapeHtml(status)}" data-route-key="${escapeHtml(routeKey)}" data-id="${escapeHtml(item.id)}">${escapeHtml(status)}</button>`).join('')}</td>` : ''}
    </tr>
  `).join('');
  return `<div class="reference-table-card"><table class="reference-table"><thead><tr>${headers}${routeKey ? '<th>빠른처리</th>' : ''}</tr></thead><tbody>${rows}</tbody></table></div>`;
}

function formatReferenceCell(item, col) {
  const raw = typeof col.value === 'function' ? col.value(item) : item[col.key];
  if (col.badge) return badge(raw || '-');
  if (col.money) return `<strong class="money-cell">${escapeHtml(formatWon(raw || 0))}</strong>`;
  if (col.date) return `<span class="date-cell">${escapeHtml(raw || '-')}</span>`;
  if (col.primary) return `<strong class="primary-cell">${escapeHtml(raw || '-')}</strong>${col.sub ? `<small>${escapeHtml(col.sub(item) || '')}</small>` : ''}`;
  return escapeHtml(raw ?? '-');
}

function renderReferenceShell({ className = '', title, desc, actionLabel, actionRoute, actionKey, metrics, toolbar, tableTitle, tableDesc, table, countLabel }) {
  $('#routeContent').innerHTML = `
    <div class="reference-shell ${className}">
      <section class="reference-hero">
        <div><h2>${escapeHtml(title)}</h2><p>${escapeHtml(desc)}</p></div>
        <div class="reference-hero-actions">
          ${actionRoute ? `<button class="primary teal" data-route="${escapeHtml(actionRoute)}">${escapeHtml(actionLabel)}</button>` : ''}
          ${actionKey ? `<button class="primary teal" data-new-item="${escapeHtml(actionKey)}">${escapeHtml(actionLabel)}</button>` : ''}
        </div>
      </section>
      <section class="reference-metrics">${metrics.join('')}</section>
      ${toolbar || ''}
      <section class="reference-list-head"><div><h3>${escapeHtml(tableTitle)}</h3><p>${escapeHtml(tableDesc || '')}</p></div><span>${escapeHtml(countLabel || '')}</span></section>
      ${table}
    </div>
  `;
}

function renderLeadManagement() {
  const config = CRUD_CONFIG.inquiries;
  const all = getCollection('customerInquiries');
  const items = applyFilters(all, config);
  const metrics = [
    referenceMetric('전체 리드', `${all.length}건`, '등록된 고객 문의 수', '☏'),
    referenceMetric('신규', `${all.filter(i=>i.status==='신규').length}건`, '마지막 응대가 필요한 문의', '⌕', 'cream'),
    referenceMetric('상담중', `${all.filter(i=>['대기','처리중'].includes(i.status)).length}건`, '현재 커뮤니케이션 진행 중', '□', 'blue'),
    referenceMetric('계약 완료', `${all.filter(i=>i.status==='완료').length}건`, '구매 또는 안내 완료', '✓', 'green'),
  ];
  renderReferenceShell({
    className: 'leads-reference',
    title: '리드 관리',
    desc: '들어온 문의와 미처 우리와 연결되지 못한 고객을 한 화면에서 관리합니다.',
    actionLabel: '+ 리드 등록',
    actionKey: 'inquiries',
    metrics,
    toolbar: renderReferenceToolbar(config, '회사명, 담당자, 연락처, 이메일을 검색하세요'),
    tableTitle: '리드 목록',
    tableDesc: '상태 기준으로 빠르게 응대 우선순위를 정합니다.',
    countLabel: `${items.length}건 표시 중`,
    table: renderReferenceTable(items, [
      { key:'source', label:'유형', badge:true },
      { key:'name', label:'고객명', primary:true, sub:(i)=>i.question },
      { key:'priority', label:'우선순위', badge:true },
      { key:'status', label:'상태', badge:true },
      { key:'memo', label:'담당정보' },
      { key:'id', label:'등록일', value:(i)=>i.createdAt || i.date || i.id },
    ], config, 'inquiries')
  });
}

function projectLinkedTasks(project = {}) {
  const id = String(project.id || '');
  if (!id) return [];
  return getCollection('tasks').filter((task) => {
    const sourceType = String(task.sourceType || '').toLowerCase();
    return task.projectId === id
      || task.sourceId === id
      || task.linkedProjectId === id
      || (sourceType === 'project' && task.sourceId === id);
  });
}

function projectTaskCounts(project = {}) {
  const tasks = projectLinkedTasks(project);
  const open = tasks.filter((task) => !['완료','보류'].includes(task.status || '')).length;
  const done = tasks.filter((task) => task.status === '완료').length;
  return { total: tasks.length, open, done, tasks };
}

function projectIssueSummary(project = {}) {
  const issues = [];
  const targetDate = String(project.targetDate || '');
  const done = project.status === '완료';
  const linked = projectTaskCounts(project);
  if (!project.owner || project.owner === '-') issues.push({ tone: 'danger', label: '책임자 미배정' });
  if (!done && targetDate && targetDate < todayIso()) issues.push({ tone: 'danger', label: '목표일 지연' });
  if (!done && targetDate === todayIso()) issues.push({ tone: 'warn', label: '오늘 목표' });
  if (!done && targetDate && isThisWeek(targetDate)) issues.push({ tone: 'warn', label: '이번주 목표' });
  if (!done && project.priority === '높음') issues.push({ tone: 'warn', label: '높은 우선순위' });
  if (!done && linked.open) issues.push({ tone: 'warn', label: `연결 할일 ${linked.open}개 진행중` });
  if (!done && !linked.total) issues.push({ tone: 'muted', label: '연결 할일 없음' });
  if (!String(project.goal || '').trim()) issues.push({ tone: 'muted', label: '목표/결과물 없음' });
  if (!String(project.nextAction || '').trim()) issues.push({ tone: 'muted', label: '다음 결정 없음' });
  return issues;
}

function renderProjectTaskSummary(project = {}) {
  const { total, open, done, tasks } = projectTaskCounts(project);
  if (!total) {
    return `<div class="project-linked-tasks empty"><strong>연결 할일</strong><span>아직 없습니다. ‘할일 만들기’로 다음 결정을 바로 실행 항목으로 넘기세요.</span></div>`;
  }
  return `<div class="project-linked-tasks">
    <div class="project-linked-head"><strong>연결 할일</strong><span>진행 ${open} · 완료 ${done}</span></div>
    <div class="project-linked-list">
      ${tasks.slice(0, 3).map((task)=>`<span class="${task.status === '완료' ? 'done' : 'open'}"><b>${escapeHtml(task.status || '대기')}</b>${escapeHtml(task.title || '제목 없음')}</span>`).join('')}
      ${tasks.length > 3 ? `<span class="more">+${tasks.length - 3}개 더</span>` : ''}
    </div>
  </div>`;
}

function renderProjectNextActionEditor(project = {}) {
  const id = escapeHtml(project.id || '');
  return `<div class="project-card-next">
    <label for="project-next-${id}">다음 결정/액션</label>
    <div>
      <textarea id="project-next-${id}" data-project-next-action-input="${id}" rows="2" placeholder="다음 결정이나 바로 실행할 액션을 적으세요">${escapeHtml(project.nextAction || '')}</textarea>
      <button type="button" class="project-mini-action" data-project-next-action-save="${id}">저장</button>
    </div>
  </div>`;
}

function renderProjectPriorityBoard(projects = []) {
  const actionable = projects
    .map((project)=>({ project, issues: projectIssueSummary(project) }))
    .filter(({ project, issues })=>project.status !== '완료' && issues.length)
    .sort((a,b)=>b.issues.length - a.issues.length)
    .slice(0, 5);
  if (!actionable.length) {
    return `<section class="project-priority-board all-clear"><div><span>오늘 먼저 볼 프로젝트</span><h3>급한 프로젝트 이슈가 없습니다</h3><p>목표일·책임자·다음 결정이 모두 안정적입니다.</p></div></section>`;
  }
  return `<section class="project-priority-board" aria-label="오늘 먼저 볼 프로젝트">
    <div class="project-priority-head"><span>오늘 먼저 볼 프로젝트</span><strong>${actionable.length}건</strong><p>지연·오늘 목표·다음 결정 누락부터 확인하세요.</p></div>
    <div class="project-priority-list">
      ${actionable.map(({ project, issues })=>`
        <article class="project-priority-item">
          <div><b>${escapeHtml(project.title || '이름 없는 프로젝트')}</b><span>${issues.map((issue)=>escapeHtml(issue.label)).join(' · ')}</span></div>
          <div class="project-priority-actions">${renderProjectActionButtons(project, true)}</div>
        </article>
      `).join('')}
    </div>
  </section>`;
}

function renderProjectActionButtons(project, compact = false) {
  const id = escapeHtml(project.id);
  const buttons = [`<button type="button" data-edit="${id}" data-route-key="projects">수정</button>`];
  if (!compact) buttons.push(`<button type="button" data-create-project-task="${id}">할일 만들기</button>`);
  if (project.status === '완료') {
    buttons.push(`<button type="button" data-quick-status="진행중" data-route-key="projects" data-id="${id}">재진행</button>`);
  } else {
    if (project.status !== '진행중') buttons.push(`<button type="button" data-quick-status="진행중" data-route-key="projects" data-id="${id}">진행</button>`);
    if (!compact && project.status !== '검수') buttons.push(`<button type="button" data-quick-status="검수" data-route-key="projects" data-id="${id}">검수</button>`);
    buttons.push(`<button type="button" data-quick-status="완료" data-route-key="projects" data-id="${id}">완료</button>`);
    if (!compact && project.status !== '보류') buttons.push(`<button type="button" data-quick-status="보류" data-route-key="projects" data-id="${id}">보류</button>`);
  }
  buttons.push(`<button type="button" class="delete-action" data-delete="${id}" data-route-key="projects" aria-label="${escapeHtml(project.title || '프로젝트')} 삭제">삭제</button>`);
  return buttons.join('');
}

function renderProjectCards(items = []) {
  if (!items.length) return `<div class="reference-table-card"><p class="empty">표시할 프로젝트가 없습니다. 오른쪽 위 ‘+ 프로젝트 추가’로 할일과 별개의 프로젝트를 먼저 만드세요.</p></div>`;
  return `<div class="project-card-list">
    ${items.map((project)=> {
      const issues = projectIssueSummary(project);
      const done = project.status === '완료';
      return `<article class="project-card ${done ? 'done' : ''}">
        <div class="project-card-main">
          <div class="project-card-title-row">
            <div><h4>${escapeHtml(project.title || '이름 없는 프로젝트')}</h4><p>${escapeHtml(project.goal || project.memo || '프로젝트 목표/결과물을 입력하세요.')}</p></div>
            <div class="project-card-badges">${badge(project.priority || '중간')} ${badge(project.status || '기획')}</div>
          </div>
          <div class="project-card-meta">
            <span><b>책임자</b>${escapeHtml(project.owner || '미배정')}</span>
            <span><b>시작일</b>${escapeHtml(project.startDate || '-')}</span>
            <span><b>목표일</b>${escapeHtml(project.targetDate || '-')}</span>
          </div>
          ${renderProjectNextActionEditor(project)}
          ${renderProjectTaskSummary(project)}
          ${issues.length ? `<div class="project-issue-row">${issues.slice(0, 5).map((issue)=>`<span class="${escapeHtml(issue.tone)}">${escapeHtml(issue.label)}</span>`).join('')}</div>` : ''}
        </div>
        <div class="project-card-actions">${renderProjectActionButtons(project)}</div>
      </article>`;
    }).join('')}
  </div>`;
}

function renderProjectInlineForm(config, editItem = null) {
  if (!state.projectAddOpen && !editItem) return '';
  return `
    <section id="projectInlineAddPanel" class="panel soft-panel crud-form-panel project-inline-add-panel" aria-label="프로젝트 입력창">
      <div class="project-form-head">
        <div>
          <span class="project-form-kicker">${editItem ? 'EDIT PROJECT' : 'ADD PROJECT'}</span>
          <h3>${editItem ? '프로젝트 수정' : '새 프로젝트 추가'}</h3>
          <p>프로젝트는 할일과 별개의 상위 실행 단위입니다. 저장 후 필요할 때 프로젝트에서 후속 할일을 만들 수 있습니다.</p>
        </div>
        <button type="button" class="project-inline-close" data-project-add-close aria-label="프로젝트 입력창 닫기">×</button>
      </div>
      ${renderForm(config, 'projects', editItem)}
    </section>
  `;
}

function renderProjectManagement() {
  const config = CRUD_CONFIG.projects;
  const projects = getCollection('projects');
  const editItem = state.editing ? projects.find((item)=>item.id === state.editing) : null;
  const items = applyFilters(projects, config);
  const active = projects.filter(p=>p.status !== '완료');
  const owners = Array.from(new Set(projects.map(p=>p.owner).filter(Boolean)));
  const overdue = active.filter(p=>p.targetDate && p.targetDate < todayIso()).length;
  const dueThisWeek = active.filter(p=>p.targetDate && isThisWeek(p.targetDate)).length;
  const linkedTaskTotal = projects.reduce((sum, project)=>sum + projectTaskCounts(project).open, 0);
  const nextActionMissing = active.filter((project)=>!String(project.nextAction || '').trim()).length;
  const metrics = [
    referenceMetric('전체 프로젝트', `${projects.length}건`, '할일과 별개인 상위 실행 단위', '□'),
    referenceMetric('진행중', `${projects.filter(p=>p.status==='진행중').length}건`, '현재 실행 단계', '◉', 'blue'),
    referenceMetric('연결 할일', `${linkedTaskTotal}건`, '프로젝트에서 만든 미완료 할일', '✓', 'green'),
    referenceMetric('다음 결정 필요', `${nextActionMissing}건`, `목표일 주의 ${overdue + dueThisWeek}건`, '!', 'cream'),
  ];
  const ownerStrip = `<div class="reference-filter-group owner-row" data-filter-row="owner"><span>책임자</span><div class="reference-chip-row"><button type="button" class="reference-chip ${filterButtonClass('owner', '전체')}" data-chip-filter="owner" data-chip-value="전체">전체 <b>${projects.length}</b></button>${owners.map((owner)=>`<button type="button" class="reference-chip ${filterButtonClass('owner', owner)}" data-chip-filter="owner" data-chip-value="${escapeHtml(owner)}">${escapeHtml(owner)} <b>${projects.filter(p=>p.owner===owner).length}</b></button>`).join('')}</div></div>`;
  renderReferenceShell({
    className: 'projects-reference',
    title: '프로젝트 관리',
    desc: '프로젝트는 할일과 별개로 목표·책임자·성공 기준을 관리하고, 필요할 때 후속 할일을 연결합니다.',
    actionLabel: '+ 프로젝트 추가',
    actionKey: 'project',
    metrics,
    toolbar: renderProjectInlineForm(config, editItem) + renderReferenceToolbar(config, '프로젝트명, 목표, 성공 기준, 책임자로 검색') + ownerStrip,
    tableTitle: '프로젝트 목록',
    tableDesc: '목표·성공 기준·다음 결정 기준으로 상위 프로젝트 흐름을 봅니다.',
    countLabel: `${items.length}건 표시 중`,
    table: `${renderProjectPriorityBoard(projects)}${renderProjectCards(items)}`
  });
}

function renderTaskListManagement() {
  const config = CRUD_CONFIG.tasks;
  const all = getCollection('tasks');
  const items = applyFilters(all, config);
  const owners = Array.from(new Set(all.map(t=>t.owner).filter(Boolean)));
  const completion = all.length ? Math.round((all.filter(t=>t.status==='완료').length / all.length) * 100) : 0;
  const metrics = [
    referenceMetric('전체 할일', `${all.length}건`, '상태 기준으로 정렬된 업무 목록', '✓'),
    referenceMetric('할일', `${all.filter(t=>t.status==='대기').length}건`, '아직 시작 전 업무', '□', 'cream'),
    referenceMetric('진행중', `${all.filter(t=>t.status==='진행중').length}건`, '현재 진행 중', '◉', 'blue'),
    referenceMetric('완료율', `${completion}%`, '전체 대비 완료', '✓', 'green'),
  ];
  const ownerStrip = `<div class="reference-chip-row owner-row"><button class="reference-chip active">전체 <b>${all.length}</b></button>${owners.map((owner)=>`<button class="reference-chip">${escapeHtml(owner)} <b>${all.filter(t=>t.owner===owner).length}</b></button>`).join('')}</div>`;
  renderReferenceShell({
    className: 'tasks-reference',
    title: '할일관리',
    desc: '할 일이 정리되면 하루의 이동 속도는 조금 빨라집니다.',
    actionLabel: '+ 할일 추가',
    actionKey: 'tasks',
    metrics,
    toolbar: renderReferenceToolbar(config, '제목, 설명, 담당자, 우선순위 검색') + ownerStrip,
    tableTitle: '전체 할일',
    tableDesc: '상태 기준으로 정렬된 할일 목록입니다.',
    countLabel: `총 ${items.length}건`,
    table: renderReferenceTable(items, [
      { key:'title', label:'할일명', primary:true, sub:(t)=>t.memo },
      { key:'priority', label:'우선순위', badge:true },
      { key:'owner', label:'담당자' },
      { key:'due', label:'마감일', date:true },
      { key:'status', label:'상태', badge:true },
    ], config, 'tasks')
  });
}

function meetingLines(text = '') {
  return String(text || '').split(/\n|;/).map((line)=>line.trim()).filter(Boolean);
}

function meetingUrgency(item = {}) {
  if (item.status === '후속필요') return 'danger';
  if (item.status === '진행중') return 'blue';
  if (item.status === '완료') return 'green';
  return 'cream';
}

function renderMeetingDetail(item) {
  if (!item) {
    return `<section class="meeting-detail empty-reader"><strong>미팅 작업 패널</strong><p>왼쪽 목록에서 미팅을 선택하거나 오른쪽 폼으로 새 미팅을 추가하세요. 회의록, 결정사항, 후속 할일까지 여기서 바로 정리합니다.</p></section>`;
  }
  const actions = meetingLines(item.nextActions);
  const decisions = meetingLines(item.decisions);
  const minutes = meetingLines(item.minutes);
  return `<section class="meeting-detail">
    <div class="meeting-detail-head">
      <div><span>${escapeHtml(item.type || '미팅')}</span><h3>${escapeHtml(item.title || '(제목 없음)')}</h3><p>${escapeHtml(item.date || '-')} ${escapeHtml(normalizeTime(item.startTime, '10:00'))}~${escapeHtml(normalizeTime(item.endTime, '11:00'))} · 담당 ${escapeHtml(item.owner || '이브레인')}</p></div>
      <div class="meeting-detail-actions">
        ${badge(item.status || '예정')}
        <button class="soft" data-edit="${escapeHtml(item.id)}" data-route-key="meetings">수정</button>
        <button class="ghost" data-delete="${escapeHtml(item.id)}" data-route-key="meetings">삭제</button>
      </div>
    </div>
    <div class="meeting-meta-grid">
      <span><b>참석자</b>${escapeHtml(item.participants || '-')}</span>
      <span><b>연결</b>${escapeHtml(item.project || '-')}</span>
      <span><b>후속일</b>${escapeHtml(item.followUpDate || '-')}</span>
      <span><b>자료</b>${item.link ? `<a href="${escapeHtml(item.link)}" target="_blank" rel="noopener">열기</a>` : '-'}</span>
    </div>
    <div class="meeting-work-grid">
      <article><h4>안건</h4><p>${escapeHtml(item.agenda || '아직 안건이 없습니다.')}</p></article>
      <article><h4>회의록</h4>${minutes.length ? `<ul>${minutes.map((line)=>`<li>${escapeHtml(line)}</li>`).join('')}</ul>` : '<p>회의 내용을 적어두세요.</p>'}</article>
      <article><h4>결정사항</h4>${decisions.length ? `<ul>${decisions.map((line)=>`<li>${escapeHtml(line)}</li>`).join('')}</ul>` : '<p>결정된 내용이 없습니다.</p>'}</article>
      <article class="next-action-card"><h4>후속 할일</h4>${actions.length ? `<ul>${actions.map((line, idx)=>`<li><span>${escapeHtml(line)}</span><button type="button" data-meeting-action-task="${escapeHtml(item.id)}" data-action-index="${idx}">할일 만들기</button></li>`).join('')}</ul>` : '<p>후속 할일을 줄 단위로 적으면 여기서 바로 할일로 만들 수 있습니다.</p>'}</article>
    </div>
  </section>`;
}

function renderMeetingManagement() {
  const config = CRUD_CONFIG.meetings;
  const all = getCollection('meetings').slice().sort((a,b)=>`${b.date || ''} ${b.startTime || ''}`.localeCompare(`${a.date || ''} ${a.startTime || ''}`));
  const items = applyFilters(all, config);
  const editItem = state.editing ? all.find((item)=>item.id === state.editing) : null;
  const focusItem = editItem || items[0] || all[0] || null;
  const openCount = all.filter((m)=>!['완료','보류'].includes(m.status)).length;
  const actionCount = all.reduce((sum, m)=>sum + meetingLines(m.nextActions).length, 0);
  const followNeeded = all.filter((m)=>m.status === '후속필요' || (m.followUpDate && m.followUpDate <= todayIso() && m.status !== '완료')).length;
  const metrics = [
    referenceMetric('전체 미팅', `${all.length}건`, '직접 추가·수정 가능한 미팅', '♧'),
    referenceMetric('열린 미팅', `${openCount}건`, '완료 전 미팅', '◉', 'blue'),
    referenceMetric('후속 필요', `${followNeeded}건`, '처리해야 할 회의 후속', '!', 'cream'),
    referenceMetric('후속 할일', `${actionCount}개`, '회의록에서 뽑은 액션', '✓', 'green'),
  ];
  const chips = ['전체','예정','진행중','후속필요','완료'].map((status)=>`<button type="button" class="reference-chip ${state.filters.status === status ? 'active' : ''}" data-meeting-status-filter="${status}">${status} <b>${status === '전체' ? all.length : all.filter((m)=>m.status===status).length}</b></button>`).join('');
  const cards = items.map((m)=>`
    <article class="meeting-card ${focusItem?.id === m.id ? 'active' : ''}">
      <div class="meeting-card-top"><span class="meeting-date">${escapeHtml(m.date || '-')} ${escapeHtml(normalizeTime(m.startTime, '10:00'))}</span>${badge(m.status || '예정')}</div>
      <h3>${escapeHtml(m.title || '(제목 없음)')}</h3>
      <p>${escapeHtml(m.agenda || m.minutes || '안건/회의록을 입력하세요.')}</p>
      <div class="meeting-card-foot"><span>${escapeHtml(m.type || '내부회의')}</span><span>${escapeHtml(m.project || m.participants || '')}</span></div>
      <div class="meeting-card-actions"><button type="button" data-edit="${escapeHtml(m.id)}" data-route-key="meetings">열기/수정</button><button type="button" data-quick-status="후속필요" data-route-key="meetings" data-id="${escapeHtml(m.id)}">후속필요</button><button type="button" data-quick-status="완료" data-route-key="meetings" data-id="${escapeHtml(m.id)}">완료</button></div>
    </article>
  `).join('');
  $('#routeContent').innerHTML = `
    <div class="reference-shell meeting-workspace">
      <section class="reference-hero meeting-hero">
        <div><h2>미팅관리</h2><p>미팅 일정, 안건, 회의록, 결정사항, 후속 할일을 한 화면에서 직접 작업합니다.</p></div>
        <button class="primary teal" data-new-item>+ 새 미팅</button>
      </section>
      <section class="reference-metrics">${metrics.join('')}</section>
      <section class="reference-filter-card"><div class="reference-search-line"><label class="reference-search"><span>⌕</span><input data-filter="query" placeholder="미팅명, 참석자, 프로젝트, 회의록 검색" value="${escapeHtml(state.filters.query)}" /></label><button class="ghost" data-clear-filters>필터 초기화</button></div><div class="reference-chip-row">${chips}</div></section>
      <div class="meeting-layout">
        <section class="meeting-list-panel"><div class="panel-title-row"><h3>미팅 목록</h3><span>${items.length}건 표시</span></div><div class="meeting-card-list">${cards || `<p class="empty">${escapeHtml(config.empty)}</p>`}</div></section>
        <aside class="meeting-form-panel panel soft-panel"><h3>${editItem ? '미팅 수정' : '새 미팅 추가'}</h3>${renderForm(config, 'meetings', editItem)}</aside>
      </div>
      ${renderMeetingDetail(focusItem)}
      <section class="panel meeting-table-panel"><div class="panel-title-row"><h3>전체 미팅 표</h3><span>빠른 상태 변경·수정·삭제</span></div>${renderCrudTable(items, config, 'meetings')}</section>
    </div>
  `;
}


function renderTasks() {
  const config = CRUD_CONFIG.tasks;
  const allTasks = getCollection('tasks');
  const filtered = applyFilters(allTasks, config);
  const editItem = state.editing ? allTasks.find((item)=>item.id === state.editing) : null;
  $('#routeContent').innerHTML = `
    <div class="tasks-shell task-reference-shell">
      <section class="task-ref-hero">
        <div>
          <h2>할일관리</h2>
          <p>할 일이 정리되면 하루의 이동 속도는 조금 빨라집니다.</p>
        </div>
        <button class="task-ref-add" type="button" data-task-add-focus onclick="return openTaskAddPanel()">+ 할일 추가</button>
      </section>
      ${renderTaskInlineAddPanel()}
      ${renderTaskTodayWeekBoard(allTasks)}
      ${renderTaskReferenceTabs()}
      ${renderTaskFilterPanel(allTasks)}
      ${renderTaskActionTable(filtered)}
      <details class="task-quick-details" id="taskQuickAddPanel" ${editItem ? 'open' : ''}>
        <summary>+ 새 할일 빠른 입력</summary>
        ${renderTaskQuickAdd()}
      </details>
      <details class="task-secondary-view compact">
        <summary>보드 보기와 오늘 먼저 볼 것</summary>
        ${renderTaskFocusStrip(allTasks)}
        ${renderTaskBoard(filtered)}
      </details>
    </div>
  `;
}

const SCHEDULE_TYPE_META = {
  '개인': { className: 'type-personal', color: '#28a26f', bg: '#dcf8ea' },
  '업무': { className: 'type-work', color: '#2563eb', bg: '#dbeafe' },
  '강의': { className: 'type-course', color: '#0f9f8f', bg: '#dcfbf5' },
  '미팅': { className: 'type-meeting', color: '#7c3aed', bg: '#ede9fe' },
  '콘텐츠': { className: 'type-content', color: '#d97706', bg: '#fff2c4' },
  '외부약속': { className: 'type-external', color: '#e04f6c', bg: '#ffe1e8' },
  'Google': { className: 'type-google', color: '#4285f4', bg: '#e9eefb' },
};

const SCHEDULE_STATUS_OPTIONS = ['예정','진행중','완료','보류'];

function scheduleTypeLabel(event = {}) {
  if (event.source === 'google') return 'Google';
  if (event.sourceType === 'course' || event.channel === '강의') return '강의';
  return event.type || '업무';
}

function scheduleCategory(event) {
  const label = scheduleTypeLabel(event);
  return SCHEDULE_TYPE_META[label]?.className || 'type-work';
}

function renderScheduleTypeLegend() {
  return `<div class="schedule-type-legend" aria-label="일정 유형별 색상 기준">
    <strong>색상 기준</strong>
    ${Object.entries(SCHEDULE_TYPE_META).map(([label, meta]) => `<span class="${meta.className}"><i></i>${escapeHtml(label)}</span>`).join('')}
  </div>`;
}

function scheduleOwner(event) {
  const text = `${event.title || ''} ${event.channel || ''}`;
  if (/Hermes|자동화|Google|Calendar/.test(text)) return '강수구';
  if (/Meta|광고|리타겟|KPI|Pixel/.test(text)) return '박민호';
  if (/카페|공지|커뮤니티|구매자/.test(text)) return '오나현';
  if (/자료|상세페이지|콘텐츠|체크리스트/.test(text)) return '김도현';
  return '윤은영';
}

function scheduleDensity(events) {
  const counts = events.reduce((acc, event) => {
    const owner = scheduleOwner(event);
    acc[owner] = (acc[owner] || 0) + 1;
    return acc;
  }, {});
  const owners = ['윤은영','강수구','박민호','오나현','김도현','하선담','양성댐','이혜린'];
  return owners.map((owner) => ({ owner, count: counts[owner] || 0 }));
}

function renderScheduleEvent(event, compact = false) {
  const category = scheduleCategory(event);
  const key = scheduleEventKey(event);
  const selected = state.selectedScheduleEventKey === key;
  const title = escapeHtml(event.title || '제목 없음');
  const displayTitle = escapeHtml(event.title || '제목 없음');
  const time = escapeHtml(eventTimeLabel(event));
  const typeLabel = scheduleTypeLabel(event);
  const meta = escapeHtml(`${typeLabel} · ${event.status || '진행'}`);
  const sourceBadge = event.htmlLink ? 'Google' : (event.priority && event.priority !== '보통' ? event.priority : typeLabel);
  return `<button type="button" class="schedule-event ${category} ${compact ? 'compact' : ''} ${selected ? 'active' : ''}" data-schedule-event-key="${escapeHtml(key)}" title="${time} ${title} 내용 확인"><strong><time>${time.split('~')[0]}</time><span class="schedule-event-title">${displayTitle}</span></strong><span>${meta}</span><em>${escapeHtml(sourceBadge)}</em></button>`;
}

function renderScheduleStatusActions(event, context = 'detail') {
  const currentStatus = event?.status || '예정';
  const key = escapeHtml(scheduleEventKey(event));
  if (!event || event.source !== 'local') {
    const note = event?.source === 'google'
      ? 'Google Calendar에서 불러온 일정입니다. 대시보드 상태 변경은 로컬 일정만 가능합니다.'
      : '샘플/운영 리듬 일정입니다. 직접 입력한 일정만 상태를 바꿀 수 있습니다.';
    return `<div class="schedule-status-readonly ${context === 'popover' ? 'compact' : ''}">${escapeHtml(note)}</div>`;
  }
  const buttons = SCHEDULE_STATUS_OPTIONS.map((status) => `<button type="button" class="schedule-status-btn ${currentStatus === status ? 'active' : ''}" data-schedule-status="${escapeHtml(status)}" data-schedule-event-key="${key}">${escapeHtml(status)}</button>`).join('');
  return `<details class="schedule-status-actions ${context === 'popover' ? 'compact' : ''}" data-status-context="${escapeHtml(context)}">
    <summary><span>상태 변경</span><b>${escapeHtml(currentStatus)}</b></summary>
    <div>${buttons}</div>
  </details>`;
}

function linkedTasksForScheduleEvent(event = {}) {
  const key = scheduleEventKey(event);
  if (!key || key === ':') return [];
  return getCollection('tasks').filter((task) => (task.sourceType === 'schedule' && task.sourceId === key) || String(task.memo || '').includes(`원본: ${key}`));
}

function scheduleTaskSummary(event = {}, compact = false) {
  const tasks = linkedTasksForScheduleEvent(event);
  if (!tasks.length) return `<div class="schedule-task-link-state empty ${compact ? 'compact' : ''}">연결 할일 없음</div>`;
  const open = tasks.filter((task) => task.status !== '완료').length;
  const label = open ? `할일 ${tasks.length}개 · 미완료 ${open}개` : `할일 ${tasks.length}개 · 완료`;
  return `<div class="schedule-task-link-state ${open ? 'open' : 'done'} ${compact ? 'compact' : ''}">${escapeHtml(label)}</div>`;
}

function renderScheduleTaskLinks(event = {}) {
  const tasks = linkedTasksForScheduleEvent(event);
  if (!tasks.length) return `<div class="schedule-linked-tasks empty"><strong>연결된 할일</strong><span>아직 없습니다. 할일 만들기로 내용을 먼저 채운 뒤 할일관리에서 바로 수정하세요.</span></div>`;
  return `<div class="schedule-linked-tasks"><strong>연결된 할일 ${tasks.length}개</strong>${tasks.map((task) => `<span class="${task.status === '완료' ? 'done' : 'open'}"><b>${escapeHtml(task.status || '대기')}</b>${escapeHtml(task.title || '제목 없음')}</span>`).join('')}</div>`;
}

function renderScheduleDetail(event) {
  if (!event) {
    return `<section class="panel schedule-detail-panel empty-reader"><div class="panel-title-row"><h3>일정 내용 확인</h3><span>클릭해서 보기</span></div><p>달력에 표시된 일정을 누르면 제목, 시간, 상태, 메모를 여기에서 바로 확인할 수 있습니다.</p></section>`;
  }
  const sourceLabel = event.sourceType === 'course' ? '강의관리 연결 일정' : event.source === 'google' ? 'Google Calendar' : event.source === 'rhythm' ? '운영 리듬' : '대시보드 입력 일정';
  const material = event.materialStatus ? `<span><b>준비물</b>${escapeHtml(event.materialStatus)}</span>` : '';
  const mail = event.mailStatus ? `<span><b>공유/알림</b>${escapeHtml(event.mailStatus)}</span>` : '';
  const memo = event.memo ? escapeHtml(event.memo) : '입력된 메모가 없습니다.';
  const isLocal = event.source === 'local';
  const googleEditLink = `<button type="button" class="primary schedule-manage-primary schedule-google-edit-link" data-edit-google-event="${escapeHtml(event.id)}">웹에서 수정</button>`;
  const detailManageActions = isLocal
    ? `<button type="button" class="primary schedule-manage-primary" data-edit="${escapeHtml(event.id)}" data-route-key="lectures">수정</button><details class="schedule-more-actions"><summary>더보기</summary><button type="button" class="danger-soft" data-delete="${escapeHtml(event.id)}" data-route-key="lectures">삭제</button></details>`
    : event.source === 'google'
      ? `${googleEditLink}<details class="schedule-more-actions"><summary>더보기</summary><button type="button" class="danger-soft" data-delete-google-event="${escapeHtml(event.id)}">Google 일정 삭제</button></details>`
      : `<span class="schedule-action-note">직접 입력한 일정만 수정/삭제 가능</span>`;
  return `<section class="panel schedule-detail-panel">
    <div class="schedule-detail-head">
      <div><span class="schedule-detail-kicker">${escapeHtml(sourceLabel)}</span><h3>${escapeHtml(event.title || '제목 없음')}</h3><p>${escapeHtml(event.date || '-')} · ${escapeHtml(eventTimeLabel(event))}</p></div>
      <div class="schedule-detail-actions">
        ${badge(event.status || '예정')}
        ${detailManageActions}
        <button type="button" class="ghost" data-schedule-detail-close>닫기</button>
      </div>
    </div>
    ${renderScheduleStatusActions(event, 'detail')}
    <div class="schedule-detail-meta">
      <span><b>분류</b>${escapeHtml(event.channel || event.source || '일정')}</span>
      <span><b>장소</b>${escapeHtml(event.location || event.channel || '미입력')}</span>
      <span><b>유형</b>${escapeHtml(scheduleTypeLabel(event))}</span>
      <span><b>중요도</b>${escapeHtml(event.priority || '보통')}</span>
      <span><b>이동</b>${escapeHtml(event.movement || '온라인')}</span>
      <span><b>시작</b>${escapeHtml(normalizeTime(event.startTime) || String(event.start || '').slice(0, 16) || '-')}</span>
      <span><b>종료</b>${escapeHtml(normalizeTime(event.endTime) || String(event.end || '').slice(0, 16) || '-')}</span>
      ${material}${mail}
    </div>
    <article class="schedule-detail-memo"><h4>메모</h4><p>${memo}</p></article>
    ${renderScheduleTaskLinks(event)}
    <div class="schedule-task-actions single">
      <button type="button" class="primary schedule-task-create-main" data-create-schedule-task="general" data-schedule-event-key="${escapeHtml(scheduleEventKey(event))}">할일 만들기</button>
    </div>
    ${event.htmlLink ? `<a class="schedule-google-link" href="${escapeHtml(event.htmlLink)}" target="_blank" rel="noreferrer">Google Calendar 원문 열기</a>` : ''}
  </section>`;
}

function renderSchedulePopover() {
  const popover = state.schedulePopover;
  if (!popover?.key) return '';
  const event = findScheduleEventByKey(popover.key);
  if (!event) return '';
  const isLocal = event.source === 'local';
  const sourceLabel = event.sourceType === 'course' ? '강의관리 연결 일정' : event.source === 'google' ? 'Google Calendar' : event.source === 'rhythm' ? '운영 리듬' : '대시보드 입력 일정';
  const left = Number.isFinite(popover.x) ? Math.max(12, Math.min(popover.x, window.innerWidth - 324)) : 24;
  const top = Number.isFinite(popover.y) ? Math.max(12, Math.min(popover.y, window.innerHeight - 260)) : 24;
  const memo = event.memo ? `<p>${escapeHtml(event.memo)}</p>` : '<p>메모 없음</p>';
  return `<aside class="schedule-popover" style="left:${left}px; top:${top}px" data-schedule-popover role="dialog" aria-label="일정 수정 삭제 작은 창">
    <div class="schedule-popover-head">
      <span>바로 처리 · ${escapeHtml(sourceLabel)}</span>
      <button type="button" class="ghost icon-btn" data-schedule-popover-close aria-label="작은 창 닫기">×</button>
    </div>
    <strong>${escapeHtml(event.title || '제목 없음')}</strong>
    <small>${escapeHtml(event.date || '-')} · ${escapeHtml(eventTimeLabel(event))}</small>
    <div class="schedule-popover-meta">${badge(event.status || '예정')}<em>${escapeHtml(event.location || event.channel || event.source || '일정')}</em></div>
    ${scheduleTaskSummary(event, true)}
    ${renderScheduleStatusActions(event, 'popover')}
    ${memo}
    <div class="schedule-popover-actions">
      ${isLocal ? `<button type="button" class="primary" data-edit="${escapeHtml(event.id)}" data-route-key="lectures">수정</button>` : ''}
      ${event.source === 'google' ? `<button type="button" class="primary schedule-google-edit-link" data-edit-google-event="${escapeHtml(event.id)}">웹수정</button>` : ''}
      <button type="button" class="ghost" data-schedule-popover-close>닫기</button>
      ${(isLocal || event.source === 'google') ? `<details class="schedule-popover-more"><summary>더보기</summary>${isLocal ? `<button type="button" class="danger-soft" data-delete="${escapeHtml(event.id)}" data-route-key="lectures">로컬 일정 삭제</button>` : ''}${event.source === 'google' ? `<button type="button" class="danger-soft" data-delete-google-event="${escapeHtml(event.id)}">Google 일정 삭제</button>` : ''}</details>` : ''}
    </div>
  </aside>`;
}

function getPopoverPoint(event, element) {
  if (event?.clientX || event?.clientY) return { x: event.clientX + 12, y: event.clientY + 12 };
  const rect = element.getBoundingClientRect();
  return { x: rect.left + Math.min(rect.width, 220) + 10, y: rect.top + 8 };
}

function renderScheduleAgendaItem(event) {
  const category = scheduleCategory(event);
  const key = scheduleEventKey(event);
  const selected = state.selectedScheduleEventKey === key;
  const title = escapeHtml(event.title || '제목 없음');
  const time = escapeHtml(eventTimeLabel(event));
  const place = escapeHtml(event.location || event.channel || event.source || '일정');
  const status = escapeHtml(event.status || '예정');
  const type = escapeHtml(scheduleTypeLabel(event));
  const memo = event.memo ? `<small>${escapeHtml(event.memo)}</small>` : '';
  const taskState = scheduleTaskSummary(event, true);
  return `<button type="button" class="schedule-agenda-item ${category} ${selected ? 'active' : ''}" data-schedule-event-key="${escapeHtml(key)}"><time>${time}</time><div><strong>${title}</strong><span>${type} · ${place} · ${status}</span>${taskState}${memo}</div></button>`;
}

function renderLectureCalendar() {
  const config = CRUD_CONFIG.lectures;
  const filteredLocal = applyFilters(getCollection('lectures'), config);
  const editItem = state.editing ? getCollection('lectures').find((item)=>item.id === state.editing) : null;
  const [year, month] = state.calendarMonth.split('-').map(Number);
  const first = new Date(year, month - 1, 1);
  const last = new Date(year, month, 0);
  const startOffset = (first.getDay() + 6) % 7;
  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let day = 1; day <= last.getDate(); day++) cells.push(new Date(year, month - 1, day));
  while (cells.length % 7) cells.push(null);
  const events = combinedLectureEvents();
  const visibleEvents = events.filter(scheduleEventMatchesFilters);
  const monthEvents = visibleEvents.filter((event)=>String(event.date).startsWith(state.calendarMonth));
  const eventsByDate = visibleEvents.reduce((acc, event) => {
    if (!acc[event.date]) acc[event.date] = [];
    acc[event.date].push(event);
    return acc;
  }, {});
  const googleMeta = state.googleCalendar.meta || {};
  const googleOk = googleMeta.status === 'ok' || googleMeta.status === 'loaded';
  const today = todayIso();
  const selectedDate = state.selectedLectureDate || today;
  const todayEvents = events.filter((event) => event.date === today);
  const weekEventsAll = events.filter((event) => isThisWeek(event.date));
  const openEventsAll = events.filter(scheduleIsOpen);
  const prepEventsAll = events.filter(scheduleNeedsPrep);
  const selectedScheduleEvent = findScheduleEventByKey(state.selectedScheduleEventKey);
  if (selectedScheduleEvent && selectedScheduleEvent.date !== selectedDate) state.selectedLectureDate = selectedScheduleEvent.date;
  const selectedDateEvents = (eventsByDate[selectedDate] || []).slice().sort((a, b) => String(a.startTime || '').localeCompare(String(b.startTime || '')));
  const upcomingEvents = visibleEvents.filter((event)=>String(event.date || '') >= today).slice(0, 5);
  const localLectures = getCollection('lectures');
  const needsPrep = localLectures.filter((item)=>item.materialStatus && !['없음','완료'].includes(item.materialStatus)).length;
  const needsShare = localLectures.filter((item)=>item.mailStatus && !['없음','완료'].includes(item.mailStatus)).length;
  const weekDays = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(`${today}T00:00:00`);
    date.setDate(date.getDate() + index);
    const iso = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    const label = ['일','월','화','수','목','금','토'][date.getDay()];
    const count = (eventsByDate[iso] || []).length;
    return `<button type="button" class="schedule-day-chip ${iso === selectedDate ? 'active' : ''} ${iso === today ? 'today' : ''}" data-calendar-date="${iso}"><span>${label}</span><strong>${date.getDate()}</strong><em>${count || '·'}</em></button>`;
  }).join('');
  const cockpitStats = [
    ['오늘', `${todayEvents.length}건`, '지금 확인할 일정', '오늘'],
    ['이번주', `${weekEventsAll.length}건`, '7일 업무 흐름', '이번주'],
    ['미완료', `${openEventsAll.length}건`, '완료 전 일정', '미완료'],
    ['준비 필요', `${prepEventsAll.length}건`, '준비물·알림/공유', '준비필요'],
  ].map(([label, value, note, focus]) => `<button type="button" class="schedule-cockpit-stat ${state.scheduleFocusFilter === focus ? 'active' : ''}" data-schedule-focus="${escapeHtml(focus)}"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong><small>${escapeHtml(note)}</small></button>`).join('');
  const scheduleFocusChips = ['전체','오늘','이번주','미완료','준비필요','Google'].map((focus) => `<button type="button" class="schedule-focus-chip ${state.scheduleFocusFilter === focus ? 'active' : ''}" data-schedule-focus="${escapeHtml(focus)}"><span>${escapeHtml(focus)}</span><b>${events.filter((event) => scheduleEventMatchesFocus(event, focus)).length}</b></button>`).join('');
  const scheduleStatusChips = ['전체', ...SCHEDULE_STATUS_OPTIONS].map((status) => `<button type="button" class="schedule-status-filter-chip ${(state.filters.status || '전체') === status ? 'active' : ''}" data-chip-filter="status" data-chip-value="${escapeHtml(status)}"><span>${escapeHtml(status)}</span><b>${status === '전체' ? events.length : events.filter((event)=>event.status === status).length}</b></button>`).join('');
  const scheduleFilterPanel = state.scheduleSearchOpen ? `
    <section class="schedule-filter-panel">
      <div class="panel-title-row"><h3>검색/상세 필터</h3><span>필요할 때만 열어 버튼 밀도를 낮춥니다</span></div>
      ${renderToolbar(config)}
      <div class="schedule-filter-help">
        <span>검색어: 일정명·장소·메모</span>
        <span>상태/유형/중요도/기간으로 좁혀보기</span>
        <button type="button" class="ghost" data-google-calendar-refresh>Google 새로고침 · 마지막 ${escapeHtml(googleSyncTimeLabel())}</button>
      </div>
      <div class="schedule-chip-group compact-status"><span>상태 빠른 필터</span><div>${scheduleStatusChips}</div></div>
    </section>` : '';
  const selectedAgenda = selectedDateEvents.length
    ? selectedDateEvents.map(renderScheduleAgendaItem).join('')
    : '<div class="schedule-empty-agenda">선택한 날짜에 일정이 없습니다. 입력폼에서 바로 추가하세요.</div>';
  const nextFocus = upcomingEvents[0]
    ? `<div class="schedule-next-focus"><span>다음 일정</span><strong>${escapeHtml(upcomingEvents[0].title || '제목 없음')}</strong><small>${escapeHtml(`${upcomingEvents[0].date || ''} · ${eventTimeLabel(upcomingEvents[0])}`)}</small></div>`
    : `<div class="schedule-next-focus empty"><span>다음 일정</span><strong>비어 있음</strong><small>입력폼에서 바로 추가하세요</small></div>`;
  $('#routeContent').innerHTML = `
    <div class="schedule-shell">
      <div class="schedule-command-card">
        <div class="schedule-hero-copy">
          <p class="schedule-kicker">Calendar Operating System</p>
          <h2>일정을 입력하는 화면이 아니라, 하루를 지휘하는 화면</h2>
          <p>개인 일정, 업무 일정, 강의, 외부 약속을 한 번에 보고 바로 입력합니다. 저장하면 Google Workspace 계정 Google Calendar에도 자동 반영됩니다.</p>
          ${nextFocus}
        </div>
        <div class="schedule-cockpit-grid">${cockpitStats}</div>
      </div>

      <div class="schedule-toolbar-card">
        <div class="schedule-month-nav">
          <button class="ghost icon-btn" data-calendar-prev aria-label="이전달">‹</button>
          <button class="soft" data-calendar-today>오늘</button>
          <button class="ghost icon-btn" data-calendar-next aria-label="다음달">›</button>
          <strong class="schedule-month-label">▣ ${monthLabel(state.calendarMonth)}</strong>
        </div>
        <div class="schedule-week-rail" aria-label="앞으로 7일 빠른 이동">${weekDays}</div>
        <div class="schedule-command-actions">
          <button class="ghost bell-action" type="button" data-schedule-search-toggle>${state.scheduleSearchOpen ? '검색 닫기' : '⌕ 검색/알림'}</button>
          <button class="primary add-schedule-action" type="button" data-new-item="lectures">+ 바로 입력</button>
        </div>
      </div>

      <section class="schedule-quick-filter-board" aria-label="일정 빠른 보기">
        <div class="schedule-chip-group"><span>빠른 보기</span><div>${scheduleFocusChips}</div></div>
      </section>
      ${renderScheduleTypeLegend()}
      ${scheduleFilterPanel}

      <div class="schedule-main-grid">
        <div class="schedule-calendar-card">
          <div class="schedule-week-labels">${['월','화','수','목','금','토','일'].map((d,idx)=>`<div class="${idx>4?'weekend':''}">${d}</div>`).join('')}</div>
          <div class="schedule-month-grid">
            ${cells.map((date) => {
              if (!date) return '<div class="schedule-cell muted"></div>';
              const iso = `${year}-${String(month).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
              const dayEvents = eventsByDate[iso] || [];
              const isToday = iso === todayIso();
              const isSelected = iso === state.selectedLectureDate;
              const isWeekend = date.getDay() === 0 || date.getDay() === 6;
              return `<div class="schedule-cell ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${isWeekend ? 'weekend' : ''}"><button class="schedule-date" type="button" data-calendar-date="${iso}" title="${iso} 일정 추가">${date.getDate()}</button><div class="schedule-event-stack">${dayEvents.slice(0,5).map((event)=>renderScheduleEvent(event, dayEvents.length > 4)).join('')}${dayEvents.length > 5 ? `<small class="more-events">+${dayEvents.length - 5}개 더</small>` : ''}</div></div>`;
            }).join('')}
          </div>
        </div>

        <aside class="schedule-side-stack">
          <section class="panel schedule-form-panel ${state.scheduleFormOpen || editItem ? 'open' : 'collapsed'}">
            <div class="panel-title-row"><h3>${editItem ? '일정 수정' : '빠른 일정 입력'}</h3><span class="sync-chip ${googleOk ? 'ok' : 'warn'}">${googleOk ? `Google 연동 · ${state.googleCalendar.events.length}건 · ${googleSyncTimeLabel()}` : 'Google 연결 확인 필요'}</span></div>
            <p class="schedule-form-hint">날짜를 누르면 그 날짜로 바로 입력됩니다. 반복은 저장 시 개별 일정으로 펼쳐 Google Calendar에 반영합니다.</p>
            <button type="button" class="schedule-form-toggle" data-schedule-form-toggle>${state.scheduleFormOpen || editItem ? '입력폼 접기' : '+ 일정 추가 폼 열기'}</button>
            ${state.scheduleFormOpen || editItem ? renderForm(config, 'lectures', editItem) : '<div class="schedule-form-collapsed-note">오늘/이번주를 먼저 확인하고, 필요할 때만 입력폼을 펼치세요.</div>'}
          </section>
          <section class="panel today-schedule-panel">
            <div class="panel-title-row"><h3>선택일 실행 순서</h3><span>${escapeHtml(selectedDate)} · ${selectedDateEvents.length}건</span></div>
            <div class="schedule-agenda-list">${selectedAgenda}</div>
          </section>
          ${renderScheduleDetail(selectedScheduleEvent)}
        </aside>
      </div>

      <details class="schedule-management-panel">
        <summary>목록/검색/상태 관리 열기</summary>
        ${renderToolbar(config)}
        ${renderCrudTable(filteredLocal, config, 'lectures')}
      </details>
      ${renderSchedulePopover()}
    </div>
  `;
}

function renderCrud(routeKey) {
  const config = CRUD_CONFIG[routeKey];
  const items = applyFilters(getCollection(config.collection), config);
  const editItem = state.editing ? getCollection(config.collection).find((item)=>item.id === state.editing) : null;
  $('#routeContent').innerHTML = `
    <div class="section-head">
      <div><h2>${escapeHtml(config.title)}</h2><p>검색·필터·추가·수정·상태변경·삭제가 모두 localStorage에 저장됩니다.</p></div>
      <button class="soft" data-new-item="${routeKey}">새 항목</button>
    </div>
    ${renderToolbar(config)}
    <div class="grid-2 crud-grid">
      <div class="crud-table-panel">${renderCrudTable(items, config, routeKey)}</div>
      <div class="panel soft-panel crud-form-panel"><h3>${editItem ? '항목 수정' : '새 항목 추가'}</h3>${renderForm(config, routeKey, editItem)}</div>
    </div>
  `;
}

function profilePurposeCategory(item = {}) {
  const text = `${item.purpose || ''} ${item.title || ''} ${item.headline || ''} ${item.summary || ''}`.toLowerCase();
  const rules = [
    ['AI강사', /ai\s*강사|ai강사|ai.*(강사|강연|교육)|생성형\s*ai|강사.*ai|강연자.*ai|강의자/],
    ['AX컨설턴트', /ax|전환|자동화|업무혁신/],
    ['강의', /강의|특강|교육|커리큘럼|수업|강사/],
    ['저서', /저서|책|출간|원고|전자책|pdf/],
    ['컨설팅', /컨설팅|자문|멘토링|코칭/],
    ['운영채널', /채널|블로그|카페|유튜브|discord|디스코드|커뮤니티|sns/],
    ['자격', /자격|수료|인증|certificate|certification/],
  ];
  return rules.find(([, pattern]) => pattern.test(text))?.[0] || (item.purpose ? '기타' : '기타');
}

function profileHistoryCounts(items = []) {
  const purposeOptions = CRUD_CONFIG.profileHistory.filters.purpose || [];
  return {
    purpose: purposeOptions.reduce((acc, purpose) => {
      acc[purpose] = purpose === '전체' ? items.length : items.filter((item)=>profilePurposeCategory(item) === purpose).length;
      return acc;
    }, {}),
    status: (CRUD_CONFIG.profileHistory.filters.status || []).reduce((acc, status) => {
      acc[status] = status === '전체' ? items.length : items.filter((item)=>item.status === status).length;
      return acc;
    }, {}),
  };
}

function renderProfileFilterBoard(all = [], items = []) {
  const counts = profileHistoryCounts(all);
  const purposeChips = (CRUD_CONFIG.profileHistory.filters.purpose || []).map((purpose) => `<button type="button" class="profile-filter-chip ${(state.filters.purpose || '전체') === purpose ? 'active' : ''}" data-chip-filter="purpose" data-chip-value="${escapeHtml(purpose)}"><span>${escapeHtml(purpose)}</span><b>${counts.purpose[purpose] || 0}</b></button>`).join('');
  const statusChips = (CRUD_CONFIG.profileHistory.filters.status || []).map((status) => `<button type="button" class="profile-filter-chip ${(state.filters.status || '전체') === status ? 'active' : ''}" data-chip-filter="status" data-chip-value="${escapeHtml(status)}"><span>${escapeHtml(status)}</span><b>${counts.status[status] || 0}</b></button>`).join('');
  return `<section class="profile-filter-board" aria-label="프로필 이력 분류 필터">
    <div class="profile-search-row">
      <label class="profile-search-box"><span>⌕</span><input data-filter="query" placeholder="이력명, 기관, 역할, 증빙 링크 검색" value="${escapeHtml(state.filters.query)}" /></label>
      <button class="ghost" data-clear-filters>필터 초기화</button>
      <span class="profile-filter-result">${items.length} / ${all.length}건 표시</span>
    </div>
    <div class="profile-chip-group"><span>분류</span><div>${purposeChips}</div></div>
    <div class="profile-chip-group"><span>반영상태</span><div>${statusChips}</div></div>
  </section>`;
}

function renderProfileHistory() {
  const config = CRUD_CONFIG.profileHistory;
  const all = getCollection('profileHistory');
  const items = applyFilters(all, config);
  const finalItems = all.filter((item)=>['대표이력','반영중'].includes(item.status));
  const representativeItems = all.filter((item)=>item.status === '대표이력');
  const proofNeededItems = all.filter((item)=>item.status === '증빙필요' || (!item.docLink && !(Array.isArray(item.lectureFiles) && item.lectureFiles.length)));
  const categoryCount = new Set(all.map(profilePurposeCategory)).size;
  const latest = all.slice().sort((a,b)=>String(b.versionDate || '').localeCompare(String(a.versionDate || '')))[0];
  const editItem = state.editing ? all.find((item)=>item.id === state.editing) : null;
  const currentView = state.profileHistoryView === 'card' ? 'card' : 'table';
  $('#routeContent').innerHTML = `
    <div class="profile-history-shell">
      <div class="section-head course-hero reference-hero-card">
        <div>
          <p class="eyebrow">PROFILE ARCHIVE</p>
          <h2>프로필 이력관리</h2>
          <p>이 화면은 발송 문서가 아니라 <b>나의 커리어 이력</b>을 관리하는 곳입니다. 강의, 저서, 컨설팅, 운영채널, 자격 이력을 카드로 정리하고 프로필 문서에 반영할 핵심 경력을 고릅니다.</p>
        </div>
        <a class="primary" href="https://example.com/profile-sample" target="_blank" rel="noopener">현재 프로필 문서 열기</a>
      </div>
      <div class="course-kpi-grid reference-kpi-grid profile-kpi-grid">
        <article data-chip-filter="status" data-chip-value="대표이력" class="clickable"><span>대표 이력</span><strong>${representativeItems.length}건</strong><em>프로필 핵심으로 바로 사용</em></article>
        <article data-chip-filter="status" data-chip-value="반영중" class="clickable"><span>반영중</span><strong>${finalItems.filter((item)=>item.status === '반영중').length}건</strong><em>프로필 문서에 편입 중</em></article>
        <article data-chip-filter="status" data-chip-value="증빙필요" class="clickable"><span>증빙 필요</span><strong>${proofNeededItems.length}건</strong><em>링크·파일 보강 대상</em></article>
        <article><span>분류 수</span><strong>${categoryCount}개</strong><em>강의·저서·컨설팅·채널</em></article>
      </div>
      <div class="panel signal-panel">
        <h3>관리 기준</h3>
        <p>나의 커리어를 <b>한 줄 이력</b>으로 계속 쌓아두세요. 강의·저서·컨설팅·운영채널·자격을 따로 등록하고, 대표이력/증빙필요 상태를 표시하면 프로필·제안서·강사소개서에 바로 재사용할 수 있습니다.</p>
        <small>최근 기준일: ${escapeHtml(latest?.versionDate || '없음')} · ${escapeHtml(latest?.title || '첫 기록 필요')}</small>
      </div>
      ${renderProfileFilterBoard(all, items)}
      <div class="profile-history-viewbar panel">
        <div>
          <h3>이력 보기 방식</h3>
          <p>표 보기는 한 줄로 빠르게 훑고, 카드 보기는 상세 설명까지 확인할 때 사용하세요.</p>
        </div>
        <div class="profile-history-view-toggle" role="group" aria-label="프로필 이력 보기 전환">
          <button type="button" class="${currentView === 'table' ? 'active' : ''}" data-profile-view="table" onclick="return switchProfileHistoryView('table')">표 보기</button>
          <button type="button" class="${currentView === 'card' ? 'active' : ''}" data-profile-view="card" onclick="return switchProfileHistoryView('card')">카드 보기</button>
        </div>
      </div>
      <div class="grid-2 crud-grid">
        <div class="crud-table-panel">${currentView === 'table' ? renderProfileHistoryTable(items, config) : renderProfileHistoryList(items, config)}</div>
        <div class="panel soft-panel crud-form-panel"><h3>${editItem ? '커리어 이력 수정' : '새 커리어 이력 추가'}</h3>${renderForm(config, 'profileHistory', editItem)}</div>
      </div>
    </div>
  `;
}


function switchProfileHistoryView(view = 'table') {
  state.profileHistoryView = view === 'card' ? 'card' : 'table';
  localStorage.setItem('ebrainOS.profileHistoryView', state.profileHistoryView);
  render();
  return false;
}
window.switchProfileHistoryView = switchProfileHistoryView;

function profileHistoryShortText(value = '', max = 68) {
  const text = String(value || '').replace(/\s+/g, ' ').trim();
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1)}…`;
}

function renderProfileFileLinks(files = [], compact = false) {
  const list = Array.isArray(files) ? files.filter((file)=>file && file.url) : [];
  if (!list.length) return ''; // 표 보기에서는 빈 자료 문구를 숨겨 링크 옆 조각 텍스트가 나오지 않게 함
  if (compact) {
    const first = list[0];
    return `<div class="profile-file-compact"><a href="${escapeHtml(first.url)}" target="_blank" rel="noopener">자료${list.length}</a></div>`;
  }
  return `<div class="profile-uploaded-files">
    <span>업로드 자료</span>
    <div>${list.map((file)=>`<a href="${escapeHtml(file.url)}" target="_blank" rel="noopener" title="${escapeHtml(file.name || '강의자료')}">${escapeHtml(profileHistoryShortText(file.name || '강의자료', 34))}</a>`).join('')}</div>
  </div>`;
}

function renderProfileTableActions(item, config) {
  const id = escapeHtml(item.id);
  return `<div class="profile-table-actionset">
    <button type="button" class="soft-action" data-edit="${id}" data-route-key="profileHistory">수정</button>
    <button type="button" class="delete-action" data-delete="${id}" data-route-key="profileHistory">삭제</button>
  </div>`;
}

function renderProfileHistoryTable(items, config) {
  if (!items.length) return `<div class="panel"><p class="empty">${escapeHtml(config.empty)}</p></div>`;
  return `<section class="profile-history-table-section" aria-label="커리어 이력 표 보기">
    <div class="profile-history-table-head">
      <div><span>CAREER TABLE</span><strong>${items.length}건 한줄 보기</strong></div>
      <p>상태는 표에서 바로 바꾸고, 자세한 설명은 카드 보기에서 확인하세요.</p>
    </div>
    <div class="profile-history-table-wrap">
      <table class="profile-history-table">
        <thead>
          <tr>
            <th>상태</th>
            <th>이력/활동명</th>
            <th>분류</th>
            <th>역할/기관</th>
            <th>기준일</th>
            <th>링크</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          ${items.map((item) => {
            const fileLinks = renderProfileFileLinks(item.lectureFiles, true);
            const link = `<div class="profile-table-link-stack">${item.docLink ? `<a class="profile-table-link" href="${escapeHtml(item.docLink)}" target="_blank" rel="noopener">링크</a>` : ''}${fileLinks}</div>`;
            return `<tr>
              <td>
                <select class="profile-table-status-select" data-quick-status-select data-route-key="profileHistory" data-id="${escapeHtml(item.id)}" aria-label="프로필 이력 상태 변경">
                  ${(config.statusOptions || []).map((status)=>`<option value="${escapeHtml(status)}" ${(item.status || '정리필요') === status ? 'selected' : ''}>${escapeHtml(status)}</option>`).join('')}
                </select>
              </td>
              <td class="profile-table-title"><b title="${escapeHtml(item.title || item.headline || '')}">${escapeHtml(item.title || item.headline || '제목 없음')}</b></td>
              <td title="${escapeHtml(item.purpose || profilePurposeCategory(item))}"><span class="profile-category-pill">${escapeHtml(profilePurposeCategory(item))}</span></td>
              <td title="${escapeHtml(`${item.headline || '-'} · ${item.sentTo || '미기록'}${item.summary ? `\n${item.summary}` : ''}`)}"><b>${escapeHtml(profileHistoryShortText(item.headline || '-', 24))}</b><span>${escapeHtml(profileHistoryShortText(item.sentTo || '미기록', 24))}</span></td>
              <td>${escapeHtml(item.versionDate || '-')}</td>
              <td>${link}</td>
              <td class="profile-table-actions">${renderProfileTableActions(item, config)}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  </section>`;
}


function renderProfileHistoryList(items, config) {
  if (!items.length) return `<div class="panel"><p class="empty">${escapeHtml(config.empty)}</p></div>`;
  return `<div class="profile-history-list">
    ${items.map((item) => {
      const link = item.docLink ? `<a class="profile-history-link" href="${escapeHtml(item.docLink)}" target="_blank" rel="noopener">Canva/문서 열기</a>` : '<span class="muted">문서 링크 없음</span>';
      return `<article class="profile-history-card">
        <div class="profile-history-card-head">
          <div>
            <span class="badge">${escapeHtml(item.status || '초안')}</span><span class="profile-category-pill">${escapeHtml(profilePurposeCategory(item))}</span>
            <h3>${escapeHtml(item.title || item.headline || '제목 없음')}</h3>
            <p>${escapeHtml(item.purpose || '사용처 미정')}</p>
          </div>
          <div class="profile-history-date"><span>기준일</span><strong>${escapeHtml(item.versionDate || '-')}</strong>${item.sentDate ? `<em>시작/발생 ${escapeHtml(item.sentDate)}</em>` : ''}</div>
        </div>
        <div class="profile-history-meta">
          <div><span>역할/포지션</span><b>${escapeHtml(item.headline || '-')}</b></div>
          <div><span>기관/브랜드/대상</span><b>${escapeHtml(item.sentTo || '미기록')}</b></div>
          <div><span>증빙/대표 링크</span><b>${link}</b></div>
        </div>
        ${item.summary ? `<p class="profile-history-summary">${escapeHtml(item.summary)}</p>` : ''}
        ${item.sentHistory ? `<div class="profile-history-memo sent-log"><span>프로필 활용/제출 기록</span><p>${escapeHtml(item.sentHistory)}</p></div>` : ''}
        ${item.changeMemo ? `<div class="profile-history-memo"><span>프로필 반영 메모</span><p>${escapeHtml(item.changeMemo)}</p></div>` : ''}
        <div class="profile-history-actions">${renderRowActions(item, config, 'profileHistory')}</div>
      </article>`;
    }).join('')}
  </div>`;
}

function renderCourseManagement() {
  const config = CRUD_CONFIG.courseMgmt;
  const items = applyFilters(getCollection('courseItems'), config);
  const all = getCollection('courseItems');
  const editItem = state.editing ? all.find((item)=>item.id === state.editing) : null;
  const showCourseForm = state.courseAddOpen || !!editItem;
  const operating = all.filter((item)=>['운영중','판매중'].includes(item.status));
  const needsMaterial = all.filter((item)=>!['완료'].includes(item.materialStatus));
  const needsNotice = all.filter((item)=>['작성필요','발송준비'].includes(item.mailStatus));
  const pastOpenItems = all.filter(isPastOpenCourse);
  const needsScheduleItems = all.filter(courseNeedsScheduleSync);
  const missingOpenDateItems = all.filter((item)=>courseScheduleStatus(item).action === 'date');
  const nextOpen = all.filter((item)=>item.launchDate && (courseOpenDiff(item) ?? 9999) >= 0).sort((a,b)=>String(a.launchDate).localeCompare(String(b.launchDate)))[0];
  const formatCounts = ['전체','VOD','라이브','오프라인','PDF/자료','코칭','기업교육'].map((format)=> {
    const count = format === '전체' ? all.length : all.filter((item)=>item.format === format).length;
    const active = (state.filters.format || '전체') === format;
    return `<button type="button" class="course-filter-chip ${active ? 'active' : ''}" data-chip-filter="format" data-chip-value="${escapeHtml(format)}"><span>${escapeHtml(format)}</span><b>${count}</b></button>`;
  }).join('');
  const statusCounts = ['전체','기획중','준비중','운영중','판매중','완료','보류'].map((status)=> {
    const count = status === '전체' ? all.length : all.filter((item)=>item.status === status).length;
    const active = (state.filters.status || '전체') === status;
    return `<button type="button" class="course-filter-chip ${active ? 'active' : ''}" data-chip-filter="status" data-chip-value="${escapeHtml(status)}"><span>${escapeHtml(status)}</span><b>${count}</b></button>`;
  }).join('');
  const opsFocusOptions = [
    ['전체', all.length, '전체 강의'],
    ['지난오픈', pastOpenItems.length, '오픈일 지남'],
    ['일정필요', needsScheduleItems.length, '일정 생성'],
    ['오픈일없음', missingOpenDateItems.length, '날짜 입력'],
    ['준비필요', all.filter((item)=>coursePriorityIssues(item).some((issue)=>['자료 준비 필요','공지/안내 필요','다음 할 일 없음'].includes(issue.label))).length, '자료·공지'],
  ];
  const opsFocusChips = opsFocusOptions.map(([focus, count, desc]) => `<button type="button" class="course-filter-chip ops-focus ${state.courseOpsFocus === focus ? 'active' : ''}" data-course-ops-focus="${escapeHtml(focus)}"><span>${escapeHtml(focus)}</span><b>${count}</b><em>${escapeHtml(desc)}</em></button>`).join('');
  const focusedItems = items.filter((item)=>courseMatchesOpsFocus(item));
  const operationItems = sortCourseItemsForOperations(focusedItems);
  $('#routeContent').innerHTML = `
    <div class="course-shell reference-course-shell">
      <div class="section-head course-hero reference-hero-card">
        <div>
          <p class="eyebrow">COURSE WORKSPACE</p>
          <h2>강의관리</h2>
          <p>강의명, 회차 날짜, 자료 준비, 안내/공지까지 한 화면에서 정리합니다. 8회차 강의는 날짜 8개를 입력하면 일정관리 달력에 바로 반영됩니다.</p>
        </div>
        <button class="primary course-add-main" type="button" data-course-add-open onclick="return openCourseAddPanel()">+ 강의 추가</button>
      </div>
      ${showCourseForm ? `
        <section id="courseInlineAddPanel" class="panel soft-panel crud-form-panel course-form-panel reference-course-form course-inline-add-panel" aria-label="강의 추가 입력창">
          <div class="course-form-head">
            <div>
              <span class="course-form-kicker">${editItem ? 'EDIT COURSE' : 'ADD COURSE'}</span>
              <h3>${editItem ? '강의 수정' : '새 강의 추가'}</h3>
              <p>화면 안에서 바로 입력하고 저장합니다. 필요한 칸만 먼저 채워도 됩니다.</p>
            </div>
            <div class="course-form-actions-head">
              <div class="course-form-steps"><span>01 기본</span><span>02 회차</span><span>03 운영</span></div>
              <button type="button" class="course-inline-close" data-course-add-close onclick="return closeCourseAddPanel()" aria-label="강의 추가 창 닫기">×</button>
            </div>
          </div>
          <p class="course-form-guide">8회차면 회차 날짜에 8개 날짜를 줄 단위로 입력하세요. 날짜를 비우면 첫 회차/오픈일부터 매주 자동 생성됩니다.</p>
          ${renderForm(config, 'courseMgmt', editItem)}
        </section>
      ` : ''}
      <div class="course-kpi-grid reference-kpi-grid">
        <article><span>지난 오픈일</span><strong>${pastOpenItems.length}건</strong><em>완료/보류 전 정리 필요</em></article>
        <article><span>일정 생성 필요</span><strong>${needsScheduleItems.length}건</strong><em>오픈일은 있으나 연동 전</em></article>
        <article><span>오픈일 없음</span><strong>${missingOpenDateItems.length}건</strong><em>첫 회차 날짜 입력 필요</em></article>
        <article class="course-next-open-card ${nextOpen ? 'clickable' : ''}" ${nextOpen ? `data-edit="${escapeHtml(nextOpen.id)}" data-route-key="courseMgmt" title="다음 오픈 강의 수정"` : ''}><span>다음 오픈</span><strong>${escapeHtml(nextOpen?.launchDate || '미정')}</strong><em>${escapeHtml(nextOpen?.title || '예정 오픈 없음')}</em></article>
      </div>
      ${renderCourseCleanupBoard(pastOpenItems, needsScheduleItems, missingOpenDateItems)}
      ${renderCourseOperationOverview(operationItems, all)}
      ${renderCoursePriorityBoard(all)}
      <section class="course-filter-board" aria-label="강의 필터">
        <div class="course-search-row">
          <label class="course-search-box"><span>⌕</span><input class="search" data-filter="query" placeholder="강의명, 주관, 자료, 다음 할 일 검색" value="${escapeHtml(state.filters.query)}" /></label>
          <button class="ghost" data-clear-filters>필터 초기화</button>
        </div>
        <div class="course-chip-group"><span>정리 상태</span><div class="course-chip-row ops-focus-row">${opsFocusChips}</div></div>
        <div class="course-chip-group"><span>상태</span><div class="course-chip-row">${statusCounts}</div></div>
        <div class="course-chip-group"><span>형식</span><div class="course-chip-row secondary">${formatCounts}</div></div>
      </section>
      <div class="course-management-grid reference-course-grid">
        <div class="crud-table-panel reference-course-table course-card-panel">
          <div class="panel-title-row course-list-title-row"><div><span class="course-list-kicker">OPERATION LIST</span><h3>등록된 강의 운영 목록</h3><p>급한 이슈가 있는 강의가 위로 오고, 진행률·자료·공지·일정 상태를 한 줄 흐름으로 확인합니다.</p></div><span>${operationItems.length}건 표시</span></div>
          ${renderCourseCards(operationItems, config)}
        </div>
      </div>
    </div>
  `;
}

function renderCourseCleanupBoard(pastOpenItems = [], needsScheduleItems = [], missingOpenDateItems = []) {
  const sections = [
    { key: '지난오픈', title: '지난 오픈일 정리', desc: '오픈일이 지났지만 완료/보류가 아닌 강의입니다. 상태를 완료/보류로 정리하거나 다음 회차 날짜를 수정하세요.', items: pastOpenItems, action: 'edit' },
    { key: '일정필요', title: '일정 생성 필요', desc: '오픈일 또는 회차 날짜는 있는데 일정관리 연동이 아직 없습니다. 버튼으로 회차 일정을 바로 생성하세요.', items: needsScheduleItems, action: 'sync' },
    { key: '오픈일없음', title: '오픈일 입력 필요', desc: '회차 날짜를 만들 수 없어 일정 생성이 막힌 강의입니다.', items: missingOpenDateItems, action: 'date' },
  ];
  const cards = sections.map((section) => {
    const list = section.items.slice(0, 3).map((item) => {
      const schedule = courseScheduleStatus(item);
      const actionButton = section.action === 'sync'
        ? `<button type="button" class="course-mini-action" data-course-sync-schedule="${escapeHtml(item.id)}">일정 생성</button>`
        : section.action === 'date'
          ? `<button type="button" class="course-mini-action warn" data-course-open-date="${escapeHtml(item.id)}">오픈일 입력</button>`
          : `<button type="button" class="course-mini-action" data-edit="${escapeHtml(item.id)}" data-route-key="courseMgmt">정리</button>`;
      return `<li><div><b>${escapeHtml(item.title || '이름 없는 강의')}</b><span>${escapeHtml(item.launchDate || '오픈일 미정')} · ${escapeHtml(courseDday(item))} · ${escapeHtml(schedule.label)}</span></div>${actionButton}</li>`;
    }).join('');
    return `<article class="course-cleanup-card ${section.items.length ? 'needs-care' : 'clear'}">
      <div class="course-cleanup-head"><button type="button" data-course-ops-focus="${escapeHtml(section.key)}"><span>${escapeHtml(section.title)}</span><strong>${section.items.length}</strong></button><p>${escapeHtml(section.desc)}</p></div>
      <ul>${list || '<li class="empty-cleanup">정리할 항목이 없습니다.</li>'}</ul>
    </article>`;
  }).join('');
  return `<section class="course-cleanup-board" aria-label="강의 오픈일과 일정 생성 정리">${cards}</section>`;
}

function courseOpenDiff(item = {}) {
  if (!item.launchDate) return null;
  const diff = Math.round((new Date(`${item.launchDate}T00:00:00`) - new Date(`${todayIso()}T00:00:00`)) / 86400000);
  return Number.isNaN(diff) ? null : diff;
}

function isPastOpenCourse(item = {}) {
  const diff = courseOpenDiff(item);
  return diff !== null && diff < 0 && !['완료','보류'].includes(item.status || '');
}

function courseNeedsScheduleSync(item = {}) {
  return courseScheduleStatus(item).action === 'sync';
}

function courseMatchesOpsFocus(item = {}, focus = state.courseOpsFocus || '전체') {
  if (!focus || focus === '전체') return true;
  if (focus === '지난오픈') return isPastOpenCourse(item);
  if (focus === '일정필요') return courseNeedsScheduleSync(item);
  if (focus === '오픈일없음') return courseScheduleStatus(item).action === 'date';
  if (focus === '준비필요') return coursePriorityIssues(item).some((issue)=>['자료 준비 필요','공지/안내 필요','다음 할 일 없음'].includes(issue.label));
  return true;
}

function courseScheduleStatus(item = {}) {
  const linkedIds = Array.isArray(item.linkedLectureIds) ? item.linkedLectureIds : [];
  const existingCount = linkedIds.filter((id)=>getCollection('lectures').some((lecture)=>lecture.id === id)).length;
  const expectedCount = parseCourseSessionDates(item).length;
  const count = existingCount || linkedIds.length;
  const diff = courseOpenDiff(item);
  const pastText = diff !== null && diff < 0 && !['완료','보류'].includes(item.status || '') ? ` · ${Math.abs(diff)}일 지남` : '';
  if (count) return { tone: pastText ? 'warn' : 'ok', label: `${count}개 일정`, detail: `${item.scheduleSyncedAt ? `최근 동기화 ${String(item.scheduleSyncedAt).slice(0, 10)}` : '일정관리 연결됨'}${pastText}`, action: 'view' };
  if (expectedCount) return { tone: 'warn', label: '일정 생성 필요', detail: `${expectedCount}개 회차 생성 예정${pastText}`, action: 'sync' };
  return { tone: 'muted', label: '날짜 없음', detail: '오픈일 입력 필요', action: 'date' };
}

function courseStatusTone(status = '') {
  if (status === '운영중') return 'run';
  if (status === '판매중') return 'sell';
  if (status === '준비중') return 'prep';
  if (status === '완료') return 'done';
  if (status === '보류') return 'hold';
  return 'plan';
}

function courseProgress(item = {}) {
  let score = 0;
  if (['운영중','판매중','완료'].includes(item.status)) score += 25;
  if (item.materialStatus === '완료') score += 25;
  if (['발송완료','없음'].includes(item.mailStatus)) score += 20;
  const schedule = courseScheduleStatus(item);
  if (schedule.action === 'view') score += 20;
  if (String(item.nextAction || '').trim()) score += 10;
  return Math.min(100, score);
}

function courseDday(item = {}) {
  if (!item.launchDate) return '오픈일 미정';
  const diff = courseOpenDiff(item);
  if (diff === null) return '오픈일 확인';
  if (diff === 0) return 'D-Day';
  if (diff > 0) return `D-${diff}`;
  return `D+${Math.abs(diff)}`;
}

function courseUrgencyScore(item = {}) {
  const issues = coursePriorityIssues(item).length;
  const statusBoost = ['운영중','판매중'].includes(item.status) ? 2 : item.status === '준비중' ? 1 : 0;
  let dateBoost = 0;
  if (item.launchDate) {
    const diff = Math.round((new Date(`${item.launchDate}T00:00:00`) - new Date(`${todayIso()}T00:00:00`)) / 86400000);
    if (!Number.isNaN(diff) && diff >= 0 && diff <= 14) dateBoost = 2;
  } else {
    dateBoost = 1;
  }
  return issues * 10 + statusBoost + dateBoost;
}

function sortCourseItemsForOperations(items = []) {
  return [...items].sort((a,b) => {
    const scoreDiff = courseUrgencyScore(b) - courseUrgencyScore(a);
    if (scoreDiff) return scoreDiff;
    return String(a.launchDate || '9999-12-31').localeCompare(String(b.launchDate || '9999-12-31'));
  });
}

function renderCourseOperationOverview(items = [], all = []) {
  const stages = ['기획중','준비중','운영중','판매중','완료','보류'];
  const stageRail = stages.map((status) => {
    const count = all.filter((item)=>item.status === status).length;
    return `<button type="button" class="course-stage-pill ${courseStatusTone(status)} ${(state.filters.status || '전체') === status ? 'active' : ''}" data-chip-filter="status" data-chip-value="${escapeHtml(status)}"><span>${escapeHtml(status)}</span><b>${count}</b></button>`;
  }).join('');
  const topItems = items.slice(0, 3);
  return `<section class="course-operation-overview" aria-label="강의 운영목록 요약">
    <div class="course-operation-head">
      <div><span>LECTURE OPS</span><h3>운영목록 한눈에 보기</h3><p>상태 흐름과 우선순위를 먼저 보고, 아래 카드에서 바로 수정합니다.</p></div>
      <strong>${items.length}<small>개 강의</small></strong>
    </div>
    <div class="course-stage-rail">${stageRail}</div>
    <div class="course-spotlight-list">
      ${topItems.length ? topItems.map((item, index)=>{
        const issues = coursePriorityIssues(item);
        const progress = courseProgress(item);
        return `<article class="course-spotlight ${courseStatusTone(item.status)}">
          <div class="course-spotlight-rank">${index + 1}</div>
          <div class="course-spotlight-body">
            <div class="course-spotlight-title"><b>${escapeHtml(item.title || '이름 없는 강의')}</b><span>${escapeHtml(courseDday(item))}</span></div>
            <p>${escapeHtml(item.nextAction || issues[0]?.label || '다음 할 일을 입력하세요')}</p>
            <div class="course-progress"><i style="width:${progress}%"></i></div>
          </div>
          <button type="button" class="course-mini-action" data-edit="${escapeHtml(item.id)}" data-route-key="courseMgmt">수정</button>
        </article>`;
      }).join('') : '<p class="empty">표시할 강의가 없습니다. + 강의 추가로 첫 강의를 등록하세요.</p>'}
    </div>
  </section>`;
}

function coursePriorityIssues(item = {}) {
  const issues = [];
  const schedule = courseScheduleStatus(item);
  if (isPastOpenCourse(item)) issues.push({ label: '지난 오픈일 정리', action: 'edit', tone: 'danger' });
  if (schedule.action === 'sync') issues.push({ label: '일정 생성 필요', action: 'sync', tone: 'warn' });
  if (schedule.action === 'date') issues.push({ label: '오픈일 입력 필요', action: 'date', tone: 'danger' });
  if (!['완료'].includes(item.materialStatus)) issues.push({ label: '자료 준비 필요', action: 'edit', tone: 'warn' });
  if (['작성필요','발송준비'].includes(item.mailStatus)) issues.push({ label: '공지/안내 필요', action: 'edit', tone: 'warn' });
  if (!String(item.nextAction || '').trim()) issues.push({ label: '다음 할 일 없음', action: 'edit', tone: 'muted' });
  return issues;
}

function renderCoursePriorityBoard(items = []) {
  const priorityItems = items
    .map((item)=>({ item, issues: coursePriorityIssues(item) }))
    .filter((entry)=>entry.issues.length)
    .sort((a,b)=>b.issues.length - a.issues.length)
    .slice(0, 4);
  if (!priorityItems.length) {
    return `<section class="course-priority-board all-clear"><div><span>오늘 먼저 처리할 강의</span><h3>급한 강의 이슈가 없습니다</h3><p>자료·공지·일정 연동 상태가 모두 안정적입니다.</p></div></section>`;
  }
  return `<section class="course-priority-board" aria-label="오늘 먼저 처리할 강의">
    <div class="course-priority-head"><span>오늘 먼저 처리할 강의</span><strong>${priorityItems.length}건</strong><p>일정·오픈일·자료·공지 문제를 바로 처리하세요.</p></div>
    <div class="course-priority-list">
      ${priorityItems.map(({ item, issues }) => {
        const primary = issues[0];
        const action = primary.action === 'sync'
          ? `<button type="button" class="soft" data-course-sync-schedule="${escapeHtml(item.id)}">일정 생성</button>`
          : primary.action === 'date'
            ? `<button type="button" class="soft" data-course-open-date="${escapeHtml(item.id)}">오픈일 입력</button>`
            : `<button type="button" class="soft" data-edit="${escapeHtml(item.id)}" data-route-key="courseMgmt">수정하기</button>`;
        return `<article class="course-priority-item">
          <div><b>${escapeHtml(item.title || '이름 없는 강의')}</b><span>${issues.map((issue)=>escapeHtml(issue.label)).join(' · ')}</span></div>
          ${action}
        </article>`;
      }).join('')}
    </div>
  </section>`;
}

function renderCourseCards(items, config) {
  if (!items.length) return `<div class="panel"><p class="empty">${escapeHtml(config.empty)}</p></div>`;
  return `<div class="course-card-list">
    ${items.map((item)=> {
      const schedule = courseScheduleStatus(item);
      const issues = coursePriorityIssues(item);
      const scheduleAction = schedule.action === 'sync'
        ? `<button type="button" class="course-mini-action" data-course-sync-schedule="${escapeHtml(item.id)}">일정 생성</button>`
        : schedule.action === 'date'
          ? `<button type="button" class="course-mini-action warn" data-course-open-date="${escapeHtml(item.id)}">오픈일 입력</button>`
          : `<button type="button" class="course-mini-action" data-route="lectures">일정보기</button>`;
      return `<article class="course-card ${courseStatusTone(item.status)} ${issues.length ? 'has-issues' : 'stable'}">
        <div class="course-card-main">
          <div class="course-card-title-row">
            <div class="course-title-block"><span class="course-status-ribbon ${courseStatusTone(item.status)}">${escapeHtml(item.status || '기획중')}</span><h4>${escapeHtml(item.title || '이름 없는 강의')}</h4><p>${escapeHtml(item.audience || '주관 미정')}</p></div>
            <div class="course-card-badges">${badge(item.format || '-')} <span class="course-dday-chip">${escapeHtml(courseDday(item))}</span></div>
          </div>
          <div class="course-progress-row"><span>운영 준비도</span><div class="course-progress"><i style="width:${courseProgress(item)}%"></i></div><b>${courseProgress(item)}%</b></div>
          <div class="course-card-meta">
            <span><b>자료</b>${badge(item.materialStatus || '-')}</span>
            <span><b>공지</b>${badge(item.mailStatus || '-')}</span>
            <span><b>회차</b>${escapeHtml(item.sessionCount || '1')}회</span>
            <span><b>오픈</b>${escapeHtml(item.launchDate || '미정')}</span>
          </div>
          <div class="course-card-schedule ${schedule.tone}"><div><b>${escapeHtml(schedule.label)}</b><small>${escapeHtml(schedule.detail)}</small></div>${scheduleAction}</div>
          <div class="course-card-next-edit">
            <label for="course-next-${escapeHtml(item.id)}">다음 할 일</label>
            <div>
              <textarea id="course-next-${escapeHtml(item.id)}" data-course-next-action-input="${escapeHtml(item.id)}" rows="2" placeholder="다음에 처리할 일을 바로 입력하세요">${escapeHtml(item.nextAction || '')}</textarea>
              <button type="button" class="course-mini-action" data-course-next-action-save="${escapeHtml(item.id)}">저장</button>
            </div>
          </div>
          ${issues.length ? `<div class="course-issue-row">${issues.slice(0, 4).map((issue)=>`<span class="${escapeHtml(issue.tone)}">${escapeHtml(issue.label)}</span>`).join('')}</div>` : ''}
        </div>
        <div class="course-card-actions">
          <label>상태 변경
            <select class="course-status-select" data-quick-status-select data-route-key="courseMgmt" data-id="${escapeHtml(item.id)}" aria-label="강의 상태 변경">
              ${config.statusOptions.map((status)=>`<option value="${escapeHtml(status)}" ${item.status === status ? 'selected' : ''}>${escapeHtml(status)}</option>`).join('')}
            </select>
          </label>
          <button class="soft-action" data-edit="${escapeHtml(item.id)}" data-route-key="courseMgmt">수정</button>
          <button class="delete-action" data-delete="${escapeHtml(item.id)}" data-route-key="courseMgmt">삭제</button>
        </div>
      </article>`;
    }).join('')}
  </div>`;
}

function renderToolbar(config) {
  const filterSelects = Object.entries(config.filters || {}).map(([key, options]) => `
    <select data-filter="${key}" aria-label="${key} 필터">
      ${options.map((opt)=>`<option value="${escapeHtml(opt)}" ${state.filters[key] === opt ? 'selected' : ''}>${escapeHtml(opt)}</option>`).join('')}
    </select>
  `).join('');
  return `
    <div class="toolbar">
      <input class="search" data-filter="query" placeholder="검색어 입력" value="${escapeHtml(state.filters.query)}" />
      ${filterSelects}
      <button class="ghost" data-clear-filters>필터 초기화</button>
    </div>
  `;
}

function renderCrudTable(items, config, routeKey) {
  if (!items.length) return `<div class="panel"><p class="empty">${escapeHtml(config.empty)}</p></div>`;
  const headers = config.columns.map(col => `<th>${labelFor(config, col)}</th>`).join('') + '<th>작업</th>';
  const rows = items.map((item) => `
    <tr>
      ${config.columns.map((col)=>`<td>${formatCell(col, item[col], item, routeKey)}</td>`).join('')}
      <td>${renderRowActions(item, config, routeKey)}</td>
    </tr>
  `).join('');
  return `<div class="table-wrap"><table><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table></div>`;
}

function renderRowActions(item, config, routeKey) {
  if (routeKey === 'courseMgmt') {
    return `<div class="row-actions course-row-actions">
      <select class="course-status-select" data-quick-status-select data-route-key="${routeKey}" data-id="${escapeHtml(item.id)}" aria-label="강의 상태 변경">
        ${config.statusOptions.map((status)=>`<option value="${escapeHtml(status)}" ${item.status === status ? 'selected' : ''}>${escapeHtml(status)}</option>`).join('')}
      </select>
      <button class="soft-action" data-edit="${escapeHtml(item.id)}" data-route-key="${routeKey}">수정</button>
      <button class="delete-action" data-delete="${escapeHtml(item.id)}" data-route-key="${routeKey}">삭제</button>
    </div>`;
  }
  return `<div class="row-actions">
    ${config.statusOptions.map((status)=>`<button data-quick-status="${escapeHtml(status)}" data-route-key="${routeKey}" data-id="${escapeHtml(item.id)}">${escapeHtml(status)}</button>`).join('')}
    <button data-edit="${escapeHtml(item.id)}" data-route-key="${routeKey}">수정</button>
    <button data-delete="${escapeHtml(item.id)}" data-route-key="${routeKey}">삭제</button>
  </div>`;
}

function labelFor(config, field) {
  if (field === 'scheduleSync') return '일정 연동';
  const found = config.fields.find((f)=>f.name === field);
  return found ? escapeHtml(found.label) : escapeHtml(field);
}

function formatCell(col, value, item = null, routeKey = '') {
  if (col === 'scheduleSync') return formatScheduleSyncCell(item);
  if (['status','priority','materialStatus','mailStatus','type','format'].includes(col)) return badge(value || '-');
  if (col === 'startTime') return `<strong class="time-cell">${escapeHtml(normalizeTime(value, '10:00'))}</strong>`;
  if (col === 'endTime') return `<strong class="time-cell">${escapeHtml(normalizeTime(value, '11:00'))}</strong>`;
  if (routeKey === 'courseMgmt' && ['title', 'nextAction'].includes(col)) return `<span class="course-truncate-cell" title="${escapeHtml(value ?? '-')}">${escapeHtml(value ?? '-')}</span>`;
  return escapeHtml(value ?? '-');
}

function formatScheduleSyncCell(item = {}) {
  const linkedIds = Array.isArray(item?.linkedLectureIds) ? item.linkedLectureIds : [];
  const existingCount = linkedIds.filter((id)=>getCollection('lectures').some((lecture)=>lecture.id === id)).length;
  const expectedCount = parseCourseSessionDates(item || {}).length;
  const count = existingCount || linkedIds.length;
  const label = count ? `${count}개 일정` : expectedCount ? '연동 전' : '날짜 없음';
  const detail = count && item.scheduleSyncedAt ? `최근 동기화 ${String(item.scheduleSyncedAt).slice(0, 10)}` : (expectedCount ? `${expectedCount}개 생성 예정` : '오픈일 입력 필요');
  const tone = count ? 'ok' : expectedCount ? 'warn' : 'muted';
  return `<span class="schedule-sync-cell ${tone}"><b>${escapeHtml(label)}</b><small>${escapeHtml(detail)}</small></span>`;
}

function renderForm(config, routeKey, item = null) {
  const values = item || {};
  const formSubmitAttr = ['courseMgmt','profileHistory'].includes(routeKey) ? ' onsubmit="return submitCrudFormDirect(this)"' : '';
  const submitClickAttr = ['courseMgmt','profileHistory'].includes(routeKey) ? ' onclick="return submitCrudFormDirect(this.form)"' : '';
  const googleSyncControl = routeKey === 'lectures' ? `
    <input type="hidden" name="syncGoogleCalendar" value="on" />
    <div class="calendar-sync-notice google-sync-control">
      <strong>Google Calendar 자동 연동</strong>
      <span>Google Workspace 계정 캘린더에 일정이 자동 반영됩니다.${values.googleEventId ? ` 연결 ID: ${escapeHtml(values.googleEventId)}` : ''}</span>
    </div>
    <p class="note compact">연동 서버가 실행 중이면 저장·수정 내용이 Google Calendar에 함께 반영됩니다.</p>
  ` : '';
  const inquiryTaskControl = routeKey === 'inquiries' ? `
    <label class="check-item inquiry-task-control">
      <input type="checkbox" name="syncInquiryTask" ${values.taskId ? 'checked' : 'checked'} />
      <span>오늘의 할일에도 자동 생성/동기화 ${values.taskId ? `(연결 ID: ${escapeHtml(values.taskId)})` : ''}</span>
    </label>
    <p class="note compact">문의 저장 시 응대 할일을 만들고, 문의 수정/완료 상태를 연결된 할일에 반영합니다.</p>
  ` : '';
  const courseScheduleControl = routeKey === 'courseMgmt' ? `
    <label class="check-item course-schedule-control">
      <input type="checkbox" name="syncCourseSchedule" checked />
      <span>회차 날짜를 일정관리에도 자동 생성/동기화 ${values.linkedLectureIds?.length ? `(${values.linkedLectureIds.length}개 연결됨)` : ''}</span>
    </label>
    <p class="note compact">8회차면 회차 날짜에 8개 날짜를 줄 단위로 입력하세요. 저장하면 일정관리 달력에 색상 라벨로 표시됩니다.</p>
  ` : '';
  const meetingTaskControl = routeKey === 'meetings' ? `
    <label class="check-item meeting-task-control">
      <input type="checkbox" name="syncMeetingTasks" />
      <span>후속 할일을 오늘의 할일로 같이 만들기</span>
    </label>
    <p class="note compact">후속 할일 칸에 줄 단위로 적고 체크하면 할일관리에도 자동 추가됩니다.</p>
  ` : '';
  const inputs = config.fields.map((field) => {
    const value = values[field.name] ?? field.default ?? (field.type === 'date' ? (routeKey === 'lectures' && field.name === 'date' && !item ? (state.selectedLectureDate || todayIso()) : todayIso()) : field.type === 'time' ? (field.default || '') : '');
    const placeholder = field.placeholder ? ` placeholder="${escapeHtml(field.placeholder)}"` : '';
    const help = field.help ? `<small class="field-help">${escapeHtml(field.help)}</small>` : '';
    if (field.type === 'select') {
      return `<label>${escapeHtml(field.label)}<select name="${field.name}">${field.options.map((opt)=>`<option value="${escapeHtml(opt)}" ${value === opt ? 'selected' : ''}>${escapeHtml(opt)}</option>`).join('')}</select>${help}</label>`;
    }
    if (field.type === 'textarea') {
      return `<label>${escapeHtml(field.label)}<textarea name="${field.name}"${placeholder} ${field.required ? 'required' : ''}>${escapeHtml(value)}</textarea>${help}</label>`;
    }
    if (field.type === 'file') {
      const existing = renderProfileFileLinks(values[field.name]);
      return `<label class="file-upload-field">${escapeHtml(field.label)}<input name="${field.name}" type="file" ${field.multiple ? 'multiple' : ''} ${field.accept ? `accept="${escapeHtml(field.accept)}"` : ''} ${field.required ? 'required' : ''} />${help}${existing}</label>`;
    }
    return `<label>${escapeHtml(field.label)}<input name="${field.name}" type="${field.type}" value="${escapeHtml(value)}"${placeholder} ${field.required ? 'required' : ''} />${help}</label>`;
  }).join('');
  return `
    <form class="form-grid" data-crud-form="${routeKey}"${formSubmitAttr}>
      ${inputs}
      ${googleSyncControl}
      ${inquiryTaskControl}
      ${courseScheduleControl}
      ${meetingTaskControl}
      <div class="form-actions">
        <button class="primary" type="submit"${submitClickAttr}>${item ? '수정 저장' : '추가 저장'}</button>
        ${item ? '<button class="ghost" type="button" data-cancel-edit>수정 취소</button>' : ''}
      </div>
    </form>
  `;
}

function renderReadOnly({ title, description, collection, columns }) {
  const items = getCollection(collection);
  $('#routeContent').innerHTML = `
    <div class="section-head"><div><h2>${escapeHtml(title)}</h2><p>${escapeHtml(description)}</p></div></div>
    ${renderSimpleTable(items, columns)}
  `;
}

const GMAIL_LABEL_GROUPS = [
  { key: '전체', title: '전체', desc: '현재 검색 결과 전체 보기', query: 'newer_than:30d', icon: '∑' },
  { key: '받은메일', title: '받은메일', desc: '내가 받은 Inbox 메일만 보기', query: 'in:inbox newer_than:30d', icon: '□' },
  { key: '보낸메일', title: '보낸메일', desc: '내가 보낸 메일 별도 확인', query: 'in:sent newer_than:30d', icon: '↗' },
  { key: '안읽음', title: '안읽음', desc: '받은 메일 중 먼저 확인', query: 'in:inbox is:unread newer_than:30d', icon: '●' },
  { key: '중요', title: '중요', desc: '받은 메일 중 중요 표시', query: 'in:inbox is:important newer_than:30d', icon: '!' },
  { key: '소셜', title: '소셜', desc: '받은 LinkedIn·SNS 알림', query: 'in:inbox category:social newer_than:30d', icon: '＠' },
  { key: '프로모션', title: '프로모션', desc: '받은 광고·마케팅 메일', query: 'in:inbox category:promotions newer_than:30d', icon: '%' },
  { key: '업데이트', title: '업데이트', desc: '받은 서비스·알림 메일', query: 'in:inbox category:updates newer_than:30d', icon: '↺' },
  { key: '문의/고객', title: '문의/고객', desc: '받은 상담·제휴·고객 후보', query: 'in:inbox (문의 OR 상담 OR 제휴 OR 구매 OR 자료 OR 강의) newer_than:30d', icon: '☏' },
  { key: '채용/뉴스', title: '채용/뉴스', desc: '받은 잡코리아·뉴스레터류', query: 'in:inbox (잡코리아 OR LinkedIn OR 뉴스레터 OR newsletter) newer_than:30d', icon: '▤' },
  { key: '첨부', title: '첨부', desc: '받은 파일 확인 필요', query: 'in:inbox has:attachment newer_than:30d', icon: '⌘' },
];

function gmailLabels(message = {}) {
  return Array.isArray(message.labels) ? message.labels : [];
}

function gmailRawText(message = {}) {
  return `${message.from || ''} ${message.to || ''} ${message.subject || ''} ${message.snippet || ''}`.toLowerCase();
}

function gmailIsSent(message = {}) {
  return gmailLabels(message).includes('SENT');
}

function gmailIsReceived(message = {}) {
  const labels = gmailLabels(message);
  return labels.includes('INBOX') && !labels.includes('SENT');
}

function gmailLabelText(labels = []) {
  const list = Array.isArray(labels) ? labels : [];
  if (list.includes('UNREAD')) return '안읽음';
  if (list.includes('IMPORTANT')) return '중요';
  if (list.includes('CATEGORY_SOCIAL')) return '소셜';
  if (list.includes('CATEGORY_PROMOTIONS')) return '프로모션';
  if (list.includes('CATEGORY_UPDATES')) return '업데이트';
  if (list.includes('SENT')) return '보낸메일';
  if (list.includes('CATEGORY_FORUMS')) return '포럼';
  if (list.includes('INBOX')) return '받은메일';
  return list[0] || '메일';
}

function gmailBusinessLabel(message = {}) {
  const labels = gmailLabels(message);
  const text = gmailRawText(message);
  if (labels.includes('SENT')) return '보낸메일';
  if (labels.includes('UNREAD')) return '안읽음';
  if (labels.includes('IMPORTANT')) return '중요';
  if (/문의|상담|제휴|견적|구매|결제|자료|강의|수강|환불|주문|고객|신청|입금|세금계산서|계산서|영수증|미팅|제안|콜라보|파트너|협업|납품|계약|견적서|수강생|커리큘럼|상담신청|환불요청|\bas\b|a\/s/.test(text)) return '문의/고객';
  if (/jobkorea|잡코리아|linkedin|뉴스레터|newsletter|채용|recruit|career|공고|이력서|헤드헌터/.test(text)) return '채용/뉴스';
  if (labels.includes('CATEGORY_SOCIAL')) return '소셜';
  if (labels.includes('CATEGORY_PROMOTIONS')) return '프로모션';
  if (labels.includes('CATEGORY_UPDATES')) return '업데이트';
  if (labels.includes('CATEGORY_FORUMS')) return '포럼';
  if (labels.includes('INBOX')) return '받은메일';
  return '기타';
}

function gmailGroupCount(messages, key) {
  if (key === '전체') return messages.length;
  if (key === '받은메일') return messages.filter(gmailIsReceived).length;
  if (key === '보낸메일') return messages.filter(gmailIsSent).length;
  if (key === '첨부') return messages.filter((m)=>gmailLabels(m).includes('HAS_ATTACHMENT') || /첨부|attachment|pdf|파일/.test(gmailRawText(m))).length;
  return messages.filter((m)=>gmailBusinessLabel(m) === key).length;
}

function gmailFilterMessages(messages, key) {
  if (!key || key === '전체') return messages;
  if (key === '받은메일') return messages.filter(gmailIsReceived);
  if (key === '보낸메일') return messages.filter(gmailIsSent);
  if (key === '첨부') return messages.filter((m)=>gmailLabels(m).includes('HAS_ATTACHMENT') || /첨부|attachment|pdf|파일/.test(gmailRawText(m)));
  return messages.filter((m)=>gmailBusinessLabel(m) === key);
}

function gmailBodyReadable(message = {}) {
  const body = String(message.body || '').trim();
  if (!body) return '본문이 비어 있습니다.';
  if (message.contentType !== 'html') return body;
  const safeBody = body
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p\s*>|<\/div\s*>|<\/tr\s*>/gi, '\n')
    .replace(/<[^>]+>/g, ' ');
  const textarea = document.createElement('textarea');
  textarea.innerHTML = safeBody;
  return textarea.value.replace(/[ \t\r\f\v]+/g, ' ').replace(/\n\s*\n+/g, '\n\n').trim() || '본문을 텍스트로 변환할 수 없습니다.';
}

function gmailBodyPreview(message = {}) {
  const text = gmailBodyReadable(message);
  const limit = 12000;
  if (text.length <= limit) return text;
  return `${text.slice(0, limit)}\n\n---\n본문이 길어 앞부분만 표시했습니다. 필요한 경우 Gmail 원문에서 전체 내용을 확인하세요.`;
}

function gmailWebUrl(messageOrId = {}) {
  const id = typeof messageOrId === 'string' ? messageOrId : (messageOrId.id || messageOrId.threadId || '');
  if (!id) return 'https://mail.google.com/mail/u/0/#inbox';
  return `https://mail.google.com/mail/u/0/#all/${encodeURIComponent(id)}`;
}

function renderGmailWindowFrame(message = {}, status = 'loaded') {
  const url = gmailWebUrl(message.id || message.threadId || state.gmailDetail?.selectedId || '');
  const loading = status === 'loading';
  const bodyText = loading
    ? (message.snippet ? `목록 미리보기\n\n${message.snippet}\n\n---\nGmail 본문을 불러오는 중입니다.` : 'Gmail 본문을 불러오는 중입니다.')
    : gmailBodyPreview(message);
  return `<div class="gmail-window-shell">
    <div class="gmail-window-chrome">
      <div class="gmail-window-dots" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="gmail-window-title">
        <strong>Gmail 내부 창</strong>
        <span>${escapeHtml(message.subject || '메일을 불러오는 중...')}</span>
      </div>
      <div class="gmail-window-actions">
        <a class="ghost" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">Gmail 원문 새 탭</a>
        <button type="button" class="ghost" data-email-close>닫기</button>
      </div>
    </div>
    <div class="gmail-window-meta">
      <span><b>보낸 사람</b> ${escapeHtml(message.from || '')}</span>
      <span><b>받는 사람</b> ${escapeHtml(message.to || '')}</span>
      <span><b>날짜</b> ${escapeHtml(gmailDateShort(message.date || ''))}</span>
    </div>
    <div class="gmail-window-notice">
      <strong>${loading ? '메일 본문을 불러오는 중입니다' : 'Gmail 보안 정책 때문에 깨진 iframe 대신 대시보드 본문으로 표시합니다'}</strong>
      <span>${loading ? '목록에서 확인된 미리보기를 먼저 표시하고, 원문은 로드 후 갱신됩니다.' : '원본 이미지·레이아웃까지 필요한 경우 오른쪽 위 Gmail 원문 새 탭을 사용하세요.'}</span>
    </div>
    ${renderEmailFollowUpActions(message)}
    <div class="gmail-window-content" role="document" aria-label="Gmail 대시보드 본문">
      <div class="gmail-window-content-head"><strong>본문</strong><span>대시보드 안전 표시</span></div>
      <div class="mail-body-text">${escapeHtml(bodyText)}</div>
    </div>
  </div>`;
}

function gmailMessageById(id) {
  return (state.gmail.messages || []).find((message)=>message.id === id) || state.gmailDetail?.message || null;
}

function gmailActionMemo(message = {}) {
  const from = message.from ? `발신: ${message.from}` : '';
  const date = message.date ? `일시: ${gmailDateShort(message.date)}` : '';
  const snippet = message.snippet ? `요약: ${message.snippet}` : '';
  return ['Gmail 메일에서 생성됨', from, date, snippet].filter(Boolean).join('\n');
}

function createFollowUpFromEmail(action, id) {
  const message = gmailMessageById(id);
  if (!message?.id) return { ok: false, message: '메일 정보를 찾을 수 없습니다.' };
  const subject = String(message.subject || '(제목 없음)').trim();
  const memo = gmailActionMemo(message);
  if (action === 'task') {
    getCollection('tasks').unshift({ id: makeId('tasks'), title: `메일 후속: ${subject}`, owner: '이브레인', status: '대기', priority: '중간', due: todayIso(), memo });
    return { ok: true, message: '할일관리로 보냈습니다.' };
  }
  if (action === 'schedule') {
    getCollection('lectures').unshift({ id: makeId('lectures'), title: `메일 확인: ${subject}`, date: todayIso(), startTime: '10:00', endTime: '10:30', channel: '업무', location: '온라인', type: '업무', priority: '보통', movement: '온라인', linkTarget: '할일관리', status: '예정', materialStatus: '없음', mailStatus: '필요', memo });
    return { ok: true, message: '일정관리 후보로 보냈습니다.' };
  }
  if (action === 'meeting') {
    getCollection('meetings').unshift({ id: makeId('meetings'), title: `메일 기반 미팅: ${subject}`, date: todayIso(), startTime: '10:00', endTime: '10:30', type: '고객미팅', status: '예정', owner: '이브레인', participants: '이브레인', project: '메일 후속', agenda: memo, minutes: '', decisions: '', nextActions: `메일 회신/확인: ${subject}`, followUpDate: '', link: '' });
    return { ok: true, message: '미팅관리 후보로 보냈습니다.' };
  }
  if (action === 'lead') {
    getCollection('customerInquiries').unshift({ id: makeId('customerInquiries'), name: message.from || '메일 발신자', source: 'Gmail', status: '신규', priority: '중간', question: subject, memo });
    return { ok: true, message: '리드관리 후보로 보냈습니다.' };
  }
  return { ok: false, message: '알 수 없는 액션입니다.' };
}

function renderEmailFollowUpActions(message = {}) {
  if (!message.id) return '';
  return `<div class="mail-follow-actions" aria-label="메일 후속 처리">
    <span>후속 처리</span>
    <button type="button" data-email-action="task" data-email-id="${escapeHtml(message.id)}">할일로</button>
    <button type="button" data-email-action="schedule" data-email-id="${escapeHtml(message.id)}">일정으로</button>
    <button type="button" data-email-action="meeting" data-email-id="${escapeHtml(message.id)}">미팅으로</button>
    <button type="button" data-email-action="lead" data-email-id="${escapeHtml(message.id)}">리드로</button>
  </div>`;
}

function renderGmailDetailPanel() {
  const detail = state.gmailDetail || { status: 'idle' };
  if (detail.status === 'idle') {
    return `<section class="mail-reader empty-reader"><strong>메일 본문 미리보기</strong><p>메일 목록에서 <b>메일 열기</b>를 누르면 Gmail로 이동하지 않고 여기에서 본문을 확인합니다.</p></section>`;
  }
  if (detail.status === 'loading') {
    const preview = gmailMessageById(detail.selectedId) || { id: detail.selectedId };
    return `<section class="mail-reader gmail-window-reader">
      ${renderGmailWindowFrame(preview, 'loading')}
    </section>`;
  }
  if (detail.status === 'error') {
    return `<section class="mail-reader danger"><div class="mail-reader-top"><strong>메일을 열 수 없습니다</strong><button type="button" class="ghost" data-email-close>닫기</button></div><p>${escapeHtml(detail.error || '알 수 없는 오류')}</p></section>`;
  }
  const m = detail.message || {};
  return `<section class="mail-reader gmail-window-reader">
    ${renderGmailWindowFrame(m, 'loaded')}
  </section>`;
}

function gmailDateShort(date = '') {
  const text = String(date || '');
  return text.replace(/ \+\d{4}.*/, '').replace(/ \(.*\)/, '');
}

function renderEmailManagement() {
  const meta = state.gmail.meta || {};
  const messages = state.gmail.messages || [];
  const activeLabel = state.selectedGmailLabel || '받은메일';
  const filteredMessages = gmailFilterMessages(messages, activeLabel);
  const isLoading = meta.status === 'loading';
  const cacheNote = meta.cacheSource === 'browser'
    ? `브라우저 캐시 ${Number(meta.cacheAgeSec || 0).toFixed(1)}초 전`
    : meta.cacheSource === 'server'
      ? `서버 캐시 ${Number(meta.cacheAgeSec || 0).toFixed(1)}초 전`
      : meta.cacheSource === 'gmail'
        ? 'Gmail 실시간 조회 완료'
        : '';
  const countScope = isLoading ? (meta.usingPreviousResults ? '이전 결과 기준' : '로딩 중') : '현재 검색 내';
  const statusText = isLoading
    ? (messages.length ? `Gmail 불러오는 중... 이전 결과 ${messages.length}개를 화면에 유지합니다` : 'Gmail 결과를 처음 불러오는 중입니다')
    : meta.status === 'error'
      ? `연결 오류: ${meta.error}`
      : `${meta.account || 'Google Workspace 계정'} · 현재 검색 결과 ${messages.length}개를 분류 중${cacheNote ? ` · ${cacheNote}` : ''}`;
  const displayCountText = isLoading ? (messages.length ? `이전 결과 보관 ${messages.length}건` : '로딩 중') : `${filteredMessages.length}건 표시`;
  const loadingBanner = isLoading ? `<div class="mail-loading-banner" role="status"><span></span><strong>Gmail 조회 중</strong><em>${messages.length ? '이전 결과를 유지한 채 새 결과가 도착하면 자동 갱신됩니다.' : '잠시만 기다리면 목록이 표시됩니다.'}</em></div>` : '';
  const emptyListHtml = isLoading
    ? '<p class="empty loading-empty">새 Gmail 결과를 불러오는 중입니다. 잠시만 기다려주세요.</p>'
    : '<p class="empty">이 라벨에 표시할 메일이 없습니다. 검색 범위를 바꾸거나 전체 라벨을 선택해보세요.</p>';
  const metrics = [
    referenceMetric('전체', `${gmailGroupCount(messages, '전체')}건`, countScope, '∑'),
    referenceMetric('받은메일', `${gmailGroupCount(messages, '받은메일')}건`, countScope, '□'),
    referenceMetric('보낸메일', `${gmailGroupCount(messages, '보낸메일')}건`, countScope, '↗', 'cream'),
    referenceMetric('문의/고객', `${gmailGroupCount(messages, '문의/고객')}건`, '응대 후보', '☏', 'blue'),
  ];
  const labelCards = GMAIL_LABEL_GROUPS.map((group) => {
    const count = gmailGroupCount(messages, group.key);
    return `<button type="button" class="mail-label-card ${activeLabel === group.key ? 'active' : ''}" data-email-label="${escapeHtml(group.key)}">
      <i>${escapeHtml(group.icon)}</i><strong>${escapeHtml(group.title)}</strong><span>${count}건</span><em>${escapeHtml(group.desc)} · ${escapeHtml(countScope)}</em>
    </button>`;
  }).join('');
  const rows = filteredMessages.map((m) => {
    const bizLabel = gmailBusinessLabel(m);
    const rawLabel = gmailLabelText(gmailLabels(m));
    return `
    <article class="email-row classified compact ${gmailLabels(m).includes('UNREAD') ? 'unread' : ''} ${state.gmailDetail?.selectedId === m.id ? 'selected' : ''}">
      <div class="mail-label-pill">${escapeHtml(bizLabel)}</div>
      <div class="email-main">
        <div class="email-title-line"><strong>${escapeHtml(m.subject || '(제목 없음)')}</strong>${badge(rawLabel)}</div>
        <p>${escapeHtml(m.snippet || '')}</p>
        <small>${escapeHtml(m.from || '')}</small>
      </div>
      <div class="email-side">
        <time>${escapeHtml(gmailDateShort(m.date || ''))}</time>
        <button type="button" class="soft email-open" data-email-open="${escapeHtml(m.id || '')}">${state.gmailDetail?.selectedId === m.id ? '닫기' : '메일 열기'}</button>
      </div>
    </article>`;
  }).join('');
  $('#routeContent').innerHTML = `
    <div class="reference-shell mail-management-shell ${isLoading ? 'is-loading' : ''}">
      <section class="reference-hero mail-hero">
        <div><h2>메일관리</h2><p>쉬운 버튼으로 먼저 확인하고, 필요한 메일은 할일·일정·미팅·리드 후보로 바로 넘깁니다. Gmail 원문 수정 없이 조회/후속 처리만 합니다.</p></div>
        <div class="reference-hero-actions"><button class="primary teal" data-email-refresh>새로고침</button></div>
      </section>
      <section class="reference-metrics">${metrics.join('')}</section>
      <details class="mail-advanced-search" ${meta.status === 'error' ? 'open' : ''}>
        <summary>고급 Gmail 검색어 직접 입력</summary>
        <form class="email-search panel soft-panel" data-email-search>
          <label>Gmail 검색 범위<input name="query" value="${escapeHtml(meta.query || 'in:inbox newer_than:14d')}" placeholder="예: in:inbox is:unread newer_than:7d, in:sent newer_than:30d" /></label>
          <div class="email-search-actions">
            <button class="primary" type="submit">검색</button>
          </div>
        </form>
      </details>
      <section class="mail-quick-query-row" aria-label="빠른 Gmail 검색">
        <button class="ghost" type="button" data-email-query="in:inbox is:unread newer_than:30d" data-email-query-label="안읽음">안읽은 메일</button>
        <button class="ghost" type="button" data-email-query="in:inbox has:attachment newer_than:30d" data-email-query-label="첨부">첨부 있음</button>
        <button class="ghost" type="button" data-email-query="in:inbox (문의 OR 상담 OR 제휴 OR 구매 OR 자료 OR 강의 OR 신청 OR 견적 OR 결제 OR 세금계산서) newer_than:30d" data-email-query-label="문의/고객">고객/문의</button>
        <button class="ghost" type="button" data-email-query="in:sent newer_than:30d" data-email-query-label="보낸메일">보낸메일</button>
        <button class="ghost" type="button" data-email-query="in:inbox category:updates newer_than:30d" data-email-query-label="업데이트">업데이트</button>
        <button class="ghost" type="button" data-email-query="in:inbox newer_than:7d" data-email-query-label="받은메일">최근 7일</button>
      </section>
      <section class="mail-label-board">${labelCards}</section>
      ${loadingBanner}
      <div class="email-status ${meta.status === 'error' ? 'danger' : ''}">${escapeHtml(statusText)} · 선택 라벨: ${escapeHtml(activeLabel)} · ${escapeHtml(displayCountText)}</div>
      <section class="mail-reader-slot">${renderGmailDetailPanel()}</section>
      <div class="email-list compact-list">${rows || emptyListHtml}</div>
    </div>
  `;
  if (meta.status === 'not-loaded') setTimeout(() => loadGmailMessages('in:inbox newer_than:14d'), 0);
}

function renderSimpleTable(items, columns) {
  if (!items.length) return '<p class="empty">표시할 항목이 없습니다.</p>';
  return `<div class="table-wrap"><table><thead><tr>${columns.map(c=>`<th>${escapeHtml(c)}</th>`).join('')}</tr></thead><tbody>
    ${items.map((item)=>`<tr>${columns.map((c)=>`<td>${formatCell(c, item[c])}</td>`).join('')}</tr>`).join('')}
  </tbody></table></div>`;
}

function renderConversion() {
  const metrics = getCollection('conversionMetrics');
  const checklist = state.data.settings.checklist || [];
  $('#routeContent').innerHTML = `
    <div class="section-head"><div><h2>광고·전환 운영판</h2><p>유튜브 구독자를 직접 타겟팅하지 않고 랜딩/무료자료/픽셀 데이터로 리타겟팅하는 흐름입니다.</p></div></div>
    <div class="funnel">
      ${['유튜브 콘텐츠','랜딩페이지','무료자료 신청','Pixel/Lead 이벤트','Meta 리타겟팅'].map((step, index)=>`<div class="funnel-step"><div class="num">${index+1}</div><strong>${step}</strong><p>${['설명란·고정댓글 CTA','문제→자료→행동 카피','광고 활용 동의 포함','PageView/Lead/ViewContent','구매자 제외·유사타겟'][index]}</p></div>`).join('')}
    </div>
    <div class="grid-2" style="margin-top:18px">
      <div class="panel"><h3>KPI 기록</h3>${renderSimpleTable(metrics, ['date','source','visitors','leads','atc','checkout','purchases','spend','revenue','memo'])}</div>
      <div class="panel soft-panel"><h3>실행 체크리스트</h3><div class="checklist">${checklist.map((c)=>`<label class="check-item ${c.done ? 'done' : ''}"><input type="checkbox" data-checklist-id="${c.id}" ${c.done ? 'checked' : ''}/><span>${escapeHtml(c.text)}</span></label>`).join('')}</div></div>
    </div>
  `;
}

function renderOpsOS() {
  const modules = [
    { name: '리드 관리', pain: '홈페이지/카페/광고 문의가 흩어짐', status: '반영됨', action: '문의 저장 → 담당 응대 할일 자동 생성/동기화', ref: '00:52:16' },
    { name: '프로젝트 관리', pain: '노션/지라가 커스텀·모바일 입력에 불편', status: 'MVP 기준', action: '프로젝트 35개까지 카드/담당/상태로 관리', ref: '00:53:16' },
    { name: '할일 관리', pain: '직원·자동화 할당과 알림이 분리됨', status: '반영됨', action: '오늘의 할일 보드 + 상태 변경 + 알림 후보', ref: '00:53:58' },
    { name: '일정 관리', pain: '구글캘린더·노션캘린더를 따로 봄', status: '반영됨', action: '월/주/일 뷰 + Google Calendar 연동 유지', ref: '00:54:16' },
    { name: 'AI 미팅', pain: '녹화/회의록/후속 업무가 따로 놈', status: '다음 후보', action: 'Zoom/Teams 요약 → 결정사항 → 할일 생성', ref: '00:56:50' },
    { name: '명함·연락처 OCR', pain: '명함 받은 뒤 연락처 입력을 안 하게 됨', status: '다음 후보', action: '명함 사진 → OCR → Google Contacts 등록', ref: '00:57:01' },
    { name: '매출·입금', pain: '입금 알림/문자/계좌 확인이 반복됨', status: '다음 후보', action: '입금 알림 → 매출 데이터 자동 반영', ref: '00:58:40' },
    { name: '법인카드·영수증', pain: '세무사 요청 때 영수증을 뒤늦게 찾음', status: '다음 후보', action: '카드 알림/영수증 사진 → 세무 제출 묶음', ref: '00:59:08' },
  ];
  const principles = [
    ['24시간 출시', '기획부터 배포까지 하루를 넘기지 않고 작게 내놓기', '00:56:12'],
    ['진통제 우선', '매일 반복되는 노가다·분노 지점을 자동화 대상으로 삼기', '00:58:21'],
    ['피드백 확장', '프로젝트/고객 2개로 시작해 실제 불편 피드백으로 메뉴 추가', '00:56:22'],
    ['모바일 입력', '보는 도구가 아니라 현장에서 바로 입력·수정 가능한 도구 만들기', '00:53:30'],
  ];
  const todayActions = [
    '리드/문의가 들어오면 고객·문의와 오늘의 할일에 동시에 쌓이게 만들기',
    'AI 미팅 요약 → 결정사항/할일 자동 생성 흐름 설계',
    '매출·입금 알림을 매출·상품 화면의 실매출 로그로 연결',
    '법인카드/영수증 관리 메뉴를 세무 제출 체크리스트로 추가',
  ];
  $('#routeContent').innerHTML = `
    <div class="ops-shell">
      <div class="ops-hero panel">
        <div>
          <p class="eyebrow">Zoom 52분 이후 반영</p>
          <h2>비타민 말고 진통제 업무 OS</h2>
          <p>노션/지라/캘린더를 흉내내는 것이 아니라, 이브레인이 매일 불편해하는 입력·알림·정산·후속업무를 하나씩 24시간 안에 붙이는 운영판입니다.</p>
        </div>
        <div class="ops-hero-metric"><strong>24h</strong><span>기획→배포 최대 시간</span></div>
      </div>
      <div class="ops-principles">
        ${principles.map(([title, body, ref]) => `<article><strong>${title}</strong><p>${body}</p><small>${ref}</small></article>`).join('')}
      </div>
      <section class="panel">
        <div class="section-head"><div><h2>운영 모듈 로드맵</h2><p>52분 이후 사례를 이브레인 대시보드 메뉴/자동화 후보로 바꾼 목록입니다.</p></div></div>
        <div class="ops-module-grid">
          ${modules.map((m)=>`<article class="ops-module ${m.status === '반영됨' ? 'done' : m.status === 'MVP 기준' ? 'active' : ''}">
            <div><strong>${m.name}</strong>${badge(m.status)}</div>
            <p><b>불편:</b> ${m.pain}</p>
            <p><b>다음 행동:</b> ${m.action}</p>
            <small>근거 ${m.ref}</small>
          </article>`).join('')}
        </div>
      </section>
      <section class="panel soft-panel">
        <div class="section-head"><div><h2>이번 대시보드에 바로 반영할 다음 액션</h2><p>완벽한 통합보다 오늘 실제로 줄일 수 있는 노가다부터 붙입니다.</p></div></div>
        <div class="ops-action-list">${todayActions.map((a,i)=>`<button data-create-ops-task="${escapeHtml(a)}"><span>${i+1}</span>${escapeHtml(a)}</button>`).join('')}</div>
      </section>
    </div>
  `;
}

function renderSettings() {
  const total = Object.values(state.data).filter(Array.isArray).reduce((acc, arr)=>acc+arr.length, 0);
  const store = state.serverStore || {};
  const apiLogState = state.apiLogs || { logs: [] };
  const apiLogs = Array.isArray(apiLogState.logs) ? apiLogState.logs : [];
  const apiRows = apiLogs.length ? apiLogs.map((log) => {
    const ok = Number(log.ok) === 1 || log.ok === true;
    return `<tr>
      <td>${escapeHtml(log.created_at || '')}</td>
      <td><code>${escapeHtml(log.endpoint || '')}</code></td>
      <td><span class="badge ${ok ? '' : 'danger'}">${ok ? '성공' : '실패'}</span></td>
      <td>${escapeHtml(log.summary || '')}</td>
    </tr>`;
  }).join('') : `<tr><td colspan="4" class="empty-cell">아직 기록된 API 실행 로그가 없습니다.</td></tr>`;
  const storeLabel = store.status === 'saved' ? 'DB 저장 완료' : store.status === 'loaded' ? 'DB 연결됨' : store.status === 'error' ? 'DB 오류' : 'DB 확인중';
  const storeClass = store.status === 'error' ? 'danger' : store.status === 'saved' || store.status === 'loaded' ? '' : 'warn';
  $('#routeContent').innerHTML = `
    <div class="section-head"><div><h2>설정·백업</h2><p>화면은 localStorage로 빠르게 저장하고, 서버 SQLite DB에 한 번 더 저장합니다.</p></div></div>
    <div class="grid-2">
      <div class="panel soft-panel">
        <h3>저장 상태</h3>
        <p><strong>브라우저 저장 키:</strong> ${STORAGE_KEY}</p>
        <p><strong>총 항목:</strong> ${total.toLocaleString('ko-KR')}개</p>
        <p><strong>서버 DB:</strong> <span class="badge ${storeClass}">${escapeHtml(storeLabel)}</span></p>
        <p><strong>DB 항목:</strong> ${Number(store.itemCount || 0).toLocaleString('ko-KR')}개</p>
        <p><strong>DB 파일:</strong> <code>${escapeHtml(store.dbPath || '로컬 서버 DB')}</code></p>
        <p><strong>마지막 저장/로드:</strong> ${escapeHtml(store.lastSavedAt || '아직 없음')}</p>
        ${store.error ? `<p class="note danger-text">DB 오류: ${escapeHtml(store.error)}</p>` : ''}
        <p class="note">localStorage 삭제·브라우저 캐시 삭제가 생겨도 SQLite DB와 스냅샷에서 복구할 수 있게 구성했습니다.</p>
      </div>
      <div class="panel">
        <h3>데이터 관리</h3>
        <div class="form-actions">
          <button class="primary" id="settingsBackupBtn">JSON 백업</button>
          <button class="ghost" id="settingsRestoreBtn">JSON 복원</button>
          <button class="ghost" id="settingsSnapshotBtn">DB 스냅샷 생성</button>
          <button class="ghost" id="settingsContentOpsExportBtn">콘텐츠 운영 export</button>
          <button class="ghost" id="settingsApiLogRefreshBtn">API 로그 새로고침</button>
          <button class="danger" id="settingsResetBtn">샘플 데이터 초기화</button>
        </div>
        ${state.contentOpsExportStatus?.export ? `<p class="note">최근 export: <code>${escapeHtml(state.contentOpsExportStatus.export.markdownPath || state.contentOpsExportStatus.export.jsonPath || '')}</code></p>` : ''}
        ${state.contentOpsExportStatus?.error ? `<p class="note danger-text">Export 오류: ${escapeHtml(state.contentOpsExportStatus.error)}</p>` : ''}
        <input id="restoreFileInput" class="hidden" type="file" accept="application/json,.json" />
      </div>
    </div>
    <div class="panel soft-panel">
      <div class="section-head"><div><h3>최근 API 실행 로그</h3><p>Gmail·Calendar·Upload·DB API 호출의 성공/실패만 저장합니다. 메일 제목/본문/보낸 사람 같은 민감 내용은 저장하지 않습니다.</p></div></div>
      ${apiLogState.error ? `<p class="note danger-text">API 로그 오류: ${escapeHtml(apiLogState.error)}</p>` : ''}
      <div class="table-wrap compact-table-wrap">
        <table class="data-table compact-data-table">
          <thead><tr><th>시간</th><th>Endpoint</th><th>결과</th><th>요약</th></tr></thead>
          <tbody>${apiRows}</tbody>
        </table>
      </div>
    </div>
  `;
}


function ideaScore(item = {}) {
  const impact = Number(item.impact || 3);
  const ease = Number(item.ease || 3);
  const revenue = Number(item.revenue || 3);
  const urgency = Number(item.urgency || 3);
  return Math.max(1, Math.min(10, Math.round((impact * 0.35 + ease * 0.2 + revenue * 0.3 + urgency * 0.15) * 2)));
}

function ideaScoreLabel(score) {
  const value = Number(score || 0);
  if (value >= 8) return '바로 실행';
  if (value >= 6) return '좋은 후보';
  if (value >= 4) return '더 검토';
  return '보류 후보';
}

function ideaStatusClass(status) {
  if (status === '실행후보') return 'hot';
  if (status === '전환완료') return 'done';
  if (status === '보류') return 'hold';
  return 'review';
}

function filterIdeaItems(items) {
  const query = String(state.filters.query || '').trim().toLowerCase();
  const status = state.filters.status || '전체';
  const type = state.filters.type || '전체';
  return items.filter((item) => {
    const text = `${item.title || ''} ${item.memo || ''} ${item.target || ''}`.toLowerCase();
    const okQuery = !query || text.includes(query);
    const okStatus = status === '전체' || item.status === status || (status === '실행후보' && Number(item.score || 0) >= 8);
    const okType = type === '전체' || item.type === type;
    return okQuery && okStatus && okType;
  }).sort((a, b) => Number(b.score || 0) - Number(a.score || 0));
}

function renderIdeaPipeline(items) {
  const groups = [
    ['검토', '처음 저장한 생각'],
    ['실행후보', '지금 상품·콘텐츠로 키울 것'],
    ['전환완료', '할일/콘텐츠/프로젝트로 보냄'],
    ['보류', '나중에 볼 것'],
  ];
  return groups.map(([status, caption]) => {
    const count = items.filter((item)=>item.status === status).length;
    return `<button class="idea-pipe-card ${state.filters.status === status ? 'active' : ''}" type="button" data-chip-filter="status" data-chip-value="${status}">
      <span>${status}</span><strong>${count}</strong><em>${caption}</em>
    </button>`;
  }).join('');
}

function renderIdeaCard(item) {
  const status = item.status || '검토';
  const score = Number(item.score || ideaScore(item));
  const conversions = [
    ['task', '할일'], ['content', '콘텐츠'], ['project', '프로젝트'], ['course', '강의']
  ].map(([target, label]) => `<button class="soft" type="button" data-idea-convert="${item.id}" data-idea-target="${target}">${label}로 전환</button>`).join('');
  return `<article class="idea-card ${ideaStatusClass(status)}">
    <div class="idea-card-main">
      <div class="idea-card-top">
        <span class="badge idea-type">${escapeHtml(item.type || '콘텐츠')}</span>
        <span class="badge ${score >= 8 ? '' : score >= 6 ? 'warn' : 'danger'}">점수 ${score}/10 · ${escapeHtml(ideaScoreLabel(score))}</span>
        <select aria-label="아이디어 상태" data-idea-status="${escapeHtml(item.id)}">
          ${['검토','실행후보','전환완료','보류'].map((option)=>`<option value="${option}" ${option === status ? 'selected' : ''}>${option}</option>`).join('')}
        </select>
      </div>
      <h3>${escapeHtml(item.title || '제목 없음')}</h3>
      <p>${escapeHtml(item.memo || '메모가 없습니다.')}</p>
      <dl class="idea-meta">
        <div><dt>타깃</dt><dd>${escapeHtml(item.target || '미정')}</dd></div>
        <div><dt>다음 행동</dt><dd>${escapeHtml(item.nextAction || '제목만 저장됨')}</dd></div>
        <div><dt>등록일</dt><dd>${escapeHtml(item.createdAt || '')}</dd></div>
      </dl>
      ${item.convertedTo ? `<p class="idea-converted">전환됨: ${escapeHtml(item.convertedTo)}</p>` : ''}
    </div>
    <div class="idea-actions">
      ${conversions}
      <button class="ghost danger" type="button" data-idea-delete="${escapeHtml(item.id)}">삭제</button>
    </div>
  </article>`;
}

function renderIdeaMemo() {
  const items = getCollection('ideaItems');
  const visible = filterIdeaItems(items);
  const typeOptions = ['전체','콘텐츠','상품','강의','광고소재','커뮤니티','자동화','기타'];
  $('#routeContent').innerHTML = `
    <div class="idea-workspace">
      <section class="idea-hero">
        <div>
          <p class="eyebrow">IDEA PIPELINE</p>
          <h2>아이디어를 실행 후보로 걸러내세요</h2>
          <p>짧게 저장 → 유형/점수로 판단 → 할일·콘텐츠·프로젝트·강의로 바로 전환하는 공간입니다.</p>
        </div>
        <button class="primary" type="button" onclick="document.querySelector('[data-idea-form] input[name=title]')?.focus(); return false;">+ 아이디어 추가</button>
      </section>

      <form class="idea-quick-form" data-idea-form onsubmit="return submitIdeaForm(this)">
        <label class="idea-title-field">아이디어 제목
          <input name="title" required placeholder="예: 초보셀러용 상세페이지 체크리스트 PDF" />
        </label>
        <label>유형
          <select name="type">${typeOptions.filter(t=>t!=='전체').map((t)=>`<option>${t}</option>`).join('')}</select>
        </label>
        <label>타깃/활용처
          <input name="target" placeholder="예: AI커머스 브레인 구매 전환" />
        </label>
        <label>다음 행동
          <input name="nextAction" placeholder="예: 목차 5개만 먼저 뽑기" />
        </label>
        <label class="idea-memo-field">메모
          <textarea name="memo" placeholder="문제, 구매심리, 참고 링크, 떠오른 문구를 짧게 적으세요."></textarea>
        </label>
        <div class="idea-score-inputs">
          ${[['impact','임팩트'],['ease','쉬움'],['revenue','수익성'],['urgency','긴급도']].map(([name,label])=>`<label>${label}<input name="${name}" type="range" min="1" max="5" value="3" /></label>`).join('')}
        </div>
        <button class="primary" type="submit">저장하고 점수화</button>
      </form>

      <div class="idea-pipeline">${renderIdeaPipeline(items)}</div>

      <div class="filters idea-filters">
        <input data-filter="query" value="${escapeHtml(state.filters.query)}" placeholder="아이디어 검색" />
        <select data-filter="type">${typeOptions.map((type)=>`<option value="${type}" ${state.filters.type === type ? 'selected' : ''}>${type}</option>`).join('')}</select>
        ${['전체','검토','실행후보','전환완료','보류'].map((status)=>`<button type="button" class="chip ${state.filters.status === status ? 'active' : ''}" data-chip-filter="status" data-chip-value="${status}">${status}</button>`).join('')}
        <button type="button" class="ghost" data-clear-filters>필터 초기화</button>
      </div>

      <section class="idea-list">
        ${visible.length ? visible.map(renderIdeaCard).join('') : '<div class="empty">조건에 맞는 아이디어가 없습니다. 위 입력칸에서 새 아이디어를 바로 저장하세요.</div>'}
      </section>
    </div>
  `;
}

function submitIdeaForm(form) {
  const values = Object.fromEntries(new FormData(form).entries());
  const title = String(values.title || '').trim();
  if (!title) { toast('아이디어 제목을 입력하세요.'); return false; }
  const item = {
    id: makeId('ideaItems'),
    title,
    type: values.type || '콘텐츠',
    status: '검토',
    priority: '중간',
    target: values.target || '',
    nextAction: values.nextAction || '',
    memo: values.memo || '',
    impact: values.impact || 3,
    ease: values.ease || 3,
    revenue: values.revenue || 3,
    urgency: values.urgency || 3,
    createdAt: todayIso(),
  };
  item.score = ideaScore(item);
  if (item.score >= 8) item.status = '실행후보';
  upsertItem('ideaItems', item);
  form.reset();
  render();
  toast(item.status === '실행후보' ? '실행 후보 아이디어로 저장했습니다.' : '아이디어를 저장했습니다.');
  return false;
}

function convertIdea(id, target) {
  const idea = getCollection('ideaItems').find((item)=>item.id === id);
  if (!idea) return false;
  const title = idea.title || '아이디어';
  const memo = [idea.memo, idea.nextAction ? `다음 행동: ${idea.nextAction}` : '', idea.target ? `타깃: ${idea.target}` : ''].filter(Boolean).join('\n');
  if (target === 'task') {
    upsertItem('tasks', { id: makeId('tasks'), title: idea.nextAction || title, owner: '이브레인', status: '대기', priority: idea.score >= 8 ? '높음' : '중간', due: '', memo: `아이디어 전환: ${title}\n${memo}` });
    idea.convertedTo = '할일관리';
  }
  if (target === 'content') {
    upsertItem('contentItems', { id: makeId('contentItems'), title, type: idea.type === '광고소재' ? 'Meta Ad' : idea.type === '커뮤니티' ? 'Cafe' : 'SNS', status: '대기', stage: '아이디어', due: '', memo });
    idea.convertedTo = '콘텐츠 제작소';
  }
  if (target === 'project') {
    upsertItem('projects', { id: makeId('projects'), title, owner: '이브레인', status: '기획', priority: idea.score >= 8 ? '높음' : '중간', startDate: todayIso(), targetDate: '', goal: idea.target || title, nextAction: idea.nextAction || '실행 범위 정하기', memo });
    idea.convertedTo = '프로젝트관리';
  }
  if (target === 'course') {
    upsertItem('courseItems', { id: makeId('courseItems'), title, audience: '이브레인', format: 'VOD', status: '기획중', materialStatus: '준비중', mailStatus: '작성필요', sessionCount: '1', startTime: '10:00', endTime: '11:00', scheduleLabelColor: '강의-청록', nextAction: idea.nextAction || '커리큘럼 초안 작성', memo });
    idea.convertedTo = '강의관리';
  }
  idea.status = '전환완료';
  idea.convertedAt = new Date().toISOString();
  saveData();
  render();
  toast(`${idea.convertedTo}로 전환했습니다.`);
  return true;
}

const CONTENT_CORE_TYPES = ['YouTube','Shorts','Blog','Cafe','SNS','Meta Ad'];
const CONTENT_CHANNELS = [
  {
    key: 'youtube', label: '유튜브', types: ['YouTube','Shorts'], icon: '▶', role: '기존 업로드 분석·등록 예정 영상·고정댓글 개선', homeUrl: 'https://example.com/youtube',
    hero: '기존 업로드 영상 반응/트래픽을 분석하고 등록 예정 영상 큐와 다음 개선 액션을 함께 관리합니다.',
    filters: ['전체','롱폼','쇼츠','댓글 있음','답변 필요','답변 완료','재활용 후보'],
    actionLabel: '다음 개선 액션',
    reuseHint: '쇼츠·블로그·고정댓글 개선으로 재활용',
  },
  {
    key: 'blog', label: '네이버 블로그', types: ['Blog'], icon: 'B', role: '네이버 블로그 글·SEO 운영·신규 글 주제 발굴', homeUrl: 'https://example.com/blog',
    hero: '네이버 블로그 글을 검색 유입·댓글·SEO 점검·신규 글 주제 기준으로 운영합니다.',
    filters: ['전체','발행완료','SEO 점검','댓글 있음','신규 글 주제','카페로 확장','스레드로 쪼개기'],
    actionLabel: 'SEO/신규 글 주제',
    reuseHint: '카페 글·스레드 문장·신규 블로그 글로 재활용',
  },
  {
    key: 'naverCafe', label: '네이버카페', types: ['Cafe'], icon: 'N', role: '발행글 반응 체크·댓글 답변·FAQ/구매자료 후보', homeUrl: 'https://example.com/community',
    hero: '발행한 카페 글의 반응을 먼저 확인하고 댓글·질문·답변 필요 항목을 FAQ와 구매자료 후속으로 정리합니다.',
    filters: ['전체','댓글 있음','답변 필요','구매자료 문의','FAQ 후보','블로그/유튜브 확장'],
    actionLabel: '반응 후속 액션',
    reuseHint: 'FAQ·구매자료 안내글·후속 답변 글로 재활용',
  },
  {
    key: 'threads', label: '스레드/SNS', types: ['SNS','Meta Ad'], icon: '#', role: '지속 콘텐츠 관리·반응 체크·후속 기획', homeUrl: 'https://example.com/sns',
    hero: '짧은 글 반응을 꾸준히 관리하면서 다음 콘텐츠 기획·작성 후보를 블로그·카페·영상 소재로 확장합니다.',
    filters: ['전체','반응 좋음','답변 필요','타 계정 소재','블로그 확장','카페 확장','영상 소재'],
    actionLabel: '다음 콘텐츠 기획',
    reuseHint: '블로그·카페·쇼츠·후속 스레드 소재로 재활용',
  },
];

const CONTENT_INTEGRATIONS = [
  { label: 'YouTube', status: '읽기 연동 가능', scope: '영상 목록, 조회수, 좋아요, 댓글 수, 썸네일', route: 'youtube' },
  { label: 'YouTube Analytics', status: '연동 후보', scope: '썸네일 클릭률, 평균 시청시간, 누적 시청시간', route: 'youtube' },
  { label: '네이버 블로그', status: '읽기/수동 기록 설계', scope: '글 URL, 조회/댓글, SEO 점검, 신규 글 주제', route: 'blog' },
  { label: '네이버카페', status: '읽기/수동 기록 설계', scope: '댓글, 질문, 구매자료 문의, 신규 글 주제', route: 'naverCafe' },
  { label: '스레드/SNS', status: '수동 기록 + 소재 발굴', scope: '매일 짧은 글 5개, 반응 좋은 문장, 타 계정 소재', route: 'threads' },
  { label: '카카오 오픈채팅', status: '공유 콘텐츠 수동 기록', scope: '오픈채팅에 공유할 자료/요약/링크 후보', route: 'openChat' },
  { label: '문서 저장소', status: '연결 설계', scope: '주제 저장, 리서치, 콘텐츠 기록 백업', route: 'content' },
  { label: '멤버쉽', status: '독립 운영', scope: '구매자 온보딩, 자료 요청, 질문 응대, 전용 콘텐츠 후보', route: 'membership' },
];

function contentPlatformFromType(type = '') {
  if (['YouTube','Shorts'].includes(type)) return '유튜브';
  if (type === 'Blog') return '네이버 블로그';
  if (type === 'Cafe') return '네이버카페';
  if (['SNS','Meta Ad'].includes(type)) return '스레드/SNS';
  if (String(type).includes('Kakao')) return '오픈채팅';
  return '원본';
}

function contentDate(item = {}) {
  return item.publishDate || item.due || item.date || '';
}

function contentUrl(item = {}) {
  return item.publishUrl || item.url || '';
}

function isCompletedContent(item = {}) {
  return ['발행완료','완료'].includes(item.status || item.publishStatus);
}

function isPublishedContent(item = {}) {
  return isCompletedContent(item) || !!contentUrl(item);
}

function isYoutubeUploadedItem(item = {}) {
  return String(item.id || '').startsWith('yt-')
    || isPublishedContent(item)
    || Number(item.views || 0) > 0
    || Number(item.comments || 0) > 0
    || Number(item.likes || 0) > 0;
}

function youtubePriorityPlan(item = {}) {
  const views = Number(item.views || 0);
  const comments = Number(item.comments || 0);
  const likes = Number(item.likes || 0);
  const reaction = likes + comments;
  if (isReplyNeededContent(item) || comments > 0) {
    return {
      label: '댓글/고정댓글 대응',
      reason: `댓글 ${comments.toLocaleString('ko-KR')}건 · 답변/고정댓글 점검`,
      action: item.nextAction || '댓글 답변과 고정댓글 CTA를 먼저 보완',
      priority: views + likes * 8 + comments * 60 + (isReplyNeededContent(item) ? 220 : 0),
    };
  }
  if (item.reuseCandidate === '예' || views >= 500 || likes >= 20) {
    return {
      label: '성과 재활용',
      reason: `조회 ${views.toLocaleString('ko-KR')} · 좋아요 ${likes.toLocaleString('ko-KR')}`,
      action: item.nextAction || '쇼츠·블로그·카페 후속 콘텐츠로 확장',
      priority: views + likes * 14 + comments * 18 + (item.reuseCandidate === '예' ? 180 : 0),
    };
  }
  if (views > 0 || reaction > 0) {
    return {
      label: '제목/썸네일 개선',
      reason: `조회 ${views.toLocaleString('ko-KR')} 대비 반응 ${reaction.toLocaleString('ko-KR')}`,
      action: item.nextAction || '제목·썸네일·설명란 CTA를 보완',
      priority: views + likes * 5 + comments * 20 + 80,
    };
  }
  return {
    label: '등록 준비 점검',
    reason: `상태 ${item.status || '미정'} · 데이터 축적 전`,
    action: item.nextAction || '대본·설명란·고정댓글 준비',
    priority: 20,
  };
}

function isContentCoreChannel(item = {}) {
  return CONTENT_CORE_TYPES.includes(item.type);
}

function channelConfigByKey(key) {
  return CONTENT_CHANNELS.find((channel)=>channel.key === key) || null;
}

function getChannelContentItems(key) {
  const channel = channelConfigByKey(key);
  if (!channel) return [];
  return getCollection('contentItems').filter((item)=>channel.types.includes(item.type));
}

function contentReplyStatus(item = {}) {
  if (item.replyStatus) return item.replyStatus;
  if (item.replyNeeded === '완료') return '답변 완료';
  if (item.replyNeeded === '예') return '답변 필요';
  if (Number(item.comments || 0) > 0) return '댓글 있음';
  return '댓글 없음';
}

function isReplyNeededContent(item = {}) {
  return contentReplyStatus(item) === '답변 필요';
}

function isReplyDoneContent(item = {}) {
  return contentReplyStatus(item) === '답변 완료';
}

function getChannelStats(key) {
  const items = getChannelContentItems(key);
  const replyCount = items.filter(isReplyNeededContent).length;
  const reuseCount = items.filter((item)=>item.reuseCandidate === '예').length;
  return {
    total: items.length,
    replyCount,
    reuseCount,
    attentionCount: items.filter((item)=>isReplyNeededContent(item) || item.reuseCandidate === '예' || Number(item.comments || 0) > 0).length,
    publishedCount: items.filter((item)=>['발행완료','완료'].includes(item.status) || item.publishUrl || item.url).length,
  };
}

function sumContentMetric(key) {
  return getCollection('contentItems').filter(isContentCoreChannel).reduce((acc, item) => acc + Number(item[key] || 0), 0).toLocaleString('ko-KR');
}

function numberMetric(value, fallback = 0) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : fallback;
}

function contentCtr(item = {}) {
  return item.thumbnailCtr ?? item.ctr ?? item.clickThroughRate ?? '';
}

function contentImpressions(item = {}) {
  return item.thumbnailImpressions ?? item.impressions ?? item.reachImpressions ?? '';
}

function contentUniqueViewers(item = {}) {
  return item.uniqueViewers ?? item.uniqueViewer ?? item.analyticsUniqueViewers ?? '';
}

function isFilledMetric(value) {
  return value !== '' && value !== undefined && value !== null && Number.isFinite(Number(value));
}

function parseMetricText(value) {
  if (value === '' || value === undefined || value === null) return '';
  let text = String(value).trim().replace(/,/g, '').replace(/%/g, '').replace(/\s/g, '');
  if (!text) return '';
  let multiplier = 1;
  const lower = text.toLowerCase();
  if (lower.endsWith('k')) { multiplier = 1000; text = text.slice(0, -1); }
  else if (lower.endsWith('m')) { multiplier = 1000000; text = text.slice(0, -1); }
  else if (text.endsWith('천')) { multiplier = 1000; text = text.slice(0, -1); }
  else if (text.endsWith('만')) { multiplier = 10000; text = text.slice(0, -1); }
  const numeric = Number(text);
  return Number.isFinite(numeric) ? numeric * multiplier : '';
}

function formatIntegerMetric(value, fallback = '미수집') {
  if (!isFilledMetric(value)) return fallback;
  return Math.round(Number(value)).toLocaleString('ko-KR');
}

function formatCtr(value) {
  if (value === '' || value === undefined || value === null) return '미수집';
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return String(value);
  return `${numeric.toFixed(numeric % 1 ? 1 : 0)}%`;
}

function contentWatchMinutes(item = {}) {
  if (item.watchTimeMinutes !== undefined && item.watchTimeMinutes !== '') return Number(item.watchTimeMinutes);
  if (item.watchMinutes !== undefined && item.watchMinutes !== '') return Number(item.watchMinutes);
  if (item.estimatedMinutesWatched !== undefined && item.estimatedMinutesWatched !== '') return Number(item.estimatedMinutesWatched);
  const views = Number(item.views || 0);
  const avgSeconds = Number(item.avgViewDurationSec || item.averageViewDurationSec || 0);
  return views && avgSeconds ? Math.round((views * avgSeconds) / 60) : 0;
}

function formatWatchTime(minutes) {
  const numeric = Number(minutes || 0);
  if (!numeric) return '미수집';
  if (numeric >= 60) return `${(numeric / 60).toFixed(numeric >= 600 ? 0 : 1)}시간`;
  return `${Math.round(numeric)}분`;
}

function buildContentBrief(values = {}) {
  const topic = String(values.topic || '').trim();
  const coreMessage = String(values.coreMessage || '').trim() || `${topic}를 초보셀러가 바로 실행할 수 있는 순서로 설명`;
  const proof = String(values.proof || '').trim() || '실제 운영 사례, 체크리스트, 자료 패키지, 댓글 질문';
  const cta = String(values.cta || '').trim() || '무료 자료/오픈채팅/AI커머스브레인 자료 패키지로 연결';
  const tone = String(values.tone || '').trim() || '쉽고 단호한 초보셀러 언어';
  return { topic, coreMessage, proof, cta, tone };
}

function buildChannelDraft(type, brief = {}) {
  const topic = brief.topic || '콘텐츠 주제';
  const proof = brief.proof || '실제 예시';
  const cta = brief.cta || '다음 행동 안내';
  const tone = brief.tone || '초보셀러 언어';
  const core = brief.coreMessage || topic;
  if (type === 'YouTube') return `훅: ${topic}\n문제: 초보셀러가 여기서 막히는 이유를 30초 안에 짚기\n본문: ${core}\n증거: ${proof}\n마무리 CTA: ${cta}\n톤: ${tone}`;
  if (type === 'Blog') return `SEO 제목: ${topic}\n도입: 왜 지금 이 문제가 반복되는지 설명\n본문 구조: 문제 원인 3가지 → 해결 순서 → 체크리스트\n근거/자료: ${proof}\nCTA: ${cta}\n톤: ${tone}`;
  if (type === 'Cafe') return `카페 글 제목: ${topic}\n첫 문장: 같은 문제를 겪는 회원에게 질문형으로 시작\n본문: ${core}\n댓글 유도: 본인 상황을 남기면 답변\n자료 안내: ${cta}`;
  if (type === 'SNS') return `짧은 글: ${topic}\n1문장 문제 공감 → 1문장 관점 전환 → 1문장 실행 팁\n반응 유도: 저장/댓글 질문\nCTA: ${cta}`;
  return `${topic}\n핵심 메시지: ${core}\n근거: ${proof}\nCTA: ${cta}`;
}

function buildThreadDrafts(brief = {}) {
  const topic = brief.topic || '콘텐츠 주제';
  const core = brief.coreMessage || topic;
  const cta = brief.cta || '필요하면 자료를 확인하세요';
  return [
    `${topic}\n초보셀러가 막히는 건 실력이 부족해서가 아니라 순서가 없어서입니다.`,
    `${core}\n오늘은 결과보다 첫 행동 하나를 정하는 게 먼저입니다.`,
    `${topic}에서 바로 고칠 것 1가지: 고객이 읽는 순서대로 다시 써보기.`,
    `반응 좋은 콘텐츠는 멋진 말보다 정확한 문제 문장으로 시작합니다.\n${topic}도 여기서 갈립니다.`,
    `${topic}\n체크리스트가 필요하면 저장해두고, 막히는 지점을 댓글로 남겨주세요. ${cta}`,
  ];
}

function getContentTodayCreateItems() {
  return getCollection('contentItems').filter((item) => ['아이디어','원본 작성중','작성중','확장 준비','대기'].includes(item.status) || item.type === 'Original').slice(0, 8);
}

function getContentPublishItems() {
  return getCollection('contentItems').filter((item) => isContentCoreChannel(item) && !['완료','발행완료'].includes(item.status)).sort((a, b) => String(contentDate(a) || '9999').localeCompare(String(contentDate(b) || '9999'))).slice(0, 12);
}

function getContentReactionItems() {
  return getCollection('contentItems').filter((item) => isContentCoreChannel(item) && (item.replyNeeded === '예' || item.reuseCandidate === '예' || Number(item.comments || 0) > 0 || Number(item.views || 0) > 0)).sort((a, b) => (Number(b.comments || 0) + Number(b.likes || 0)) - (Number(a.comments || 0) + Number(a.likes || 0)));
}

function renderContentMetricTriplet(item = {}) {
  return `<div class="content-metrics"><span>조회 <b>${Number(item.views || 0).toLocaleString('ko-KR')}</b></span><span>댓글 <b>${Number(item.comments || 0).toLocaleString('ko-KR')}</b></span><span>반응 <b>${Number(item.likes || 0).toLocaleString('ko-KR')}</b></span></div>`;
}

function renderContentActionBar(item = {}, mode = 'work') {
  if (!item.id) return '';
  const id = escapeHtml(item.id);
  const buttons = [];
  if (mode === 'work') {
    buttons.push(`<button class="tiny" onclick="advanceContentStage('${id}')">다음 단계</button>`);
    buttons.push(`<button class="tiny" onclick="createTaskFromContent('${id}')">할일화</button>`);
    if (isContentCoreChannel(item)) buttons.push(`<button class="tiny primary-tiny" onclick="sendContentToPublishCalendar('${id}')">캘린더로</button>`);
  }
  if (mode === 'publish') {
    buttons.push(`<button class="tiny" onclick="markContentStatus('${id}','예약')">예약</button>`);
    buttons.push(`<button class="tiny primary-tiny" onclick="markContentStatus('${id}','발행완료')">발행완료</button>`);
  }
  if (mode === 'reaction') {
    buttons.push(`<button class="tiny" onclick="markContentReplyDone('${id}')">답변완료</button>`);
    buttons.push(`<button class="tiny" onclick="markContentReuseDone('${id}')">재활용완료</button>`);
    buttons.push(`<button class="tiny" onclick="createFollowupContent('${id}')">후속콘텐츠</button>`);
  }
  buttons.push(`<button class="tiny danger" onclick="deleteContentItem('${id}')">삭제</button>`);
  return `<div class="content-actions">${buttons.join('')}</div>`;
}

function renderContentMiniCard(item = {}, mode = 'work') {
  const status = item.status || '아이디어';
  const platform = item.platform || contentPlatformFromType(item.type);
  const chips = [platform, status, item.syncStatus].filter(Boolean).map((value) => badge(value)).join('');
  return `<article class="content-mini-card ${mode}">
    <div class="content-mini-top">${chips}</div>
    <h3>${escapeHtml(item.title || '제목 없음')}</h3>
    <p>${escapeHtml(item.sourceTopic || item.memo || '원본 주제/메모가 없습니다.')}</p>
    ${item.draftBody ? `<pre class="ai-draft-snippet">${escapeHtml(String(item.draftBody).slice(0, 260))}</pre>` : ''}
    <dl>
      <div><dt>발행일</dt><dd>${escapeHtml(contentDate(item) || '미정')}</dd></div>
      <div><dt>다음 액션</dt><dd>${escapeHtml(item.nextAction || '초안 보완')}</dd></div>
    </dl>
    ${mode === 'reaction' ? renderContentMetricTriplet(item) : ''}
    ${renderContentActionBar(item, mode)}
  </article>`;
}

function renderSyncStatusCards(items = getCollection('contentItems')) {
  return `<div class="sync-status-grid">${CONTENT_CHANNELS.map((channel) => {
    const channelItems = items.filter((item) => channel.types.includes(item.type));
    const need = channelItems.filter((item) => ['연결 필요','실패','수동 확인 필요'].includes(item.syncStatus)).length;
    const latest = channelItems.map((item) => item.lastSyncedAt).filter(Boolean).sort().pop();
    const importStatus = integrationStatusByKey(channel.key);
    return `<article class="sync-card ${need ? 'needs' : 'ready'}">
      <div><span class="sync-icon">${escapeHtml(channel.icon)}</span><strong>${escapeHtml(channel.label)}</strong>${badge(importStatus?.status || (need ? '연결 필요' : '준비됨'))}</div>
      <p>${escapeHtml(channel.role)}</p>
      <dl><div><dt>수집 대상</dt><dd>${channelItems.length}건</dd></div><div><dt>확인 필요</dt><dd>${need}건</dd></div><div><dt>마지막 수집</dt><dd>${escapeHtml(latest || importStatus?.lastCheckedAt || '연동 전')}</dd></div></dl>
      ${importStatus?.message ? `<small>${escapeHtml(importStatus.message)}</small>` : ''}
      <div class="content-actions"><button class="tiny primary-tiny" onclick="return collectContentChannel('${escapeHtml(channel.key)}')">서버 수집 실행</button><button class="tiny" onclick="return importManualChannel('${escapeHtml(channel.key)}')">수동 가져오기 상태 저장</button></div>
    </article>`;
  }).join('')}<article class="sync-card ready collect-all"><div><span class="sync-icon">↻</span><strong>전체 채널</strong>${badge('서버 연결')}</div><p>유튜브·블로그·네이버카페·스레드 상태를 한 번에 갱신합니다.</p><dl><div><dt>대상 채널</dt><dd>${CONTENT_CHANNELS.length}개</dd></div><div><dt>방식</dt><dd>로컬 하네스 endpoint</dd></div></dl><button class="tiny primary-tiny" onclick="return collectAllContentChannels()">전체 수집 실행</button></article></div>`;
}

function renderContentIntegrationPanel() {
  const manualRoutes = new Set(['blog','naverCafe','threads','openChat','membership']);
  const exportState = state.contentOpsExportStatus || {};
  return `<section class="panel ai-ops-panel">
    <div class="section-head">
      <div>
        <p class="eyebrow">AI CONTENT OPS · READ ONLY FIRST</p>
        <h2>연동 후보와 안전 범위</h2>
        <p>현재 goal 범위는 읽기 연동/수동 기록/설계까지입니다. 실제 게시, 삭제, 계정 변경은 사용자 승인 전 실행하지 않습니다.</p>
      </div>
      <div class="content-actions">${badge('실제 게시 금지')}${badge('읽기/기록 우선')}</div>
    </div>
    <div class="integration-grid">
      ${CONTENT_INTEGRATIONS.map((item)=>{
        const status = integrationStatusByKey(item.route);
        const isManual = manualRoutes.has(item.route);
        const isExport = item.label.includes('Notion') || item.label.includes('문서 저장소');
        const statusText = status?.message || (isExport && exportState.export ? `최근 export: ${exportState.export.markdownPath || exportState.export.jsonPath}` : item.scope);
        const action = isManual
          ? `<button class="tiny primary-tiny" onclick="return importManualChannel('${escapeHtml(item.route)}')">수동 가져오기 상태 저장</button>`
          : isExport
            ? `<button class="tiny primary-tiny" onclick="return exportContentOpsServer()">운영 로그 export</button>`
            : `<button class="tiny" data-route="${escapeHtml(item.route)}">화면 보기</button>`;
        return `<article>
        <div><strong>${escapeHtml(item.label)}</strong>${badge(status?.status || item.status)}</div>
        <p>${escapeHtml(item.scope)}</p>
        <small>${escapeHtml(statusText)}</small>
        ${status?.error ? `<small class="danger-text">${escapeHtml(status.error)}</small>` : ''}
        ${action}
      </article>`;
      }).join('')}
    </div>
    ${state.contentImportStatus?.error ? `<p class="note danger-text">수동 가져오기 오류: ${escapeHtml(state.contentImportStatus.error)}</p>` : ''}
    ${exportState.error ? `<p class="note danger-text">Export 오류: ${escapeHtml(exportState.error)}</p>` : ''}
  </section>`;
}

function renderContentStudio() {
  const all = getCollection('contentItems');
  const createItems = all.filter((item) => !isContentCoreChannel(item) || ['아이디어','원본 작성중','작성중','확장 준비','검수','발행 준비','대기'].includes(item.status)).slice(0, 12);
  const lanes = [
    { title: '아이디어/주제', statuses: ['아이디어','대기'], hint: '아직 원본으로 만들기 전' },
    { title: '원본 작성중', statuses: ['원본 작성중','작성중'], hint: '긴 원본 글·대본 작성' },
    { title: '플랫폼별 변환', statuses: ['확장 준비'], hint: '유튜브·블로그·카페·스레드 문안' },
    { title: '검수/발행 준비', statuses: ['검수','발행 준비','예약'], hint: '캘린더로 보낼 후보' },
  ];
  $('#routeContent').innerHTML = `
    <div class="content-studio-shell">
      <section class="content-studio-hero production-hero">
        <div>
          <p class="eyebrow">CONTENT PRODUCTION STUDIO</p>
          <h2>주제 하나를 채널별 콘텐츠 카드로 변환하는 허브</h2>
          <p>주제 입력 → 원본 → 유튜브 → 블로그 → 네이버카페 → 스레드 → 발행 캘린더 흐름에 맞춰 초안과 채널별 등록 카드를 만듭니다. 발행 일정과 링크는 발행 캘린더, 실제 반응은 각 채널 화면에서 이어서 관리합니다.</p>
        </div>
        <div class="content-hero-steps">
          ${['주제 입력','원본','유튜브','블로그','네이버카페','스레드','발행 캘린더'].map((step, i) => `<span><b>${i + 1}</b>${step}</span>`).join('')}
        </div>
      </section>

      <form class="content-topic-form" onsubmit="return submitContentTopic(this)">
        <div><p class="eyebrow">빠른 제작 입력</p><h3>주제 입력 → 원본 → 유튜브 → 블로그 → 네이버카페 → 스레드 카드 생성</h3><small>여기서는 채널별 초안/문안을 만들고, 검수 후 발행 캘린더로 넘길 카드까지 준비합니다.</small></div>
        <label>주제<input name="topic" required placeholder="예: 초보셀러가 AI 상세페이지에서 제일 먼저 막히는 이유" /></label>
        <label>목적<select name="targetGoal"><option>AI커머스브레인 상품 홍보</option><option>강의/교육 콘텐츠</option><option>초보셀러 문제 해결</option><option>구매자료 안내</option><option>커뮤니티 질문 답변</option></select></label>
        <label>대상<select name="targetAudience"><option>초보셀러</option><option>수강생</option><option>구매자료 관심자</option><option>카페 회원</option><option>AI커머스브레인 구매자</option></select></label>
        <label>핵심 메시지<input name="coreMessage" placeholder="예: AI보다 먼저 판매 구조가 잡혀야 한다" /></label>
        <label>근거/자료<input name="proof" placeholder="예: 영상 링크, 강의자료, 고객 질문, PDF" /></label>
        <label>CTA<input name="cta" placeholder="예: 오픈채팅 공유, 무료자료, 자료 패키지" /></label>
        <label>톤<select name="tone"><option>쉽고 단호한 초보셀러 언어</option><option>강의 요약형</option><option>문제 공감형</option><option>체크리스트형</option><option>구매 전 FAQ형</option></select></label>
        <label>참고자료/링크<textarea name="memo" placeholder="관련 URL, 강의자료, 구매자료 연결 포인트"></textarea></label>
        <button class="primary" type="submit" onclick="return submitContentTopic(this.form)">제작 카드 만들기</button>
      </form>

      <div class="content-calendar-summary">
        <article><span>제작중</span><strong>${createItems.length}</strong><em>초안/문안</em></article>
        <article><span>검수 필요</span><strong>${all.filter((i)=>i.status === '검수').length}</strong><em>발행 전 확인</em></article>
        <article><span>발행 준비</span><strong>${all.filter((i)=>['발행 준비','예약'].includes(i.status)).length}</strong><em>캘린더 배치 대상</em></article>
      </div>

      <section class="panel"><div class="content-lane-head"><h3>제작 파이프라인</h3><span>${createItems.length}건</span></div>
        <div class="content-production-board">
          ${lanes.map((lane)=>{
            const rows = createItems.filter((item)=>lane.statuses.includes(item.status || '아이디어'));
            return `<section class="content-production-lane"><div><h4>${escapeHtml(lane.title)}</h4><small>${escapeHtml(lane.hint)}</small></div>${rows.length ? rows.map((item)=>renderContentMiniCard(item, 'work')).join('') : '<p class="empty">항목 없음</p>'}</section>`;
          }).join('')}
        </div>
      </section>

      <section class="panel soft-panel"><div class="section-head"><div><h2>채널별 변환/등록 가이드</h2><p>제작소에서는 원본을 채널별 등록 카드로 바꾸는 데 집중합니다. 실제 등록 일정·URL은 발행 캘린더, 반응/트래픽은 각 채널 메뉴에서 이어서 관리합니다.</p></div><button class="soft" data-route="publishCalendar">발행 캘린더로 이동</button></div>
        <div class="sync-status-grid">${CONTENT_CHANNELS.map((channel)=>`<article class="sync-card"><div><span class="sync-icon">${escapeHtml(channel.icon)}</span><strong>${escapeHtml(channel.label)}</strong>${badge(channel.homeUrl ? '링크 확인됨' : '링크 필요')}</div><p>${escapeHtml(channel.role)}</p><dl><div><dt>대표 링크</dt><dd>${channel.homeUrl ? `<a href="${escapeHtml(channel.homeUrl)}" target="_blank" rel="noreferrer">열기</a>` : '미등록'}</dd></div></dl></article>`).join('')}</div>
      </section>
      ${renderContentIntegrationPanel()}
    </div>
  `;
}

function submitContentTopic(form) {
  const values = Object.fromEntries(new FormData(form).entries());
  const topic = String(values.topic || '').trim();
  if (!topic) { toast('주제를 입력하세요.'); return false; }
  submitContentTopicServer(form, values);
  return false;
}

async function submitContentTopicServer(form, values) {
  const button = form.querySelector('button[type="submit"]');
  if (button) button.disabled = true;
  try {
    const response = await fetch('/api/content/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...values, data: state.data }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) throw new Error(payload.error || `콘텐츠 생성 실패: ${response.status}`);
    applyDashboardServerPayload(payload);
    form.reset();
    render();
    const contentCount = payload.result?.contentItems?.length || 0;
    const communityCount = payload.result?.communityPosts?.length || 0;
    toast(`서버 생성 완료: 콘텐츠 ${contentCount}건, 커뮤니티 ${communityCount}건을 DB에 저장했습니다.`);
  } catch (error) {
    toast(`서버 콘텐츠 생성 실패: ${error.message || error}`);
    console.warn('server content generation failed', error);
  } finally {
    if (button) button.disabled = false;
  }
}


function contentItemById(id) {
  return getCollection('contentItems').find((item) => item.id === id);
}

function contentStageNext(status = '') {
  const order = ['아이디어','원본 작성중','작성중','확장 준비','검수','발행 준비','예약','발행완료'];
  const index = order.indexOf(status);
  return index >= 0 && index < order.length - 1 ? order[index + 1] : '검수';
}

function markContentStatus(id, status) {
  const item = contentItemById(id);
  if (!item) return false;
  item.status = status;
  if (status === '예약' && !contentDate(item)) item.due = todayIso();
  if (status === '발행완료') {
    item.due = item.due || todayIso();
    item.publishStatus = '발행완료';
    item.nextAction = '반응 확인';
    item.syncStatus = item.syncStatus === '연결 필요' ? '준비됨' : item.syncStatus;
  }
  saveData();
  render();
  toast(`${item.title || '콘텐츠'} 상태를 ${status}(으)로 바꿨습니다.`);
  return true;
}

function advanceContentStage(id) {
  const item = contentItemById(id);
  if (!item) return false;
  const next = contentStageNext(item.status);
  item.status = next;
  item.stage = next;
  item.nextAction = next === '검수' ? '발행 전 최종 검수' : next === '발행 준비' ? '발행 캘린더로 보내기' : next === '예약' ? '발행일 확인' : next === '발행완료' ? '반응 확인' : '다음 단계 진행';
  saveData();
  render();
  toast('콘텐츠 단계를 진행했습니다.');
  return true;
}

function sendContentToPublishCalendar(id) {
  const item = contentItemById(id);
  if (!item) return false;
  if (!isContentCoreChannel(item)) { toast('원본 글은 채널 문안으로 변환한 뒤 캘린더에 보낼 수 있습니다.'); return false; }
  item.status = item.status === '발행완료' ? '발행완료' : '발행 준비';
  item.due = contentDate(item) || todayIso();
  item.publishStatus = item.publishStatus || '발행 예정';
  item.nextAction = '발행 캘린더에서 날짜/SNS 등록 확인';
  saveData();
  state.route = 'publishCalendar';
  location.hash = 'publishCalendar';
  render();
  toast('발행 캘린더로 보냈습니다. 날짜와 SNS를 확인하세요.');
  return true;
}

function deleteContentItem(id) {
  deleteItem('contentItems', id);
  render();
  toast('콘텐츠를 삭제했습니다.');
  return true;
}

function createTaskFromContent(id) {
  const item = contentItemById(id);
  if (!item) return false;
  upsertItem('tasks', {
    id: makeId('tasks'),
    title: `[콘텐츠] ${item.nextAction || item.title || '콘텐츠 작업'}`,
    owner: '이브레인',
    status: '대기',
    priority: item.replyNeeded === '예' ? '높음' : '중간',
    due: contentDate(item) || todayIso(),
    memo: [`연결 콘텐츠: ${item.title || '-'}`, `채널: ${item.platform || contentPlatformFromType(item.type)}`, `원본 주제: ${item.sourceTopic || '-'}`, item.publishUrl ? `발행 URL: ${item.publishUrl}` : '', item.memo || ''].filter(Boolean).join('\n'),
    sourceType: 'content',
    sourceId: item.id,
  });
  toast('할일관리로 보냈습니다.');
  return true;
}

function publishTodoCandidates(date = todayIso()) {
  const items = getCollection('contentItems').filter(isContentCoreChannel);
  const byToday = items.filter((item)=>String(contentDate(item) || '').slice(0, 10) === date && (!isCompletedContent(item) || !contentUrl(item)));
  const linkMissing = items.filter((item)=>isCompletedContent(item) && contentDate(item) && !contentUrl(item));
  const missingSchedule = items.filter((item)=>!contentDate(item) && !isCompletedContent(item));
  const map = new Map();
  [...byToday, ...linkMissing, ...missingSchedule].forEach((item)=>item?.id && map.set(item.id, item));
  return [...map.values()];
}

function upsertPublishTaskFromContent(item = {}) {
  if (!item.id) return null;
  const platform = item.platform || contentPlatformFromType(item.type);
  const missing = !contentDate(item) ? '발행일 지정' : isCompletedContent(item) && !contentUrl(item) ? 'URL 등록' : '등록/발행 처리';
  const existing = getCollection('tasks').find((task)=>task.sourceType === 'content' && task.sourceId === item.id && String(task.title || '').startsWith('[발행]'));
  const task = {
    ...(existing || {}),
    id: existing?.id || makeId('tasks'),
    title: `[발행] ${platform} · ${item.title || '콘텐츠'}`,
    owner: existing?.owner || '이브레인',
    status: existing?.status === '완료' ? '진행중' : (existing?.status || '대기'),
    priority: !contentDate(item) || (isCompletedContent(item) && !contentUrl(item)) ? '높음' : '중간',
    due: contentDate(item) || todayIso(),
    memo: [
      `필요 작업: ${missing}`,
      `채널: ${platform}`,
      `콘텐츠 ID: ${item.id}`,
      `원본 주제: ${item.sourceTopic || '-'}`,
      contentUrl(item) ? `등록 URL: ${contentUrl(item)}` : '등록 URL: 미등록',
      item.nextAction ? `다음 액션: ${item.nextAction}` : '',
    ].filter(Boolean).join('\n'),
    sourceType: 'content',
    sourceId: item.id,
  };
  upsertItem('tasks', task);
  return task;
}

function createPublishTodayTasks() {
  runPublishOps('todayTasks');
  return false;
}

async function runPublishOps(action = 'todayTasks') {
  const labelMap = { todayTasks: '오늘 할일', urlBacklog: 'URL 보강', balanceWeek: '채널 균형' };
  state.publishOpsStatus = { status: 'loading', message: `${labelMap[action] || action} 실행 중`, result: null, error: '' };
  render();
  try {
    const response = await fetch('/api/publish/ops', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, data: state.data }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) throw new Error(payload.error || `발행 운영 액션 실패: ${response.status}`);
    applyDashboardServerPayload(payload);
    state.publishOpsStatus = { status: 'success', message: `${labelMap[action] || action} 저장 완료`, result: payload.result || null, error: '' };
    render();
    toast(`${labelMap[action] || action} 액션을 DB에 저장했습니다.`);
  } catch (error) {
    state.publishOpsStatus = { status: 'error', message: '', result: null, error: error.message || String(error) };
    render();
    toast(`발행 운영 액션 실패: ${error.message || error}`);
  }
  return false;
}

function createPublishTodayTasksLocal() {
  const candidates = publishTodoCandidates(todayIso());
  if (!candidates.length) {
    toast('오늘 만들 발행 할일 후보가 없습니다.');
    return false;
  }
  const tasks = candidates.map(upsertPublishTaskFromContent).filter(Boolean);
  render();
  toast(`발행 캘린더 기준 오늘 할일 ${tasks.length}건을 만들거나 갱신했습니다.`);
  return false;
}

function markContentReplyDone(id) {
  const item = contentItemById(id);
  if (!item) return false;
  item.replyNeeded = '아니오';
  item.nextAction = item.reuseCandidate === '예' ? '후속 콘텐츠로 재활용' : '반응 모니터링';
  saveData();
  render();
  toast('답변 필요 표시를 완료 처리했습니다.');
  return true;
}

function markContentReuseDone(id) {
  const item = contentItemById(id);
  if (!item) return false;
  item.reuseCandidate = '아니오';
  item.nextAction = item.replyNeeded === '예' ? '댓글 답변' : '반응 모니터링';
  saveData();
  render();
  toast('재활용 후보를 완료 처리했습니다.');
  return true;
}

function createFollowupContent(id) {
  const item = contentItemById(id);
  if (!item) return false;
  upsertItem('contentItems', {
    id: makeId('contentItems'),
    title: `[후속] ${item.sourceTopic || item.title || '콘텐츠'}`,
    sourceTopic: item.sourceTopic || item.title || '',
    type: 'Blog',
    platform: '블로그',
    targetGoal: item.targetGoal || '초보셀러 문제 해결',
    targetAudience: item.targetAudience || '초보셀러',
    status: '아이디어',
    stage: '후속 기획',
    due: todayIso(),
    syncStatus: '연결 필요',
    views: 0,
    comments: 0,
    likes: 0,
    replyNeeded: '아니오',
    reuseCandidate: '아니오',
    nextAction: '반응 좋은 포인트로 후속 글 작성',
    memo: `원본 콘텐츠에서 생성: ${item.title || item.id}`,
  });
  render();
  toast('후속 콘텐츠 후보를 만들었습니다.');
  return true;
}

function applyDashboardServerPayload(payload = {}) {
  if (payload.data) {
    normalizeData(payload.data);
    state.data = payload.data;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
  }
  if (payload.saved) {
    state.serverStore = {
      ...state.serverStore,
      status: 'saved',
      itemCount: Number(payload.saved.itemCount || dashboardItemCount()),
      lastSavedAt: payload.saved.updatedAt || new Date().toISOString(),
      error: '',
      dbPath: payload.saved.dbPath || state.serverStore.dbPath || '',
    };
  }
  return payload;
}

async function applyContentCollectPayload(payload = {}, label = '채널') {
  applyDashboardServerPayload(payload);
  render();
  toast(`${label} 서버 수집 상태를 갱신했습니다.`);
  return true;
}

async function collectContentChannel(channelKey) {
  const channel = CONTENT_CHANNELS.find((entry) => entry.key === channelKey);
  if (!channel) return false;
  try {
    const response = await fetch('/api/content/collect/channel', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ channelKey, data: state.data }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) throw new Error(payload.error || `수집 실패: ${response.status}`);
    return applyContentCollectPayload(payload, channel.label);
  } catch (error) {
    console.warn('content channel collect failed; falling back to browser harness', error);
    toast(`서버 수집 실패: ${error.message || error}. 브라우저 하네스로 대체합니다.`);
    return simulateChannelSync(channelKey);
  }
}

async function collectAllContentChannels() {
  try {
    const response = await fetch('/api/content/collect/all', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: state.data }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) throw new Error(payload.error || `전체 수집 실패: ${response.status}`);
    return applyContentCollectPayload(payload, '전체 채널');
  } catch (error) {
    console.warn('all content channel collect failed; falling back to browser harness', error);
    CONTENT_CHANNELS.forEach((channel) => simulateChannelSync(channel.key));
    toast(`서버 전체 수집 실패: ${error.message || error}. 브라우저 하네스로 대체했습니다.`);
    return true;
  }
}

async function loadContentImportStatus() {
  try {
    const response = await fetch('/api/content/import/status', { cache: 'no-store' });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) throw new Error(payload.error || `상태 조회 실패: ${response.status}`);
    state.contentImportStatus = { status: 'loaded', channels: payload.channels || [], error: '' };
    if (payload.channels?.length && state.data?.settings) {
      const next = { ...(state.data.settings.contentOpsIntegrations || {}) };
      payload.channels.forEach((row)=>{ next[row.key] = row; });
      state.data.settings.contentOpsIntegrations = next;
    }
    return payload.channels || [];
  } catch (error) {
    state.contentImportStatus = { status: 'error', channels: state.contentImportStatus.channels || [], error: error.message || String(error) };
    return [];
  }
}

function integrationStatusByKey(key) {
  return state.data?.settings?.contentOpsIntegrations?.[key] || (state.contentImportStatus.channels || []).find((row)=>row.key === key) || null;
}

async function importManualChannel(channelKey, records = []) {
  try {
    const response = await fetch('/api/content/import/manual', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ channelKey, records, data: state.data }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) throw new Error(payload.error || `수동 가져오기 실패: ${response.status}`);
    applyDashboardServerPayload(payload);
    state.contentImportStatus = { status: 'loaded', channels: payload.channels || payload.result?.statuses || [], error: '' };
    render();
    const imported = payload.result?.imported || 0;
    toast(imported ? `수동 가져오기 ${imported}건을 DB에 저장했습니다.` : '수동 가져오기 endpoint 상태를 DB에 저장했습니다.');
  } catch (error) {
    state.contentImportStatus = { status: 'error', channels: state.contentImportStatus.channels || [], error: error.message || String(error) };
    render();
    toast(`수동 가져오기 실패: ${error.message || error}`);
  }
  return false;
}

function simulateChannelSync(channelKey) {
  const channel = CONTENT_CHANNELS.find((entry) => entry.key === channelKey);
  if (!channel) return false;
  const now = new Date().toISOString().slice(0, 16).replace('T', ' ');
  let updated = 0;
  getCollection('contentItems').forEach((item) => {
    if (!channel.types.includes(item.type)) return;
    item.syncStatus = '마지막 수집 완료';
    item.lastSyncedAt = now;
    item.views = Number(item.views || 0);
    item.comments = Number(item.comments || 0);
    item.likes = Number(item.likes || 0);
    if (item.status === '발행완료' || item.publishUrl) item.nextAction = item.comments > 0 ? '댓글 확인' : '반응 모니터링';
    updated += 1;
  });
  saveData();
  render();
  toast(`${channel.label} 하네스 수집 상태를 갱신했습니다. (${updated}건)`);
  return true;
}

function submitQuickContent(form, fixedType = '') {
  const values = Object.fromEntries(new FormData(form).entries());
  const type = fixedType || values.type || 'Blog';
  const title = String(values.title || '').trim();
  if (!title) { toast('제목을 입력하세요.'); return false; }
  const status = values.status || '발행완료';
  upsertItem('contentItems', {
    id: makeId('contentItems'),
    title,
    sourceTopic: values.sourceTopic || title,
    type,
    platform: contentPlatformFromType(type),
    targetGoal: values.targetGoal || 'AI커머스브레인 상품 홍보',
    targetAudience: values.targetAudience || '초보셀러',
    status,
    publishStatus: status,
    stage: values.stage || 'SNS 등록 기록',
    due: values.due || todayIso(),
    publishDate: values.due || todayIso(),
    publishUrl: values.publishUrl || '',
    syncStatus: values.syncStatus || '수동 기록',
    views: Number(values.views || 0),
    comments: Number(values.comments || 0),
    likes: Number(values.likes || 0),
    thumbnailImpressions: parseMetricText(values.thumbnailImpressions),
    thumbnailCtr: parseMetricText(values.thumbnailCtr),
    uniqueViewers: parseMetricText(values.uniqueViewers),
    watchTimeMinutes: values.watchTimeMinutes || '',
    replyNeeded: values.replyNeeded || '아니오',
    reuseCandidate: values.reuseCandidate || '아니오',
    nextAction: values.nextAction || (status === '발행완료' ? '반응 확인' : '발행 상태 확인'),
    memo: values.memo || '',
  });
  form.reset();
  render();
  toast('SNS 등록/발행 항목을 추가했습니다.');
  return false;
}

function renderQuickContentForm(types = CONTENT_CORE_TYPES, title = 'SNS 등록 빠른 추가') {
  return `<form class="quick-content-form publish-quick-form" onsubmit="return submitQuickContent(this)">
    <strong>${escapeHtml(title)}</strong>
    <label>채널<select name="type">${types.map((type)=>`<option value="${escapeHtml(type)}">${escapeHtml(contentPlatformFromType(type))} · ${escapeHtml(type)}</option>`).join('')}</select></label>
    <label>제목<input name="title" required placeholder="올린 콘텐츠 제목" /></label>
    <label>등록/발행일<input name="due" type="date" value="${todayIso()}" /></label>
    <label>URL<input name="publishUrl" type="url" placeholder="https://..." /></label>
    <label>상태<select name="status"><option>발행완료</option><option>예약</option><option>발행 예정</option><option>누락</option><option>확인 필요</option></select></label>
    <label>노출수<input name="thumbnailImpressions" type="text" inputmode="decimal" placeholder="예: 1.4천" /></label>
    <label>노출 클릭률<input name="thumbnailCtr" type="text" inputmode="decimal" placeholder="예: 4.5%" /></label>
    <label>조회<input name="views" type="number" min="0" value="0" /></label>
    <label>순 시청자수<input name="uniqueViewers" type="text" inputmode="numeric" placeholder="예: 56" /></label>
    <label>시청시간(분)<input name="watchTimeMinutes" type="number" min="0" step="1" placeholder="예: 120" /></label>
    <label>댓글<input name="comments" type="number" min="0" value="0" /></label>
    <label>좋아요<input name="likes" type="number" min="0" value="0" /></label>
    <button class="primary" type="submit" onclick="return submitQuickContent(this.form)">추가</button>
  </form>`;
}

function renderPublishActionRow(item = {}) {
  const id = escapeHtml(item.id || '');
  return `<div class="calendar-actions"><button class="tiny" onclick="markContentStatus('${id}','예약')">예약</button><button class="tiny primary-tiny" onclick="markContentStatus('${id}','발행완료')">발행완료</button><button class="tiny" onclick="markContentStatus('${id}','확인 필요')">확인필요</button></div>`;
}

function renderPublishStatusPill(item = {}) {
  const status = item.status || item.publishStatus || '발행 예정';
  const date = contentDate(item) || '날짜 없음';
  const platform = item.platform || contentPlatformFromType(item.type);
  const url = contentUrl(item);
  return `<article class="publish-sns-row"><div><strong>${escapeHtml(item.title || '제목 없음')}</strong><p>${escapeHtml(platform)} · ${escapeHtml(date)} · ${escapeHtml(status)}</p>${url ? `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">등록 URL 열기</a>` : '<small>URL 미등록</small>'}</div>${renderPublishActionRow(item)}</article>`;
}

function publishCalendarDateIso(year, monthIndex, day) {
  return `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function publishCalendarStatusClass(status = '') {
  if (['발행완료','완료'].includes(status)) return 'done';
  if (['예약','발행 예정','발행 준비'].includes(status)) return 'scheduled';
  if (['누락','확인 필요'].includes(status)) return 'warn';
  return 'draft';
}

function publishChannelForItem(item = {}) {
  return CONTENT_CHANNELS.find((channel)=>channel.types.includes(item.type)) || { key: 'other', label: contentPlatformFromType(item.type), icon: '•' };
}

function renderPublishCalendarEvent(item = {}) {
  const channel = publishChannelForItem(item);
  const status = item.status || item.publishStatus || '발행 예정';
  const cls = `${publishCalendarStatusClass(status)} ${channel.key || 'other'}`;
  return `<article class="publish-calendar-event ${escapeHtml(cls)}" title="${escapeHtml(item.title || '제목 없음')}">
    <span class="publish-event-channel">${escapeHtml(channel.icon || '•')}</span>
    <div><strong>${escapeHtml(item.title || '제목 없음')}</strong><small>${escapeHtml(channel.label)} · ${escapeHtml(status)}</small></div>
  </article>`;
}

function renderPublishMonthCalendar(scheduled = []) {
  const [year, month] = state.calendarMonth.split('-').map(Number);
  const first = new Date(year, month - 1, 1);
  const start = new Date(first);
  start.setDate(first.getDate() - first.getDay());
  const selected = state.selectedPublishDate && String(state.selectedPublishDate).startsWith(state.calendarMonth) ? state.selectedPublishDate : todayIso().startsWith(state.calendarMonth) ? todayIso() : `${state.calendarMonth}-01`;
  state.selectedPublishDate = selected;
  const byDate = scheduled.reduce((acc, item) => {
    const key = String(contentDate(item) || '').slice(0, 10);
    (acc[key] ||= []).push(item);
    return acc;
  }, {});
  const cells = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const iso = publishCalendarDateIso(date.getFullYear(), date.getMonth(), date.getDate());
    const rows = byDate[iso] || [];
    const isCurrentMonth = iso.startsWith(state.calendarMonth);
    const classes = ['publish-calendar-cell', isCurrentMonth ? '' : 'muted', iso === todayIso() ? 'today' : '', iso === selected ? 'selected' : ''].filter(Boolean).join(' ');
    const channelDots = CONTENT_CHANNELS.map((channel) => {
      const count = rows.filter((item)=>channel.types.includes(item.type)).length;
      return count ? `<span class="publish-channel-dot ${escapeHtml(channel.key)}" title="${escapeHtml(channel.label)} ${count}건">${escapeHtml(channel.icon)}${count > 1 ? `<b>${count}</b>` : ''}</span>` : '';
    }).join('');
    return `<section class="${classes}">
      <button class="publish-calendar-date" data-publish-date="${escapeHtml(iso)}" aria-label="${escapeHtml(iso)} 발행 항목 보기"><b>${date.getDate()}</b>${rows.length ? `<span>${rows.length}</span>` : ''}</button>
      <div class="publish-channel-dots">${channelDots}</div>
      <div class="publish-calendar-events">${rows.slice(0, 3).map(renderPublishCalendarEvent).join('')}${rows.length > 3 ? `<button class="publish-more" data-publish-date="${escapeHtml(iso)}">+${rows.length - 3} 더보기</button>` : ''}</div>
    </section>`;
  }).join('');
  return `<section class="panel publish-month-panel">
    <div class="calendar-head publish-calendar-head">
      <div><p class="eyebrow">MONTH VIEW</p><h3>${monthLabel(state.calendarMonth)}</h3></div>
      <div class="calendar-nav-actions"><button class="ghost icon-btn" data-calendar-prev aria-label="이전달">‹</button><button class="soft" data-calendar-today>오늘</button><button class="ghost icon-btn" data-calendar-next aria-label="다음달">›</button></div>
    </div>
    <div class="publish-week-labels">${['일','월','화','수','목','금','토'].map((day)=>`<div>${day}</div>`).join('')}</div>
    <div class="publish-month-grid">${cells}</div>
  </section>`;
}

function renderPublishCalendar() {
  const items = getCollection('contentItems').filter(isContentCoreChannel);
  const scheduled = items.filter((item) => contentDate(item)).sort((a, b) => String(contentDate(a)).localeCompare(String(contentDate(b))));
  const missingSchedule = items.filter((item) => !contentDate(item) && !isCompletedContent(item));
  const linkMissing = items.filter((item) => isCompletedContent(item) && contentDate(item) && !contentUrl(item));
  const linkManaged = items.filter((item) => isCompletedContent(item) && contentUrl(item)).sort((a, b) => String(contentDate(b)).localeCompare(String(contentDate(a))));
  const registrationQueue = scheduled.filter((item) => !isCompletedContent(item));
  const weekItems = scheduled.filter((item) => contentDate(item) === todayIso() || isThisWeek(contentDate(item)));
  const selectedDate = state.selectedPublishDate && String(state.selectedPublishDate).startsWith(state.calendarMonth) ? state.selectedPublishDate : todayIso().startsWith(state.calendarMonth) ? todayIso() : `${state.calendarMonth}-01`;
  state.selectedPublishDate = selectedDate;
  const selectedRows = scheduled.filter((item)=>String(contentDate(item)).slice(0, 10) === selectedDate);
  const monthRows = scheduled.filter((item)=>String(contentDate(item)).startsWith(state.calendarMonth));
  const fixRows = [...linkMissing, ...missingSchedule.filter((item)=>!linkMissing.includes(item))].slice(0, 10);
  const channelSummary = CONTENT_CHANNELS.map((channel)=>{
    const rows = items.filter((item)=>channel.types.includes(item.type));
    const monthCount = monthRows.filter((item)=>channel.types.includes(item.type)).length;
    return `<article><span>${escapeHtml(channel.label)}</span><strong>${rows.length}</strong><em>이번 달 ${monthCount}건 · ${rows.filter(isCompletedContent).length} 링크/완료 관리</em></article>`;
  }).join('');
  const channelBalance = CONTENT_CHANNELS.map((channel)=>({
    label: channel.label,
    count: weekItems.filter((item)=>channel.types.includes(item.type)).length,
  }));
  const weakestChannels = channelBalance.filter((entry)=>entry.count === 0).map((entry)=>entry.label);
  const todayTodoCount = publishTodoCandidates(todayIso()).length;
  const publishOps = state.publishOpsStatus || {};
  $('#routeContent').innerHTML = `
    <div class="content-calendar-shell">
      <div class="section-head"><div><h2>발행 캘린더</h2><p>등록 예정 관리와 등록 후 링크 관리를 한 화면에서 운영합니다. 달력은 날짜/채널/상태를 보고, 아래 링크 보드에서 URL 누락과 완료 기록을 정리합니다.</p></div><button class="primary" data-route="content">콘텐츠 제작소</button></div>
      <div class="grid-2">
        <section class="panel soft-panel"><p class="eyebrow">등록 예정 관리</p><h3>날짜·채널·상태로 등록 일정을 운영합니다</h3><p class="purpose-note">유튜브·블로그·네이버카페·스레드의 예정 콘텐츠를 달력 기준으로 보고, 필요한 항목은 바로 예약/발행완료 처리합니다.</p></section>
        <section class="panel soft-panel"><p class="eyebrow">등록 후 링크 관리</p><h3>발행 뒤 실제 URL을 붙여 기록합니다</h3><p class="purpose-note">publishUrl/url 필드를 이용해 등록 링크를 남기면 각 채널 운영 화면과 반응 점검 흐름이 자연스럽게 이어집니다.</p></section>
      </div>
      ${renderQuickContentForm(CONTENT_CORE_TYPES, '등록 예정/발행 링크 항목 추가')}
      <div class="content-calendar-summary">
        <article><span>등록 예정 관리</span><strong>${registrationQueue.length}</strong><em>오늘 ${scheduled.filter((i)=>contentDate(i) === todayIso()).length}건 · 이번 주 ${weekItems.length}건</em></article>
        <article><span>등록 후 링크 미등록</span><strong>${linkMissing.length}</strong><em>발행완료 후 URL 보강 필요</em></article>
        <article><span>링크 등록 완료</span><strong>${linkManaged.length}</strong><em>발행완료 + URL 연결</em></article>
      </div>
      <div class="content-calendar-summary channel-summary">${channelSummary}</div>
      <section class="panel ai-ops-panel">
        <div class="section-head">
          <div>
            <p class="eyebrow">PUBLISH OPS GOAL</p>
            <h3>주간 예약 · 채널 균형 · URL 누락 · 오늘 할 일</h3>
            <p>완료 기준을 화면에 고정해 발행 캘린더가 단순 달력이 아니라 운영 판단판으로 움직이게 합니다.</p>
          </div>
          <div class="content-actions">${badge(linkMissing.length === 0 ? 'URL 누락 0건' : `URL 누락 ${linkMissing.length}건`)}${badge(`오늘 할 일 ${todayTodoCount}건`)}<button class="primary" onclick="return createPublishTodayTasks()">오늘 할일 만들기</button><button class="soft" onclick="return runPublishOps('urlBacklog')">URL 보강 할일</button><button class="soft" onclick="return runPublishOps('balanceWeek')">채널 균형 후보</button></div>
        </div>
        ${publishOps.status === 'success' ? `<p class="note">최근 발행 운영 저장: ${escapeHtml(publishOps.message)} · 할일 ${Number(publishOps.result?.taskCount || 0)}건 · 콘텐츠 ${Number(publishOps.result?.contentCount || 0)}건</p>` : ''}
        ${publishOps.error ? `<p class="note danger-text">발행 운영 오류: ${escapeHtml(publishOps.error)}</p>` : ''}
        <div class="ai-ops-grid">
          <article><span>이번 주 예약/등록</span><strong>${weekItems.length}</strong><em>주간 콘텐츠 예약 목표 추적</em></article>
          <article><span>채널 균형</span><strong>${weakestChannels.length ? `${weakestChannels.length}개 빈 채널` : '균형 OK'}</strong><em>${weakestChannels.length ? weakestChannels.join(', ') : '이번 주 모든 핵심 채널 배치됨'}</em></article>
          <article><span>URL 누락</span><strong>${linkMissing.length}</strong><em>목표는 발행완료 URL 누락 0건</em></article>
          <article><span>오늘 할 일 후보</span><strong>${todayTodoCount}</strong><em>오늘 등록/링크 보강/누락 체크</em></article>
        </div>
      </section>
      <section class="panel soft-panel ai-ops-panel">
        <div class="section-head">
          <div>
            <p class="eyebrow">PUBLISH INTEGRATION</p>
            <h3>발행 연동 후보</h3>
            <p>콘텐츠 제작소에서 만든 초안을 캘린더에 예약하고, 채널별 실제 URL과 반응 데이터를 다시 운영판으로 회수합니다.</p>
          </div>
          <div class="content-actions"><button class="soft" data-route="content">제작소 연동</button><button class="soft" data-route="settings">연동 설정</button></div>
        </div>
        <div class="integration-grid">
          <article><span>콘텐츠 제작소</span><strong>초안 → 예약</strong><em>원본/채널 카드의 발행일과 다음 액션 연결</em></article>
          <article><span>YouTube·네이버·SNS</span><strong>URL 회수</strong><em>발행완료 후 실제 링크를 붙여 URL 누락 0건 관리</em></article>
          <article><span>오늘 할 일</span><strong>작업 생성</strong><em>오늘 등록/링크 보강/누락 체크를 할일로 전환</em></article>
        </div>
      </section>
      ${renderPublishMonthCalendar(scheduled)}
      <div class="grid-2">
        <section class="panel"><h3>${escapeHtml(selectedDate)} 등록 예정 + 완료 기록</h3><div class="publish-date-list">${selectedRows.length ? selectedRows.map(renderPublishStatusPill).join('') : '<p class="empty">선택한 날짜에 등록 예정 또는 발행 완료 항목이 없습니다. 위 입력폼에서 일정을 추가하세요.</p>'}</div></section>
        <section class="panel soft-panel"><h3>등록 후 링크 미등록 / 날짜 누락 체크</h3>${fixRows.length ? fixRows.map(renderPublishStatusPill).join('') : '<p class="empty">등록 후 링크 미등록과 날짜 누락 항목이 없습니다.</p>'}</section>
      </div>
      <section class="panel">
        <div class="section-head"><div><h2>등록 후 링크 관리 보드</h2><p>발행완료된 항목은 실제 링크를 남겨두고, 이후 유튜브/블로그/카페/스레드 화면에서 반응 점검으로 이어갑니다.</p></div><div class="content-actions">${badge(`링크 완료 ${linkManaged.length}건`)}${badge(`날짜 누락 ${missingSchedule.length}건`)}</div></div>
        <div class="publish-date-list">${linkManaged.length ? linkManaged.slice(0, 12).map(renderPublishStatusPill).join('') : '<p class="empty">아직 링크까지 등록 완료된 항목이 없습니다. 발행완료 후 URL을 입력해 기록하세요.</p>'}</div>
      </section>
    </div>
  `;
}

function channelByKeyOrTitle(keyOrTitle, types = []) {
  return CONTENT_CHANNELS.find((entry)=>entry.key === keyOrTitle)
    || CONTENT_CHANNELS.find((entry)=>entry.label === keyOrTitle)
    || CONTENT_CHANNELS.find((entry)=>entry.types.some((type)=>types.includes(type)))
    || CONTENT_CHANNELS[0];
}

function getChannelItems(channel = {}) {
  return getCollection('contentItems')
    .filter((item)=>channel.types.includes(item.type))
    .sort((a,b)=>String(contentDate(b) || '').localeCompare(String(contentDate(a) || '')));
}

function setChannelWorkspaceFilter(channelKey, filter) {
  state.channelWorkspaceFilters = { ...(state.channelWorkspaceFilters || {}), [channelKey]: filter || '전체' };
  render();
  return false;
}

function youtubeStoredApiSummary() {
  const items = getCollection('contentItems').filter((item)=>['YouTube','Shorts'].includes(item.type));
  const apiItems = items.filter((item)=>String(item.id || '').startsWith('yt-'));
  const manualItems = items.filter((item)=>!String(item.id || '').startsWith('yt-'));
  const latest = apiItems.map((item)=>String(item.lastSyncedAt || '')).filter(Boolean).sort().at(-1) || '';
  return {
    items,
    apiItems,
    manualItems,
    apiCount: apiItems.length,
    manualCount: manualItems.length,
    latest,
    views: items.reduce((acc, item)=>acc + Number(item.views || 0), 0),
  };
}

function renderYoutubeApiMvpPanel() {
  const sync = state.youtubeApiStatus || { status: 'idle' };
  const stored = youtubeStoredApiSummary();
  const result = { ...(sync.result || {}) };
  if (!result.videoCount && stored.apiCount) result.videoCount = stored.apiCount;
  if (!result.lastSyncedAt && stored.latest) result.lastSyncedAt = stored.latest;
  const auth = sync.authStatus || sync.result?.authStatus || (stored.apiCount ? { hasYoutubeReadonly: true, hasAnalyticsReadonly: true } : {});
  const missing = [...(auth.missingScopes || []), ...(auth.missingAnalyticsScopes || [])];
  const hasStoredSync = stored.apiCount > 0;
  const statusLabel = sync.status === 'success' || (sync.status === 'idle' && hasStoredSync) ? '수집 완료' : sync.status === 'error' ? '권한/수집 확인 필요' : sync.status === 'loading' ? '수집 중' : auth.hasYoutubeReadonly ? '권한 확인 완료' : '대기';
  const statusMessage = sync.message || (hasStoredSync ? `${stored.apiCount}개 영상 저장됨${stored.latest ? ` · 최근 ${stored.latest}` : ''}` : '읽기 전용 연결 확인 전');
  const thirdValue = sync.result ? `${Number(result.created || 0)} / ${Number(result.updated || 0)}` : `${stored.apiCount} / ${stored.manualCount}`;
  const thirdLabel = sync.result ? 'contentItems 반영' : 'API/수동 항목';
  return `<section class="panel soft-panel youtube-api-panel ${hasStoredSync ? 'is-ready' : ''}">
    <div class="section-head">
      <div>
        <p class="eyebrow">YOUTUBE DATA API · 1차</p>
        <h3>영상 목록/기본 통계 API 수집</h3>
        <p>할일관리에는 등록하지 않고, 수집된 영상과 다음 액션을 이 유튜브 대시보드 카드에 바로 올립니다.</p>
      </div>
      <div class="content-actions">
        <button class="soft" onclick="return checkYoutubeApiStatus()">OAuth 상태 확인</button>
        <button class="primary" onclick="return syncYoutubeBasic()">1차 API 수집 실행</button>
      </div>
    </div>
    <div class="content-calendar-summary youtube-api-summary">
      <article><span>상태</span><strong>${escapeHtml(statusLabel)}</strong><em>${escapeHtml(statusMessage)}</em></article>
      <article><span>영상 수집</span><strong>${Number(result.videoCount || 0).toLocaleString('ko-KR')}</strong><em>${result.lastSyncedAt ? `최근 ${escapeHtml(result.lastSyncedAt)}` : '최근 업로드 기준'}</em></article>
      <article><span>${sync.result ? '신규/갱신' : '저장 구분'}</span><strong>${thirdValue}</strong><em>${thirdLabel}</em></article>
      <article><span>Analytics</span><strong>${Number(result.analyticsUpdated || 0).toLocaleString('ko-KR')}</strong><em>시청시간/평균시청/CTR 가능값</em></article>
      <article><span>OAuth</span><strong>${auth.hasYoutubeReadonly ? '준비됨' : '권한 필요'}</strong><em>${auth.account ? escapeHtml(auth.account) : (hasStoredSync ? '읽기 권한 확인됨' : '계정 확인 전')}</em></article>
    </div>
    ${missing.length ? `<div class="notice warning"><strong>추가 권한 필요</strong><p>현재 Google 토큰에 YouTube 읽기 권한이 없습니다. 필요한 scope: ${missing.map(escapeHtml).join(', ')}</p><small>권한이 붙으면 같은 버튼으로 실제 채널 영상 목록/제목/썸네일/조회수/좋아요/댓글 수를 가져옵니다.</small></div>` : ''}
    ${result.analyticsError ? `<div class="notice warning"><strong>Analytics 일부 제한</strong><p>${escapeHtml(result.analyticsError)}</p><small>시청시간은 가능한 범위에서 반영하고, 썸네일 CTR이 API에서 반환되지 않으면 수동 기록 상태로 남깁니다.</small></div>` : ''}
  </section>`;
}

async function checkYoutubeApiStatus() {
  state.youtubeApiStatus = { status: 'loading', message: 'YouTube OAuth 상태 확인 중', result: null, authStatus: null };
  render();
  try {
    const response = await fetch('/api/youtube/status');
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) throw new Error(payload.error || `상태 확인 실패: ${response.status}`);
    state.youtubeApiStatus = { status: payload.status?.hasYoutubeReadonly ? 'success' : 'idle', message: payload.status?.hasYoutubeReadonly ? 'YouTube 읽기 권한 준비됨' : 'YouTube 읽기 권한 추가 필요', result: youtubeStoredApiSummary().apiCount ? { videoCount: youtubeStoredApiSummary().apiCount, lastSyncedAt: youtubeStoredApiSummary().latest } : null, authStatus: payload.status };
    render();
    toast('YouTube OAuth 상태를 확인했습니다.');
  } catch (error) {
    state.youtubeApiStatus = { status: 'error', message: error.message || String(error), result: null, authStatus: null };
    render();
    toast(`YouTube 상태 확인 실패: ${error.message || error}`);
  }
  return false;
}

async function syncYoutubeBasic() {
  state.youtubeApiStatus = { status: 'loading', message: 'YouTube Data API 1차 수집 중', result: null, authStatus: state.youtubeApiStatus?.authStatus || null };
  render();
  try {
    const response = await fetch('/api/youtube/sync/basic', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: state.data, maxVideos: 50 }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) {
      const error = new Error(payload.error || `YouTube 수집 실패: ${response.status}`);
      error.payload = payload;
      throw error;
    }
    if (payload.data) {
      normalizeData(payload.data);
      state.data = payload.data;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
    }
    if (payload.saved) {
      state.serverStore = { ...state.serverStore, status: 'saved', itemCount: Number(payload.saved.itemCount || dashboardItemCount()), lastSavedAt: payload.saved.updatedAt || new Date().toISOString(), error: '' };
    }
    state.youtubeApiStatus = { status: 'success', message: `${payload.result?.videoCount || 0}개 영상 수집 완료`, result: payload.result || {}, authStatus: payload.result?.authStatus || null };
    render();
    toast('YouTube Data API 1차 수집을 유튜브 대시보드에 반영했습니다.');
  } catch (error) {
    const authStatus = error.payload?.authStatus || null;
    state.youtubeApiStatus = { status: 'error', message: error.message || String(error), result: null, authStatus };
    render();
    toast(`YouTube 수집 실패: ${error.message || error}`);
  }
  return false;
}



function blogStatsSummary(items = []) {
  const statsItems = items.filter((item)=>Number(item.views || 0) > 0 || String(item.inflowKeywords || '').trim() || String(item.blogStatsUrl || '').trim());
  const keywords = new Set();
  items.forEach((item)=>splitBlogKeywords(item.inflowKeywords).forEach((keyword)=>keywords.add(keyword)));
  return { statsCount: statsItems.length, totalViews: items.reduce((acc, item)=>acc + Number(item.views || 0), 0), keywordCount: keywords.size };
}
function splitBlogKeywords(value = '') { return String(value || '').split(/[,\n|/]+/).map((item)=>item.trim()).filter(Boolean); }
function blogKeywordChips(value = '', limit = 8) { const keywords = splitBlogKeywords(value).slice(0, limit); return keywords.length ? keywords.map((keyword)=>`<em>${escapeHtml(keyword)}</em>`).join('') : '<small>No keywords</small>'; }
function bestBlogStatsItems(items = []) { return [...items].filter((item)=>Number(item.views || 0) > 0 || splitBlogKeywords(item.inflowKeywords).length || item.blogStatsUrl).sort((a, b)=>Number(b.views || 0) - Number(a.views || 0)); }
function renderBlogStatsImportPanel(items = []) {
  const options = items.map((item)=>`<option value="${escapeHtml(item.id || '')}">${escapeHtml(item.title || 'Untitled')}</option>`).join('');
  return `<section class="panel soft-panel blog-stats-import-panel"><div class="section-head"><div><p class="eyebrow">NAVER BLOG STAT</p><h3>Save post views and inflow keywords</h3><p>Naver stat pages require your logged-in browser session. Copy the view count and inflow keywords from the stat page, then save them per post here.</p></div><div class="content-actions">${badge('views')}${badge('keywords')}</div></div><form class="blog-stats-form" onsubmit="return submitBlogStatsManual(this)"><label>Post<select name="contentId">${options || '<option value="">No blog posts</option>'}</select></label><label>Stat URL<input name="blogStatsUrl" type="url" placeholder="https://blog.stat.naver.com/blog/article/.../cv" /></label><label>Views<input name="views" type="number" min="0" inputmode="numeric" placeholder="1240" /></label><label>Inflow keywords<input name="inflowKeywords" placeholder="AI detail page, beginner seller" /></label><label>Traffic source<input name="inflowRoutes" placeholder="Naver search, Blog search" /></label><button class="primary" type="submit">Save stats</button></form><form class="blog-stats-bulk-form" onsubmit="return importBlogStatsText(this)"><label>Paste table<textarea name="statsText" placeholder="Title | Views | Keywords | Stat URL&#10;Why beginner sellers get stuck with AI detail pages | 1240 | AI detail page, beginner seller | https://blog.stat.naver.com/blog/article/.../cv"></textarea></label><button class="soft" type="submit">Save table</button></form></section>`;
}
function renderBlogStatsBoard(items = []) { const rows = bestBlogStatsItems(items); return `<section class="panel blog-stats-board"><div class="section-head"><div><p class="eyebrow">BLOG TRAFFIC BOARD</p><h3>Post views and inflow keywords</h3><p>Blog posts are sorted by views, with inflow keywords visible next to each post.</p></div></div>${rows.length ? `<div class="blog-stats-table-wrap"><table class="blog-stats-table"><thead><tr><th>Post</th><th>Views</th><th>Keywords</th><th>Traffic source</th><th>Links</th><th>Imported</th></tr></thead><tbody>${rows.map(renderBlogStatsRow).join('')}</tbody></table></div>` : '<p class="empty">No blog stats yet. Save views and keywords with the form above.</p>'}</section>`; }
function renderBlogStatsRow(item = {}) { const url = contentUrl(item); return `<tr><td><strong>${escapeHtml(item.title || 'Untitled')}</strong><small>${escapeHtml(contentDate(item) || 'No publish date')}</small></td><td class="metric-strong">${Number(item.views || 0).toLocaleString('ko-KR')}</td><td><div class="blog-keyword-chips">${blogKeywordChips(item.inflowKeywords, 8)}</div></td><td>${escapeHtml(item.inflowRoutes || 'Not entered')}</td><td class="blog-link-actions">${url ? `<a class="tiny" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">Post</a>` : ''}${item.blogStatsUrl ? `<a class="tiny primary-tiny" href="${escapeHtml(item.blogStatsUrl)}" target="_blank" rel="noreferrer">Stats</a>` : ''}</td><td>${escapeHtml(item.blogStatsImportedAt || item.lastSyncedAt || '-')}</td></tr>`; }
function submitBlogStatsManual(form) { const values = Object.fromEntries(new FormData(form).entries()); const item = contentItemById(values.contentId); if (!item) { toast('Blog post not found.'); return false; } item.blogStatsUrl = values.blogStatsUrl || item.blogStatsUrl || ''; if (values.views !== '') item.views = Number(values.views || 0); item.inflowKeywords = values.inflowKeywords || item.inflowKeywords || ''; item.inflowRoutes = values.inflowRoutes || item.inflowRoutes || ''; item.syncStatus = 'Naver blog stats manually saved'; item.blogStatsImportedAt = new Date().toISOString().slice(0, 16).replace('T', ' '); item.lastSyncedAt = item.blogStatsImportedAt; saveData(); form.reset(); render(); toast('Blog stats saved.'); return false; }
function importBlogStatsText(form) { const text = String(new FormData(form).get('statsText') || '').trim(); if (!text) { toast('Paste a blog stats table first.'); return false; } const rows = text.split(/\r?\n/).map((line)=>line.trim()).filter(Boolean); let updated = 0; let created = 0; rows.forEach((line)=>{ const parts = line.includes('|') ? line.split('|').map((part)=>part.trim()) : line.split('\t').map((part)=>part.trim()); if (parts.length < 2 || /title/i.test(parts[0])) return; const [title, viewsText, keywords = '', statsUrl = '', publishUrl = ''] = parts; if (!title) return; let item = getCollection('contentItems').find((entry)=>entry.type === 'Blog' && String(entry.title || '').includes(title)); if (!item) { item = { id: makeId('contentItems'), title, sourceTopic: title, type: 'Blog', platform: 'Naver Blog', status: 'published', publishStatus: 'published', due: todayIso(), publishDate: todayIso(), publishUrl, comments: 0, likes: 0, replyNeeded: 'No', reuseCandidate: 'No', nextAction: 'Review follow-up post from inflow keywords', memo: 'Created from Naver blog stats table' }; getCollection('contentItems').unshift(item); created += 1; } else { updated += 1; } item.views = Number(parseMetricText(viewsText) || 0); item.inflowKeywords = keywords || item.inflowKeywords || ''; item.blogStatsUrl = statsUrl || item.blogStatsUrl || ''; item.publishUrl = publishUrl || item.publishUrl || ''; item.syncStatus = 'Naver blog stats manually saved'; item.blogStatsImportedAt = new Date().toISOString().slice(0, 16).replace('T', ' '); item.lastSyncedAt = item.blogStatsImportedAt; }); saveData(); form.reset(); render(); toast(`Blog stats saved: updated ${updated}, created ${created}`); return false; }

function channelItemMatchesFilter(item = {}, filter = '전체', channel = {}) {
  const text = `${item.title || ''} ${item.memo || ''} ${item.nextAction || ''} ${item.cta || ''}`;
  if (!filter || filter === '전체') return true;
  if (filter === '롱폼') return item.type === 'YouTube';
  if (filter === '쇼츠') return item.type === 'Shorts';
  if (filter === '발행완료') return ['발행완료','완료'].includes(item.status);
  if (filter === '댓글 있음') return Number(item.comments || 0) > 0;
  if (filter === '답변 필요') return isReplyNeededContent(item);
  if (filter === '답변 완료') return isReplyDoneContent(item);
  if (filter === '재활용 후보') return item.reuseCandidate === '예';
  if (filter === '반응 좋음') return Number(item.likes || 0) + Number(item.comments || 0) + Number(item.views || 0) > 0;
  if (filter.includes('SEO')) return text.includes('SEO') || text.includes('검색');
  if (filter.includes('신규 글')) return !isCompletedContent(item) || item.reuseCandidate === '예' || text.includes('신규') || text.includes('주제');
  if (filter.includes('타 계정')) return text.includes('타 계정') || text.includes('다른 계정') || text.includes('벤치') || text.includes('소재');
  if (filter.includes('구매자료')) return text.includes('구매') || text.includes('자료');
  if (filter.includes('FAQ')) return text.includes('FAQ') || text.includes('질문') || item.reuseCandidate === '예';
  if (filter.includes('카페') || filter.includes('블로그') || filter.includes('스레드') || filter.includes('영상')) return item.reuseCandidate === '예' || text.includes('확장') || text.includes('재활용');
  return channel.types.includes(item.type);
}

function contentReactionPriorityScore(item = {}) {
  return Number(item.views || 0) + Number(item.comments || 0) * 20 + Number(item.likes || 0) * 3 + (isReplyNeededContent(item) ? 240 : 0) + (item.reuseCandidate === '예' ? 120 : 0);
}

const THREADS_X_ISSUE_SIGNALS = [
  {
    label: 'WooCommerce AI workflow',
    issue: '해외 커머스 운영자가 스토어 운영·고객지원·에이전트 준비를 AI workflow로 묶는 흐름',
    source: 'https://x.com/WooCommerce/status/2062622062619815952',
    topicSeed: 'AI가 쇼핑몰 운영자를 대체하는 게 아니라, 반복 업무 순서를 먼저 바꿉니다.',
  },
  {
    label: 'AI UGC ad scale',
    issue: 'AI 에이전트로 UGC 광고를 빠르게 만들고 테스트하는 숏폼 광고 제작 흐름',
    source: 'https://x.com/maverickecom/status/2043701275708027122',
    topicSeed: '광고 소재 1개를 오래 고민하기보다, 문제 문장 10개를 먼저 테스트하세요.',
  },
  {
    label: 'TikTok Shop attribution',
    issue: '숏폼·유기 콘텐츠가 플랫폼 밖 구매에 미치는 간접 매출 측정 이슈',
    source: 'https://x.com/Adweek/status/2013655933063172359',
    topicSeed: '좋아요보다 중요한 건 저장 후 구매까지 이어지는 숨은 경로입니다.',
  },
  {
    label: 'Google AI Shopping',
    issue: 'AI 쇼핑, 가상 착용, agentic checkout이 상품 상세페이지와 FAQ 품질을 더 중요하게 만드는 흐름',
    source: 'https://x.com/BigCommerce/status/2018843196516597836',
    topicSeed: 'AI 쇼핑 시대에는 예쁜 상세페이지보다 답을 잘 주는 상세페이지가 팔립니다.',
  },
  {
    label: 'X Ads AI targeting',
    issue: 'X 광고의 AI 타게팅과 쇼핑 대화 기반 문화/관심사 연결 방식',
    source: 'https://business.x.com/content/dam/business-twitter/resources/x-downloadable-guides/x-ads-best-practices-one-sheet.pdf',
    topicSeed: '타게팅을 넓히기 전에 고객이 반응한 문장부터 광고 소재로 바꾸세요.',
  },
];

function threadReactionScore(item = {}) {
  return Number(item.views || 0) + Number(item.comments || 0) * 20 + Number(item.likes || 0) * 4 + (item.reuseCandidate === '예' ? 140 : 0);
}

function summarizeThreadsReactions(items = []) {
  const posted = items.filter((item)=>isPublishedContent(item) || contentUrl(item) || Number(item.views || 0) > 0 || Number(item.comments || 0) > 0 || Number(item.likes || 0) > 0);
  const totals = posted.reduce((acc, item) => {
    acc.views += Number(item.views || 0);
    acc.comments += Number(item.comments || 0);
    acc.likes += Number(item.likes || 0);
    return acc;
  }, { views: 0, comments: 0, likes: 0 });
  const best = [...posted].sort((a, b)=>threadReactionScore(b) - threadReactionScore(a))[0] || null;
  const engagement = totals.views ? ((totals.comments + totals.likes) / totals.views) * 100 : 0;
  return { posted, totals, best, engagement };
}

function detectThreadFormat(item = {}) {
  const text = `${item.title || ''} ${item.memo || ''} ${item.sourceTopic || ''} ${item.draftBody || ''} ${item.nextAction || ''}`;
  if (/문제|막히|안 팔|결핍|고민|실패|이유/.test(text)) return '문제 공감형';
  if (/체크|순서|단계|방법|가이드|실행/.test(text)) return '체크리스트형';
  if (/증거|사례|결과|수치|후기|전후/.test(text)) return '증거 제시형';
  if (/질문|댓글|저장|남겨/.test(text)) return '댓글 유도형';
  if (/AI|자동화|에이전트|workflow|워크플로우/.test(text)) return 'AI 변화 해석형';
  return '짧은 관점 전환형';
}

function analyzeThreadFormats(items = []) {
  const source = items.length ? items : [{ title: '문제 공감형 기본 슬롯', memo: '현재 기록이 적어 기본 벤치마크를 사용' }];
  const grouped = source.reduce((acc, item) => {
    const format = detectThreadFormat(item);
    const row = acc[format] || { format, count: 0, score: 0, example: item.title || item.sourceTopic || '제목 없음' };
    row.count += 1;
    row.score += threadReactionScore(item);
    if (!row.example || threadReactionScore(item) > row.score / Math.max(1, row.count)) row.example = item.title || item.sourceTopic || row.example;
    acc[format] = row;
    return acc;
  }, {});
  return Object.values(grouped).sort((a, b)=>b.score - a.score || b.count - a.count).slice(0, 4);
}

function buildFutureThreadTopics(items = []) {
  const reactionSummary = summarizeThreadsReactions(items);
  const formats = analyzeThreadFormats(reactionSummary.posted.length ? reactionSummary.posted : items);
  const primaryFormat = formats[0]?.format || '문제 공감형';
  const bestTitle = reactionSummary.best?.title || reactionSummary.best?.sourceTopic || '상세페이지가 안 팔리는 첫 문장';
  return THREADS_X_ISSUE_SIGNALS.map((signal, index)=>({
    title: signal.topicSeed,
    format: index % 2 === 0 ? primaryFormat : (formats[index % Math.max(1, formats.length)]?.format || '체크리스트형'),
    rationale: `${bestTitle}처럼 고객 문제를 먼저 잡고, 해외 X 신호인 ${signal.label} 이슈를 초보셀러 실행 언어로 번역합니다.`,
    source: signal.source,
    signal: signal.issue,
  })).slice(0, 5);
}

function renderThreadTopicRecommendation(row = {}, index = 0) {
  return `<article class="thread-topic-card">
    <div><span>${index + 1}</span><strong>${escapeHtml(row.title)}</strong></div>
    <p>${escapeHtml(row.rationale)}</p>
    <dl>
      <div><dt>추천 형태</dt><dd>${escapeHtml(row.format)}</dd></div>
      <div><dt>X 신호</dt><dd>${escapeHtml(row.signal)}</dd></div>
    </dl>
    <a href="${escapeHtml(row.source)}" target="_blank" rel="noreferrer">근거 보기</a>
  </article>`;
}

function renderThreadsInsightBoard(items = [], visible = []) {
  const reaction = summarizeThreadsReactions(items);
  const formats = analyzeThreadFormats(reaction.posted.length ? reaction.posted : visible);
  const recommendations = buildFutureThreadTopics(items);
  return `<section class="threads-insight-board">
    <div class="threads-insight-head">
      <div>
        <p class="eyebrow">THREADS INTELLIGENCE</p>
        <h3>반응 결과 + 인기 형태 + 해외 X 이슈 기반 다음 주제</h3>
        <p>내가 올린 스레드/SNS 기록을 점수화하고, 반응 좋은 글 형태와 해외 X 신호를 합쳐 다음에 올릴 글 주제를 잡습니다.</p>
      </div>
      ${badge('추천 5개')}
    </div>
    <div class="threads-signal-grid">
      <article><span>내 발행/반응 기록</span><strong>${reaction.posted.length}건</strong><em>URL·발행완료·반응 수치 기준</em></article>
      <article><span>총 반응</span><strong>${(reaction.totals.likes + reaction.totals.comments).toLocaleString('ko-KR')}</strong><em>좋아요+댓글</em></article>
      <article><span>반응률</span><strong>${reaction.engagement ? `${reaction.engagement.toFixed(1)}%` : '미수집'}</strong><em>반응 / 조회</em></article>
      <article><span>최고 반응 글</span><strong>${escapeHtml(reaction.best?.title || '아직 없음')}</strong><em>${reaction.best ? `${threadReactionScore(reaction.best).toLocaleString('ko-KR')}점` : '수동 기록 필요'}</em></article>
    </div>
    <div class="threads-analysis-grid">
      <article class="panel soft-panel">
        <p class="eyebrow">인기 글 형태</p>
        <h3>현재 기록에서 먹히는 패턴</h3>
        <div class="purpose-list">${formats.length ? formats.map((row)=>`<article class="purpose-row"><div><strong>${escapeHtml(row.format)}</strong>${badge(`${row.count}건`)}</div><p>반응 점수 ${Math.round(row.score).toLocaleString('ko-KR')} · 예시: ${escapeHtml(row.example)}</p></article>`).join('') : '<p class="empty">분석할 스레드 반응 기록이 없습니다.</p>'}</div>
      </article>
      <article class="panel soft-panel">
        <p class="eyebrow">해외 X 이슈 신호</p>
        <h3>주제로 번역할 소식</h3>
        <div class="purpose-list">${THREADS_X_ISSUE_SIGNALS.slice(0, 5).map((signal)=>`<article class="purpose-row"><div><strong>${escapeHtml(signal.label)}</strong>${badge('X/해외')}</div><p>${escapeHtml(signal.issue)}</p><a href="${escapeHtml(signal.source)}" target="_blank" rel="noreferrer">출처 열기</a></article>`).join('')}</div>
      </article>
    </div>
    <div class="thread-topic-grid">${recommendations.map(renderThreadTopicRecommendation).join('')}</div>
  </section>`;
}

function contentHasQuestionSignal(item = {}) {
  const text = `${item.title || ''} ${item.memo || ''} ${item.nextAction || ''} ${item.sourceTopic || ''}`;
  return Number(item.comments || 0) > 0 || /질문|\?|문의|댓글/.test(text);
}

function contentIsFaqOrMaterialCandidate(item = {}) {
  const text = `${item.title || ''} ${item.memo || ''} ${item.nextAction || ''} ${item.sourceTopic || ''}`;
  return item.reuseCandidate === '예' || /FAQ|구매|자료|재활용|문의/.test(text);
}

function renderFollowupActionButtons(item = {}, options = {}) {
  if (!item.id) return '';
  const id = escapeHtml(item.id);
  const buttons = [];
  if (options.showReuse !== false) buttons.push(`<button class="tiny" onclick="markContentReuseCandidate('${id}')">재활용 후보</button>`);
  if (options.showFollowup !== false) buttons.push(`<button class="tiny" onclick="createFollowupContent('${id}')">후속 콘텐츠 만들기</button>`);
  if (options.showReplyNeeded !== false) buttons.push(`<button class="tiny" onclick="markContentReplyNeeded('${id}')">답변 필요</button>`);
  if (options.showReplyDone !== false) buttons.push(`<button class="tiny primary-tiny" onclick="markContentReplyDone('${id}')">답변 완료</button>`);
  return `<div class="content-actions">${buttons.join('')}</div>`;
}

function renderCafePriorityRow(item = {}) {
  const replyStatus = contentReplyStatus(item);
  return `<article class="purpose-row">
    <div><strong>${escapeHtml(item.title || '제목 없음')}</strong>${badge(replyStatus)}${contentIsFaqOrMaterialCandidate(item) ? badge('FAQ/자료 후보') : ''}</div>
    <p>댓글 ${Number(item.comments || 0).toLocaleString('ko-KR')}건 · 조회 ${Number(item.views || 0).toLocaleString('ko-KR')} · ${escapeHtml(item.nextAction || '댓글/질문 반응 체크')}</p>
    <small>${escapeHtml(item.sourceTopic || item.memo || '발행 글 메모 없음')}</small>
    ${renderFollowupActionButtons(item, { showFollowup: false })}
  </article>`;
}

function renderThreadsPlanningRow(item = {}) {
  const reactionLabel = Number(item.comments || 0) > 0 ? `댓글 ${Number(item.comments || 0).toLocaleString('ko-KR')}건` : Number(item.likes || 0) > 0 ? `좋아요 ${Number(item.likes || 0).toLocaleString('ko-KR')}건` : `조회 ${Number(item.views || 0).toLocaleString('ko-KR')}`;
  return `<article class="purpose-row">
    <div><strong>${escapeHtml(item.title || '제목 없음')}</strong>${item.reuseCandidate === '예' ? badge('재활용 후보') : ''}${isReplyNeededContent(item) ? badge('답변 필요') : ''}</div>
    <p>${escapeHtml(reactionLabel)} · ${escapeHtml(item.nextAction || '다음 문장/후속 콘텐츠 기획')}</p>
    <small>원문/메모: ${escapeHtml(item.sourceTopic || item.memo || '짧은 글 메모 없음')}</small>
    ${renderFollowupActionButtons(item)}
  </article>`;
}

function renderChannelMetricRow(item = {}, channel = {}) {
  if (channel.key === 'youtube') {
    return `<div class="channel-metric-row">
      <span>노출수 <b>${escapeHtml(formatIntegerMetric(contentImpressions(item)))}</b></span>
      <span>노출 클릭률 <b>${escapeHtml(formatCtr(contentCtr(item)))}</b></span>
      <span>조회수 <b>${Number(item.views || 0).toLocaleString('ko-KR')}</b></span>
      <span>순 시청자수 <b>${escapeHtml(formatIntegerMetric(contentUniqueViewers(item)))}</b></span>
    </div>`;
  }
  const score = Number(item.views || 0) + Number(item.comments || 0) * 20 + Number(item.likes || 0) * 3;
  return `<div class="channel-metric-row">
    <span>조회 <b>${Number(item.views || 0).toLocaleString('ko-KR')}</b></span>
    <span>댓글 <b>${Number(item.comments || 0).toLocaleString('ko-KR')}</b></span>
    <span>반응 <b>${Number(item.likes || 0).toLocaleString('ko-KR')}</b></span>
    <span>점수 <b>${score.toLocaleString('ko-KR')}</b></span>
  </div>`;
}

function renderChannelPurposeBoard(channel = {}, items = [], visible = []) {
  if (channel.key === 'blog') {
    const seoNeeds = items.filter((item)=>String(`${item.stage || ''} ${item.nextAction || ''} ${item.memo || ''}`).includes('SEO') || !contentUrl(item));
    const commentItems = items.filter((item)=>Number(item.comments || 0) > 0 || isReplyNeededContent(item));
    const newTopics = [...items].filter((item)=>!isCompletedContent(item) || item.reuseCandidate === '예' || String(item.nextAction || '').includes('신규')).sort((a, b)=>contentReactionPriorityScore(b) - contentReactionPriorityScore(a)).slice(0, 5);
    return `
      <section class="grid-3">
        <article class="panel soft-panel">
          <p class="eyebrow">1. 네이버 블로그 SEO 운영</p>
          <h3>글/SEO 상태를 먼저 봅니다</h3>
          <dl class="purpose-stats">
            <div><dt>블로그 글</dt><dd>${items.length}건</dd></div>
            <div><dt>SEO/URL 점검</dt><dd>${seoNeeds.length}건</dd></div>
            <div><dt>댓글 반응</dt><dd>${commentItems.length}건</dd></div>
            <div><dt>신규 주제 후보</dt><dd>${newTopics.length}건</dd></div>
          </dl>
        </article>
        <article class="panel">
          <p class="eyebrow">2. 신규 글 주제</p>
          <h3>다음 블로그 글로 이어갈 후보</h3>
          <div class="purpose-list">${newTopics.length ? newTopics.map(renderThreadsPlanningRow).join('') : '<p class="empty">신규 글로 이어갈 후보가 없습니다.</p>'}</div>
        </article>
        <article class="panel soft-panel">
          <p class="eyebrow">3. 댓글/검색 반응</p>
          <h3>반응 있는 글부터 보완합니다</h3>
          <div class="purpose-list">${commentItems.length ? commentItems.slice(0, 5).map(renderCafePriorityRow).join('') : '<p class="empty">댓글이나 답변 필요 블로그 항목이 없습니다.</p>'}</div>
        </article>
      </section>
    `;
  }
  if (channel.key === 'naverCafe') {
    const replyNeeded = items.filter(isReplyNeededContent);
    const questionSignals = items.filter(contentHasQuestionSignal);
    const faqCandidates = items.filter(contentIsFaqOrMaterialCandidate);
    const newTopics = [...items].filter((item)=>!isCompletedContent(item) || item.reuseCandidate === '예' || String(`${item.nextAction || ''} ${item.memo || ''}`).includes('신규')).sort((a, b)=>contentReactionPriorityScore(b) - contentReactionPriorityScore(a)).slice(0, 5);
    const priority = [...items].filter((item)=>isReplyNeededContent(item) || contentHasQuestionSignal(item)).sort((a, b)=>contentReactionPriorityScore(b) - contentReactionPriorityScore(a)).slice(0, 5);
    return `
      <section class="grid-3">
        <article class="panel soft-panel">
          <p class="eyebrow">1. 발행한 글 반응 체크</p>
          <h3>카페 반응 운영판</h3>
          <p class="purpose-note">발행한 글 기준으로 댓글·질문·답변 필요 항목을 먼저 확인하고, FAQ/구매자료 후속으로 넘길 후보를 골라냅니다.</p>
          <dl class="purpose-stats">
            <div><dt>발행글 수</dt><dd>${items.length}건</dd></div>
            <div><dt>댓글/질문 있음</dt><dd>${questionSignals.length}건</dd></div>
            <div><dt>답변 필요</dt><dd>${replyNeeded.length}건</dd></div>
            <div><dt>신규 글 주제</dt><dd>${newTopics.length}건</dd></div>
          </dl>
        </article>
        <article class="panel">
          <p class="eyebrow">2. 우선 반응 후속 리스트</p>
          <h3>댓글/질문부터 답변합니다</h3>
          <div class="purpose-list">${priority.length ? priority.map(renderCafePriorityRow).join('') : '<p class="empty">지금 바로 답변할 카페 반응 항목이 없습니다.</p>'}</div>
        </article>
        <article class="panel soft-panel">
          <p class="eyebrow">3. 신규 글 주제 후보</p>
          <h3>댓글을 다음 카페 글로 바꿉니다</h3>
          <div class="purpose-list">${newTopics.length ? newTopics.map(renderThreadsPlanningRow).join('') : `<p class="empty">신규 글 주제로 확장할 카페 항목이 없습니다.</p>`}</div>
          <p class="purpose-note">FAQ/구매자료 후보 ${faqCandidates.length}건은 구매 전 질문형 글이나 공지형 글로 분리할 수 있습니다.</p>
        </article>
      </section>
    `;
  }
  if (channel.key === 'threads') {
    const reactionItems = [...visible].filter((item)=>Number(item.views || 0) > 0 || Number(item.comments || 0) > 0 || Number(item.likes || 0) > 0);
    const strongLines = [...items].filter((item)=>item.reuseCandidate === '예' || Number(item.likes || 0) + Number(item.comments || 0) > 0).sort((a, b)=>contentReactionPriorityScore(b) - contentReactionPriorityScore(a)).slice(0, 4);
    const planningCandidates = [...items].filter((item)=>String(item.nextAction || item.memo || '').trim()).sort((a, b)=>contentReactionPriorityScore(b) - contentReactionPriorityScore(a)).slice(0, 4);
    const dailyDrafts = [...items].filter((item)=>item.threadSlot || item.draftBody).sort((a, b)=>Number(a.threadSlot || 99) - Number(b.threadSlot || 99)).slice(0, 5);
    const externalSignals = [...items].filter((item)=>/타 계정|다른 계정|소재|레퍼런스|벤치/.test(`${item.title || ''} ${item.memo || ''} ${item.nextAction || ''}`)).slice(0, 4);
    const draftHints = dailyDrafts.map((item)=>`<article class="purpose-row"><div><strong>${escapeHtml(item.title || '제목 없음')}</strong>${badge(item.threadSlot ? `${item.threadSlot}/5` : item.status || '초안')}</div><p>${escapeHtml(item.draftBody || item.nextAction || '다음 콘텐츠 훅 문장 정리')}</p><small>${escapeHtml(item.sourceTopic || item.memo || '메모 없음')}</small></article>`).join('');
    const externalHints = externalSignals.length
      ? externalSignals.map((item)=>`<article class="purpose-row"><div><strong>${escapeHtml(item.title || '소재 후보')}</strong>${badge('타 계정 소재')}</div><p>${escapeHtml(item.nextAction || item.memo || '벤치마크 후 내 계정 문장으로 변환')}</p></article>`).join('')
      : '<article class="purpose-row"><div><strong>타 계정 소재 발굴 슬롯</strong></div><p>반응 좋은 계정의 문장, 훅, 댓글 질문을 기록하면 후속 블로그/카페/쇼츠 소재로 전환합니다.</p><small>빠른 등록 폼에 제목과 메모로 저장하세요.</small></article>';
    return `
      ${renderThreadsInsightBoard(items, visible)}
      <section class="grid-3">
        <article class="panel soft-panel">
          <p class="eyebrow">1. 매일 짧은 글 5개</p>
          <h3>오늘 올릴 스레드 초안</h3>
          <dl class="purpose-stats">
            <div><dt>오늘 초안</dt><dd>${dailyDrafts.length}/5개</dd></div>
            <div><dt>반응 기록 있음</dt><dd>${reactionItems.length}건</dd></div>
            <div><dt>답변 필요</dt><dd>${items.filter(isReplyNeededContent).length}건</dd></div>
            <div><dt>재활용 후보</dt><dd>${items.filter((item)=>item.reuseCandidate === '예').length}건</dd></div>
          </dl>
          <div class="purpose-list">${draftHints || '<p class="empty">오늘 쓸 짧은 글 5개가 아직 없습니다. 콘텐츠 제작소에서 주제를 입력하세요.</p>'}</div>
        </article>
        <article class="panel">
          <p class="eyebrow">2. 반응 좋은 문장/글 후보</p>
          <h3>후속 소재로 이어갈 글</h3>
          <div class="purpose-list">${strongLines.length ? strongLines.map(renderThreadsPlanningRow).join('') : '<p class="empty">아직 반응 좋은 스레드 후보가 없습니다.</p>'}</div>
        </article>
        <article class="panel soft-panel">
          <p class="eyebrow">3. 타 계정 소재 발굴</p>
          <h3>다른 계정에서 배울 소재</h3>
          <div class="purpose-list">${externalHints}</div>
        </article>
      </section>
    `;
  }
  return '';
}

function renderChannelOpsCard(item = {}, channel = {}) {
  const id = escapeHtml(item.id || '');
  const url = contentUrl(item);
  const replyStatus = contentReplyStatus(item);
  const thumb = item.thumbnailUrl ? `<a class="channel-thumb" href="${escapeHtml(url || item.thumbnailUrl)}" target="_blank" rel="noreferrer"><img src="${escapeHtml(item.thumbnailUrl)}" alt="" loading="lazy"></a>` : '';
  return `<article class="channel-card ${replyStatus === '답변 필요' ? 'needs-reply' : ''} ${replyStatus === '답변 완료' ? 'reply-done' : ''}">
    <div class="channel-card-top"><span class="channel-icon">${escapeHtml(channel.icon || '✎')}</span><div>${badge(item.type || channel.label)}${badge(item.status || '확인필요')}${Number(item.comments || 0) > 0 ? badge('댓글 있음') : ''}${replyStatus === '답변 필요' ? badge('답변 필요') : ''}${replyStatus === '답변 완료' ? badge('답변 완료') : ''}${item.reuseCandidate === '예' ? badge('재활용 후보') : ''}</div></div>
    ${thumb}
    <h3>${escapeHtml(item.title || '제목 없음')}</h3>
    <p>${escapeHtml(item.sourceTopic || item.memo || channel.reuseHint || '운영 메모가 없습니다.')}</p>
    ${renderChannelMetricRow(item, channel)}
    <dl class="channel-card-meta"><div><dt>발행일</dt><dd>${escapeHtml(contentDate(item) || '미정')}</dd></div><div><dt>${escapeHtml(channel.actionLabel || '다음 액션')}</dt><dd>${escapeHtml(item.nextAction || channel.reuseHint || '반응 확인')}</dd></div></dl>
    ${url ? `<a class="channel-url-pill" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">원문 링크 열기</a>` : '<span class="channel-url-pill muted">URL 미등록</span>'}
    <div class="content-actions channel-actions">
      <button class="tiny" onclick="markContentReplyNeeded('${id}')">답변 필요</button>
      <button class="tiny" onclick="markContentReplyDone('${id}')">답변 완료</button>
      <button class="tiny" onclick="markContentReuseCandidate('${id}')">재활용 후보</button>
      ${channel.key === 'youtube' ? '<span class="tiny muted-inline">할일관리 미등록 · 유튜브 대시보드에서 처리</span>' : `<button class="tiny" onclick="createTaskFromContent('${id}')">할일 만들기</button>`}
      <button class="tiny primary-tiny" onclick="markContentStatus('${id}','발행완료')">발행완료</button>
      <button class="tiny danger" onclick="deleteContentItem('${id}')">삭제</button>
    </div>
  </article>`;
}

function markContentReplyNeeded(id) {
  const item = contentItemById(id);
  if (!item) return false;
  item.replyNeeded = '예';
  item.replyStatus = '답변 필요';
  item.nextAction = item.nextAction || '댓글/문의 답변 작성';
  saveData(); render(); toast('답변 필요로 표시했습니다.');
  return true;
}

function markContentReplyDone(id) {
  const item = contentItemById(id);
  if (!item) return false;
  item.replyNeeded = '아니오';
  item.replyStatus = '답변 완료';
  item.nextAction = '댓글 답변 완료 · 반응 추적';
  saveData(); render(); toast('답변 완료로 표시했습니다.');
  return true;
}

function youtubeApiMetric(value, fallback = 'Analytics 미수집') {
  return isFilledMetric(value) ? formatIntegerMetric(value) : fallback;
}

function youtubeApiUnsupported(label = 'API 미지원') {
  return `<span class="api-unsupported">${escapeHtml(label)}</span>`;
}

function youtubeApiReachMetric(item = {}, type = 'impressions') {
  const fields = {
    impressions: ['apiThumbnailImpressions', 'analyticsThumbnailImpressions'],
    ctr: ['apiThumbnailCtr', 'analyticsThumbnailCtr'],
    uniqueViewers: ['apiUniqueViewers', 'analyticsUniqueViewers'],
  }[type] || [];
  for (const field of fields) {
    if (isFilledMetric(item[field])) return type === 'ctr' ? formatCtr(item[field]) : formatIntegerMetric(item[field]);
  }
  return '';
}

function renderYoutubeApiReachCell(item = {}, type = 'impressions') {
  const value = youtubeApiReachMetric(item, type);
  return value ? escapeHtml(value) : youtubeApiUnsupported('API 미지원');
}

function formatDurationSeconds(seconds) {
  const numeric = Number(seconds || 0);
  if (!Number.isFinite(numeric) || numeric <= 0) return 'Analytics 미수집';
  const minutes = Math.floor(numeric / 60);
  const rest = Math.round(numeric % 60);
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const minuteRest = minutes % 60;
    return `${hours}시간 ${minuteRest}분`;
  }
  return `${minutes}분 ${String(rest).padStart(2, '0')}초`;
}

function youtubeApiStatusCell(item = {}) {
  const dataSynced = item.lastSyncedAt || String(item.syncStatus || '').includes('Data API');
  const analyticsSynced = item.analyticsSyncedAt || String(item.syncStatus || '').includes('Analytics API');
  const syncedAt = item.analyticsSyncedAt || item.lastSyncedAt || '';
  return `<div class="youtube-api-status-cell">${dataSynced ? badge('Data API') : badge('Data 미수집')}${analyticsSynced ? badge('Analytics API') : badge('Analytics 미수집')}${youtubeApiUnsupported('도달범위 일부 API 미지원')}<small>${escapeHtml(syncedAt ? `최근 ${syncedAt}` : '수집 전')}</small></div>`;
}

function renderYoutubeOperationsTable(items = [], channel = {}) {
  if (!items.length) return '<p class="empty">현재 필터에서 API 표로 볼 영상이 없습니다. YouTube API 수집을 먼저 실행하세요.</p>';
  const rows = items.map((item)=>{
    const id = escapeHtml(item.id || '');
    const url = contentUrl(item);
    const replyStatus = contentReplyStatus(item);
    const apiViews = item.dataApiViews !== undefined && item.dataApiViews !== '' ? item.dataApiViews : item.views;
    const apiComments = item.dataApiComments !== undefined && item.dataApiComments !== '' ? item.dataApiComments : item.comments;
    const apiLikes = item.dataApiLikes !== undefined && item.dataApiLikes !== '' ? item.dataApiLikes : item.likes;
    return `<tr class="${replyStatus === '답변 필요' ? 'needs-reply' : ''}">
      <td class="youtube-title-cell"><div class="youtube-title-wrap">${item.thumbnailUrl ? `<img src="${escapeHtml(item.thumbnailUrl)}" alt="" loading="lazy">` : '<span class="youtube-thumb-empty">▶</span>'}<div><strong>${escapeHtml(item.title || '제목 없음')}</strong><small>${badge(item.type || channel.label)} ${badge(item.status || '확인필요')} ${replyStatus !== '댓글 없음' ? badge(replyStatus) : ''} ${item.reuseCandidate === '예' ? badge('재활용 후보') : ''}</small></div></div></td>
      <td>${escapeHtml(contentDate(item) || '-')}</td>
      <td>${renderYoutubeApiReachCell(item, 'impressions')}</td>
      <td>${renderYoutubeApiReachCell(item, 'ctr')}</td>
      <td>${youtubeApiMetric(apiViews, 'Data API 미수집')}</td>
      <td>${renderYoutubeApiReachCell(item, 'uniqueViewers')}</td>
      <td>${escapeHtml(item.analyticsSyncedAt ? formatWatchTime(contentWatchMinutes(item)) : 'Analytics 미수집')}</td>
      <td>${escapeHtml(formatDurationSeconds(item.averageViewDurationSeconds))}</td>
      <td>${isFilledMetric(item.averageViewPercentage) ? `${Number(item.averageViewPercentage).toFixed(1)}%` : 'Analytics 미수집'}</td>
      <td>${youtubeApiMetric(apiComments, 'Data API 미수집')}</td>
      <td>${youtubeApiMetric(apiLikes, 'Data API 미수집')}</td>
      <td>${youtubeApiStatusCell(item)}</td>
      <td>${escapeHtml(item.nextAction || '반응 확인')}</td>
      <td class="youtube-table-actions">${url ? `<a class="tiny" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">원문</a>` : ''}<button class="tiny" onclick="markContentReplyNeeded('${id}')">답변</button><button class="tiny" onclick="markContentReplyDone('${id}')">완료</button><button class="tiny" onclick="markContentReuseCandidate('${id}')">재활용</button></td>
    </tr>`;
  }).join('');
  return `<div class="youtube-ops-table-wrap"><table class="youtube-ops-table"><thead><tr><th>영상</th><th>발행일</th><th>노출수</th><th>노출 클릭률</th><th>조회수</th><th>순 시청자수</th><th>시청시간</th><th>평균 시청</th><th>평균 시청률</th><th>댓글</th><th>좋아요</th><th>API 상태</th><th>다음 액션</th><th>관리</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}

function renderYoutubeChannelHub(channel = {}, description = '') {
  const items = getChannelItems(channel);
  const activeFilter = state.channelWorkspaceFilters?.[channel.key] || '전체';
  const visible = items.filter((item)=>channelItemMatchesFilter(item, activeFilter, channel)).filter(isYoutubeUploadedItem);
  const filters = channel.filters || ['전체'];
  const stored = youtubeStoredApiSummary();
  const sync = state.youtubeApiStatus || {};
  const latest = stored.latest || sync.result?.lastSyncedAt || '';
  const analyticsCount = items.filter((item)=>item.analyticsSyncedAt).length;
  const heroCopy = 'YouTube Data API와 YouTube Analytics API에서 직접 받은 값만 하단 표에 표시합니다. Studio 도달범위의 노출수·노출 클릭률·순 시청자수는 공식 targeted API metric으로 확인되지 않으면 API 미지원으로 표시합니다.';
  $('#routeContent').innerHTML = `
    <div class="channel-workspace channel-youtube">
      <section class="channel-hero">
        <div>
          <p class="eyebrow">YOUTUBE API PERFORMANCE TABLE</p>
          <h2>유튜브 API 수집 상세 표</h2>
          <p>${escapeHtml(channel.hero || description || channel.role)} ${escapeHtml(heroCopy)}</p>
          <p class="channel-home-link">대표 링크: <a href="${escapeHtml(channel.homeUrl)}" target="_blank" rel="noreferrer">${escapeHtml(channel.homeUrl)}</a></p>
          <div class="content-actions"><button class="tiny primary-tiny" onclick="return syncYoutubeBasic()">YouTube API 새로고침</button><button class="tiny" onclick="return checkYoutubeApiStatus()">OAuth 상태 확인</button></div>
        </div>
        <div class="channel-agent-badge"><span>${escapeHtml(channel.icon)}</span><strong>${escapeHtml(channel.role)}</strong><small>수동 입력 없이 API 표에서 판단</small></div>
      </section>
      <section class="panel channel-list-panel youtube-api-table-panel">
        <div class="section-head">
          <div>
            <p class="eyebrow">API COLLECTED VIDEO METRICS</p>
            <h3>기존 업로드 / 수집 영상 상세 표</h3>
            <p>조회수·댓글·좋아요는 YouTube Data API, 시청시간·평균 시청 지속시간·평균 시청률은 YouTube Analytics API 기준입니다. 노출수·노출 클릭률·순 시청자수는 공식 API에서 직접 수집된 필드가 있을 때만 숫자로 표시합니다.</p>
            <p class="note">저장 영상 ${stored.items.length}건 · API 수집 ${stored.apiCount}건 · Analytics 보강 ${analyticsCount}건${latest ? ` · 최근 ${escapeHtml(latest)}` : ''}</p>
            ${sync.status === 'error' ? `<p class="note danger-text">API 수집 오류: ${escapeHtml(sync.message || '확인 필요')}</p>` : ''}
          </div>
          <div class="content-actions"><button class="soft" onclick="return checkYoutubeApiStatus()">권한 확인</button><button class="primary" onclick="return syncYoutubeBasic()">API 데이터 가져오기</button></div>
        </div>
        <div class="channel-filter-board youtube-table-filter"><div><strong>표 필터</strong><span>${visible.length} / ${items.length}건</span></div><div class="chip-row">${filters.map((filter)=>`<button class="count-chip ${activeFilter === filter ? 'active' : ''}" onclick="return setChannelWorkspaceFilter('${escapeHtml(channel.key)}','${escapeHtml(filter)}')">${escapeHtml(filter)}</button>`).join('')}</div></div>
        <div class="notice warning"><strong>Studio 도달범위 지표 안내</strong><p>표의 노출수·노출 클릭률·순 시청자수는 기존 수동 저장값을 사용하지 않습니다. YouTube Analytics API에서 직접 제공되는 필드가 확인되지 않으면 API 미지원으로 남깁니다.</p><small>공식 Metrics 문서의 core metrics에는 views, comments, likes, estimatedMinutesWatched, averageViewDuration 등이 포함됩니다.</small></div>
        ${renderYoutubeOperationsTable(visible, channel)}
      </section>
    </div>
  `;
}

function renderYoutubeQueueRow(item = {}) {
  const url = contentUrl(item);
  return `<article class="purpose-row">
    <div><strong>${escapeHtml(item.title || '제목 없음')}</strong><small>${escapeHtml(item.type || '유튜브')} · ${escapeHtml(contentDate(item) || '등록일 미정')} · ${escapeHtml(item.status || '준비중')}</small></div>
    <p>${escapeHtml(item.nextAction || '대본·설명란·고정댓글 준비')}</p>
    ${url ? `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">현재 링크 열기</a>` : '<small>아직 등록 링크 없음</small>'}
  </article>`;
}

function renderYoutubePriorityRow(entry = {}) {
  const item = entry.item || {};
  const url = contentUrl(item);
  return `<article class="purpose-row">
    <div><strong>${escapeHtml(item.title || '제목 없음')}</strong>${badge(entry.label || '개선 액션')}</div>
    <p>${escapeHtml(entry.reason || '반응 데이터 확인')}</p>
    <small>${escapeHtml(entry.action || '다음 액션 정리')}</small>
    ${url ? `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">영상 열기</a>` : '<small>링크 없음</small>'}
  </article>`;
}

function markContentReuseCandidate(id) {
  const item = contentItemById(id);
  if (!item) return false;
  item.reuseCandidate = '예';
  item.nextAction = item.nextAction || '후속 콘텐츠로 재활용';
  saveData(); render(); toast('재활용 후보로 표시했습니다.');
  return true;
}

function renderChannelHub(channelKey, types = [], description = '') {
  const channel = channelByKeyOrTitle(channelKey, types);
  if (channel.key === 'youtube') return renderYoutubeChannelHub(channel, description);
  const items = getChannelItems(channel);
  const activeFilter = state.channelWorkspaceFilters?.[channel.key] || '전체';
  const visible = items.filter((item)=>channelItemMatchesFilter(item, activeFilter, channel));
  const published = channel.key === 'youtube' ? items.filter(isYoutubeUploadedItem) : items.filter((item)=>isPublishedContent(item));
  const reply = items.filter((item)=>item.replyNeeded === '예');
  const reuse = items.filter((item)=>item.reuseCandidate === '예');
  const prioritySource = channel.key === 'youtube'
    ? (activeFilter === '전체' ? items.filter(isYoutubeUploadedItem) : visible.filter(isYoutubeUploadedItem))
    : (activeFilter === '전체' ? items : visible);
  const priorityItems = prioritySource.filter((item)=>isReplyNeededContent(item) || item.reuseCandidate === '예' || Number(item.comments || 0) > 0 || Number(item.likes || 0) > 0 || Number(item.views || 0) > 0);
  const top = [...priorityItems].sort((a,b)=>(Number(b.views||0)+Number(b.comments||0)*20+Number(b.likes||0)*3)-(Number(a.views||0)+Number(a.comments||0)*20+Number(a.likes||0)*3)).slice(0, 3);
  const topIds = new Set(top.map((item)=>item.id));
  const listRows = visible.filter((item)=>!topIds.has(item.id) && (channel.key === 'youtube' ? isYoutubeUploadedItem(item) : true));
  const filters = channel.filters || ['전체'];
  const youtubeSummary = channel.key === 'youtube' ? youtubeStoredApiSummary() : null;
  const youtubeUploaded = channel.key === 'youtube' ? items.filter(isYoutubeUploadedItem) : [];
  const youtubeQueue = channel.key === 'youtube'
    ? items.filter((item)=>!isYoutubeUploadedItem(item) || ['확장 준비','검수','발행 준비','예약'].includes(item.status)).sort((a, b)=>String(contentDate(a) || '9999-12-31').localeCompare(String(contentDate(b) || '9999-12-31')))
    : [];
  const youtubeActionTop = channel.key === 'youtube'
    ? youtubeUploaded.map((item)=>({ item, ...youtubePriorityPlan(item) })).sort((a, b)=>Number(b.priority || 0) - Number(a.priority || 0)).slice(0, 4)
    : [];
  const youtubeCtrManualCount = channel.key === 'youtube' ? items.filter((item)=>item.thumbnailCtrStatus).length : 0;
  const sourceLabel = youtubeSummary ? (youtubeSummary.apiCount && youtubeSummary.manualCount ? `API ${youtubeSummary.apiCount}건 · 수동 ${youtubeSummary.manualCount}건` : youtubeSummary.apiCount ? 'YouTube API 수집' : '수동 입력') : '수동 기록';
  const apiPhaseCopy = channel.key === 'youtube'
    ? '1차 YouTube Data API 읽기 전용 수집을 붙였습니다. 수집 결과는 할일관리가 아니라 이 유튜브 대시보드에 바로 반영됩니다.'
    : '지금은 로컬 서버 수집 endpoint와 연결되어 있으며, 실제 외부 API/크롤링은 다음 연동 단계에서 붙입니다.';
  const importStatus = integrationStatusByKey(channel.key);
  const heroEyebrow = channel.key === 'youtube' ? 'YOUTUBE PERFORMANCE DESK' : `CHANNEL AGENT · ${channel.label}`;
  const heroTitle = channel.key === 'youtube' ? '유튜브 성과 분석 + 등록 예정 영상 보드' : `${channel.label} 운영 에이전트`;
  const todayOpsTitle = channel.key === 'youtube' ? '오늘 먼저 볼 개선 우선 영상' : `오늘 먼저 볼 ${channel.label}`;
  const todayOpsCopy = channel.key === 'youtube'
    ? `${activeFilter === '전체' ? '전체 기준' : `${activeFilter} 필터 기준`}으로 기존 업로드 영상의 반응/댓글/재활용 신호를 우선 정렬합니다. 등록 예정 영상은 별도 큐에서 관리합니다.`
    : `${activeFilter === '전체' ? '전체 기준' : `${activeFilter} 필터 기준`}으로 답변 필요·재활용 후보·반응 기록 상위 항목을 표시합니다.`;
  const listTitle = channel.key === 'youtube' ? '기존 업로드 / 수집 영상 상세 표' : `${channel.label} 나머지 발행 콘텐츠`;
  const ctrValues = items.map((item)=>Number(contentCtr(item))).filter((value)=>Number.isFinite(value));
  const avgCtr = ctrValues.length ? ctrValues.reduce((acc, value)=>acc + value, 0) / ctrValues.length : '';
  const impressionValues = items.map((item)=>Number(contentImpressions(item))).filter((value)=>Number.isFinite(value));
  const impressionsTotal = impressionValues.length ? impressionValues.reduce((acc, value)=>acc + value, 0) : '';
  const uniqueViewerValues = items.map((item)=>Number(contentUniqueViewers(item))).filter((value)=>Number.isFinite(value));
  const uniqueViewersTotal = uniqueViewerValues.length ? uniqueViewerValues.reduce((acc, value)=>acc + value, 0) : '';
  const blogStats = channel.key === 'blog' ? blogStatsSummary(items) : null;
  const channelKpiCards = channel.key === 'youtube'
    ? [
        ['Impressions', formatIntegerMetric(impressionsTotal), 'YouTube Studio reach'],
        ['CTR', formatCtr(avgCtr), 'Average thumbnail CTR'],
        ['Views', items.reduce((acc, item)=>acc + Number(item.views || 0), 0).toLocaleString('ko-KR'), 'Video analytics views'],
        ['Unique viewers', formatIntegerMetric(uniqueViewersTotal), 'Deduplicated viewers'],
      ]
    : channel.key === 'blog'
      ? [
          ['Published posts', published.length, 'URL registered'],
          ['Total views', blogStats.totalViews.toLocaleString('ko-KR'), 'Naver stat input'],
          ['Inflow keywords', blogStats.keywordCount.toLocaleString('ko-KR'), 'Search keywords'],
          ['Stats saved', `${blogStats.statsCount}/${items.length}`, 'Per-post stats'],
        ]
      : [
          ['Published', published.length, `${channel.label} content`],
          ['Reply needed', reply.length, 'Comments/questions'],
          ['Reuse candidates', reuse.length, 'Follow-up content'],
          ['Total views', items.reduce((acc,i)=>acc+Number(i.views||0),0).toLocaleString('ko-KR'), sourceLabel],
        ];
  $('#routeContent').innerHTML = `
    <div class="channel-workspace channel-${escapeHtml(channel.key)}">
      <section class="channel-hero">
        <div><p class="eyebrow">${escapeHtml(heroEyebrow)}</p><h2>${escapeHtml(heroTitle)}</h2><p>${escapeHtml(channel.hero || description || channel.role)} ${escapeHtml(apiPhaseCopy)}</p><p class="channel-home-link">대표 링크: <a href="${escapeHtml(channel.homeUrl)}" target="_blank" rel="noreferrer">${escapeHtml(channel.homeUrl)}</a></p><div class="content-actions"><button class="tiny primary-tiny" onclick="return ${channel.key === 'youtube' ? 'syncYoutubeBasic()' : `collectContentChannel('${escapeHtml(channel.key)}')`}">${channel.key === 'youtube' ? 'YouTube API 1차 수집' : `${escapeHtml(channel.label)} 서버 수집 실행`}</button>${channel.key === 'youtube' ? '<button class="tiny" onclick="return checkYoutubeApiStatus()">OAuth 상태 확인</button>' : `<button class="tiny" onclick="return importManualChannel('${escapeHtml(channel.key)}')">수동 가져오기 상태 저장</button>`}</div>${importStatus ? `<small>${escapeHtml(importStatus.status || '')} · ${escapeHtml(importStatus.message || '')}</small>` : ''}</div>
        <div class="channel-agent-badge"><span>${escapeHtml(channel.icon)}</span><strong>${escapeHtml(channel.role)}</strong><small>${escapeHtml(channel.reuseHint || '')}</small></div>
      </section>
      ${channel.key === 'youtube' ? renderYoutubeApiMvpPanel() : ''}
      ${channel.key === 'youtube' && youtubeCtrManualCount ? `<div class="notice warning"><strong>YouTube Studio 도달범위 KPI 저장 필요</strong><p>YouTube Analytics API targeted reports에는 Studio 도달범위 화면의 노출수/노출 클릭률/순 시청자수 조합이 그대로 열리지 않아 ${youtubeCtrManualCount}개 영상은 아래 Studio KPI 저장 대상으로 남아 있습니다.</p></div>` : ''}
      ${channel.key === 'youtube' ? renderYoutubeCtrImportPanel() : ''}
      ${channel.key === 'blog' ? renderBlogStatsImportPanel(items) : ''}
      ${channel.key === 'blog' ? renderBlogStatsBoard(items) : ''}
      ${renderQuickContentForm(channel.types, `${channel.label} 올린 내용 추가`)}
      <div class="channel-kpi-grid">${channelKpiCards.map(([label, value, hint])=>`<article><span>${escapeHtml(label)}</span><strong>${escapeHtml(String(value))}</strong><em>${escapeHtml(hint)}</em></article>`).join('')}</div>
      ${renderChannelPurposeBoard(channel, items, visible)}
      ${channel.key === 'youtube' ? `
      <section class="youtube-purpose-grid grid-3">
        <article class="panel soft-panel">
          <p class="eyebrow">1. 기존 업로드 / API 성과 분석</p>
          <h3>이미 올린 영상 성과를 먼저 봅니다</h3>
          <p class="purpose-note">API 수집 영상과 수동 등록 영상을 묶어 조회수·댓글·좋아요 흐름을 보고, 먼저 손볼 영상을 고릅니다.</p>
          <dl class="purpose-stats">
            <div><dt>분석 대상</dt><dd>${youtubeUploaded.length}건</dd></div>
            <div><dt>API 수집</dt><dd>${youtubeSummary?.apiCount || 0}건</dd></div>
            <div><dt>답변 필요</dt><dd>${youtubeUploaded.filter((item)=>isReplyNeededContent(item)).length}건</dd></div>
            <div><dt>재활용 후보</dt><dd>${youtubeUploaded.filter((item)=>item.reuseCandidate === '예').length}건</dd></div>
          </dl>
        </article>
        <article class="panel">
          <p class="eyebrow">2. 등록 예정 영상 큐</p>
          <h3>다음에 등록할 유튜브/쇼츠</h3>
          <div class="purpose-list">${youtubeQueue.length ? youtubeQueue.slice(0, 5).map(renderYoutubeQueueRow).join('') : '<p class="empty">등록 예정 영상 큐가 없습니다. 콘텐츠 제작소나 빠른 등록 폼에서 유튜브/쇼츠 항목을 추가하세요.</p>'}</div>
        </article>
        <article class="panel soft-panel">
          <p class="eyebrow">3. 개선 액션 TOP</p>
          <h3>지금 손볼 우선순위</h3>
          <div class="purpose-list">${youtubeActionTop.length ? youtubeActionTop.map(renderYoutubePriorityRow).join('') : '<p class="empty">아직 반응 데이터가 충분하지 않습니다. API 수집 또는 수동 기록 후 개선 액션이 나타납니다.</p>'}</div>
        </article>
      </section>` : ''}
      <section class="channel-filter-board"><div><strong>빠른 보기</strong><span>${visible.length} / ${items.length}건</span></div><div class="chip-row">${filters.map((filter)=>`<button class="count-chip ${activeFilter === filter ? 'active' : ''}" onclick="return setChannelWorkspaceFilter('${escapeHtml(channel.key)}','${escapeHtml(filter)}')">${escapeHtml(filter)}</button>`).join('')}</div></section>
      <section class="channel-action-board"><div><p class="eyebrow">TODAY OPS</p><h3>${escapeHtml(todayOpsTitle)}</h3><p>${escapeHtml(todayOpsCopy)}</p></div><div class="channel-priority-list">${top.length ? top.map((item)=>renderChannelOpsCard(item, channel)).join('') : '<p class="empty">아직 우선 확인할 반응 기록이 없습니다. 위 입력폼에서 콘텐츠를 등록하거나 반응을 기록하세요.</p>'}</div></section>
      <section class="panel channel-list-panel"><h3>${escapeHtml(listTitle)}</h3>${listRows.length ? (channel.key === 'youtube' ? renderYoutubeOperationsTable(listRows, channel) : `<div class="channel-card-grid">${listRows.map((item)=>renderChannelOpsCard(item, channel)).join('')}</div>`) : visible.length ? '<p class="empty">현재 필터 결과는 위 우선 보드에 모두 표시되어 있습니다.</p>' : `<p class="empty">${escapeHtml(channel.label)}에 해당하는 콘텐츠가 없습니다. 콘텐츠 제작소에서 문안을 만들거나 발행 캘린더에 등록하세요.</p>`}</section>
    </div>
  `;
}

function renderReactionCheck() {
  const items = getContentReactionItems();
  const reply = items.filter((item)=>item.replyNeeded === '예');
  const reuse = items.filter((item)=>item.reuseCandidate === '예');
  const syncNeeds = getCollection('contentItems').filter((item)=>isContentCoreChannel(item) && ['연결 필요','실패','수동 확인 필요'].includes(item.syncStatus));
  $('#routeContent').innerHTML = `
    <div class="reaction-check-shell">
      <div class="section-head"><div><h2>반응 체크 통합판</h2><p>유튜브·블로그·네이버카페·스레드의 조회수/댓글/반응을 모아 답변·재활용·후속 콘텐츠 후보를 결정합니다.</p></div><button class="soft" data-route="publishCalendar">발행 캘린더</button></div>
      <div class="content-calendar-summary">
        <article><span>답변 필요</span><strong>${reply.length}</strong><em>댓글/문의</em></article>
        <article><span>재활용 후보</span><strong>${reuse.length}</strong><em>후속 콘텐츠</em></article>
        <article><span>연동 확인</span><strong>${syncNeeds.length}</strong><em>자동 수집 준비</em></article>
      </div>
      <div class="grid-3 reaction-columns">
        <section class="panel"><h3>답변 필요</h3>${reply.length ? reply.map((item)=>renderContentMiniCard(item, 'reaction')).join('') : '<p class="empty">답변 필요 항목이 없습니다.</p>'}</section>
        <section class="panel"><h3>재활용 후보</h3>${reuse.length ? reuse.map((item)=>renderContentMiniCard(item, 'reaction')).join('') : '<p class="empty">재활용 후보가 없습니다.</p>'}</section>
        <section class="panel soft-panel"><h3>자동 수집 확인</h3>${syncNeeds.length ? syncNeeds.map((item)=>renderContentMiniCard(item, 'publish')).join('') : '<p class="empty">연동 확인 필요 항목이 없습니다.</p>'}</section>
      </div>
      <section class="panel" style="margin-top:18px"><h3>전체 반응 표</h3>${renderSimpleTable(items, ['title','type','status','syncStatus','lastSyncedAt','views','comments','likes','replyNeeded','reuseCandidate','nextAction'])}</section>
    </div>
  `;
}

function renderRoute() {
  if (state.route === 'dashboard') return renderDashboard();
  if (state.route === 'tasks') return renderTasks();
  if (state.route === 'projects') return renderProjectManagement();
  if (state.route === 'courseMgmt') return renderCourseManagement();
  if (state.route === 'profileHistory') return renderProfileHistory();
  if (state.route === 'lectures') return renderLectureCalendar();
  if (state.route === 'opsos') return renderOpsOS();
  if (state.route === 'meetings') return renderMeetingManagement();
  if (state.route === 'inquiries') return renderLeadManagement();
  if (state.route === 'customers') return renderCustomerManagement();
  if (state.route === 'content') return renderContentStudio();
  if (state.route === 'publishCalendar') return renderPublishCalendar();
  if (state.route === 'reactionCheck') return renderReactionCheck();
  if (state.route === 'marketing' || state.route === 'conversion') return renderConversion();
  if (state.route === 'settings') return renderSettings();
  if (state.route === 'products') return renderReadOnly({ title:'상품관리', description:'상품 상태와 가격, 판매 흐름을 빠르게 확인합니다.', collection:'products', columns:['id','name','price','status','url','memo'] });
  if (state.route === 'ideaMemo') return renderIdeaMemo();
  if (state.route === 'research') return renderReadOnly({ title:'리서치', description:'정책·벤치마크·소재 조사 항목입니다.', collection:'researchItems', columns:['id','title','status','source'] });
  if (state.route === 'assets' || state.route === 'lectureAssets') return renderReadOnly({ title: state.route === 'assets' ? '파일·자산' : '강의·자료', description:'PDF, 이미지, 강의자료, 크리에이티브 자산입니다.', collection:'assets', columns:['id','name','type','status'] });
  if (state.route === 'community') return renderReadOnly({ title:'커뮤니티', description:'카페/디스코드/오픈채팅 게시물 흐름입니다.', collection:'communityPosts', columns:['id','channel','title','status','date'] });
  if (state.route === 'emails') return renderEmailManagement();
  if (state.route === 'automation') return renderReadOnly({ title:'Hermes 자동화', description:'크론과 자동화 실행 로그입니다.', collection:'automationRuns', columns:['id','name','status','lastRun','memo'] });
  if (state.route === 'sns') return renderFilteredContent('SNS 운영', ['SNS','Cafe','Meta Ad','Shorts']);
  if (state.route === 'youtube') return renderChannelHub('youtube');
  if (state.route === 'blog') return renderChannelHub('blog');
  if (state.route === 'naverCafe') return renderChannelHub('naverCafe');
  if (state.route === 'threads') return renderChannelHub('threads');
  if (state.route === 'openChat') return renderCommunityChannelHub({ title: '오픈채팅', channels: ['Open Kakao','오픈채팅','Kakao'], description: '카톡 대화에서 공유할 자료 후보와 수강생 반응을 체크하고, 필요한 내용은 콘텐츠 후보로 전환합니다.', mode: 'openChat' });
  if (state.route === 'membership') return renderCommunityChannelHub({ title: '멤버쉽', channels: ['멤버쉽','Membership','Discord'], description: '구매자/유료회원 온보딩, 자료 요청, 질문 응대, 전용 콘텐츠 후보를 오픈채팅과 분리해 관리합니다.', mode: 'membership' });
}


function submitCommunityPost(form, defaultChannel = 'Open Kakao') {
  const values = Object.fromEntries(new FormData(form).entries());
  const title = String(values.title || '').trim();
  if (!title) { toast('질문/요청 제목을 입력하세요.'); return false; }
  upsertItem('communityPosts', {
    id: makeId('communityPosts'),
    channel: values.channel || defaultChannel,
    title,
    status: values.status || '확인필요',
    date: values.date || todayIso(),
    memo: values.memo || '',
    nextAction: values.nextAction || '답변 또는 콘텐츠 전환 검토',
  });
  form.reset();
  render();
  toast('커뮤니티 항목을 추가했습니다.');
  return false;
}

function communityItemById(id) {
  return getCollection('communityPosts').find((item) => item.id === id);
}

function markCommunityDone(id) {
  const item = communityItemById(id);
  if (!item) return false;
  item.status = '완료';
  item.nextAction = '완료';
  saveData();
  render();
  toast('커뮤니티 항목을 완료 처리했습니다.');
  return true;
}

function convertCommunityToContent(id) {
  const item = communityItemById(id);
  if (!item) return false;
  upsertItem('contentItems', {
    id: makeId('contentItems'),
    title: `[커뮤니티 답변] ${item.title || '질문 답변'}`,
    sourceTopic: item.title || '',
    type: 'Cafe',
    platform: '네이버카페',
    targetGoal: '커뮤니티 질문 답변',
    targetAudience: '카페 회원',
    status: '아이디어',
    stage: '질문답변 초안',
    due: todayIso(),
    syncStatus: '연결 필요',
    replyNeeded: '아니오',
    reuseCandidate: '예',
    views: 0,
    comments: 0,
    likes: 0,
    nextAction: '카페 FAQ/블로그 답변 글로 작성',
    memo: [`커뮤니티 원문: ${item.channel || '-'}`, item.memo || ''].filter(Boolean).join('\n'),
  });
  item.status = '콘텐츠전환';
  item.nextAction = '콘텐츠 제작소에서 답변 글 작성';
  saveData();
  render();
  toast('콘텐츠 제작소로 전환했습니다.');
  return true;
}

function communityPriorityScore(item = {}) {
  const statusBoost = ['답변필요','확인필요','자료요청','자료공유','온보딩','질문응대','이탈위험'].includes(item.status || '') ? 120 : 0;
  const convertBoost = ['콘텐츠후보','전용콘텐츠'].includes(item.status || '') ? 160 : 0;
  const text = `${item.title || ''} ${item.memo || ''} ${item.nextAction || ''}`;
  const materialBoost = /자료|공유|링크|가이드|체크리스트|PDF/.test(text) ? 90 : 0;
  return statusBoost + convertBoost + materialBoost;
}

function communityMatchesText(item = {}, pattern) {
  return pattern.test(`${item.title || ''} ${item.memo || ''} ${item.nextAction || ''}`);
}

function communityModeConfig(input = {}) {
  const base = typeof input === 'string' ? { title: input, channels: [], description: '' } : input;
  const mode = base.mode || (base.title === '오픈채팅' ? 'openChat' : base.title === '멤버쉽' ? 'membership' : 'generic');
  if (mode === 'openChat') {
    return {
      ...base,
      mode,
      formTitle: '카톡 대화 / 자료 공유 후보 추가',
      titleLabel: '대화 주제 / 질문·요청 제목',
      titlePlaceholder: '예: 상세페이지 템플릿 어디서 받나요?',
      statusLabel: '반응 유형 / 상태',
      statusOptions: ['확인필요','답변필요','자료요청','자료공유','콘텐츠후보','완료'],
      memoLabel: '공유할 자료 후보 / 대화 요약',
      memoPlaceholder: '대화 핵심, 공유할 링크/PDF/체크리스트, 수강생 반응을 적으세요.',
      nextActionLabel: '다음 액션',
      nextActionPlaceholder: '예: PDF 링크 정리 후 공유 / 카페 FAQ 글로 전환',
      summaryLabel: '수강생 반응 체크',
      secondaryLabel: '공유자료 후보',
      tertiaryLabel: '콘텐츠 전환 후보',
    };
  }
  if (mode === 'membership') {
    return {
      ...base,
      mode,
      formTitle: '멤버쉽 온보딩/자료/질문 기록 추가',
      titleLabel: '회원 요청 / 전용 콘텐츠 제목',
      titlePlaceholder: '예: 구매자 온보딩 1일차 자료 안내',
      statusLabel: '멤버쉽 상태',
      statusOptions: ['온보딩','자료요청','질문응대','전용콘텐츠','콘텐츠후보','이탈위험','완료'],
      memoLabel: '회원 메모 / 자료 보완점',
      memoPlaceholder: '회원 질문, 필요한 자료, 업데이트할 전용 콘텐츠, 온보딩 흐름을 적으세요.',
      nextActionLabel: '다음 액션',
      nextActionPlaceholder: '예: 전용 자료 링크 공유 / 온보딩 글 작성 / 질문 답변',
      summaryLabel: '온보딩/질문 응대',
      secondaryLabel: '자료 요청',
      tertiaryLabel: '전용 콘텐츠 후보',
    };
  }
  return {
    ...base,
    mode,
    formTitle: `${base.title || '커뮤니티'} 질문/요청 추가`,
    titleLabel: '제목',
    titlePlaceholder: '질문/요청/공지 제목',
    statusLabel: '상태',
    statusOptions: ['확인필요','답변필요','콘텐츠후보','완료'],
    memoLabel: '메모',
    memoPlaceholder: '대화 요약, 요청사항, 답변 방향',
    nextActionLabel: '다음 액션',
    nextActionPlaceholder: '예: 답변 또는 콘텐츠 전환 검토',
    summaryLabel: '확인/답변 필요',
    secondaryLabel: '전체 기록',
    tertiaryLabel: '콘텐츠 전환 후보',
  };
}

function renderCommunityMiniCard(item = {}, options = {}) {
  const id = escapeHtml(item.id || '');
  const mode = options.mode || 'generic';
  const memoTitle = mode === 'openChat' ? '공유 자료/대화 요약' : '메모';
  return `<article class="content-mini-card community">
    <div class="content-mini-top">${badge(item.channel || '커뮤니티')}${badge(item.status || '확인필요')}</div>
    <h3>${escapeHtml(item.title || '제목 없음')}</h3>
    <p>${escapeHtml(item.memo || item.nextAction || '메모 없음')}</p>
    <dl><div><dt>날짜</dt><dd>${escapeHtml(item.date || '미정')}</dd></div><div><dt>${escapeHtml(memoTitle)}</dt><dd>${escapeHtml(item.memo || '-')}</dd></div><div><dt>다음 액션</dt><dd>${escapeHtml(item.nextAction || '답변 검토')}</dd></div></dl>
    <div class="content-actions"><button class="tiny" onclick="convertCommunityToContent('${id}')">콘텐츠전환</button><button class="tiny primary-tiny" onclick="markCommunityDone('${id}')">완료</button><button class="tiny danger" onclick="deleteItem('communityPosts','${id}'); render(); toast('삭제했습니다.');">삭제</button></div>
  </article>`;
}

function renderCommunityChannelHub(input, maybeChannels, maybeDescription) {
  const config = communityModeConfig(typeof input === 'object' ? input : { title: input, channels: maybeChannels, description: maybeDescription });
  const title = config.title || '커뮤니티';
  const channels = config.channels || [];
  const description = config.description || '';
  const items = getCollection('communityPosts').filter((item) => channels.some((channel) => String(item.channel || '').includes(channel)));
  const active = items.filter((item)=>item.status !== '완료');
  const sharedMaterials = items.filter((item)=>item.status === '자료공유' || item.status === '자료요청' || communityMatchesText(item, /자료|공유|링크|체크리스트|PDF|가이드/)).sort((a, b)=>communityPriorityScore(b) - communityPriorityScore(a));
  const studentReactions = active.filter((item)=>item.status !== '콘텐츠전환').sort((a, b)=>communityPriorityScore(b) - communityPriorityScore(a));
  const contentCandidates = items.filter((item)=>['콘텐츠후보','콘텐츠전환'].includes(item.status) || communityMatchesText(item, /콘텐츠|후속|글|영상|FAQ|블로그|카페/)).sort((a, b)=>communityPriorityScore(b) - communityPriorityScore(a));
  const channelOptions = config.mode === 'membership'
    ? ['멤버쉽','Membership','Discord']
    : config.mode === 'openChat'
      ? ['Open Kakao','오픈채팅','Kakao']
      : [...new Set([...(channels || []), 'Open Kakao', 'Discord'])];
  const defaultChannel = channelOptions[0] || channels[0] || 'Open Kakao';
  const importKey = config.mode === 'openChat' ? 'openChat' : config.mode === 'membership' ? 'membership' : '';
  const importStatus = importKey ? integrationStatusByKey(importKey) : null;
  const integrationPanel = config.mode === 'openChat'
    ? `<section class="panel soft-panel ai-ops-panel">
        <div class="section-head">
          <div>
            <p class="eyebrow">OPENCHAT INTEGRATION</p>
            <h3>오픈채팅 연동 후보</h3>
            <p class="purpose-note">오픈채팅에는 실제 게시 전 공유할 콘텐츠, 자료 링크, 반응 질문을 수동 기록하고 콘텐츠 제작소로 넘깁니다.</p>
          </div>
          <div class="content-actions"><button class="soft" data-route="content">공유 콘텐츠 만들기</button><button class="soft" onclick="return importManualChannel('openChat')">수동 가져오기 상태 저장</button></div>
        </div>
        <div class="integration-grid">
          <article><span>카카오 오픈채팅</span><strong>공유 후보</strong><em>공지/체크리스트/영상 링크를 게시 전 검수</em></article>
          <article><span>콘텐츠 제작소</span><strong>질문 → 콘텐츠</strong><em>반복 질문을 블로그·카페·스레드 주제로 전환</em></article>
          <article><span>문서 저장소</span><strong>운영 로그</strong><em>공유자료와 반응 좋은 문장을 기록 후보로 보관</em></article>
        </div>
      </section>`
    : config.mode === 'membership'
      ? `<section class="panel soft-panel ai-ops-panel">
          <div class="section-head">
            <div>
              <p class="eyebrow">MEMBERSHIP INTEGRATION</p>
              <h3>멤버쉽 연동 후보</h3>
              <p class="purpose-note">멤버쉽은 오픈채팅과 분리해 구매자/유료회원 기록, 자료 요청, 전용 콘텐츠 후보를 독립 관리합니다.</p>
            </div>
            <div class="content-actions"><button class="soft" data-route="content">전용 콘텐츠 만들기</button><button class="soft" onclick="return importManualChannel('membership')">수동 가져오기 상태 저장</button></div>
          </div>
          <div class="integration-grid">
            <article><span>멤버쉽/Discord</span><strong>회원 반응</strong><em>온보딩·질문응대·이탈위험을 별도 상태로 관리</em></article>
            <article><span>구매자 자료</span><strong>자료 요청</strong><em>업데이트 요청과 링크 공유 이력을 분리 기록</em></article>
            <article><span>콘텐츠 제작소</span><strong>전용 후보</strong><em>회원 질문을 전용 콘텐츠와 외부 공개 콘텐츠로 구분</em></article>
          </div>
        </section>`
      : '';
  $('#routeContent').innerHTML = `
    <div class="channel-hub-shell">
      <div class="section-head"><div><h2>${escapeHtml(title)}</h2><p>${escapeHtml(description)} 지금은 수동 기록/콘텐츠 전환 기능까지 구현되어 있습니다.</p></div><button class="soft" data-route="content">콘텐츠 제작소</button></div>
      ${importStatus ? `<div class="notice"><strong>수동 가져오기 상태</strong><p>${escapeHtml(importStatus.status || 'manual-ready')} · ${escapeHtml(importStatus.message || '')}</p><small>${escapeHtml(importStatus.lastCheckedAt || '확인 전')}</small></div>` : ''}
      ${state.contentImportStatus?.error ? `<p class="note danger-text">수동 가져오기 오류: ${escapeHtml(state.contentImportStatus.error)}</p>` : ''}
      <form class="quick-content-form" onsubmit="return submitCommunityPost(this, '${escapeHtml(defaultChannel)}')">
        <strong>${escapeHtml(config.formTitle)}</strong>
        <label>채널<select name="channel">${channelOptions.map((option)=>`<option ${option === defaultChannel ? 'selected' : ''}>${escapeHtml(option)}</option>`).join('')}</select></label>
        <label>${escapeHtml(config.titleLabel)}<input name="title" required placeholder="${escapeHtml(config.titlePlaceholder)}" /></label>
        <label>날짜<input name="date" type="date" value="${todayIso()}" /></label>
        <label>${escapeHtml(config.statusLabel)}<select name="status">${config.statusOptions.map((option)=>`<option>${escapeHtml(option)}</option>`).join('')}</select></label>
        <label>${escapeHtml(config.memoLabel)}<textarea name="memo" placeholder="${escapeHtml(config.memoPlaceholder)}"></textarea></label>
        <label>${escapeHtml(config.nextActionLabel)}<input name="nextAction" placeholder="${escapeHtml(config.nextActionPlaceholder)}" /></label>
        <button class="primary" type="submit" onclick="return submitCommunityPost(this.form, '${escapeHtml(defaultChannel)}')">추가</button>
      </form>
      <div class="content-calendar-summary"><article><span>${escapeHtml(config.summaryLabel)}</span><strong>${studentReactions.length}</strong><em>미완료 반응/대화</em></article><article><span>${escapeHtml(config.secondaryLabel)}</span><strong>${sharedMaterials.length}</strong><em>공유할 자료 또는 요청</em></article><article><span>${escapeHtml(config.tertiaryLabel)}</span><strong>${contentCandidates.length}</strong><em>콘텐츠 제작소로 넘길 후보</em></article></div>
      <div class="grid-3" style="margin-top:18px">
        <section class="panel"><p class="eyebrow">1. 공유자료 후보</p><h3>${escapeHtml(config.secondaryLabel)}</h3>${sharedMaterials.length ? sharedMaterials.map((item)=>renderCommunityMiniCard(item, config)).join('') : '<p class="empty">공유할 자료 후보가 없습니다.</p>'}</section>
        <section class="panel soft-panel"><p class="eyebrow">2. 수강생 반응 체크</p><h3>${escapeHtml(config.summaryLabel)}</h3>${studentReactions.length ? studentReactions.map((item)=>renderCommunityMiniCard(item, config)).join('') : '<p class="empty">체크할 반응 기록이 없습니다.</p>'}</section>
        <section class="panel"><p class="eyebrow">3. 콘텐츠 전환 후보</p><h3>${escapeHtml(config.tertiaryLabel)}</h3>${contentCandidates.length ? contentCandidates.map((item)=>renderCommunityMiniCard(item, config)).join('') : '<p class="empty">아직 콘텐츠 전환 후보가 없습니다.</p>'}</section>
      </div>
      ${integrationPanel}
      ${config.mode === 'membership' ? `<section class="panel soft-panel ai-ops-panel"><p class="eyebrow">MEMBERSHIP OPS</p><h3>멤버쉽 독립 운영 기준</h3><p class="purpose-note">오픈채팅은 공유할 콘텐츠 중심, 멤버쉽은 구매자/유료회원 온보딩·자료요청·질문응대·전용 콘텐츠 후보 중심으로 분리합니다.</p><div class="ai-ops-grid"><article><span>온보딩/응대</span><strong>${studentReactions.length}</strong><em>미완료 회원 운영 항목</em></article><article><span>자료 요청</span><strong>${sharedMaterials.length}</strong><em>업데이트/공유 필요</em></article><article><span>전용 콘텐츠</span><strong>${contentCandidates.length}</strong><em>회원 전용 후보</em></article></div></section>` : ''}
      ${config.mode !== 'membership' ? `<section class="panel soft-panel"><h3>전체 기록</h3>${items.length ? items.map((item)=>renderCommunityMiniCard(item, config)).join('') : '<p class="empty">기록이 없습니다.</p>'}</section>` : ''}
    </div>
  `;
}

function renderFilteredContent(title, types) {
  const items = getCollection('contentItems').filter((item)=>types.includes(item.type));
  $('#routeContent').innerHTML = `
    <div class="section-head"><div><h2>${escapeHtml(title)}</h2><p>${types.join(', ')} 콘텐츠만 모아봅니다. 수정은 콘텐츠 제작소에서 합니다.</p></div><button class="soft" data-route="content">콘텐츠 제작소로 이동</button></div>
    ${renderSimpleTable(items, ['id','title','type','status','stage','due','memo'])}
  `;
}

function renderFilteredCommunity(title, channels) {
  const items = getCollection('communityPosts').filter((item) => channels.some((channel) => String(item.channel || '').includes(channel)));
  const visibleItems = items.length ? items : getCollection('communityPosts');
  $('#routeContent').innerHTML = `
    <div class="section-head"><div><h2>${escapeHtml(title)}</h2><p>${escapeHtml(channels.join(', '))} 채널 중심으로 커뮤니티 운영 흐름을 봅니다.</p></div><button class="soft" data-route="community">커뮤니티 전체 보기</button></div>
    ${renderSimpleTable(visibleItems, ['id','channel','title','status','date'])}
  `;
}

function renderCustomerManagement() {
  const items = getCollection('customerInquiries');
  $('#routeContent').innerHTML = `
    <div class="section-head"><div><h2>고객관리</h2><p>리드 문의 데이터를 고객 관점으로 모아봅니다. 신규 입력과 세부 수정은 리드관리에서 처리합니다.</p></div><button class="soft" data-route="inquiries">리드관리로 이동</button></div>
    ${renderSimpleTable(items, ['id','name','source','status','priority','question','memo'])}
  `;
}

function render() {
  document.body.dataset.route = state.route;
  renderSidebarChrome();
  renderNav();
  renderHeader();
  renderKpis();
  renderRoute();
}

async function syncLectureToGoogle(item, previousGoogleEventId, enabled) {
  if (!enabled) return { skipped: true };
  const response = await fetch('/api/calendar/upsert', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item, previousGoogleEventId }),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.ok) throw new Error(result.error || 'Google Calendar 반영 실패');
  return result;
}

async function deleteLectureFromGoogle(googleEventId) {
  if (!googleEventId) return { skipped: true };
  const response = await fetch('/api/calendar/delete', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ googleEventId }),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.ok) throw new Error(result.error || 'Google Calendar 삭제 실패');
  return result;
}

async function updateScheduleStatusFromKey(key, nextStatus) {
  if (!SCHEDULE_STATUS_OPTIONS.includes(nextStatus)) {
    toast('지원하지 않는 일정 상태입니다.');
    return false;
  }
  const event = findScheduleEventByKey(key);
  if (!event || event.source !== 'local') {
    toast('대시보드에 직접 저장된 일정만 상태를 바꿀 수 있습니다.');
    return false;
  }
  const item = getCollection('lectures').find((entry) => entry.id === event.id);
  if (!item) {
    toast('상태를 바꿀 일정을 찾지 못했습니다.');
    return false;
  }
  if (item.status === nextStatus) {
    state.selectedScheduleEventKey = scheduleEventKey({ source: 'local', id: item.id });
    state.selectedLectureDate = item.date || state.selectedLectureDate;
    render();
    toast(`이미 ${nextStatus} 상태입니다.`);
    return true;
  }
  const previousGoogleEventId = item.googleEventId;
  item.status = nextStatus;
  item.googleSyncStatus = 'pending';
  saveData();
  try {
    const result = await syncLectureToGoogle(item, previousGoogleEventId, true);
    if (result.googleEventId) item.googleEventId = result.googleEventId;
    item.googleSyncStatus = 'synced';
    item.googleSyncedAt = new Date().toISOString();
    saveData();
    await loadGoogleCalendarEvents();
    state.selectedScheduleEventKey = scheduleEventKey({ source: 'local', id: item.id });
    state.selectedLectureDate = item.date || state.selectedLectureDate;
    state.calendarMonth = item.date ? item.date.slice(0, 7) : state.calendarMonth;
    render();
    toast(`일정을 ${nextStatus} 상태로 바꿨습니다.`);
    return true;
  } catch (error) {
    item.googleSyncStatus = 'failed';
    saveData();
    state.selectedScheduleEventKey = scheduleEventKey({ source: 'local', id: item.id });
    state.selectedLectureDate = item.date || state.selectedLectureDate;
    render();
    toast(`로컬 상태 변경 완료 · Google 반영 실패: ${error.message}`);
    return false;
  }
}



function scheduleLabelClass(label = '') {
  const map = {
    '강의-청록': 'course-teal',
    '강의-보라': 'course-purple',
    '강의-주황': 'course-orange',
    '강의-핑크': 'course-pink',
    '강의-남색': 'course-navy',
  };
  return map[label] || 'course-teal';
}

function parseCourseSessionDates(course) {
  const explicit = String(course.sessionDates || '')
    .split(/\n|,/)
    .map((value)=>value.trim())
    .filter((value)=>/^\d{4}-\d{2}-\d{2}$/.test(value));
  const count = Math.max(1, Number(course.sessionCount || explicit.length || 1));
  if (explicit.length) return explicit.slice(0, count);
  if (!course.launchDate) return [];
  const dates = [];
  const current = new Date(`${course.launchDate}T00:00:00`);
  for (let index = 0; index < count; index += 1) {
    const date = new Date(current);
    date.setDate(current.getDate() + (index * 7));
    dates.push(`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`);
  }
  return dates;
}

function courseLectureTitle(course, sessionNo, total) {
  const suffix = total > 1 ? ` ${sessionNo}회차` : '';
  return `[강의] ${course.title || '강의'}${suffix}`;
}

function courseLectureMemo(course, sessionNo, total) {
  return [
    `강의 ID: ${course.id}`,
    total > 1 ? `회차: ${sessionNo}/${total}` : '',
    course.audience ? `대상/수강생: ${course.audience}` : '',
    course.assetLink ? `자료 링크: ${course.assetLink}` : '',
    course.nextAction ? `다음 할 일: ${course.nextAction}` : '',
    course.memo ? `강의 메모: ${course.memo}` : '',
    '강의관리에서 자동 생성/동기화됨',
  ].filter(Boolean).join('\n');
}

function syncCourseLinkedLectures(course, previous = null) {
  const dates = parseCourseSessionDates(course);
  const existingIds = Array.isArray(previous?.linkedLectureIds) ? previous.linkedLectureIds : [];
  const total = dates.length;
  const linkedIds = [];
  dates.forEach((date, index) => {
    const existingId = existingIds[index];
    const existing = existingId ? getCollection('lectures').find((lecture)=>lecture.id === existingId) : null;
    const id = existing?.id || makeId('lectures');
    const sessionNo = index + 1;
    const lecture = {
      ...(existing || {}),
      id,
      title: courseLectureTitle(course, sessionNo, total),
      date,
      startTime: normalizeTime(course.startTime, '10:00'),
      endTime: normalizeTime(course.endTime, '11:00'),
      channel: '강의',
      status: course.status === '완료' ? '완료' : '예정',
      materialStatus: course.materialStatus === '완료' ? '완료' : (course.materialStatus === '미정' ? '없음' : '준비중'),
      mailStatus: ['발송완료'].includes(course.mailStatus) ? '완료' : (course.mailStatus === '없음' ? '없음' : '필요'),
      memo: courseLectureMemo(course, sessionNo, total),
      labelColor: course.scheduleLabelColor || '강의-청록',
      sourceType: 'course',
      sourceId: course.id,
      sessionNo,
      sessionTotal: total,
    };
    upsertItem('lectures', lecture);
    linkedIds.push(id);
  });
  existingIds.slice(dates.length).forEach((id) => {
    const lecture = getCollection('lectures').find((item)=>item.id === id);
    if (lecture?.sourceType === 'course' && lecture?.sourceId === course.id) deleteItem('lectures', id);
  });
  course.linkedLectureIds = linkedIds;
  course.scheduleSyncedAt = new Date().toISOString();
  return linkedIds;
}

function deleteCourseLinkedLectures(course = {}) {
  const linkedIds = Array.isArray(course.linkedLectureIds) ? course.linkedLectureIds : [];
  const sourceMatches = getCollection('lectures')
    .filter((lecture)=>lecture.sourceType === 'course' && lecture.sourceId === course.id)
    .map((lecture)=>lecture.id);
  const ids = Array.from(new Set([...linkedIds, ...sourceMatches]));
  let deleted = 0;
  ids.forEach((id) => {
    const lecture = getCollection('lectures').find((item)=>item.id === id);
    if (lecture?.sourceType === 'course' && lecture?.sourceId === course.id) {
      deleteItem('lectures', id);
      deleted += 1;
    }
  });
  return deleted;
}

function createTaskFromScheduleEvent(event, kind = 'general') {
  if (!event) return null;
  const due = event.date || todayIso();
  const owner = event.sourceType === 'course' ? '강의운영' : '이브레인';
  const task = {
    id: makeId('tasks'),
    title: `[일정] ${event.title || '일정 확인'}`,
    owner,
    status: '대기',
    priority: event.priority === '높음' ? '높음' : '중간',
    due,
    memo: [
      `연결 일정: ${event.title || '-'}`,
      `일시: ${event.date || '-'} ${eventTimeLabel(event)}`,
      `분류/장소: ${event.channel || event.source || '-'}${event.location ? ` / ${event.location}` : ''}`,
      event.memo ? `일정 메모: ${event.memo}` : '',
      `원본: ${scheduleEventKey(event)}`,
      '',
      '필요한 준비/안내/후속 내용을 여기서 수정하세요.',
    ].filter((line) => line !== null && line !== undefined).join('\n'),
    sourceType: 'schedule',
    sourceId: scheduleEventKey(event),
  };
  upsertItem('tasks', task);
  saveData();
  return task;
}

function openTaskFromSchedule(event, kind = 'general') {
  const task = createTaskFromScheduleEvent(event, kind);
  if (!task) return false;
  state.route = 'tasks';
  state.filters = { query: '', status: '전체', priority: '전체', type: '전체', format: '전체', purpose: '전체', dateScope: '전체', owner: '전체' };
  state.editing = task.id;
  state.taskAddOpen = false;
  state.schedulePopover = null;
  state.selectedScheduleEventKey = null;
  location.hash = 'tasks';
  render();
  window.requestAnimationFrame(() => {
    const rowInput = document.querySelector(`[data-task-inline-field="title"][data-id="${CSS.escape(task.id)}"]`);
    rowInput?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    rowInput?.focus({ preventScroll: true });
    rowInput?.select?.();
  });
  toast('할일관리로 보냈습니다. 제목·메모·담당·마감일을 바로 수정하세요.');
  return true;
}

function createTaskFromProject(project = {}) {
  if (!project?.id) return null;
  const titleSeed = String(project.nextAction || '').trim() || `${project.title || '프로젝트'} 다음 액션 정리`;
  const task = {
    id: makeId('tasks'),
    title: `[프로젝트] ${titleSeed}`,
    owner: project.owner || '이브레인',
    status: '대기',
    priority: project.priority === '높음' ? '높음' : '중간',
    due: project.targetDate || todayIso(),
    memo: [
      `연결 프로젝트: ${project.title || '-'}`,
      project.goal ? `목표/결과물: ${project.goal}` : '',
      project.successMetric ? `성공 기준: ${project.successMetric}` : '',
      project.memo ? `프로젝트 메모: ${project.memo}` : '',
      `원본 프로젝트 ID: ${project.id}`,
      '',
      '프로젝트에서 만든 할일입니다. 담당·마감·상세 실행내용을 바로 수정하세요.',
    ].filter(Boolean).join('\n'),
    sourceType: 'project',
    sourceId: project.id,
    projectId: project.id,
  };
  upsertItem('tasks', task);
  saveData();
  return task;
}

function openTaskFromProject(project = {}) {
  const task = createTaskFromProject(project);
  if (!task) return false;
  state.route = 'tasks';
  state.filters = { query: '', status: '전체', priority: '전체', type: '전체', format: '전체', purpose: '전체', dateScope: '전체', owner: '전체' };
  state.editing = task.id;
  state.taskAddOpen = false;
  location.hash = 'tasks';
  render();
  window.requestAnimationFrame(() => {
    const rowInput = document.querySelector(`[data-task-inline-field="title"][data-id="${CSS.escape(task.id)}"]`);
    rowInput?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    rowInput?.focus({ preventScroll: true });
    rowInput?.select?.();
  });
  toast('프로젝트의 다음 액션을 할일관리로 보냈습니다.');
  return true;
}

function buildRepeatedLectureItems(baseItem, previous = null) {
  const rule = baseItem.repeatRule || '없음';
  const count = Math.max(1, Math.min(52, Number(baseItem.repeatCount || 1)));
  if (previous || rule === '없음' || count <= 1) return [baseItem];
  const startDate = new Date(`${baseItem.date || todayIso()}T00:00:00`);
  if (Number.isNaN(startDate.getTime())) return [baseItem];
  const seriesId = baseItem.repeatSeriesId || `series-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 5)}`;
  const items = [];
  let cursor = new Date(startDate);
  for (let index = 0; index < count; index += 1) {
    if (index > 0) {
      if (rule === '매주') cursor.setDate(cursor.getDate() + 7);
      if (rule === '매월') cursor.setMonth(cursor.getMonth() + 1);
      if (rule === '평일') {
        cursor.setDate(cursor.getDate() + 1);
        while ([0, 6].includes(cursor.getDay())) cursor.setDate(cursor.getDate() + 1);
      }
    }
    const date = `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, '0')}-${String(cursor.getDate()).padStart(2, '0')}`;
    items.push({
      ...baseItem,
      id: index === 0 ? baseItem.id : makeId('lectures'),
      date,
      repeatRule: rule,
      repeatCount: String(count),
      repeatSeriesId: seriesId,
      repeatIndex: String(index + 1),
      title: count > 1 ? `${baseItem.title} (${index + 1}/${count})` : baseItem.title,
    });
  }
  return items;
}

function createTasksFromMeeting(meeting, onlyIndex = null) {
  const actions = meetingLines(meeting.nextActions);
  const selected = onlyIndex === null ? actions : actions.filter((_, idx)=>idx === onlyIndex);
  selected.forEach((action) => {
    const title = action.replace(/^[-*\d.\s]+/, '').trim();
    if (!title) return;
    upsertItem('tasks', {
      id: makeId('tasks'),
      title: `[미팅후속] ${title}`,
      owner: meeting.owner || '이브레인',
      status: '대기',
      priority: meeting.status === '후속필요' ? '높음' : '중간',
      due: meeting.followUpDate || meeting.date || todayIso(),
      memo: `미팅: ${meeting.title || ''}\n미팅 ID: ${meeting.id}\n연결 프로젝트/고객: ${meeting.project || '-'}\n회의록에서 생성`,
      sourceType: 'meeting',
      sourceId: meeting.id,
    });
  });
  return selected.length;
}

async function uploadProfileHistoryFiles(form) {
  const input = form.querySelector('input[type="file"][name="lectureFiles"]');
  const files = Array.from(input?.files || []);
  if (!files.length) return [];
  const payload = new FormData();
  files.forEach((file)=>payload.append('files', file));
  const response = await fetch('/api/upload?bucket=profile-history', { method: 'POST', body: payload });
  const result = await response.json().catch(()=>({ ok: false, error: '업로드 응답을 읽지 못했습니다.' }));
  if (!response.ok || !result.ok) throw new Error(result.error || '파일 업로드 실패');
  return Array.isArray(result.files) ? result.files : [];
}

async function handleCrudSubmit(form) {
  const routeKey = form.dataset.crudForm;
  const config = CRUD_CONFIG[routeKey];
  const formData = new FormData(form);
  const syncGoogleCalendar = routeKey === 'lectures' || formData.get('syncGoogleCalendar') === 'on';
  const syncInquiryTask = formData.get('syncInquiryTask') === 'on';
  const syncMeetingTasks = formData.get('syncMeetingTasks') === 'on';
  const syncCourseSchedule = formData.get('syncCourseSchedule') === 'on';
  formData.delete('syncGoogleCalendar');
  formData.delete('syncInquiryTask');
  formData.delete('syncMeetingTasks');
  formData.delete('syncCourseSchedule');
  const fileFields = (config.fields || []).filter((field)=>field.type === 'file').map((field)=>field.name);
  fileFields.forEach((name)=>formData.delete(name));
  const values = Object.fromEntries(formData.entries());
  const previous = state.editing ? getCollection(config.collection).find((item)=>item.id === state.editing) : null;
  const id = state.editing || makeId(config.collection);
  const nextItem = { ...(previous || {}), id, ...values };
  if (routeKey === 'profileHistory') {
    const uploadedFiles = await uploadProfileHistoryFiles(form);
    nextItem.lectureFiles = [...(Array.isArray(previous?.lectureFiles) ? previous.lectureFiles : []), ...uploadedFiles];
  }
  if (routeKey === 'courseMgmt') {
    nextItem.sessionCount = String(Math.max(1, Number(nextItem.sessionCount || 1)));
    nextItem.startTime = normalizeTime(nextItem.startTime, '10:00');
    nextItem.endTime = normalizeTime(nextItem.endTime, '11:00');
    if (nextItem.endTime <= nextItem.startTime) {
      const start = new Date(`${nextItem.launchDate || todayIso()}T${nextItem.startTime}:00`);
      start.setHours(start.getHours() + 1);
      nextItem.endTime = `${String(start.getHours()).padStart(2, '0')}:${String(start.getMinutes()).padStart(2, '0')}`;
    }
  }
  if (routeKey === 'lectures') {
    nextItem.startTime = normalizeTime(nextItem.startTime, '10:00');
    nextItem.endTime = normalizeTime(nextItem.endTime, '11:00');
    nextItem.location = String(nextItem.location || '').trim();
    if (!nextItem.location && nextItem.movement === '온라인') nextItem.location = '온라인';
    if (nextItem.endTime <= nextItem.startTime) {
      const start = new Date(`${nextItem.date || todayIso()}T${nextItem.startTime}:00`);
      start.setHours(start.getHours() + 1);
      nextItem.endTime = `${String(start.getHours()).padStart(2, '0')}:${String(start.getMinutes()).padStart(2, '0')}`;
    }
  }
  let lectureItemsToSave = [nextItem];
  if (routeKey === 'lectures') {
    lectureItemsToSave = buildRepeatedLectureItems(nextItem, previous);
    if (syncGoogleCalendar) {
      for (const lectureItem of lectureItemsToSave) {
        try {
          const result = await syncLectureToGoogle(lectureItem, lectureItem.id === previous?.id ? previous?.googleEventId : null, true);
          if (result.googleEventId) lectureItem.googleEventId = result.googleEventId;
          lectureItem.googleSyncStatus = 'synced';
          lectureItem.googleSyncedAt = new Date().toISOString();
        } catch (error) {
          lectureItem.googleSyncStatus = 'failed';
          lectureItem.googleSyncError = error.message;
        }
      }
    }
  }
  if (routeKey === 'meetings') {
    nextItem.startTime = normalizeTime(nextItem.startTime, '10:00');
    nextItem.endTime = normalizeTime(nextItem.endTime, '11:00');
    if (nextItem.endTime <= nextItem.startTime) {
      const start = new Date(`${nextItem.date || todayIso()}T${nextItem.startTime}:00`);
      start.setHours(start.getHours() + 1);
      nextItem.endTime = `${String(start.getHours()).padStart(2, '0')}:${String(start.getMinutes()).padStart(2, '0')}`;
    }
  }
  if (routeKey === 'inquiries') syncInquiryLinkedTask(nextItem, syncInquiryTask);
  if (routeKey === 'meetings' && syncMeetingTasks) createTasksFromMeeting(nextItem);
  if (routeKey === 'courseMgmt' && syncCourseSchedule) syncCourseLinkedLectures(nextItem, previous);
  if (routeKey === 'lectures') {
    lectureItemsToSave.forEach((lectureItem) => upsertItem(config.collection, lectureItem));
  } else {
    upsertItem(config.collection, nextItem);
  }
  if (routeKey === 'lectures' && syncGoogleCalendar) await loadGoogleCalendarEvents();
  state.editing = null;
  if (routeKey === 'lectures') state.scheduleFormOpen = false;
  if (state.route === 'projects' && routeKey === 'projects') state.projectAddOpen = false;
  if (routeKey === 'courseMgmt') state.courseAddOpen = false;
  render();
  const message = routeKey === 'lectures' && syncGoogleCalendar
    ? (lectureItemsToSave.length > 1 ? `${lectureItemsToSave.length}개 반복 일정을 로컬과 Google Calendar에 저장했습니다.` : '로컬과 Google Calendar에 저장했습니다.')
    : routeKey === 'courseMgmt' && syncCourseSchedule
      ? `강의와 ${nextItem.linkedLectureIds?.length || 0}개 회차 일정을 함께 저장했습니다.`
      : routeKey === 'inquiries' && syncInquiryTask
      ? '문의와 연결 할일을 함께 저장했습니다.'
      : routeKey === 'meetings' && syncMeetingTasks
        ? '미팅과 후속 할일을 함께 저장했습니다.'
        : '저장했습니다.';
  toast(message);
}

function exportJson() {
  downloadFile(`ebrain-dashboard-backup-${todayIso()}.json`, JSON.stringify(state.data, null, 2), 'application/json');
  toast('JSON 백업 파일을 만들었습니다.');
}

async function exportContentOpsServer() {
  state.contentOpsExportStatus = { status: 'loading', export: null, error: '' };
  render();
  try {
    const response = await fetch('/api/dashboard/export/content-ops', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: state.data, target: 'notion-obsidian' }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) throw new Error(payload.error || `export 실패: ${response.status}`);
    if (payload.saved) {
      state.serverStore = { ...state.serverStore, status: 'saved', itemCount: Number(payload.saved.itemCount || dashboardItemCount()), lastSavedAt: payload.saved.updatedAt || new Date().toISOString(), error: '' };
    }
    state.contentOpsExportStatus = { status: 'success', export: payload.export || null, error: '' };
    render();
    toast(`콘텐츠 운영 export 생성: ${payload.export?.markdownPath || payload.export?.jsonPath || '완료'}`);
  } catch (error) {
    state.contentOpsExportStatus = { status: 'error', export: null, error: error.message || String(error) };
    render();
    toast(`콘텐츠 운영 export 실패: ${error.message || error}`);
  }
  return false;
}

function currentExportCollection() {
  const map = {
    tasks:'tasks', projects:'projects', lectures:'lectures', courseMgmt:'courseItems', products:'products', marketing:'conversionMetrics', conversion:'conversionMetrics',
    content:'contentItems', publishCalendar:'contentItems', reactionCheck:'contentItems', sns:'contentItems', youtube:'contentItems', blog:'contentItems', naverCafe:'contentItems', threads:'contentItems',
    lectureAssets:'assets', assets:'assets', community:'communityPosts', openChat:'communityPosts', membership:'communityPosts',
    inquiries:'customerInquiries', customers:'customerInquiries', emails:'emails', automation:'automationRuns', research:'researchItems', ideaMemo:'ideaItems', meetings:'meetings', profileHistory:'profileHistory'
  };
  return map[state.route] || 'tasks';
}

function exportCsv() {
  const collection = currentExportCollection();
  let items = getCollection(collection);
  if (state.route === 'sns') items = items.filter((item)=>['SNS','Cafe','Meta Ad','Shorts'].includes(item.type));
  if (state.route === 'youtube') items = items.filter((item)=>['YouTube','Shorts'].includes(item.type));
  if (state.route === 'blog') items = items.filter((item)=>item.type === 'Blog');
  if (state.route === 'naverCafe') items = items.filter((item)=>item.type === 'Cafe');
  if (state.route === 'threads') items = items.filter((item)=>['SNS','Meta Ad'].includes(item.type));
  if (state.route === 'reactionCheck') items = getContentReactionItems();
  if (state.route === 'openChat') items = items.filter((item)=>['Open Kakao','오픈채팅','Kakao'].some((channel)=>String(item.channel || '').includes(channel)));
  if (state.route === 'membership') items = items.filter((item)=>['멤버쉽','Membership','Discord'].some((channel)=>String(item.channel || '').includes(channel)));
  const columns = Array.from(items.reduce((set, item)=>{ Object.keys(item).forEach(k=>set.add(k)); return set; }, new Set(['id'])));
  const csv = [columns.join(','), ...items.map((item)=>columns.map((col)=>csvCell(item[col])).join(','))].join('\n');
  downloadFile(`ebrain-${state.route}-${todayIso()}.csv`, `\ufeff${csv}`, 'text/csv;charset=utf-8');
  toast('현재 화면 CSV를 내보냈습니다.');
}

function csvCell(value) {
  const text = String(value ?? '').replaceAll('"', '""');
  return /[",\n]/.test(text) ? `"${text}"` : text;
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function restoreJsonFromFile(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      normalizeData(parsed);
      state.data = parsed;
      saveData();
      render();
      toast('JSON 복원이 완료되었습니다.');
    } catch (error) {
      toast('잘못된 JSON입니다. 복원하지 않았습니다.');
      console.error('restore failed', error);
    }
  };
  reader.readAsText(file, 'utf-8');
}

function openTaskAddPanel() {
  state.taskAddOpen = true;
  render();
  window.requestAnimationFrame(() => {
    const panel = document.querySelector('#taskInlineAddPanel');
    const input = document.querySelector('#taskInlineAddPanel [data-task-quick-form] input[name="title"]');
    panel?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    input?.focus();
  });
  return false;
}

function closeTaskAddPanel() {
  state.taskAddOpen = false;
  render();
  return false;
}

function submitTaskQuickAdd(form) {
  const values = Object.fromEntries(new FormData(form).entries());
  if (!String(values.title || '').trim()) {
    toast('할일 제목을 입력하세요.');
    form.querySelector('input[name="title"]')?.focus();
    return false;
  }
  upsertItem('tasks', { id: makeId('tasks'), status: '대기', ...values });
  state.taskAddOpen = false;
  form.reset();
  render();
  toast('할일을 빠르게 추가했습니다.');
  return false;
}

function openCourseAddPanel() {
  state.courseAddOpen = true;
  state.editing = null;
  render();
  window.requestAnimationFrame(() => {
    const panel = document.querySelector('#courseInlineAddPanel');
    const input = panel?.querySelector('[name="title"]');
    panel?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    input?.focus({ preventScroll: true });
  });
  return false;
}

function closeCourseAddPanel() {
  state.courseAddOpen = false;
  state.editing = null;
  render();
  return false;
}

window.openTaskAddPanel = openTaskAddPanel;
window.closeTaskAddPanel = closeTaskAddPanel;
window.submitTaskQuickAdd = submitTaskQuickAdd;
window.submitIdeaForm = submitIdeaForm;
async function submitCrudFormDirect(form) {
  if (!form) return false;
  if (!form.checkValidity()) {
    form.reportValidity();
    return false;
  }
  await handleCrudSubmit(form);
  return false;
}
async function submitCourseForm(form) {
  return submitCrudFormDirect(form);
}

window.openCourseAddPanel = openCourseAddPanel;
window.closeCourseAddPanel = closeCourseAddPanel;
window.submitCourseForm = submitCourseForm;
window.submitCrudFormDirect = submitCrudFormDirect;

function scheduleFilterRender(filter, value, sourceElement) {
  if (filterRenderTimer) window.clearTimeout(filterRenderTimer);
  const routeAtInput = state.route;
  const selectionStart = sourceElement?.selectionStart ?? String(value).length;
  const selectionEnd = sourceElement?.selectionEnd ?? selectionStart;
  filterRenderTimer = window.setTimeout(() => {
    filterRenderTimer = null;
    if (state.route !== routeAtInput) return;
    render();
    window.requestAnimationFrame(() => {
      const input = document.querySelector(`[data-filter="${CSS.escape(filter)}"]`);
      if (!input) return;
      input.focus({ preventScroll: true });
      if (typeof input.setSelectionRange === 'function') {
        const nextLength = String(input.value || '').length;
        input.setSelectionRange(Math.min(selectionStart, nextLength), Math.min(selectionEnd, nextLength));
      }
    });
  }, 180);
}

function bindEvents() {
  document.addEventListener('click', async (event) => {
    const editableField = event.target.closest('.reference-course-form input, .reference-course-form textarea, .reference-course-form select, .crud-form-panel input, .crud-form-panel textarea, .crud-form-panel select');
    if (editableField && !editableField.disabled && !editableField.readOnly) {
      editableField.focus({ preventScroll: true });
    }
    const editableLabel = event.target.closest('.reference-course-form label, .crud-form-panel label');
    if (!editableField && editableLabel) {
      const nestedEditable = editableLabel.querySelector('input:not([type="hidden"]):not(:disabled), textarea:not(:disabled), select:not(:disabled)');
      nestedEditable?.focus({ preventScroll: true });
    }

    const sidebarToggle = event.target.closest('[data-sidebar-toggle]');
    if (sidebarToggle) {
      state.sidebarCollapsed = !state.sidebarCollapsed;
      localStorage.setItem(SIDEBAR_STATE_KEY, state.sidebarCollapsed ? '1' : '0');
      renderSidebarChrome();
      return;
    }

    const routeBtn = event.target.closest('button[data-route], a[data-route]');
    if (routeBtn) return setRoute(routeBtn.dataset.route);

    const profileViewBtn = event.target.closest('[data-profile-view]');
    if (profileViewBtn) {
      state.profileHistoryView = profileViewBtn.dataset.profileView === 'card' ? 'card' : 'table';
      localStorage.setItem('ebrainOS.profileHistoryView', state.profileHistoryView);
      render();
      return;
    }

    const courseOpsFocusBtn = event.target.closest('[data-course-ops-focus]');
    if (courseOpsFocusBtn) {
      state.courseOpsFocus = courseOpsFocusBtn.dataset.courseOpsFocus || '전체';
      render();
      return;
    }

    const chipFilter = event.target.closest('[data-chip-filter]');
    if (chipFilter) {
      state.filters[chipFilter.dataset.chipFilter] = chipFilter.dataset.chipValue;
      render();
      return;
    }

    const newBtn = event.target.closest('[data-new-item]');
    if (newBtn) {
      state.editing = null;
      state.selectedScheduleEventKey = null;
      state.schedulePopover = null;
      if (newBtn.dataset.newItem === 'project') state.projectAddOpen = true;
      if (newBtn.dataset.newItem === 'courseMgmt') state.courseAddOpen = true;
      if (newBtn.dataset.newItem === 'lectures') {
        state.selectedLectureDate = state.selectedLectureDate || todayIso();
        state.scheduleFormOpen = true;
      }
      render();
      if (newBtn.dataset.newItem === 'project') {
        setTimeout(() => {
          const form = document.querySelector('#projectInlineAddPanel [data-crud-form="projects"]');
          form?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          form?.querySelector('input[name="title"]')?.focus();
        }, 0);
      }
      if (newBtn.dataset.newItem === 'lectures') {
        setTimeout(() => {
          const form = document.querySelector('[data-crud-form="lectures"]');
          form?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          form?.querySelector('input[name="title"]')?.focus();
        }, 0);
      }
      return;
    }

    const scheduleFocusBtn = event.target.closest('[data-schedule-focus]');
    if (scheduleFocusBtn) {
      state.scheduleFocusFilter = scheduleFocusBtn.dataset.scheduleFocus || '전체';
      state.schedulePopover = null;
      render();
      return;
    }

    const scheduleFormToggle = event.target.closest('[data-schedule-form-toggle]');
    if (scheduleFormToggle) {
      state.scheduleFormOpen = !state.scheduleFormOpen;
      if (!state.scheduleFormOpen) state.editing = null;
      render();
      return;
    }

    const projectAddClose = event.target.closest('[data-project-add-close]');
    if (projectAddClose) {
      state.projectAddOpen = false;
      state.editing = null;
      render();
      return;
    }

    const projectNextActionSave = event.target.closest('[data-project-next-action-save]');
    if (projectNextActionSave) {
      const id = projectNextActionSave.dataset.projectNextActionSave;
      const input = document.querySelector(`[data-project-next-action-input="${CSS.escape(id)}"]`);
      const item = getCollection('projects').find((entry)=>entry.id === id);
      if (!item || !input) { toast('다음 결정/액션을 저장하지 못했습니다.'); return; }
      item.nextAction = input.value.trim();
      upsertItem('projects', item);
      saveData();
      render();
      toast('다음 결정/액션을 저장했습니다.');
      return;
    }

    const projectTaskBtn = event.target.closest('[data-create-project-task]');
    if (projectTaskBtn) {
      const item = getCollection('projects').find((entry)=>entry.id === projectTaskBtn.dataset.createProjectTask);
      if (!openTaskFromProject(item)) toast('프로젝트를 찾지 못했습니다.');
      return;
    }

    const courseAddOpen = event.target.closest('[data-course-add-open]');
    if (courseAddOpen) return openCourseAddPanel();

    const courseAddClose = event.target.closest('[data-course-add-close]');
    if (courseAddClose) return closeCourseAddPanel();

    const courseSyncBtn = event.target.closest('[data-course-sync-schedule]');
    if (courseSyncBtn) {
      const item = getCollection('courseItems').find((entry)=>entry.id === courseSyncBtn.dataset.courseSyncSchedule);
      if (!item) { toast('강의를 찾지 못했습니다.'); return; }
      const linkedIds = syncCourseLinkedLectures(item, item);
      upsertItem('courseItems', item);
      saveData();
      render();
      toast(`${linkedIds.length}개 회차 일정을 생성했습니다.`);
      return;
    }

    const courseOpenDateBtn = event.target.closest('[data-course-open-date]');
    if (courseOpenDateBtn) {
      state.editing = courseOpenDateBtn.dataset.courseOpenDate;
      state.courseAddOpen = true;
      render();
      window.requestAnimationFrame(() => {
        const dateInput = document.querySelector('#courseInlineAddPanel [name="launchDate"]');
        document.querySelector('#courseInlineAddPanel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        dateInput?.focus({ preventScroll: true });
      });
      toast('첫 회차/오픈일 입력칸을 열었습니다.');
      return;
    }

    const nextActionSave = event.target.closest('[data-course-next-action-save]');
    if (nextActionSave) {
      const id = nextActionSave.dataset.courseNextActionSave;
      const input = document.querySelector(`[data-course-next-action-input="${CSS.escape(id)}"]`);
      const item = getCollection('courseItems').find((entry)=>entry.id === id);
      if (!item || !input) { toast('다음 할 일을 저장하지 못했습니다.'); return; }
      item.nextAction = input.value.trim();
      upsertItem('courseItems', item);
      saveData();
      render();
      toast('다음 할 일을 저장했습니다.');
      return;
    }

    if (event.target.closest('[data-schedule-popover-close]')) {
      state.schedulePopover = null;
      render();
      return;
    }

    if (event.target.closest('[data-schedule-search-toggle]')) {
      state.scheduleSearchOpen = !state.scheduleSearchOpen;
      render();
      return;
    }

    if (event.target.closest('[data-google-calendar-refresh]')) {
      await loadGoogleCalendarEvents();
      render();
      toast('Google Calendar를 새로고침했습니다.');
      return;
    }

    const scheduleStatusBtn = event.target.closest('[data-schedule-status]');
    if (scheduleStatusBtn) {
      event.preventDefault();
      event.stopPropagation();
      await updateScheduleStatusFromKey(scheduleStatusBtn.dataset.scheduleEventKey, scheduleStatusBtn.dataset.scheduleStatus);
      return;
    }

    const scheduleTaskBtn = event.target.closest('[data-create-schedule-task]');
    if (scheduleTaskBtn) {
      const item = findScheduleEventByKey(scheduleTaskBtn.dataset.scheduleEventKey);
      if (!openTaskFromSchedule(item, scheduleTaskBtn.dataset.createScheduleTask || 'general')) {
        toast('할일로 만들 일정을 찾지 못했습니다.');
      }
      return;
    }

    const googleWebEditBtn = event.target.closest('[data-edit-google-event]');
    if (googleWebEditBtn) {
      event.preventDefault();
      event.stopPropagation();
      openGoogleScheduleWebEdit(googleWebEditBtn.dataset.editGoogleEvent);
      return;
    }

    const scheduleEventBtn = event.target.closest('[data-schedule-event-key]');
    if (scheduleEventBtn) {
      const key = scheduleEventBtn.dataset.scheduleEventKey;
      const item = findScheduleEventByKey(key);
      if (item) {
        state.selectedScheduleEventKey = key;
        state.selectedLectureDate = item.date || state.selectedLectureDate;
        state.calendarMonth = item.date ? item.date.slice(0, 7) : state.calendarMonth;
        state.editing = null;
        const point = getPopoverPoint(event, scheduleEventBtn);
        state.schedulePopover = { key, x: point.x, y: point.y };
        render();
        setTimeout(() => document.querySelector('[data-schedule-popover] [data-edit], [data-schedule-popover] [data-edit-google-event], [data-schedule-popover] [data-delete], [data-schedule-popover] [data-delete-google-event]')?.focus(), 0);
        toast('일정 수정·삭제 창을 열었습니다.');
      }
      return;
    }

    const calendarDateBtn = event.target.closest('[data-calendar-date]');
    if (calendarDateBtn) {
      state.selectedLectureDate = calendarDateBtn.dataset.calendarDate;
      state.selectedScheduleEventKey = null;
      state.schedulePopover = null;
      state.editing = null;
      state.scheduleFormOpen = true;
      render();
      setTimeout(() => {
        const form = document.querySelector('[data-crud-form="lectures"]');
        form?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        form?.querySelector('input[name="title"]')?.focus();
      }, 0);
      toast(`${state.selectedLectureDate} 강의 입력을 시작합니다.`);
      return;
    }

    const opsTaskBtn = event.target.closest('[data-create-ops-task]');
    if (opsTaskBtn) {
      upsertItem('tasks', {
        id: makeId('tasks'),
        title: opsTaskBtn.dataset.createOpsTask,
        owner: 'Hermes',
        status: '대기',
        priority: '높음',
        due: todayIso(),
        memo: 'Zoom 52분 이후 운영 OS 인사이트에서 생성'
      });
      toast('오늘의 할일에 운영 OS 액션을 추가했습니다.');
      return;
    }

    const taskAddFocus = event.target.closest('[data-task-add-focus]');
    if (taskAddFocus) {
      state.taskAddOpen = true;
      render();
      window.requestAnimationFrame(() => {
        const panel = document.querySelector('#taskInlineAddPanel');
        const input = document.querySelector('#taskInlineAddPanel [data-task-quick-form] input[name="title"]');
        panel?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        input?.focus();
      });
      return;
    }

    const taskAddClose = event.target.closest('[data-task-add-close]');
    if (taskAddClose) {
      state.taskAddOpen = false;
      render();
      return;
    }

    const taskPriorityPreset = event.target.closest('[data-task-priority-preset]');
    if (taskPriorityPreset) {
      const form = taskPriorityPreset.closest('[data-task-quick-form]');
      const hidden = form?.querySelector('[data-task-priority-value]');
      if (hidden) hidden.value = taskPriorityPreset.dataset.taskPriorityPreset;
      form?.querySelectorAll('[data-task-priority-preset]').forEach((button)=>button.classList.toggle('active', button === taskPriorityPreset));
      return;
    }

    const taskDuePreset = event.target.closest('[data-task-due-preset]');
    if (taskDuePreset) {
      const form = taskDuePreset.closest('[data-task-quick-form]');
      const input = form?.querySelector('[data-task-due-input]');
      if (input) input.value = taskDuePreset.dataset.taskDuePreset || '';
      form?.querySelectorAll('[data-task-due-preset]').forEach((button)=>button.classList.toggle('active', button === taskDuePreset));
      return;
    }

    const taskDoneClick = event.target.closest('[data-task-done-click]');
    if (taskDoneClick) {
      event.preventDefault();
      const item = getCollection('tasks').find((entry)=>entry.id === taskDoneClick.dataset.taskDoneClick);
      if (item) {
        item.status = item.status === '완료' ? '대기' : '완료';
        saveData();
        render();
        toast(item.status === '완료' ? '할일을 완료 체크했습니다.' : '할일을 대기로 되돌렸습니다.');
      }
      return;
    }

    const taskStatusBtn = event.target.closest('[data-task-status]');
    if (taskStatusBtn) {
      const item = getCollection('tasks').find((entry)=>entry.id === taskStatusBtn.dataset.id);
      if (item) {
        item.status = taskStatusBtn.dataset.taskStatus;
        saveData();
        render();
        toast(`할일을 ${item.status} 상태로 바꿨습니다.`);
      }
      return;
    }

    const taskEditBtn = event.target.closest('[data-task-edit]');
    if (taskEditBtn) {
      state.editing = taskEditBtn.dataset.taskEdit;
      render();
      setTimeout(() => document.querySelector('[data-crud-form="tasks"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 0);
      return;
    }

    const taskDeleteBtn = event.target.closest('[data-task-delete]');
    if (taskDeleteBtn) {
      if (confirm('이 할일을 삭제할까요?')) {
        deleteItem('tasks', taskDeleteBtn.dataset.taskDelete);
        render();
        toast('할일을 삭제했습니다.');
      }
      return;
    }

    const editBtn = event.target.closest('[data-edit]');
    if (editBtn) {
      state.editing = editBtn.dataset.edit;
      state.schedulePopover = null;
      if (editBtn.dataset.routeKey === 'lectures') {
        const scheduleItem = getCollection('lectures').find((entry)=>entry.id === editBtn.dataset.edit);
        state.scheduleFormOpen = true;
        state.selectedScheduleEventKey = scheduleItem ? scheduleEventKey({ source: 'local', id: scheduleItem.id }) : state.selectedScheduleEventKey;
        state.selectedLectureDate = scheduleItem?.date || state.selectedLectureDate;
        state.calendarMonth = scheduleItem?.date ? scheduleItem.date.slice(0, 7) : state.calendarMonth;
      }
      if (editBtn.dataset.routeKey === 'courseMgmt') state.courseAddOpen = true;
      if (state.route === 'projects' && editBtn.dataset.routeKey === 'projects') state.projectAddOpen = true;
      render();
      if (editBtn.dataset.routeKey === 'lectures') {
        window.requestAnimationFrame(() => {
          const form = document.querySelector('[data-crud-form="lectures"]');
          form?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          form?.querySelector('input[name="title"]')?.focus({ preventScroll: true });
        });
      }
      if (editBtn.dataset.routeKey === 'courseMgmt') {
        window.requestAnimationFrame(() => document.querySelector('#courseInlineAddPanel')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
      }
      if (state.route === 'projects' && editBtn.dataset.routeKey === 'projects') {
        window.requestAnimationFrame(() => document.querySelector('#projectInlineAddPanel')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
      }
      return;
    }

    const cancel = event.target.closest('[data-cancel-edit]');
    if (cancel) { if (state.route === 'courseMgmt') state.courseAddOpen = false; if (state.route === 'projects') state.projectAddOpen = false; state.editing = null; render(); return; }

    if (event.target.closest('[data-schedule-detail-close]')) {
      state.selectedScheduleEventKey = null;
      state.schedulePopover = null;
      render();
      return;
    }

    const googleDeleteBtn = event.target.closest('[data-delete-google-event]');
    if (googleDeleteBtn) {
      if (confirm('이 Google Calendar 일정을 삭제할까요?')) {
        try {
          await deleteLectureFromGoogle(googleDeleteBtn.dataset.deleteGoogleEvent);
          await loadGoogleCalendarEvents();
          state.selectedScheduleEventKey = null;
          state.schedulePopover = null;
          render();
          toast('Google Calendar 일정을 삭제했습니다.');
        } catch (error) {
          toast(`Google Calendar 삭제 실패: ${error.message}`);
        }
      }
      return;
    }

    const delBtn = event.target.closest('[data-delete]');
    if (delBtn) {
      const config = CRUD_CONFIG[delBtn.dataset.routeKey];
      const item = getCollection(config.collection).find((entry)=>entry.id === delBtn.dataset.delete);
      if (confirm('이 항목을 삭제할까요?')) {
        if (delBtn.dataset.routeKey === 'lectures' && item?.googleEventId) {
          try {
            await deleteLectureFromGoogle(item.googleEventId);
          } catch (error) {
            toast(`Google Calendar 삭제 실패: ${error.message}`);
            return;
          }
        }
        const deletedLinkedTask = delBtn.dataset.routeKey === 'inquiries' ? deleteInquiryLinkedTask(item) : false;
        const deletedCourseLectures = delBtn.dataset.routeKey === 'courseMgmt' ? deleteCourseLinkedLectures(item) : 0;
        deleteItem(config.collection, delBtn.dataset.delete);
        if (delBtn.dataset.routeKey === 'lectures') {
          state.selectedScheduleEventKey = null;
          state.schedulePopover = null;
          state.editing = null;
        }
        if (delBtn.dataset.routeKey === 'projects') {
          if (state.editing === delBtn.dataset.delete) state.editing = null;
          state.projectAddOpen = false;
        }
        if (delBtn.dataset.routeKey === 'lectures' && item?.googleEventId) await loadGoogleCalendarEvents();
        render();
        toast(delBtn.dataset.routeKey === 'lectures' && item?.googleEventId ? '로컬과 Google Calendar에서 삭제했습니다.' : deletedCourseLectures ? `강의와 연결 일정 ${deletedCourseLectures}개를 함께 삭제했습니다.` : deletedLinkedTask ? '문의와 연결 할일을 함께 삭제했습니다.' : '삭제했습니다.');
      }
      return;
    }

    const statusBtn = event.target.closest('[data-quick-status]');
    if (statusBtn) {
      const config = CRUD_CONFIG[statusBtn.dataset.routeKey];
      const item = getCollection(config.collection).find((entry)=>entry.id === statusBtn.dataset.id);
      if (item) {
        item.status = statusBtn.dataset.quickStatus;
        if (config.collection === 'lectures' && item.status === '완료') {
          item.materialStatus = item.materialStatus || '완료';
          item.mailStatus = item.mailStatus || '완료';
        }
        if (config.collection === 'lectures') {
          try {
            const previousGoogleEventId = item.googleEventId;
            const result = await syncLectureToGoogle(item, previousGoogleEventId, true);
            if (result.googleEventId) item.googleEventId = result.googleEventId;
            item.googleSyncStatus = 'synced';
            item.googleSyncedAt = new Date().toISOString();
            await loadGoogleCalendarEvents();
          } catch (error) {
            item.googleSyncStatus = 'failed';
            saveData();
            render();
            toast(`상태는 로컬 변경 · Google 반영 실패: ${error.message}`);
            return;
          }
        }
        if (config.collection === 'customerInquiries' && item.taskId) syncInquiryLinkedTask(item, true);
        if (config.collection === 'courseItems') syncCourseLinkedLectures(item, item);
        saveData();
        render();
        toast(config.collection === 'lectures' ? '상태를 바꾸고 Google Calendar에도 반영했습니다.' : config.collection === 'courseItems' ? `상태를 변경하고 연결 일정 ${item.linkedLectureIds?.length || 0}개를 갱신했습니다.` : '상태를 변경했습니다.');
      }
      return;
    }

    const meetingStatusFilter = event.target.closest('[data-meeting-status-filter]');
    if (meetingStatusFilter) {
      state.filters.status = meetingStatusFilter.dataset.meetingStatusFilter || '전체';
      renderMeetingManagement();
      return;
    }

    const meetingActionTask = event.target.closest('[data-meeting-action-task]');
    if (meetingActionTask) {
      const meeting = getCollection('meetings').find((item)=>item.id === meetingActionTask.dataset.meetingActionTask);
      if (meeting) {
        const count = createTasksFromMeeting(meeting, Number(meetingActionTask.dataset.actionIndex));
        saveData();
        renderMeetingManagement();
        toast(count ? '미팅 후속 할일을 만들었습니다.' : '만들 후속 할일이 없습니다.');
      }
      return;
    }

    const ideaStatusSelect = event.target.closest('[data-idea-status]');
    if (ideaStatusSelect) {
      const item = getCollection('ideaItems').find((entry)=>entry.id === ideaStatusSelect.dataset.ideaStatus);
      if (item) {
        item.status = ideaStatusSelect.value;
        saveData();
        render();
        toast('아이디어 상태를 변경했습니다.');
      }
      return;
    }

    const ideaConvertBtn = event.target.closest('[data-idea-convert]');
    if (ideaConvertBtn) {
      convertIdea(ideaConvertBtn.dataset.ideaConvert, ideaConvertBtn.dataset.ideaTarget);
      return;
    }

    const ideaDeleteBtn = event.target.closest('[data-idea-delete]');
    if (ideaDeleteBtn) {
      if (confirm('이 아이디어를 삭제할까요?')) {
        deleteItem('ideaItems', ideaDeleteBtn.dataset.ideaDelete);
        render();
        toast('아이디어를 삭제했습니다.');
      }
      return;
    }

    const clearFilters = event.target.closest('[data-clear-filters]');
    if (clearFilters) { state.filters = { query: '', status: '전체', priority: '전체', owner: '전체', type: '전체', format: '전체', purpose: '전체', dateScope: '전체' }; if (state.route === 'courseMgmt') state.courseOpsFocus = '전체'; render(); return; }

    const checklist = event.target.closest('[data-checklist-id]');
    if (checklist) {
      const item = state.data.settings.checklist.find((entry)=>entry.id === checklist.dataset.checklistId);
      if (item) { item.done = checklist.checked; saveData(); render(); }
      return;
    }

    const publishDateBtn = event.target.closest('[data-publish-date]');
    if (publishDateBtn) {
      state.selectedPublishDate = publishDateBtn.dataset.publishDate;
      state.calendarMonth = String(state.selectedPublishDate || todayIso()).slice(0, 7);
      render();
      return;
    }

    if (event.target.closest('[data-calendar-prev]')) { state.calendarMonth = addMonths(state.calendarMonth, -1); render(); return; }
    if (event.target.closest('[data-calendar-next]')) { state.calendarMonth = addMonths(state.calendarMonth, 1); render(); return; }
    if (event.target.closest('[data-calendar-today]')) { state.calendarMonth = currentMonthKey(); state.selectedPublishDate = todayIso(); state.selectedLectureDate = todayIso(); state.selectedScheduleEventKey = null; state.schedulePopover = null; render(); return; }

    if (event.target.closest('[data-email-refresh]')) { state.gmailDetail = { status: 'idle', message: null, selectedId: null }; await loadGmailMessages(undefined, { force: true }); toast('Gmail을 새로 불러왔습니다.'); return; }
    const emailOpenBtn = event.target.closest('[data-email-open]');
    if (emailOpenBtn) {
      const id = emailOpenBtn.dataset.emailOpen;
      if (state.gmailDetail?.selectedId === id && state.gmailDetail?.status === 'loaded') closeGmailMessage();
      else await loadGmailMessage(id);
      return;
    }
    if (event.target.closest('[data-email-close]')) { closeGmailMessage(); return; }
    const emailQueryBtn = event.target.closest('[data-email-query]');
    if (emailQueryBtn) { state.selectedGmailLabel = emailQueryBtn.dataset.emailQueryLabel || '받은메일'; state.gmailDetail = { status: 'idle', message: null, selectedId: null }; await loadGmailMessages(emailQueryBtn.dataset.emailQuery); return; }

    const emailLabelBtn = event.target.closest('[data-email-label]');
    if (emailLabelBtn) {
      const label = emailLabelBtn.dataset.emailLabel || '받은메일';
      const group = GMAIL_LABEL_GROUPS.find((item)=>item.key === label);
      state.selectedGmailLabel = label;
      state.gmailDetail = { status: 'idle', message: null, selectedId: null };
      if (group?.query) await loadGmailMessages(group.query);
      else renderEmailManagement();
      return;
    }

    const emailActionBtn = event.target.closest('[data-email-action]');
    if (emailActionBtn) {
      const result = createFollowUpFromEmail(emailActionBtn.dataset.emailAction, emailActionBtn.dataset.emailId);
      if (result.ok) {
        saveData();
        renderEmailManagement();
      }
      toast(result.message);
      return;
    }

    if (event.target.id === 'backupJsonBtn' || event.target.id === 'settingsBackupBtn') return exportJson();
    if (event.target.id === 'settingsSnapshotBtn') {
      try {
        await flushServerSave('manual-before-snapshot');
        const snapshot = await createServerSnapshot('manual-button');
        toast(`DB 스냅샷 생성 완료: ${snapshot.itemCount}개 항목`);
        if (state.route === 'settings') render();
      } catch (error) {
        toast(`DB 스냅샷 실패: ${error.message}`);
      }
      return;
    }
    if (event.target.id === 'settingsApiLogRefreshBtn') {
      await loadApiLogs(20);
      render();
      toast('API 실행 로그를 새로고침했습니다.');
      return;
    }
    if (event.target.id === 'settingsContentOpsExportBtn') return exportContentOpsServer();
    if (event.target.id === 'exportCsvBtn') return exportCsv();
    if (event.target.id === 'settingsRestoreBtn') return $('#restoreFileInput')?.click();
    if (event.target.id === 'settingsResetBtn') {
      if (confirm('현재 localStorage 데이터를 샘플 데이터로 초기화할까요?')) resetData();
    }
  });

  document.addEventListener('input', (event) => {
    if (event.target.dataset.navSearch !== undefined) {
      state.navSearch = event.target.value;
      renderNav();
      document.querySelector('[data-nav-search]')?.focus();
      return;
    }
    const filter = event.target.dataset.filter;
    if (filter) {
      state.filters[filter] = event.target.value;
      scheduleFilterRender(filter, event.target.value, event.target);
    }
  });

  document.addEventListener('change', (event) => {
    if (event.target.id === 'restoreFileInput' && event.target.files?.[0]) restoreJsonFromFile(event.target.files[0]);

    const ideaStatusSelect = event.target.closest('[data-idea-status]');
    if (ideaStatusSelect) {
      const item = getCollection('ideaItems').find((entry)=>entry.id === ideaStatusSelect.dataset.ideaStatus);
      if (item) {
        item.status = ideaStatusSelect.value;
        saveData();
        render();
        toast('아이디어 상태를 변경했습니다.');
      }
      return;
    }

    const statusSelect = event.target.closest('[data-quick-status-select]');
    if (statusSelect) {
      const config = CRUD_CONFIG[statusSelect.dataset.routeKey];
      const item = getCollection(config.collection).find((entry)=>entry.id === statusSelect.dataset.id);
      if (item) {
        item.status = statusSelect.value;
        if (config.collection === 'courseItems') syncCourseLinkedLectures(item, item);
        saveData();
        render();
        toast(config.collection === 'courseItems' ? `상태를 변경하고 연결 일정 ${item.linkedLectureIds?.length || 0}개를 갱신했습니다.` : '상태를 변경했습니다.');
      }
      return;
    }

    const inlineField = event.target.closest('[data-task-inline-field]');
    if (inlineField) {
      updateTaskInlineField(inlineField, { rerender: ['status', 'priority', 'due'].includes(inlineField.dataset.taskInlineField) });
      return;
    }

    const taskDoneToggle = event.target.closest('[data-task-done-toggle]');
    if (taskDoneToggle) {
      const item = getCollection('tasks').find((entry)=>entry.id === taskDoneToggle.dataset.taskDoneToggle);
      if (item) {
        item.status = taskDoneToggle.checked ? '완료' : '대기';
        saveData();
        render();
        toast(taskDoneToggle.checked ? '할일을 완료 체크했습니다.' : '할일을 대기로 되돌렸습니다.');
      }
    }
  });

  document.addEventListener('focusout', (event) => {
    const inlineField = event.target.closest('[data-task-inline-field]');
    if (inlineField && ['title', 'memo', 'owner'].includes(inlineField.dataset.taskInlineField)) {
      updateTaskInlineField(inlineField);
    }
  });

  document.addEventListener('keydown', (event) => {
    const inlineField = event.target.closest('[data-task-inline-field]');
    if (!inlineField) return;
    if (event.key === 'Enter' && inlineField.tagName !== 'TEXTAREA') {
      event.preventDefault();
      updateTaskInlineField(inlineField, { rerender: ['status', 'priority', 'due'].includes(inlineField.dataset.taskInlineField) });
      inlineField.blur();
    }
  });

  document.addEventListener('submit', async (event) => {
    if (event.defaultPrevented) return;
    const ideaForm = event.target.closest('[data-idea-form]');
    if (ideaForm) {
      event.preventDefault();
      submitIdeaForm(ideaForm);
      return;
    }

    const quickTaskForm = event.target.closest('[data-task-quick-form]');
    if (quickTaskForm) {
      event.preventDefault();
      submitTaskQuickAdd(quickTaskForm);
      return;
    }

    const emailSearchForm = event.target.closest('[data-email-search]');
    if (emailSearchForm) {
      event.preventDefault();
      const query = new FormData(emailSearchForm).get('query') || 'in:inbox newer_than:14d';
      state.selectedGmailLabel = String(query).includes('in:sent') ? '보낸메일' : '받은메일';
      state.gmailDetail = { status: 'idle', message: null, selectedId: null };
      await loadGmailMessages(String(query));
      return;
    }

    const form = event.target.closest('[data-crud-form]');
    if (form) {
      event.preventDefault();
      await handleCrudSubmit(form);
    }
  });

  window.addEventListener('hashchange', () => {
    const route = location.hash.replace('#', '') || 'dashboard';
    if (route !== state.route) {
      state.route = ROUTE_META[route] ? route : 'dashboard';
      state.editing = null;
      state.courseAddOpen = false;
      render();
    }
  });
}

function updateTaskInlineField(input, { rerender = false } = {}) {
  const id = input?.dataset?.id;
  const field = input?.dataset?.taskInlineField;
  if (!id || !field) return false;
  const item = getCollection('tasks').find((entry)=>entry.id === id);
  if (!item) return false;
  const value = input.value?.trim?.() ?? input.value ?? '';
  if (field === 'title' && !value) {
    input.value = item.title || '';
    toast('할일 제목은 비워둘 수 없습니다.');
    return false;
  }
  if (item[field] === value) return false;
  item[field] = value;
  saveData();
  input.classList.add('saved');
  setTimeout(() => input.classList.remove('saved'), 650);
  toast('표에서 바로 저장했습니다.');
  if (rerender) render();
  return true;
}

async function init() {
  try {
    const localData = loadData();
    const serverData = await loadServerData();
    const serverHasData = dashboardItemCount(serverData) > 0;
    state.data = serverHasData ? serverData : (localData || await seedFromSample());
    await ensureProfileHistorySeed(state.data);
    await loadGoogleCalendarEvents();
    await loadApiLogs(12);
    await loadContentImportStatus();
    saveData();
    if (!serverHasData && localData) queueServerSave('initial-localstorage-import', 100);
    const pathRoute = location.pathname.includes('/dashboard/schedules') ? 'lectures' : '';
    state.route = pathRoute || (ROUTE_META[location.hash.replace('#', '')] ? location.hash.replace('#', '') : 'dashboard');
    bindEvents();
    render();
  } catch (error) {
    console.error(error);
    $('#routeContent').innerHTML = `<div class="panel"><h2>초기화 오류</h2><p>${escapeHtml(error.message)}</p></div>`;
  }
}

init();
