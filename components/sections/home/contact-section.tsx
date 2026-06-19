import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

import { socials } from "@/data/socials";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container">
        <SectionHeading
          title="Let's Build Something Together"
          subtitle="Connect"
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          {/* Left */}

          <div className="space-y-8">
            <h3 className="max-w-xl text-5xl font-bold leading-tight">
              Let's build something{" "}
              <span className="text-primary">together.</span>
            </h3>

            <p className="max-w-xl text-lg text-muted-foreground">
              I'm always interested in discussing new opportunities,
              collaborations, and exciting projects. Feel free to reach out
              through any of the platforms below.
            </p>

            <Button asChild size="lg">
              <Link href="mailto:dennynj4748@gmail.com">
                Send an Email
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right */}

          <div className="space-y-5">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.title}
                  href={social.href}
                  target="_blank"
                  className="group flex items-center justify-between rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-xl transition-all hover:border-primary hover:-translate-y-1"
                >
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {social.subtitle}
                    </p>

                    <h4 className="mt-1 text-2xl font-semibold">
                      {social.title}
                    </h4>
                  </div>

                  <Icon className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
