"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PackageSearch } from "lucide-react";
import { Product, ProductCategory } from "@/types";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";

interface ShopProps {
  products: Product[];
}

/**
 * Section boutique : centralise l'état de recherche et de filtrage,
 * puis dérive la liste affichée à partir du catalogue complet.
 * Garder cet état ici (plutôt que dans page.tsx) garde la page racine légère.
 */
export default function Shop({ products }: ShopProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ProductCategory | "all">("all");

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      const matchesSearch =
        query.length === 0 ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [products, search, category]);

  return (
    <div id="boutique" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10 text-center">
        <p className="mb-2 font-display text-xs uppercase tracking-[0.35em] text-sun-frost/60">
          Catalogue
        </p>
        <h2 className="font-display text-3xl font-bold text-sun-ice md:text-4xl">
          Toute la <span className="text-gradient">boutique</span>
        </h2>
      </div>

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <CategoryFilter selected={category} onSelect={setCategory} />
        <SearchBar value={search} onChange={setSearch} className="md:w-80" />
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass-panel flex flex-col items-center gap-3 rounded-2xl py-16 text-center"
        >
          <PackageSearch className="h-8 w-8 text-sun-frost/50" />
          <p className="text-sun-frost/70">
            Aucun produit ne correspond à votre recherche. Essayez un autre mot-clé ou une autre catégorie.
          </p>
        </motion.div>
      )}
    </div>
  );
}
