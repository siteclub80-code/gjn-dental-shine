import { createFileRoute } from "@tanstack/react-router";
import { whatsappLink } from "@/lib/clinic";

export const Route = createFileRoute("/tratamentos")({
  head: () => ({
    meta: [
      { title: "Tratamentos | GJN Odontologia São Paulo" },
      {
        name: "description",
        content:
          "Prótese protocolo, implantes, reabilitação oral, tratamento de gengivite e prevenção na GJN Odontologia, São Paulo.",
      },
      { property: "og:title", content: "Tratamentos | GJN Odontologia" },
      {
        property: "og:description",
        content: "Prótese protocolo, implantes, reabilitação oral e saúde bucal preventiva.",
      },
    ],
  }),
  component: Tratamentos,
});

const TREATMENTS = [
  {
    t: "Prótese Protocolo",
    d: "Arcada completa fixada sobre implantes. Indicada para quem usa prótese total móvel e quer estabilidade para falar, sorrir e comer sem receio.",
  },
  {
    t: "Implantes Dentários",
    d: "Substituição de um ou vários dentes com pilares de titânio, respeitando o osso disponível e o desenho do seu sorriso.",
  },
  {
    t: "Próteses Dentárias",
    d: "Coroas, pontes e próteses removíveis planejadas com cor, forma e translucidez próximas ao dente natural.",
  },
  {
    t: "Reabilitação Oral",
    d: "Quando a boca precisa de um plano inteiro: mordida, gengiva, articulação e estética tratados na ordem correta.",
  },
  {
    t: "Gengivite e Periodontia",
    d: "Controle de sangramento e inflamação — base indispensável antes de qualquer trabalho estético ou de implante.",
  },
  {
    t: "Prevenção e Orientação",
    d: "Limpeza profissional e orientação prática de escovação e uso do fio dental para manter o resultado por anos.",
  },
];

function Tratamentos() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <p className="eyebrow">Tratamentos</p>
      <h1 className="mt-4 max-w-3xl text-5xl leading-[1.08] md:text-6xl">
        Cada caso tem <span className="text-gilded italic">um caminho</span>
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
        A avaliação inicial define o diagnóstico, as etapas e os prazos antes de qualquer
        procedimento.
      </p>

      <div className="mt-16 grid gap-px overflow-hidden border border-gold/15 sm:grid-cols-2">
        {TREATMENTS.map((item) => (
          <article key={item.t} className="bg-card p-8 md:p-10">
            <h2 className="text-2xl">{item.t}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
          </article>
        ))}
      </div>

      <a
        href={whatsappLink("Olá! Gostaria de avaliar um tratamento na GJN Odontologia.")}
        target="_blank"
        rel="noreferrer"
        className="mt-14 inline-block bg-gold px-8 py-4 text-[0.7rem] tracking-[0.24em] uppercase text-primary-foreground"
      >
        Agendar avaliação
      </a>
    </main>
  );
}
