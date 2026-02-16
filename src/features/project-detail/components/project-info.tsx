import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

interface ProjectInfoProps {
  role: string;
  timeline: string;
  tags: string[];
}

export function ProjectInfo({ role, timeline, tags }: ProjectInfoProps) {
  const t = useTranslations(`ProjectSection`);
  return (
    <div className="sticky top-22 space-y-6">
      <Card>
        <CardTitle className="px-6">
          <h3 className="text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-white/10 pb-3">
            {t("projectInfo")}
          </h3>
        </CardTitle>
        <CardContent className="flex flex-col gap-5">
          <div>
            <h4 className="text-sm font-medium text-zinc-500 mb-1">
              {t("role")}
            </h4>
            <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-200">
              {role}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-zinc-500 mb-1">
              {t("timeline")}
            </h4>
            <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-200">
              {timeline}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-zinc-500 mb-1.5">
              {t("techStack")}
            </h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} className="px-2 py-1" variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
