import Link from "next/link";
import { treatments } from "@entities/treatment";

const hours = [
  { day: "월요일", time: "09:00 – 18:00" },
  { day: "화요일", time: "09:00 – 18:00" },
  { day: "수요일", time: "09:00 – 18:00" },
  { day: "목요일", time: "09:00 – 18:00" },
  { day: "금요일", time: "09:00 – 18:00" },
  { day: "토요일", time: "09:00 – 13:00" },
  { day: "일요일 · 공휴일", time: "휴진" },
];

export default function TreatmentPage() {
  return (
    <>
      <section className="bg-[#1F2E38] py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[#CCD2D7] text-sm font-medium tracking-widest uppercase mb-3">Treatment</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">진료 안내</h1>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 bg-[#F0F3F5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-xl font-bold text-[#1A2733] mb-6">진료 시간</h2>
          <div className="bg-white rounded-xl border border-[#E2E8EC] overflow-hidden max-w-lg">
            {hours.map((h, i) => (
              <div key={h.day} className={`flex justify-between px-6 py-3 text-sm ${i % 2 === 0 ? "" : "bg-[#F8FAFB]"} ${h.time === "휴진" ? "text-[#A3B0BB]" : "text-[#1A2733]"}`}>
                <span className="font-medium">{h.day}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment list */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1A2733] mb-10">진료 과목</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {treatments.map((t) => (
              <Link
                key={t.slug}
                href={`/treatment/${t.slug}`}
                className="group flex gap-5 p-6 rounded-xl border border-[#E2E8EC] hover:border-[#CCD2D7] hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 shrink-0 bg-[#F0F3F5] rounded-xl flex items-center justify-center text-2xl group-hover:bg-[#E5EAED] transition-colors">
                  {t.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#1A2733] mb-1">{t.name}</h3>
                  <p className="text-sm text-[#5A6B78] leading-relaxed">{t.summary}</p>
                  <span className="mt-2 inline-block text-xs text-[#516070] font-medium">자세히 보기 →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
