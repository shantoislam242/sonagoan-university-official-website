'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

/**
 * Mounted once in app/layout.tsx. Listens for client-side route changes
 * and re-runs the template's plugin init bundle (window.suInit.all) so
 * jQuery plugins (Swiper, Magnific Popup, nice-select, etc.) re-attach
 * to the newly rendered DOM.
 *
 * On first mount (initial page load) the template's own IIFE has already
 * run via the <Script> tags in app/layout.tsx, so we deliberately skip
 * the very first effect run.
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
    const handle = window.requestAnimationFrame(() => {
      if (typeof window.suInit?.all === 'function') {
        window.suInit.all();
      }
    });
    return () => window.cancelAnimationFrame(handle);
  }, [pathname, searchParams]);

  return null;
}
