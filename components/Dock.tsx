"use client";

import { useEffect, useRef } from "react";
import { SignupLink } from "./SignupLink";

/** 하단 고정 CTA — 히어로를 지나면 올라오고, 최종 CTA에서 내려간다 */
export function Dock() {
  const dockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dock = dockRef.current;
    const hero = document.querySelector(".hero");
    const cta = document.getElementById("cta");
    if (!dock || !hero || !cta) return;

    const upd = () => {
      const passed = hero.getBoundingClientRect().bottom < 40;
      const atEnd = cta.getBoundingClientRect().top < innerHeight - 60;
      dock.classList.toggle("show", passed && !atEnd);
    };
    addEventListener("scroll", upd, { passive: true });
    addEventListener("resize", upd);
    upd();

    return () => {
      removeEventListener("scroll", upd);
      removeEventListener("resize", upd);
    };
  }, []);

  return (
    <div className="dock" id="dock" ref={dockRef}>
      <SignupLink cta="floating">
        수수료 0원으로 선정산 받기<span className="ar">›</span>
      </SignupLink>
    </div>
  );
}
