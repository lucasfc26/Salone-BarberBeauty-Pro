import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, Plus } from "lucide-react";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

export const Route = createFileRoute("/admin/produtos")({
  component: Produtos,
});

const products = [
  { sku: "BO-001", name: "Beard Oil Premium", img: p1, stock: 24, sold: 142, price: 89 },
  { sku: "PM-002", name: "Pomada Black Edition", img: p2, stock: 4, sold: 98, price: 65 },
  { sku: "MQ-003", name: "Máquina Pro Gold", img: p3, stock: 12, sold: 32, price: 459 },
  { sku: "SH-004", name: "Shampoo Atelier", img: p4, stock: 2, sold: 64, price: 79 },
];

function Produtos() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Estoque</p>
          <h1 className="font-display text-4xl md:text-5xl">Produtos</h1>
        </div>
        <button className="bg-primary text-primary-foreground px-5 py-3 rounded-md text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:brightness-110 transition shadow-gold">
          <Plus className="w-4 h-4" /> Novo produto
        </button>
      </div>

      <div className="glass rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border/40">
              <th className="py-4 px-6">Produto</th>
              <th>SKU</th>
              <th>Estoque</th>
              <th>Vendidos</th>
              <th>Preço</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.sku} className="border-b border-border/20 hover:bg-white/5 transition">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img src={p.img} alt={p.name} loading="lazy" className="w-12 h-12 rounded-md object-cover" />
                    <div className="font-medium">{p.name}</div>
                  </div>
                </td>
                <td className="text-muted-foreground">{p.sku}</td>
                <td>
                  <span className={`inline-flex items-center gap-1 text-xs ${p.stock < 5 ? "text-rose-400" : "text-emerald-400"}`}>
                    {p.stock < 5 && <AlertTriangle className="w-3 h-3" />}{p.stock} un
                  </span>
                </td>
                <td className="text-muted-foreground">{p.sold}</td>
                <td className="font-display text-primary">R$ {p.price}</td>
                <td><button className="text-xs uppercase tracking-widest text-primary hover:underline">Editar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
