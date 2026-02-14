import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { KeyFeature } from "@/features/projects/types/key-feature";
import { Info } from "lucide-react";
import { useTranslations } from "next-intl";

interface KeyFeaturesProps {
  projectId: number;
  keyFeatures: KeyFeature[];
}

export function KeyFeatures({ projectId, keyFeatures }: KeyFeaturesProps) {
  const index = projectId - 1;
  const t = useTranslations(`ProjectSection.projects.${index}`);
  const c = useTranslations(`CommonSection`);

  return (
    <div className="group">
      <div className="flex items-baseline space-x-4 mb-4">
        <span className="text-primary font-mono text-sm">03</span>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {c("keyFeatures")}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {keyFeatures.map((_, index) => (
          <Card key={index} className="p-4 gap-3">
            <CardTitle className="flex flex-row gap-2">
              <Info className="pb-1.5" />
              <h3>{t(`keyFeatures.${index}.title`)}</h3>
            </CardTitle>
            <CardDescription>
              <p>{t(`keyFeatures.${index}.description`)}</p>
            </CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
}
