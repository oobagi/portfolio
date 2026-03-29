import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";
import RSS from "rss";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const BLOG_DIR = path.join(ROOT, "content/blog");
const PUBLIC_DIR = path.join(ROOT, "public");
const OUT_DIR = path.join(ROOT, "out");
const SITE_URL = "https://jadenwatson.dev";

function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  if (files.length === 0) {
    return [];
  }

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);

    return {
      title: data.title,
      date: data.date,
      description: data.description,
      slug,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

function generateFeed() {
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

  const xml = feed.xml({ indent: true });

  // Write to public/ for dev server and future builds
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }
  fs.writeFileSync(path.join(PUBLIC_DIR, "feed.xml"), xml);

  // Write to out/ for the current static export
  if (fs.existsSync(OUT_DIR)) {
    fs.writeFileSync(path.join(OUT_DIR, "feed.xml"), xml);
  }

  console.log("RSS feed generated at public/feed.xml and out/feed.xml");
}

generateFeed();
