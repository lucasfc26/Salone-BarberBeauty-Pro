import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { w as ArrowUpRight, x as ArrowDownRight, y as Banknote, z as Smartphone, E as CreditCard, R as Repeat } from "../_libs/lucide-react.mjs";
const transactions = [{
  d: "24/10",
  desc: "Combo Premium — Rafael M.",
  method: "PIX",
  value: 130,
  type: "in"
}, {
  d: "24/10",
  desc: "Aluguel atelier",
  method: "Transferência",
  value: -3500,
  type: "out"
}, {
  d: "23/10",
  desc: "Corte + Barba — Pedro C.",
  method: "Cartão",
  value: 110,
  type: "in"
}, {
  d: "23/10",
  desc: "Comissão Lucas V.",
  method: "PIX",
  value: -820,
  type: "out"
}, {
  d: "22/10",
  desc: "Kit Cavalheiro — venda",
  method: "Cartão",
  value: 249,
  type: "in"
}, {
  d: "22/10",
  desc: "Pigmentação — João V.",
  method: "Dinheiro",
  value: 70,
  type: "in"
}];
function Financeiro() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary mb-2", children: "Financeiro" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl", children: "Fluxo de Caixa" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-4", children: [{
      label: "Entradas (Mês)",
      value: "R$ 62.480",
      icon: ArrowUpRight,
      color: "text-emerald-400"
    }, {
      label: "Saídas (Mês)",
      value: "R$ 14.280",
      icon: ArrowDownRight,
      color: "text-rose-400"
    }, {
      label: "Saldo",
      value: "R$ 48.200",
      icon: Banknote,
      color: "text-primary"
    }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: c.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: `w-5 h-5 ${c.color}` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl", children: c.value })
    ] }, c.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 glass rounded-xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-6", children: "Movimentações recentes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: transactions.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-3 border-b border-border/20 last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 rounded-md grid place-items-center ${t.type === "in" ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"}`, children: t.type === "in" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownRight, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: t.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                t.d,
                " · ",
                t.method
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `font-display text-lg ${t.type === "in" ? "text-emerald-400" : "text-rose-400"}`, children: [
            t.value > 0 ? "+" : "",
            "R$ ",
            Math.abs(t.value).toLocaleString("pt-BR")
          ] })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-6", children: "Métodos de pagamento" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [{
          name: "PIX",
          icon: Smartphone,
          pct: 48
        }, {
          name: "Cartão",
          icon: CreditCard,
          pct: 35
        }, {
          name: "Dinheiro",
          icon: Banknote,
          pct: 12
        }, {
          name: "Assinatura",
          icon: Repeat,
          pct: 5
        }].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(m.icon, { className: "w-4 h-4 text-primary" }),
              " ",
              m.name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
              m.pct,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-surface-elevated rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full gradient-gold", style: {
            width: `${m.pct}%`
          } }) })
        ] }, m.name)) })
      ] })
    ] })
  ] });
}
export {
  Financeiro as component
};
