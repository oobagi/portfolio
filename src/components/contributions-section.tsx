import {
  GitMergeIcon,
  GitPullRequestIcon,
  GitPullRequestClosedIcon,
} from "@primer/octicons-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";
import { contributions } from "@/lib/contributions";

function PrIcon({ state }: { state: "merged" | "open" | "closed" }) {
  if (state === "merged") {
    return <GitMergeIcon size={16} className="pr-icon pr-icon-merged" />;
  }
  if (state === "open") {
    return <GitPullRequestIcon size={16} className="pr-icon pr-icon-open" />;
  }
  return <GitPullRequestClosedIcon size={16} className="pr-icon pr-icon-closed" />;
}

export function ContributionsSection() {
  if (contributions.length === 0) return null;

  return (
    <Section id="contributions">
      <AnimateIn>
        <SectionHeading title="OSS Contributions" />
      </AnimateIn>

      <div className="list-column">
        {contributions.map((contribution, index) => (
          <AnimateIn key={contribution.url} delay={index * 60}>
            <a
              href={contribution.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`contribution-item${index >= contributions.length - 1 ? " list-item--last" : ""}`}
            >
              <div className="contribution-row">
                <PrIcon state={contribution.state} />
                <div className="contribution-content">
                  <span className="list-item-title">
                    {contribution.repo}
                    <span style={{ marginLeft: "4px", display: "inline-block" }} aria-hidden="true">
                      &nearr;
                    </span>
                  </span>
                  <p className="contribution-description">
                    {contribution.description}
                  </p>
                </div>
              </div>
            </a>
          </AnimateIn>
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
