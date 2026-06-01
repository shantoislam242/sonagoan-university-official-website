import BackToTop from '@/components/sections/BackToTop';

export default function BackToTopPreview() {
  return (
    <>
      <main style={{ padding: '4rem 2rem', minHeight: '200vh' }}>
        <p>Scroll down to make the back-to-top button appear.</p>
      </main>
      <BackToTop />
    </>
  );
}
