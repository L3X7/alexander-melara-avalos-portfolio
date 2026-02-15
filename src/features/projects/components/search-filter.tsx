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
      params.set("search", term);
    } else {
      params.delete("search");
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

  const categories = ["All", "Backend", "Cloud", "Frontend", "Mobile"];

  return (
    <div className="gap-4 mt-12 mb-8">
      <div className="lg:bg-border rounded-lg flex flex-col lg:flex-row lg:justify-between gap-4 p-3 w-full">
        <InputGroup className="lg:max-w-xs shadow-none">
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            placeholder={`${t("search")}...`}
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get("")?.toString()}
          />
        </InputGroup>
        <div className="w-full overflow-x-auto">
          <div className="flex flex-row lg:justify-end gap-2">
            {categories.map((cat) => (
              <Button
                className="border-2 border-transparent active:border-white"
                key={cat}
                variant={
                  searchParams.get("category") === cat ? "default" : "outline"
                }
                onClick={() => handleCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
