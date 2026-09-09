import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="w-full overflow-x-hidden bg-white/70 backdrop-blur-sm">
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:px-10 lg:py-16">
        <div className="grid w-full gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">

          {/* IMAGE */}
          <div className="w-full min-w-0 overflow-hidden rounded-[1.5rem] border border-[#D9EAF5] bg-white p-4 shadow-sm sm:rounded-[2rem] sm:p-8">
            <div className="relative h-[280px] w-full sm:h-[420px] lg:h-[520px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="w-full min-w-0">
            {/* BREADCRUMB */}
            <div className="mb-5 flex flex-wrap items-center gap-y-1 text-xs text-[#51606F] sm:mb-6 sm:text-sm">
              <Link
                href="/"
                className="transition hover:text-[#046DB6]"
              >
                Home
              </Link>

              <span className="mx-2">/</span>

              <Link
                href="/prodotti"
                className="transition hover:text-[#046DB6]"
              >
                Prodotti
              </Link>

              <span className="mx-2">/</span>

              <span className="font-normal text-[#51606F]">
                {product.name}
              </span>
            </div>

            {/* TITLE */}
            <h1 className="break-words text-3xl font-normal tracking-tight text-[#51606F] sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            <p className="mt-5 text-sm leading-7 text-[#7e8994] sm:mt-6 sm:text-base sm:leading-8">
              {product.description}
            </p>

            <p className="mt-4 text-sm leading-7 text-[#7e8994] sm:mt-6 sm:text-base sm:leading-8">
              {product.subtitle}
            </p>

            {/* MOBILE SPECS */}
            <div className="mt-8 space-y-4 sm:hidden">
              {product.specs.map((row, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[1.25rem] border border-[#D9EAF5] bg-white"
                >
                  <div className="bg-[#D1F0FC]/60 px-4 py-3">
                    <span className="text-sm font-semibold text-[#51606F]">
                      Formato {index + 1}
                    </span>
                  </div>

                  <div className="divide-y divide-[#D9EAF5]">
                    <div className="flex items-start justify-between gap-4 px-4 py-3">
                      <span className="text-xs text-[#7e8994]">
                        Grammatura
                      </span>
                      <span className="text-right text-sm font-semibold text-[#51606F]">
                        {row.grammatura || "—"}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4 px-4 py-3">
                      <span className="text-xs text-[#7e8994]">
                        Pz./kg confezione
                      </span>
                      <span className="text-right text-sm font-semibold text-[#51606F]">
                        {row.confezione || "—"}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4 px-4 py-3">
                      <span className="text-xs text-[#7e8994]">
                        Lievitazione
                      </span>
                      <span className="text-right text-sm font-semibold text-[#51606F]">
                        {row.lievitazione || "—"}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4 px-4 py-3">
                      <span className="text-xs text-[#7e8994]">
                        Cottura
                      </span>
                      <span className="text-right text-sm font-semibold text-[#51606F]">
                        {row.cottura
                          ? `${row.cottura} min`
                          : "—"}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4 px-4 py-3">
                      <span className="text-xs text-[#7e8994]">
                        Temperatura
                      </span>
                      <span className="text-right text-sm font-semibold text-[#51606F]">
                        {row.temperatura || "—"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* DESKTOP / TABLET TABLE */}
            <div className="mt-10 hidden w-full overflow-hidden rounded-[1.5rem] border border-[#D9EAF5] bg-white sm:block">
              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[760px] text-left text-sm text-[#51606F]">
                  <thead className="bg-[#D1F0FC]/60 text-[#51606F]">
                    <tr>
                      <th className="px-5 py-4 font-normal">
                        Grammatura prodotto
                      </th>

                      <th className="px-5 py-4 font-normal">
                        Pz./kg nella confezione
                      </th>

                      <th className="px-5 py-4 font-normal">
                        Tempi di lievitazione
                      </th>

                      <th className="px-5 py-4 font-normal">
                        Tempi di cottura (minuti)
                      </th>

                      <th className="px-5 py-4 font-normal">
                        Temperatura di cottura
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {product.specs.map((row, index) => (
                      <tr
                        key={index}
                        className="border-t border-[#D9EAF5] text-center text-[#7e8994]"
                      >
                        <td className="px-5 py-5">
                          {row.grammatura || "—"}
                        </td>

                        <td className="px-5 py-5">
                          {row.confezione || "—"}
                        </td>

                        <td className="px-5 py-5">
                          {row.lievitazione || "—"}
                        </td>

                        <td className="px-5 py-5">
                          {row.cottura || "—"}
                        </td>

                        <td className="px-5 py-5">
                          {row.temperatura || "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row">
              <Link
                href="/#contatti"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#046DB6] px-7 py-3 text-center text-sm font-normal text-white shadow-lg transition hover:bg-[#035A95] sm:w-auto"
              >
                Richiedi informazioni
              </Link>

              <Link
                href="/prodotti"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#D9EAF5] bg-white px-7 py-3 text-center text-sm font-normal text-[#51606F] transition hover:bg-[#F6FBFE] sm:w-auto"
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