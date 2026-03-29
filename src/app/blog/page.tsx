import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { BlogPostList } from "@/components/blog/blog-post-list";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on development, AI, and the tools I'm building.",
  openGraph: {
    title: "Blog",
    description: "Thoughts on development, AI, and the tools I'm building.",
    url: "/blog",
    type: "website",
  },
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
