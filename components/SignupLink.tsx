"use client";

import { useEffect, useState, type ReactNode } from "react";
import { DEFAULT_UTM, SIGNUP_BASE_URL } from "@/lib/analytics";

type Props = {
  /** utm_content 뒤에 붙는 CTA 위치 (hero / footer / floating) */
  cta: string;
  className?: string;
  children: ReactNode;
};

/**
 * CTA → 가입 페이지 링크.
 * 광고에서 붙어 온 UTM(및 gclid·NaPm 같은 추적 파라미터)을 그대로 넘기고,
 * 파라미터 없이 직접 들어온 경우엔 이 랜딩을 식별하는 기본 UTM을 붙인다.
 * 서버에서는 파라미터 없는 기본 href 를 렌더해서 JS 없이도 링크가 동작하게 하고,
 * 마운트 후에 실제 쿼리스트링을 반영한 href 로 바꾼다.
 */
export function SignupLink({ cta, className, children }: Props) {
  const [href, setHref] = useState(SIGNUP_BASE_URL);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (!q.has("utm_source")) {
      q.set("utm_source", DEFAULT_UTM.utm_source);
      q.set("utm_medium", DEFAULT_UTM.utm_medium);
      q.set("utm_campaign", DEFAULT_UTM.utm_campaign);
    }
    // 광고에서 온 utm_content(예: sublink_promo)는 유지하고 "_hero"처럼 접미로 이어붙인다.
    const adContent = q.get("utm_content");
    q.set("utm_content", adContent ? adContent + "_" + cta : cta);
    setHref(SIGNUP_BASE_URL + "?" + q.toString());
  }, [cta]);

  return (
    <a className={className} href={href} data-signup data-cta={cta}>
      {children}
    </a>
  );
}
