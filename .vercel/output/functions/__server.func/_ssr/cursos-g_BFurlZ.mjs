import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./SiteLayout-DafjFgnX.mjs";
import { c as course1 } from "./course-1-DBR2kGpa.mjs";
import { C as CirclePlay, c as Clock, G as GraduationCap, b as Star } from "../_libs/lucide-react.mjs";
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
const c2 = "/assets/course-2-BK-EOMMr.jpg";
const c3 = "/assets/course-3-BoYva9Au.jpg";
const courses = [{
  title: "Mestre da Tesoura",
  teacher: "Lucas Vieira",
  duration: "12h",
  price: 590,
  level: "Avançado",
  rating: 4.9,
  modules: 8,
  img: course1
}, {
  title: "Barba Perfeita",
  teacher: "Mateus Reis",
  duration: "8h",
  price: 390,
  level: "Intermediário",
  rating: 4.8,
  modules: 6,
  img: c2
}, {
  title: "Gestão de Barbearia",
  teacher: "Ana Souza",
  duration: "16h",
  price: 790,
  level: "Pro",
  rating: 5,
  modules: 12,
  img: c3
}, {
  title: "Pigmentação & Cor",
  teacher: "Diego Lima",
  duration: "10h",
  price: 490,
  level: "Avançado",
  rating: 4.7,
  modules: 7,
  img: course1
}, {
  title: "Fundamentos do Corte",
  teacher: "Carlos Bento",
  duration: "20h",
  price: 690,
  level: "Iniciante",
  rating: 4.9,
  modules: 14,
  img: c2
}, {
  title: "Marketing para Barbeiros",
  teacher: "Júlia Castro",
  duration: "6h",
  price: 290,
  level: "Todos",
  rating: 4.6,
  modules: 5,
  img: c3
}];
function Cursos() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto px-6 pt-16 pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary mb-3", children: "Salone Academy" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl mb-6 max-w-3xl", children: "Cursos profissionais para elevar seu ofício." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl text-lg mb-12", children: "Online ou presencial. Certificação reconhecida e mentoria contínua com mestres do setor." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: courses.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group glass rounded-xl overflow-hidden hover:border-primary/40 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.img, alt: c.title, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "absolute inset-0 m-auto w-14 h-14 text-primary opacity-0 group-hover:opacity-100 transition" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 bg-background/80 backdrop-blur text-primary text-[10px] uppercase tracking-widest px-2 py-1 rounded", children: c.level })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-4", children: [
          "por ",
          c.teacher
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
            c.duration
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-3 h-3" }),
            c.modules,
            " módulos"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-primary text-primary" }),
            c.rating
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-2xl text-primary", children: [
            "R$ ",
            c.price
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-[10px] uppercase tracking-widest bg-primary text-primary-foreground px-4 py-2 rounded hover:brightness-110 transition", children: "Inscrever" })
        ] })
      ] })
    ] }, c.title)) })
  ] }) });
}
export {
  Cursos as component
};
