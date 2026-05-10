import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Calendar,
  Wallet,
  Users,
  Scissors,
  Package,
  BarChart3,
  Settings,
  LogOut,
  Bell,
  Search,
  Plus,
} from "lucide-react";
import { useState } from "react";

const items: { to: string; label: string; icon: typeof LayoutDashboard; exact?: boolean }[] = [
  { to: "/admin", label: "Visão Geral", icon: LayoutDashboard, exact: true },
  { to: "/admin/agenda", label: "Agenda", icon: Calendar },
  { to: "/admin/financeiro", label: "Financeiro", icon: Wallet },
  { to: "/admin/clientes", label: "Clientes", icon: Users },
  { to: "/admin/funcionarios", label: "Equipe", icon: Scissors },
  { to: "/admin/produtos", label: "Produtos", icon: Package },
  { to: "/admin/relatorios", label: "Relatórios", icon: BarChart3 },
];

export function AdminLayout() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 h-screen w-64 bg-surface border-r border-border/40 z-40 transition-transform ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="px-6 py-6 flex items-center gap-3 border-b border-border/40">
          <div className="w-10 h-10 rounded-lg gradient-gold grid place-items-center">
            <Scissors className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <div className="font-display text-xl text-primary leading-none">Salone</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
              Admin Console
            </div>
          </div>
        </div>
        <div className="p-4">
          <Link
            to="/agendar"
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-md text-xs uppercase tracking-widest font-semibold hover:brightness-110 transition shadow-gold"
          >
            <Plus className="w-4 h-4" /> Novo agendamento
          </Link>
        </div>
        <nav className="px-3 space-y-1">
          {items.map((it) => {
            const active = it.exact ? path === it.to : path.startsWith(it.to);
            return (
              <Link
                key={it.to}
                to={it.to as any}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-md text-sm transition ${
                  active
                    ? "bg-gold-soft text-primary border-r-2 border-primary"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                <it.icon className="w-4 h-4" />
                {it.label}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border/40 space-y-1">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-2.5 rounded-md text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground transition"
          >
            <Settings className="w-4 h-4" /> Configurações
          </Link>
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-2.5 rounded-md text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground transition"
          >
            <LogOut className="w-4 h-4" /> Sair
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0">
        <header className="sticky top-0 z-30 glass border-b border-border/40 px-6 h-16 flex items-center justify-between">
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            ☰
          </button>
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              placeholder="Buscar clientes, agendamentos, produtos..."
              className="w-full bg-surface hairline rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-md hairline grid place-items-center hover:border-primary hover:text-primary transition relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary animate-pulse" />
            </button>
            <div className="w-10 h-10 rounded-md gradient-gold grid place-items-center text-primary-foreground font-bold text-sm">
              JS
            </div>
          </div>
        </header>
        <main className="p-6 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
