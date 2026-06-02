import { Instagram, MessageCircle, Phone, Scale } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppFloat";

export function Contato() {
  return (
    <section id="contato" className="relative isolate overflow-hidden bg-navy-deep py-24 text-primary-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-navy/30 via-transparent to-transparent opacity-40" />
      
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <Scale className="absolute -right-20 top-0 h-[400px] w-[400px] text-gold" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Contato</span>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl">
            Pronto para defender seus <span className="text-gold">direitos</span>?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Fale agora com o advogado. Atendimento ágil, sigiloso e sem compromisso.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold-gradient px-10 py-5 text-lg font-bold text-navy-deep shadow-gold transition-transform hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" />
            Falar com Advogado Agora
          </a>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 text-left backdrop-blur transition-colors hover:bg-white/10"
            >
              <Phone className="h-6 w-6 text-gold" />
              <div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/60">WhatsApp</div>
                <div className="font-semibold">+55 88 99695-2462</div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/marculino.adv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 text-left backdrop-blur transition-colors hover:bg-white/10"
            >
              <Instagram className="h-6 w-6 text-gold" />
              <div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Instagram</div>
                <div className="font-semibold">@marculino.adv</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
