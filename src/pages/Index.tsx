import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import ApproachSection from "@/components/sections/ApproachSection";
import BrandPartnersSection from "@/components/sections/BrandPartnersSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import ConfiguratorPreview from "@/components/sections/ConfiguratorPreview";
import CategorySection from "@/components/sections/CategorySection";
import FeaturedModels from "@/components/sections/FeaturedModels";
import CtaSection from "@/components/sections/CtaSection";

const Index = () => {
  return (
    <Layout>
      <SeoHead
        title="DSI Import — Trattori John Deere, New Holland, Fendt"
        description="DSI Import importatore diretto di trattori agricoli di eccellenza. John Deere, New Holland, Fendt, Case IH. Configuratore online, catalogo 23 modelli."
        canonical="https://dsi-italia.com/"
      />
      <HeroSection />
      <StatsBar />
      <ApproachSection />
      <BrandPartnersSection />
      <AdvantagesSection />
      <ConfiguratorPreview />
      <CategorySection />
      <FeaturedModels />
      <CtaSection />
    </Layout>
  );
};

export default Index;
