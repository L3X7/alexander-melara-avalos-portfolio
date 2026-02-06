import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Recycle } from "lucide-react";

export function FeatureProjectsSection() {
	return (
		<div
			id="feature-projects"
			className="scroll-mt-24 w-full bg-slate-50 dark:bg-transparent border-t border-b border-border md:pt-10 md:pb-15"
		>
			<div className="container mx-auto flex flex-col py-4 px-4">
				<h3 className="text-4xl font-extrabold tracking-tight md:text-5xl">
					Featured Projects
				</h3>
				<div className="flex flex-col w-full justify-between lg:flex-row">
					<p className="text-muted-foreground text-lg my-6">
						Showcasing engineering solutions.
					</p>
				</div>
				<div className="flex flex-col lg:flex-row gap-10">
					<Card className="group overflow-hidden lg:w-1/2 py-0">
						<div className="relative w-full overflow-hidden rounded-t-xl">
							<img
								src="/images/recycle.png"
								alt="Event cover"
								className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
						</div>
						<CardHeader>
							<CardAction>
								<Recycle />
							</CardAction>
							<CardTitle>Zirkl0s</CardTitle>
							<CardDescription>
								A Circular Economy Logistics Platform focusing
								on sustainability and resource recovery. Built
								to optimize routes for material collection and
								track lifecycle metrics.
							</CardDescription>
						</CardHeader>
						<CardContent className="pb-4">
							<div className="flex flex-wrap gap-2">
								<Badge variant="secondary" className="text-xs">
									NestJS
								</Badge>
								<Badge variant="secondary" className="text-xs">
									Next.js
								</Badge>
								<Badge variant="secondary" className="text-xs">
									PostgreSQL
								</Badge>
							</div>
						</CardContent>
					</Card>
					<Card className="lg:w-1/2 py-0">
						<div className="relative w-full overflow-hidden rounded-t-xl">
							<img
								src="/images/recycle.png"
								alt="Event cover"
								className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
						</div>
						<CardHeader>
							<CardAction>
								<Recycle />
							</CardAction>
							<CardTitle>Zirkl0s</CardTitle>
							<CardDescription>
								A Circular Economy Logistics Platform focusing
								on sustainability and resource recovery. Built
								to optimize routes for material collection and
								track lifecycle metrics.
							</CardDescription>
						</CardHeader>
						<CardContent className="pb-4">
							<div className="flex flex-wrap gap-2">
								<Badge variant="secondary" className="text-xs">
									NestJS
								</Badge>
								<Badge variant="secondary" className="text-xs">
									Next.js
								</Badge>
								<Badge variant="secondary" className="text-xs">
									PostgreSQL
								</Badge>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
