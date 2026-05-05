import { Shuffle, Map, Compass, HeartHandshake, CircleOff, RefreshCcw } from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle";

const iconClass: string = "mt-1 h-4 w-4 shrink-0 text-[#7A9B8E]";
const painPoints = [
  {
    icon: <CircleOff className={`${iconClass}`} />,
    item: "Sente que poderia avançar muito mais, mas algo sempre freia suas decisões.",
  },
  {
    icon: <Shuffle className={`${iconClass}`} />,
    item: "Tem pensamentos e emoções misturados e não sabe por onde começar.",
  },
  {
    icon: <RefreshCcw className={`${iconClass}`} />,
    item: "Vive ocupada, resolve tudo para todos, mas sente pouco progresso na própria vida.",
  },
  {
    icon: <Map className={`${iconClass}`} />,
    item: "Tem sonhos importantes, mas trava na hora de transformar vontade em plano de ação.",
  },
  {
    icon: <Compass className={`${iconClass}`} />,
    item: "Sente que precisa reorganizar sua vida, hábitos e direção.",
  },
  {
    icon: <HeartHandshake className={`${iconClass}`} />,
    item: "Coloca as necessidades de todos à frente das suas e termina o dia com a sensação de que não cuidou de si.",
  },
];

export default function IdentifingProblem() {
  return (
    <main id="more" className="py-16 md:py-20 reveal">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal sd-delay-1">
          <SectionTitle
            // label="Identificação com o problema"
            title="Talvez o problema não seja falta de capacidade"
            description="Muitas mulheres inteligentes e capazes vivem esse momento: têm potencial, mas estão cansadas de decidir no escuro, carregar tudo sozinhas e repetir padrões que drenam energia."
          />
        </div>

        {/* Divider line */}
        <div className="mt-4 h-0.5 w-full bg-linear-to-r from-[#C8A96A] to-transparent" />

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