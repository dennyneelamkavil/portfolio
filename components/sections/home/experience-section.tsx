import { SectionHeading } from "@/components/shared/section-heading";
import { Timeline } from "@/components/shared/timeline";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey"
        />

        <div className="mt-16">
          <Timeline />
        </div>
      </div>
    </section>
  );
}
