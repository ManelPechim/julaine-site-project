import { Brain, Compass, Sparkles, Target, MessageSquareMore  } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";

export default function SdHero() {
  return (
    <main className="flex relative min-h-[92vh] sd-gradient overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(122,155,142,0.22),transparent_55%)]" />
      <div className="absolute -left-28 top-28 h-72 w-72 rounded-full bg-[#C8A96A]/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:pt-24 lg:grid-cols-2 lg:items-center">
        <div className="reveal sd-delay-1 text-[#E8DED4] space-x-2">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8A96A] bg-[#E8DED4] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#7A9B8E]">
            <Sparkles className="h-3.5 w-3.5 text-[#C8A96A]" />
            Sessão Diagnóstica
          </p>
          <h1 className="sd-title-font text-4xl leading-tight md:text-5xl lg:text-6xl">
            Diagnóstico de Direção de Vida
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed ">
            Uma conversa estratégica para mulheres que desejam clareza emocional, direção de vida e novos caminhos de crescimento.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed ">
            Em 45 minutos, vamos olhar com profundidade para sua realidade atual e identificar padrões emocionais, hábitos e pensamentos que podem estar influenciando suas escolhas.
          </p>
          <p className="mt-5 text-base font-semibold ">
            Muitas mulheres saem dessa sessão com uma clareza que não tinham há anos.
          </p>
          <WhatsAppButton label="Quero agendar minha sessão" className="mt-8 ring-1 ring-[#C8A96A]/40 " />
          <button
            onClick={() => document.getElementById('more')?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 mt-2 ring-1 ring-[#C8A96A]/40 bg-[#5B4A3E] text-sm font-bold tracking-wide transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageSquareMore className="h-4 w-4"/>
            <span className="">Saiba mais</span>
          </button>
        </div>

        <div className="reveal sd-delay-2">
          <div className="rounded-4xl border border-[#C8A96A]/35 bg-[#5B4A3E]/90 p-7 shadow-[0_24px_60px_rgba(92,64,51,0.10)] md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#E8DED4]">
              Conversa estratégica
            </p>
            <p className="mt-2 sd-title-font text-3xl text-[#E8DED4]">
              40-45 minutos de clareza
            </p>
            <div className="mt-7 space-y-4 text-[#E8DED4]">
              <div className="flex items-start gap-3 rounded-xl bg-[#a08c79]/25 border-2 border-[#a08c79] p-4">
                <Brain className="mt-0.5 h-5 w-5 " />
                <p className="text-sm leading-relaxed">
                  Compreensão dos padrões emocionais que podem estar travando seus avanços.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-[#a08c79]/25 border-2 border-[#a08c79] p-4">
                <Target className="mt-0.5 h-5 w-5" />
                <p className="text-sm leading-relaxed">
                  Clareza sobre prioridades, sonhos e direção prática para o seu próximo ciclo.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-[#a08c79]/25 border-2 border-[#a08c79] p-4">
                <Compass className="mt-0.5 h-5 w-5" />
                <p className="text-sm leading-relaxed">
                  Direcionamento inicial para construir uma rotina mais alinhada com quem você é.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};