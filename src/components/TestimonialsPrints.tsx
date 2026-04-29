import { Quote } from "lucide-react";

interface TestimonialsProps {
  bgClass?: string,
  quote?: string,
};

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

const TestimonialsPrints = ({ bgClass, quote }: TestimonialsProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6" > {/* Testimonials Grid */}
      {
        testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`grid items-start mx-20 md:m-0 p-4 lg:p-8
              rounded-2xl hover:scale-105 transition-all duration-300 group ${bgClass}`}
          >
            {/* Quote Icon */}
            <div className='flex justify-between mb-6'>
              <Quote className={`w-8 h-8 lg:w-10 lg:h-10 transition-colors ${quote}`} />
              <Quote className={`w-8 h-8 lg:w-10 lg:h-10 transition-colors rotate-180 ${quote}`} />
            </div>

            {/* Testimonial IMG & Author  */}
            <div className="">
              {testimonial.image && (
                <img
                  src={testimonial.image}
                  alt={`Depoimento ${index + 1}`}
                  className="object-cover rounded-xl animate-glow-white-img"
                />
              )}
            </div>
          </div>
        ))
      }
    </section >
  );
}

export default TestimonialsPrints;