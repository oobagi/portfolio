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
    <article className="mt-20">
      <Link
        href="/blog"
        className="text-sm text-[var(--fg-muted)] transition-colors duration-200 hover:text-[var(--fg)]"
      >
        &larr; Back
      </Link>

      <header className="mt-8 mb-12">
        <h1 className="text-[36px] font-bold leading-[1.1] tracking-[-0.04em] text-[var(--fg)] md:text-[48px]">
          {meta.title}
        </h1>
        <div className="mt-4 flex items-center gap-3">
          <time dateTime={meta.date} className="text-xs text-[var(--fg-muted)]">
            {formatDate(meta.date)}
          </time>
          <span className="text-[var(--fg-muted)]" aria-hidden="true">
            &middot;
          </span>
          <span className="text-xs text-[var(--fg-muted)]">
            {meta.readingTime}
          </span>
        </div>
      </header>

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
