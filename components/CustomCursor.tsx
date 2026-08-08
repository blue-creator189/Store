"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Curseur custom avec halo lumineux bleu, désactivé automatiquement
 * sur tactile/mobile via le media query appliqué en CSS (globals.css).
 * Grossit légèrement au survol des éléments interactifs.
 */
export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 25, stiffness: 300, mass: 0.4 });
  const springY = useSpring(y, { damping: 25, stiffness: 300, mass: 0.4 });

  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isCoarsePointer, setIsCoarsePointer] = useState(true);

  useEffect(() => {
    setIsCoarsePointer(!window.matchMedia("(hover: hover) and (pointer: fine)").matches);

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, [role='button'], input"));
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isCoarsePointer) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] h-6 w-6 rounded-full border border-sun-frost/70 bg-sun-sky/20 shadow-glow mix-blend-screen"
      style={{ x: springX, y: springY, opacity: isVisible ? 1 : 0 }}
      animate={{ scale: isPointer ? 1.8 : 1 }}
      transition={{ scale: { duration: 0.2, ease: "easeOut" } }}
    />
  );
}
