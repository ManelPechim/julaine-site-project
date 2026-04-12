import { CalendarCheck, Clock3, Compass, Video } from "lucide-react";
import { SectionTitle } from "../SectionTitle";
import WhatsAppButton from "../WhatsAppButton";

const processSteps = [
  {
    icon: CalendarCheck,
    title: "Você solicita sua sessão",
    description: "Clique no botão de agendamento e entre em contato pelo WhatsApp.",
  },
  {
    icon: Clock3,
    title: "Escolhe um horário disponível",
    description: "Você recebe opções de agenda e seleciona o melhor horário para você.",
  },
  {
    icon: Video,
    title: "Participa da conversa online",
    description: "Sessão de aproximadamente 40 a 45 minutos, com foco total no seu momento.",
  },
  {
    icon: Compass,
    title: "Recebe direcionamento inicial",
    description: "Você sai com mais clareza sobre próximos passos e possibilidades de crescimento.",
  },
];

export default function HowItWorkds() {
  return (
    <section className="bg-[#E8DED4] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal sd-delay-1">
          <SectionTitle
            label="Como funciona"
            title="Um processo simples, direto e acolhedor"
          />
        </div>

        <div className="mt-10 grid gap-4 grid-cols-2">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className={`reveal rounded-2xl border border-[#CBBFAF] bg-[#F6F2EB]/50 p-6 sd-delay-${(index % 4) + 1}`}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#E8DED4] p-2.5">
                    <Icon className="h-5 w-5 text-[#4F6F63]" />
                  </div>
                  <h3 className="sd-title-font text-2xl text-[#4F6F63]">{index + 1}</h3>
                </div>
                <p className="mt-4 text-base font-semibold text-[#4F6F63]">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed md:text-base">{step.description}</p>
              </article>
            );
          })}
        </div>

        <div className="reveal sd-delay-2 mt-10 text-center">
          <WhatsAppButton label="Quero reservar meu horário" />
        </div>
      </div>
    </section>
  );
};