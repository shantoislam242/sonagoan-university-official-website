# Phase 3 — University Variant Pages

> **For agentic workers:** REQUIRED SUB-SKILL: superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax. Many tasks dispatch parallel subagents — that is intentional.

**Goal:** Convert the 29 University-variant static HTML pages to Next.js App Router routes, each using `HeaderUniversity` + `FooterUniversity` + `MobileMenu` + `SearchPopup` from Phase 2, plus inline page-specific body markup. `BackToTop` is already mounted globally in the layout (Phase 2 fix). UI parity with the static site is the contract.

**Architecture:** Each route is `app/<route>/page.tsx`. The placeholder `app/page.tsx` from Phase 1 is replaced by the real home page (Task 1). All pages export `metadata` via `buildMetadata(...)`. Backend-integration TODO markers are added above any block whose content will become dynamic per the spec's marker table.

**Tech Stack:** Same as Phase 2. No new dependencies expected.

**Spec reference:** `docs/superpowers/specs/2026-06-01-su-website-nextjs-conversion-design.md` (FROZEN), section "Phase 3 — University variant pages (~29 pages)".

---

## Page conversion procedure (shared template)

Every page in this phase follows this procedure. Each task below names its
specific source file + URL route + key sections; the procedure is the same.

### Inputs

- **Source file:** `unipix-extracted/unipix-Main/<page>.html`
- **Target route folder:** `app/<route>/` (or `app/` for `/`)
- **Variant components:** `HeaderUniversity`, `FooterUniversity`,
  `MobileMenu`, `SearchPopup` from `@/components/layout/`
- **PageBanner** (`@/components/sections/PageBanner`) — used on every page
  EXCEPT the home routes (`/`, `/index-two`, `/index-three`, `/index-four`,
  `/index-five`), which use their own hero/slider markup instead

### Steps

1. **Read source HTML.** Lines: from the opening `<header>...</header>`
   close (typically around line 138) through the closing `</footer>`
   (typically around line 1004). The body block is what gets converted.

2. **Extract the body region.** The body is everything between the header
   close and the footer open. The `<div class="search-input-area">` and
   `<div class="progress-wrap">` near the page bottom are NOT included —
   they are already global (SearchPopup mounted by the page itself once
   it imports it; BackToTop in layout).

3. **Convert body markup to JSX** per the conversion rules below.

4. **Compose the page** using the import structure shown in the page
   template below.

5. **Add `metadata` export** using `buildMetadata({ title, description, path })`.

6. **Add backend-integration TODO markers** above any block whose content
   will become dynamic (see Marker Table further down).

7. **Run `npm run typecheck`** from `su-website-next/`. Must be clean
   before committing.

8. **Commit** at the end of each batch (per the task instructions).

### Conversion rules (apply verbatim)

| Source                                                        | JSX                                                  |
|---------------------------------------------------------------|------------------------------------------------------|
| `class="..."`                                                 | `className="..."`                                    |
| `for="..."`                                                   | `htmlFor="..."`                                      |
| `tabindex="N"`                                                | `tabIndex={N}`                                       |
| `autocomplete="..."`                                          | `autoComplete="..."`                                 |
| `readonly`                                                    | `readOnly`                                           |
| `maxlength="N"`                                               | `maxLength={N}`                                      |
| Inline `onclick="..."`, `onchange="..."`, etc.                | Remove entirely                                      |
| `<a href="X.html">Y</a>`                                      | `<Link href="/X">Y</Link>` (strip `.html`)            |
| `<a href="index.html">`                                       | `<Link href="/">`                                    |
| `<a href="#">`, `<a href="#section">`                         | Keep as `<a href="#...">`                            |
| `<a href="mailto:...">`, `<a href="tel:...">`                 | Keep as plain `<a>`                                  |
| `<a href="https://...">`                                      | Keep as plain `<a>`                                  |
| `<a href="javascript:void(0)">`                               | Keep as plain `<a>`                                  |
| `<a href="callto:...">`                                       | Keep as plain `<a>` (template idiom; not standard)   |
| `target="_blank"` + `rel="..."`                               | Preserve verbatim                                    |
| `<img src="assets/foo.svg">`                                  | `<img src="/assets/foo.svg" />` (leading slash + self-close) |
| `<input>`, `<br>`, `<hr>`, `<meta>`, `<link>`                 | Self-close `/`                                       |
| `<!-- ... -->`                                                | `{/* ... */}` or delete trivial                      |
| `&nbsp;`                                                      | `{' '}`                                              |
| `style="prop:val; prop2:val2"`                                | `style={{ prop: 'val', prop2: 'val2' }}` (camelCase) |
| `background-image: url(assets/...)`                           | `background-image: url(/assets/...)` (leading slash) |
| SVG `stroke-dasharray`, `stroke-dashoffset`, `fill-rule`, etc | camelCased (`strokeDasharray`, …)                    |
| `<form action="..." method="...">`                            | If page has no submission target: drop `action`/`method`; if interactive, see below |
| `<option selected>`                                           | Use `defaultValue` on parent `<select>`              |
| `<textarea>text</textarea>`                                   | `<textarea defaultValue="text" />`                    |
| Source typos in `href` (e.g., `reasearch.html`)               | Preserve verbatim (`/reasearch`)                     |

### Page template (use exactly this shape)

```tsx
import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import MobileMenu from '@/components/layout/MobileMenu';
import SearchPopup from '@/components/layout/SearchPopup';
import PageBanner from '@/components/sections/PageBanner'; // omit for /, /index-two, ..., /index-five
import Link from 'next/link';
// import AdmissionForm from '@/components/forms/AdmissionForm'; // only on /admission

export const metadata = buildMetadata({
  title: '<page title>',
  description: '<one-sentence description>',
  path: '<route>',
});

export default function <PageName>Page() {
  return (
    <>
      <HeaderUniversity />
      <MobileMenu />
      <SearchPopup />

      {/* For inner pages — use PageBanner. For home routes, paste the
          hero/slider markup directly here. */}
      <PageBanner
        title="<title>"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: '<title>' }]}
      />

      {/* TODO: <Topic> — replace static block with data from /api/... */}
      {/* paste converted page body here */}

      <FooterUniversity />
    </>
  );
}
```

### Marker Table (backend integration TODOs)

Add a comment `// TODO: <topic>` (preserve exact spelling) immediately
above each JSX block whose content will become database-driven.

| Marker                              | Pages where it applies                                                                |
|-------------------------------------|---------------------------------------------------------------------------------------|
| `// TODO: Faculty Members`          | `/faculty`, `/faculty-details`, `/faculty-sub`, `/faculty-sub-details`, home variants |
| `// TODO: Departments`              | `/academic`, `/academic-area`, `/department-details`, `/faculty-sub`                  |
| `// TODO: Events`                   | `/event`, `/event-details`, home variants                                             |
| `// TODO: News`                     | Home variants, "Latest news" blocks                                                    |
| `// TODO: Notices`                  | `/notice-details`, home variants                                                       |
| `// TODO: Research Publications`    | `/research`, `/single-resource`                                                        |
| `// TODO: Admission Information`    | `/admission`, `/scholarship`                                                           |
| `// TODO: Blog Posts`               | `/blog`, `/blog-grid`, `/blog-list`, `/blog-details`, home variants                    |
| `// TODO: Programs`                 | `/program-single`, home variants                                                       |
| `// TODO: Alumni`                   | `/alumni`                                                                              |
| `// TODO: Tuition Fees`             | (no University-variant tuition page; covered in Phase 4 SC)                            |
| `// TODO: Campus Life`              | `/campus-life`                                                                         |

---

## Pre-flight

- [ ] **Step 0a: Branch + clean tree**

```bash
cd "c:/Users/shant/Downloads/Sonargoan University Official website/su-website-next"
git rev-parse --abbrev-ref HEAD       # expect: nextjs
git status --porcelain                # expect: empty
git log --oneline -5                   # expect: Phase 2 commits
```

- [ ] **Step 0b: Components exist**

```bash
ls components/layout/HeaderUniversity.tsx components/layout/FooterUniversity.tsx \
   components/layout/MobileMenu.tsx components/layout/SearchPopup.tsx \
   components/sections/PageBanner.tsx components/sections/BackToTop.tsx \
   components/forms/AdmissionForm.tsx lib/metadata.ts
```
Expected: all listed without errors.

- [ ] **Step 0c: Baseline build**

```bash
npm run build 2>&1 | tail -5
```
Expected: zero errors, zero warnings.

---

## Task batches

Pages are batched by topic to give per-batch reviewability and bound the
per-commit diff size. Each batch follows: dispatch parallel subagents →
collect → typecheck → fix any errors → batch commit. After all batches,
final integration commit + push.

### Task 1 — `/` (home) — reference page (1 page)

**Source:** `unipix-extracted/unipix-Main/index.html`
**Route:** `app/page.tsx` — REPLACES the Phase 1 placeholder
**Topic:** Programs, Faculty Members, Events, News, Notices (per Marker Table)

- [ ] **Step 1.1:** Read source `index.html` from `</header>` (line ~138) through `<footer ...>` (line ~943) — body region only
- [ ] **Step 1.2:** Convert per rules. Inline the hero/slider markup directly (no PageBanner on home). Add appropriate TODO markers above program-cards, faculty-cards, event-cards, news-cards, notice blocks
- [ ] **Step 1.3:** Replace `app/page.tsx`. Use page template; `description` = "Sonargoan University official website — programs, faculty, events, admission, and campus life."; `path: '/'`
- [ ] **Step 1.4:** Typecheck. Open http://localhost:3000/ in browser; verify hero renders, plugins drive sliders
- [ ] **Step 1.5:** Commit `feat(phase3): home page / (Phase 3.1)`

### Task 2 — Alt-homepage variants (4 pages, parallel)

**Pages:** `/index-two`, `/index-three`, `/index-four`, `/index-five`
**Sources:** `index-two.html`, `index-three.html`, `index-four.html`, `index-five.html`
**Topic:** Same markers as Task 1 (per page's actual sections)

- [ ] **Step 2.1:** Dispatch 4 parallel subagents — one per route. Each receives source file path, line range (`</header>` close → `<footer ...>` open), and full Page conversion procedure
- [ ] **Step 2.2:** Wait for completion; typecheck `npm run typecheck`
- [ ] **Step 2.3:** Commit `feat(phase3): alt-homepage variants /index-two through /index-five (Phase 3.2)`

### Task 3 — About / Contact / Athletics / Campus Life (4 pages, parallel)

**Pages:** `/about`, `/contact`, `/athletics`, `/campus-life`
**Sources:** `about.html`, `contact.html`, `athletics.html`, `campus-life.html`
**Topic:** Campus Life marker on `/campus-life`; no markers on the others (static content)

- [ ] **Step 3.1:** Dispatch 4 parallel subagents
- [ ] **Step 3.2:** Typecheck
- [ ] **Step 3.3:** Commit `feat(phase3): about/contact/athletics/campus-life (Phase 3.3)`

### Task 4 — Academic + Admission group (4 pages, parallel)

**Pages:** `/academic`, `/academic-area`, `/admission`, `/scholarship`
**Topic:** Departments marker on `/academic`, `/academic-area`. Admission Information marker on `/admission`, `/scholarship`. `/admission` imports `AdmissionForm` component

- [ ] **Step 4.1:** Dispatch 4 parallel subagents. Subagent for `/admission` is told: import `AdmissionForm` at the point in the source where the admission form lives (lines 243-347 of admission.html) — REPLACE that block with `<AdmissionForm />` instead of converting the form inline
- [ ] **Step 4.2:** Typecheck
- [ ] **Step 4.3:** Commit `feat(phase3): academic + admission group (Phase 3.4)`

### Task 5 — Faculty + Department group (5 pages, parallel)

**Pages:** `/faculty`, `/faculty-details`, `/faculty-sub`, `/faculty-sub-details`, `/department-details`
**Topic:** Faculty Members + Departments markers per Marker Table

- [ ] **Step 5.1:** Dispatch 5 parallel subagents
- [ ] **Step 5.2:** Typecheck
- [ ] **Step 5.3:** Commit `feat(phase3): faculty + department group (Phase 3.5)`

### Task 6 — Event + Blog + Notice group (7 pages, parallel)

**Pages:** `/event`, `/event-details`, `/blog`, `/blog-grid`, `/blog-list`, `/blog-details`, `/notice-details`
**Topic:** Events, Blog Posts, Notices markers per Marker Table

- [ ] **Step 6.1:** Dispatch 7 parallel subagents
- [ ] **Step 6.2:** Typecheck
- [ ] **Step 6.3:** Commit `feat(phase3): event + blog + notice group (Phase 3.6)`

### Task 7 — Research + Alumni + Program + Resource (4 pages, parallel)

**Pages:** `/research`, `/alumni`, `/program-single`, `/single-resource`
**Topic:** Research Publications, Alumni, Programs markers per Marker Table

- [ ] **Step 7.1:** Dispatch 4 parallel subagents
- [ ] **Step 7.2:** Typecheck
- [ ] **Step 7.3:** Commit `feat(phase3): research + alumni + program + resource (Phase 3.7)`

### Task 8 — Final integration verification + push

- [ ] **Step 8.1:** `npm run build` from `su-website-next/`. Confirm all 29 University routes appear in the build output as `○ Static`. Zero errors, zero warnings.
- [ ] **Step 8.2:** Smoke-test a sampling of routes in dev mode: `/`, `/about`, `/admission`, `/faculty`, `/blog-details`. Open each in browser; confirm visual parity with static template
- [ ] **Step 8.3:** Iterative extraction review — `grep -rh "Program card\|Faculty card\|Blog card" app/ | sort | uniq -c` to find any pattern that appeared 3+ times. If found, extract to `components/cards/` and update referencing pages. This may produce its own commit
- [ ] **Step 8.4:** Copy Phase 3 plan into project: `cp ../docs/superpowers/plans/2026-06-01-phase3-university-pages.md docs/superpowers/plans/`
- [ ] **Step 8.5:** Final commit `chore: add Phase 3 plan doc (Phase 3.8)` and `git push`
- [ ] **Step 8.6:** Report back — commit summary, branch URL, count of routes added, list of extracted components (if any) from iterative extraction

---

## Subagent brief template (used by Tasks 2–7)

When dispatching a subagent for a page, give it this self-contained prompt
(replace placeholders in `<…>`):

```
Convert one static HTML page's body to a Next.js App Router page.tsx. Do not commit. Do not run dev server. Run `npm run typecheck` only.

**Source file:** c:/Users/shant/Downloads/Sonargoan University Official website/unipix-extracted/unipix-Main/<page>.html
**Source body region:** lines from the close of <header>…</header> (around line N) through the open of <footer…> (around line M). Read the file to confirm the exact boundaries.

**Target file:** c:/Users/shant/Downloads/Sonargoan University Official website/su-website-next/app/<route>/page.tsx (create the route folder)

**Page template** (use exactly this shape, adapting imports per page needs):

  [paste full page template from Phase 3 plan]

**Conversion rules:** apply the table from the Phase 3 plan ("Conversion rules") verbatim.

**Backend-integration TODO markers required for this page:** <list per Marker Table>

**Metadata:** title = "<page title>", description = "<one sentence>", path = "<route>".

**PageBanner usage:** <yes / no — yes for all routes except / and /index-*>; if yes, title=<title> and breadcrumb=[{label:'Home',href:'/'},{label:'<title>'}].

**Special instructions for this page:** <e.g., "use AdmissionForm component for the form block at source lines 243-347" / "" />

**Steps:** Read source body region → convert per rules → write page.tsx → run `npm run typecheck` from c:/Users/shant/Downloads/Sonargoan University Official website/su-website-next/ → report (a) file path, (b) link count, (c) typecheck status, (d) anomalies.

Stop after typecheck succeeds.
```

---

## Phase 3 done. Next:

Phase 4 — Kids + SC variant pages (~22 pages). Same procedure as Phase 3
but using `HeaderKid`/`FooterKid` and `HeaderSc`/`FooterSc`. The
`kid-.html` typo file is resolved per the spec: diff it against
`index-kid.html`; if equivalent, skip; otherwise add as `/kid`.
