import { Dock } from "@/components/Dock";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { IllReveal } from "@/components/IllReveal";
import { LimitSection } from "@/components/LimitSection";
import { PollAnimator } from "@/components/PollAnimator";
import { ProblemSection } from "@/components/ProblemSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { SiteFooter } from "@/components/SiteFooter";
import { StepsSection } from "@/components/StepsSection";
import { TermsSection } from "@/components/TermsSection";
import { TopBar } from "@/components/TopBar";

export default function CampaignPage() {
  return (
    <>
      <div className="page">
        <TopBar />
        <Hero />
        <ProblemSection />
        <TermsSection />
        <LimitSection />
        <StepsSection />
        <ReviewsSection />
        <FaqSection />
        <FinalCta />
        <SiteFooter />
      </div>

      <Dock />

      {/* 등장 애니메이션은 전부 CSS가 담당한다. 아래는 연출만 얹는 클라이언트 동작. */}
      <PollAnimator />
      <IllReveal />
    </>
  );
}
