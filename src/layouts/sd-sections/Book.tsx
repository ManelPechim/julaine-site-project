import { UserRoundPen, Rose } from "lucide-react";

export default function Book() {

  const bookInfoItems = [
    {
      icon: UserRoundPen,
      text: <p>Os livros "<i>Inteligência Emocional na Prática</i>" e "<i>HAS, o Despertar</i>" são
        obras que já impactaram milhares de mulheres em seus processos de autoconhecimento,
        clareza emocional e transformação pessoal</p>
    },
    {
      icon: Rose,
      text: <p>Mais de 3.000 exemplares dos livros "<i>Inteligência Emocional na Prática</i>" e "<i>HAS, o Despertar</i>" já
        impactaram mulheres em seus processos de autoconhecimento e transformação.</p>
    },

  ];

  const books = [
    {
      name: "Inteligência Emocional na Prática",
      img: '/sd-book.png',

    },
    {
      name: "HAS (Hoje Amanhã e Sempre), o Despertar!",
      img: '/has-book-removebg.png',
    },
  ];

  return (
    <main className="flex flex-col gap-20 items-center py-8 px-6 min-h-[75vh] md:min-h-[75vh] lg:min-h-[86vh] reveal sd-gradient shadow-xl overflow-">
      {/* Decorative circles (subtle, behind content) */}
      <span className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 z-10" />
      <span className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 z-10" />

      <div className="flex flex-col items-center">
        <h1 className="text-[13px] lg:text-[21px] tracking-[0.2em] uppercase text-[#C8A96A] font-bold">
          Livros Lançados
        </h1>
        {/* Info card */}
        <section className="flex gap-2 p-1">
          {bookInfoItems.map(({ icon, text }, index) => {
            const Icon = icon;
            return (
              <li key={index} className="flex mt-2 w-full md:max-w-xs lg:max-w-lg">
                <div className="flex items-start gap-2 text-xs p-2 rounded-lg bg-gradient-to-br from-[#F7F1E7] via-[#E9DFC9] to-[#C8A96A] text-black/70 font-medium">
                  <span className="bg-[#F6F2EB] border border-[#C8A96A]/30 p-1 rounded-md">
                    <Icon className="size-4 md:size-6" />
                  </span>
                  <span className="text-[10px] md:text-sm leading-relaxed">
                    {text}
                  </span>
                </div>
              </li>
            );
          })}
        </section>
      </div>

      {/* Books cards float section */}
      <main className="flex py-12">
        {books.map(({ img, name }, index) => (
          <section key={index}
            className="flex justify-center items-center w-full p-1 lg:p-2 h-23 md:h-40 lg:h-80 rounded-2xl"
          >
            <aside className="flex flex-col min-h-full lg:gap-5 p-5 md:p-5 relative z-20 max-w-[1120px] border-2 border-[#C8A96A] bg-white/2 text-[#2b3b33] rounded-2xl shadow-2xl backdrop-blur-xs">
              <div className="flex flex-col items-center justify-center gap-2 w-[16vh] h-[22vh] md:w-full md:h-full lg:h-[50vh] lg:w-[52vh]">
                <h2 className="flex gap-22 sd-title-font text-xs md:text-2xl text-white">
                  {name}
                </h2>
                {/* Divider line */}<div className="mt-1 mb-2 h-0.5 w-full bg-linear-to-r from-[#C8A96A] to-transparent" />
                <div className="flex gap-10 justify-center md:size-auto lg:size-auto p-3 lg:p-4 rounded-3xl bg-gradient-to-br from-[#F7F1E7] via-[#E9DFC9] to-[#C8A96A] ring-1 ring-[#C8A96A]/40 shadow-2xl">
                  <img
                    src={img}
                    className="object-cover w-40 md:w-50 lg:w-72 h-[220px] md:h-full lg:h-[320px] rounded-2xl shadow-xl duration-300"
                  />
                </div>
              </div>
            </aside>
          </section>
        ))}
      </main>
    </main>
  );
};