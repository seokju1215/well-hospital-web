export function Footer() {
  return (
    <footer className="bg-[#121E26] text-white mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-bold text-base mb-3">웰마취통증의학과의원</p>
            <p className="text-[#A3B0BB] leading-relaxed">
              전문적인 통증 치료로<br />
              더 나은 일상을 함께합니다.
            </p>
          </div>
          <div>
            <p className="font-semibold mb-3 text-[#CCD2D7]">진료 안내</p>
            <ul className="text-[#A3B0BB] space-y-1 leading-relaxed">
              <li>월 – 금 &nbsp;09:00 – 18:00</li>
              <li>토 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00 – 13:00</li>
              <li>일 · 공휴일 &nbsp;휴진</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-3 text-[#CCD2D7]">연락처</p>
            <ul className="text-[#A3B0BB] space-y-1">
              <li>주소: 주소를 입력해주세요</li>
              <li>
                전화:{" "}
                <a href="tel:000-0000-0000" className="hover:text-white transition-colors">
                  000-0000-0000
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#2D3D4A] mt-8 pt-6 text-[#5A6B78] text-xs">
          © {new Date().getFullYear()} 웰마취통증의학과의원. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
