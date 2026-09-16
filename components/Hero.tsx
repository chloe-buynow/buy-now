import { GLITTER } from "@/data/content";
import { SignupLink } from "./SignupLink";

/* 01 히어로 */
export function Hero() {
  return (
    <section className="hero">
      <div className="h-top">
        <p className="eyebrow reveal">무신사 · 29CM 셀러 F/W 프로모션</p>
        <h1 className="reveal d1">
          정산금 <em>7,000만 원</em>까지
          <br />
          선정산 <em>수수료 0원</em>
        </h1>
        <p className="sub reveal d2">
          바이나우가 처음인 무신사 · 29CM 셀러님이라면
          <br />
          계정 연동만 하면 11월 30일까지 자동으로 적용돼요
        </p>
      </div>
      <div className="gift-wrap reveal d3">
        {/* next/image 대신 <img> — 원본과 동일한 속성/렌더 크기를 그대로 유지한다 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="gift"
          src="/2026fw-campaign/giftbox.png"
          width={1254}
          height={774}
          alt="선물상자에서 정산금과 쿠폰이 쏟아지는 그림"
          fetchPriority="high"
        />
        {GLITTER.map((g, i) => (
          <i
            key={i}
            className={g.c}
            style={{
              left: g.l,
              top: g.t,
              width: g.w,
              height: g.h,
              animationDelay: g.d,
              animationDuration: g.u,
            }}
          />
        ))}
      </div>
      <div className="cta-wrap">
        <SignupLink className="btn reveal d3" cta="hero">
          수수료 0원으로 선정산 받기<span className="ar">›</span>
        </SignupLink>
        <p className="btn-cap reveal d3">연동 30초, 입금 5분, 수수료 0원</p>
      </div>
      <div className="chev">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M5 9l7 7 7-7"
            stroke="#8B95A1"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
