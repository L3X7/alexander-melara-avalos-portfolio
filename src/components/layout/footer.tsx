import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-border bg-background text-foreground">
			<div className="container mx-auto flex flex-col gap-10 py-12 px-4 md:flex-row md:justify-between">
				<div className="flex flex-col gap-4 md:max-w-xl">
					<h3 className="text-4xl font-extrabold tracking-tight md:text-5xl">
						Let&apos;s build something{" "}
						<span className="text-primary">scalable.</span>
					</h3>
					<p className="text-muted-foreground text-lg max-w-md">
						Ready to transform your logistics and cloud
						infrastructure? Let&apos;s discuss how we can create
						value through efficient code.
					</p>
					<a
						href="mailto:hello@lexmelara@gmail.com"
						className="group mt-2 inline-flex items-center gap-2 text-lg font-bold text-primary transition-colors hover:text-primary/80"
					>
						lexmelara@gmail.com
						<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
					</a>
				</div>
				<div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
					<div className="flex flex-col gap-4">
						<h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
							Navigation
						</h4>
						<nav className="flex flex-col gap-3 text-muted-foreground">
							<Link
								href="/"
								className="hover:text-foreground transition-colors"
							>
								Home
							</Link>
							<Link
								href="#projects"
								className="hover:text-foreground transition-colors"
							>
								Projects
							</Link>
							<Link
								href="#stack"
								className="hover:text-foreground transition-colors"
							>
								Tech Stack
							</Link>
							<Link
								href="#about"
								className="hover:text-foreground transition-colors"
							>
								About
							</Link>
						</nav>
					</div>
					<div className="flex flex-col gap-4">
						<h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
							Socials
						</h4>
						<nav className="flex flex-col gap-3 text-muted-foreground">
							<a
								href="https://github.com"
								target="_blank"
								rel="noreferrer"
								className="hover:text-foreground transition-colors"
							>
								GitHub
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noreferrer"
								className="hover:text-foreground transition-colors"
							>
								LinkedIn
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noreferrer"
								className="hover:text-foreground transition-colors"
							>
								Twitter / X
							</a>
						</nav>
					</div>
				</div>
			</div>

			<div className="border-t border-border bg-muted/20 py-6">
				<div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:flex-row text-center md:text-left">
					<small className="text-sm text-muted-foreground">
						&copy; {currentYear} Alex&apos;s portafolio. All rights reserved.
					</small>

					<small className="text-sm text-muted-foreground">
						Built with Next.js & Tailwind CSS
					</small>
				</div>
			</div>
		</footer>
	);
}
