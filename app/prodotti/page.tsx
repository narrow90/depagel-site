import ProdottiClient from "./ProdottiClient";

type Props = {
  searchParams: Promise<{
    categoria?: string;
  }>;
};

export default async function ProdottiPage({ searchParams }: Props) {
  const params = await searchParams;

  const categoria = params.categoria;

  const initialCategory: "Tutti" | "Dolci" | "Salati" | "Basi" =
    categoria === "Dolci" ||
    categoria === "Salati" ||
    categoria === "Basi"
      ? categoria
      : "Tutti";

  return <ProdottiClient initialCategory={initialCategory} />;
}