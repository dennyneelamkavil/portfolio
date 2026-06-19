"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="relative w-[calc(100vw-2rem)] md:w-auto rounded-full border border-border bg-background/80 px-4 py-3 shadow-lg backdrop-blur-xl">
          <div className="absolute -inset-0.5 rounded-full bg-primary/20 blur opacity-50" />

          {isMobile ? (
            <div className="relative flex items-center justify-between gap-3">
              <Link
                href="/"
                className="font-bold text-lg"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-primary">Denny N J</span>
              </Link>

              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-secondary"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          ) : (
            <div className="relative flex items-center gap-1">
              <Link href="/" className="mr-4 font-bold text-lg">
                <span className="text-primary">Denny N J</span>
              </Link>

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}

              <div className="ml-2">
                <ThemeToggle />
              </div>

              <Button asChild size="sm" className="ml-2">
                <Link href="/Denny_Resume.pdf" target="_blank">
                  Resume
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 ${
          isMobile && isOpen ? "block opacity-100" : "hidden opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-8 py-4 text-2xl font-medium text-foreground transition-colors hover:text-primary"
              onClick={handleNavClick}
            >
              {item.name}
            </Link>
          ))}

          <div className="mt-6">
            <ThemeToggle />
          </div>

          <Button
            asChild
            className="mt-6 px-8 py-4 text-2xl font-medium text-foreground transition-colors hover:text-primary"
          >
            <Link
              href="/Denny_Resume.pdf"
              target="_blank"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
