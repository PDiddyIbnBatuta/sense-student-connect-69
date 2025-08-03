import { Header } from "@/components/header";
import { AboutSection } from "@/components/about-section";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <AboutSection />
      </main>
    </div>
  );
};

export default About;