import { MouseFollower } from "@/components/animations/mouse-follower";
import { ScrollProgress } from "@/components/animations/scroll-progress";

import { PageContainer } from "@/components/layout/page-container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { HeroSection } from "@/components/sections/home/hero-section";
import { AboutSection } from "@/components/sections/home/about-section";
import { SkillsSection } from "@/components/sections/home/skills-section";
import { ProjectsSection } from "@/components/sections/home/projects-section";
import { ExperienceSection } from "@/components/sections/home/experience-section";
import { ContactSection } from "@/components/sections/home/contact-section";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <MouseFollower />
      <ScrollProgress />
      <Navbar />

      <PageContainer>
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
      </PageContainer>

      <Footer />
    </div>
  );
}
