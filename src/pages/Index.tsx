import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WarningSection from "@/components/WarningSection";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SupportSection from "@/components/SupportSection";
import { SERVICE_NAME, SERVICE_DESCRIPTION, SERVICE_PRICE_CZK, faqItems } from "@/lib/service";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: SERVICE_NAME,
  description: SERVICE_DESCRIPTION,
  serviceType: "Informační průvodce a koordinace překladu",
  provider: {
    "@type": "Person",
    name: "Jan Ptáček",
    identifier: "24398489",
    url: "https://cinasolo.cz",
  },
  offers: {
    "@type": "Offer",
    price: String(SERVICE_PRICE_CZK),
    priceCurrency: "CZK",
    description: "Know-how, koordinace a náklady na překlad agenturou; doprava dle zvolené varianty.",
    url: "https://cinasolo.cz/#balicek",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Průvodce řízením v Číně a koordinace překladu | Čína Solo"
        description={SERVICE_DESCRIPTION}
        schema={[serviceSchema, faqSchema]}
      />
      <Navbar />
      <Hero />
      <WarningSection />
      <HowItWorks />
      <PricingSection />
      <SupportSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
