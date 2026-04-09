import { Instagram, Mail, Phone } from 'lucide-react';
import Logo from '../ui/Logo';
import InstagramLink from '../ui/InstagramLink';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#E7C19A]/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo Brand */}
          <div>
            <div className="flex items-center justify-center lg:mb-10 w-50 h-24 lg:w-60 lg:h-14">
              <Logo className='object-cover w-50 lg:w-60 h-24 lg:h-14' />
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Desenvolvimento Humano Integral — transformando vidas por meio da inteligência emocional e neurociência aplicada na vida prática.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contato</h3>
            <div className="space-y-4">
              <a
                href="mailto:julainedesenvolvimentohumano@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-[#E7C19A] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm break-all">julainedesenvolvimentohumano@gmail.com</span>
              </a>
              <a
                href="https://wa.me/5543999637029"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#E7C19A] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(43) 99963-7029</span>
              </a>
              <InstagramLink
                className="flex items-center gap-3 text-gray-400 hover:text-[#E7C19A] transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@julainegui</span>
              </InstagramLink>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Informações</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>
                <span className="text-[#E7C19A] font-semibold">Julaine Guimarães</span>
                <br />
                <span className='italic'>Especialista em Desenvolvimento Humano Integral</span>
              </p>
              <p className="leading-relaxed">
                Julaine Guimarães é mentora de mulheres, terapeuta de TFT, escritora, educadora e pesquisadora em neurociência e inteligência emocional aplicada à vida prática.
              </p>
              <p>
                Autora de Inteligência Emocional na Prática e HAS - Hoje, Amanhã e Sempre: O Despertar, já impactou centenas de mulheres por meio de formações, mentorias e treinamentos.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E7C19A]/10 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 Desenvolvimento Humano Integral. Todos os direitos reservados.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-xs leading-relaxed max-w-4xl mx-auto">
              Este produto não substitui acompanhamento profissional de psicólogos ou psiquiatras. Os resultados podem variar de pessoa para pessoa conforme dedicação e aplicação do conteúdo. Este material é uma ferramenta de autoconhecimento e desenvolvimento pessoal.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
