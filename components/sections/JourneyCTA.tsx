'use client';

import { motion } from 'motion/react';
import Container from '@/components/ui/Container';
import { cta } from '@/lib/cta-config';

// Full-bleed CTA section anchored above SUFooter. Uses the SOURCE
// project's exact Tailwind className markup (font-display text-4xl
// md:text-5xl etc.) — the font-display utility maps to Poppins via
// tailwind.config.ts → fontFamily.display + the --font-poppins CSS
// variable set by next/font in app/layout.tsx.
//
// Inline `style` overrides remain on a few critical properties (text
// colour, button gradient + bg) because template style.css has wider
// selectors that strip Tailwind colour/background utilities. The
// scoped <style> block at the bottom uses class-chained selectors
// (specificity 0,0,2,1) to beat template's `a:hover` (0,0,1,1).

export default function JourneyCTA() {
  return (
    <section className="cta-section relative">
      <div className="relative h-[420px] md:h-[480px] overflow-hidden">
        {/* Hero image — plain <img> with inline objectFit/objectPosition
            so template `img { height: auto }` cannot strip the cover
            behaviour. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cta.heroImageUrl}
          alt=""
          className="absolute inset-0 w-full h-full"
          style={{
            objectFit: 'cover',
            objectPosition: cta.heroImagePosition,
          }}
        />
        {/* Left dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, #2B3175 0%, rgba(43,49,117,0.75) 40%, transparent 100%)',
          }}
        />
        {/* Bottom fade for smooth transition into footer */}
        <div
          className="absolute inset-x-0 bottom-0 h-24"
          style={{
            background:
              'linear-gradient(to top, rgba(43,49,117,0.9) 0%, transparent 100%)',
          }}
        />

        {/* Content overlay — uses the same Container component as
            SUNavbar so the heading's left edge aligns with the logo. */}
        <Container className="relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-xl text-white text-left"
          >
            {/* Heading — source-exact classes. Inline color defends
                against template `h2 { color: ... }`. */}
            <h2
              className="font-display text-4xl md:text-5xl font-bold mb-5 leading-tight tracking-tight"
              style={{ color: '#ffffff' }}
            >
              {cta.heading}
            </h2>

            {/* Body — source-exact classes. Inline color override. */}
            <p
              className="text-base md:text-lg mb-8 leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              {cta.body}
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Primary — source classes for layout, inline bg for the
                  navy→magenta gradient (Tailwind gradient utilities
                  are easy targets for template style.css overrides). */}
              <a
                href={cta.primary.href}
                {...(cta.primary.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                className="cta-btn cta-btn-primary px-7 py-3 font-semibold rounded-md shadow-xl"
                style={{
                  background: 'linear-gradient(to right, #2B3175, #CC1579)',
                  color: '#ffffff',
                  transition: 'all 300ms ease',
                }}
              >
                {cta.primary.label}
              </a>

              {/* Secondary — white border + transparent bg, swaps on hover. */}
              <a
                href={cta.secondary.href}
                {...(cta.secondary.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                className="cta-btn cta-btn-secondary px-7 py-3 border-2 border-white font-semibold rounded-md"
                style={{
                  color: '#ffffff',
                  background: 'transparent',
                  transition: 'all 300ms ease',
                }}
              >
                {cta.secondary.label}
              </a>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* Gradient divider into footer */}
      <div
        className="h-1"
        style={{
          background: 'linear-gradient(to right, #2B3175, #CC1579)',
          boxShadow: '0 -4px 12px rgba(204,21,121,0.25)',
        }}
      />

      {/* Class-chained selectors (0,0,2,1) beat template's `a:hover`
          (0,0,1,1) so hover effects actually land. */}
      <style>{`
        .cta-btn.cta-btn-primary:hover,
        .cta-btn.cta-btn-primary:focus,
        .cta-btn.cta-btn-primary:active {
          filter: brightness(1.1);
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.35);
          color: #ffffff !important;
        }
        .cta-btn.cta-btn-secondary:hover,
        .cta-btn.cta-btn-secondary:focus,
        .cta-btn.cta-btn-secondary:active {
          background: #ffffff !important;
          color: #2B3175 !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
