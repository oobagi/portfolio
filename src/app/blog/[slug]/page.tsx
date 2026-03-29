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
    <article className="blog-post">
      <Link href="/blog" className="blog-back-link">
        &larr; Back
      </Link>

      <header className="blog-post-header">
        <h1 className="blog-post-title">
          {meta.title}
        </h1>
        <div className="blog-post-meta">
          <time dateTime={meta.date} className="blog-post-meta-item">
            {formatDate(meta.date)}
          </time>
          <span className="blog-post-meta-dot" aria-hidden="true">
            &middot;
          </span>
          <span className="blog-post-meta-item">
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
