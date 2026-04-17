import { doctors } from "@entities/doctor";

export default function DoctorsPage() {
  return (
    <>
      <section className="bg-[#1F2E38] py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[#CCD2D7] text-sm font-medium tracking-widest uppercase mb-3">Medical Team</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">의료진 소개</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((d) => (
              <div key={d.id} className="bg-white rounded-xl border border-[#E2E8EC] overflow-hidden shadow-sm">
                <div className="h-56 bg-[#E5EAED] flex items-center justify-center text-5xl">
                  👨‍⚕️
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-[#1A2733]">{d.name}</h2>
                  <p className="text-[#516070] font-medium text-sm mb-4">{d.title}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {d.specialties.map((s) => (
                      <span key={s} className="text-xs bg-[#F0F3F5] text-[#516070] px-2.5 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-1.5">
                    {d.career.map((c) => (
                      <li key={c} className="text-sm text-[#5A6B78] flex items-start gap-2">
                        <span className="text-[#A3B0BB] mt-0.5">•</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
