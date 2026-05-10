import { createFileRoute } from "@tanstack/react-router";
import { Wallet, Users, Calendar, Scissors, ArrowUp, ArrowDown, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: Dashboard,
});

const kpis = [
  { label: "Faturamento (Hoje)", value: "R$ 2.450", delta: "+12%", up: true, icon: Wallet },
  { label: "Faturamento (Mês)", value: "R$ 48.200", delta: "+8%", up: true, icon: TrendingUp },
  { label: "Clientes Ativos", value: "1.842", delta: "+24", up: true, icon: Users },
  { label: "Agendamentos", value: "126", delta: "−3", up: false, icon: Calendar },
];

const services = [
  { name: "Corte Executivo", pct: 45, n: 142 },
  { name: "Combo Premium", pct: 30, n: 98 },
  { name: "Barba Esculpida", pct: 18, n: 56 },
  { name: "Pigmentação", pct: 7, n: 24 },
];

const upcoming = [
  { time: "10:00", name: "Rafael Mendes", service: "Corte Executivo", barber: "Lucas V." },
  { time: "11:00", name: "Pedro Cavalcante", service: "Combo Premium", barber: "Mateus R." },
  { time: "13:30", name: "André Silva", service: "Barba Esculpida", barber: "Diego L." },
  { time: "15:00", name: "João Vitor", service: "Pigmentação", barber: "Carlos B." },
];

function Dashboard() {
  const today = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between border-b border-border/40 pb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">{today}</p>
          <h1 className="font-display text-4xl md:text-5xl">Bom dia, Julian.</h1>
        </div>
        <div className="hidden md:flex gap-2">
          {["Hoje", "Semana", "Mês", "Ano"].map((p, i) => (
            <button key={p} className={`px-3 py-1.5 text-xs uppercase tracking-widest rounded-md ${i === 2 ? "bg-primary text-primary-foreground" : "hairline hover:border-primary"}`}>
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="glass rounded-xl p-6 hover:border-primary/40 transition group relative overflow-hidden">
            <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gold-soft opacity-0 group-hover:opacity-100 transition" />
            <div className="relative flex justify-between items-start mb-3">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{k.label}</p>
              <k.icon className="w-4 h-4 text-primary opacity-60" />
            </div>
            <div className="relative flex items-baseline gap-3">
              <span className="font-display text-3xl">{k.value}</span>
              <span className={`text-xs flex items-center gap-1 ${k.up ? "text-emerald-400" : "text-rose-400"}`}>
                {k.up ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}{k.delta}
              </span>
            </div>
            <div className="mt-4 flex items-end gap-1 h-8">
              {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-primary/30 group-hover:bg-primary/60 transition" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {/* Chart */}
        <div className="lg:col-span-2 glass rounded-xl p-6">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-display text-2xl">Crescimento de Receita</h3>
            <div className="flex gap-2">
              {["1S", "1M", "1A"].map((p, i) => (
                <button key={p} className={`px-3 py-1 text-[10px] uppercase tracking-widest rounded ${i === 1 ? "bg-primary text-primary-foreground" : "hairline"}`}>
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div className="h-64 flex items-end gap-3 px-2 border-b border-l border-border/40 relative">
            {[
              { v: 35, l: "S1", val: "R$ 21k" },
              { v: 55, l: "S2", val: "R$ 32k" },
              { v: 70, l: "S3", val: "R$ 45k" },
              { v: 90, l: "S4", val: "R$ 58k", active: true },
              { v: 60, l: "S5", val: "R$ 38k" },
              { v: 80, l: "S6", val: "R$ 51k" },
            ].map((b) => (
              <div key={b.l} className="flex-1 flex flex-col items-center gap-2 group">
                <div className="opacity-0 group-hover:opacity-100 transition text-xs font-medium text-primary">{b.val}</div>
                <div className={`w-full rounded-t transition ${b.active ? "gradient-gold shadow-gold" : "bg-surface-elevated hairline group-hover:bg-primary/30"}`}
                  style={{ height: `${b.v}%` }} />
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{b.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Services */}
        <div className="glass rounded-xl p-6">
          <h3 className="font-display text-2xl mb-6">Top Serviços</h3>
          <div className="space-y-5">
            {services.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span>{s.name}</span>
                  <span className="text-primary">{s.pct}%</span>
                </div>
                <div className="h-1 bg-surface-elevated rounded-full overflow-hidden">
                  <div className="h-full gradient-gold" style={{ width: `${s.pct}%` }} />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.n} agendamentos</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming */}
      <div className="glass rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-display text-2xl">Próximos agendamentos</h3>
          <button className="text-xs uppercase tracking-widest text-primary hover:underline">Ver agenda</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border/40">
                <th className="py-3">Horário</th>
                <th>Cliente</th>
                <th>Serviço</th>
                <th>Barbeiro</th>
                <th className="text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {upcoming.map((u, i) => (
                <tr key={i} className="border-b border-border/20 hover:bg-white/5 transition">
                  <td className="py-4 text-primary font-medium">{u.time}</td>
                  <td className="flex items-center gap-3 py-4">
                    <div className="w-8 h-8 rounded-full bg-surface-elevated grid place-items-center text-xs">{u.name[0]}</div>
                    {u.name}
                  </td>
                  <td>{u.service}</td>
                  <td className="text-muted-foreground">{u.barber}</td>
                  <td className="text-right">
                    <span className="inline-flex text-[10px] uppercase tracking-widest text-primary bg-gold-soft px-2 py-1 rounded">Confirmado</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
