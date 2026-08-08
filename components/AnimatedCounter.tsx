"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

/**
 * Compteur qui s'anime de 0 jusqu'à `target` lorsqu'il entre dans le viewport.
 * Générique : réutilisé pour le nombre de joueurs, mais utilisable pour
 * n'importe quelle statistique chiffrée du site.
 */
export default function AnimatedCounter({ target, duration = 1800, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // easeOutExpo pour un effet de décélération premium
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.floor(eased * target));

      if (progress < 1) frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}
