import { Star, Quote } from "lucide-react";

const items = [
  { n: "Ana Carolina S.", c: "Fortaleza/CE", t: "Trabalhista", q: "Recebi todos os meus direitos rescisórios. Atendimento humano, direto e sem promessas vazias. Recomendo demais." },
  { n: "José Ricardo M.", c: "Juazeiro do Norte/CE", t: "Previdenciário", q: "Consegui minha aposentadoria após anos de tentativa. O Dr. Marculino explicou cada passo com paciência." },
  { n: "Patrícia L.", c: "Crato/CE", t: "Família", q: "Um divórcio difícil conduzido com muito respeito. Sou eternamente grata pelo cuidado com meus filhos." },
  { n: "Marcos V.", c: "Sobral/CE", t: "Consumidor", q: "Resolvemos uma cobrança indevida que me tirava o sono. Resposta rápida e resultado em pouco tempo." },
  { n: "Lúcia F.", c: "Iguatu/CE", t: "Cível", q: "Profissional sério e transparente do começo ao fim. Senti que meu caso era prioridade." },
  { n: "Rafael O.", c: "Fortaleza/CE", t: "Trabalhista", q: "Excelente comunicação pelo WhatsApp. Sempre que precisei, tive retorno no mesmo dia." },
];

export function Depoimentos() {
  return (
    <section className="bg-secondary py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Depoimentos</span>
          <h2 className="mt-3 font-serif text-3xl text-navy-deep md:text-4xl">
            Histórias reais de clientes atendidos
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <figure
              key={it.n}
              className="relative rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-gold/30" />
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground/85">"{it.q}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-serif text-sm font-bold text-gold">
                  {it.n.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-navy-deep">{it.n}</div>
                  <div className="text-xs text-muted-foreground">{it.c} · {it.t}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
