import "../styles/ebook.css";
import { Analytics } from "@vercel/analytics/react";
import Hero from "../components/ebook-sections/Hero";
import PainPoints from "../components/ebook-sections/PainPoints";
import Transformation from "../components/ebook-sections/Transformation";
import Benefits from "../components/ebook-sections/Benefits";
import Testimonials from "../components/ebook-sections/Testimonials";
import Author from "../components/ebook-sections/Author";
import Pricing from "../components/ebook-sections/Pricing";
import FinalCTA from "../components/ebook-sections/FinalCTA";
import Seo from "../components/Seo";

export default function EbookPage () {
  return (
    <div className="min-h-screen bg-[rgb(10,10,10)] lato-font">
      <Seo
        title="E-book: Pare de Correr, Comece a Viver | Julaine Guimarães"
        description="E-book pratico com estrategias para organizar a mente, alinhar o tempo e viver com mais clareza e proposito."
      />
      <Analytics />

      <Hero />
      <PainPoints />
      <Transformation />
      <Benefits />
      <Testimonials />
      <Author />
      <Pricing />
      <FinalCTA />
    </div>
  );
};