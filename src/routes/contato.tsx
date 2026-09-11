import { createFileRoute } from "@tanstack/react-router";
import { CLINIC, whatsappLink } from "@/lib/clinic";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e Agendamento | GJN Odontologia" },
      {
        name: "description",
        content:
          "Agende sua avaliação na GJN Odontologia pelo WhatsApp (11) 9503-0884. Av. Sapopemba, 1118 — Vila Regente Feijó, São Paulo.",
      },
      { property: "og:title", content: "Contato | GJN Odontologia" },
      {
        property: "og:description",
        content: "Fale com a clínica pelo WhatsApp e agende sua avaliação em São Paulo.",
      },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <p className="eyebrow">Contato</p>
      <h1 className="mt-4 max-w-2xl text-5xl leading-[1.08] md:text-6xl">
        Vamos marcar sua <span className="text-gilded italic">avaliação</span>
      </h1>

      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.1fr]">
        <div className="surface-lux p-8 md:p-10">
          <dl className="space-y-6 text-sm">
            <div>
              <dt className="eyebrow">WhatsApp / Telefone</dt>
              <dd className="mt-2 text-lg text-gold-soft">{CLINIC.phoneDisplay}</dd>
            </div>
            <div>
              <dt className="eyebrow">Endereço</dt>
              <dd className="mt-2 text-muted-foreground">{CLINIC.address}</dd>
            </div>
            <div>
              <dt className="eyebrow">Horários</dt>
              <dd className="mt-2 text-muted-foreground">{CLINIC.hours}</dd>
            </div>
            <div>
              <dt className="eyebrow">Instagram</dt>
              <dd className="mt-2">
                <a
                  href={CLINIC.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold hover:text-gold-soft"
                >
                  @gjn.odontologia
                </a>
              </dd>
            </div>
          </dl>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block bg-gold px-8 py-4 text-[0.7rem] tracking-[0.24em] uppercase text-primary-foreground"
          >
            Agendar pelo WhatsApp
          </a>
        </div>

        <div className="overflow-hidden border border-gold/15">
          <iframe
            title="Mapa da GJN Odontologia"
            src="https://www.google.com/maps?q=Av.+Sapopemba,+1118,+Vila+Regente+Feij%C3%B3,+S%C3%A3o+Paulo&output=embed"
            loading="lazy"
            className="h-full min-h-[26rem] w-full border-0"
          />
        </div>
      </div>
    </main>
  );
}
