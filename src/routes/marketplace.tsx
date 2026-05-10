import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Heart, ShoppingBag, Search, Star } from "lucide-react";
import { useState } from "react";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "Marketplace — Salone" },
      { name: "description", content: "Produtos premium de barbearia: pomadas, óleos, máquinas e shampoos." },
    ],
  }),
  component: Marketplace,
});

const products = [
  { id: 1, name: "Beard Oil Premium", category: "Óleos", price: 89, rating: 4.9, img: p1, tag: "Bestseller" },
  { id: 2, name: "Pomada Black Edition", category: "Pomadas", price: 65, rating: 4.8, img: p2, tag: "Novo" },
  { id: 3, name: "Máquina Pro Gold", category: "Máquinas", price: 459, rating: 5.0, img: p3, tag: "Destaque" },
  { id: 4, name: "Shampoo Atelier", category: "Shampoos", price: 79, rating: 4.7, img: p4 },
  { id: 5, name: "Kit Cavalheiro", category: "Kits", price: 249, rating: 4.9, img: p1, tag: "Combo" },
  { id: 6, name: "Pomada Modeladora", category: "Pomadas", price: 55, rating: 4.6, img: p2 },
  { id: 7, name: "Trimmer Compact", category: "Máquinas", price: 289, rating: 4.8, img: p3 },
  { id: 8, name: "Óleo Multiuso", category: "Óleos", price: 49, rating: 4.5, img: p1 },
];

const categories = ["Todos", "Pomadas", "Óleos", "Shampoos", "Máquinas", "Kits"];

function Marketplace() {
  const [cat, setCat] = useState("Todos");
  const [q, setQ] = useState("");
  const [favs, setFavs] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  const filtered = products.filter((p) =>
    (cat === "Todos" || p.category === cat) &&
    p.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <SiteLayout>
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Marketplace</p>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <h1 className="font-display text-5xl md:text-6xl">Produtos curados<br />para profissionais.</h1>
          <button className="relative hairline px-5 py-3 rounded-md flex items-center gap-2 hover:border-primary hover:text-primary transition">
            <ShoppingBag className="w-4 h-4" />
            <span className="text-xs uppercase tracking-widest">Carrinho</span>
            {cart.length > 0 && <span className="bg-primary text-primary-foreground text-[10px] rounded-full w-5 h-5 grid place-items-center font-bold">{cart.length}</span>}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar produtos..."
              className="w-full bg-surface hairline rounded-md pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-3 rounded-md text-xs uppercase tracking-widest whitespace-nowrap transition ${
                  cat === c ? "bg-primary text-primary-foreground" : "hairline hover:border-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <div key={p.id} className="group glass rounded-xl overflow-hidden hover:border-primary/40 transition">
              <div className="relative aspect-square overflow-hidden bg-surface">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {p.tag && <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest px-2 py-1 rounded">{p.tag}</span>}
                <button
                  onClick={() => setFavs((f) => f.includes(p.id) ? f.filter(x => x !== p.id) : [...f, p.id])}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full glass grid place-items-center hover:text-primary transition"
                >
                  <Heart className={`w-4 h-4 ${favs.includes(p.id) ? "fill-primary text-primary" : ""}`} />
                </button>
              </div>
              <div className="p-4">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{p.category}</p>
                <h3 className="font-display text-lg mb-2 line-clamp-1">{p.name}</h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                  <Star className="w-3 h-3 fill-primary text-primary" />
                  {p.rating}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl text-primary">R$ {p.price}</span>
                  <button
                    onClick={() => setCart((c) => [...c, p.id])}
                    className="text-[10px] uppercase tracking-widest bg-primary text-primary-foreground px-3 py-2 rounded hover:brightness-110 transition"
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
