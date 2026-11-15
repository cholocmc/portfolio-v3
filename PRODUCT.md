# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Recruiters and hiring managers** screening Carlos Miguel (Cholo) Canonizado for a full-time role: Tech Lead, senior IC, or Engineering Manager. They skim fast and look for scope, seniority, and outcomes.
- **Potential clients**: companies or founders weighing him for freelance or contract work, mostly around conversational AI agents, frontend, and browser extensions.
- **Engineering peers**: collaborators and people in his network who want to see what he builds and how.

Most arrive from a shared link (LinkedIn, a DM, a résumé), so the Open Graph card is often the first thing they see.

## Product Purpose

A single-page personal portfolio at https://www.cholocmc.com that presents his work history, projects, skills, and contact routes in one scroll.

Success is one of two outcomes:

1. The visitor **emails him** (the Contact section and `EMAIL` in `lib/data.ts`).
2. The visitor **goes deeper on LinkedIn or GitHub**. The site works as a hub that routes people to fuller profiles.

## Positioning

A Tech Lead who ships conversational AI agents (AOPs across chat, email, and voice at First Mate Technologies) and previously ran the Apollo.io Chrome extension team, growing it from 100k to 600k+ installs. The pairing of hands-on AI-agent work with a measurable browser-extension track record and management experience is what's his alone.

## Operating Context

- Visitors evaluate him in a few minutes, often on a phone after tapping a link.
- The GitHub contributions graph (live, revalidated daily) is shown as proof of ongoing activity.
- Project entries link to live sites and repos (Budget Mate at budgetmate.tech, plus GitHub repos).

## Capabilities and Constraints

- Sections: Hero (summary + quick facts), Work experience, Projects, Skills and interests, Contact, plus the footer. Nav links go to each section.
- All copy and links live in `lib/data.ts`. Content changes happen there.
- Light and dark themes with a user toggle. The default is the saved choice, then the system preference, then dark.
- Must work at 375px with no horizontal scroll and touch targets of at least 44px.
- Statically prerendered with a daily revalidate. If the GitHub fetch fails, the graph is hidden, never shown broken.

## Brand Commitments

- Name as written: **Carlos Miguel (Cholo) Canonizado**. Handle and site name: **CholoCMC** / `cholocmc`.
- **Voice: plain and factual.** Reads like a strong résumé: specific numbers, concrete outcomes, no hype or buzzword inflation. First person only where the existing copy already uses it (project write-ups).

## Evidence on Hand

- Work history with quantified outcomes: Apollo extension installs from 100k to 600k+, CRM/Apollo Everywhere adoption from 10% to 30%, 10x faster load from IndexedDB caching, 60% fewer Pusher connections, and tripled high ratings (`lib/data.ts`, `jobs`).
- Four projects with screenshots in `public/projects/`: Budget Mate, Komunidad, Sign Me Up (won best in research for the Computer Science category at the 2nd ICS Mini-Symposium, UPLB), and Super Smash Bros (featured in the 2019 UPLB ICS exhibit).
- Skill and social icons in `public/icons/`.
- Education: BS Computer Science, UPLB.
- **No testimonials, client logos, or references exist.** Don't invent them, and don't add metrics that aren't already in `lib/data.ts`.

## Product Principles

1. **Outcomes before adjectives.** Every claim is backed by a number, a shipped product, or a link.
2. **Two exits, always within reach.** Email and LinkedIn/GitHub are easy to find from anywhere on the page.
3. **Scannable in a minute.** A recruiter skimming on a phone should get role, seniority, and headline results without reading every bullet.
4. **One source of truth.** Content lives in `lib/data.ts` and only there.

## Accessibility & Inclusion

Accessibility is one of his listed skills, and he did WCAG work at Samsung, so the site should meet WCAG 2.2 AA in both themes. Honor `prefers-reduced-motion`, as the scroll and theme transitions already do.
