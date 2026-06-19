import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { socials } from "@/data/socials";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="animate-blob absolute left-10 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute right-10 top-40 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left */}
        <div className="space-y-8">
          <div className="inline-flex rounded-full border border-border bg-secondary px-4 py-2 text-sm">
            {siteConfig.hero.badge}
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Hi, I'm
              <span className="block text-primary">Denny N J</span>
            </h1>

            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
              Full Stack Developer with hands-on experience in building scalable
              web applications using Next.js, Node.js, MongoDB, Laravel, and
              TypeScript.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/Denny_Resume.pdf" target="_blank">
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="flex gap-4">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <Button
                  key={social.title}
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full hover:-translate-y-1 transition-transform"
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

        {/* Right */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-primary/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-full border border-border bg-card p-2 shadow-2xl">
              <Image
                src="/denny.png"
                alt="Denny N J"
                width={420}
                height={420}
                priority
                className="h-[320px] w-[320px] rounded-full object-cover md:h-[420px] md:w-[420px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
