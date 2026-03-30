interface StackProps {
  children: React.ReactNode;
  gap?: number;
  className?: string;
}

export function HStack({ children, gap = 8, className }: StackProps) {
  return (
    <div className={className} style={{ display: "flex", alignItems: "center", gap: `${gap}px` }}>
      {children}
    </div>
  );
}

export function VStack({ children, gap = 4, className }: StackProps) {
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", gap: `${gap}px` }}>
      {children}
    </div>
  );
}

export function ZStack({ children, className }: Omit<StackProps, "gap">) {
  return (
    <div className={className} style={{ display: "grid", gridTemplate: "1fr / 1fr" }}>
      {children}
    </div>
  );
}
