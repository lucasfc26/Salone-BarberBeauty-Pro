import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Route = createFileRoute("/admin/agenda")({
  component: Agenda,
});

const hours = Array.from({ length: 11 }, (_, i) => `${String(i + 8).padStart(2, "0")}:00`);

const WEEKDAYS_SHORT = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
const WEEKDAYS_MON = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];
const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Marco",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

function buildSampleEvents() {
  const today = new Date();
  const dow = today.getDay();
  const diff = dow === 0 ? -6 : 1 - dow;
  const mon = new Date(today);
  mon.setDate(today.getDate() + diff);

  function dateKey(offset: number) {
    const d = new Date(mon);
    d.setDate(mon.getDate() + offset);
    return [
      d.getFullYear(),
      String(d.getMonth() + 1).padStart(2, "0"),
      String(d.getDate()).padStart(2, "0"),
    ].join("-");
  }

  return [
    {
      date: dateKey(0),
      h: 1,
      len: 1,
      name: "Rafael M.",
      service: "Corte",
      color: "gradient-gold text-primary-foreground",
    },
    {
      date: dateKey(0),
      h: 4,
      len: 2,
      name: "Pedro C.",
      service: "Combo",
      color: "bg-primary/20 border border-primary/40 text-primary",
    },
    {
      date: dateKey(1),
      h: 2,
      len: 1,
      name: "Andre S.",
      service: "Barba",
      color: "bg-primary/20 border border-primary/40 text-primary",
    },
    {
      date: dateKey(2),
      h: 3,
      len: 2,
      name: "Joao V.",
      service: "Pigmentacao",
      color: "gradient-gold text-primary-foreground",
    },
    {
      date: dateKey(3),
      h: 5,
      len: 1,
      name: "Marcos L.",
      service: "Corte",
      color: "bg-primary/20 border border-primary/40 text-primary",
    },
    {
      date: dateKey(4),
      h: 1,
      len: 2,
      name: "Bruno R.",
      service: "Combo",
      color: "gradient-gold text-primary-foreground",
    },
    {
      date: dateKey(5),
      h: 6,
      len: 1,
      name: "Igor P.",
      service: "Barba",
      color: "bg-primary/20 border border-primary/40 text-primary",
    },
  ];
}

const events = buildSampleEvents();

function toKey(date: Date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function getWeekStart(date: Date): Date {
  const d = new Date(date);
  const dow = d.getDay();
  const diff = dow === 0 ? -6 : 1 - dow;
  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function getMonthCells(date: Date): (Date | null)[] {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  let startDow = firstDay.getDay();
  if (startDow === 0) startDow = 7;
  const blanks = startDow - 1;
  const cells: (Date | null)[] = Array(blanks).fill(null);
  for (let d = 1; d <= lastDay.getDate(); d++) {
    cells.push(new Date(year, month, d));
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function Agenda() {
  const isMobile = useIsMobile();
  const today = useMemo(() => new Date(), []);
  const [view, setView] = useState<"diaria" | "semanal" | "mensal">("semanal");
  const [currentDate, setCurrentDate] = useState<Date>(() => new Date());

  useEffect(() => {
    setView(isMobile ? "diaria" : "semanal");
  }, [isMobile]);

  const weekStart = getWeekStart(currentDate);
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    return d;
  });

  const periodLabel = useMemo(() => {
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

  const monthCells = useMemo(() => getMonthCells(currentDate), [currentDate]);
  const calendarDays = view === "diaria" ? [currentDate] : weekDays;

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Agenda Inteligente</p>
          <h1 className="font-display text-3xl md:text-5xl">
            {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex hairline rounded-md overflow-hidden">
            {(["diaria", "semanal", "mensal"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-3 py-2 text-[10px] uppercase tracking-widest ${view === v ? "bg-primary text-primary-foreground" : "hover:bg-white/5"}`}
              >
                {v}
              </button>
            ))}
          </div>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:brightness-110 transition shadow-gold">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Bloqueio</span>
          </button>
        </div>
      </div>

      <div className="glass rounded-xl p-4 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevPeriod}
            className="hairline w-9 h-9 rounded-md grid place-items-center hover:border-primary transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-display text-lg md:text-xl">{periodLabel}</span>
          <button
            onClick={nextPeriod}
            className="hairline w-9 h-9 rounded-md grid place-items-center hover:border-primary transition"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {view === "diaria" && (
          <div className="flex gap-1.5 mb-4 overflow-x-auto pb-1">
            {weekDays.map((d) => {
              const isSelected = isSameDay(d, currentDate);
              const isToday = isSameDay(d, today);
              return (
                <button
                  key={toKey(d)}
                  onClick={() => setCurrentDate(d)}
                  className={`shrink-0 px-3 py-1.5 rounded text-[10px] uppercase tracking-wider transition ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-gold"
                      : isToday
                        ? "hairline border-primary text-primary"
                        : "hairline hover:border-primary"
                  }`}
                >
                  {WEEKDAYS_SHORT[d.getDay()]} {d.getDate()}
                </button>
              );
            })}
          </div>
        )}

        {(view === "diaria" || view === "semanal") && (
          <div className={view === "diaria" ? "" : "overflow-x-auto"}>
            <div
              className={`grid gap-px bg-border/30 rounded-lg overflow-hidden ${
                view === "diaria"
                  ? "grid-cols-[64px_1fr]"
                  : "min-w-175 grid-cols-[64px_repeat(7,1fr)]"
              }`}
            >
              <div className="bg-surface" />
              {calendarDays.map((d) => {
                const isToday = isSameDay(d, today);
                return (
                  <div
                    key={toKey(d)}
                    className={`bg-surface text-center py-3 text-xs uppercase tracking-widest ${
                      isToday ? "text-primary font-bold" : "text-muted-foreground"
                    }`}
                  >
                    {WEEKDAYS_SHORT[d.getDay()]} {d.getDate()}
                    {isToday && (
                      <span className="block mx-auto mt-1 w-1 h-1 rounded-full bg-primary" />
                    )}
                  </div>
                );
              })}

              {hours.map((h, hi) => (
                <>
                  <div
                    key={`h-${hi}`}
                    className="bg-surface px-2 py-4 text-xs text-muted-foreground text-right pr-3"
                  >
                    {h}
                  </div>
                  {calendarDays.map((d) => {
                    const key = toKey(d);
                    const ev = events.find((e) => e.date === key && e.h === hi);
                    return (
                      <div
                        key={`${hi}-${key}`}
                        className="bg-surface min-h-15 p-1 relative hover:bg-white/3 transition"
                      >
                        {ev && (
                          <div
                            className={`absolute inset-1 rounded-md p-2 text-xs ${ev.color}`}
                            style={{ height: `${ev.len * 60 - 8}px` }}
                          >
                            <div className="font-semibold">{ev.name}</div>
                            <div className="text-[10px] opacity-80">{ev.service}</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </>
              ))}
            </div>
          </div>
        )}

        {view === "mensal" && (
          <div>
            <div className="grid grid-cols-7 gap-px bg-border/30 rounded-lg overflow-hidden">
              {WEEKDAYS_MON.map((wd) => (
                <div
                  key={wd}
                  className="bg-surface text-center py-2 text-[10px] uppercase tracking-widest text-muted-foreground"
                >
                  {wd}
                </div>
              ))}
              {monthCells.map((d, i) => {
                const isToday = d ? isSameDay(d, today) : false;
                const isSelected = d ? isSameDay(d, currentDate) : false;
                return (
                  <div
                    key={i}
                    onClick={() => d && setCurrentDate(d)}
                    className={`bg-surface min-h-20 p-2 transition ${
                      d ? "cursor-pointer hover:bg-white/3" : "pointer-events-none opacity-0"
                    } ${isToday ? "ring-1 ring-inset ring-primary/50" : ""}`}
                  >
                    {d && (
                      <>
                        <span
                          className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium ${
                            isToday
                              ? "bg-primary text-primary-foreground shadow-gold"
                              : isSelected
                                ? "bg-primary/20 text-primary border border-primary/40"
                                : "text-foreground"
                          }`}
                        >
                          {d.getDate()}
                        </span>
                        {(() => {
                          const key = toKey(d);
                          const dayEvs = events.filter((e) => e.date === key);
                          return dayEvs.length > 0 ? (
                            <div className="flex gap-0.5 mt-1 flex-wrap">
                              {dayEvs.slice(0, 3).map((_, ei) => (
                                <span
                                  key={ei}
                                  className="block w-1.5 h-1.5 rounded-full bg-primary/60"
                                />
                              ))}
                            </div>
                          ) : null;
                        })()}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
