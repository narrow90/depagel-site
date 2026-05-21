"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroImages = [
  "/images/DSC_0013.JPG",
  "/images/DSC_0055.JPG",
  "/images/DSC_0084.JPG",
  "/images/DSC_0143.JPG",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
 

    <section id="home" className="relative overflow-hidden bg-transparent scroll-mt-24">
      <div className="absolute inset-0 " />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 md:px-10 lg:grid-cols-2 lg:py-20">
        <div className="max-w-xl">
          

          <h1 className="text-4xl font-regular leading-tight tracking-tight text-[#51606F] sm:text-4xl lg:text-4xl">
          <span className="whitespace-nowrap">
          Il made in italy secondo
          </span>

          <span className="block text-[#046DB6]">
          Depagel Group
          </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#7e8994] sm:text-xl">
            Da anni specializzati nella produzione di semilavorati freschissimi surgelati pensati per
            soddisfare le esigenze del settore HO.RE.CA. e della grande distribuzione.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <center><Link
              href="/prodotti"
              className="inline-flex w-45 items-center justify-center rounded-full bg-[#046DB6] px-7 py-3 text-center text-sm font-regular text-white shadow-lg shadow-[#046DB6]/20 transition hover:bg-[#035A95] sm:w-auto"
            >
              Scopri i prodotti
            </Link></center>

            <center><Link
              href="#contatti"
              className="inline-flex w-45 items-center justify-center rounded-full bg-[#046DB6] px-7 py-3 text-center text-sm font-regular text-white shadow-lg shadow-[#046DB6]/20 transition hover:bg-[#035A95] sm:w-auto"
            >
              Contattaci
            </Link></center>
          </div>

        </div>

        <div className="relative">
  <div className="relative overflow-hidden rounded-[2rem] border border-[#D9EAF5] bg-white shadow-[0_20px_60px_rgba(4,109,182,0.12)]">
    <Image
  key={heroImages[currentImage]}
  src={heroImages[currentImage]}
  alt="Lavorazione prodotti dolciari"
  width={900}
  height={1100}
  className="h-[420px] w-full object-cover brightness-110 transition-all duration-700 sm:h-[200px] lg:h-[360px]"
/>

    {/* Sfumatura solo in basso */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#046DB6]/60 to-transparent" />

    {/* Testo sopra la sfumatura */}
    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
      <h2 className="text-2xl font-regular text-white drop-shadow-md sm:text-3xl">
      
      </h2>
    </div>
  </div>
</div>
      </div>
      {/* FEATURES */}
<div className="mt-6 flex flex-wrap justify-center gap-6">
  {[
  {
    title: "Qualità",
    text: "Materie di prima qualità eccelsa... Solo il top!",
  },
  {
    title: "Affidabilità",
    text: "Consegniamo sempre e sempre puntuali!",
  },
  {
    title: "Gamma",
    text: "Più di 130 prodotti sempre surgelati freschissimi!",
  },
].map((item) => (
  <div
    key={item.title}
    className="w-full max-w-[220px] rounded-[1.5rem] border border-[#D9EAF5] bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm"
  >
    <p className="text-base font-semiregular text-[#046DB6]">
      {item.title}
    </p>

    <p className="mt-2 text-sm leading-6 text-[#7e8994]">
      {item.text}
    </p>
  </div>
))}
</div>
    </section>
  );
}