import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as FileText, D as Download } from "../_libs/lucide-react.mjs";
const reports = [{
  name: "Faturamento Mensal",
  desc: "Resumo financeiro completo do mês",
  period: "Outubro 2024"
}, {
  name: "Performance da Equipe",
  desc: "Métricas individuais e ranking",
  period: "Outubro 2024"
}, {
  name: "Top Serviços",
  desc: "Serviços mais agendados e receita gerada",
  period: "Trimestre"
}, {
  name: "Estoque & Vendas",
  desc: "Movimentação de produtos",
  period: "Outubro 2024"
}, {
  name: "Fidelidade & Cashback",
  desc: "Engajamento dos clientes VIP",
  period: "Anual"
}, {
  name: "Clientes Inativos",
  desc: "Lista de reativação",
  period: "Últimos 60 dias"
}];
function Relatorios() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary mb-2", children: "Relatórios" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl", children: "Inteligência de negócio" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4", children: reports.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-6 hover:border-primary/40 transition group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-gold-soft grid place-items-center text\n                -primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: r.period })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-2", children: r.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: r.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex-1 hairline rounded-md py-2 text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3 h-3" }),
          " PDF"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex-1 hairline rounded-md py-2 text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3 h-3" }),
          " Excel"
        ] })
      ] })
    ] }, r.name)) })
  ] });
}
export {
  Relatorios as component
};
