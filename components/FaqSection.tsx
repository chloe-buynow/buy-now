import { FAQ_ITEMS } from "@/data/content";

/* 07 FAQ — 네이티브 <details> 그대로 */
export function FaqSection() {
  return (
    <section>
      <p className="eyebrow reveal">자주 묻는 질문</p>
      <h2 className="reveal d1">궁금한 점이 있으신가요?</h2>
      <div className="faq reveal d2">
        {FAQ_ITEMS.map((item) => (
          <details key={item.q} open={item.open}>
            <summary>
              <span className="q">Q.</span> {item.q}
            </summary>
            <div className="a">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
