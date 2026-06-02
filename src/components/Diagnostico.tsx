import { useState } from "react";
import { CheckCircle2, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppFloat";

type Answers = {
  area: string;
  situacao: string;
  urgente: string;
  nome: string;
  whatsapp: string;
  cidade: string;
};

const initial: Answers = { area: "", situacao: "", urgente: "", nome: "", whatsapp: "", cidade: "" };
const areaOptions = ["Trabalhista", "Previdenciária", "Família", "Consumidor", "Outro"];

export function Diagnostico() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState<Answers>(initial);
  const [done, setDone] = useState(false);

  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => Math.max(0, s - 1));

  const submit = () => {
    setDone(true);
    // Open WhatsApp with a prefilled summary
    const msg = encodeURIComponent(
      `Olá! Acabei de preencher o diagnóstico no site.\n\nÁrea: ${a.area}\nUrgente: ${a.urgente}\nNome: ${a.nome}\nCidade: ${a.cidade}\nWhatsApp: ${a.whatsapp}\n\nSituação: ${a.situacao}`,
    );
    setTimeout(() => {
      window.open(`https://wa.me/5588996952462?text=${msg}`, "_blank");
    }, 800);
  };

  const steps = [
    {
      label: "Qual área jurídica você precisa?",
      content: (
        <div className="grid gap-3 sm:grid-cols-2">
          {areaOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setA({ ...a, area: opt })}
              className={`rounded-xl border-2 px-5 py-4 text-left font-medium transition-all ${
                a.area === opt
                  ? "border-gold bg-gold/10 text-navy-deep"
                  : "border-border bg-card text-foreground hover:border-gold/50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      ),
      valid: !!a.area,
    },
    {
      label: "Descreva brevemente sua situação",
      content: (
        <textarea
          value={a.situacao}
          onChange={(e) => setA({ ...a, situacao: e.target.value })}
          rows={5}
          placeholder="Conte o que está acontecendo..."
          className="w-full rounded-xl border-2 border-border bg-card px-5 py-4 text-foreground outline-none transition-colors focus:border-gold"
        />
      ),
      valid: a.situacao.trim().length > 5,
    },
    {
      label: "Seu caso é urgente?",
      content: (
        <div className="grid gap-3 sm:grid-cols-2">
          {["Sim", "Não"].map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setA({ ...a, urgente: opt })}
              className={`rounded-xl border-2 px-5 py-5 text-center font-semibold transition-all ${
                a.urgente === opt
                  ? "border-gold bg-gold/10 text-navy-deep"
                  : "border-border bg-card text-foreground hover:border-gold/50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      ),
      valid: !!a.urgente,
    },
    {
      label: "Nome completo",
      content: (
        <input
          value={a.nome}
          onChange={(e) => setA({ ...a, nome: e.target.value })}
          placeholder="Seu nome completo"
          className="w-full rounded-xl border-2 border-border bg-card px-5 py-4 text-foreground outline-none focus:border-gold"
        />
      ),
      valid: a.nome.trim().length > 2,
    },
    {
      label: "WhatsApp para contato",
      content: (
        <input
          value={a.whatsapp}
          onChange={(e) => setA({ ...a, whatsapp: e.target.value })}
          placeholder="(00) 00000-0000"
          inputMode="tel"
          className="w-full rounded-xl border-2 border-border bg-card px-5 py-4 text-foreground outline-none focus:border-gold"
        />
      ),
      valid: a.whatsapp.replace(/\D/g, "").length >= 10,
    },
    {
      label: "Em qual cidade você está?",
      content: (
        <input
          value={a.cidade}
          onChange={(e) => setA({ ...a, cidade: e.target.value })}
          placeholder="Sua cidade / estado"
          className="w-full rounded-xl border-2 border-border bg-card px-5 py-4 text-foreground outline-none focus:border-gold"
        />
      ),
      valid: a.cidade.trim().length > 1,
    },
  ];

  const current = steps[step];
  const isLast = step === steps.length - 1;
  const progress = ((step + (done ? 1 : 0)) / steps.length) * 100;

  return (
    <section id="diagnostico" className="bg-hero py-24 text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            <Sparkles className="h-3.5 w-3.5" />
            Diagnóstico gratuito
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl">
            Análise jurídica inicial <span className="text-gold">100% gratuita</span>
          </h2>
          <p className="mt-4 text-primary-foreground/75">
            Responda 6 perguntas rápidas. Em seguida, um advogado entra em contato pelo WhatsApp.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-white/10 bg-white p-8 text-foreground shadow-elegant md:p-10">
          {!done ? (
            <>
              <div className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full bg-gold-gradient transition-all duration-500"
                  style={{ width: `${(step / steps.length) * 100}%` }}
                />
              </div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold">
                Pergunta {step + 1} de {steps.length}
              </div>
              <h3 className="mb-6 font-serif text-2xl text-navy-deep md:text-3xl">{current.label}</h3>
              <div>{current.content}</div>

              <div className="mt-8 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={prev}
                  disabled={step === 0}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground transition-colors disabled:opacity-30 hover:text-navy-deep"
                >
                  <ArrowLeft className="h-4 w-4" /> Voltar
                </button>
                <button
                  type="button"
                  disabled={!current.valid}
                  onClick={isLast ? submit : next}
                  className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3 text-sm font-bold text-navy-deep shadow-gold transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isLast ? "Enviar diagnóstico" : "Próxima"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </>
          ) : (
            <div className="py-8 text-center">
              <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient">
                <CheckCircle2 className="h-9 w-9 text-navy-deep" />
              </div>
              <h3 className="font-serif text-3xl text-navy-deep">Obrigado, {a.nome.split(" ")[0]}!</h3>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Sua solicitação foi registrada com sucesso. Em breve entraremos em contato pelo WhatsApp.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                Falar agora no WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
