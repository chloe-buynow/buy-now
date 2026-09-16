import type { Metadata } from "next";

const TARGET = "/2026fw-campaign/";

/**
 * 루트는 캠페인 페이지로 보낸다.
 * output: "export" 에서는 redirect() 도 next.config 의 redirects 도 쓸 수 없어서
 * meta refresh + 링크만으로 정적 HTML 안에서 이동시킨다.
 * (meta http-equiv 는 Metadata API 가 다루지 않아 React 19 의 head 호이스팅으로 직접 렌더한다.)
 */
export const metadata: Metadata = {
  title: "바이나우 무신사 · 29CM 프로모션",
  robots: { index: false, follow: false },
};

export default function RootRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${TARGET}`} />
      <main style={{ padding: 24, fontFamily: "Pretendard, sans-serif" }}>
        <p>
          <a href={TARGET}>
            무신사 · 29CM 선정산 수수료 0원 프로모션 페이지로 이동
          </a>
        </p>
      </main>
    </>
  );
}
