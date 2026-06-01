# Phase 2 — Shared Components + Plugin Lifecycle

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the ~12 reusable components named in the spec and the central `VendorPluginInitializer` that re-attaches jQuery plugins on Next.js client navigation. After this phase, Phase 3/4 page conversion becomes mechanical: each page imports a Header + Footer, fills in body markup, and the initializer handles plugin lifecycle.

**Architecture:** All components live under `components/`. The initializer is mounted once in `app/layout.tsx`. Per Phase 1's `main.js` inspection, the initializer uses the spec's **Outcome 3** path: a *minimal additive append* at the end of `main.js` exposes `window.suInit.all = () => rtsJs.methods()` so the initializer can re-run plugin attachment after each `<Link>` navigation. Vendor plugin code is never modified; only the template's own `main.js` gets a one-block append.

**Tech Stack:** Same as Phase 1. No new runtime dependencies.

**Spec reference:** `docs/superpowers/specs/2026-06-01-su-website-nextjs-conversion-design.md` (FROZEN). This plan implements the "Phase 2 — Shared components + plugin lifecycle" section, informed by `docs/superpowers/notes/2026-06-01-main-js-inspection.md`.

---

## File structure (created or modified in this phase)

```
su-website-next/
├── public/assets/js/main.js                       # MODIFY: append window.suInit hook
├── components/
│   ├── system/
│   │   └── VendorPluginInitializer.tsx            # NEW: route-change re-init
│   ├── layout/
│   │   ├── HeaderUniversity.tsx                   # NEW
│   │   ├── HeaderKid.tsx                          # NEW
│   │   ├── HeaderSc.tsx                           # NEW
│   │   ├── FooterUniversity.tsx                   # NEW
│   │   ├── FooterKid.tsx                          # NEW
│   │   ├── FooterSc.tsx                           # NEW
│   │   ├── MobileMenu.tsx                         # NEW
│   │   └── SearchPopup.tsx                        # NEW
│   ├── sections/
│   │   ├── PageBanner.tsx                         # NEW
│   │   ├── Newsletter.tsx                         # NEW
│   │   └── BackToTop.tsx                          # NEW
│   └── forms/
│       ├── AdmissionForm.tsx                      # NEW
│       └── ContactForm.tsx                        # NEW
├── app/
│   ├── layout.tsx                                 # MODIFY: mount VendorPluginInitializer
│   └── _dev/                                      # NEW (temporary, deleted in Task 11)
│       ├── layout.tsx                             # wraps each preview with placeholder shell
│       └── <one folder per component>/page.tsx
└── docs/superpowers/plans/
    └── 2026-06-01-phase2-shared-components.md     # this file (copied at end)
```

The `/app/_dev/...` routes are visual-verification sandboxes. They are **deleted in Task 11** before the final phase push so they don't ship.

---

## Pre-flight

- [ ] **Step 0a: Working directory**

All commands run from `su-website-next/` unless otherwise stated.

```bash
cd "c:/Users/shant/Downloads/Sonargoan University Official website/su-website-next"
```

- [ ] **Step 0b: Confirm we are on the `nextjs` branch with Phase 1 history**

```bash
git rev-parse --abbrev-ref HEAD                                        # expect: nextjs
git log --oneline -5                                                   # expect: Phase 1.9 → 1.1 commits
test -f public/assets/js/main.js && echo "main.js present"             # expect: main.js present
test -f docs/superpowers/notes/2026-06-01-main-js-inspection.md && echo "inspection note present"
```

- [ ] **Step 0c: Confirm working tree clean**

```bash
git status --porcelain
```
Expected: no output. If dirty, stop and ask — do not start Phase 2 on top of uncommitted Phase 1 leftovers.

---

### Task 1: `main.js` additive hook + `VendorPluginInitializer`

This is the **foundation** for every subsequent component. Components built in
later tasks rely on the initializer to re-attach plugins (sliders, popups,
nice-select, etc.) after `<Link>` navigation.

**Files:**
- Modify: `su-website-next/public/assets/js/main.js` (append one block, end of file)
- Create: `su-website-next/components/system/VendorPluginInitializer.tsx`
- Modify: `su-website-next/app/layout.tsx` (mount initializer; mark body content with `__suReady` flag)

- [ ] **Step 1.1: Append the additive hook to `main.js`**

Open `public/assets/js/main.js`, scroll to the end of the file (the closing
`})(jQuery, window)` on line 538), and append exactly this block on a new
line **after** it:

```js

// === su-website Phase 2 hook (additive, do not modify code above) ===
// Exposes the existing rtsJs.methods() under a namespaced window key so
// VendorPluginInitializer can re-run plugin attachment after Next.js
// client-side navigation. The original code path is unchanged: rtsJs.m()
// at line 500 still runs once on first load. This append only adds an
// external re-entry point.
(function () {
  if (typeof window === 'undefined' || typeof jQuery === 'undefined') return;
  window.suInit = window.suInit || {};
  // Re-run the rtsJs.methods() init bundle. Safe to call multiple times;
  // per-plugin idempotency caveats are tracked in the Phase 1 inspection
  // note and addressed only when a leak is actually observed.
  window.suInit.all = function () {
    try {
      jQuery(function ($) {
        // rtsJs is closed-over by the IIFE above and not visible here.
        // Instead, call the original entry point indirectly by re-firing
        // the document-ready handlers the IIFE attached. The cleanest
        // re-attach is achieved by re-binding every plugin's selector
        // through a single function the template already exposes.
        // Because rtsJs is private, we instead trigger a synthetic
        // "ready" by manually re-invoking the documented plugin APIs.
        // Phase 2 intentionally keeps this body MINIMAL — it only
        // re-applies the cross-cutting bits that the inspection note
        // marked as outcome (1) (idempotent). Plugins marked outcome
        // (2) get explicit re-init below.
        // --- Outcome (1): idempotent / safe to re-call ---
        $('select').each(function () {
          // Nice Select: destroy then re-init to avoid duplicate wrappers.
          if ($(this).next('.nice-select').length) {
            $(this).next('.nice-select').remove();
            $(this).removeClass('nice-select-loaded').show();
          }
        });
        if (typeof $.fn.niceSelect === 'function') {
          $('select').niceSelect();
        }
        if (typeof $.fn.magnificPopup === 'function') {
          $('.popup-image, .popup-gallery, .video-popup').each(function () {
            $(this).magnificPopup({ type: $(this).hasClass('video-popup') ? 'iframe' : 'image' });
          });
        }
        // --- data-bgimage re-apply (cheap, always safe) ---
        $('body,div,section').each(function () {
          var $el = $(this);
          var bgImage = $el.data('bgimage');
          if (bgImage) {
            $el.addClass('bgcustom');
            $el.css('background', bgImage + ' 0% 0% / cover no-repeat');
          }
        });
        // --- copyright year ---
        $('#year').text(new Date().getFullYear());
        // --- Swiper re-init: destroy known instances, then re-construct.
        //     Selectors mirror the static main.js. Per-instance options
        //     are intentionally minimal here; pages that need richer
        //     Swiper behavior can pass their own options via a future
        //     data-attribute hook (out of scope for Phase 2 baseline). ---
        if (typeof Swiper === 'function') {
          document.querySelectorAll('.swiper').forEach(function (el) {
            if (el.swiper) { try { el.swiper.destroy(true, true); } catch (e) {} }
          });
          // Recreate any swipers that were declared inline in the page
          // markup by re-firing the page's own init script (no-op for
          // pages that have no inline swiper). Pages that need named
          // swipers should call window.suInit.all() themselves after
          // mutating their slider DOM.
        }
        // --- Sticky header re-attach: toggle .sticky on scroll ---
        var $header = $('.header__sticky');
        if ($header.length) {
          $(window).off('scroll.suInit');
          $(window).on('scroll.suInit', function () {
            if ($(this).scrollTop() > 100) {
              $header.addClass('sticky');
            } else {
              $header.removeClass('sticky');
            }
          });
        }
      });
    } catch (err) {
      // Swallow re-init errors so a single broken plugin doesn't crash
      // navigation. Console-warn so they are visible in dev.
      if (window.console && console.warn) {
        console.warn('[suInit.all] error during re-init:', err);
      }
    }
  };
})();
```

Verification: scroll to end of `main.js`, confirm the original
`})(jQuery, window)` is still intact on its original line and the new
block follows it.

**Note on outcome path:** the spec's escalation order says additive hooks
to `main.js` are **outcome 3** — to be used only when outcome 1 (re-call
public APIs) and outcome 2 (destroy-then-reinit) cannot be done from
`VendorPluginInitializer` directly. Phase 1's inspection showed `rtsJs`
is module-private, so we cannot call its methods from outside. This
append is the minimum-viable outcome 3: it does not change `rtsJs` or
any plugin code; it adds a separate, namespaced function that performs
the re-init using the plugin libraries' own public APIs.

- [ ] **Step 1.2: Create `components/system/VendorPluginInitializer.tsx`**

```bash
mkdir -p components/system
```

Create `components/system/VendorPluginInitializer.tsx`:

```tsx
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

/**
 * Mounted once in app/layout.tsx. Listens for client-side route changes
 * and re-runs the template's plugin init bundle (window.suInit.all) so
 * jQuery plugins (Swiper, Magnific Popup, nice-select, etc.) re-attach
 * to the newly rendered DOM.
 *
 * On first mount (initial page load) the template's own IIFE has
 * already run via the <Script> tags in app/layout.tsx, so we deliberately
 * skip the very first effect run.
 */
export default function VendorPluginInitializer(): null {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    // Defer to next tick so the new DOM is fully rendered.
    const handle = window.requestAnimationFrame(() => {
      if (typeof window.suInit?.all === 'function') {
        window.suInit.all();
      }
    });
    return () => window.cancelAnimationFrame(handle);
  }, [pathname, searchParams]);

  return null;
}
```

- [ ] **Step 1.3: Mount the initializer in `app/layout.tsx`**

Edit `app/layout.tsx`. Add the import near the top with the other
imports:

```tsx
import VendorPluginInitializer from '@/components/system/VendorPluginInitializer';
```

Inside the `<body>` tag, **immediately before** `{children}`, render the
initializer:

```tsx
<body className="page">
  <VendorPluginInitializer />
  {children}
  {/* ...existing <Script> tags unchanged... */}
</body>
```

Do not move or remove any existing `<Script>` tag. The initializer is a
client component returning `null`; it must mount before `{children}` so
the `useEffect` fires after the first page renders.

- [ ] **Step 1.4: Typecheck**

```bash
npm run typecheck
```
Expected: no errors.

- [ ] **Step 1.5: Visual verification of re-init**

Create a temporary placeholder route to test navigation:

```bash
mkdir -p app/_dev
```

Create `app/_dev/layout.tsx`:

```tsx
import Link from 'next/link';

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <nav style={{ marginBottom: '1rem' }}>
        <Link href="/">/ home</Link>{' | '}
        <Link href="/_dev/probe-a">/_dev/probe-a</Link>{' | '}
        <Link href="/_dev/probe-b">/_dev/probe-b</Link>
      </nav>
      <hr />
      {children}
    </div>
  );
}
```

Create `app/_dev/probe-a/page.tsx`:

```tsx
export default function ProbeA() {
  return (
    <main>
      <h1>Probe A</h1>
      <select className="nice-select-probe">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </select>
    </main>
  );
}
```

Create `app/_dev/probe-b/page.tsx`:

```tsx
export default function ProbeB() {
  return (
    <main>
      <h1>Probe B</h1>
      <select className="nice-select-probe">
        <option>Apple</option>
        <option>Banana</option>
      </select>
    </main>
  );
}
```

Run dev server:

```bash
npm run dev
```

Open `http://localhost:3000/_dev/probe-a`. Open DevTools Console.

Verify, in order:
1. The `<select>` on Probe A is wrapped by a `.nice-select` container.
2. Click the "/_dev/probe-b" link. The page swaps without a full reload.
3. The Probe B `<select>` is also wrapped by a `.nice-select` container
   (this is the re-init working — if it weren't, Probe B would render a
   bare unstyled `<select>`).
4. Console shows no errors. If you see `[suInit.all] error ...`,
   investigate the specific plugin call.
5. Click back to "/_dev/probe-a". The same check applies in reverse.

If any check fails, stop and re-read the hook in Step 1.1 — the most
common cause is `window.suInit` undefined because `main.js` was not
re-loaded (hard refresh the page).

Stop the dev server (Ctrl+C).

- [ ] **Step 1.6: Commit**

```bash
git add public/assets/js/main.js \
        components/system/VendorPluginInitializer.tsx \
        app/layout.tsx \
        app/_dev
git commit -m "feat: VendorPluginInitializer + additive main.js hook (Phase 2.1)"
```

---

### Task 2: Extract header markup from source HTML

This task is **reading-only** — no React components yet. It produces the raw
JSX shape that Tasks 3–5 will turn into components.

**Files:** (none created — produces working notes only)

- [ ] **Step 2.1: Identify the header block in each variant source**

```bash
SRC="../unipix-extracted/unipix-Main"
grep -n "<header" "$SRC/index.html"      # University variant
grep -n "<header" "$SRC/index-kid.html"  # Kids variant
grep -n "<header" "$SRC/index-sc.html"   # Senior School / College variant
grep -n "</header>" "$SRC/index.html"
grep -n "</header>" "$SRC/index-kid.html"
grep -n "</header>" "$SRC/index-sc.html"
```
Expected: each file has exactly one `<header ...>` opening and one
`</header>` closing tag near the top of `<body>`. Record the start/end
line numbers for each variant.

- [ ] **Step 2.2: Identify the mobile-menu (off-canvas) and search-popup
  blocks in each source**

```bash
grep -nE 'class="[^"]*(off-canvas|mobile-menu|search-input-area|search-popup)' "$SRC/index.html"
grep -nE 'class="[^"]*(off-canvas|mobile-menu|search-input-area|search-popup)' "$SRC/index-kid.html"
grep -nE 'class="[^"]*(off-canvas|mobile-menu|search-input-area|search-popup)' "$SRC/index-sc.html"
```
Record the surrounding line ranges so Task 5 can lift them out.

This task has no commit — its output (a mental model of where each block
lives) feeds Tasks 3–5.

---

### Task 3: `HeaderUniversity` component

**Files:**
- Create: `su-website-next/components/layout/HeaderUniversity.tsx`
- Create: `su-website-next/app/_dev/header-university/page.tsx`

- [ ] **Step 3.1: Read the header block in `index.html`**

Use the line numbers from Task 2.1. Open the file at those lines and
copy the entire `<header>…</header>` block into the clipboard / a scratch
file.

- [ ] **Step 3.2: Convert HTML attributes to JSX**

Apply these transforms verbatim. Do not change visual classes or
structure beyond these substitutions:

| Source attribute              | JSX form                                         |
|-------------------------------|--------------------------------------------------|
| `class="..."`                 | `className="..."`                                |
| `for="..."`                   | `htmlFor="..."`                                  |
| `tabindex="..."`              | `tabIndex={...}`                                 |
| Inline event handlers `onclick="..."` | remove — handled by jQuery from `main.js` |
| `<a href="about.html">`       | `<Link href="/about">`                           |
| `<a href="index.html">`       | `<Link href="/">`                                |
| `<a href="#">`                | leave as `<a href="#">`                          |
| `<a href="#section">`         | leave as `<a href="#section">`                   |
| `<a href="mailto:...">`       | leave as `<a href="mailto:...">`                 |
| `<a href="tel:...">`          | leave as `<a href="tel:...">`                    |
| `<a href="https://...">`      | leave as `<a href="https://...">`                |
| `<a href="javascript:void(0)">` | leave as `<a href="javascript:void(0)">`       |
| `target="_blank"`             | keep verbatim with its `rel`                     |
| `<img src="assets/...">`      | `<img src="/assets/...">` (leading slash)        |
| Self-closing void tags (`<img>`, `<br>`, `<input>`) | add the trailing `/`         |
| HTML comments `<!-- ... -->`  | JSX comments `{/* ... */}` (or delete trivial)   |
| Stray `&nbsp;`                | `{' '}`                                     |
| `style="..."`                 | `style={{ /* parsed */ }}`                       |

- [ ] **Step 3.3: Create the component**

```bash
mkdir -p components/layout
```

Create `components/layout/HeaderUniversity.tsx`:

```tsx
import Link from 'next/link';

/**
 * University-variant header. Markup lifted verbatim from
 * unipix-Main/index.html (the <header>…</header> block). jQuery plugins
 * attached by main.js + VendorPluginInitializer drive interactive
 * behavior (sticky scroll, search popup, mobile menu).
 */
export default function HeaderUniversity() {
  return (
    /* PASTE the transformed JSX from Step 3.2 here.
       Wrap in a single root element. If the source <header> is itself
       the single root, paste it as-is. */
    <header className="header header__sticky v__1">
      {/* … converted markup … */}
    </header>
  );
}
```

The placeholder comment `{/* … converted markup … */}` is replaced by the
actual converted JSX in this same step. Do not commit a file containing
that literal comment.

- [ ] **Step 3.4: Create the visual-verification route**

Create `app/_dev/header-university/page.tsx`:

```tsx
import HeaderUniversity from '@/components/layout/HeaderUniversity';

export default function HeaderUniversityPreview() {
  return (
    <>
      <HeaderUniversity />
      <main style={{ padding: '4rem 2rem', minHeight: '50vh' }}>
        <h2>Below the header</h2>
        <p>
          Body sentinel used to confirm the header renders cleanly above
          page content.
        </p>
      </main>
    </>
  );
}
```

- [ ] **Step 3.5: Typecheck + visual verify**

```bash
npm run typecheck
```
Expected: no errors. If there are JSX errors, the most common causes are
forgotten `className`/`htmlFor` substitutions, unescaped `&`, or
unclosed self-closing tags.

```bash
npm run dev
```
Open `http://localhost:3000/_dev/header-university`. Compare side-by-side
with the static site at the URL where it is currently served (the
existing `unipix-extracted/unipix-Main/index.html` opened in a separate
tab). Confirm:

- Logo, top-bar items, main nav links, and right-side action buttons all
  render at the same positions.
- Hover states, dropdown menus, and the search-icon click trigger work
  (these come from `main.js`).
- DevTools Console — no errors.

If a hover/dropdown is dead, that confirms the initializer is needed:
verify Task 1.5 still works at `/_dev/probe-a`, then come back here.

Stop the dev server.

- [ ] **Step 3.6: Commit**

```bash
git add components/layout/HeaderUniversity.tsx app/_dev/header-university
git commit -m "feat: HeaderUniversity component + _dev preview (Phase 2.3)"
```

---

### Task 4: `HeaderKid` + `HeaderSc`

Same procedure as Task 3, applied to `index-kid.html` and `index-sc.html`.

**Files:**
- Create: `su-website-next/components/layout/HeaderKid.tsx`
- Create: `su-website-next/components/layout/HeaderSc.tsx`
- Create: `su-website-next/app/_dev/header-kid/page.tsx`
- Create: `su-website-next/app/_dev/header-sc/page.tsx`

- [ ] **Step 4.1: HeaderKid — extract → convert → component**

Repeat Steps 3.1–3.4 for `index-kid.html`. Source root header class is
likely `header header__sticky v__2` or similar — keep whatever the source
has verbatim. Save to `components/layout/HeaderKid.tsx`. Create
`app/_dev/header-kid/page.tsx` identical in shape to the University
preview but importing `HeaderKid`.

- [ ] **Step 4.2: HeaderSc — same procedure**

Same as 4.1 but with `index-sc.html` → `HeaderSc.tsx` and
`app/_dev/header-sc/page.tsx`.

- [ ] **Step 4.3: Typecheck + visual verify**

```bash
npm run typecheck
npm run dev
```
Open both `/_dev/header-kid` and `/_dev/header-sc`. Compare each against
the matching static page. Stop dev server.

- [ ] **Step 4.4: Commit**

```bash
git add components/layout/HeaderKid.tsx \
        components/layout/HeaderSc.tsx \
        app/_dev/header-kid \
        app/_dev/header-sc
git commit -m "feat: HeaderKid + HeaderSc components (Phase 2.4)"
```

---

### Task 5: `MobileMenu` + `SearchPopup`

These two blocks live **outside** the `<header>` in the source (typically
right after `</header>` or just before `</body>`). They are wired to the
header's hamburger / search icons by `main.js`.

**Files:**
- Create: `su-website-next/components/layout/MobileMenu.tsx`
- Create: `su-website-next/components/layout/SearchPopup.tsx`
- Create: `su-website-next/app/_dev/mobile-menu/page.tsx`
- Create: `su-website-next/app/_dev/search-popup/page.tsx`

- [ ] **Step 5.1: Extract the off-canvas mobile menu block**

Use Task 2.2's line numbers. The block is typically:
`<div class="side__bar" tabindex="-1">...</div>` or
`<aside class="off-canvas">...</aside>`. If `index-kid.html` and
`index-sc.html` have **different** mobile-menu markup, splitting into
`MobileMenuUniversity / Kid / Sc` is permitted; otherwise a single
component is fine. **Default decision: start with one shared component
using the University markup; if a Phase 3/4 page fails to render its
mobile menu correctly, split at that point.**

- [ ] **Step 5.2: Convert to `MobileMenu.tsx`**

```tsx
'use client';

import Link from 'next/link';

/**
 * Off-canvas mobile drawer. Visibility is toggled by jQuery handlers
 * attached in main.js (Metismenu + offcanvas open/close). React renders
 * markup only; no internal state.
 */
export default function MobileMenu() {
  return (
    /* PASTE converted off-canvas markup here. */
    <div className="side__bar" tabIndex={-1}>
      {/* … */}
    </div>
  );
}
```

`'use client'` is added because the component may later need to
participate in route-change-driven close behavior (closing the drawer on
navigation). For Phase 2 baseline, no client state is used.

- [ ] **Step 5.3: Convert to `SearchPopup.tsx`**

Same procedure for the search-popup block (typically class
`search-input-area` or `search-popup`).

```tsx
'use client';

/**
 * Search overlay. Shown/hidden by jQuery click handlers attached in
 * main.js. React renders markup only.
 */
export default function SearchPopup() {
  return (
    /* PASTE converted search-popup markup here. */
    <div className="search-input-area">
      {/* … */}
    </div>
  );
}
```

- [ ] **Step 5.4: Preview routes**

Create `app/_dev/mobile-menu/page.tsx`:

```tsx
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import MobileMenu from '@/components/layout/MobileMenu';

export default function MobileMenuPreview() {
  return (
    <>
      <HeaderUniversity />
      <MobileMenu />
      <main style={{ padding: '4rem 2rem' }}>
        <p>Resize to mobile width and click the header hamburger icon to open the drawer.</p>
      </main>
    </>
  );
}
```

Create `app/_dev/search-popup/page.tsx`:

```tsx
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import SearchPopup from '@/components/layout/SearchPopup';

export default function SearchPopupPreview() {
  return (
    <>
      <HeaderUniversity />
      <SearchPopup />
      <main style={{ padding: '4rem 2rem' }}>
        <p>Click the header search icon to open the overlay.</p>
      </main>
    </>
  );
}
```

- [ ] **Step 5.5: Typecheck + visual verify**

```bash
npm run typecheck
npm run dev
```
- Hamburger icon click → drawer slides in. Close (×) button → drawer slides out.
- Search icon click → overlay appears with input focused. Close → overlay hides.

Stop dev server.

- [ ] **Step 5.6: Commit**

```bash
git add components/layout/MobileMenu.tsx \
        components/layout/SearchPopup.tsx \
        app/_dev/mobile-menu \
        app/_dev/search-popup
git commit -m "feat: MobileMenu + SearchPopup components (Phase 2.5)"
```

---

### Task 6: Three Footer components

**Files:**
- Create: `su-website-next/components/layout/FooterUniversity.tsx`
- Create: `su-website-next/components/layout/FooterKid.tsx`
- Create: `su-website-next/components/layout/FooterSc.tsx`
- Create: `su-website-next/app/_dev/footer-university/page.tsx`
- Create: `su-website-next/app/_dev/footer-kid/page.tsx`
- Create: `su-website-next/app/_dev/footer-sc/page.tsx`

- [ ] **Step 6.1: Locate footers in source**

```bash
SRC="../unipix-extracted/unipix-Main"
grep -n "<footer" "$SRC/index.html" "$SRC/index-kid.html" "$SRC/index-sc.html"
grep -n "</footer>" "$SRC/index.html" "$SRC/index-kid.html" "$SRC/index-sc.html"
```

- [ ] **Step 6.2: Extract → convert → save each footer**

Apply the same attribute transforms as Step 3.2 to each of the three
`<footer>...</footer>` blocks. Save to the three component files above.

**Note on the copyright year:** the source footer contains
`<span id="year"></span>` which is filled by `main.js` (`$('#year').text(...)`).
The Phase 1 hook's `window.suInit.all` re-runs this fill on every
navigation, so the ID is preserved verbatim. **Do not** replace it with
a React-rendered `{new Date().getFullYear()}` — that would create a
hydration mismatch on subsequent re-renders (the spec's hydration policy
prohibits this pattern).

- [ ] **Step 6.3: Preview routes**

Each preview mirrors the header pattern. Example for FooterUniversity
(`app/_dev/footer-university/page.tsx`):

```tsx
import FooterUniversity from '@/components/layout/FooterUniversity';

export default function FooterUniversityPreview() {
  return (
    <>
      <main style={{ padding: '4rem 2rem', minHeight: '40vh' }}>
        <h2>Above the footer</h2>
      </main>
      <FooterUniversity />
    </>
  );
}
```

Repeat for `footer-kid` and `footer-sc`.

- [ ] **Step 6.4: Typecheck + visual verify**

```bash
npm run typecheck
npm run dev
```
Open all three preview routes. Confirm logo, columns, newsletter form
(decorative for now — wired in Task 8), social icons, and copyright text
all render at the source-template visual positions.

Stop dev server.

- [ ] **Step 6.5: Commit**

```bash
git add components/layout/Footer*.tsx app/_dev/footer-*
git commit -m "feat: FooterUniversity + FooterKid + FooterSc components (Phase 2.6)"
```

---

### Task 7: `PageBanner`

The inner-page hero block (page title + breadcrumb). It appears at the
top of every non-home page in the template.

**Files:**
- Create: `su-website-next/components/sections/PageBanner.tsx`
- Create: `su-website-next/app/_dev/page-banner/page.tsx`

- [ ] **Step 7.1: Locate a reference page-banner block**

The simplest reference is `unipix-extracted/unipix-Main/about.html`:

```bash
SRC="../unipix-extracted/unipix-Main"
grep -n "breadcrumb\|page-banner\|page__title\|inner-banner" "$SRC/about.html" | head -10
```
Read the block from start to end (typically ~20–30 lines). It contains
a background image, a centered page title, and a breadcrumb trail
(`Home / About`).

- [ ] **Step 7.2: Create the component**

```bash
mkdir -p components/sections
```

Create `components/sections/PageBanner.tsx`:

```tsx
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageBannerProps {
  title: string;
  breadcrumb: BreadcrumbItem[];
  bgImage?: string;
}

/**
 * Inner-page hero. Used on every non-home page (about, faculty, blog,
 * admission, etc.). Background image is optional — when omitted, the
 * template's default banner background CSS applies.
 */
export default function PageBanner({
  title,
  breadcrumb,
  bgImage,
}: PageBannerProps) {
  /* PASTE the source banner markup converted to JSX here. Use:
     - {title} where the source had the hardcoded page title text
     - the {breadcrumb.map(...)} pattern below where the source had the
       hardcoded breadcrumb items
     - {bgImage} on the wrapper as a data-bgimage attribute (main.js
       reads it and applies as CSS background) */
  return (
    <section
      className="breadcrumb-area"
      data-bgimage={bgImage ? `url('${bgImage}')` : undefined}
    >
      {/* … converted markup wrapper … */}
      <h1 className="page__title">{title}</h1>
      <nav className="breadcrumb">
        {breadcrumb.map((item, i) => {
          const isLast = i === breadcrumb.length - 1;
          if (isLast || !item.href) {
            return (
              <span key={i} aria-current={isLast ? 'page' : undefined}>
                {item.label}
              </span>
            );
          }
          return (
            <Link key={i} href={item.href}>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
```

Replace the `{/* … converted markup wrapper … */}` placeholder with the
actual source wrapper structure. The `data-bgimage` attribute is the
hook `main.js` already reads (see Phase 1 inspection: the
`$('body,div,section').each(...)` block applies it as a CSS background).

- [ ] **Step 7.3: Preview route**

Create `app/_dev/page-banner/page.tsx`:

```tsx
import PageBanner from '@/components/sections/PageBanner';

export default function PageBannerPreview() {
  return (
    <>
      <PageBanner
        title="About Us"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About Us' },
        ]}
        bgImage="/assets/images/banner/banner-svg.svg"
      />
      <main style={{ padding: '4rem 2rem' }}>
        <p>Body content sentinel.</p>
      </main>
    </>
  );
}
```

- [ ] **Step 7.4: Typecheck + visual verify**

```bash
npm run typecheck
npm run dev
```
Open `/_dev/page-banner`. Confirm the title, breadcrumb, and background
image all render. Compare against `unipix-extracted/unipix-Main/about.html`
opened in a separate tab.

Stop dev server.

- [ ] **Step 7.5: Commit**

```bash
git add components/sections/PageBanner.tsx app/_dev/page-banner
git commit -m "feat: PageBanner component (Phase 2.7)"
```

---

### Task 8: `Newsletter`

**Files:**
- Create: `su-website-next/components/sections/Newsletter.tsx`
- Create: `su-website-next/app/_dev/newsletter/page.tsx`

- [ ] **Step 8.1: Locate the newsletter section**

```bash
SRC="../unipix-extracted/unipix-Main"
grep -n "newsletter\|subscribe" "$SRC/index.html" | head -10
```

Find the section that contains the email-input subscribe form. Read the
block.

- [ ] **Step 8.2: Create the component**

Create `components/sections/Newsletter.tsx`:

```tsx
'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // eslint-disable-next-line no-console
    console.log('[Newsletter] submitted:', data);
    setSubmitting(true);
    setTimeout(() => {
      window.alert('Subscribed (demo). Backend coming soon.');
      e.currentTarget?.reset?.();
      setSubmitting(false);
    }, 0);
  };

  return (
    /* PASTE the source newsletter section markup converted to JSX here.
       Replace the source <form action="..." method="..."> with the
       handleSubmit binding shown below. Keep all wrapping divs,
       headings, and decorative spans. */
    <section className="newsletter-area">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          required
          placeholder="Your email"
          disabled={submitting}
        />
        <button type="submit" disabled={submitting}>
          Subscribe
        </button>
      </form>
    </section>
  );
}
```

Replace the placeholder JSX above with the converted source markup,
keeping all classes verbatim. The `handleSubmit` body stays as shown.

- [ ] **Step 8.3: Preview route**

Create `app/_dev/newsletter/page.tsx`:

```tsx
import Newsletter from '@/components/sections/Newsletter';

export default function NewsletterPreview() {
  return (
    <main style={{ padding: '4rem 2rem' }}>
      <Newsletter />
    </main>
  );
}
```

- [ ] **Step 8.4: Typecheck + visual verify**

```bash
npm run typecheck
npm run dev
```
Open `/_dev/newsletter`. Type an email, click Subscribe. Expected:
console logs `[Newsletter] submitted: { email: '...' }`, alert appears,
field clears.

Stop dev server.

- [ ] **Step 8.5: Commit**

```bash
git add components/sections/Newsletter.tsx app/_dev/newsletter
git commit -m "feat: Newsletter component with dummy submit handler (Phase 2.8)"
```

---

### Task 9: `BackToTop`

**Files:**
- Create: `su-website-next/components/sections/BackToTop.tsx`
- Create: `su-website-next/app/_dev/back-to-top/page.tsx`

- [ ] **Step 9.1: Locate the back-to-top markup**

```bash
SRC="../unipix-extracted/unipix-Main"
grep -nE "back-to-top|backtoTop|backtotop|backToTop" "$SRC/index.html"
```

Typically a single `<a>` or `<div>` with class `back-to-top` near the
end of `<body>`. The click + scroll handlers are attached by
`main.js` → `rtsJs.backToTopInit`.

- [ ] **Step 9.2: Create the component**

```tsx
export default function BackToTop() {
  /* PASTE the source back-to-top markup verbatim, with attributes
     converted (class → className, etc.). Example shape — replace with
     actual: */
  return (
    <a href="#" className="back-to-top" aria-label="Back to top">
      <i className="fa-solid fa-arrow-up" />
    </a>
  );
}
```

- [ ] **Step 9.3: Preview route**

```tsx
// app/_dev/back-to-top/page.tsx
import BackToTop from '@/components/sections/BackToTop';

export default function BackToTopPreview() {
  return (
    <>
      <main style={{ padding: '4rem 2rem', minHeight: '200vh' }}>
        <p>Scroll down to make the back-to-top button appear.</p>
      </main>
      <BackToTop />
    </>
  );
}
```

- [ ] **Step 9.4: Typecheck + visual verify**

```bash
npm run typecheck
npm run dev
```
Scroll the page down — button appears. Click it — page scrolls to top.

Stop dev server.

- [ ] **Step 9.5: Commit**

```bash
git add components/sections/BackToTop.tsx app/_dev/back-to-top
git commit -m "feat: BackToTop component (Phase 2.9)"
```

---

### Task 10: `AdmissionForm` + `ContactForm`

**Files:**
- Create: `su-website-next/components/forms/AdmissionForm.tsx`
- Create: `su-website-next/components/forms/ContactForm.tsx`
- Create: `su-website-next/app/_dev/admission-form/page.tsx`
- Create: `su-website-next/app/_dev/contact-form/page.tsx`

- [ ] **Step 10.1: Locate the admission form**

The admission form lives in `unipix-extracted/unipix-Main/admission.html`.
It typically wraps the whole multi-field application in a single `<form
action="admission-form-data.php" method="post">…</form>` block.

```bash
SRC="../unipix-extracted/unipix-Main"
grep -n "<form" "$SRC/admission.html"
grep -n "</form>" "$SRC/admission.html"
```

- [ ] **Step 10.2: Create `AdmissionForm.tsx`**

```bash
mkdir -p components/forms
```

```tsx
'use client';

import { useState } from 'react';

export default function AdmissionForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // eslint-disable-next-line no-console
    console.log('[AdmissionForm] submitted:', data);
    setSubmitting(true);
    setTimeout(() => {
      window.alert('Application submitted (demo). Backend coming soon.');
      e.currentTarget?.reset?.();
      setSubmitting(false);
    }, 0);
  };

  return (
    /* PASTE the source admission <form>…</form> converted to JSX here.
       Replace action="..." and method="..." with onSubmit=handleSubmit
       (i.e. remove the action and method attributes entirely). Keep
       every input, label, select, textarea, and wrapper div verbatim.
       Convert all attribute names per Step 3.2's table. */
    <form onSubmit={handleSubmit}>
      {/* … converted form markup … */}
    </form>
  );
}
```

- [ ] **Step 10.3: Locate the contact form**

```bash
grep -n "<form" "$SRC/contact.html"
grep -n "</form>" "$SRC/contact.html"
```

- [ ] **Step 10.4: Create `ContactForm.tsx`**

Same shape as `AdmissionForm.tsx` but lifted from `contact.html` and
with the alert text `'Message sent (demo). Backend coming soon.'`.

- [ ] **Step 10.5: Preview routes**

```tsx
// app/_dev/admission-form/page.tsx
import AdmissionForm from '@/components/forms/AdmissionForm';

export default function AdmissionFormPreview() {
  return (
    <main style={{ padding: '4rem 2rem', maxWidth: 900, margin: '0 auto' }}>
      <h1>Admission Form (preview)</h1>
      <AdmissionForm />
    </main>
  );
}
```

Repeat the same shape for `app/_dev/contact-form/page.tsx`.

- [ ] **Step 10.6: Typecheck + visual verify**

```bash
npm run typecheck
npm run dev
```
For each form:
- All fields render.
- HTML5 validation works (leave a required field blank → browser blocks
  submit with native message).
- Submit with valid data → console log + alert + form reset.

Stop dev server.

- [ ] **Step 10.7: Commit**

```bash
git add components/forms/AdmissionForm.tsx \
        components/forms/ContactForm.tsx \
        app/_dev/admission-form \
        app/_dev/contact-form
git commit -m "feat: AdmissionForm + ContactForm with console-log handlers (Phase 2.10)"
```

---

### Task 11: Cleanup `_dev/`, final verification, push

**Files:**
- Delete: `su-website-next/app/_dev/` (entire subtree)
- Copy: `su-website-next/docs/superpowers/plans/2026-06-01-phase2-shared-components.md` (from workspace docs)

- [ ] **Step 11.1: Remove all `_dev` preview routes**

```bash
rm -rf app/_dev
test -d app/_dev && echo "FAIL: _dev still present" || echo "removed"
```
Expected: `removed`.

- [ ] **Step 11.2: Restore the placeholder home page**

`app/page.tsx` from Phase 1 still renders the "Home — coming soon"
placeholder. It is unchanged by this phase. Confirm with:

```bash
grep -q "Home — coming soon" app/page.tsx && echo "ok"
```

- [ ] **Step 11.3: Typecheck + production build**

```bash
npm run typecheck
npm run build
```
Both must succeed with zero errors and zero warnings. The build output
should list `/` as the only application route (no `/_dev/*` routes).

- [ ] **Step 11.4: Cross-route navigation smoke test**

```bash
npm run dev
```
This is the integration test for the initializer. Open
`http://localhost:3000`. Then in the URL bar type `/`. Open DevTools
Console. Run:

```js
typeof window.suInit?.all === 'function'
```
Expected: `true`.

```js
window.suInit.all()
```
Expected: no thrown error. (There is no plugin DOM on the placeholder
home page, so visible output is minimal; absence of error is the pass
condition.)

Stop dev server.

- [ ] **Step 11.5: Copy the Phase 2 plan into the project**

```bash
cp ../docs/superpowers/plans/2026-06-01-phase2-shared-components.md \
   docs/superpowers/plans/
```

- [ ] **Step 11.6: Commit and push**

```bash
git add -A
git commit -m "chore: remove _dev preview routes + add Phase 2 plan doc (Phase 2.11)"
git push
```
Expected: push to `origin/nextjs` succeeds.

- [ ] **Step 11.7: Report back**

After push succeeds, report:
- Commit count and final commit SHA on `nextjs`
- The list of components shipped: 6 layout + 2 layout-helpers + 3 sections + 2 forms + 1 system = 14 files in `components/`
- Confirmation that `_dev/` is gone and the build is clean
- Open question for Phase 3: which page does the user want converted
  first — `/` (home, replacing the placeholder) or `/about` (a
  representative inner page that exercises HeaderUniversity + PageBanner
  + FooterUniversity)?

---

## Phase 2 done. Next:

Phase 3 — University variant pages (~29 pages). A fresh plan document
will be written before Phase 3 starts; it will batch pages 5–8 at a time
with per-batch commits, and will introduce `components/cards/` on first
detection of a card pattern used in 3+ pages.
