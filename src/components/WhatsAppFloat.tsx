import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5588996952462?text=Ol%C3%A1%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20jur%C3%ADdico%20gratuito.";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white animate-float-pulse"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

export { WHATSAPP_URL };
