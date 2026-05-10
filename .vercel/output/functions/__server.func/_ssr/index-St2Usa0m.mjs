import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-DafjFgnX.mjs";
import { c as course1 } from "./course-1-DBR2kGpa.mjs";
import { g as Scissors, o as Sparkles, A as Award, h as Calendar, p as ArrowRight, b as Star } from "../_libs/lucide-react.mjs";
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
const hero = "/assets/hero-barbershop-CWSfIRST.jpg";
const cut = "/assets/service-cut-B-eBVevu.jpg";
const services = [{
  name: "Corte Executivo",
  price: "R$ 85",
  desc: "Corte sob medida com técnicas clássicas e finalização com toalha quente."
}, {
  name: "Barba Esculpida",
  price: "R$ 55",
  desc: "Modelagem precisa e finalização com óleos premium."
}, {
  name: "Combo Premium",
  price: "R$ 130",
  desc: "Corte + barba + ritual de cuidados completo."
}, {
  name: "Pigmentação",
  price: "R$ 70",
  desc: "Realce de fios brancos com produtos de alta performance."
}];
const differentials = [{
  icon: Scissors,
  title: "Mestres certificados",
  desc: "Time formado nas melhores academias do mundo."
}, {
  icon: Sparkles,
  title: "Produtos premium",
  desc: "Curadoria de marcas internacionais exclusivas."
}, {
  icon: Award,
  title: "Experiência única",
  desc: "Ambiente sofisticado pensado em cada detalhe."
}, {
  icon: Calendar,
  title: "Agenda inteligente",
  desc: "Marque em 30 segundos pelo aplicativo."
}];
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[92vh] flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero, alt: "Interior de barbearia luxuosa", className: "w-full h-full object-cover opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full hairline text-xs uppercase tracking-[0.2em] text-primary mb-8 animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary animate-pulse" }),
          "Atelier de barbearia premium"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 text-gradient-gold", children: [
          "Salone",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Beauty Barber"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10", children: "A interseção entre o ofício tradicional e a precisão contemporânea. Uma experiência exclusiva para o cavalheiro exigente." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/agendar", className: "bg-primary text-primary-foreground px-8 py-4 rounded-md text-sm font-semibold uppercase tracking-widest hover:brightness-110 transition shadow-gold", children: "Agendar Horário" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/marketplace", className: "hairline px-8 py-4 rounded-md text-sm font-semibold uppercase tracking-widest hover:border-primary hover:text-primary transition", children: "Conhecer Produtos" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-7xl mx-auto px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 gap-6", children: differentials.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group glass rounded-xl p-6 hover:border-primary/40 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(d.icon, { className: "w-7 h-7 text-primary mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-2", children: d.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: d.desc })
    ] }, d.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary mb-3", children: "Nossos Serviços" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl", children: [
            "Atenção meticulosa",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "a cada detalhe."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/agendar", className: "hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary hover:gap-3 transition-all", children: [
          "Ver todos ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden h-[500px] group hairline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cut, alt: "Corte premium", className: "absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs uppercase tracking-widest text-primary mb-3", children: "Signature" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl mb-2", children: services[0].name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4 max-w-md", children: services[0].desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary text-sm uppercase tracking-widest", children: [
              "A partir de ",
              services[0].price
            ] })
          ] })
        ] }),
        services.slice(1).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-6 hover:border-primary/40 transition group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2 group-hover:text-primary transition", children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: s.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-xs uppercase tracking-widest", children: s.price })
        ] }, s.name))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-7xl mx-auto px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden h-[420px] hairline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: course1, alt: "Cursos", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary mb-3", children: "Salone Academy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl mb-6", children: "Eleve seu ofício ao próximo nível." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Cursos online e presenciais ministrados pelos maiores nomes da barbearia mundial. Certificação reconhecida e mentoria contínua." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 mb-8", children: [{
          n: "12+",
          l: "Cursos"
        }, {
          n: "1.8k",
          l: "Alunos"
        }, {
          n: "4.9",
          l: "Avaliação"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hairline rounded-lg p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-primary", children: s.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mt-1", children: s.l })
        ] }, s.l)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cursos", className: "inline-flex items-center gap-2 text-primary uppercase text-xs tracking-[0.2em] hover:gap-3 transition-all", children: [
          "Explorar academia ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-4xl mx-auto px-6 py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-6 gap-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5 fill-primary text-primary" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "font-display text-3xl md:text-4xl leading-snug mb-6", children: '"Mais que uma barbearia — um ritual. Cada visita ao Salone é uma pausa para reencontrar o melhor de si."' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-widest text-muted-foreground", children: "Rafael Mendes — Cliente desde 2022" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-7xl mx-auto px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden p-12 md:p-20 text-center gradient-gold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl text-primary-foreground mb-6", children: "Pronto para a sua melhor versão?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 max-w-2xl mx-auto mb-10", children: "Reserve seu horário em segundos e descubra o padrão Salone." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/agendar", className: "inline-flex bg-background text-foreground px-10 py-4 rounded-md text-sm font-semibold uppercase tracking-widest hover:brightness-125 transition", children: "Agendar agora" })
    ] }) })
  ] });
}
export {
  HomePage as component
};
