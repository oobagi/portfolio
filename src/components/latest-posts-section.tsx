import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";

interface LatestPostsSectionProps {
  posts: BlogPostMeta[];
}

export function LatestPostsSection({ posts }: LatestPostsSectionProps) {
  if (posts.length === 0) return null;

  return (
    <Section id="notes">
      <AnimateIn>
        <SectionHeading title="Latest Notes" />
      </AnimateIn>

      <div className="flex flex-col">
        {posts.map((post, index) => (
          <AnimateIn key={post.slug} delay={index * 80}>
            <div
              className={`py-3 ${index < posts.length - 1 ? "border-b border-[var(--border)]" : ""}`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium text-[var(--fg)] transition-colors duration-200 hover:text-[var(--accent)]"
                >
                  {post.title}
                </Link>
                <time className="shrink-0 text-xs text-[var(--fg-muted)]">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              {post.description && (
                <p className="mt-0.5 text-xs text-[var(--fg-muted)]">
                  {post.description}
                </p>
              )}
            </div>
          </AnimateIn>
        ))}
      </div>

      <Link
        href="/blog"
        className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--fg)] transition-colors duration-200 hover:text-[var(--accent)]"
      >
        View all notes
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </Section>
  );
}
