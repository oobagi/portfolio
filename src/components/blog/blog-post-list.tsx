import type { BlogPostMeta } from "@/lib/blog";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { Text } from "@/components/ui/text";

interface BlogPostListProps {
  posts: BlogPostMeta[];
}

export function BlogPostList({ posts }: BlogPostListProps) {
  if (posts.length === 0) {
    return <Text muted as="p">No posts yet. Check back soon.</Text>;
  }

  return (
    <div className="divider-list">
      {posts.map((post) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
