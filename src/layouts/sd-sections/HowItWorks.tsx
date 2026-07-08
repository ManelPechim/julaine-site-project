import { CalendarCheck, Clock3, Compass, Video } from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle";
import WhatsAppButton from "../../components/WhatsAppButton";

const processSteps = [
  {
    icon: CalendarCheck,
    title: "Você solicita sua sessão",
    description:
      "Clique no botão de agendamento e chame no WhatsApp para verificar os horários disponíveis.",
  },
  {
    icon: Clock3,
    title: "Escolhe um horário disponível",
    description:
      "Você recebe as opções de agenda e escolhe o melhor horário para a sua rotina.",
  },
  {
    icon: Video,
    title: "Participa da conversa online",
    description:
      "Sessão de aproximadamente 40 a 45 minutos, com foco total no seu momento e na sua demanda real.",
  },
  {
    icon: Compass,
    title: "Recebe direcionamento inicial",
    description:
      "Você sai com mais clareza sobre o que fazer agora e o que pode esperar para os próximos passos.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#E8DED4] py-16 md:py-20 reveal">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal sd-delay-1">
          <SectionTitle
            label="Como funciona"
            title="Um processo simples, direto, acolhedor e sem enrolação"
          />
        </div>

        {/* Divider line */}
        <div className="mt-4 h-0.5 w-full bg-gradient-to-r from-[#C8A96A] to-transparent" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className={`reveal relative rounded-2xl border border-[#CBBFAF] bg-[#F6F2EB]/60 p-6 sd-delay-${(index % 4) + 1}`}
              >
                {/* Step number watermark */}
                <p className="sd-title-font absolute right-4 top-3 text-4xl font-bold text-[#4F6F63]/10 select-none">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-[#E8DED4] p-2.5">
                    <Icon className="h-5 w-5 text-[#4F6F63]" />
                  </div>
                </div>

                <p className="mb-2 text-base font-semibold leading-snug text-[#4F6F63]">
                  {step.title}
                </p>
                <p className="text-sm leading-relaxed text-[#8A8077] md:text-base">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Connector line hint on desktop */}
        <div className="reveal sd-delay-2 mt-10 text-center">
          <WhatsAppButton label="Quero reservar meu horário" />
        </div>
      </div>
    </section>
  );
}