import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';

export const metadata = buildMetadata({
  title: 'Advisor List',
  description:
    'Meet the advisors of Sonargaon University the experienced advisors supporting the university’s growth and direction.',
  path: '/advisor-list',
});

type Advisor = { name: string; role: string; photo: string };

const P = '/assets/images/advisors';

const ADVISORS: Advisor[] = [
  { name: 'Azizul Bari Shipu', role: 'Advisor, SU', photo: `${P}/azizul-bari-shipu.jpg` },
  { name: 'Ln Mir Abdul Alim', role: 'Advisor, SU', photo: `${P}/mir-abdul-alim.jpeg` },
];

export default function AdvisorListPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Advisor List"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academic' },
          { label: 'Advisor List' },
        ]}
      />

      <section style={{ background: '#F6F7FC', padding: '90px 0' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 54px' }}>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              University Advisors
            </span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(28px, 3.6vw, 42px)', lineHeight: 1.2, marginBottom: 16 }}>
              Our Advisors
            </h2>
            <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.8, margin: 0 }}>
              The experienced advisors guiding and supporting Sonargaon University&rsquo;s growth.
            </p>
          </div>

          <div className="adv-grid">
            {ADVISORS.map((a) => (
              <article key={a.name} className="adv-card">
                <div className="adv-card__photo-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.photo} alt="" aria-hidden className="adv-card__bg" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.photo} alt={a.name} className="adv-card__photo" />
                </div>
                <div className="adv-card__body">
                  <h3 className="adv-card__name">{a.name}</h3>
                  <p className="adv-card__role">{a.role}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .adv-grid {
          display: grid; grid-template-columns: 1fr; gap: 26px;
          max-width: 680px; margin: 0 auto;
        }
        @media (min-width: 560px) { .adv-grid { grid-template-columns: 1fr 1fr; } }
        .adv-card {
          background: #ffffff; border: 1px solid #ECECF3; overflow: hidden;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06); display: flex; flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .adv-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .adv-card__photo-wrap {
          position: relative; border-bottom: 1px solid #ECECF3; background: #EEF0F6;
          overflow: hidden; aspect-ratio: 1 / 1;
        }
        .adv-card__bg {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          object-position: center; transform: scale(1.15); filter: blur(18px) brightness(0.92);
          z-index: 0;
        }
        .adv-card__photo {
          position: relative; z-index: 1; width: 100%; height: 100%;
          object-fit: contain; object-position: center; display: block;
        }
        .adv-card__body { padding: 22px 24px 26px; text-align: center; }
        .adv-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 19px; line-height: 1.3; margin: 0 0 6px;
        }
        .adv-card__role { color: #CC1579; font-size: 14px; font-weight: 600; margin: 0; }
      `}</style>
    </>
  );
}
