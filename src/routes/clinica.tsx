import { createFileRoute } from "@tanstack/react-router";
import fachada from "@/assets/gjn-fachada.jpg.asset.json";
import logo from "@/assets/gjn-logo.jpg.asset.json";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { CLINIC, whatsappLink } from "@/lib/clinic";

export const Route = createFileRoute("/clinica")({
  head: () => ({
    meta: [
      { title: "A Clínica | GJN Odontologia Vila Regente Feijó" },
      {
        name: "description",
        content:
          "Conheça a estrutura da GJN Odontologia na Vila Regente Feijó, São Paulo, e o cuidado por trás de cada reabilitação.",
      },
      { property: "og:title", content: "A Clínica | GJN Odontologia" },
      {
        property: "og:description",
        content: "Estrutura, atendimento e bastidores da GJN Odontologia em São Paulo.",
      },
    ],
  }),
  component: Clinica,
});

function Clinica() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-8">
        <div>
          <img
            src={logo.url}
            alt="Logotipo GJN Odontologia em dourado"
            className="h-24 w-24 rounded-full object-cover ring-1 ring-gold/40"
          />
          <p className="mt-8 eyebrow">A Clínica</p>
          <h1 className="mt-4 text-5xl leading-[1.08] md:text-6xl">
            Cuidado <span className="text-gilded italic">artesanal</span>, técnica moderna
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            A GJN Odontologia nasceu com um foco claro: devolver dentes fixos, mastigação
            confortável e estética natural a quem já perdeu a confiança no próprio sorriso.
            Cada etapa é explicada antes de começar.
          </p>
          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="eyebrow">Endereço</dt>
              <dd className="mt-2 text-muted-foreground">{CLINIC.address}</dd>
            </div>
            <div>
              <dt className="eyebrow">Horários</dt>
              <dd className="mt-2 text-muted-foreground">{CLINIC.hours}</dd>
            </div>
          </dl>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block bg-gold px-8 py-4 text-[0.7rem] tracking-[0.24em] uppercase text-primary-foreground"
          >
            Agendar avaliação
          </a>
        </div>

        <figure>
          <img
            src={fachada.url}
            alt="Fachada da clínica GJN Odontologia vista da rua"
            className="w-full object-cover shadow-[var(--shadow-lux)]"
          />
        </figure>
      </section>

      <InstagramFeed />
    </main>
  );
}
