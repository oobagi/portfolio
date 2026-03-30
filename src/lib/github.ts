const GITHUB_API = "https://api.github.com/users/oobagi/repos";

/** Hex colors for the most common GitHub languages. */
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  Swift: "#F05138",
  Dart: "#00B4AB",
  Java: "#b07219",
  Kotlin: "#A97BFF",
  "C++": "#f34b7d",
  C: "#555555",
  "C#": "#178600",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Lua: "#000080",
  Zig: "#ec915c",
  Elixir: "#6e4a7e",
};

const PROJECT_IMAGES: Record<string, string> = {
  anyzork: "/projects/anyzork.png",
  jflow: "/projects/jflow.png",
  yap: "/projects/yap.png",
};

export interface Project {
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  languageColor: string | null;
  stars: number;
  topics: string[];
  image: string | null;
}

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics?: string[];
  fork: boolean;
  pushed_at: string;
}

export async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${GITHUB_API}?per_page=100&sort=updated`, {
    headers: { Accept: "application/vnd.github.v3+json" },
    next: { revalidate: false },
  });

  if (!res.ok) {
    console.error(`GitHub API error: ${res.status} ${res.statusText}`);
    return [];
  }

  const repos: GitHubRepo[] = await res.json();

  return repos
    .filter((repo) => !repo.fork)
    .sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
    })
    .slice(0, 6)
    .map((repo) => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      homepage: repo.homepage || null,
      language: repo.language,
      languageColor: repo.language ? (LANGUAGE_COLORS[repo.language] ?? null) : null,
      stars: repo.stargazers_count,
      topics: repo.topics ?? [],
      image: PROJECT_IMAGES[repo.name] ?? null,
    }))
;
}
