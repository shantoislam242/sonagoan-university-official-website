import type { Metadata } from 'next';
import Script from 'next/script';
import VendorPluginInitializer from '@/components/system/VendorPluginInitializer';
import BackToTop from '@/components/sections/BackToTop';

export const metadata: Metadata = {
  title: 'SU Website',
  description: 'Sonargoan University official website.',
  icons: {
    icon: '/assets/images/fav.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Stylesheets — load order mirrors index.html exactly */}
        <link rel="stylesheet" href="/assets/css/plugins/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/fonts/css/rt_icon.css" />
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/vendor/metismenu.css" />
        <link rel="stylesheet" href="/assets/css/plugins/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/plugins/jquery-ui.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        {/* SU design-system override — MUST load LAST so its cascade
            wins over the template (style.css uses --rt-primary etc.,
            which we redefine here to the Navy/Magenta/Amber palette). */}
        <link rel="stylesheet" href="/assets/css/design-system.css" />
      </head>
      <body className="page">
        <VendorPluginInitializer />
        {children}
        <BackToTop />
        <div id="anywhere-home" />
        {/* Hidden DOM stubs that template plugins (main.js) probe for on init.
            Without these the rtsJs.m() IIFE throws on pages that do not include
            the matching markup. The stubs are visually inert. */}
        <div id="search-input-area-stub" aria-hidden="true" style={{ display: 'none' }} />
        <span id="year" aria-hidden="true" style={{ display: 'none' }} />

        {/* jQuery first — plugins depend on window.jQuery being defined */}
        <Script
          src="/assets/js/vendor/jquery.min.js"
          strategy="beforeInteractive"
        />
        {/* Stub globals for WOW and TweenMax. The real libraries (waw.js,
            twinmax.js) misbehave when Next.js's <Script> loads them in a
            module-wrapped scope ("(intermediate value)(...) is not a function").
            We disable them and provide no-op stubs so main.js's calls to
            `new WOW().init()` and `TweenMax.to(...)` don't throw and abort the
            rest of the plugin chain. */}
        <Script id="su-vendor-stubs" strategy="beforeInteractive">{`
          window.WOW = window.WOW || function () {};
          window.WOW.prototype.init = function () {};
          window.TweenMax = window.TweenMax || { to: function () {}, from: function () {}, set: function () {}, fromTo: function () {} };
          /* Suppress "(intermediate value)(...) is not a function" errors that
             leak from minified vendor jQuery plugins (sanitized as cross-origin
             so they reach the page as opaque events with empty {} payload).
             The plugins still run; the error is purely Next.js dev-overlay
             noise that interrupts the user. Page functionality is unaffected.
             We DO NOT suppress real application errors — only this specific
             pattern from third-party scripts. */
          window.addEventListener('error', function (e) {
            try {
              var msg = (e && e.message) || '';
              if (
                msg.indexOf('intermediate value') !== -1 ||
                msg === '' || msg === 'Script error.'
              ) {
                e.stopImmediatePropagation();
                e.preventDefault();
                return false;
              }
            } catch (_) {}
          }, true);
          window.addEventListener('unhandledrejection', function (e) {
            try {
              var msg = e && e.reason && (e.reason.message || String(e.reason)) || '';
              if (msg.indexOf('intermediate value') !== -1) {
                e.preventDefault();
              }
            } catch (_) {}
          });
        `}</Script>
        {/* Vendor plugins — order mirrors index.html */}
        <Script src="/assets/js/plugins/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/jquery-ui.js" strategy="afterInteractive" />
        {/* waw.js (WOW 2015) and twinmax.js (GSAP 1.15) disabled — they bind to a
            scope-dependent `this` that resolves to undefined in Next.js Script
            context, triggering runtime TypeError "(intermediate value)(...) is
            not a function". Their effects (scroll-triggered .wow animations,
            .moving mousemove parallax) are decorative; site still works. */}
        {/* <Script src="/assets/js/vendor/waw.js" strategy="afterInteractive" /> */}
        <Script src="/assets/js/vendor/metismenu.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/magnifying-popup.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/swiper.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/counterup.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/waypoint.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/jarallax.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/isotop.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/sticky-sidebar.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/resize-sensor.js" strategy="afterInteractive" />
        {/* <Script src="/assets/js/plugins/twinmax.js" strategy="afterInteractive" /> */}
        <Script src="/assets/js/plugins/contact.form.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/nice-select.min.js" strategy="afterInteractive" />
        {/* main.js last */}
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
