"use client";

import { ImageProject } from "@/features/projects/types/image-project";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProjectGalleryProps {
  images: ImageProject[];
  imagesNumberOrder: string;
}

export function ProjectGallery({
  images,
  imagesNumberOrder,
}: ProjectGalleryProps) {
  const t = useTranslations(`CommonSection`);
  const [selectedImage, setSelectedImage] = useState<ImageProject | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const typeStyles = {
    mobile: "md:col-span-1 md:row-span-2 aspect-[9/16]", // Tall & Narrow
    desktop: "md:col-span-2 md:row-span-1 aspect-video", // Wide & Short
  };

  return (
    <>
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
            <motion.div
              key={index}
              layoutId={`image-${image.url}`}
              onClick={() => setSelectedImage(image)}
              className={cn(
                "relative group overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-900 cursor-pointer",
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
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-4 right-4 text-white/70 hover:text-white z-50 p-2 bg-black/50 rounded-full cursor-pointer">
              <X size={32} />
            </button>
            <motion.div
              layoutId={`image-${selectedImage.url}`}
              className="relative w-full h-full max-w-7xl max-h-[90vh] aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.url}
                alt={selectedImage.title}
                fill
                className="object-contain"
                quality={100}
                priority
              />
              <div className="absolute bottom-0 left-0 w-full p-4 text-center">
                <p className="text-zinc-300 font-mono text-sm bg-black/60 inline-block px-3 py-1 rounded-full">
                  {selectedImage.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
