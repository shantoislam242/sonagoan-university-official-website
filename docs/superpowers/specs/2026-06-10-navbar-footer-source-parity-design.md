# Navbar / Footer / Theme — Source Parity Design

**Date:** 2026-06-10
**Goal:** Make the SU site's top bar + middle bar + nav bar (`SUNavbar`) and
footer (`SUFooter`) render **pixel-identical to the source project**
(Mechanical-Engineering / olive.vercel.app). Hero/banner sections are **out of
scope** and must not change.

## Background / root cause

The template's `public/assets/css/style.css` sets `html { font-size: 10px }`
(the old "62.5%" trick). Every Tailwind utility that resolves to `rem`
(`text-sm`, `px-5`, `gap-6`, `rounded-lg`, …) therefore renders at **62.5%** of
its intended size. `SUNavbar` still uses many such rem utilities, so its nav
items, dropdowns, and top-bar socials render cramped/small versus source.
`SUFooter` already uses inline `px` throughout and is unaffected.

`rem` is **root-relative**, so it cannot be reset per-section. Fix = pin every
rem-dependent value in `SUNavbar` to an absolute `px` value (inline style or
`text-[16px]`-style arbitrary utility), exactly as done for `JourneyCTA`.

## Scope of work

### 1. Theme colors — verify only (no change expected)
`design-system.css` already maps the navy/magenta/amber palette and
`tailwind.config.ts` sets `primary #2B3175`, `accent #CC1579`. Confirm these
match source's `--color-primary`/`--color-accent`. No edits anticipated.

### 2. Footer — verify only (no change expected)
`SUFooter` is structurally faithful (Brand+contact / Useful Link / Get in Touch
/ Quick Link / Campuses / 8 socials / copyright / legal / scroll-to-top) and
uses inline px. Confirm side-by-side with source; edit only if a gap appears.

### 3. Navbar — make source-exact (the real work)

Two changes combined: **(A)** convert all remaining rem utilities to px, and
**(B)** revert 5 deliberate deviations back to source values. Keep the existing
inline-color / inline-height defenses that protect against template `style.css`
cascade — those are still needed.

#### B. Deviations to revert to source

| # | Element | Current (SU) | Source target |
|---|---------|--------------|---------------|
| 1 | Top bar height | 36px | **40px** (`h-10`) |
| 2 | Top bar left items | hug viewport-left (`paddingLeft:24`) | **Container-aligned** (`max-w-[1600px]`, matches logo edge) |
| 3 | Middle bar (scrolled) bg | gray `#f3f4f6` | **white/95 + backdrop-blur** (`rgba(255,255,255,0.95)`, blur), border-gray-50, shadow `0 4px 20px rgba(0,0,0,0.02)` |
| 4 | Bottom nav bar | gray `#f3f4f6`, height 60px | **white/95 + backdrop-blur**, height **56px** (`h-14`) |
| 5 | Compact nav (scrolled) | `h-12`, no x-padding | **`h-11`** (44px), `px-1 xl:px-3` (4/12px) |

#### A. Source-exact px values (intended at 16px base)

**Top bar** (`hidden md:flex`, height 40 / 0 when scrolled):
- Left: bg `#CC1579`, `flex-grow`, pr 16, **Container max-w-1600**. Items: gap 4,
  **font-size 11**, white `rgba(255,255,255,0.9)`, each link px 8 uppercase
  tracking-wider; separator `|` `rgba(255,255,255,0.3)`.
- Right: bg `#2B3175`, px 40, gap **24**, **font-size 11**. Each social: gap 6,
  icon 12 (YouTube 14), uppercase tracking-widest, hover→accent.

**Middle bar:**
- Not scrolled: bg white, border-gray-100, py 16.
- Scrolled: bg `rgba(255,255,255,0.95)` + `backdrop-blur`, border-gray-50, py 8,
  shadow `0 4px 20px rgba(0,0,0,0.02)`.
- Container max-w-1600, flex justify-between items-center.
- Logo: not-scrolled 40 (responsive 32/36/40 = `h-8 md:h-9 xl:h-10`), scrolled
  28/32 (`h-7 md:h-8`), `max-w-[42vw]`, object-contain.
- Right cluster: gap 4 / lg 12, `-mr-3 lg:mr-0`.
  - ERP / Convoc. Reg. / Verification: padding **10/16** (`py-2.5 px-4`),
    font-size 14, bg-gray-50 hover gray-100, rounded **8**, border-gray-100,
    shadow-sm, color `#374151`, icon 16 accent, gap 8.
  - Apply Now: padding **10/20** (`py-2.5 px-5`), font-size 14, gradient
    `#2B3175→#CC1579`, white, rounded 8, shadow-md, gap 8.
  - Quick-access btn (scrolled): pad 10, rounded 8, bg `#eff6ff`, border
    `#dbeafe`, color `#2B3175`, icon 20. Dropdown: w 320, p 12, rounded 12,
    grid-cols-3 gap 4; item p 12 gap 6 rounded 8, icon 22, font-size 12.
- Mobile toggles: pad 8, search icon 24, menu icon 28.

**Bottom bar** (not scrolled, `hidden lg:block`): bg `rgba(255,255,255,0.95)` +
blur, border-gray-50, shadow `0 4px 20px rgba(0,0,0,0.02)`, Container max-w-1600,
**height 56**, items centered, gap 2 / xl 4.

**NavGroup (non-compact):** `px-1.5 xl:px-5` → **6 / 20**, **height 56**, gap
2/6, font-size **12 / xl 15**, font-medium, gray-800 hover accent. ChevronDown
13. Hover underline: bottom bar `h-1`(4px) accent, width 0→full.
- Dropdown: min-w 280, py 12, rounded 8, border-gray-100, shadow-premium; title
  px 20 / pt 4 pb 12, font-size 15, border-b gray-200; items px 20 py 10,
  font-size 14, gray-700 hover accent bg; ChevronRight 14.

**NavGroup (compact):** height **44** (`h-11`), `px-1 xl:px-3` → 4/12, gap 2/4,
font-size **11 / xl 14**, font-bold. ChevronDown 12.

**Mobile drawer** (`w-[min(85vw,340px)]`): px 16, pt 32 pb 12 header; section
buttons py 12 font-size 14; children py 6 pl 12 font-size 13; Apply Now py 12
font-size 14 rounded 8 bg-primary; Quick Links grid-cols-2 gap-x16 gap-y6
font-size 12.5; Services grid-cols-3 gap 8, item py 12 px 4 rounded 8, icon 20,
font-size 10.5.

> Padding/margin/size go to inline `style` px or `*-[Npx]` arbitrary utilities.
> Keep `transition`/`hover`/`group` Tailwind classes (unitless — unaffected by
> the 10px base). Keep all existing inline-color cascade defenses.

## Verification
1. `npx tsc --noEmit` passes.
2. `npm run dev`; visually compare SU homepage navbar (default + scrolled) and
   footer against the source project at desktop width. Top bar 40px, white
   blurred sticky bar, 56px nav row, evenly-spaced nav items + roomy dropdowns.
3. Hero/banner unchanged.
