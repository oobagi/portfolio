import type { BlogPostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/format";
import { ListItem } from "@/components/ui/list-item";

interface BlogPostCardProps {
  post: BlogPostMeta;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <ListItem href={`/blog/${post.slug}`}>
      <div className="list-item-header">
        <span className="list-item-title">{post.title}</span>
        <span className="text-muted">{formatDate(post.date)}</span>
      </div>
      {post.description && (
        <p className="text-muted project-desc">{post.description}</p>
      )}
    </ListItem>
  );
}
