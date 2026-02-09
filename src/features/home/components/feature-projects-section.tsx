import { Project } from "@/features/projects/types/project";
import { allProjects } from "@/lib/projects-data";
import CardProject from "./project-card";

export function FeatureProjectsSection() {
	const projects: Project[] = allProjects.slice(0,3);

	return (
		<div
			id="feature-projects"
			className="scroll-mt-24 w-full bg-slate-50 dark:bg-transparent border-t border-b border-border py-10 xl:py-15"
		>
			<div className="container mx-auto flex flex-col px-4">
				<h3 className="text-4xl font-extrabold tracking-tight md:text-5xl">
					Featured Projects
				</h3>
				<div className="flex flex-col w-full justify-between lg:flex-row">
					<p className="text-muted-foreground text-lg my-6">
						Showcasing engineering solutions.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project) => (
						<CardProject key={project.id} project={project}></CardProject>
					))}
				</div>
			</div>
		</div>
	);
}
