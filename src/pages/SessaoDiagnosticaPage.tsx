import "../styles/sessao-diagnostica.css";
import { Analytics } from "@vercel/analytics/react";
import Hero from "../layouts/sd-sections/Hero";
import IdentifingProblem from "../layouts/sd-sections/IdentifingProblem";
import Explanation from "../layouts/sd-sections/Explanation";
import Author from "../layouts/sd-sections/Author";
import HowItWorks from "../layouts/sd-sections/HowItWorks";
import ImportantFinalInvite from "../layouts/sd-sections/ImportantFinalInvite";
import Seo from "../components/Seo";
import Testimonials from "../layouts/sd-sections/Testimonials";

export default function SessaoDiagnosticaPage() {
  
  return (
    <main className="sd-body-font min-h-screen bg-[#F6F2EB] text-[#5B4A3E]">
      <Seo
        title="Sessão Diagnóstica | Julaine Guimarães"
        description="Conversa estratégica de 40-45 minutos para gerar clareza emocional, direção de vida e próximos passos práticos."
      />
      <Analytics />

      <Hero /> {/* 1. Hero — headline forte + foto + features */}
      <IdentifingProblem /> {/* 2. Identificação — dores + reflexão */}
      <Explanation />{/* 3. Explicação — o que é + checklist */}
      <Testimonials />
      <Author /> {/* 4. Autoridade — bio da Julaine */}
      <HowItWorks /> {/* 5. Como funciona — 4 passos */}
      {/* <ForWho />{/* 6. Para quem é / não é } */}
      <ImportantFinalInvite /> {/* 7. Escassez + CTA final */}

      {/* <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="reveal sd-delay-1 rounded-3xl border border-[#C8A96A]/50 bg-[#FDFCFB] p-8 shadow-[0_16px_40px_rgba(92,64,51,0.08)] md:p-10">
            <SectionTitle
              label="Quebra de crença"
              title="Talvez o problema não seja falta de capacidade, mas falta de direção emocional"
              description="Às vezes, você não precisa se esforçar mais. Precisa enxergar melhor o que está acontecendo por dentro para escolher com mais consciência o caminho por fora."
            />

            <div className="mt-8 rounded-2xl bg-[#F6F2EB] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#4F6F63]">Você já se perguntou...</p>
              <ul className="mt-4 space-y-3">
                {reflectionQuestions.map((question) => (
                  <li key={question} className="flex items-start gap-3 text-sm leading-relaxed md:text-base">
                    <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[#C8A96A]" />
                    {question}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal sd-delay-1">
            <SectionTitle
              label="Benefícios"
              title="O que muitas mulheres descobrem nessa sessão"
              description="Muitas vezes, durante essa conversa, surgem percepções importantes que antes não estavam claras. Às vezes, uma única conversa pode abrir uma nova forma de olhar para si mesma."
            />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {discoveries.map((item, index) => (
              <article
                key={item}
                className={`reveal rounded-2xl border border-[#C8A96A]/30 bg-[#FDFCFB] p-5 sd-delay-${(index % 4) + 1}`}
              >
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#4F6F63]" />
                  <p className="text-sm leading-relaxed md:text-base">{item}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="reveal sd-delay-2 mt-12 rounded-3xl border border-[#E8E2D9] bg-[#FDFCFB] p-8 text-center shadow-[0_10px_28px_rgba(92,64,51,0.08)]">
            <h3 className="sd-title-font text-2xl text-[#4F6F63]">Antes de agendar, reflita</h3>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed md:text-base">
              De 0 a 10, como você avaliaria hoje: sua clareza sobre o que deseja para a vida, sua organização emocional diante do dia a dia e sua direção de crescimento pessoal?
            </p>
            <p className="mt-4 font-semibold text-[#4F6F63]">
              Se alguma dessas respostas estiver abaixo de 7, talvez este seja um bom momento para olhar com mais atenção para sua jornada.
            </p>
          </div>
        </div>
      </section> */}

      
    </main>
  );
}