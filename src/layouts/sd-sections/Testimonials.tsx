import { SectionTitle } from "../../components/SectionTitle";
import TestimonialsPrints from "../../components/TestimonialsPrints";

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col mx-auto max-w-6xl px-6 gap-8">
        <div className="reveal sd-delay-1">
          <SectionTitle
            label="Depoimentos"
            title="Relatos de quem já saiu com mais clareza"
            description="Experiências reais de mulheres que chegaram confusas e saíram com mais direção, segurança e vontade de agir depois da sessão."
          />
        </div>

        {/* Divider line */}
        <div className="h-0.5 w-full bg-linear-to-r from-[#C8A96A] to-transparent" />

        <TestimonialsPrints
          bgClass="bg-[#E8DED4] border-2 border-[#CBBFAF] hover:border-[#7A9B8E]"
          quote="text-[#4F6F63]"
        />

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
      </div>
    </section>
  );
}

export default Testimonials;