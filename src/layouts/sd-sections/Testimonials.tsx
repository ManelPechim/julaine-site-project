import { ArrowDown, BookOpen, Rose } from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle";
import TestimonialsPrints from "../../components/TestimonialsPrints";

export default function Testimonials() {
  return (
    <section className="py-16 gap-8">

      <section className="flex flex-col mx-auto max-w-6xl px-6 gap-8 reveal">
        <SectionTitle
          // label="Depoimentos"
          title="Relatos de quem já saiu com mais clareza"
        // Experiências reais de mulheres que 
        // chegaram confusas e saíram com mais direção, 
        // segurança e vontade de agir depois da sessão.
        />


        {/* Divider line */}<div className="rotate-180 h-0.5 w-full bg-linear-to-r from-[#C8A96A] to-transparent" />
        {/* E-book float section */}
        <aside className="relative flex justify-center items-center p-6 h-23 md:h-40 lg:h-50 rounded-2xl shadow-xl sd-gradient">
          <a href="/ebook" className="absolute flex -top-6 md:-top-3 lg:-top-6">
            <img
              src="/sd-book.png"
              className="z-10 rounded-xl object-cover w-40 md:w-56 lg:w-72 h-[220px] md:h-[280px] lg:h-[320px] hover:scale-105 duration-300 cursor-pointer animate-float"
            />
          </a>
          {/* Floating info card */}
          <div className="relative min-w-86.5 md:min-w-0 md:absolute flex items-center px-4 py-2 gap-2 top-40 -right-[58%] md:top-35 lg:top-40 md:right-[53%] border-2 border-[#C8A96A] bg-white/95 text-[#2b3b33] rounded-xl shadow-2xl backdrop-blur-sm">
            <p className="bg-[#F6F2EB] border border-[#C8A96A]/30 p-1 rounded-md">
              <BookOpen className="size-5" />
            </p>
            <p className="text-xs  font-medium">
              +3.000 de exemplares
            </p>
          </div>
          {/* <div className="absolute top-45 right-30 z-20 max-w-xs md:max-w-sm bg-white/95 text-[#2b3b33] p-4 rounded-2xl shadow-2xl border border-white/30 backdrop-blur-sm">
          <p className="text-xs leading-snug font-medium">
            Mais de 3.000 exemplares do livro Inteligência Emocional na Prática já impactaram mulheres em seus processos de autoconhecimento e transformação.
          </p> w-full py-1 -top-15 right-
        </div> */}
          <div className="relative z-0 px-4 py-2 top-24 min-w-86.5 md:absolute lg:-top-5 md:-top-15 right-[59%] md:-right-5 lg:right-30 md:max-w-sm border-2 border-[#C8A96A] bg-white/95 text-[#2b3b33] rounded-2xl shadow-2xl">
            <div className="flex items-center gap-2">
              <p className="bg-[#F6F2EB] border border-[#C8A96A]/30 p-1 rounded-md">
                <Rose className="size-4 md:size-5" />
              </p>
              <p className="text-[10px] md:text-xs">
                Mais de 3.000 exemplares do livro Inteligência Emocional na Prática já impactaram mulheres em seus processos de
              </p>
            </div>
            <p className="md:pl-1.5 text-[10px] md:text-xs">
              autoconhecimento e transformação.
            </p>
          </div>
          {/* Decorative circles (subtle, behind content) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 z-0" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 z-0" />
        </aside>

        {/* Divider line */}<div className="mt-40 md:mt-0 h-0.5 w-full bg-linear-to-r from-[#C8A96A] to-transparent" />

        <div className="flex justify-center text-center items-center gap-3 text-xs!">
          <ArrowDown className="mt-4 size-10 md:size-6" />
          <SectionTitle
            description="Experiência de quem já viveu esse processo na prática e avançou para outros níveis!"
          />
          <ArrowDown className="mt-4 size-10 md:size-6" />
        </div>




        {/* <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <article
                key={item.name}
                className={`reveal overflow-hidden rounded-3xl border border-[#E8E2D9] bg-[#FDFCFB] sd-delay-${(index % 4) + 1}`}
              >
                <img src={item.image} alt={item.name} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-1 text-[#C8A96A]">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={`${item.name}-${starIndex}`} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed md:text-base">{item.text}</p>
                  <p className="mt-4 text-sm font-semibold text-[#4F6F63]">{item.name}</p>
                </div>
              </article>
            ))}
          </div> */}
      </section>

      <div className="flex flex-col mx-auto max-w-[1600px] px-6 gap-8 ">
        <TestimonialsPrints
          bgClass=" bg-[#E8DED4] border-2 border-[#CBBFAF] md:h-120 hover:border-[#7A9B8E]"
          quote="text-[#4F6F63]"
        />
      </div>
    </section>
  );
}