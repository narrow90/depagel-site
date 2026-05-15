import Image from "next/image";
import Link from "next/link";


const products = [
  {
    title: "Dolci",
    description:
      "Una linea sviluppata per offrire morbidezza, gusto e qualità costante.",
    image: "/images/dolce.jpg",
  },
  {
    title: "Salati",
    description:
      "Referenze classiche e assortite pensate per il canale professionale.",
    image: "/images/salato.jpg",
  },
  {
    title: "Basi",
    description:
      "Specialità dolciarie curate nella presentazione e nella resa finale.",
    image: "/images/basi.jpg",
  },
];

export default function ProductsPreview() {
  return (
    <section id="prodotti" className="bg-transparent py-20 sm:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="hidden rounded-full bg-[#046DB6] px-7 py-3 text-sm font-regular text-white shadow-lg shadow-[#046DB6]/20 transition hover:bg-[#035A95] lg:inline-flex">
            Prodotti
          </span>

          <h2 className="mt-5 text-3xl font-regular tracking-tight text-[#51606F] sm:text-4xl">
            Una gamma pensata per valorizzare ogni proposta
          </h2>

          <p className="mt-6 text-base leading-8 text-[#7e8994] sm:text-lg">
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

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#046DB6]/60 to-transparent p-3">
                 

                  <h3 className="mt-2 text-2xl font-regular text-white">
                    {product.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-7 text-[#7e8994] sm:text-base">
                  {product.description}
                </p>

                <div className="mt-6">
                  <Link
                    href="/prodotti"
                    className="inline-flex items-center gap-2 text-sm font-regular text-[#046DB6] transition hover:text-[#035A95]"
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