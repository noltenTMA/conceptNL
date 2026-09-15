# tma.nl — design handoff

This repository contains the TMA homepage design handoff and a static GitHub Pages preview. `index.html` is an exact root entry point for the homepage; `TMA Homepage v2.dc.html` remains the original handoff file.

The page is still a **design reference**, not production-ready site code. It contains documented placeholder copy/data and presentation-only forms, search, filters, and links. Replace those before using the design in production.

## What's here

```
TMA Homepage v2.dc.html    homepage
TMA Templates.dc.html      10 page templates in one file, hash-routed
support.js                 runtime that renders the two files (not for production)
image-slot.js              fills the homepage <image-slot> elements (not for production)
assets/                    photography, logo lockups, Tabler icon SVGs
_ds/                       TMA Design System — tokens, stylesheets, Inter fonts
```

## Opening it locally

The files are plain HTML but load `support.js` and the design-system CSS by relative path, so they need to be served, not opened via `file://`.

In VS Code:

1. Open this folder (`File → Open Folder`).
2. Install the **Live Server** extension.
3. Right-click `TMA Homepage v2.dc.html` → *Open with Live Server*.

Or from a terminal in this folder:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then browse to `http://localhost:8000/` for the Pages entry point, or to `TMA Homepage v2.dc.html` to inspect the original handoff.

## GitHub Pages

The repository includes `.github/workflows/pages.yml`, which deploys the repository as a static project site whenever changes land on `main`. The published homepage is:

```text
https://noltentma.github.io/conceptNL/
```

The workflow has no build step: it uploads the repository contents as-is so the existing relative references to `assets/`, `support.js`, `image-slot.js`, and `_ds/` continue to resolve under `/conceptNL/`. GitHub Pages must be enabled for **GitHub Actions** in the repository Pages settings.

## Structure of the two files

Each file is one HTML document containing:

- a `<helmet>` block — design-system stylesheet links, `@font-face`, body resets, and the responsive `@media` rules
- the markup, inline-styled throughout (no CSS classes — read style values straight off the element)
- a `<script data-dc-script>` block holding a `class Component` with all content data and interaction logic

**All copy and content lives in the script block**, in static objects: `PANELS` (mega-menu), `PAGES`, `DATA` (cards, agenda, results, form fields), `RELATED`, `STEPS`. That is the fastest place to read the real strings for your CMS schema.

## Routing

`TMA Templates.dc.html` holds all ten templates and shows one at a time based on `location.hash`:

| Hash | Template |
|---|---|
| `#filosofie` | Filosofie & methode |
| `#oplossingen` | Oplossingen overview |
| `#detail` | Oplossing detail (Talentenanalyse) |
| `#sector` | Sector page (Zorg) |
| `#kennis` | Kennis & inspiratie index |
| `#artikel` | Article detail |
| `#opleiding` | Opleiding & events |
| `#contact` | Contact |
| `#zoeken` | Search results |
| `#404` | 404 |

The navy chip bar at the top is a **prototype affordance for reviewing templates — it is not part of the design.** Drop it when you build the real site. In production each hash becomes its own route/URL.

## Design tokens

Do not hard-code values. Every colour, radius and font is a CSS variable defined in `_ds/tma-design-system-*/colors_and_type.css`. Key ones:

| Token | Value | Use |
|---|---|---|
| `--tma-canvas` | `#F7FCFF` | page background |
| `--tma-surface` | `#FFFFFF` | cards |
| `--tma-navy` | `#050038` | dark sections, ink |
| `--tma-blue` | `#2183FA` | the single accent — CTAs, links, active nav |
| `--tma-blue-tint` | `#EAF2FF` | hover fills, tinted bands, badges |
| `--tma-border` | `rgba(5,0,56,.10)` | card hairline, 0.5px |
| `--tma-border-input` | `#CED4DA` | inputs, secondary buttons |
| `--tma-divider` | `#E2EAEF` | 1px list dividers |
| `--tma-text` / `--tma-text-secondary` / `--tma-text-muted` | | text hierarchy |
| `--tma-text-on-navy-muted` | | body text on navy |
| `--tma-dot-blue/green/pink/yellow/orange` | | 7px eyebrow dots only |
| `--tma-radius-xs / sm / md / lg / xl / 2xl / pill` | 4 / 6 / 8 / 11 / 14 / 20 / 999px | |

Type is Inter throughout (variable fonts in `_ds/.../fonts/`), 400 body / 500 buttons and quotes / 700 headings. Line-height 1.06–1.15 on headings, 1.5–1.75 on body.

## Layout system

- Page gutter is one token: `--pad: clamp(20px, 5vw, 110px)`, set on the root and reused by every section's horizontal padding.
- Max content width 1920px, centred.
- Two-column splits are `display:flex; flex-wrap:wrap` with a `flex: 1 1 <basis>` on each column, so they stack without media queries.
- Card grids are `repeat(auto-fit, minmax(250–290px, 1fr))` — 4 → 3 → 2 → 1 columns.
- Headings are fluid: `clamp()` on every display size (hero `clamp(30px,3.6vw,52px)`, section `clamp(23px,2.2vw,32px)`).
- Sticky rails are `position:sticky; top:88px`, released to static below 860px.
- Only three real breakpoints exist, in `<helmet>`: 1140px (nav links → hamburger), 1000px (hero annotations hide), 860px (rails unstick), 700px (photo credit hides).

## Cards, buttons, icons

- **Card**: `background: var(--tma-surface)`, `0.5px solid var(--tma-border)`, `border-radius: var(--tma-radius-xl)` (14px), `padding: 20px`, **no shadow**. Hover raises the border to `--tma-blue`.
- **Primary button**: solid `--tma-blue`, white text, `border-radius: var(--tma-radius-sm)`, `padding: 13px 22px`, weight 500. No gradient, no shadow.
- **Secondary**: transparent with `1px solid var(--tma-border-input)` on light, `rgba(255,255,255,.35)` on navy.
- **Icons**: Tabler outline, inlined as `<svg>` with `stroke-width: 1.75`, `fill: none`, `stroke: currentColor` — they inherit text colour. Sources in `assets/icons/outline/`. Never hard-code an icon colour.
- **Eyebrow**: 10px, weight 700, uppercase, `letter-spacing: .02em`, preceded by a 7px dot in a `--tma-dot-*` colour.

## Behaviour to reproduce

- Mega menu opens on hover **and on keyboard focus** per nav item, closes on `mouseleave` of the nav block. Each menu item routes to a specific template (see `ITEM_TARGET` in the script).
- Every navigational control is a real `<a href>`, not a click handler. On the homepage the target is `TMA Templates.dc.html#<hash>`; inside the templates file it is `#<hash>`. Hash changes are picked up by `syncHash()`, so browser back/forward works. Reproduce these as real routes — the hrefs already tell you the URL structure.
- Below 1140px the hamburger opens a real menu panel (all five sections, the service links and the primary CTA). It closes on route change.
- Navigation scrolls to top on route change (`toTop()`).
- Everything else — forms, search, filters, accordions, pagination, agenda enrolment — is **static presentation only**. No submit, validation, or filtering logic exists. Build those for real.
- No animation beyond 150–200ms fades and border/colour transitions. The design system prohibits bounces, springs, and scroll-linked motion.
- Interaction states are defined, not optional: cards raise their border to `--tma-blue` on hover, buttons darken to `--tma-navy`, pressed controls shift 1px down, and `:focus-visible` draws a 2px `--tma-blue` ring (white on navy or over photography). All of it is disabled under `prefers-reduced-motion: reduce`.

## Content status — read before building

Real TMA copy is used where I had it. The following are **invented placeholders** and must be replaced before anything goes live:

- Drijfveren 6–22 on `#filosofie` are literally labelled "Nog aan te leveren". Only the first five are real names.
- All quotes, and their attributions, are marked "nog aan te leveren".
- Statistics on `#detail` and `#sector` (22 / 45 min / 500.000+ / 25 jaar / 340+ / 82% / 4 weken) — treat every number as unverified.
- Contact page address, phone number, and course pricing are placeholders.
- Agenda dates, locations and availability on `#opleiding` are fabricated.
- Article titles and dates on `#kennis` mix real TMA items with invented ones.

## Accessibility baseline already in the markup

Carry these over; they are cheap in the real stack and expensive to retrofit.

- `<html lang="nl">`, one `<h1>` per page, and `<header>` / `<nav>` / `<main>` / `<section>` / `<article>` / `<footer>` landmarks instead of anonymous divs.
- A "Naar de hoofdinhoud" skip link as the first focusable element.
- `aria-label` on the two nav landmarks, `aria-haspopup` / `aria-expanded` on the mega-menu triggers, `aria-expanded` / `aria-controls` on the hamburger, `aria-current` on the active template chip and language.
- Decorative photography is `alt=""` on purpose. Any image that carries meaning in production needs a real description.
- Card imagery uses `loading="lazy"` and `decoding="async"`.

## Imagery

Seven distinct photographs, from the TMA Design System's brand photography, reused across roughly two dozen slots — so images repeat between pages. That is a stand-in, not a design decision. Real photography per page is needed, and the crop hints in the markup (`object-position: 50% 20%` on portrait-orientation files in landscape slots) exist only because the current files are the wrong aspect ratio.

The homepage does not hard-code its card photography. It uses `<image-slot id="…" shape="rect|circle" placeholder="…">`, and `image-slot.js` maps each id to a file and a crop in one table at the top of that file. The `placeholder` attribute is the photo brief for that slot; when an id has no file mapped, the slot renders that brief instead of an image. Swap the table for your CMS's image field and the briefs come along. Assignments are spread so that no photograph appears twice in the same card row.

## Known gaps versus the brief

Not built, discussed but never commissioned: a numeric proof band with real figures, a customer-logo row, dated events on the homepage, company-size-based routing, a Tarieven/pricing page, and a security/compliance block.

Still stubbed, by design: forms do not submit or validate, search does not search, filters do not filter, and the footer's legal links point at Contact because the real pages do not exist yet. Build those for real — and note that a live site needs form validation and a cookie consent decision, neither of which is represented here.
