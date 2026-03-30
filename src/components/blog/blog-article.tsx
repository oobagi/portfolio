import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import type { BlogPost } from "@/lib/blog";
import { mdxComponents } from "@/components/blog/mdx-components";

interface BlogArticleProps {
  post: BlogPost;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogArticle({ post }: BlogArticleProps) {
  return (
    <article>
      <header className="blog-post-header">
        <h1>{post.meta.title}</h1>
        <p className="text-muted">{formatDate(post.meta.date)} &middot; {post.meta.readingTime}</p>
      </header>

      <div className="prose">
        <MDXRemote
          source={post.content}
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
