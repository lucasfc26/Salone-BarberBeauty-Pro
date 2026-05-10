import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, CreditCard, Banknote, Smartphone, Repeat } from "lucide-react";

export const Route = createFileRoute("/admin/financeiro")({
  component: Financeiro,
});

const transactions = [
  { d: "24/10", desc: "Combo Premium — Rafael M.", method: "PIX", value: 130, type: "in" },
  { d: "24/10", desc: "Aluguel atelier", method: "Transferência", value: -3500, type: "out" },
  { d: "23/10", desc: "Corte + Barba — Pedro C.", method: "Cartão", value: 110, type: "in" },
  { d: "23/10", desc: "Comissão Lucas V.", method: "PIX", value: -820, type: "out" },
  { d: "22/10", desc: "Kit Cavalheiro — venda", method: "Cartão", value: 249, type: "in" },
  { d: "22/10", desc: "Pigmentação — João V.", method: "Dinheiro", value: 70, type: "in" },
];

function Financeiro() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Financeiro</p>
        <h1 className="font-display text-4xl md:text-5xl">Fluxo de Caixa</h1>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { label: "Entradas (Mês)", value: "R$ 62.480", icon: ArrowUpRight, color: "text-emerald-400" },
          { label: "Saídas (Mês)", value: "R$ 14.280", icon: ArrowDownRight, color: "text-rose-400" },
          { label: "Saldo", value: "R$ 48.200", icon: Banknote, color: "text-primary" },
        ].map((c) => (
          <div key={c.label} className="glass rounded-xl p-6">
            <div className="flex justify-between items-start mb-3">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</p>
              <c.icon className={`w-5 h-5 ${c.color}`} />
            </div>
            <div className="font-display text-3xl">{c.value}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 glass rounded-xl p-6">
          <h3 className="font-display text-2xl mb-6">Movimentações recentes</h3>
          <div className="space-y-1">
            {transactions.map((t, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border/20 last:border-0">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-md grid place-items-center ${t.type === "in" ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"}`}>
                    {t.type === "in" ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.desc}</div>
                    <div className="text-xs text-muted-foreground">{t.d} · {t.method}</div>
                  </div>
                </div>
                <div className={`font-display text-lg ${t.type === "in" ? "text-emerald-400" : "text-rose-400"}`}>
                  {t.value > 0 ? "+" : ""}R$ {Math.abs(t.value).toLocaleString("pt-BR")}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-xl p-6">
          <h3 className="font-display text-2xl mb-6">Métodos de pagamento</h3>
          <div className="space-y-4">
            {[
              { name: "PIX", icon: Smartphone, pct: 48 },
              { name: "Cartão", icon: CreditCard, pct: 35 },
              { name: "Dinheiro", icon: Banknote, pct: 12 },
              { name: "Assinatura", icon: Repeat, pct: 5 },
            ].map((m) => (
              <div key={m.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="flex items-center gap-2"><m.icon className="w-4 h-4 text-primary" /> {m.name}</span>
                  <span className="text-primary">{m.pct}%</span>
                </div>
                <div className="h-1 bg-surface-elevated rounded-full overflow-hidden">
                  <div className="h-full gradient-gold" style={{ width: `${m.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
