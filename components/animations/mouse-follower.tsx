"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ("ontouchstart" in window) return;

    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      setVisible(true);
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-8 w-8 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm md:block"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 28,
        }}
      />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-2 w-2 rounded-full bg-primary md:block"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 40,
        }}
      />
    </>
  );
}
