"use client";

import { Button } from "@/components/ui/button";
import { CodeWindow } from "./code-window";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion, Variants } from "motion/react";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

const codeWindowVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
  },
};

export function HeroSection() {
  const t = useTranslations("HomePage");
  return (
    <motion.div
      id="home"
      className="scroll-mt-24 container mx-auto flex flex-col md:flex-row items-center py-10 md:py-30 gap-8 md:gap-0 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Column */}
      <div className="flex flex-col w-full lg:w-1/2 justify-center">
        <motion.h3
          variants={itemVariants}
          className="text-4xl font-extrabold tracking-tight md:text-5xl text-balance"
        >
          {t.rich("heroSection.heroTitle", {
            highlight: (chunks) => (
              <span className="text-primary">{chunks}</span>
            ),
          })}
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-lg max-w-xl mt-6 leading-relaxed mb-8"
        >
          {t("heroSection.heroSubtitle")}
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
          <Button
            size="lg"
            className="w-full sm:w-auto gap-2 cursor-pointer"
            asChild
          >
            <Link href="/projects">
              {t("heroSection.heroButton")}{" "}
              <ArrowRight className="h-4 w-4 mt-1" />
            </Link>
          </Button>
          <Button
            className="w-full sm:w-auto cursor-pointer"
            variant="outline"
            size="lg"
            asChild
          >
            <a href="mailto:lexmelara@gmail.com">
              {t("heroSection.heroButtonOutline")}
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Right Column */}
      <motion.div
        variants={codeWindowVariants}
        className="flex w-full lg:w-1/2 justify-center lg:justify-end"
      >
        <CodeWindow className="w-full dark:shadow-emerald-500/20" />
      </motion.div>
    </motion.div>
  );
}
