"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/about", label: "병원소개" },
  { href: "/treatment", label: "진료안내" },
  { href: "/doctors", label: "의료진" },
  { href: "/notice", label: "공지사항" },
  { href: "/contact", label: "오시는길" },
];

const INDICATOR_PADDING = 4;

export function Header() {
  const pathname = usePathname();
  const currentPath = pathname ?? "";
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

  const activeIndex = navLinks.findIndex(({ href }) =>
    href === "/" ? currentPath === "/" : currentPath.startsWith(href)
  );

  useEffect(() => {
    const updateIndicator = () => {
      const el = textRefs.current[activeIndex];
      const nav = navRef.current;
      if (!el || !nav) return;
      const elRect = el.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      setIndicator({
        left: elRect.left - navRect.left - INDICATOR_PADDING,
        width: elRect.width + INDICATOR_PADDING * 2,
        ready: true,
      });
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeIndex]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E2E8EC]">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-[#1F2E38] font-bold text-lg tracking-tight shrink-0">
          웰마취통증의학과의원
        </Link>

        {/* Desktop nav */}
        <nav ref={navRef} className="hidden md:flex items-center gap-1 relative">
          {navLinks.map(({ href, label }, i) => {
            const active = i === activeIndex;
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  active
                    ? "text-[#1F2E38] font-semibold"
                    : "text-[#5A6B78] hover:text-[#516070] hover:bg-[#F0F3F5]"
                }`}
              >
                <span
                  ref={(el) => {
                    textRefs.current[i] = el;
                  }}
                >
                  {label}
                </span>
              </Link>
            );
          })}
          <span
            className="absolute bottom-0 h-[2px] rounded-full bg-[#516070] transition-[transform,width,opacity] duration-300 ease-out"
            style={{
              width: indicator.width,
              transform: `translateX(${indicator.left}px)`,
              opacity: indicator.ready ? 1 : 0,
            }}
          />
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#516070]"
          onClick={() => setOpen((v) => !v)}
          aria-label="메뉴 열기"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E2E8EC] px-6 py-3 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => {
            const active = href === "/" ? currentPath === "/" : currentPath.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  active ? "text-[#516070] bg-[#F0F3F5]" : "text-[#5A6B78]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
