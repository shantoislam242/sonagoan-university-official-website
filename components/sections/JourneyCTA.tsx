'use client';

import { motion } from 'motion/react';
import Container from '@/components/ui/Container';
import { cta } from '@/lib/cta-config';

// Full-bleed CTA section anchored above SUFooter. Inline styles defend
// against template style.css cascade (proven pattern from SUNavbar
// port — `img { height: auto }`, `a { color: ... }`, `a:hover { color: ... }`
// would otherwise override Tailwind utilities and inline gradient
// backgrounds. Class-chained selectors in the scoped <style> block
// (specificity 0,0,2,1) beat template's `a:hover` (0,0,1,1).

const POPPINS_STACK =
  'var(--font-poppins), "Poppins", -apple-system, BlinkMacSystemFont, sans-serif';

export default function JourneyCTA() {
  return (
    <section style={{ position: 'relative' }}>
      <div
        style={{
          position: 'relative',
          height: 480,
          overflow: 'hidden',
        }}
      >
        {/* Hero image — plain <img> so inline `objectPosition` survives
            template img-reset. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cta.heroImageUrl}
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: cta.heroImagePosition,
          }}
        />
        {/* Left dark overlay for text readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, #2B3175 0%, rgba(43,49,117,0.75) 40%, transparent 100%)',
          }}
        />
        {/* Bottom fade for smooth transition into footer */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 96,
            background:
              'linear-gradient(to top, rgba(43,49,117,0.9) 0%, transparent 100%)',
          }}
        />

        {/* Content overlay — uses the same Container component as
            SUNavbar so the heading's left edge aligns perfectly with
            the logo's left edge at every breakpoint (Container's
            `px-4 sm:px-6 lg:px-8` responsive padding is consistent
            across the page). */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            height: '100%',
          }}
          className="cta-container-wrapper"
        >
          <Container className="h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ maxWidth: 640, color: '#ffffff', textAlign: 'left' }}
          >
            <h2
              className="cta-heading"
              style={{
                // Source: text-4xl md:text-5xl + font-bold +
                // tracking-tight + leading-tight. Size handled by the
                // scoped <style> media query below (36px mobile / 48px
                // md+) so it exactly matches Tailwind's responsive
                // utilities the source project uses.
                fontFamily: POPPINS_STACK,
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                marginBottom: 20,
                marginTop: 0,
                color: '#ffffff',
                maxWidth: 580,
              }}
            >
              {cta.heading}
            </h2>
            <p
              className="cta-body"
              style={{
                // Source: text-base md:text-lg (16px / 18px) +
                // leading-relaxed.
                fontFamily: POPPINS_STACK,
                lineHeight: 1.625,
                fontWeight: 400,
                marginBottom: 32,
                color: 'rgba(255,255,255,0.85)',
                maxWidth: 580,
              }}
            >
              {cta.body}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              <a
                href={cta.primary.href}
                {...(cta.primary.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                className="cta-btn cta-btn-primary"
                style={{
                  padding: '14px 28px',
                  background: 'linear-gradient(to right, #2B3175, #CC1579)',
                  color: '#ffffff',
                  fontFamily: POPPINS_STACK,
                  fontWeight: 600,
                  fontSize: 16,
                  borderRadius: 6,
                  boxShadow: '0 10px 28px rgba(0,0,0,0.25)',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 300ms ease',
                }}
              >
                {cta.primary.label}
              </a>
              <a
                href={cta.secondary.href}
                {...(cta.secondary.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                className="cta-btn cta-btn-secondary"
                style={{
                  padding: '14px 28px',
                  border: '2px solid #ffffff',
                  color: '#ffffff',
                  fontFamily: POPPINS_STACK,
                  fontWeight: 600,
                  fontSize: 16,
                  borderRadius: 6,
                  textDecoration: 'none',
                  display: 'inline-block',
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
      </div>

      {/* Gradient divider into footer */}
      <div
        style={{
          height: 4,
          background: 'linear-gradient(to right, #2B3175, #CC1579)',
          boxShadow: '0 -4px 12px rgba(204,21,121,0.25)',
        }}
      />

      {/* Class-chained selectors (0,0,2,1) beat template's
          `a:hover {…}` (0,0,1,1) so hover lift + colour swap actually
          land. Source: primary brightens + lifts + heavier shadow;
          secondary inverts to white-bg + navy text + lifts.
          Responsive font sizes mirror Tailwind's text-4xl md:text-5xl
          and text-base md:text-lg breakpoint at 768px. */}
      <style>{`
        .cta-heading { font-size: 2.25rem; }   /* text-4xl = 36px */
        .cta-body { font-size: 1rem; }          /* text-base = 16px */
        @media (min-width: 768px) {
          .cta-heading { font-size: 3rem; }    /* md:text-5xl = 48px */
          .cta-body { font-size: 1.125rem; }   /* md:text-lg = 18px */
        }
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
