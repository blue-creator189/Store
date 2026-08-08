import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";
import PurchaseNotification from "@/components/PurchaseNotification";
import Loader from "@/components/Loader";

const displayFont = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sunlight FA — Boutique officielle",
  description:
    "Boutique officielle de Sunlight FA : Abonnement, véhicules, SunCoins et packs premium, livrés en jeu.",
  keywords: ["Sunlight FA", "FiveM", "GTA RP", "boutique", "serveur RP"],
  metadataBase: new URL("https://sunlightfa.dev"),
  openGraph: {
    title: "Sunlight FA — Boutique officielle",
    description:
      "Abonnement, véhicules, SunCoins et packs premium pour le serveur FiveM Sunlight FA.",
    url: "https://sunlightfa.dev",
    siteName: "Sunlight FA",
    locale: "fr_FR",
    type: "website",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className={`${displayFont.variable} ${bodyFont.variable} font-body antialiased`}>
        <Loader />
        <CustomCursor />
        {children}
        <ScrollToTop />
        <PurchaseNotification />
      </body>
    </html>
  );
}
