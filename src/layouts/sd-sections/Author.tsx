import { BookOpen, Clock, Users } from "lucide-react";

const credentials = [
  { icon: BookOpen, label: "2 livros publicados" },
  { icon: Users, label: "Centenas de mulheres impactadas" },
  { icon: Clock, label: "Educadora desde 2005" },
];

export default function Author() {
  return (
    <main className="relative overflow-hidden sd-gradient py-16 md:py-20 reveal">
      {/* Decorative circle */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/5 opacity-40" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full border border-white/5 opacity-30" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        {/* Photo column */}
        <div className="reveal sd-delay-1 relative mx-auto w-full max-w-[22rem]">
          <div className="overflow-hidden rounded-3xl border-2 border-[#CBBFAF]/50 shadow-[0_16px_48px_rgba(0,0,0,0.25)]">
            <img
              src="/img5.jpeg"
              alt="Julaine Guimarães, especialista em desenvolvimento humano integral"
              className="block h-100 w-full object-cover object-top md:h-115"
            />
          </div>

          {/* floating badge */}
          <div className="absolute -bottom-4 -right-4 flex items-center gap-3 rounded-2xl border border-[#C8A96A]/50 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2EB]">
              <BookOpen className="h-5 w-5 text-[#4F6F63]" />
            </div>
            <div>
              {/* <p className="text-xs font-bold text-[#4F6F63]">3.000+ exemplares</p> */}
              <p className="text-[11px] text-[#4F6F63]">
                Mentora de mulheres!
                <br />
                Mente, emoção e prosperidade feminina.</p>
            </div>
          </div>
        </div>

        {/* Text column */}
        <div className="reveal sd-delay-2 text-[#E8DED4]">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#7A9B8E]/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#E8DED4]">
            Quem irá conduzir essa sessão
          </p>
          <h2 className="sd-title-font mb-1 text-3xl leading-tight md:text-4xl">
            Julaine Guimarães
          </h2>
          <p className=" text-sm font-semibold uppercase tracking-wider text-[#C8A96A]">
            Especialista em Desenvolvimento Humano Integral
          </p>

          {/* Divider line */}
          <div className="mb-4 mt-4 h-0.5 w-full bg-linear-to-r from-[#C8A96A] to-transparent" />

          <p className="text-sm leading-relaxed md:text-base">
            Mentora de mulheres, neuropsicopedagoga, terapeuta de TFT, escritora,
            educadora e pesquisadora com foco em inteligência emocional,
            neurociência aplicada e autoconhecimento.
          </p>
          <p className="mt-4 text-sm leading-relaxed md:text-base">
            Educadora desde <strong className="text-white">2005</strong>, já
            impactou centenas de mulheres por meio de mentorias, formações e
            treinamentos. É autora dos livros{" "}
            <em className="text-[#CBBFAF]">Inteligência Emocional na Prática</em>{" "}
            e{" "}
            <em className="text-[#CBBFAF]">HAS – Hoje, Amanhã e Sempre: O Despertar</em>.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#CBBFAF] md:text-base">
            Seu propósito é apoiar mulheres a saírem da paralisia emocional,
            retomarem a própria direção e criarem caminhos de vida mais alinhados
            com quem realmente são.
          </p>

          {/* credentials strip */}
          <div className="mt-8 flex flex-wrap gap-5 border-t border-white/10 pt-6">
            {credentials.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-[#C8A96A]" />
                <span className="text-xs text-[#CBBFAF]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}