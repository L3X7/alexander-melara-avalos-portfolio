import { TechStackList } from "@/features/tech-stack/tech-stack-list";
import { TechStackSearchFilter } from "@/features/tech-stack/tech-stack-search-filter";
import { allTechStack } from "@/lib/tech-stack-data";

export default async function TechStackPage({
	searchParams,
}: {
	searchParams: Promise<{ category?: string }>;
}) {
	const { category } = await searchParams;

	const categoryFilter = category || "";

	const filteredTechs = allTechStack.filter((tech) => {
		const matchesCategory =
			categoryFilter.toLocaleLowerCase() === "all" ||
			categoryFilter.toLocaleLowerCase() === ""
				? true
				: tech.category.includes(categoryFilter.toLocaleLowerCase());

		return matchesCategory;
	});

	return (
		<div className="container mx-auto flex flex-col px-4 w-full py-10 xl:py-15">
			<div className="flex flex-col gap-4 justify-center text-center">
				<h3 className="text-4xl font-extrabold tracking-tight md:text-5xl text-balance">
					Technologies & Tools
				</h3>
				<p className="text-muted-foreground text-lg">
					My preferred stack for building scalable, high-performance
					applications. Categorized by domain and proficiency.
				</p>
			</div>
			<TechStackSearchFilter></TechStackSearchFilter>
			<TechStackList techs={filteredTechs}></TechStackList>
		</div>
	);
}
