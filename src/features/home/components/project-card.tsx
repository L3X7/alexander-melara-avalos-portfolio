"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/features/projects/types/project";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, Variants } from "motion/react";

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    borderColor: "rgba(0,0,0,0)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -10,
    scale: 1.02,
    borderColor: "var(--project-card-hover-border)",
    boxShadow: "0px 10px 30px -10px var(--project-card-hover-shadow)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      mass: 0.8,
    },
  },
};

const MotionCard = motion(Card);

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("ProjectSection");
  const index = project.id - 1;
  const projectLocalization = t(`projects.${index}.${project.localeKey}`);

  const defaultImage = project.images.find((i) => i.mainImage)?.url || "";

  return (
    <MotionCard
      key={project.id}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-20px" }}
      className="h-full group relative flex flex-col overflow-hidden pt-0 bg-card border-transparent"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          fill
          src={defaultImage}
          alt="Event cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover brightness-60 dark:brightness-40 rounded-t-xl"
        />
      </div>
      <CardContent className="flex flex-col w-full gap-2 flex-1 pt-4">
        <div className="flex flex-row gap-2">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {projectLocalization}
        </p>
        <div className="mt-auto border-t pt-4">
          <Link
            href={project.url}
            className="text-sm font-semibold text-primary flex items-center cursor-pointer w-fit hover:underline"
          >
            {t("viewProject")}
            <ArrowUpRight className="mt-0.5 ml-0.5" />
          </Link>
        </div>
      </CardContent>
    </MotionCard>
  );
}
