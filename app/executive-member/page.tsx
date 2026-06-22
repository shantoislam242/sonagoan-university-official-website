import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { Quote, ArrowUpRight } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Executive Member, Board of Trustees',
  description:
    'Advocate Umme Salma, Executive Member of the Board of Trustees of Sonargaon University.',
  path: '/executive-member',
});

const PARAGRAPHS = [
  'It is a privilege to serve on the Board of Trustees of Sonargaon University, an institution founded on the belief that quality higher education should be within the reach of every deserving student.',
  'As a member of the Board, I am committed to upholding good governance, transparency, and the values that guide our university. We work to ensure that SU remains a place where students are supported, faculty are empowered, and the wider community benefits from the knowledge created here.',
  'To our students and their families: thank you for placing your trust in Sonargaon University. Your success is the measure of everything we strive to build.',
];

export default function ExecutiveMemberPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Executive Member, Board of Trustees"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Board of Trustees', href: '/board-of-trustees' },
          { label: 'Executive Member' },
        ]}
      />

      {/* Hero — portrait + identity */}
      <section style={{ background: '#ffffff', padding: '80px 0 60px' }}>
        <Container className="!max-w-[1200px]">
          <div className="em-hero">
            <div className="em-hero__media">
              <span className="em-hero__tag">Executive Member</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/leadership/umme-salma.jpeg" alt="Advocate Umme Salma" className="em-hero__img" />
            </div>
            <div className="em-hero__text">
              <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
                Board of Trustees
              </span>
              <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.15, marginBottom: 14 }}>
                Advocate Umme Salma
              </h2>
              <p style={{ color: '#2B3175', fontSize: 18, fontWeight: 600, margin: '0 0 6px' }}>
                Executive Member, Board of Trustees
              </p>
              <p style={{ color: '#5B5B78', fontSize: 16, margin: '0 0 22px' }}>
                Sonargaon University
              </p>
              <p style={{ color: '#5B5B78', fontSize: 16.5, lineHeight: 1.85, margin: 0 }}>
                Advocate Umme Salma serves as an Executive Member of the Board of Trustees of Sonargaon
                University, supporting the governance, growth, and academic mission of the university through
                the Sonargaon University Trust.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Message */}
      <section style={{ background: '#F6F7FC', padding: '80px 0 90px' }}>
        <Container className="!max-w-[1240px]">
          <div className="em-letter">
            <aside className="em-letter__aside">
              <span className="em-letter__badge"><Quote size={26} /></span>
              <p className="em-letter__quote">
                Quality education is the surest investment a nation can make in its own future.
              </p>
              <div className="em-letter__sign">
                <p className="em-letter__sign-name">Advocate Umme Salma</p>
                <p className="em-letter__sign-role">Executive Member, Board of Trustees, SU</p>
              </div>
            </aside>

            <div className="em-letter__body">
              <span className="em-letter__eyebrow">Message</span>
              <h3 className="em-letter__title">A Message from the Board</h3>
              {PARAGRAPHS.map((p, i) => (
                <p key={i} className="em-letter__p">{p}</p>
              ))}
              <p className="em-letter__closing">Together, we will rise up, and we will shine.</p>
              <Link href="/board-of-trustees" className="em-cta">
                Meet the Board of Trustees <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .em-hero { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
        @media (min-width: 860px) { .em-hero { grid-template-columns: 380px 1fr; gap: 56px; } }
        .em-hero__media {
          position: relative; border-radius: 20px; overflow: hidden; max-width: 380px; margin-left: auto; margin-right: auto;
          box-shadow: 0 24px 60px rgba(43,49,117,0.18); border: 1px solid #ECECF3;
        }
        .em-hero__img { display: block; width: 100%; height: auto; object-fit: cover; }
        .em-hero__tag {
          position: absolute; top: 16px; left: 16px; z-index: 2;
          background: linear-gradient(135deg, #2B3175, #CC1579); color: #fff;
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 7px 16px; border-radius: 999px; box-shadow: 0 6px 16px rgba(0,0,0,0.18);
        }

        .em-letter {
          display: grid; grid-template-columns: 1fr; overflow: hidden;
          background: #ffffff; border: 1px solid #ECECF3; border-radius: 22px;
          box-shadow: 0 24px 60px rgba(43,49,117,0.08);
        }
        @media (min-width: 860px) { .em-letter { grid-template-columns: 380px 1fr; } }

        .em-letter__aside {
          background: linear-gradient(160deg, #2B3175 0%, #3a2c74 55%, #CC1579 140%);
          color: #fff; padding: clamp(32px, 4vw, 48px);
          display: flex; flex-direction: column;
        }
        .em-letter__badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 58px; height: 58px; border-radius: 16px; margin-bottom: 26px;
          background: rgba(255,255,255,0.14); color: #fff;
        }
        .em-letter__quote {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 600; font-style: italic;
          font-size: clamp(19px, 2.2vw, 24px); line-height: 1.55; margin: 0 0 32px; color: #fff;
        }
        .em-letter__sign { margin-top: auto; padding-top: 22px; border-top: 1px solid rgba(255,255,255,0.2); }
        .em-letter__sign-name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #fff;
          font-size: 18px; margin: 0 0 4px; line-height: 1.3;
        }
        .em-letter__sign-role { color: rgba(255,255,255,0.78); font-size: 13.5px; margin: 0; }

        .em-letter__body { padding: clamp(32px, 4.5vw, 56px); }
        .em-letter__eyebrow {
          display: inline-block; color: #CC1579; font-weight: 700; font-size: 12.5px;
          letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 10px;
        }
        .em-letter__title {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175;
          font-size: clamp(24px, 3vw, 32px); margin: 0 0 22px;
        }
        .em-letter__p { color: #5B5B78; font-size: 16.5px; line-height: 1.9; margin: 0 0 18px; }
        .em-letter__closing {
          color: #CC1579; font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 600;
          font-size: 18px; margin: 26px 0 30px;
        }

        .em-cta {
          display: inline-flex; align-items: center; gap: 9px;
          background: #2B3175; color: #fff !important; font-weight: 600; font-size: 15.5px; text-decoration: none;
          padding: 14px 28px; border-radius: 10px; transition: background .2s ease, gap .2s ease;
        }
        .em-cta:hover { background: #CC1579; color: #fff !important; gap: 13px; }
        .em-cta svg { color: #fff; }
      `}</style>
    </>
  );
}
