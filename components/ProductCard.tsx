"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Product, CATEGORY_LABELS } from "@/types";
import { formatPrice, cn } from "@/lib/utils";
import { checkout } from "@/lib/api";

interface ProductCardProps {
  product: Product;
  /** Variante compacte utilisée dans le carrousel des produits en avant */
  compact?: boolean;
}

/**
 * Carte produit réutilisable : utilisée à la fois dans la grille filtrable
 * (Shop.tsx) et dans le carrousel des produits en avant (ProductCarousel.tsx).
 */
export default function ProductCard({ product, compact = false }: ProductCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -6 }}
      className={cn(
        "glass-panel group relative flex flex-col overflow-hidden rounded-2xl border border-sun-line p-5 transition-colors hover:border-sun-azure/50",
        compact ? "w-72 shrink-0 snap-start" : "w-full"
      )}
    >
      {product.badge && (
        <span className="absolute right-4 top-4 rounded-full bg-sun-gradient px-3 py-1 text-[11px] font-semibold text-sun-void">
          {product.badge}
        </span>
      )}

      {/* Image produit si fournie (public/products/...), sinon dégradé de secours */}
      <div className="relative mb-4 h-28 overflow-hidden rounded-xl">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className={cn(
              "flex h-full w-full items-center justify-center bg-gradient-to-br opacity-90 transition-opacity group-hover:opacity-100",
              product.gradient
            )}
          >
            <span className="font-display text-xs uppercase tracking-[0.25em] text-sun-void/70">
              {CATEGORY_LABELS[product.category]}
            </span>
          </div>
        )}
      </div>

      <h3 className="font-display text-lg font-semibold text-sun-ice">{product.name}</h3>
      <p className="mt-2 flex-1 text-sm text-sun-frost/70">{product.description}</p>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-xl font-bold text-sun-ice">
            {formatPrice(product.price, product.currency)}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-sun-frost/40 line-through">
              {formatPrice(product.oldPrice, product.currency)}
            </span>
          )}
        </div>

        <button
          onClick={() => checkout(product)}
          aria-label={`Acheter ${product.name}`}
          className="flex items-center gap-2 rounded-full bg-sun-line px-4 py-2 text-sm font-medium text-sun-ice transition-colors group-hover:bg-sun-gradient group-hover:text-sun-void"
        >
          <ShoppingCart className="h-4 w-4" />
          Acheter
        </button>
      </div>
    </motion.article>
  );
}
