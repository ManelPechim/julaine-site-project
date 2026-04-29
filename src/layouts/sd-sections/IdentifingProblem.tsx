import { Shuffle, Map, Compass, HeartHandshake, CircleOff, RefreshCcw } from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle";

const iconClass: string = "mt-1 h-4 w-4 shrink-0 text-[#7A9B8E]";
const painPoints = [
  {
    icon: <CircleOff className={`${iconClass}`} />,
    item: "Sente que poderia realizar muito mais, mas algo sempre impede.",
  },
  {
    icon: <Shuffle className={`${iconClass}`} />,
    item: "Tem muitos pensamentos e emoções misturados e não sabe por onde começar.",
  },
  {
    icon: <RefreshCcw className={`${iconClass}`} />,
    item: "Vive ocupada, mas sem sentir progresso real.",
  },
  {
    icon: <Map className={`${iconClass}`} />,
    item: "Tem sonhos importantes, mas sente dificuldade em transformá-los em plano de ação.",
  },
  {
    icon: <Compass className={`${iconClass}`} />,
    item: "Sente que precisa reorganizar sua vida, hábitos e direção.",
  },
  {
    icon: <HeartHandshake className={`${iconClass}`} />,
    item: "Coloca as necessidades de todos à frente das suas e, no fim do dia, sente que não fez nada por si mesma.",
  },
];

export default function IdentifingProblem() {
  return (
    <main id="more" className="py-16 md:py-20 reveal">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal sd-delay-1">
          <SectionTitle
            label="Identificação com o problema"
            title="Talvez você esteja vivendo algo assim"
            description="Muitas mulheres inteligentes e capazes vivem esse momento: sabem que têm potencial, mas se sentem presas em padrões emocionais, excesso de responsabilidades ou falta de clareza sobre qual caminho seguir."
          />
        </div>

        {/* Divider line */}
        <div className="mt-4 h-0.5 w-full bg-gradient-to-r from-[#C8A96A] to-transparent" />

        <ul className="mt-10 grid gap-4 md:grid-cols-2 justify">
          {painPoints.map(({ icon, item }) => (
            <li
              key={item}
              className={`reveal rounded-2xl border border-[#CBBFAF] bg-[#E8DED4] p-5 text-sm leading-relaxed md:text-base`}
            >
              <span className="flex gap-3">
                {icon}
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};