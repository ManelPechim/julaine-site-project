import { Check } from "lucide-react";
import { SectionTitle } from "../SectionTitle";

const sessionFocus = [
  "Compreender o momento de vida que você está vivendo.",
  "Identificar padrões emocionais que influenciam suas decisões.",
  "Olhar para sonhos e objetivos com mais consciência.",
  "Perceber hábitos e pensamentos que podem bloquear seus avanços.",
  "Construir uma visão inicial sobre o próximo passo da sua jornada.",
];

export default function Explanation() {
  return (
    <main className="relative overflow-hidden bg-[#E8DED4] py-16 md:py-20">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="reveal sd-delay-1">
            <SectionTitle
              label="Explicação breve da sessão"
              title="O que é o Diagnóstico de Direção de Vida"
              description="É uma conversa estratégica criada para ajudar você a enxergar seu momento de vida com mais clareza e identificar caminhos possíveis de crescimento. Não é apenas uma conversa: é um espaço de reflexão guiada e direcionamento."
            />
          </div>

          <div className="reveal sd-delay-2 rounded-3xl border border-[#CBBFAF] bg-[#F6F2EB]/50 p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#4F6F63]">Durante a sessão vamos</p>
            <ul className="mt-5 space-y-4">
              {sessionFocus.map((focus) => (
                <li key={focus} className="flex items-start gap-3 text-sm leading-relaxed md:text-base">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#7A9B8E]" />
                  {focus}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};