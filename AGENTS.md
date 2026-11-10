# AGENTS.md

Personal portfolio site for Carlos Miguel (Cholo) Canonizado — a single-page Next.js app built from a Claude Design canvas (desktop + mobile, dark + light).

## Stack

- Next.js 16 (App Router, fully static), React 19, TypeScript
- Tailwind CSS 4 (CSS-first config in `app/globals.css`, no `tailwind.config`)
- Fonts via `next/font/google`: Space Grotesk (sans) and JetBrains Mono (mono)

## Commands

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build + type check — run before committing
npm start       # serve the production build
```

No test suite or linter is configured; `npm run build` is the check.

## Layout

- `app/layout.tsx` — fonts, metadata, and the inline pre-paint theme script
- `app/page.tsx` — composes the page: `Nav`, then `Hero`, `Work`, `Projects`, `Skills`, `Contact`, footer
- `app/globals.css` — theme tokens, custom utilities, theme-transition CSS
- `app/icon.svg` — favicon (adapts to the OS color scheme)
- `components/` — one file per section, plus `Nav`, `ThemeToggle`, `ScrollLink`, `SectionHeading`
- `lib/data.ts` — **all copy and links** (jobs, projects, skills, socials, email, Apollo URL). Edit content here, not in components.
- `lib/scroll.ts` — eased in-page scrolling
- `public/icons/*.svg` — skill and social icons (monochrome black); `public/projects/*.jpg` — project screenshots

## Conventions

- **Colors come from theme tokens only.** Use `bg-bg`, `text-fg`, `text-soft`, `text-muted`, `bg-panel`, `bg-band`, `bg-nav`, `border-line`, `border-line-strong`. The tokens are CSS variables defined in `:root` (light) and `.dark` and mapped in `@theme inline`. Don't hard-code hex values in components.
- **Dark mode is class-based**: the `.dark` class on `<html>`, via `@custom-variant dark`. The default is the saved choice in `localStorage.theme`, otherwise the system preference, otherwise dark.
- Monochrome icons get `dark:invert` so they show on dark backgrounds.
- Custom utilities in `globals.css`: `px-gutter`, `py-section`, `bg-grid` (hero/contact grid backdrop), and `scroll-anchor` (`scroll-margin-top` for the sticky header).
- The visual language is square corners (no border-radius), 1px hairline borders, mono labels like `[01]` / `P/01` / `S/01`, and a 1200px max-width container.
- Responsive layouts use `flex-wrap` with grow/basis pairs (e.g. `flex-[999_1_560px]`) instead of breakpoints, matching the design. Keep it mobile-first and check at 375px: no horizontal scroll, touch targets ≥ 44px.
- Server components by default; only `Nav`, `ThemeToggle`, and `ScrollLink` are client components.

## Behaviors to preserve

- **In-page links** must use `ScrollLink` (`to="section-id"`, or `"top"`). It calls `scrollToSection`, which eases the section's top to just below the sticky header. The header height is measured live and published as `--header-h`, because the header grows when nav links wrap on phones. The scroll respects `prefers-reduced-motion` and cancels on user input.
- **Theme toggle**: a View Transition circular reveal from the button, with a color-fade fallback (`html.theme-fade`). The sun/moon icons are swapped with CSS (`dark:` classes) so server and client rendering never mismatch. Don't drive them from React state.
- New sections need an `id`, `aria-labelledby`, and the `scroll-anchor` class. Add them to `navLinks` in `lib/data.ts` if they belong in the nav.

## Gotchas

- Windows dev machine; Node is installed at `C:\Program Files\nodejs`. If `node` isn't on `PATH` in a fresh shell, prepend that directory.
- Keep dependencies current. Older Next.js versions have critical advisories, so run `npm audit` after changing them.
- The hero summary is capped at 19px (`clamp(17px,1.6vw,19px)`) so it fits in 5 lines at 1440px. Re-check the line count if you change that copy or its width.
