import { Card, CardContent } from "@/components/ui/card";
import { IconMask } from "@/components/ui/icon-mask";

interface TechCardProps {
  name: string;
  description?: string;
  iconClass?: string;
  iconSrc?: string;
  nameTextColor?: string;
}

export function TechCard({
  name,
  description,
  iconClass,
  iconSrc,
  nameTextColor,
}: TechCardProps) {
  return (
    <Card className="group border-border/50 bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300 py-0">
      <CardContent className="flex flex-row items-center gap-4 p-2">
        {/* The Icon */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/50">
          {iconSrc && iconClass ? (
            <IconMask src={iconSrc} className={iconClass} />
          ) : (
            <span
              className="text-xs font-bold text-muted-foreground"
              style={{
                color: nameTextColor,
              }}
            >
              {name}
            </span>
          )}
        </div>

        {/* The Text */}
        <div className="flex flex-col">
          <h4 className="text-sm font-bold text-foreground">{name}</h4>
          {/* <p className="text-xs text-muted-foreground line-clamp-1">
						{description}
					</p> */}
        </div>
      </CardContent>
    </Card>
  );
}
