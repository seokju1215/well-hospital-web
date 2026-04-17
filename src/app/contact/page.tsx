const hours = [
  { day: "월 – 금", time: "09:00 – 18:00" },
  { day: "토요일", time: "09:00 – 13:00" },
  { day: "일 · 공휴일", time: "휴진" },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#1F2E38] py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[#CCD2D7] text-sm font-medium tracking-widest uppercase mb-3">Contact</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">오시는 길</h1>
        </div>
      </section>

      {/* Map */}
      <div className="w-full h-[400px] bg-[#E5EAED] flex items-center justify-center text-[#7A8E9B]">
        <p className="text-sm">지도가 표시될 영역입니다 (주소 확정 후 카카오/네이버 지도 임베드)</p>
      </div>

      {/* Info */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-bold text-[#1A2733] mb-6">기본 정보</h2>
            <ul className="space-y-4 text-[#5A6B78]">
              <li className="flex gap-3">
                <span className="text-xl mt-0.5">📍</span>
                <div>
                  <p className="font-medium text-[#1A2733] mb-0.5">주소</p>
                  <p className="text-sm">주소를 입력해 주세요</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-xl mt-0.5">📞</span>
                <div>
                  <p className="font-medium text-[#1A2733] mb-0.5">전화</p>
                  <a href="tel:000-0000-0000" className="text-sm text-[#516070] hover:underline">
                    000-0000-0000
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-xl mt-0.5">🕐</span>
                <div>
                  <p className="font-medium text-[#1A2733] mb-2">진료 시간</p>
                  <div className="space-y-1">
                    {hours.map((h) => (
                      <div key={h.day} className={`flex gap-4 text-sm ${h.time === "휴진" ? "text-[#A3B0BB]" : ""}`}>
                        <span className="w-20 shrink-0">{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1A2733] mb-6">교통 안내</h2>
            <div className="space-y-5 text-[#5A6B78] text-sm">
              <div>
                <p className="font-medium text-[#1A2733] mb-1.5">🚇 지하철</p>
                <p className="leading-relaxed">지하철 정보를 입력해 주세요</p>
              </div>
              <div>
                <p className="font-medium text-[#1A2733] mb-1.5">🚌 버스</p>
                <p className="leading-relaxed">버스 정보를 입력해 주세요</p>
              </div>
              <div>
                <p className="font-medium text-[#1A2733] mb-1.5">🚗 주차</p>
                <p className="leading-relaxed">주차 정보를 입력해 주세요</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
