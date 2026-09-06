"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";

const categories = [
  { name: "Dolci" },
  { name: "Salati" },
  { name: "Basi" },
];

export default function ProdottiPage() {
  const searchParams = useSearchParams();

  const categoriaUrl = searchParams.get("categoria");

  const categoriaIniziale =
    categoriaUrl === "Dolci" ||
    categoriaUrl === "Salati" ||
    categoriaUrl === "Basi"
      ? categoriaUrl
      : "Tutti";

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState(categoriaIniziale);
  const [sort, setSort] = useState("default");

  const categoriesWithCount = useMemo(() => {
    return categories.map((category) => {
      const count = products.filter(
        (product) => product.category === category.name
      ).length;

      return {
        ...category,
        count,
      };
    });
  }, []);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const normalizedSearch = search.trim().toLowerCase();

      const matchesSearch = product.name
        .toLowerCase()
        .includes(normalizedSearch);

      const matchesCategory =
        selectedCategory === "Tutti" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    if (sort === "az") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name, "it")
      );
    }

    if (sort === "category") {
      result = [...result].sort((a, b) =>
        a.category.localeCompare(b.category, "it")
      );
    }

    return result;
  }, [search, selectedCategory, sort]);

  const resetFilters = () => {
    setSelectedCategory("Tutti");
    setSearch("");
    setSort("default");
  };

  return (
    <main className="bg-white/70 backdrop-blur-sm">
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* SIDEBAR */}
          <aside className="h-fit rounded-[2rem] border border-[#D9EAF5] bg-white/80 p-6 shadow-sm">
            <h2 className="text-sm font-normal uppercase tracking-[0.16em] text-[#51606F]">
              Cerca tra i prodotti
            </h2>

            <div className="mt-6 flex items-center rounded-xl border border-[#D9EAF5] bg-white px-4 py-3">
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Cerca un prodotto"
                className="w-full bg-transparent text-sm text-[#334155] outline-none placeholder:text-[#94A3B8]"
              />

              <span aria-hidden="true" className="text-xl text-[#046DB6]">
                ⌕
              </span>
            </div>

            <div className="my-8 h-px bg-[#D9EAF5]" />

            <h3 className="text-sm font-normal uppercase tracking-[0.16em] text-[#51606F]">
              Categorie prodotto
            </h3>

            <button
              type="button"
              onClick={resetFilters}
              className={`mt-4 text-sm font-normal transition hover:text-[#035A95] hover:underline ${
                selectedCategory === "Tutti"
                  ? "text-[#046DB6]"
                  : "text-[#51606F]"
              }`}
            >
              Mostra tutti
            </button>

            <div className="mt-6 space-y-4 text-sm">
              {categoriesWithCount.map((category) => (
                <button
                  key={category.name}
                  type="button"
                  onClick={() =>
                    setSelectedCategory(category.name)
                  }
                  className={`flex w-full items-center justify-between font-normal transition ${
                    selectedCategory === category.name
                      ? "text-[#046DB6]"
                      : "text-[#51606F] hover:text-[#046DB6]"
                  }`}
                >
                  <span>{category.name}</span>

                  <span className="rounded-full bg-[#046DB6] px-2.5 py-1 text-xs text-white">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          {/* CATALOGO */}
          <div>
            <div className="mb-8 flex flex-col gap-4 rounded-[1.5rem] border border-[#D9EAF5] bg-white/80 p-5 shadow-sm md:flex-row md:items-center md:justify-between">
              <div className="text-sm text-[#51606F]">
                <Link
                  href="/"
                  className="transition hover:text-[#046DB6]"
                >
                  Home
                </Link>

                <span className="mx-2">/</span>

                <span>
                  {selectedCategory === "Tutti"
                    ? "Prodotti"
                    : selectedCategory}
                </span>
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
                  onChange={(event) => setSort(event.target.value)}
                  aria-label="Ordina prodotti"
                  className="rounded-xl border border-[#D9EAF5] bg-white px-4 py-2 text-sm text-[#51606F] outline-none transition focus:border-[#046DB6]"
                >
                  <option value="default">
                    Ordine predefinito
                  </option>
                  <option value="az">Nome A-Z</option>
                  <option value="category">Categoria</option>
                </select>
              </div>
            </div>

            <div className="grid overflow-hidden rounded-[2rem] border border-[#D9EAF5] bg-white/90 shadow-sm sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/prodotti/${product.slug}`}
                  className="block h-full"
                >
                  <article className="group flex h-full flex-col border-b border-r border-[#D9EAF5] p-8 text-center transition hover:bg-[#F6FBFE]">
                    <div className="relative mx-auto h-52 w-full overflow-hidden rounded-xl bg-white">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain p-2 transition duration-300 group-hover:scale-105"
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
                <div className="col-span-full p-10 text-center">
                  <p className="text-sm text-[#51606F]">
                    Nessun prodotto trovato.
                  </p>

                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-4 rounded-full bg-[#046DB6] px-5 py-2 text-sm text-white transition hover:bg-[#035A95]"
                  >
                    Azzera i filtri
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}