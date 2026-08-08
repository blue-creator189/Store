"use client";

import { ProductCategory, CATEGORY_LABELS } from "@/types";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selected: ProductCategory | "all";
  onSelect: (category: ProductCategory | "all") => void;
}

const CATEGORIES: (ProductCategory | "all")[] = ["all", "vip", "vehicules", "suncoins", "packs", "grades"];

/**
 * Sélecteur de catégorie réutilisable, sous forme de pastilles.
 * Contrôlé depuis le parent (Shop.tsx) pour piloter le filtrage du catalogue.
 */
export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par catégorie">
      {CATEGORIES.map((category) => {
        const isActive = selected === category;
        const label = category === "all" ? "Tout" : CATEGORY_LABELS[category];

        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            aria-pressed={isActive}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all",
              isActive
                ? "border-transparent bg-sun-gradient text-sun-void shadow-glow"
                : "border-sun-line bg-sun-panel/60 text-sun-frost/80 hover:border-sun-azure/60 hover:text-sun-ice"
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
