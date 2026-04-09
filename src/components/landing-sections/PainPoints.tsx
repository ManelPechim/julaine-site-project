import { Brain, Clock, Heart, AlertCircle, Weight,  BriefcaseBusiness} from 'lucide-react';

const pains = [
  {
    icon: Brain,
    title: "Confusão mental constante",
    description: "Você acorda já cansada. Sente que sua mente não para, mas nada sai do lugar. É como viver em névoa.",
    color: "#BB7541"
  },
  {
    icon: Clock,
    title: "Não tem tempo",
    description: "Não consegue organizar suas prioridades.",
    color: "#BB7541"
  },
  {
    icon: BriefcaseBusiness,
    title: "Faz tudo",
    description: "Não consegue delegar, terceirizar ou deletar tarefas…",
    color: "#A85C42"
  },
  {
    icon: Weight,
    title: "Sobrecarga sem fim",
    description: "Trabalho, casa, pessoas... Você cuida de tudo e de todos, mas quem cuida de você? O tempo para si mesma simplesmente não existe.",
    color: "#A85C42"
  },
  {
    icon: Heart,
    title: "Desconexão com propósito",
    description: "A vida virou automático. Você cumpre tarefas, mas perdeu o sentido. Já não sabe mais o que realmente quer.",
    color: "#C35136"
  },
  {
    icon: AlertCircle,
    title: "Dificuldade de impor limites",
    description: "Dizer 'não' parece impossível. Você se doa além do limite e depois se sente esgotada, culpada e invisível.",
    color: "#C35136"
  }
];

export function PainPoints() {
  return (
    <section id='pain-points' className="shadow-[0px_-20px_50px_#0A0A0A] py-20 md:py-32 bg-[#0A0A0A] relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#E7C19A] text-sm md:text-base font-medium mb-4 tracking-wider uppercase">
            Talvez você esteja se sentindo assim
          </p>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Você sente essas dores,<br />
            <span className="text-gradient">você não está sozinha</span>
          </h2>
          <p className="text-gray-400 italic text-lg md:text-xl max-w-3xl mx-auto">
            Milhares de mulheres vivem assim todos os dias. Mas existe um caminho diferente.
          </p>
        </div>

        {/* Pain Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 mb-4 lg:mb-10 text-center lg:text-left">
          {pains.map((pain, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] p-2 py-3 lg:p-8 rounded-2xl border border-[#E7C19A]/10 hover:border-[#E7C19A]/30 transition-all duration-300 group"
            >
              <div 
                className="w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center lg:justify-self-start justify-self-center mb-5 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${pain.color}20` }}
              >
                <pain.icon className="lg:w-7 lg:h-7" style={{ color: pain.color }} />
              </div>
              
              <h3 className="text-white text-sm md:text-2xl font-bold mb-3">
                {pain.title}
              </h3>
              
              <p className="text-gray-400 text-xs md:text-base leading-relaxed">
                {pain.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="bg-gradient-to-r from-[#BB7541]/10 to-[#A85C42]/10 border border-[#E7C19A]/20 rounded-2xl p-8 md:p-10 text-center">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4">
            <span className="text-gradient font-semibold">A verdade é:</span> você não precisa de mais informação.
          </p>
          <p className="text-gray-400 text-sm md:text-lg italic">
            Você precisa de algo <span className="text-white font-semibold">simples, prático,</span> que <span className='text-white font-semibold'>não tome seu tempo</span>, que possa aplicar seu dia-a-dia, <span className="text-white font-semibold">organização interna</span> e um <span className="text-white font-semibold">método</span> que funcione na sua <span className="text-white font-semibold">realidade</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
