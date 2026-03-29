export interface Contribution {
  repo: string;
  url: string;
  description: string;
  state: "merged" | "open" | "closed";
}

// Add your OSS contributions here. State determines the icon color:
// merged = purple, open = green, closed = red
export const contributions: Contribution[] = [
  // TODO: Replace these with your actual contributions
  // {
  //   repo: "owner/repo",
  //   url: "https://github.com/owner/repo/pull/123",
  //   description: "Fix something cool",
  //   state: "merged",
  // },
];
