import { j as e } from "./index-BsAAwhZV.js";
import { W as l, U as d } from "./wallet-DxxS5Qm3.js";
import { c as r } from "./createLucideIcon-ExsDg67i.js";
import { C as n } from "./calendar-SjyA41xC.js";
const c = [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
  ],
  o = r("arrow-down", c);
const m = [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }],
  ],
  x = r("arrow-up", m);
const p = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ],
  h = r("trending-up", p),
  u = [
    { label: "Faturamento (Hoje)", value: "R$ 2.450", delta: "+12%", up: !0, icon: l },
    { label: "Faturamento (Mês)", value: "R$ 48.200", delta: "+8%", up: !0, icon: h },
    { label: "Clientes Ativos", value: "1.842", delta: "+24", up: !0, icon: d },
    { label: "Agendamentos", value: "126", delta: "−3", up: !1, icon: n },
  ],
  v = [
    { name: "Corte Executivo", pct: 45, n: 142 },
    { name: "Combo Premium", pct: 30, n: 98 },
    { name: "Barba Esculpida", pct: 18, n: 56 },
    { name: "Pigmentação", pct: 7, n: 24 },
  ],
  g = [
    { time: "10:00", name: "Rafael Mendes", service: "Corte Executivo", barber: "Lucas V." },
    { time: "11:00", name: "Pedro Cavalcante", service: "Combo Premium", barber: "Mateus R." },
    { time: "13:30", name: "André Silva", service: "Barba Esculpida", barber: "Diego L." },
    { time: "15:00", name: "João Vitor", service: "Pigmentação", barber: "Carlos B." },
  ];
function y() {
  const t = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return e.jsxs("div", {
    className: "space-y-8",
    children: [
      e.jsxs("div", {
        className: "flex items-end justify-between border-b border-border/40 pb-6",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("p", {
                className: "text-xs uppercase tracking-[0.3em] text-primary mb-2",
                children: t,
              }),
              e.jsx("h1", {
                className: "font-display text-4xl md:text-5xl",
                children: "Bom dia, André",
              }),
            ],
          }),
          e.jsx("div", {
            className: "hidden md:flex gap-2",
            children: ["Hoje", "Semana", "Mês", "Ano"].map((s, a) =>
              e.jsx(
                "button",
                {
                  className: `px-3 py-1.5 text-xs uppercase tracking-widest rounded-md ${a === 2 ? "bg-primary text-primary-foreground" : "hairline hover:border-primary"}`,
                  children: s,
                },
                s,
              ),
            ),
          }),
        ],
      }),
      e.jsx("div", {
        className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
        children: u.map((s) =>
          e.jsxs(
            "div",
            {
              className:
                "glass rounded-xl p-6 hover:border-primary/40 transition group relative overflow-hidden",
              children: [
                e.jsx("div", {
                  className:
                    "absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gold-soft opacity-0 group-hover:opacity-100 transition",
                }),
                e.jsxs("div", {
                  className: "relative flex justify-between items-start mb-3",
                  children: [
                    e.jsx("p", {
                      className: "text-[10px] uppercase tracking-widest text-muted-foreground",
                      children: s.label,
                    }),
                    e.jsx(s.icon, { className: "w-4 h-4 text-primary opacity-60" }),
                  ],
                }),
                e.jsxs("div", {
                  className: "relative flex items-baseline gap-3",
                  children: [
                    e.jsx("span", { className: "font-display text-3xl", children: s.value }),
                    e.jsxs("span", {
                      className: `text-xs flex items-center gap-1 ${s.up ? "text-emerald-400" : "text-rose-400"}`,
                      children: [
                        s.up
                          ? e.jsx(x, { className: "w-3 h-3" })
                          : e.jsx(o, { className: "w-3 h-3" }),
                        s.delta,
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "mt-4 flex items-end gap-1 h-8",
                  children: [40, 65, 50, 80, 60, 90, 75].map((a, i) =>
                    e.jsx(
                      "div",
                      {
                        className:
                          "flex-1 rounded-t bg-primary/30 group-hover:bg-primary/60 transition",
                        style: { height: `${a}%` },
                      },
                      i,
                    ),
                  ),
                }),
              ],
            },
            s.label,
          ),
        ),
      }),
      e.jsxs("div", {
        className: "grid lg:grid-cols-3 gap-4",
        children: [
          e.jsxs("div", {
            className: "lg:col-span-2 glass rounded-xl p-6",
            children: [
              e.jsxs("div", {
                className: "flex justify-between items-center mb-8",
                children: [
                  e.jsx("h3", {
                    className: "font-display text-2xl",
                    children: "Crescimento de Receita",
                  }),
                  e.jsx("div", {
                    className: "flex gap-2",
                    children: ["1S", "1M", "1A"].map((s, a) =>
                      e.jsx(
                        "button",
                        {
                          className: `px-3 py-1 text-[10px] uppercase tracking-widest rounded ${a === 1 ? "bg-primary text-primary-foreground" : "hairline"}`,
                          children: s,
                        },
                        s,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsx("div", {
                className:
                  "h-64 flex items-end gap-3 px-2 border-b border-l border-border/40 relative",
                children: [
                  { v: 35, l: "S1", val: "R$ 21k" },
                  { v: 55, l: "S2", val: "R$ 32k" },
                  { v: 70, l: "S3", val: "R$ 45k" },
                  { v: 90, l: "S4", val: "R$ 58k", active: !0 },
                  { v: 60, l: "S5", val: "R$ 38k" },
                  { v: 80, l: "S6", val: "R$ 51k" },
                ].map((s) =>
                  e.jsxs(
                    "div",
                    {
                      className: "flex-1 flex flex-col items-center gap-2 group",
                      children: [
                        e.jsx("div", {
                          className:
                            "opacity-0 group-hover:opacity-100 transition text-xs font-medium text-primary",
                          children: s.val,
                        }),
                        e.jsx("div", {
                          className: `w-full rounded-t transition ${s.active ? "gradient-gold shadow-gold" : "bg-surface-elevated hairline group-hover:bg-primary/30"}`,
                          style: { height: `${s.v}%` },
                        }),
                        e.jsx("span", {
                          className: "text-[10px] uppercase tracking-widest text-muted-foreground",
                          children: s.l,
                        }),
                      ],
                    },
                    s.l,
                  ),
                ),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "glass rounded-xl p-6",
            children: [
              e.jsx("h3", { className: "font-display text-2xl mb-6", children: "Top Serviços" }),
              e.jsx("div", {
                className: "space-y-5",
                children: v.map((s) =>
                  e.jsxs(
                    "div",
                    {
                      children: [
                        e.jsxs("div", {
                          className: "flex justify-between text-sm mb-2",
                          children: [
                            e.jsx("span", { children: s.name }),
                            e.jsxs("span", { className: "text-primary", children: [s.pct, "%"] }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "h-1 bg-surface-elevated rounded-full overflow-hidden",
                          children: e.jsx("div", {
                            className: "h-full gradient-gold",
                            style: { width: `${s.pct}%` },
                          }),
                        }),
                        e.jsxs("p", {
                          className:
                            "text-[10px] uppercase tracking-widest text-muted-foreground mt-1",
                          children: [s.n, " agendamentos"],
                        }),
                      ],
                    },
                    s.name,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "glass rounded-xl p-6",
        children: [
          e.jsxs("div", {
            className: "flex justify-between items-center mb-6",
            children: [
              e.jsx("h3", {
                className: "font-display text-2xl",
                children: "Próximos agendamentos",
              }),
              e.jsx("button", {
                className: "text-xs uppercase tracking-widest text-primary hover:underline",
                children: "Ver agenda",
              }),
            ],
          }),
          e.jsx("div", {
            className: "overflow-x-auto",
            children: e.jsxs("table", {
              className: "w-full text-sm",
              children: [
                e.jsx("thead", {
                  children: e.jsxs("tr", {
                    className:
                      "text-left text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border/40",
                    children: [
                      e.jsx("th", { className: "py-3", children: "Horário" }),
                      e.jsx("th", { children: "Cliente" }),
                      e.jsx("th", { children: "Serviço" }),
                      e.jsx("th", { children: "Barbeiro" }),
                      e.jsx("th", { className: "text-right", children: "Status" }),
                    ],
                  }),
                }),
                e.jsx("tbody", {
                  children: g.map((s, a) =>
                    e.jsxs(
                      "tr",
                      {
                        className: "border-b border-border/20 hover:bg-white/5 transition",
                        children: [
                          e.jsx("td", {
                            className: "py-4 text-primary font-medium",
                            children: s.time,
                          }),
                          e.jsxs("td", {
                            className: "flex items-center gap-3 py-4",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-8 h-8 rounded-full bg-surface-elevated grid place-items-center text-xs",
                                children: s.name[0],
                              }),
                              s.name,
                            ],
                          }),
                          e.jsx("td", { children: s.service }),
                          e.jsx("td", { className: "text-muted-foreground", children: s.barber }),
                          e.jsx("td", {
                            className: "text-right",
                            children: e.jsx("span", {
                              className:
                                "inline-flex text-[10px] uppercase tracking-widest text-primary bg-gold-soft px-2 py-1 rounded",
                              children: "Confirmado",
                            }),
                          }),
                        ],
                      },
                      a,
                    ),
                  ),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
export { y as component };
