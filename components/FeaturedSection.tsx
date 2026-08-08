import { Product } from "@/types";
import ProductCarousel from "./ProductCarousel";

interface FeaturedSectionProps {
  products: Product[];
}

/**
 * Enveloppe la section "produits en avant" (titre + carrousel)
 * pour garder page.tsx déclaratif et lisible.
 */
export default function FeaturedSection({ products }: FeaturedSectionProps) {
  return (
    <section id="en-avant" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="mb-2 font-display text-xs uppercase tracking-[0.35em] text-sun-frost/60">
            Sélection
          </p>
          <h2 className="font-display text-3xl font-bold text-sun-ice md:text-4xl">
            Produits <span className="text-gradient">mis en avant</span>
          </h2>
        </div>
      </div>

      <ProductCarousel products={products} />
    </section>
  );
}
