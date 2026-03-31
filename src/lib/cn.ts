export function cn(...classes: (string | undefined | null | false)[]): string | undefined {
  const result = classes.filter(Boolean).join(" ");
  return result || undefined;
}
