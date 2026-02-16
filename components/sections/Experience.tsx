import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 pb-32">
      <h2
        className="font-[family-name:var(--font-instrument-serif)] text-foreground"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        Experience
      </h2>

      <div className="mt-10 flex flex-col gap-8">
        {experience.map((item, i) => (
          <div
            key={i}
            className="group relative pl-8 border-l border-card-border hover:border-accent/60 transition-colors duration-500"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-muted group-hover:bg-accent transition-colors duration-500" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
              <h3 className="text-base text-foreground font-medium">
                {item.role}
              </h3>
              <span className="text-xs text-muted">
                {item.company} &middot; {item.location} &middot; {item.period}
              </span>
            </div>

            <p className="mt-2 text-sm text-muted leading-relaxed max-w-lg">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
