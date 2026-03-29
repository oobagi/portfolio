import type { BlogPostMeta } from "@/lib/blog";
import { BlogPostCard } from "@/components/blog/blog-post-card";

interface BlogPostListProps {
  posts: BlogPostMeta[];
}

export function BlogPostList({ posts }: BlogPostListProps) {
  if (posts.length === 0) {
    return (
      <p className="empty-state">
        No posts yet. Check back soon.
      </p>
    );
  }

  return (
    <div className="list-column">
      {posts.map((post, index) => (
        <BlogPostCard
          key={post.slug}
          post={post}
          isLast={index === posts.length - 1}
        />
      ))}
    </div>
  );
}
