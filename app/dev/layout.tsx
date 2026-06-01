import Link from 'next/link';

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <nav style={{ marginBottom: '1rem' }}>
        <Link href="/">/ home</Link>
        {' | '}
        <Link href="/dev/probe-a">/dev/probe-a</Link>
        {' | '}
        <Link href="/dev/probe-b">/dev/probe-b</Link>
      </nav>
      <hr />
      {children}
    </div>
  );
}
