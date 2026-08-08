"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/types";
import ProductCard from "./ProductCard";

interface ProductCarouselProps {
  products: Product[];
}

/**
 * Carrousel horizontal des produits "featured".
 * Défilement natif au doigt/trackpad + boutons de navigation pour desktop.
 */
export default function ProductCarousel({ products }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  if (products.length === 0) return null;

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} compact />
        ))}
      </div>

      <div className="mt-2 hidden justify-end gap-2 md:flex">
        <button
          onClick={() => scrollBy(-1)}
          aria-label="Produit précédent"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sun-line text-sun-frost/80 transition-colors hover:border-sun-azure/60 hover:text-sun-ice"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scrollBy(1)}
          aria-label="Produit suivant"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sun-line text-sun-frost/80 transition-colors hover:border-sun-azure/60 hover:text-sun-ice"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
