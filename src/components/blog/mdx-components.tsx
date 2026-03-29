import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="text-[28px] font-bold tracking-[-0.04em] text-[var(--fg)] mt-12 mb-4"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-sm font-medium uppercase tracking-[0.1em] text-[var(--fg-muted)] mt-12 mb-4"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-sm font-medium text-[var(--fg)] mt-8 mb-3"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-sm leading-[1.714] text-[var(--fg)] mb-5"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="list-disc pl-5 mb-5 text-[var(--fg)] space-y-1"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal pl-5 mb-5 text-[var(--fg)] space-y-1"
      {...props}
    />
  ),
  li: (props) => (
    <li className="text-sm leading-[1.714]" {...props} />
  ),
  a: (props) => (
    <a
      className="text-[var(--accent)] underline underline-offset-2 decoration-1 transition-opacity duration-100 hover:opacity-80"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-6 text-sm text-[var(--fg-muted)] [&>p]:before:content-['\00BB\0020'] [&>p]:before:text-[var(--fg-muted)]"
      {...props}
    />
  ),
  hr: (props) => (
    <hr className="border-[var(--border)] my-10" {...props} />
  ),
  strong: (props) => (
    <strong className="font-semibold text-[var(--fg)]" {...props} />
  ),
  code: (props) => (
    <code
      className="bg-[var(--mark-bg)] px-1.5 py-0.5 text-[13px]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-[var(--bg-secondary)] px-5 py-4 overflow-x-auto text-[13px] leading-[1.7] my-6 [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-[inherit]"
      {...props}
    />
  ),
};
