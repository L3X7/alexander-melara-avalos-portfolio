import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
import { CurrentFocus } from "../types/current-focus";
import { useTranslations } from "next-intl";

interface CurrentFocusItemProps {
  currentFocus: CurrentFocus;
}

export function CurrentFocusItem({ currentFocus }: CurrentFocusItemProps) {
  const t = useTranslations("AboutSection");

  return (
    <div className="flex flex-col">
      <h4 className="text-lg font-bold">
        {t(`currentFocusItems.${currentFocus.index}.title`)}
      </h4>
      <p className="pt-2 pb-6 text-sm dark:text-slate-400">
        {t(`currentFocusItems.${currentFocus.index}.subtitle`)}
      </p>
      <div className="flex flex-row justify-between">
        <p className="dark:text-slate-300">
          {t(`currentFocusItems.${currentFocus.index}.initialText`)}
        </p>
        <p className="font-bold">
          {t(`currentFocusItems.${currentFocus.index}.finalText`)}
        </p>
      </div>
      <Field>
        <Progress
          value={currentFocus.percentage}
          id="progress-upload"
        ></Progress>
        <FieldLabel htmlFor="progress-upload">
          <span className="ml-auto font-bold">{currentFocus.percentage}%</span>
        </FieldLabel>
      </Field>
    </div>
  );
}
