export default function AboutPage() {
  const features = [
    { icon: "🩺", title: "전문의 직접 진료", desc: "마취통증의학과 전문의가 모든 진료를 직접 담당합니다." },
    { icon: "🔬", title: "정밀 진단", desc: "초음파 유도하 정밀 주사치료로 정확하고 안전한 치료를 제공합니다." },
    { icon: "💊", title: "비수술 통증 치료", desc: "수술 없이 신경차단술 등 다양한 비수술 치료로 통증을 개선합니다." },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-[#1F2E38] py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[#CCD2D7] text-sm font-medium tracking-widest uppercase mb-3">About Us</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">병원 소개</h1>
        </div>
      </section>

      {/* Greeting */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#1A2733] mb-5">원장 인사말</h2>
            <p className="text-[#5A6B78] leading-relaxed mb-4">
              안녕하세요, 웰마취통증의학과의원 원장입니다.
            </p>
            <p className="text-[#5A6B78] leading-relaxed mb-4">
              저희 병원은 마취통증의학과 전문의로서 쌓아온 경험과 최신 치료 기술을 바탕으로
              환자분들의 통증을 근본적으로 해결하기 위해 노력합니다.
            </p>
            <p className="text-[#5A6B78] leading-relaxed">
              단순한 증상 완화가 아닌, 정확한 진단과 체계적인 치료로 여러분이
              통증 없는 건강한 일상을 되찾으실 수 있도록 최선을 다하겠습니다.
            </p>
          </div>
          <div className="h-72 bg-[#E5EAED] rounded-2xl flex items-center justify-center text-[#7A8E9B]">
            원장 사진
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#F8FAFB]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1A2733] text-center mb-12">병원 특장점</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl border border-[#E2E8EC] p-8 text-center shadow-sm">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-[#1A2733] mb-3">{f.title}</h3>
                <p className="text-[#5A6B78] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1A2733] text-center mb-12">시설 안내</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["진료실", "대기실", "처치실"].map((name) => (
              <div key={name} className="h-48 bg-[#E5EAED] rounded-xl flex items-center justify-center text-[#7A8E9B] text-sm font-medium">
                {name} 사진
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
