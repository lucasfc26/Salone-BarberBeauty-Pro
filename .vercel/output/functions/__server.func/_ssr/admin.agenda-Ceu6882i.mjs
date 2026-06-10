import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { i as Plus, J as ChevronLeft, K as ChevronRight } from "../_libs/lucide-react.mjs";
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = reactExports.useState(void 0);
  reactExports.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
const hours = Array.from({
  length: 11
}, (_, i) => `${String(i + 8).padStart(2, "0")}:00`);
const WEEKDAYS_SHORT = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
const WEEKDAYS_MON = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];
const MONTHS = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
function buildSampleEvents() {
  const today = /* @__PURE__ */ new Date();
  const dow = today.getDay();
  const diff = dow === 0 ? -6 : 1 - dow;
  const mon = new Date(today);
  mon.setDate(today.getDate() + diff);
  function dateKey(offset) {
    const d = new Date(mon);
    d.setDate(mon.getDate() + offset);
    return [d.getFullYear(), String(d.getMonth() + 1).padStart(2, "0"), String(d.getDate()).padStart(2, "0")].join("-");
  }
  return [{
    date: dateKey(0),
    h: 1,
    len: 1,
    name: "Rafael M.",
    service: "Corte",
    color: "gradient-gold text-primary-foreground"
  }, {
    date: dateKey(0),
    h: 4,
    len: 2,
    name: "Pedro C.",
    service: "Combo",
    color: "bg-primary/20 border border-primary/40 text-primary"
  }, {
    date: dateKey(1),
    h: 2,
    len: 1,
    name: "Andre S.",
    service: "Barba",
    color: "bg-primary/20 border border-primary/40 text-primary"
  }, {
    date: dateKey(2),
    h: 3,
    len: 2,
    name: "Joao V.",
    service: "Pigmentacao",
    color: "gradient-gold text-primary-foreground"
  }, {
    date: dateKey(3),
    h: 5,
    len: 1,
    name: "Marcos L.",
    service: "Corte",
    color: "bg-primary/20 border border-primary/40 text-primary"
  }, {
    date: dateKey(4),
    h: 1,
    len: 2,
    name: "Bruno R.",
    service: "Combo",
    color: "gradient-gold text-primary-foreground"
  }, {
    date: dateKey(5),
    h: 6,
    len: 1,
    name: "Igor P.",
    service: "Barba",
    color: "bg-primary/20 border border-primary/40 text-primary"
  }];
}
const events = buildSampleEvents();
function toKey(date) {
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
}
function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function getWeekStart(date) {
  const d = new Date(date);
  const dow = d.getDay();
  const diff = dow === 0 ? -6 : 1 - dow;
  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);
  return d;
}
function getMonthCells(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  let startDow = firstDay.getDay();
  if (startDow === 0) startDow = 7;
  const blanks = startDow - 1;
  const cells = Array(blanks).fill(null);
  for (let d = 1; d <= lastDay.getDate(); d++) {
    cells.push(new Date(year, month, d));
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}
function Agenda() {
  const isMobile = useIsMobile();
  const today = reactExports.useMemo(() => /* @__PURE__ */ new Date(), []);
  const [view, setView] = reactExports.useState("semanal");
  const [currentDate, setCurrentDate] = reactExports.useState(() => /* @__PURE__ */ new Date());
  reactExports.useEffect(() => {
    setView(isMobile ? "diaria" : "semanal");
  }, [isMobile]);
  const weekStart = getWeekStart(currentDate);
  const weekDays = Array.from({
    length: 7
  }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    return d;
  });
  const periodLabel = reactExports.useMemo(() => {
    if (view === "diaria") {
      return `${WEEKDAYS_SHORT[currentDate.getDay()]} ${currentDate.getDate()} — ${MONTHS[currentDate.getMonth()]}`;
    }
    if (view === "semanal") {
      const end = weekDays[6];
      if (weekDays[0].getMonth() === end.getMonth()) {
        return `${weekDays[0].getDate()} — ${end.getDate()} de ${MONTHS[end.getMonth()]}`;
      }
      return `${weekDays[0].getDate()} ${MONTHS[weekDays[0].getMonth()]} — ${end.getDate()} ${MONTHS[end.getMonth()]}`;
    }
    return `${MONTHS[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
  }, [view, currentDate, weekDays]);
  function prevPeriod() {
    setCurrentDate((d) => {
      const nd = new Date(d);
      if (view === "diaria") nd.setDate(nd.getDate() - 1);
      else if (view === "semanal") nd.setDate(nd.getDate() - 7);
      else nd.setMonth(nd.getMonth() - 1);
      return nd;
    });
  }
  function nextPeriod() {
    setCurrentDate((d) => {
      const nd = new Date(d);
      if (view === "diaria") nd.setDate(nd.getDate() + 1);
      else if (view === "semanal") nd.setDate(nd.getDate() + 7);
      else nd.setMonth(nd.getMonth() + 1);
      return nd;
    });
  }
  const monthCells = reactExports.useMemo(() => getMonthCells(currentDate), [currentDate]);
  const calendarDays = view === "diaria" ? [currentDate] : weekDays;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary mb-2", children: "Agenda Inteligente" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl md:text-5xl", children: [
          MONTHS[currentDate.getMonth()],
          " ",
          currentDate.getFullYear()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex hairline rounded-md overflow-hidden", children: ["diaria", "semanal", "mensal"].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView(v), className: `px-3 py-2 text-[10px] uppercase tracking-widest ${view === v ? "bg-primary text-primary-foreground" : "hover:bg-white/5"}`, children: v }, v)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "bg-primary text-primary-foreground px-4 py-2 rounded-md text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:brightness-110 transition shadow-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Bloqueio" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-4 md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: prevPeriod, className: "hairline w-9 h-9 rounded-md grid place-items-center hover:border-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg md:text-xl", children: periodLabel }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: nextPeriod, className: "hairline w-9 h-9 rounded-md grid place-items-center hover:border-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" }) })
      ] }),
      view === "diaria" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 mb-4 overflow-x-auto pb-1", children: weekDays.map((d) => {
        const isSelected = isSameDay(d, currentDate);
        const isToday = isSameDay(d, today);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setCurrentDate(d), className: `shrink-0 px-3 py-1.5 rounded text-[10px] uppercase tracking-wider transition ${isSelected ? "bg-primary text-primary-foreground shadow-gold" : isToday ? "hairline border-primary text-primary" : "hairline hover:border-primary"}`, children: [
          WEEKDAYS_SHORT[d.getDay()],
          " ",
          d.getDate()
        ] }, toKey(d));
      }) }),
      (view === "diaria" || view === "semanal") && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: view === "diaria" ? "" : "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid gap-px bg-border/30 rounded-lg overflow-hidden ${view === "diaria" ? "grid-cols-[64px_1fr]" : "min-w-175 grid-cols-[64px_repeat(7,1fr)]"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface" }),
        calendarDays.map((d) => {
          const isToday = isSameDay(d, today);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-surface text-center py-3 text-xs uppercase tracking-widest ${isToday ? "text-primary font-bold" : "text-muted-foreground"}`, children: [
            WEEKDAYS_SHORT[d.getDay()],
            " ",
            d.getDate(),
            isToday && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mx-auto mt-1 w-1 h-1 rounded-full bg-primary" })
          ] }, toKey(d));
        }),
        hours.map((h, hi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface px-2 py-4 text-xs text-muted-foreground text-right pr-3", children: h }, `h-${hi}`),
          calendarDays.map((d) => {
            const key = toKey(d);
            const ev = events.find((e) => e.date === key && e.h === hi);
            return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface min-h-15 p-1 relative hover:bg-white/3 transition", children: ev && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `absolute inset-1 rounded-md p-2 text-xs ${ev.color}`, style: {
              height: `${ev.len * 60 - 8}px`
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: ev.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] opacity-80", children: ev.service })
            ] }) }, `${hi}-${key}`);
          })
        ] }))
      ] }) }),
      view === "mensal" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-7 gap-px bg-border/30 rounded-lg overflow-hidden", children: [
        WEEKDAYS_MON.map((wd) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface text-center py-2 text-[10px] uppercase tracking-widest text-muted-foreground", children: wd }, wd)),
        monthCells.map((d, i) => {
          const isToday = d ? isSameDay(d, today) : false;
          const isSelected = d ? isSameDay(d, currentDate) : false;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: () => d && setCurrentDate(d), className: `bg-surface min-h-20 p-2 transition ${d ? "cursor-pointer hover:bg-white/3" : "pointer-events-none opacity-0"} ${isToday ? "ring-1 ring-inset ring-primary/50" : ""}`, children: d && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium ${isToday ? "bg-primary text-primary-foreground shadow-gold" : isSelected ? "bg-primary/20 text-primary border border-primary/40" : "text-foreground"}`, children: d.getDate() }),
            (() => {
              const key = toKey(d);
              const dayEvs = events.filter((e) => e.date === key);
              return dayEvs.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mt-1 flex-wrap", children: dayEvs.slice(0, 3).map((_, ei) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block w-1.5 h-1.5 rounded-full bg-primary/60" }, ei)) }) : null;
            })()
          ] }) }, i);
        })
      ] }) })
    ] })
  ] });
}
export {
  Agenda as component
};
