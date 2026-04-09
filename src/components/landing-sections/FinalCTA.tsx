import { ArrowRight } from 'lucide-react';

const scrollToPricing = () => {
  document.getElementById('pricing')?.scrollIntoView({ behavior: "smooth" });
};

export function FinalCTA() {
  return (
    <section className="py-15 md:py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#BB7541]/5 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Image 
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[#BB7541] to-[#A85C42] rounded-full blur-2xl opacity-30"></div>
          <img
            src="/final-cta-img.JPG"
            alt="Comece agora"
            className="relative w-full h-full object-cover rounded-full border-4 border-[#E7C19A]/30"
          />
        </div>*/}

        {/* Headline */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-[#BB7541]/10 border border-[#E7C19A]/30 px-6 py-2 rounded-full mb-6">
            <span className="text-[#E7C19A] font-semibold uppercase text-xs lg:text-lg">Sua transformação começa aqui!</span>
          </div>

          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Você tem duas escolhas agora
          </h2>
        </div>

        {/* Two Paths */}
        <div className="flex lg:grid lg:grid-cols-2 gap-6 mb-12 text-left">
          {/* Path 1 - Stay the Same */}
          <div className="w-full p-4 lg:p-8 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-2xl border border-red-500/20">
            <div className="w-9 h-9 lg:w-12 lg:h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-red-500 text-xl lg:text-2xl">✗</span>
            </div>
            <h3 className="text-white text-sm lg:text-xl font-bold mb-3">Continuar como está</h3>
            <p className="text-gray-400 text-xs lg:text-lg leading-relaxed">
              Seguir no automático, cansada, sobrecarregada e desconectada de si mesma. Esperar que algo mude sozinho.
            </p>
          </div>

          {/* Path 2 - Transform */}
          <div className="w-full p-4 lg:p-8 bg-gradient-to-br from-[#BB7541]/10 to-[#A85C42]/10 rounded-2xl border-2 border-[#E7C19A]">
            <div className="w-9 h-9 lg:w-12 lg:h-12 bg-[#BB7541]/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-[#E7C19A] text-xl lg:text-2xl">✓</span>
            </div>
            <h3 className="text-white text-sm lg:text-xl font-bold mb-3">Dar o primeiro passo</h3>
            <p className="text-gray-300 text-xs lg:text-lg leading-relaxed">
              Investir em clareza, organização emocional e reconexão com seu propósito. Começar a mudança hoje.
            </p>
          </div>
        </div>

        {/* Final Message */}
        <p className="text-gray-300 italic text-lg md:text-xl mb-8 leading-relaxed">
          A diferença entre onde você está agora e onde você quer estar é <span className="text-gradient font-semibold">uma decisão</span>. E essa decisão pode começar agora, por apenas <span className="text-gradient font-semibold">R$ 19,90</span>.
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToPricing}
          className="inline-flex items-center gap-3 px-10 py-5 text-xs font-bold uppercase text-nowrap lg:text-lg animate-pulse-button bg-gradient-to-r from-[#BB7541] to-[#A85C42] text-white hover:scale-105 rounded-lg hover:shadow-2xl hover:shadow-[#BB7541]/40 transition-all duration-300"
        >
          Começar minha jornada agora
          <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 stroke-3" />
        </button>

        <p className="text-gray-500 text-sm mt-6 italic">
          Garantia de 7 dias · Acesso imediato · Pagamento seguro
        </p>
      </div>
    </section>
  );
}
