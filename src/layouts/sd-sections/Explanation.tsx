import { Check, Compass, Lightbulb, Search, Sprout } from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle";

const sessionFocus = [
  "Entender com precisão o momento de vida que você está vivendo.",
  "Identificar os padrões emocionais que mais influenciam suas decisões.",
  "Olhar para seus sonhos e objetivos sem autoengano e sem culpa.",
  "Perceber hábitos e pensamentos que estão bloqueando seus avanços.",
  "Sair com uma visão inicial clara do próximo passo.",
];

const size: string = "size-4.5"

const discoveries = [
  { icon: <Search className={size} />, label: "O que realmente está se repetindo" },
  { icon: <Lightbulb className={size} />, label: "Crenças que ainda direcionam suas escolhas e que a limitam" },
  { icon: <Sprout className={size} />, label: "Hábitos que travam seu crescimento" },
  { icon: <Compass className={size} />, label: "Opções reais de direção para o próximo ciclo" },
];

export default function Explanation() {
  return (
    <main className="relative overflow-hidden bg-[#E8DED4] py-16 md:py-20 reveal">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div className="reveal sd-delay-1">
            <SectionTitle
              // label="Explicação breve da sessão"
              title="O que é o Diagnóstico de Direção de Vida"
              description="Durante a sessão, se eu perceber que a minha mentoria 
              pode realmente te ajudar no seu momento de vida, vou apresentar a possibilidade 
              de continuar esse processo comigo. Mas essa decisão será sempre feita com clareza,
              respeito e alinhamento com seu momento, pois nem todas estão preparadas."
            />

            {/* Divider line */}
            <div className="mt-4 h-0.5 w-full bg-gradient-to-r from-[#C8A96A] to-transparent" />

            {/* Quote block */}
            <div className="mt-6 rounded-2xl border-l-4 border-[#C8A96A] bg-[#F6F2EB]/60 p-5">
              <p className="text-sm italic leading-relaxed text-[#5B4A3E] md:text-base">
                "Não é só desabafar: é sair da conversa com leitura, clareza e uma direção para mudar a sua vida."
              </p>
            </div>

            {/* Discovery mini grid */}
            <div className="mt-8 grid grid-cols-2 grid-rows-1 gap-3 items-center">
              {discoveries.map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-start px-3 py-2.5 gap-2 h-full rounded-xl border border-[#CBBFAF] bg-[#FDFCFB]/70 "
                >
                  <span className="text-[#C8A96A]">{icon}</span>
                  <p className="text-xs md:text-[13px] font-medium leading-tight text-[#5B4A3E]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="reveal sd-delay-2 rounded-3xl border border-[#CBBFAF] bg-[#F6F2EB]/50 p-6 md:p-8">
            <p className="mb-5 text-[17px] font-extrabold uppercase tracking-[0.14em] sd-text-gradient">
              Se existir um próximo passo para você
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
                Uma boa conversa pode interromper meses de confusão e acelerar uma decisão que você já precisava tomar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}