"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassmorphicCard({
  children,
  className,
}: GlassmorphicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={className}
    >
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl",
          "border border-border",
          "bg-card/70 backdrop-blur-xl",
          "p-6 shadow-lg",
          "transition-all duration-300",
          "hover:border-primary/40 hover:shadow-xl",
        )}
      >
        {/* Glow Effect */}
        <div
          className={cn(
            "absolute -inset-px rounded-2xl opacity-0 blur-xl",
            "bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20",
            "transition-opacity duration-500",
            "group-hover:opacity-100",
          )}
        />

        <div className="relative z-10">{children}</div>
      </div>
    </motion.div>
  );
}
