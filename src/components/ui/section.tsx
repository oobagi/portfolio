interface SectionProps {
  id?: string;
  title?: string;
  titleHref?: string;
  children: React.ReactNode;
}

export function Section({ id, title, titleHref, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="section-left">
        {title && (
          titleHref ? (
            <h2>
              <a href={titleHref} target="_blank" rel="noopener noreferrer" className="section-label section-label-link">
                {title} <span aria-hidden>&#8599;</span>
              </a>
            </h2>
          ) : (
            <h2 className="section-label">{title}</h2>
          )
        )}
      </div>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}
