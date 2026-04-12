import { CalendarCheck } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";


export default function ImportantFinalInvite() {
  return (
    <main className="">
      <section className="bg-[#E8DED4] py-14">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="sd-title-font text-2xl text-[#4F6F63] md:text-3xl">Importante</p>
          <div className="mx-auto mt-3 h-0.5 w-24 bg-[#C8A96A]" />
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-relaxed md:text-base">
            Cada sessão é conduzida pessoalmente por mim, com tempo e atenção dedicados a cada mulher que chega até aqui. Por isso, os horários disponíveis ao longo da semana são limitados.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-relaxed md:text-base">
            Durante a sessão, se eu perceber que minha mentoria pode realmente te ajudar no seu momento de vida, vou apresentar a possibilidade de continuidade com clareza, respeito e alinhamento com a sua realidade.
          </p>
        </div>
      </section>
      <section className="sd-gradient py-16 text-[#E8DED4] md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#C8A96A]/70 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.15em]">
            <CalendarCheck className="h-4 w-4" />
            Convite final
          </p>
          <h2 className="sd-title-font text-3xl leading-tight md:text-5xl">
            Se você sente que chegou o momento de olhar para sua vida com mais clareza, essa conversa pode ser o primeiro passo.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-[#E8DED4] md:text-lg">
            Reserve seu horário para uma sessão de autoconhecimento, direção e tomada de decisão consciente. Às vezes, um novo caminho começa com uma única conversa.
          </p>
          <WhatsAppButton
            label="Quero agendar minha sessão"
            variant="light"
            className="mt-8"
          />
        </div>
      </section>
    </main>
  );
};