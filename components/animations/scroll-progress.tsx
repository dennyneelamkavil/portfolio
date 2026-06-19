"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-1 w-full origin-left bg-gradient-to-r from-primary via-accent to-primary"
      style={{
        scaleX,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        opacity: {
          duration: 0.3,
        },
      }}
    />
  );
}
