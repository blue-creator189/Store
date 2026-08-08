import { Product } from "@/types";
import { products } from "@/data/products";

/**
 * Couche d'accès aux données produits.
 *
 * Aujourd'hui : renvoie le catalogue statique de démonstration (data/products.ts).
 * Demain : remplacer le corps de ces fonctions par de vrais appels à
 * l'API Tebex (https://docs.tebex.io) ou à une API de paiement custom,
 * sans rien changer dans les composants qui les consomment.
 */

export async function getProducts(): Promise<Product[]> {
  return Promise.resolve(products);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return Promise.resolve(products.filter((p) => p.featured));
}

/**
 * Declenche l'achat d'un produit.
 * Si le produit a un tebexUrl renseigne (voir data/products.ts), on ouvre
 * la page de checkout Tebex dans un nouvel onglet. Sinon, on previent
 * simplement que le lien n'est pas encore configure.
 */
export function checkout(product: Product): void {
  if (product.tebexUrl) {
    window.open(product.tebexUrl, "_blank", "noopener,noreferrer");
    return;
  }

  const message =
    "Le lien de paiement pour " + product.name + " n'est pas encore configure. Ajoute son tebexUrl dans data/products.ts.";
  window.alert(message);
}
