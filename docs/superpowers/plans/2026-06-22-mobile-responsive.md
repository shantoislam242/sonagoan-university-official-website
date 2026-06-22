# Mobile Responsive Audit & Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every route of the SU website render correctly on phones (down to 360px) without deleting or redesigning any content.

**Architecture:** Approach A — add a small global mobile safety-net to `design-system.css`, then audit and fix the custom-built SU pages group by group, finishing with a spot-check of template demo pages and a full HTTP-200 sweep.

**Tech Stack:** Next.js 15 App Router, React 19, plain CSS (`public/assets/css/style.css` + `design-system.css`), per-page inline `<style>` blocks. Tailwind preflight is OFF; transforms/widths use raw CSS. Dev server runs on `localhost:3000`.

## Global Constraints

- Nothing is deleted — no routes, components, or content removed.
- No redesign — responsiveness fixes only.
- No em dashes (`—` / `&mdash;`) in any text added/edited.
- Desktop (≥992px) layout must not regress.
- Target widths: 360px (small phone), 375–480px (phone), 768–991px (tablet).
- Push workflow: commit on `nextjs`; push to BOTH `nextjs` and `main` via inline-token URL, then `git update-ref` both remotes (credential manager auth fails). Mask the token in output with `sed 's/ghp_[A-Za-z0-9]*/***/g'`.
- Mobile-first CSS: column layouts start at `grid-template-columns: 1fr` (or a single flex column) and add columns at `min-width` breakpoints.

---

### Task 1: Global mobile safety-net

**Files:**
- Modify: `public/assets/css/design-system.css` (append a new block near the existing `body.page { overflow-x: clip }` rule, ~line 123)

**Interfaces:**
- Produces: site-wide rules that later tasks rely on (fluid media, overflow guard). Later tasks assume `img`/`svg`/`video`/`iframe` already cap at `max-width: 100%`, so per-page fixes only handle layout-specific issues.

- [ ] **Step 1: Read the area around the existing overflow guard**

Run: read `public/assets/css/design-system.css` lines 110–130 to confirm the `body.page { overflow-x: clip ... }` rule and place the new block right after it.

- [ ] **Step 2: Append the safety-net block**

Add to `public/assets/css/design-system.css`:

```css
/* ---- Global mobile safety-net (responsive pass 2026-06-22) ---- */
/* No media should force the page wider than the viewport. */
img, svg, video, iframe { max-width: 100%; }
img { height: auto; }
/* Wide content (tables, long words) scrolls inside its wrapper, not the page. */
table { max-width: 100%; }
/* Long unbroken strings (emails, URLs) wrap instead of overflowing. */
.su-break { overflow-wrap: anywhere; word-break: break-word; }
```

Note: do NOT add a blanket `* { min-width: 0 }` — apply `min-width: 0` only on specific grid/flex children in later tasks where overflow is found.

- [ ] **Step 3: Verify the dev server compiles and the homepage is 200**

Run: `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/`
Expected: `200`

- [ ] **Step 4: Confirm no horizontal-overflow regression on a wide page**

Run: `curl -s http://localhost:3000/academic | grep -o "max-width: 100%" | head -1`
Expected: prints `max-width: 100%` (rule is being served).

- [ ] **Step 5: Commit**

```bash
git add public/assets/css/design-system.css
git commit -m "feat(responsive): global mobile safety-net (fluid media, overflow guard)"
```

---

### Task 2: Homepage (index-three)

**Files:**
- Modify: `app/index-three/page.tsx` (the `<style>` blocks + section inline styles)

**Interfaces:**
- Consumes: global safety-net from Task 1.
- Produces: nothing other tasks depend on.

- [ ] **Step 1: Audit the homepage for fixed widths / overflow**

Run: `grep -nE "width: [0-9]{3,}px|min-width: [0-9]{3,}px|white-space: nowrap" app/index-three/page.tsx`
Read each hit and the surrounding section. The video hero already uses `100vh` + media queries; the "Our Programs", About, and stats sections use grids — confirm each multi-column grid has a `1fr` base and stacks below ~600px.

- [ ] **Step 2: Apply mobile-first fixes**

For every grid/flex section in the page that is multi-column on desktop, ensure a single-column base and that fixed pixel widths become `max-width` + `width: 100%`. Example pattern to apply where a fixed two-column block lacks a mobile base:

```css
.prog2-wrap { display: grid; grid-template-columns: 1fr; gap: 32px; }
@media (min-width: 900px) { .prog2-wrap { grid-template-columns: 1fr 1fr; } }
```

Reduce oversized section vertical padding on small screens where it dominates the viewport:

```css
@media (max-width: 575px) {
  /* example: trim 90px section padding to ~56px on phones */
}
```

- [ ] **Step 3: Verify homepage renders 200 and hero markup intact**

Run: `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/index-three`
Expected: `200`

- [ ] **Step 4: Commit**

```bash
git add app/index-three/page.tsx
git commit -m "fix(responsive): homepage sections stack cleanly on mobile"
```

---

### Task 3: Leadership letter & office pages

**Files:**
- Modify: `app/chairman/page.tsx`, `app/general-secretary/page.tsx`, `app/vice-chancellor/page.tsx`, `app/pro-vice-chancellor/page.tsx`, `app/vc-office/page.tsx`, `app/pro-vc-office/page.tsx`, `app/board-of-trustees/page.tsx`, `app/former-vc/page.tsx`

**Interfaces:**
- Consumes: global safety-net from Task 1.

- [ ] **Step 1: Confirm the two-column hero & letter blocks stack on mobile**

Run: `grep -nE "grid-template-columns: 380px|grid-template-columns: 240px|min-width: 860px|min-width: 640px" app/chairman/page.tsx app/general-secretary/page.tsx app/vice-chancellor/page.tsx app/pro-vice-chancellor/page.tsx app/former-vc/page.tsx`
Each two-column rule must sit inside a `@media (min-width: …)` with a `1fr` base above it. Verify the `.{prefix}-hero` and `.{prefix}-letter` rules follow this. (They were authored mobile-first; this step confirms and fixes any that are not.)

- [ ] **Step 2: Fix the hero portrait max-width on phones**

Ensure each `.{prefix}-hero__media { max-width: 380px }` also centers on mobile so the portrait is not left-stranded:

```css
@media (max-width: 859px) { .chm-hero__media { margin: 0 auto; } }
```

Apply the equivalent (`gs-`, `vc-`, `pvc-`) per file.

- [ ] **Step 3: Verify all eight routes return 200**

Run:
```bash
for p in chairman general-secretary vice-chancellor pro-vice-chancellor vc-office pro-vc-office board-of-trustees former-vc; do \
  echo -n "$p "; curl -s -o /dev/null -w "%{http_code}\n" "http://localhost:3000/$p"; done
```
Expected: every line ends in `200`.

- [ ] **Step 4: Commit**

```bash
git add app/chairman app/general-secretary app/vice-chancellor app/pro-vice-chancellor app/vc-office app/pro-vc-office app/board-of-trustees app/former-vc
git commit -m "fix(responsive): leadership letter & office pages stack and center on mobile"
```

---

### Task 4: Academic-office pages

**Files:**
- Modify: `app/academic-affairs/page.tsx`, `app/exam-controller/page.tsx`, `app/iqac-pria/page.tsx`, `app/information-technology/page.tsx`, `app/library-information/page.tsx`, `app/registrar/page.tsx`, `app/human-resource/page.tsx`, `app/planning-development/page.tsx`, `app/purchase/page.tsx`, `app/finance-accounts/page.tsx`

**Interfaces:**
- Consumes: global safety-net from Task 1.

- [ ] **Step 1: Audit the team grids and responsibilities grids**

Run: `grep -nE "repeat\(4|repeat\(3|repeat\(2|minmax\(0, 300px\)|max-w-\[13" app/academic-affairs/page.tsx app/exam-controller/page.tsx app/iqac-pria/page.tsx app/information-technology/page.tsx app/library-information/page.tsx app/registrar/page.tsx app/human-resource/page.tsx app/planning-development/page.tsx app/purchase/page.tsx app/finance-accounts/page.tsx`
Confirm every team/responsibilities grid has a `1fr` base, then `repeat(2,…)` ~600px, then `repeat(3/4,…)` at the larger breakpoint. The wide `!max-w-[1360px]` containers are fine (they shrink); confirm the cards inside use `1fr`/`minmax(0,…)` so they shrink rather than overflow.

- [ ] **Step 2: Fix the library-information side info box**

In `app/library-information/page.tsx` confirm `.lib-about` is `grid-template-columns: 1fr` base and only becomes two-column at `min-width: 900px`; the email/portal link must wrap (add `overflow-wrap: anywhere` to `.lib-info__value` if it overflows).

- [ ] **Step 3: Verify all ten routes return 200**

Run:
```bash
for p in academic-affairs exam-controller iqac-pria information-technology library-information registrar human-resource planning-development purchase finance-accounts; do \
  echo -n "$p "; curl -s -o /dev/null -w "%{http_code}\n" "http://localhost:3000/$p"; done
```
Expected: every line ends in `200`.

- [ ] **Step 4: Commit**

```bash
git add app/academic-affairs app/exam-controller app/iqac-pria app/information-technology app/library-information app/registrar app/human-resource app/planning-development app/purchase app/finance-accounts
git commit -m "fix(responsive): academic-office team & responsibilities grids on mobile"
```

---

### Task 5: Explorer & faculty pages

**Files:**
- Modify: `components/sections/ProgramExplorer.tsx`, `components/sections/DepartmentExplorer.tsx`, `components/sections/FacultyMembersExplorer.tsx`, `app/academic/page.tsx`, `app/academic-area/page.tsx`, `app/faculty-members/page.tsx`, `app/faculty/page.tsx`, `app/faculty/deans/page.tsx`, `app/faculty/science-engineering/page.tsx`, `app/faculty/business/page.tsx`, `app/faculty/arts-humanities/page.tsx`

**Interfaces:**
- Consumes: global safety-net from Task 1.

- [ ] **Step 1: Audit the explorers for sidebar + table overflow**

Run: `grep -nE "grid-template-columns: 300px|sticky|min-width: 4[0-9]{2}|overflow-x" components/sections/ProgramExplorer.tsx components/sections/DepartmentExplorer.tsx components/sections/FacultyMembersExplorer.tsx`
Confirm: the browse-by sidebar collapses above the content on mobile (single column base); program tables sit in a wrapper with `overflow-x: auto` and the grid child has `min-width: 0` so the table scrolls inside, not the page.

- [ ] **Step 2: Fix the dean's-message 2-column blocks in faculty detail pages**

In `app/faculty/science-engineering/page.tsx`, `business`, `arts-humanities`, confirm the overview 2-column and the Dean's Message `DeanMessage` component stack on mobile. If `components/sections/DeanMessage.tsx` lacks a `1fr` base, fix it there (shared component) so all three pages benefit.

- [ ] **Step 3: Verify routes return 200**

Run:
```bash
for p in academic academic-area faculty-members faculty faculty/deans faculty/science-engineering faculty/business faculty/arts-humanities; do \
  echo -n "$p "; curl -s -o /dev/null -w "%{http_code}\n" "http://localhost:3000/$p"; done
```
Expected: every line ends in `200`.

- [ ] **Step 4: Commit**

```bash
git add components/sections/ProgramExplorer.tsx components/sections/DepartmentExplorer.tsx components/sections/FacultyMembersExplorer.tsx components/sections/DeanMessage.tsx app/academic app/academic-area app/faculty-members app/faculty
git commit -m "fix(responsive): explorers (sidebar/tables) and faculty pages on mobile"
```

---

### Task 6: Remaining SU content pages

**Files:**
- Modify (only those with issues found): `app/about/page.tsx`, `app/history/page.tsx`, `app/mission-vision/page.tsx`, `app/why-choose-su/page.tsx`, `app/head-of-departments/page.tsx`, `app/advisor-list/page.tsx`, `app/contact/page.tsx`, `app/admission/page.tsx`, `app/campus-life/page.tsx`, `app/research/page.tsx`, `app/athletics/page.tsx`, `app/alumni/page.tsx`, `app/scholarship/page.tsx`, `app/event/page.tsx`

**Interfaces:**
- Consumes: global safety-net from Task 1.

- [ ] **Step 1: Sweep for risk patterns across the group**

Run: `grep -rnE "width: [0-9]{3,}px|min-width: [0-9]{3,}px|white-space: nowrap|grid-template-columns: (repeat\([2-9]|[0-9]+px)" app/about app/history app/mission-vision app/why-choose-su app/head-of-departments app/advisor-list app/contact app/admission app/campus-life app/research app/athletics app/alumni app/scholarship app/event`
For each multi-column rule without a `1fr` mobile base, add the base + breakpoint. The `head-of-departments` grid already stacks; confirm the contact-info row wraps.

- [ ] **Step 2: Apply fixes per page as found**

Apply the mobile-first grid pattern and `overflow-wrap: anywhere` on long contact strings. Reduce dominant section padding on `max-width: 575px` where needed.

- [ ] **Step 3: Verify routes return 200**

Run:
```bash
for p in about history mission-vision why-choose-su head-of-departments advisor-list contact admission campus-life research athletics alumni scholarship event; do \
  echo -n "$p "; curl -s -o /dev/null -w "%{http_code}\n" "http://localhost:3000/$p"; done
```
Expected: every line ends in `200`.

- [ ] **Step 4: Commit**

```bash
git add app/about app/history app/mission-vision app/why-choose-su app/head-of-departments app/advisor-list app/contact app/admission app/campus-life app/research app/athletics app/alumni app/scholarship app/event
git commit -m "fix(responsive): remaining SU content pages on mobile"
```

---

### Task 7: Template demo spot-check & full-route sweep

**Files:**
- Modify (only if a real overflow issue is found): any of `app/index-two`, `app/index-four`, `app/index-five`, `app/blog`, `app/blog-grid`, `app/blog-list`, `app/blog-details`, `app/faculty-details`, `app/faculty-sub`, `app/faculty-sub-details`, `app/department-details`, `app/event-details`, `app/notice-details`, `app/program-single`, `app/single-resource`

**Interfaces:**
- Consumes: global safety-net from Task 1 (already covers most template media overflow).

- [ ] **Step 1: Full-route HTTP-200 sweep**

Run (from project root):
```bash
for p in $(find app -name page.tsx | sed 's#/page.tsx##; s#^app##; s#^$#/#'); do \
  echo -n "$p "; curl -s -o /dev/null -w "%{http_code}\n" "http://localhost:3000$p"; done
```
Expected: every route returns `200`. Investigate any non-200.

- [ ] **Step 2: Spot-check template demo pages for overflow patterns**

Run: `grep -rnE "width: [0-9]{4,}px|min-width: [0-9]{4,}px" app/index-two app/index-four app/index-five app/blog app/blog-grid app/blog-list app/faculty-sub app/single-resource app/program-single`
The Unipix template is responsive; only fix a hit that clearly forces overflow on a real route. Most should need nothing thanks to Task 1.

- [ ] **Step 3: Commit (only if changes were made)**

```bash
git add -A app
git commit -m "fix(responsive): template demo pages spot-check"
```

- [ ] **Step 4: Push everything to both branches**

```bash
REPO=$(git remote get-url origin | sed -E 's#https://[^@]*@#https://#')
AUTH=$(echo "$REPO" | sed -E "s#https://#https://$GH_TOKEN@#")  # GH_TOKEN exported in env, never committed
SHA=$(git rev-parse HEAD)
git push "$AUTH" HEAD:nextjs 2>&1 | sed 's/ghp_[A-Za-z0-9]*/***/g'
git push "$AUTH" HEAD:main   2>&1 | sed 's/ghp_[A-Za-z0-9]*/***/g'
git update-ref refs/remotes/origin/nextjs "$SHA"
git update-ref refs/remotes/origin/main   "$SHA"
```
Expected: both pushes report updated refs.

---

## Self-Review

- **Spec coverage:** Global safety-net → Task 1. Per-page checklist + grouped work order (groups 1–6) → Tasks 2–6. Template spot-check + verification (HTTP 200 sweep, grep risk patterns) → Task 7. All spec sections covered.
- **Placeholders:** None — each task gives exact files, exact grep/curl commands, and the canonical CSS patterns to apply. (Per-page fixes are audit-driven by design; the patterns and commands are concrete.)
- **Type consistency:** N/A (CSS/layout task, no shared function signatures); class-prefix conventions (`chm-`, `gs-`, `vc-`, `pvc-`, etc.) referenced consistently with the existing pages.
