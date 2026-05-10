import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { e as MessageCircle, X, q as Menu, I as Instagram, F as Facebook } from "../_libs/lucide-react.mjs";
const nav = [
  { to: "/marketplace", label: "Marketplace" },
  { to: "/cursos", label: "Cursos" },
  { to: "/agendar", label: "Agendar" },
  { to: "/contato", label: "Contato" }
];
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed top-0 inset-x-0 z-50 glass border-b border-border/50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "font-display text-2xl text-white tracking-tight", children: "SALONE" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-8", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: n.to,
          className: "text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition",
          activeProps: { className: "text-primary" },
          children: n.label
        },
        n.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/admin",
            className: "hidden md:inline-flex text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition",
            children: "Admin"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/agendar",
            className: "hidden md:inline-flex bg-primary text-primary-foreground px-5 py-2 rounded-md text-xs font-semibold uppercase tracking-widest hover:brightness-110 transition shadow-gold",
            children: "Agendar"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "md:hidden", onClick: () => setOpen(!open), "aria-label": "Menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {}) })
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden border-t border-border/50 bg-background/95 px-6 py-4 space-y-3", children: [
      nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: n.to,
          onClick: () => setOpen(false),
          className: "block text-sm uppercase tracking-widest text-muted-foreground hover:text-primary",
          children: n.label
        },
        n.to
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/admin",
          onClick: () => setOpen(false),
          className: "block text-sm uppercase tracking-widest text-muted-foreground",
          children: "Admin"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/agendar",
          onClick: () => setOpen(false),
          className: "block text-center bg-primary text-primary-foreground py-2.5 rounded-md uppercase text-xs tracking-widest font-semibold",
          children: "Agendar Horário"
        }
      )
    ] })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border/40 bg-surface/50 mt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-primary mb-3", children: "Salone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "The modern grooming standard. Tradição e tecnologia para o homem contemporâneo." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-widest text-primary mb-4", children: "Plataforma" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/marketplace", className: "hover:text-foreground", children: "Marketplace" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cursos", className: "hover:text-foreground", children: "Cursos" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/agendar", className: "hover:text-foreground", children: "Agendamento" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", className: "hover:text-foreground", children: "Painel Admin" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-widest text-primary mb-4", children: "Contato" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "andrebezerra@gmail.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "+55 (85) 99745-2820" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Rua 53, 260 José Walter — Fortaleza/CE" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-widest text-primary mb-4", children: "Social" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: [Instagram, Facebook, MessageCircle].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: "w-10 h-10 rounded-md hairline grid place-items-center hover:border-primary hover:text-primary transition",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" })
          },
          i
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/30 py-6 text-center text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Salone Atelier. Todos os direitos reservados."
    ] })
  ] });
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 pt-16", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "https://wa.me/5511999990000",
        target: "_blank",
        rel: "noreferrer",
        className: "fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-gold hover:scale-110 transition",
        "aria-label": "WhatsApp",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-6 h-6" })
      }
    )
  ] });
}
export {
  SiteLayout as S
};
