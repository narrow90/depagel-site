import Image from "next/image";
import Link from "next/link";

const qualityPoints = [
  {
    title: "Ingredienti selezionati",
    description:
      "Ogni prodotto nasce da una selezione accurata delle materie prime.",
  },
  {
    title: "Processo controllato",
    description:
      "Gestiamo ogni fase produttiva con attenzione e continuità.",
  },
  {
    title: "Qualità costante",
    description:
      "L’obiettivo è offrire un prodotto affidabile e riconoscibile nel tempo.",
  },
];

export default function QualitySection() {
  return (
    <section className="bg-transparent py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#D9EAF5] bg-white shadow-[0_20px_60px_rgba(4,109,182,0.12)]">
          <Image
            src="/images/quality-production.jpg"
            alt="Produzione dolciaria"
            width={900}
            height={1000}
            className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[620px]"
          />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#022B47]/80 via-[#022B47]/20 to-transparent p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">
              Qualità e produzione
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Cura e continuità in ogni fase
            </h2>
          </div>
        </div>

        <div>
          <span className="inline-block rounded-full border border-[#D9EAF5] bg-[#F6FBFE] px-4 py-1.5 text-sm font-medium text-[#046DB6]">
            Qualità
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0F1720] sm:text-4xl">
            Una produzione orientata alla qualità del risultato
          </h2>

          <p className="mt-6 text-base leading-8 text-[#51606F] sm:text-lg">
            La qualità nasce dall’equilibrio tra ingredienti, organizzazione del
            processo e attenzione costante al prodotto finale.
          </p>

          <div className="mt-8 space-y-5">
            {qualityPoints.map((point, index) => (
              <div
                key={point.title}
                className="rounded-[1.5rem] border border-[#D9EAF5] bg-[#F6FBFE] p-5 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#046DB6] text-sm font-semibold text-white">
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#0F1720]">
                      {point.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#51606F] sm:text-base">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/qualita"
              className="inline-flex items-center justify-center rounded-2xl bg-[#046DB6] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#035A95]"
            >
              Approfondisci
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}