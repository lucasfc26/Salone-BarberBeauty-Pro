import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./SiteLayout-DafjFgnX.mjs";
import { f as Check, g as Scissors, U as User, h as Calendar, c as Clock } from "../_libs/lucide-react.mjs";
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
const servicos = [{
  id: "corte",
  name: "Corte Executivo",
  duration: "45min",
  price: 85
}, {
  id: "barba",
  name: "Barba Esculpida",
  duration: "30min",
  price: 55
}, {
  id: "combo",
  name: "Combo Premium",
  duration: "1h15",
  price: 130
}, {
  id: "sobr",
  name: "Sobrancelha",
  duration: "15min",
  price: 30
}, {
  id: "pig",
  name: "Pigmentação",
  duration: "30min",
  price: 70
}, {
  id: "hidra",
  name: "Hidratação",
  duration: "20min",
  price: 45
}];
const barbeiros = ["André C.", "Emanuelly"];
const horarios = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
function Agendar() {
  const [step, setStep] = reactExports.useState(1);
  const [servico, setServico] = reactExports.useState();
  const [barbeiro, setBarbeiro] = reactExports.useState();
  const [data, setData] = reactExports.useState();
  const [hora, setHora] = reactExports.useState();
  const [done, setDone] = reactExports.useState(false);
  const dates = Array.from({
    length: 14
  }, (_, i) => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() + i);
    return d;
  });
  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 1));
  if (done) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-2xl mx-auto px-6 py-32 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full gradient-gold grid place-items-center mx-auto mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-10 h-10 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl mb-4", children: "Agendamento confirmado!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Enviamos os detalhes para seu WhatsApp e e-mail. Te esperamos no Salone." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-6 text-left space-y-3 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Serviço", value: servicos.find((s) => s.id === servico)?.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Barbeiro", value: barbeiro }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Data", value: data }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Horário", value: hora })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        setDone(false);
        setStep(1);
      }, className: "text-xs uppercase tracking-widest text-primary hover:underline", children: "Novo agendamento" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-4xl mx-auto px-6 pt-16 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary mb-3", children: "Agendamento" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl mb-12", children: "Reserve seu ritual." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-10", children: [{
      n: 1,
      l: "Serviço",
      icon: Scissors
    }, {
      n: 2,
      l: "Barbeiro",
      icon: User
    }, {
      n: 3,
      l: "Data",
      icon: Calendar
    }, {
      n: 4,
      l: "Horário",
      icon: Clock
    }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-3 ${step >= s.n ? "text-primary" : "text-muted-foreground"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 rounded-full grid place-items-center ${step >= s.n ? "bg-primary text-primary-foreground" : "hairline"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-4 h-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline text-xs uppercase tracking-widest", children: s.l })
      ] }),
      i < 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex-1 h-px mx-3 ${step > s.n ? "bg-primary" : "bg-border"}` })
    ] }, s.n)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-6 md:p-10 min-h-[380px]", children: [
      step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: servicos.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setServico(s.id), className: `text-left hairline rounded-lg p-5 transition ${servico === s.id ? "border-primary bg-gold-soft" : "hover:border-primary/50"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl mb-1", children: s.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.duration }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
            "R$ ",
            s.price
          ] })
        ] })
      ] }, s.id)) }),
      step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: barbeiros.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setBarbeiro(b), className: `hairline rounded-lg p-5 transition ${barbeiro === b ? "border-primary bg-gold-soft" : "hover:border-primary/50"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full gradient-gold mx-auto mb-3 grid place-items-center text-primary-foreground font-bold text-lg", children: b[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: b })
      ] }, b)) }),
      step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-7 gap-2", children: dates.map((d) => {
        const v = d.toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "short"
        });
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setData(v), className: `hairline rounded-lg p-3 transition ${data === v ? "border-primary bg-gold-soft text-primary" : "hover:border-primary/50"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: d.toLocaleDateString("pt-BR", {
            weekday: "short"
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg mt-1", children: d.getDate() })
        ] }, v);
      }) }),
      step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-5 gap-2", children: horarios.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setHora(h), className: `hairline rounded-lg py-3 transition ${hora === h ? "border-primary bg-primary text-primary-foreground" : "hover:border-primary/50"}`, children: h }, h)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: back, disabled: step === 1, className: "hairline px-6 py-3 rounded-md text-xs uppercase tracking-widest disabled:opacity-30", children: "Voltar" }),
      step < 4 ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: next, disabled: step === 1 && !servico || step === 2 && !barbeiro || step === 3 && !data, className: "bg-primary text-primary-foreground px-8 py-3 rounded-md text-xs uppercase tracking-widest disabled:opacity-30 hover:brightness-110 transition", children: "Continuar" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setDone(true), disabled: !hora, className: "bg-primary text-primary-foreground px-8 py-3 rounded-md text-xs uppercase tracking-widest disabled:opacity-30 hover:brightness-110 transition shadow-gold", children: "Confirmar" })
    ] })
  ] }) });
}
function Row({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground uppercase text-xs tracking-widest", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: value })
  ] });
}
export {
  Agendar as component
};
