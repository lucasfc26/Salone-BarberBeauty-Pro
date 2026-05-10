import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useRouterState, L as Link, O as Outlet } from "../_libs/tanstack__react-router.mjs";
import { g as Scissors, i as Plus, L as LayoutDashboard, h as Calendar, W as Wallet, j as Users, k as Package, l as ChartColumn, m as Settings, n as LogOut, a as Search, B as Bell } from "../_libs/lucide-react.mjs";
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
const items = [
  { to: "/admin", label: "Visão Geral", icon: LayoutDashboard, exact: true },
  { to: "/admin/agenda", label: "Agenda", icon: Calendar },
  { to: "/admin/financeiro", label: "Financeiro", icon: Wallet },
  { to: "/admin/clientes", label: "Clientes", icon: Users },
  { to: "/admin/funcionarios", label: "Equipe", icon: Scissors },
  { to: "/admin/produtos", label: "Produtos", icon: Package },
  { to: "/admin/relatorios", label: "Relatórios", icon: ChartColumn }
];
function AdminLayout() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "aside",
      {
        className: `fixed lg:sticky top-0 h-screen w-64 bg-surface border-r border-border/40 z-40 transition-transform ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-6 flex items-center gap-3 border-b border-border/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg gradient-gold grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scissors, { className: "w-5 h-5 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl text-primary leading-none", children: "Salone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mt-1", children: "Admin Console" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/agendar",
              className: "w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-md text-xs uppercase tracking-widest font-semibold hover:brightness-110 transition shadow-gold",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                " Novo agendamento"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "px-3 space-y-1", children: items.map((it) => {
            const active = it.exact ? path === it.to : path.startsWith(it.to);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: it.to,
                onClick: () => setOpen(false),
                className: `flex items-center gap-3 px-4 py-2.5 rounded-md text-sm transition ${active ? "bg-gold-soft text-primary border-r-2 border-primary" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "w-4 h-4" }),
                  it.label
                ]
              },
              it.to
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4 border-t border-border/40 space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/",
                className: "flex items-center gap-3 px-4 py-2.5 rounded-md text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground transition",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-4 h-4" }),
                  " Configurações"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/",
                className: "flex items-center gap-3 px-4 py-2.5 rounded-md text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground transition",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
                  " Sair"
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 glass border-b border-border/40 px-6 h-16 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "lg:hidden", onClick: () => setOpen(!open), children: "☰" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              placeholder: "Buscar clientes, agendamentos, produtos...",
              className: "w-full bg-surface hairline rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-10 h-10 rounded-md hairline grid place-items-center hover:border-primary hover:text-primary transition relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 right-2 w-2 h-2 rounded-full bg-primary animate-pulse" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-md gradient-gold grid place-items-center text-primary-foreground font-bold text-sm", children: "JS" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "p-6 lg:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
    ] })
  ] });
}
const SplitComponent = AdminLayout;
export {
  SplitComponent as component
};
