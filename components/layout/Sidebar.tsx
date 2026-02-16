"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export function Sidebar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <aside className="hidden lg:flex flex-col justify-between h-screen sticky top-0 py-10 px-6">
      <div>
        <a
          href="#"
          className="font-[family-name:var(--font-instrument-serif)] text-2xl text-foreground hover:text-accent transition-colors duration-300"
        >
          KC
        </a>

        <nav className="mt-12 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors duration-300 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="text-sm text-muted hover:text-foreground transition-colors duration-300 tracking-wide uppercase text-left cursor-pointer"
        aria-label="Toggle theme"
      >
        {mounted ? (theme === "dark" ? "Light Mode" : "Dark Mode") : "Toggle Theme"}
      </button>
    </aside>
  );
}
