import Link from 'next/link';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';

export const metadata = {
  title: 'Page not found | SU Website',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <>
      <HeaderUniversity />

      <section
        style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '6rem', margin: 0, lineHeight: 1 }}>404</h1>
        <h2 style={{ fontSize: '1.75rem', margin: '1rem 0 0.5rem' }}>
          Page not found
        </h2>
        <p style={{ maxWidth: 540, color: '#666', marginBottom: '2rem' }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="rts-theme-btn">
          Back to home
        </Link>
      </section>

      <FooterUniversity />
    </>
  );
}
