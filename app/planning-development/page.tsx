import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { Check } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Office of Planning & Development',
  description:
    'The Office of Planning & Development drives the long-term growth of Sonargaon University — strategic planning, campus infrastructure, and development projects.',
  path: '/planning-development',
});

const RESPONSIBILITIES = [
  'Strategic & long-term institutional planning',
  'Campus infrastructure & construction projects',
  'Development project planning & monitoring',
  'Budget planning for development initiatives',
  'Facility expansion & space management',
  'Coordinating with UGC on development approvals',
  'Feasibility studies for new programs & facilities',
  'Tracking progress against the university’s growth roadmap',
];

const HEAD = {
  name: 'Mohammad Golam Mostafa',
  role: 'Director',
  photo: '/assets/images/academic-affairs/golam-mostafa.png',
};

export default function PlanningDevelopmentPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Office of Planning & Development"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Planning & Development' },
        ]}
      />

      {/* About */}
      <section style={{ background: '#ffffff', padding: '80px 0 40px' }}>
        <Container className="!max-w-[1100px]">
          <div style={{ textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              Administration
            </span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(26px, 3.4vw, 38px)', lineHeight: 1.25, marginBottom: 18 }}>
              About this Office
            </h2>
            <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.85, margin: 0 }}>
              The Office of Planning &amp; Development drives the long-term growth of Sonargaon University. From
              campus expansion and infrastructure projects to strategic planning and resource development, the
              office turns the university&rsquo;s vision into concrete progress. It played a central role in
              milestones such as the 2024 opening of SU&rsquo;s permanent campus in Khilgaon, and continues to
              plan for the facilities, programs, and capacity that will shape the university&rsquo;s future.
            </p>
          </div>
        </Container>
      </section>

      {/* Responsibilities */}
      <section style={{ background: '#ffffff', padding: '20px 0 80px' }}>
        <Container className="!max-w-[1100px]">
          <h3 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 22, marginBottom: 26, textAlign: 'center' }}>
            Responsibilities
          </h3>
          <div className="pd-resp">
            {RESPONSIBILITIES.map((r) => (
              <div key={r} className="pd-resp__item">
                <span className="pd-resp__icon">
                  <Check size={15} strokeWidth={3} />
                </span>
                <span>{r}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Office Head */}
      <section style={{ background: '#F6F7FC', padding: '80px 0 90px' }}>
        <Container className="!max-w-[1100px]">
          <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(26px, 3.4vw, 38px)', textAlign: 'center', marginBottom: 48 }}>
            Office Head
          </h2>

          <div className="pd-head-wrap">
            <article className="pd-card">
              <div className="pd-card__photo-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={HEAD.photo} alt="" aria-hidden className="pd-card__bg" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={HEAD.photo} alt={HEAD.name} className="pd-card__photo" />
              </div>
              <div className="pd-card__body">
                <h3 className="pd-card__name">{HEAD.name}</h3>
                <p className="pd-card__role">{HEAD.role}</p>
                <span className="pd-card__badge">Office Head</span>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .pd-resp { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 700px) { .pd-resp { grid-template-columns: 1fr 1fr; } }
        .pd-resp__item {
          display: flex; align-items: center; gap: 14px;
          background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 12px; padding: 18px 22px;
          color: #2B3175; font-size: 15.5px; font-weight: 500;
        }
        .pd-resp__icon {
          flex-shrink: 0; width: 28px; height: 28px; border-radius: 8px;
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(204,21,121,0.10); color: #CC1579;
        }

        .pd-head-wrap { display: flex; justify-content: center; }
        .pd-card { width: 100%; max-width: 330px;
          background: #ffffff; border: 1px solid #ECECF3; overflow: hidden;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06); display: flex; flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .pd-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .pd-card__photo-wrap {
          position: relative; border-bottom: 1px solid #ECECF3; background: #EEF0F6;
          overflow: hidden; aspect-ratio: 1 / 1;
        }
        .pd-card__bg {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          object-position: center; transform: scale(1.15); filter: blur(18px) brightness(0.92); z-index: 0;
        }
        .pd-card__photo {
          position: relative; z-index: 1; width: 100%; height: 100%;
          object-fit: contain; object-position: center; display: block;
        }
        .pd-card__body { padding: 22px 24px 24px; text-align: center; }
        .pd-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 18px; line-height: 1.3; margin: 0 0 5px;
        }
        .pd-card__role { color: #5B5B78; font-size: 14px; line-height: 1.4; margin: 0 0 12px; }
        .pd-card__badge {
          display: inline-block; background: linear-gradient(135deg, #2B3175, #CC1579);
          color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          padding: 6px 14px; border-radius: 999px;
        }
      `}</style>
    </>
  );
}
