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
    <div className={`mb-6 ${className ?? ""}`} {...rest}>
      <h2 className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--fg-muted)]">
        {title}
      </h2>
    </div>
  );
}
