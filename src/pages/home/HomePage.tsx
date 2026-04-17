import Link from "next/link";
import { ReviewSlider } from "./ReviewSlider";
import { treatments } from "@entities/treatment";
import { doctors } from "@entities/doctor";

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#1F2E38] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#121E26] via-[#1F2E38] to-[#2D3D4A]" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-[#CCD2D7] text-sm font-medium tracking-widest uppercase mb-4">
            마취통증의학과 전문의
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            웰마취통증의학과의원
          </h1>
          <p className="text-lg md:text-xl text-[#A3B0BB] mb-10 leading-relaxed">
            정확한 진단, 체계적인 치료로<br className="hidden sm:block" />
            통증 없는 일상을 되찾아 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/treatment"
              className="px-8 py-3 bg-[#516070] text-white font-medium rounded-lg hover:bg-[#3A4D5C] transition-colors"
            >
              진료안내 보기
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-[#CCD2D7] text-[#CCD2D7] font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              오시는 길
            </Link>
          </div>
        </div>
      </section>

      {/* Naver Review Slider (Client Component) */}
      <ReviewSlider />

      {/* Treatment Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2733] mb-3">진료 안내</h2>
            <p className="text-[#5A6B78]">전문의가 직접 진단하고 치료합니다.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {treatments.map((t) => (
              <Link
                key={t.slug}
                href={`/treatment/${t.slug}`}
                className="group p-6 rounded-xl border border-[#E2E8EC] hover:border-[#CCD2D7] hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-[#F0F3F5] rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-[#E5EAED] transition-colors">
                  {t.icon}
                </div>
                <h3 className="font-semibold text-[#1A2733] mb-2">{t.name}</h3>
                <p className="text-sm text-[#5A6B78] leading-relaxed line-clamp-2">{t.summary}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/treatment" className="text-[#516070] font-medium hover:underline text-sm">
              진료안내 전체 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-20 bg-[#F0F3F5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#516070] font-medium text-sm mb-3 tracking-wide uppercase">About Us</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A2733] mb-5 leading-tight">
                환자 중심의<br />통증 전문 클리닉
              </h2>
              <p className="text-[#5A6B78] leading-relaxed mb-6">
                웰마취통증의학과의원은 마취통증의학과 전문의가 직접 진료하는 통증 전문 클리닉입니다.
                허리·목 통증, 관절 통증, 신경통 등 다양한 통증 질환을 비수술적 방법으로 치료합니다.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-2.5 bg-[#516070] text-white font-medium rounded-lg hover:bg-[#3A4D5C] transition-colors text-sm"
              >
                병원 소개 보기
              </Link>
            </div>
            <div className="relative h-64 md:h-80 bg-[#CCD2D7] rounded-2xl overflow-hidden flex items-center justify-center">
              <p className="text-[#516070] font-medium">병원 사진</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2733] mb-3">의료진 소개</h2>
            <p className="text-[#5A6B78]">전문의가 직접 진료합니다.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {doctors.map((d) => (
              <div key={d.id} className="w-full max-w-sm bg-white rounded-xl border border-[#E2E8EC] p-6 text-center">
                <div className="w-24 h-24 bg-[#E5EAED] rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  👨‍⚕️
                </div>
                <h3 className="font-bold text-lg text-[#1A2733]">{d.name}</h3>
                <p className="text-[#516070] text-sm font-medium mb-3">{d.title}</p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {d.specialties.map((s) => (
                    <span key={s} className="text-xs bg-[#F0F3F5] text-[#516070] px-2.5 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/doctors" className="text-[#516070] font-medium hover:underline text-sm">
              의료진 전체 보기 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
