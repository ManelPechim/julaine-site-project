import { Shuffle, Map, Compass, CircleOff, RefreshCcw } from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle";

const iconClass: string = "mt-1 h-4 w-4 shrink-0 text-[#7A9B8E]";
const painPoints = [
  {
    icon: <CircleOff className={`${iconClass}`} />,
    item: "Desejam desenvolver inteligência emocional.",
  },
  {
    icon: <Shuffle className={`${iconClass}`} />,
    item: "Sentem que precisam reorganizar e reprogramar pensamentos e sentimentos.",
  },
  {
    icon: <RefreshCcw className={`${iconClass}`} />,
    item: "Buscam mais clareza sobre seus sonhos e metas.",
  },
  {
    icon: <Map className={`${iconClass}`} />,
    item: "Querem desenvolver hábitos mais alinhados com seus objetivos.",
  },
  {
    icon: <Compass className={`${iconClass}`} />,
    item: "Desejam crescer com mais consciência e direção na vida pessoal e profissional.",
  },
  // {
  //   icon: <HeartHandshake className={`${iconClass}`} />,
  //   item: "Coloca as necessidades de todos à frente das suas e termina o dia com a sensação de que não cuidou de si.",
  // },
];

export default function IdentifingProblem() {
  return (
    <main id="more" className="py-16 md:py-20 reveal">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal sd-delay-1">
          <SectionTitle
            // label="Identificação com o problema"
            title="Para quem essa sessão é indicada?"
            description="Muitas mulheres inteligentes e capazes vivem esse momento: têm potencial, mas estão cansadas de decidir no escuro, carregar tudo sozinhas e repetir padrões que drenam energia. Essa sessão é ideal para mulheres que:"
          />
        </div>

        {/* Divider line */}
        <div className="mt-4 h-0.5 w-full bg-linear-to-r from-[#C8A96A] to-transparent" />

        <ul className="mt-10 grid gap-4 md:grid-cols-2 grid-rows-2">
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