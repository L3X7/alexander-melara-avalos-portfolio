import { Button } from "@/components/ui/button";
import { CodeWindow } from "./code-window";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function HeroSection() {
	const t = await getTranslations('HomePage');
	return (
		<div
			id="hero"
			className="scroll-mt-24 container mx-auto flex flex-col md:flex-row items-center py-10 md:py-30 gap-8 md:gap-0 px-4"
		>
			{/* Left Column */}
			<div className="flex flex-col w-full lg:w-1/2 justify-center">
				<h3 className="text-4xl font-extrabold tracking-tight md:text-5xl text-balance">
					Solutions for the{" "}
					<span className="text-primary">future.</span>
				</h3>
				<p className="text-muted-foreground text-lg max-w-xl my-6 leading-relaxed mb-8">
					{t('heroSection.heroSubtitle')}
				</p>
				<div className="flex flex-col sm:flex-row gap-3">
					<Button size="lg" className="w-full sm:w-auto gap-2 cursor-pointer">
						View Projects <ArrowRight className="h-4 w-4 mt-1" />
					</Button>
					<Button
						className="w-full sm:w-auto cursor-pointer"
						variant="outline"
						size="lg"
					>
						Let&apos;s Talk
					</Button>
				</div>
			</div>

			{/* Right Column */}
			<div className="flex w-full lg:w-1/2 justify-center lg:justify-end">
				<CodeWindow className="w-full dark:shadow-emerald-500/20" />
			</div>
		</div>
	);
}
