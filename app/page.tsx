import Hero from "@/components/sections/Hero";
import AboutSummary from "@/components/sections/AboutSummary";
import ProductShowcase from "@/components/sections/ProductShowcase";
import QualityAssurance from "@/components/sections/QualityAssurance";
import CTASection from "@/components/sections/CTASection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <ProductShowcase limit={8} />
      <WhyChooseUs />
      <QualityAssurance />
      <CTASection />
      <Testimonials />
    </>
  );
}
