import { FOOTER_BIZ } from "@/data/content";

export function SiteFooter() {
  return (
    <footer>
      <div className="bi">BUYNOW</div>
      <div className="biz">
        {FOOTER_BIZ.map((row, i) => (
          <span key={i}>
            {row.k ? (
              <>
                <b>{row.k}</b> {row.v}
              </>
            ) : (
              row.v
            )}
          </span>
        ))}
      </div>
      <div className="legal">
        <a
          href="https://www.buy-now.kr/terms/3244e67e-6977-4e1e-9918-2040ee3160f3"
          target="_blank"
          rel="noopener"
        >
          서비스 이용약관
        </a>
        <a
          href="https://www.buy-now.kr/terms/privacy"
          target="_blank"
          rel="noopener"
        >
          개인정보 처리방침
        </a>
      </div>
      <div className="copy">Copyright © OSI 2022. All Rights Reserved.</div>
      <div className="disc">
        본 페이지는 무신사 · 29CM 선정산 서비스를 제공하고 있는 바이나우에서
        제작되었습니다. 바이나우 선정산은, 무신사 · 29CM와의 공식 제휴와는 무관한
        점을 참고해 주세요. 선정산 한도·수수료·이용 조건은 가입 후 셀러님의 매출
        데이터에 따라 산출됩니다.
        <br />
      </div>
    </footer>
  );
}
