import { SectionTitle } from "../../components/SectionTitle";
import TestimonialsPrints from "../../components/TestimonialsPrints";

export default function Testimonials() {
  return (
    <section className="py-16 space-y-4">

      <section className="flex flex-col mx-auto max-w-6xl px-6 reveal">
        <SectionTitle
          // label="Depoimentos"
          title="Resultados reais de mulheres que decidiram se transformar"
          description="Se essas mulheres conseguiram enxergar novos caminhos, você também pode.
          O próximo passo pode começar com uma decisão simples. "
        // Experiências reais de mulheres que 
        // chegaram confusas e saíram com mais direção, 
        // segurança e vontade de agir depois da sessão.
        />

        {/* <div className="flex justify-center text-center items-center gap-3 text-xs!">
          <ArrowDown className="mt-4 size-10 md:size-6" />
          <SectionTitle
            description="Experiência de quem já viveu esse processo na prática e avançou para outros níveis!"
          />
          <ArrowDown className="mt-4 size-10 md:size-6" />
        </div> */}

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