import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Check, Calendar as CalendarIcon, Clock, User, Scissors } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/agendar")({
  head: () => ({
    meta: [
      { title: "Agendar — Salone" },
      {
        name: "description",
        content: "Agende seu horário em poucos cliques. Escolha serviço, barbeiro e horário.",
      },
    ],
  }),
  component: Agendar,
});

const servicos = [
  { id: "corte", name: "Corte Executivo", duration: "45min", price: 85 },
  { id: "barba", name: "Barba Esculpida", duration: "30min", price: 55 },
  { id: "combo", name: "Combo Premium", duration: "1h15", price: 130 },
  { id: "sobr", name: "Sobrancelha", duration: "15min", price: 30 },
  { id: "pig", name: "Pigmentação", duration: "30min", price: 70 },
  { id: "hidra", name: "Hidratação", duration: "20min", price: 45 },
];
const barbeiros = ["André C.", "Emanuelly"];
const horarios = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

function Agendar() {
  const [step, setStep] = useState(1);
  const [servico, setServico] = useState<string>();
  const [barbeiro, setBarbeiro] = useState<string>();
  const [data, setData] = useState<string>();
  const [hora, setHora] = useState<string>();
  const [done, setDone] = useState(false);

  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  if (done) {
    return (
      <SiteLayout>
        <section className="max-w-2xl mx-auto px-6 py-32 text-center">
          <div className="w-20 h-20 rounded-full gradient-gold grid place-items-center mx-auto mb-8">
            <Check className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-display text-5xl mb-4">Agendamento confirmado!</h1>
          <p className="text-muted-foreground mb-8">
            Enviamos os detalhes para seu WhatsApp e e-mail. Te esperamos no Salone.
          </p>
          <div className="glass rounded-xl p-6 text-left space-y-3 mb-8">
            <Row label="Serviço" value={servicos.find((s) => s.id === servico)?.name} />
            <Row label="Barbeiro" value={barbeiro} />
            <Row label="Data" value={data} />
            <Row label="Horário" value={hora} />
          </div>
          <button
            onClick={() => {
              setDone(false);
              setStep(1);
            }}
            className="text-xs uppercase tracking-widest text-primary hover:underline"
          >
            Novo agendamento
          </button>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Agendamento</p>
        <h1 className="font-display text-5xl md:text-6xl mb-12">Reserve seu ritual.</h1>

        {/* Steps */}
        <div className="flex items-center justify-between mb-10">
          {[
            { n: 1, l: "Serviço", icon: Scissors },
            { n: 2, l: "Barbeiro", icon: User },
            { n: 3, l: "Data", icon: CalendarIcon },
            { n: 4, l: "Horário", icon: Clock },
          ].map((s, i) => (
            <div key={s.n} className="flex items-center flex-1">
              <div
                className={`flex items-center gap-3 ${step >= s.n ? "text-primary" : "text-muted-foreground"}`}
              >
                <div
                  className={`w-10 h-10 rounded-full grid place-items-center ${step >= s.n ? "bg-primary text-primary-foreground" : "hairline"}`}
                >
                  <s.icon className="w-4 h-4" />
                </div>
                <span className="hidden md:inline text-xs uppercase tracking-widest">{s.l}</span>
              </div>
              {i < 3 && (
                <div className={`flex-1 h-px mx-3 ${step > s.n ? "bg-primary" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="glass rounded-xl p-6 md:p-10 min-h-[380px]">
          {step === 1 && (
            <div className="grid sm:grid-cols-2 gap-3">
              {servicos.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setServico(s.id)}
                  className={`text-left hairline rounded-lg p-5 transition ${servico === s.id ? "border-primary bg-gold-soft" : "hover:border-primary/50"}`}
                >
                  <div className="font-display text-xl mb-1">{s.name}</div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{s.duration}</span>
                    <span className="text-primary">R$ {s.price}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
          {step === 2 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {barbeiros.map((b) => (
                <button
                  key={b}
                  onClick={() => setBarbeiro(b)}
                  className={`hairline rounded-lg p-5 transition ${barbeiro === b ? "border-primary bg-gold-soft" : "hover:border-primary/50"}`}
                >
                  <div className="w-14 h-14 rounded-full gradient-gold mx-auto mb-3 grid place-items-center text-primary-foreground font-bold text-lg">
                    {b[0]}
                  </div>
                  <div className="text-sm font-medium">{b}</div>
                </button>
              ))}
            </div>
          )}
          {step === 3 && (
            <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
              {dates.map((d) => {
                const v = d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
                return (
                  <button
                    key={v}
                    onClick={() => setData(v)}
                    className={`hairline rounded-lg p-3 transition ${data === v ? "border-primary bg-gold-soft text-primary" : "hover:border-primary/50"}`}
                  >
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {d.toLocaleDateString("pt-BR", { weekday: "short" })}
                    </div>
                    <div className="font-display text-lg mt-1">{d.getDate()}</div>
                  </button>
                );
              })}
            </div>
          )}
          {step === 4 && (
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {horarios.map((h) => (
                <button
                  key={h}
                  onClick={() => setHora(h)}
                  className={`hairline rounded-lg py-3 transition ${hora === h ? "border-primary bg-primary text-primary-foreground" : "hover:border-primary/50"}`}
                >
                  {h}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={back}
            disabled={step === 1}
            className="hairline px-6 py-3 rounded-md text-xs uppercase tracking-widest disabled:opacity-30"
          >
            Voltar
          </button>
          {step < 4 ? (
            <button
              onClick={next}
              disabled={
                (step === 1 && !servico) || (step === 2 && !barbeiro) || (step === 3 && !data)
              }
              className="bg-primary text-primary-foreground px-8 py-3 rounded-md text-xs uppercase tracking-widest disabled:opacity-30 hover:brightness-110 transition"
            >
              Continuar
            </button>
          ) : (
            <button
              onClick={() => setDone(true)}
              disabled={!hora}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-md text-xs uppercase tracking-widest disabled:opacity-30 hover:brightness-110 transition shadow-gold"
            >
              Confirmar
            </button>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

function Row({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-muted-foreground uppercase text-xs tracking-widest">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
