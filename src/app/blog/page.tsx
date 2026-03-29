import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { BlogPostList } from "@/components/blog/blog-post-list";

export const metadata: Metadata = {
  title: "Blog | Jaden Watson",
  description: "Thoughts on development, AI, and the tools I'm building.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section>
      <SectionHeading
        title="Blog"
        subtitle="Thoughts on development, AI, and the tools I'm building."
      />
      <BlogPostList posts={posts} />
    </Section>
  );
}
