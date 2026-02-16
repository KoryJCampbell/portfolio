"use client";

import { Typewriter } from "@/components/effects/Typewriter";

const interests = [
  "scalable systems",
  "React & TypeScript",
  "cloud architecture",
  "Java Spring Boot",
  "federal tech",
];

export function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-20">
      <div className="max-w-2xl">
        <h1
          className="font-[family-name:var(--font-instrument-serif)] text-foreground leading-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          Hey, I&apos;m{" "}
          <span className="text-accent">Kory Campbell</span>
        </h1>

        <div className="mt-4 text-lg sm:text-xl text-muted">
          I&apos;m into <Typewriter words={interests} />
        </div>

        <p className="mt-8 text-sm sm:text-base text-muted leading-relaxed max-w-lg">
          Senior Software Engineer with 10+ years of experience specializing in
          scalable solutions and optimizing software performance. Proven track
          record leading cross-functional teams and delivering projects that
          drive business growth and innovation.
        </p>

        <div className="mt-6 text-sm sm:text-base text-muted leading-relaxed max-w-lg">
          <p className="font-medium text-foreground text-xs uppercase tracking-wider mb-2">Education</p>
          <p>B.S. Quantitative Analysis — Florida A&amp;M University, 2015</p>
        </div>

        <div className="mt-10 flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-accent/20 border border-card-border flex-shrink-0" />
          <div className="text-xs text-muted">
            <p>Based in the DC Metro Area</p>
            <p className="mt-1">Open to opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
}
