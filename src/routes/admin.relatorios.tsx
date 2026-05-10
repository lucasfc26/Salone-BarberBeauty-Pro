import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";

export const Route = createFileRoute("/admin/relatorios")({
  component: Relatorios,
});

const reports = [
  { name: "Faturamento Mensal", desc: "Resumo financeiro completo do mês", period: "Outubro 2024" },
  { name: "Performance da Equipe", desc: "Métricas individuais e ranking", period: "Outubro 2024" },
  { name: "Top Serviços", desc: "Serviços mais agendados e receita gerada", period: "Trimestre" },
  { name: "Estoque & Vendas", desc: "Movimentação de produtos", period: "Outubro 2024" },
  { name: "Fidelidade & Cashback", desc: "Engajamento dos clientes VIP", period: "Anual" },
  { name: "Clientes Inativos", desc: "Lista de reativação", period: "Últimos 60 dias" },
];

function Relatorios() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Relatórios</p>
        <h1 className="font-display text-4xl md:text-5xl">Inteligência de negócio</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports.map((r) => (
          <div
            key={r.name}
            className="glass rounded-xl p-6 hover:border-primary/40 transition group"
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className="w-12 h-12 rounded-lg bg-gold-soft grid place-items-center text
                -primary"
              >
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {r.period}
              </span>
            </div>
            <h3 className="font-display text-xl mb-2">{r.name}</h3>
            <p className="text-sm text-muted-foreground mb-6">{r.desc}</p>
            <div className="flex gap-2">
              <button className="flex-1 hairline rounded-md py-2 text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition flex items-center justify-center gap-2">
                <Download className="w-3 h-3" /> PDF
              </button>
              <button className="flex-1 hairline rounded-md py-2 text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition flex items-center justify-center gap-2">
                <Download className="w-3 h-3" /> Excel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
