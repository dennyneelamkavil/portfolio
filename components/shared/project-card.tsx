"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  category: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  github,
  demo,
  category,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="group glass overflow-hidden rounded-3xl"
    >
      {/* Image */}

      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        <Badge className="absolute right-4 top-4">{category}</Badge>
      </div>

      {/* Content */}

      <div className="space-y-5 p-6">
        <h3 className="text-2xl font-bold">{title}</h3>

        <p className="text-muted-foreground">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 pt-4">
          {github && (
            <Button variant="outline" asChild>
              <Link href={github} target="_blank">
                <FaGithub className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>
          )}

          {demo && (
            <Button asChild>
              <Link href={demo} target="_blank">
                Live Demo
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
