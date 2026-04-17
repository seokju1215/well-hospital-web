import Link from "next/link";
import { prisma } from "@shared/lib/prisma";

export const dynamic = "force-dynamic";

function formatDate(date: Date) {
  return date.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
}

export default async function NoticePage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page ?? "1", 10));
  const pageSize = 10;

  const [notices, total] = await Promise.all([
    prisma.notice.findMany({
      orderBy: { date: "desc" },
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
    }),
    prisma.notice.count(),
  ]);

  const totalPages = Math.ceil(total / pageSize);

  return (
    <>
      <section className="bg-[#1F2E38] py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[#CCD2D7] text-sm font-medium tracking-widest uppercase mb-3">Notice</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">공지사항</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          {notices.length === 0 ? (
            <div className="text-center py-20 text-[#A3B0BB]">
              <p className="text-lg">등록된 공지사항이 없습니다.</p>
            </div>
          ) : (
            <>
              <div className="divide-y divide-[#E2E8EC]">
                {notices.map((n) => (
                  <Link
                    key={n.id}
                    href={`/notice/${n.id}`}
                    className="flex items-center justify-between py-4 hover:bg-[#F8FAFB] px-2 rounded transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {n.isHoliday && (
                        <span className="shrink-0 text-xs font-medium bg-yellow-50 text-yellow-700 border border-yellow-200 px-2.5 py-0.5 rounded-full">
                          휴진
                        </span>
                      )}
                      <span className="text-[#1A2733] font-medium group-hover:text-[#516070] transition-colors truncate">
                        {n.title}
                      </span>
                    </div>
                    <span className="shrink-0 text-sm text-[#A3B0BB] ml-4">{formatDate(n.date)}</span>
                  </Link>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center gap-1 mt-10">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <Link
                      key={p}
                      href={`/notice?page=${p}`}
                      className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                        p === currentPage
                          ? "bg-[#516070] text-white"
                          : "text-[#5A6B78] hover:bg-[#F0F3F5]"
                      }`}
                    >
                      {p}
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
