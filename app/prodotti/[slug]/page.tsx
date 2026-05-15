import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const products = [
  {
    slug: "apolla-o-coda-aragosta",
    name: "Apolla o coda d’aragosta",
    category: "Dolci, Tradizionali",
    image: "/images/products/apolla.jpg",
    description:
      "APOLLA O CODA D’ARAGOSTA mille lamelle con bignè, perfetta da farcire e ideale per il settore professionale.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "30/35 g",
        confezione: "6 kg",
        temperatura: "170-180°",
        cottura: "28-30 min.",
      },
      {
        grammatura: "40/45 g",
        confezione: "6 kg",
        temperatura: "170-180°",
        cottura: "28-30 min.",
      },
      {
        grammatura: "55/60 g",
        confezione: "60 pz.",
        temperatura: "170-180°",
        cottura: "28-30 min.",
      },
      {
        grammatura: "80/85 g",
        confezione: "60 pz.",
        temperatura: "170-180°",
        cottura: "28-30 min.",
      },
    ],
  },

  {
    slug: "brioche",
    name: "Brioche",
    category: "Dolci, Da Lievitare",
    image: "/images/products/brioche.jpg",
    description:
      "Brioche professionale ideale per bar, hotel e ristorazione.",
    subtitle: "Qualità costante e lavorazione professionale.",
    specs: [
      {
        grammatura: "50 g",
        confezione: "60 pz.",
        temperatura: "170-180°",
        cottura: "20 min.",
      },
    ],
  },
];

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }


  return (
    <main className="bg-white/70 backdrop-blur-sm">
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          
          {/* IMAGE */}
          <div className="rounded-[2rem] border border-[#D9EAF5] bg-white p-8 shadow-sm">
            <div className="relative h-[420px] w-full sm:h-[520px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <div className="mb-6 text-sm text-[#51606F]">
              <Link href="/" className="hover:text-[#046DB6]">
                Home
              </Link>

              <span className="mx-2">/</span>

              <Link
                href="/prodotti"
                className="hover:text-[#046DB6]"
              >
                Prodotti
              </Link>

              <span className="mx-2">/</span>

              <span className="font-regular text-[#51606F]">
                {product.name}
              </span>
            </div>

            <h1 className="text-4xl font-regular tracking-tight text-[#51606F] sm:text-5xl">
              {product.name}
            </h1>

            <p className="mt-6 text-base leading-8 text-[#7e8994]">
              {product.description}
            </p>

            <p className="mt-6 text-base leading-8 text-[#7e8994]">
              {product.subtitle}
            </p>

            {/* TABLE */}
            <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-[#D9EAF5] bg-white">
              <table className="w-full text-left text-sm text-[#51606F]">
                <thead className="bg-[#D1F0FC]/60 text-[#51606F]">
                  <tr>
                    <th className="px-5 py-4 font-regular">
                      Grammatura
                    </th>

                    <th className="px-5 py-4 font-regular">
                      pz./qt. confezione
                    </th>

                    <th className="px-5 py-4 font-regular">
                      °C
                    </th>

                    <th className="px-5 py-4 font-regular">
                      Cottura
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {product.specs.map((row, index) => (
                    <tr
                      key={index}
                      className="border-t border-[#D9EAF5] text-[#7e8994]"
                    >
                      <td className="px-5 py-5">
                        {row.grammatura}
                      </td>

                      <td className="px-5 py-5">
                        {row.confezione}
                      </td>

                      <td className="px-5 py-5">
                        {row.temperatura}
                      </td>

                      <td className="px-5 py-5">
                        {row.cottura}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contatti"
                className="inline-flex items-center justify-center rounded-full bg-[#046DB6] px-7 py-3 text-sm font-regular text-white shadow-lg transition hover:bg-[#035A95]"
              >
                Richiedi informazioni
              </Link>

              <Link
                href="/prodotti"
                className="inline-flex items-center justify-center rounded-full border border-[#D9EAF5] bg-white px-7 py-3 text-sm font-regular text-[#51606F] transition hover:bg-[#F6FBFE]"
              >
                Torna al catalogo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}