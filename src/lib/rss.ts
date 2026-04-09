import RSS from "rss";
import { getAllPosts } from "@/lib/blog";

const SITE_URL = "https://jadenwatson.dev";

export function generateRSSFeed(): string {
  const posts = getAllPosts();

  const feed = new RSS({
    title: "Jaden Watson's Blog",
    description: "Thoughts on development, AI, and the tools I'm building.",
    feed_url: `${SITE_URL}/feed.xml`,
    site_url: SITE_URL,
    language: "en",
  });

  for (const post of posts) {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      date: new Date(post.date),
    });
  }

  return feed.xml({ indent: true });
}
