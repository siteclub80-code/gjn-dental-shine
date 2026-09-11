import { Link } from "@tanstack/react-router";
import logo from "@/assets/gjn-logo.jpg.asset.json";
import { CLINIC, whatsappLink } from "@/lib/clinic";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <img
            src={logo.url}
            alt="Logotipo GJN Odontologia"
            className="h-16 w-16 rounded-full object-cover ring-1 ring-gold/40"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Próteses, prótese protocolo, implantes e reabilitação oral em São Paulo.
            Devolvemos função, estética e confiança ao seu sorriso.
          </p>
        </div>

        <div className="text-sm text-muted-foreground">
          <p className="eyebrow">Contato</p>
          <p className="mt-4">{CLINIC.address}</p>
          <p className="mt-2">{CLINIC.phoneDisplay}</p>
          <p className="mt-2">{CLINIC.hours}</p>
        </div>

        <div className="text-sm text-muted-foreground">
          <p className="eyebrow">Navegação</p>
          <div className="mt-4 flex flex-col gap-2">
            <Link to="/tratamentos" className="hover:text-gold-soft">
              Tratamentos
            </Link>
            <Link to="/clinica" className="hover:text-gold-soft">
              A Clínica
            </Link>
            <Link to="/contato" className="hover:text-gold-soft">
              Contato
            </Link>
            <a
              href={CLINIC.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-gold-soft"
            >
              Instagram
            </a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="text-gold">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/40 px-5 py-6 text-center text-[0.7rem] tracking-[0.16em] uppercase text-muted-foreground md:px-8">
        GJN Odontologia LTDA · CNPJ {CLINIC.cnpj}
      </div>
    </footer>
  );
}
