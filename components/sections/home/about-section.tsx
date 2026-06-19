import Link from "next/link";
import { MapPin, Briefcase, Mail, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlassmorphicCard } from "@/components/shared/glassmorphic-card";
import { siteConfig } from "@/data/site";

export function AboutSection() {
  return (
    <section id="about" className="relative py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <SectionHeading
        title="About Me"
        subtitle="My background and professional journey"
      />

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Left Card */}
        <GlassmorphicCard className="lg:col-span-2">
          <div className="space-y-6">
            <p className="text-lg leading-8 text-muted-foreground">
              I'm a Full Stack Developer currently working at AMETZO
              Technologies, where I build scalable and production-ready web
              applications using technologies such as Next.js, Node.js, MongoDB,
              Laravel, and TypeScript.
            </p>

            <p className="text-lg leading-8 text-muted-foreground">
              Over the past year, I have worked on various business applications
              including e-commerce admin platforms, accounts management systems,
              order management solutions, and custom admin dashboards.
            </p>

            <p className="text-lg leading-8 text-muted-foreground">
              I enjoy solving real-world problems through clean architecture,
              secure APIs, and intuitive user interfaces. I continuously learn
              new technologies and strive to build efficient, maintainable, and
              scalable software.
            </p>
          </div>

          <div className="mt-10">
            <Button asChild>
              <Link href="/Denny_Resume.pdf" target="_blank">
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </GlassmorphicCard>

        {/* Right Info Card */}
        <GlassmorphicCard>
          <div className="space-y-8">
            <div>
              <div className="mb-2 text-sm text-muted-foreground">Name</div>
              <div className="font-semibold">Denny N J</div>
            </div>

            <div>
              <div className="mb-2 text-sm text-muted-foreground flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </div>
              <div className="font-semibold">{siteConfig.email}</div>
            </div>

            <div>
              <div className="mb-2 text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </div>
              <div className="font-semibold">{siteConfig.location}</div>
            </div>

            <div>
              <div className="mb-2 text-sm text-muted-foreground flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Experience
              </div>
              <div className="font-semibold">
                1+ Years Professional Experience
              </div>
            </div>

            <div>
              <div className="mb-2 text-sm text-muted-foreground">
                Availability
              </div>

              <div className="flex items-center gap-2 font-semibold text-green-500">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                Open to opportunities
              </div>
            </div>
          </div>
        </GlassmorphicCard>
      </div>
    </section>
  );
}
