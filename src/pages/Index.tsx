import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WarningSection from "@/components/WarningSection";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Dočasné řidičské oprávnění Čína",
  description:
    "Úředně ověřený překlad řidičského průkazu pro získání dočasného povolení k řízení v Číně.",
  offers: {
    "@type": "Offer",
    price: "2500",
    priceCurrency: "CZK",
    availability: "https://schema.org/InStock",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Jak dlouho trvá doručení?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vyhotovení úředního překladu: 1–2 pracovní dny od odeslání skenů. Expresní doručení do ČR: cca 10 kalendářních dnů (letecky). Doprava v rámci Číny: cca 3 dny. Celkem doporučujeme objednávat alespoň 3 týdny před odletem.",
      },
    },
    {
      "@type": "Question",
      name: "Stačí mi v Číně mezinárodní řidičský průkaz (IDP)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bohužel ne. Čínská lidová republika nepodepsala Vídeňskou ani Ženevskou úmluvu o silničním provozu, a proto neuznává mezinárodní řidičské průkazy vydané v ČR (ani jinde v EU).",
      },
    },
    {
      "@type": "Question",
      name: "Je tento postup legální a spolehlivý?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ano. Získáte úředně ověřený překlad od certifikované čínské agentury, který je nezbytným podkladem pro čínskou dopravní policii.",
      },
    },
    {
      "@type": "Question",
      name: "Na jak dlouho povolení platí?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dočasné povolení k řízení se zpravidla vydává na dobu platnosti vašeho víza, maximálně však na 90 dnů.",
      },
    },
    {
      "@type": "Question",
      name: "Kolik stojí vydání samotného průkazu v Číně?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Poplatek, který zaplatíte přímo na přepážce čínské dopravní policii, je pouze symbolický – zpravidla 10 RMB (cca 30–35 Kč).",
      },
    },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Dočasné řidičské oprávnění pro Čínu | CinaSolo.cz"
        description="Získejte úředně ověřený překlad řidičského průkazu pro řízení v Číně. Rychle, spolehlivě a legálně."
        schema={[productSchema, faqSchema]}
      />
      <Navbar />
      <Hero />
      <WarningSection />
      <HowItWorks />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
