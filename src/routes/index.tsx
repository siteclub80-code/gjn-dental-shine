import { createFileRoute, Link } from "@tanstack/react-router";
import fachada from "@/assets/gjn-fachada.jpg.asset.json";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { CLINIC, whatsappLink } from "@/lib/clinic";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GJN Odontologia | Próteses, Implantes e Reabilitação Oral em SP" },
      {
        name: "description",
        content:
          "Clínica GJN Odontologia em São Paulo: prótese protocolo, implantes e reabilitação oral. Agende sua avaliação pelo WhatsApp.",
      },
      { property: "og:title", content: "GJN Odontologia | Sorrisos fixos e naturais" },
      {
        property: "og:description",
        content:
          "Prótese protocolo, implantes e reabilitação oral na Vila Regente Feijó, São Paulo.",
      },
    ],
  }),
  component: Home,
});

const PILLARS = [
  {
    n: "01",
    t: "Prótese Protocolo",
    d: "Dentes fixos sobre implantes para quem quer deixar a prótese móvel no passado.",
  },
  {
    n: "02",
    t: "Implantes Dentários",
    d: "Planejamento individual para devolver mastigação firme e estética natural.",
  },
  {
    n: "03",
    t: "Reabilitação Oral",
    d: "Tratamento completo que integra função, saúde da gengiva e harmonia do sorriso.",
  },
];

function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full opacity-25 blur-[120px]"
          style={{ background: "var(--gradient-gold)" }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pt-20 pb-24 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8">
          <div>
            <p className="eyebrow">São Paulo · Vila Regente Feijó</p>
            <h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl">
              O sorriso que devolve
              <br />
              <span className="text-gilded italic">sua autoestima</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground">
              Especialistas em prótese protocolo, implantes e reabilitação oral. Um
              planejamento feito para o seu rosto, sua mordida e o seu tempo.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="bg-gold px-8 py-4 text-[0.7rem] tracking-[0.24em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
              >
                Agendar avaliação
              </a>
              <Link
                to="/tratamentos"
                className="text-[0.7rem] tracking-[0.24em] uppercase text-gold-soft hover:text-gold"
              >
                Ver tratamentos →
              </Link>
            </div>
            <div className="mt-14 h-px w-full rule-gold" />
            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-xs tracking-[0.16em] uppercase text-muted-foreground">
              <span>{CLINIC.phoneDisplay}</span>
              <span>@gjn.odontologia</span>
            </div>
          </div>

          <figure className="relative">
            <img
              src={fachada.url}
              alt="Fachada da clínica GJN Odontologia com letreiro dourado"
              className="w-full object-cover shadow-[var(--shadow-lux)]"
            />
            <figcaption className="mt-4 text-xs tracking-[0.18em] uppercase text-muted-foreground">
              Nossa unidade — Av. Sapopemba, 1118
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Pilares */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <p className="eyebrow">Especialidades</p>
        <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">
          Três frentes, um objetivo: <span className="text-gilded">morder sem medo</span>
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden border border-gold/15 md:grid-cols-3">
          {PILLARS.map((p) => (
            <article key={p.n} className="bg-card p-8 md:p-10">
              <span className="font-display text-3xl text-gold/70">{p.n}</span>
              <h3 className="mt-6 text-2xl">{p.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Faixa citação */}
      <section className="border-y border-border/60 bg-ink">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8">
          <p className="font-display text-3xl leading-snug italic md:text-4xl">
            “Antes de tudo, ouvimos. O plano de tratamento nasce da sua queixa, não de um
            protocolo pronto.”
          </p>
          <p className="mt-8 eyebrow">Equipe GJN Odontologia</p>
        </div>
      </section>

      <InstagramFeed />

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-28 md:px-8">
        <div className="surface-lux flex flex-col gap-8 p-10 md:flex-row md:items-center md:justify-between md:p-14">
          <div>
            <h2 className="text-4xl">Avaliação com hora marcada</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Fale direto com a clínica pelo WhatsApp e escolha o melhor horário para a sua
              primeira consulta.
            </p>
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 bg-gold px-8 py-4 text-center text-[0.7rem] tracking-[0.24em] uppercase text-primary-foreground"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
