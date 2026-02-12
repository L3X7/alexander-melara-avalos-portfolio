import { BadgeLevelTechStack } from "@/components/ui/badge-level";
import { Card, CardContent } from "@/components/ui/card";
import { IconMask } from "@/components/ui/icon-mask";
import { TruncatedTooltip } from "@/components/ui/truncated-tooltip";
import { useTranslations } from "next-intl";
import { Tech } from "./types/tech";

interface TechStackCardProps {
	tech: Tech;
}

export function TechStackCard({ tech }: TechStackCardProps) {
	const t = useTranslations("TechStackSection");

	return (
		<Card className="hover:shadow-xl hover:shadow-primary/5 dark:hover:border-primary/500">
			<CardContent className="flex flex-col gap-4">
				<div className="flex flex-row justify-between">
					<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/50">
						{tech.iconSrc && tech.iconClass ? (
							<IconMask
								src={tech.iconSrc}
								className={tech.iconClass}
							/>
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
					<BadgeLevelTechStack
						level={tech.level}
					></BadgeLevelTechStack>
				</div>
				<div className="flex flex-col">
					<h3 className="text-sm font-bold text-foreground">
						{tech.name}
					</h3>
					<TruncatedTooltip
						className="text-xs text-left text-muted-foreground line-clamp-1"
						text={t(`cards.${tech.id}.description`)}
					></TruncatedTooltip>
				</div>
			</CardContent>
		</Card>
	);
}
