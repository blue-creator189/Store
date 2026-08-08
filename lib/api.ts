import { Product } from "@/types";
import { products } from "@/data/products";

/**
 * Couche d'accès aux données produits.
 *
 * Aujourd'hui : renvoie le catalogue statique de démonstration (data/products.ts).
 * Demain : remplacer le corps de ces fonctions par de vrais appels à
 * l'API Tebex (https://docs.tebex.io) ou à une API de paiement custom,
 * sans rien changer dans les composants qui les consomment.
 *
 * Exemple d'intégration Tebex (à adapter) :
 *   const res = await fetch(`https://headless.tebex.io/api/accounts/${WEBSTORE_TOKEN}/categories`);
 *   const data = await res.json();
 */

export async function getProducts(): Promise<Product[]> {
  // Simule un appel réseau asynchrone pour garder la même signature qu'un futur fetch()
  return Promise.resolve(products);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return Promise.resolve(products.filter((p) => p.featured));
}

/**
 * Point d'entrée pour déclencher un paiement.
 * À connecter au checkout Tebex (redirection) ou à un système custom (Stripe...).
 */
export function checkout(productId: string): void {
  // Exemple futur : window.location.href = `https://checkout.tebex.io/checkout/${productId}`;
  console.info(`[checkout] Achat demandé pour le produit : ${productId}`);
}
