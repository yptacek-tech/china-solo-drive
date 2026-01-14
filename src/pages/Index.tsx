import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WarningSection from "@/components/WarningSection";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import Testimonial from "@/components/Testimonial";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WarningSection />
      <HowItWorks />
      <PricingSection />
      <Testimonial />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
