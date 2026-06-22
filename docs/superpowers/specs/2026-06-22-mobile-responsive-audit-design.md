# Mobile Responsive Audit & Fixes — Design

**Date:** 2026-06-22
**Project:** Sonargaon University website (`su-website-next`, Next.js 15 App Router)

## Goal

Make every page of the site render correctly on mobile devices (down to 360px
width). Nothing is deleted; no content is removed. This is a responsiveness pass
only — layout/CSS fixes so all existing content displays well on phones and
tablets.

## Scope

All 57 routes under `app/**/page.tsx`, including template demo leftovers
(index-two/four/five, blog*, faculty-sub*, single-resource, program-single,
etc.). Priority is the custom-built SU pages (built with bespoke inline styles
and `<style>` blocks) since those carry the highest risk of non-responsive
layout; the Unipix template demo pages ship largely responsive and get a
spot-check.

## Target breakpoints

- Small phone: down to **360px**
- Phone: 375–480px
- Tablet: 768–991px
- Desktop: ≥992px (already working)

## Approach: Global safety-net + per-page audit

### 1. Global mobile safety-net (`public/assets/css/design-system.css`)

Add a small set of global rules that fix the most common breakage site-wide in
one place:

- `img, video, svg, iframe { max-width: 100%; }` (img also `height: auto`) so no
  media forces the page wider than the viewport.
- Keep the existing `body.page { overflow-x: clip }` horizontal-overflow guard.
- Ensure grid/flex children that hold wide content use `min-width: 0` so wide
  tables/text scroll inside their wrapper rather than stretching the page.
- Confirm section padding and `Container` horizontal padding already scale down
  on mobile (they do via existing responsive rules) — verify, adjust if needed.

These rules must not regress desktop layout.

### 2. Per-page audit checklist

For each page, review and fix:

- Horizontal overflow caused by fixed `px` widths or large `min-width`.
- Multi-column layouts have a single-column **mobile-first base** (`1fr`) with
  columns added at breakpoints.
- Headings / large text use `clamp()` rather than fixed large sizes.
- Card grids stack to 1 column on small phones.
- Two-column hero / letter pages (chairman, general-secretary, vice-chancellor,
  pro-vice-chancellor) stack vertically on mobile.
- Wide tables (ProgramExplorer, academic info) scroll within their wrapper.
- Buttons / links have adequate tap targets.

### 3. Work order (grouped)

1. Homepage (`index-three` / `/`) — most complex (video hero, sticky behaviour).
2. Leadership letter pages + office pages (`chairman`, `general-secretary`,
   `vice-chancellor`, `pro-vice-chancellor`, `vc-office`, `pro-vc-office`,
   `board-of-trustees`, `former-vc`).
3. Academic-office pages (`academic-affairs`, `exam-controller`, `iqac-pria`,
   `information-technology`, `library-information`, `registrar`,
   `human-resource`, `planning-development`, `purchase`, `finance-accounts`).
4. Explorer pages (`academic`, `academic-area`, `faculty-members`) + faculty
   pages (`faculty`, `faculty/deans`, `faculty/science-engineering`,
   `faculty/business`, `faculty/arts-humanities`).
5. Remaining SU content pages (`about`, `history`, `mission-vision`,
   `why-choose-su`, `head-of-departments`, `advisor-list`, `contact`,
   `admission`, `campus-life`, `research`, `athletics`, `alumni`, `scholarship`,
   `event`, `blog*`, details pages).
6. Template demo leftovers (`index-two/four/five`, etc.) — spot-check.

## Verification

Browser visual rendering is not available to the implementer, so verification is:

- Each touched route returns HTTP 200 (dev server / build).
- Code review of `<style>` blocks and inline styles for correct media queries
  and absence of overflow patterns.
- Grep for risk patterns: fixed `width:` in px, large `min-width:`,
  `white-space: nowrap` on wide content, fixed `height:` on layout containers.
- Final visual confirmation on a real phone is done by the user.

## Non-goals

- No deletion of routes, components, or content.
- No refactor into shared components (out of scope for this pass).
- No redesign — only responsiveness fixes.
