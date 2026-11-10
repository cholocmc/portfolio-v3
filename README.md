# CholoCMC — Portfolio

The personal portfolio of **Carlos Miguel (Cholo) Canonizado**, Tech Lead and Software Engineer. It is a single-page site covering work experience, projects, skills and interests, and contact links.

Built with Next.js and Tailwind CSS from a Claude Design canvas, with matching dark and light themes and a mobile-first layout.

## Features

- **Dark and light themes.** The toggle reveals the new theme as a circle growing from the button, falling back to a color fade in browsers without View Transitions. The choice is remembered. First-time visitors get their system preference, and there is no flash of the wrong theme on load.
- **Smooth section navigation.** Nav links ease each section's top to just below the sticky header. This also works when the header wraps to two rows on phones. It respects `prefers-reduced-motion`, and the visitor can interrupt it by scrolling.
- **Mobile-first, responsive layout.** Fluid type and flex-wrap layouts, with no horizontal scroll at phone widths and touch targets of at least 44px.
- **Accessible markup.** Semantic landmarks and labelled sections, visible focus rings, and decorative images hidden from screen readers.
- **GitHub contributions graph.** A monochrome, theme-aware heatmap of the last year's contributions sits at the top of Projects. Its data is refreshed daily.
- **Static.** Every page is prerendered and regenerated once a day to pick up new contribution data.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) and React 19
- [Tailwind CSS 4](https://tailwindcss.com/) (CSS-first config)
- TypeScript
- Space Grotesk and JetBrains Mono, loaded through `next/font`

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000.

### Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start the dev server with hot reload     |
| `npm run build` | Create a production build and type-check |
| `npm start`     | Serve the production build               |

## Project structure

```
app/
  layout.tsx       Fonts, metadata, pre-paint theme script
  page.tsx         Page composition
  globals.css      Theme tokens, utilities, theme transition
  icon.svg         Favicon (adapts to light/dark)
components/        Nav, ThemeToggle, ScrollLink, and one file per section
lib/
  data.ts          All site content: jobs, projects, skills, socials, links
  scroll.ts        Eased in-page scrolling
public/
  icons/           Skill and social icons
  projects/        Project screenshots
```

## Editing content

All copy and links live in [`lib/data.ts`](lib/data.ts):

- **Work experience:** add or edit entries in `jobs`. Each company can hold several roles.
- **Projects:** edit `projects`. Put the screenshot in `public/projects/`. Leave out `link` to hide the GitHub button.
- **Skills:** edit `skills`. Add a monochrome SVG icon to `public/icons/`; it is inverted automatically in dark mode.
- **Contact:** edit `EMAIL` and `socials`.
- **Contributions graph:** set `GITHUB_USERNAME`.

Theme colors are defined once as CSS variables in [`app/globals.css`](app/globals.css), for light in `:root` and for dark in `.dark`. Components use them through Tailwind classes such as `bg-bg`, `text-fg`, `text-muted` and `border-line`.

## Deployment

The site is fully static and deploys to any Next.js host, such as [Vercel](https://vercel.com/). Run `npm run build` and serve the result with `npm start`, or connect the repository to your host.
