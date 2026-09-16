import { TERMS_ROWS } from "@/data/content";

/* 03 혜택 */
export function TermsSection() {
  return (
    <section>
      <p className="bridge reveal">그래서 바이나우가 준비했어요</p>
      <h2 className="reveal d1">
        11월 30일까지
        <br />
        <em>선정산 수수료가 0원이에요</em>
      </h2>
      <p className="cap reveal d2">
        곧 다가올 <b>11월 블프</b>까지 자금 걱정 없이 준비하세요!
      </p>
      <div className="terms reveal d2">
        <div className="hl">
          <div className="cap-s">무신사 · 29CM 정산금</div>
          <div className="n">
            7,000만 원<i>까지</i>
          </div>
        </div>
        <div className="list">
          {TERMS_ROWS.map((row) => (
            <div className="r" key={row.k}>
              <div className="k">{row.k}</div>
              <div className="v">{row.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
