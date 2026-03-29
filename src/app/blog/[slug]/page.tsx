import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllPosts, getPost } from "@/lib/blog";
import { mdxComponents } from "@/components/blog/mdx-components";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = getPost(slug);

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: meta.date,
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const { meta, content } = getPost(slug);

  return (
    <article className="mx-auto max-w-[var(--container-prose)] px-6 py-20 md:py-28">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] transition-colors duration-[var(--duration-normal)] hover:text-[var(--brand-primary)] mb-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Back to blog
      </Link>

      {/* Post header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
          {meta.title}
        </h1>
        <div className="flex items-center gap-3">
          <time
            dateTime={meta.date}
            className="font-mono text-sm text-[var(--text-muted)]"
          >
            {formatDate(meta.date)}
          </time>
          <span className="text-[var(--text-muted)]" aria-hidden="true">
            &middot;
          </span>
          <span className="font-mono text-sm text-[var(--text-muted)]">
            {meta.readingTime}
          </span>
        </div>
      </header>

      {/* MDX content */}
      <div className="prose">
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: "github-dark",
                    keepBackground: true,
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
