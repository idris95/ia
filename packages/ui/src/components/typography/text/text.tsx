import React from "react";
import cn from "../../../lib/cn";

const classes = {
  p: "",
  i: "",
  b: "",
  q: "",
  em: "",
  strong: "",
  small: "",
  span: "",
  del: "",
  mark: "",
  abbr: "cursor-help",
  sub: "",
  sup: "",
};

export interface TextProps {
  as?: keyof typeof classes;
  title?: string;
  className?: string;
}

export function Text({
  as = "p",
  title,
  children,
  className,
}: React.PropsWithChildren<TextProps>) {
  const Component = as;
  if (as === "abbr" && title === undefined) {
    console.warn("title attribute is missing for abbr tag.");
  }
  return (
    <Component {...(title && { title })} className={cn(classes[as], className)}>
      {children}
    </Component>
  );
}

Text.displayName = "Text";
