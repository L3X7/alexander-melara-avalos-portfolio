import { ProjectsList } from "@/features/projects/components/projects-list";
import { SearchFilter } from "@/features/projects/components/search-filter";
import { allProjects } from "@/lib/projects-data";
import { getTranslations } from "next-intl/server";

export default async function ProjectPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; category?: string }>;
}) {
  const { search, category } = await searchParams;

  const t = await getTranslations("ProjectSection");

  const searchTerm = (search || "").toLowerCase().trim();
  const activeCategory = (category || "all").toLowerCase();

  const filterProjects = allProjects.filter((project) => {
    const matchesSearch =
      !searchTerm ||
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm);

    const matchesCategory =
      activeCategory === "all" ||
      activeCategory === "" ||
      project.tags.some((tag) => tag.toLowerCase() === activeCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto flex flex-col px-4 w-full py-10 md:pt-30 md:pb-20">
      <div className="flex flex-col gap-4">
        <h3 className="text-4xl font-extrabold tracking-tight md:text-5xl text-balance">
          {t("title")}
        </h3>
        <p className="text-muted-foreground text-lg max-w-xl">
          {t("description")}
        </p>
      </div>
      <SearchFilter />
      <ProjectsList projects={filterProjects} />
    </div>
  );
}
