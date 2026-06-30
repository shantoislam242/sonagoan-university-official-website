import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { ArrowUpRight, Phone } from 'lucide-react';
import TuitionExplorer from './TuitionExplorer';

export const metadata = buildMetadata({
  title: 'Tuition & Fees',
  description:
    'Sonargaon University tuition and fees for Fall 2026, with per-program costs, shift options, and merit-based waivers across undergraduate and postgraduate programs.',
  path: '/tuition-fees',
});

export default function TuitionFeesPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Tuition & Fees"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Admission', href: '/admission' },
          { label: 'Tuition & Fees' },
        ]}
      />

      {/* Intro */}
      <section style={{ background: '#ffffff', padding: '70px 0 36px' }}>
        <Container className="!max-w-[1080px]">
          <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
            <span className="tff-chip">Fall 2026 &middot; Effective July 05, 2026</span>
            <h2 className="tff-title">A transparent look at the cost of studying at SU</h2>
            <p className="tff-lead">
              Explore program-specific tuition and fees across all faculties. Choose a program level below to see
              credit-based costs, available shifts, and the merit waivers that can significantly lower your total,
              then plan with confidence.
            </p>
          </div>
        </Container>
      </section>

      {/* Explorer */}
      <section style={{ background: '#ffffff', padding: '10px 0 30px' }}>
        <Container>
          <TuitionExplorer />
        </Container>
      </section>

      {/* Assistance */}
      <section style={{ background: '#ffffff', padding: '40px 0 90px' }}>
        <Container className="!max-w-[1080px]">
          <div className="tff-help">
            <span className="tff-help__eyebrow">Need a hand?</span>
            <h2 className="tff-help__title">Need help estimating your fees?</h2>
            <p className="tff-help__text">
              Our admission team can walk you through program costs, waivers, and flexible payment options.
            </p>
            <div className="tff-help__actions">
              <Link href="/admission" className="tff-btn tff-btn--solid">
                Admission Info <ArrowUpRight size={16} />
              </Link>
              <Link href="/contact" className="tff-btn tff-btn--ghost">
                <Phone size={16} /> Contact Us
              </Link>
            </div>
          </div>
          <p className="tff-disclaimer">
            Figures shown are for Fall 2026 and are subject to change. Please confirm the latest fees with the
            Admission Office before making a payment.
          </p>
        </Container>
      </section>

      {/* Waiver banner */}
      <section style={{ background: '#F6F7FC', padding: '60px 0' }}>
        <Container className="!max-w-[1080px]">
          <div className="tff-waiver">
            <div className="tff-waiver__body">
              <h3>Merit waivers can significantly lower these costs</h3>
              <p>
                SU offers result-based tuition waivers, full-payment discounts, and a 100% Golden A+ waiver.
                See how much you could save.
              </p>
            </div>
            <Link href="/waiver-policy" className="tff-btn tff-btn--solid tff-waiver__btn">
              Waiver Policy <ArrowUpRight size={16} />
            </Link>
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .tff-chip { display: inline-block; background: rgba(204,21,121,0.10); color: #CC1579; font-weight: 700; font-size: 12px; letter-spacing: 0.08em; padding: 6px 16px; border-radius: 999px; margin-bottom: 16px; }
        .tff-eyebrow { display: inline-block; color: #CC1579; font-weight: 700; font-size: 12.5px; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 10px; }
        .tff-title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(26px, 3.5vw, 40px); line-height: 1.2; margin: 0 0 16px; }
        .tff-lead { color: #5B5B78; font-size: 17px; line-height: 1.85; margin: 0; }

        .tff-waiver {
          display: grid; grid-template-columns: 1fr; gap: 14px; align-items: center;
          background: #fff; border: 1px solid #ECECF3; border-left: 4px solid #CC1579; border-radius: 14px;
          padding: 18px 24px; box-shadow: 0 10px 26px rgba(43,49,117,0.05);
        }
        @media (min-width: 760px) { .tff-waiver { grid-template-columns: 1fr auto; gap: 24px; } }
        .tff-waiver__body h3 { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 16.5px; margin: 0 0 4px; }
        .tff-waiver__body p { color: #5B5B78; font-size: 14px; line-height: 1.6; margin: 0; }
        .tff-waiver__btn { white-space: nowrap; }

        .tff-help {
          position: relative; overflow: hidden; text-align: center; max-width: 980px; margin: 0 auto;
          background: #fff; border: 1px solid #ECECF3; border-radius: 20px;
          padding: clamp(28px, 3.5vw, 38px) clamp(28px, 5vw, 64px);
          box-shadow: 0 18px 44px rgba(43,49,117,0.07);
        }
        .tff-help::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #2B3175, #CC1579); }
        .tff-help__eyebrow { display: inline-block; color: #CC1579; font-weight: 700; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 12px; }
        .tff-help__title { color: #2B3175; font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; font-size: clamp(22px, 3vw, 28px); margin: 0 0 10px; }
        .tff-help__text { color: #5B5B78; font-size: 15.5px; line-height: 1.75; margin: 0 auto 26px; max-width: none; }
        .tff-help__actions { display: inline-flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
        .tff-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; white-space: nowrap; font-weight: 600; font-size: 14.5px; padding: 13px 26px; border-radius: 11px; text-decoration: none; transition: gap .2s ease, transform .2s ease, background .2s ease; }
        .tff-btn--solid { background: #2B3175; color: #fff !important; }
        .tff-btn--solid:hover { background: #CC1579; }
        .tff-btn--ghost { background: #fff; color: #2B3175 !important; border: 1px solid #E2E3ED; }
        .tff-btn--ghost:hover { border-color: #2B3175; }
        .tff-btn:hover { gap: 12px; transform: translateY(-2px); }
        @media (max-width: 540px) {
          .tff-help__actions { display: flex; flex-wrap: nowrap; gap: 10px; width: 100%; }
          .tff-help__actions .tff-btn { flex: 1 1 0; padding: 11px 14px; font-size: 13.5px; gap: 6px; }
          .tff-help__actions .tff-btn svg { width: 14px; height: 14px; }
        }
        .tff-disclaimer { color: #8A8AA3; font-size: 13px; line-height: 1.7; text-align: center; margin: 26px auto 0; max-width: 760px; }
      `}</style>
    </>
  );
}
