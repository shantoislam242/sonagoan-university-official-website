import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import ProgramExplorer from '@/components/sections/ProgramExplorer';
import { CalendarRange, Layers, ClipboardCheck } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Our Programs',
  description:
    'Program structure at Sonargaon University browse undergraduate and postgraduate programs by faculty, with short tags, credits, duration, semester system and assessment details.',
  path: '/academic',
});

const INFO = [
  { Icon: CalendarRange, title: 'Academic Year', body: 'January – December.' },
  {
    Icon: Layers,
    title: 'Semester System',
    body: 'Tri-semester: CSE, EEE, ME, Civil, Textile, BBA, MBA, EMBA, RMBA, MSCM, MBM. Bi-semester: AMT, FDT, NAME, BARC, Bangla, LLB, JMS, MTFM, MAM, MAMS, LLM, LLMP.',
  },
  { Icon: ClipboardCheck, title: 'Assessment', body: 'Continuous 30% + Midterm 30% + Final 40%.' },
];

const eyebrow = { display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 } as const;

export default function AcademicPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Our Programs"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Our Programs' }]}
      />

      {/* ===== Intro ===== */}
      <section style={{ background: '#ffffff', padding: '100px 0 50px' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
            <span style={eyebrow}>Academic Programs</span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: 1.18, marginBottom: 18 }}>
              Program Structure
            </h2>
            <p style={{ color: '#5B5B78', fontSize: 18, lineHeight: 1.8, margin: 0 }}>
              Three faculties · 13 undergraduate · 10 postgraduate programs choose a faculty to explore
              its degrees, with short tags, credits and duration for each.
            </p>
          </div>
        </Container>
      </section>

      {/* ===== Faculty explorer (browse by faculty) ===== */}
      <section style={{ background: '#F6F7FC', padding: '56px 0 90px' }}>
        <Container className="!max-w-[1600px]">
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #ECECF3',
              borderRadius: 22,
              padding: 'clamp(28px, 4vw, 52px)',
              boxShadow: '0 16px 44px rgba(43,49,117,0.06)',
            }}
          >
            <ProgramExplorer />
          </div>
        </Container>
      </section>

      {/* ===== Academic info ===== */}
      <section style={{ background: '#ffffff', padding: '90px 0' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 50px' }}>
            <span style={eyebrow}>Good to Know</span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(26px, 3.2vw, 38px)', lineHeight: 1.2, margin: 0 }}>
              Academic Information
            </h2>
          </div>
          <div className="acad-info">
            {INFO.map(({ Icon, title, body }) => (
              <div key={title} className="acad-info__card">
                <span className="acad-info__icon">
                  <Icon size={26} color="#CC1579" strokeWidth={2} />
                </span>
                <h3 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 20, margin: '0 0 10px' }}>
                  {title}
                </h3>
                <p style={{ color: '#5B5B78', fontSize: 15.5, lineHeight: 1.75, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .acad-info { display: grid; grid-template-columns: 1fr; gap: 26px; }
        @media (min-width: 768px) { .acad-info { grid-template-columns: repeat(3, 1fr); } }
        .acad-info__card {
          background: #ffffff; border: 1px solid #ECECF3; border-radius: 18px;
          padding: 32px 30px; box-shadow: 0 10px 30px rgba(43,49,117,0.05);
        }
        .acad-info__icon {
          display: inline-flex; width: 54px; height: 54px; border-radius: 14px;
          background: rgba(204,21,121,0.10); align-items: center; justify-content: center; margin-bottom: 18px;
        }
      `}</style>
    </>
  );
}
