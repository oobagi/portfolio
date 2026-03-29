interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="section">
      {title && (
        <h2 className="section-label">{title}</h2>
      )}
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}
