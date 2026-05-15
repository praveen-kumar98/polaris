"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "@/lib/utils";

export function Label({
  className,
  render,
  ...props
}: useRender.ComponentProps<"label">) {
  const defaultProps = {
    className: cn(
      "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      className,
    ),
    "data-slot": "label",
  };
  return useRender({
    defaultTagName: "label",
    props: mergeProps(defaultProps, props),
    render,
  });
}
