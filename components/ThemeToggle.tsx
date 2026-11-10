"use client";

import { useEffect, useState, type MouseEvent } from "react";

type ViewTransitionDoc = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> };
};

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch {}
}

export function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = (e: MouseEvent<HTMLButtonElement>) => {
    const next = !document.documentElement.classList.contains("dark");
    const doc = document as ViewTransitionDoc;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const commit = () => {
      applyTheme(next);
      setDark(next);
    };

    if (reduceMotion) {
      commit();
      return;
    }

    if (!doc.startViewTransition) {
      // Fallback: cross-fade every color for a moment.
      const root = document.documentElement;
      root.classList.add("theme-fade");
      commit();
      window.setTimeout(() => root.classList.remove("theme-fade"), 500);
      return;
    }

    // Circular reveal growing out of the toggle button.
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    doc.startViewTransition(commit).ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
  };

  const label = dark === null ? "Toggle color theme" : dark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="ml-2 inline-flex h-11 w-11 cursor-pointer items-center justify-center border border-line-strong bg-transparent text-fg transition-colors hover:bg-fg/5"
    >
      {/* Sun in dark mode, moon in light mode — switched by CSS so SSR never mismatches. */}
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hidden dark:block"
      >
        <circle cx="12" cy="12" r="4.5" />
        <line x1="12" y1="1.5" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22.5" />
        <line x1="1.5" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22.5" y2="12" />
        <line x1="4.6" y1="4.6" x2="6.3" y2="6.3" />
        <line x1="17.7" y1="17.7" x2="19.4" y2="19.4" />
        <line x1="4.6" y1="19.4" x2="6.3" y2="17.7" />
        <line x1="17.7" y1="6.3" x2="19.4" y2="4.6" />
      </svg>
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="block dark:hidden"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}
