import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./SiteLayout-DafjFgnX.mjs";
import { p as p1, a as p2, b as p3, c as p4 } from "./product-4-G3qfHlkX.mjs";
import { S as ShoppingBag, a as Search, H as Heart, b as Star } from "../_libs/lucide-react.mjs";
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
const products = [{
  id: 1,
  name: "Beard Oil Premium",
  category: "Óleos",
  price: 89,
  rating: 4.9,
  img: p1,
  tag: "Bestseller"
}, {
  id: 2,
  name: "Pomada Black Edition",
  category: "Pomadas",
  price: 65,
  rating: 4.8,
  img: p2,
  tag: "Novo"
}, {
  id: 3,
  name: "Máquina Pro Gold",
  category: "Máquinas",
  price: 459,
  rating: 5,
  img: p3,
  tag: "Destaque"
}, {
  id: 4,
  name: "Shampoo Atelier",
  category: "Shampoos",
  price: 79,
  rating: 4.7,
  img: p4
}, {
  id: 5,
  name: "Kit Cavalheiro",
  category: "Kits",
  price: 249,
  rating: 4.9,
  img: p1,
  tag: "Combo"
}, {
  id: 6,
  name: "Pomada Modeladora",
  category: "Pomadas",
  price: 55,
  rating: 4.6,
  img: p2
}, {
  id: 7,
  name: "Trimmer Compact",
  category: "Máquinas",
  price: 289,
  rating: 4.8,
  img: p3
}, {
  id: 8,
  name: "Óleo Multiuso",
  category: "Óleos",
  price: 49,
  rating: 4.5,
  img: p1
}];
const categories = ["Todos", "Pomadas", "Óleos", "Shampoos", "Máquinas", "Kits"];
function Marketplace() {
  const [cat, setCat] = reactExports.useState("Todos");
  const [q, setQ] = reactExports.useState("");
  const [favs, setFavs] = reactExports.useState([]);
  const [cart, setCart] = reactExports.useState([]);
  const filtered = products.filter((p) => (cat === "Todos" || p.category === cat) && p.name.toLowerCase().includes(q.toLowerCase()));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto px-6 pt-16 pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary mb-3", children: "Marketplace" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-6xl", children: [
        "Produtos curados",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "para profissionais."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "relative hairline px-5 py-3 rounded-md flex items-center gap-2 hover:border-primary hover:text-primary transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest", children: "Carrinho" }),
        cart.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-primary text-primary-foreground text-[10px] rounded-full w-5 h-5 grid place-items-center font-bold", children: cart.length })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-4 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Buscar produtos...", className: "w-full bg-surface hairline rounded-md pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCat(c), className: `px-4 py-3 rounded-md text-xs uppercase tracking-widest whitespace-nowrap transition ${cat === c ? "bg-primary text-primary-foreground" : "hairline hover:border-primary"}`, children: c }, c)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6", children: filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group glass rounded-xl overflow-hidden hover:border-primary/40 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden bg-surface", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.name, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }),
        p.tag && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest px-2 py-1 rounded", children: p.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFavs((f) => f.includes(p.id) ? f.filter((x) => x !== p.id) : [...f, p.id]), className: "absolute top-3 right-3 w-9 h-9 rounded-full glass grid place-items-center hover:text-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `w-4 h-4 ${favs.includes(p.id) ? "fill-primary text-primary" : ""}` }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-1", children: p.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg mb-2 line-clamp-1", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-primary text-primary" }),
          p.rating
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl text-primary", children: [
            "R$ ",
            p.price
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCart((c) => [...c, p.id]), className: "text-[10px] uppercase tracking-widest bg-primary text-primary-foreground px-3 py-2 rounded hover:brightness-110 transition", children: "Adicionar" })
        ] })
      ] })
    ] }, p.id)) })
  ] }) });
}
export {
  Marketplace as component
};
