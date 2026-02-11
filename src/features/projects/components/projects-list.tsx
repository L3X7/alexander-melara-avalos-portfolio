import { Project } from "../types/project";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import ProjectCard from "@/features/home/components/project-card";

interface ProjectsListProps {
	projects: Project[];
}

export function ProjectsList({ projects }: ProjectsListProps) {
	if (projects.length === 0) {
		return (
			<div className="text-center py-20 text-muted-foreground">
				No projects found matching your criteria.
			</div>
		);
	}

	return (
		<div className="flex flex-col w-full">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project}></ProjectCard>
				))}
			</div>
			{projects.length > 6 && (
				<div className="flex flex-row justify-center">
					<Button>
						Load more projects
						<ArrowDown />
					</Button>
				</div>
			)}
		</div>
	);
}
