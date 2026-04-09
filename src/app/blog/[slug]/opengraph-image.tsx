import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getPost, getAllPosts } from "@/lib/blog";

export const alt = "Blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { meta } = getPost(slug);

  const geistRegular = await readFile(
    join(
      process.cwd(),
      "node_modules/geist/dist/fonts/geist-sans/Geist-Regular.ttf",
    ),
  );
  const geistSemiBold = await readFile(
    join(
      process.cwd(),
      "node_modules/geist/dist/fonts/geist-sans/Geist-SemiBold.ttf",
    ),
  );

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px",
          backgroundColor: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: 600,
            lineHeight: 1.2,
            marginBottom: "16px",
          }}
        >
          {meta.title}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 22,
            color: "#888",
          }}
        >
          <span>Jaden Watson</span>
          <span style={{ color: "#444" }}>/</span>
          <span>{meta.date}</span>
          <span style={{ color: "#444" }}>/</span>
          <span>{meta.readingTime}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistRegular, weight: 400 },
        { name: "Geist", data: geistSemiBold, weight: 600 },
      ],
    },
  );
}
