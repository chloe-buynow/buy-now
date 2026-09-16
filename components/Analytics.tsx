import Script from "next/script";
import { CLARITY_ID, GTM_ID } from "@/lib/analytics";

/** GTM · Clarity 로더. 원본은 <head> 인라인이었고, 여기서는 next/script 의 afterInteractive 로 싣는다. */
export function Analytics() {
  return (
    <>
      <Script id="gtm-loader" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      {/* Script id 는 window 전역과 겹치지 않게 "-loader" 접미를 붙인다 (id="clarity" 면 window.clarity 가 <script> 요소가 되어 스니펫이 깨진다).
          원본 라이브 스니펫은 document 인자가 빠져 있어 Clarity 가 로드되지 않았다(2026-09-16 확인). 여기서는 표준 스니펫으로 고쳐 넣는다. */}
      <Script id="clarity-loader" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window,document,"clarity","script","${CLARITY_ID}");`}
      </Script>
    </>
  );
}

/** GTM noscript iframe — 원본 <body> 최상단에 있던 것 */
export function GtmNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
