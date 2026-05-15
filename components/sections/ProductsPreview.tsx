import Image from "next/image";
import Link from "next/link";


const products = [
  {
    title: "Brioche",
    description:
      "Una linea sviluppata per offrire morbidezza, gusto e qualità costante.",
    image: "/images/products-brioche.jpg",
  },
  {
    title: "Cornetti",
    description:
      "Referenze classiche e assortite pensate per il canale professionale.",
    image: "/images/products-cornetti.jpg",
  },
  {
    title: "Dolci da forno",
    description:
      "Specialità dolciarie curate nella presentazione e nella resa finale.",
    image: "/images/products-dolci.jpg",
  },
];

export default function ProductsPreview() {
  return (
    <section id="prodotti" className="bg-transparent py-20 sm:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-[#D9EAF5] bg-white px-4 py-1.5 text-sm font-medium text-[#046DB6]">
            Prodotti
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0F1720] sm:text-4xl">
            Una gamma pensata per valorizzare ogni proposta
          </h2>

          <p className="mt-6 text-base leading-8 text-[#51606F] sm:text-lg">
            Produciamo referenze dolciarie sviluppate per offrire qualità,
            continuità e valore percepito nel punto vendita.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.title}
              className="group overflow-hidden rounded-[1.75rem] border border-[#D9EAF5] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={700}
                  height={520}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#022B47]/80 via-[#022B47]/20 to-transparent p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/80">
                    Linea prodotto
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {product.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-7 text-[#51606F] sm:text-base">
                  {product.description}
                </p>

                <div className="mt-6">
                  <Link
                    href="/prodotti"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#046DB6] transition hover:text-[#035A95]"
                  >
                    Scopri di più
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}