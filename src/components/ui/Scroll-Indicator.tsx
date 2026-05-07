import { ArrowDown } from "lucide-react";

const scrollToPainPoints = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const ScrollIndicator = ({ scrollTo, className, arrowClassName }: { scrollTo: string, className?: string, arrowClassName?: string }) => {
  return (
    <div
      className={
        `flex items-center justify-self-center lg:absolute rounded-full
        z-10 p-[7px] lg:top-[92%] lg:left-1/2 lg:-translate-x-1/2 
        animate-bounce ease-in-out transition-all border-2 cursor-pointer ${className}`}
      onClick={() => scrollToPainPoints(scrollTo)}
    >
      <ArrowDown className={`size-5 lg:size-6 ${arrowClassName}`} />
    </div >
  );
}

export default ScrollIndicator;