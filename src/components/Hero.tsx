import heroImg from "@/assets/hero-lawyer.jpg";
import { WHATSAPP_URL } from "./WhatsAppFloat";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-hero text-primary-foreground">
      <img
        src={heroImg}
        alt="Escritório de advocacia Marculino"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/60 to-navy-deep" />

      <div className="relative container mx-auto px-6 pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold">
            <ShieldCheck className="h-3.5 w-3.5" />
            Marculino Advogado
          </span>
          <h1 className="mt-6 font-serif text-4xl leading-[1.1] md:text-6xl">
            Descubra seus <span className="text-gold">direitos</span> em poucos minutos
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Receba uma análise inicial gratuita do seu caso e fale diretamente com um advogado.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#diagnostico"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-4 text-base font-semibold text-navy-deep shadow-gold transition-transform hover:scale-[1.03]"
            >
              Fazer Diagnóstico Gratuito
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8 text-sm">
            <div>
              <div className="font-serif text-2xl text-gold">+500</div>
              <div className="text-primary-foreground/70">Casos atendidos</div>
            </div>
            <div>
              <div className="font-serif text-2xl text-gold">100%</div>
              <div className="text-primary-foreground/70">Sigilo garantido</div>
            </div>
            <div>
              <div className="font-serif text-2xl text-gold">24h</div>
              <div className="text-primary-foreground/70">Resposta rápida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
