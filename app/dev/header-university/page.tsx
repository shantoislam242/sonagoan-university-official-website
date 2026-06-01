import HeaderUniversity from '@/components/layout/HeaderUniversity';

export default function HeaderUniversityPreview() {
  return (
    <>
      <HeaderUniversity />
      <main style={{ padding: '4rem 2rem', minHeight: '50vh' }}>
        <h2>Below the header</h2>
        <p>Body sentinel.</p>
      </main>
    </>
  );
}
