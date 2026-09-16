import { STEPS } from "@/data/content";

/* 05 이용 방법 */
export function StepsSection() {
  return (
    <section className="dark">
      <p className="eyebrow reveal">이용 방법</p>
      <h2 className="reveal d1">
        신청부터 입금까지
        <br />
        <em>5분이면 끝나요</em>
      </h2>
      <div className="steps" id="steps">
        {STEPS.map((step, i) => (
          <div className={`step reveal d${i + 1}`} key={step.title}>
            <div className="ic">{step.icon}</div>
            <div className="tx">
              <b>
                <i className="no">{i + 1}</i>
                {step.title}
              </b>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
