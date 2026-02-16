import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2
        className="font-[family-name:var(--font-instrument-serif)] text-foreground"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        Projects
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group p-6 border border-card-border rounded-lg bg-card-bg hover:border-accent/40 transition-colors duration-500"
          >
            <h3 className="text-lg text-foreground font-medium">
              {project.name}
            </h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-1 rounded-full border border-card-border text-muted uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover:text-foreground transition-colors duration-300 uppercase tracking-wide"
                >
                  GitHub &rarr;
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover:text-foreground transition-colors duration-300 uppercase tracking-wide"
                >
                  Live &rarr;
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
