import Image from "next/image";
import Link from "next/link";

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
                placeholder="Cerca un prodotto"
                className="w-full bg-transparent text-sm text-[#334155] outline-none placeholder:text-[#94A3B8]"
              />
              <span className="text-xl text-[#046DB6]">⌕</span>
            </div>

            <div className="my-8 h-px bg-[#D9EAF5]" />

            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#51606F]">
              Categorie prodotto
            </h3>

            <div className="mt-6 space-y-4 text-sm">
              {categories.map((category) => (
                <div key={category.name}>
                  <div className="flex items-center justify-between font-regular text-[#51606F]">
                    <span>{category.name}</span>
                    <span className="rounded-full bg-[#046DB6] px-2.5 py-1 text-xs text-white">
                      {category.count}
                    </span>
                  </div>

                  {"children" in category && category.children && (
                    <div className="mt-3 space-y-3 pl-4 text-[#7e8994]">
                      {category.children.map((child) => (
                        <div
                          key={child.name}
                          className="flex items-center justify-between"
                        >
                          <span>{child.name}</span>
                          <span className="rounded-full border border-[#D9EAF5] bg-white px-2.5 py-0.5 text-xs text-[#51606F]">
                            {child.count}
                          </span>
                        </div>
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
                <span className="font-regular text-[#51606F]">
                  Prodotti
                </span>
              </div>

              <select className="rounded-xl border border-[#D9EAF5] bg-white px-4 py-2 text-sm outline-none">
                <option>Default sorting</option>
                <option>Nome A-Z</option>
                <option>Categoria</option>
              </select>
            </div>

            <div className="grid overflow-hidden rounded-[2rem] border border-[#D9EAF5] bg-white/90 shadow-sm sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Link key={product.slug} href={`/prodotti/${product.slug}`}>
                  <article className="group border-b border-r border-[#D9EAF5] p-8 text-center transition hover:bg-[#F6FBFE]">
                    <div className="relative mx-auto h-52 w-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="mt-8 text-base font-regular text-[#51606F]">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-sm text-[#7e8994]">
                      {product.category}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}