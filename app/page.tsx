import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ProductsPreview from "@/components/sections/ProductsPreview";
import QualitySection from "@/components/sections/QualitySection";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <ProductsPreview />
      <ContactCTA />
    </main>
  );
}