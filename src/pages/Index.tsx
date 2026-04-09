import { Analytics } from "@vercel/analytics/react";
import { Hero } from "../components/landing-sections/Hero";
import { PainPoints } from "../components/landing-sections/PainPoints";
import { Transformation } from "../components/landing-sections/Transformation";
import { Benefits } from "../components/landing-sections/Benefits";
import { Testimonials } from "../components/landing-sections/Testimonials";
import { Author } from "../components/landing-sections/Author";
import { Pricing } from "../components/landing-sections/Pricing";
import { FinalCTA } from "../components/landing-sections/FinalCTA";
import { Footer } from "../components/landing-sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[rgb(10,10,10)]">
      <Analytics />
      <Hero />
      <PainPoints />
      <Transformation />
      <Benefits />
      <Testimonials />
      <Author />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default Index;