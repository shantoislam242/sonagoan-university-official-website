import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { CalendarDays } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Former Vice Chancellors',
  description:
    'The former Vice Chancellors who have led Sonargaon University, with their terms of service.',
  path: '/former-vc',
});

type FormerVC = { name: string; role: string; from: string; to: string; photo: string };

const P = '/assets/images/leadership';

const FORMER_VCS: FormerVC[] = [
  {
    name: 'Prof. Shamim Ara Hassan',
    role: 'Former Vice Chancellor (In-Charge)',
    from: '25 June 2023',
    to: '23 December 2023',
    photo: `${P}/shamim-ara-hassan.png`,
  },
  {
    name: 'Prof. Dr. Md. Abul Bashar',
    role: 'Former Vice Chancellor',
    from: '25 June 2019',
    to: '24 June 2023',
    photo: `${P}/abul-bashar.png`,
  },
  {
    name: 'Prof. M.A. Razzaque',
    role: 'Former Vice Chancellor',
    from: '1 September 2014',
    to: '30 August 2018',
    photo: `${P}/ma-razzaque.png`,
  },
];

export default function FormerVCPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Former Vice Chancellors"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Former VC' },
        ]}
      />

      <section style={{ background: '#F6F7FC', padding: '80px 0 90px' }}>
        <Container className="!max-w-[1100px]">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 50px' }}>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              Leadership
            </span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(28px, 3.6vw, 42px)', lineHeight: 1.2, marginBottom: 14 }}>
              Former Vice Chancellors
            </h2>
            <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.8, margin: 0 }}>
              The distinguished academics who have served as Vice Chancellor of Sonargaon University.
            </p>
          </div>

          <div className="fvc-list">
            {FORMER_VCS.map((v) => (
              <article key={v.name} className="fvc-card">
                <div className="fvc-card__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={v.photo} alt="" aria-hidden className="fvc-card__bg" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={v.photo} alt={v.name} className="fvc-card__photo" />
                </div>
                <div className="fvc-card__body">
                  <h3 className="fvc-card__name">{v.name}</h3>
                  <p className="fvc-card__role">{v.role}</p>
                  <div className="fvc-card__term">
                    <span className="fvc-term">
                      <CalendarDays size={15} />
                      <span><b>Joined</b> {v.from}</span>
                    </span>
                    <span className="fvc-term">
                      <CalendarDays size={15} />
                      <span><b>Served until</b> {v.to}</span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .fvc-list { display: flex; flex-direction: column; gap: 22px; }
        .fvc-card {
          display: grid; grid-template-columns: 1fr; gap: 0;
          background: #ffffff; border: 1px solid #ECECF3; border-radius: 18px; overflow: hidden;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06);
          transition: transform .25s ease, box-shadow .25s ease;
        }
        @media (min-width: 640px) { .fvc-card { grid-template-columns: 240px 1fr; } }
        .fvc-card:hover { transform: translateY(-4px); box-shadow: 0 22px 48px rgba(43,49,117,0.12); }
        .fvc-card__media {
          position: relative; overflow: hidden; background: #EEF0F6;
          aspect-ratio: 4 / 3; border-bottom: 1px solid #ECECF3;
        }
        @media (min-width: 640px) {
          .fvc-card__media { aspect-ratio: auto; border-bottom: 0; border-right: 1px solid #ECECF3; }
        }
        .fvc-card__bg {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          object-position: center; transform: scale(1.15); filter: blur(18px) brightness(0.92); z-index: 0;
        }
        .fvc-card__photo {
          position: relative; z-index: 1; width: 100%; height: 100%;
          object-fit: contain; object-position: center; display: block;
        }
        .fvc-card__body {
          padding: 26px 30px; display: flex; flex-direction: column; justify-content: center;
        }
        .fvc-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175;
          font-size: 21px; line-height: 1.3; margin: 0 0 6px;
        }
        .fvc-card__role { color: #CC1579; font-size: 14.5px; font-weight: 600; margin: 0 0 18px; }
        .fvc-card__term { display: flex; flex-wrap: wrap; gap: 10px 24px; }
        .fvc-term {
          display: inline-flex; align-items: center; gap: 8px;
          color: #5B5B78; font-size: 14px;
        }
        .fvc-term b { color: #2B3175; font-weight: 600; }
        .fvc-term svg { color: #8A8AA3; flex-shrink: 0; }
      `}</style>
    </>
  );
}
