import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./SiteLayout-DafjFgnX.mjs";
import { M as MapPin, P as Phone, d as Mail, e as MessageCircle, I as Instagram, c as Clock } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const faqs = [{
  q: "Posso reagendar meu horário?",
  a: "Sim, até 2 horas antes pelo seu painel ou WhatsApp."
}, {
  q: "Quais formas de pagamento?",
  a: "PIX, todos os cartões, dinheiro e parcelamento em até 3x sem juros."
}, {
  q: "Vocês atendem crianças?",
  a: "Sim, temos profissionais especializados em corte infantil."
}, {
  q: "Como funciona o cashback?",
  a: "5% do valor de cada serviço volta como crédito para a próxima visita."
}];
function Contato() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto px-6 pt-16 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary mb-3", children: "Contato" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl mb-12", children: "Vamos conversar." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-3 gap-6 mb-16", children: [{
      icon: MapPin,
      title: "Endereço",
      value: "Av. Paulista, 1000 — São Paulo"
    }, {
      icon: Phone,
      title: "Telefone",
      value: "+55 (11) 99999-0000"
    }, {
      icon: Mail,
      title: "E-mail",
      value: "contato@salone.app"
    }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "w-6 h-6 text-primary mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-1", children: c.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: c.value })
    ] }, c.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-6", children: "Envie uma mensagem" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-4", onSubmit: (e) => {
          e.preventDefault();
          alert("Mensagem enviada!");
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full bg-surface hairline rounded-md px-4 py-3 focus:outline-none focus:border-primary", placeholder: "Seu nome", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", className: "w-full bg-surface hairline rounded-md px-4 py-3 focus:outline-none focus:border-primary", placeholder: "E-mail", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full bg-surface hairline rounded-md px-4 py-3 focus:outline-none focus:border-primary", placeholder: "Telefone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, className: "w-full bg-surface hairline rounded-md px-4 py-3 focus:outline-none focus:border-primary", placeholder: "Mensagem", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-primary text-primary-foreground px-8 py-3 rounded-md text-xs uppercase tracking-widest hover:brightness-110 transition shadow-gold", children: "Enviar mensagem" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "flex-1 hairline rounded-md py-3 grid place-items-center hover:border-primary hover:text-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "flex-1 hairline rounded-md py-3 grid place-items-center hover:border-primary hover:text-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-5 h-5" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-6", children: "Perguntas frequentes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-8", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-lg overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(open === i ? null : i), className: "w-full text-left px-5 py-4 flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm", children: f.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-xl", children: open === i ? "−" : "+" })
          ] }),
          open === i && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-5 pb-4 text-sm text-muted-foreground", children: f.a })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-6 h-6 text-primary mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-3", children: "Horário de funcionamento" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Seg — Sex" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "09h — 21h" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sábado" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "09h — 19h" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Domingo" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Fechado" })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Contato as component
};
