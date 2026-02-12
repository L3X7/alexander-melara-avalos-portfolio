import { usePathname } from "next/navigation";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./sheet";
import { useState } from "react";
import { Button } from "./button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { NavbarOption } from "@/features/home/components/types/navbar-option";
import { cn } from "@/lib/utils";

interface MobileNavProps {
	links: NavbarOption[];
}

export function MobileNav({ links }: MobileNavProps) {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="md:hidden" suppressHydrationWarning>
					<MenuIcon className="w-6! h-6!" />
					<span className="sr-only">Toggle menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="w-60 sm:w-75">
				<SheetHeader>
					<SheetTitle className="text-left">
						Navigation Menu
					</SheetTitle>
				</SheetHeader>
				<div className="flex flex-col gap-1 mt-8">
					{links.map((item, index) => (
						<Link
							className={cn(
								"block px-4 text-sm font-medium transition-colors hover:text-primary",
								pathname === item.href
									? "text-primary bg-primary/10 rounded-md"
									: "text-muted-foreground",
							)}
							key={index}
							href={item.href}
						>
							{item.title}
						</Link>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
}
