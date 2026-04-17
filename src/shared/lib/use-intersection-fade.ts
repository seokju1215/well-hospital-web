"use client";

import { useEffect, useRef, useState } from "react";

export function useIntersectionFade(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const className = visible
    ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
    : "opacity-0 translate-y-3";

  return { ref, className };
}
