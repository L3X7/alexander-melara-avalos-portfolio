import { ProjectsList } from "@/features/projects/components/projects-list";
import { SearchFilter } from "@/features/projects/components/search-filter";
import { allProjects } from "@/lib/projects-data";

export default async function ProjectPage({
	searchParams,
}: {
	searchParams: Promise<{ query?: string; category?: string }>;
}) {
	const { query, category } = await searchParams;

	const searchQuery = query || "";
	const categoryFilter = category || "";

	const filterProjects = allProjects.filter((project) => {
		const matchesSearch = project.title
			.toLocaleLowerCase()
			.includes(searchQuery.toLocaleLowerCase());
		const matchesCategory =
			categoryFilter.toLocaleLowerCase() === "all" ||
			categoryFilter.toLocaleLowerCase() === ""
				? true
				: project.tags.includes(categoryFilter.toLocaleLowerCase());

		return matchesSearch && matchesCategory;
	});

	return (
		<div className="container mx-auto flex flex-col px-4 w-full py-10 md:pt-30 md:pb-20">
			<div className="flex flex-col gap-4">
				<h3 className="text-4xl font-extrabold tracking-tight md:text-5xl text-balance">
					Projects
				</h3>
				<p className="text-muted-foreground text-lg max-w-xl">
					A collection of my work in cloud architecture, DevOps
					automation, and full-stack engineering. Explore my open
					source contributions and professional case studies.
				</p>
			</div>
			<SearchFilter></SearchFilter>
			<ProjectsList projects={filterProjects}></ProjectsList>
		</div>
	);
}
