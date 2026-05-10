import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { i as Plus, v as Trophy } from "../_libs/lucide-react.mjs";
const staff = [{
  name: "André Castelo",
  role: "Master Barber",
  status: "online",
  services: 142,
  revenue: 18200,
  commission: 40,
  rating: 4.9
}, {
  name: "Emanuelly Albuquerque",
  role: "Senior Barber",
  status: "online",
  services: 98,
  revenue: 12400,
  commission: 40,
  rating: 4.8
}, {
  name: "Josy Lira",
  role: "Nail Designer",
  status: "offline",
  services: 85,
  revenue: 10100,
  commission: 20,
  rating: 4.7
}];
function Funcionarios() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary mb-2", children: "Equipe" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl", children: "Profissionais" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "bg-primary text-primary-foreground px-5 py-3 rounded-md text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:brightness-110 transition shadow-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
        " Novo membro"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4", children: staff.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-6 hover:border-primary/40 transition relative", children: [
      i === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 -right-3 w-9 h-9 rounded-full gradient-gold grid place-items-center shadow-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-4 h-4 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full gradient-gold grid place-items-center text-primary-foreground font-bold", children: s.name[0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-background ${s.status === "online" ? "bg-emerald-400" : "bg-muted-foreground"}` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg", children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: s.role })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Serviços", value: `${s.services}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Faturamento", value: `R$ ${s.revenue.toLocaleString("pt-BR")}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Comissão", value: `${s.commission}%` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Avaliação", value: `★ ${s.rating}` })
      ] })
    ] }, s.name)) })
  ] });
}
function Row({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/20 pb-2 last:border-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: value })
  ] });
}
export {
  Funcionarios as component
};
