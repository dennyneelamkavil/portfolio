import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/shared/project-card";

import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-1/3 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container">
        <SectionHeading
          title="Featured Projects"
          subtitle="Projects I've worked on"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
