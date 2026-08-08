"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
import { pickRandom } from "@/lib/utils";

const FIRST_NAMES = [
  "Lucas", "Emma", "Nathan", "Chloé", "Hugo", "Léa", "Mathis", "Camille",
  "Tom", "Sarah", "Enzo", "Jade", "Louis", "Manon", "Rayan", "Inès",
];

interface Notification {
  id: number;
  name: string;
  productName: string;
}

/**
 * Fait apparaître périodiquement une notification discrète du type
 * "X vient d'acheter Y", pour renforcer la preuve sociale.
 * Purement visuel/démonstratif : à connecter à de vrais événements d'achat
 * une fois l'API de paiement branchée (voir lib/api.ts).
 */
export default function PurchaseNotification() {
  const [notification, setNotification] = useState<Notification | null>(null);

  useEffect(() => {
    let idCounter = 0;

    const showNotification = () => {
      idCounter += 1;
      setNotification({
        id: idCounter,
        name: pickRandom(FIRST_NAMES),
        productName: pickRandom(products).name,
      });

      setTimeout(() => setNotification(null), 4500);
    };

    const firstDelay = setTimeout(showNotification, 6000);
    const interval = setInterval(showNotification, 14000);

    return () => {
      clearTimeout(firstDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {notification && (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="glass-panel flex items-center gap-3 rounded-xl px-4 py-3 shadow-glow"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sun-gradient text-sun-void">
              <ShoppingBag className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <p className="text-sm text-sun-ice/90">
              <span className="font-semibold text-sun-frost">{notification.name}</span> vient
              d&apos;acheter <span className="font-semibold text-sun-frost">{notification.productName}</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
