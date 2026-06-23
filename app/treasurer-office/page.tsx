import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { Check } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Treasurer Office',
  description:
    'The Treasurer Office oversees the financial governance of Sonargaon University, safeguarding its funds, financial policy, and compliance.',
  path: '/treasurer-office',
});

const RESPONSIBILITIES = [
  'Custodianship of university funds & financial assets',
  'Financial policy, budgeting & oversight',
  'Approving and monitoring major expenditures',
  'Presenting financial reports to the Syndicate & Board of Trustees',
  'Overseeing investments & financial planning',
  'Coordinating with Finance & Accounts and Audit offices',
  'Ensuring financial compliance with UGC & statutory requirements',
];

const HEAD = {
  name: 'Prof. Dr. Mohammad Ekramol Islam',
  role: 'Treasurer (Vice Chancellor)',
  photo: '/assets/images/leadership/ekramol-islam.png',
};

export default function TreasurerOfficePage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Treasurer Office"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Treasurer Office' },
        ]}
      />

      {/* About */}
      <section style={{ background: '#ffffff', padding: '80px 0 40px' }}>
        <Container className="!max-w-[1100px]">
          <div style={{ textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              Governing Bodies
            </span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(26px, 3.4vw, 38px)', lineHeight: 1.25, marginBottom: 18 }}>
              About this Office
            </h2>
            <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.85, margin: 0 }}>
              The Treasurer Office oversees the financial governance of Sonargaon University. As the custodian
              of the university&rsquo;s funds and financial policy, the office ensures that SU&rsquo;s resources
              are managed responsibly, transparently, and in line with the decisions of the Syndicate and Board
              of Trustees. Working alongside the Finance &amp; Accounts and Audit offices, the Treasurer
              safeguards the university&rsquo;s financial health in support of its academic mission.
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
          <div className="tr-resp">
            {RESPONSIBILITIES.map((r) => (
              <div key={r} className="tr-resp__item">
                <span className="tr-resp__icon">
                  <Check size={15} strokeWidth={3} />
                </span>
                <span>{r}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Office Head */}
      <section style={{ background: '#F6F7FC', padding: '80px 0 90px' }}>
        <Container className="!max-w-[1100px]">
          <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(26px, 3.4vw, 38px)', textAlign: 'center', marginBottom: 48 }}>
            Office Head
          </h2>

          <div className="tr-head-wrap">
            <article className="tr-card">
              <div className="tr-card__photo-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={HEAD.photo} alt="" aria-hidden className="tr-card__bg" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={HEAD.photo} alt={HEAD.name} className="tr-card__photo" />
              </div>
              <div className="tr-card__body">
                <h3 className="tr-card__name">{HEAD.name}</h3>
                <p className="tr-card__role">{HEAD.role}</p>
                <span className="tr-card__badge">Treasurer</span>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .tr-resp { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 700px) { .tr-resp { grid-template-columns: 1fr 1fr; } }
        .tr-resp__item {
          display: flex; align-items: center; gap: 14px;
          background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 12px; padding: 18px 22px;
          color: #2B3175; font-size: 15.5px; font-weight: 500;
        }
        .tr-resp__icon {
          flex-shrink: 0; width: 28px; height: 28px; border-radius: 8px;
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(204,21,121,0.10); color: #CC1579;
        }

        .tr-head-wrap { display: flex; justify-content: center; }
        .tr-card { width: 100%; max-width: 330px;
          background: #ffffff; border: 1px solid #ECECF3; overflow: hidden;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06); display: flex; flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .tr-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .tr-card__photo-wrap {
          position: relative; border-bottom: 1px solid #ECECF3; background: #EEF0F6;
          overflow: hidden; aspect-ratio: 1 / 1;
        }
        .tr-card__bg {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          object-position: center; transform: scale(1.15); filter: blur(18px) brightness(0.92); z-index: 0;
        }
        .tr-card__photo {
          position: relative; z-index: 1; width: 100%; height: 100%;
          object-fit: contain; object-position: center; display: block;
        }
        .tr-card__body { padding: 22px 24px 24px; text-align: center; }
        .tr-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 18px; line-height: 1.3; margin: 0 0 5px;
        }
        .tr-card__role { color: #5B5B78; font-size: 14px; line-height: 1.4; margin: 0 0 12px; }
        .tr-card__badge {
          display: inline-block; background: linear-gradient(135deg, #2B3175, #CC1579);
          color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          padding: 6px 14px; border-radius: 999px;
        }
      `}</style>
    </>
  );
}
