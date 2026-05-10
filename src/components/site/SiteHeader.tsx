import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/marketplace", label: "Marketplace" },
  { to: "/cursos", label: "Cursos" },
  { to: "/agendar", label: "Agendar" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl text-white tracking-tight">
          SALONE
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/admin"
            className="hidden md:inline-flex text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition"
          >
            Admin
          </Link>
          <Link
            to="/agendar"
            className="hidden md:inline-flex bg-primary text-primary-foreground px-5 py-2 rounded-md text-xs font-semibold uppercase tracking-widest hover:brightness-110 transition shadow-gold"
          >
            Agendar
          </Link>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 px-6 py-4 space-y-3">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block text-sm uppercase tracking-widest text-muted-foreground hover:text-primary"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/admin"
            onClick={() => setOpen(false)}
            className="block text-sm uppercase tracking-widest text-muted-foreground"
          >
            Admin
          </Link>
          <Link
            to="/agendar"
            onClick={() => setOpen(false)}
            className="block text-center bg-primary text-primary-foreground py-2.5 rounded-md uppercase text-xs tracking-widest font-semibold"
          >
            Agendar Horário
          </Link>
        </div>
      )}
    </header>
  );
}
