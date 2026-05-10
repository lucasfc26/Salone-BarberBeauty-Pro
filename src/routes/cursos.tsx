import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Clock, GraduationCap, Star, PlayCircle } from "lucide-react";
import c1 from "@/assets/course-1.jpg";
import c2 from "@/assets/course-2.jpg";
import c3 from "@/assets/course-3.jpg";

export const Route = createFileRoute("/cursos")({
  head: () => ({
    meta: [
      { title: "Cursos — Salone Academy" },
      { name: "description", content: "Cursos profissionais de barbearia: online e presencial, com certificação." },
    ],
  }),
  component: Cursos,
});

const courses = [
  { title: "Mestre da Tesoura", teacher: "Lucas Vieira", duration: "12h", price: 590, level: "Avançado", rating: 4.9, modules: 8, img: c1 },
  { title: "Barba Perfeita", teacher: "Mateus Reis", duration: "8h", price: 390, level: "Intermediário", rating: 4.8, modules: 6, img: c2 },
  { title: "Gestão de Barbearia", teacher: "Ana Souza", duration: "16h", price: 790, level: "Pro", rating: 5.0, modules: 12, img: c3 },
  { title: "Pigmentação & Cor", teacher: "Diego Lima", duration: "10h", price: 490, level: "Avançado", rating: 4.7, modules: 7, img: c1 },
  { title: "Fundamentos do Corte", teacher: "Carlos Bento", duration: "20h", price: 690, level: "Iniciante", rating: 4.9, modules: 14, img: c2 },
  { title: "Marketing para Barbeiros", teacher: "Júlia Castro", duration: "6h", price: 290, level: "Todos", rating: 4.6, modules: 5, img: c3 },
];

function Cursos() {
  return (
    <SiteLayout>
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Salone Academy</p>
        <h1 className="font-display text-5xl md:text-6xl mb-6 max-w-3xl">Cursos profissionais para elevar seu ofício.</h1>
        <p className="text-muted-foreground max-w-2xl text-lg mb-12">Online ou presencial. Certificação reconhecida e mentoria contínua com mestres do setor.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <div key={c.title} className="group glass rounded-xl overflow-hidden hover:border-primary/40 transition">
              <div className="relative aspect-video overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <PlayCircle className="absolute inset-0 m-auto w-14 h-14 text-primary opacity-0 group-hover:opacity-100 transition" />
                <span className="absolute top-3 left-3 bg-background/80 backdrop-blur text-primary text-[10px] uppercase tracking-widest px-2 py-1 rounded">{c.level}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl mb-2">{c.title}</h3>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">por {c.teacher}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{c.duration}</span>
                  <span className="flex items-center gap-1"><GraduationCap className="w-3 h-3" />{c.modules} módulos</span>
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 fill-primary text-primary" />{c.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-primary">R$ {c.price}</span>
                  <button className="text-[10px] uppercase tracking-widest bg-primary text-primary-foreground px-4 py-2 rounded hover:brightness-110 transition">Inscrever</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
