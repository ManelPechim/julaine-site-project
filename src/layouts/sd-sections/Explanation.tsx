import { Check, Compass, Lightbulb, Search, Sprout } from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle";

const sessionFocus = [
  "Compreender o momento de vida que você está vivendo.",
  "Identificar padrões emocionais que influenciam suas decisões.",
  "Olhar para sonhos e objetivos com mais consciência.",
  "Perceber hábitos e pensamentos que podem bloquear seus avanços.",
  "Construir uma visão inicial sobre o próximo passo da sua jornada.",
];

const size: string = "h-4.5 w-4.5"

const discoveries = [
  { icon: <Search className={size} />, label: "Padrões emocionais repetidos" },
  { icon: <Lightbulb className={size} />, label: "Crenças que limitavam decisões" },
  { icon: <Sprout className={size} />, label: "Hábitos que travavam o crescimento" },
  { icon: <Compass className={size} />, label: "Novas possibilidades de direção" },
];

export default function Explanation() {
  return (
    <main className="relative overflow-hidden bg-[#E8DED4] py-16 md:py-20 reveal">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div className="reveal sd-delay-1">
            <SectionTitle
              label="Explicação breve da sessão"
              title="O que é o Diagnóstico de Direção de Vida"
              description="É uma conversa estratégica criada para ajudar você a enxergar seu momento de vida com mais clareza e identificar caminhos possíveis de crescimento."
            />

            {/* Divider line */}
            <div className="mt-4 h-0.5 w-full bg-gradient-to-r from-[#C8A96A] to-transparent" />

            {/* Quote block */}
            <div className="mt-6 rounded-2xl border-l-4 border-[#C8A96A] bg-[#F6F2EB]/60 p-5">
              <p className="text-sm italic leading-relaxed text-[#5B4A3E] md:text-base">
                "Não é apenas uma conversa: é um espaço de reflexão guiada e
                direcionamento."
              </p>
            </div>

            {/* Discovery mini grid */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {discoveries.map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-[#CBBFAF] bg-[#FDFCFB]/70 px-3 py-2.5"
                >
                  <span className="text-[#C8A96A]">{icon}</span>
                  <p className="text-xs font-medium leading-tight text-[#5B4A3E]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="reveal sd-delay-2 rounded-3xl border border-[#CBBFAF] bg-[#F6F2EB]/50 p-6 md:p-8">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-[#4F6F63]">
              Durante a sessão vamos
            </p>
            <ul className="space-y-4">
              {sessionFocus.map((focus, i) => (
                <li
                  key={focus}
                  className={`reveal flex items-start gap-3 text-sm leading-relaxed md:text-base sd-delay-${i + 1}`}
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7A9B8E]/20">
                    <Check className="h-3 w-3 text-[#4F6F63]" />
                  </div>
                  {focus}
                </li>
              ))}
            </ul>

            {/* Bottom note */}
            <div className="mt-8 rounded-xl bg-[#4F6F63]/8 border border-[#4F6F63]/20 p-4 text-center">
              <p className="text-xs leading-relaxed text-[#4F6F63] md:text-sm">
                Às vezes, uma única conversa pode abrir uma nova forma de olhar para si mesma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}