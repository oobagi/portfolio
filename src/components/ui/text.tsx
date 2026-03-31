import { cn } from "@/lib/cn";

interface TextProps {
  children: React.ReactNode;
  muted?: boolean;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "time" | "label";
  className?: string;
}

export function Text({
  children,
  muted,
  as: Tag = "span",
  className,
}: TextProps) {
  return (
    <Tag className={cn(muted && "text-muted", className)}>
      {children}
    </Tag>
  );
}
