import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { Quote, ArrowUpRight } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Pro-Vice Chancellor',
  description:
    'Message from Prof. Bulbul Ahamed, Pro-Vice Chancellor (Acting) of Sonargaon University.',
  path: '/pro-vice-chancellor',
});

const PARAGRAPHS = [
  'Welcome to Sonargaon University.',
  'A university is, above all, a place of growth, where young minds are challenged, guided, and prepared to take their place in the world. At SU, we work every day to make that experience meaningful: through quality teaching, a supportive academic environment, and a genuine commitment to each student&rsquo;s success.',
  'Built on the Outcome-Based Education model, our programs are designed to develop not just knowledge, but the skills, character, and confidence our graduates need to lead. I am proud to support our faculty and students as we pursue excellence together.',
  'I invite you to discover all that Sonargaon University has to offer, and to join us as we rise up and shine.',
];

export default function ProViceChancellorPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Pro-Vice Chancellor"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Pro-Vice Chancellor' },
        ]}
      />

      {/* Hero — portrait + identity */}
      <section style={{ background: '#ffffff', padding: '80px 0 60px' }}>
        <Container className="!max-w-[1200px]">
          <div className="pvc-hero">
            <div className="pvc-hero__media">
              <span className="pvc-hero__tag">Acting</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/leadership/bulbul-ahamed.jpg" alt="Prof. Bulbul Ahamed" className="pvc-hero__img" />
            </div>
            <div className="pvc-hero__text">
              <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
                Leadership
              </span>
              <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.15, marginBottom: 14 }}>
                Prof. Bulbul Ahamed
              </h2>
              <p style={{ color: '#2B3175', fontSize: 18, fontWeight: 600, margin: '0 0 22px' }}>
                Pro-Vice Chancellor (Acting), Sonargaon University
              </p>
              <p style={{ color: '#5B5B78', fontSize: 16.5, lineHeight: 1.85, margin: 0 }}>
                Prof. Bulbul Ahamed serves as the Pro-Vice Chancellor (Acting) of Sonargaon University, working
                alongside the Vice Chancellor to advance the university&rsquo;s academic standards and its
                student-centred approach to teaching and learning.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Pro-VC's Message */}
      <section style={{ background: '#F6F7FC', padding: '80px 0 90px' }}>
        <Container className="!max-w-[1240px]">
          <div className="pvc-letter">
            {/* left brand panel */}
            <aside className="pvc-letter__aside">
              <span className="pvc-letter__badge"><Quote size={26} /></span>
              <p className="pvc-letter__quote">
                A university is, above all, a place of growth, where young minds are challenged, guided, and
                prepared to take their place in the world.
              </p>
              <div className="pvc-letter__sign">
                <p className="pvc-letter__sign-name">Prof. Bulbul Ahamed</p>
                <p className="pvc-letter__sign-role">Pro-Vice Chancellor (Acting), SU</p>
              </div>
            </aside>

            {/* message body */}
            <div className="pvc-letter__body">
              <span className="pvc-letter__eyebrow">Message</span>
              <h3 className="pvc-letter__title">Pro-Vice Chancellor&rsquo;s Message</h3>
              <p className="pvc-letter__p">Welcome to Sonargaon University.</p>
              <p className="pvc-letter__p">
                A university is, above all, a place of growth, where young minds are challenged, guided, and
                prepared to take their place in the world. At SU, we work every day to make that experience
                meaningful: through quality teaching, a supportive academic environment, and a genuine
                commitment to each student&rsquo;s success.
              </p>
              <p className="pvc-letter__p">
                Built on the Outcome-Based Education model, our programs are designed to develop not just
                knowledge, but the skills, character, and confidence our graduates need to lead. I am proud to
                support our faculty and students as we pursue excellence together.
              </p>
              <p className="pvc-letter__p">
                I invite you to discover all that Sonargaon University has to offer, and to join us as we rise
                up and shine.
              </p>
              <p className="pvc-letter__closing">Together, we rise up and shine.</p>
              <Link href="/pro-vc-office" className="pvc-cta">
                Office of the Pro-VC <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .pvc-hero { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
        @media (min-width: 860px) { .pvc-hero { grid-template-columns: 380px 1fr; gap: 56px; } }
        .pvc-hero__media {
          position: relative; border-radius: 20px; overflow: hidden; max-width: 380px;
          box-shadow: 0 24px 60px rgba(43,49,117,0.18); border: 1px solid #ECECF3;
        }
        .pvc-hero__img { display: block; width: 100%; height: auto; object-fit: cover; }
        .pvc-hero__tag {
          position: absolute; top: 16px; left: 16px; z-index: 2;
          background: linear-gradient(135deg, #2B3175, #CC1579); color: #fff;
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 7px 16px; border-radius: 999px; box-shadow: 0 6px 16px rgba(0,0,0,0.18);
        }

        .pvc-letter {
          display: grid; grid-template-columns: 1fr; overflow: hidden;
          background: #ffffff; border: 1px solid #ECECF3; border-radius: 22px;
          box-shadow: 0 24px 60px rgba(43,49,117,0.08);
        }
        @media (min-width: 860px) { .pvc-letter { grid-template-columns: 380px 1fr; } }

        .pvc-letter__aside {
          background: linear-gradient(160deg, #2B3175 0%, #3a2c74 55%, #CC1579 140%);
          color: #fff; padding: clamp(32px, 4vw, 48px);
          display: flex; flex-direction: column;
        }
        .pvc-letter__badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 58px; height: 58px; border-radius: 16px; margin-bottom: 26px;
          background: rgba(255,255,255,0.14); color: #fff;
        }
        .pvc-letter__quote {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 600; font-style: italic;
          font-size: clamp(19px, 2.2vw, 24px); line-height: 1.55; margin: 0 0 32px; color: #fff;
        }
        .pvc-letter__sign { margin-top: auto; padding-top: 22px; border-top: 1px solid rgba(255,255,255,0.2); }
        .pvc-letter__sign-name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #fff;
          font-size: 19px; margin: 0 0 4px;
        }
        .pvc-letter__sign-role { color: rgba(255,255,255,0.78); font-size: 13.5px; margin: 0; }

        .pvc-letter__body { padding: clamp(32px, 4.5vw, 56px); }
        .pvc-letter__eyebrow {
          display: inline-block; color: #CC1579; font-weight: 700; font-size: 12.5px;
          letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 10px;
        }
        .pvc-letter__title {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175;
          font-size: clamp(24px, 3vw, 32px); margin: 0 0 22px;
        }
        .pvc-letter__p { color: #5B5B78; font-size: 16.5px; line-height: 1.9; margin: 0 0 18px; }
        .pvc-letter__closing {
          color: #CC1579; font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 600;
          font-size: 18px; margin: 26px 0 30px;
        }

        .pvc-cta {
          display: inline-flex; align-items: center; gap: 9px;
          background: #2B3175; color: #fff !important; font-weight: 600; font-size: 15.5px; text-decoration: none;
          padding: 14px 28px; border-radius: 10px; transition: background .2s ease, gap .2s ease;
        }
        .pvc-cta:hover { background: #CC1579; color: #fff !important; gap: 13px; }
        .pvc-cta svg { color: #fff; }
      `}</style>
    </>
  );
}
