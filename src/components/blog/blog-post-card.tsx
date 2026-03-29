import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogPostCardProps {
  post: BlogPostMeta;
  isLast?: boolean;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostCard({ post, isLast = false }: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`block py-4 group ${isLast ? "" : "border-b border-[var(--border)]"}`}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-sm font-medium text-[var(--fg)] transition-colors duration-200 group-hover:text-[var(--accent)]">
          {post.title}
        </h3>
        <time
          dateTime={post.date}
          className="shrink-0 text-xs text-[var(--fg-muted)]"
        >
          {formatDate(post.date)}
        </time>
      </div>
      {post.description && (
        <p className="mt-1 text-sm text-[var(--fg-muted)]">
          {post.description}
        </p>
      )}
    </Link>
  );
}
