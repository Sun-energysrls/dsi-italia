import { useState, useCallback } from "react";
import Layout from "@/components/Layout";
import IntroSplash from "@/components/IntroSplash";
import HeroSection from "@/components/sections/HeroSection";
import ChiSiamoSection from "@/components/sections/ChiSiamoSection";
import BrandPartnersSection from "@/components/sections/BrandPartnersSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import GammaTrattoriSection from "@/components/sections/GammaTrattoriSection";
import StatsSection from "@/components/sections/StatsSection";
import ProcessoSection from "@/components/sections/ProcessoSection";
import ConfiguratorPreview from "@/components/sections/ConfiguratorPreview";
import ComingSoonSection from "@/components/sections/ComingSoonSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/Footer";
import { useRevealAnimations } from "@/hooks/useRevealAnimations";
import { useAnimatedCounters } from "@/hooks/useAnimatedCounters";

const Index = () => {
  const alreadyPlayed = sessionStorage.getItem("dsi-splash-played") === "1";
  const [showSplash, setShowSplash] = useState(!alreadyPlayed);
  const [splashDone, setSplashDone] = useState(alreadyPlayed);

  useRevealAnimations();
  useAnimatedCounters();

  const handleSplashComplete = useCallback(() => {
    sessionStorage.setItem("dsi-splash-played", "1");
    setShowSplash(false);
    setSplashDone(true);
  }, []);

  return (
    <>
      {showSplash && <IntroSplash onComplete={handleSplashComplete} />}
      <Layout>
        {/* HERO — invariata */}
        <div data-nav-theme="hero">
          <HeroSection videoReady={splashDone} />
        </div>

        {/* S1 — Chi Siamo — CHIARA */}
        <div data-nav-theme="light">
          <ChiSiamoSection />
        </div>

        {/* S2 — Brand Partner — SCURA */}
        <div data-nav-theme="dark">
          <BrandPartnersSection />
        </div>

        {/* S3 — Vantaggi — CHIARA */}
        <div data-nav-theme="light">
          <AdvantagesSection />
        </div>

        {/* S4 — Gamma Trattori — SCURA */}
        <div data-nav-theme="dark">
          <GammaTrattoriSection />
        </div>

        {/* S5 — Stats — ARANCIONE */}
        <div data-nav-theme="dark">
          <StatsSection />
        </div>

        {/* S6 — Processo — SCURA */}
        <div data-nav-theme="dark">
          <ProcessoSection />
        </div>

        {/* S7 — Configuratore Preview — CHIARA */}
        <div data-nav-theme="light">
          <ConfiguratorPreview />
        </div>

        {/* S8 — In Arrivo — CHIARA */}
        <div data-nav-theme="light">
          <ComingSoonSection />
        </div>

        {/* S9 — CTA — SCURA */}
        <div data-nav-theme="dark">
          <CtaSection />
        </div>

        {/* Footer */}
        <Footer />
      </Layout>
    </>
  );
};

export default Index;
