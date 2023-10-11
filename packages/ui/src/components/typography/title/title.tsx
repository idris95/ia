import React from "react";
import { cn } from "../../../lib/cn";

const titleStyles = {
  h1: "",
  h2: "",
  h3: "",
  h4: "",
  h5: "",
  h6: "",
};

export type TitleProps = {
  as?: keyof typeof titleStyles;
  className?: string;
};

export function Title({
  as = "h2",
  children,
  className,
}: React.PropsWithChildren<TitleProps>) {
  const Component = as;

  return (
    <Component className={cn(titleStyles[as], className)}>{children}</Component>
  );
}

Title.displayName = "Title";
