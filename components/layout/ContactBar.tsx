"use client";

const socials = [
  { label: "GitHub", href: "https://github.com/koryjcampbell" },
  { label: "LinkedIn", href: "https://linkedin.com/in/koryjcampbell" },
  { label: "Email", href: "mailto:koryjcampbelldev@gmail.com" },
];

export function ContactBar() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-card-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-foreground transition-colors duration-300 tracking-wide uppercase"
            >
              {social.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent/20 border border-card-border" />
          <span className="text-xs text-muted hidden sm:inline">Kory Campbell</span>
        </div>
      </div>
    </footer>
  );
}
