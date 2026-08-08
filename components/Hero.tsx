"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Users, ShieldCheck, Sparkles } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const STATS = [
  { icon: Users, value: 12480, suffix: "+", label: "joueurs soutiens" },
  { icon: ShieldCheck, value: 3200, suffix: "+", label: "grades VIP actifs" },
  { icon: Sparkles, value: 98, suffix: "%", label: "satisfaction" },
];

/**
 * Section d'ouverture : le logo Sunlight FA comme pièce centrale,
 * entouré d'une lueur bleue animée, avec les statistiques clés du serveur.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
      {/* Halo animé derrière le logo */}
      <div className="pointer-events-none absolute inset-0 bg-sun-radial" />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sun-azure/20 blur-[100px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative mb-8 h-32 w-32 md:h-40 md:w-40"
      >
        <div className="animate-float">
          <Image src="/logo.png" alt="Sunlight FA" fill sizes="160px" priority className="object-contain drop-shadow-[0_0_35px_rgba(77,166,255,0.45)]" />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mb-3 font-display text-xs uppercase tracking-[0.4em] text-sun-frost/70"
      >
        Serveur FiveM • GTA RP
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl"
      >
        La boutique officielle de <span className="text-gradient">Sunlight FA</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-5 max-w-xl text-base text-sun-frost/80 md:text-lg"
      >
        Grades VIP, véhicules exclusifs, SunCoins et packs premium — soutenez le serveur
        et jouez avec un avantage immédiat, livré directement en jeu.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mt-8 flex flex-col gap-3 sm:flex-row"
      >
        <a
          href="#boutique"
          className="rounded-full bg-sun-gradient px-8 py-3 font-semibold text-sun-void shadow-glow-lg transition-transform hover:scale-105"
        >
          Découvrir la boutique
        </a>
        <a
          href="#rejoindre"
          className="rounded-full border border-sun-line px-8 py-3 font-semibold text-sun-ice transition-colors hover:border-sun-azure/60"
        >
          Rejoindre le Discord
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="glass-panel mt-14 grid grid-cols-1 gap-6 rounded-2xl px-8 py-6 sm:grid-cols-3"
      >
        {STATS.map(({ icon: Icon, value, suffix, label }) => (
          <div key={label} className="flex flex-col items-center gap-1.5">
            <Icon className="mb-1 h-5 w-5 text-sun-frost/70" strokeWidth={2} />
            <p className="font-display text-2xl font-bold text-sun-ice md:text-3xl">
              <AnimatedCounter target={value} suffix={suffix} />
            </p>
            <p className="text-xs uppercase tracking-wide text-sun-frost/60">{label}</p>
          </div>
        ))}
      </motion.div>

      <motion.a
        href="#boutique"
        aria-label="Défiler vers la boutique"
        className="absolute bottom-8 text-sun-frost/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
