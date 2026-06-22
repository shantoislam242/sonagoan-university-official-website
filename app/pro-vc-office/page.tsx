import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';

export const metadata = buildMetadata({
  title: 'Office of the Pro-Vice Chancellor',
  description:
    'The Office of the Pro-Vice Chancellor of Sonargaon University — led by the Pro-Vice Chancellor and supported by the office team.',
  path: '/pro-vc-office',
});

const PVC = {
  name: 'Prof. Bulbul Ahamed',
  role: 'Pro-Vice Chancellor (Acting)',
  photo: '/assets/images/leadership/bulbul-ahamed.jpg',
};

const TEAM = [
  {
    name: 'Md. Rajib Ali Bhuya',
    role: 'Officer & APS to Pro VC (Acting)',
    photo: '/assets/images/leadership/rajib-ali-bhuya.png',
  },
];

export default function ProVcOfficePage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Office of the Pro-Vice Chancellor"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Office of the Pro-Vice Chancellor' },
        ]}
      />

      <section style={{ background: '#F6F7FC', padding: '80px 0 90px' }}>
        <Container className="!max-w-[1100px]">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 50px' }}>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              Office of the Pro-Vice Chancellor
            </span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(28px, 3.6vw, 42px)', lineHeight: 1.2, margin: 0 }}>
              Leadership &amp; Office Team
            </h2>
          </div>

          {/* Pro-Vice Chancellor */}
          <div className="pvco-head-wrap">
            <article className="pvco-card pvco-card--head">
              <div className="pvco-card__photo-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={PVC.photo} alt="" aria-hidden className="pvco-card__bg" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={PVC.photo} alt={PVC.name} className="pvco-card__photo" />
              </div>
              <div className="pvco-card__body">
                <h3 className="pvco-card__name">{PVC.name}</h3>
                <p className="pvco-card__role">{PVC.role}</p>
                <span className="pvco-card__badge">Pro-Vice Chancellor</span>
              </div>
            </article>
          </div>

          {/* Office team */}
          <div className="pvco-grid">
            {TEAM.map((m) => (
              <article key={m.name} className="pvco-card">
                <div className="pvco-card__photo-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt="" aria-hidden className="pvco-card__bg" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt={m.name} className="pvco-card__photo" />
                </div>
                <div className="pvco-card__body">
                  <h3 className="pvco-card__name">{m.name}</h3>
                  <p className="pvco-card__role">{m.role}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .pvco-head-wrap { display: flex; justify-content: center; margin-bottom: 26px; }
        .pvco-card--head { max-width: 320px; }
        .pvco-card--head .pvco-card__badge {
          display: inline-block; margin-top: 12px; background: linear-gradient(135deg, #2B3175, #CC1579);
          color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          padding: 6px 14px; border-radius: 999px;
        }
        .pvco-grid { display: flex; justify-content: center; }

        .pvco-card {
          width: 100%; max-width: 320px;
          background: #ffffff; border: 1px solid #ECECF3; overflow: hidden;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06); display: flex; flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .pvco-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .pvco-card__photo-wrap {
          position: relative; border-bottom: 1px solid #ECECF3; background: #EEF0F6;
          overflow: hidden; aspect-ratio: 1 / 1;
        }
        .pvco-card__bg {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          object-position: center; transform: scale(1.15); filter: blur(18px) brightness(0.92); z-index: 0;
        }
        .pvco-card__photo {
          position: relative; z-index: 1; width: 100%; height: 100%;
          object-fit: contain; object-position: center; display: block;
        }
        .pvco-card__body { padding: 22px 24px 24px; text-align: center; }
        .pvco-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 18px; line-height: 1.3; margin: 0 0 5px;
        }
        .pvco-card__role { color: #5B5B78; font-size: 14px; line-height: 1.4; margin: 0; }
      `}</style>
    </>
  );
}
