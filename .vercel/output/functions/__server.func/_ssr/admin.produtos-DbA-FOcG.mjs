import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { p as p1, a as p2, b as p3, c as p4 } from "./product-4-G3qfHlkX.mjs";
import { i as Plus, u as TriangleAlert } from "../_libs/lucide-react.mjs";
const products = [{
  sku: "BO-001",
  name: "Beard Oil Premium",
  img: p1,
  stock: 24,
  sold: 142,
  price: 89
}, {
  sku: "PM-002",
  name: "Pomada Black Edition",
  img: p2,
  stock: 4,
  sold: 98,
  price: 65
}, {
  sku: "MQ-003",
  name: "Máquina Pro Gold",
  img: p3,
  stock: 12,
  sold: 32,
  price: 459
}, {
  sku: "SH-004",
  name: "Shampoo Atelier",
  img: p4,
  stock: 2,
  sold: 64,
  price: 79
}];
function Produtos() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary mb-2", children: "Estoque" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl", children: "Produtos" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "bg-primary text-primary-foreground px-5 py-3 rounded-md text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:brightness-110 transition shadow-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
        " Novo produto"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6", children: "Produto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "SKU" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Estoque" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Vendidos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Preço" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", {})
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/20 hover:bg-white/5 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.name, loading: "lazy", className: "w-12 h-12 rounded-md object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: p.name })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: p.sku }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 text-xs ${p.stock < 5 ? "text-rose-400" : "text-emerald-400"}`, children: [
          p.stock < 5 && /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3" }),
          p.stock,
          " un"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: p.sold }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "font-display text-primary", children: [
          "R$ ",
          p.price
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-xs uppercase tracking-widest text-primary hover:underline", children: "Editar" }) })
      ] }, p.sku)) })
    ] }) })
  ] });
}
export {
  Produtos as component
};
