import HeaderUniversity from '@/components/layout/HeaderUniversity';
import MobileMenu from '@/components/layout/MobileMenu';

export default function MobileMenuPreview() {
  return (
    <>
      <HeaderUniversity />
      <MobileMenu />
      <main style={{ padding: '4rem 2rem' }}>
        <p>Resize to mobile width and click the header hamburger icon to open the drawer.</p>
      </main>
    </>
  );
}
