"use client";

import { useEffect } from "react";

/** 일러스트 : 화면에 들어올 때 한 번만 재생 */
export function IllReveal() {
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ills = document.querySelectorAll<HTMLElement>(".ill");

    if (reduce || !("IntersectionObserver" in window)) {
      ills.forEach((el) => el.classList.add("go"));
      return;
    }

    const obs = new IntersectionObserver(
      (es, ob) => {
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("go");
          ob.unobserve(e.target);
        });
      },
      { threshold: 0.35 },
    );
    ills.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return null;
}
