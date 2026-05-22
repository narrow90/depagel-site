import Image from "next/image";
import TeamSection from "@/components/sections/TeamSection";

const sections = [
  {
    title: "Le origini:",
    description:
      "Nata dalla forte passione dei soci fondatori, la nostra azienda muove i primi passi in una piccolissima realtà di poche decine di metri quadri. Nati per soddisfare il piacere personale e una cerchia ristretta di clienti selezionati, i nostri prodotti hanno conquistato in brevissimo tempo una platea molto più ampia ed esigente.",
    image: "/images/storia-1.jpg",
    reverse: false,
  },
  {
    title: "L’evoluzione:",
    description:
      "Questa crescita costante ci ha permesso di evolverci nella struttura odierna. Oggi uniamo la manualità e la passione artigianale del passato a una forte spinta verso l'innovazione tecnologica, raggiungendo volumi di produzione di tutto rispetto.",
    image: "/images/storia-2.jpg",
    reverse: true,
  },
  {
  title: "I nostri numeri e la tecnologia",
  description: `
    <ul class="mt-6 space-y-3">
      <li><strong>Sede produttiva:</strong> 1.170 mq complessivi.</li>

      <li><strong>Reparto produzione:</strong> area tecnologicamente avanzata di circa 550 mq.</li>

      <li><strong>Camera di lievitazione:</strong> 170 m³ a temperatura e umidità controllata.</li>

      <li><strong>Celle di conservazione:</strong> 350 m³ a -18°C.</li>

      <li><strong>Sistema di abbattimento:</strong> cella abbattitore da 78 m³ (40 kW), capace di surgelare il prodotto fresco in meno di un’ora.</li>
    </ul>`,
  image: "/images/storia-3.jpg",
  reverse: false,
},
  {
    title: "Qualità e Logistica:",
    description:
      "Siamo certificati HACCP per garantire i massimi standard di sicurezza alimentare ai nostri clienti. Grazie alla nostra rete di distribuzione capillare, garantiamo consegne puntuali e nel rispetto della cold chain in tutta la campania, nel sud italia, in sicilia ma servendoci delle consolidate partnership con piattaforme di spedizione, possiamo arrivare ovunque voi abbiate richiesta. ",
    image: "/images/storia-4.jpg",
    reverse: true,
  },
];

export default function AziendaPage() {
  return (
    <main className="bg-transparent">
      {/* HERO */}
      <section id="azienda"  className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(210,236,249,0.85),_transparent_0%)]" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10 text-center">
          <span className="inline-flex w-40 items-center justify-center rounded-full bg-[#046DB6] px-7 py-1 text-center text-sm font-regular text-white shadow-lg shadow-[#046DB6]/20 transition hover:bg-[#035A95] sm:w-auto">
            La nostra storia
          </span>

          <h1 className="mx-auto mt-8 max-w-5xl text-4xl font-regular leading-tight tracking-tight text-[#51606F] sm:text-5xl lg:text-6xl">
            Depagel Group S.r.l. 
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#7e8994] sm:text-xl">
            Il Made in Italy secondo depagel group.
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

                <div
  className="mt-6 text-lg leading-8 text-[#7e8994] [&_ul]:mt-6 [&_ul]:space-y-3 [&_li]:pl-1 [&_strong]:text-[#51606F]"
  dangerouslySetInnerHTML={{ __html: section.description }}
/>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}