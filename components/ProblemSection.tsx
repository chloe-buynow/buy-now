import { POLL_WHY, SURVEY_NOTE } from "@/data/content";
import { PollCard } from "./PollCard";

/* 02 왜 지금 */
export function ProblemSection() {
  return (
    <section className="gray">
      <p className="eyebrow reveal">왜 지금인가요?</p>
      <h2 className="reveal d1">
        지출은 항상 먼저 나가고,
        <br />
        <em>정산은 나중에 들어와요</em>
      </h2>

      {/* 자금 흐름 게이지 : 눈금 트랙 위에서 마커가 '공백' 구간으로 들어온다 */}
      <div className="gauge reveal d2">
        <div className="g-pill">
          <b>자금 공백</b>
          <i>이 사이를 메워야 해요</i>
        </div>
        <div
          className="g-track"
          role="img"
          aria-label="사입·생산 발주 시점에 돈이 나가고 정산일에 돈이 들어옵니다. 그 사이 제작·입고와 판매 구간이 자금 공백입니다."
        >
          <i className="s1" />
          <i className="s2" />
          <i className="s3" />
        </div>
        <div className="g-ticks">
          <div className="t on">
            <i className="dot" />
            <b>사입·생산</b>
            <i>돈이 나가요</i>
          </div>
          <div className="t">
            <i className="dot" />
            <b>제작·입고</b>
            <i>지출은 계속</i>
          </div>
          <div className="t">
            <i className="dot" />
            <b>판매 시작</b>
            <i>입금은 아직</i>
          </div>
          <div className="t on">
            <i className="dot" />
            <b>정산일</b>
            <i>돈이 들어와요</i>
          </div>
        </div>
        <p className="g-cap">이 구간을 버티려고 급하게 다른 자금을 찾게 됩니다</p>
      </div>

      <PollCard poll={POLL_WHY} className="poll reveal d3" />
      <p className="srcnote reveal d3">{SURVEY_NOTE}</p>
    </section>
  );
}
