import type { HTMLAttributes } from "react";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  ...rest
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${className ?? ""}`} {...rest}>
      <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg text-[var(--text-secondary)]">{subtitle}</p>
      )}
    </div>
  );
}
