import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge, ExternalLink, Recycle } from "lucide-react";

export function FeatureProjectsSection() {
	return (
		<div className="w-full bg-slate-50 dark:bg-transparent border-t border-b border-border md:pt-10 md:pb-15">
			<div className="container mx-auto flex flex-col px-4 py-4">
				<h3 className="text-4xl font-extrabold tracking-tight md:text-5xl">
					Feature Projects
				</h3>
				<div className="flex flex-col w-full justify-between lg:flex-row">
					<p className="text-muted-foreground text-lg my-6">
						Showcasing engineering solutions.
					</p>
					<a
						className="my-6 inline-flex items-center gap-2 hover:text-primary transition-colors"
						target="_blank"
						href="https://github.com/L3X7"
						rel="noopener noreferrer"
					>
						View GitHub <ExternalLink className="h-4 w-4" />
					</a>
				</div>
				<div className="flex flex-col lg:flex-row gap-10">
					<Card className="group overflow-hidden lg:w-1/2 py-0">
						<div className="relative overflow-hidden rounded-t-xl">
							<img
								src="/images/recycle.png"
								alt="Event cover"
								className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
						</div>
						<CardHeader className="mb-4 mt-4">
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
					</Card>
					<Card className="lg:w-1/2 py-0">
						<img
							src="https://avatar.vercel.sh/shadcn1"
							alt="Event cover"
							className="relative aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40 rounded-t-xl"
						/>
						<CardHeader>
							<CardAction>
								<p>Badge</p>
							</CardAction>
							<CardTitle>Design systems meetup</CardTitle>
							<CardDescription>
								A practical talk on component APIs,
								accessibility, and shipping faster.
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</div>
		</div>
	);
}
