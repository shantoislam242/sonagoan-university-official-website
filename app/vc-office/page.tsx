import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';

export const metadata = buildMetadata({
  title: 'Office of the Vice Chancellor',
  description:
    'The Office of the Vice Chancellor of Sonargaon University — led by the Vice Chancellor and supported by the office team.',
  path: '/vc-office',
});

const VC = {
  name: 'Prof. Dr. Mohammad Ekramol Islam',
  role: 'Vice Chancellor',
  photo: '/assets/images/leadership/ekramol-islam.png',
};

const TEAM = [
  {
    name: 'Md. Atikur Rahman',
    role: 'Deputy Registrar (PS to VC)',
    photo: '/assets/images/leadership/atikur-rahman-psvc.png',
  },
];

export default function VcOfficePage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Office of the Vice Chancellor"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Office of the Vice Chancellor' },
        ]}
      />

      <section style={{ background: '#F6F7FC', padding: '80px 0 90px' }}>
        <Container className="!max-w-[1100px]">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 50px' }}>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              Office of the Vice Chancellor
            </span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(28px, 3.6vw, 42px)', lineHeight: 1.2, margin: 0 }}>
              Leadership &amp; Office Team
            </h2>
          </div>

          {/* Vice Chancellor */}
          <div className="vco-head-wrap">
            <article className="vco-card vco-card--head">
              <div className="vco-card__photo-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={VC.photo} alt="" aria-hidden className="vco-card__bg" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={VC.photo} alt={VC.name} className="vco-card__photo" />
              </div>
              <div className="vco-card__body">
                <h3 className="vco-card__name">{VC.name}</h3>
                <p className="vco-card__role">{VC.role}</p>
                <span className="vco-card__badge">Vice Chancellor</span>
              </div>
            </article>
          </div>

          {/* Office team */}
          <div className="vco-grid">
            {TEAM.map((m) => (
              <article key={m.name} className="vco-card">
                <div className="vco-card__photo-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt="" aria-hidden className="vco-card__bg" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt={m.name} className="vco-card__photo" />
                </div>
                <div className="vco-card__body">
                  <h3 className="vco-card__name">{m.name}</h3>
                  <p className="vco-card__role">{m.role}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .vco-head-wrap { display: flex; justify-content: center; margin-bottom: 26px; }
        .vco-card--head { max-width: 320px; }
        .vco-card--head .vco-card__badge {
          display: inline-block; margin-top: 12px; background: linear-gradient(135deg, #2B3175, #CC1579);
          color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          padding: 6px 14px; border-radius: 999px;
        }
        .vco-grid { display: flex; justify-content: center; }

        .vco-card {
          width: 100%; max-width: 320px;
          background: #ffffff; border: 1px solid #ECECF3; overflow: hidden;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06); display: flex; flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .vco-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .vco-card__photo-wrap {
          position: relative; border-bottom: 1px solid #ECECF3; background: #EEF0F6;
          overflow: hidden; aspect-ratio: 1 / 1;
        }
        .vco-card__bg {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          object-position: center; transform: scale(1.15); filter: blur(18px) brightness(0.92); z-index: 0;
        }
        .vco-card__photo {
          position: relative; z-index: 1; width: 100%; height: 100%;
          object-fit: contain; object-position: center; display: block;
        }
        .vco-card__body { padding: 22px 24px 24px; text-align: center; }
        .vco-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 18px; line-height: 1.3; margin: 0 0 5px;
        }
        .vco-card__role { color: #5B5B78; font-size: 14px; line-height: 1.4; margin: 0; }
      `}</style>
    </>
  );
}
