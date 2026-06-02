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
        {/* Vendor plugins — order mirrors index.html */}
        <Script src="/assets/js/plugins/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/jquery-ui.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/waw.js" strategy="afterInteractive" />
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
        <Script src="/assets/js/plugins/twinmax.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/contact.form.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/nice-select.min.js" strategy="afterInteractive" />
        {/* main.js last */}
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
