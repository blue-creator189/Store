"use client";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

/**
 * Champ de recherche contrôlé, réutilisable partout où l'on doit
 * filtrer une liste de produits par nom/description.
 */
export default function SearchBar({ value, onChange, className = "" }: SearchBarProps) {
  return (
    <div className={`relative ${className}`}>
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-sun-frost/60"
        strokeWidth={2}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Rechercher un produit (VIP, véhicule, pack...)"
        aria-label="Rechercher un produit"
        className="w-full rounded-full border border-sun-line bg-sun-panel/80 py-3 pl-11 pr-11 text-sm text-sun-ice placeholder:text-sun-frost/40 outline-none transition-colors focus:border-sun-azure"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          aria-label="Effacer la recherche"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-sun-frost/60 transition-colors hover:text-sun-ice"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
