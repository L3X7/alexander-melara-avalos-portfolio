"use client";
import { DetailTopics } from "@/features/project-detail/components/detail-topics";
import { KeyFeatures } from "@/features/project-detail/components/key-features";
import { ProjectGallery } from "@/features/project-detail/components/project-gallery";
import { ProjectInfo } from "@/features/project-detail/components/project-info";
import { allProjects } from "@/lib/projects-data";
import { useTranslations } from "next-intl";

import { useSearchParams } from "next/navigation";

export default function ProjectDetail() {
  const searchParams = useSearchParams();
  const t = useTranslations(`ProjectSection`);

  const project = allProjects.find(
    (p) => p.id === Number(searchParams.get("id")),
  );

  if (project == undefined) {
    return (
      <div className="container mx-auto flex flex-col px-4 py-10 md:pt-30 md:pb-2 text-center">
        <h3>Project not found</h3>
      </div>
    );
  }

  return (
    <div className="container mx-auto flex flex-col px-4 py-10 md:pt-30 md:pb-20">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
        {project.title}
      </h1>
      <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-4xl leading-relaxed">
        {t(`projects.${project.id - 1}.description`)}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-11 xl:grid-cols-12 gap-12 lg:gap-24 relative mt-20">
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-12">
          <DetailTopics
            projectId={project.id}
            detailTopics={project.detailTopics}
          />
          <KeyFeatures
            projectId={project.id}
            keyFeatures={project.keyFeatures}
          />
          <ProjectGallery images={project.images} />
        </div>
        <aside className="lg:col-span-4 xl:col-span-4 relative hidden lg:block">
          <ProjectInfo
            role={project.role}
            timeline={project.timeline}
            tags={project.tags}
          />
        </aside>
        <div className="lg:hidden">
          <ProjectInfo
            role={project.role}
            timeline={project.timeline}
            tags={project.tags}
          />
        </div>
      </div>
    </div>
  );
}
