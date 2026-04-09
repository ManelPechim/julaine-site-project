import { Quote } from 'lucide-react';

const testimonials = [
  {
    image: "/testimonial-1.jpg"
  },
  {
    image: "/testimonial-2.jpg"
  },
  {    
    image: "/testimonial-3.PNG"
  }
];

export function Testimonials() {
  return (
    <section className="py-10 md:py-20 bg-gradient-to-b from-[#0A0A0A] to-[#1A1008] relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#BB7541]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#E7C19A] text-sm md:text-base font-medium mb-4 tracking-wider uppercase">
            Depoimentos da Mentoria
          </p>
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
            Veja o que dizem mulheres que<br />
            <span className="text-gradient">transformaram suas vidas</span>
          </h2>
          <p className="text-gray-400 italic text-md md:text-xl max-w-3xl mx-auto">
            O e-book é uma porta para iniciar sua transformação.
          </p>
        </div>

        {/* Top Note */}
        <div className="mb-5 lg:mb-10 text-center">
          <p className="text-gray-400 text-xs md:text-base italic">
            <span className="text-gradient font-bold uppercase">Nota:</span> Estes são depoimentos reais de participantes da mentoria completa. O e-book é o primeiro passo dessa jornada.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="grid flex-col items-start justify-center p-4 lg:p-8 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-2xl hover:scale-105 border border-[#E7C19A]/20 hover:border-[#E7C19A]/40 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className='flex justify-between'>
                <div className="mb-6">
                  <Quote className="w-8 h-8 lg:w-10 lg:h-10 text-[#E7C19A]/30 group-hover:text-[#E7C19A]/50 transition-colors" />
                </div>

                <div className="mb-6">
                  <Quote className="w-8 h-8 lg:w-10 lg:h-10 text-[#E7C19A]/30 group-hover:text-[#E7C19A]/50 transition-colors rotate-180" />
                </div>
              </div>

              {/* Testimonial IMG & Author  */}
              <div>
                {testimonial.image && (
                  <img 
                    src={testimonial.image} 
                    className="object-cover rounded-xl animate-glow-white-img"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
