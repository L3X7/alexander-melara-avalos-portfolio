"use client";
import { useEffect, useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

interface TruncatedTooltipProps {
  text: string;
  className?: string;
}

export function TruncatedTooltip({ text, className }: TruncatedTooltipProps) {
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = textRef.current;

    if (!element) return;

    const checkTruncation = () => {
      setIsTruncated(element.scrollWidth > element.clientWidth + 1);
    };

    checkTruncation();

    const observer = new ResizeObserver(() => {
      checkTruncation();
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [text, isTruncated]);

  if (!isTruncated) {
    return (
      <p ref={textRef} className={`truncate ${className}`}>
        {text}
      </p>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <p ref={textRef} className={`truncate ${className} cursor-default`}>
            {text}
          </p>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-75 text-wrap text-xs">{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
