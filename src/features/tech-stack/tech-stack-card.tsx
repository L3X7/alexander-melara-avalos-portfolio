import { Card, CardContent } from "@/components/ui/card";
import { Tech } from "./types/tech";
import { IconMask } from "@/components/ui/icon-mask";
import { Badge } from "@/components/ui/badge";

interface TechStackCardProps {
	tech: Tech;
}

export default function TechStackCard({ tech }: TechStackCardProps) {
	return (
		<Card className="hover:shadow-xl hover:shadow-primary/5 dark:hover:border-primary/500">
			<CardContent className="flex flex-col gap-4">
				<div className="flex flex-row justify-between">
					<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/50">
						{tech.iconSrc && tech.iconClass ? (
							<IconMask src={tech.iconSrc} className={tech.iconClass} />
						) : (
							<span
								className="text-xs font-bold text-muted-foreground"
								style={{
									color: tech.nameTextColor,
								}}
							>
								{tech.name}
							</span>
						)}
					</div>
					<Badge>{tech.level}</Badge>
				</div>
				<div className="flex flex-col">
					<h3 className="text-sm font-bold text-foreground">
						{tech.name}
					</h3>
					<p className="text-xs text-muted-foreground line-clamp-1">
						{tech.description}
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
