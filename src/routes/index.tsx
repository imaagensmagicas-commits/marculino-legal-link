import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { ComoFunciona } from "@/components/ComoFunciona";
import { Areas } from "@/components/Areas";
import { Diagnostico } from "@/components/Diagnostico";
import { Sobre } from "@/components/Sobre";
import { Depoimentos } from "@/components/Depoimentos";
import { Contato } from "@/components/Contato";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const TITLE = "Marculino Advogado — Diagnóstico Jurídico Gratuito";
const DESCRIPTION =
  "Receba uma análise jurídica inicial gratuita e fale diretamente com um advogado. Direito Trabalhista, Previdenciário, Família, Consumidor e Cível.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "advogado, diagnóstico jurídico, direito trabalhista, previdenciário, família, consumidor, Marculino Advogado" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Marculino Advogado",
          description: DESCRIPTION,
          telephone: "+55 88 99695-2462",
          areaServed: "BR",
          sameAs: ["https://www.instagram.com/marculino.adv"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <ComoFunciona />
      <Areas />
      <Diagnostico />
      <Sobre />
      <Depoimentos />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
