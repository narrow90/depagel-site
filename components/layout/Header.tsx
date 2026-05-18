"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#azienda", label: "Azienda" },
  { href: "/#prodotti", label: "Prodotti" },
  { href: "/#qualita", label: "Qualità" },
  { href: "/#contatti", label: "Contatti" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#7fc8ee]/50 bg-[linear-gradient(90deg,#046DB6_0%,#2995d6_25%,#D1F0FC_60%)] backdrop-blur-md">
      <div className="relative mx-auto flex h-24 max-w-7xl items-center justify-between px-5 md:px-10">
        {/* MOBILE BUTTON */}
        <button
  type="button"
  aria-label="Apri menu"
  onClick={() => setIsOpen((prev) => !prev)}
  className="z-20 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
>
  <span className="h-[2px] w-6 rounded-full bg-white transition-all" />

  <span className="h-[2px] w-6 rounded-full bg-white transition-all" />

  <span className="h-[2px] w-6 rounded-full bg-white transition-all" />
</button>

        {/* LEFT MENU DESKTOP */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-regular text-white transition hover:text-[#046DB6]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CENTER LOGO */}
        <Link
          href="/"
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center"
        >
          <div className="relative h-16 w-44 sm:h-18 sm:w-52 lg:h-20 lg:w-56">
            <Image
              src="/images/logo.png"
              alt="Depagel Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* RIGHT CTA DESKTOP */}
        <Link
          href="#"
          className="hidden rounded-full bg-[#046DB6] px-7 py-3 text-sm font-regular text-white shadow-lg shadow-[#046DB6]/20 transition hover:bg-[#035A95] lg:inline-flex"
        >
          Catalogo prodotti
        </Link>

        {/* MOBILE SPACER */}
        <div className="h-11 w-11 lg:hidden" />
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="border-t border-[#b8dcec] bg-[#D1F0FC] lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-[#b8dcec] py-4 text-sm font-regular text-[#334155] last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#"
              className="mt-4 inline-flex justify-center rounded-full bg-[#046DB6] px-6 py-3 text-sm font-regular text-white"
              onClick={() => setIsOpen(false)}
            >
              Catalogo prodotti
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}