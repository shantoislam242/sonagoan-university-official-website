import Link from 'next/link';

type Variant = 'light' | 'dark';

/**
 * Brand logo placeholder. Renders text "Sonargaon University" + Bangla
 * line until the SVG file lands at /assets/images/logo/su-logo.svg.
 *
 * To switch to SVG later: replace the inner JSX with
 *   <img src={variant === 'dark' ? '/assets/images/logo/su-logo-white.svg'
 *                                 : '/assets/images/logo/su-logo.svg'}
 *        alt="Sonargaon University" />
 */
export default function BrandLogo({
  variant = 'light',
  href = '/',
}: {
  variant?: Variant;
  href?: string;
}) {
  const isDark = variant === 'dark';
  const textColor = isDark ? '#FFFFFF' : 'var(--su-navy)';
  const subColor = isDark ? 'rgba(255,255,255,0.85)' : 'var(--su-navy)';

  return (
    <Link
      href={href}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        lineHeight: 1.1,
        textDecoration: 'none',
      }}
      aria-label="Sonargaon University — Home"
    >
      <span
        style={{
          fontFamily: 'var(--font-primary)',
          fontWeight: 700,
          fontSize: 20,
          color: textColor,
          letterSpacing: '-0.2px',
        }}
      >
        Sonargaon University
      </span>
      <span
        lang="bn"
        style={{
          fontFamily: 'var(--font-bangla)',
          fontWeight: 500,
          fontSize: 12,
          color: subColor,
          marginTop: 2,
        }}
      >
        সোনারগাঁও ইউনিভার্সিটি
      </span>
    </Link>
  );
}
