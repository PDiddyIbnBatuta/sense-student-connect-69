import { Header } from "@/components/header";
import { ContactSection } from "@/components/contact-section";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <ContactSection />
      </main>
    </div>
  );
};

export default Contact;