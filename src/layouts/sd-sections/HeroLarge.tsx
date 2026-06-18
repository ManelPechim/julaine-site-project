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

const sessionFeatures = [
  "Padrões emocionais repetidos.",
  "Crenças que limitavam decisões.",
  "Hábitos que estavam travando seu crescimento.",
  "Novas possibilidades de direção para a vida pessoal e profissional.",
];

export default function HeroLarge() {
  return (
    <main className="mx-auto grid max-w-[1300px] grid-cols-2 gap-16 px-6 pt-14">
      {/* ── LEFT: copy ── */}
      <div className="col-span-1 min-w-0 pb-16">
        <h1 className="sd-title-font text-nowrap mb-5 leading-[1.15] text-[#4F6F63] text-[3.70rem] uppercase ">
          <p className="text-[3.25rem]">O destrave para sua vida</p>
          <em className="text-[#7A9B8E] font-semibold sd-title-font">pessoal e profissional </em>
          <p>começa aqui.</p>
        </h1>

        {/* Divider line */}<div className="my-4 h-0.5 w-full bg-gradient-to-r from-[#C8A96A] to-transparent" />

        <div className="flex flex-col mb-5 gap-4 leading-relaxed text-[#8A8077] text-lg">
          {/* subheadline */}
          <p className="mt-0">
            <strong className="text-[#5B4A3E] underline underline-offset-3">Um diagnóstico personalizado para mulheres</strong> que desejam{" "}
            <span className="sd-text-gradient font-bold">clareza emocional</span>,{" "}
            <span className="sd-text-gradient font-bold">direção de vida</span> e novos caminhos de crescimento pessoal e profissional.
            Se você sente que tem potencial para ir mais longe, mas algo parece travar seus avanços, essa sessão pode{" "}
            <span className="sd-text-gradient font-bold">te ajudar a enxergar com mais clareza o momento que você está vivendo</span> e qual pode ser o próximo passo da sua jornada.
          </p>
        </div>

        <section className="flex flex-wrap justify-between w-170 mb-0 gap-5 mt-0">
          <div className="flex flex-wrap items-center gap-1 mt-0">
            <h1 className="flex items-center gap-2 sd-title-font w-full">
              <AlertCircle className="mt-0.5 size-6 text-[#4F6F63]" />
              <p className="sd-text-gradient font-extrabold underline underline-offset-4 uppercase whitespace-nowrap text-xl">
                É gratuita, <span className="font-sans font-bold">100%</span> individual e com direcionamento profundo.
              </p>
            </h1>
          </div>
          {/* stats strip */}
          <div className="mt-0 my-6 pt-4 flex w-full justify-between gap-4 border-t border-[#CBBFAF]/50">
            {heroHighlights.map(({ num, label }) => (
              <div key={label} className="mt-0 flex flex-col items-center w-full">
                <p className="text-xs tracking-wide text-[#8A8077]">{label}</p>
                <p className="-mt-2 sd-title-font text-[28px] text-[#4F6F63]">{num}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTAs */}
        <div className="flex text-nowrap gap-4 text-lg">
          <WhatsAppButton label="Quero agendar minha sessão" className="w-full text-lg" />
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
      <div className="relative flex justify-end self-end mb-10">
        {/* main photo */}
        <div className="relative animate-glow-green-img max-w-md overflow-hidden rounded-tl-3xl rounded-br-3xl rounded-lg border-3 border-[#C8A96A] shadow-[0_-8px_48px_rgba(79,111,99,0.14)] ">
          <img
            src="/sd-author-img.JPG"
            alt="Julaine Guimarães — Especialista em Desenvolvimento Humano Integral"
            className="w-full h-[520px]"
          />

          {/* floating feature card */}
          <div className="absolute p-4 bottom-6 left-4 right-4 rounded-2xl border border-[#C8A96A]/40 bg-white/50 shadow-lg backdrop-blur-sm">
            <p className="flex justify-self-start mb-3 text-base font-extrabold uppercase tracking-[0.14em] sd-text-gradient">
              O que muitas mulheres descobrem<br />nessa sessão
            </p>
            <ul className="space-y-1">
              {sessionFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-[14.5px] leading-relaxed text-black/60">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A96A]" />
                  {f}
                </li>
              ))}

              <p className="px-2 py-2 text-sm text-black/60 font-bold border-t border-black/20">
                Às vezes, uma única conversa pode abrir uma nova forma de olhar para si mesma.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
