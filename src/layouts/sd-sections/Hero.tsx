import { useEffect, useState } from "react";
import ScrollIndicator from "../../components/ui/Scroll-Indicator";
import HeroLarge from "./HeroLarge";
import HeroMedium from "./HeroMedium";
import HeroMobile from "./HeroMobile";

export default function Hero() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width < 768;
  const isMedium = width >= 768 && width < 1024;

  return (
    <header className="relative overflow-hidden lg:min-h-[91.5vh] bg-[#E8DED4] reveal">
      {/* Background Image */}
      <div className='absolute -z-20 top-0 left-0 h-full w-full'>
        <img src="/grain-texture.jpg" className='w-full h-full invisible lg:visible lg:object-cover opacity-30' />
      </div>

      {isMobile ? <HeroMobile /> : isMedium ? <HeroMedium /> : <HeroLarge />}

      {/* Scroll Indicator */}
      <ScrollIndicator
        scrollTo="more"
        className="col-span-2 mb-5 md:-mt-6 lg:mt-3"
      />
    </header >
  );
}