import { ArrowDown, ArrowRight } from 'lucide-react';
// import { useState, useEffect } from 'react';
import Logo from '../ui/Logo';

const scrollToPricing = () => {
  document.getElementById('pricing')?.scrollIntoView({ behavior: "smooth" });
};

const scrollToTransformation = () => {
  document.getElementById('transformation')?.scrollIntoView({ behavior: "smooth" });
};

const scrollToPainPoints = () => {
  document.getElementById('pain-points')?.scrollIntoView({ behavior: "smooth" });
}

// // Configure a data final aqui (ano, mês-1, dia, hora, minuto, segundo)
// const END_DATE = new Date(2026, 2, 15, 23, 59, 59); // 15 de março de 2026 às 23:59:59

// interface TimeRemaining {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

// const calculateTimeRemaining = (): TimeRemaining => {
//   const now = new Date();
//   const diffTime = END_DATE.getTime() - now.getTime();
  
//   if (diffTime <= 0) {
//     return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//   }

//   const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

//   return { days, hours, minutes, seconds };
// };

export function Hero() {
  // const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(calculateTimeRemaining());

  // useEffect(() => {
  //   // Atualiza o contador a cada segundo
  //   const interval = setInterval(() => {
  //     setTimeRemaining(calculateTimeRemaining());
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="min-h-screen relative z-10 overflow-hidden">
      {/* Header CTA*/}
      {/* <header className='z-20 w-full flex gap-3 md:gap-5 py-2 lg:py-4 text-center items-center justify-center bg-gradient-to-b from-[#914830] to-[#BB7541] animate-glow-white-lg'>
        <span className="text-white text-sm md:text-lg uppercase font-medium">
          Oferta encerra em:
        </span>
        <div className="flex gap-2 md:gap-3 text-white font-bold">
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-2xl">{String(timeRemaining.days).padStart(2, '0')}</span>
            <span className="text-xs uppercase">dias</span>
          </div>
          <span className="text-xl md:text-2xl">:</span>
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-2xl">{String(timeRemaining.hours).padStart(2, '0')}</span>
            <span className="text-xs uppercase">horas</span>
          </div>
          <span className="text-xl md:text-2xl">:</span>
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-2xl">{String(timeRemaining.minutes).padStart(2, '0')}</span>
            <span className="text-xs uppercase">min.</span>
          </div>
          <span className="text-xl md:text-2xl">:</span>
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-2xl">{String(timeRemaining.seconds).padStart(2, '0')}</span>
            <span className="text-xs uppercase">seg.</span>
          </div>
        </div>
      </header> */}

      <section className="flex flex-col lg:py-12 lg:flex-row items-center gap-5 md:gap-25 justify-center relative -z-10 overflow-hidden inset-shadow-[0px_-70px_100px_#0A0A0A]">
        {/*<header className="bg-orange-200 w-full p-6 z-0">
        </header>*/}
        {/* Background Image */}
        <div className='absolute -z-20 top-0 left-0 h-full '>
          <img src="/bg-hero-image.png" className='w-full h-full invisible lg:visible lg:object-cover opacity-15 ' />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center lg:items-stretch justify-start gap-4 lg:gap-6 px-2 py-4 lg:py-6 md:p-12 lg:mt-auto text-center lg:text-left">
          {/* Logo Placeholder */}
          <header className="flex items-center w-35 lg:w-100 lg:h-20 lg:-mx-2 lg:mb-1">
            <Logo className='object-cover lg:w-80 lg:h-30' />
          </header>

          <p className="text-[#E7C19A] text-shadow text-sm md:text-base font-medium tracking-wider uppercase">
            Você não precisa continuar assim
          </p>
          
          <h1 className="text-white overflow-visible text-2xl lg:text-4xl font-bold lg:mb-6 leading-tight text-shadow">
            Organize sua mente.<br />
            Recupere sua <span className="text-gradient animate-glow">clareza emocional</span>.<br />
            Cuide de você e do seu tempo.<br />
            Reconecte-se com seu <span className='text-gradient animate-glow'>propósito</span>.
          </h1>
          
          <p className="text-gray-300 italic text-xs md:text-xl lg:mb-8 max-w-2xl leading-relaxed text-shadow">
            Um guia prático para mulheres que sabem que precisam de mudança, mas não sabem por onde começar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col lg:flex-col gap-4 mb-4">
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col rounded-lg gap-1'>
                <button 
                  onClick={scrollToPricing} 
                  className="animate-pulse-button shadow-black shadow-2xl cursor-pointer uppercase bg-gradient-to-r from-[#BB7541] to-[#A85C42] text-white px-8 py-4 rounded-lg font-semibold text-sm md:text-lg hover:shadow-xl hover:shadow-[#BB7541]/30 transition-all hover:scale-104 duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  Começar minha jornada agora
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 stroke-3 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className='px-2 text-white uppercase font-semibold text-xs md:text-sm'>*Oferta especial por tempo limitado</p>
                 
              </div>

              <div className='flex flex-col w-full gap-1'>
                <button 
                  onClick={scrollToTransformation}
                  className="text-[#E7C19A] cursor-pointer uppercase border border-[#E7C19A]/50 px-8 py-4 rounded-lg font-semibold text-xs md:text-lg hover:bg-[#E7C19A]/10 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Conhecer o método
                </button>
                <p className="text-gray-400 text-xs lg:text-sm">
                  + de <span className="text-white font-semibold">300 mulheres</span> já transformaram suas vidas
                </p>
              </div>
            </div>  
          </div>

          {/* Social Proof */}
          {/*<div className="flex flex-col gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E7C19A] to-[#BB7541] border-2 border-[#0A0A0A]"></div>
              ))}
            </div>
            
          </div>*/}
          
        </div>

         {/* Scroll Indicator */}
        <div 
          className="flex items-center justify-self-center lg:absolute z-10 p-[7px] lg:top-12/13 lg:left-1/2 lg:-translate-x-1/2 border-[#E7C19A] border-2 rounded-4xl text-[#E7C19A] animate-bounce hover:bg-[#A85C42] hover:border-[#A85C42] ease-in-out transition-all cursor-pointer"
          onClick={scrollToPainPoints}
        >
          <ArrowDown className="w-5 h-5 lg:w-6 lg:h-6 " />
        </div>

        {/* E-book Cover */}
        <div className='relative w-60 h-80 md:w-[280px] lg:w-[450px] justify-center items-center flex -z-10 animate-float-slow '>          
          <div className='relative rounded-lg overflow-hidden shadow-2xl shadow-[#BB7541]/60'>
            <img 
              src='/E-BOOK-cover.jpeg' 
              className='block'
            />
            {/* Overlay de sombra sobre a imagem */}
            {/*<div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/40 to-transparent pointer-events-none'></div>*/}
            {/* Efeito de brilho no canto superior */}
            {/*<div className='absolute -top-10 -right-10 w-32 h-32 bg-[#E7C19A]/20 rounded-full blur-2xl pointer-events-none'></div>*/}
          </div>
        </div>

      </section>

    </section >
  );
}
