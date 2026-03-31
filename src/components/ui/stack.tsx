import { cn } from "@/lib/cn";

interface StackProps {
  children: React.ReactNode;
  gap?: number;
  className?: string;
}

export function HStack({ children, gap = 8, className }: StackProps) {
  return (
    <div className={cn("hstack", className)} style={{ gap: `${gap}px` }}>
      {children}
    </div>
  );
}

export function VStack({ children, gap = 4, className }: StackProps) {
  return (
    <div className={cn("vstack", className)} style={{ gap: `${gap}px` }}>
      {children}
    </div>
  );
}

