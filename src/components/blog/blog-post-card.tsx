import type { BlogPostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/format";
import { ListItem } from "@/components/ui/list-item";
import { HStack, VStack } from "@/components/ui/stack";
import { Text } from "@/components/ui/text";

interface BlogPostCardProps {
  post: BlogPostMeta;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <ListItem href={`/blog/${post.slug}`}>
      <VStack gap={4}>
        <HStack gap={8}>
          <Text as="h3" className="list-item-title">{post.title}</Text>
          <Text muted>{formatDate(post.date)}</Text>
        </HStack>

        {post.description && (
          <Text muted as="p">{post.description}</Text>
        )}

        {post.tags && post.tags.length > 0 && (
          <Text muted as="p">{post.tags.join(" / ")}</Text>
        )}
      </VStack>
    </ListItem>
  );
}
