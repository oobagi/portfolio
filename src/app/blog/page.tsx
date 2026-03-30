import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogPostList } from "@/components/blog/blog-post-list";

export const metadata: Metadata = {
  title: "Thoughts",
  description: "Thoughts on development, AI, and the tools I'm building.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return <BlogPostList posts={posts} />;
}
