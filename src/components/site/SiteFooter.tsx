import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-surface/50 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-3xl text-primary mb-3">Salone</div>
          <p className="text-sm text-muted-foreground">
            The modern grooming standard. Tradição e tecnologia para o homem contemporâneo.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-primary mb-4">Plataforma</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/marketplace" className="hover:text-foreground">
                Marketplace
              </Link>
            </li>
            <li>
              <Link to="/cursos" className="hover:text-foreground">
                Cursos
              </Link>
            </li>
            <li>
              <Link to="/agendar" className="hover:text-foreground">
                Agendamento
              </Link>
            </li>
            <li>
              <Link to="/admin" className="hover:text-foreground">
                Painel Admin
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-primary mb-4">Contato</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>andrebezerra@gmail.com</li>
            <li>+55 (85) 99745-2820</li>
            <li>Rua 53, 260 José Walter — Fortaleza/CE</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-primary mb-4">Social</h4>
          <div className="flex gap-3">
            {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-md hairline grid place-items-center hover:border-primary hover:text-primary transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border/30 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Salone Atelier. Todos os direitos reservados.
      </div>
    </footer>
  );
}
