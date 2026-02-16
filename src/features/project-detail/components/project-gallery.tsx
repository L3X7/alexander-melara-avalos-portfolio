import { ImageProject } from "@/features/projects/types/image-project";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface ProjectGalleryProps {
  images: ImageProject[];
  imagesNumberOrder: string;
}

export function ProjectGallery({
  images,
  imagesNumberOrder,
}: ProjectGalleryProps) {
  const t = useTranslations(`CommonSection`);

  const typeStyles = {
    mobile: "md:col-span-1 md:row-span-2 aspect-[9/16]", // Tall & Narrow
    desktop: "md:col-span-2 md:row-span-1 aspect-video", // Wide & Short
  };

  return (
    <div>
      <div className="flex items-baseline space-x-4 mb-8">
        <span className="text-primary font-mono text-sm">
          {imagesNumberOrder}
        </span>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {t("interfaceGallery")}
        </h2>
        <div className="h-px bg-zinc-300  dark:bg-zinc-700 grow ml-6"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "relative group overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-900",
              typeStyles[image.type as keyof typeof typeStyles] ||
                typeStyles.desktop ||
                typeStyles.mobile,
            )}
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
            <Image
              fill
              alt={image.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              data-alt={image.title}
              src={image.url}
            />
            <div className="absolute bottom-4 left-4 z-20">
              <span className="text-xs font-mono text-zinc-400 bg-black/50 backdrop-blur px-2 py-1 rounded border border-primary/20">
                {image.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
