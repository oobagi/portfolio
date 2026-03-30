import type { BlogPostMeta } from "@/lib/blog";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { VStack } from "@/components/ui/stack";
import { Text } from "@/components/ui/text";

interface BlogPostListProps {
  posts: BlogPostMeta[];
}

export function BlogPostList({ posts }: BlogPostListProps) {
  if (posts.length === 0) {
    return <Text muted as="p">No posts yet. Check back soon.</Text>;
  }

  return (
    <VStack gap={0}>
      {posts.map((post) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </VStack>
  );
}
