import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import Shop from "@/components/Shop";
import Testimonials from "@/components/Testimonials";
import JoinCta from "@/components/JoinCta";
import Footer from "@/components/Footer";
import { getProducts, getFeaturedProducts } from "@/lib/api";
import { testimonials } from "@/data/testimonials";

/**
 * Page d'accueil de la boutique.
 * Le fetch des produits passe par lib/api.ts : le jour où une vraie API
 * de paiement (Tebex ou custom) est branchée, seule cette couche change.
 */
export default async function HomePage() {
  const [products, featuredProducts] = await Promise.all([
    getProducts(),
    getFeaturedProducts(),
  ]);

  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedSection products={featuredProducts} />
      <Shop products={products} />
      <Testimonials testimonials={testimonials} />
      <JoinCta />
      <Footer />
    </main>
  );
}
