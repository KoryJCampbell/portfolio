"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="lg:hidden">
      {/* Header bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-card-border">
        <a
          href="#"
          className="font-[family-name:var(--font-instrument-serif)] text-xl text-foreground"
        >
          KC
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8"
          style={{ animationDuration: "0s" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl text-muted hover:text-foreground transition-colors duration-300 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
              setOpen(false);
            }}
            className="text-lg text-muted hover:text-foreground transition-colors duration-300 tracking-wide uppercase mt-4 cursor-pointer"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </div>
  );
}
