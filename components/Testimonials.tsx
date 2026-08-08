"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="avis" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="mb-2 font-display text-xs uppercase tracking-[0.35em] text-sun-frost/60">
          Communauté
        </p>
        <h2 className="font-display text-3xl font-bold text-sun-ice md:text-4xl">
          Ce que dit <span className="text-gradient">notre communauté</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((testimonial, index) => (
          <motion.figure
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="glass-panel flex flex-col rounded-2xl p-6"
          >
            <Quote className="mb-3 h-6 w-6 text-sun-azure/60" />
            <blockquote className="flex-1 text-sm text-sun-frost/80">
              {testimonial.message}
            </blockquote>

            <div className="mt-5 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-3.5 w-3.5",
                    i < testimonial.rating ? "fill-sun-azure text-sun-azure" : "text-sun-line"
                  )}
                />
              ))}
            </div>

            <figcaption className="mt-3">
              <p className="text-sm font-semibold text-sun-ice">{testimonial.name}</p>
              <p className="text-xs text-sun-frost/50">{testimonial.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
