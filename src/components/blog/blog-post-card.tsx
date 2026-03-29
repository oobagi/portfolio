import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import { Card } from "@/components/ui/card";

interface BlogPostCardProps {
  post: BlogPostMeta;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <Card className="transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)]">
        <div className="flex items-center gap-3 mb-2">
          <time
            dateTime={post.date}
            className="font-mono text-sm text-[var(--text-muted)]"
          >
            {formatDate(post.date)}
          </time>
          <span className="text-[var(--text-muted)]" aria-hidden="true">
            &middot;
          </span>
          <span className="font-mono text-sm text-[var(--text-muted)]">
            {post.readingTime}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-[var(--text-primary)] transition-colors duration-[var(--duration-normal)] group-hover:text-[var(--brand-primary)]">
          {post.title}
        </h3>
        <p className="mt-2 text-[var(--text-secondary)] leading-relaxed">
          {post.description}
        </p>
      </Card>
    </Link>
  );
}
