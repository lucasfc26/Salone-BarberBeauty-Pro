import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { i as Plus, J as ChevronLeft, K as ChevronRight } from "../_libs/lucide-react.mjs";
const hours = Array.from({
  length: 11
}, (_, i) => `${String(i + 8).padStart(2, "0")}:00`);
const days = ["Seg 21", "Ter 22", "Qua 23", "Qui 24", "Sex 25", "Sáb 26", "Dom 27"];
const events = [{
  d: 0,
  h: 1,
  len: 1,
  name: "Rafael M.",
  service: "Corte",
  color: "gradient-gold text-primary-foreground"
}, {
  d: 0,
  h: 4,
  len: 2,
  name: "Pedro C.",
  service: "Combo",
  color: "bg-primary/20 border border-primary/40 text-primary"
}, {
  d: 1,
  h: 2,
  len: 1,
  name: "André S.",
  service: "Barba",
  color: "bg-primary/20 border border-primary/40 text-primary"
}, {
  d: 2,
  h: 3,
  len: 2,
  name: "João V.",
  service: "Pigmentação",
  color: "gradient-gold text-primary-foreground"
}, {
  d: 3,
  h: 5,
  len: 1,
  name: "Marcos L.",
  service: "Corte",
  color: "bg-primary/20 border border-primary/40 text-primary"
}, {
  d: 4,
  h: 1,
  len: 2,
  name: "Bruno R.",
  service: "Combo",
  color: "gradient-gold text-primary-foreground"
}, {
  d: 5,
  h: 6,
  len: 1,
  name: "Igor P.",
  service: "Barba",
  color: "bg-primary/20 border border-primary/40 text-primary"
}];
function Agenda() {
  const [view, setView] = reactExports.useState("semanal");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary mb-2", children: "Agenda Inteligente" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl", children: "Outubro 2024" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex hairline rounded-md overflow-hidden", children: ["diaria", "semanal", "mensal"].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView(v), className: `px-4 py-2 text-xs uppercase tracking-widest ${view === v ? "bg-primary text-primary-foreground" : "hover:bg-white/5"}`, children: v }, v)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "bg-primary text-primary-foreground px-5 py-2 rounded-md text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:brightness-110 transition shadow-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
          " Bloqueio"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-6 overflow-x-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "hairline w-9 h-9 rounded-md grid place-items-center hover:border-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl", children: "Semana 21 — 27 Out" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "hairline w-9 h-9 rounded-md grid place-items-center hover:border-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-[800px] grid grid-cols-[80px_repeat(7,1fr)] gap-px bg-border/30 rounded-lg overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface" }),
        days.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface text-center py-3 text-xs uppercase tracking-widest text-muted-foreground", children: d }, d)),
        hours.map((h, hi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface px-3 py-4 text-xs text-muted-foreground", children: h }, `h-${hi}`),
          days.map((_, di) => {
            const ev = events.find((e) => e.d === di && e.h === hi);
            return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface min-h-[60px] p-1 relative hover:bg-white/[0.03] transition", children: ev && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `absolute inset-1 rounded-md p-2 text-xs ${ev.color}`, style: {
              height: `${ev.len * 60 - 8}px`
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: ev.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] opacity-80", children: ev.service })
            ] }) }, `${hi}-${di}`);
          })
        ] }))
      ] })
    ] })
  ] });
}
export {
  Agenda as component
};
