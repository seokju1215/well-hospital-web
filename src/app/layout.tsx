import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@widgets/header";
import { Footer } from "@widgets/footer";

export const metadata: Metadata = {
  title: "웰마취통증의학과의원",
  description: "마취통증의학과 전문의의 정확한 진단과 치료로 통증에서 해방되세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
