import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { Check } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Office of the Controller of Examinations',
  description:
    'The Office of the Controller of Examinations manages the complete examination process of Sonargaon University — scheduling, conducting exams, and processing and publishing results.',
  path: '/exam-controller',
});

const RESPONSIBILITIES = [
  'Examination schedule, routine & seat plan preparation',
  'Question paper management & confidentiality',
  'Conducting semester final examinations',
  'Result processing, tabulation & publication',
  'Issuance of grade sheets, transcripts & certificates',
  'Re-scrutiny & re-evaluation applications',
  'Maintaining examination rules, discipline & integrity',
];

const P = '/assets/images/exam-controller';

const HEAD = {
  name: 'Md. Omar Faruque Molla',
  role: 'Controller of Examinations',
  photo: `${P}/omar-faruque-molla.png`,
};

const TEAM = [
  { name: 'Noor - E - Alam', role: 'Deputy Controller of Examinations', photo: `${P}/noor-e-alam.png` },
  { name: 'Md. Anas', role: 'Deputy Controller of Examinations', photo: `${P}/md-anas.png` },
  { name: 'Md. Reazul Islam', role: 'Assistant Controller of Examinations', photo: `${P}/reazul-islam.png` },
  { name: 'Mamun Khan', role: 'Jr. Section Officer', photo: `${P}/mamun-khan.png` },
];

export default function ExamControllerPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Office of the Controller of Examinations"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academic' },
          { label: 'Controller of Examinations' },
        ]}
      />

      {/* About */}
      <section style={{ background: '#ffffff', padding: '80px 0 40px' }}>
        <Container className="!max-w-[1100px]">
          <div style={{ textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              Academic Office
            </span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(26px, 3.4vw, 38px)', lineHeight: 1.25, marginBottom: 18 }}>
              About this Office
            </h2>
            <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.85, margin: 0 }}>
              The Office of the Controller of Examinations manages the complete examination process of
              Sonargaon University &mdash; from scheduling and conducting examinations to processing and
              publishing results. It works to ensure that every examination is conducted fairly, securely,
              and on time, and that students receive accurate academic records and certificates across all
              faculties and departments.
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
          <div className="ec-resp">
            {RESPONSIBILITIES.map((r) => (
              <div key={r} className="ec-resp__item">
                <span className="ec-resp__icon">
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
        <Container className="!max-w-[1360px]">
          <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(26px, 3.4vw, 38px)', textAlign: 'center', marginBottom: 48 }}>
            Our Team
          </h2>

          {/* Office head */}
          <div className="ec-head-wrap">
            <article className="ec-card ec-card--head">
              <div className="ec-card__photo-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={HEAD.photo} alt="" aria-hidden className="ec-card__bg" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={HEAD.photo} alt={HEAD.name} className="ec-card__photo" />
              </div>
              <div className="ec-card__body">
                <h3 className="ec-card__name">{HEAD.name}</h3>
                <p className="ec-card__role">{HEAD.role}</p>
                <span className="ec-card__badge">Office Head</span>
              </div>
            </article>
          </div>

          {/* Team members */}
          <div className="ec-grid">
            {TEAM.map((m) => (
              <article key={m.name} className="ec-card">
                <div className="ec-card__photo-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt="" aria-hidden className="ec-card__bg" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt={m.name} className="ec-card__photo" />
                </div>
                <div className="ec-card__body">
                  <h3 className="ec-card__name">{m.name}</h3>
                  <p className="ec-card__role">{m.role}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .ec-resp { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 700px) { .ec-resp { grid-template-columns: 1fr 1fr; } }
        .ec-resp__item {
          display: flex; align-items: center; gap: 14px;
          background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 12px; padding: 18px 22px;
          color: #2B3175; font-size: 15.5px; font-weight: 500;
        }
        .ec-resp__icon {
          flex-shrink: 0; width: 28px; height: 28px; border-radius: 8px;
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(204,21,121,0.10); color: #CC1579;
        }

        .ec-head-wrap { display: flex; justify-content: center; margin-bottom: 26px; }
        .ec-card--head { width: 100%; max-width: 320px; }
        .ec-card--head .ec-card__badge {
          display: inline-block; margin-top: 12px; background: linear-gradient(135deg, #2B3175, #CC1579);
          color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          padding: 6px 14px; border-radius: 999px;
        }

        .ec-grid {
          display: grid; grid-template-columns: 1fr; gap: 24px;
          margin: 0 auto; justify-content: center;
        }
        @media (min-width: 600px) { .ec-grid { grid-template-columns: repeat(2, minmax(0, 300px)); } }
        @media (min-width: 992px) { .ec-grid { grid-template-columns: repeat(4, minmax(0, 300px)); } }

        .ec-card {
          background: #ffffff; border: 1px solid #ECECF3; overflow: hidden;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06); display: flex; flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .ec-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .ec-card__photo-wrap {
          position: relative; border-bottom: 1px solid #ECECF3; background: #EEF0F6;
          overflow: hidden; aspect-ratio: 1 / 1;
        }
        .ec-card__bg {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          object-position: center; transform: scale(1.15); filter: blur(18px) brightness(0.92); z-index: 0;
        }
        .ec-card__photo {
          position: relative; z-index: 1; width: 100%; height: 100%;
          object-fit: contain; object-position: center; display: block;
        }
        .ec-card__body { padding: 22px 24px 24px; text-align: center; }
        .ec-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 18px; line-height: 1.3; margin: 0 0 5px;
        }
        .ec-card__role { color: #5B5B78; font-size: 14px; line-height: 1.4; margin: 0; }
      `}</style>
    </>
  );
}
