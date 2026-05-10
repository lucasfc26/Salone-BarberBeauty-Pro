import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { i as Plus, a as Search, b as Star } from "../_libs/lucide-react.mjs";
const clients = [{
  name: "Rafael Mendes",
  visits: 24,
  last: "Hoje",
  spent: 2480,
  level: "VIP"
}, {
  name: "Pedro Cavalcante",
  visits: 18,
  last: "2d",
  spent: 1850,
  level: "Gold"
}, {
  name: "André Silva",
  visits: 12,
  last: "1sem",
  spent: 980,
  level: "Gold"
}, {
  name: "João Vitor",
  visits: 8,
  last: "2sem",
  spent: 620,
  level: "Silver"
}, {
  name: "Marcos Lopes",
  visits: 32,
  last: "3d",
  spent: 3120,
  level: "VIP"
}, {
  name: "Bruno Reis",
  visits: 6,
  last: "1mês",
  spent: 480,
  level: "Silver"
}];
function Clientes() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary mb-2", children: "Clientes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl", children: "1.842 clientes" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "bg-primary text-primary-foreground px-5 py-3 rounded-md text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:brightness-110 transition shadow-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
        " Novo cliente"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Buscar cliente...", className: "w-full bg-surface hairline rounded-md pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6", children: "Cliente" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Nível" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Visitas" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Última" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Total gasto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", {})
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: clients.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/20 hover:bg-white/5 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full gradient-gold grid place-items-center text-primary-foreground font-bold text-xs", children: c.name[0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: c.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: [
              "Cashback R$ ",
              (c.spent * 0.05).toFixed(0)
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-primary bg-gold-soft px-2 py-1 rounded", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-primary" }),
          c.level
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: c.visits }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: c.last }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "font-display text-primary", children: [
          "R$ ",
          c.spent.toLocaleString("pt-BR")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-xs uppercase tracking-widest text-primary hover:underline", children: "Ver" }) })
      ] }, c.name)) })
    ] }) })
  ] });
}
export {
  Clientes as component
};
