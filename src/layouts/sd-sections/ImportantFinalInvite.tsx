import { CalendarCheck } from "lucide-react";
import WhatsAppButton from "../../components/WhatsAppButton";

export default function ImportantFinalInvite() {
  return (
    <main>
      {/* Scarcity / Important block */}
      {/* <section className="bg-[#E8DED4] py-14">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge }
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8A96A]/50 bg-[#C8A96A]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#5B4A3E]">
              <Clock className="h-3.5 w-3.5 text-[#C8A96A]" />
              Agenda com vagas limitadas
            </div>

            <h2 className="sd-title-font mb-4 text-2xl text-[#4F6F63] md:text-3xl">
              Importante
            </h2>
            <div className="mx-auto mb-5 h-0.5 w-16 bg-gradient-to-r from-transparent via-[#C8A96A] to-transparent" />

            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#5B4A3E] md:text-base">
              Cada sessão é conduzida pessoalmente por mim, com tempo e atenção
              dedicados a cada mulher que chega até aqui. Por isso, os horários
              disponíveis ao longo da semana são limitados.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm italic leading-relaxed text-[#8A8077] md:text-base">
              Durante a sessão, se eu perceber que minha mentoria pode realmente te
              ajudar no seu momento de vida, vou apresentar a possibilidade de
              continuidade com clareza, respeito e alinhamento com a sua realidade.
            </p>
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="sd-gradient relative overflow-hidden py-16 text-[#E8DED4] md:py-24 reveal">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          {/* Eyebrow */}
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8A96A]/50 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em]">
            <CalendarCheck className="h-3.5 w-3.5" />
            Convite final
          </p>

          {/* Headline */}
          <h2 className="sd-title-font mb-5 text-3xl leading-tight md:text-5xl">
            Se você sente que chegou a hora de parar de adiar a própria vida,
            essa conversa pode ser o primeiro passo.
          </h2>

          <p className="mx-auto mb-2 max-w-2xl text-sm leading-relaxed text-[#E8DED4]/80 md:text-lg">
            Reserve seu horário para uma sessão de autoconhecimento, direção e
            tomada de decisão consciente com foco no que realmente importa agora.
          </p>
          <p className="mb-8 text-sm italic text-[#CBBFAF]/70">
            Às vezes, um novo caminho começa quando você para de tentar resolver tudo sozinha.
          </p>

          <WhatsAppButton
            label="Quero garantir minha vaga"
            variant="light"
            className="mt-2 uppercase"
          />

          <p className="mt-6 text-xs text-[#E8DED4]">
            Atendimento online · 100% ao vivo <span className="text-[#E8DED4] uppercase">· vagas limitadas</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-[#5B4A3E] px-6 py-10 text-center">
        <p className="sd-title-font mb-1 text-lg text-[#E8DED4]">
          Julaine Guimarães
        </p>
        <p className="mb-4 text-xs text-[#CBBFAF]/60">
          Desenvolvimento Humano Integral — transformando vidas por meio da
          inteligência emocional e neurociência aplicada na vida prática.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.instagram.com/julainegui/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#C8A96A] transition-opacity hover:opacity-80"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/5543999637029"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#C8A96A] transition-opacity hover:opacity-80"
          >
            WhatsApp
          </a>
        </div>
        <p className="mt-5 text-[10px] text-[#E8DED4]/25">
          © {new Date().getFullYear()} Julaine Guimarães. Todos os direitos reservados.
        </p>
      </footer> */}
    </main>
  );
}