import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/gjn-logo.jpg.asset.json";
import { whatsappLink } from "@/lib/clinic";

const nav = [
  { to: "/", label: "Início" },
  { to: "/tratamentos", label: "Tratamentos" },
  { to: "/clinica", label: "A Clínica" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 md:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="Logotipo GJN Odontologia"
            className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-gold/40"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-none tracking-wide text-gold-soft">
              GJN
            </span>
            <span className="block truncate text-[0.58rem] tracking-[0.34em] text-muted-foreground">
              ODONTOLOGIA
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-gold" }}
                className="text-xs tracking-[0.18em] uppercase text-muted-foreground transition-colors hover:text-gold-soft"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="hidden shrink-0 border border-gold/50 px-5 py-2.5 text-[0.65rem] tracking-[0.24em] uppercase text-gold transition-colors hover:bg-gold hover:text-primary-foreground sm:inline-block"
          >
            Agendar avaliação
          </a>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 text-gold md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 px-5 pb-5 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border/40 py-3 text-sm tracking-[0.16em] uppercase text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-4 block border border-gold/50 py-3 text-center text-[0.7rem] tracking-[0.24em] uppercase text-gold"
          >
            Agendar avaliação
          </a>
        </nav>
      )}
    </header>
  );
}
