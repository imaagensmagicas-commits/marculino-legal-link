import { Briefcase, Shield, Heart, ShoppingBag, Scale, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const areas = [
  { icon: Briefcase, title: "Direito Trabalhista", desc: "Rescisões, horas extras, assédio, verbas e direitos do trabalhador." },
  { icon: Shield, title: "Direito Previdenciário", desc: "Aposentadorias, BPC/LOAS, auxílios e revisões de benefícios do INSS." },
  { icon: Heart, title: "Direito de Família", desc: "Divórcio, pensão alimentícia, guarda, inventário e união estável." },
  { icon: ShoppingBag, title: "Direito do Consumidor", desc: "Cobranças indevidas, negativações, produtos com defeito e bancos." },
  { icon: Scale, title: "Direito Cível", desc: "Indenizações, contratos, danos morais e materiais e ações em geral." },
];

export function Areas() {
  return (
    <section id="areas" className="bg-secondary py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Áreas de atuação</span>
          <h2 className="mt-3 font-serif text-3xl text-navy-deep md:text-4xl">
            Atuação especializada para defender seus direitos
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <article
              key={a.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gold-gradient opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy-deep text-gold transition-transform group-hover:scale-110">
                <a.icon className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-2xl text-navy-deep">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy-deep transition-colors hover:text-gold"
              >
                Saiba Mais
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
