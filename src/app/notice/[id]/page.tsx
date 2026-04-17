import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@shared/lib/prisma";

function formatDate(date: Date) {
  return date.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
}

export default async function NoticeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const notice = await prisma.notice.findUnique({ where: { id: parseInt(id, 10) } });
  if (!notice) notFound();

  return (
    <>
      <section className="bg-[#1F2E38] py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Link href="/notice" className="text-[#CCD2D7] text-sm hover:text-white transition-colors mb-4 inline-block">
            ← 공지사항 목록
          </Link>
          <div className="flex items-center gap-3 flex-wrap">
            {notice.isHoliday && (
              <span className="text-xs font-medium bg-yellow-400 text-yellow-900 px-2.5 py-0.5 rounded-full">
                휴진
              </span>
            )}
            <h1 className="text-2xl md:text-3xl font-bold text-white">{notice.title}</h1>
          </div>
          <p className="text-[#A3B0BB] text-sm mt-3">{formatDate(notice.date)}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="prose prose-neutral max-w-none text-[#5A6B78] leading-relaxed whitespace-pre-wrap">
            {notice.content}
          </div>
        </div>
      </section>
    </>
  );
}
