"use client";

import { Button } from "@/components/ui/button";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function SearchFilter() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const t = useTranslations("CommonSection");

	function handleSearch(term: string) {
		const params = new URLSearchParams(searchParams);
		if (term) {
			params.set("query", term);
		} else {
			params.delete("query");
		}
		replace(`${pathname}?${params.toString()}`);
	}

	function handleCategory(category: string) {
		const params = new URLSearchParams(searchParams);
		if (category) {
			params.set("category", category);
		} else {
			params.delete("category");
		}
		replace(`${pathname}?${params.toString()}`);
	}

	const categories = ["All", "Mobile", "Backend"];

	return (
		<div className="flex flex-col sm:flex-row gap-4 mt-12 mb-8">
			<div className="bg-border rounded-lg flex flex-row justify-between gap-4 p-3 w-full">
				<InputGroup className="max-w-xs shadow-none">
					<InputGroupAddon>
						<SearchIcon />
					</InputGroupAddon>
					<InputGroupInput
						placeholder={`${t("search")}...`}
						onChange={(e) => handleSearch(e.target.value)}
						defaultValue={searchParams.get("")?.toString()}
					/>
				</InputGroup>
				<div className="flex flex-row gap-2">
					{categories.map((cat) => (
						<Button
							className="border-2 border-transparent active:border-white"
							key={cat}
							variant={
								searchParams.get("category") === cat
									? "default"
									: "outline"
							}
							onClick={() => handleCategory(cat)}
						>
							{cat}
						</Button>
					))}
				</div>
			</div>
		</div>
	);
}
