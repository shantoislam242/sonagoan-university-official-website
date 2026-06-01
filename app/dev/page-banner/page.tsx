import PageBanner from '@/components/sections/PageBanner';

export default function PageBannerPreview() {
  return (
    <>
      <PageBanner
        title="About Us"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About Us' },
        ]}
      />
      <main style={{ padding: '4rem 2rem' }}>
        <p>Body sentinel.</p>
      </main>
    </>
  );
}
