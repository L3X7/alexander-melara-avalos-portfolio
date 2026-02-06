import { Button } from "@/components/ui/button";
import { CodeWindow } from "./code-window";

export function HeroSection() {
	return (
		<div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
			{/* Left Column */}
			<div className="flex flex-col w-full lg:w-1/2 justify-center md:mt-32 md:mb-32">
				<h3 className="text-4xl font-extrabold tracking-tight md:text-5xl">
					Solutions for the{" "}
					<span className="text-primary">future.</span>
				</h3>
				<p className="text-muted-foreground text-lg max-w-md my-6">
					Ready to transform your logistics and cloud infrastructure?
					Let&apos;s discuss how we can create value through efficient
					code.
				</p>
				<div className="flex flex-row gap-2">
					<Button>View Projects</Button>
					<Button variant="outline">Contact me</Button>
				</div>
			</div>

			{/* Right Column */}
			<div className="flex w-full lg:w-1/2 justify-center lg:justify-end md:mt-32 md:mb-32">
				<CodeWindow className="w-full shadow-emerald-500/10" />
			</div>
		</div>
	);
}
