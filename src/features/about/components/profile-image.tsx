"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ProfileImage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-slate-800 dark:border-slate-200 shadow-xl bg-zinc-200 dark:bg-zinc-800">
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-zinc-300 dark:bg-zinc-700" />
      )}
      <Image
        src="/images/about-profile.jpg"
        alt="Profile Picture"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 33vw"
        onLoad={() => setIsLoading(false)}
        className={cn(
          "object-cover transition-all duration-700 ease-in-out",
          isLoading
            ? "scale-110 blur-xl grayscale opacity-0"
            : "scale-100 blur-0 grayscale-0 opacity-100",
        )}
      />
    </div>
  );
}
