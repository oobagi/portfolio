interface SocialLink {
  platform: string;
  handle: string;
  url: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

export const DEFAULT_SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    handle: "@oobagi",
    url: "https://github.com/oobagi",
  },
];

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <nav aria-label="Social links">
      <ul className="flex items-center gap-6">
        {links.map((link) => (
          <li key={link.platform}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--fg-muted)] transition-colors duration-200 hover:text-[var(--fg)]"
            >
              {link.handle}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
