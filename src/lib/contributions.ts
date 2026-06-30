import { GitMerge, GitPullRequest, GitPullRequestClosed } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Contribution {
  repo: string;
  url: string;
  description: string;
  state: "merged" | "open" | "closed";
}

export const PR_ICONS: Record<string, { icon: LucideIcon; className: string }> = {
  merged: { icon: GitMerge, className: "pr-icon pr-icon-merged" },
  open: { icon: GitPullRequest, className: "pr-icon pr-icon-open" },
  closed: { icon: GitPullRequestClosed, className: "pr-icon pr-icon-closed" },
};
export const contributions: Contribution[] = [
  {
    repo: "react-native-menu/menu",
    url: "https://github.com/react-native-menu/menu/pull/1197",
    description: "Fix Android build on Expo SDK 55+56 / RN 0.83 / Kotlin 2.x",
    state: "merged",
  },
  {
    repo: "mdn/content",
    url: "https://github.com/mdn/content/pull/11740",
    description: "Fix some awkward hyperlink formatting",
    state: "merged",
  },
];
