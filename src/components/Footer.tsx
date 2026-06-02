import { Scale, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep py-12 text-primary-foreground/80">
      <div className="container mx-auto grid gap-8 px-6 md:grid-cols-3 md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-gold" />
            <span className="font-serif text-lg font-semibold text-primary-foreground">
              Marculino <span className="text-gold">Advogado</span>
            </span>
          </div>
          <p className="mt-3 text-sm">
            Defendendo seus direitos com seriedade e compromisso.
          </p>
        </div>

        <div className="text-sm md:text-center">
          <div className="font-semibold text-primary-foreground">Atendimento</div>
          <div className="mt-1">Segunda a Sábado · 8h às 20h</div>
          <div>Atendimento online em todo o Brasil</div>
        </div>

        <div className="flex gap-3 md:justify-end">
          <a
            href="https://wa.me/5588996952462"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/marculino.adv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="container mx-auto mt-10 border-t border-white/10 px-6 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Marculino Advogado. Todos os direitos reservados.
      </div>
    </footer>
  );
}
