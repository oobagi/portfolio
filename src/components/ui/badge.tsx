import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Badge({ className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={`badge${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {children}
    </span>
  );
}
