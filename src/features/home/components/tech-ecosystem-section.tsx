import { TechCard } from "@/components/ui/tech-card";
import { Tech } from "@/features/tech-stack/types/tech";
import { allTechStack } from "@/lib/tech-stack-data";
import { useTranslations } from "next-intl";

export function TechEcosystemSection() {
	const t = useTranslations("HomePage");
	const techs = allTechStack;

	const categories = [
		{
			id: "cloud-devops",
			label: "CLOUD & DEVOPS",
			filter: (tech: Tech) =>
				["cloud", "devops"].includes(tech.category.toLowerCase()),
		},
		{
			id: "backend",
			label: "BACKEND",
			filter: (tech: Tech) => tech.category.toLowerCase() === "backend",
		},
		{
			id: "frontend",
			label: "FRONTEND",
			filter: (tech: Tech) => tech.category.toLowerCase() === "frontend",
		},
		{
			id: "mobile",
			label: "MOBILE",
			filter: (tech: Tech) => tech.category.toLowerCase() === "mobile",
		},
	];

	return (
		<div
			id="tech-stack"
			className="scroll-mt-24 container mx-auto flex flex-col w-full py-10 xl:py-15 px-4"
		>
			<h3 className="text-4xl font-extrabold tracking-tight md:text-5xl">
				{t("coreTechnologiesSection.coreTechnologiesTitle")}
			</h3>
			<p className="text-muted-foreground text-lg leading-relaxed my-6">
				{t.rich("coreTechnologiesSection.coreTechnologiesSubtitle", {
					highlight: (chunks) => (
						<span className="text-foreground font-medium">
							{chunks}
						</span>
					),
				})}
			</p>
			{categories.map((category) => {
				const filteredTechs = techs
					.filter(category.filter)
					.sort((a, b) => a.name.localeCompare(b.name));
				if (filteredTechs.length == 0) return null;

				return (
					<div key={category.id} className="mt-6 mb-8">
						<div className="flex items-center gap-4 mb-6">
							<div className="h-px w-12 bg-slate-400 dark:bg-slate-600" />
							<span className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
								{category.label}
							</span>
						</div>

						<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
							{filteredTechs.map((tc) => {
								if (
									tc.iconSrc === undefined ||
									tc.iconSrc === ""
								) {
									return (
										<TechCard
											key={tc.name}
											name={tc.name}
											description={tc.description}
											nameTextColor={tc.nameTextColor}
										/>
									);
								}

								return (
									<TechCard
										key={tc.name}
										name={tc.name}
										description={tc.description}
										iconSrc={tc.iconSrc}
										iconClass={tc.iconClass}
									/>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}
