import { TechStackList } from "@/features/tech-stack/tech-stack-list";
import { TechStackSearchFilter } from "@/features/tech-stack/tech-stack-search-filter";
import { allTechStack } from "@/lib/tech-stack-data";
import { getTranslations } from "next-intl/server";

export default async function TechStackPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  const categoryFilter = category || "";

  const t = await getTranslations("TechStackSection");

  const filteredTechs = allTechStack
    .filter((tech) => {
      const matchesCategory =
        categoryFilter.toLocaleLowerCase() === "all" ||
        categoryFilter.toLocaleLowerCase() === ""
          ? true
          : tech.category.includes(categoryFilter.toLocaleLowerCase());

      return matchesCategory;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="container mx-auto flex flex-col px-4 w-full py-10 md:pt-30 md:pb-20">
      <div className="flex flex-col gap-4 justify-center text-center">
        <h3 className="text-4xl font-extrabold tracking-tight md:text-5xl text-balance">
          {t("title")}
        </h3>
        <p className="text-muted-foreground text-lg">
          {t.rich("subtitle", {
            highlight: (chunks) => (
              <span className="text-foreground font-medium">{chunks}</span>
            ),
          })}
        </p>
      </div>
      <TechStackSearchFilter></TechStackSearchFilter>
      <TechStackList techs={filteredTechs}></TechStackList>
    </div>
  );
}
