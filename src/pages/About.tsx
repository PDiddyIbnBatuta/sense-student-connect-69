import { Header } from "@/components/header";
import { WhoWeAreSection } from "@/components/who-we-are-section";
import { WhySection } from "@/components/why-section";
import { DifferenceSection } from "@/components/difference-section";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 sm:pt-20">
        <WhoWeAreSection />
        <WhySection />
        <DifferenceSection />
      </main>
    </div>
  );
};

export default About;