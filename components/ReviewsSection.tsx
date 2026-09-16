import { POLL_CHANGE, POLL_GOOD, SURVEY_NOTE } from "@/data/content";
import { PollCard } from "./PollCard";

/* 06 설문 */
export function ReviewsSection() {
  return (
    <section className="gray">
      <p className="eyebrow reveal">무신사 · 29CM 셀러 설문조사 결과</p>
      <h2 className="reveal d1">
        먼저 쓰고 있는 셀러님들은
        <br />
        <em>이렇게 답했어요</em>
      </h2>

      <PollCard poll={POLL_GOOD} className="poll reveal d2" />
      <PollCard poll={POLL_CHANGE} className="poll reveal d3" />

      <p className="srcnote reveal d3">{SURVEY_NOTE}</p>
    </section>
  );
}
