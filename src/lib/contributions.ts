export interface Contribution {
  repo: string;
  url: string;
  description: string;
  state: "merged" | "open" | "closed";
}

// Add your OSS contributions here. State determines the icon color:
// merged = purple, open = green, closed = red
export const contributions: Contribution[] = [
  {
    repo: "mdn/content",
    url: "https://github.com/mdn/content/pull/11740",
    description: "Fix some awkward hyperlink formatting",
    state: "merged",
  },
  {
    repo: "manaflow-ai/cmux",
    url: "https://github.com/manaflow-ai/cmux/pull/2234",
    description: "Add workspace tabs — nested tab layer within each workspace",
    state: "open",
  },
];
