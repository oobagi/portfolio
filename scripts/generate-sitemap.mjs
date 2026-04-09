import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const OUT_DIR = path.join(ROOT, "out");
const SITE_URL = "https://jadenwatson.me";

function generateSitemap() {
  const today = new Date().toISOString().split("T")[0];

  const pages = [
    { url: "/", lastmod: today, priority: "1.0" },
    { url: "/projects", lastmod: today, priority: "0.9" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
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

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }
  fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), xml);

  if (fs.existsSync(OUT_DIR)) {
    fs.writeFileSync(path.join(OUT_DIR, "sitemap.xml"), xml);
  }

  console.log("Sitemap generated at public/sitemap.xml and out/sitemap.xml");
}

generateSitemap();
