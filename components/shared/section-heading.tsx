"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="space-y-6 text-center">
      {/* Subtitle Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground">
          {subtitle}
        </div>
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>

      {/* Decorative Line */}
      <motion.div
        className="mx-auto h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-accent"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      />
    </div>
  );
}
