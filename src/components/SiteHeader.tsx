import { Scale } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-2 text-primary-foreground">
          <Scale className="h-6 w-6 text-gold" />
          <span className="font-serif text-lg font-semibold tracking-wide">
            Marculino <span className="text-gold">Advogado</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-primary-foreground/80 md:flex">
          <a href="#como-funciona" className="hover:text-gold transition-colors">Como funciona</a>
          <a href="#areas" className="hover:text-gold transition-colors">Áreas</a>
          <a href="#diagnostico" className="hover:text-gold transition-colors">Diagnóstico</a>
          <a href="#sobre" className="hover:text-gold transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-gold transition-colors">Contato</a>
        </nav>
        <a
          href="#diagnostico"
          className="hidden rounded-full bg-gold-gradient px-5 py-2 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:scale-105 md:inline-block"
        >
          Diagnóstico Grátis
        </a>
      </div>
    </header>
  );
}
