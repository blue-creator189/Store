"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

/**
 * Écran de chargement affiché brièvement à l'arrivée sur le site.
 * Fait pulser le logo Sunlight FA avec une lueur bleue le temps
 * que la page s'installe, pour une première impression premium.
 */
export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-sun-void"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          aria-label="Chargement de Sunlight FA"
          role="status"
        >
          <motion.div
            className="relative h-24 w-24"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-sun-azure/30 blur-2xl" />
            <Image src="/logo.png" alt="Sunlight FA" fill sizes="96px" priority className="object-contain" />
          </motion.div>
          <p className="font-display text-sm uppercase tracking-[0.3em] text-sun-frost/80">
            Sunlight FA
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
