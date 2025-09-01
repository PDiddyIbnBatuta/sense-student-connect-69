import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { WhySection } from "@/components/why-section";
import { DifferenceSection } from "@/components/difference-section";
import { AudienceSection } from "@/components/audience-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <WhySection />
        <DifferenceSection />
        <AudienceSection />
      </main>
    </div>
  );
};

export default Index;
