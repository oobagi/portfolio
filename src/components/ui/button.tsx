import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const SIZE_CLASSES: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
};

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: [
    "bg-primary-700 dark:bg-primary-500 text-white font-medium",
    "hover:bg-primary-800 dark:hover:bg-primary-400",
    "hover:shadow-[var(--shadow-md)] dark:hover:shadow-[var(--shadow-glow-md)]",
  ].join(" "),
  secondary: [
    "border border-[var(--brand-primary)] text-[var(--brand-primary)]",
    "bg-transparent font-medium",
    "hover:bg-[var(--brand-primary)]/10",
  ].join(" "),
  ghost: [
    "bg-transparent text-[var(--text-secondary)] font-medium",
    "hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]",
  ].join(" "),
};

const BASE_CLASSES = [
  "inline-flex items-center justify-center gap-2",
  "rounded-lg",
  "transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)]",
  "hover:scale-[1.03] active:scale-[0.97]",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)]",
  "disabled:pointer-events-none disabled:opacity-50",
].join(" ");

function isLink(props: ButtonProps): props is ButtonAsLink {
  return props.href !== undefined;
}

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = `${BASE_CLASSES} ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className ?? ""}`;

  if (isLink(props)) {
    const { href, ...anchorRest } = rest as Omit<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      keyof ButtonBaseProps
    > & { href: string };

    const isExternal = href.startsWith("http") || href.startsWith("//");

    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...anchorRest}
      >
        {children}
      </a>
    );
  }

  const buttonRest = rest as Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof ButtonBaseProps
  >;

  return (
    <button type="button" className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
