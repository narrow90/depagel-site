import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-[#046DB6] bg-transparent backdrop-blur-sm">
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-16 md:px-10 lg:grid-cols-3">
    
    {/* LEFT */}
    <div className="flex flex-col items-center text-center">
      <div className="relative h-24 w-52">
        <Image
          src="/images/logo.png"
          alt="Depagel Logo"
          fill
          className="object-contain"
        />
      </div>

      <p className="mt-6 max-w-xs text-sm leading-7 text-[#475569]">
        Il made in Italy secondo Depagel Group.
      </p>
    </div>

    {/* CENTER */}
    <div className="flex flex-col items-center text-center">
      <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#046DB6]">
        Contatti
      </h3>

      <ul className="mt-6 space-y-5 text-sm leading-7 text-[#334155]">
        <li>
          Via Padre Zeferino Ingenito, 7
          <br />
          Macchia - M. Rovella - SA
        </li>

        <li>+39 331 8082957</li>

        <li>giuseppe.salerno@depagelgroup.com</li>

        <li>P.IVA 06226990650</li>

        <li>SDI: M5UXCR1</li>
      </ul>
    </div>

    {/* RIGHT */}
    <div className="flex flex-col items-center text-center">
      <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#046DB6]">
        Navigazione
      </h3>

      <ul className="mt-6 space-y-5 text-sm text-[#334155]">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/azienda">Azienda</Link>
        </li>

        <li>
          <Link href="/prodotti">Prodotti</Link>
        </li>

        <li>
          <Link href="/contatti">Contatti</Link>
        </li>
      </ul>
    </div>
  </div>

  {/* BOTTOM */}
  <div className="border-t border-[#d7ebf5] px-6 py-5 md:px-10">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-center text-xs text-[#64748B] md:flex-row">
      <p>© 2026 Depagel Group s.r.l. Tutti i diritti riservati.</p>

      <p>AAT 360 NetworkLab</p>
    </div>
  </div>
</footer>
  );
}