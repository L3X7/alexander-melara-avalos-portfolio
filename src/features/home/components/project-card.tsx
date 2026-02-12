import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/features/projects/types/project";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface ProjectCardProps {
	project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
	const t = useTranslations("ProjectSection");
	const index = project.id - 1;
	const projectLocalization = t(`projects.${index}.${project.localeKey}`);

	return (
		<Card
			key={project.id}
			className="group relative flex flex-col overflow-hidden pt-0 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 dark:hover:border-primary/50"
		>
			{/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}
			<div className="relative aspect-video overflow-hidden">
				<Image
					fill
					src="/images/recycle.png"
					alt="Event cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="w-full h-full object-cover brightness-60 grayscale dark:brightness-40 rounded-t-xl  transition-transform duration-500 group-hover:scale-105"
				/>
			</div>
			<CardContent className="flex flex-col w-full gap-2">
				<div className="flex flex-row gap-2">
					{project.tags.map((tag, index) => (
						<Badge key={index} variant="secondary">
							{tag}
						</Badge>
					))}
				</div>
				<h3 className="text-xl font-bold mb-2">{project.title}</h3>
				<p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400 transition-colors">
					{projectLocalization}
				</p>
				<div className="mt-auto border-t pt-4">
					<a className="text-sm font-semibold text-primary flex flex-row cursor-pointer w-fit">
						{t("viewProject")}
						<ArrowUpRight className="mt-0.5 ml-0.5" size={18} />
					</a>
				</div>
			</CardContent>
		</Card>
	);
}
