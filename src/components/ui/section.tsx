import type { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ id, className, children, ...rest }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-[var(--container-content)] px-6 py-20 md:py-28 ${className ?? ""}`}
      {...rest}
    >
      {children}
    </section>
  );
}
