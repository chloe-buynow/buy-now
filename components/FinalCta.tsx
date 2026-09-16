import { SignupLink } from "./SignupLink";

/* 08 최종 CTA */
export function FinalCta() {
  return (
    <section className="final" id="cta">
      <h2 className="reveal">
        일찍 시작할수록
        <br />
        수수료 0원 혜택 기간이 길어져요
      </h2>
      <p className="cap reveal d1">2026년 11월 30일까지</p>
      <SignupLink className="btn reveal d2" cta="footer">
        수수료 0원으로 선정산 받기
      </SignupLink>
      <p className="btn-cap reveal d2">
        무신사 또는 29CM 계정 연동 한 번이면 돼요
      </p>
    </section>
  );
}
