import type { HTMLAttributes } from "react";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export function SectionHeading({
  title,
  className,
  ...rest
}: SectionHeadingProps) {
  return (
    <div className={`section-heading-wrapper${className ? ` ${className}` : ""}`} {...rest}>
      <h2 className="section-heading">
        {title}
      </h2>
    </div>
  );
}
