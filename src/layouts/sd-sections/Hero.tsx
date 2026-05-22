import { AlertCircle, BookCopy } from "lucide-react";
import WhatsAppButton from "../../components/WhatsAppButton";
import ScrollIndicator from "../../components/ui/Scroll-Indicator";
import { useIsMobile } from "../../components/ui/use-mobile";

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
  const isMobile = useIsMobile();
  const mediumWindow = window.innerWidth >= 768 && window.innerWidth < 1024;
  // const [isMobile, setIsMobile] = useState<boolean>(false);

  return (
    <header className="relative overflow-hidden min-h-[91.5vh] bg-[#E8DED4] reveal">
      {/* Background Image */}
      <div className='absolute -z-20 top-0 left-0 h-full w-full'>
        <img src="/grain-texture.jpg" className='w-full h-full invisible lg:visible lg:object-cover opacity-30' />
      </div>
      {/* Top accent bar */}
      {/* <div className="h-[3px] w-full bg-gradient-to-r from-[#C8A96A] via-[#7A9B8E] to-transparent" /> */}

      {/* headline */}
      {isMobile && (
        <>
          <div className="sd-title-font px-1.75 pt-4 lg:text-nowrap mb-5 text-[1.70rem] leading-[1.15] text-[#4F6F63] md:text-4xl lg:text-[3.70rem] uppercase ">
            <span className="lg:text-[3.25rem]">O destrave para sua vida</span>
            <span className="hidden md:block" aria-hidden="true" />
            <em className="text-[#7A9B8E] font-semibold sd-title-font">{" "}pessoal e profissional </em>
            <span className="hidden md:block" aria-hidden="true" />
            <span>começa aqui</span>.
          </div>
          {/* Divider line */}<div className="mx-3 my-4 h-0.5 w-full bg-gradient-to-r from-[#C8A96A] to-transparent" />
        </>
      )}

      <main className="mx-auto grid lg:max-w-[1300px] grid-cols-2 items-end gap-4 md:gap-8 lg:gap-16 px-4 md:px-6 pt-10 md:pt-6 lg:pt-14 pb-0">
        {/* ── LEFT: copy ── */}
        <div className="min-w-0 pb-10 md:pb-12 lg:pb-16">
          {/* eyebrow */}
          {/* <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8A96A]/60 bg-[#C8A96A]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#5B4A3E]">
            <Sparkles className="h-4.5 w-4.5 text-[#C8A96A]" />
            Sessão Diagnóstica Online · Vagas Limitadas
          </p> */}
          {!isMobile && (
            <>
              <h1 className="sd-title-font lg:text-nowrap mb-5 leading-[1.15] text-[#4F6F63] text-[1.35rem] md:text-4xl lg:text-[3.70rem] uppercase ">
                <span className="lg:text-[3.25rem]">O destrave para sua vida</span>
                <span className="hidden md:block" aria-hidden="true" />
                <em className="text-[#7A9B8E] font-semibold sd-title-font">{" "}pessoal e profissional </em>
                <span className="hidden md:block" aria-hidden="true" />
                <span>começa aqui</span>.
              </h1>

              {/* Divider line */}<div className="my-4 h-0.5 w-full bg-gradient-to-r from-[#C8A96A] to-transparent" />
            </>
          )}

          <div className="flex flex-col mb-5 gap-4 leading-relaxed text-[#8A8077] text-[0.8rem] md:text-base lg:text-lg">
            {/* subheadline */}
            <p className="-mt-10 md:mt-0">
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
            {/* {isMobile && (
              <>
                <div className="flex flex-wrap items-center gap-1">
                  <h1 className="flex items-center gap-0.5 md:gap-2 sd-title-font">
                    <AlertCircle className="mt-0.5 size-4 md:size-6 text-[#4F6F63]" />
                    <p className="sd-text-gradient font-extrabold underline uppercase whitespace-normal text-[11px] md:text-base lg:text-xl lg:whitespace-nowrap">
                      Essa sessão não fica disponível o tempo todo,
                    </p>
                  </h1>
                  <p className="-mt-2 text-[10px] md:text-base lg:text-lg">
                    pois envolve acompanhamento individual e um direcionamento profundo.
                  </p>
                </div>
              </>
            )} */}
          </div>

          <section className="flex justify-self-center-safe w-90 md:w-170 md:mb-5 lg:mb-0 md:justify-between lg:flex-wrap gap-5 md:gap-25 lg:gap-5 md:mt-10 lg:mt-0 border-t border-[#CBBFAF]/50 lg:border-0">
            <div className="flex flex-wrap items-center gap-1 md:mt-6 lg:mt-0">
              {isMobile ? (
                <>
                  <h1 className="flex items-center text-[10px] -mt-3 sd-title-font lg:w-full">
                    {/* <AlertCircle className="mt-0.5 size-4 text-[#4F6F63]" /> */}
                    <p>
                      <span className="sd-text-gradient font-extrabold underline uppercase">
                        Essa sessão não fica disponível o tempo todo
                      </span>, pois envolve acompanhamento individual e um direcionamento profundo.
                    </p>
                  </h1>
                </>
              ) : mediumWindow ? (
                <>
                  <h1 className="flex gap-2 sd-title-font w-70">
                    <AlertCircle className="mt-0.5 size-6 text-[#4F6F63]" />
                    <h2 className="flex text-[13.75px] w-full">
                      <p>
                        <span className="sd-text-gradient font-extrabold underline uppercase">
                          Essa sessão não fica disponível o tempo todo
                        </span>, pois envolve acompanhamento individual e um direcionamento profundo.
                      </p>
                    </h2>
                  </h1>
                </>
              ) : (
                <>
                  <h1 className="flex items-center gap-0.5 md:gap-2 sd-title-font w-full lg:w-full">
                    <AlertCircle className="mt-0.5 size-4 md:size-6 text-[#4F6F63]" />
                    <p className="sd-text-gradient font-extrabold underline uppercase whitespace-normal text-[11px] md:text-base lg:text-xl lg:whitespace-nowrap">
                      Essa sessão não fica disponível o tempo todo,
                    </p>
                  </h1>
                  <p className="md:-mt-6 lg:-mt-2 text-[10px] md:text-[14px] lg:text-lg">
                    pois envolve acompanhamento individual e um direcionamento profundo.
                  </p>
                </>
              )}
            </div>
            {/* stats strip */}
            <div className="mt-0 md:mt-6 lg:mt-0 my-6 pt-4 flex w-full justify-center text-center md:justify-between gap-4 md:gap-8 lg:border-t lg:border-[#CBBFAF]/50 md:border-0">
              {heroHighlights.map(({ num, label }) => (
                <div key={label} className="md:-mt-4 lg:mt-0 flex flex-col items-center md:w-20 lg:w-full">
                  <p className="text-[10px] md:text-xs tracking-wide text-[#8A8077]">{label}</p>
                  <p className="md:-mt-2 sd-title-font text-[15px] md:text-[24px] lg:text-[28px] text-[#4F6F63]">{num}</p>
                </div>
              ))}
            </div>
          </section>
          {/* social proof quote */}
          {/* <p className="flex items-center gap-1 mb-8 text-[13px] italic text-[#7A9B8E] underline underline-offset-4">
            <Star className="h-5 w-10 text-[#C8A96A]" />
            Muitas mulheres saem dessa sessão com uma clareza que não conseguiam encontrar sozinhas. No fim, todo mundo precisa de direção.
          </p> */}

          {/* CTAs */}
          <div className="flex flex-wrap md:flex-nowrap lg:text-nowrap justify-self-center-safe items-center w-xs md:w-2xl gap-4 text-[11px] md:text-sm lg:text-lg">
            <WhatsAppButton label="Quero agendar minha sessão" className="w-full lg:text-lg" />
            {/* <button
              onClick={() => document.getElementById("more")?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-1.5 text-sm font-semibold text-[#4F6F63] underline-offset-4 hover:underline"
            >
              Saiba mais
              <ArrowDown className="h-3.5 w-3.5" />
            </button> */}
            <button
              onClick={() => document.getElementById('more')?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center w-full gap-2 rounded-full px-6 py-3 ring-1 ring-[#C8A96A]/40 bg-[#5B4A3E] text-white font-bold tracking-wide transition-all duration-300 hover:-translate-y-0.5"
            >
              <BookCopy className="h-4 w-4" />
              Quero entender PORQUÊ é para mim
            </button>
          </div>
        </div>
        {/* ── RIGHT: photo + feature card ── */}
        <div className="relative flex min-w-0 justify-end self-center lg:self-end mb-5 md:mb-10 -mt-70 md:-mt-55 lg:mt-0">
          {/* main photo */}
          <div className="relative animate-glow-green-img w-full max-w-sm overflow-hidden rounded-tl-3xl rounded-br-3xl rounded-lg border-3 border-[#C8A96A] shadow-[0_-8px_48px_rgba(79,111,99,0.14)] lg:max-w-md">
            <img
              src="/sd-author-img.JPG"
              alt="Julaine Guimarães — Especialista em Desenvolvimento Humano Integral"
              className="block w-full object-cover h-[400px] md:h-[460px] lg:h-[520px]"
            />

            {/* floating feature card */ }
            {!isMobile && (
              <div className="absolute p-4 bottom-2 lg:bottom-6 left-4 right-4 rounded-2xl border border-[#C8A96A]/40 bg-white/50 shadow-lg backdrop-blur-sm">
                <p className="flex justify-self-start mb-3 text-[11px] lg:text-base font-extrabold uppercase tracking-[0.14em] sd-text-gradient">
                  O que muitas mulheres descobrem<br />nessa sessão
                </p>
                <ul className="space-y-2 lg:space-y-1">
                  {sessionFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[11px] lg:text-[14.5px] leading-relaxed text-black/60">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A96A]" />
                      {f}
                    </li>
                  ))}

                  <p className="px-2 py-2 text-[11px] lg:text-sm text-black/60 font-bold border-t border-black/20">
                    Às vezes, uma única conversa pode abrir uma nova forma de olhar para si mesma.
                  </p>
                </ul>
              </div>
            )}

          </div>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator
          scrollTo="more"
          className="col-span-2 mb-5 -mt-6 md:-mt-12 lg:mt-3"
        />
      </main>
    </header >
  );
}