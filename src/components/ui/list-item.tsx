import Link from "next/link";

interface ListItemProps {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}

export function ListItem({ href, external, children }: ListItemProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="list-item"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className="list-item">
      {children}
    </Link>
  );
}
