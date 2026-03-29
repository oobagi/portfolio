import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="text-4xl font-bold tracking-tight text-[var(--text-primary)] mt-10 mb-4"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-2xl font-semibold tracking-snug text-[var(--text-primary)] mt-10 mb-4"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-base leading-[1.625] text-[var(--text-primary)] mb-5"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="list-disc pl-6 mb-5 text-[var(--text-primary)] space-y-1"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal pl-6 mb-5 text-[var(--text-primary)] space-y-1"
      {...props}
    />
  ),
  li: (props) => (
    <li className="text-base leading-[1.625]" {...props} />
  ),
  a: (props) => (
    <a
      className="text-[var(--brand-primary)] underline underline-offset-2 decoration-1 transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-primary-400)]"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-[var(--brand-primary)] pl-4 italic text-[var(--text-secondary)] my-6"
      {...props}
    />
  ),
  hr: (props) => (
    <hr
      className="border-[var(--border-primary)] my-8"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-[var(--text-primary)]" {...props} />
  ),
};
