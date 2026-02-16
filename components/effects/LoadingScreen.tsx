"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Check if already visited this session
    if (sessionStorage.getItem("portfolio-loaded")) {
      setDone(true);
      setHidden(true);
      return;
    }

    let current = 0;
    const interval = setInterval(() => {
      // Ease-in-out progression
      const increment = current < 70 ? Math.random() * 8 + 2 : Math.random() * 3 + 1;
      current = Math.min(current + increment, 100);
      setProgress(Math.round(current));

      if (current >= 100) {
        clearInterval(interval);
        sessionStorage.setItem("portfolio-loaded", "true");
        setTimeout(() => setDone(true), 400);
        setTimeout(() => setHidden(true), 1200);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-background flex items-center justify-center transition-transform duration-700 ease-in-out ${
        done ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="text-center">
        <span className="font-[family-name:var(--font-instrument-serif)] text-7xl sm:text-9xl text-foreground tabular-nums">
          {progress}%
        </span>
      </div>
    </div>
  );
}
