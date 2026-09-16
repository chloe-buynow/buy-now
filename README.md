# BUYNOW 2026 F/W 캠페인 랜딩

무신사 · 29CM 셀러 대상 "선정산 수수료 0원" 프로모션 랜딩 페이지.
기존 정적 HTML(https://event.buy-now.kr/2026fw-campaign/)을 Next.js App Router로 1:1 포팅했다.

- Next.js 16 (App Router) · React 19 · TypeScript
- `output: "export"` 정적 내보내기 — 서버 런타임 없이 어디든 올릴 수 있다
- 페이지 경로는 원본 URL 그대로 `/2026fw-campaign/` (루트 `/` 는 meta refresh 로 여기로 보낸다)

## 개발

```bash
npm run dev      # http://localhost:3000/2026fw-campaign/
npm run build    # 정적 내보내기 → out/ (out/2026fw-campaign/index.html)
```

`out/` 를 그대로 정적 호스팅에 올리면 된다. `trailingSlash: true` 라 디렉터리 URL(`/2026fw-campaign/`)로 서빙된다.

## 어디를 고치면 되나

| 고칠 것 | 파일 |
|---|---|
| **문구·설문 수치·FAQ·스텝·약관 표** | `data/content.tsx` |
| 분석 도구 ID (GTM · Clarity), CTA 기본 UTM | `lib/analytics.ts` |
| 스타일 (원본 `<style>` 을 그대로 옮긴 것) | `app/globals.css` |
| 메타 태그 · OG · 파비콘 | `app/layout.tsx` |
| 섹션 마크업 | `components/*.tsx` |
| 아이콘 SVG | `components/icons.tsx` |

## 구조

```
app/
  layout.tsx              Pretendard · 메타데이터 · GTM/Clarity
  page.tsx                / → /2026fw-campaign/ (meta refresh)
  globals.css             원본 style.css 그대로
  2026fw-campaign/page.tsx
components/
  TopBar Hero ProblemSection TermsSection LimitSection
  StepsSection ReviewsSection FaqSection FinalCta SiteFooter
  PollCard                설문 카드 (서버)
  PollAnimator            막대 채우기 · 카운트업 ("use client")
  IllReveal               일러스트 등장 연출 ("use client")
  Dock                    하단 고정 CTA ("use client")
  SignupLink              CTA 링크 + UTM 승계 ("use client")
  StopwatchIll icons      일러스트 / 아이콘 SVG
data/content.tsx          모든 카피와 데이터
lib/analytics.ts          GTM · Clarity ID, 가입 URL, 기본 UTM
public/2026fw-campaign/giftbox.png
```

## 알아둘 것

- 등장 애니메이션(`.reveal`, `.d1~.d5`)은 전부 CSS가 담당한다. JS는 연출만 얹고, 설문 최종 수치는 SSR HTML에 이미 들어 있어서 JS가 죽어도 0%로 깜빡이지 않는다.
- CTA 링크는 서버에서 파라미터 없는 기본 href 를 렌더하고, 마운트 후 현재 쿼리스트링의 UTM(및 gclid 등)을 이어붙인다. JS가 없어도 링크는 동작한다.
- **Clarity 스니펫은 원본 라이브가 깨져 있다** (IIFE 인자에 `document` 누락 → `l.createElement is not a function`, 2026-09-16 확인). 이 포팅본은 표준 스니펫으로 고쳐 넣었다. 라이브 HTML도 같은 수정이 필요하다.
- 원본 `script2.js` 의 쿠폰/씰 SVG 빌더(`COUPON`, `SEAL`)는 마크업에 `#couponStage` 가 없어서 실행되지 않는 죽은 코드였다. 포팅하지 않았다.
