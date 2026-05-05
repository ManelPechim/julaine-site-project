import { Quote } from "lucide-react";

interface TestimonialsProps {
  bgClass?: string,
  quote?: string,
};

const imageNameBase: string = "/testimonial"

const testimonials = [
  {
    image: `${imageNameBase}-1.jpg`
  },
  {
    image: `${imageNameBase}-2.jpg`
  },
  {
    image: `${imageNameBase}-3.PNG`
  },
  {
    image: `${imageNameBase}-4.PNG`
  },
  {
    image: `${imageNameBase}-5.PNG`
  }
];

const TestimonialsPrints = ({ bgClass, quote }: TestimonialsProps) => {
  return (
    <>
      {/* Quote Icon */}
      <div className='flex justify-between'>
        <Quote className={`w-8 h-8 lg:w-10 lg:h-10 transition-colors rotate-180 ${quote}`} />
        <Quote className={`w-8 h-8 lg:w-10 lg:h-10 transition-colors ${quote}`} />
      </div>
      <section className="grid lg:grid-cols-5 justify-center items-center gap-6" > {/* Testimonials Grid */}

        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`${bgClass} flex justify-center items-center w-60 lg:w-full h-104 gap-6 mx-20 md:m-0 p-4
              rounded-2xl transition-all duration-300 `}
          >
            {/* Testimonial IMG & Author  */}
            <div className="w-full rounded-xl">
              {testimonial.image && (
                <img
                  src={testimonial.image}
                  alt={`Depoimento ${index + 1}`}
                  className="object-cover rounded-xl animate-glow-white-img"
                />
              )}
            </div>
          </div>
        ))}
      </section >
    </>
  );
}

export default TestimonialsPrints;