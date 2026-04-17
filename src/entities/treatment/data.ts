export interface Treatment {
  slug: string;
  name: string;
  icon: string;
  summary: string;
  description: string;
  symptoms: string[];
  methods: string[];
}

export const treatments: Treatment[] = [
  {
    slug: "back-neck",
    name: "허리 · 목 통증",
    icon: "🦴",
    summary: "디스크, 척추관협착증, 근막통증 등 다양한 척추 질환을 치료합니다.",
    description: "허리와 목 통증은 현대인에게 가장 흔한 만성 통증입니다. 정확한 진단을 통해 비수술적 통증 치료를 시행합니다.",
    symptoms: ["허리 · 목 통증 및 뻣뻣함", "팔 · 다리 저림", "보행 시 다리 당김", "오래 앉거나 서 있을 때 악화되는 통증"],
    methods: ["경막외 신경차단술", "신경근 차단술", "관절 내 주사치료", "도수치료 병행"],
  },
  {
    slug: "nerve-block",
    name: "신경치료",
    icon: "⚡",
    summary: "신경차단술로 만성 통증의 근본 원인을 치료합니다.",
    description: "신경차단술은 통증을 전달하는 신경 주위에 약물을 주입하여 통증을 억제하고 염증을 가라앉히는 치료입니다.",
    symptoms: ["만성 통증", "신경성 통증", "수술 후 지속되는 통증", "대상포진 관련 통증"],
    methods: ["성상신경절 차단술", "경막외 차단술", "교감신경 차단술", "신경박리술"],
  },
  {
    slug: "joint",
    name: "관절 통증",
    icon: "🦵",
    summary: "무릎, 어깨, 고관절 등 관절 통증을 전문적으로 치료합니다.",
    description: "퇴행성 관절염, 회전근개 손상 등 관절 질환에 대한 정밀한 진단과 비수술 치료를 제공합니다.",
    symptoms: ["관절 통증 및 부종", "운동 범위 제한", "계단 오르내릴 때 통증", "어깨 들어올리기 어려움"],
    methods: ["관절 내 스테로이드 주사", "히알루론산 주사", "프롤로테라피", "초음파 유도하 주사치료"],
  },
  {
    slug: "shingles",
    name: "대상포진 후 신경통",
    icon: "🩹",
    summary: "대상포진 후 남은 신경통을 적극적으로 치료합니다.",
    description: "대상포진 회복 후에도 지속되는 신경통은 삶의 질을 심각하게 저하시킵니다. 조기 적극 치료로 만성화를 예방합니다.",
    symptoms: ["타는 듯한 통증", "찌르는 듯한 날카로운 통증", "가벼운 접촉에도 극심한 통증", "수면 장애"],
    methods: ["교감신경 차단술", "경막외 신경차단술", "신경조정술", "약물치료 병행"],
  },
];
