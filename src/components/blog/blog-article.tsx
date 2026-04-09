import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import type { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/format";

interface BlogArticleProps {
  post: BlogPost;
}

export function BlogArticle({ post }: BlogArticleProps) {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.meta.title,
            description: post.meta.description,
            datePublished: post.meta.date,
            author: {
              "@type": "Person",
              name: "Jaden Watson",
              url: "https://jadenwatson.me",
            },
            url: `https://jadenwatson.me/blog/${post.meta.slug}`,
          }),
        }}
      />
      <header className="blog-post-header">
        <h1>{post.meta.title}</h1>
        <p className="text-muted">{formatDate(post.meta.date)} &middot; {post.meta.readingTime}</p>
      </header>

      <div className="prose">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
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
