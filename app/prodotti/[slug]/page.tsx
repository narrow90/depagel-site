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

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const showGrammatura = product.specs.some(
    (row) => row.grammatura?.trim() !== ""
  );

  const showConfezione = product.specs.some(
    (row) => row.confezione?.trim() !== ""
  );

  const showLievitazione = product.specs.some(
    (row) => row.lievitazione?.trim() !== ""
  );

  const showCottura = product.specs.some(
    (row) => row.cottura?.trim() !== ""
  );

  const showTemperatura = product.specs.some(
    (row) => row.temperatura?.trim() !== ""
  );

  const visibleColumns = [
    showGrammatura,
    showConfezione,
    showLievitazione,
    showCottura,
    showTemperatura,
  ].filter(Boolean).length;

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
                  {product.specs.length > 1 && (
                    <div className="bg-[#D1F0FC]/60 px-4 py-3">
                      <span className="text-sm font-semibold text-[#51606F]">
                        Formato {index + 1}
                      </span>
                    </div>
                  )}

                  <div className="divide-y divide-[#D9EAF5]">

                    {showGrammatura && row.grammatura && (
                      <div className="flex items-start justify-between gap-4 px-4 py-3">
                        <span className="text-xs text-[#7e8994]">
                          Grammatura
                        </span>

                        <span className="text-right text-sm font-semibold text-[#51606F]">
                          {row.grammatura}
                        </span>
                      </div>
                    )}

                    {showConfezione && row.confezione && (
                      <div className="flex items-start justify-between gap-4 px-4 py-3">
                        <span className="text-xs text-[#7e8994]">
                          Pz./kg confezione
                        </span>

                        <span className="text-right text-sm font-semibold text-[#51606F]">
                          {row.confezione}
                        </span>
                      </div>
                    )}

                    {showLievitazione && row.lievitazione && (
                      <div className="flex items-start justify-between gap-4 px-4 py-3">
                        <span className="text-xs text-[#7e8994]">
                          Lievitazione
                        </span>

                        <span className="text-right text-sm font-semibold text-[#51606F]">
                          {row.lievitazione}
                        </span>
                      </div>
                    )}

                    {showCottura && row.cottura && (
                      <div className="flex items-start justify-between gap-4 px-4 py-3">
                        <span className="text-xs text-[#7e8994]">
                          Cottura
                        </span>

                        <span className="text-right text-sm font-semibold text-[#51606F]">
                          {row.cottura} min
                        </span>
                      </div>
                    )}

                    {showTemperatura && row.temperatura && (
                      <div className="flex items-start justify-between gap-4 px-4 py-3">
                        <span className="text-xs text-[#7e8994]">
                          Temperatura
                        </span>

                        <span className="text-right text-sm font-semibold text-[#51606F]">
                          {row.temperatura}
                        </span>
                      </div>
                    )}

                  </div>
                </div>
              ))}
            </div>

            {/* DESKTOP / TABLET TABLE */}
            <div className="mt-10 hidden w-full overflow-hidden rounded-[1.5rem] border border-[#D9EAF5] bg-white sm:block">
              <table className="w-full table-fixed text-center text-xs text-[#51606F] lg:text-sm">

                <thead className="bg-[#D1F0FC]/60 text-[#51606F]">
                  <tr>

                    {showGrammatura && (
                      <th
                        className="px-2 py-4 font-normal leading-5 lg:px-3"
                        style={{
                          width: `${100 / visibleColumns}%`,
                        }}
                      >
                        Grammatura prodotto
                      </th>
                    )}

                    {showConfezione && (
                      <th
                        className="px-2 py-4 font-normal leading-5 lg:px-3"
                        style={{
                          width: `${100 / visibleColumns}%`,
                        }}
                      >
                        Pz./kg nella confezione
                      </th>
                    )}

                    {showLievitazione && (
                      <th
                        className="px-2 py-4 font-normal leading-5 lg:px-3"
                        style={{
                          width: `${100 / visibleColumns}%`,
                        }}
                      >
                        Tempi di lievitazione
                      </th>
                    )}

                    {showCottura && (
                      <th
                        className="px-2 py-4 font-normal leading-5 lg:px-3"
                        style={{
                          width: `${100 / visibleColumns}%`,
                        }}
                      >
                        Tempi di cottura
                        <span className="block">
                          (minuti)
                        </span>
                      </th>
                    )}

                    {showTemperatura && (
                      <th
                        className="px-2 py-4 font-normal leading-5 lg:px-3"
                        style={{
                          width: `${100 / visibleColumns}%`,
                        }}
                      >
                        Temperatura di cottura
                      </th>
                    )}

                  </tr>
                </thead>

                <tbody>
                  {product.specs.map((row, index) => (
                    <tr
                      key={index}
                      className="border-t border-[#D9EAF5] text-[#7e8994]"
                    >

                      {showGrammatura && (
                        <td className="break-words px-2 py-5 lg:px-3">
                          {row.grammatura || ""}
                        </td>
                      )}

                      {showConfezione && (
                        <td className="break-words px-2 py-5 lg:px-3">
                          {row.confezione || ""}
                        </td>
                      )}

                      {showLievitazione && (
                        <td className="break-words px-2 py-5 lg:px-3">
                          {row.lievitazione || ""}
                        </td>
                      )}

                      {showCottura && (
                        <td className="break-words px-2 py-5 lg:px-3">
                          {row.cottura || ""}
                        </td>
                      )}

                      {showTemperatura && (
                        <td className="break-words px-2 py-5 lg:px-3">
                          {row.temperatura || ""}
                        </td>
                      )}

                    </tr>
                  ))}
                </tbody>
              </table>
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