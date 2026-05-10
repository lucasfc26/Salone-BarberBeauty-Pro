import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Route = createFileRoute("/admin/agenda")({
  component: Agenda,
});

const hours = Array.from({ length: 11 }, (_, i) => `${String(i + 8).padStart(2, "0")}:00`);
const days = ["Seg 21", "Ter 22", "Qua 23", "Qui 24", "Sex 25", "Sab 26", "Dom 27"];
const events: {
  d: number;
  h: number;
  len: number;
  name: string;
  service: string;
  color: string;
}[] = [
  {
    d: 0,
    h: 1,
    len: 1,
    name: "Rafael M.",
    service: "Corte",
    color: "gradient-gold text-primary-foreground",
  },
  {
    d: 0,
    h: 4,
    len: 2,
    name: "Pedro C.",
    service: "Combo",
    color: "bg-primary/20 border border-primary/40 text-primary",
  },
  {
    d: 1,
    h: 2,
    len: 1,
    name: "Andre S.",
    service: "Barba",
    color: "bg-primary/20 border border-primary/40 text-primary",
  },
  {
    d: 2,
    h: 3,
    len: 2,
    name: "Joao V.",
    service: "Pigmentacao",
    color: "gradient-gold text-primary-foreground",
  },
  {
    d: 3,
    h: 5,
    len: 1,
    name: "Marcos L.",
    service: "Corte",
    color: "bg-primary/20 border border-primary/40 text-primary",
  },
  {
    d: 4,
    h: 1,
    len: 2,
    name: "Bruno R.",
    service: "Combo",
    color: "gradient-gold text-primary-foreground",
  },
  {
    d: 5,
    h: 6,
    len: 1,
    name: "Igor P.",
    service: "Barba",
    color: "bg-primary/20 border border-primary/40 text-primary",
  },
];

function Agenda() {
  const isMobile = useIsMobile();
  const [view, setView] = useState<"diaria" | "semanal" | "mensal">("semanal");
  const [selectedDay, setSelectedDay] = useState(0);

  useEffect(() => {
    setView(isMobile ? "diaria" : "semanal");
  }, [isMobile]);

  const isDiaria = view === "diaria";
  const visibleDayIndices = isDiaria ? [selectedDay] : days.map((_, i) => i);
  const periodLabel = isDiaria ? days[selectedDay] : "Semana 21 — 27 Out";

  function prevPeriod() {
    if (isDiaria) setSelectedDay((d) => Math.max(0, d - 1));
  }

  function nextPeriod() {
    if (isDiaria) setSelectedDay((d) => Math.min(days.length - 1, d + 1));
  }

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Agenda Inteligente</p>
          <h1 className="font-display text-3xl md:text-5xl">Outubro 2024</h1>
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
            disabled={isDiaria && selectedDay === 0}
            className="hairline w-9 h-9 rounded-md grid place-items-center hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-display text-lg md:text-xl">{periodLabel}</span>
          <button
            onClick={nextPeriod}
            disabled={isDiaria && selectedDay === days.length - 1}
            className="hairline w-9 h-9 rounded-md grid place-items-center hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {isDiaria && (
          <div className="flex gap-1.5 mb-4 overflow-x-auto pb-1">
            {days.map((d, i) => (
              <button
                key={d}
                onClick={() => setSelectedDay(i)}
                className={`shrink-0 px-3 py-1.5 rounded text-[10px] uppercase tracking-wider transition ${selectedDay === i ? "bg-primary text-primary-foreground" : "hairline hover:border-primary"}`}
              >
                {d}
              </button>
            ))}
          </div>
        )}

        <div className={isDiaria ? "" : "overflow-x-auto"}>
          <div
            className={`grid gap-px bg-border/30 rounded-lg overflow-hidden ${isDiaria ? "grid-cols-[64px_1fr]" : "min-w-175 grid-cols-[64px_repeat(7,1fr)]"}`}
          >
            <div className="bg-surface" />
            {visibleDayIndices.map((di) => (
              <div
                key={di}
                className="bg-surface text-center py-3 text-xs uppercase tracking-widest text-muted-foreground"
              >
                {days[di]}
              </div>
            ))}

            {hours.map((h, hi) => (
              <>
                <div
                  key={`h-${hi}`}
                  className="bg-surface px-2 py-4 text-xs text-muted-foreground text-right pr-3"
                >
                  {h}
                </div>
                {visibleDayIndices.map((di) => {
                  const ev = events.find((e) => e.d === di && e.h === hi);
                  return (
                    <div
                      key={`${hi}-${di}`}
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
      </div>
    </div>
  );
}
