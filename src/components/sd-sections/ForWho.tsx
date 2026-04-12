import { Check, X } from "lucide-react";
import { SectionTitle } from "../SectionTitle";
import WhatsAppButton from "../WhatsAppButton";

const idealFor = [
  "Desejam desenvolver inteligência emocional.",
  "Sentem que precisam reorganizar pensamentos e sentimentos.",
  "Buscam mais clareza sobre sonhos e metas.",
  "Querem desenvolver hábitos mais alinhados com seus objetivos.",
  "Desejam crescer com mais consciência e direção.",
];

const notIdealFor = [
  "Busca soluções rápidas ou mágicas.",
  "Não deseja olhar para si mesma.",
  "Não está aberta a refletir sobre os próprios padrões.",
];

export default function ForWho() {
  return (
    <main className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 space-y-4">
        <SectionTitle
          label="Decida seu futuro"
          center
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="reveal sd-delay-1 rounded-3xl border border-[#CBBFAF] bg-[#F6F2EB] p-7">
            <h3 className="sd-title-font text-2xl text-[#4F6F63]">Para quem essa sessão é indicada</h3>
            <ul className="mt-5 space-y-3">
              {idealFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed md:text-base">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#7A9B8E]" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="reveal sd-delay-2 rounded-3xl border border-[#CBBFAF] bg-[#E8DED4]/50 p-7">
            <h3 className="sd-title-font text-2xl text-[#4F6F63]">Para quem essa sessão não é indicada</h3>
            <ul className="mt-5 space-y-3">
              {notIdealFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed md:text-base">
                  <X className="mt-1 h-4 w-4 shrink-0 text-[#8B0000]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl border border-[#8B0000]/20 bg-[#E8DED4] p-4 text-sm leading-relaxed md:text-base">
              O crescimento começa quando estamos dispostas a nos observar com mais consciência.
            </p>
          </article>
        </div>
        <div className="flex justify-center items-center reveal mt-10 sd-delay-2 text-center">
          <WhatsAppButton
            label="Quero direção"
            className="flex w-full max-w-[18rem] items-center justify-center"
          />
        </div>
      </div>
    </main>
  );
};