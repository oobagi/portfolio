import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";
import { contributions } from "@/lib/contributions";

function PrIcon({ state }: { state: "merged" | "open" | "closed" }) {
  if (state === "merged") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-purple-500">
        <path d="M5.45 4.05a2.5 2.5 0 1 1-1.9 0v7.9a2.5 2.5 0 1 1-1 0V4.05a2.5 2.5 0 0 1 2.9 0ZM4 2.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm0 11a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" fill="currentColor" />
        <path d="M12.55 4.05a2.5 2.5 0 1 0-1.9 0v3.19l-3.4 3.4.71.71 3.59-3.59V4.05ZM12.5 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="currentColor" />
      </svg>
    );
  }

  if (state === "open") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-green-500">
        <circle cx="8" cy="4" r="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="8" cy="12" r="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
        <line x1="8" y1="6.5" x2="8" y2="9.5" stroke="currentColor" strokeWidth="1" />
      </svg>
    );
  }

  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-red-500">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1" fill="none" />
      <line x1="5.5" y1="5.5" x2="10.5" y2="10.5" stroke="currentColor" strokeWidth="1" />
      <line x1="10.5" y1="5.5" x2="5.5" y2="10.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function ContributionsSection() {
  if (contributions.length === 0) return null;

  return (
    <Section id="contributions">
      <AnimateIn>
        <SectionHeading title="OSS Contributions" />
      </AnimateIn>

      <div className="flex flex-col">
        {contributions.map((contribution, index) => (
          <AnimateIn key={contribution.url} delay={index * 60}>
            <div
              className={`py-3 ${index < contributions.length - 1 ? "border-b border-[var(--border)]" : ""}`}
            >
              <div className="flex items-start gap-3">
                <PrIcon state={contribution.state} />
                <div className="min-w-0">
                  <a
                    href={contribution.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[var(--fg)] transition-colors duration-200 hover:text-[var(--accent)]"
                  >
                    {contribution.repo}
                    <span className="ml-1 inline-block" aria-hidden="true">
                      &nearr;
                    </span>
                  </a>
                  <p className="mt-0.5 text-xs text-[var(--fg-muted)]">
                    {contribution.description}
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>

      <a
        href="https://github.com/oobagi"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--fg)] transition-colors duration-200 hover:text-[var(--accent)]"
      >
        Follow on GitHub
        <span aria-hidden="true">&rarr;</span>
      </a>
    </Section>
  );
}
