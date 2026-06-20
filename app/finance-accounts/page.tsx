import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { Check, User, Phone } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Office of Finance & Accounts',
  description:
    'The Office of Finance & Accounts manages the financial operations of Sonargaon University: tuition, budgeting, payroll, and financial reporting.',
  path: '/finance-accounts',
});

const RESPONSIBILITIES = [
  'Tuition fee collection & student payment processing',
  'Scholarship & waiver disbursement coordination',
  'University budgeting & financial planning',
  'Payroll & staff payment processing',
  'Accounts payable, receivable & ledger management',
  'Financial reporting & statements',
  'Coordinating with the Purchase office for payments',
  'Supporting internal & external audits',
];

const TEAM = [
  { name: 'Mr. Md. Delwar Hossain', role: 'Officer', phone: '01955558834' },
  { name: 'Mr. Md. Nurtaj Ali', role: 'Officer', phone: '01955558833' },
  { name: 'Mr. Md. Shahidul Islam', role: 'Officer', phone: '01955558894' },
  { name: 'Mr. Md. Anisur Rahman', role: 'Officer', phone: '01955558828' },
];

export default function FinanceAccountsPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Office of Finance & Accounts"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Finance & Accounts' },
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
              The Office of Finance &amp; Accounts manages the financial operations of Sonargaon University.
              From tuition collection and student payments to budgeting, payroll, and financial reporting, the
              office keeps the university&rsquo;s finances accurate, transparent, and well-managed. It supports
              students with fee-related services and works across departments to ensure that SU&rsquo;s
              resources are used responsibly in support of its academic mission.
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
          <div className="fa-resp">
            {RESPONSIBILITIES.map((r) => (
              <div key={r} className="fa-resp__item">
                <span className="fa-resp__icon">
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

          <div className="fa-grid">
            {TEAM.map((m) => (
              <article key={m.name} className="fa-card">
                <div className="fa-card__photo-wrap">
                  <span className="fa-card__placeholder" aria-hidden>
                    <User size={64} strokeWidth={1.4} />
                  </span>
                </div>
                <div className="fa-card__body">
                  <h3 className="fa-card__name">{m.name}</h3>
                  <p className="fa-card__role">{m.role}</p>
                  <a href={`tel:${m.phone}`} className="fa-card__phone">
                    <Phone size={14} />
                    <span>{m.phone}</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .fa-resp { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 700px) { .fa-resp { grid-template-columns: 1fr 1fr; } }
        .fa-resp__item {
          display: flex; align-items: center; gap: 14px;
          background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 12px; padding: 18px 22px;
          color: #2B3175; font-size: 15.5px; font-weight: 500;
        }
        .fa-resp__icon {
          flex-shrink: 0; width: 28px; height: 28px; border-radius: 8px;
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(204,21,121,0.10); color: #CC1579;
        }

        /* flex + font-size:0 so any stray text node (a dev-injected glyph that
           was taking a grid cell and pushing the cards) collapses to zero width;
           the guard hides any injected non-card element. */
        .fa-grid {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 24px;
          margin: 0 auto; font-size: 0;
        }
        .fa-grid > *:not(.fa-card) { display: none !important; }
        .fa-card {
          flex: 0 1 300px; max-width: 300px;
          background: #ffffff; border: 1px solid #ECECF3; overflow: hidden;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06); display: flex; flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        @media (max-width: 599px) { .fa-card { flex-basis: 100%; max-width: 360px; } }
        .fa-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .fa-card__photo-wrap {
          position: relative; border-bottom: 1px solid #ECECF3; background: #EEF0F6;
          overflow: hidden; aspect-ratio: 1 / 1;
        }
        .fa-card__placeholder {
          position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          color: #B7BACB;
          background: repeating-linear-gradient(135deg, #EEF0F6, #EEF0F6 14px, #E9EBF3 14px, #E9EBF3 28px);
        }
        .fa-card__body { padding: 22px 24px 24px; text-align: center; }
        .fa-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 18px; line-height: 1.3; margin: 0 0 5px;
        }
        .fa-card__role { color: #5B5B78; font-size: 14px; line-height: 1.4; margin: 0 0 14px; }
        .fa-card__phone {
          display: inline-flex; align-items: center; gap: 7px; justify-content: center;
          color: #2B3175; font-size: 13.5px; font-weight: 600; text-decoration: none;
          padding-top: 12px; border-top: 1px solid #F0F0F5; width: 100%;
          transition: color .2s ease;
        }
        .fa-card__phone svg { color: #CC1579; flex-shrink: 0; }
        .fa-card__phone:hover { color: #CC1579; }
      `}</style>
    </>
  );
}
