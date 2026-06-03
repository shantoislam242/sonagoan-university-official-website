import Link from 'next/link';

type Variant = 'light' | 'dark';

/**
 * Brand logo for Sonargaon University.
 * - variant="light" (default) → full-color logo for light-background contexts
 *   (headers, mobile menu). File: /assets/images/logo/su-logo.png
 * - variant="dark" → white logo for dark-background contexts (footers).
 *   File: /assets/images/logo/su-logo-white.png
 */
export default function BrandLogo({
  variant = 'light',
  href = '/',
}: {
  variant?: Variant;
  href?: string;
}) {
  const src =
    variant === 'dark'
      ? '/assets/images/logo/su-logo-white.png'
      : '/assets/images/logo/su-logo.png';

  return (
    <Link
      href={href}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
      }}
      aria-label="Sonargaon University — Home"
    >
      <img
        src={src}
        alt="Sonargaon University"
        style={{
          height: 40,
          width: 'auto',
          display: 'block',
        }}
      />
    </Link>
  );
}
