import Link from "next/link";

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export function TextLink({ href, children, external }: TextLinkProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-link"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className="text-link">
      {children}
    </Link>
  );
}
