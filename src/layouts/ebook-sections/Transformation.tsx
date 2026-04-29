import { CheckCircle2, ArrowRight } from 'lucide-react';

const scrollToPricing = () => {
  document.getElementById('pricing')?.scrollIntoView({ behavior: "smooth" });
};

const transformations = [
  "Clareza mental para tomar decisões com segurança",
  "Organização emocional que traz paz interior",
  "Reconexão com seu propósito e com quem você realmente é",
  "Hábitos práticos que cabem na sua rotina real",
  "Capacidade de impor limites sem culpa",
  "Tempo e energia recuperados para você mesma"
];

export default function Transformation() {
  return (
    <section id="transformation" className="flex relative overflow-hidden py-8 bg-gradient-to-b from-[#0A0A0A] to-[#1A1008]">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#BB7541]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#A85C42]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="flex justify-self-center relative w-[300px] h-[480px] md:w-[500px] md:h-[580px] order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ">
              <img
                src="/E-BOOK-cover.jpeg"
                alt="Transformação"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute p-4 md:p-6 -bottom-8 -right-5 md:-bottom-15 md:right-8 text-center bg-gradient-to-r from-[#BB7541] to-[#854834] rounded-2xl shadow-2xl">
              <p className="text-white font-bold lg:text-2xl">7 dias</p>
              <p className="text-white/90 text-sm">de garantia</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 md:order-2 lg:justify-start justify-center flex flex-col text-center lg:text-left">
            <p className="text-[#E7C19A] text-sm md:text-base font-medium mb-4 tracking-wider uppercase ">
              Imagine uma vida diferente
            </p>
            
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              E se você pudesse trocar sobrecarga por <span className="text-gradient">clareza</span>, confusão por <span className="text-gradient">direção</span>, e cansaço por <span className="text-gradient">propósito</span>?
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed italic">
               Essa é a vida que começa quando você decide se organizar por dentro e por fora.
            </p>

            {/* Transformation List */}
            <div className="space-y-4 mb-8 ">
              {transformations.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group text-left text-sm md:text-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#BB7541] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={scrollToPricing}
              className="inline-flex justify-center text-center items-center px-3 py-6 lg:px-8 lg:py-6 text-md lg:text-lg text-nowrap gap-2 bg-gradient-to-r from-[#BB7541] to-[#A85C42] text-white uppercase font-semibold rounded-lg  hover:scale-105 animate-pulse-button hover:shadow-xl hover:shadow-[#BB7541]/30 transition-all duration-300" 
            >
              Começar minha jornada agora
              <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 stroke-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
