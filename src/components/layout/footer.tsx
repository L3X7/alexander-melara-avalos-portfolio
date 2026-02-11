import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="border-t border-border bg-background">
			<div className="container mx-auto mt-6 md:mt-12 px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
					<div className="flex flex-col gap-6">
						<h3 className="text-3xl font-bold tracking-tight">
							Let's build something{" "}
							<span className="text-primary">scalable.</span>
						</h3>
						<p className="text-muted-foreground max-w-sm">
							Ready to modernize your infrastructure? Let's turn
							complex engineering into a{" "}
							<span className="text-foreground font-medium">
								competitive advantage
							</span>
							.
						</p>
						<a
							className="inline-flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors"
							href="mailto:lexmelara@gmail.com"
						>
							lexmelara@gmail.com
							<ArrowRight className="h-4 w-4 mt-1" />
						</a>
					</div>
					<div className="grid grid-cols-2 gap-8">
						<div className="flex flex-col gap-4">
							<h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
								Navigation
							</h4>
							<nav className="flex flex-col gap-3 text-muted-foreground">
								<Link
									href="#hero"
									className="hover:text-foreground transition-colors w-fit"
								>
									Hero
								</Link>
								<Link
									href="#feature-projects"
									className="hover:text-foreground transition-colors w-fit"
								>
									Projects
								</Link>
								<Link
									href="#tech-stack"
									className="hover:text-foreground transition-colors w-fit"
								>
									Tech Stack
								</Link>
								<Link
									href="#about"
									className="hover:text-foreground transition-colors w-fit"
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
									href="https://github.com/L3X7"
									target="_blank"
									rel="noreferrer"
									className="hover:text-foreground transition-colors w-fit"
								>
									GitHub
								</a>
								<a
									href="https://www.linkedin.com/in/lexmelara91"
									target="_blank"
									rel="noreferrer"
									className="hover:text-foreground transition-colors w-fit"
								>
									LinkedIn
								</a>
							</nav>
						</div>
					</div>
				</div>
			</div>
			<div className="border-t border-border/40 text-sm text-muted-foreground">
				<div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 py-4 px-4">
					<p>© 2026 Alex Melara. All rights reserved.</p>
					<p>Built with Next.js & Tailwind CSS</p>
				</div>
			</div>
		</footer>
	);
}
