import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { Check } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Office of the IQAC & PRIA',
  description:
    'The Institutional Quality Assurance Cell (IQAC) leads the continuous improvement of academic and administrative quality at Sonargaon University.',
  path: '/iqac-pria',
});

const RESPONSIBILITIES = [
  'Program self-assessment & quality audits',
  'Developing & monitoring quality assurance policies',
  'Outcome-Based Education (OBE) standards & review',
  'Coordinating with UGC & accreditation bodies (e.g. BAETE)',
  'Faculty & curriculum quality evaluation',
  'Collecting stakeholder feedback (students, alumni, employers)',
  'Organizing training, workshops & quality-enhancement programs',
  'Preparing annual quality assurance reports',
];

const P = '/assets/images/iqac';

const HEAD = {
  name: 'Md. Mostofa Hossain',
  role: 'Director',
  photo: `${P}/mostofa-hossain.png`,
};

const TEAM = [
  { name: 'Bulbul Ahamed', role: 'Additional Director', photo: `${P}/bulbul-ahamed.png` },
  { name: 'Md. Feroze Alam', role: 'Deputy Registrar', photo: `${P}/feroze-alam.png` },
];

export default function IqacPriaPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Office of the IQAC & PRIA"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academic' },
          { label: 'IQAC & PRIA' },
        ]}
      />

      {/* About */}
      <section style={{ background: '#ffffff', padding: '80px 0 40px' }}>
        <Container className="!max-w-[1100px]">
          <div style={{ textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              IQAC Institutional Quality Assurance Cell
            </span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(26px, 3.4vw, 38px)', lineHeight: 1.25, marginBottom: 18 }}>
              About this Office
            </h2>
            <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.85, margin: 0 }}>
              The Institutional Quality Assurance Cell (IQAC) leads the continuous improvement of academic
              and administrative quality at Sonargaon University. Working alongside PRIA, the cell sets
              quality standards, conducts self-assessments across programs, and promotes a culture of
              accountability and excellence throughout the university. Its goal is to ensure that every
              program meets national and international standards of higher education supporting
              SU&rsquo;s commitment to &ldquo;Quality Education, National Needs, Global Standards.&rdquo;
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
          <div className="iq-resp">
            {RESPONSIBILITIES.map((r) => (
              <div key={r} className="iq-resp__item">
                <span className="iq-resp__icon">
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
          <div className="iq-head-wrap">
            <article className="iq-card iq-card--head">
              <div className="iq-card__photo-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={HEAD.photo} alt="" aria-hidden className="iq-card__bg" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={HEAD.photo} alt={HEAD.name} className="iq-card__photo" />
              </div>
              <div className="iq-card__body">
                <h3 className="iq-card__name">{HEAD.name}</h3>
                <p className="iq-card__role">{HEAD.role}</p>
                <span className="iq-card__badge">Office Head</span>
              </div>
            </article>
          </div>

          {/* Team members */}
          <div className="iq-grid">
            {TEAM.map((m) => (
              <article key={m.name} className="iq-card">
                <div className="iq-card__photo-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt="" aria-hidden className="iq-card__bg" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt={m.name} className="iq-card__photo" />
                </div>
                <div className="iq-card__body">
                  <h3 className="iq-card__name">{m.name}</h3>
                  <p className="iq-card__role">{m.role}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .iq-resp { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 700px) { .iq-resp { grid-template-columns: 1fr 1fr; } }
        .iq-resp__item {
          display: flex; align-items: center; gap: 14px;
          background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 12px; padding: 18px 22px;
          color: #2B3175; font-size: 15.5px; font-weight: 500;
        }
        .iq-resp__icon {
          flex-shrink: 0; width: 28px; height: 28px; border-radius: 8px;
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(204,21,121,0.10); color: #CC1579;
        }

        .iq-head-wrap { display: flex; justify-content: center; margin-bottom: 26px; }
        .iq-card--head { width: 100%; max-width: 320px; }
        .iq-card--head .iq-card__badge {
          display: inline-block; margin-top: 12px; background: linear-gradient(135deg, #2B3175, #CC1579);
          color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          padding: 6px 14px; border-radius: 999px;
        }

        .iq-grid {
          display: grid; grid-template-columns: 1fr; gap: 24px;
          margin: 0 auto; justify-content: center; max-width: 660px;
        }
        @media (min-width: 560px) { .iq-grid { grid-template-columns: repeat(2, minmax(0, 300px)); } }

        .iq-card {
          background: #ffffff; border: 1px solid #ECECF3; overflow: hidden;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06); display: flex; flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .iq-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .iq-card__photo-wrap {
          position: relative; border-bottom: 1px solid #ECECF3; background: #EEF0F6;
          overflow: hidden; aspect-ratio: 1 / 1;
        }
        .iq-card__bg {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          object-position: center; transform: scale(1.15); filter: blur(18px) brightness(0.92); z-index: 0;
        }
        .iq-card__photo {
          position: relative; z-index: 1; width: 100%; height: 100%;
          object-fit: contain; object-position: center; display: block;
        }
        .iq-card__body { padding: 22px 24px 24px; text-align: center; }
        .iq-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 18px; line-height: 1.3; margin: 0 0 5px;
        }
        .iq-card__role { color: #5B5B78; font-size: 14px; line-height: 1.4; margin: 0; }
      `}</style>
    </>
  );
}
