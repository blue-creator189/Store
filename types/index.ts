export type ProductCategory = "vip" | "vehicules" | "suncoins" | "packs" | "grades";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  category: ProductCategory;
  featured?: boolean;
  badge?: string;
  gradient: string;
  tebexUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  message: string;
  rating: number;
}

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  vip: "Grades VIP",
  vehicules: "Vehicules",
  suncoins: "SunCoins",
  packs: "Packs",
  grades: "Grades RP",
};
