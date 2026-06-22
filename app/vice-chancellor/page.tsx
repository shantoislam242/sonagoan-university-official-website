import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { Quote, ArrowUpRight } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Vice Chancellor',
  description:
    'Message from Prof. Dr. Mohammad Ekramol Islam, Vice Chancellor of Sonargaon University.',
  path: '/vice-chancellor',
});

const PARAGRAPHS = [
  'It is my pleasure to welcome you to Sonargaon University.',
  'Since our founding in 2012, Sonargaon University has grown into a community committed to one simple belief: that quality education should be within reach of every deserving student. Today, with three faculties, a permanent campus, and an alumni network of over 21,000, we continue to pursue excellence in teaching, research, and service to the nation.',
  'At SU, we are guided by the Outcome-Based Education model, preparing graduates who are not only knowledgeable, but capable, ethical, and ready to contribute to a changing world. We invest in our students, our faculty, and our research because we believe that real progress is something we build together.',
  'Whether you are a prospective student, a parent, or a partner, I invite you to be part of our journey. Together, we will rise up, and we will shine.',
];

export default function ViceChancellorPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Vice Chancellor"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Vice Chancellor' },
        ]}
      />

      {/* Hero — portrait + identity */}
      <section style={{ background: '#ffffff', padding: '80px 0 60px' }}>
        <Container className="!max-w-[1200px]">
          <div className="vc-hero">
            <div className="vc-hero__media">
              <span className="vc-hero__tag">Vice Chancellor</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/leadership/ekramol-islam.png" alt="Prof. Dr. Mohammad Ekramol Islam" className="vc-hero__img" />
            </div>
            <div className="vc-hero__text">
              <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
                Leadership
              </span>
              <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(28px, 3.8vw, 44px)', lineHeight: 1.15, marginBottom: 14 }}>
                Prof. Dr. Mohammad Ekramol Islam
              </h2>
              <p style={{ color: '#2B3175', fontSize: 18, fontWeight: 600, margin: '0 0 18px' }}>
                Vice Chancellor, Sonargaon University
              </p>
              <p style={{ color: '#CC1579', fontStyle: 'italic', fontWeight: 600, fontSize: 17, margin: '0 0 22px' }}>
                &ldquo;We will rise up, We will shine.&rdquo;
              </p>
              <p style={{ color: '#5B5B78', fontSize: 16.5, lineHeight: 1.85, margin: 0 }}>
                Prof. Dr. Mohammad Ekramol Islam serves as the Vice Chancellor of Sonargaon University, having
                earlier served the university as its Treasurer. An academic and researcher, he leads SU&rsquo;s
                pursuit of quality teaching, research, and outcome-based education.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* VC's Message */}
      <section style={{ background: '#F6F7FC', padding: '80px 0 90px' }}>
        <Container className="!max-w-[1240px]">
          <div className="vc-letter">
            {/* left brand panel */}
            <aside className="vc-letter__aside">
              <span className="vc-letter__badge"><Quote size={26} /></span>
              <p className="vc-letter__quote">
                We invest in our students, our faculty, and our research because real progress is something we
                build together.
              </p>
              <div className="vc-letter__sign">
                <p className="vc-letter__sign-name">Prof. Dr. Mohammad Ekramol Islam</p>
                <p className="vc-letter__sign-role">Vice Chancellor, Sonargaon University</p>
              </div>
            </aside>

            {/* message body */}
            <div className="vc-letter__body">
              <span className="vc-letter__eyebrow">Message</span>
              <h3 className="vc-letter__title">Vice Chancellor&rsquo;s Message</h3>
              {PARAGRAPHS.map((p, i) => (
                <p key={i} className="vc-letter__p">{p}</p>
              ))}
              <p className="vc-letter__closing">Together, we will rise up, and we will shine.</p>
              <Link href="/vc-office" className="vc-cta">
                Office of the Vice Chancellor <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .vc-hero { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
        @media (min-width: 860px) { .vc-hero { grid-template-columns: 380px 1fr; gap: 56px; } }
        .vc-hero__media {
          position: relative; border-radius: 20px; overflow: hidden; max-width: 380px;
          box-shadow: 0 24px 60px rgba(43,49,117,0.18); border: 1px solid #ECECF3;
        }
        .vc-hero__img { display: block; width: 100%; height: auto; object-fit: cover; }
        .vc-hero__tag {
          position: absolute; top: 16px; left: 16px; z-index: 2;
          background: linear-gradient(135deg, #2B3175, #CC1579); color: #fff;
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 7px 16px; border-radius: 999px; box-shadow: 0 6px 16px rgba(0,0,0,0.18);
        }

        .vc-letter {
          display: grid; grid-template-columns: 1fr; overflow: hidden;
          background: #ffffff; border: 1px solid #ECECF3; border-radius: 22px;
          box-shadow: 0 24px 60px rgba(43,49,117,0.08);
        }
        @media (min-width: 860px) { .vc-letter { grid-template-columns: 380px 1fr; } }

        .vc-letter__aside {
          background: linear-gradient(160deg, #2B3175 0%, #3a2c74 55%, #CC1579 140%);
          color: #fff; padding: clamp(32px, 4vw, 48px);
          display: flex; flex-direction: column;
        }
        .vc-letter__badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 58px; height: 58px; border-radius: 16px; margin-bottom: 26px;
          background: rgba(255,255,255,0.14); color: #fff;
        }
        .vc-letter__quote {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 600; font-style: italic;
          font-size: clamp(19px, 2.2vw, 24px); line-height: 1.55; margin: 0 0 32px; color: #fff;
        }
        .vc-letter__sign { margin-top: auto; padding-top: 22px; border-top: 1px solid rgba(255,255,255,0.2); }
        .vc-letter__sign-name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #fff;
          font-size: 18px; margin: 0 0 4px; line-height: 1.3;
        }
        .vc-letter__sign-role { color: rgba(255,255,255,0.78); font-size: 13.5px; margin: 0; }

        .vc-letter__body { padding: clamp(32px, 4.5vw, 56px); }
        .vc-letter__eyebrow {
          display: inline-block; color: #CC1579; font-weight: 700; font-size: 12.5px;
          letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 10px;
        }
        .vc-letter__title {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175;
          font-size: clamp(24px, 3vw, 32px); margin: 0 0 22px;
        }
        .vc-letter__p { color: #5B5B78; font-size: 16.5px; line-height: 1.9; margin: 0 0 18px; }
        .vc-letter__closing {
          color: #CC1579; font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 600;
          font-size: 18px; margin: 26px 0 30px;
        }

        .vc-cta {
          display: inline-flex; align-items: center; gap: 9px;
          background: #2B3175; color: #fff !important; font-weight: 600; font-size: 15.5px; text-decoration: none;
          padding: 14px 28px; border-radius: 10px; transition: background .2s ease, gap .2s ease;
        }
        .vc-cta:hover { background: #CC1579; color: #fff !important; gap: 13px; }
        .vc-cta svg { color: #fff; }
      `}</style>
    </>
  );
}
