import type { BlogPostMeta } from "@/lib/blog";
import { BlogPostCard } from "@/components/blog/blog-post-card";

interface BlogPostListProps {
  posts: BlogPostMeta[];
}

export function BlogPostList({ posts }: BlogPostListProps) {
  if (posts.length === 0) {
    return (
      <p className="text-[var(--text-muted)] text-lg">
        No posts yet. Check back soon.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
