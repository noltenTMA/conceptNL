# TMA Design System

**TMA** — *Talent Management Analyse* — is a Dutch HR-tech platform offering talent assessments, personal development tools, and team insights through a web app and mobile app. Its users are HR professionals, coaches, and individual candidates (18–75) who discover and develop their natural talents.

Tagline from the brand: **"Happy People, Performing Organizations."**

---

## Source materials

- **Figma file:** `TMA product design.fig` (mounted read-only at project start). 14 pages, 26 top-level frames across two product directions:
  - **Candidate Area** — the candidate-facing app, shown in desktop (`/DESKTOP/Candidate---Desktop`) and mobile (`/Home/Candidate-Mobile-Home`, `/Article`, `/Menu`, `/Navigation`, `/MOBILE`) variants. This is the original visual language.
  - **Expert / Admin Area (New UI)** — the HR-professional product redesign in `/DESKTOP2/New-UI` (desktop) and the `/MOBILE2/*` page group (mobile: Home, Insights, Start analysis, Menu states, etc).
  - **E-mail templates** — `/E-mail-Templates/*` banners and layouts used for transactional / marketing mail.
- **Brand note** (provided alongside): TMA uses a blue-tinted white canvas (`#F7FCFF`), deep-navy text (`#050038`), a single bright blue accent (`#2183FA`), and Inter throughout. No heavy shadows — clarity and generous whitespace dominate.

No codebase was provided — this system is reconstructed entirely from the Figma file + the written brand note.

---

## What's in this project

```
README.md                 ← you are here
SKILL.md                  ← portable brand skill (works in Claude Code too)
colors_and_type.css       ← CSS variables (single source of truth for tokens)
fonts/                    ← Inter variable fonts (brand-supplied)
assets/
  logo/                   ← TMA wordmark (color + white) as PNG
  imagery/                ← learning + talent-overview photography from Figma
  brand/                  ← email banner, textures
preview/                  ← design-system cards (registered in the DS tab)
ui_kits/
  web-app/                ← desktop product kit (sidebar, cards, forms, etc)
  mobile-app/             ← mobile product kit (menu, tabs, cards)
  email/                  ← email template kit (banner, CTA, layout)
```

---

## CONTENT FUNDAMENTALS

### Voice & tone

TMA's voice is **warm, direct, coaching** — it talks to candidates like a thoughtful mentor, and to HR professionals like a respected peer. Copy is primarily Dutch; English is used for the new UI and international materials. Across both languages:

- **Person:** Second-person ("Jij"/"Je" in NL, "You" in EN) when addressing candidates; first-person ("Mijn talenten", "My talents") when labelling the user's own content. Admin features use impersonal nouns ("Management", "Insights", "Start analysis").
- **Register:** Professional but approachable. No jargon-heavy "synergize-your-capital" talk; no playful slang either.
- **Encouragement:** Copy often names a strength and explains *why* it matters. e.g. "Jij bent van nature een zelfstandig persoon die zonder hulp en begeleiding goed kan functioneren. Je hebt dan ook talent voor zelfredzaamheid." — *You are naturally a self-reliant person who functions well without help. You have a talent for self-sufficiency.*
- **No emoji.** The product does not use emoji in UI or marketing copy. Feelings and category are communicated through iconography and imagery.

### Casing

- **Sentence case** for all UI labels, headings, buttons, and menu items. Examples from the Figma: "Start analysis", "Individual insights", "Team insights", "Select competences", "Welcome Steven", "Quick select".
- **Title Case** is *not* used for navigation items or buttons.
- Dutch microcopy follows Dutch capitalisation (proper nouns only).

### Greeting pattern

The home screen greets the user by first name: **"Welcome Steven"** rendered in `24px Inter Bold`, in the muted blue tint `#B9CFE2`. The greeting is quiet — a soft top-level welcome rather than a shouted hero.

### Button / CTA copy

- Short, verb-led: "Start analysis", "Begin", "Herstel" (Reset), "Ga verder" (Continue).
- Never "Click here" or "Submit".
- E-mail CTAs use `<LINK_CLICK_TEXT>` placeholder pattern — copy is localised per language (EN/FR banner variants exist).

### Sample microcopy (pulled from Figma)

| Context | NL | EN |
| --- | --- | --- |
| Greeting | *Welkom Steven* | Welcome Steven |
| Nav: quick access | *Snel selecteren* | Quick select |
| Card (talent) | *Zelfredzaam* | Self-reliant |
| Card (learning) | *Mijn leer- en ontwikkelstijl* | My learning & development style |
| Admin section | *Inzichten* | Insights |
| Admin tab | — | Matching / Management |
| Filter placeholder | *Selecteer organisatie* | Select organisation |
| Reset | *Herstel* | Reset |
| Tagline | — | Happy People, Performing Organizations |

---

## VISUAL FOUNDATIONS

### Canvas & surfaces

The product lives on **`#F7FCFF`** — an almost-white blue-tinted canvas. Cards and primary surfaces are pure **`#FFFFFF`**. Rails (side nav, mobile menu) use the same tinted canvas, so the boundary reads as a subtle temperature shift rather than a colour block.

### Colour

- **One** accent colour: `#2183FA`. Used for active nav, CTAs, links, selected-state pips, notification badges, and interactive icons. Everything else is navy, white, or grey.
- **Navy `#050038`** is the ink — every piece of body text and every icon default.
- **Muted navy `#092C4C`** appears in dense text blocks (candidate lists, filter labels).
- **`#EAF2FF`** is the only "tint" — used for hover backgrounds and pill-shaped badges.
- **Brand dot palette** (green `#7FBA00`, orange `#F07B58`, pink `#D34893`, yellow `#FBB401`, teal `#49BC87`, plus the primary blue) appears only in the logo and in illustrative/marketing contexts (banner gradients, data-viz). The product UI itself does not mix these colours.

### Typography

**Inter everywhere.** Regular for body, Bold for titles and headings. Medium (500) appears occasionally on banner headlines. Weights 600 and 800 exist but are rare. Sizes: UI-dense 12–14px body, 17–24px headings, 29–37px for feature heroes.

Line-height is tight — headings sit at 100%, body at 150%. Titles on photo cards hug the bottom of the card with `line-height: 22px` on `21px` bold text.

### Spacing

- Base unit: **4px**. Common multiples: 8, 12, 16, 20, 24, 32.
- Card internal padding: **20px**. Page / rail outer padding: **20–24px**.
- Vertical rhythm between stacked card groups: **13–16px**.
- The side menu has a ~250–360px rail; main content has generous gutters (e.g. 272px left on desktop admin).

### Backgrounds & imagery

- **Flat.** Cards sit on the canvas with a hairline border and *no* shadow.
- **Photography** appears on feature cards (learning style, talent overview). Photos show real people in warm, natural environments — journaling, reading, talking. A **navy-to-transparent bottom-up gradient** (`rgba(25,24,47,.75) → .375)`) sits on top so white text + icons remain legible.
- **Marketing / email banners** use playful overlapping circles and blocks in the full dot palette — orange, deep blue, teal, yellow — with the white logo floating over them. This is banner-only; it does not bleed into product UI.
- No gradients in product UI. No patterns or repeating textures. No gradient backgrounds on buttons.

### Borders & shadows

- Default card: **0.5px `rgba(5,0,56,0.10)` border**, no shadow.
- When a shadow is needed (raised menu row, input focus), it's `0 0 2.3px rgba(50,50,71,0.05)` — so soft it's almost imperceptible.
- Inputs: `1px solid #CED4DA`, `border-radius: 4px`.
- Dividers inside admin screens: `#E2EAEF`, 1px.

### Corner radii

- **Cards:** 14–16px (primary), 11px (photo-backed feature card).
- **Inputs & tags:** 4px.
- **Menu rows:** 5px.
- **Nav pills / search chips:** 3px.
- **Avatar / circular badge:** 50% (pill).

### Buttons

- **Primary** — solid `#2183FA`, white text, `border-radius: 4px`, `padding: 6px 15px`, weight 400–500. No shadow. No gradient.
- **Secondary** — white bg, `1px #CED4DA` border, navy text.
- **Tertiary / link** — blue text, no chrome.
- E-mail CTA buttons use a brighter `#006DF3` fill.

### Interaction states

- **Hover on nav row:** background shifts to `#EAF2FF` (5% blue tint).
- **Active nav:** label + icon turn `#2183FA`. No background fill.
- **Pressed:** no shrink; a faint darkening of the interactive colour.
- **Focus:** browser default, or a 1px `#2183FA` ring on inputs.
- **Selected (checkbox / radio):** 1px `#C1C1C1` ring fills with `#2183FA`.

### Animation

No complex motion. Expect:
- **Fades** (150–200ms) on menu expand/collapse.
- **Width/height easing** (`ease-out`, ~200ms) on the collapsed-vs-extended mobile side menu.
- No bounces, no spring physics, no scroll-linked animation in the observed Figma states.

### Transparency & blur

Used *only* in the photography gradient overlay and the banner overlapping circles (full-opacity solid circles, no blur). No frosted glass, no `backdrop-filter`.

### Imagery mood

Warm, natural daylight. Desaturated but not B&W. People are mid-action (reading, typing, talking) — never posed corporate portraits. Slight grain. The imagery palette skews cool in highlights (blue skies, whites) and warm in shadows (skin tones, wood furniture).

### Layout rules

- **Fixed nav rails.** Left (desktop) or top/bottom (mobile) nav is sticky; main content scrolls within its own column.
- **Content max-width ~1200px** centred on wider canvases; rail ~262px on admin desktop.
- **Mobile:** 360px artboard width, 44px status bar, 76px bottom tab bar.

### Iconography

See the **ICONOGRAPHY** section below.

---

## ICONOGRAPHY

TMA uses **FontAwesome outline icons** at a stroke weight approximating 1.15px. The Figma artwork includes icons for play ▷, star ★, home, message bubble, sliders, cog, search, keyboard-down chevron, arrow-rotate, and user circle. They appear at small sizes (12–24px) and render in `#050038` (default), `#B8B8B8` (inactive), or `#2183FA` (active / CTA).

- **Size canon:** 12×12, 14×14, 17×17, 22×22, 24×24.
- **Stroke:** thin — 1–1.5px at the standard 24px frame. Corners are lightly rounded.
- **Fill style:** outline by default; solid / filled variants used for brand-dots and for the "play" triangle in rotating cards.
- **Emoji:** not used anywhere in product or marketing.
- **Unicode glyphs:** not used as UI icons (the chevron is a drawn vector).

### Icon substitution

This project does not include an icon font file. For parity with TMA's FontAwesome usage, we recommend either:

1. Loading **FontAwesome 6 Free (Solid + Regular)** from CDN; or
2. Using **Lucide** at `stroke-width: 1.25` as the closest open-source match.

Both will look correct next to the tokens in `colors_and_type.css`. The UI kits in `ui_kits/` use **Lucide via CDN** as a flagged substitution. Replace with FontAwesome in production.

### Logo

`assets/logo/logo-tma.png` — seven coloured dots orbiting the lowercase "tma" wordmark in cool grey. The colour logo is the default. `assets/logo/logo-tma-white.png` is the all-white variant for dark / photographic backgrounds. The dots are part of the mark — do **not** strip them for favicons or app icons; scale them proportionally.

---

## Components

Exported on `window.TMADesignSystem_cd728b`:

| Component | Source | What it is |
| --- | --- | --- |
| `WebApp` | `ui_kits/web-app/WebApp.jsx` | Desktop web-app shell — top bar, side nav, and the Home / Start analysis / Insights views. |
| `MobileApp` | `ui_kits/mobile-app/MobileApp.jsx` | Mobile kit — Home, Insights and Menu screens rendered inside iOS device frames. |

---

## Index

| File | What it is |
| --- | --- |
| `colors_and_type.css` | CSS variables for all colours, type, spacing, shadows, radii. Import first. |
| `assets/logo/` | TMA wordmark PNGs (color + white) |
| `assets/imagery/` | Hero / feature-card photography pulled from Figma |
| `assets/brand/` | Marketing banner + textures |
| `preview/*.html` | Design-system cards (rendered in the Design System tab) |
| `ui_kits/web-app/` | Desktop product recreations (admin home, candidate desktop) |
| `ui_kits/mobile-app/` | Mobile product recreations (home, menu, insights) |
| `ui_kits/email/` | Email banner + CTA layout |
| `SKILL.md` | Portable skill manifest (for Claude Code) |

---

## Caveats

- **Pseudocode source** — the Figma was read as auto-generated JSX. Per-character text styles, variable aliases, and some icon overrides may be lossy. Trust the JSX over the screenshots for exact values.
- **Dutch copy** — labels switch between Dutch and English across the file; we preserved both.
- **Fonts** — Brand-supplied Inter variable font files ship in `fonts/` (upright + italic). `colors_and_type.css` loads them via `@font-face`; no Google Fonts dependency needed. Some cards/kits still load Inter from Google Fonts as a belt-and-braces fallback; this can be removed.
- **Icons** — no FontAwesome file in-repo. Lucide CDN is used as a substitute in the UI kits — flagged above.

## Help iterate

**Please review the cards in the Design System tab and tell us what's off.** Specifically helpful: a licensed Inter font file, the FontAwesome Pro subset you actually ship, additional brand photography, and any product screens beyond what's in the Figma today.
