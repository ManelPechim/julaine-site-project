import { CheckCircle2, Instagram } from 'lucide-react';
import InstagramLink from '../../components/ui/InstagramLink';

const credentials = [
  "Especialista em Desenvolvimento Humano Integral",
  "Mentora de Inteligência Emocional",
  "Neurociência Aplicada ao Comportamento",
  "+ de 300 mulheres transformadas"
];

export default function Author() {
  return (
    <section className="py-15 md:py-20 bg-[#0A0A0A] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#E7C19A] text-sm md:text-base font-medium mb-4 tracking-wider uppercase">
            Quem está por trás deste método
          </p>
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
            Conheça <span className="text-gradient">Julaine Guimarães</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-float">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
              <img
                src="/author-img.JPG"
                alt="Julaine Guimarães"
                className="w-full h-[450px] lg:h-[600px] object-cover"
              />
              {/* Efeito de brilho no canto superior */}
              <div className='absolute -top-10 -right-10 w-32 h-32 bg-[#E7C19A]/20 rounded-full blur-2xl pointer-events-none'></div>
              {/* Overlay de sombra sobre a imagem */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-br from-[#1A1A1A]/95 to-[#0F0F0F]/95 backdrop-blur-sm p-6 rounded-xl border border-[#E7C19A]/20">
              <div className="flex justify-around text-center">
                <div>
                  <p className="text-gradient font-bold text-2xl md:text-3xl">300+</p>
                  <p className="text-gray-400 text-xs md:text-sm">Vidas transformadas</p>
                </div>
                <div className="w-px bg-[#E7C19A]/20"></div>
                <div>
                  <p className="text-gradient font-bold text-2xl md:text-3xl">10+</p>
                  <p className="text-gray-400 text-xs md:text-sm">Anos de experiência</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className='flex flex-col'>
            <p className="text-gray-300 lg:text-lg text-center px-4 lg:px-0 items-center lg:text-left leading-relaxed mb-6">
              Ajudo mulheres a reorganizarem mente, emoções e vida prática por meio da <span className="italic text-gradient font-semibold">inteligência emocional</span>, <span className="italic text-gradient font-semibold">neurociência aplicada</span> e <span className="italic text-gradient font-semibold">autoconhecimento profundo</span>.
            </p>

            <p className="text-gray-300 text-base text-center px-4 lg:px-0 lg:text-left lg:text-lg leading-relaxed mb-8">
              O trabalho começa em compreender padrões emocionais e decisões, gerando mudanças reais, sustentáveis e alinhadas com propósito e prosperidade.
            </p>

            {/* Credentials */}
            <div className="space-y-3 mb-8">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start  gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#BB7541] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300  text-sm text-left px-4 md:px-0  lg:text-lg">{credential}</p>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-[#BB7541]/10 to-[#A85C42]/10 border-l-4 border-[#BB7541] rounded-r-xl p-6 mb-8">
              <p className="text-gray-300 text-sm lg:text-lg leading-relaxed italic">
                "Minha missão é ajudar mulheres a reprogramarem mente, emoções e vida prática por meio da inteligência emocional e da neurociência aplicada, para que prosperem com clareza, equilíbrio e propósito"
              </p>
            </div>

            {/* Social Links */}
            <div className="">
              <InstagramLink 
                className="flex flex-col w-full py-4 text-sm lg:text-lg items-center justify-center animate-pulse-button bg-gradient-to-r from-[#BB7541] to-[#A85C42] text-white rounded-lg font-semibold hover:scale-105 hover:shadow-lg hover:shadow-[#BB7541]/30 transition-all duration-300"
              >
                <span className='flex uppercase gap-1 items-center'>
                  <span>Conecte-se comigo no Instagram</span>
                  <Instagram className="w-4 h-4 lg:w-5 lg:h-5" />
                </span>
                
                <span>@julainegui</span>
              </InstagramLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
