"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const categories = [
  {
    name: "Dolci",
    count: 66,
    children: [
      { name: "Da Lievitare", count: 32 },
      { name: "Pronto Forno", count: 21 },
      { name: "Tradizionali", count: 10 },
      { name: "Da Friggere", count: 3 },
    ],
  },
  { name: "Salati", count: 8 },
  { name: "Basi", count: 4 },
];

const products = [
  {
    slug: "apolla-o-coda-aragosta",
    name: "Apolla o coda d’aragosta",
    category: "Dolci, Tradizionali",
    image: "/images/products/apolla.jpg",
  },
  {
    slug: "biscotto-albicocca",
    name: "Biscotto Albicocca",
    category: "Dolci, Pronto Forno",
    image: "/images/products/biscotto-albicocca.jpg",
  },
  {
    slug: "biscotto-nocciolata",
    name: "Biscotto Nocciolata",
    category: "Dolci, Pronto Forno",
    image: "/images/products/biscotto-nocciolata.jpg",
  },
  {
    slug: "bomboloni",
    name: "Bomboloni",
    category: "Dolci, Da Friggere",
    image: "/images/products/bomboloni.jpg",
  },
  {
    slug: "brioche",
    name: "Brioche",
    category: "Dolci, Da Lievitare",
    image: "/images/products/brioche.jpg",
  },
  {
    slug: "castagnette-da-friggere",
    name: "Castagnette da friggere",
    category: "Dolci, Tradizionali",
    image: "/images/products/castagnette.jpg",
  },
];

export default function ProdottiPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tutti");
  const [sort, setSort] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "Tutti" ||
        product.category.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });

    if (sort === "az") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sort === "category") {
      result = [...result].sort((a, b) =>
        a.category.localeCompare(b.category)
      );
    }

    return result;
  }, [search, selectedCategory, sort]);

  return (
    <main className="bg-white/70 backdrop-blur-sm">
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-[2rem] border border-[#D9EAF5] bg-white/80 p-6 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-[#51606F]">
              Cerca tra i prodotti
            </h2>

            <div className="mt-6 flex items-center rounded-xl border border-[#D9EAF5] bg-white px-4 py-3">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cerca un prodotto"
                className="w-full bg-transparent text-sm text-[#334155] outline-none placeholder:text-[#94A3B8]"
              />
              <span className="text-xl text-[#046DB6]">⌕</span>
            </div>

            <div className="my-8 h-px bg-[#D9EAF5]" />

            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#51606F]">
              Categorie prodotto
            </h3>

            <button
              type="button"
              onClick={() => {
                setSelectedCategory("Tutti");
                setSearch("");
                setSort("default");
              }}
              className="mt-4 text-sm font-medium text-[#046DB6] hover:underline"
            >
              Mostra tutti
            </button>

            <div className="mt-6 space-y-4 text-sm">
              {categories.map((category) => (
                <div key={category.name}>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex w-full items-center justify-between font-semibold transition ${
                      selectedCategory === category.name
                        ? "text-[#046DB6]"
                        : "text-[#0F1720] hover:text-[#046DB6]"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="rounded-full bg-[#046DB6] px-2.5 py-1 text-xs text-white">
                      {category.count}
                    </span>
                  </button>

                  {"children" in category && category.children && (
                    <div className="mt-3 space-y-3 pl-4 text-[#7e8994]">
                      {category.children.map((child) => (
                        <button
                          key={child.name}
                          type="button"
                          onClick={() => setSelectedCategory(child.name)}
                          className={`flex w-full items-center justify-between transition ${
                            selectedCategory === child.name
                              ? "text-[#046DB6]"
                              : "text-[#51606F] hover:text-[#046DB6]"
                          }`}
                        >
                          <span>{child.name}</span>
                          <span className="rounded-full border border-[#D9EAF5] bg-white px-2.5 py-0.5 text-xs text-[#51606F]">
                            {child.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>

          <div>
            <div className="mb-8 flex flex-col gap-4 rounded-[1.5rem] border border-[#D9EAF5] bg-white/80 p-5 shadow-sm md:flex-row md:items-center md:justify-between">
              <div className="text-sm text-[#51606F]">
                <Link href="/" className="hover:text-[#046DB6]">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="font-normal text-[#51606F]">Prodotti</span>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <span className="text-sm text-[#51606F]">
                  Risultati:{" "}
                  <strong className="text-[#046DB6]">
                    {filteredProducts.length}
                  </strong>
                </span>

                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="rounded-xl border border-[#D9EAF5] bg-white px-4 py-2 text-sm text-[#51606F] outline-none"
                >
                  <option value="default">Default sorting</option>
                  <option value="az">Nome A-Z</option>
                  <option value="category">Categoria</option>
                </select>
              </div>
            </div>

            <div className="grid overflow-hidden rounded-[2rem] border border-[#D9EAF5] bg-white/90 shadow-sm sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <Link key={product.slug} href={`/prodotti/${product.slug}`}>
                  <article className="group h-full border-b border-r border-[#D9EAF5] p-8 text-center transition hover:bg-[#F6FBFE]">
                    <div className="relative mx-auto h-52 w-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="mt-8 text-base font-normal text-[#51606F]">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-sm text-[#7e8994]">
                      {product.category}
                    </p>
                  </article>
                </Link>
              ))}

              {filteredProducts.length === 0 && (
                <div className="col-span-full p-10 text-center text-sm text-[#51606F]">
                  Nessun prodotto trovato.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}