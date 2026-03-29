import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

interface ButtonBaseProps {
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

const BASE_CLASSES = [
  "inline-flex items-center justify-center gap-2",
  "bg-[var(--accent)] text-white",
  "px-4 py-1.5 text-sm font-medium",
  "transition-opacity duration-200",
  "hover:opacity-80",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
  "disabled:pointer-events-none disabled:opacity-50",
].join(" ");

function isLink(props: ButtonProps): props is ButtonAsLink {
  return props.href !== undefined;
}

export function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;
  const classes = `${BASE_CLASSES} ${className ?? ""}`;

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
