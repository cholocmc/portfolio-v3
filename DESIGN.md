---
name: CholoCMC
description: Monochrome, square-cornered single-page portfolio that reads like an engineer's spec sheet.
colors:
  dark-ink-black: "#0a0a0a"
  dark-paper-white: "#f5f5f5"
  dark-soft-silver: "#d4d4d4"
  dark-muted-ash: "#a3a3a3"
  dark-panel-carbon: "#111111"
  dark-band-graphite: "#0e0e0e"
  dark-nav-veil: "rgba(10, 10, 10, 0.82)"
  dark-hairline: "rgba(255, 255, 255, 0.12)"
  dark-hairline-strong: "rgba(255, 255, 255, 0.28)"
  dark-grid-trace: "rgba(255, 255, 255, 0.05)"
  light-paper: "#fafafa"
  light-ink: "#0a0a0a"
  light-soft-charcoal: "#262626"
  light-muted-slate: "#525252"
  light-panel-white: "#ffffff"
  light-band-fog: "#f2f2f2"
  light-nav-veil: "rgba(250, 250, 250, 0.85)"
  light-hairline: "rgba(0, 0, 0, 0.12)"
  light-hairline-strong: "rgba(0, 0, 0, 0.28)"
  light-grid-trace: "rgba(0, 0, 0, 0.05)"
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(44px, 7.6vw, 112px)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(32px, 4.4vw, 56px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(24px, 2.4vw, 32px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  subtitle:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.35
  lead:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(17px, 1.6vw, 19px)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  label-caps:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(64px, 9vw, 120px)"
  grid-cell: "56px"
  tile-gap: "8px"
  card-gap: "24px"
  container: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.dark-paper-white}"
    textColor: "{colors.dark-ink-black}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.dark-ink-black}"
    textColor: "{colors.dark-paper-white}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "48px"
  button-icon:
    textColor: "{colors.dark-paper-white}"
    rounded: "{rounded.none}"
    size: "44px"
  chip-tag:
    textColor: "{colors.dark-muted-ash}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
  tile-skill:
    backgroundColor: "{colors.dark-panel-carbon}"
    textColor: "{colors.dark-paper-white}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "48px"
  card-project:
    backgroundColor: "{colors.dark-panel-carbon}"
    rounded: "{rounded.none}"
    padding: "clamp(20px, 3vw, 40px)"
  nav-link:
    textColor: "{colors.dark-paper-white}"
    padding: "0 12px"
    height: "44px"
---

# Design System: CholoCMC

## Overview

**Creative North Star: "The Engineer's Spec Sheet"**

The site reads like a well-kept technical datasheet. Every part is indexed (`[01]`, `P/01`, `S/01`, `NOW`), measured, and framed in a 1px hairline. Nothing is decorative unless it also says something: the faint 56px grid behind the hero and contact sections is drafting paper, the `~/cholo $ whoami` panel is a fact table that happens to look like a terminal, and the square bullets and timeline nodes are the marks you'd make on a spec.

The palette is grayscale, and emphasis comes from contrast and weight: near-black on near-white, or the reverse. Space Grotesk carries the headings at tight, negative tracking. JetBrains Mono carries every label, index, date, and metadata line. Density is generous but disciplined, with big section padding, a 1200px container, and content that wraps by flex basis rather than jumping at breakpoints.

Components are tactile and confident: solid inverted primaries, crisp strong-hairline frames, and firm 48px hit areas. There is no softness to apologize for the rigor. Dark is the default theme. Light is an exact tonal mirror, not a separate look.

**Key Characteristics:**
- Strict grayscale with two text tiers (soft, muted) under the main foreground
- Square corners everywhere (0px radius); 1px hairlines in two strengths
- Sans display type at heavy negative tracking; mono for all metadata
- Indexed labels (`[01]`, `P/01`, `S/01`) as the navigation grammar
- Flat surfaces separated by tone (bg → band → panel), never by shadow
- Flex-wrap layouts with grow/basis pairs instead of breakpoints

## Colors

A tonal grayscale in two mirrored themes. Every value is a CSS variable on `:root` (light) or `.dark`, mapped to Tailwind utilities (`bg-bg`, `text-fg`, `text-soft`, `text-muted`, `bg-panel`, `bg-band`, `bg-nav`, `border-line`, `border-line-strong`).

### Primary
- **Paper White / Ink Black** (`--fg`): the single "accent" of the system. Headings, links, primary-button fill, the logo square, the filled terminal dot, and the 100% contribution cell. Inverting `fg` against `bg` is how this system says "act here."

### Neutral
- **Ink Black / Paper** (`--bg`): the page ground. Also fills secondary buttons and the small floating index badges, so they read as cutouts.
- **Soft Silver / Soft Charcoal** (`--soft`): long-form reading text, such as the hero summary, job bullets, and project descriptions. One step quieter than `fg`, so headings keep their edge.
- **Muted Ash / Muted Slate** (`--muted`): metadata only, such as indexes, dates, locations, tag text, the `(Cholo)` nickname, and chart labels. Never used for running prose.
- **Panel Carbon / Panel White** (`--panel`): raised containers such as project cards, skill tiles, the quick-facts panel, and the contribution graph.
- **Band Graphite / Band Fog** (`--band`): full-bleed section ground for Projects, so its panels have something to sit on.
- **Nav Veil** (`--nav`): translucent sticky-header fill, used with `backdrop-blur-md`.
- **Hairline** (`--line`): dividers between rows and sections, and quiet borders (tags, skill tiles).
- **Hairline Strong** (`--line-strong`): frames that must hold their shape, such as cards, panels, secondary buttons, and badges.
- **Grid Trace** (`--grid`): the 56px drafting grid only.

### Named Rules
**The Grayscale-First Rule.** The system is monochrome today, and contrast and weight do all the emphasis. A single accent hue may be introduced later as a deliberate system change, defined as a token in both themes. Never sneak one in as a one-off in a component.

**The Token-Only Rule.** Components use theme tokens, never hex values. Opacity steps of `fg` (`fg/5`, `fg/25`, `fg/45`, `fg/70`) are the sanctioned way to get intermediate grays, as in the contribution graph and the icon-button hover.

**The Two-Theme Mirror Rule.** Every token exists in both themes with the same role. Monochrome icons get `dark:invert`. If something only works in one theme, it isn't done.

## Typography

**Display Font:** Space Grotesk (with system-ui, sans-serif)
**Body Font:** Space Grotesk (with system-ui, sans-serif)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, monospace)

**Character:** A geometric grotesk with a slightly technical edge, paired with a true coding mono. The sans does the talking and the mono does the bookkeeping.

### Hierarchy
- **Display** (600, `clamp(44px, 7.6vw, 112px)`, 0.95): the name in the hero, nowhere else.
- **Headline** (600, `clamp(32px, 4.4vw, 56px)`, 1.05): section titles, always preceded by a mono `[NN]` index on the same baseline.
- **Title** (600, `clamp(24px, 2.4vw, 32px)`, 1.15): project names. Company names use a close sibling (`clamp(22px, 2.2vw, 28px)`, 1.2), and skill-group names use a fixed 22px.
- **Subtitle** (600, 19px, 1.35): role titles inside a job.
- **Lead** (400, `clamp(17px, 1.6vw, 19px)`, 1.6, max 640px): the hero summary, capped at 19px so it fits in five lines at 1440px. The contact sentence is a larger lead (`clamp(20px, 2.2vw, 28px)`, 1.45, max 820px).
- **Body** (400, 16px): bullets, descriptions, and tile text (tiles and buttons use 15px).
- **Label** (400, 13px mono): dates, locations, `[NN]` indexes, project URLs, graph captions. Use 12px for tags and the `P/01` badge, and 11px for chart axes.
- **Label Caps** (400, 12px mono, 0.08em tracking): the `S/01` / `NOW` row indexes.

### Named Rules
**The Mono-Means-Metadata Rule.** If it's an index, date, place, URL, count, or tag, it's mono and usually muted. If it's a claim or a name, it's sans.

**The Figures-Forward Rule.** Numbers in work bullets ("100k to 600k+", "10x", "60%") render at full `fg` contrast and medium weight against the `soft` prose, so a skim lands on the outcomes. This is done automatically in `Work`; never hand-bold other words.

**The Tight-Tracking Rule.** Tracking tightens as size grows: -0.035em for display, -0.03em for headlines, -0.02em for titles, 0 for body.

## Layout

A single column of full-bleed sections, each holding a centered container 1200px wide with fluid side padding (`px-gutter`, 16–40px) and fluid vertical padding (`py-section`, 64–120px). Sections are separated by a top hairline. Tone shifts (`bg` → `band`) mark Projects, and the grid backdrop marks Hero and Contact.

Inside sections, layouts are two-part rows (label column + content column) built from `flex-wrap` with grow/basis pairs, such as `flex-[1_1_260px]` beside `flex-[999_1_560px]`. When the row can't fit both bases, the content drops below the label. No media-query breakpoints are used for layout. Skill tiles use an auto-fill grid (`minmax(164px, 1fr)`, 8px gap). Project cards stack with a 24px gap.

The sticky header's measured height is published as `--header-h`, and `scroll-anchor` sections offset by it.

### Named Rules
**The Basis-Not-Breakpoint Rule.** Responsiveness comes from flex basis and auto-fill grids, never from breakpoint-specific layouts. Check every change at 375px: no horizontal page scroll. The contribution graph is the one sanctioned inner horizontal scroller, and it opens at the most recent weeks.

**The 44 Rule.** Every interactive target is at least 44px tall (`min-h-11`). Primary buttons, social links, and skill tiles are 48px (`min-h-12`).

## Elevation & Depth

Flat. There are no box-shadows anywhere. Depth comes from tonal layering (`bg` < `band` < `panel` in dark mode, and the mirror in light mode) plus hairline frames. The only effect is the sticky header's translucent fill with backdrop blur, which lets content pass visibly underneath.

### Named Rules
**The No-Shadow Rule.** Surfaces never lift. Hover states change a border, an opacity, or an underline, never a shadow or a transform.

## Shapes

Square everything: 0px radius on buttons, cards, tiles, tags, badges, panels, and graph cells. Borders are always 1px. Small marks are squares too: the 10px logo block, 5px bullets, 9px outlined timeline nodes, and the 8px terminal "window" squares. There are no circles. The theme toggle's circular reveal is motion, not shape.

Line icons use `stroke-linecap="square"` on arrows to match.

### Named Rules
**The Zero-Radius Rule.** No `border-radius`. If a new element looks wrong square, change its proportions, not its corners.

## Components

Tactile and confident: firm frames, solid fills, quick color-only responses.

### Buttons
- **Shape:** square (0px), 48px tall, 22px horizontal padding, 15–16px medium weight, optional 16px square-cap line icon after the label.
- **Primary:** `fg` fill and border with `bg` text (inverted). Hover fades to 85% opacity.
- **Secondary:** `bg` fill, `line-strong` border, `fg` text. Hover darkens the border to `fg`.
- **Icon (theme toggle):** 44×44, transparent, `line-strong` border. Hover tints to `fg/5`.
- **Icon link (hero LinkedIn / GitHub):** 48×48, `bg` fill, `line-strong` border, 18px monochrome brand icon. Hover darkens the border to `fg`. Accessible name comes from `aria-label`.
- **Contact actions:** email is always a real `mailto:` link with the authored envelope icon. In Hero it's the secondary button beside "View my work"; in Contact it's the primary button leading the social links.
- **Focus:** global 2px solid `fg` outline at 2px offset on every focusable element.

### Chips
- **Tag:** 1px `line` border, no fill, 12px mono `muted` text, 4×10px padding. Static; tags are labels, not filters.
- **Index badge:** `bg` fill, `line-strong` border, 12px mono `fg` text. Floats at the top-left of a project screenshot (`P/01`).

### Cards / Containers
- **Corner Style:** square (0px).
- **Background:** `panel`, with media wells in `bg`.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 1px `line-strong` outer frame; internal splits use `line`.
- **Internal Padding:** `clamp(20px, 3vw, 40px)` for project cards, 16px for panels.
- **Project card:** screenshot well (`flex-[1_1_340px]`, 16:10, `object-contain`) beside a content column (`flex-[1.2_1_420px]`). It wraps to stacked on narrow screens.

### Navigation
- **Header:** sticky, `nav` veil + backdrop blur, bottom hairline. Logo is a 10px `fg` square + `cholocmc` in 14px mono medium.
- **Links:** 15px sans `fg`, 44px tall, 12px padding. Hover underlines at 4px offset. Below 640px the links show their `short` labels (Work, Projects, Skills, Contact) with 8px padding, so the header stays at two rows; `--header-h` follows its real height.
- **In-page links:** always `ScrollLink`, eased scroll that honors reduced motion.

### Quick-Facts Panel (signature)
A `panel` box with a `line-strong` frame and 13px mono text. Its title bar reads `~/cholo $ whoami` and ends in three 8px squares (two outlined, one filled). The body is a two-column definition list: muted keys, `fg` values.

### Timeline (signature)
Each job is a label column (mono index, company, pin + location) beside a content column with a left hairline. Each role is marked by a 9px square node, `bg` filled and `fg` outlined, sitting on that line. Bullets are 5px `muted` squares.

### Contribution Graph (signature)
A `panel` figure whose cells are an opacity ramp of `fg` (7%, 25%, 45%, 70%, 100%), so it follows the theme with no extra tokens. It has a mono caption bar and 11px mono axes.

## Do's and Don'ts

### Do:
- **Do** take every color from theme tokens (`bg`, `fg`, `soft`, `muted`, `panel`, `band`, `nav`, `line`, `line-strong`) or opacity steps of `fg`.
- **Do** label sections and items with mono indexes: `[NN]` for sections, `P/NN` for projects, `S/NN` for skill groups.
- **Do** use `line-strong` for frames that define an object and `line` for dividers and quiet borders.
- **Do** invert `fg`/`bg` for the single primary action in a group.
- **Do** build responsive rows with `flex-wrap` grow/basis pairs and verify at 375px.
- **Do** give monochrome icons `dark:invert`, and check both themes.

### Don't:
- **Don't** use `border-radius`, and don't put an eyebrow label above the hero name.
- **Don't** add box-shadows, glows, gradients, or hover lift.
- **Don't** hard-code hex values in components, or add an accent hue as a one-off. If an accent arrives, it arrives as a token in both themes.
- **Don't** set prose in mono, or metadata in sans.
- **Don't** make a touch target shorter than 44px.
- **Don't** push the hero summary past 19px or 640px without re-checking the five-line fit at 1440px.
