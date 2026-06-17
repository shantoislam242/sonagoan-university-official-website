import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import FacultyMembersExplorer from '@/components/sections/FacultyMembersExplorer';

export const metadata = buildMetadata({
  title: 'All Faculty Members',
  description:
    'Browse the faculty members of Sonargaon University by department. Select a department to view its full list of faculty members.',
  path: '/faculty-members',
});

export default function FacultyMembersPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="All Faculty Members"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academic' },
          { label: 'All Faculty Members' },
        ]}
      />

      <section style={{ background: '#F6F7FC', padding: '80px 0 90px' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 44px' }}>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              Academics
            </span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(28px, 3.6vw, 42px)', lineHeight: 1.2, marginBottom: 14 }}>
              Faculty Members by Department
            </h2>
            <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.8, margin: 0 }}>
              Choose a department to see its full list of faculty members. Use the search box or the
              faculty tabs to find a department quickly.
            </p>
          </div>

          <FacultyMembersExplorer />
        </Container>
      </section>

      <FooterUniversity />
    </>
  );
}
