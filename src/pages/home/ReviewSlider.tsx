"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { useIntersectionFade } from "@shared/lib/use-intersection-fade";

const reviews = [
  { id: 1, author: "이○○", date: "2024.11", rating: 5, text: "원장님이 통증 원인을 꼼꼼하게 설명해 주셔서 신뢰가 갔습니다. 신경차단술 후 오랜 허리 통증이 많이 나아졌어요." },
  { id: 2, author: "김○○", date: "2024.10", rating: 5, text: "무릎 관절 주사 치료를 받았는데 계단 오르내릴 때 통증이 확연히 줄었습니다. 친절하고 대기 시간도 짧아요." },
  { id: 3, author: "박○○", date: "2024.09", rating: 5, text: "대상포진 후 신경통으로 고생했는데 치료 후 삶의 질이 많이 좋아졌습니다. 감사합니다." },
  { id: 4, author: "최○○", date: "2024.08", rating: 5, text: "목 디스크로 팔이 저렸는데 몇 차례 치료 후 많이 호전됐어요. 설명도 자세히 해주십니다." },
  { id: 5, author: "정○○", date: "2024.07", rating: 5, text: "어깨 통증으로 방문했는데 초음파 유도 주사 치료 후 통증이 크게 줄었습니다. 전문적인 병원입니다." },
];

export function ReviewSlider() {
  const { ref, className } = useIntersectionFade();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", dragFree: true });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    const stop = () => clearInterval(interval);
    emblaApi.on("pointerDown", stop);
    return () => { clearInterval(interval); emblaApi.off("pointerDown", stop); };
  }, [emblaApi]);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-[#F8FAFB] ${className}`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">⭐</span>
          <h2 className="text-2xl font-bold text-[#1A2733]">네이버 실제 후기</h2>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {reviews.map((r) => (
              <div
                key={r.id}
                className="flex-none w-[280px] md:w-[320px] bg-white rounded-xl border border-[#E2E8EC] p-5 shadow-sm"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-yellow-400 text-sm mb-1">{"★".repeat(r.rating)}</div>
                    <p className="font-semibold text-sm text-[#1A2733]">{r.author}</p>
                  </div>
                  <span className="text-xs text-[#A3B0BB]">{r.date}</span>
                </div>
                <p className="text-sm text-[#5A6B78] leading-relaxed line-clamp-3">{r.text}</p>
                <div className="mt-3 flex justify-end">
                  <span className="text-xs text-[#A3B0BB] flex items-center gap-1">
                    <span className="inline-block w-3 h-3 bg-[#03C75A] rounded-sm" />
                    네이버
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewSlider;
