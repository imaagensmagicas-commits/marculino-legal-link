import advogado from "@/assets/advogado.jpg";
import { Check } from "lucide-react";

const points = [
  { t: "Atendimento personalizado", d: "Cada cliente é único, e seu caso recebe a atenção que merece." },
  { t: "Transparência total", d: "Honestidade sobre prazos, custos e reais possibilidades do seu caso." },
  { t: "Agilidade comprovada", d: "Resposta rápida, atualizações constantes e decisões eficientes." },
  { t: "Compromisso com resultados", d: "Foco em soluções concretas para defender seus direitos." },
];

export function Sobre() {
  return (
    <section id="sobre" className="bg-background py-24">
      <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gold-gradient opacity-20 blur-2xl" />
          <img
            src={advogado}
            alt="Dr. Marculino, advogado"
            width={900}
            height={1100}
            loading="lazy"
            className="relative w-full rounded-3xl object-cover shadow-elegant"
          />
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Sobre o advogado</span>
          <h2 className="mt-3 font-serif text-3xl text-navy-deep md:text-4xl">
            Atendimento humanizado e comprometido com seus direitos
          </h2>
          <p className="mt-5 text-muted-foreground">
            No <strong className="text-navy-deep">Marculino Advogado</strong>, cada caso é tratado com responsabilidade,
            ética e dedicação. Combinamos técnica jurídica de alto nível com escuta atenta para construir, junto com você,
            a melhor estratégia para o seu caso.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p.t} className="flex gap-4">
                <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gold-gradient text-navy-deep">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="font-serif text-lg text-navy-deep">{p.t}</h3>
                  <p className="text-sm text-muted-foreground">{p.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
