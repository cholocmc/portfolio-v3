"use client";

import { useEffect, useRef } from "react";
import { navLinks } from "@/lib/data";
import { ScrollLink } from "./ScrollLink";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const ref = useRef<HTMLElement>(null);

  // Publish the header height (it grows when links wrap on phones) for scroll-margin.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const set = () =>
      document.documentElement.style.setProperty("--header-h", `${el.getBoundingClientRect().height}px`);
    set();
    const ro = new ResizeObserver(set);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <header
      ref={ref}
      data-site-header
      className="sticky top-0 z-10 border-b border-line bg-nav backdrop-blur-md"
    >
      <nav
        aria-label="Primary"
        className="px-gutter mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-6 gap-y-2 py-3.5"
      >
        <ScrollLink
          to="top"
          className="flex min-h-11 items-center gap-2.5 font-mono text-sm font-medium tracking-[0.02em] text-fg no-underline"
        >
          <span aria-hidden="true" className="inline-block h-2.5 w-2.5 bg-fg" />
          cholocmc
        </ScrollLink>
        <div className="ml-auto flex flex-wrap items-center justify-end gap-x-1">
          {navLinks.map((l) => (
            <ScrollLink
              key={l.id}
              to={l.id}
              className="inline-flex min-h-11 items-center px-3 text-[15px] text-fg no-underline underline-offset-4 hover:underline"
            >
              {l.label}
            </ScrollLink>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
