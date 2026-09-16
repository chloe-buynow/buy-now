import type { Poll } from "@/data/content";

/**
 * 설문 카드. 최종 수치는 SSR HTML 안에 이미 들어있고(0에서 깜빡이지 않는다),
 * PollAnimator 가 화면에 들어올 때만 막대 채우기 · 카운트업 연출을 얹는다.
 */
export function PollCard({
  poll,
  className,
}: {
  poll: Poll;
  className?: string;
}) {
  const heading = (
    <b>
      <span className="q">Q.</span> {poll.question}
    </b>
  );

  return (
    <div className={className} data-anim="poll">
      <div className="poll-hd">
        {poll.ask ? (
          <div>
            <span className="ask">{poll.ask}</span>
            {heading}
          </div>
        ) : (
          heading
        )}
        <span className="tag">{poll.tag}</span>
      </div>
      <div className="bars">
        {poll.bars.map((bar, i) => (
          <div className={i === 0 ? "bar lead" : "bar"} key={bar.label}>
            <div className="top">
              <span>{bar.label}</span>
              <b data-count={bar.count} data-dec={bar.dec} data-suffix="%">
                {bar.text}
              </b>
            </div>
            <div className="track">
              <div
                className="fill"
                style={{ "--w": bar.width } as React.CSSProperties}
              />
            </div>
          </div>
        ))}
      </div>
      {poll.note ? <div className="poll-note">{poll.note}</div> : null}
    </div>
  );
}
