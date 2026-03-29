import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Badge({ className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={`text-[11px] uppercase tracking-[0.1em] text-[var(--fg-muted)] ${className ?? ""}`}
      {...rest}
    >
      {children}
    </span>
  );
}
