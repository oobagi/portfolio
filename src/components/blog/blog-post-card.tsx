import Link from "next/link";
import { FileText } from "lucide-react";
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
      className={`list-item${isLast ? " list-item--last" : ""}`}
    >
      <div className="list-item-row">
        <span className="list-item-icon-title">
          <FileText size={14} className="list-item-icon" />
          <h3 className="list-item-title">{post.title}</h3>
        </span>
        <time
          dateTime={post.date}
          className="text-xs text-muted"
          style={{ flexShrink: 0 }}
        >
          {formatDate(post.date)}
        </time>
      </div>
      {post.description && (
        <p className="list-item-description">
          {post.description}
        </p>
      )}
    </Link>
  );
}
