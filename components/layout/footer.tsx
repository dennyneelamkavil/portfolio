import Link from "next/link";

import { socials } from "@/data/socials";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="container flex flex-col items-center justify-between gap-8 md:flex-row">
        {/* Left */}
        <div className="text-center md:text-left">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-primary">Denny N J</span>
          </Link>

          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Full Stack Developer specializing in building scalable,
            high-performance web applications with modern technologies.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Denny N J. All rights reserved.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <Button
                key={social.title}
                variant="outline"
                size="icon"
                asChild
                className="rounded-full transition-all hover:-translate-y-1 hover:border-primary"
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.title}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
