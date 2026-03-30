import { execSync } from "child_process";

export function getLastCommit() {
  try {
    const hash = execSync("git log -1 --pretty=%H", { encoding: "utf-8" }).trim();
    const short = hash.slice(0, 7);
    return { hash, short };
  } catch {
    return { hash: "", short: "" };
  }
}
