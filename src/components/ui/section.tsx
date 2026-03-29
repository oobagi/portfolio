import type { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ id, className, children, ...rest }: SectionProps) {
  return (
    <section
      id={id}
      className={`mt-20 ${className ?? ""}`}
      {...rest}
    >
      {children}
    </section>
  );
}
