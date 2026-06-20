import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { Check } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Office of Information Technology',
  description:
    'The Office of Information Technology powers the digital backbone of Sonargaon University — network, ERP, labs, websites, and technical support.',
  path: '/information-technology',
});

const RESPONSIBILITIES = [
  'Campus network, internet & Wi-Fi management',
  'ERP system administration & support (admission, results, records)',
  'Computer lab setup & maintenance',
  'Website & online services management',
  'Email, user accounts & access control',
  'Hardware, software & technical support',
  'Data security, backup & IT infrastructure',
  'Smart classroom & audio-visual support',
];

const P = '/assets/images/it-office';

const HEAD = {
  name: 'Khandaker Aminul Haque Jaman',
  role: 'Director',
  photo: `${P}/khandaker-jaman.png`,
};

const TEAM = [
  { name: 'Abu Sadat Muhammad Tanveer', role: 'Assistant Director', photo: `${P}/sadat-tanveer.png` },
  { name: 'Farhad Hossain Evan', role: 'Deputy Director (Software Engr.)', photo: `${P}/farhad-evan.png` },
  { name: 'Shoriful Islam', role: 'Deputy Director', photo: `${P}/shoriful-islam.png` },
  { name: 'Md. Ahsan Habib', role: 'Assistant Executive', photo: `${P}/ahsan-habib.png` },
  { name: 'Md. Shariful Islam', role: 'IT Assistant', photo: `${P}/shariful-islam.png` },
  { name: 'Shakibul Islam', role: 'Software Programmer', photo: `${P}/shakibul-islam.png` },
];

export default function InformationTechnologyPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Office of Information Technology"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academic' },
          { label: 'Information Technology' },
        ]}
      />

      {/* About */}
      <section style={{ background: '#ffffff', padding: '80px 0 40px' }}>
        <Container className="!max-w-[1100px]">
          <div style={{ textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              Academic Office
            </span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(26px, 3.4vw, 38px)', lineHeight: 1.25, marginBottom: 18 }}>
              About this Office
            </h2>
            <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.85, margin: 0 }}>
              The Office of Information Technology powers the digital backbone of Sonargaon University. From
              managing the campus network and the university&rsquo;s ERP system to maintaining computer labs,
              websites, and online services, the IT office ensures that students, faculty, and staff stay
              connected and supported. It plays a central role in keeping SU&rsquo;s academic and
              administrative operations running smoothly and securely.
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
          <div className="it-resp">
            {RESPONSIBILITIES.map((r) => (
              <div key={r} className="it-resp__item">
                <span className="it-resp__icon">
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
          <div className="it-head-wrap">
            <article className="it-card it-card--head">
              <div className="it-card__photo-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={HEAD.photo} alt="" aria-hidden className="it-card__bg" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={HEAD.photo} alt={HEAD.name} className="it-card__photo" />
              </div>
              <div className="it-card__body">
                <h3 className="it-card__name">{HEAD.name}</h3>
                <p className="it-card__role">{HEAD.role}</p>
                <span className="it-card__badge">Office Head</span>
              </div>
            </article>
          </div>

          {/* Team members */}
          <div className="it-grid">
            {TEAM.map((m) => (
              <article key={m.name} className="it-card">
                <div className="it-card__photo-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt="" aria-hidden className="it-card__bg" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt={m.name} className="it-card__photo" />
                </div>
                <div className="it-card__body">
                  <h3 className="it-card__name">{m.name}</h3>
                  <p className="it-card__role">{m.role}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .it-resp { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 700px) { .it-resp { grid-template-columns: 1fr 1fr; } }
        .it-resp__item {
          display: flex; align-items: center; gap: 14px;
          background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 12px; padding: 18px 22px;
          color: #2B3175; font-size: 15.5px; font-weight: 500;
        }
        .it-resp__icon {
          flex-shrink: 0; width: 28px; height: 28px; border-radius: 8px;
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(204,21,121,0.10); color: #CC1579;
        }

        .it-head-wrap { display: flex; justify-content: center; margin-bottom: 26px; }
        .it-card--head { width: 100%; max-width: 320px; }
        .it-card--head .it-card__badge {
          display: inline-block; margin-top: 12px; background: linear-gradient(135deg, #2B3175, #CC1579);
          color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          padding: 6px 14px; border-radius: 999px;
        }

        .it-grid {
          display: grid; grid-template-columns: 1fr; gap: 24px;
          margin: 0 auto; justify-content: center;
        }
        @media (min-width: 600px) { .it-grid { grid-template-columns: repeat(2, minmax(0, 300px)); } }
        @media (min-width: 992px) { .it-grid { grid-template-columns: repeat(4, minmax(0, 300px)); } }

        .it-card {
          background: #ffffff; border: 1px solid #ECECF3; overflow: hidden;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06); display: flex; flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .it-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .it-card__photo-wrap {
          position: relative; border-bottom: 1px solid #ECECF3; background: #EEF0F6;
          overflow: hidden; aspect-ratio: 1 / 1;
        }
        .it-card__bg {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          object-position: center; transform: scale(1.15); filter: blur(18px) brightness(0.92); z-index: 0;
        }
        .it-card__photo {
          position: relative; z-index: 1; width: 100%; height: 100%;
          object-fit: contain; object-position: center; display: block;
        }
        .it-card__body { padding: 22px 24px 24px; text-align: center; }
        .it-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 18px; line-height: 1.3; margin: 0 0 5px;
        }
        .it-card__role { color: #5B5B78; font-size: 14px; line-height: 1.4; margin: 0; }
      `}</style>
    </>
  );
}
