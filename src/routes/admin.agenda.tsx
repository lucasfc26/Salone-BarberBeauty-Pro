import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/agenda")({
  component: Agenda,
});

const hours = Array.from({ length: 11 }, (_, i) => `${String(i + 8).padStart(2, "0")}:00`);
const days = ["Seg 21", "Ter 22", "Qua 23", "Qui 24", "Sex 25", "Sáb 26", "Dom 27"];
const events: { d: number; h: number; len: number; name: string; service: string; color: string }[] = [
  { d: 0, h: 1, len: 1, name: "Rafael M.", service: "Corte", color: "gradient-gold text-primary-foreground" },
  { d: 0, h: 4, len: 2, name: "Pedro C.", service: "Combo", color: "bg-primary/20 border border-primary/40 text-primary" },
  { d: 1, h: 2, len: 1, name: "André S.", service: "Barba", color: "bg-primary/20 border border-primary/40 text-primary" },
  { d: 2, h: 3, len: 2, name: "João V.", service: "Pigmentação", color: "gradient-gold text-primary-foreground" },
  { d: 3, h: 5, len: 1, name: "Marcos L.", service: "Corte", color: "bg-primary/20 border border-primary/40 text-primary" },
  { d: 4, h: 1, len: 2, name: "Bruno R.", service: "Combo", color: "gradient-gold text-primary-foreground" },
  { d: 5, h: 6, len: 1, name: "Igor P.", service: "Barba", color: "bg-primary/20 border border-primary/40 text-primary" },
];

function Agenda() {
  const [view, setView] = useState<"diaria" | "semanal" | "mensal">("semanal");

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Agenda Inteligente</p>
          <h1 className="font-display text-4xl md:text-5xl">Outubro 2024</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex hairline rounded-md overflow-hidden">
            {(["diaria", "semanal", "mensal"] as const).map((v) => (
              <button key={v} onClick={() => setView(v)}
                className={`px-4 py-2 text-xs uppercase tracking-widest ${view === v ? "bg-primary text-primary-foreground" : "hover:bg-white/5"}`}>
                {v}
              </button>
            ))}
          </div>
          <button className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:brightness-110 transition shadow-gold">
            <Plus className="w-4 h-4" /> Bloqueio
          </button>
        </div>
      </div>

      <div className="glass rounded-xl p-6 overflow-x-auto">
        <div className="flex items-center justify-between mb-6">
          <button className="hairline w-9 h-9 rounded-md grid place-items-center hover:border-primary"><ChevronLeft className="w-4 h-4" /></button>
          <span className="font-display text-xl">Semana 21 — 27 Out</span>
          <button className="hairline w-9 h-9 rounded-md grid place-items-center hover:border-primary"><ChevronRight className="w-4 h-4" /></button>
        </div>

        <div className="min-w-[800px] grid grid-cols-[80px_repeat(7,1fr)] gap-px bg-border/30 rounded-lg overflow-hidden">
          <div className="bg-surface" />
          {days.map((d) => (
            <div key={d} className="bg-surface text-center py-3 text-xs uppercase tracking-widest text-muted-foreground">{d}</div>
          ))}
          {hours.map((h, hi) => (
            <>
              <div key={`h-${hi}`} className="bg-surface px-3 py-4 text-xs text-muted-foreground">{h}</div>
              {days.map((_, di) => {
                const ev = events.find((e) => e.d === di && e.h === hi);
                return (
                  <div key={`${hi}-${di}`} className="bg-surface min-h-[60px] p-1 relative hover:bg-white/[0.03] transition">
                    {ev && (
                      <div className={`absolute inset-1 rounded-md p-2 text-xs ${ev.color}`} style={{ height: `${ev.len * 60 - 8}px` }}>
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
  );
}
