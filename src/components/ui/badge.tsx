import type { HTMLAttributes } from "react";

type BadgeVariant = "default" | "primary" | "secondary" | "accent";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  default: "bg-[var(--bg-elevated)] text-[var(--text-secondary)]",
  primary: "bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-400",
  secondary:
    "bg-secondary-50 text-secondary-700 dark:bg-secondary-950 dark:text-secondary-400",
  accent: "bg-accent-50 text-accent-700 dark:bg-accent-950 dark:text-accent-400",
};

export function Badge({
  variant = "default",
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium font-mono ${VARIANT_CLASSES[variant]} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </span>
  );
}
