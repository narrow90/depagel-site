import Link from "next/link";

const highlights = [
  {
    title: "Materie prime selezionate",
    description:
      "La qualità nasce da ingredienti affidabili e da standard produttivi costanti.",
  },
  {
    title: "Produzione organizzata",
    description:
      "Un processo strutturato ci permette di garantire continuità e precisione.",
  },
  {
    title: "Gamma professionale",
    description:
      "Referenze pensate per horeca, rivendita e distribuzione.",
  },
];

export default function AboutPreview() {
  return (
    <section id="azienda" className="bg-transparent py-20 sm:py-24 scroll-mt-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="hidden rounded-full bg-[#046DB6] px-7 py-3 text-sm font-regular text-white shadow-lg shadow-[#046DB6]/20 transition hover:bg-[#035A95] lg:inline-flex">
            L’azienda
          </span>

          <h2 className="mt-5 max-w-2xl text-3xl font-regular tracking-tight text-[#51606F] sm:text-4xl">
            Una produzione costruita su qualità e continuità
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#7e8994] sm:text-lg">
            Siamo una realtà specializzata nella produzione dolciaria
            professionale, con un’offerta sviluppata per supportare le esigenze
            del settore horeca e della distribuzione.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-8 text-[#7e8994] sm:text-lg">
            Il nostro obiettivo è offrire prodotti riconoscibili, affidabili e
            adatti a valorizzare la proposta del cliente finale.
          </p>

          <div className="mt-8">
            <Link
              href="/azienda"
              className="hidden rounded-full bg-[#046DB6] px-7 py-3 text-sm font-regular text-white shadow-lg shadow-[#046DB6]/20 transition hover:bg-[#035A95] lg:inline-flex"
            >
              Scopri l’azienda
            </Link>
          </div>
        </div>

        <div className="grid gap-5">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-[#D9EAF5] bg-[#F6FBFE] p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                

                <div>
                  <h3 className="text-lg font-regular text-[#51606F]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#7e8994] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="rounded-[1.5rem] border border-[#D9EAF5] bg-[#046DB6] p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-white">
              Visione
            </p>

            <h3 className="mt-3 text-2xl font-regular text-white">
              Un partner affidabile per il settore professionale
            </h3>

            <p className="mt-3 text-sm leading-7 text-white sm:text-base">
              Costruiamo una proposta dolciaria pensata per garantire qualità
              percepita, continuità produttiva e valore commerciale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}