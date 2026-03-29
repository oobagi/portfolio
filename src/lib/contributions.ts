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
  {
    repo: "ChicoState/humphrey-come-home",
    url: "https://github.com/ChicoState/humphrey-come-home/pull/32",
    description: "Frontend migration: React + Vite + Supabase",
    state: "open",
  },
  {
    repo: "ChicoState/MyFirstExample",
    url: "https://github.com/ChicoState/MyFirstExample/pull/371",
    description: "Added std namespace, resolves issue #341",
    state: "open",
  },
  {
    repo: "ChicoState/MyFirstExample",
    url: "https://github.com/ChicoState/MyFirstExample/pull/348",
    description: "Prevents division by zero error, resolves #61",
    state: "open",
  },
];
