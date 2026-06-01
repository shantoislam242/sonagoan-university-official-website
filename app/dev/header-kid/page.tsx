import HeaderKid from '@/components/layout/HeaderKid';

export default function HeaderKidPreview() {
  return (
    <>
      <HeaderKid />
      <main style={{ padding: '4rem 2rem', minHeight: '50vh' }}>
        <h2>Below the kid header</h2>
        <p>Body sentinel.</p>
      </main>
    </>
  );
}
