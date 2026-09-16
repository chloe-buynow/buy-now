/** 랜딩에 붙는 서드파티 분석 도구 ID. 원본 index.html <head> 인라인 스크립트에서 옮겨 왔다. */

/** Google Tag Manager (home·www 공용 컨테이너) */
export const GTM_ID = "GTM-5VM4MP9F";

/** Microsoft Clarity (바이나우 기존 프로젝트) */
export const CLARITY_ID = "yizky4stq0";

/**
 * 원본 페이지에는 Meta Pixel · GA4 스니펫이 없다 (GTM 컨테이너 안에서 관리되는 것으로 보인다).
 * 나중에 직접 붙여야 하면 여기에 ID를 추가하고 components/Analytics.tsx 에 <Script> 를 더한다.
 */
export const META_PIXEL_ID: string | null = null;
export const GA4_MEASUREMENT_ID: string | null = null;

/** CTA 링크가 향하는 가입 페이지 */
export const SIGNUP_BASE_URL = "https://home.buy-now.kr/";

/** utm_source 가 없이 직접 들어온 방문자에게 붙이는 기본 UTM */
export const DEFAULT_UTM = {
  utm_source: "event",
  utm_medium: "landing",
  utm_campaign: "2026fw_campaign",
} as const;
