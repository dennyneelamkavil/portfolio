"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/shared/section-heading";
import { skillCategories, additionalSkills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <SectionHeading
        title="Technical Skills"
        subtitle="Technologies I work with"
      />

      {/* Categories */}

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 shadow-lg"
            >
              <div className="mb-8 flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${category.bgColor}`}
                >
                  <Icon className={`h-7 w-7 ${category.color}`} />
                </div>

                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-full bg-secondary px-4 py-3 text-center font-medium transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Additional Skills */}

      <div className="mt-20">
        <h3 className="mb-8 text-center text-3xl font-bold">
          Additional Technologies
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {additionalSkills.map((skill) => (
            <div
              key={skill}
              className="rounded-full border border-border bg-card px-6 py-3 font-medium shadow-sm transition-all hover:border-primary hover:text-primary"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
