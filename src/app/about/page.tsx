import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import { CurrentFocusItem } from "@/features/about/components/current-focus-item";
import { ExperienceTimeline } from "@/features/about/components/experience-timeline";
import { allCurrentFocus } from "@/lib/current-focus-data";
import { allExperiences } from "@/lib/experiences-data";
import { BookUser, Download, Mail } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
	const experiences = allExperiences;
	const currentFocusItems = allCurrentFocus;

	return (
		<div className="container mx-auto flex flex-col px-4 py-10  md:pt-30 md:pb-20">
			<div className="flex flex-col items-center gap-4">
				<div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-slate-800 shadow-xl">
					<Image
						src="/images/profile.jpg" // or your external URL
						alt="Profile Picture"
						fill // This makes the image fill the parent div
						className="object-cover" // This creates the "zoom to fill" effect
					/>
				</div>
				<h3 className="text-4xl font-extrabold tracking-tight md:text-5xl text-balance text-center">
					Alexander Melara A.
				</h3>
				<p className="text-muted-foreground text-lg max-w-xlleading-relaxed">
					Full Stack Developer
				</p>
				<div className="flex flex-row gap-2">
					<Button>
						<Download />
						Download Resume
					</Button>
					<Button>
						<Mail /> Email Me
					</Button>
				</div>
			</div>
			<div className="flex flex-col sm:flex-row gap-8 sm:gap-10 pt-8">
				<div className="sm:w-3/5 flex flex-col">
					<h3 className="flex-flex-row mb-8 text-lg font-bold">
						<BookUser className="inline" />{" "}
						<span>From Junior to Semi-Senior</span>
					</h3>
					<Card>
						<CardDescription className="px-4">
							<p>
								My journey has been defined by a passion for
								scalable infrastructure and sustainable tech.
								Starting as a junior dev tinkering with
								monolithic apps, I&apos;ve navigated through the
								complexities of cloud engineering to master
								DevOps practices. Today, I build systems that
								are not just efficient, but environmentally
								conscious.
							</p>
						</CardDescription>
					</Card>
					<div>
						<ExperienceTimeline
							experiences={experiences}
						></ExperienceTimeline>
					</div>
				</div>
				<div className="sm:w-2/5 flex flex-col">
					<Card>
						<CardHeader>
							<h3 className="text-xl font-bold tracking-wider">
								CURRENT FOCUS
							</h3>
						</CardHeader>
						<CardContent className="flex flex-col gap-4">
							{currentFocusItems.map((item, index) => (
								<CurrentFocusItem
									key={index}
									currentFocus={item}
								></CurrentFocusItem>
							))}
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
