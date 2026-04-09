import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const BLOG_DIR = path.join(ROOT, "content/blog");
const PUBLIC_DIR = path.join(ROOT, "public");
const OUT_DIR = path.join(ROOT, "out");
const SITE_URL = "https://jadenwatson.me";

function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  if (files.length === 0) {
    return [];
  }

  return files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);

    return { slug, date: data.date };
  });
}

function generateSitemap() {
  const posts = getAllPosts();
  const today = new Date().toISOString().split("T")[0];

  const staticPages = [
    { url: "/", lastmod: today, priority: "1.0" },
    { url: "/projects", lastmod: today, priority: "0.9" },
    { url: "/blog", lastmod: today, priority: "0.8" },
  ];

  const blogPages = posts.map((post) => ({
    url: `/blog/${post.slug}`,
    lastmod: post.date,
    priority: "0.6",
  }));

  const allPages = [...staticPages, ...blogPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  // Write to public/ for dev server
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }
  fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), xml);

  // Write to out/ for the current static export
  if (fs.existsSync(OUT_DIR)) {
    fs.writeFileSync(path.join(OUT_DIR, "sitemap.xml"), xml);
  }

  console.log("Sitemap generated at public/sitemap.xml and out/sitemap.xml");
}

generateSitemap();
