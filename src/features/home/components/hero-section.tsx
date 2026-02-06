import { Button } from "@/components/ui/button";
import { CodeWindow } from "./code-window";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
	return (
		<div id="hero" className="scroll-mt-24 container mx-auto flex flex-col lg:flex-row items-center gap-4 md:gap-12  px-4">
			{/* Left Column */}
			<div className="flex flex-col w-full lg:w-1/2 justify-center mt-4 md:mt-32 md:mb-32">
				<h3 className="text-4xl font-extrabold tracking-tight md:text-5xl text-balance">
					Solutions for the{" "}
					<span className="text-primary">future.</span>
				</h3>
				<p className="text-muted-foreground text-lg max-w-xl my-6 leading-relaxed mb-8 text-ju">
					I specialize in building robust cloud infrastructure and
					high-performance applications. From complex backends to
					seamless user experiences, I engineer software that grows
					with your business.
				</p>
				<div className="flex flex-col sm:flex-row gap-3">
					<Button size="lg" className="w-full sm:w-auto gap-2">
						View Projects <ArrowRight className="h-4 w-4 mt-1" />
					</Button>
					<Button className="w-full sm:w-auto" variant="outline" size="lg">
						Let's Talk	
					</Button>
				</div>
			</div>

			{/* Right Column */}
			<div className="flex w-full lg:w-1/2 justify-center lg:justify-end mt-12 mb-12 md:mt-32 md:mb-32">
				<CodeWindow className="w-full dark:shadow-emerald-500/20" />
			</div>
		</div>
	);
}
