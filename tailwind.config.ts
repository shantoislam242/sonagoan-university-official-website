import type { Config } from 'tailwindcss';

const config: Config = {
  // SCOPE: only scan our React components. Do NOT scan public/assets
  // (template's 27k-line style.css is plain CSS, doesn't need Tailwind).
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B3175',   // --su-navy
        accent:  '#CC1579',   // --su-magenta
      },
      // Map Tailwind's `font-display` / `font-sans` utilities to the
      // CSS variables exposed by next/font in app/layout.tsx. Without
      // this mapping the `font-display` class is a no-op and Poppins
      // never loads on the heading.
      fontFamily: {
        sans:    ['var(--font-montserrat)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)',    'sans-serif'],
      },
      boxShadow: {
        premium: '0 10px 40px -10px rgba(43, 49, 117, 0.15)',
      },
    },
  },
  plugins: [],
  // CRITICAL: prevent Tailwind base reset from nuking template typography.
  // Template style.css already sets body font/color rules we depend on.
  corePlugins: {
    preflight: false,
  },
};

export default config;
