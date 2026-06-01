import HeaderSc from '@/components/layout/HeaderSc';

export default function HeaderScPreview() {
  return (
    <>
      <HeaderSc />
      <main style={{ padding: '4rem 2rem', minHeight: '50vh' }}>
        <h2>Below the SC header</h2>
        <p>Body sentinel.</p>
      </main>
    </>
  );
}
