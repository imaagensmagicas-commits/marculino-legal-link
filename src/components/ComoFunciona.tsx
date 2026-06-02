import { MessageSquare, ClipboardList, Lightbulb, Phone } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Conte seu problema", desc: "Compartilhe sua situação de forma sigilosa e segura." },
  { icon: ClipboardList, title: "Responda perguntas rápidas", desc: "Algumas perguntas objetivas para entendermos seu caso." },
  { icon: Lightbulb, title: "Receba orientação inicial", desc: "Uma análise jurídica preliminar gratuita do seu caso." },
  { icon: Phone, title: "Fale com o advogado", desc: "Atendimento direto via WhatsApp para os próximos passos." },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Como funciona</span>
          <h2 className="mt-3 font-serif text-3xl text-navy-deep md:text-4xl">
            Quatro passos simples para entender seus direitos
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-elegant"
            >
              <div className="absolute -top-3 right-5 rounded-full bg-gold-gradient px-3 py-0.5 text-xs font-bold text-navy-deep">
                Passo {i + 1}
              </div>
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-deep text-gold">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl text-navy-deep">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
