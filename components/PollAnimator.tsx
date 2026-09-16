"use client";

import { useEffect } from "react";

/**
 * 숫자 카운트업 · 막대 채우기 — 순수 '연출'. 실패해도 최종값은 이미 화면에 있다.
 * 원본 script2.js 와 동일한 관찰 조건/타이밍을 쓴다.
 */
export function PollAnimator() {
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const countUp = (el: HTMLElement) => {
      if (el.dataset.done) return;
      el.dataset.done = "1";
      const to = parseFloat(el.dataset.count!);
      const dec = +(el.dataset.dec || 0);
      const sfx = el.dataset.suffix || "";
      if (reduce) return;
      const t0 = performance.now();
      const dur = 1100;
      const tick = (t: number) => {
        const k = Math.min(1, (t - t0) / dur);
        const e = 1 - Math.pow(1 - k, 3);
        el.textContent = (to * e).toFixed(dec) + sfx;
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (reduce || !("IntersectionObserver" in window)) return;

    const timers: ReturnType<typeof setInterval>[] = [];
    const observers: IntersectionObserver[] = [];

    document.querySelectorAll<HTMLElement>('[data-anim="poll"]').forEach((card) => {
      const fills = card.querySelectorAll<HTMLElement>(".fill");
      fills.forEach((f) => f.classList.add("zero")); // 연출 직전에만 0으로

      // 안전장치: 관찰이 안 걸려도, 카드가 '실제로 화면 안에 있는데' 아직 0이면 되돌린다
      // (시간 기준으로 되돌리면 천천히 스크롤한 사람에겐 이미 다 차 있어서 연출이 안 보인다)
      const restore = () => fills.forEach((f) => f.classList.remove("zero"));
      const inView = () => {
        const r = card.getBoundingClientRect();
        return r.top < innerHeight * 0.62 && r.bottom > 0;
      };
      const t = setInterval(() => {
        if (inView()) {
          clearInterval(t);
          restore();
          card.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
        }
      }, 800);
      timers.push(t);

      const obs = new IntersectionObserver(
        (es, ob) => {
          es.forEach((e) => {
            if (!e.isIntersecting) return;
            clearInterval(t);
            restore();
            // 막대는 위에서부터 순차적으로 차오른다
            [...fills].forEach((f, i) => {
              f.style.transitionDelay = i * 150 + "ms";
              // 광택도 막대와 같은 타이밍으로 밀어준다
              f.style.setProperty("--sheen-delay", i * 150 + 100 + "ms");
            });
            card.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
            ob.disconnect();
          });
        },
        // 카드가 화면 아래쪽 38% 영역을 지나 올라왔을 때 시작 (바닥에 걸치자마자 시작하지 않도록)
        { threshold: 0.2, rootMargin: "0px 0px -38% 0px" },
      );
      obs.observe(card);
      observers.push(obs);
    });

    return () => {
      timers.forEach(clearInterval);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return null;
}
