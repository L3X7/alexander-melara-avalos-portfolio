"use client";
import { motion, Variants } from "motion/react";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { TechStackCard } from "./tech-stack-card";
import { Tech } from "./types/tech";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

interface TechStackListProps {
  techs: Tech[];
}

export function TechStackList({ techs }: TechStackListProps) {
  const t = useTranslations("MessageSection");
  const listKey = useMemo(() => techs.map((t) => t.name).join("-"), [techs]);

  if (techs.length === 0) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        {t("noTechsFoundMatchingYourCriteria")}
      </div>
    );
  }

  return (
    <motion.div
      key={listKey}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
    >
      {techs.map((tech) => (
        <motion.div key={tech.name} variants={itemVariants}>
          <TechStackCard tech={tech} />
        </motion.div>
      ))}
    </motion.div>
  );
}
