import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { Target, Eye } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Mission & Vision',
  description:
    'The mission and vision of Sonargaon University (SU) world-class education, research, and a commitment to excellence.',
  path: '/mission-vision',
});

const MISSION =
  'The mission is to impart world-class education and to provide research facilities so that students can attain their full intellectual, social and personal potentials. SU also wants to create facilities for higher education to the students of Bangladesh at an affordable cost, keeping in view the challenges of the twenty-first century. SU is committed to developing human capital by cultivating creative thinking in individuals, and offers education through modern modes of teaching.';

const VISION =
  'The vision of Sonargaon University (SU) is to become a leading University and to remain a top center of excellence in higher education and research. It aims at attracting brilliant students, teachers, and scholars from all over the world.';

const CARDS = [
  { title: 'Our Mission', tag: 'What we do', body: MISSION, Icon: Target },
  { title: 'Our Vision', tag: 'Where we aim', body: VISION, Icon: Eye },
];

export default function MissionVisionPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Mission & Vision"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Mission & Vision' }]}
      />

      <section style={{ background: 'linear-gradient(180deg, #F1F9FD 0%, #ffffff 55%)', padding: '90px 0' }}>
        <Container className="!max-w-[1200px]">
          {/* Intro */}
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
            <span
              style={{
                display: 'inline-block',
                color: '#CC1579',
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              Our Purpose
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                fontWeight: 700,
                color: '#2B3175',
                fontSize: 'clamp(28px, 4vw, 42px)',
                lineHeight: 1.2,
                marginBottom: 18,
              }}
            >
              Driven by Purpose &amp; Possibility
            </h2>
            <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.8, margin: 0 }}>
              At Sonargaon University, everything we do is guided by a clear mission and an
              ambitious vision to educate, to discover, and to shape leaders for the future.
            </p>
          </div>

          {/* Mission / Vision cards */}
          <div
            className="mv-grid"
            style={{ display: 'grid', gap: 32, gridTemplateColumns: '1fr' }}
          >
            {CARDS.map(({ title, tag, body, Icon }, i) => {
              const alignRight = i === 1; // bottom card (Vision) mirrors to the right
              return (
              <div
                key={title}
                className="mv-card"
                style={{
                  position: 'relative',
                  background: '#ffffff',
                  borderRadius: 16,
                  padding: '44px 38px 40px',
                  boxShadow: '0 10px 30px rgba(43,49,117,0.07)',
                  overflow: 'hidden',
                }}
              >
                {/* top accent bar */}
                <span
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 5,
                    background: 'linear-gradient(90deg, #2B3175, #CC1579)',
                  }}
                />
                {/* icon badge + heading on one row (fills the space beside the badge).
                    Bottom card mirrors to the right. */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 22, flexDirection: alignRight ? 'row-reverse' : 'row' }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: 64,
                      height: 64,
                      borderRadius: 16,
                      background: 'linear-gradient(135deg, #2B3175, #CC1579)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 18px rgba(204,21,121,0.25)',
                    }}
                  >
                    <Icon size={30} color="#ffffff" strokeWidth={2} />
                  </div>
                  <div style={alignRight ? { textAlign: 'right' } : undefined}>
                    <span
                      style={{
                        display: 'block',
                        color: '#CC1579',
                        fontWeight: 700,
                        fontSize: 12,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        marginBottom: 6,
                      }}
                    >
                      {tag}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                        fontWeight: 700,
                        color: '#2B3175',
                        fontSize: 'clamp(22px, 2.4vw, 28px)',
                        margin: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      {title}
                    </h3>
                  </div>
                </div>
                <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.9, margin: 0 }}>
                  {body}
                </p>
              </div>
              );
            })}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        @media (min-width: 768px) {
          .mv-grid { grid-template-columns: 1fr 1fr; }
        }
        .mv-card { transition: transform .25s ease, box-shadow .25s ease; }
        .mv-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(43,49,117,0.14);
        }
      `}</style>
    </>
  );
}
