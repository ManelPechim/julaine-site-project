import { Check, X } from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle";
import WhatsAppButton from "../../components/WhatsAppButton";

const forWho = [
  "Desejam desenvolver inteligência emocional.",
  "Sentem que precisam reorganizar pensamentos e sentimentos.",
  "Buscam mais clareza sobre sonhos e metas.",
  "Querem desenvolver hábitos mais alinhados com seus objetivos.",
  "Desejam crescer com mais consciência e direção.",
];

const notForWho = [
  "Busca soluções rápidas ou mágicas.",
  "Não deseja olhar para si mesma com honestidade.",
  "Não está aberta a refletir sobre os próprios padrões.",
];

export default function ForWho() {
  return (
    <section className="bg-[#FDFCFB] py-16 md:py-20 reveal">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal sd-delay-1">
          <SectionTitle
            label="Alinhamento"
            title="Essa sessão é para você?"
            center
          />
        </div>

        {/* Divider line */}
        <div className="mx-auto mb-10 mt-4 h-0.5 w-16 bg-gradient-to-r from-[#C8A96A] to-transparent" />

        <div className="grid gap-6 md:grid-cols-2">
          {/* For whom IS indicated */}
          <div className="reveal sd-delay-1 rounded-3xl border border-[#7A9B8E]/30 bg-[#F6F2EB] p-7 md:p-8">
            <p className="sd-title-font mb-5 border-b-2 border-[#7A9B8E]/40 pb-4 text-xl text-[#4F6F63]">
              ✔ Para quem é indicada
            </p>
            <ul className="space-y-4">
              {forWho.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed md:text-base">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7A9B8E]/20">
                    <Check className="h-3 w-3 text-[#4F6F63]" />
                  </div>
                  <span className="text-[#5B4A3E]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* For whom is NOT indicated */}
          <div className="reveal sd-delay-2 rounded-3xl border border-[#C27A6E]/20 bg-[#F6F2EB] p-7 md:p-8">
            <p className="sd-title-font mb-5 border-b-2 border-[#C27A6E]/30 pb-4 text-xl text-[#8B5E52]">
              ✘ Para quem não é indicada
            </p>
            <ul className="space-y-4">
              {notForWho.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed md:text-base">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C27A6E]/15">
                    <X className="h-3 w-3 text-[#C27A6E]" />
                  </div>
                  <span className="text-[#8A8077]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl bg-[#E8DED4]/70 p-4">
              <p className="text-xs italic leading-relaxed text-[#8A8077] md:text-sm">
                O crescimento começa quando estamos dispostas a nos observar com
                mais consciência.
              </p>
            </div>
          </div>
        </div>

        <div className="reveal sd-delay-3 mt-10 text-center">
          <WhatsAppButton label="Quero direção" />
        </div>
      </div>
    </section>
  );
}