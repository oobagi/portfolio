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

function isLink(props: ButtonProps): props is ButtonAsLink {
  return props.href !== undefined;
}

export function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;
  const classes = `btn${className ? ` ${className}` : ""}`;

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
