import Image from "next/image";

const sections = [
  {
    title: "Le origini dell’azienda",
    description:
      "Depagel Group nasce dall’esperienza nel settore dei semilavorati da forno e dalla volontà di creare prodotti professionali affidabili, pensati per rispondere alle esigenze del mercato horeca e della distribuzione moderna.",
    image: "/images/storia-1.jpg",
    reverse: false,
  },
  {
    title: "Una crescita costruita sulla qualità",
    description:
      "Negli anni l’azienda ha sviluppato un processo produttivo organizzato e orientato alla continuità del risultato, mantenendo sempre attenzione alla qualità delle materie prime e alla resa finale del prodotto.",
    image: "/images/storia-2.jpg",
    reverse: true,
  },
  {
    title: "Innovazione e sviluppo continuo",
    description:
      "L’evoluzione del mercato ha portato Depagel Group a investire in ricerca, innovazione e sviluppo di nuove referenze, con l’obiettivo di offrire soluzioni moderne e performanti per il settore professionale.",
    image: "/images/storia-3.jpg",
    reverse: false,
  },
  {
    title: "Uno sguardo rivolto al futuro",
    description:
      "Oggi l’azienda continua il proprio percorso con una visione orientata alla crescita, alla qualità percepita e alla costruzione di partnership solide e durature con i propri clienti.",
    image: "/images/storia-4.jpg",
    reverse: true,
  },
];

export default function AziendaPage() {
  return (
    <main className="bg-transparent">
      {/* HERO */}
      <section id="scopriazienda"  className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(210,236,249,0.85),_transparent_38%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center md:px-10">
          <span className="inline-flex rounded-full bg-[#046DB6] px-6 py-3 text-sm font-regular text-white shadow-lg shadow-[#046DB6]/20">
            La nostra storia
          </span>

          <h1 className="mx-auto mt-8 max-w-5xl text-4xl font-regular leading-tight tracking-tight text-[#51606F] sm:text-5xl lg:text-6xl">
            Un percorso costruito su esperienza, qualità e continuità
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#7e8994] sm:text-xl">
            Una realtà produttiva che negli anni ha sviluppato un’identità
            solida e riconoscibile nel settore dei semilavorati da forno.
          </p>
        </div>
      </section>

      {/* STORY BLOCKS */}
      <section className="pb-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 md:px-10">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                section.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-[2.5rem] border border-[#D9EAF5] bg-white shadow-[0_20px_60px_rgba(4,109,182,0.12)]">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={900}
                  height={900}
                  className="h-[420px] w-full object-cover sm:h-[520px]"
                />

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#046DB6]/60 to-transparent" />
              </div>

              {/* TEXT */}
              <div>
                

                <h2 className="mt-6 text-3xl font-regular leading-tight text-[#51606F] sm:text-4xl">
                  {section.title}
                </h2>

                <p className="mt-6 text-lg leading-8 text-[#7e8994]">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}