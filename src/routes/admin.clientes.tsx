import { createFileRoute } from "@tanstack/react-router";
import { Search, Plus, Star } from "lucide-react";

export const Route = createFileRoute("/admin/clientes")({
  component: Clientes,
});

const clients = [
  { name: "Rafael Mendes", visits: 24, last: "Hoje", spent: 2480, level: "VIP" },
  { name: "Pedro Cavalcante", visits: 18, last: "2d", spent: 1850, level: "Gold" },
  { name: "André Silva", visits: 12, last: "1sem", spent: 980, level: "Gold" },
  { name: "João Vitor", visits: 8, last: "2sem", spent: 620, level: "Silver" },
  { name: "Marcos Lopes", visits: 32, last: "3d", spent: 3120, level: "VIP" },
  { name: "Bruno Reis", visits: 6, last: "1mês", spent: 480, level: "Silver" },
];

function Clientes() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Clientes</p>
          <h1 className="font-display text-4xl md:text-5xl">1.842 clientes</h1>
        </div>
        <button className="bg-primary text-primary-foreground px-5 py-3 rounded-md text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:brightness-110 transition shadow-gold">
          <Plus className="w-4 h-4" /> Novo cliente
        </button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          placeholder="Buscar cliente..."
          className="w-full bg-surface hairline rounded-md pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary"
        />
      </div>

      <div className="glass rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border/40">
              <th className="py-4 px-6">Cliente</th>
              <th>Nível</th>
              <th>Visitas</th>
              <th>Última</th>
              <th>Total gasto</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {clients.map((c) => (
              <tr key={c.name} className="border-b border-border/20 hover:bg-white/5 transition">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-gold grid place-items-center text-primary-foreground font-bold text-xs">
                      {c.name[0]}
                    </div>
                    <div>
                      <div className="font-medium">{c.name}</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        Cashback R$ {(c.spent * 0.05).toFixed(0)}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-primary bg-gold-soft px-2 py-1 rounded">
                    <Star className="w-3 h-3 fill-primary" />
                    {c.level}
                  </span>
                </td>
                <td className="text-muted-foreground">{c.visits}</td>
                <td className="text-muted-foreground">{c.last}</td>
                <td className="font-display text-primary">R$ {c.spent.toLocaleString("pt-BR")}</td>
                <td>
                  <button className="text-xs uppercase tracking-widest text-primary hover:underline">
                    Ver
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
