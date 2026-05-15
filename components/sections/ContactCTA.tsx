import Link from "next/link";

export default function ContactCTA() {
  return (
    <section  id="contatti" className="bg-[#046DB6] py-20 sm:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#D1F0FC_0%,#D1F0FC_100%)] px-8 py-12 shadow-2xl sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center justify-center rounded-2xl bg-[#046DB6] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#046DB6]/20 transition hover:bg-[#035A95]">
              Contatti
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
              Una produzione dolciaria pensata per il settore professionale
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black sm:text-lg">
              Contatta il nostro reparto commerciale per ricevere informazioni
              sull’azienda, sui prodotti e sulle soluzioni dedicate al tuo business.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="mailto:giuseppe.salerno@depagelgroup.com"
                className="inline-flex items-center justify-center rounded-2xl bg-[#046DB6] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#046DB6]/20 transition hover:bg-[#035A95]"
              >
                E-Mail
              </Link>

              <Link
                href="https://wa.me/393758596044"
                className="inline-flex items-center justify-center rounded-2xl bg-[#046DB6] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#046DB6]/20 transition hover:bg-[#035A95]"
              >
                Whatsapp
              </Link>

              <Link
                href="/prodotti"
                className="inline-flex items-center justify-center rounded-2xl bg-[#046DB6] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#046DB6]/20 transition hover:bg-[#035A95]"
              >
                Scopri i prodotti
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}