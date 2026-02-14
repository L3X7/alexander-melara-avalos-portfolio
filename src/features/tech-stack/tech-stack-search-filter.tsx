"use client";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function TechStackSearchFilter() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	function handleCategory(category: string) {
		const params = new URLSearchParams(searchParams);
		if (category) {
			params.set("category", category);
		} else {
			params.delete("category");
		}
		replace(`${pathname}?${params.toString()}`);
	}

	const categories = [
		"All",
		"Backend",
		"Cloud",
		"Database",
		"DevOps",
		"Frontend",
		"Mobile",
		"UI & Design",
	];

	return (
		<div className="w-full overflow-x-auto pb-2 mb-4">
			<div className="flex flex-row justify-center w-max min-w-full mt-12 gap-4 mb-1">
				{categories.map((cat, index) => (
					<Button
						key={index}
						variant={
							searchParams.get("category") === cat
								? "default"
								: "outline"
						}
						className="first:ml-1 last:mr-1 p-1.5 min-w-18 border active:border-white cursor-pointer"
						onClick={() => handleCategory(cat)}
					>
						{cat}
					</Button>
				))}
			</div>
		</div>
	);
}
