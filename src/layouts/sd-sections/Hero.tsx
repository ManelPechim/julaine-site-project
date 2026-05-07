import { AlertCircle, BookCopy } from "lucide-react";
import WhatsAppButton from "../../components/WhatsAppButton";
import ScrollIndicator from "../../components/ui/Scroll-Indicator";

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

export default function Hero() {
  return (
    <header className="relative overflow-hidden min-h-[91.5vh] bg-[#E8DED4] reveal">
      {/* Background Image */}
      <div className='absolute -z-20 top-0 left-0 h-full w-full'>
        <img src="/grain-texture.jpg" className='w-full h-full invisible lg:visible lg:object-cover opacity-30' />
      </div>
      {/* Top accent bar */}
      {/* <div className="h-[3px] w-full bg-gradient-to-r from-[#C8A96A] via-[#7A9B8E] to-transparent" /> */}

      <main className="mx-auto grid max-w-[1300px] items-end px-6 pt-12 lg:pt-14 pb-0 lg:grid-cols-2 lg:gap-16">
        {/* ── LEFT: copy ── */}
        <div className="pb-12 lg:pb-16">
          {/* eyebrow */}
          {/* <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8A96A]/60 bg-[#C8A96A]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#5B4A3E]">
            <Sparkles className="h-4.5 w-4.5 text-[#C8A96A]" />
            Sessão Diagnóstica Online · Vagas Limitadas
          </p> */}

          {/* headline */}
          <h1 className="sd-title-font lg:text-nowrap mb-5 text-2xl leading-[1.15] text-[#4F6F63] md:text-4xl lg:text-[3.70rem] uppercase ">
            <span className="lg:text-[3.25rem]">O destrave para sua vida</span><br />
            <em className="text-[#7A9B8E] font-semibold sd-title-font">{" "}pessoal e profissional</em><br />
            <span className="underline underline-offset-14">começa aqui</span>.
          </h1>

          {/* Divider line */}
          <div className="my-4 h-0.5 w-full bg-gradient-to-r from-[#C8A96A] to-transparent" />

          <div className="flex flex-col mb-5 gap-4 text-sm md:text-lg leading-relaxed text-[#8A8077] ">
            {/* subheadline */}
            <p className="">
              {/* <strong className="text-[#5B4A3E] underline underline-offset-3">Um alinhamento estratégico de 45 minutos</strong>{" "}
              para mulheres que sentem que tem potencial para ir mais longe e que buscam sucesso, mas algo parece travar sua vida.
              Essa sessão vai te ajudar a organizar seus pensamentos e enxergar com mais clareza
              o momento que você está vivendo e sair com o próximo passo da sua jornada. */}
              <strong className="text-[#5B4A3E] underline underline-offset-3">Um diagnóstico personalizado para mulheres</strong> que desejam{" "}
              <span className="sd-text-gradient font-bold">clareza emocional</span>,{" "} 
              <span className="sd-text-gradient font-bold">direção de vida</span> e novos caminhos de crescimento pessoal e profissional.
              Se você sente que tem potencial para ir mais longe, mas algo parece travar seus avanços, essa sessão pode{" "}
              <span className="sd-text-gradient font-bold">te ajudar a enxergar com mais clareza o momento que você está vivendo</span> e qual pode ser o próximo passo da sua jornada.

            </p>

            <div className="flex flex-wrap items-center gap-1">
              <p className="flex items-center gap-0.5 md:gap-2 sd-title-font">
                <AlertCircle className="mt-0.5 size-4 md:size-6 text-[#4F6F63]" />
                <p className="sd-text-gradient font-extrabold text-[12.5px] md:text-xl text-nowrap underline uppercase">
                  Essa sessão não fica disponível o tempo todo,  
                </p>
              </p>
              <p className="-mt-2 text-xs md:text-lg">
                pois envolve acompanhamento individual e um direcionamento profundo.
              </p>
            </div>
          </div>
          {/* social proof quote */}
          {/* <p className="flex items-center gap-1 mb-8 text-[13px] italic text-[#7A9B8E] underline underline-offset-4">
            <Star className="h-5 w-10 text-[#C8A96A]" />
            Muitas mulheres saem dessa sessão com uma clareza que não conseguiam encontrar sozinhas. No fim, todo mundo precisa de direção.
          </p> */}

          {/* stats strip */}
          <div className="my-6 pt-4 flex justify-center md:justify-between gap-8 border-t border-[#CBBFAF]/50">
            {heroHighlights.map(({ num, label }) => (
              <div key={label} className="flex flex-col items-center ">
                <p className="text-[10px] md:text-sm tracking-wide text-[#8A8077]">{label}</p>
                <p className="-mt-2 sd-title-font text-[28px] text-[#4F6F63]">{num}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap lg:flex-nowrap lg:text-nowrap items-center gap-4 text-xs md:text-sm">
            <WhatsAppButton label="Quero agendar minha sessão" className="w-full md:w-fit" />
            {/* <button
              onClick={() => document.getElementById("more")?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-1.5 text-sm font-semibold text-[#4F6F63] underline-offset-4 hover:underline"
            >
              Saiba mais
              <ArrowDown className="h-3.5 w-3.5" />
            </button> */}
            <button
              onClick={() => document.getElementById('more')?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center w-full md:w-fit gap-2 rounded-full px-6 py-3 ring-1 ring-[#C8A96A]/40 bg-[#5B4A3E] text-white font-bold tracking-wide transition-all duration-300 hover:-translate-y-0.5"
            >
              <BookCopy className="h-4 w-4" />
              Quero entender PORQUÊ é para mim
            </button>
          </div>
        </div>
        {/* Scroll Indicator */}
        <ScrollIndicator
          scrollTo="more"
          className="lg:mt-3 mb-5"
        />

        {/* ── RIGHT: photo + feature card ── */}
        <div className="relative flex justify-center self-center lg:justify-end lg:self-end mb-5 md:mb-10">
          {/* main photo */}
          <div className="relative animate-glow-green-img w-full max-w-sm overflow-hidden rounded-tl-3xl rounded-br-3xl rounded-lg border-3 border-[#C8A96A] shadow-[0_-8px_48px_rgba(79,111,99,0.14)] lg:max-w-md">
            <img
              src="/sd-author-img.JPG"
              alt="Julaine Guimarães — Especialista em Desenvolvimento Humano Integral"
              className="block h-[440px] w-full object-cover md:h-[520px]"
            />

            {/* floating feature card */}
            <div className="absolute p-4 bottom-2 lg:bottom-6 left-4 right-4 rounded-2xl border border-[#C8A96A]/40 bg-white/50 shadow-lg backdrop-blur-sm">
              <p className="flex justify-self-start mb-3 text-[11px] md:text-[13px] lg:text-base font-extrabold uppercase tracking-[0.14em] sd-text-gradient">
                O que muitas mulheres descobrem<br />nessa sessão 
              </p>
              <ul className="space-y-2 lg:space-y-1">
                {sessionFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[11px] md:md:text-[13px] lg:text-[14.5px] leading-relaxed text-black/60">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A96A]" />
                    {f}
                  </li>
                ))}

                <p className="px-2 py-2 text-[11px] lg:text-sm text-black/60 font-bold border-t border-black/20">
                  Às vezes, uma única conversa pode abrir uma nova forma de olhar para si mesma.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </header>
  );
}