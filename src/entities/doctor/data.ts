export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  career: string[];
  imageUrl?: string;
}

export const doctors: Doctor[] = [
  {
    id: "director",
    name: "지종남",
    title: "대표원장",
    specialties: ["마취통증의학과", "신경차단술", "관절 통증", "척추 통증"],
    career: [
      "마취통증의학과 전문의",
      "대학병원 마취통증의학과 전공의 수료",
      "대한마취통증의학회 정회원",
      "대한통증학회 정회원",
    ],
    imageUrl: undefined,
  },
];
