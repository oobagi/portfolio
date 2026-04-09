const GITHUB_API = "https://api.github.com/users/oobagi/repos";

const PROJECT_IMAGES: Record<string, string> = {
  jflow: "/projects/jflow.png",
  "notebook-cli": "/projects/notebook-cli.png",
  portfolio: "/projects/portfolio.png",
  yap: "/projects/yap.png",
};

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

  return repos
    .filter((repo) => !repo.fork)
    .sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
    })
    .slice(0, 10)
    .map((repo) => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      image: PROJECT_IMAGES[repo.name] ?? null,
    }));
}
