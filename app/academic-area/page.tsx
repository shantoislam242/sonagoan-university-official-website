import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import DepartmentExplorer from '@/components/sections/DepartmentExplorer';

export const metadata = buildMetadata({
  title: 'Departments',
  description: 'The academic departments of Sonargaon University across Science & Engineering, Business, and Arts & Humanities browse by faculty and program level.',
  path: '/academic-area',
});

export default function DepartmentsPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Departments"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Departments' }]}
      />

      <section style={{ background: '#F6F7FC', padding: '80px 0 90px' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 44px' }}>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              Academics
            </span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(28px, 3.6vw, 42px)', lineHeight: 1.2, marginBottom: 14 }}>
              Our Departments
            </h2>
            <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.8, margin: 0 }}>
              Explore the departments across our three faculties filter by faculty or by program level to
              find the right fit for your ambition.
            </p>
          </div>

          <DepartmentExplorer />
        </Container>
      </section>

      <FooterUniversity />
    </>
  );
}
