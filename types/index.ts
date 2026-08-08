/**
 * Types partagés de la boutique Sunlight FA.
 * Centraliser les types ici permet de garder une seule source de vérité
 * et facilite le branchement futur d'une vraie API (Tebex ou custom).
 */

export type ProductCategory = "Abonnement" | "suncoins";

export interface Product {
  /** Identifiant unique, utilisé comme clé et comme référence panier/API */
  id: string;
  name: string;
  description: string;
  /** Prix affiché en euros, ex: 14.99 */
  price: number;
  /** Ancien prix pour afficher une réduction (optionnel) */
  oldPrice?: number;
  category: ProductCategory;
  /** Met le produit en avant dans le carrousel de la page d'accueil */
  featured?: boolean;
  /** Badge optionnel affiché sur la carte (ex: "Populaire", "Nouveau") */
  badge?: string;
  /** Dégradé Tailwind utilisé pour l'illustration de la carte */
  gradient: string;
   /**
   * URL de checkout Tebex (ou custom) pour ce produit précis.
   * Ex: "https://sunlight-fa.tebex.store/"
   * Tant qu'elle n'est pas renseignée, le bouton "Acheter" affiche
   * un message d'attente au lieu de rediriger vers nulle part.
   */
  tebexUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  message: string;
  rating: number; // 1 à 5
}

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  vip: "Abonnement",
  suncoins: "SunCoins",
};
