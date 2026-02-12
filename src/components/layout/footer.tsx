import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function Footer() {
	const t = useTranslations("FooterSection");
	return (
		<footer className="border-t border-border bg-background">
			<div className="container mx-auto mt-6 md:mt-12 px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
					<div className="flex flex-col gap-6">
						<h3 className="text-3xl font-bold tracking-tight">
							{t.rich("title", {
								highlight: (chunks) => (
									<span className="text-primary">
										{chunks}
									</span>
								),
							})}
						</h3>
						<p className="text-muted-foreground max-w-sm">
							{t.rich("description", {
								highlight: (chunks) => (
									<span className="text-foreground font-medium">
										{chunks}
									</span>
								),
							})}
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
								{t("navigationTitle")}
							</h4>
							<nav className="flex flex-col gap-3 text-muted-foreground">
								<Link
									href="#hero"
									className="hover:text-foreground transition-colors w-fit"
								>
									{t("links.hero")}
								</Link>
								<Link
									href="#feature-projects"
									className="hover:text-foreground transition-colors w-fit"
								>
									{t("links.projects")}
								</Link>
								<Link
									href="#tech-stack"
									className="hover:text-foreground transition-colors w-fit"
								>
									{t("links.techStack")}
								</Link>
							</nav>
						</div>
						<div className="flex flex-col gap-4">
							<h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
								{t("socialsTitle")}
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
					<p>{t("copyright")}</p>
					<p>{t("builtWith")}</p>
				</div>
			</div>
		</footer>
	);
}
