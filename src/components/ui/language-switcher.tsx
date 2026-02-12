import { usePathname, useRouter } from "@/i18n/routing";
import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { Button } from "./button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./dropdown-menu";

export function LanguageSwitcher() {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const onSelectChange = (newLocale: string) => {
		router.replace(pathname, { locale: newLocale });
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size={"icon"} suppressHydrationWarning className="cursor-pointer">
					<Languages className="h-[1.2rem] w-[1.2rem]" />
					<span className="sr-only">Switch language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem
					onClick={() => onSelectChange("en")}
					className={locale == "en" ? "bg-accent" : ""}
				>
					🇺🇸 English
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => onSelectChange("es")}
					className={locale == "es" ? "bg-accent" : ""}
				>
					🇪🇸 Español
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
