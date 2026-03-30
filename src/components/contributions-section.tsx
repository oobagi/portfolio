import { GitMerge, GitPullRequest, GitPullRequestClosed } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ListItem } from "@/components/ui/list-item";
import { HStack, VStack } from "@/components/ui/stack";
import { Text } from "@/components/ui/text";
import { contributions } from "@/lib/contributions";

const PR_ICONS: Record<string, { icon: LucideIcon; color: string }> = {
  merged: { icon: GitMerge, color: "#a855f7" },
  open: { icon: GitPullRequest, color: "#22c55e" },
  closed: { icon: GitPullRequestClosed, color: "#ef4444" },
};

export function ContributionsSection() {
  if (contributions.length === 0) return null;

  return (
    <Section
      id="contributions"
      title="OSS Contributions"
      titleHref="https://github.com/oobagi"
    >
      <VStack gap={0}>
        {contributions.map((contribution) => {
          const { icon: PrIcon, color } = PR_ICONS[contribution.state];
          return (
            <ListItem key={contribution.url} href={contribution.url} external>
              <VStack gap={4}>
                <HStack gap={8}>
                  <PrIcon size={14} style={{ flexShrink: 0, color }} />
                  <Text className="list-item-title">{contribution.repo}</Text>
                </HStack>
                <Text muted as="p">{contribution.description}</Text>
              </VStack>
            </ListItem>
          );
        })}
      </VStack>
    </Section>
  );
}
