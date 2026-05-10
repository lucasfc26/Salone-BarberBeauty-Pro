import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
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
const appCss = "/assets/styles-BidTW6mF.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-display text-primary", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Página não encontrada" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "A página que você procura não existe." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium uppercase tracking-widest text-primary-foreground hover:brightness-110 transition",
        children: "Voltar"
      }
    )
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "Algo deu errado" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: error.message }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => {
          router.invalidate();
          reset();
        },
        className: "mt-6 rounded-md bg-primary px-5 py-2.5 text-sm font-medium uppercase tracking-widest text-primary-foreground hover:brightness-110",
        children: "Tentar novamente"
      }
    )
  ] }) });
}
const Route$d = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Salone — The Modern Grooming Standard" },
      { name: "description", content: "Salone: plataforma premium de gestão e marketplace para barbearias modernas." },
      { name: "author", content: "Salone" },
      { property: "og:title", content: "Salone — The Modern Grooming Standard" },
      { property: "og:description", content: "Salone: plataforma premium de gestão e marketplace para barbearias modernas." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Salone — The Modern Grooming Standard" },
      { name: "twitter:description", content: "Salone: plataforma premium de gestão e marketplace para barbearias modernas." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/df4c9472-cc1a-42d6-ad05-d744ea26f38f/id-preview-0396914d--d5547c7f-cead-4acd-ade3-3e0749a435e8.lovable.app-1778381900167.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/df4c9472-cc1a-42d6-ad05-d744ea26f38f/id-preview-0396914d--d5547c7f-cead-4acd-ade3-3e0749a435e8.lovable.app-1778381900167.png" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Hanken+Grotesk:wght@300;400;500;600;700&display=swap" },
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$d.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$c = () => import("./marketplace-Blb-gjIA.mjs");
const Route$c = createFileRoute("/marketplace")({
  head: () => ({
    meta: [{
      title: "Marketplace — Salone"
    }, {
      name: "description",
      content: "Produtos premium de barbearia: pomadas, óleos, máquinas e shampoos."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./cursos-g_BFurlZ.mjs");
const Route$b = createFileRoute("/cursos")({
  head: () => ({
    meta: [{
      title: "Cursos — Salone Academy"
    }, {
      name: "description",
      content: "Cursos profissionais de barbearia: online e presencial, com certificação."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./contato-dwZKzYZA.mjs");
const Route$a = createFileRoute("/contato")({
  head: () => ({
    meta: [{
      title: "Contato — Salone"
    }, {
      name: "description",
      content: "Fale com a equipe Salone. Endereço, horários e formulário de contato."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./agendar-DvYBRyhS.mjs");
const Route$9 = createFileRoute("/agendar")({
  head: () => ({
    meta: [{
      title: "Agendar — Salone"
    }, {
      name: "description",
      content: "Agende seu horário em poucos cliques. Escolha serviço, barbeiro e horário."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./admin-9uRoZkxx.mjs");
const Route$8 = createFileRoute("/admin")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./index-St2Usa0m.mjs");
const Route$7 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Salone — The Modern Grooming Standard"
    }, {
      name: "description",
      content: "Plataforma premium para barbearias: agendamento, marketplace, cursos e gestão completa."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./admin.index-DD6c9TSU.mjs");
const Route$6 = createFileRoute("/admin/")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./admin.relatorios-CtCcZnJb.mjs");
const Route$5 = createFileRoute("/admin/relatorios")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./admin.produtos-DbA-FOcG.mjs");
const Route$4 = createFileRoute("/admin/produtos")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./admin.funcionarios-4JnkT23r.mjs");
const Route$3 = createFileRoute("/admin/funcionarios")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./admin.financeiro-CIy35Cls.mjs");
const Route$2 = createFileRoute("/admin/financeiro")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./admin.clientes-Bw8rbLtB.mjs");
const Route$1 = createFileRoute("/admin/clientes")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./admin.agenda-D9yQawmt.mjs");
const Route = createFileRoute("/admin/agenda")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const MarketplaceRoute = Route$c.update({
  id: "/marketplace",
  path: "/marketplace",
  getParentRoute: () => Route$d
});
const CursosRoute = Route$b.update({
  id: "/cursos",
  path: "/cursos",
  getParentRoute: () => Route$d
});
const ContatoRoute = Route$a.update({
  id: "/contato",
  path: "/contato",
  getParentRoute: () => Route$d
});
const AgendarRoute = Route$9.update({
  id: "/agendar",
  path: "/agendar",
  getParentRoute: () => Route$d
});
const AdminRoute = Route$8.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$d
});
const IndexRoute = Route$7.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$d
});
const AdminIndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => AdminRoute
});
const AdminRelatoriosRoute = Route$5.update({
  id: "/relatorios",
  path: "/relatorios",
  getParentRoute: () => AdminRoute
});
const AdminProdutosRoute = Route$4.update({
  id: "/produtos",
  path: "/produtos",
  getParentRoute: () => AdminRoute
});
const AdminFuncionariosRoute = Route$3.update({
  id: "/funcionarios",
  path: "/funcionarios",
  getParentRoute: () => AdminRoute
});
const AdminFinanceiroRoute = Route$2.update({
  id: "/financeiro",
  path: "/financeiro",
  getParentRoute: () => AdminRoute
});
const AdminClientesRoute = Route$1.update({
  id: "/clientes",
  path: "/clientes",
  getParentRoute: () => AdminRoute
});
const AdminAgendaRoute = Route.update({
  id: "/agenda",
  path: "/agenda",
  getParentRoute: () => AdminRoute
});
const AdminRouteChildren = {
  AdminAgendaRoute,
  AdminClientesRoute,
  AdminFinanceiroRoute,
  AdminFuncionariosRoute,
  AdminProdutosRoute,
  AdminRelatoriosRoute,
  AdminIndexRoute
};
const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AdminRoute: AdminRouteWithChildren,
  AgendarRoute,
  ContatoRoute,
  CursosRoute,
  MarketplaceRoute
};
const routeTree = Route$d._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
