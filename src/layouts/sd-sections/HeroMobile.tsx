import { BookCopy } from "lucide-react";
import WhatsAppButton from "../../components/WhatsAppButton";

export default function HeroMobile() {
  return (
    <>
      <div className="sd-title-font px-1.75 pt-4 text-nowrap mb-5 text-[1.70rem] leading-[1.15] text-[#4F6F63] uppercase ">
        <p>O destrave para sua vida</p>
        <em className="text-[#7A9B8E] font-semibold sd-title-font">{" "}pessoal e profissional </em>
        <p>começa aqui.</p>
      </div>

      {/* Divider line */}<div className="mx-3 my-4 h-0.5 w-full bg-gradient-to-r from-[#C8A96A] to-transparent" />

      <main className="mx-auto grid max-w-[1300px] grid-cols-2 gap-4 px-4 pt-10 pb-0">
        {/* ── LEFT: copy ── */}
        <div className="col-span-1 min-w-0 pb-10">
          <div className="flex flex-col mb-5 gap-4 leading-relaxed text-[#8A8077] text-[0.8rem]">
            {/* subheadline */}
            <p className="-mt-10">
              <strong className="text-[#5B4A3E] underline underline-offset-3">Um diagnóstico personalizado para mulheres</strong> que desejam{" "}
              <span className="sd-text-gradient font-bold">clareza emocional</span>,{" "}
              <span className="sd-text-gradient font-bold">direção de vida</span> e novos caminhos de crescimento pessoal e profissional.
              Se você sente que tem potencial para ir mais longe, mas algo parece travar seus avanços, essa sessão pode{" "}
              <span className="sd-text-gradient font-bold">te ajudar a enxergar com mais clareza o momento que você está vivendo</span> e qual pode ser o próximo passo da sua jornada.
            </p>
          </div>

          <section className="flex w-90 mb-5 border-t border-[#CBBFAF]/50">
            <div className="flex flex-wrap items-center gap-1">
              {/* Mobile has this at the bottom */}
            </div>
          </section>

          {/* CTAs */}
          <div className="flex flex-wrap w-[360px] gap-4 text-[11px]">
            <WhatsAppButton label="Quero agendar minha sessão" className="w-full" />
            <button
              onClick={() => document.getElementById('more')?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center w-full gap-2 rounded-full px-6 py-3  bg-[#5B4A3E] animate-glow-brown text-white font-bold tracking-wide transition-all duration-300 hover:-translate-y-0.5"
            >
              <BookCopy className="h-4 w-4" />
              Quero entender PORQUÊ é para mim
            </button>
          </div>

          <div className="flex mt-5 flex-wrap justify-center text-center w-[350px] text-[13px] sd-title-font">
            <p className="sd-text-gradient font-extrabold underline underline-offset-4 uppercase">
              É gratuita, <span className="font-serif">100%</span> individual e com direcionamento profundo.
            </p>
          </div>
        </div>
        {/* ── RIGHT: photo + feature card ── */}
        <div className="relative flex justify-start self-start -mt-8">
          {/* main photo */}
          <div className="relative animate-glow-green-img overflow-hidden rounded-tl-3xl rounded-br-3xl rounded-lg border-3 border-[#C8A96A] shadow-[0_-8px_48px_rgba(79,111,99,0.14)] ">
            <img
              src="/sd-author-img.JPG"
              alt="Julaine Guimarães — Especialista em Desenvolvimento Humano Integral"
              className="w-50"
            />
          </div>
        </div>
      </main>
    </>
  );
}
