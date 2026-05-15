import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    
    <section id="home" className="relative overflow-hidden bg-transparent scroll-mt-24">
      <div className="absolute inset-0 " />

      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-6 py-16 md:px-10 lg:grid-cols-2 lg:py-24">
        <div className="max-w-xl">
          

          <h1 className="text-4xl font-regular leading-tight tracking-tight text-[#51606F] sm:text-5xl lg:text-6xl">
            Il made in italy secondo
            <span className="block text-[#046DB6]">
              Depagel Group
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#7e8994] sm:text-xl">
            Produciamo semilavorati da forno pensati per bar, hotel e distribuzione,
            con attenzione alla qualità, alla continuità e al
            valore del prodotto.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/prodotti"
              className="hidden rounded-full bg-[#046DB6] px-7 py-3 text-sm font-regular text-white shadow-lg shadow-[#046DB6]/20 transition hover:bg-[#035A95] lg:inline-flex"
            >
              Scopri i prodotti
            </Link>

            <Link
              href="#contatti"
              className="hidden rounded-full bg-[#046DB6] px-7 py-3 text-sm font-regular text-white shadow-lg shadow-[#046DB6]/20 transition hover:bg-[#035A95] lg:inline-flex"
            >
              Contattaci
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {["Qualità", "Affidabilità", "Gamma"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#D9EAF5] bg-white p-4 shadow-sm"
              >
                <p className="text-sm font-regular text-[#046DB6]">{item}</p>
                <p className="mt-1 text-sm text-[#7e8994]">
                  Soluzioni dolciarie per clienti professionali
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
  <div className="relative overflow-hidden rounded-[2rem] border border-[#D9EAF5] bg-white shadow-[0_20px_60px_rgba(4,109,182,0.12)]">
    <Image
      src="/images/DSC_0055.JPG"
      alt="lavorazione"
      width={900}
      height={1100}
      priority
      className="h-[420px] w-full object-cover brightness-150 sm:h-[520px] lg:h-[680px]"
    />

    {/* Sfumatura solo in basso */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#046DB6]/60 to-transparent" />

    {/* Testo sopra la sfumatura */}
    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
      <h2 className="text-2xl font-regular text-white drop-shadow-md sm:text-3xl">
        Qualità pensata per te
      </h2>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}