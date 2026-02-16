"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { CurrentFocusItem } from "@/features/about/components/current-focus-item";
import { ExperienceTimeline } from "@/features/about/components/experience-timeline";
import { ProfileImage } from "@/features/about/components/profile-image";
import { allCurrentFocus } from "@/lib/current-focus-data";
import { allExperiences } from "@/lib/experiences-data";
import { BookUser, Download, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const experiences = allExperiences;
  const currentFocusItems = allCurrentFocus;

  const t = useTranslations("AboutSection");

  return (
    <div className="container mx-auto flex flex-col px-4 py-10  md:pt-30 md:pb-20">
      <div className="flex flex-col items-center gap-4">
        <ProfileImage />
        <h3 className="text-4xl font-extrabold tracking-tight md:text-5xl text-balance text-center">
          Alexander Melara Avalos
        </h3>
        <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
          Full Stack Developer
        </p>
        <div className="flex flex-row gap-2">
          <Button className="cursor-pointer" asChild>
            <a
              href="/documents/CV_Alex_Melara_Avalos_FullStack.pdf"
              download="CV_Alex_Melara_Avalos_FullStack.pdf"
            >
              <Download />
              {t("downloadResume")}
            </a>
          </Button>

          <Button className="cursor-pointer" asChild>
            <a href="mailto:lexmelara@gmail.com">
              <Mail /> {t("emailMe")}
            </a>
          </Button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 pt-8">
        <div className="lg:w-3/5 flex flex-col">
          <h3 className="mb-8 text-lg font-bold">
            <BookUser className="inline" /> {t("experienceTitle")}
          </h3>
          <Card>
            <CardDescription className="px-4">
              {t("experienceDescription")}
            </CardDescription>
          </Card>
          <div>
            <ExperienceTimeline experiences={experiences}></ExperienceTimeline>
          </div>
        </div>
        <div className="lg:w-2/5 flex flex-col">
          <Card>
            <CardHeader>
              <h3 className="text-xl font-bold tracking-wider uppercase">
                {t("currentFocus")}
              </h3>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {currentFocusItems.map((item, index) => (
                <CurrentFocusItem
                  key={index}
                  currentFocus={item}
                ></CurrentFocusItem>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
