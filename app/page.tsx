import Hero from "@/components/sections/Hero";
import AziendaStory from "@/components/sections/AziendaStory";
import ProductsPreview from "@/components/sections/ProductsPreview";
import ContactCTA from "@/components/sections/ContactCTA";
import TeamSection from "@/components/sections/TeamSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AziendaStory />
      <ProductsPreview />
      <ContactCTA />
      <TeamSection />
    </main>
  );
}