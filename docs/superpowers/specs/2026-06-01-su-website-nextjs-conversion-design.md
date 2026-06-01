# SU Website — Next.js 15 Conversion Design

**Status:** FROZEN — 2026-06-01. Implementation may proceed against this
spec. Further changes require a new amendment section below; do not edit
existing sections.

**Date:** 2026-06-01
**Source:** Unipix static HTML template (renamed to SU Website), already pushed to
`github.com/shantoislam242/sonagoan-university-official-website` (main branch).
**Target:** Next.js 15 App Router project pushed to the same repo on a new branch (`nextjs`).

## Goal

Convert the entire 52-page static HTML template into a Next.js 15 App Router
project written in TypeScript, preserving the existing UI and behavior
**exactly** — no visual or interaction changes. Common sections become
reusable React components. No backend in this phase; form submissions log to
console and show a dummy success message.

## Non-goals (this phase)

- No backend / API routes / database
- No real form submission, email, or persistence
- No wholesale replacement of jQuery plugins with React equivalents (an
  individual swap is permitted under the vendor dependency policy if it is
  the only way to preserve behavior under Next.js navigation)
- No use of `next/image` in this phase — see "Out of scope" for the future
  evaluation plan
- No CSS framework install — template's own bundled CSS (Bootstrap, etc.) is
  served from `/public/assets/css/`
- No SCSS recompile — only the already-built `assets/css/*.css` files are used

## Constraints

- Frontend design must be **pixel-identical** to the static site
- jQuery + the ~18 vendor JS plugins (Bootstrap, Swiper, GSAP, Jarallax,
  Isotope, Magnific Popup, Metismenu, Nice Select, Counterup, Waypoint, etc.)
  must continue to drive UI behavior as-is
- URL parity with the static site (`about.html` → `/about`,
  `index-kid.html` → `/index-kid`) so internal links work with minimal edits

## Tech stack

- Next.js 15 (App Router) + React 19
- TypeScript with default strict mode
- ESLint at the Next.js default config

### Vendor dependency policy

Runtime dependencies are driven by the template's actual needs, not an
artificial minimum. The baseline is `next`, `react`, `react-dom`. Beyond
that:

- **Default — keep template vendor JS as static assets** in `/public/assets/`
  and load via `<Script>`. This is what the template already does, so it
  preserves behavior with zero risk.
- **npm equivalents are permitted** when they are demonstrably better for
  Next.js integration (e.g. easier client-side re-init, TypeScript types,
  tree-shaking) **and** preserve UI/behavior parity. Examples that may be
  reconsidered in later phases if static loading causes problems:
  `jquery`, `bootstrap`, `swiper`, `gsap`, `jarallax`, `magnific-popup`,
  `metismenu`, `imagesloaded`, `isotope-layout`.
- **No dependency is excluded on principle.** If the template requires it,
  it can be installed.

For Phase 1, default to the static-asset path. Only add an npm dependency
when an actual integration problem makes static loading unworkable, and
document the swap inline in the implementation plan.

## Architecture

### Routing — flat routes matching original filenames

Every original HTML file (except the `after-kid copy.html` duplicate) becomes
a Next.js route segment with the same name minus the `.html` extension.

| Static file                  | Next.js route   |
|------------------------------|-----------------|
| `index.html`                 | `/`             |
| `index-two.html` … `-five`   | `/index-two` …  |
| `index-kid.html`             | `/index-kid`    |
| `index-sc.html`              | `/index-sc`     |
| `about.html`                 | `/about`        |
| `about-kid.html`             | `/about-kid`    |
| `about-sc.html`              | `/about-sc`     |
| `admission.html`             | `/admission`    |
| ... (all 52 routes follow the same pattern) | |

The `after-kid copy.html` file is an obvious accidental duplicate and is
skipped. The `admission-form-data.php` file is skipped (backend phase).

A custom `app/not-found.tsx` handles 404 with `HeaderUniversity` +
`FooterUniversity` + a "Page not found" message.

### Project structure

```
su-website-next/
├── app/
│   ├── layout.tsx              # root layout: <head> + vendor CSS + body Scripts
│   ├── page.tsx                # /  (was index.html)
│   ├── <51 page folders>/page.tsx
│   └── not-found.tsx
├── components/
│   ├── layout/
│   │   ├── HeaderUniversity.tsx
│   │   ├── HeaderKid.tsx
│   │   ├── HeaderSc.tsx
│   │   ├── FooterUniversity.tsx
│   │   ├── FooterKid.tsx
│   │   ├── FooterSc.tsx
│   │   ├── MobileMenu.tsx
│   │   └── SearchPopup.tsx
│   ├── sections/
│   │   ├── PageBanner.tsx
│   │   ├── Newsletter.tsx
│   │   └── BackToTop.tsx
│   ├── forms/
│   │   ├── AdmissionForm.tsx
│   │   └── ContactForm.tsx
│   └── system/
│       └── VendorPluginInitializer.tsx
├── lib/
│   └── metadata.ts             # title/description helpers
├── types/
│   └── global.d.ts             # window.jQuery / window.$ types
├── public/
│   └── assets/                 # css, js, images, fonts, files, video — verbatim copy
├── next.config.ts
├── tsconfig.json
└── package.json
```

### Reusable components

Variant-specific shells (the three variants — University, Kids School,
Senior School — have distinct nav/footer markup in the template):

- `HeaderUniversity`, `HeaderKid`, `HeaderSc`
- `FooterUniversity`, `FooterKid`, `FooterSc`
- `MobileMenu`, `SearchPopup` — likely shared across variants once verified;
  if differences appear in implementation, they will be split into variants

Cross-variant sections:

- `PageBanner` — inner-page hero + breadcrumb. Props: `title: string`,
  `breadcrumb: { label: string; href?: string }[]`, `bgImage?: string`
- `Newsletter` — subscribe block at page bottom; submit handler logs + alerts
- `BackToTop` — corner button (logic likely already inside template JS;
  component just renders markup)

Forms:

- `AdmissionForm`, `ContactForm` — `'use client'`, native HTML5 validation,
  `onSubmit` logs `Object.fromEntries(new FormData(...))` to console and shows
  `alert('Application submitted (demo). Backend coming soon.')`, then resets

Page-specific blocks (hero sliders, program cards, alumni grids, blog cards,
etc.) stay inline within each `page.tsx`. They are not shared across pages
and componentizing them adds no reuse value.

### Vendor JS / asset strategy

`unipix-Main/assets/` is copied verbatim to `su-website-next/public/assets/`.
All template-internal URL references (e.g. CSS `background-image: url(../images/...)`)
continue to resolve.

`app/layout.tsx` loads vendor CSS in `<head>` and vendor JS via Next.js
`<Script>` at the end of `<body>`, **preserving the exact load order from
`index.html`**: jQuery first (`strategy="beforeInteractive"`), all plugins
next (`strategy="afterInteractive"`), `main.js` last.

### Server vs Client component policy

App Router defaults every file to a Server Component. `'use client'` is added
only when needed. Default to Server Components — the more JSX stays on the
server, the smaller the client bundle and the fewer the hydration edges.

**Server Components** (no `'use client'`):

- `app/layout.tsx` — provides `<html>`/`<body>`/`<head>`, mounts the root
  shell. The vendor `<Script>` tags and the `VendorPluginInitializer` are
  rendered into it but the layout file itself stays a Server Component
- `app/page.tsx` and every other `app/<route>/page.tsx` — pure static markup
- All section components that render markup with no interactivity:
  `PageBanner`, the variant-specific Footer components (if they have no
  client behavior of their own), and any extracted card components from
  iterative extraction
- `app/not-found.tsx`

**Client Components** (`'use client'` at top of file):

- `components/system/VendorPluginInitializer.tsx` — uses `usePathname()` and
  effects
- `components/forms/AdmissionForm.tsx`, `components/forms/ContactForm.tsx` —
  `onSubmit` handlers, state
- `components/sections/Newsletter.tsx` — submit handler
- `components/layout/MobileMenu.tsx`, `components/layout/SearchPopup.tsx` —
  open/close state, focus management
- `components/sections/BackToTop.tsx` — scroll listener
- Header components if they contain interactive dropdowns/state. If a
  Header is markup-only and relies on jQuery to drive its dropdowns, it
  stays a Server Component.

**Rule of thumb:** a component becomes a Client Component **only** if it
uses one of `useState`, `useEffect`, `useRef`, `usePathname`,
`useSearchParams`, browser-only APIs (`window`, `document`), or attaches
event handlers. If it's purely markup that jQuery later finds and decorates
from outside, it stays a Server Component.

Avoid making a parent a Client Component just to compose a Client child —
Client children can be passed as children/props from Server parents.

### Plugin re-init: `VendorPluginInitializer`

Client-side navigation does not reload the document. jQuery plugins that
attached to DOM at first load will not automatically re-attach to newly
rendered DOM after a `<Link>` navigation. The mitigation lives in **one
place**, not 52: `components/system/VendorPluginInitializer.tsx`.

**Responsibilities:**

- Mounted once inside `app/layout.tsx` (client component)
- Subscribes to `usePathname()` (and `useSearchParams()` if needed)
- On each route change, calls the init functions required to re-attach
  plugins to the new DOM
- Holds all plugin-lifecycle knowledge — pages stay markup-only

**Principle — inspect first, refactor only when required:**

Phase 1 inspects `main.js` to learn how plugins are currently bootstrapped.
Three possible outcomes:

1. **`main.js` is already idempotent** (plugins safely re-run on existing
   DOM) → `VendorPluginInitializer` just re-loads/re-executes the relevant
   init call on route change. No template modification.
2. **`main.js` exposes nothing reusable** (single IIFE that mutates and
   exits) → `VendorPluginInitializer` calls the specific plugin APIs
   directly (e.g. `new Swiper(...)`, `$('.x').magnificPopup(...)`) based on
   what the new page's DOM contains. Original `main.js` is **not** modified.
3. **Only if (1) and (2) prove insufficient** (a plugin genuinely cannot be
   re-init from outside without a wrapper hook) → minimal additive change to
   `main.js`: expose the existing init logic on `window` under a namespaced
   key. Vendor plugin code itself is never modified.

Per-page `useEffect` boilerplate is explicitly avoided. Pages render JSX
only; the initializer owns the lifecycle.

**Escalation order — try these in sequence; never skip a step:**

1. **Re-init via public plugin API from `VendorPluginInitializer`** — call
   the plugin's documented public init (e.g. `new Swiper(selector, opts)`,
   `$(selector).magnificPopup(opts)`) on route change. Works when the
   plugin can be instantiated against existing DOM without a wrapper hook.
2. **Destroy-then-reinit** — for plugins that error on double init, call
   the documented destroy/teardown first (e.g. `swiperInstance.destroy()`,
   `$(selector).magnificPopup('close').data('magnificPopup', null)`) and
   then re-init. Track instances in a ref inside `VendorPluginInitializer`.
3. **Minimal additive hook in `main.js`** — expose the existing init logic
   under a namespaced `window.suInit.<plugin>()` so the initializer can call
   it. Original vendor plugin code is **never** modified; only the
   template's own `main.js` gets a re-entry point added.
4. **Hard reload via plain `<a href>`** — opt the affected link out of
   `<Link>`, force a full document load. **Last resort only.** Triggers a
   visible flash and discards SPA navigation benefits. Allowed only after
   steps 1–3 have been attempted and documented as insufficient, with the
   rationale recorded in an inline comment on the `<a>` tag.

### Hydration mismatch policy

Hydration mismatches happen when the HTML the server rendered does not
match what React produces on the client during the first render. The risk
here is real because jQuery plugins mutate the DOM after hydration, and
because some markup may differ between server and client (date strings,
random IDs, viewport-conditional values).

**Prevention rules:**

- **No non-deterministic values in JSX rendered by Server Components.** No
  `new Date().toLocaleString()`, no `Math.random()`, no `Date.now()`. The
  copyright year in the footer uses a Client Component (`'use client'`)
  with `useEffect`-set state, or a build-time constant.
- **No reading `window`, `document`, `navigator`, or `localStorage` during
  render.** These reads belong in `useEffect`, never in the function body
  of a component that renders on the server.
- **Vendor JS runs after hydration.** Every plugin script tag uses
  `<Script strategy="afterInteractive">`. jQuery itself uses
  `strategy="beforeInteractive"` because plugins depend on `window.jQuery`
  being defined when they execute, but jQuery alone does not mutate DOM —
  the mutation comes from the plugins.
- **No `suppressHydrationWarning` to paper over real mismatches.** This
  attribute is reserved for known, intentional client-only values (e.g.,
  user's local timezone). It is not a debugging shortcut. If a mismatch
  appears, the root cause must be fixed.
- **Markup parity with the static template.** Pages render the same JSX
  shape that the static HTML had. No conditional rendering based on
  `typeof window !== 'undefined'`.

**If a mismatch is detected** during Phase 3/4 verification, the page is
fixed before the batch commit — not deferred. Mismatches in production
mean React drops the entire subtree and re-renders client-side, which
breaks jQuery's view of the DOM and triggers further regressions.

### Metadata strategy

Every route exports `metadata` (Next.js App Router metadata API). Bare
minimum is title + description + Open Graph for sharing.

**Shared shape** (defined once in `lib/metadata.ts`):

```ts
// lib/metadata.ts
import type { Metadata } from 'next';

const siteName = 'SU Website';
const siteUrl = 'https://example.com'; // replaced when domain is known

export function buildMetadata(input: {
  title: string;
  description: string;
  path: string;       // e.g. "/about"
  image?: string;     // OG image, defaults to a site-wide banner
}): Metadata {
  const url = `${siteUrl}${input.path}`;
  const image = input.image ?? '/assets/images/og-default.jpg';
  return {
    title: `${input.title} | ${siteName}`,
    description: input.description,
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName,
      images: [{ url: image }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [image],
    },
  };
}
```

**Per-page usage:**

```ts
// app/about/page.tsx
import { buildMetadata } from '@/lib/metadata';
export const metadata = buildMetadata({
  title: 'About Us',
  description: 'Learn about SU Website — our history, mission, and campus.',
  path: '/about',
});
```

`app/layout.tsx` provides a root-level `metadata` with sensible defaults
that individual pages override. Deep SEO tuning (structured data, sitemap
generation, robots.txt customization) is out of scope; only the basic
title/description/OG shape is required from day one.

### Form behavior

- All forms render visually identical to the static template
- `onSubmit`: `e.preventDefault()` → log to console → `alert(...)` → reset
- HTML5 native validation (`required`, `type="email"`) is preserved from the
  template; no validation library is added
- Newsletter inputs in the footer/sections use the same pattern

### Link handling rules

Apply during page conversion. The same rules apply inside shared components
(header nav, footer, breadcrumbs, etc.).

| Source `href`                       | Conversion                          |
|-------------------------------------|-------------------------------------|
| `about.html`, `blog-details.html`   | `<Link href="/about">` (strip `.html`) |
| `#section`, `#`                     | Plain `<a href="#section">` — unchanged |
| `mailto:info@example.com`           | Plain `<a>` — unchanged             |
| `tel:+8801...`                      | Plain `<a>` — unchanged             |
| `https://...`, `http://...`         | Plain `<a>` — unchanged             |
| `javascript:void(0)`                | Plain `<a>` — unchanged (template idiom) |

**`target="_blank"` is preserved verbatim** on any link that carries it in
the source HTML, along with any accompanying `rel` attribute. If a source
external link lacks `rel="noopener"`, it stays as-is — parity over
hardening in this phase.

Anchor/hash-only links (`#`) remain `<a>` rather than `<Link>` to avoid
Next.js's scroll-to-top behavior, which would change UX.

## Implementation phases

Each phase ends with a git commit so progress is reviewable. Phases 1 and 2
finish before phases 3–4 begin, so the user can verify the foundation works
before bulk page conversion.

**Phase 1 — Scaffolding + assets + inspection**

- Manual Next.js 15 + TypeScript setup (skip `create-next-app` boilerplate)
- `package.json`, `tsconfig.json`, `next.config.ts`, `app/layout.tsx`,
  `types/global.d.ts`, `lib/metadata.ts`
- Copy `assets/` to `public/assets/`
- **Inspect `main.js`** to understand current init structure. Document
  which plugins are wired, in what order, and whether they are idempotent.
  Do **not** modify `main.js` or any vendor plugin file at this stage.
- Placeholder `app/page.tsx` ("Home — coming soon") to verify CSS/JS load
  on a single route
- `npm run dev`; verify in browser that the page renders and vendor JS
  executes without errors
- **Commit:** "Phase 1: Next.js scaffolding + asset migration"

**Phase 2 — Shared components + plugin lifecycle**

- 6 layout components (3 headers, 3 footers), `MobileMenu`, `SearchPopup`
- 3 section components (`PageBanner`, `Newsletter`, `BackToTop`)
- 2 form components (`AdmissionForm`, `ContactForm`)
- **`VendorPluginInitializer`** — designed from Phase 1's `main.js`
  findings. Wired into `app/layout.tsx`. Verified by navigating between two
  pages (e.g. `/` and a placeholder `/about`) and confirming sliders /
  popups / counters re-attach to the new DOM.
- Temporary `/_dev/<component>` routes for visual verification (deleted
  after Phase 2)
- **Commit:** "Phase 2: shared components + plugin initializer"

**User review checkpoint after Phase 2.**

**Phase 3 — University variant pages (~29 pages)**

- `/`, `/index-two`, `/index-three`, `/index-four`, `/index-five`,
  `/about`, `/academic`, `/academic-area`, `/admission`, `/faculty`,
  `/faculty-details`, `/faculty-sub`, `/faculty-sub-details`,
  `/department-details`, `/alumni`, `/event`, `/event-details`, `/blog`,
  `/blog-grid`, `/blog-list`, `/blog-details`, `/contact`, `/research`,
  `/program-single`, `/single-resource`, `/notice-details`, `/scholarship`,
  `/athletics`, `/campus-life`
- Each page uses `HeaderUniversity` + `FooterUniversity` + page-specific body
- Internal HTML links converted per the Link handling rules table
- **Add `metadata` export** per page using `buildMetadata(...)`
- **Add backend-integration TODO markers** (see "Future Backend Integration
  Preparation" section) above any block whose content will become dynamic
- **Iterative component extraction** — pages are converted in batches; when
  the same markup block (e.g. a "Program card", "Faculty card", "Blog card")
  appears in 3+ pages, stop and extract it to `components/cards/`. Pages
  already converted are updated to use the new component. This is
  discovery-driven, not planned upfront.
- **Commit cadence:** one commit per batch of 5–8 pages so review is
  granular. Final phase commit: "Phase 3: University pages"

**Phase 4 — Kids + SC variant pages (~22 pages) + 404**

- Kids (11): `/index-kid`, `/about-kid`, `/admission-kid`, `/campus-kid`,
  `/class-kid`, `/infant-kid`, `/year-kid`, `/after-kid`, `/kid-schedule`,
  `/class-teacher-details`, `/contact-kid`
- SC (11): `/index-sc`, `/about-sc`, `/academic-sc`, `/admission-sc`,
  `/campus-life-sc`, `/tution-fee-sc`, `/tution-fee`, `/primary-school`,
  `/middle-school`, `/senior-school`, `/six-form`
- `kid-.html` — file with trailing-hyphen typo in the source template.
  Phase 1 will diff its content against `index-kid.html`; if equivalent it
  is skipped as a likely accidental copy, otherwise it is added as `/kid`
  (cleaned name).
- `not-found.tsx` (404)
- Each page exports `metadata` and carries appropriate TODO markers
- Same iterative extraction rule as Phase 3 — extract a shared component
  the third time the same block appears
- Full browser sweep — open each route and visually check
- **Commit cadence:** per-batch commits as in Phase 3. Final phase commit:
  "Phase 4: Kids + SC pages, 404"
- Push `nextjs` branch to GitHub

## Future backend integration preparation

Several content areas of this site are static today but will become
database-driven in a later phase. To make that future migration mechanical
rather than archaeological, each such block in the converted JSX is marked
with a TODO comment **immediately above** the block. This both makes the
boundary obvious and gives the future backend phase a `grep`-able list of
insertion points.

**Required marker conventions** (`// TODO: <topic>` directly above the
relevant JSX block; preserve the exact spelling so a single grep finds all
of them):

| Marker                              | Applies to pages                              |
|-------------------------------------|-----------------------------------------------|
| `// TODO: Faculty Members`          | `/faculty`, `/faculty-details`, `/faculty-sub`, `/faculty-sub-details`, any home-page faculty card grid |
| `// TODO: Departments`              | `/academic`, `/academic-area`, `/department-details`, `/faculty-sub` |
| `// TODO: Events`                   | `/event`, `/event-details`, home-page event sections |
| `// TODO: News`                     | Home-page news sections, any "Latest news" block |
| `// TODO: Notices`                  | `/notice-details`, any home-page notice block |
| `// TODO: Research Publications`    | `/research`, `/single-resource`               |
| `// TODO: Admission Information`    | `/admission`, `/admission-kid`, `/admission-sc`, `/scholarship` |
| `// TODO: Blog Posts`               | `/blog`, `/blog-grid`, `/blog-list`, `/blog-details`, home-page blog cards |
| `// TODO: Programs`                 | `/program-single`, home-page program cards    |
| `// TODO: Alumni`                   | `/alumni`                                      |
| `// TODO: Tuition Fees`             | `/tution-fee`, `/tution-fee-sc`               |
| `// TODO: Campus Life`              | `/campus-life`, `/campus-life-sc`, `/campus-kid` |

**Marker format example** in a page:

```tsx
// TODO: Faculty Members — replace this static grid with data from /api/faculty
<div className="row faculty-grid">
  {/* static cards … */}
</div>
```

The text after the topic name is free-form context — the topic itself is
fixed so it stays grep-able. The same marker may appear multiple times in
one file when distinct blocks share a topic; that is expected.

Markers are **comments only**. They do not change runtime behavior. No
mock fetch, no placeholder loading state, no data layer is introduced in
this phase.

### Future dynamic route candidates

Several `*-details` and `*-single` pages currently render one fixed entity
each (a hardcoded blog post, faculty profile, etc.). When the backend
phase lands, these will move to dynamic route segments. The current flat
routes are kept for this phase to preserve URL parity with the static
site; the future migration is one rename per row.

| Phase 1–4 (this spec)        | Future backend phase          |
|------------------------------|-------------------------------|
| `/blog-details`              | `/blog/[slug]`                |
| `/event-details`             | `/event/[id]`                 |
| `/faculty-details`           | `/faculty/[id]`               |
| `/faculty-sub-details`       | `/faculty-sub/[id]`           |
| `/department-details`        | `/department/[id]`            |
| `/notice-details`            | `/notice/[id]`                |
| `/single-resource`           | `/research/[id]` or `/resources/[id]` |
| `/program-single`            | `/program/[slug]`             |
| `/class-teacher-details`     | `/class-teacher/[id]`         |

These rows are informational for this phase — no `[id]`/`[slug]` segment
is created now. The routes stay flat; the TODO markers above their content
blocks already signal the future data swap.

When the backend phase begins, the migration of each row is mechanical:

1. Rename the route folder to add the `[id]` / `[slug]` segment
2. Replace the inline static block (the one carrying the `// TODO:` marker)
   with a server-component data fetch
3. Update internal links across the site to use the new dynamic URL — a
   single repo-wide find/replace per row

Static routes that genuinely have one canonical page (e.g. `/about`,
`/contact`, `/admission`) stay flat permanently. Listing pages (`/blog`,
`/event`, `/faculty`) also stay flat — only the per-entity detail pages
gain dynamic segments.

## Testing

Since the goal is UI parity, the testing strategy is **visual verification in
a real browser**, not automated tests:

- After each phase, `npm run dev` and open every newly-added route
- Compare side-by-side with the static `unipix-Main/` site (served on a
  separate port) for any visible diff
- Check responsive layout at mobile/tablet widths
- Verify forms log to console and show the dummy alert
- Verify internal navigation works (header menu, footer links, breadcrumbs)

No unit tests, no Playwright suite in this phase. Reasoning: the unit of
correctness is "looks identical to static HTML" — automated DOM assertions
would not catch styling drift, and snapshot tests of converted JSX are
circular (they verify the JSX matches itself, not the static source).

## Risks & mitigations

- **jQuery plugin re-init on client navigation** — primary risk.
  Mitigation: centralized `VendorPluginInitializer` (see Architecture).
  Phase 1 inspects `main.js` first; refactoring or wrapping is done only if
  inspection proves inability to re-init from outside. Per-page `useEffect`
  duplication is explicitly avoided. Last-resort fallback: opt the affected
  link out of `<Link>` and force a hard reload.
- **CSS specificity collisions** — template CSS is global; no scoping. Any
  Next.js dev-tools or default styles could conflict. Mitigation: no CSS
  modules, no Tailwind, no global CSS other than the template's bundle.
- **Hydration mismatches** — caused by jQuery mutating DOM before React
  hydrates. Mitigation: vendor JS uses `strategy="afterInteractive"` (runs
  after hydration). jQuery itself uses `beforeInteractive` because plugins
  expect `window.jQuery` defined.
- **Image lazy-load behavior** — preserved by keeping `<img loading="lazy">`
  as plain `<img>`. `next/image` is deferred (see "Out of scope").
- **Iterative extraction during page conversion** — risk of refactoring
  already-converted pages to use a newly-extracted component creates churn
  and possible visual regressions. Mitigation: extract only when a block
  appears in **three or more** pages; visually re-check every previously
  converted page that adopts the new component before the next commit.
- **Vendor dependency drift** — if an npm version of a plugin is swapped in
  mid-project, behavior may diverge subtly from the static-asset version.
  Mitigation: vendor dependency policy defaults to static assets; a swap
  to npm requires inline justification in the implementation plan.

## Out of scope (future phases)

- Backend / API routes / database for forms (admission, contact, newsletter)
- Real email delivery
- Authentication / login pages
- Content management — content remains static in JSX for now; static-to-
  dynamic migration is staged via the TODO markers documented above
- **`next/image` evaluation** — deferred to a dedicated future phase that
  runs only after pixel parity with the static site is confirmed across
  every route. At that point, candidate images (large hero banners, blog
  thumbnails, gallery images) are migrated in a separate branch and
  visually diff-tested. Logos, SVGs, and icons stay as plain `<img>` or
  inline SVG. No image optimization happens in Phase 1–4.
- Code splitting beyond Next.js defaults
- Deep SEO tuning (structured data / JSON-LD, sitemap generation, robots
  customization, canonical/alternate locales)
- Automated tests
- Removal of unused variant pages (Kids / SC) — kept per user request
