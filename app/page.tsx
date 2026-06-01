import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Home',
  description: 'Welcome to SU Website. Full home page coming in Phase 3.',
  path: '/',
});

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem 1rem',
        textAlign: 'center',
      }}
    >
      <h1>SU Website</h1>
      <p>Home — coming soon (Phase 3).</p>
      <p>
        Vendor CSS and JS load from <code>/assets/</code> via the root layout.
        Open DevTools → Network to confirm.
      </p>
    </main>
  );
}
