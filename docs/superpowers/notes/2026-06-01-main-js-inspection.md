# main.js Inspection — Phase 1

**Date:** 2026-06-01
**File:** `public/assets/js/main.js` (538 lines)

## Bootstrap pattern

Single jQuery IIFE wrapping everything:

```js
(function ($) {
  'use strict';
  var rtsJs = {
    m:       function () { rtsJs.d(); rtsJs.methods(); },
    d:       function () { /* cache $window/$document/$body/$html */ },
    methods: function () { /* calls every plugin init in order */ },

    swiperActivation: function () { /* 3+ new Swiper(...) calls,
                                       each wrapped in $(document).ready() */ },
    counterUp:        function () { /* $('.counter').counterUp(...) via waypoint */ },
    searchOption:     function () { /* click handler on .search-icon */ },
    niceSelect:       function () { /* $('select').niceSelect() */ },
    backToTopInit:    function () { /* scroll handler + click handler */ },
    vedioActivation:  function () { /* $('.video-popup').magnificPopup(...) */ },
    stickyHeader:     function () { /* scroll handler toggling .sticky class */ },
    progressAvtivation: function () { /* progress-bar fill on scroll */ },
    wowActive:        function () { /* new WOW(...).init() */ },
    stickySidebar:    function () { /* $('.sticky-sidebar').theiaStickySidebar(...) */ },
    datePicker:       function () { /* $('.datepicker').datepicker(...) */ },
    countDownTimer:   function () { /* countdown-clock setInterval */ },
    magnificPopup:    function () { /* $('.popup-image').magnificPopup(...) */ },
    sideMenu:         function () { /* metismenu toggle + off-canvas */ },
    activeAccordion:  function () { /* Bootstrap collapse class sync */ },
  };

  rtsJs.m();   // bootstrap line 500 — runs once

  // Three extra blocks AFTER rtsJs.m() — NOT inside the rtsJs object:
  $('.moving').mousemove(...);                    // mouse-parallax effect
  $('body,div,section').each(...);                // data-bgimage attribute -> CSS bg
  $(document).ready(function () {                 // copyright year fill
    $('#year').text(new Date().getFullYear());
  });
})(jQuery, window);
```

Key points:

- `rtsJs` is **module-private** to the IIFE. It is not stored on `window`.
  External code cannot call `rtsJs.swiperActivation()` or any other method
  from outside. This is the spec's **Outcome 2/3** scenario.
- Inside many methods, plugin instantiation is wrapped in
  `$(document).ready(...)`. That handler fires once when the document
  reaches `ready` — it does **not** re-fire on Next.js client navigation.
  So a `<Link>` from `/` to `/about` will not re-run these blocks.
- Several methods bind handlers to existing DOM elements (e.g. scroll
  handlers, click handlers). These do not re-attach to a newly rendered
  page's DOM after navigation; the old handlers remain attached to the
  old (now unmounted) nodes.

## Plugin init catalogue

| # | Method                | Plugin / library         | Key selectors                                                  | Lifecycle observation                                                                            | Re-init pathway |
|---|-----------------------|--------------------------|----------------------------------------------------------------|--------------------------------------------------------------------------------------------------|-----------------|
| 1 | `swiperActivation`    | Swiper                   | `.mySwiper-category-1`, `.testmonial-v2`, `.single-testimonial-active`, plus several more inside the function | Each `new Swiper(...)` is fresh per call; previous instance would need to be destroyed first to avoid leaks. | **2 (destroy + reinit)** |
| 2 | `counterUp`           | counterup + waypoint     | `.counter`                                                     | Waypoint binds scroll listeners; re-running without teardown creates duplicate listeners.        | **2**           |
| 3 | `searchOption`        | (custom)                 | `.search-icon`, `.search-input-area`                           | Click handler. Idempotent if attached with `.off('click').on('click', ...)`; current code uses `.on(...)` only. | **2** (rebind)  |
| 4 | `niceSelect`          | jquery.nice-select       | `select`                                                       | The plugin wraps each `<select>` in a custom div. Re-running on already-wrapped DOM duplicates wrappers. | **2 (destroy + reinit)** |
| 5 | `backToTopInit`       | (custom)                 | `.back-to-top`, scroll listener on `window`                    | Scroll listener accumulates on re-init.                                                          | **2**           |
| 6 | `vedioActivation`     | Magnific Popup           | `.video-popup`                                                 | Magnific Popup is idempotent when called on the same selector — second call replaces config.     | **1**           |
| 7 | `stickyHeader`        | (custom)                 | `.header__sticky`, scroll listener                             | Scroll listener accumulates.                                                                     | **2**           |
| 8 | `progressAvtivation`  | (custom progress bar)    | `.progress`                                                    | Scroll-driven width update; safe to re-run if listener is rebound carefully.                     | **2**           |
| 9 | `wowActive`           | WOW.js                   | `.wow`                                                         | `new WOW(...).init()` — fresh instance OK, but old instance still observes detached nodes.       | **2**           |
|10 | `stickySidebar`       | theia-sticky-sidebar     | `.sticky-sidebar`                                              | Reads layout from DOM at init; re-init on new DOM is correct path.                               | **1**           |
|11 | `datePicker`          | jQuery UI datepicker     | `.datepicker` (form inputs)                                    | Idempotent on the same input; new inputs need separate init.                                     | **1**           |
|12 | `countDownTimer`      | (custom setInterval)     | `.countdown`                                                   | `setInterval` is never cleared; will leak across navigations.                                    | **2 (clear interval first)** |
|13 | `magnificPopup`       | Magnific Popup           | `.popup-image`, `.popup-gallery`                               | Same as #6 — idempotent.                                                                         | **1**           |
|14 | `sideMenu`            | metismenu + custom       | `.metismenu`, mobile off-canvas open/close                     | metismenu re-runs cleanly; off-canvas click handler accumulates.                                 | **2**           |
|15 | `activeAccordion`     | Bootstrap collapse       | `.accordion-item`                                              | Bootstrap collapse listens to `shown.bs.collapse`/`hidden.bs.collapse`; rebinding doubles handlers. | **2**           |

Extra top-level blocks (not inside `rtsJs`):

| Block                          | Concern                                                                                                        | Re-init pathway |
|--------------------------------|----------------------------------------------------------------------------------------------------------------|-----------------|
| `.moving` mousemove parallax    | Uses `TweenMax` (deprecated GSAP 2 API). Listener accumulates.                                                  | **2**           |
| `data-bgimage` background apply | Reads `data-bgimage`, sets inline CSS. Must re-run after every navigation so new sections get their bg images. | **1**           |
| `#year` copyright fill          | `new Date().getFullYear()` writes to `#year`. Must re-run after navigation if footer is re-rendered.            | **1**           |

## Recommended `VendorPluginInitializer` strategy

The dominant outcome is **2 (destroy + reinit)**. The IIFE's `rtsJs`
object is not reusable from outside, and several methods bind listeners
without idempotency guards. Phase 2 therefore takes path **3 (additive
hook)** from the spec's escalation order: add a **minimal append** to the
end of `main.js` that exposes the existing init logic without modifying
any of the existing code. The append looks like this (planned, not yet
applied):

```js
// === su-website Phase 2 hook (additive, end of file) ===
// Exposes the existing rtsJs init under a namespaced window key so
// VendorPluginInitializer can re-run plugin attachment after client-side
// navigation. No existing code path is modified.
if (typeof window !== 'undefined') {
  window.suInit = window.suInit || {};
  window.suInit.all = function () { rtsJs.methods(); };
}
```

`window.suInit.all()` becomes the single entry point the initializer
calls on `usePathname()` change. Per-plugin destroy hooks are added only
for the plugins above marked **2** that demonstrably leak (verified by
manually navigating in dev mode and watching memory / duplicate DOM
nodes). The minimum viable approach is: call `suInit.all()` after each
route change and observe; only add per-plugin teardown where a leak is
visible.

The hook is reserved for Phase 2 — it is **not** added in Phase 1.

## Open questions for Phase 2

1. Does calling `rtsJs.methods()` a second time cause visible duplicate
   Swiper pagination dots / duplicate nice-select wrappers? Verify by
   manually invoking it twice in DevTools on the static template before
   building the initializer.
2. WOW.js `new WOW(...).init()` — does it re-scan the DOM, or does the
   first instance hold a stale node set? May need explicit re-init.
3. `setInterval` in `countDownTimer` is not stored. If we leave it
   leaking for the first iteration, is the leak observable on a 5-page
   click-through? If not, defer the fix.
4. The `data-bgimage` block iterates `$('body,div,section')` — that is a
   very broad selector. After hydration it will re-apply to all matching
   elements site-wide. Performance impact on large pages should be
   measured.
