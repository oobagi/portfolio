import { GitMerge, GitPullRequest, GitPullRequestClosed } from "lucide-react";
import { Section } from "@/components/ui/section";
import { contributions } from "@/lib/contributions";

function PrIcon({ state }: { state: "merged" | "open" | "closed" }) {
  if (state === "merged") {
    return <GitMerge size={14} className="pr-icon pr-icon-merged" />;
  }
  if (state === "open") {
    return <GitPullRequest size={14} className="pr-icon pr-icon-open" />;
  }
  return <GitPullRequestClosed size={14} className="pr-icon pr-icon-closed" />;
}

export function ContributionsSection() {
  if (contributions.length === 0) return null;

  return (
    <Section id="contributions" title="OSS Contributions">
      <div className="list-column">
        {contributions.map((contribution, index) => (
          <a
            key={contribution.url}
            href={contribution.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`list-item${index >= contributions.length - 1 ? " list-item--last" : ""}`}
          >
            <div className="list-item-row">
              <span className="list-item-icon-title">
                <PrIcon state={contribution.state} />
                <span className="list-item-title">{contribution.repo}</span>
              </span>
            </div>
            <p className="list-item-description">
              {contribution.description}
            </p>
          </a>
        ))}
      </div>

      <a
        href="https://github.com/oobagi"
        target="_blank"
        rel="noopener noreferrer"
        className="section-link"
      >
        Follow on GitHub
        <span aria-hidden="true">&rarr;</span>
      </a>
    </Section>
  );
}
