export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6"
      >
        <div className="mx-auto max-w-[var(--container-content)] text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            Jaden Watson
          </h1>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Developer, builder, maker of things.
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="px-6 py-24"
      >
        <div className="mx-auto max-w-[var(--container-content)]">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Projects
          </h2>
          <p className="mt-2 text-[var(--text-secondary)]">
            Coming soon.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="px-6 py-24"
      >
        <div className="mx-auto max-w-[var(--container-content)]">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Contact
          </h2>
          <p className="mt-2 text-[var(--text-secondary)]">
            Coming soon.
          </p>
        </div>
      </section>
    </>
  );
}
