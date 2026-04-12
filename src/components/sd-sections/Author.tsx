export default function Author() {
  return (
    <main className="relative overflow-hidden sd-gradient py-16 md:py-20">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="reveal sd-delay-2 mx-auto h-[22rem] w-full max-w-[18rem] overflow-hidden rounded-4xl border-2 border-[#CBBFAF] sm:h-[26rem] sm:max-w-[21rem] md:h-[30rem] md:max-w-[24rem] lg:h-[34rem] lg:max-w-[28rem]">
          <img
            src="/sd-author-img.JPG"
            alt="Julaine Guimarães"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="reveal sd-delay-2 text-[#E8DED4]">
          <h1 className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#7A9B8E] text-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em]">
            Autoridade
          </h1>
          <h2 className="sd-title-font text-3xl leading-tight md:text-4xl">
            Quem irá conduzir essa sessão
          </h2>
          <h3 className="mt-4 text-base leading-relaxed md:text-lg">
            Julaine Guimarães é especialista em Desenvolvimento Humano Integral,
            mentora de mulheres, neuropsicopedagoga, terapeuta de TFT, escritora,
            educadora e pesquisadora com foco em inteligência emocional,
            neurociência aplicada e autoconhecimento.
          </h3>
          <p className="mt-5 text-sm leading-relaxed md:text-base">
            Educadora desde 2005, já impactou centenas de mulheres por meio de mentorias, formações e treinamentos. É autora dos livros Inteligência Emocional na Prática e HAS - Hoje, Amanhã e Sempre: O Despertar.
          </p>
          <p className="mt-4 text-sm leading-relaxed md:text-base">
            Seu propósito é apoiar mulheres a despertarem para sua força interior, desenvolverem maturidade emocional e criarem caminhos de vida mais alinhados com quem realmente são.
          </p>
        </div>
      </div>
    </main>
  );
};