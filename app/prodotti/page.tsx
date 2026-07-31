"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { products } from "@/data/products";

const categories = [
  {
    name: "Dolci",
    children: [
    ],
  },
  {
    name: "Salati",
    children: [
    ],
  },
  { name: "Basi" },
];


export default function ProdottiPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tutti");
  const [sort, setSort] = useState("default");

  const categoriesWithCount = useMemo(() => {
  return categories.map((category) => {
    // conta prodotti categoria principale
    const categoryCount = products.filter((product) =>
      product.category.includes(category.name)
    ).length;

    // sottocategorie
    if (category.children) {
      const childrenWithCount = category.children.map((child) => {
        const childCount = products.filter((product) =>
          product.category.includes(child.name)
        ).length;

        return {
          ...child,
          count: childCount,
        };
      });

      return {
        ...category,
        count: categoryCount,
        children: childrenWithCount,
      };
    }

    return {
      ...category,
      count: categoryCount,
    };
  });
}, []);

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
            <h2 className="text-sm font-regular uppercase tracking-[0.16em] text-[#51606F]">
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

            <div className="my-8 h-px bg-[#51606F]" />

            <h3 className="text-sm font-regular uppercase tracking-[0.16em] text-[#51606F]">
              Categorie prodotto
            </h3>

            <button
              type="button"
              onClick={() => {
                setSelectedCategory("Tutti");
                setSearch("");
                setSort("default");
              }}
              className="mt-4 text-sm font-regular text-[#046DB6] hover:underline"
            >
              Mostra tutti
            </button>

            <div className="mt-6 space-y-4 text-sm">
              {categoriesWithCount.map((category) => (
                <div key={category.name}>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex w-full items-center justify-between font-regular transition ${
                      selectedCategory === category.name
                        ? "text-[#51606F]"
                        : "text-[#51606F] hover:text-[#046DB6]"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="rounded-full bg-[#046DB6] px-2.5 py-1 text-xs text-white">
                      {category.count}
                    </span>
                  </button>

                  {"children" in category && category.children && (
                    <div className="mt-3 space-y-3 pl-4 text-[#046DB6]">
                      {category.children.map((child) => (
                        <button
                          key={child.name}
                          type="button"
                          onClick={() => setSelectedCategory(child.name)}
                          className={`flex w-full items-center justify-between transition ${
                            selectedCategory === child.name
                              ? "text-[#7e8994]"
                              : "text-[#7e8994] hover:text-[#046DB6]"
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
                <Link href="/" className="hover:text-[#51606F]">
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