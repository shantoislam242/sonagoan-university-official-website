import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { Check } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Office of the Registrar',
  description:
    'The Office of the Registrar is the central administrative authority of Sonargaon University — official records, registration, transcripts, and academic regulations.',
  path: '/registrar',
});

const RESPONSIBILITIES = [
  'Maintaining official student & academic records',
  'Student registration & enrollment oversight',
  'Credit transfer applications & approvals (with CEC & Academic Council)',
  'Issuing official transcripts, certificates & university correspondence',
  'Coordinating with Syndicate & Academic Council',
  'Implementing academic rules, statutes & regulations',
  'Convocation & graduation record management',
  'Liaison with UGC and external bodies',
];

const P = '/assets/images/registrar';

const HEAD = {
  name: 'S.M. Nurul Huda',
  role: 'Registrar',
  photo: `${P}/nurul-huda.png`,
};

const TEAM = [
  { name: 'Md. Abu Hanif', role: 'Additional Registrar', photo: `${P}/abu-hanif.png` },
  { name: 'Mahmud-Al-Masud', role: 'Deputy Registrar', photo: `${P}/mahmud-al-masud.png` },
  { name: 'Mahmudul Hoque', role: 'Deputy Registrar', photo: `${P}/mahmudul-hoque.png` },
  { name: 'Md. Atikur Rahman', role: 'Deputy Registrar (PS to VC)', photo: `${P}/atikur-rahman.png` },
  { name: 'Zishan Ahmed', role: 'Senior Officer', photo: `${P}/zishan-ahmed.png` },
  { name: 'Md. Masum Mia', role: 'Officer', photo: `${P}/masum-mia.png` },
  { name: 'Md Golam Sorowar', role: 'Officer', photo: `${P}/golam-sorowar.png` },
];

export default function RegistrarPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Office of the Registrar"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Registrar' },
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
              The Office of the Registrar is the central administrative authority of Sonargaon University,
              connecting students, faculty, and the university&rsquo;s governing bodies. It maintains official
              records, oversees admissions, registration, and academic regulations, and serves as the formal
              point of contact for credit transfers, transcripts, and university correspondence. The Registrar
              works closely with the Syndicate, Academic Council, and the Office of the Vice-Chancellor to
              ensure that SU runs in line with its statutes and UGC requirements.
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
          <div className="reg-resp">
            {RESPONSIBILITIES.map((r) => (
              <div key={r} className="reg-resp__item">
                <span className="reg-resp__icon">
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
          <div className="reg-head-wrap">
            <article className="reg-card reg-card--head">
              <div className="reg-card__photo-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={HEAD.photo} alt="" aria-hidden className="reg-card__bg" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={HEAD.photo} alt={HEAD.name} className="reg-card__photo" />
              </div>
              <div className="reg-card__body">
                <h3 className="reg-card__name">{HEAD.name}</h3>
                <p className="reg-card__role">{HEAD.role}</p>
                <span className="reg-card__badge">Office Head</span>
              </div>
            </article>
          </div>

          {/* Team members */}
          <div className="reg-grid">
            {TEAM.map((m) => (
              <article key={m.name} className="reg-card">
                <div className="reg-card__photo-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt="" aria-hidden className="reg-card__bg" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt={m.name} className="reg-card__photo" />
                </div>
                <div className="reg-card__body">
                  <h3 className="reg-card__name">{m.name}</h3>
                  <p className="reg-card__role">{m.role}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .reg-resp { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 700px) { .reg-resp { grid-template-columns: 1fr 1fr; } }
        .reg-resp__item {
          display: flex; align-items: center; gap: 14px;
          background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 12px; padding: 18px 22px;
          color: #2B3175; font-size: 15.5px; font-weight: 500;
        }
        .reg-resp__icon {
          flex-shrink: 0; width: 28px; height: 28px; border-radius: 8px;
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(204,21,121,0.10); color: #CC1579;
        }

        .reg-head-wrap { display: flex; justify-content: center; margin-bottom: 26px; }
        .reg-card--head { width: 100%; max-width: 320px; }
        .reg-card--head .reg-card__badge {
          display: inline-block; margin-top: 12px; background: linear-gradient(135deg, #2B3175, #CC1579);
          color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          padding: 6px 14px; border-radius: 999px;
        }

        .reg-grid {
          display: grid; grid-template-columns: 1fr; gap: 24px;
          margin: 0 auto; justify-content: center;
        }
        @media (min-width: 600px) { .reg-grid { grid-template-columns: repeat(2, minmax(0, 300px)); } }
        @media (min-width: 992px) { .reg-grid { grid-template-columns: repeat(4, minmax(0, 300px)); } }

        .reg-card {
          background: #ffffff; border: 1px solid #ECECF3; overflow: hidden;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06); display: flex; flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .reg-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .reg-card__photo-wrap {
          position: relative; border-bottom: 1px solid #ECECF3; background: #EEF0F6;
          overflow: hidden; aspect-ratio: 1 / 1;
        }
        .reg-card__bg {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          object-position: center; transform: scale(1.15); filter: blur(18px) brightness(0.92); z-index: 0;
        }
        .reg-card__photo {
          position: relative; z-index: 1; width: 100%; height: 100%;
          object-fit: contain; object-position: center; display: block;
        }
        .reg-card__body { padding: 22px 24px 24px; text-align: center; }
        .reg-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 18px; line-height: 1.3; margin: 0 0 5px;
        }
        .reg-card__role { color: #5B5B78; font-size: 14px; line-height: 1.4; margin: 0; }
      `}</style>
    </>
  );
}
