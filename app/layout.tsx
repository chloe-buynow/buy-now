import type { Metadata } from "next";
import { Analytics, GtmNoScript } from "@/components/Analytics";
import "./globals.css";

const PAGE_URL = "https://event.buy-now.kr/2026fw-campaign/";
const DESCRIPTION = "[무신사·29CM 프로모션] 11월 30일까지 무료로 선정산 받을 수 있어요!";

export const metadata: Metadata = {
  title: "무신사 · 29CM 셀러 선정산 수수료 0원 프로모션 | 바이나우",
  description: DESCRIPTION,
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon", sizes: "96x96" }],
  },
  openGraph: {
    type: "website",
    siteName: "바이나우",
    title: "무신사 · 29CM 정산금 7천만원까지 수수료 0원",
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [
      {
        url: "https://event.buy-now.kr/2026fw-campaign/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>
        <GtmNoScript />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
