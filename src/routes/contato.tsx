import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Mail, Phone, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Salone" },
      { name: "description", content: "Fale com a equipe Salone. Endereço, horários e formulário de contato." },
    ],
  }),
  component: Contato,
});

const faqs = [
  { q: "Posso reagendar meu horário?", a: "Sim, até 2 horas antes pelo seu painel ou WhatsApp." },
  { q: "Quais formas de pagamento?", a: "PIX, todos os cartões, dinheiro e parcelamento em até 3x sem juros." },
  { q: "Vocês atendem crianças?", a: "Sim, temos profissionais especializados em corte infantil." },
  { q: "Como funciona o cashback?", a: "5% do valor de cada serviço volta como crédito para a próxima visita." },
];

function Contato() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <SiteLayout>
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Contato</p>
        <h1 className="font-display text-5xl md:text-6xl mb-12">Vamos conversar.</h1>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {[
            { icon: MapPin, title: "Endereço", value: "Av. Paulista, 1000 — São Paulo" },
            { icon: Phone, title: "Telefone", value: "+55 (11) 99999-0000" },
            { icon: Mail, title: "E-mail", value: "contato@salone.app" },
          ].map((c) => (
            <div key={c.title} className="glass rounded-xl p-6">
              <c.icon className="w-6 h-6 text-primary mb-4" />
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{c.title}</p>
              <p className="font-medium">{c.value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-3xl mb-6">Envie uma mensagem</h2>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Mensagem enviada!"); }}>
              <input className="w-full bg-surface hairline rounded-md px-4 py-3 focus:outline-none focus:border-primary" placeholder="Seu nome" required />
              <input type="email" className="w-full bg-surface hairline rounded-md px-4 py-3 focus:outline-none focus:border-primary" placeholder="E-mail" required />
              <input className="w-full bg-surface hairline rounded-md px-4 py-3 focus:outline-none focus:border-primary" placeholder="Telefone" />
              <textarea rows={5} className="w-full bg-surface hairline rounded-md px-4 py-3 focus:outline-none focus:border-primary" placeholder="Mensagem" required />
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md text-xs uppercase tracking-widest hover:brightness-110 transition shadow-gold">
                Enviar mensagem
              </button>
            </form>

            <div className="flex gap-3 mt-8">
              <a href="#" className="flex-1 hairline rounded-md py-3 grid place-items-center hover:border-primary hover:text-primary transition">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="flex-1 hairline rounded-md py-3 grid place-items-center hover:border-primary hover:text-primary transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl mb-6">Perguntas frequentes</h2>
            <div className="space-y-3 mb-8">
              {faqs.map((f, i) => (
                <div key={i} className="glass rounded-lg overflow-hidden">
                  <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-5 py-4 flex justify-between items-center">
                    <span className="font-medium text-sm">{f.q}</span>
                    <span className="text-primary text-xl">{open === i ? "−" : "+"}</span>
                  </button>
                  {open === i && <p className="px-5 pb-4 text-sm text-muted-foreground">{f.a}</p>}
                </div>
              ))}
            </div>

            <div className="glass rounded-xl p-6">
              <Clock className="w-6 h-6 text-primary mb-3" />
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Horário de funcionamento</p>
              <ul className="space-y-1 text-sm">
                <li className="flex justify-between"><span>Seg — Sex</span><span>09h — 21h</span></li>
                <li className="flex justify-between"><span>Sábado</span><span>09h — 19h</span></li>
                <li className="flex justify-between"><span>Domingo</span><span className="text-muted-foreground">Fechado</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
