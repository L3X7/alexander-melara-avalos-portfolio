import { TechStackCard } from "./tech-stack-card";
import { Tech } from "./types/tech";

interface TechStackListProps {
	techs: Tech[];
}

export function TechStackList({ techs }: TechStackListProps) {
	if (techs.length === 0) {
		return (
			<div className="text-center py-20 text-muted-foreground">
				No techs found matching your criteria.
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
			{techs.map((tech, index) => (
				<TechStackCard key={index} tech={tech}></TechStackCard>
			))}
		</div>
	);
}
