import { LIMIT_CARDS } from "@/data/content";
import { StopwatchIll } from "./StopwatchIll";

/* 04 한도 */
export function LimitSection() {
  return (
    <section className="tint">
      <p className="eyebrow reveal">선정산 한도</p>
      <h2 className="reveal d1">
        계정을 연동하면
        <br />
        <em>30초 안에 확인돼요</em>
      </h2>
      <StopwatchIll />
      <div className="calc reveal d2">
        <span>구매확정 매출 100%</span>
        <em>+</em>
        <span>
          미확정 매출 일부<u>결제완료 ~ 배송완료</u>
        </span>
      </div>
      <div className="cards" id="limitCards">
        {LIMIT_CARDS.map((card, i) => (
          <div className={`card reveal d${i + 1}`} key={card.title}>
            <div className="ic">{card.icon}</div>
            <div>
              <b>{card.title}</b>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
