'use client';

import { motion } from 'motion/react';
import { cta } from '@/lib/cta-config';

// Full-bleed CTA section anchored above SUFooter. Inline styles defend
// against template style.css cascade (proven pattern from SUNavbar
// port — `img { height: auto }`, `a { color: ... }` would otherwise
// override Tailwind utilities and inline gradient backgrounds).

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

        {/* Content overlay */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            height: '100%',
            maxWidth: 1600,
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ maxWidth: 500, color: '#ffffff', textAlign: 'left' }}
          >
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: 20,
                color: '#ffffff',
                // Narrower max-width on the heading itself forces a
                // 2-line wrap ("Shape Your Future with" / "Excellence")
                // so the layout matches the source design even though
                // the source uses a wider custom display font.
                maxWidth: 460,
              }}
            >
              {cta.heading}
            </h2>
            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.6,
                marginBottom: 32,
                color: 'rgba(255,255,255,0.85)',
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
                style={{
                  padding: '14px 28px',
                  background: 'linear-gradient(to right, #2B3175, #CC1579)',
                  color: '#ffffff',
                  fontWeight: 600,
                  borderRadius: 6,
                  boxShadow: '0 10px 28px rgba(0,0,0,0.25)',
                  textDecoration: 'none',
                  display: 'inline-block',
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
                style={{
                  padding: '14px 28px',
                  border: '2px solid #ffffff',
                  color: '#ffffff',
                  fontWeight: 600,
                  borderRadius: 6,
                  textDecoration: 'none',
                  display: 'inline-block',
                  background: 'transparent',
                }}
              >
                {cta.secondary.label}
              </a>
            </div>
          </motion.div>
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
    </section>
  );
}
