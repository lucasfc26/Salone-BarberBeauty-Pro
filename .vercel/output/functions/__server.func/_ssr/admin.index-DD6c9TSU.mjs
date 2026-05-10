import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { W as Wallet, T as TrendingUp, j as Users, h as Calendar, r as ArrowUp, s as ArrowDown } from "../_libs/lucide-react.mjs";
const kpis = [{
  label: "Faturamento (Hoje)",
  value: "R$ 2.450",
  delta: "+12%",
  up: true,
  icon: Wallet
}, {
  label: "Faturamento (Mês)",
  value: "R$ 48.200",
  delta: "+8%",
  up: true,
  icon: TrendingUp
}, {
  label: "Clientes Ativos",
  value: "1.842",
  delta: "+24",
  up: true,
  icon: Users
}, {
  label: "Agendamentos",
  value: "126",
  delta: "−3",
  up: false,
  icon: Calendar
}];
const services = [{
  name: "Corte Executivo",
  pct: 45,
  n: 142
}, {
  name: "Combo Premium",
  pct: 30,
  n: 98
}, {
  name: "Barba Esculpida",
  pct: 18,
  n: 56
}, {
  name: "Pigmentação",
  pct: 7,
  n: 24
}];
const upcoming = [{
  time: "10:00",
  name: "Rafael Mendes",
  service: "Corte Executivo",
  barber: "Lucas V."
}, {
  time: "11:00",
  name: "Pedro Cavalcante",
  service: "Combo Premium",
  barber: "Mateus R."
}, {
  time: "13:30",
  name: "André Silva",
  service: "Barba Esculpida",
  barber: "Diego L."
}, {
  time: "15:00",
  name: "João Vitor",
  service: "Pigmentação",
  barber: "Carlos B."
}];
function Dashboard() {
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between border-b border-border/40 pb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary mb-2", children: today }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl", children: "Bom dia, Julian." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex gap-2", children: ["Hoje", "Semana", "Mês", "Ano"].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `px-3 py-1.5 text-xs uppercase tracking-widest rounded-md ${i === 2 ? "bg-primary text-primary-foreground" : "hairline hover:border-primary"}`, children: p }, p)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: kpis.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-6 hover:border-primary/40 transition group relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gold-soft opacity-0 group-hover:opacity-100 transition" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex justify-between items-start mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: k.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(k.icon, { className: "w-4 h-4 text-primary opacity-60" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-baseline gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl", children: k.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs flex items-center gap-1 ${k.up ? "text-emerald-400" : "text-rose-400"}`, children: [
          k.up ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "w-3 h-3" }),
          k.delta
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-end gap-1 h-8", children: [40, 65, 50, 80, 60, 90, 75].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 rounded-t bg-primary/30 group-hover:bg-primary/60 transition", style: {
        height: `${h}%`
      } }, i)) })
    ] }, k.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 glass rounded-xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: "Crescimento de Receita" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["1S", "1M", "1A"].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `px-3 py-1 text-[10px] uppercase tracking-widest rounded ${i === 1 ? "bg-primary text-primary-foreground" : "hairline"}`, children: p }, p)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 flex items-end gap-3 px-2 border-b border-l border-border/40 relative", children: [{
          v: 35,
          l: "S1",
          val: "R$ 21k"
        }, {
          v: 55,
          l: "S2",
          val: "R$ 32k"
        }, {
          v: 70,
          l: "S3",
          val: "R$ 45k"
        }, {
          v: 90,
          l: "S4",
          val: "R$ 58k",
          active: true
        }, {
          v: 60,
          l: "S5",
          val: "R$ 38k"
        }, {
          v: 80,
          l: "S6",
          val: "R$ 51k"
        }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center gap-2 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "opacity-0 group-hover:opacity-100 transition text-xs font-medium text-primary", children: b.val }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full rounded-t transition ${b.active ? "gradient-gold shadow-gold" : "bg-surface-elevated hairline group-hover:bg-primary/30"}`, style: {
            height: `${b.v}%`
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: b.l })
        ] }, b.l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-6", children: "Top Serviços" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
              s.pct,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-surface-elevated rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full gradient-gold", style: {
            width: `${s.pct}%`
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mt-1", children: [
            s.n,
            " agendamentos"
          ] })
        ] }, s.name)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: "Próximos agendamentos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-xs uppercase tracking-widest text-primary hover:underline", children: "Ver agenda" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3", children: "Horário" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Cliente" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Serviço" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Barbeiro" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: upcoming.map((u, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/20 hover:bg-white/5 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 text-primary font-medium", children: u.time }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "flex items-center gap-3 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-surface-elevated grid place-items-center text-xs", children: u.name[0] }),
            u.name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: u.service }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: u.barber }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex text-[10px] uppercase tracking-widest text-primary bg-gold-soft px-2 py-1 rounded", children: "Confirmado" }) })
        ] }, i)) })
      ] }) })
    ] })
  ] });
}
export {
  Dashboard as component
};
