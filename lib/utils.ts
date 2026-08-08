/**
 * Fusionne des classes conditionnelles sans dépendance externe (clsx-like).
 * Utilisé partout dans les composants pour composer les classes Tailwind.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formate un prix en euros avec la locale française.
 */
export function formatEuros(value: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function formatPrice(value: number, currency: "EUR" | "SUNCOINS" = "EUR"): string {
  if (currency === "SUNCOINS") {
    return `${value.toLocaleString("fr-FR")} SunCoins`;
  }
  return formatEuros(value);
}

/**
 * Pioche un élément aléatoire dans un tableau.
 * Utilisé par le système de notifications d'achat simulées.
 */
export function pickRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}
