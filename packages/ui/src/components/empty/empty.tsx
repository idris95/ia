import React from "react";

import { cn } from "../../lib/cn";
import { DefaultIcon } from "./empty-icons";

const classes = {
  base: "flex flex-col",
  alignment: {
    inlineStart: "",
    center: "items-center text-center",
    inlineEnd: "",
  },
};

type EmptyTextTagProps = "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export interface EmptyProps {
  /** Add custom image or icon component */
  image?: React.ReactNode;
  /** Add custom classes on to the image or icon component's wrapper */
  imageClassName?: string;
  /** Set custom className of the default image / icon */
  defaultImageClassName?: string;
  /** Set custom text message of the Empty component */
  text?: string;
  /** Here you can use your text tag */
  textTag?: EmptyTextTagProps;
  /** Set custom classes for text style */
  textClassName?: string;
  /** Set custom text message of the Empty component */
  alignment?: keyof typeof classes.alignment;
  /** Add custom classes for extra style */
  className?: string;
}

/**
 * Empty state component. Note: We are highly inspired by the Ant Design empty component -> https://ant.design/components/empty
 */
export function Empty({
  image,
  className,
  text,
  textTag = "p",
  imageClassName,
  textClassName,
  alignment = "center",
  defaultImageClassName,
  children,
}: React.PropsWithChildren<EmptyProps>) {
  let Component = textTag;
  return (
    <div
      data-testid="empty-state"
      className={cn(classes.base, classes.alignment[alignment], className)}
    >
      <div className={cn(imageClassName)}>
        {image || <DefaultIcon className={defaultImageClassName} />}
      </div>
      {text ? (
        <Component className={cn(textClassName)}>{text}</Component>
      ) : null}
      {children}
    </div>
  );
}

Empty.displayName = "Empty";
