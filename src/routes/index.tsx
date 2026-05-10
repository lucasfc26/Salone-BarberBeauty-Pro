import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import hero from "@/assets/hero-barbershop.jpg";
import cut from "@/assets/service-cut.jpg";
import course1 from "@/assets/course-1.jpg";
import { Scissors, Sparkles, Award, Calendar, ArrowRight, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Salone — The Modern Grooming Standard" },
      {
        name: "description",
        content:
          "Plataforma premium para barbearias: agendamento, marketplace, cursos e gestão completa.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    name: "Corte Executivo",
    price: "R$ 85",
    desc: "Corte sob medida com técnicas clássicas e finalização com toalha quente.",
  },
  {
    name: "Barba Esculpida",
    price: "R$ 55",
    desc: "Modelagem precisa e finalização com óleos premium.",
  },
  { name: "Combo Premium", price: "R$ 130", desc: "Corte + barba + ritual de cuidados completo." },
  {
    name: "Pigmentação",
    price: "R$ 70",
    desc: "Realce de fios brancos com produtos de alta performance.",
  },
];

const differentials = [
  {
    icon: Scissors,
    title: "Mestres certificados",
    desc: "Time formado nas melhores academias do mundo.",
  },
  {
    icon: Sparkles,
    title: "Produtos premium",
    desc: "Curadoria de marcas internacionais exclusivas.",
  },
  {
    icon: Award,
    title: "Experiência única",
    desc: "Ambiente sofisticado pensado em cada detalhe.",
  },
  { icon: Calendar, title: "Agenda inteligente", desc: "Marque em 30 segundos pelo aplicativo." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Interior de barbearia luxuosa"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full hairline text-xs uppercase tracking-[0.2em] text-primary mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Atelier de barbearia premium
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 text-gradient-gold">
            Salone
            <br />
            Beauty Barber
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            A interseção entre o ofício tradicional e a precisão contemporânea. Uma experiência
            exclusiva para o cavalheiro exigente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/agendar"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-md text-sm font-semibold uppercase tracking-widest hover:brightness-110 transition shadow-gold"
            >
              Agendar Horário
            </Link>
            <Link
              to="/marketplace"
              className="hairline px-8 py-4 rounded-md text-sm font-semibold uppercase tracking-widest hover:border-primary hover:text-primary transition"
            >
              Conhecer Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* DIFFERENTIALS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-4 gap-6">
          {differentials.map((d) => (
            <div
              key={d.title}
              className="group glass rounded-xl p-6 hover:border-primary/40 transition"
            >
              <d.icon className="w-7 h-7 text-primary mb-4" />
              <h3 className="font-display text-xl mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Nossos Serviços</p>
            <h2 className="font-display text-4xl md:text-5xl">
              Atenção meticulosa
              <br />a cada detalhe.
            </h2>
          </div>
          <Link
            to="/agendar"
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary hover:gap-3 transition-all"
          >
            Ver todos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden h-[500px] group hairline">
            <img
              src={cut}
              alt="Corte premium"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <span className="inline-block text-xs uppercase tracking-widest text-primary mb-3">
                Signature
              </span>
              <h3 className="font-display text-3xl mb-2">{services[0].name}</h3>
              <p className="text-muted-foreground mb-4 max-w-md">{services[0].desc}</p>
              <span className="text-primary text-sm uppercase tracking-widest">
                A partir de {services[0].price}
              </span>
            </div>
          </div>
          {services.slice(1).map((s) => (
            <div
              key={s.name}
              className="glass rounded-xl p-6 hover:border-primary/40 transition group"
            >
              <h3 className="font-display text-2xl mb-2 group-hover:text-primary transition">
                {s.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <span className="text-primary text-xs uppercase tracking-widest">{s.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES TEASER */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden h-[420px] hairline">
            <img src={course1} alt="Cursos" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Salone Academy</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Eleve seu ofício ao próximo nível.
            </h2>
            <p className="text-muted-foreground mb-8">
              Cursos online e presenciais ministrados pelos maiores nomes da barbearia mundial.
              Certificação reconhecida e mentoria contínua.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { n: "12+", l: "Cursos" },
                { n: "1.8k", l: "Alunos" },
                { n: "4.9", l: "Avaliação" },
              ].map((s) => (
                <div key={s.l} className="hairline rounded-lg p-4 text-center">
                  <div className="font-display text-3xl text-primary">{s.n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/cursos"
              className="inline-flex items-center gap-2 text-primary uppercase text-xs tracking-[0.2em] hover:gap-3 transition-all"
            >
              Explorar academia <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="flex justify-center mb-6 gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>
        <blockquote className="font-display text-3xl md:text-4xl leading-snug mb-6">
          "Mais que uma barbearia — um ritual. Cada visita ao Salone é uma pausa para reencontrar o
          melhor de si."
        </blockquote>
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          Rafael Mendes — Cliente desde 2022
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="relative rounded-2xl overflow-hidden p-12 md:p-20 text-center gradient-gold">
          <h2 className="font-display text-4xl md:text-6xl text-primary-foreground mb-6">
            Pronto para a sua melhor versão?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Reserve seu horário em segundos e descubra o padrão Salone.
          </p>
          <Link
            to="/agendar"
            className="inline-flex bg-background text-foreground px-10 py-4 rounded-md text-sm font-semibold uppercase tracking-widest hover:brightness-125 transition"
          >
            Agendar agora
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
