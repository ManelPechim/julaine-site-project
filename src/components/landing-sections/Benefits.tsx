import { BookOpen, Target, Lightbulb, RefreshCw, Heart, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: BookOpen,
    title: "Exercícios práticos e aplicáveis",
    description: "Nada de teoria vazia. Cada página tem atividades que você pode fazer agora, na sua realidade.",
    gradient: "bg-gradient"
  },
  {
    icon: Target,
    title: "Organize sua mente e seu tempo",
    description: "Aprenda a priorizar o que realmente importa e crie espaço para você mesma sem culpa.",
    gradient: "bg-gradient"
  },
  {
    icon: Lightbulb,
    title: "Clareza emocional profunda",
    description: "Entenda seus padrões, reconheça gatilhos e desenvolva inteligência emocional real.",
    gradient: "bg-gradient"
  },
  {
    icon: RefreshCw,
    title: "Reprogramação de hábitos",
    description: "Saia do automático. Crie rotinas conscientes que sustentam sua energia e bem-estar.",
    gradient: "bg-gradient"
  },
  {
    icon: Heart,
    title: "Reconexão com propósito",
    description: "Redescubra quem você é além dos papéis que desempenha. Volte a sentir que sua vida faz sentido.",
    gradient: "bg-gradient"
  },
  {
    icon: Sparkles,
    title: "Material imprimível",
    description: "Imprima, escreva, reflita. Este é um guia para ser vivido, não apenas lido.",
    gradient: "bg-gradient"
  }
];

export function Benefits() {
  return (
    <section className="py-15 md:py-18 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-2 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#E7C19A] text-sm md:text-base font-medium mb-4 tracking-wider uppercase">
            O que você vai encontrar
          </p>
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
            Um método completo para<br />
            <span className="text-gradient">transformar sua vida de dentro para fora</span>
          </h2>
          <p className="text-gray-400 text-md md:text-xl max-w-3xl mx-auto italic">
            Este não é apenas mais um PDF para baixar e esquecer. É um guia prático para você se reencontrar, reorganizar sua mente, seu tempo e viver com propósito.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8 ">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col p-3 lg:p-8 justify-start items-center lg:items-start lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-center lg:text-left bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-2xl border border-[#E7C19A]/10 hover:border-[#E7C19A]/30 transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Icon with gradient background */}
              <div className={`flex w-11 h-11 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} p-0.5 group-hover:scale-110 transition-transform`}>
                <div className="w-20 h-full bg-[#0F0F0F] rounded-xl flex items-center justify-center">
                  <benefit.icon className="lg:w-8 lg:h-8 text-[#E7C19A]" />
                </div>
              </div>

              <div className='space-y-2'>
                <h3 className="text-white lg:text-xl font-bold">
                  {benefit.title}
                </h3>

                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
