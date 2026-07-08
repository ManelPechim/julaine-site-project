import { CheckCircle2, Shield, Clock, GiftIcon } from 'lucide-react';

// Validated payment provider URLs - only allow trusted domains
const PAYMENT_URLS = {
  eduzz: "https://sun.eduzz.com/7WXQEV3D9A"
} as const;

const ALLOWED_PAYMENT_DOMAINS = ["chk.eduzz.com", "sun.eduzz.com"];

const isValidPaymentUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    return ALLOWED_PAYMENT_DOMAINS.some(domain => parsedUrl.hostname === domain);
  } catch {
    return false;
  }
};  

const features = [
  "Acesso vitalício ao E-Book completo",
  "Guia estruturado em 4 estratégias práticas e aplicáveis",
  "Método baseado em inteligência emocional e neurociência aplicada",
  "Técnicas para organização mental e emocional",
  "Clareza prática para alinhar tempo e propósito",
];

const pricingTiers = [
  {
    name: "Pare de Correr.& Comece a Viver.&",
    subtitle: "No próximo lote, o preço sobe.&Garanta hoje pelo menor valor disponível!",
    price: "19,90",
    originalPrice: "67,90",
    badge: "Lote 1",
    badgeColor: "from-red-500 to-red-600",
    popular: true
  },
  /*
  {
    name: "Lote 2",
    subtitle: "Em breve",
    price: "22,90",
    originalPrice: "39,90",
    badge: "Em breve",
    badgeColor: "from-[#BB7541] to-[#A85C42]",
    className: "",
    popular: false
  },
  {
    name: "Lote 3",
    subtitle: "Vagas finais",
    price: "39,90",
    originalPrice: "47,90",
    badge: "Valor final",
    badgeColor: "from-gray-500 to-gray-600",
    popular: false
  }
  */
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-15 md:py-18 bg-gradient-to-b from-[#1A1008] to-[#0A0A0A] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#BB7541]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#E7C19A] text-sm md:text-base font-medium mb-4 tracking-wider uppercase">
            Investimento em você mesma
          </p>
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comece sua transformação<br />
            <span className="text-gradient">por menos que um cafézinho por dia</span>
          </h2>
          <p className="text-gray-400 italic text-md md:text-xl max-w-3xl mx-auto mb-8">
            Quanto antes começar, menos você investe.
          </p>

          {/* Urgency Banner */}
          <div className="inline-flex items-center px-6 py-3 gap-2 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 text-red-400 rounded-full">
            <span className="font-semibold uppercase text-xs lg:text-lg">Atenção: valor promocional termina em breve!</span>
          </div>
        </div>

        {/* Principal Content */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10 justify-center items-center space-y-6 lg:space-y-0">
          {/* Features List */}
          <div className='flex flex-col gap-2'>
            <div className='p-4 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-l-4 border-r-4 border-[#BB7541] rounded-xl lg:rounded-l-none lg:rounded-r-xl '>
              <h3 className="text-white text-center lg:text-left  text-xl md:text-xl font-bold mb-6 uppercase">
                O Que Você Vai Receber Ao Garantir Seu Acesso:
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 px-5 lg:px-0">
                    <CheckCircle2 className="w-6 h-6 text-[#BB7541] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 lg:text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Exclusive Bonus */}
            <div className="flex justify-center items-center p-4 lg:-6 bg-gradient-to-r from-[#BB7541]/10 to-[#A85C42]/10 border-l-4 border-r-4 border-[#BB7541] rounded-lg lg:rounded-l-none">
              <div className="flex flex-col text-center items-center text-gray-300 leading-relaxed space-y-1">
                <p className="flex gap-2 text-gradient font-bold uppercase text-lg lg:text-xl">
                  <GiftIcon className='lg:w-7 lg:h-7 text-[#BB7541]'/>
                  Bônus Exclusivo
                </p> 
                <span className='italic text-sm md:text-md'>
                  <p>Áudio de reprogramação mental prática.</p>
                  <p>Teste guiado para identificar como você se relaciona com o tempo e a sobrecarga.</p>
                </span>
                
              </div>
            </div>

          </div>

          {/* Pricing Tiers */}
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-center items-center p-7 h-130 mt-4 lg:py-12 lg:px-20 lg:mt-0 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-2xl border-2 transition-all hover:scale-114 duration-300 animate-glow ${
                tier.popular
                  ? 'border-[#E7C19A] shadow-2xl shadow-[#E7C19A]/20 scale-110'
                  : 'border-[#E7C19A]/20 hover:border-[#E7C19A]/40 cursor-not-allowed opacity-50'
              }`}
            >
              {/* Badge */}
              <div className={`absolute px-6 py-3 text-center text-xs lg:text-sm text-nowrap -top-4 left-1/2 -translate-x-1/2  uppercase bg-gradient-to-r ${tier.badgeColor} text-white rounded-full font-bold shadow-lg`}>
                {tier.badge}
              </div>

              {/* CTA text */}
              <div className='animate-glow-white mt-7'> 
                <p className='text-center text-white uppercase font-semibold text-xs text-nowrap'>Restam poucos dias para este valor</p>
              </div>

              {/* Tier Name */}
              <div className="text-center mb-4 mt-4">
                <div className='mb-2 text-2xl italic text-gradient font-extrabold'>
                  <h3>{tier.name.split('&')[0]}</h3>
                  <h3>{tier.name.split('&')[1]}</h3>
                </div>
                <p className="text-white text-sm uppercase font-semibold text-nowrap">{tier.subtitle.split('&')[0]}</p>
                <p className="text-white font-medium text-nowrap text-xs uppercase underline underline-offset-3">{tier.subtitle.split('&')[1]}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                {tier.popular ? (
                  <>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-gray-500 line-through text-xl">R$ {tier.originalPrice}</span>
                    </div>
                    <div className="flex items-start justify-center">
                      <span className="text-[#E7C19A] text-xl mt-2">R$</span>
                      <span className="text-white text-5xl lg:text-6xl font-bold">{tier.price.split(',')[0]}</span>
                      <span className="text-[#E7C19A] text-xl mt-2">,{tier.price.split(',')[1]}</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">Pagamento único</p>
                  </>
                ) : (
                  <div className="py-8">
                    <p className="text-gray-400 text-3xl font-bold">Em breve</p>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  if (tier.popular && isValidPaymentUrl(PAYMENT_URLS.eduzz)) {
                    window.open(PAYMENT_URLS.eduzz, '_blank');
                  } else if (!tier.popular) {
                    return;
                  } else {
                    console.error("Invalid payment URL:", PAYMENT_URLS.eduzz);
                  }
                }}
                disabled={!tier.popular}
                className={`block w-full text-center py-4 px-4 mb-6 rounded-lg font-bold text-md  uppercase hover:scale-105 transition-all duration-300  ${
                  tier.popular
                    ? 'bg-gradient-to-r from-[#BB7541] to-[#A85C42] text-white hover:shadow-xl hover:shadow-[#BB7541]/30 cursor-pointer'
                    : 'bg-white/5 text-gray-500 border border-[#E7C19A]/10'
                }`}
              >
                {tier.popular ? 'Garantir meu E-Book' : 'Em breve'}
              </button>

              {/* Popular indicator */}
              {tier.popular && (
                <div className="flex items-center justify-center gap-2 text-[#E7C19A] text-sm font-semibold mb-4">
                  {/*<Gift className="w-4 h-4" />
                  <span>Melhor custo-benefício</span>*/}
                  <span className='italic text-sm'>Compra na Eduzz</span>
                </div>
              )}
            </div>
          ))}

          {/* Guarantees and Bonuses */}
          <div className="space-y-6 ">
            {/* Guarantee */}
            <div className="p-4 px-8 lg:p-8 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-2xl border border-[#E7C19A]/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#BB7541] to-[#C35136] rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-white lg:text-xl font-bold mb-2">Garantia Incondicional</h4>
                  <p className="text-gray-400 text-sm lg:text-md leading-relaxed">
                    7 dias para testar o material. Se não gostar, devolvemos 100% do seu investimento, sem perguntas.
                  </p>
                </div>
              </div>
            </div>

            {/* Instant Access */}
            <div className="p-4 px-8 lg:p-8 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-2xl border border-[#E7C19A]/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#BB7541] to-[#C35136] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-white lg:text-xl font-bold mb-2">Acesso Imediato</h4>
                  <p className="text-gray-400 text-sm lg:text-md leading-relaxed">
                    Receba o material completo na hora, direto no seu e-mail. Comece sua jornada agora mesmo.
                  </p>
                </div>
              </div>
            </div>

            {/* Next Step */}
            <div className="p-6 bg-gradient-to-r from-[#BB7541]/10 to-[#A85C42]/10 border-l-4 border-[#BB7541] rounded-r-xl ">
              <p className="text-gray-300 text-sm leading-relaxed italic">
                <span className="text-gradient font-semibold">Próximo passo:</span> Após completar o e-book, você terá a oportunidade de se candidatar a uma sessão diagnóstica gratuita comigo.
              </p>
            </div>
          </div>
        </div>

        {/* What's Included 
        <div className="grid md:grid-cols-2 gap-12">
        </div>*/}

      </div>
    </section>
  );
}
