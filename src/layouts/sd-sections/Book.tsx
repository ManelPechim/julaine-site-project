import { UserRoundPen, BookOpen, Rose } from "lucide-react";

export default function Book() {
  const bookInfoItems = [
    {
      icon: UserRoundPen,
      text: "Autora do livro Inteligência Emocional na Prática",
    },
    {
      icon: BookOpen,
      text: "+3.000 de exemplares vendidos",
    },
    {
      icon: Rose,
      text: "Mais de 3.000 exemplares do livro Inteligência Emocional na Prática já impactaram mulheres em seus processos de autoconhecimento e transformação.",
    },
  ];

  return (
    <main className="flex flex-col px-6 gap-8 py-16 min-h-[75vh] md:min-h-[60vh] lg:min-h-[50vh] justify-center reveal sd-gradient shadow-xl">
      {/* E-book float section */}
      <section className="flex justify-center items-center lg:p-6 h-23 md:h-40 lg:h-50 rounded-2xl">
        <aside className="flex flex-col max-w-5xl md:flex-row items-center md:justify-center gap-3 md:gap-3 lg:gap-8 md:12 p-5 md:p-5 relative z-20 border-2 border-[#C8A96A] bg-white/2 text-[#2b3b33] rounded-2xl shadow-2xl backdrop-blur-xs">
          <div className="flex justify-center md:w-92 lg:size-auto p-3 lg:p-4 rounded-3xl bg-gradient-to-br from-[#F7F1E7] via-white to-[#E9DFC9] ring-1 ring-[#C8A96A]/40 shadow-2xl">
            <img
              src="/sd-book.png"
              className="object-cover w-40 md:w-full lg:w-72 h-[220px] md:h-full lg:h-[320px] rounded-2xl shadow-xl duration-300"
            />
          </div>

          {/* Info card */}
          <section className="p-2 md:p-4">
            <h1 className="text-[13px] tracking-[0.2em] uppercase text-[#C8A96A] font-bold">
              E-book
            </h1>
            <h2 className="sd-title-font text-base md:text-2xl text-white">
              Inteligência Emocional na Prática
            </h2>
            {/* Divider line */}<div className="mt-1 mb-4 h-0.5 w-full bg-linear-to-r from-[#C8A96A] to-transparent" />
            <li className="flex flex-col mt-2 gap-3 max-w-md">
              {bookInfoItems.map(({ icon, text }) => {
                const Icon = icon;
                return (
                  <div className="flex items-start gap-2 text-xs p-2 rounded-lg bg-white font-medium">
                    <p className="bg-[#F6F2EB] border border-[#C8A96A]/30 p-1 rounded-md">
                      <Icon className="size-4 md:size-6" />
                    </p>
                    <p className="text-[10px] md:text-sm leading-relaxed">
                      {text}
                    </p>
                  </div>
                );
              })}
            </li>
          </section>
        </aside>
        {/* Decorative circles (subtle, behind content) */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 z-10" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 z-10" />
      </section>
    </main>
  );
};