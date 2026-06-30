const GITHUB_API = "https://api.github.com/users/oobagi/repos";

const FEATURED_ORDER = ["yap", "notebook-cli", "portfolio"];

const PROJECT_IMAGES: Record<string, string> = {
  "notebook-cli": "/projects/notebook-cli.png",
  portfolio: "/projects/portfolio.png",
  yap: "/projects/yap.png",
};

const OTHER_REPOS = new Set(["expo-awesome-app-icon", "picturethat", "mark"]);

export interface Project {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  image: string | null;
}

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
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

  const projects: Project[] = repos
    .filter((repo) => !repo.fork)
    .map((repo) => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      image: PROJECT_IMAGES[repo.name] ?? null,
    }));

  const featured = FEATURED_ORDER
    .map((name) => projects.find((p) => p.name === name))
    .filter((p): p is Project => p != null);

  const rest = projects.filter((p) => OTHER_REPOS.has(p.name));

  return [...featured, ...rest];
}
