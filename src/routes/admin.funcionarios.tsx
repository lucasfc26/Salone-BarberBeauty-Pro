import { createFileRoute } from "@tanstack/react-router";
import { Plus, Trophy } from "lucide-react";

export const Route = createFileRoute("/admin/funcionarios")({
  component: Funcionarios,
});

const staff = [
  {
    name: "André Castelo",
    role: "Master Barber",
    status: "online",
    services: 142,
    revenue: 18200,
    commission: 40,
    rating: 4.9,
  },
  {
    name: "Emanuelly Albuquerque",
    role: "Senior Barber",
    status: "online",
    services: 98,
    revenue: 12400,
    commission: 40,
    rating: 4.8,
  },
  {
    name: "Josy Lira",
    role: "Nail Designer",
    status: "offline",
    services: 85,
    revenue: 10100,
    commission: 20,
    rating: 4.7,
  },
];

function Funcionarios() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Equipe</p>
          <h1 className="font-display text-4xl md:text-5xl">Profissionais</h1>
        </div>
        <button className="bg-primary text-primary-foreground px-5 py-3 rounded-md text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:brightness-110 transition shadow-gold">
          <Plus className="w-4 h-4" /> Novo membro
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {staff.map((s, i) => (
          <div
            key={s.name}
            className="glass rounded-xl p-6 hover:border-primary/40 transition relative"
          >
            {i === 0 && (
              <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full gradient-gold grid place-items-center shadow-gold">
                <Trophy className="w-4 h-4 text-primary-foreground" />
              </div>
            )}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-full gradient-gold grid place-items-center text-primary-foreground font-bold">
                  {s.name[0]}
                </div>
                <span
                  className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-background ${s.status === "online" ? "bg-emerald-400" : "bg-muted-foreground"}`}
                />
              </div>
              <div>
                <div className="font-display text-lg">{s.name}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.role}
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <Row label="Serviços" value={`${s.services}`} />
              <Row label="Faturamento" value={`R$ ${s.revenue.toLocaleString("pt-BR")}`} />
              <Row label="Comissão" value={`${s.commission}%`} />
              <Row label="Avaliação" value={`★ ${s.rating}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-border/20 pb-2 last:border-0">
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
      <span className="text-primary">{value}</span>
    </div>
  );
}
