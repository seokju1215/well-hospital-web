import { notFound } from "next/navigation";
import Link from "next/link";
import { treatments } from "@entities/treatment";

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = treatments.find((t) => t.slug === slug);
  if (!treatment) notFound();

  return (
    <>
      <section className="bg-[#1F2E38] py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Link href="/treatment" className="text-[#CCD2D7] text-sm hover:text-white transition-colors mb-4 inline-block">
            ← 진료안내로 돌아가기
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
            <span>{treatment.icon}</span>
            {treatment.name}
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <p className="text-[#5A6B78] text-lg leading-relaxed mb-12">{treatment.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-bold text-[#1A2733] mb-4 pb-2 border-b border-[#E2E8EC]">주요 증상</h2>
              <ul className="space-y-2">
                {treatment.symptoms.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-[#5A6B78] text-sm">
                    <span className="mt-0.5 text-[#516070]">•</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1A2733] mb-4 pb-2 border-b border-[#E2E8EC]">치료 방법</h2>
              <ul className="space-y-2">
                {treatment.methods.map((m) => (
                  <li key={m} className="flex items-start gap-2 text-[#5A6B78] text-sm">
                    <span className="mt-0.5 text-[#516070]">✓</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
