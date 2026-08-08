"use client";

import { motion } from "framer-motion";

/**
 * `template.tsx` est réévalué à chaque navigation (contrairement à layout.tsx),
 * ce qui permet une transition de fondu/glissement fluide entre les pages,
 * prête à l'emploi si d'autres routes sont ajoutées plus tard (ex: /categorie/[slug]).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
