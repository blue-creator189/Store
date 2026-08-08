"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Boutique", href: "#boutique" },
  { label: "Mis en avant", href: "#en-avant" },
  { label: "Avis", href: "#avis" },
  { label: "Rejoindre", href: "#rejoindre" },
];

/**
 * Navigation fixe en haut de page.
 * Devient opaque/floutée dès que l'utilisateur scrolle, pour rester lisible
 * sur le fond animé de la hero section.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        isScrolled ? "glass-panel py-3 shadow-glow" : "bg-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-9 w-9">
            <Image src="/logo.png" alt="Logo Sunlight FA" fill sizes="36px" className="object-contain" priority />
          </div>
          <span className="font-display text-lg font-semibold tracking-wide text-sun-ice">
            Sunlight <span className="text-gradient">FA</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-sun-frost/80 transition-colors hover:text-sun-ice"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#boutique"
          className="hidden rounded-full bg-sun-gradient px-5 py-2 text-sm font-semibold text-sun-void shadow-glow transition-transform hover:scale-105 md:inline-block"
        >
          Voir la boutique
        </a>

        <button
          className="text-sun-ice md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isMenuOpen && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="glass-panel mx-6 mt-3 flex flex-col gap-1 rounded-2xl p-4 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-sun-frost/80 hover:bg-sun-line/60 hover:text-sun-ice"
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
}
