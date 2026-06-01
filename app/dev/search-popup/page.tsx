import HeaderUniversity from '@/components/layout/HeaderUniversity';
import SearchPopup from '@/components/layout/SearchPopup';

export default function SearchPopupPreview() {
  return (
    <>
      <HeaderUniversity />
      <SearchPopup />
      <main style={{ padding: '4rem 2rem' }}>
        <p>Click the header search icon to open the overlay.</p>
      </main>
    </>
  );
}
