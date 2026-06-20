import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { Check } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Office of Human Resource Management',
  description:
    'The Office of Human Resource Management looks after the faculty and staff of Sonargaon University — recruitment, records, payroll, welfare, and HR policy.',
  path: '/human-resource',
});

const RESPONSIBILITIES = [
  'Recruitment, selection & onboarding of faculty and staff',
  'Employee records & personal file management',
  'Payroll, attendance & leave coordination',
  'Performance evaluation & appraisal support',
  'Staff welfare, benefits & grievance handling',
  'HR policy development & implementation',
  'Training & professional development programs',
  'Coordinating promotions, transfers & service matters',
];

const P = '/assets/images/hrm';

const HEAD = {
  name: 'Md. Shariful Islam',
  role: 'Joint Director',
  photo: `${P}/shariful-islam.jpg`,
};

const TEAM = [
  { name: 'Sharif Ahmed', role: 'Officer', photo: `${P}/sharif-ahmed.png` },
  { name: 'Md. Moktadir Rahman', role: 'Assistant Officer', photo: `${P}/moktadir-rahman.png` },
  { name: 'Md. Jubair Hossain', role: 'Assistant Executive (HR)', photo: `${P}/jubair-hossain.png` },
];

export default function HumanResourcePage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Office of Human Resource Management"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Human Resource Management' },
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
              The Office of Human Resource Management looks after the people behind Sonargaon University, its
              faculty and staff. From recruitment and onboarding to records, payroll coordination, and staff
              welfare, the HRM office works to build a supportive, professional, and well-organized work
              environment. It plays a key role in attracting and retaining the experienced educators and
              administrators who make SU&rsquo;s quality education possible.
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
          <div className="hrm-resp">
            {RESPONSIBILITIES.map((r) => (
              <div key={r} className="hrm-resp__item">
                <span className="hrm-resp__icon">
                  <Check size={15} strokeWidth={3} />
                </span>
                <span>{r}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Team */}
      <section style={{ background: '#F6F7FC', padding: '80px 0 90px' }}>
        <Container className="!max-w-[1100px]">
          <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(26px, 3.4vw, 38px)', textAlign: 'center', marginBottom: 48 }}>
            Our Team
          </h2>

          {/* Office head */}
          <div className="hrm-head-wrap">
            <article className="hrm-card hrm-card--head">
              <div className="hrm-card__photo-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={HEAD.photo} alt="" aria-hidden className="hrm-card__bg" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={HEAD.photo} alt={HEAD.name} className="hrm-card__photo" />
              </div>
              <div className="hrm-card__body">
                <h3 className="hrm-card__name">{HEAD.name}</h3>
                <p className="hrm-card__role">{HEAD.role}</p>
                <span className="hrm-card__badge">Office Head</span>
              </div>
            </article>
          </div>

          {/* Team members */}
          <div className="hrm-grid">
            {TEAM.map((m) => (
              <article key={m.name} className="hrm-card">
                <div className="hrm-card__photo-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt="" aria-hidden className="hrm-card__bg" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt={m.name} className="hrm-card__photo" />
                </div>
                <div className="hrm-card__body">
                  <h3 className="hrm-card__name">{m.name}</h3>
                  <p className="hrm-card__role">{m.role}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .hrm-resp { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 700px) { .hrm-resp { grid-template-columns: 1fr 1fr; } }
        .hrm-resp__item {
          display: flex; align-items: center; gap: 14px;
          background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 12px; padding: 18px 22px;
          color: #2B3175; font-size: 15.5px; font-weight: 500;
        }
        .hrm-resp__icon {
          flex-shrink: 0; width: 28px; height: 28px; border-radius: 8px;
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(204,21,121,0.10); color: #CC1579;
        }

        .hrm-head-wrap { display: flex; justify-content: center; margin-bottom: 26px; }
        .hrm-card--head { width: 100%; max-width: 320px; }
        .hrm-card--head .hrm-card__badge {
          display: inline-block; margin-top: 12px; background: linear-gradient(135deg, #2B3175, #CC1579);
          color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          padding: 6px 14px; border-radius: 999px;
        }

        .hrm-grid {
          display: grid; grid-template-columns: 1fr; gap: 24px;
          margin: 0 auto; justify-content: center; max-width: 1000px;
        }
        @media (min-width: 600px) { .hrm-grid { grid-template-columns: repeat(2, minmax(0, 300px)); } }
        @media (min-width: 900px) { .hrm-grid { grid-template-columns: repeat(3, minmax(0, 300px)); } }

        .hrm-card {
          background: #ffffff; border: 1px solid #ECECF3; overflow: hidden;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06); display: flex; flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .hrm-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .hrm-card__photo-wrap {
          position: relative; border-bottom: 1px solid #ECECF3; background: #EEF0F6;
          overflow: hidden; aspect-ratio: 1 / 1;
        }
        .hrm-card__bg {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          object-position: center; transform: scale(1.15); filter: blur(18px) brightness(0.92); z-index: 0;
        }
        .hrm-card__photo {
          position: relative; z-index: 1; width: 100%; height: 100%;
          object-fit: contain; object-position: center; display: block;
        }
        .hrm-card__body { padding: 22px 24px 24px; text-align: center; }
        .hrm-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 18px; line-height: 1.3; margin: 0 0 5px;
        }
        .hrm-card__role { color: #5B5B78; font-size: 14px; line-height: 1.4; margin: 0; }
      `}</style>
    </>
  );
}
