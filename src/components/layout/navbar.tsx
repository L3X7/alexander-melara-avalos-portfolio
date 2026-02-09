import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Terminal } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "../ui/theme-toggle";

const links: {
	key: string;
	title: string;
	href: string;
	description: string;
}[] = [
	{
		key: "home",
		title: "Home",
		href: "/",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		key: "projects",
		title: "Projects",
		href: "/projects",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		key: "tech-stack",
		title: "Tech stack",
		href: "/tech-stack",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
		{
		key: "about",
		title: "About",
		href: "/about",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
];

export function Navbar() {
	return (
		<header className="sticky top-0 w-full border-b border-border/40 bg-background/45 backdrop-blur supports-backdrop-filter:bg-background/60 z-10">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				<div className="flex items-center gap-2">
					<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
						<Terminal className="h-5 w-5" />
					</div>
					<Link
						href="/"
						className="text-lg font-bold tracking-tight text-foreground"
					>
						Alex's Portfolio
					</Link>
				</div>

				<NavigationMenu className="hidden md:flex">
					<NavigationMenuList className="gap-12">
						{links.map((item) => (
							<NavigationMenuItem key={item.key}>
								<NavigationMenuLink asChild>
									<Link
										href={item.href}
										className={navigationMenuTriggerStyle()}
									>
										{item.title}
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>

				<div className="flex items-center gap-4">
					<Button
						variant="default"
						className="hidden md:inline-flex font-semibold shadow-lg"
						size="sm"
					>
						Contact Me
					</Button>

					<ThemeToggle></ThemeToggle>
				</div>
			</div>
		</header>
	);
}
