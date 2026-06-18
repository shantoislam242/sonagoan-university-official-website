import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { Check } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Office of Academic Affairs',
  description:
    'The Office of Academic Affairs coordinates the academic operations of Sonargaon University scheduling, records, examinations, and academic policy.',
  path: '/academic-affairs',
});

const RESPONSIBILITIES = [
  'Academic calendar & class scheduling',
  'Course registration oversight',
  'Student academic records & transcripts',
  'Examination & result coordination',
  'Curriculum & OBE implementation',
  'Academic policy & regulations',
];

const P = '/assets/images/academic-affairs';

const HEAD = {
  name: 'Mohammad Golam Mostafa',
  role: 'Director ACAD (Add. D)',
  photo: `${P}/golam-mostafa.png`,
};

const TEAM = [
  { name: 'Md. Ejajul Haque', role: 'Senior Officer', photo: `${P}/ejajul-haque.png` },
  { name: 'Md. Zahidul Haque', role: 'Executive', photo: `${P}/zahidul-haque.png` },
  { name: 'Md. Ismail Hosain', role: 'Officer', photo: `${P}/ismail-hosain.png` },
];

export default function AcademicAffairsPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Office of Academic Affairs"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academic' },
          { label: 'Academic Affairs' },
        ]}
      />

      {/* About + Responsibilities */}
      <section style={{ background: '#ffffff', padding: '80px 0 40px' }}>
        <Container className="!max-w-[1100px]">
          <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto 18px' }}>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              Academic Office
            </span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(26px, 3.4vw, 38px)', lineHeight: 1.25, marginBottom: 18 }}>
              About this Office
            </h2>
            <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.85, margin: 0 }}>
              The Office of Academic Affairs coordinates the academic operations of Sonargaon University
 supporting students, faculties, and departments across the academic year. It works to
              ensure smooth scheduling, accurate records, and a consistent academic experience for every
              student.
            </p>
          </div>
        </Container>
      </section>

      <section style={{ background: '#ffffff', padding: '20px 0 80px' }}>
        <Container className="!max-w-[1100px]">
          <h3 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 22, marginBottom: 26, textAlign: 'center' }}>
            Responsibilities
          </h3>
          <div className="aa-resp">
            {RESPONSIBILITIES.map((r) => (
              <div key={r} className="aa-resp__item">
                <span className="aa-resp__icon">
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
          <div className="aa-head-wrap">
            <article className="aa-card aa-card--head">
              <div className="aa-card__photo-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={HEAD.photo} alt="" aria-hidden className="aa-card__bg" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={HEAD.photo} alt={HEAD.name} className="aa-card__photo" />
              </div>
              <div className="aa-card__body">
                <h3 className="aa-card__name">{HEAD.name}</h3>
                <p className="aa-card__role">{HEAD.role}</p>
                <span className="aa-card__badge">Office Head</span>
              </div>
            </article>
          </div>

          {/* Team members */}
          <div className="aa-grid">
            {TEAM.map((m) => (
              <article key={m.name} className="aa-card">
                <div className="aa-card__photo-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt="" aria-hidden className="aa-card__bg" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt={m.name} className="aa-card__photo" />
                </div>
                <div className="aa-card__body">
                  <h3 className="aa-card__name">{m.name}</h3>
                  <p className="aa-card__role">{m.role}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .aa-resp { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 700px) { .aa-resp { grid-template-columns: 1fr 1fr; } }
        .aa-resp__item {
          display: flex; align-items: center; gap: 14px;
          background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 12px; padding: 18px 22px;
          color: #2B3175; font-size: 15.5px; font-weight: 500;
        }
        .aa-resp__icon {
          flex-shrink: 0; width: 28px; height: 28px; border-radius: 8px;
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(204,21,121,0.10); color: #CC1579;
        }

        .aa-head-wrap { display: flex; justify-content: center; margin-bottom: 26px; }
        .aa-card--head { width: 100%; max-width: 320px; }
        .aa-card--head .aa-card__badge {
          display: inline-block; margin-top: 12px; background: linear-gradient(135deg, #2B3175, #CC1579);
          color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          padding: 6px 14px; border-radius: 999px;
        }

        .aa-grid { display: grid; grid-template-columns: 1fr; gap: 24px; max-width: 1020px; margin: 0 auto; }
        @media (min-width: 600px) { .aa-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 900px) { .aa-grid { grid-template-columns: repeat(3, 1fr); } }

        .aa-card {
          background: #ffffff; border: 1px solid #ECECF3; overflow: hidden;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06); display: flex; flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .aa-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .aa-card__photo-wrap {
          position: relative; border-bottom: 1px solid #ECECF3; background: #EEF0F6;
          overflow: hidden; aspect-ratio: 1 / 1;
        }
        .aa-card__bg {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          object-position: center; transform: scale(1.15); filter: blur(18px) brightness(0.92); z-index: 0;
        }
        .aa-card__photo {
          position: relative; z-index: 1; width: 100%; height: 100%;
          object-fit: contain; object-position: center; display: block;
        }
        .aa-card__body { padding: 22px 24px 24px; text-align: center; }
        .aa-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 18px; line-height: 1.3; margin: 0 0 5px;
        }
        .aa-card__role { color: #5B5B78; font-size: 14px; margin: 0; }
      `}</style>
    </>
  );
}
