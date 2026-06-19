"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";

export function Timeline() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Line */}

      <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`relative flex w-full ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Dot */}

            <div className="absolute left-4 top-8 z-10 h-4 w-4 rounded-full bg-primary md:left-1/2 md:-translate-x-1/2" />

            {/* Card */}

            <div className="ml-12 w-full md:ml-0 md:w-[46%]">
              <div className="glass rounded-3xl p-8 shadow-lg">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold">{experience.role}</h3>

                  {experience.current && <Badge>Current</Badge>}
                </div>

                <h4 className="mt-2 text-lg font-semibold text-primary">
                  {experience.company}
                </h4>

                <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {experience.duration}
                  </div>

                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {experience.location}
                  </div>
                </div>

                <p className="mt-5 text-muted-foreground">
                  {experience.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {experience.achievements.map((item) => (
                    <li key={item} className="flex gap-3 text-sm">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary" />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
