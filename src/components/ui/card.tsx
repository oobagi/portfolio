import type { AnchorHTMLAttributes, HTMLAttributes } from "react";

interface CardBaseProps {
  children: React.ReactNode;
  className?: string;
}

type CardAsDiv = CardBaseProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof CardBaseProps> & {
    href?: undefined;
  };

type CardAsLink = CardBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CardBaseProps> & {
    href: string;
  };

export type CardProps = CardAsDiv | CardAsLink;

const BASE_CLASSES = [
  "block rounded-lg border border-[var(--border-primary)] bg-[var(--bg-secondary)] p-6",
  "transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)]",
].join(" ");

const INTERACTIVE_CLASSES = [
  "hover:-translate-y-0.5 hover:border-[var(--brand-primary)]",
  "hover:shadow-[var(--shadow-md)]",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)]",
].join(" ");

export function Card(props: CardProps) {
  const { className, children, ...rest } = props;

  if (props.href !== undefined) {
    const { href, ...anchorRest } = rest as Omit<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      keyof CardBaseProps
    > & { href: string };

    const isExternal = href.startsWith("http") || href.startsWith("//");

    return (
      <a
        href={href}
        className={`${BASE_CLASSES} ${INTERACTIVE_CLASSES} ${className ?? ""}`}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...anchorRest}
      >
        {children}
      </a>
    );
  }

  const divRest = rest as Omit<HTMLAttributes<HTMLDivElement>, keyof CardBaseProps>;

  return (
    <div className={`${BASE_CLASSES} ${className ?? ""}`} {...divRest}>
      {children}
    </div>
  );
}
