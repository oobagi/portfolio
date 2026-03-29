import type { HTMLAttributes } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className, ...rest }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-[var(--border)] ${className ?? ""}`}
      aria-hidden="true"
      {...rest}
    />
  );
}
