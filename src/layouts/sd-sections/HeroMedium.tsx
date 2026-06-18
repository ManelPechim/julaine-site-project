import { AlertCircle, BookCopy } from "lucide-react";
import WhatsAppButton from "../../components/WhatsAppButton";

const heroHighlights = [
  {
    label: "Conversa estratégica de",
    num: "45 min",
  },
  {
    label: "Atuando desde",
    num: "2005",
  },
  {
    label: "Online e ao vivo",
    num: "100%",
  },
];

export default function HeroMedium() {
  return (
    <main className="mx-auto grid max-w-[1300px] grid-cols-2 gap-8 px-6 pt-6 pb-0">
      {/* ── LEFT: copy ── */}
      <div className="col-span-1 min-w-0 pb-12">

        <h1 className="sd-title-font mb-5 leading-[1.15] text-[#4F6F63] text-4xl uppercase ">
          <span>O destrave para sua vida</span>
          <span className="hidden" aria-hidden="true" />
          <em className="text-[#7A9B8E] font-semibold sd-title-font">{" "}pessoal e profissional </em>
          <span className="hidden" aria-hidden="true" />
          <span>começa aqui</span>.
        </h1>

        {/* Divider line */}
        <div className="my-4 h-0.5 w-full bg-gradient-to-r from-[#C8A96A] to-transparent" />

        <div className="flex flex-col mb-5 gap-4 leading-relaxed text-[#8A8077] text-base">
          {/* subheadline */}
          <p className="mt-0">
            <strong className="text-[#5B4A3E] underline underline-offset-3">Um diagnóstico personalizado para mulheres</strong> que desejam{" "}
            <span className="sd-text-gradient font-bold">clareza emocional</span>,{" "}
            <span className="sd-text-gradient font-bold">direção de vida</span> e novos caminhos de crescimento pessoal e profissional.
            Se você sente que tem potencial para ir mais longe, mas algo parece travar seus avanços, essa sessão pode{" "}
            <span className="sd-text-gradient font-bold">te ajudar a enxergar com mais clareza o momento que você está vivendo</span> e qual pode ser o próximo passo da sua jornada.
          </p>
        </div>

        <section className="flex justify-between w-170 gap-25 mt-14 mb-5 border-t border-[#CBBFAF]/50">
          <div className="flex flex-wrap items-center gap-1 mt-6">
            <div className="flex gap-2 sd-title-font w-70">
              <AlertCircle className="mt-0.5 size-6 text-[#4F6F63]" />
              <h2 className="flex text-[13.75px] w-full">
                <p>
                  <span className="sd-text-gradient font-extrabold underline uppercase">
                    Essa sessão não fica disponível o tempo todo
                  </span>, pois envolve acompanhamento individual e um direcionamento profundo.
                  É gratuita, 100% individual e com direcionamento profundo.
                </p>
              </h2>
            </div>
          </div>
          {/* stats strip */}
          <div className="mt-6 my-6 pt-4 flex w-full justify-between gap-8">
            {heroHighlights.map(({ num, label }) => (
              <div key={label} className="-mt-4 flex flex-col text-center items-center w-20">
                <p className="text-xs tracking-wide text-[#8A8077]">{label}</p>
                <p className="-mt-2 sd-title-font text-[24px] text-[#4F6F63]">{num}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTAs */}
        <div className="flex flex-nowrap w-[720px] gap-4 text-sm">
          <WhatsAppButton label="Quero agendar minha sessão" className="w-full" />
          <button
            onClick={() => document.getElementById('more')?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center w-full gap-2 rounded-full px-6 py-3  bg-[#5B4A3E] animate-glow-brown text-white font-bold tracking-wide transition-all duration-300 hover:-translate-y-0.5"
          >
            <BookCopy className="h-4 w-4" />
            Quero entender PORQUÊ é para mim
          </button>
        </div>
      </div>

      {/* ── RIGHT: photo + feature card ── */}
      <div className="relative flex justify-start self-start">
        {/* main photo */}
        <div className="relative animate-glow-green-img overflow-hidden rounded-tl-3xl rounded-br-3xl rounded-lg border-3 border-[#C8A96A] shadow-[0_-8px_48px_rgba(79,111,99,0.14)]">
          <img
            src="/sd-author-img.JPG"
            alt="Julaine Guimarães — Especialista em Desenvolvimento Humano Integral"
            className="w-79"
          />
        </div>
      </div>
    </main>
  );
}
