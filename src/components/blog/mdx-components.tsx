import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="mdx-h1" {...props} />
  ),
  h2: (props) => (
    <h2 className="mdx-h2" {...props} />
  ),
  h3: (props) => (
    <h3 className="mdx-h3" {...props} />
  ),
  p: (props) => (
    <p className="mdx-p" {...props} />
  ),
  ul: (props) => (
    <ul className="mdx-ul" {...props} />
  ),
  ol: (props) => (
    <ol className="mdx-ol" {...props} />
  ),
  li: (props) => (
    <li className="mdx-li" {...props} />
  ),
  a: (props) => (
    <a className="mdx-a" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className="mdx-blockquote" {...props} />
  ),
  hr: (props) => (
    <hr className="mdx-hr" {...props} />
  ),
  strong: (props) => (
    <strong className="mdx-strong" {...props} />
  ),
  code: (props) => (
    <code className="mdx-code" {...props} />
  ),
  pre: (props) => (
    <pre className="mdx-pre" {...props} />
  ),
};
