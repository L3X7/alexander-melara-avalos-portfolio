"use client";

import { allNavbarOptions } from "@/lib/navbar-data";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";
import { MobileNav } from "../ui/mobile-nav";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { ThemeToggle } from "../ui/theme-toggle";
import { Link, usePathname } from "@/i18n/routing";
import LanguageSwitcher from "../ui/language-switcher";
import { useTranslations } from "next-intl";

export function Navbar() {
	const t = useTranslations('Navbar');
	const pathname = usePathname();
	const links = allNavbarOptions;

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
						{t("pageTitle")}
					</Link>
				</div>

				<NavigationMenu className="hidden md:flex">
					<NavigationMenuList className="gap-12">
						{links.map((item) => (
							<NavigationMenuItem key={item.key}>
								<NavigationMenuLink
									asChild
									active={pathname === item.href}
								>
									<Link
										href={item.href}
										className={cn(
											navigationMenuTriggerStyle(),
											pathname === item.href &&
												"bg-accent text-accent-foreground",
										)}
									>
										{t(item.localeKey)}
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>

				<div className="flex flex-row">
					<div className=" flex flex-row gap-0.5 mr-3 md:mr-0">
						<LanguageSwitcher />
						<ThemeToggle />
					</div>

					<div className="md:hidden">
						<MobileNav links={links} />
					</div>
				</div>
			</div>
		</header>
	);
}
