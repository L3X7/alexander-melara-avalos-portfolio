import { DetailTopic } from "@/features/projects/types/detail-topic";
import { useTranslations } from "next-intl";

interface DetailTopicsProps {
  projectId: number;
  detailTopics: DetailTopic[];
}

export function DetailTopics({ projectId, detailTopics }: DetailTopicsProps) {
  const index = projectId - 1;
  const t = useTranslations(`ProjectSection.projects.${index}`);

  return (
    <div className="flex flex-col gap-6">
      {detailTopics.map((_, index) => (
        <div key={index} className="group">
          <div className="flex items-baseline space-x-4 mb-2">
            <span className="text-primary font-mono text-sm">
              {t(`detailTopics.${index}.number`)}
            </span>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              {t(`detailTopics.${index}.title`)}
            </h2>
          </div>
          <div className="pl-6 border-l-2 border-transparent group-hover:border-primary/50 transition-colors duration-500">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t(`detailTopics.${index}.description`)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
