import { Badge } from "./badge";

export function BadgeLevelTechStack({ level }: { level: string }) {
	const getLevelBadgeParams = (level: string): string => {
		switch (level.toLowerCase()) {
			case "expert":
			case "advanced":
				return "bg-emerald-500/15 text-emerald-500 border-emerald-500/20";

			case "intermediate":
			case "proficient":
				return "bg-blue-500/15 text-blue-500 border-blue-500/20";

			case "basic":
			case "familiar":
				return "bg-zinc-500/15 text-zinc-400 border-zinc-500/20";

			default:
				return "bg-zinc-500/15 text-zinc-400 border-zinc-500/20";
		}
	};

	return (
		<Badge variant="outline" className={getLevelBadgeParams(level)}>
			{level}
		</Badge>
	);
}
