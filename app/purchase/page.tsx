import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { Check } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Office of the Purchase',
  description:
    'The Office of the Purchase manages procurement of goods, equipment, and services across Sonargaon University — transparently, cost-effectively, and on time.',
  path: '/purchase',
});

const RESPONSIBILITIES = [
  'Procurement of goods, equipment & services',
  'Vendor sourcing, evaluation & management',
  'Quotation collection & tender processing',
  'Purchase order preparation & approval',
  'Coordinating purchases with departments & faculties',
  'Ensuring transparency & cost control in procurement',
  'Maintaining procurement records & documentation',
  'Coordinating with Finance & Accounts for payments',
];

const P = '/assets/images/purchase';

const TEAM = [
  { name: 'Md. Abdullah Jahangir', role: 'Officer (Store)', photo: `${P}/abdullah-jahangir.png` },
  { name: 'Abdur Rahman', role: 'Asst. Purchase Officer', photo: `${P}/abdur-rahman.png` },
];

export default function PurchasePage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Office of the Purchase"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Purchase' },
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
              The Office of the Purchase manages the procurement of goods, equipment, and services across
              Sonargaon University. From academic and laboratory equipment to office supplies and campus
              materials, the office ensures that every purchase is made transparently, cost-effectively, and on
              time. Working closely with the Finance &amp; Accounts and Planning &amp; Development offices, it
              supports the smooth day-to-day operation of every department and faculty.
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
          <div className="pur-resp">
            {RESPONSIBILITIES.map((r) => (
              <div key={r} className="pur-resp__item">
                <span className="pur-resp__icon">
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

          <div className="pur-grid">
            {TEAM.map((m) => (
              <article key={m.name} className="pur-card">
                <div className="pur-card__photo-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt="" aria-hidden className="pur-card__bg" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt={m.name} className="pur-card__photo" />
                </div>
                <div className="pur-card__body">
                  <h3 className="pur-card__name">{m.name}</h3>
                  <p className="pur-card__role">{m.role}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .pur-resp { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 700px) { .pur-resp { grid-template-columns: 1fr 1fr; } }
        .pur-resp__item {
          display: flex; align-items: center; gap: 14px;
          background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 12px; padding: 18px 22px;
          color: #2B3175; font-size: 15.5px; font-weight: 500;
        }
        .pur-resp__icon {
          flex-shrink: 0; width: 28px; height: 28px; border-radius: 8px;
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(204,21,121,0.10); color: #CC1579;
        }

        .pur-grid {
          display: grid; grid-template-columns: 1fr; gap: 24px;
          margin: 0 auto; justify-content: center; max-width: 660px;
        }
        @media (min-width: 560px) { .pur-grid { grid-template-columns: repeat(2, minmax(0, 300px)); } }

        .pur-card {
          background: #ffffff; border: 1px solid #ECECF3; overflow: hidden;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06); display: flex; flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .pur-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .pur-card__photo-wrap {
          position: relative; border-bottom: 1px solid #ECECF3; background: #EEF0F6;
          overflow: hidden; aspect-ratio: 1 / 1;
        }
        .pur-card__bg {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          object-position: center; transform: scale(1.15); filter: blur(18px) brightness(0.92); z-index: 0;
        }
        .pur-card__photo {
          position: relative; z-index: 1; width: 100%; height: 100%;
          object-fit: contain; object-position: center; display: block;
        }
        .pur-card__body { padding: 22px 24px 24px; text-align: center; }
        .pur-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 18px; line-height: 1.3; margin: 0 0 5px;
        }
        .pur-card__role { color: #5B5B78; font-size: 14px; line-height: 1.4; margin: 0; }
      `}</style>
    </>
  );
}
