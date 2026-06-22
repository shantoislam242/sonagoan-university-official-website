import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { Quote, ArrowUpRight } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Chairman, Board of Trustees',
  description:
    'Message from Engr. Abdul Aziz, Founder and Chairman of the Board of Trustees of Sonargaon University.',
  path: '/chairman',
});

const PARAGRAPHS = [
  'It gives me immense pride to welcome you to Sonargaon University. When we established this institution, our dream was simple yet ambitious: to bring world-class, outcome-based education within the reach of every capable student, regardless of their economic background.',
  'Sonargaon University was founded on the belief that quality education is the surest path to national progress. Through the Sonargaon University Trust, we set out to build a university where engineering, business, law, and the arts are taught with equal care, where teachers inspire, and where students are prepared not just for a degree, but for life and leadership.',
  'To our students: this university is yours. Dream boldly, work with integrity, and never stop learning. The skills and values you build here will shape not only your own future, but the future of Bangladesh.',
];

export default function ChairmanPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Chairman, Board of Trustees"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Chairman' },
        ]}
      />

      {/* Hero — portrait + identity */}
      <section style={{ background: '#ffffff', padding: '80px 0 60px' }}>
        <Container className="!max-w-[1200px]">
          <div className="chm-hero">
            <div className="chm-hero__media">
              <span className="chm-hero__tag">Founder</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/leadership/abdul-aziz.jpeg" alt="Engr. Abdul Aziz" className="chm-hero__img" />
            </div>
            <div className="chm-hero__text">
              <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
                Leadership
              </span>
              <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.15, marginBottom: 14 }}>
                Engr. Abdul Aziz
              </h2>
              <p style={{ color: '#2B3175', fontSize: 18, fontWeight: 600, margin: '0 0 6px' }}>
                Chairman, Board of Trustees
              </p>
              <p style={{ color: '#5B5B78', fontSize: 16, margin: '0 0 22px' }}>
                Founder, Sonargaon University
              </p>
              <p style={{ color: '#5B5B78', fontSize: 16.5, lineHeight: 1.85, margin: 0 }}>
                Engr. Abdul Aziz is the founder of Sonargaon University and the Chairman of its Board of
                Trustees. Through the Sonargaon University Trust &mdash; a registered, non-political,
                non-profit voluntary organization &mdash; he led the establishment of a university dedicated
                to affordable, quality higher education for the students of Bangladesh.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Chairman's Message */}
      <section style={{ background: '#F6F7FC', padding: '80px 0 90px' }}>
        <Container className="!max-w-[1240px]">
          <div className="chm-letter">
            {/* left brand panel */}
            <aside className="chm-letter__aside">
              <span className="chm-letter__badge"><Quote size={26} /></span>
              <p className="chm-letter__quote">
                A university is not built of bricks alone &mdash; it is built of dreams, discipline, and the
                determination to serve.
              </p>
              <div className="chm-letter__sign">
                <p className="chm-letter__sign-name">Engr. Abdul Aziz</p>
                <p className="chm-letter__sign-role">Founder &amp; Chairman, Board of Trustees</p>
              </div>
            </aside>

            {/* message body */}
            <div className="chm-letter__body">
              <span className="chm-letter__eyebrow">Message</span>
              <h3 className="chm-letter__title">Chairman&rsquo;s Message</h3>
              {PARAGRAPHS.map((p, i) => (
                <p key={i} className="chm-letter__p">{p}</p>
              ))}
              <p className="chm-letter__closing">Together, we will rise up, and we will shine.</p>
              <Link href="/board-of-trustees" className="chm-cta">
                Meet the Board of Trustees <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .chm-hero { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
        @media (min-width: 860px) { .chm-hero { grid-template-columns: 380px 1fr; gap: 56px; } }
        .chm-hero__media {
          position: relative; border-radius: 20px; overflow: hidden; max-width: 380px; margin-left: auto; margin-right: auto;
          box-shadow: 0 24px 60px rgba(43,49,117,0.18); border: 1px solid #ECECF3;
        }
        .chm-hero__img { display: block; width: 100%; height: auto; object-fit: cover; }
        .chm-hero__tag {
          position: absolute; top: 16px; left: 16px; z-index: 2;
          background: linear-gradient(135deg, #2B3175, #CC1579); color: #fff;
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 7px 16px; border-radius: 999px; box-shadow: 0 6px 16px rgba(0,0,0,0.18);
        }

        .chm-letter {
          display: grid; grid-template-columns: 1fr; overflow: hidden;
          background: #ffffff; border: 1px solid #ECECF3; border-radius: 22px;
          box-shadow: 0 24px 60px rgba(43,49,117,0.08);
        }
        @media (min-width: 860px) { .chm-letter { grid-template-columns: 380px 1fr; } }

        .chm-letter__aside {
          background: linear-gradient(160deg, #2B3175 0%, #3a2c74 55%, #CC1579 140%);
          color: #fff; padding: clamp(32px, 4vw, 48px);
          display: flex; flex-direction: column;
        }
        .chm-letter__badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 58px; height: 58px; border-radius: 16px; margin-bottom: 26px;
          background: rgba(255,255,255,0.14); color: #fff;
        }
        .chm-letter__quote {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 600; font-style: italic;
          font-size: clamp(19px, 2.2vw, 24px); line-height: 1.55; margin: 0 0 32px; color: #fff;
        }
        .chm-letter__sign { margin-top: auto; padding-top: 22px; border-top: 1px solid rgba(255,255,255,0.2); }
        .chm-letter__sign-name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #fff;
          font-size: 19px; margin: 0 0 4px;
        }
        .chm-letter__sign-role { color: rgba(255,255,255,0.78); font-size: 13.5px; margin: 0; }

        .chm-letter__body { padding: clamp(32px, 4.5vw, 56px); }
        .chm-letter__eyebrow {
          display: inline-block; color: #CC1579; font-weight: 700; font-size: 12.5px;
          letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 10px;
        }
        .chm-letter__title {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175;
          font-size: clamp(24px, 3vw, 32px); margin: 0 0 22px;
        }
        .chm-letter__p { color: #5B5B78; font-size: 16.5px; line-height: 1.9; margin: 0 0 18px; }
        .chm-letter__closing {
          color: #CC1579; font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 600;
          font-size: 18px; margin: 26px 0 30px;
        }

        .chm-cta {
          display: inline-flex; align-items: center; gap: 9px;
          background: #2B3175; color: #fff !important; font-weight: 600; font-size: 15.5px; text-decoration: none;
          padding: 14px 28px; border-radius: 10px; transition: background .2s ease, gap .2s ease;
        }
        .chm-cta:hover { background: #CC1579; color: #fff !important; gap: 13px; }
        .chm-cta svg { color: #fff; }
      `}</style>
    </>
  );
}
