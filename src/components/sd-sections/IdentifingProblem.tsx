import { Leaf } from "lucide-react";
import { SectionTitle } from "../SectionTitle";

const painPoints = [
  "Sente que poderia realizar muito mais, mas algo sempre impede.",
  "Tem muitos pensamentos e emoções misturados e não sabe por onde começar.",
  "Vive ocupada, mas sem sentir progresso real.",
  "Tem sonhos importantes, mas sente dificuldade em transformá-los em plano de ação.",
  // "Sente que precisa reorganizar sua vida, hábitos e direção.",
];

export default function IdentifingProblem() {
  return (
    <main id="more" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal sd-delay-1">
          <SectionTitle
            label="Identificação com o problema"
            title="Talvez você esteja vivendo algo assim"
            description="Muitas mulheres inteligentes e capazes vivem esse momento: sabem que têm potencial, mas se sentem presas em padrões emocionais, excesso de responsabilidades ou falta de clareza sobre qual caminho seguir."
          />
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {painPoints.map((item, index) => (
            <li
              key={item}
              className={`reveal rounded-2xl border border-[#CBBFAF] bg-[#E8DED4] p-5 text-sm leading-relaxed md:text-base sd-delay-${(index % 4) + 1}`}
            >
              <span className="flex items-start gap-3">
                <Leaf className="mt-1 h-4 w-4 shrink-0 text-[#7A9B8E]" />
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};